'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  User, 
  Settings, 
  Heart, 
  Calendar, 
  Ticket, 
  Gift, 
  LogOut,
  ChevronRight,
  Award,
  Crown,
  Wallet,
  Bell,
  ShieldCheck,
  MapPin,
  Edit,
  Camera
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/contexts/AuthContext';
import { MEMBERSHIP_LEVELS } from '@/types/member';

export default function MemberCenterPage() {
  const router = useRouter();
  const { user, logout, updateUser } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');

  if (!user) {
    router.push('/login?redirectTo=/member');
    return null;
  }

  const membershipInfo = MEMBERSHIP_LEVELS[user.membershipLevel];

  const menuItems = [
    {
      id: 'profile',
      label: '个人资料',
      icon: User,
      description: '编辑个人信息'
    },
    {
      id: 'orders',
      label: '我的订单',
      icon: Calendar,
      description: '查看历史订单'
    },
    {
      id: 'favorites',
      label: '我的收藏',
      icon: Heart,
      description: '收藏的目的地'
    },
    {
      id: 'coupons',
      label: '优惠券',
      icon: Ticket,
      description: `${user.couponCount}张可用`
    },
    {
      id: 'points',
      label: '积分中心',
      icon: Gift,
      description: `${user.points.toLocaleString()}积分`
    },
    {
      id: 'settings',
      label: '设置',
      icon: Settings,
      description: '账号与安全'
    }
  ];

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-6">
            {/* Avatar */}
            <div className="relative">
              <Avatar className="h-24 w-24 border-4 border-white/30">
                <AvatarImage src={user.avatar} alt={user.nickname} />
                <AvatarFallback className="text-2xl bg-blue-400">
                  {user.nickname.slice(0, 2)}
                </AvatarFallback>
              </Avatar>
              <button className="absolute -bottom-1 -right-1 bg-white text-blue-600 rounded-full p-1 shadow-lg hover:bg-gray-100">
                <Camera className="h-4 w-4" />
              </button>
            </div>

            {/* User Info */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-2xl font-bold">{user.nickname}</h1>
                <Badge className={`${
                  user.membershipLevel === 'platinum' ? 'bg-purple-500' :
                  user.membershipLevel === 'gold' ? 'bg-yellow-500' :
                  user.membershipLevel === 'silver' ? 'bg-gray-400' :
                  'bg-gray-500'
                }`}>
                  {user.membershipLevel === 'platinum' && <Crown className="h-3 w-3 mr-1" />}
                  {user.membershipLevel === 'gold' && <Award className="h-3 w-3 mr-1" />}
                  {membershipInfo.name}
                </Badge>
                {user.isVerified && (
                  <Badge className="bg-green-500">
                    <ShieldCheck className="h-3 w-3 mr-1" />
                    已认证
                  </Badge>
                )}
              </div>
              
              <div className="flex items-center gap-4 text-blue-100">
                <span>{user.phone || user.email}</span>
                <span>·</span>
                <span>已出行 {user.tripCount} 次</span>
              </div>
            </div>

            <Button variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-0">
              <Edit className="h-4 w-4 mr-2" />
              编辑资料
            </Button>
          </div>

          {/* Membership Benefits */}
          <div className="mt-6 grid grid-cols-4 gap-4">
            <Card className="bg-white/10 border-0 backdrop-blur">
              <CardContent className="p-4 text-center">
                <Gift className="h-6 w-6 mx-auto mb-2 text-yellow-300" />
                <div className="text-2xl font-bold">{user.points.toLocaleString()}</div>
                <div className="text-sm text-blue-100">可用积分</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-0 backdrop-blur">
              <CardContent className="p-4 text-center">
                <Ticket className="h-6 w-6 mx-auto mb-2 text-orange-300" />
                <div className="text-2xl font-bold">{user.couponCount}</div>
                <div className="text-sm text-blue-100">优惠券</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-0 backdrop-blur">
              <CardContent className="p-4 text-center">
                <Wallet className="h-6 w-6 mx-auto mb-2 text-green-300" />
                <div className="text-2xl font-bold">{Math.round((1 - membershipInfo.discount) * 100)}%</div>
                <div className="text-sm text-blue-100">会员折扣</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-0 backdrop-blur">
              <CardContent className="p-4 text-center">
                <Award className="h-6 w-6 mx-auto mb-2 text-purple-300" />
                <div className="text-2xl font-bold">{membershipInfo.pointsMultiplier}x</div>
                <div className="text-sm text-blue-100">积分倍率</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Menu */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-0">
                <nav className="divide-y">
                  {menuItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors ${
                          activeTab === item.id ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className="h-5 w-5" />
                          <div className="text-left">
                            <div className="font-medium">{item.label}</div>
                            <div className="text-xs text-gray-500">{item.description}</div>
                          </div>
                        </div>
                        <ChevronRight className="h-4 w-4 text-gray-400" />
                      </button>
                    );
                  })}
                  
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 p-4 text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <LogOut className="h-5 w-5" />
                    <span className="font-medium">退出登录</span>
                  </button>
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              {/* Profile Tab */}
              <TabsContent value="profile" className="mt-0">
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-6">个人资料</h2>
                    
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">昵称</label>
                          <Input defaultValue={user.nickname} />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">性别</label>
                          <select className="w-full rounded-md border border-gray-200 px-3 py-2">
                            <option value="male">男</option>
                            <option value="female">女</option>
                            <option value="other">其他</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">手机号</label>
                          <Input defaultValue={user.phone} disabled />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">邮箱</label>
                          <Input defaultValue={user.email} />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">生日</label>
                        <Input type="date" defaultValue={user.birthday} />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">个人简介</label>
                        <textarea 
                          className="w-full rounded-md border border-gray-200 px-3 py-2 min-h-[100px]"
                          defaultValue={user.bio}
                          placeholder="介绍一下自己吧..."
                        />
                      </div>

                      <div className="flex justify-end gap-3">
                        <Button variant="secondary">取消</Button>
                        <Button className="bg-blue-600 hover:bg-blue-700">保存修改</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Orders Tab */}
              <TabsContent value="orders" className="mt-0">
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-6">我的订单</h2>
                    <div className="text-center py-12 text-gray-500">
                      <Calendar className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                      <p>暂无订单记录</p>
                      <Button variant="secondary" className="mt-4" onClick={() => router.push('/')}>
                        去定制行程
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Favorites Tab */}
              <TabsContent value="favorites" className="mt-0">
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-6">我的收藏</h2>
                    <div className="text-center py-12 text-gray-500">
                      <Heart className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                      <p>暂无收藏的目的地</p>
                      <Button variant="secondary" className="mt-4" onClick={() => router.push('/destinations')}>
                        去探索目的地
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Coupons Tab */}
              <TabsContent value="coupons" className="mt-0">
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-6">优惠券</h2>
                    <div className="text-center py-12 text-gray-500">
                      <Ticket className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                      <p>暂无可用优惠券</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Points Tab */}
              <TabsContent value="points" className="mt-0">
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-6">积分中心</h2>
                    <div className="text-center py-12">
                      <Gift className="h-12 w-12 mx-auto mb-4 text-yellow-500" />
                      <div className="text-4xl font-bold text-gray-900 mb-2">{user.points.toLocaleString()}</div>
                      <p className="text-gray-500 mb-6">可用积分</p>
                      <Button variant="secondary">查看积分规则</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Settings Tab */}
              <TabsContent value="settings" className="mt-0">
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-6">设置</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-medium mb-4">消息通知</h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-medium">邮件通知</div>
                              <div className="text-sm text-gray-500">接收订单、优惠等邮件</div>
                            </div>
                            <Switch 
                              checked={user.preferences.emailNotification} 
                              onCheckedChange={(checked) => updateUser({
                                preferences: { ...user.preferences, emailNotification: checked }
                              })}
                            />
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-medium">短信通知</div>
                              <div className="text-sm text-gray-500">接收重要短信提醒</div>
                            </div>
                            <Switch 
                              checked={user.preferences.smsNotification}
                              onCheckedChange={(checked) => updateUser({
                                preferences: { ...user.preferences, smsNotification: checked }
                              })}
                            />
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-medium">微信通知</div>
                              <div className="text-sm text-gray-500">接收微信消息推送</div>
                            </div>
                            <Switch 
                              checked={user.preferences.wechatNotification}
                              onCheckedChange={(checked) => updateUser({
                                preferences: { ...user.preferences, wechatNotification: checked }
                              })}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="border-t pt-6">
                        <h3 className="font-medium mb-4">账号安全</h3>
                        <div className="space-y-3">
                          <button className="w-full flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                            <span>修改密码</span>
                            <ChevronRight className="h-4 w-4 text-gray-400" />
                          </button>
                          <button className="w-full flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                            <span>绑定手机</span>
                            <ChevronRight className="h-4 w-4 text-gray-400" />
                          </button>
                          <button className="w-full flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                            <span>绑定微信</span>
                            <ChevronRight className="h-4 w-4 text-gray-400" />
                          </button>
                        </div>
                      </div>

                      <div className="border-t pt-6">
                        <button className="text-red-600 hover:text-red-700">
                          注销账号
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
