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

export default function ItineraryContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [itinerary, setItinerary] = useState<Itinerary | null>(null);
  const [expandedDays, setExpandedDays] = useState<number[]>([1]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isDemo = searchParams.get('demo') === 'true';
    if (isDemo) {
      // 从 URL 参数中获取用户选择的目的地
      const destinationsParam = searchParams.get('destinations');
      const days = parseInt(searchParams.get('days') || '7');
      const travelers = parseInt(searchParams.get('travelers') || '2');
      
      // 解析目的地列表
      const destinations = destinationsParam 
        ? destinationsParam.split(',').filter(d => d.trim()) 
        : ["东京", "京都"];
      
      // 生成动态行程数据
      const dynamicItinerary: Itinerary = {
        ...MOCK_ITINERARY,
        id: `demo-${Date.now()}`,
        request: {
          ...MOCK_ITINERARY.request,
          days: days,
          destinations: destinations,
          travelers: {
            ...MOCK_ITINERARY.request.travelers,
            adults: travelers
          }
        },
        title: destinations.length === 1 
          ? `${destinations[0]} ${days}日定制之旅`
          : `${destinations.join('·')} ${days}日定制之旅`,
        description: destinations.length === 1
          ? `为您精心策划的${destinations[0]}${days}日定制行程，涵盖当地最精彩的景点和体验。`
          : `为您精心策划的${destinations.join('至')} ${days}日定制行程，涵盖各地最精彩的景点和体验。`,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      
      setTimeout(() => {
        setItinerary(dynamicItinerary);
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
                        <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center">
                          <span className="text-white font-bold text-xl">{day.day}</span>
                        </div>
                        <div>
                          <h3 className="text-white font-bold text-xl">第 {day.day} 天</h3>
                          <p className="text-white/80">{day.date} · {day.title}</p>
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
                      <div className="space-y-4">
                        {day.activities.map((activity, index) => (
                          <div key={index} className="flex gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                            <div className="flex-shrink-0 w-16">
                              <div className="text-sm font-medium text-gray-500">{activity.time}</div>
                            </div>
                            <div className="flex-shrink-0 w-8 pt-1">
                              {getActivityIcon(activity.type)}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900 mb-1">{activity.title}</h4>
                              <p className="text-gray-600 text-sm mb-2">{activity.description}</p>
                              {activity.location && (
                                <div className="flex items-center gap-1 text-sm text-gray-500">
                                  <MapPin className="h-3 w-3" />
                                  {activity.location}
                                </div>
                              )}
                              {activity.duration && (
                                <div className="text-sm text-gray-500 mt-1">
                                  建议游玩：{activity.duration}
                                </div>
                              )}
                            </div>
                            {activity.price && (
                              <div className="flex-shrink-0 text-right">
                                <div className="font-semibold text-blue-600">
                                  ¥{activity.price.toLocaleString()}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </TabsContent>

            {/* Budget Tab */}
            <TabsContent value="budget">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">预算明细</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                      <div className="text-sm text-blue-600 font-medium mb-2">总预算</div>
                      <div className="text-3xl font-bold text-blue-700">
                        ¥{itinerary.budget.total.toLocaleString()}
                      </div>
                      <div className="text-sm text-blue-500 mt-1">{itinerary.budget.currency}</div>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                      <div className="text-sm text-purple-600 font-medium mb-2">人均预算</div>
                      <div className="text-3xl font-bold text-purple-700">
                        ¥{Math.round(itinerary.budget.total / (
                          itinerary.request.travelers.adults + 
                          itinerary.request.travelers.children + 
                          itinerary.request.travelers.seniors
                        )).toLocaleString()}
                      </div>
                      <div className="text-sm text-purple-500 mt-1">{itinerary.request.days}天行程</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {itinerary.budget.items.map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border-b last:border-0">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
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
