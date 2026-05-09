"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { 
  MapPin, 
  Search, 
  Star, 
  Calendar, 
  DollarSign,
  ArrowRight,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MOCK_DESTINATIONS } from "@/lib/admin-mock-data";

// 将管理后台数据转换为前端格式
const transformDestinations = MOCK_DESTINATIONS.filter(d => d.status === 'active' && d.region).map(dest => ({
  id: dest.id,
  name: dest.name,
  nameEn: dest.nameEn,
  city: dest.city,
  country: dest.country,
  region: dest.region as string,
  description: dest.description,
  image: dest.imageUrl,
  highlights: dest.tags,
  bestSeason: dest.bestSeason,
  suggestedDays: dest.suggestedDays,
  rating: (4.3 + Math.random() * 0.7).toFixed(1),
  reviews: Math.floor(100 + Math.random() * 900),
  averageBudgetPerDay: Math.floor(500 + Math.random() * 2000),
  isPopular: dest.isPopular
}));

const regionLabels: Record<string, string> = {
  "china-north": "华北",
  "china-east": "华东",
  "china-south": "华南",
  "china-southwest": "西南",
  "china-northwest": "西北",
  "china-central": "华中",
  "china-northeast": "东北",
  "asia-japan": "日本",
  "asia-korea": "韩国",
  "asia-thailand": "泰国",
  "asia-southeast": "东南亚",
  "asia-south": "南亚",
  "asia-middle-east": "中东",
  "europe-france": "法国",
  "europe-italy": "意大利",
  "europe-uk": "英国",
  "europe-spain-portugal": "西班牙/葡萄牙",
  "europe-benelux": "荷比卢",
  "europe-germany": "德国",
  "europe-austria-switzerland": "奥瑞德",
  "europe-nordic": "北欧",
  "europe-central-east": "中东欧",
  "europe-greece": "希腊",
  "europe-east": "东欧",
  "america-us": "美国",
  "america-canada": "加拿大",
  "america-mexico-caribbean": "墨西哥/加勒比",
  "america-south": "南美",
  "oceania-australia": "澳大利亚",
  "oceania-newzealand": "新西兰",
  "oceania-pacific": "太平洋岛国",
  "africa-egypt": "埃及",
  "africa-south": "南非",
  "africa-north": "北非",
  "africa-east": "东非",
  "africa-islands": "非洲海岛",
  "africa-other": "其他非洲"
};

const regionGroups = [
  { key: "all", label: "全部" },
  { key: "china", label: "中国" },
  { key: "asia", label: "亚洲" },
  { key: "europe", label: "欧洲" },
  { key: "america", label: "美洲" },
  { key: "oceania", label: "大洋洲" },
  { key: "africa", label: "非洲" }
];

export default function DestinationsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegionGroup, setSelectedRegionGroup] = useState<string>("all");
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const filteredDestinations = useMemo(() => {
    return transformDestinations.filter(dest => {
      // 搜索筛选（支持中英文搜索、不区分大小写）
      const searchLower = searchTerm.toLowerCase().trim();
      const matchesSearch = !searchLower || 
        dest.name.toLowerCase().includes(searchLower) ||
        (dest.nameEn && dest.nameEn.toLowerCase().includes(searchLower)) ||
        (dest.city && dest.city.toLowerCase().includes(searchLower)) ||
        dest.country.toLowerCase().includes(searchLower) ||
        dest.description.toLowerCase().includes(searchLower) ||
        dest.highlights.some(h => h.toLowerCase().includes(searchLower));

      // 区域组筛选
      let matchesRegionGroup = true;
      if (selectedRegionGroup !== "all") {
        matchesRegionGroup = dest.region.startsWith(selectedRegionGroup);
      }

      // 具体区域筛选
      let matchesRegion = true;
      if (selectedRegion) {
        matchesRegion = dest.region === selectedRegion;
      }

      return matchesSearch && matchesRegionGroup && matchesRegion;
    });
  }, [searchTerm, selectedRegionGroup, selectedRegion]);

  // 获取可用的子区域
  const availableRegions = useMemo(() => {
    if (selectedRegionGroup === "all") return [];
    const regions = new Set<string>();
    transformDestinations.forEach(dest => {
      if (dest.region.startsWith(selectedRegionGroup)) {
        regions.add(dest.region);
      }
    });
    return Array.from(regions).sort();
  }, [selectedRegionGroup]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">探索目的地</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            发现全球{transformDestinations.length}个热门旅行目的地，找到您的下一个旅行灵感
          </p>
        </div>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="搜索目的地、城市、国家或关键词（支持中英文）..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                {searchTerm && (
                  <Button variant="outline" onClick={() => setSearchTerm("")}>
                    清除
                  </Button>
                )}
              </div>
              
              {/* 区域组筛选 */}
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-sm text-gray-500 mr-2">区域：</span>
                {regionGroups.map((group) => (
                  <Button
                    key={group.key}
                    variant={selectedRegionGroup === group.key ? "default" : "secondary"}
                    size="sm"
                    onClick={() => {
                      setSelectedRegionGroup(group.key);
                      setSelectedRegion(null);
                    }}
                    className={selectedRegionGroup === group.key ? "bg-blue-600" : ""}
                  >
                    {group.label}
                  </Button>
                ))}
              </div>

              {/* 子区域筛选 */}
              {availableRegions.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t">
                  <span className="text-sm text-gray-500 mr-2">子区域：</span>
                  <Button
                    variant={selectedRegion === null ? "default" : "secondary"}
                    size="sm"
                    onClick={() => setSelectedRegion(null)}
                    className={selectedRegion === null ? "bg-blue-600" : ""}
                  >
                    全部
                  </Button>
                  {availableRegions.map((region) => (
                    <Button
                      key={region}
                      variant={selectedRegion === region ? "default" : "secondary"}
                      size="sm"
                      onClick={() => setSelectedRegion(region)}
                      className={selectedRegion === region ? "bg-blue-600" : ""}
                    >
                      {regionLabels[region] || region}
                    </Button>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Destinations Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredDestinations.length} 个目的地
              {searchTerm && <span className="text-gray-500 text-lg ml-2">（搜索：&quot;{searchTerm}&quot;）</span>}
            </h2>
            {filteredDestinations.length > 0 && (
              <div className="text-sm text-gray-500">
                共 {transformDestinations.length} 个目的地
              </div>
            )}
          </div>

          {filteredDestinations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDestinations.map((dest) => (
                <Link href={`/plan?destination=${dest.id}`} key={dest.id}>
                  <Card className="border-0 overflow-hidden shadow-lg hover:shadow-xl transition-all group cursor-pointer h-full">
                    <div className="relative h-56 overflow-hidden">
                      {dest.image ? (
                        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${dest.image})` }}>
                          <div className="w-full h-full bg-black/30"></div>
                        </div>
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 flex items-center justify-center">
                          <div className="text-center text-white">
                            <MapPin className="w-12 h-12 mx-auto mb-2 opacity-80" />
                            <span className="text-lg font-bold">{dest.name}</span>
                          </div>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                      {dest.isPopular && (
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-yellow-500 text-white">
                            <Star className="w-3 h-3 mr-1 fill-current" />
                            热门
                          </Badge>
                        </div>
                      )}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin className="h-4 w-4 text-white" />
                          <span className="text-white/90 text-sm">
                            {dest.country}
                            {dest.city && ` · ${dest.city}`}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-white">{dest.name}</h3>
                        {dest.nameEn && (
                          <p className="text-white/70 text-sm mt-1">{dest.nameEn}</p>
                        )}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{dest.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {dest.highlights.slice(0, 3).map((highlight, index) => (
                          <Badge key={index} variant="secondary" className="bg-blue-50 text-blue-700">
                            {highlight}
                          </Badge>
                        ))}
                        {dest.highlights.length > 3 && (
                          <Badge variant="secondary" className="bg-gray-100 text-gray-600">
                            +{dest.highlights.length - 3}
                          </Badge>
                        )}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                          <span className="font-semibold">{dest.rating}</span>
                          <span className="text-gray-500 text-sm">({dest.reviews.toLocaleString()})</span>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500">建议{dest.suggestedDays}天</p>
                          <p className="font-semibold text-blue-600">¥{dest.averageBudgetPerDay}/天</p>
                        </div>
                      </div>

                      {dest.bestSeason.length > 0 && (
                        <div className="mt-3 pt-3 border-t">
                          <p className="text-sm text-gray-500 mb-1">最佳季节：</p>
                          <div className="flex flex-wrap gap-1">
                            {dest.bestSeason.slice(0, 3).map((season, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {season}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="mt-4 text-center">
                        <Button variant="secondary" className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          定制此目的地行程
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <MapPin className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">未找到相关目的地</h3>
              <p className="text-gray-500 mb-2">试试其他搜索词</p>
              <p className="text-sm text-gray-400 mb-6">
                提示：支持中英文搜索，也可以搜索国家、城市或关键词
              </p>
              <Button onClick={() => { setSearchTerm(""); setSelectedRegionGroup("all"); setSelectedRegion(null); }}>
                清除搜索
              </Button>
            </div>
          )}
        </div>

        {/* Travel Inspiration */}
        <div className="mt-20 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">旅行灵感</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-0 overflow-hidden shadow-lg">
              <div className="h-40 bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <Calendar className="h-12 w-12 text-white" />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-gray-900 mb-2">季节推荐</h3>
                <p className="text-gray-600 text-sm mb-4">根据季节为您推荐最佳目的地</p>
                <Button variant="secondary" size="sm">查看推荐</Button>
              </CardContent>
            </Card>
            <Card className="border-0 overflow-hidden shadow-lg">
              <div className="h-40 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <DollarSign className="h-12 w-12 text-white" />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-gray-900 mb-2">预算选择</h3>
                <p className="text-gray-600 text-sm mb-4">根据预算找到适合的目的地</p>
                <Button variant="secondary" size="sm">按预算筛选</Button>
              </CardContent>
            </Card>
            <Card className="border-0 overflow-hidden shadow-lg">
              <div className="h-40 bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                <Users className="h-12 w-12 text-white" />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-gray-900 mb-2">出行类型</h3>
                <p className="text-gray-600 text-sm mb-4">根据出行人群推荐目的地</p>
                <Button variant="secondary" size="sm">按类型筛选</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
