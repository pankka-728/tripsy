'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Lock, 
  ArrowRight,
  Eye,
  EyeOff,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/contexts/AuthContext';
import { LOGIN_METHODS } from '@/types/member';

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login, loading } = useAuth();
  
  const [activeTab, setActiveTab] = useState('phone');
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [codeSent, setCodeSent] = useState(false);

  const redirectTo = searchParams.get('redirectTo') || '/';

  // 发送验证码
  const handleSendCode = () => {
    if (!phone || phone.length !== 11) {
      alert('请输入正确的手机号');
      return;
    }
    
    // 模拟发送验证码
    setCodeSent(true);
    setCountdown(60);
    
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // 手机号登录
  const handlePhoneLogin = async () => {
    if (!phone || !code) {
      alert('请输入手机号和验证码');
      return;
    }
    
    const success = await login('phone', { phone, code });
    if (success) {
      router.push(redirectTo);
    }
  };

  // 邮箱登录
  const handleEmailLogin = async () => {
    if (!email || !password) {
      alert('请输入邮箱和密码');
      return;
    }
    
    const success = await login('email', { email, password });
    if (success) {
      router.push(redirectTo);
    }
  };

  // 微信登录
  const handleWechatLogin = async () => {
    const success = await login('wechat');
    if (success) {
      router.push(redirectTo);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">登录 Tripsy</h1>
            <p className="text-gray-600">登录后享受更多会员专属服务</p>
          </div>

          {/* Login Card */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <Tabs defaultValue="phone" value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid grid-cols-3 mb-6">
                  <TabsTrigger value="phone" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    手机号
                  </TabsTrigger>
                  <TabsTrigger value="email" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    邮箱
                  </TabsTrigger>
                  <TabsTrigger value="wechat" className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" />
                    微信
                  </TabsTrigger>
                </TabsList>

                {/* 手机号登录 */}
                <TabsContent value="phone" className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">手机号</label>
                    <div className="flex gap-2">
                      <div className="flex-1 relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input
                          type="tel"
                          placeholder="请输入手机号"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="pl-10"
                          maxLength={11}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">验证码</label>
                    <div className="flex gap-2">
                      <div className="flex-1 relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input
                          type="text"
                          placeholder="请输入验证码"
                          value={code}
                          onChange={(e) => setCode(e.target.value)}
                          className="pl-10"
                          maxLength={6}
                        />
                      </div>
                      <Button
                        variant="secondary"
                        onClick={handleSendCode}
                        disabled={countdown > 0 || !phone}
                        className="whitespace-nowrap"
                      >
                        {countdown > 0 ? `${countdown}s` : codeSent ? '重新发送' : '获取验证码'}
                      </Button>
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={handlePhoneLogin}
                    disabled={loading}
                  >
                    {loading ? '登录中...' : '登录'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </TabsContent>

                {/* 邮箱登录 */}
                <TabsContent value="email" className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">邮箱</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        type="email"
                        placeholder="请输入邮箱"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">密码</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="请输入密码"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-10 pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button className="text-sm text-blue-600 hover:text-blue-700">
                      忘记密码？
                    </button>
                  </div>

                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={handleEmailLogin}
                    disabled={loading}
                  >
                    {loading ? '登录中...' : '登录'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </TabsContent>

                {/* 微信登录 */}
                <TabsContent value="wechat" className="space-y-6">
                  <div className="text-center py-8">
                    <div className="w-40 h-40 mx-auto bg-green-500 rounded-lg flex items-center justify-center mb-4">
                      <MessageCircle className="h-16 w-16 text-white" />
                    </div>
                    <p className="text-gray-600 mb-2">使用微信扫描二维码登录</p>
                    <p className="text-sm text-gray-500">安全 · 便捷 · 快速</p>
                  </div>

                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700"
                    onClick={handleWechatLogin}
                    disabled={loading}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    {loading ? '登录中...' : '微信一键登录'}
                  </Button>
                </TabsContent>
              </Tabs>

              {/* Divider */}
              <div className="my-6 relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">其他登录方式</span>
                </div>
              </div>

              {/* Quick Login Buttons */}
              <div className="grid grid-cols-3 gap-3">
                <Button variant="secondary" className="flex flex-col items-center py-4" onClick={handleWechatLogin}>
                  <MessageCircle className="h-6 w-6 text-green-600 mb-1" />
                  <span className="text-xs">微信</span>
                </Button>
                <Button variant="secondary" className="flex flex-col items-center py-4" onClick={() => setActiveTab('phone')}>
                  <Phone className="h-6 w-6 text-blue-600 mb-1" />
                  <span className="text-xs">手机</span>
                </Button>
                <Button variant="secondary" className="flex flex-col items-center py-4" onClick={() => setActiveTab('email')}>
                  <Mail className="h-6 w-6 text-purple-600 mb-1" />
                  <span className="text-xs">邮箱</span>
                </Button>
              </div>

              {/* Register Link */}
              <div className="mt-6 text-center">
                <span className="text-gray-600">还没有账号？</span>
                <button className="text-blue-600 hover:text-blue-700 font-medium ml-1">
                  立即注册
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Benefits */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-gray-900">专属优惠</h4>
                <p className="text-sm text-gray-600">会员专享折扣价格</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-gray-900">积分奖励</h4>
                <p className="text-sm text-gray-600">消费累积积分兑换</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-gray-900">行程管理</h4>
                <p className="text-sm text-gray-600">历史行程随时查看</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-gray-900">专属客服</h4>
                <p className="text-sm text-gray-600">1对1贴心服务</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
