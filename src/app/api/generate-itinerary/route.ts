import { NextRequest, NextResponse } from "next/server";
import { Itinerary, TravelRequest, ItineraryDay, ItineraryActivity, HotelInfo, MealInfo, WeatherInfo, BudgetBreakdown, TransportationInfo } from "@/types/travel";
export const dynamic = "force-dynamic";

const API_KEY = process.env.COZE_WORKLOAD_IDENTITY_API_KEY || "";
const SEARCH_BASE_URL = process.env.COZE_INTEGRATION_BASE_URL || "https://integration.coze.cn";
const MODEL_BASE_URL = process.env.COZE_INTEGRATION_MODEL_BASE_URL || "https://integration.coze.cn/api/v3";

// 搜索目的地最新实时信息
async function searchDestinationInfo(city: string): Promise<string> {
  try {
    const queries = [
      `${city} 旅游攻略 必去景点 推荐`,
      `${city} 美食餐厅 特色小吃 住宿推荐`,
      `${city} 门票价格 交通指南`,
    ];

    const searchPromises = queries.map(async (query) => {
      try {
        const res = await fetch(`${SEARCH_BASE_URL}/api/search_api/web_search`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Query: query,
            SearchType: "web",
            Count: 5,
            NeedSummary: true,
          }),
        });
        if (!res.ok) return null;
        return await res.json();
      } catch {
        return null;
      }
    });

    const results = await Promise.all(searchPromises);
    const contextParts: string[] = [];

    results.forEach((res, idx) => {
      if (!res) return;
      const label = ["景点攻略", "美食住宿", "门票交通"][idx];
      contextParts.push(`\n=== ${label} ===`);

      const data = res.data?.web_search_result || res.data || {};
      if (data.summary) {
        contextParts.push(`概要：${data.summary}`);
      }

      const items = data.results?.slice(0, 5) || [];
      items.forEach((item: { title?: string; snippet?: string }) => {
        if (item.snippet) {
          contextParts.push(`- ${item.title || ""}: ${item.snippet.slice(0, 300)}`);
        }
      });
    });

    return contextParts.join("\n");
  } catch {
    return "";
  }
}

// 解析 SSE 流响应，拼接所有 content（兼容思考模式模型）
function parseSSEStream(text: string): string {
  const lines = text.split("\n");
  let content = "";
  let reasoning = "";
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed.startsWith("data: ")) continue;
    const jsonStr = trimmed.slice(6).trim();
    if (jsonStr === "[DONE]") continue;
    try {
      const chunk = JSON.parse(jsonStr);
      const delta = chunk.choices?.[0]?.delta;
      if (delta && typeof delta.content === "string") {
        content += delta.content;
      }
      if (delta && typeof delta.reasoning_content === "string") {
        reasoning += delta.reasoning_content;
      }
    } catch {
      // 忽略无法解析的行
    }
  }
  return content || reasoning;
}

// 调用大模型生成行程
async function generateItineraryWithLLM(prompt: string): Promise<string> {
  const res = await fetch(`${MODEL_BASE_URL}/chat/completions`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "deepseek-v3-2-251201", // 无思考模式，直接输出 content，避免 reasoning_content 占用 token
      messages: [
        {
          role: "system",
          content:
            "你是一位专业的旅行规划师，精通全球旅游目的地。你回复时必须只输出纯 JSON 数组，不要有任何前言、后语或 Markdown 格式标记。",
        },
        { role: "user", content: prompt },
      ],
      temperature: 0.7,
      max_tokens: 8192,
      stream: true,
    }),
  });

  if (!res.ok) {
    const errorText = await res.text().catch(() => "");
    throw new Error(`LLM API error ${res.status}: ${errorText.slice(0, 200)}`);
  }

  const text = await res.text();
  const result = parseSSEStream(text);
  if (!result || result.trim().length === 0) {
    throw new Error("LLM returned empty content");
  }
  return result;
}

// 解析大模型返回的 JSON，带多种容错策略
function extractJsonArray(text: string): unknown[] | null {
  const codeBlockMatch = text.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (codeBlockMatch) {
    try {
      return JSON.parse(codeBlockMatch[1].trim()) as unknown[];
    } catch {
      // ignore
    }
  }

  // 策略1：直接查找最外层 [...]
  const start = text.indexOf("[");
  const end = text.lastIndexOf("]");
  if (start !== -1 && end !== -1 && end > start) {
    const candidate = text.slice(start, end + 1);
    try {
      return JSON.parse(candidate) as unknown[];
    } catch {
      // 策略2：清理常见的非法字符后重试
      try {
        const cleaned = candidate
          .replace(/\r\n/g, "\\n")
          .replace(/\n/g, "\\n")
          .replace(/\t/g, "\\t");
        return JSON.parse(cleaned) as unknown[];
      } catch {
        // ignore
      }

      // 策略3：尝试截断到最后的合法数组结构
      let lastValidEnd = end;
      while (lastValidEnd > start) {
        try {
          const truncated = candidate.slice(0, lastValidEnd + 1);
          return JSON.parse(truncated) as unknown[];
        } catch {
          lastValidEnd--;
          if (lastValidEnd < start + 10) break;
        }
      }
    }
  }

  // 策略4：直接解析整个文本
  try {
    const parsed = JSON.parse(text.trim());
    if (Array.isArray(parsed)) return parsed;
    if (parsed && Array.isArray((parsed as Record<string, unknown>).days)) {
      return (parsed as Record<string, unknown>).days as unknown[];
    }
  } catch {
    // ignore
  }

  return null;
}

function buildPrompt(request: TravelRequest, searchContext: string): string {
  const destinations = request.destinations.join("、");
  const travelTypeMap: Record<string, string> = {
    family: "家庭亲子游",
    colleague: "同事团建",
    friends: "朋友结伴",
    honeymoon: "蜜月旅行",
    couple: "情侣出游",
    solo: "独自旅行",
  };
  const travelType = travelTypeMap[request.travelType] || request.travelType;
  const prefs = request.preferences?.length ? request.preferences.join("、") : "无特殊偏好";
  const specialReq = request.specialRequirements || "无";

  const contextBlock = searchContext
    ? `\n\n【以下是从互联网搜索到的该目的地最新实时信息，请优先参考这些数据来规划行程】\n${searchContext}\n`
    : "";

  return `你是一位资深旅行规划师，擅长为全球旅行者制定 detailed 的每日行程。

请为以下行程规划每日游玩活动：

【目的地】${destinations}
【天数】${request.days}天
【出发日期】${request.departureDate}
【出行人数】${request.travelers.adults}成人${request.travelers.children > 0 ? " · " + request.travelers.children + "儿童" : ""}${request.travelers.seniors > 0 ? " · " + request.travelers.seniors + "老人" : ""}
【旅行类型】${travelType}
【偏好】${prefs}
【特殊要求】${specialReq}${contextBlock}

请生成一个 JSON 数组，每天一个对象，格式如下：
[
  {
    "day": 1,
    "date": "YYYY-MM-DD",
    "title": "当天主题标题（如：抵达与初探/历史文化深度游）",
    "activities": [
      {
        "time": "09:00",
        "title": "活动名称（必须是真实存在的景点或餐厅）",
        "description": "详细描述，2-3句话",
        "duration": "建议时长，如2小时",
        "location": "具体地点名称",
        "type": "sightseeing",
        "price": 80
      }
    ]
  }
]

要求：
1. 景点必须是真实存在的，不要编造
2. 路线合理，不要绕路，考虑地理位置
3. 每天安排3-6个活动，包含用餐时间
4. 第一天以抵达、入住、市区初探为主
5. 最后一天安排购物/最后景点 + 返程
6. 中间天数深度游览核心景点
7. 考虑季节特点（${request.departureDate}出发）
8. 费用估算合理（人民币）
9. 只返回 JSON 数组，不要任何其他文字、不要 Markdown 代码块标记
10. description 字段中不要使用英文双引号（"），请使用中文引号（" "）或避免使用引号
11. 确保 JSON 语法完全合法，所有字符串正确闭合

日期从 ${request.departureDate} 开始，共 ${request.days} 天。`;
}

function getWeatherForDate(dateStr: string, cityName: string): WeatherInfo {
  const date = new Date(dateStr);
  const month = date.getMonth() + 1;

  const conditions: WeatherInfo["condition"][] = ["sunny", "cloudy", "rainy", "sunny", "cloudy"];
  const hash = (cityName.charCodeAt(0) + month * 7) % conditions.length;
  const condition = conditions[hash];

  let highTemp = 25;
  let lowTemp = 15;
  let description = "晴朗舒适";
  let clothingAdvice = "建议穿轻便舒适的衣物";

  if (month <= 2 || month >= 12) {
    highTemp = 8; lowTemp = -2;
    description = "寒冷干燥";
    clothingAdvice = "建议穿羽绒服，注意保暖";
  } else if (month <= 4) {
    highTemp = 18; lowTemp = 8;
    description = "春意盎然";
    clothingAdvice = "建议穿外套，早晚较凉";
  } else if (month <= 6) {
    highTemp = 28; lowTemp = 18;
    description = "温暖宜人";
    clothingAdvice = "建议穿短袖加薄外套";
  } else if (month <= 8) {
    highTemp = 32; lowTemp = 24;
    description = "炎热潮湿";
    clothingAdvice = "建议穿透气轻薄衣物，注意防晒";
  } else if (month <= 10) {
    highTemp = 22; lowTemp = 12;
    description = "秋高气爽";
    clothingAdvice = "建议穿长袖，早晚加外套";
  }

  if (condition === "rainy") {
    description = "有雨，出行请备伞";
    clothingAdvice += "，携带雨具";
    highTemp -= 3;
  } else if (condition === "cloudy") {
    description = "多云，气温适宜";
  }

  return {
    date: dateStr,
    highTemp,
    lowTemp,
    condition,
    description,
    clothingAdvice,
  };
}

function generateHotel(cityName: string): HotelInfo {
  const starRating = 4;
  const pricePerNight = cityName.includes("东京") || cityName.includes("巴黎") || cityName.includes("纽约") ? 1200 : 600;
  return {
    name: `${cityName}中心商务酒店`,
    starRating,
    location: `${cityName}市中心`,
    pricePerNight,
    amenities: ["免费WiFi", "空调", "24小时前台", "行李寄存"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
    rating: 4.5,
    reviews: 1200,
    cancelable: true,
  };
}

function generateMeals(cityName: string, dateStr: string, isFirstDay: boolean, isLastDay: boolean): MealInfo[] {
  const meals: MealInfo[] = [];
  const cuisine = ["北京", "成都", "西安", "重庆", "广州", "杭州", "苏州"].some((c) => cityName.includes(c)) ? "中式料理" : "当地特色料理";

  if (!isFirstDay) {
    meals.push({
      time: "08:00",
      type: "breakfast",
      restaurantName: "酒店自助早餐",
      cuisine: "自助早餐",
      pricePerPerson: 0,
      recommendedDishes: ["当地特色早点", "粥品", "小菜", "面包咖啡"],
      address: "酒店内",
      rating: 4.2,
      image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=600&q=80",
    });
  }

  if (!isLastDay) {
    meals.push({
      time: "12:30",
      type: "lunch",
      restaurantName: `${cityName}人气餐厅`,
      cuisine,
      pricePerPerson: 80,
      recommendedDishes: ["招牌菜", "特色小吃", "时令菜品"],
      address: `${cityName}商业区`,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80",
    });
  }

  if (!isLastDay) {
    meals.push({
      time: "18:30",
      type: "dinner",
      restaurantName: `${cityName}特色餐厅`,
      cuisine,
      pricePerPerson: 120,
      recommendedDishes: ["当地名菜", "特色汤品", "招牌甜点"],
      address: `${cityName}美食街`,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80",
    });
  }

  return meals;
}

function generateTransportation(request: TravelRequest): TransportationInfo[] {
  const dest = request.destinations[0] || "目的地";
  return [
    {
      type: request.transportationType === "self-drive" ? "private" : request.transportationType === "train" ? "train" : "flight",
      from: "出发城市",
      to: dest,
      departureTime: `${request.departureDate} 08:00`,
      arrivalTime: `${request.departureDate} 12:00`,
      price: 800,
      operator: request.transportationType === "train" ? "中国铁路" : "航空公司",
      details: request.transportationType === "train" ? "高铁直达" : "直飞航班",
    },
  ];
}

function calculateBudget(days: number, travelers: number, cityName: string): BudgetBreakdown {
  const isInternational = !["北京", "上海", "成都", "西安", "重庆", "广州", "杭州", "苏州", "南京", "武汉", "长沙", "厦门", "青岛", "大连", "昆明", "桂林", "拉萨", "乌鲁木齐", "哈尔滨", "三亚"].some((c) => cityName.includes(c));
  const basePerDay = isInternational ? 2000 : 800;
  const accommodation = basePerDay * 0.4 * days * travelers;
  const dining = basePerDay * 0.25 * days * travelers;
  const tickets = basePerDay * 0.15 * days * travelers;
  const transport = basePerDay * 0.1 * days * travelers + (isInternational ? 3000 * travelers : 800 * travelers);
  const service = basePerDay * 0.1 * days * travelers;
  const total = Math.round(accommodation + dining + tickets + transport + service);

  return {
    total,
    currency: "CNY",
    items: [
      { category: "accommodation", name: "住宿费用", amount: Math.round(accommodation) },
      { category: "dining", name: "餐饮费用", amount: Math.round(dining) },
      { category: "tickets", name: "景点门票", amount: Math.round(tickets) },
      { category: "transportation", name: "交通费用", amount: Math.round(transport) },
      { category: "service", name: "服务费用", amount: Math.round(service) },
    ],
  };
}

function generateHighlights(days: ItineraryDay[], cityName: string): string[] {
  const highlights: string[] = [];
  const allTitles = days.flatMap((d) => d.activities.map((a) => a.title));

  const uniqueTitles = [...new Set(allTitles)].slice(0, 6);
  uniqueTitles.forEach((title) => {
    if (!title.includes("早餐") && !title.includes("午餐") && !title.includes("晚餐") && !title.includes("入住") && !title.includes("退房")) {
      highlights.push(`深度体验${title}，感受${cityName}独特魅力`);
    }
  });

  if (highlights.length < 4) {
    highlights.push(`探索${cityName}地道美食，品味当地饮食文化`);
    highlights.push(`合理安排行程节奏，兼顾深度游览与休闲放松`);
  }

  return highlights.slice(0, 6);
}

function generateTips(request: TravelRequest, cityName: string): string[] {
  const tips: string[] = [];
  const isInternational = !["北京", "上海", "成都", "西安", "重庆", "广州", "杭州", "苏州", "南京", "武汉", "长沙", "厦门", "青岛", "大连", "昆明", "桂林", "拉萨", "乌鲁木齐", "哈尔滨", "三亚"].some((c) => cityName.includes(c));

  if (isInternational) {
    tips.push("请提前办理好签证和相关入境手续，确保护照有效期在6个月以上");
    tips.push("建议购买境外旅行保险，以应对突发状况");
    tips.push("提前了解当地货币汇率，可准备少量当地货币现金");
  } else {
    tips.push("出行前请检查身份证等有效证件，建议携带充电宝");
    tips.push("热门景点建议提前预约门票，避免排队等待");
  }

  if (request.travelers.children > 0) {
    tips.push("带儿童出行请准备常用药品和零食，注意防晒和补水");
  }
  if (request.travelers.seniors > 0) {
    tips.push("有老人同行请合理安排步行距离，注意休息和保暖");
  }

  tips.push(`尊重${cityName}当地风俗习惯，文明旅游`);
  tips.push("行程中的时间和费用仅供参考，实际情况可能因季节和天气有所调整");

  return tips;
}

export async function POST(request: NextRequest) {
  try {
    const travelRequest: TravelRequest = await request.json();

    if (!travelRequest.destinations?.length) {
      return NextResponse.json({ error: "目的地不能为空" }, { status: 400 });
    }

    // 1. 先搜索目的地最新实时信息
    const mainCity = travelRequest.destinations[0];
    console.log("[API] Start generating itinerary for:", mainCity);
    const searchContext = await searchDestinationInfo(mainCity);
    console.log("[API] Search context length:", searchContext.length);

    // 2. 调用大模型生成行程（注入搜索到的实时信息）
    const prompt = buildPrompt(travelRequest, searchContext);
    console.log("[API] Prompt length:", prompt.length);
    const rawText = await generateItineraryWithLLM(prompt);
    console.log("[API] LLM raw text length:", rawText.length, "first 200:", rawText.slice(0, 200));

    const parsedDays = extractJsonArray(rawText);
    console.log("[API] Parsed days count:", parsedDays?.length);

    if (!parsedDays || !Array.isArray(parsedDays) || parsedDays.length === 0) {
      console.error("[API] LLM response parse failed. Full raw text length:", rawText.length);
      console.error("[API] First 500 chars:", rawText.slice(0, 500));
      console.error("[API] Last 500 chars:", rawText.slice(-500));
      return NextResponse.json(
        { error: "AI 行程生成失败，请稍后重试" },
        { status: 500 }
      );
    }

    // 构建完整的 Itinerary 对象
    const days: ItineraryDay[] = parsedDays.map((d: unknown, index: number) => {
      const dayData = d as Record<string, unknown>;
      const isFirstDay = index === 0;
      const isLastDay = index === parsedDays.length - 1;
      const dateStr = String(dayData.date || "");

      const rawActivities = Array.isArray(dayData.activities) ? dayData.activities : [];
      const activities: ItineraryActivity[] = rawActivities.map((a: unknown) => {
        const act = a as Record<string, unknown>;
        return {
          time: String(act.time || "09:00"),
          type: (act.type as ItineraryActivity["type"]) || "sightseeing",
          title: String(act.title || "游览"),
          description: String(act.description || ""),
          duration: String(act.duration || "1小时"),
          location: String(act.location || mainCity),
          price: typeof act.price === "number" ? act.price : undefined,
        };
      });

      return {
        day: Number(dayData.day || index + 1),
        date: dateStr,
        title: String(dayData.title || `第${index + 1}天`),
        activities,
        hotel: generateHotel(mainCity),
        meals: generateMeals(mainCity, dateStr, isFirstDay, isLastDay),
        weather: getWeatherForDate(dateStr, mainCity),
      };
    });

    const budget = calculateBudget(
      travelRequest.days,
      travelRequest.travelers.adults + travelRequest.travelers.children + travelRequest.travelers.seniors,
      mainCity
    );

    const itinerary: Itinerary = {
      id: `ai-${Date.now()}`,
      request: travelRequest,
      title: `${mainCity}${travelRequest.days}日深度游`,
      description: `为您精心规划的${mainCity}${travelRequest.days}日${travelRequest.days}夜行程，涵盖当地最经典的景点与体验。`,
      days,
      budget,
      transportation: generateTransportation(travelRequest),
      highlights: generateHighlights(days, mainCity),
      tips: generateTips(travelRequest, mainCity),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    return NextResponse.json(itinerary);
  } catch (error) {
    console.error("Generate itinerary error:", error);
    const message = error instanceof Error ? error.message : "未知错误";
    return NextResponse.json({ error: "行程生成失败: " + message }, { status: 500 });
  }
}
