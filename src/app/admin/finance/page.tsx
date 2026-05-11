'use client';

import { AdminLayout } from '@/components/admin/layout';
import { Card, CardContent } from '@/components/ui/card';
import { DollarSign } from 'lucide-react';

export default function AdminFinance() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">财务管理</h1>
          <p className="text-slate-500">管理财务和交易记录</p>
        </div>

        <Card className="border-dashed">
          <CardContent className="py-12 text-center">
            <DollarSign className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-slate-900 mb-2">财务管理模块</h3>
            <p className="text-slate-500 mb-6">此功能正在开发中...</p>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
