// 会员相关类型定义

export interface User {
  id: string;
  phone?: string;
  email?: string;
  wechatOpenId?: string;
  nickname: string;
  avatar?: string;
  gender?: 'male' | 'female' | 'other';
  birthday?: string;
  bio?: string;
  // 会员等级
  membershipLevel: 'normal' | 'silver' | 'gold' | 'platinum';
  // 会员积分
  points: number;
  // 优惠券数量
  couponCount: number;
  // 旅行次数
  tripCount: number;
  // 注册时间
  createdAt: Date;
  // 最后登录时间
  lastLoginAt: Date;
  // 是否实名认证
  isVerified: boolean;
  // 偏好设置
  preferences: {
    emailNotification: boolean;
    smsNotification: boolean;
    wechatNotification: boolean;
    travelStyle?: string[];
    preferredDestinations?: string[];
  };
}

export interface LoginMethod {
  type: 'phone' | 'email' | 'wechat';
  label: string;
  icon: string;
  description: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
}

export interface LoginFormData {
  // 手机号登录
  phone?: string;
  code?: string;
  // 邮箱登录
  email?: string;
  password?: string;
  // 微信登录
  wechatCode?: string;
}

export interface VerificationCode {
  phone: string;
  code: string;
  expiresAt: Date;
}

// 登录方式配置
export const LOGIN_METHODS: LoginMethod[] = [
  {
    type: 'phone',
    label: '手机号登录',
    icon: 'phone',
    description: '快速安全，推荐使用'
  },
  {
    type: 'email',
    label: '邮箱登录',
    icon: 'email',
    description: '传统方式，稳定可靠'
  },
  {
    type: 'wechat',
    label: '微信一键登录',
    icon: 'wechat',
    description: '微信授权，一秒登录'
  }
];

// 会员等级配置
export const MEMBERSHIP_LEVELS = {
  normal: {
    name: '普通会员',
    icon: 'user',
    color: 'gray',
    discount: 1.0,
    pointsMultiplier: 1,
    benefits: ['基础服务', '积分积累']
  },
  silver: {
    name: '银卡会员',
    icon: 'award',
    color: 'gray',
    discount: 0.95,
    pointsMultiplier: 1.5,
    benefits: ['95折优惠', '1.5倍积分', '专属客服']
  },
  gold: {
    name: '金卡会员',
    icon: 'award',
    color: 'yellow',
    discount: 0.9,
    pointsMultiplier: 2,
    benefits: ['9折优惠', '2倍积分', '优先预订', '生日礼包']
  },
  platinum: {
    name: '白金会员',
    icon: 'crown',
    color: 'purple',
    discount: 0.85,
    pointsMultiplier: 3,
    benefits: ['85折优惠', '3倍积分', 'VIP通道', '专属定制', '免费保险']
  }
};

// 模拟当前用户（用于演示）
export const MOCK_USER: User = {
  id: 'user-001',
  phone: '138****8888',
  email: 'user@example.com',
  nickname: '旅行达人',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
  gender: 'male',
  birthday: '1990-01-15',
  bio: '热爱旅行，喜欢探索世界各地的风土人情。已经去过20+个国家，50+个城市。',
  membershipLevel: 'gold',
  points: 12580,
  couponCount: 5,
  tripCount: 12,
  createdAt: new Date('2023-06-15'),
  lastLoginAt: new Date(),
  isVerified: true,
  preferences: {
    emailNotification: true,
    smsNotification: false,
    wechatNotification: true,
    travelStyle: ['轻松休闲', '美食打卡', '深度人文'],
    preferredDestinations: ['日本', '泰国', '欧洲']
  }
};
