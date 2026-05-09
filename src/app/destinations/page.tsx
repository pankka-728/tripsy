"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  MapPin, 
  Search, 
  Star, 
  Calendar, 
  DollarSign,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { POPULAR_DESTINATIONS } from "@/lib/constants";

export default function DestinationsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const regions = [
    { value: "asia", label: "亚洲" },
    { value: "europe", label: "欧洲" },
    { value: "america", label: "美洲" },
    { value: "oceania", label: "大洋洲" },
    { value: "africa", label: "非洲" },
  ];

  const filteredDestinations = POPULAR_DESTINATIONS.filter(dest => {
    const matchesSearch = dest.name.includes(searchTerm) || 
                          dest.country.includes(searchTerm) ||
                          dest.description.includes(searchTerm);
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">探索目的地</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            发现全球热门旅行目的地，找到您的下一个旅行灵感
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
                    placeholder="搜索目的地、城市或国家..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
                  搜索
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-sm text-gray-500 mr-2">热门区域：</span>
                {regions.map((region) => (
                  <Button
                    key={region.value}
                    variant={selectedRegion === region.value ? "default" : "secondary"}
                    size="sm"
                    onClick={() => setSelectedRegion(selectedRegion === region.value ? null : region.value)}
                    className={selectedRegion === region.value ? "bg-blue-600" : ""}
                  >
                    {region.label}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Destinations Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredDestinations.length} 个目的地
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((dest) => (
              <Link href={`/plan?destination=${dest.id}`} key={dest.id}>
                <Card className="border-0 overflow-hidden shadow-lg hover:shadow-xl transition-all group cursor-pointer h-full">
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={dest.image} 
                      alt={dest.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="h-4 w-4 text-white" />
                        <span className="text-white/90 text-sm">{dest.country}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white">{dest.name}</h3>
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
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <span className="font-semibold">{dest.rating}</span>
                        <span className="text-gray-500 text-sm">({dest.reviews.toLocaleString()})</span>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">预算参考</p>
                        <p className="font-semibold text-blue-600">¥{dest.averageBudgetPerDay}/天</p>
                      </div>
                    </div>

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

          {filteredDestinations.length === 0 && (
            <div className="text-center py-20">
              <MapPin className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">未找到相关目的地</h3>
              <p className="text-gray-500 mb-6">试试其他搜索词</p>
              <Button onClick={() => { setSearchTerm(""); setSelectedRegion(null); }}>
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
                <Star className="h-12 w-12 text-white" />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-gray-900 mb-2">编辑精选</h3>
                <p className="text-gray-600 text-sm mb-4">专业旅行规划师的私藏推荐</p>
                <Button variant="secondary" size="sm">查看精选</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
