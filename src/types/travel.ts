export interface TravelRequest {
  departureDate: string;
  days: number;
  destinations: string[];
  budget: {
    min: number;
    max: number;
    currency: 'CNY' | 'USD';
  };
  travelStyle: 'free' | 'semi-free' | 'group';
  travelType: 'family' | 'colleague' | 'friends' | 'honeymoon' | 'couple' | 'solo';
  travelers: {
    adults: number;
    children: number;
    seniors: number;
  };
  preferences: ('relax' | 'culture' | 'food' | 'beach' | 'adventure' | 'luxury')[];
  specialRequirements?: string;
}

export interface ItineraryDay {
  day: number;
  date: string;
  title: string;
  activities: ItineraryActivity[];
  hotel: HotelInfo;
  meals: MealInfo[];
  weather: WeatherInfo;
}

export interface ItineraryActivity {
  time: string;
  type: 'sightseeing' | 'transport' | 'meal' | 'hotel' | 'free';
  title: string;
  description: string;
  duration: string;
  location: string;
  price?: number;
  image?: string;
  details?: {
    openTime?: string;
    ticketPrice?: number;
    bookingRequired?: boolean;
  };
}

export interface HotelInfo {
  name: string;
  starRating: number;
  location: string;
  pricePerNight: number;
  amenities: string[];
  image: string;
  rating: number;
  reviews: number;
  cancelable: boolean;
}

export interface MealInfo {
  time: string;
  type: 'breakfast' | 'lunch' | 'dinner';
  restaurantName: string;
  cuisine: string;
  pricePerPerson: number;
  recommendedDishes: string[];
  address: string;
  rating: number;
  image: string;
}

export interface WeatherInfo {
  date: string;
  highTemp: number;
  lowTemp: number;
  condition: 'sunny' | 'cloudy' | 'rainy' | 'snowy';
  description: string;
  clothingAdvice: string;
}

export interface TransportationInfo {
  type: 'flight' | 'train' | 'bus' | 'taxi' | 'private';
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  price: number;
  operator: string;
  details: string;
}

export interface BudgetBreakdown {
  total: number;
  currency: 'CNY' | 'USD';
  items: {
    category: 'transportation' | 'accommodation' | 'tickets' | 'dining' | 'service' | 'other';
    name: string;
    amount: number;
  }[];
}

export interface Itinerary {
  id: string;
  request: TravelRequest;
  title: string;
  description: string;
  days: ItineraryDay[];
  budget: BudgetBreakdown;
  transportation: TransportationInfo[];
  tips: string[];
  highlights: string[];
  createdAt: string;
  updatedAt: string;
}

export interface TravelDestination {
  id: string;
  name: string;
  country: string;
  description: string;
  image: string;
  bestTimeToVisit: string;
  averageBudgetPerDay: number;
  rating: number;
  reviews: number;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  destination: string;
  rating: number;
  comment: string;
  date: string;
}

export interface BookOption {
  id: string;
  name: string;
  description: string;
  price: number;
  size: string;
  pages: number;
  binding: string;
  paperType: string;
  deliveryDays: number;
  image: string;
}
