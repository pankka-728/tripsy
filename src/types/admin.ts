export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: 'super_admin' | 'admin' | 'editor' | 'viewer';
  avatar?: string;
  createdAt: Date;
  lastLoginAt?: Date;
}

export interface ItineraryAdmin {
  id: string;
  userId: string;
  userName: string;
  userEmail: string;
  status: 'pending' | 'planning' | 'confirmed' | 'completed' | 'cancelled';
  destinations: string[];
  startDate: Date;
  endDate: Date;
  budget: number;
  budgetCurrency: 'CNY' | 'USD';
  transportationType: string;
  travelType: string;
  travelerCount: { adults: number; children: number; seniors: number };
  createdAt: Date;
  updatedAt: Date;
  assignedTo?: string;
  notes?: string;
}

export interface BookOrder {
  id: string;
  userId: string;
  userName: string;
  userEmail: string;
  userPhone: string;
  itineraryId: string;
  status: 'pending_payment' | 'paid' | 'producing' | 'shipped' | 'completed' | 'refunded';
  size: 'A5' | 'A4' | 'A3';
  coverType: 'paperback' | 'hardcover' | 'leather';
  pageCount: number;
  quantity: number;
  totalAmount: number;
  currency: 'CNY' | 'USD';
  shippingAddress: {
    name: string;
    phone: string;
    address: string;
    city: string;
    province: string;
    postalCode: string;
    country: string;
  };
  trackingNumber?: string;
  shippingCompany?: string;
  paidAt?: Date;
  shippedAt?: Date;
  deliveredAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface DestinationAdmin {
  id: string;
  name: string;
  nameEn?: string;
  country: string;
  city?: string;
  description: string;
  shortDescription?: string;
  imageUrl: string;
  gallery?: string[];
  bestSeason: string[];
  suggestedDays: number;
  isPopular: boolean;
  sortOrder: number;
  tags: string[];
  status: 'active' | 'inactive';
  createdAt: Date;
  updatedAt: Date;
}

export interface AttractionAdmin {
  id: string;
  destinationId: string;
  name: string;
  nameEn?: string;
  description: string;
  imageUrl: string;
  address?: string;
  openingHours?: string;
  ticketPrice?: string;
  duration?: string;
  rating?: number;
  tags: string[];
  sortOrder: number;
  status: 'active' | 'inactive';
  createdAt: Date;
  updatedAt: Date;
}

export interface DashboardStats {
  totalUsers: number;
  newUsersToday: number;
  totalItineraries: number;
  pendingItineraries: number;
  totalOrders: number;
  pendingOrders: number;
  totalRevenue: number;
  revenueThisMonth: number;
  popularDestinations: { name: string; count: number }[];
  recentActivities: {
    id: string;
    type: 'itinerary' | 'order' | 'user';
    title: string;
    description: string;
    time: Date;
  }[];
}
