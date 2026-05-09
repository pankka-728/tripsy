import { TravelDestination, Testimonial, BookOption } from "@/types/travel";

export const POPULAR_DESTINATIONS: TravelDestination[] = [
  {
    id: "paris",
    name: "巴黎",
    country: "法国",
    description: "浪漫之都，艺术与时尚的完美融合",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
    bestTimeToVisit: "4-6月、9-10月",
    averageBudgetPerDay: 1500,
    rating: 4.8,
    reviews: 12580,
    highlights: ["埃菲尔铁塔", "卢浮宫", "香榭丽舍大街", "蒙马特高地"]
  },
  {
    id: "tokyo",
    name: "东京",
    country: "日本",
    description: "传统与现代交织的东方明珠",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
    bestTimeToVisit: "3-5月、10-11月",
    averageBudgetPerDay: 1200,
    rating: 4.9,
    reviews: 9876,
    highlights: ["浅草寺", "东京塔", "涩谷十字路口", "秋叶原"]
  },
  {
    id: "bali",
    name: "巴厘岛",
    country: "印度尼西亚",
    description: "热带天堂，海岛度假胜地",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    bestTimeToVisit: "4-10月",
    averageBudgetPerDay: 800,
    rating: 4.7,
    reviews: 8654,
    highlights: ["乌布梯田", "海神庙", "库塔海滩", "猴子森林"]
  },
  {
    id: "newyork",
    name: "纽约",
    country: "美国",
    description: "不夜城，世界之都",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80",
    bestTimeToVisit: "4-6月、9-11月",
    averageBudgetPerDay: 2000,
    rating: 4.6,
    reviews: 7890,
    highlights: ["自由女神像", "时代广场", "中央公园", "百老汇"]
  },
  {
    id: "santorini",
    name: "圣托里尼",
    country: "希腊",
    description: "爱琴海上的蓝白童话",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80",
    bestTimeToVisit: "5-10月",
    averageBudgetPerDay: 1800,
    rating: 4.9,
    reviews: 6543,
    highlights: ["伊亚日落", "蓝顶教堂", "火山温泉", "葡萄酒庄"]
  },
  {
    id: "kyoto",
    name: "京都",
    country: "日本",
    description: "千年古都，日本文化的心脏",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
    bestTimeToVisit: "3-5月、10-12月",
    averageBudgetPerDay: 1100,
    rating: 4.8,
    reviews: 8765,
    highlights: ["金阁寺", "伏见稻荷大社", "艺伎区", "清水寺"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "李明",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    destination: "日本东京",
    rating: 5,
    comment: "Tripsy的AI规划师太专业了！为我们一家三口定制的东京行程完美平衡了观光、美食和购物，孩子玩得特别开心。价格透明，服务贴心！",
    date: "2024-01-15"
  },
  {
    id: "2",
    name: "王芳",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    destination: "法国巴黎",
    rating: 5,
    comment: "蜜月旅行选择了Tripsy，整个行程浪漫又贴心！从酒店选择到餐厅预订都非常完美，还收到了精美的纪念册，这是我们最美好的回忆！",
    date: "2024-01-10"
  },
  {
    id: "3",
    name: "张伟",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    destination: "巴厘岛",
    rating: 4,
    comment: "和朋友们的巴厘岛之行非常愉快！AI推荐的小众景点避开了人流，当地美食探索也很成功。行程修改功能非常实用，我们调整了好几次都很快得到了更新。",
    date: "2024-01-05"
  }
];

export const BOOK_OPTIONS: BookOption[] = [
  {
    id: "basic",
    name: "经典版",
    description: "高品质印刷，精美装帧",
    price: 299,
    size: "16开 (185×260mm)",
    pages: 80,
    binding: "平装",
    paperType: "铜版纸",
    deliveryDays: 7,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&q=80"
  },
  {
    id: "premium",
    name: "豪华版",
    description: "真皮封面，烫金工艺",
    price: 599,
    size: "16开 (185×260mm)",
    pages: 100,
    binding: "精装",
    paperType: "哑粉纸",
    deliveryDays: 10,
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&q=80"
  },
  {
    id: "luxury",
    name: "珍藏版",
    description: "手工装帧，礼盒包装",
    price: 999,
    size: "大16开 (210×285mm)",
    pages: 150,
    binding: "蝴蝶装",
    paperType: "进口铜版纸",
    deliveryDays: 15,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=80"
  }
];

export const PREFERENCES = [
  { value: "relax", label: "轻松休闲", icon: "🌴" },
  { value: "culture", label: "深度人文", icon: "🏛️" },
  { value: "food", label: "美食打卡", icon: "🍜" },
  { value: "beach", label: "海岛度假", icon: "🏖️" },
  { value: "adventure", label: "户外冒险", icon: "🏔️" },
  { value: "luxury", label: "轻奢高端", icon: "💎" }
];

export const TRAVEL_TYPES = [
  { value: "family", label: "家人出行", sublabel: "亲子/老人", icon: "👨‍👩‍👧‍👦" },
  { value: "colleague", label: "同事团建", sublabel: "团队活动", icon: "👥" },
  { value: "friends", label: "朋友结伴", sublabel: "好友同行", icon: "🎉" },
  { value: "honeymoon", label: "蜜月旅行", sublabel: "新婚燕尔", icon: "💑" },
  { value: "couple", label: "情侣出游", sublabel: "二人世界", icon: "❤️" },
  { value: "solo", label: "独自旅行", sublabel: "探索自我", icon: "🧳" }
];

export const TRAVEL_STYLES = [
  { value: "free", label: "自由行", description: "完全自主，灵活自由" },
  { value: "semi-free", label: "半自由行", description: "部分安排，部分自由" },
  { value: "group", label: "跟团定制", description: "专属小团，定制服务" }
];

export const BUDGET_RANGES = {
  CNY: [
    { min: 5000, max: 10000, label: "5,000 - 10,000 元" },
    { min: 10000, max: 20000, label: "10,000 - 20,000 元" },
    { min: 20000, max: 30000, label: "20,000 - 30,000 元" },
    { min: 30000, max: 50000, label: "30,000 - 50,000 元" },
    { min: 50000, max: 100000, label: "50,000 - 100,000 元" },
    { min: 100000, max: 200000, label: "100,000 元以上" }
  ],
  USD: [
    { min: 700, max: 1400, label: "700 - 1,400 美元" },
    { min: 1400, max: 2800, label: "1,400 - 2,800 美元" },
    { min: 2800, max: 4200, label: "2,800 - 4,200 美元" },
    { min: 4200, max: 7000, label: "4,200 - 7,000 美元" },
    { min: 7000, max: 14000, label: "7,000 - 14,000 美元" },
    { min: 14000, max: 28000, label: "14,000 美元以上" }
  ]
};
