'use client';

import { useState } from 'react';
import { AdminLayout } from '@/components/admin/layout';
import { 
  Search, 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  MapPin,
  Star,
  MoreVertical
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Switch } from '@/components/ui/switch';
import { MOCK_DESTINATIONS } from '@/lib/admin-mock-data';
import Link from 'next/link';

export default function AdminDestinations() {
  const [destinations, setDestinations] = useState(MOCK_DESTINATIONS);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDestinations = destinations.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleStatus = (id: string) => {
    setDestinations(destinations.map(d => 
      d.id === id 
        ? { ...d, status: d.status === 'active' ? 'inactive' : 'active' }
        : d
    ));
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/admin/content">
              <Button variant="ghost" size="sm">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                返回
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">目的地管理</h1>
              <p className="text-gray-500">管理热门目的地信息</p>
            </div>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            添加目的地
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">总目的地</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{destinations.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-green-600">已上线</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {destinations.filter(d => d.status === 'active').length}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-blue-600">热门推荐</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">
                {destinations.filter(d => d.isPopular).length}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="搜索目的地..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Destination List */}
        <div className="grid gap-6">
          {filteredDestinations.map((dest) => (
            <Card key={dest.id}>
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Image */}
                  <div className="lg:w-48 flex-shrink-0">
                    <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                      <img
                        src={dest.imageUrl}
                        alt={dest.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-3">
                          <h3 className="text-lg font-semibold text-gray-900">{dest.name}</h3>
                          {dest.nameEn && (
                            <span className="text-sm text-gray-500">{dest.nameEn}</span>
                          )}
                          {dest.isPopular && (
                            <Badge className="bg-yellow-100 text-yellow-800">
                              <Star className="w-3 h-3 mr-1 fill-current" />
                              热门
                            </Badge>
                          )}
                          {dest.status === 'active' ? (
                            <Badge className="bg-green-100 text-green-800">已上线</Badge>
                          ) : (
                            <Badge variant="secondary">已下线</Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-500 mt-1">
                          <MapPin className="w-4 h-4 inline mr-1" />
                          {dest.country}{dest.city ? ` · ${dest.city}` : ''}
                        </p>
                        <p className="text-gray-600 mt-2 line-clamp-2">{dest.description}</p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {dest.tags.map((tag, idx) => (
                            <Badge key={idx} variant="secondary">{tag}</Badge>
                          ))}
                        </div>
                        <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
                          <span>最佳季节: {dest.bestSeason.join('、')}</span>
                          <span>建议游玩: {dest.suggestedDays}天</span>
                        </div>
                      </div>
                      
                      {/* Actions */}
                      <div className="flex items-center gap-2">
                        <Switch
                          checked={dest.status === 'active'}
                          onCheckedChange={() => toggleStatus(dest.id)}
                        />
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreVertical className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Eye className="w-4 h-4 mr-2" />
                              预览
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="w-4 h-4 mr-2" />
                              编辑
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">
                              <Trash2 className="w-4 h-4 mr-2" />
                              删除
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredDestinations.length === 0 && (
          <Card>
            <CardContent className="py-12 text-center">
              <MapPin className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">没有找到匹配的目的地</p>
            </CardContent>
          </Card>
        )}
      </div>
    </AdminLayout>
  );
}
