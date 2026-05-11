'use client';

import { AdminLayout } from '@/components/admin/layout';
import { Card, CardContent } from '@/components/ui/card';
import { Settings } from 'lucide-react';

export default function AdminSettings() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">系统设置</h1>
          <p className="text-slate-500">配置系统参数</p>
        </div>

        <Card className="border-dashed">
          <CardContent className="py-12 text-center">
            <Settings className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-slate-900 mb-2">系统设置模块</h3>
            <p className="text-slate-500 mb-6">此功能正在开发中...</p>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
