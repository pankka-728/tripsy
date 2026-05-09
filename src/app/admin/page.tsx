'use client';

import Link from 'next/link';
import { AdminLayout } from '@/components/admin/layout';
import { 
  Users, 
  Plane, 
  Package, 
  DollarSign,
  TrendingUp,
  TrendingDown,
  Clock
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MOCK_DASHBOARD_STATS } from '@/lib/admin-mock-data';

interface StatCardProps { 
  title: string; 
  value: string | number; 
  icon: React.ElementType;
  trend?: 'up' | 'down';
  trendValue?: string;
  href?: string;
}

function StatCard({ title, value, icon: Icon, trend, trendValue, href }: StatCardProps) {
  const CardWrapper = href ? Link : 'div';
  return (
    <CardWrapper href={href || '#'} className={href ? 'block' : ''}>
      <Card className={href ? 'cursor-pointer hover:shadow-md transition-shadow' : ''}>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-gray-500">{title}</CardTitle>
          <Icon className="w-4 h-4 text-gray-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-gray-900">{value}</div>
          {trend && trendValue && (
            <div className={`flex items-center gap-1 text-sm ${
              trend === 'up' ? 'text-green-600' : 'text-red-600'
            }`}>
              {trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
              <span>{trendValue}</span>
            </div>
          )}
        </CardContent>
      </Card>
    </CardWrapper>
  );
}

export default function AdminDashboard() {
  const stats = MOCK_DASHBOARD_STATS;

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">仪表盘</h1>
            <p className="text-gray-500">欢迎回来，这是您的业务概览</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">导出报告</Button>
            <Button>查看详情</Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard 
            title="总用户数" 
            value={stats.totalUsers.toLocaleString()} 
            icon={Users}
            trend="up"
            trendValue={`+${stats.newUsersToday} 今日`}
            href="/admin/users"
          />
          <StatCard 
            title="总行程数" 
            value={stats.totalItineraries} 
            icon={Plane}
            trend="up"
            trendValue={`${stats.pendingItineraries} 待处理`}
            href="/admin/itineraries"
          />
          <StatCard 
            title="总订单数" 
            value={stats.totalOrders} 
            icon={Package}
            trend="up"
            trendValue={`${stats.pendingOrders} 待处理`}
            href="/admin/orders"
          />
          <StatCard 
            title="总营收" 
            value={`¥${stats.totalRevenue.toLocaleString()}`} 
            icon={DollarSign}
            trend="up"
            trendValue={`¥${stats.revenueThisMonth.toLocaleString()} 本月`}
            href="/admin/finance"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Popular Destinations */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>热门目的地</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {stats.popularDestinations.map((dest, index) => (
                  <div key={dest.name} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-gray-900">{dest.name}</span>
                        <span className="text-sm text-gray-500">{dest.count} 次</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all"
                          style={{ width: `${(dest.count / stats.popularDestinations[0].count) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activities */}
          <Card>
            <CardHeader>
              <CardTitle>最近动态</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {stats.recentActivities.map((activity) => (
                  <div key={activity.id} className="flex gap-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                      <p className="text-sm text-gray-500 truncate">{activity.description}</p>
                      <p className="text-xs text-gray-400 flex items-center gap-1 mt-1">
                        <Clock className="w-3 h-3" />
                        {activity.time.toLocaleString('zh-CN')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href="/admin/itineraries">
            <Card className="cursor-pointer hover:shadow-md transition-all hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-yellow-600">{stats.pendingItineraries}</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">待处理行程</p>
                    <p className="text-sm text-gray-500">点击查看</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
          <Link href="/admin/orders">
            <Card className="cursor-pointer hover:shadow-md transition-all hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600">{stats.pendingOrders}</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">待处理订单</p>
                    <p className="text-sm text-gray-500">点击查看</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
          <Link href="/admin/itineraries">
            <Card className="cursor-pointer hover:shadow-md transition-all hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Plane className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">新建行程</p>
                    <p className="text-sm text-gray-500">快速创建</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
          <Link href="/admin/analytics">
            <Card className="cursor-pointer hover:shadow-md transition-all hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">数据分析</p>
                    <p className="text-sm text-gray-500">查看详情</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </AdminLayout>
  );
}
