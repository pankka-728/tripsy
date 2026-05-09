'use client';

import { AdminLayout } from '@/components/admin/layout';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AdminAttractions() {
  return (
    <AdminLayout>
      <div className="space-y-6">
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
            <h1 className="text-2xl font-bold text-gray-900">景点管理</h1>
            <p className="text-gray-500">管理各个目的地的景点信息</p>
          </div>
        </div>

        <Card className="border-dashed">
          <CardContent className="py-12 text-center">
            <MapPin className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">景点管理模块</h3>
            <p className="text-gray-500 mb-6">此功能正在开发中...</p>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
