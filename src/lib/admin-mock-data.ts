import { 
  ItineraryAdmin, 
  BookOrder, 
  DestinationAdmin, 
  DashboardStats,
  AdminUser
} from '@/types/admin';

export const MOCK_ADMIN_USER: AdminUser = {
  id: '1',
  name: '系统管理员',
  email: 'admin@tripsy.com',
  role: 'super_admin',
  createdAt: new Date('2024-01-01'),
  lastLoginAt: new Date(),
};

export const MOCK_ITINERARIES: ItineraryAdmin[] = [
  {
    id: '1',
    userId: 'user-1',
    userName: '张三',
    userEmail: 'zhangsan@example.com',
    status: 'pending',
    destinations: ['日本东京', '大阪'],
    startDate: new Date('2025-03-15'),
    endDate: new Date('2025-03-22'),
    budget: 30000,
    budgetCurrency: 'CNY',
    transportationType: 'flight',
    travelType: 'family',
    travelerCount: { adults: 2, children: 1, seniors: 0 },
    createdAt: new Date('2025-02-20'),
    updatedAt: new Date('2025-02-20'),
    notes: '希望能有迪士尼乐园的行程',
  },
  {
    id: '2',
    userId: 'user-2',
    userName: '李四',
    userEmail: 'lisi@example.com',
    status: 'planning',
    destinations: ['法国巴黎'],
    startDate: new Date('2025-04-10'),
    endDate: new Date('2025-04-17'),
    budget: 50000,
    budgetCurrency: 'CNY',
    transportationType: 'flight',
    travelType: 'honeymoon',
    travelerCount: { adults: 2, children: 0, seniors: 0 },
    createdAt: new Date('2025-02-19'),
    updatedAt: new Date('2025-02-21'),
    assignedTo: '顾问小王',
  },
  {
    id: '3',
    userId: 'user-3',
    userName: '王五',
    userEmail: 'wangwu@example.com',
    status: 'confirmed',
    destinations: ['泰国曼谷', '普吉岛'],
    startDate: new Date('2025-02-28'),
    endDate: new Date('2025-03-05'),
    budget: 15000,
    budgetCurrency: 'CNY',
    transportationType: 'flight',
    travelType: 'friends',
    travelerCount: { adults: 4, children: 0, seniors: 0 },
    createdAt: new Date('2025-02-15'),
    updatedAt: new Date('2025-02-18'),
    assignedTo: '顾问小李',
  },
  {
    id: '4',
    userId: 'user-4',
    userName: '赵六',
    userEmail: 'zhaoliu@example.com',
    status: 'completed',
    destinations: ['云南大理', '丽江'],
    startDate: new Date('2025-02-01'),
    endDate: new Date('2025-02-07'),
    budget: 8000,
    budgetCurrency: 'CNY',
    transportationType: 'self-drive',
    travelType: 'family',
    travelerCount: { adults: 2, children: 2, seniors: 0 },
    createdAt: new Date('2025-01-20'),
    updatedAt: new Date('2025-02-08'),
  },
  {
    id: '5',
    userId: 'user-5',
    userName: '孙七',
    userEmail: 'sunqi@example.com',
    status: 'cancelled',
    destinations: ['新加坡'],
    startDate: new Date('2025-03-01'),
    endDate: new Date('2025-03-05'),
    budget: 12000,
    budgetCurrency: 'CNY',
    transportationType: 'flight',
    travelType: 'solo',
    travelerCount: { adults: 1, children: 0, seniors: 0 },
    createdAt: new Date('2025-02-10'),
    updatedAt: new Date('2025-02-15'),
    notes: '用户主动取消',
  },
];

export const MOCK_ORDERS: BookOrder[] = [
  {
    id: 'order-1',
    userId: 'user-4',
    userName: '赵六',
    userEmail: 'zhaoliu@example.com',
    userPhone: '13800138000',
    itineraryId: '4',
    status: 'completed',
    size: 'A4',
    coverType: 'hardcover',
    pageCount: 48,
    quantity: 1,
    totalAmount: 199,
    currency: 'CNY',
    shippingAddress: {
      name: '赵六',
      phone: '13800138000',
      address: '北京市朝阳区xxx街道xxx号',
      city: '北京',
      province: '北京市',
      postalCode: '100000',
      country: '中国',
    },
    trackingNumber: 'SF1234567890',
    shippingCompany: '顺丰速运',
    paidAt: new Date('2025-02-08'),
    shippedAt: new Date('2025-02-09'),
    deliveredAt: new Date('2025-02-11'),
    createdAt: new Date('2025-02-08'),
    updatedAt: new Date('2025-02-11'),
  },
  {
    id: 'order-2',
    userId: 'user-2',
    userName: '李四',
    userEmail: 'lisi@example.com',
    userPhone: '13900139000',
    itineraryId: '2',
    status: 'paid',
    size: 'A4',
    coverType: 'leather',
    pageCount: 56,
    quantity: 2,
    totalAmount: 498,
    currency: 'CNY',
    shippingAddress: {
      name: '李四',
      phone: '13900139000',
      address: '上海市浦东新区xxx路xxx号',
      city: '上海',
      province: '上海市',
      postalCode: '200000',
      country: '中国',
    },
    paidAt: new Date('2025-02-22'),
    createdAt: new Date('2025-02-21'),
    updatedAt: new Date('2025-02-22'),
  },
  {
    id: 'order-3',
    userId: 'user-3',
    userName: '王五',
    userEmail: 'wangwu@example.com',
    userPhone: '13700137000',
    itineraryId: '3',
    status: 'producing',
    size: 'A5',
    coverType: 'paperback',
    pageCount: 40,
    quantity: 1,
    totalAmount: 99,
    currency: 'CNY',
    shippingAddress: {
      name: '王五',
      phone: '13700137000',
      address: '广州市天河区xxx街xxx号',
      city: '广州',
      province: '广东省',
      postalCode: '510000',
      country: '中国',
    },
    paidAt: new Date('2025-02-19'),
    createdAt: new Date('2025-02-18'),
    updatedAt: new Date('2025-02-20'),
  },
];

// 扩展的目的地数据 - 覆盖全球和全国
const generateDestinations = (): DestinationAdmin[] => {
  const destinations: DestinationAdmin[] = [];
  
  // ============ 中国目的地 ============
  
  // 华北地区
  const northChina = [
    { name: '北京', nameEn: 'Beijing', country: '中国', region: '华北', tags: ['历史文化', '古都', '皇家园林'], bestSeason: ['春季', '秋季'], suggestedDays: 4 },
    { name: '天津', nameEn: 'Tianjin', country: '中国', region: '华北', tags: ['滨海城市', '近代建筑', '美食'], bestSeason: ['春季', '秋季'], suggestedDays: 2 },
    { name: '石家庄', nameEn: 'Shijiazhuang', country: '中国', region: '华北', tags: ['红色旅游', '赵州桥', '西柏坡'], bestSeason: ['春季', '秋季'], suggestedDays: 2 },
    { name: '太原', nameEn: 'Taiyuan', country: '中国', region: '华北', tags: ['晋商文化', '平遥古城', '云冈石窟'], bestSeason: ['春季', '秋季'], suggestedDays: 3 },
    { name: '呼和浩特', nameEn: 'Hohhot', country: '中国', region: '华北', tags: ['草原风光', '蒙古族文化', '召庙'], bestSeason: ['夏季', '秋季'], suggestedDays: 2 },
  ];
  
  // 华东地区
  const eastChina = [
    { name: '上海', nameEn: 'Shanghai', country: '中国', region: '华东', tags: ['国际大都市', '外滩', '购物'], bestSeason: ['春季', '秋季'], suggestedDays: 3 },
    { name: '杭州', nameEn: 'Hangzhou', country: '中国', region: '华东', tags: ['西湖', '江南水乡', '茶文化'], bestSeason: ['春季', '夏季', '秋季'], suggestedDays: 3 },
    { name: '南京', nameEn: 'Nanjing', country: '中国', region: '华东', tags: ['六朝古都', '明孝陵', '夫子庙'], bestSeason: ['春季', '秋季'], suggestedDays: 3 },
    { name: '苏州', nameEn: 'Suzhou', country: '中国', region: '华东', tags: ['园林之城', '江南水乡', '古镇'], bestSeason: ['春季', '秋季'], suggestedDays: 2 },
    { name: '无锡', nameEn: 'Wuxi', country: '中国', region: '华东', tags: ['太湖风光', '灵山胜境', '惠山古镇'], bestSeason: ['春季', '秋季'], suggestedDays: 2 },
    { name: '宁波', nameEn: 'Ningbo', country: '中国', region: '华东', tags: ['海港城市', '溪口雪窦山', '天一阁'], bestSeason: ['春季', '秋季'], suggestedDays: 2 },
    { name: '温州', nameEn: 'Wenzhou', country: '中国', region: '华东', tags: ['雁荡山', '楠溪江', '楠溪江古村落'], bestSeason: ['春季', '夏季', '秋季'], suggestedDays: 3 },
    { name: '合肥', nameEn: 'Hefei', country: '中国', region: '华东', tags: ['包公祠', '逍遥津', '三河古镇'], bestSeason: ['春季', '秋季'], suggestedDays: 2 },
    { name: '福州', nameEn: 'Fuzhou', country: '中国', region: '华东', tags: ['三坊七巷', '鼓山', '温泉'], bestSeason: ['春季', '秋季', '冬季'], suggestedDays: 2 },
    { name: '厦门', nameEn: 'Xiamen', country: '中国', region: '华东', tags: ['鼓浪屿', '厦门大学', '曾厝垵'], bestSeason: ['春季', '秋季', '冬季'], suggestedDays: 3 },
    { name: '南昌', nameEn: 'Nanchang', country: '中国', region: '华东', tags: ['滕王阁', '八一起义纪念馆', '秋水广场'], bestSeason: ['春季', '秋季'], suggestedDays: 2 },
    { name: '济南', nameEn: 'Jinan', country: '中国', region: '华东', tags: ['泉城', '趵突泉', '大明湖'], bestSeason: ['春季', '秋季'], suggestedDays: 2 },
    { name: '青岛', nameEn: 'Qingdao', country: '中国', region: '华东', tags: ['滨海城市', '崂山', '啤酒节'], bestSeason: ['夏季', '秋季'], suggestedDays: 3 },
    { name: '烟台', nameEn: 'Yantai', country: '中国', region: '华东', tags: ['蓬莱阁', '长岛', '葡萄酒庄'], bestSeason: ['夏季', '秋季'], suggestedDays: 2 },
  ];
  
  // 华南地区
  const southChina = [
    { name: '广州', nameEn: 'Guangzhou', country: '中国', region: '华南', tags: ['美食之都', '小蛮腰', '长隆'], bestSeason: ['春季', '秋季', '冬季'], suggestedDays: 3 },
    { name: '深圳', nameEn: 'Shenzhen', country: '中国', region: '华南', tags: ['科技之都', '华侨城', '东部华侨城'], bestSeason: ['春季', '秋季', '冬季'], suggestedDays: 3 },
    { name: '珠海', nameEn: 'Zhuhai', country: '中国', region: '华南', tags: ['横琴', '圆明新园', '情侣路'], bestSeason: ['春季', '秋季', '冬季'], suggestedDays: 2 },
    { name: '汕头', nameEn: 'Shantou', country: '中国', region: '华南', tags: ['潮汕文化', '南澳岛', '美食'], bestSeason: ['春季', '秋季', '冬季'], suggestedDays: 2 },
    { name: '佛山', nameEn: 'Foshan', country: '中国', region: '华南', tags: ['黄飞鸿', '祖庙', '西樵山'], bestSeason: ['春季', '秋季', '冬季'], suggestedDays: 2 },
    { name: '南宁', nameEn: 'Nanning', country: '中国', region: '华南', tags: ['青秀山', '南湖公园', '民歌湖'], bestSeason: ['春季', '秋季', '冬季'], suggestedDays: 2 },
    { name: '桂林', nameEn: 'Guilin', country: '中国', region: '华南', tags: ['山水甲天下', '漓江', '阳朔'], bestSeason: ['春季', '夏季', '秋季'], suggestedDays: 4 },
    { name: '北海', nameEn: 'Beihai', country: '中国', region: '华南', tags: ['银滩', '涠洲岛', '老街'], bestSeason: ['春季', '夏季', '秋季'], suggestedDays: 3 },
    { name: '海口', nameEn: 'Haikou', country: '中国', region: '华南', tags: ['骑楼老街', '火山口', '假日海滩'], bestSeason: ['冬季', '春季'], suggestedDays: 2 },
    { name: '三亚', nameEn: 'Sanya', country: '中国', region: '华南', tags: ['天涯海角', '亚龙湾', '蜈支洲岛'], bestSeason: ['冬季', '春季'], suggestedDays: 4 },
  ];
  
  // 西南地区
  const southwestChina = [
    { name: '成都', nameEn: 'Chengdu', country: '中国', region: '西南', tags: ['大熊猫', '火锅', '宽窄巷子'], bestSeason: ['春季', '秋季'], suggestedDays: 3 },
    { name: '重庆', nameEn: 'Chongqing', country: '中国', region: '西南', tags: ['山城', '洪崖洞', '武隆'], bestSeason: ['春季', '秋季'], suggestedDays: 3 },
    { name: '昆明', nameEn: 'Kunming', country: '中国', region: '西南', tags: ['春城', '石林', '滇池'], bestSeason: ['春季', '夏季', '秋季', '冬季'], suggestedDays: 3 },
    { name: '大理', nameEn: 'Dali', country: '中国', region: '西南', tags: ['苍山洱海', '风花雪月', '古城'], bestSeason: ['春季', '夏季', '秋季'], suggestedDays: 3, isPopular: true },
    { name: '丽江', nameEn: 'Lijiang', country: '中国', region: '西南', tags: ['丽江古城', '玉龙雪山', '束河古镇'], bestSeason: ['春季', '夏季', '秋季'], suggestedDays: 4, isPopular: true },
    { name: '香格里拉', nameEn: 'Shangri-La', country: '中国', region: '西南', tags: ['普达措', '松赞林寺', '独克宗古城'], bestSeason: ['夏季', '秋季'], suggestedDays: 3 },
    { name: '西双版纳', nameEn: 'Xishuangbanna', country: '中国', region: '西南', tags: ['热带雨林', '傣族风情', '野象谷'], bestSeason: ['冬季', '春季'], suggestedDays: 3 },
    { name: '贵阳', nameEn: 'Guiyang', country: '中国', region: '西南', tags: ['甲秀楼', '青岩古镇', '黔灵山'], bestSeason: ['春季', '夏季', '秋季'], suggestedDays: 2 },
    { name: '遵义', nameEn: 'Zunyi', country: '中国', region: '西南', tags: ['遵义会议会址', '赤水丹霞', '茅台镇'], bestSeason: ['春季', '秋季'], suggestedDays: 2 },
    { name: '拉萨', nameEn: 'Lhasa', country: '中国', region: '西南', tags: ['布达拉宫', '大昭寺', '纳木错'], bestSeason: ['夏季', '秋季'], suggestedDays: 4, isPopular: true },
    { name: '日喀则', nameEn: 'Shigatse', country: '中国', region: '西南', tags: ['扎什伦布寺', '珠峰大本营', '羊卓雍错'], bestSeason: ['夏季', '秋季'], suggestedDays: 3 },
  ];
  
  // 西北地区
  const northwestChina = [
    { name: '西安', nameEn: "Xi'an", country: '中国', region: '西北', tags: ['兵马俑', '华清池', '回民街'], bestSeason: ['春季', '秋季'], suggestedDays: 4, isPopular: true },
    { name: '延安', nameEn: 'Yan\'an', country: '中国', region: '西北', tags: ['红色旅游', '宝塔山', '枣园'], bestSeason: ['春季', '秋季'], suggestedDays: 2 },
    { name: '兰州', nameEn: 'Lanzhou', country: '中国', region: '西北', tags: ['黄河铁桥', '白塔山', '牛肉面'], bestSeason: ['春季', '秋季'], suggestedDays: 2 },
    { name: '敦煌', nameEn: 'Dunhuang', country: '中国', region: '西北', tags: ['莫高窟', '鸣沙山月牙泉', '阳关'], bestSeason: ['夏季', '秋季'], suggestedDays: 3, isPopular: true },
    { name: '银川', nameEn: 'Yinchuan', country: '中国', region: '西北', tags: ['西夏王陵', '镇北堡影视城', '沙湖'], bestSeason: ['夏季', '秋季'], suggestedDays: 2 },
    { name: '西宁', nameEn: 'Xining', country: '中国', region: '西北', tags: ['塔尔寺', '青海湖', '东关清真大寺'], bestSeason: ['夏季', '秋季'], suggestedDays: 3 },
    { name: '乌鲁木齐', nameEn: 'Urumqi', country: '中国', region: '西北', tags: ['天山天池', '大巴扎', '红山公园'], bestSeason: ['夏季', '秋季'], suggestedDays: 2 },
    { name: '喀什', nameEn: 'Kashgar', country: '中国', region: '西北', tags: ['喀什古城', '艾提尕尔清真寺', '香妃墓'], bestSeason: ['夏季', '秋季'], suggestedDays: 3 },
    { name: '吐鲁番', nameEn: 'Turpan', country: '中国', region: '西北', tags: ['交河故城', '火焰山', '坎儿井'], bestSeason: ['夏季', '秋季'], suggestedDays: 2 },
  ];
  
  // 华中地区
  const centralChina = [
    { name: '郑州', nameEn: 'Zhengzhou', country: '中国', region: '华中', tags: ['少林寺', '黄河游览区', '二七纪念塔'], bestSeason: ['春季', '秋季'], suggestedDays: 2 },
    { name: '洛阳', nameEn: 'Luoyang', country: '中国', region: '华中', tags: ['龙门石窟', '白马寺', '牡丹'], bestSeason: ['春季', '秋季'], suggestedDays: 3 },
    { name: '开封', nameEn: 'Kaifeng', country: '中国', region: '华中', tags: ['清明上河园', '大相国寺', '开封府'], bestSeason: ['春季', '秋季'], suggestedDays: 2 },
    { name: '武汉', nameEn: 'Wuhan', country: '中国', region: '华中', tags: ['黄鹤楼', '东湖', '户部巷'], bestSeason: ['春季', '秋季'], suggestedDays: 3 },
    { name: '宜昌', nameEn: 'Yichang', country: '中国', region: '华中', tags: ['三峡大坝', '三峡人家', '清江画廊'], bestSeason: ['春季', '夏季', '秋季'], suggestedDays: 3 },
    { name: '长沙', nameEn: 'Changsha', country: '中国', region: '华中', tags: ['橘子洲', '岳麓山', '臭豆腐'], bestSeason: ['春季', '秋季'], suggestedDays: 2 },
    { name: '张家界', nameEn: 'Zhangjiajie', country: '中国', region: '华中', tags: ['武陵源', '天门山', '玻璃栈道'], bestSeason: ['春季', '夏季', '秋季'], suggestedDays: 4, isPopular: true },
    { name: '凤凰', nameEn: 'Fenghuang', country: '中国', region: '华中', tags: ['凤凰古城', '沱江', '吊脚楼'], bestSeason: ['春季', '夏季', '秋季'], suggestedDays: 3 },
  ];
  
  // 东北地区
  const northeastChina = [
    { name: '沈阳', nameEn: 'Shenyang', country: '中国', region: '东北', tags: ['故宫', '张氏帅府', '北陵'], bestSeason: ['春季', '秋季'], suggestedDays: 2 },
    { name: '大连', nameEn: 'Dalian', country: '中国', region: '东北', tags: ['滨海城市', '老虎滩', '金石滩'], bestSeason: ['夏季', '秋季'], suggestedDays: 3 },
    { name: '长春', nameEn: 'Changchun', country: '中国', region: '东北', tags: ['伪满皇宫', '净月潭', '长影世纪城'], bestSeason: ['夏季', '秋季'], suggestedDays: 2 },
    { name: '哈尔滨', nameEn: 'Harbin', country: '中国', region: '东北', tags: ['冰雪大世界', '中央大街', '太阳岛'], bestSeason: ['冬季'], suggestedDays: 3, isPopular: true },
    { name: '漠河', nameEn: 'Mohe', country: '中国', region: '东北', tags: ['北极村', '极光', '最北点'], bestSeason: ['冬季', '夏季'], suggestedDays: 3 },
  ];
  
  // ============ 亚洲目的地 ============
  
  const asiaDestinations = [
    { name: '东京', nameEn: 'Tokyo', country: '日本', region: '亚洲', tags: ['城市观光', '美食', '购物'], bestSeason: ['春季', '秋季'], suggestedDays: 5, isPopular: true },
    { name: '大阪', nameEn: 'Osaka', country: '日本', region: '亚洲', tags: ['美食', '环球影城', '道顿堀'], bestSeason: ['春季', '秋季'], suggestedDays: 3, isPopular: true },
    { name: '京都', nameEn: 'Kyoto', country: '日本', region: '亚洲', tags: ['千年古都', '神社', '和服'], bestSeason: ['春季', '秋季'], suggestedDays: 4, isPopular: true },
    { name: '北海道', nameEn: 'Hokkaido', country: '日本', region: '亚洲', tags: ['滑雪', '温泉', '海鲜'], bestSeason: ['冬季', '夏季'], suggestedDays: 5 },
    { name: '冲绳', nameEn: 'Okinawa', country: '日本', region: '亚洲', tags: ['海岛度假', '潜水', '美军基地'], bestSeason: ['春季', '夏季', '秋季'], suggestedDays: 4 },
    { name: '首尔', nameEn: 'Seoul', country: '韩国', region: '亚洲', tags: ['韩流', '购物', '美食'], bestSeason: ['春季', '秋季'], suggestedDays: 3, isPopular: true },
    { name: '济州岛', nameEn: 'Jeju', country: '韩国', region: '亚洲', tags: ['海岛', '火山', '蜜月'], bestSeason: ['春季', '夏季', '秋季'], suggestedDays: 3 },
    { name: '曼谷', nameEn: 'Bangkok', country: '泰国', region: '亚洲', tags: ['佛教文化', '美食', '夜市'], bestSeason: ['冬季', '春季'], suggestedDays: 3, isPopular: true },
    { name: '普吉岛', nameEn: 'Phuket', country: '泰国', region: '亚洲', tags: ['海岛度假', '潜水', '芭东海滩'], bestSeason: ['冬季', '春季'], suggestedDays: 4, isPopular: true },
    { name: '清迈', nameEn: 'Chiang Mai', country: '泰国', region: '亚洲', tags: ['古城', '寺庙', '夜市'], bestSeason: ['冬季', '春季'], suggestedDays: 3 },
    { name: '新加坡', nameEn: 'Singapore', country: '新加坡', region: '亚洲', tags: ['花园城市', '环球影城', '购物'], bestSeason: ['全年'], suggestedDays: 3, isPopular: true },
    { name: '吉隆坡', nameEn: 'Kuala Lumpur', country: '马来西亚', region: '亚洲', tags: ['双子塔', '美食', '购物'], bestSeason: ['全年'], suggestedDays: 2 },
    { name: '槟城', nameEn: 'Penang', country: '马来西亚', region: '亚洲', tags: ['美食', '古迹', '文化'], bestSeason: ['全年'], suggestedDays: 2 },
    { name: '沙巴', nameEn: 'Sabah', country: '马来西亚', region: '亚洲', tags: ['海岛', '潜水', '神山'], bestSeason: ['全年'], suggestedDays: 4 },
    { name: '巴厘岛', nameEn: 'Bali', country: '印度尼西亚', region: '亚洲', tags: ['海岛度假', '冲浪', '文化'], bestSeason: ['全年'], suggestedDays: 5, isPopular: true },
    { name: '雅加达', nameEn: 'Jakarta', country: '印度尼西亚', region: '亚洲', tags: ['首都', '历史', '美食'], bestSeason: ['全年'], suggestedDays: 2 },
    { name: '马尼拉', nameEn: 'Manila', country: '菲律宾', region: '亚洲', tags: ['历史', '文化', '美食'], bestSeason: ['全年'], suggestedDays: 2 },
    { name: '长滩岛', nameEn: 'Boracay', country: '菲律宾', region: '亚洲', tags: ['白沙滩', '海岛度假', '水上活动'], bestSeason: ['全年'], suggestedDays: 4 },
    { name: '宿务', nameEn: 'Cebu', country: '菲律宾', region: '亚洲', tags: ['海岛', '潜水', '鲸鲨'], bestSeason: ['全年'], suggestedDays: 3 },
    { name: '河内', nameEn: 'Hanoi', country: '越南', region: '亚洲', tags: ['千年古都', '美食', '文化'], bestSeason: ['秋季', '冬季', '春季'], suggestedDays: 2 },
    { name: '胡志明市', nameEn: 'Ho Chi Minh City', country: '越南', region: '亚洲', tags: ['法式风情', '美食', '历史'], bestSeason: ['全年'], suggestedDays: 2 },
    { name: '岘港', nameEn: 'Da Nang', country: '越南', region: '亚洲', tags: ['海滨城市', '会安古镇', '美溪沙滩'], bestSeason: ['全年'], suggestedDays: 3 },
    { name: '芽庄', nameEn: 'Nha Trang', country: '越南', region: '亚洲', tags: ['海岛度假', '潜水', '珍珠岛'], bestSeason: ['全年'], suggestedDays: 3 },
    { name: '金边', nameEn: 'Phnom Penh', country: '柬埔寨', region: '亚洲', tags: ['历史', '文化', '美食'], bestSeason: ['全年'], suggestedDays: 2 },
    { name: '暹粒', nameEn: 'Siem Reap', country: '柬埔寨', region: '亚洲', tags: ['吴哥窟', '古迹', '文化'], bestSeason: ['全年'], suggestedDays: 4, isPopular: true },
    { name: '仰光', nameEn: 'Yangon', country: '缅甸', region: '亚洲', tags: ['大金塔', '文化', '历史'], bestSeason: ['全年'], suggestedDays: 2 },
    { name: '蒲甘', nameEn: 'Bagan', country: '缅甸', region: '亚洲', tags: ['千塔之城', '日出', '热气球'], bestSeason: ['全年'], suggestedDays: 3 },
    { name: '加德满都', nameEn: 'Kathmandu', country: '尼泊尔', region: '亚洲', tags: ['雪山佛国', '杜巴广场', '寺庙'], bestSeason: ['春季', '秋季'], suggestedDays: 3 },
    { name: '博卡拉', nameEn: 'Pokhara', country: '尼泊尔', region: '亚洲', tags: ['费瓦湖', '雪山', '徒步'], bestSeason: ['春季', '秋季'], suggestedDays: 3 },
    { name: '科伦坡', nameEn: 'Colombo', country: '斯里兰卡', region: '亚洲', tags: ['首都', '历史', '文化'], bestSeason: ['全年'], suggestedDays: 2 },
    { name: '康提', nameEn: 'Kandy', country: '斯里兰卡', region: '亚洲', tags: ['佛牙寺', '茶园', '文化'], bestSeason: ['全年'], suggestedDays: 2 },
    { name: '马尔代夫', nameEn: 'Maldives', country: '马尔代夫', region: '亚洲', tags: ['海岛度假', '水上别墅', '潜水'], bestSeason: ['全年'], suggestedDays: 5, isPopular: true },
    { name: '迪拜', nameEn: 'Dubai', country: '阿联酋', region: '中东', tags: ['奢华', '哈利法塔', '购物'], bestSeason: ['冬季', '春季'], suggestedDays: 4, isPopular: true },
    { name: '阿布扎比', nameEn: 'Abu Dhabi', country: '阿联酋', region: '中东', tags: ['清真寺', '卢浮宫', '奢华'], bestSeason: ['冬季', '春季'], suggestedDays: 2 },
    { name: '多哈', nameEn: 'Doha', country: '卡塔尔', region: '中东', tags: ['伊斯兰艺术', '现代建筑', '美食'], bestSeason: ['冬季', '春季'], suggestedDays: 2 },
    { name: '伊斯坦布尔', nameEn: 'Istanbul', country: '土耳其', region: '中东', tags: ['欧亚交汇', '蓝色清真寺', '大巴扎'], bestSeason: ['春季', '秋季'], suggestedDays: 4, isPopular: true },
    { name: '安塔利亚', nameEn: 'Antalya', country: '土耳其', region: '中东', tags: ['地中海', '古城', '海滩'], bestSeason: ['春季', '夏季', '秋季'], suggestedDays: 3 },
    { name: '特拉维夫', nameEn: 'Tel Aviv', country: '以色列', region: '中东', tags: ['现代都市', '海滩', '美食'], bestSeason: ['春季', '秋季'], suggestedDays: 2 },
    { name: '耶路撒冷', nameEn: 'Jerusalem', country: '以色列', region: '中东', tags: ['圣城', '历史', '宗教'], bestSeason: ['春季', '秋季'], suggestedDays: 3 },
    { name: '安曼', nameEn: 'Amman', country: '约旦', region: '中东', tags: ['罗马遗址', '城堡山', '美食'], bestSeason: ['春季', '秋季'], suggestedDays: 2 },
    { name: '佩特拉', nameEn: 'Petra', country: '约旦', region: '中东', tags: ['玫瑰古城', '世界遗产', '古迹'], bestSeason: ['春季', '秋季'], suggestedDays: 3 },
  ];
  
  // ============ 欧洲目的地 ============
  
  const europeDestinations = [
    { name: '巴黎', nameEn: 'Paris', country: '法国', region: '欧洲', tags: ['浪漫', '艺术', '历史'], bestSeason: ['春季', '夏季', '秋季'], suggestedDays: 4, isPopular: true },
    { name: '尼斯', nameEn: 'Nice', country: '法国', region: '欧洲', tags: ['蔚蓝海岸', '海滨', '艺术'], bestSeason: ['夏季', '秋季'], suggestedDays: 3 },
    { name: '里昂', nameEn: 'Lyon', country: '法国', region: '欧洲', tags: ['美食', '历史', '文化'], bestSeason: ['春季', '秋季'], suggestedDays: 2 },
    { name: '波尔多', nameEn: 'Bordeaux', country: '法国', region: '欧洲', tags: ['葡萄酒', '庄园', '美食'], bestSeason: ['春季', '秋季'], suggestedDays: 2 },
    { name: '罗马', nameEn: 'Rome', country: '意大利', region: '欧洲', tags: ['永恒之城', '古迹', '美食'], bestSeason: ['春季', '秋季'], suggestedDays: 4, isPopular: true },
    { name: '米兰', nameEn: 'Milan', country: '意大利', region: '欧洲', tags: ['时尚', '购物', '艺术'], bestSeason: ['春季', '秋季'], suggestedDays: 2 },
    { name: '威尼斯', nameEn: 'Venice', country: '意大利', region: '欧洲', tags: ['水城', '贡多拉', '艺术'], bestSeason: ['春季', '秋季'], suggestedDays: 3, isPopular: true },
    { name: '佛罗伦萨', nameEn: 'Florence', country: '意大利', region: '欧洲', tags: ['文艺复兴', '艺术', '美食'], bestSeason: ['春季', '秋季'], suggestedDays: 3 },
    { name: '那不勒斯', nameEn: 'Naples', country: '意大利', region: '欧洲', tags: ['披萨', '庞贝', '维苏威'], bestSeason: ['春季', '秋季'], suggestedDays: 2 },
    { name: '伦敦', nameEn: 'London', country: '英国', region: '欧洲', tags: ['王室', '博物馆', '音乐剧'], bestSeason: ['春季', '夏季', '秋季'], suggestedDays: 4, isPopular: true },
    { name: '爱丁堡', nameEn: 'Edinburgh', country: '英国', region: '欧洲', tags: ['城堡', '艺术节', '历史'], bestSeason: ['夏季', '秋季'], suggestedDays: 3 },
    { name: '曼彻斯特', nameEn: 'Manchester', country: '英国', region: '欧洲', tags: ['足球', '音乐', '工业遗产'], bestSeason: ['春季', '夏季', '秋季'], suggestedDays: 2 },
    { name: '巴塞罗那', nameEn: 'Barcelona', country: '西班牙', region: '欧洲', tags: ['高迪建筑', '海滩', '美食'], bestSeason: ['春季', '夏季', '秋季'], suggestedDays: 4, isPopular: true },
    { name: '马德里', nameEn: 'Madrid', country: '西班牙', region: '欧洲', tags: ['艺术', '美食', '足球'], bestSeason: ['春季', '秋季'], suggestedDays: 3 },
    { name: '塞维利亚', nameEn: 'Seville', country: '西班牙', region: '欧洲', tags: ['弗拉门戈', '阿尔罕布拉宫', '美食'], bestSeason: ['春季', '秋季'], suggestedDays: 3 },
    { name: '里斯本', nameEn: 'Lisbon', country: '葡萄牙', region: '欧洲', tags: ['瓷砖', '蛋挞', '大航海'], bestSeason: ['春季', '夏季', '秋季'], suggestedDays: 3 },
    { name: '波尔图', nameEn: 'Porto', country: '葡萄牙', region: '欧洲', tags: ['波特酒', '河景', '美食'], bestSeason: ['春季', '秋季'], suggestedDays: 2 },
    { name: '阿姆斯特丹', nameEn: 'Amsterdam', country: '荷兰', region: '欧洲', tags: ['运河', '郁金香', '艺术'], bestSeason: ['春季', '夏季', '秋季'], suggestedDays: 3, isPopular: true },
    { name: '布鲁塞尔', nameEn: 'Brussels', country: '比利时', region: '欧洲', tags: ['撒尿小童', '巧克力', '华夫饼'], bestSeason: ['春季', '夏季', '秋季'], suggestedDays: 2 },
    { name: '布鲁日', nameEn: 'Bruges', country: '比利时', region: '欧洲', tags: ['中世纪', '运河', '巧克力'], bestSeason: ['春季', '夏季', '秋季'], suggestedDays: 2 },
    { name: '柏林', nameEn: 'Berlin', country: '德国', region: '欧洲', tags: ['历史', '艺术', '夜生活'], bestSeason: ['春季', '夏季', '秋季'], suggestedDays: 3, isPopular: true },
    { name: '慕尼黑', nameEn: 'Munich', country: '德国', region: '欧洲', tags: ['啤酒节', '巴伐利亚', '城堡'], bestSeason: ['春季', '夏季', '秋季'], suggestedDays: 2 },
    { name: '法兰克福', nameEn: 'Frankfurt', country: '德国', region: '欧洲', tags: ['金融', '现代', '交通枢纽'], bestSeason: ['春季', '夏季', '秋季'], suggestedDays: 2 },
    { name: '科隆', nameEn: 'Cologne', country: '德国', region: '欧洲', tags: ['大教堂', '莱茵河', '啤酒'], bestSeason: ['春季', '夏季', '秋季'], suggestedDays: 2 },
    { name: '维也纳', nameEn: 'Vienna', country: '奥地利', region: '欧洲', tags: ['音乐', '宫殿', '咖啡'], bestSeason: ['春季', '夏季', '秋季'], suggestedDays: 3, isPopular: true },
    { name: '萨尔茨堡', nameEn: 'Salzburg', country: '奥地利', region: '欧洲', tags: ['莫扎特', '音乐之声', '城堡'], bestSeason: ['春季', '夏季', '秋季'], suggestedDays: 2 },
    { name: '苏黎世', nameEn: 'Zurich', country: '瑞士', region: '欧洲', tags: ['金融', '湖景', '购物'], bestSeason: ['春季', '夏季', '秋季'], suggestedDays: 2 },
    { name: '日内瓦', nameEn: 'Geneva', country: '瑞士', region: '欧洲', tags: ['联合国', '湖景', '钟表'], bestSeason: ['春季', '夏季', '秋季'], suggestedDays: 2 },
    { name: '因特拉肯', nameEn: 'Interlaken', country: '瑞士', region: '欧洲', tags: ['少女峰', '雪山', '湖泊'], bestSeason: ['夏季', '秋季'], suggestedDays: 3 },
    { name: '斯德哥尔摩', nameEn: 'Stockholm', country: '瑞典', region: '欧洲', tags: ['北欧', '群岛', '设计'], bestSeason: ['夏季', '秋季'], suggestedDays: 3 },
    { name: '哥本哈根', nameEn: 'Copenhagen', country: '丹麦', region: '欧洲', tags: ['小美人鱼', '设计', '美食'], bestSeason: ['夏季', '秋季'], suggestedDays: 3, isPopular: true },
    { name: '奥斯陆', nameEn: 'Oslo', country: '挪威', region: '欧洲', tags: ['北欧', '博物馆', '峡湾'], bestSeason: ['夏季', '秋季'], suggestedDays: 2 },
    { name: '赫尔辛基', nameEn: 'Helsinki', country: '芬兰', region: '欧洲', tags: ['北欧', '设计', '圣诞老人村'], bestSeason: ['夏季', '冬季'], suggestedDays: 2 },
    { name: '雷克雅未克', nameEn: 'Reykjavik', country: '冰岛', region: '欧洲', tags: ['极光', '温泉', '冰川'], bestSeason: ['冬季', '夏季'], suggestedDays: 4, isPopular: true },
    { name: '华沙', nameEn: 'Warsaw', country: '波兰', region: '欧洲', tags: ['历史', '重建', '美食'], bestSeason: ['春季', '夏季', '秋季'], suggestedDays: 2 },
    { name: '克拉科夫', nameEn: 'Krakow', country: '波兰', region: '欧洲', tags: ['老城', '奥斯维辛', '盐矿'], bestSeason: ['春季', '夏季', '秋季'], suggestedDays: 3 },
    { name: '布拉格', nameEn: 'Prague', country: '捷克', region: '欧洲', tags: ['童话古城', '查理大桥', '啤酒'], bestSeason: ['春季', '夏季', '秋季'], suggestedDays: 3, isPopular: true },
    { name: '布达佩斯', nameEn: 'Budapest', country: '匈牙利', region: '欧洲', tags: ['多瑙河', '温泉', '建筑'], bestSeason: ['春季', '夏季', '秋季'], suggestedDays: 3, isPopular: true },
    { name: '布拉迪斯拉发', nameEn: 'Bratislava', country: '斯洛伐克', region: '欧洲', tags: ['老城', '多瑙河', '美食'], bestSeason: ['春季', '夏季', '秋季'], suggestedDays: 2 },
    { name: '卢布尔雅那', nameEn: 'Ljubljana', country: '斯洛文尼亚', region: '欧洲', tags: ['龙桥', '老城', '湖景'], bestSeason: ['春季', '夏季', '秋季'], suggestedDays: 2 },
    { name: '萨格勒布', nameEn: 'Zagreb', country: '克罗地亚', region: '欧洲', tags: ['老城', '博物馆', '美食'], bestSeason: ['春季', '夏季', '秋季'], suggestedDays: 2 },
    { name: '杜布罗夫尼克', nameEn: 'Dubrovnik', country: '克罗地亚', region: '欧洲', tags: ['君临城', '古城墙', '海滩'], bestSeason: ['夏季', '秋季'], suggestedDays: 3 },
    { name: '雅典', nameEn: 'Athens', country: '希腊', region: '欧洲', tags: ['卫城', '历史', '美食'], bestSeason: ['春季', '夏季', '秋季'], suggestedDays: 3, isPopular: true },
    { name: '圣托里尼', nameEn: 'Santorini', country: '希腊', region: '欧洲', tags: ['蓝白小镇', '日落', '爱琴海'], bestSeason: ['夏季', '秋季'], suggestedDays: 3, isPopular: true },
    { name: '米科诺斯', nameEn: 'Mykonos', country: '希腊', region: '欧洲', tags: ['海岛', '夜生活', '海滩'], bestSeason: ['夏季', '秋季'], suggestedDays: 3 },
    { name: '克里特岛', nameEn: 'Crete', country: '希腊', region: '欧洲', tags: ['最大岛屿', '历史', '美食'], bestSeason: ['夏季', '秋季'], suggestedDays: 4 },
    { name: '索非亚', nameEn: 'Sofia', country: '保加利亚', region: '欧洲', tags: ['东正教', '历史', '美食'], bestSeason: ['春季', '夏季', '秋季'], suggestedDays: 2 },
    { name: '布加勒斯特', nameEn: 'Bucharest', country: '罗马尼亚', region: '欧洲', tags: ['历史', '建筑', '美食'], bestSeason: ['春季', '夏季', '秋季'], suggestedDays: 2 },
    { name: '贝尔格莱德', nameEn: 'Belgrade', country: '塞尔维亚', region: '欧洲', tags: ['历史', '夜生活', '美食'], bestSeason: ['春季', '夏季', '秋季'], suggestedDays: 2 },
  ];
  
  // ============ 美洲目的地 ============
  
  const americaDestinations = [
    { name: '纽约', nameEn: 'New York', country: '美国', region: '美洲', tags: ['不夜城', '自由女神', '购物'], bestSeason: ['春季', '秋季'], suggestedDays: 4, isPopular: true },
    { name: '洛杉矶', nameEn: 'Los Angeles', country: '美国', region: '美洲', tags: ['好莱坞', '星光大道', '海滩'], bestSeason: ['全年'], suggestedDays: 4, isPopular: true },
    { name: '旧金山', nameEn: 'San Francisco', country: '美国', region: '美洲', tags: ['金门大桥', '渔人码头', '硅谷'], bestSeason: ['全年'], suggestedDays: 3, isPopular: true },
    { name: '拉斯维加斯', nameEn: 'Las Vegas', country: '美国', region: '美洲', tags: ['赌城', '娱乐', '购物'], bestSeason: ['春季', '秋季'], suggestedDays: 3, isPopular: true },
    { name: '芝加哥', nameEn: 'Chicago', country: '美国', region: '美洲', tags: ['建筑', '博物馆', '美食'], bestSeason: ['春季', '夏季', '秋季'], suggestedDays: 3 },
    { name: '迈阿密', nameEn: 'Miami', country: '美国', region: '美洲', tags: ['海滩', '南海滩', '艺术'], bestSeason: ['冬季', '春季'], suggestedDays: 3 },
    { name: '西雅图', nameEn: 'Seattle', country: '美国', region: '美洲', tags: ['太空针', '星巴克', '科技'], bestSeason: ['春季', '夏季', '秋季'], suggestedDays: 2 },
    { name: '波士顿', nameEn: 'Boston', country: '美国', region: '美洲', tags: ['大学城', '历史', '海鲜'], bestSeason: ['春季', '夏季', '秋季'], suggestedDays: 3 },
    { name: '华盛顿', nameEn: 'Washington D.C.', country: '美国', region: '美洲', tags: ['政治中心', '博物馆', '历史'], bestSeason: ['春季', '秋季'], suggestedDays: 3 },
    { name: '檀香山', nameEn: 'Honolulu', country: '美国', region: '美洲', tags: ['夏威夷', '海滩', '冲浪'], bestSeason: ['全年'], suggestedDays: 4, isPopular: true },
    { name: '多伦多', nameEn: 'Toronto', country: '加拿大', region: '美洲', tags: ['多元文化', 'CN塔', '尼亚加拉'], bestSeason: ['春季', '夏季', '秋季'], suggestedDays: 3 },
    { name: '温哥华', nameEn: 'Vancouver', country: '加拿大', region: '美洲', tags: ['宜居城市', '公园', '美食'], bestSeason: ['全年'], suggestedDays: 3, isPopular: true },
    { name: '蒙特利尔', nameEn: 'Montreal', country: '加拿大', region: '美洲', tags: ['法式风情', '老城', '美食'], bestSeason: ['春季', '夏季', '秋季'], suggestedDays: 3 },
    { name: '墨西哥城', nameEn: 'Mexico City', country: '墨西哥', region: '美洲', tags: ['历史', '文化', '美食'], bestSeason: ['全年'], suggestedDays: 3 },
    { name: '坎昆', nameEn: 'Cancun', country: '墨西哥', region: '美洲', tags: ['加勒比海', '海滩', '玛雅遗址'], bestSeason: ['冬季', '春季'], suggestedDays: 4, isPopular: true },
    { name: '哈瓦那', nameEn: 'Havana', country: '古巴', region: '美洲', tags: ['老爷车', '莫吉托', '老城'], bestSeason: ['全年'], suggestedDays: 3 },
    { name: '圣胡安', nameEn: 'San Juan', country: '波多黎各', region: '美洲', tags: ['加勒比海', '老城', '海滩'], bestSeason: ['全年'], suggestedDays: 2 },
    { name: '巴拿马城', nameEn: 'Panama City', country: '巴拿马', region: '美洲', tags: ['运河', '老城', '购物'], bestSeason: ['全年'], suggestedDays: 2 },
    { name: '波哥大', nameEn: 'Bogota', country: '哥伦比亚', region: '美洲', tags: ['黄金博物馆', '咖啡', '文化'], bestSeason: ['全年'], suggestedDays: 2 },
    { name: '卡塔赫纳', nameEn: 'Cartagena', country: '哥伦比亚', region: '美洲', tags: ['加勒比海', '老城', '海滩'], bestSeason: ['全年'], suggestedDays: 3 },
    { name: '利马', nameEn: 'Lima', country: '秘鲁', region: '美洲', tags: ['美食', '海边', '历史'], bestSeason: ['全年'], suggestedDays: 3 },
    { name: '库斯科', nameEn: 'Cusco', country: '秘鲁', region: '美洲', tags: ['马丘比丘', '印加', '高原'], bestSeason: ['全年'], suggestedDays: 4, isPopular: true },
    { name: '布宜诺斯艾利斯', nameEn: 'Buenos Aires', country: '阿根廷', region: '美洲', tags: ['探戈', '牛排', '欧洲风情'], bestSeason: ['春季', '秋季'], suggestedDays: 3, isPopular: true },
    { name: '伊瓜苏', nameEn: 'Iguazu', country: '阿根廷', region: '美洲', tags: ['大瀑布', '自然', '奇观'], bestSeason: ['全年'], suggestedDays: 3 },
    { name: '圣地亚哥', nameEn: 'Santiago', country: '智利', region: '美洲', tags: ['葡萄酒', '城市', '山景'], bestSeason: ['全年'], suggestedDays: 2 },
    { name: '里约热内卢', nameEn: 'Rio de Janeiro', country: '巴西', region: '美洲', tags: ['基督像', '海滩', '狂欢节'], bestSeason: ['全年'], suggestedDays: 4, isPopular: true },
    { name: '圣保罗', nameEn: 'Sao Paulo', country: '巴西', region: '美洲', tags: ['大都市', '美食', '文化'], bestSeason: ['全年'], suggestedDays: 2 },
  ];
  
  // ============ 大洋洲目的地 ============
  
  const oceaniaDestinations = [
    { name: '悉尼', nameEn: 'Sydney', country: '澳大利亚', region: '大洋洲', tags: ['歌剧院', '海港大桥', '海滩'], bestSeason: ['春季', '秋季'], suggestedDays: 4, isPopular: true },
    { name: '墨尔本', nameEn: 'Melbourne', country: '澳大利亚', region: '大洋洲', tags: ['咖啡', '艺术', '体育'], bestSeason: ['春季', '秋季'], suggestedDays: 4, isPopular: true },
    { name: '布里斯班', nameEn: 'Brisbane', country: '澳大利亚', region: '大洋洲', tags: ['阳光', '河景', '附近大堡礁'], bestSeason: ['全年'], suggestedDays: 3 },
    { name: '黄金海岸', nameEn: 'Gold Coast', country: '澳大利亚', region: '大洋洲', tags: ['海滩', '主题公园', '冲浪'], bestSeason: ['全年'], suggestedDays: 3, isPopular: true },
    { name: '凯恩斯', nameEn: 'Cairns', country: '澳大利亚', region: '大洋洲', tags: ['大堡礁', '热带雨林', '潜水'], bestSeason: ['全年'], suggestedDays: 4, isPopular: true },
    { name: '珀斯', nameEn: 'Perth', country: '澳大利亚', region: '大洋洲', tags: ['最孤独城市', '海滩', '葡萄酒'], bestSeason: ['全年'], suggestedDays: 3 },
    { name: '阿德莱德', nameEn: 'Adelaide', country: '澳大利亚', region: '大洋洲', tags: ['节庆', '葡萄酒', '美食'], bestSeason: ['全年'], suggestedDays: 2 },
    { name: '霍巴特', nameEn: 'Hobart', country: '澳大利亚', region: '大洋洲', tags: ['塔斯马尼亚', '古今艺术博物馆', '海鲜'], bestSeason: ['全年'], suggestedDays: 2 },
    { name: '达尔文', nameEn: 'Darwin', country: '澳大利亚', region: '大洋洲', tags: ['热带', '鳄鱼', '自然'], bestSeason: ['旱季'], suggestedDays: 2 },
    { name: '奥克兰', nameEn: 'Auckland', country: '新西兰', region: '大洋洲', tags: ['千帆之都', '天空塔', '美食'], bestSeason: ['全年'], suggestedDays: 3, isPopular: true },
    { name: '惠灵顿', nameEn: 'Wellington', country: '新西兰', region: '大洋洲', tags: ['首都', '文化', '咖啡'], bestSeason: ['全年'], suggestedDays: 2 },
    { name: '皇后镇', nameEn: 'Queenstown', country: '新西兰', region: '大洋洲', tags: ['冒险之都', '湖景', '滑雪场'], bestSeason: ['全年'], suggestedDays: 4, isPopular: true },
    { name: '基督城', nameEn: 'Christchurch', country: '新西兰', region: '大洋洲', tags: ['花园城市', '重建', '南极中心'], bestSeason: ['全年'], suggestedDays: 2 },
    { name: '罗托鲁瓦', nameEn: 'Rotorua', country: '新西兰', region: '大洋洲', tags: ['地热', '毛利文化', '温泉'], bestSeason: ['全年'], suggestedDays: 2 },
    { name: '但尼丁', nameEn: 'Dunedin', country: '新西兰', region: '大洋洲', tags: ['苏格兰风情', '野生动物', '海滩'], bestSeason: ['全年'], suggestedDays: 2 },
    { name: '纳皮尔', nameEn: 'Napier', country: '新西兰', region: '大洋洲', tags: ['装饰艺术', '葡萄酒', '海滩'], bestSeason: ['全年'], suggestedDays: 2 },
    { name: '斐济', nameEn: 'Fiji', country: '斐济', region: '大洋洲', tags: ['海岛度假', '潜水', '原住民'], bestSeason: ['全年'], suggestedDays: 5, isPopular: true },
    { name: '巴厘岛', nameEn: 'Bali', country: '印度尼西亚', region: '大洋洲', tags: ['海岛度假', '文化', '海滩'], bestSeason: ['全年'], suggestedDays: 5, isPopular: true },
    { name: '塞班岛', nameEn: 'Saipan', country: '美国', region: '大洋洲', tags: ['海岛度假', '潜水', '海滩'], bestSeason: ['全年'], suggestedDays: 4 },
    { name: '关岛', nameEn: 'Guam', country: '美国', region: '大洋洲', tags: ['海岛度假', '购物', '海滩'], bestSeason: ['全年'], suggestedDays: 4 },
  ];
  
  // ============ 非洲目的地 ============
  
  const africaDestinations = [
    { name: '开罗', nameEn: 'Cairo', country: '埃及', region: '非洲', tags: ['金字塔', '狮身人面像', '历史'], bestSeason: ['冬季', '春季'], suggestedDays: 4, isPopular: true },
    { name: '卢克索', nameEn: 'Luxor', country: '埃及', region: '非洲', tags: ['神庙', '帝王谷', '尼罗河'], bestSeason: ['冬季', '春季'], suggestedDays: 3 },
    { name: '阿斯旺', nameEn: 'Aswan', country: '埃及', region: '非洲', tags: ['水坝', '尼罗河', '努比亚村'], bestSeason: ['冬季', '春季'], suggestedDays: 2 },
    { name: '沙姆沙伊赫', nameEn: 'Sharm El-Sheikh', country: '埃及', region: '非洲', tags: ['红海', '潜水', '度假'], bestSeason: ['全年'], suggestedDays: 3 },
    { name: '开普敦', nameEn: 'Cape Town', country: '南非', region: '非洲', tags: ['好望角', '桌山', '海滩'], bestSeason: ['春季', '秋季'], suggestedDays: 4, isPopular: true },
    { name: '约翰内斯堡', nameEn: 'Johannesburg', country: '南非', region: '非洲', tags: ['城市', '历史', '购物'], bestSeason: ['全年'], suggestedDays: 2 },
    { name: '比勒陀利亚', nameEn: 'Pretoria', country: '南非', region: '非洲', tags: ['首都', '使馆区', '蓝花楹'], bestSeason: ['全年'], suggestedDays: 2 },
    { name: '德班', nameEn: 'Durban', country: '南非', region: '非洲', tags: ['海滩', '印度文化', '美食'], bestSeason: ['全年'], suggestedDays: 2 },
    { name: '马拉喀什', nameEn: 'Marrakech', country: '摩洛哥', region: '非洲', tags: ['红城', '市集', '沙漠'], bestSeason: ['春季', '秋季'], suggestedDays: 3, isPopular: true },
    { name: '卡萨布兰卡', nameEn: 'Casablanca', country: '摩洛哥', region: '非洲', tags: ['电影', '海边', '现代'], bestSeason: ['春季', '秋季'], suggestedDays: 2 },
    { name: '舍夫沙万', nameEn: 'Chefchaouen', country: '摩洛哥', region: '非洲', tags: ['蓝色小镇', '摄影', '悠闲'], bestSeason: ['春季', '秋季'], suggestedDays: 2 },
    { name: '菲斯', nameEn: 'Fes', country: '摩洛哥', region: '非洲', tags: ['老城', '皮革', '文化'], bestSeason: ['春季', '秋季'], suggestedDays: 2 },
    { name: '突尼斯城', nameEn: 'Tunis', country: '突尼斯', region: '非洲', tags: ['迦太基', '蓝白小镇', '海边'], bestSeason: ['春季', '秋季'], suggestedDays: 2 },
    { name: '苏塞', nameEn: 'Sousse', country: '突尼斯', region: '非洲', tags: ['海滩', '老城', '麦地那'], bestSeason: ['春季', '秋季'], suggestedDays: 2 },
    { name: '内罗毕', nameEn: 'Nairobi', country: '肯尼亚', region: '非洲', tags: ['肯尼亚', '国家公园', 'Safari'], bestSeason: ['全年'], suggestedDays: 3 },
    { name: '安博塞利', nameEn: 'Amboseli', country: '肯尼亚', region: '非洲', tags: ['乞力马扎罗', '大象', 'Safari'], bestSeason: ['全年'], suggestedDays: 3 },
    { name: '马赛马拉', nameEn: 'Masai Mara', country: '肯尼亚', region: '非洲', tags: ['大迁徙', '狮子', 'Safari'], bestSeason: ['全年'], suggestedDays: 4, isPopular: true },
    { name: '桑给巴尔', nameEn: 'Zanzibar', country: '坦桑尼亚', region: '非洲', tags: ['海岛', '香料', '海滩'], bestSeason: ['全年'], suggestedDays: 3 },
    { name: '塞伦盖蒂', nameEn: 'Serengeti', country: '坦桑尼亚', region: '非洲', tags: ['大迁徙', 'Safari', '自然'], bestSeason: ['全年'], suggestedDays: 4 },
    { name: '毛里求斯', nameEn: 'Mauritius', country: '毛里求斯', region: '非洲', tags: ['海岛度假', '蜜月', '海滩'], bestSeason: ['全年'], suggestedDays: 5, isPopular: true },
    { name: '塞舌尔', nameEn: 'Seychelles', country: '塞舌尔', region: '非洲', tags: ['海岛度假', '蜜月', '潜水'], bestSeason: ['全年'], suggestedDays: 5, isPopular: true },
    { name: '留尼汪', nameEn: 'Reunion', country: '法国', region: '非洲', tags: ['海岛', '火山', '徒步'], bestSeason: ['全年'], suggestedDays: 4 },
    { name: '纳米比亚', nameEn: 'Namibia', country: '纳米比亚', region: '非洲', tags: ['红沙漠', '死亡谷', '野生动物'], bestSeason: ['全年'], suggestedDays: 4 },
  ];
  
  // 合并所有目的地
  const allDestinations = [
    ...northChina,
    ...eastChina,
    ...southChina,
    ...southwestChina,
    ...northwestChina,
    ...centralChina,
    ...northeastChina,
    ...asiaDestinations,
    ...europeDestinations,
    ...americaDestinations,
    ...oceaniaDestinations,
    ...africaDestinations,
  ];
  
  // 为每个目的地添加完整属性和可靠的图片
  const imageUrls = [
    'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop', // 城市风景
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop', // 山脉
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop', // 海滩
    'https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=800&h=600&fit=crop', // 古建筑
    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&h=600&fit=crop', // 湖泊
    'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&h=600&fit=crop', // 夜景
    'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&h=600&fit=crop', // 森林
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop', // 雪山
    'https://images.unsplash.com/photo-1501785888041-af3ef281b399?w=800&h=600&fit=crop', // 城市天际线
    'https://images.unsplash.com/photo-1504598318550-17eba1008a68?w=800&h=600&fit=crop', // 日落
  ];
  
  let idCounter = 1;
  allDestinations.forEach((dest: any, index: number) => {
    const imageIndex = index % imageUrls.length;
    const fullDest: DestinationAdmin = {
      id: `dest-${idCounter++}`,
      name: dest.name,
      nameEn: dest.nameEn || '',
      country: dest.country,
      city: dest.name,
      region: dest.region || '',
      description: `${dest.name}是${dest.country}的著名旅游城市，以${dest.tags.join('、')}闻名。这里有独特的文化魅力和美丽的风景，是旅行者的理想目的地。`,
      shortDescription: `${dest.country}${dest.name}旅游`,
      imageUrl: imageUrls[imageIndex],
      gallery: [
        imageUrls[imageIndex],
        imageUrls[(imageIndex + 1) % imageUrls.length],
      ],
      bestSeason: dest.bestSeason,
      suggestedDays: dest.suggestedDays,
      isPopular: dest.isPopular || false,
      sortOrder: dest.isPopular ? 1 : 100 + index,
      tags: dest.tags,
      status: 'active',
      createdAt: new Date('2024-01-01'),
      updatedAt: new Date(),
    };
    destinations.push(fullDest);
  });
  
  return destinations;
};

export const MOCK_DESTINATIONS: DestinationAdmin[] = generateDestinations();

export const MOCK_DASHBOARD_STATS: DashboardStats = {
  totalUsers: 1234,
  newUsersToday: 15,
  totalItineraries: 856,
  pendingItineraries: 23,
  totalOrders: 234,
  pendingOrders: 8,
  totalRevenue: 45678,
  revenueThisMonth: 12345,
  popularDestinations: [
    { name: '东京', count: 156 },
    { name: '巴黎', count: 134 },
    { name: '曼谷', count: 120 },
    { name: '大理', count: 98 },
    { name: '新加坡', count: 87 },
    { name: '伦敦', count: 76 },
    { name: '纽约', count: 65 },
    { name: '悉尼', count: 54 },
  ],
  recentActivities: [
    {
      id: 'act-1',
      type: 'itinerary',
      title: '新行程提交',
      description: '张三提交了东京7日游需求',
      time: new Date(Date.now() - 1000 * 60 * 30),
    },
    {
      id: 'act-2',
      type: 'order',
      title: '新订单支付',
      description: '李四支付了纪念书册订单 ¥498',
      time: new Date(Date.now() - 1000 * 60 * 60 * 2),
    },
    {
      id: 'act-3',
      type: 'user',
      title: '新用户注册',
      description: '王五完成注册',
      time: new Date(Date.now() - 1000 * 60 * 60 * 3),
    },
    {
      id: 'act-4',
      type: 'order',
      title: '订单发货',
      description: '赵六的纪念书册已发货',
      time: new Date(Date.now() - 1000 * 60 * 60 * 5),
    },
  ],
};
