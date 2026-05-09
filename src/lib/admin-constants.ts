import {
  LayoutDashboard,
  MapPin,
  Plane,
  Users,
  Settings,
  BarChart3,
  FileText,
  Package,
  MessageSquare,
  DollarSign
} from 'lucide-react';

export const ADMIN_NAV_ITEMS = [
  {
    title: '仪表盘',
    href: '/admin',
    icon: LayoutDashboard,
  },
  {
    title: '行程管理',
    href: '/admin/itineraries',
    icon: Plane,
  },
  {
    title: '订单管理',
    href: '/admin/orders',
    icon: Package,
  },
  {
    title: '内容管理',
    href: '/admin/content',
    icon: FileText,
    children: [
      { title: '目的地', href: '/admin/content/destinations', icon: MapPin },
      { title: '景点', href: '/admin/content/attractions', icon: MapPin },
    ],
  },
  {
    title: '用户管理',
    href: '/admin/users',
    icon: Users,
  },
  {
    title: '数据统计',
    href: '/admin/analytics',
    icon: BarChart3,
  },
  {
    title: '财务管理',
    href: '/admin/finance',
    icon: DollarSign,
  },
  {
    title: '消息中心',
    href: '/admin/messages',
    icon: MessageSquare,
  },
  {
    title: '系统设置',
    href: '/admin/settings',
    icon: Settings,
  },
];

export const ITINERARY_STATUS = {
  pending: { label: '待处理', class: 'bg-yellow-100 text-yellow-800' },
  planning: { label: '规划中', class: 'bg-blue-100 text-blue-800' },
  confirmed: { label: '已确认', class: 'bg-green-100 text-green-800' },
  completed: { label: '已完成', class: 'bg-gray-100 text-gray-800' },
  cancelled: { label: '已取消', class: 'bg-red-100 text-red-800' },
} as const;

export const ORDER_STATUS = {
  pending_payment: { label: '待支付', class: 'bg-yellow-100 text-yellow-800' },
  paid: { label: '已支付', class: 'bg-blue-100 text-blue-800' },
  producing: { label: '制作中', class: 'bg-purple-100 text-purple-800' },
  shipped: { label: '已发货', class: 'bg-orange-100 text-orange-800' },
  completed: { label: '已完成', class: 'bg-green-100 text-green-800' },
  refunded: { label: '已退款', class: 'bg-red-100 text-red-800' },
} as const;

export const BOOK_SIZE_OPTIONS = [
  { value: 'A5', label: 'A5 (148×210mm)', price: 99 },
  { value: 'A4', label: 'A4 (210×297mm)', price: 149 },
  { value: 'A3', label: 'A3 (297×420mm)', price: 199 },
];

export const BOOK_COVER_OPTIONS = [
  { value: 'paperback', label: '平装', price: 0 },
  { value: 'hardcover', label: '精装', price: 50 },
  { value: 'leather', label: '皮面', price: 100 },
];

export const ADMIN_ROLES = {
  super_admin: { label: '超级管理员', permissions: ['all'] },
  admin: { label: '管理员', permissions: ['itineraries', 'orders', 'content', 'users'] },
  editor: { label: '编辑', permissions: ['content'] },
  viewer: { label: '访客', permissions: ['view'] },
} as const;
