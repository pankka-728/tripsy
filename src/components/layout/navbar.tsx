"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Globe, MapPin, User, LogOut, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/contexts/AuthContext";
import { MEMBERSHIP_LEVELS } from "@/types/member";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  const navItems = [
    { name: "首页", href: "/" },
    { name: "定制行程", href: "/plan" },
    { name: "热门目的地", href: "/destinations" },
    { name: "关于我们", href: "/about" },
    { name: "联系我们", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <MapPin className="h-6 w-6 text-blue-600" />
          <span className="text-xl font-bold text-gray-900">Tripsy</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="secondary" size="sm">
            <Globe className="h-4 w-4 mr-2" />
            中文
          </Button>
          
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.avatar} alt={user.nickname} />
                    <AvatarFallback className="bg-blue-500 text-white text-sm">
                      {user.nickname.slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <span className="font-medium">{user.nickname}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>
                  <div className="flex flex-col">
                    <span className="font-medium">{user.nickname}</span>
                    <span className="text-xs text-gray-500">{MEMBERSHIP_LEVELS[user.membershipLevel].name}</span>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/member" className="cursor-pointer flex items-center gap-2">
                    <User className="h-4 w-4" />
                    会员中心
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/member?tab=orders" className="cursor-pointer flex items-center gap-2">
                    <Settings className="h-4 w-4" />
                    我的订单
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout} className="cursor-pointer text-red-600 flex items-center gap-2">
                  <LogOut className="h-4 w-4" />
                  退出登录
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button asChild variant="secondary" size="sm">
              <Link href="/login">
                <User className="h-4 w-4 mr-2" />
                登录
              </Link>
            </Button>
          )}
          
          <Button asChild>
            <Link href="/plan">立即定制</Link>
          </Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">打开菜单</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between py-4">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                  <MapPin className="h-6 w-6 text-blue-600" />
                  <span className="text-xl font-bold text-gray-900">Tripsy</span>
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <nav className="flex-1 space-y-4 py-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              <div className="space-y-4 pb-4">
                {user ? (
                  <>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={user.avatar} alt={user.nickname} />
                        <AvatarFallback className="bg-blue-500 text-white">
                          {user.nickname.slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{user.nickname}</div>
                        <div className="text-xs text-gray-500">{MEMBERSHIP_LEVELS[user.membershipLevel].name}</div>
                      </div>
                    </div>
                    <Button className="w-full" asChild>
                      <Link href="/member" onClick={() => setIsOpen(false)}>
                        <User className="h-4 w-4 mr-2" />
                        会员中心
                      </Link>
                    </Button>
                    <Button variant="secondary" className="w-full" onClick={() => { logout(); setIsOpen(false); }}>
                      <LogOut className="h-4 w-4 mr-2" />
                      退出登录
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="secondary" className="w-full" asChild>
                      <Link href="/login" onClick={() => setIsOpen(false)}>
                        <User className="h-4 w-4 mr-2" />
                        登录
                      </Link>
                    </Button>
                    <Button className="w-full" asChild>
                      <Link href="/plan" onClick={() => setIsOpen(false)}>立即定制</Link>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
