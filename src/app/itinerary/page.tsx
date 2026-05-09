"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { 
  Calendar, 
  MapPin, 
  DollarSign, 
  Sun, 
  Cloud, 
  CloudRain, 
  Snowflake,
  Star,
  ChevronDown,
  ChevronUp,
  Download,
  Edit2,
  CheckCircle,
  ArrowRight,
  Clock,
  Users,
  Home,
  Utensils,
  Bus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { MOCK_ITINERARY } from "@/lib/mock-data";
import { Itinerary } from "@/types/travel";

export default function ItineraryPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [itinerary, setItinerary] = useState<Itinerary | null>(null);
  const [expandedDays, setExpandedDays] = useState<number[]>([1]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isDemo = searchParams.get('demo') === 'true';
    if (isDemo) {
      setTimeout(() => {
        setItinerary(MOCK_ITINERARY);
        setLoading(false);
      }, 1000);
    }
  }, [searchParams]);

  const toggleDay = (day: number) => {
    setExpandedDays(prev => 
      prev.includes(day) 
        ? prev.filter(d => d !== day)
        : [...prev, day]
    );
  };

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case 'sunny': return <Sun className="h-5 w-5 text-yellow-500" />;
      case 'cloudy': return <Cloud className="h-5 w-5 text-gray-400" />;
      case 'rainy': return <CloudRain className="h-5 w-5 text-blue-400" />;
      case 'snowy': return <Snowflake className="h-5 w-5 text-cyan-400" />;
      default: return <Sun className="h-5 w-5 text-yellow-500" />;
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'sightseeing': return <MapPin className="h-4 w-4 text-blue-500" />;
      case 'transport': return <Bus className="h-4 w-4 text-gray-500" />;
      case 'meal': return <Utensils className="h-4 w-4 text-orange-500" />;
      case 'hotel': return <Home className="h-4 w-4 text-green-500" />;
      default: return <Clock className="h-4 w-4 text-purple-500" />;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent mx-auto mb-6"></div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">AI旅游规划师正在为您生成行程</h2>
            <p className="text-gray-600">正在联网查询最新信息，约需3秒...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!itinerary) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">未找到行程</h2>
          <Button asChild>
            <a href="/plan">返回定制页面</a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div>
                <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">
                  智能生成
                </Badge>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                  {itinerary.title}
                </h1>
                <p className="text-lg text-gray-600 mb-4">{itinerary.description}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {itinerary.request.departureDate} · {itinerary.request.days}天
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {itinerary.request.destinations.join(' → ')}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {itinerary.request.travelers.adults}成人
                    {itinerary.request.travelers.children > 0 && ` · ${itinerary.request.travelers.children}儿童`}
                    {itinerary.request.travelers.seniors > 0 && ` · ${itinerary.request.travelers.seniors}老人`}
                  </span>
                </div>
              </div>
              <div className="text-center md:text-right">
                <div className="text-4xl font-bold text-blue-600 mb-1">
                  ¥{itinerary.budget.total.toLocaleString()}
                </div>
                <p className="text-sm text-gray-500 mb-4">总预算（{itinerary.budget.currency}）</p>
                <div className="flex gap-3">
                  <Button variant="secondary" onClick={() => router.push('/edit')}>
                    <Edit2 className="h-4 w-4 mr-2" />
                    修改行程
                  </Button>
                  <Button>
                    <CheckCircle className="h-4 w-4 mr-2" />
                    确认满意
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="itinerary" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="itinerary">每日行程</TabsTrigger>
              <TabsTrigger value="budget">预算明细</TabsTrigger>
              <TabsTrigger value="highlights">行程亮点</TabsTrigger>
              <TabsTrigger value="tips">温馨提示</TabsTrigger>
            </TabsList>

            {/* Itinerary Tab */}
            <TabsContent value="itinerary" className="space-y-6">
              {itinerary.days.map((day) => (
                <Card key={day.day} className="border-0 shadow-lg overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 cursor-pointer"
                    onClick={() => toggleDay(day.day)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl">
                          {day.day}
                        </div>
                        <div className="text-white">
                          <h3 className="text-xl font-bold">{day.title}</h3>
                          <p className="text-white/80 text-sm">{day.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-white/90">
                          {getWeatherIcon(day.weather.condition)}
                          <span>{day.weather.lowTemp}°-{day.weather.highTemp}°</span>
                        </div>
                        {expandedDays.includes(day.day) ? (
                          <ChevronUp className="h-6 w-6 text-white" />
                        ) : (
                          <ChevronDown className="h-6 w-6 text-white" />
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {expandedDays.includes(day.day) && (
                    <CardContent className="p-6">
                      {/* Weather advice */}
                      <div className="bg-blue-50 rounded-lg p-4 mb-6">
                        <p className="text-sm text-blue-800">
                          <span className="font-medium">天气：</span>
                          {day.weather.description}。{day.weather.clothingAdvice}
                        </p>
                      </div>

                      {/* Activities timeline */}
                      <div className="space-y-6">
                        {day.activities.map((activity, index) => (
                          <div key={index} className="flex gap-4">
                            <div className="flex flex-col items-center">
                              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                                {getActivityIcon(activity.type)}
                              </div>
                              {index < day.activities.length - 1 && (
                                <div className="w-0.5 flex-1 bg-gray-200 my-2"></div>
                              )}
                            </div>
                            <div className="flex-1 pb-6">
                              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                                <div>
                                  <span className="text-sm font-medium text-gray-500">{activity.time}</span>
                                  <h4 className="font-semibold text-gray-900">{activity.title}</h4>
                                </div>
                                {activity.price && (
                                  <Badge className="self-start bg-green-100 text-green-700 hover:bg-green-100">
                                    ¥{activity.price}
                                  </Badge>
                                )}
                              </div>
                              <p className="text-gray-600 text-sm mb-2">{activity.description}</p>
                              <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                                <span className="flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  {activity.duration}
                                </span>
                                <span className="flex items-center gap-1">
                                  <MapPin className="h-3 w-3" />
                                  {activity.location}
                                </span>
                              </div>
                              {activity.image && (
                                <div className="mt-4 rounded-lg overflow-hidden">
                                  <img src={activity.image} alt={activity.title} className="w-full h-48 object-cover" />
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Hotel */}
                      <div className="mt-8 pt-6 border-t">
                        <h5 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                          <Home className="h-5 w-5" />
                          住宿推荐
                        </h5>
                        <div className="bg-gray-50 rounded-lg p-6">
                          <div className="flex flex-col md:flex-row gap-6">
                            <div className="md:w-1/3">
                              <img 
                                src={day.hotel.image} 
                                alt={day.hotel.name} 
                                className="w-full h-40 object-cover rounded-lg"
                              />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-start justify-between mb-2">
                                <div>
                                  <h6 className="font-semibold text-gray-900">{day.hotel.name}</h6>
                                  <div className="flex items-center gap-1 text-yellow-400">
                                    {[...Array(day.hotel.starRating)].map((_, i) => (
                                      <Star key={i} className="h-4 w-4 fill-current" />
                                    ))}
                                  </div>
                                </div>
                                <div className="text-right">
                                  <p className="text-xl font-bold text-blue-600">¥{day.hotel.pricePerNight}</p>
                                  <p className="text-sm text-gray-500">/晚</p>
                                </div>
                              </div>
                              <p className="text-gray-600 text-sm mb-3">
                                <MapPin className="h-3 w-3 inline mr-1" />
                                {day.hotel.location}
                              </p>
                              <div className="flex flex-wrap gap-2 mb-3">
                                {day.hotel.amenities.map((amenity, i) => (
                                  <span key={i} className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">
                                    {amenity}
                                  </span>
                                ))}
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <span className="flex items-center gap-1">
                                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                  {day.hotel.rating}
                                </span>
                                <span className="text-gray-400">({day.hotel.reviews.toLocaleString()}条评价)</span>
                                {day.hotel.cancelable && (
                                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                                    免费取消
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Meals */}
                      {day.meals.length > 0 && (
                        <div className="mt-8 pt-6 border-t">
                          <h5 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                            <Utensils className="h-5 w-5" />
                            美食推荐
                          </h5>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {day.meals.map((meal, index) => (
                              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                                <img 
                                  src={meal.image} 
                                  alt={meal.restaurantName} 
                                  className="w-full h-32 object-cover"
                                />
                                <div className="p-4">
                                  <div className="flex items-start justify-between mb-2">
                                    <div>
                                      <span className="text-xs font-medium text-blue-600 uppercase">
                                        {meal.time} · {meal.type === 'breakfast' ? '早餐' : meal.type === 'lunch' ? '午餐' : '晚餐'}
                                      </span>
                                      <h6 className="font-semibold text-gray-900">{meal.restaurantName}</h6>
                                    </div>
                                    <span className="text-sm font-medium text-green-600">¥{meal.pricePerPerson}/人</span>
                                  </div>
                                  <p className="text-gray-500 text-xs mb-2">{meal.cuisine}</p>
                                  <div className="flex items-center gap-1 text-sm mb-2">
                                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                    <span>{meal.rating}</span>
                                  </div>
                                  <p className="text-xs text-gray-600">
                                    <span className="font-medium">推荐：</span>
                                    {meal.recommendedDishes.join('、')}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  )}
                </Card>
              ))}
            </TabsContent>

            {/* Budget Tab */}
            <TabsContent value="budget">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">预算明细</h3>
                    <p className="text-5xl font-bold text-blue-600">
                      ¥{itinerary.budget.total.toLocaleString()}
                    </p>
                    <p className="text-gray-500">总预算（{itinerary.budget.currency}）</p>
                  </div>
                  
                  <div className="space-y-4">
                    {itinerary.budget.items.map((item, index) => (
                      <div key={index} className="flex items-center justify-between py-3 border-b last:border-b-0">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            item.category === 'transportation' ? 'bg-blue-100 text-blue-600' :
                            item.category === 'accommodation' ? 'bg-green-100 text-green-600' :
                            item.category === 'tickets' ? 'bg-purple-100 text-purple-600' :
                            item.category === 'dining' ? 'bg-orange-100 text-orange-600' :
                            item.category === 'service' ? 'bg-gray-100 text-gray-600' :
                            'bg-pink-100 text-pink-600'
                          }`}>
                            {item.category === 'transportation' ? <Bus className="h-5 w-5" /> :
                             item.category === 'accommodation' ? <Home className="h-5 w-5" /> :
                             item.category === 'tickets' ? <MapPin className="h-5 w-5" /> :
                             item.category === 'dining' ? <Utensils className="h-5 w-5" /> :
                             item.category === 'service' ? <Users className="h-5 w-5" /> :
                             <DollarSign className="h-5 w-5" />}
                          </div>
                          <span className="text-gray-900">{item.name}</span>
                        </div>
                        <span className="font-semibold text-gray-900">¥{item.amount.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Highlights Tab */}
            <TabsContent value="highlights">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">行程亮点</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {itinerary.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-800">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Tips Tab */}
            <TabsContent value="tips">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">温馨提示</h3>
                  <div className="space-y-4">
                    {itinerary.tips.map((tip, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                        <div className="w-6 h-6 rounded-full bg-yellow-400 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <p className="text-yellow-900">{tip}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Action Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" onClick={() => router.push('/edit')}>
              <Edit2 className="h-5 w-5 mr-2" />
              修改行程
            </Button>
            <Button size="lg" onClick={() => router.push('/pdf')}>
              <Download className="h-5 w-5 mr-2" />
              生成PDF游记
            </Button>
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600">
              <CheckCircle className="h-5 w-5 mr-2" />
              确认满意，下一步
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
