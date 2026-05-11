import { Itinerary, ItineraryDay, ItineraryActivity, HotelInfo, MealInfo, WeatherInfo } from "@/types/travel";
import { getCityByName, CityInfo } from "@/lib/city-data";

export const MOCK_ITINERARY: Itinerary = {
  id: "demo-1",
  request: {
    departureDate: "2024-04-15",
    days: 7,
    destinations: ["东京", "京都"],
    budget: {
      min: 15000,
      max: 25000,
      currency: "CNY"
    },
    transportationType: "flight",
    travelType: "family",
    travelers: {
      adults: 2,
      children: 1,
      seniors: 0
    },
    preferences: ["culture", "food", "relax"],
    specialRequirements: "有孩子，希望行程不要太赶，多安排亲子活动"
  },
  title: "东京·京都7日亲子文化之旅",
  description: "为您的家庭量身定制的日本关西红叶季之旅，融合传统与现代，让孩子在旅行中学习成长。",
  createdAt: "2024-01-20T10:00:00Z",
  updatedAt: "2024-01-20T10:00:00Z",
  highlights: [
    "东京浅草寺亲子体验",
    "迪士尼乐园欢乐一日游",
    "京都和服变身体验",
    "清水寺古典建筑欣赏",
    "岚山竹林小径漫步",
    "日式会席料理品尝"
  ],
  tips: [
    "日本电压为100V，需准备转换插头",
    "公共交通非常准时，建议提前查好时刻表",
    "很多餐厅需要预约，特别是高级料理店",
    "樱花季和红叶季是旅游旺季，提前2-3个月预订",
    "带上护照复印件，以防丢失"
  ],
  budget: {
    total: 21800,
    currency: "CNY",
    items: [
      { category: "transportation", name: "国际机票（往返）", amount: 9000 },
      { category: "transportation", name: "JR Pass 7日券", amount: 2000 },
      { category: "accommodation", name: "东京酒店3晚", amount: 3000 },
      { category: "accommodation", name: "京都民宿3晚", amount: 2400 },
      { category: "tickets", name: "迪士尼门票", amount: 1500 },
      { category: "tickets", name: "景点门票", amount: 800 },
      { category: "dining", name: "餐饮费用", amount: 2100 },
      { category: "service", name: "规划服务费", amount: 500 },
      { category: "other", name: "其他杂费", amount: 500 }
    ]
  },
  transportation: [
    {
      type: "flight",
      from: "北京",
      to: "东京成田",
      departureTime: "09:00",
      arrivalTime: "13:30",
      price: 4500,
      operator: "全日空航空",
      details: "经济舱，含2件23kg行李"
    },
    {
      type: "flight",
      from: "大阪关西",
      to: "北京",
      departureTime: "15:00",
      arrivalTime: "18:00",
      price: 4500,
      operator: "日本航空",
      details: "经济舱，含2件23kg行李"
    }
  ],
  days: [
    {
      day: 1,
      date: "2024-04-15",
      title: "抵达东京，初识江户风情",
      weather: {
        date: "2024-04-15",
        highTemp: 18,
        lowTemp: 10,
        condition: "sunny",
        description: "晴朗舒适",
        clothingAdvice: "建议穿薄外套，白天阳光充足"
      },
      hotel: {
        name: "东京新宿华盛顿酒店",
        starRating: 4,
        location: "新宿",
        pricePerNight: 1000,
        amenities: ["免费WiFi", "自助早餐", "健身房", "24小时前台", "亲子设施"],
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
        rating: 4.5,
        reviews: 2345,
        cancelable: true
      },
      meals: [
        {
          time: "18:00",
          type: "dinner",
          restaurantName: "矶丸水产 新宿店",
          cuisine: "日式海鲜烧烤",
          pricePerPerson: 200,
          recommendedDishes: ["烤扇贝", "烤螃蟹", "海鲜炒饭"],
          address: "东京都新宿区新宿3-3-1",
          rating: 4.3,
          image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&q=80"
        }
      ],
      activities: [
        {
          time: "13:30",
          type: "transport",
          title: "抵达成田机场",
          description: "抵达后办理入境手续，领取行李",
          duration: "1小时",
          location: "成田国际机场"
        },
        {
          time: "15:00",
          type: "transport",
          title: "前往市区",
          description: "乘坐成田特快(N'EX)前往新宿，约1小时15分钟",
          duration: "1.5小时",
          location: "成田机场 → 新宿",
          price: 150
        },
        {
          time: "17:00",
          type: "hotel",
          title: "办理入住",
          description: "在酒店前台办理入住，稍作休息",
          duration: "30分钟",
          location: "新宿华盛顿酒店"
        },
        {
          time: "18:00",
          type: "meal",
          title: "欢迎晚餐",
          description: "在新宿的矶丸水产品尝新鲜的日式海鲜烧烤",
          duration: "1.5小时",
          location: "矶丸水产 新宿店",
          price: 600
        },
        {
          time: "20:00",
          type: "sightseeing",
          title: "新宿夜景漫步",
          description: "步行到新宿歌舞伎町，感受东京繁华夜景，适合亲子拍照",
          duration: "1小时",
          location: "新宿"
        }
      ]
    },
    {
      day: 2,
      date: "2024-04-16",
      title: "浅草寺传统文化体验",
      weather: {
        date: "2024-04-16",
        highTemp: 20,
        lowTemp: 12,
        condition: "cloudy",
        description: "多云宜人",
        clothingAdvice: "穿长袖衬衫，带件薄外套"
      },
      hotel: {
        name: "东京新宿华盛顿酒店",
        starRating: 4,
        location: "新宿",
        pricePerNight: 1000,
        amenities: ["免费WiFi", "自助早餐", "健身房", "24小时前台", "亲子设施"],
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
        rating: 4.5,
        reviews: 2345,
        cancelable: true
      },
      meals: [
        {
          time: "07:30",
          type: "breakfast",
          restaurantName: "酒店自助早餐",
          cuisine: "日式和西式",
          pricePerPerson: 0,
          recommendedDishes: ["日式烤鱼", "味噌汤", "西式煎蛋"],
          address: "酒店内",
          rating: 4.2,
          image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&q=80"
        },
        {
          time: "12:00",
          type: "lunch",
          restaurantName: "浅草今半",
          cuisine: "天妇罗专门店",
          pricePerPerson: 180,
          recommendedDishes: ["鲜虾天妇罗", "蔬菜天妇罗", "天妇罗盖饭"],
          address: "东京都台东区浅草1-1-1",
          rating: 4.5,
          image: "https://images.unsplash.com/photo-1590478856136-85615699a54a?w=600&q=80"
        },
        {
          time: "18:30",
          type: "dinner",
          restaurantName: "吾妻寿司",
          cuisine: "江户前寿司",
          pricePerPerson: 250,
          recommendedDishes: ["寿司拼盘", "金枪鱼大脂", "海胆"],
          address: "东京都台东区浅草2-3-4",
          rating: 4.6,
          image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=600&q=80"
        }
      ],
      activities: [
        {
          time: "09:00",
          type: "transport",
          title: "前往浅草",
          description: "乘坐地铁银座线到浅草站，约30分钟",
          duration: "45分钟",
          location: "新宿 → 浅草",
          price: 30
        },
        {
          time: "10:00",
          type: "sightseeing",
          title: "浅草寺参拜",
          description: "参观浅草寺，抽个幸运签，给孩子买个可爱的御守",
          duration: "1.5小时",
          location: "浅草寺",
          price: 0,
          image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&q=80",
          details: {
            openTime: "06:00-17:00",
            ticketPrice: 0,
            bookingRequired: false
          }
        },
        {
          time: "12:00",
          type: "meal",
          title: "天妇罗午餐",
          description: "在浅草今半品尝正宗的天妇罗料理",
          duration: "1.5小时",
          location: "浅草今半",
          price: 540
        },
        {
          time: "14:00",
          type: "sightseeing",
          title: "隅田川游船",
          description: "乘坐游船从浅草到台场，欣赏两岸风光，孩子一定会喜欢",
          duration: "1小时",
          location: "隅田川",
          price: 150,
          details: {
            openTime: "10:00-18:00",
            ticketPrice: 50,
            bookingRequired: false
          }
        },
        {
          time: "16:00",
          type: "sightseeing",
          title: "台场海滨公园",
          description: "在台场海滨公园散步，看彩虹桥，自由女神像",
          duration: "2小时",
          location: "台场"
        }
      ]
    },
    {
      day: 3,
      date: "2024-04-17",
      title: "迪士尼欢乐一日游",
      weather: {
        date: "2024-04-17",
        highTemp: 22,
        lowTemp: 14,
        condition: "sunny",
        description: "晴朗温暖",
        clothingAdvice: "穿轻便衣物，带防晒帽"
      },
      hotel: {
        name: "东京新宿华盛顿酒店",
        starRating: 4,
        location: "新宿",
        pricePerNight: 1000,
        amenities: ["免费WiFi", "自助早餐", "健身房", "24小时前台", "亲子设施"],
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
        rating: 4.5,
        reviews: 2345,
        cancelable: true
      },
      meals: [
        {
          time: "07:00",
          type: "breakfast",
          restaurantName: "酒店早餐",
          cuisine: "日式和西式",
          pricePerPerson: 0,
          recommendedDishes: ["饭团", "煎蛋", "牛奶"],
          address: "酒店内",
          rating: 4.2,
          image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&q=80"
        },
        {
          time: "12:30",
          type: "lunch",
          restaurantName: "乐园内餐厅",
          cuisine: "美式快餐",
          pricePerPerson: 120,
          recommendedDishes: ["烤鸡腿饭", "汉堡", "爆米花"],
          address: "东京迪士尼乐园内",
          rating: 4.0,
          image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80"
        },
        {
          time: "19:00",
          type: "dinner",
          restaurantName: "乐园内餐厅",
          cuisine: "自助餐",
          pricePerPerson: 200,
          recommendedDishes: ["各式料理", "甜点", "饮料"],
          address: "东京迪士尼乐园内",
          rating: 4.3,
          image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80"
        }
      ],
      activities: [
        {
          time: "07:30",
          type: "transport",
          title: "前往迪士尼",
          description: "乘坐JR京叶线到舞滨站，约40分钟，建议早点去排队",
          duration: "1小时",
          location: "新宿 → 舞滨",
          price: 40
        },
        {
          time: "09:00",
          type: "sightseeing",
          title: "入园游玩",
          description: "东京迪士尼乐园一日游，推荐项目：太空山、巨雷山、小熊维尼猎蜜记",
          duration: "10小时",
          location: "东京迪士尼乐园",
          price: 1500,
          image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=600&q=80",
          details: {
            openTime: "09:00-22:00",
            ticketPrice: 500,
            bookingRequired: true
          }
        },
        {
          time: "20:30",
          type: "sightseeing",
          title: "夜间巡游",
          description: "观看迪士尼夜间电子巡游表演，非常精彩",
          duration: "45分钟",
          location: "东京迪士尼乐园"
        }
      ]
    },
    {
      day: 4,
      date: "2024-04-18",
      title: "移师京都，千年古都",
      weather: {
        date: "2024-04-18",
        highTemp: 21,
        lowTemp: 13,
        condition: "cloudy",
        description: "多云舒适",
        clothingAdvice: "穿春秋季服装"
      },
      hotel: {
        name: "祇园新门日式旅馆",
        starRating: 4,
        location: "祇园",
        pricePerNight: 800,
        amenities: ["免费WiFi", "温泉浴场", "怀石料理晚餐", "日式花园"],
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80",
        rating: 4.7,
        reviews: 1234,
        cancelable: true
      },
      meals: [
        {
          time: "08:00",
          type: "breakfast",
          restaurantName: "酒店早餐",
          cuisine: "日式和西式",
          pricePerPerson: 0,
          recommendedDishes: ["日式早餐"],
          address: "酒店内",
          rating: 4.2,
          image: "https://images.unsplash.com/photo-1482049016gy-3504757044d8?w=600&q=80"
        },
        {
          time: "13:00",
          type: "lunch",
          restaurantName: "京都站拉面小路",
          cuisine: "日式拉面",
          pricePerPerson: 80,
          recommendedDishes: ["豚骨拉面", "味噌拉面"],
          address: "京都站大楼内",
          rating: 4.1,
          image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&q=80"
        },
        {
          time: "19:00",
          type: "dinner",
          restaurantName: "旅馆怀石料理",
          cuisine: "怀石料理",
          pricePerPerson: 400,
          recommendedDishes: ["季节食材", "煮物", "烧物"],
          address: "祇园新门旅馆内",
          rating: 4.8,
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80"
        }
      ],
      activities: [
        {
          time: "10:00",
          type: "transport",
          title: "前往京都",
          description: "乘坐新干线Nozomi号从东京到京都，约2小时20分钟",
          duration: "3小时",
          location: "东京站 → 京都站",
          price: 1000
        },
        {
          time: "13:00",
          type: "meal",
          title: "京都拉面午餐",
          description: "在京都站拉面小路选择一家喜欢的拉面店",
          duration: "1小时",
          location: "京都站",
          price: 240
        },
        {
          time: "14:30",
          type: "hotel",
          title: "办理入住",
          description: "在祇园的日式旅馆办理入住，体验日式服务",
          duration: "30分钟",
          location: "祇园新门日式旅馆"
        },
        {
          time: "16:00",
          type: "sightseeing",
          title: "祇园漫步",
          description: "在祇园漫步，有可能遇到艺伎，适合拍照留念",
          duration: "2小时",
          location: "祇园",
          image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80"
        }
      ]
    },
    {
      day: 5,
      date: "2024-04-19",
      title: "清水寺与和服体验",
      weather: {
        date: "2024-04-19",
        highTemp: 23,
        lowTemp: 14,
        condition: "sunny",
        description: "晴朗温暖",
        clothingAdvice: "适合穿和服拍照"
      },
      hotel: {
        name: "祇园新门日式旅馆",
        starRating: 4,
        location: "祇园",
        pricePerNight: 800,
        amenities: ["免费WiFi", "温泉浴场", "怀石料理晚餐", "日式花园"],
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80",
        rating: 4.7,
        reviews: 1234,
        cancelable: true
      },
      meals: [
        {
          time: "08:00",
          type: "breakfast",
          restaurantName: "日式早餐",
          cuisine: "日式传统",
          pricePerPerson: 0,
          recommendedDishes: ["烤鱼", "味噌汤", "腌菜", "米饭"],
          address: "旅馆内",
          rating: 4.7,
          image: "https://images.unsplash.com/photo-1482049016gy-3504757044d8?w=600&q=80"
        },
        {
          time: "12:30",
          type: "lunch",
          restaurantName: "产宁坂茶屋",
          cuisine: "京料理",
          pricePerPerson: 150,
          recommendedDishes: ["汤豆腐", "京野菜", "荞麦面"],
          address: "京都府京都市东山区产宁坂",
          rating: 4.4,
          image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80"
        },
        {
          time: "18:30",
          type: "dinner",
          restaurantName: "先斗町小料理",
          cuisine: "京都会席",
          pricePerPerson: 300,
          recommendedDishes: ["季节刺身", "煮物", "烧烤"],
          address: "京都府京都市中京区先斗町",
          rating: 4.5,
          image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80"
        }
      ],
      activities: [
        {
          time: "09:00",
          type: "sightseeing",
          title: "和服变身",
          description: "在祇园的和服店租和服，专业店员帮忙穿戴，还可以做头发造型",
          duration: "1.5小时",
          location: "祇园和服店",
          price: 600,
          details: {
            openTime: "09:00-18:00",
            ticketPrice: 200,
            bookingRequired: true
          }
        },
        {
          time: "11:00",
          type: "sightseeing",
          title: "清水寺",
          description: "穿着和服参观清水寺，在京都最佳观景台拍照留念",
          duration: "2小时",
          location: "清水寺",
          price: 60,
          image: "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=600&q=80",
          details: {
            openTime: "06:00-18:00",
            ticketPrice: 20,
            bookingRequired: false
          }
        },
        {
          time: "13:30",
          type: "sightseeing",
          title: "三年坂二年坂",
          description: "在产宁坂散步，逛逛传统工艺品店，品尝京式小点心",
          duration: "2小时",
          location: "产宁坂",
          image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80"
        },
        {
          time: "16:00",
          type: "sightseeing",
          title: "八坂神社",
          description: "参观八坂神社，了解日本神话故事",
          duration: "1小时",
          location: "八坂神社"
        }
      ]
    },
    {
      day: 6,
      date: "2024-04-20",
      title: "岚山竹林与金阁寺",
      weather: {
        date: "2024-04-20",
        highTemp: 20,
        lowTemp: 12,
        condition: "rainy",
        description: "有小雨",
        clothingAdvice: "带伞，穿防水鞋"
      },
      hotel: {
        name: "祇园新门日式旅馆",
        starRating: 4,
        location: "祇园",
        pricePerNight: 800,
        amenities: ["免费WiFi", "温泉浴场", "怀石料理晚餐", "日式花园"],
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80",
        rating: 4.7,
        reviews: 1234,
        cancelable: true
      },
      meals: [
        {
          time: "08:00",
          type: "breakfast",
          restaurantName: "日式早餐",
          cuisine: "日式传统",
          pricePerPerson: 0,
          recommendedDishes: ["烤鱼", "味噌汤", "腌菜", "米饭"],
          address: "旅馆内",
          rating: 4.7,
          image: "https://images.unsplash.com/photo-1482049016gy-3504757044d8?w=600&q=80"
        },
        {
          time: "12:30",
          type: "lunch",
          restaurantName: "岚山汤豆腐",
          cuisine: "汤豆腐料理",
          pricePerPerson: 180,
          recommendedDishes: ["汤豆腐套餐", "山药泥", "京都蔬菜"],
          address: "京都府京都市右京区嵯峨野",
          rating: 4.5,
          image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80"
        },
        {
          time: "18:30",
          type: "dinner",
          restaurantName: "螃蟹道乐",
          cuisine: "螃蟹料理",
          pricePerPerson: 350,
          recommendedDishes: ["螃蟹刺身", "螃蟹火锅", "烤螃蟹"],
          address: "京都府京都市中京区河原町",
          rating: 4.6,
          image: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=600&q=80"
        }
      ],
      activities: [
        {
          time: "09:00",
          type: "transport",
          title: "前往岚山",
          description: "乘坐JR嵯峨野线到嵯峨岚山站，约30分钟",
          duration: "1小时",
          location: "京都站 → 岚山",
          price: 30
        },
        {
          time: "10:00",
          type: "sightseeing",
          title: "竹林小径",
          description: "漫步在岚山竹林小径，感受宁静的氛围",
          duration: "1小时",
          location: "岚山竹林",
          image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&q=80"
        },
        {
          time: "11:30",
          type: "sightseeing",
          title: "天龙寺",
          description: "参观天龙寺，欣赏精美庭园",
          duration: "1.5小时",
          location: "天龙寺",
          price: 40,
          details: {
            openTime: "08:30-17:30",
            ticketPrice: 15,
            bookingRequired: false
          }
        },
        {
          time: "14:00",
          type: "sightseeing",
          title: "金阁寺",
          description: "参观金碧辉煌的金阁寺，照片拍出来特别美",
          duration: "1.5小时",
          location: "金阁寺",
          price: 50,
          image: "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=600&q=80",
          details: {
            openTime: "09:00-17:00",
            ticketPrice: 15,
            bookingRequired: false
          }
        },
        {
          time: "16:30",
          type: "sightseeing",
          title: "北野天满宫",
          description: "如果时间充裕，可以参观北野天满宫",
          duration: "1小时",
          location: "北野天满宫"
        }
      ]
    },
    {
      day: 7,
      date: "2024-04-21",
      title: "告别京都，满载回忆",
      weather: {
        date: "2024-04-21",
        highTemp: 22,
        lowTemp: 13,
        condition: "sunny",
        description: "晴朗温暖",
        clothingAdvice: "穿轻便舒适的衣物"
      },
      hotel: {
        name: "祇园新门日式旅馆",
        starRating: 4,
        location: "祇园",
        pricePerNight: 800,
        amenities: ["免费WiFi", "温泉浴场", "怀石料理晚餐", "日式花园"],
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80",
        rating: 4.7,
        reviews: 1234,
        cancelable: true
      },
      meals: [
        {
          time: "08:00",
          type: "breakfast",
          restaurantName: "日式早餐",
          cuisine: "日式传统",
          pricePerPerson: 0,
          recommendedDishes: ["烤鱼", "味噌汤", "腌菜", "米饭"],
          address: "旅馆内",
          rating: 4.7,
          image: "https://images.unsplash.com/photo-1482049016gy-3504757044d8?w=600&q=80"
        },
        {
          time: "12:00",
          type: "lunch",
          restaurantName: "京都站伊势丹",
          cuisine: "各式料理",
          pricePerPerson: 150,
          recommendedDishes: ["京都料理", "洋食", "甜点"],
          address: "京都站伊势丹百货",
          rating: 4.3,
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80"
        }
      ],
      activities: [
        {
          time: "09:30",
          type: "sightseeing",
          title: "锦市场",
          description: "在锦市场选购伴手礼，品尝京都小吃",
          duration: "1.5小时",
          location: "锦市场"
        },
        {
          time: "11:30",
          type: "hotel",
          title: "退房",
          description: "办理退房手续，前往京都站",
          duration: "30分钟",
          location: "祇园新门日式旅馆"
        },
        {
          time: "12:30",
          type: "meal",
          title: "最后的午餐",
          description: "在京都站享用在日本的最后一餐",
          duration: "1.5小时",
          location: "京都站伊势丹",
          price: 450
        },
        {
          time: "14:30",
          type: "transport",
          title: "前往机场",
          description: "乘坐Haruka号特急前往关西机场，约1小时15分钟",
          duration: "2小时",
          location: "京都站 → 关西机场",
          price: 180
        },
        {
          time: "17:00",
          type: "transport",
          title: "办理登机",
          description: "办理登机手续，托运行李",
          duration: "1小时",
          location: "关西国际机场"
        }
      ]
    }
  ]
};

// ============ 动态行程生成函数 ============

interface ActivityTemplate {
  type: 'sightseeing' | 'transport' | 'meal' | 'hotel' | 'free';
  title: string;
  description: string;
  duration: string;
  price?: number;
}

function generateActivitiesForDay(
  city: CityInfo,
  day: number,
  totalDays: number,
  isFirstDay: boolean,
  isLastDay: boolean
): ItineraryActivity[] {
  const activities: ItineraryActivity[] = [];
  const tags = city.tags;

  if (isFirstDay) {
    // 第一天：抵达 + 入住 + 市区初探
    activities.push({
      time: "14:00",
      type: "transport",
      title: `抵达${city.name}`,
      description: `抵达${city.name}，办理入住手续，稍作休息`,
      duration: "2小时",
      location: `${city.name}市区`
    });
    activities.push({
      time: "16:30",
      type: "hotel",
      title: "办理入住",
      description: `在${city.name}市中心酒店办理入住`,
      duration: "30分钟",
      location: `${city.name}市中心`
    });
    activities.push({
      time: "17:30",
      type: "sightseeing",
      title: `${city.name}市区初探`,
      description: `漫步${city.name}市中心，感受当地城市氛围，熟悉周边环境`,
      duration: "1.5小时",
      location: `${city.name}市中心`
    });
    activities.push({
      time: "19:00",
      type: "meal",
      title: "欢迎晚餐",
      description: `品尝${city.name}当地特色美食，开启美好旅程`,
      duration: "1.5小时",
      location: `${city.name}特色餐厅`,
      price: 200
    });
  } else if (isLastDay) {
    // 最后一天：购物/最后景点 + 返程
    activities.push({
      time: "09:00",
      type: "sightseeing",
      title: `最后的${city.name}记忆`,
      description: `前往${city.name}当地特色街区，选购伴手礼`,
      duration: "2小时",
      location: `${city.name}特色街区`
    });
    activities.push({
      time: "12:00",
      type: "meal",
      title: "告别午餐",
      description: `享用最后一顿${city.name}美食，为旅程画上圆满句号`,
      duration: "1.5小时",
      location: `${city.name}人气餐厅`,
      price: 150
    });
    activities.push({
      time: "14:00",
      type: "hotel",
      title: "退房",
      description: "办理退房手续，整理行李",
      duration: "30分钟",
      location: "酒店"
    });
    activities.push({
      time: "15:00",
      type: "transport",
      title: "前往机场/车站",
      description: `前往${city.name}机场/车站，准备返程`,
      duration: "1.5小时",
      location: `${city.name}机场/车站`
    });
  } else {
    // 中间天数：根据城市标签生成不同活动
    const morningActivities: ItineraryActivity[] = [];
    const afternoonActivities: ItineraryActivity[] = [];
    const eveningActivities: ItineraryActivity[] = [];

    // 上午活动
    if (tags.includes('历史文化') || tags.includes('古迹') || tags.includes('古都') || tags.includes('寺庙') || tags.includes('世界遗产')) {
      morningActivities.push({
        time: "09:00",
        type: "sightseeing",
        title: `${city.name}历史古迹游览`,
        description: `参观${city.name}著名的历史文化景点，感受千年文化底蕴`,
        duration: "2.5小时",
        location: `${city.name}历史古迹区`,
        price: 80
      });
    } else if (tags.includes('自然风光') || tags.includes('山水') || tags.includes('雪山') || tags.includes('湖泊')) {
      morningActivities.push({
        time: "09:00",
        type: "sightseeing",
        title: `${city.name}自然风光`,
        description: `前往${city.name}著名的自然景区，欣赏壮丽风光`,
        duration: "3小时",
        location: `${city.name}自然风景区`,
        price: 120
      });
    } else if (tags.includes('海滩') || tags.includes('海岛') || tags.includes('海岛度假')) {
      morningActivities.push({
        time: "09:00",
        type: "sightseeing",
        title: `${city.name}海滩时光`,
        description: `在${city.name}美丽的海滩享受阳光沙滩，尽情放松`,
        duration: "3小时",
        location: `${city.name}海滩`,
        price: 50
      });
    } else {
      morningActivities.push({
        time: "09:00",
        type: "sightseeing",
        title: `${city.name}地标打卡`,
        description: `游览${city.name}最具代表性的地标建筑和景点`,
        duration: "2.5小时",
        location: `${city.name}地标区`,
        price: 60
      });
    }

    // 午餐
    morningActivities.push({
      time: "12:30",
      type: "meal",
      title: "特色午餐",
      description: `品尝${city.name}地道美食，体验当地饮食文化`,
      duration: "1.5小时",
      location: `${city.name}人气餐厅`,
      price: 100
    });

    // 下午活动
    if (tags.includes('购物') || tags.includes('都市')) {
      afternoonActivities.push({
        time: "14:30",
        type: "sightseeing",
        title: `${city.name}购物时光`,
        description: `逛${city.name}著名的购物街区，选购心仪商品`,
        duration: "2.5小时",
        location: `${city.name}购物区`,
        price: 0
      });
    } else if (tags.includes('美食') || tags.includes('火锅') || tags.includes('茶文化')) {
      afternoonActivities.push({
        time: "14:30",
        type: "sightseeing",
        title: `${city.name}美食探索`,
        description: `深入${city.name}美食街区，发现隐藏的美味`,
        duration: "2.5小时",
        location: `${city.name}美食街`,
        price: 80
      });
    } else if (tags.includes('博物馆') || tags.includes('艺术') || tags.includes('文化')) {
      afternoonActivities.push({
        time: "14:30",
        type: "sightseeing",
        title: `${city.name}文化之旅`,
        description: `参观${city.name}博物馆或艺术馆，深入了解当地文化`,
        duration: "2.5小时",
        location: `${city.name}博物馆`,
        price: 50
      });
    } else {
      afternoonActivities.push({
        time: "14:30",
        type: "sightseeing",
        title: `${city.name}深度游览`,
        description: `继续探索${city.name}的精彩景点，发现更多惊喜`,
        duration: "2.5小时",
        location: `${city.name}景区`,
        price: 60
      });
    }

    // 晚上活动
    if (day % 2 === 0) {
      eveningActivities.push({
        time: "18:00",
        type: "meal",
        title: "晚餐时光",
        description: `享用${city.name}特色晚餐，品味当地风味`,
        duration: "1.5小时",
        location: `${city.name}特色餐厅`,
        price: 150
      });
      eveningActivities.push({
        time: "20:00",
        type: "sightseeing",
        title: `${city.name}夜景`,
        description: `欣赏${city.name}璀璨夜景，感受城市另一面`,
        duration: "1.5小时",
        location: `${city.name}夜景观赏点`
      });
    } else {
      eveningActivities.push({
        time: "18:00",
        type: "meal",
        title: "晚餐时光",
        description: `在${city.name}享用丰盛的晚餐`,
        duration: "1.5小时",
        location: `${city.name}餐厅`,
        price: 150
      });
      eveningActivities.push({
        time: "20:00",
        type: "free",
        title: "自由时光",
        description: `自由安排晚间活动，或在酒店休息`,
        duration: "2小时",
        location: "自由活动"
      });
    }

    activities.push(...morningActivities, ...afternoonActivities, ...eveningActivities);
  }

  return activities;
}

function generateMealsForDay(
  city: CityInfo,
  isFirstDay: boolean,
  isLastDay: boolean
): MealInfo[] {
  const meals: MealInfo[] = [];
  const cuisine = city.country === '中国' ? '中式料理' : `${city.country}料理`;

  if (!isFirstDay) {
    meals.push({
      time: "08:00",
      type: "breakfast",
      restaurantName: "酒店早餐",
      cuisine: "自助早餐",
      pricePerPerson: 0,
      recommendedDishes: ["当地特色早点", "粥品", "小菜"],
      address: "酒店内",
      rating: 4.2,
      image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&q=80"
    });
  }

  if (!isFirstDay && !isLastDay) {
    meals.push({
      time: "12:30",
      type: "lunch",
      restaurantName: `${city.name}特色餐厅`,
      cuisine: cuisine,
      pricePerPerson: 80,
      recommendedDishes: ["当地招牌菜", "特色小炒", "时令蔬菜"],
      address: `${city.name}市中心`,
      rating: 4.3,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80"
    });
  }

  if (!isLastDay) {
    meals.push({
      time: "18:30",
      type: "dinner",
      restaurantName: `${city.name}人气餐厅`,
      cuisine: cuisine,
      pricePerPerson: 120,
      recommendedDishes: ["当地名菜", "特色汤品", "主食"],
      address: `${city.name}市中心`,
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80"
    });
  }

  return meals;
}

function generateHotel(city: CityInfo): HotelInfo {
  const starRating = city.suggestedDays >= 4 ? 4 : 3;
  const pricePerNight = city.country === '中国' ? 400 : 600;

  return {
    name: `${city.name}市中心酒店`,
    starRating,
    location: `${city.name}市中心`,
    pricePerNight,
    amenities: ["免费WiFi", "空调", "24小时热水", "行李寄存"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
    rating: 4.2 + Math.random() * 0.6,
    reviews: Math.floor(1000 + Math.random() * 2000),
    cancelable: true
  };
}

function generateWeather(day: number): WeatherInfo {
  const conditions: ('sunny' | 'cloudy' | 'rainy' | 'snowy')[] = ['sunny', 'cloudy', 'rainy', 'sunny'];
  const condition = conditions[day % conditions.length];
  const descriptions = {
    sunny: "晴朗舒适",
    cloudy: "多云宜人",
    rainy: "小雨转晴",
    snowy: "小雪"
  };
  const clothingAdvice = {
    sunny: "建议穿轻便衣物，注意防晒",
    cloudy: "穿长袖衬衫，带件薄外套",
    rainy: "携带雨具，穿防滑鞋",
    snowy: "穿保暖衣物，注意防寒"
  };

  return {
    date: `2024-04-${14 + day}`,
    highTemp: 18 + Math.floor(Math.random() * 8),
    lowTemp: 8 + Math.floor(Math.random() * 8),
    condition,
    description: descriptions[condition],
    clothingAdvice: clothingAdvice[condition]
  };
}

function generateHighlights(city: CityInfo, days: number): string[] {
  const highlights: string[] = [];
  const tags = city.tags;

  highlights.push(`${city.name}${tags[0] || '特色'}体验`);
  highlights.push(`${city.name}地标打卡`);
  if (tags.includes('美食') || tags.includes('火锅')) {
    highlights.push(`${city.name}美食之旅`);
  }
  if (tags.includes('历史文化') || tags.includes('古迹')) {
    highlights.push(`${city.name}历史文化探索`);
  }
  if (tags.includes('自然风光') || tags.includes('山水')) {
    highlights.push(`${city.name}自然风光欣赏`);
  }
  if (tags.includes('海滩') || tags.includes('海岛')) {
    highlights.push(`${city.name}海滩休闲时光`);
  }
  highlights.push(`${city.name}当地生活体验`);
  highlights.push(`${days}天深度游览${city.name}`);

  return highlights.slice(0, 6);
}

function generateTips(city: CityInfo): string[] {
  const tips: string[] = [
    `建议提前了解${city.name}当地天气，准备合适的衣物`,
    `${city.name}旅游旺季人流量较大，建议提前预订酒店和景点门票`,
    `尊重${city.name}当地风俗习惯，文明旅游`,
    `保管好个人财物，注意出行安全`,
    `品尝${city.name}当地美食时，注意食品卫生`,
    `建议购买旅游保险，保障出行安全`
  ];

  if (city.country !== '中国') {
    tips.push(`前往${city.country}需提前办理签证，准备好相关材料`);
    tips.push(`了解${city.country}当地的电源插头和电压标准，准备转换插头`);
  }

  return tips;
}

function generateBudget(city: CityInfo, days: number, travelers: number): { total: number; currency: 'CNY' | 'USD'; items: { category: 'transportation' | 'accommodation' | 'tickets' | 'dining' | 'service' | 'other'; name: string; amount: number }[] } {
  const isDomestic = city.country === '中国';
  const currency: 'CNY' | 'USD' = 'CNY';

  const flightPrice = isDomestic ? 1500 : 5000;
  const hotelPricePerNight = isDomestic ? 400 : 800;
  const ticketPricePerDay = isDomestic ? 100 : 200;
  const diningPricePerDay = isDomestic ? 200 : 300;

  const items = [
    { category: 'transportation' as const, name: isDomestic ? '往返机票/高铁' : '国际机票（往返）', amount: flightPrice * travelers },
    { category: 'transportation' as const, name: `${city.name}当地交通`, amount: 50 * days * travelers },
    { category: 'accommodation' as const, name: `${city.name}酒店${days}晚`, amount: hotelPricePerNight * days },
    { category: 'tickets' as const, name: '景点门票', amount: ticketPricePerDay * days * travelers },
    { category: 'dining' as const, name: '餐饮费用', amount: diningPricePerDay * days * travelers },
    { category: 'service' as const, name: '规划服务费', amount: 300 },
    { category: 'other' as const, name: '其他杂费', amount: 500 * travelers }
  ];

  const total = items.reduce((sum, item) => sum + item.amount, 0);

  return { total, currency, items };
}

export function generateDynamicItinerary(
  destinations: string[],
  days: number,
  travelers: number
): Itinerary {
  const primaryCity = destinations[0] || '北京';
  const cityInfo = getCityByName(primaryCity);

  if (!cityInfo) {
    // 如果找不到城市，返回默认行程
    return {
      ...MOCK_ITINERARY,
      id: `demo-${Date.now()}`,
      request: {
        ...MOCK_ITINERARY.request,
        days,
        destinations,
        travelers: {
          ...MOCK_ITINERARY.request.travelers,
          adults: travelers
        }
      },
      title: `${primaryCity} ${days}日定制之旅`,
      description: `为您精心策划的${primaryCity}${days}日定制行程，涵盖当地最精彩的景点和体验。`
    };
  }

  const itineraryDays: ItineraryDay[] = [];
  const hotel = generateHotel(cityInfo);

  for (let day = 1; day <= days; day++) {
    const isFirstDay = day === 1;
    const isLastDay = day === days;

    itineraryDays.push({
      day,
      date: `2024-04-${14 + day}`,
      title: isFirstDay
        ? `抵达${cityInfo.name}，开启美好旅程`
        : isLastDay
          ? `告别${cityInfo.name}，满载而归`
          : `${cityInfo.name}精彩第${day}天`,
      activities: generateActivitiesForDay(cityInfo, day, days, isFirstDay, isLastDay),
      hotel: isLastDay ? hotel : hotel,
      meals: generateMealsForDay(cityInfo, isFirstDay, isLastDay),
      weather: generateWeather(day)
    });
  }

  const budget = generateBudget(cityInfo, days, travelers);
  const highlights = generateHighlights(cityInfo, days);
  const tips = generateTips(cityInfo);

  return {
    id: `demo-${Date.now()}`,
    request: {
      departureDate: "2024-04-15",
      days,
      destinations,
      budget: {
        min: Math.round(budget.total * 0.8),
        max: Math.round(budget.total * 1.2),
        currency: budget.currency
      },
      transportationType: "flight",
      travelType: "family",
      travelers: {
        adults: travelers,
        children: 0,
        seniors: 0
      },
      preferences: ["culture", "food", "relax"],
      specialRequirements: ""
    },
    title: destinations.length === 1
      ? `${destinations[0]} ${days}日定制之旅`
      : `${destinations.join('·')} ${days}日定制之旅`,
    description: destinations.length === 1
      ? `为您精心策划的${destinations[0]}${days}日定制行程，${cityInfo.tags.join('、')}，让您充分体验当地风情。`
      : `为您精心策划的${destinations.join('至')} ${days}日定制行程，涵盖各地最精彩的景点和体验。`,
    days: itineraryDays,
    budget,
    transportation: [
      {
        type: "flight",
        from: "出发地",
        to: `${cityInfo.name}`,
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: cityInfo.country === '中国' ? 1500 : 5000,
        operator: cityInfo.country === '中国' ? '中国国航' : '国际航空',
        details: "经济舱，含行李"
      },
      {
        type: "flight",
        from: `${cityInfo.name}`,
        to: "出发地",
        departureTime: "15:00",
        arrivalTime: "19:00",
        price: cityInfo.country === '中国' ? 1500 : 5000,
        operator: cityInfo.country === '中国' ? '中国国航' : '国际航空',
        details: "经济舱，含行李"
      }
    ],
    highlights,
    tips,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
}

