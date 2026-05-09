'use client';

import { AdminLayout } from '@/components/admin/layout';
import { Card, CardContent } from '@/components/ui/card';
import { BarChart3 } from 'lucide-react';

export default function AdminAnalytics() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">数据统计</h1>
          <p className="text-gray-500">查看业务数据和分析</p>
        </div>

        <Card className="border-dashed">
          <CardContent className="py-12 text-center">
            <BarChart3 className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">数据分析模块</h3>
            <p className="text-gray-500 mb-6">此功能正在开发中...</p>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
