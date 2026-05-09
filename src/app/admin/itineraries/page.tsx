'use client';

import { useState } from 'react';
import { AdminLayout } from '@/components/admin/layout';
import { 
  Search, 
  Filter, 
  MoreVertical, 
  Eye, 
  Edit, 
  Trash2,
  Plane,
  User,
  Calendar,
  DollarSign
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { MOCK_ITINERARIES } from '@/lib/admin-mock-data';
import { ITINERARY_STATUS } from '@/lib/admin-constants';
import { format } from 'date-fns';

export default function AdminItineraries() {
  const [itineraries] = useState(MOCK_ITINERARIES);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const filteredItineraries = itineraries.filter(item => {
    const matchesSearch = 
      item.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.userEmail.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.destinations.some(d => d.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    const config = ITINERARY_STATUS[status as keyof typeof ITINERARY_STATUS];
    if (!config) return <Badge variant="secondary">{status}</Badge>;
    return (
      <Badge className={config.class}>
        {config.label}
      </Badge>
    );
  };

  const getTravelerCount = (item: typeof MOCK_ITINERARIES[0]) => {
    const { adults, children, seniors } = item.travelerCount;
    const parts = [];
    if (adults > 0) parts.push(`${adults}成人`);
    if (children > 0) parts.push(`${children}儿童`);
    if (seniors > 0) parts.push(`${seniors}老人`);
    return parts.join('，') || '0人';
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">行程管理</h1>
            <p className="text-gray-500">管理用户提交的行程需求</p>
          </div>
          <Button>
            <Plane className="w-4 h-4 mr-2" />
            新建行程
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">总行程</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{itineraries.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-yellow-600">待处理</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">
                {itineraries.filter(i => i.status === 'pending').length}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-blue-600">规划中</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">
                {itineraries.filter(i => i.status === 'planning').length}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-green-600">已完成</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {itineraries.filter(i => i.status === 'completed').length}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="搜索用户、目的地..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">全部状态</option>
              {Object.entries(ITINERARY_STATUS).map(([key, value]) => (
                <option key={key} value={key}>{value.label}</option>
              ))}
            </select>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              更多筛选
            </Button>
          </div>
        </div>

        {/* Table */}
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">用户</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">目的地</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">日期</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">人数</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">预算</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">状态</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">提交时间</th>
                    <th className="text-right py-3 px-4 font-medium text-gray-500 text-sm">操作</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredItineraries.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-medium">{item.userName.charAt(0)}</span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{item.userName}</p>
                            <p className="text-sm text-gray-500">{item.userEmail}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex flex-wrap gap-1">
                          {item.destinations.map((dest, idx) => (
                            <Badge key={idx} variant="secondary">{dest}</Badge>
                          ))}
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {format(item.startDate, 'MM/dd')} - {format(item.endDate, 'MM/dd')}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <User className="w-4 h-4" />
                          <span>{getTravelerCount(item)}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <DollarSign className="w-4 h-4" />
                          <span className="font-medium">
                            {item.budgetCurrency === 'CNY' ? '¥' : '$'}
                            {item.budget.toLocaleString()}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        {getStatusBadge(item.status)}
                        {item.assignedTo && (
                          <p className="text-xs text-gray-500 mt-1">
                            分配给：{item.assignedTo}
                          </p>
                        )}
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-500">
                        {format(item.createdAt, 'yyyy-MM-dd HH:mm')}
                      </td>
                      <td className="py-4 px-4 text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreVertical className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Eye className="w-4 h-4 mr-2" />
                              查看详情
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="w-4 h-4 mr-2" />
                              编辑行程
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
            
            {filteredItineraries.length === 0 && (
              <div className="py-12 text-center">
                <Plane className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">没有找到匹配的行程</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
