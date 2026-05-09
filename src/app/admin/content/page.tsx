'use client';

import { AdminLayout } from '@/components/admin/layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Image, FileText, Plus, Edit } from 'lucide-react';
import Link from 'next/link';

export default function AdminContent() {
  const contentTypes = [
    {
      title: '目的地管理',
      description: '管理热门目的地信息、图片、描述等',
      icon: MapPin,
      href: '/admin/content/destinations',
      count: 12,
      color: 'text-blue-600',
      bg: 'bg-blue-100',
    },
    {
      title: '景点管理',
      description: '管理各个目的地的景点信息',
      icon: MapPin,
      href: '/admin/content/attractions',
      count: 48,
      color: 'text-green-600',
      bg: 'bg-green-100',
    },
    {
      title: '首页轮播',
      description: '管理首页Banner图片和文案',
      icon: Image,
      href: '/admin/content/banners',
      count: 5,
      color: 'text-purple-600',
      bg: 'bg-purple-100',
    },
    {
      title: '页面内容',
      description: '编辑关于我们、FAQ等页面内容',
      icon: FileText,
      href: '/admin/content/pages',
      count: 8,
      color: 'text-orange-600',
      bg: 'bg-orange-100',
    },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">内容管理</h1>
            <p className="text-gray-500">管理网站的所有内容资源</p>
          </div>
        </div>

        {/* Content Type Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contentTypes.map((type) => (
            <Link key={type.href} href={type.href}>
              <Card className="cursor-pointer hover:shadow-md transition-all hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 ${type.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <type.icon className={`w-7 h-7 ${type.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">{type.title}</h3>
                        <span className="text-2xl font-bold text-gray-400">{type.count}</span>
                      </div>
                      <p className="text-gray-500 mt-1">{type.description}</p>
                      <Button variant="ghost" className="mt-3 -ml-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                        管理
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>快捷操作</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button className="justify-start h-auto py-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Plus className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium">添加新目的地</p>
                    <p className="text-xs text-gray-500">快速创建新的热门目的地</p>
                  </div>
                </div>
              </Button>
              <Button className="justify-start h-auto py-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Edit className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium">编辑首页内容</p>
                    <p className="text-xs text-gray-500">修改Banner和推荐内容</p>
                  </div>
                </div>
              </Button>
              <Button className="justify-start h-auto py-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-orange-600" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium">更新FAQ</p>
                    <p className="text-xs text-gray-500">添加或修改常见问题</p>
                  </div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
