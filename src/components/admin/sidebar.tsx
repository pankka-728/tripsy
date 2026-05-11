'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ADMIN_NAV_ITEMS } from '@/lib/admin-constants';
import { ChevronRight, LogOut } from 'lucide-react';

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-white border-r border-stone-200 min-h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-stone-200">
        <Link href="/admin" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-slate-700 to-slate-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">T</span>
          </div>
          <span className="text-xl font-bold text-slate-900">Tripsign Admin</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {ADMIN_NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href || 
            (item.children?.some(child => pathname === child.href));
          
          return (
            <div key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  'flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-amber-50 text-amber-700'
                    : 'text-slate-600 hover:bg-stone-50 hover:text-slate-900'
                )}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.title}</span>
                {item.children && <ChevronRight className="w-4 h-4 ml-auto" />}
              </Link>
              
              {item.children && isActive && (
                <div className="ml-4 mt-1 space-y-1">
                  {item.children.map((child) => {
                    const isChildActive = pathname === child.href;
                    return (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={cn(
                          'flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-colors',
                          isChildActive
                            ? 'bg-amber-100 text-amber-700'
                            : 'text-slate-500 hover:bg-stone-50 hover:text-slate-700'
                        )}
                      >
                        <child.icon className="w-4 h-4" />
                        <span>{child.title}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* User Section */}
      <div className="p-4 border-t border-stone-200">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-r from-slate-600 to-pink-500 rounded-full flex items-center justify-center">
            <span className="text-white font-medium">A</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-slate-900 truncate">管理员</p>
            <p className="text-xs text-slate-500 truncate">admin@tripsy.com</p>
          </div>
        </div>
        <button className="flex items-center gap-2 w-full px-4 py-2 text-sm text-slate-600 hover:bg-stone-50 rounded-lg transition-colors">
          <LogOut className="w-4 h-4" />
          <span>退出登录</span>
        </button>
      </div>
    </div>
  );
}
