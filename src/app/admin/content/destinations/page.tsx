'use client';

import { useState, useMemo } from 'react';
import { AdminLayout } from '@/components/admin/layout';
import { 
  Search, 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  Filter,
  Upload,
  Download,
  Globe,
  MapPin,
  Star,
  MoreVertical
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { MOCK_DESTINATIONS } from '@/lib/admin-mock-data';

export default function AdminDestinations() {
  const [destinations] = useState(MOCK_DESTINATIONS);
  const [searchQuery, setSearchQuery] = useState('');
  const [regionFilter, setRegionFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  // 获取所有可用区域
  const regions = useMemo(() => {
    const uniqueRegions = new Set(destinations.map(d => d.region).filter(Boolean));
    return Array.from(uniqueRegions);
  }, [destinations]);

  const filteredDestinations = destinations.filter(item => {
    const matchesSearch = 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.nameEn || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.city || '').toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesRegion = regionFilter === 'all' || item.region === regionFilter;
    const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
    
    return matchesSearch && matchesRegion && matchesStatus;
  });

  // 按区域分组统计
  const statsByRegion = useMemo(() => {
    const stats: Record<string, number> = {};
    destinations.forEach(d => {
      if (d.region) {
        stats[d.region] = (stats[d.region] || 0) + 1;
      }
    });
    return stats;
  }, [destinations]);

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">目的地管理</h1>
            <p className="text-gray-500">管理全球和全国旅游目的地 (共 {destinations.length} 个)</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              导出数据
            </Button>
            <Button variant="outline">
              <Upload className="w-4 h-4 mr-2" />
              批量导入
            </Button>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              新增目的地
            </Button>
          </div>
        </div>

        {/* 区域统计卡片 */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
          <div 
            onClick={() => setRegionFilter('all')}
            className={`p-3 rounded-lg border cursor-pointer transition-all ${
              regionFilter === 'all' 
                ? 'bg-blue-50 border-blue-200' 
                : 'bg-white hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Globe className="w-4 h-4" />
              <span>全部</span>
            </div>
            <div className="text-xl font-bold text-gray-900 mt-1">
              {destinations.length}
            </div>
          </div>
          {Object.entries(statsByRegion).map(([region, count]) => (
            <div 
              key={region}
              onClick={() => setRegionFilter(region)}
              className={`p-3 rounded-lg border cursor-pointer transition-all ${
                regionFilter === region 
                  ? 'bg-blue-50 border-blue-200' 
                  : 'bg-white hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4" />
                <span className="truncate">{region}</span>
              </div>
              <div className="text-xl font-bold text-gray-900 mt-1">
                {count}
              </div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="搜索目的地名称、英文、国家..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <select
              value={regionFilter}
              onChange={(e) => setRegionFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">所有区域</option>
              {regions.map(region => (
                <option key={region} value={region}>{region}</option>
              ))}
            </select>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">所有状态</option>
              <option value="active">已启用</option>
              <option value="inactive">已禁用</option>
            </select>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              更多筛选
            </Button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm w-12"></th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">目的地</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">所属区域</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">标签</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">建议天数</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">排序</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">状态</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-500 text-sm">操作</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredDestinations.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="py-3 px-4">
                      {item.isPopular && (
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      )}
                    </td>
                    <td className="py-3 px-4">
                      <div>
                        <p className="font-medium text-gray-900">{item.name}</p>
                        <p className="text-sm text-gray-500">{item.nameEn || ''} · {item.country}</p>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <Badge variant="secondary">{item.region || '未分类'}</Badge>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex flex-wrap gap-1">
                        {item.tags.slice(0, 3).map(tag => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {item.tags.length > 3 && (
                          <span className="text-xs text-gray-500">+{item.tags.length - 3}</span>
                        )}
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      {item.suggestedDays}天
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      {item.sortOrder}
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <Switch 
                          checked={item.status === 'active'} 
                          onCheckedChange={() => {}} 
                        />
                        <span className={`text-sm ${
                          item.status === 'active' ? 'text-green-600' : 'text-gray-500'
                        }`}>
                          {item.status === 'active' ? '已启用' : '已禁用'}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-right">
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
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {filteredDestinations.length === 0 && (
            <div className="py-12 text-center">
              <Globe className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">没有找到匹配的目的地</p>
            </div>
          )}
        </div>

        {/* 分页信息 */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>显示 {filteredDestinations.length} / {destinations.length} 个目的地</span>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" disabled>上一页</Button>
            <Button variant="outline" size="sm">下一页</Button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
