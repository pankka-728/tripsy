import { Itinerary } from "@/types/travel";

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
