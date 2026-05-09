"use client";

import { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  Instagram,
  Twitter,
  Facebook
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitting(false);
    setSubmitted(true);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-blue-600" />,
      title: "电子邮件",
      content: "contact@tripsy.com",
      subcontent: "24小时内回复"
    },
    {
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      title: "联系电话",
      content: "400-123-4567",
      subcontent: "工作日 9:00-18:00"
    },
    {
      icon: <MapPin className="h-6 w-6 text-blue-600" />,
      title: "公司地址",
      content: "北京市朝阳区建国路88号",
      subcontent: "欢迎来访"
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: "工作时间",
      content: "周一至周五 9:00-18:00",
      subcontent: "周末在线咨询"
    }
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center py-20">
        <Card className="border-0 shadow-lg max-w-md w-full mx-4">
          <CardContent className="p-8 text-center">
            <div className="w-20 h-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="h-10 w-10" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">消息已发送！</h2>
            <p className="text-gray-600 mb-6">
              感谢您的留言，我们会在24小时内与您联系。
            </p>
            <Button onClick={() => setSubmitted(false)}>
              返回联系页面
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">联系我们</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            有任何问题或建议？我们随时为您服务
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-50 rounded-full p-3">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                      <p className="text-gray-900 font-medium">{info.content}</p>
                      <p className="text-sm text-gray-500">{info.subcontent}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Social Media */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">关注我们</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center hover:bg-pink-200 transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-200 transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center hover:bg-blue-200 transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">发送消息</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">姓名 *</Label>
                      <Input
                        id="name"
                        placeholder="请输入您的姓名"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">邮箱 *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="请输入您的邮箱"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">电话</Label>
                      <Input
                        id="phone"
                        placeholder="请输入您的电话号码"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">主题 *</Label>
                      <Select
                        value={formData.subject}
                        onValueChange={(value) => setFormData({ ...formData, subject: value })}
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="请选择咨询主题" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">一般咨询</SelectItem>
                          <SelectItem value="booking">预订相关</SelectItem>
                          <SelectItem value="itinerary">行程咨询</SelectItem>
                          <SelectItem value="feedback">意见反馈</SelectItem>
                          <SelectItem value="partnership">商务合作</SelectItem>
                          <SelectItem value="other">其他</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">留言内容 *</Label>
                    <Textarea
                      id="message"
                      placeholder="请输入您想说的话..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full md:w-auto"
                    disabled={submitting}
                  >
                    {submitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                        发送中...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        发送消息
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* FAQ Preview */}
            <Card className="border-0 shadow-lg mt-6">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">常见问题</h3>
                <div className="space-y-4">
                  <div className="pb-4 border-b">
                    <h4 className="font-medium text-gray-900 mb-1">如何取消或修改行程？</h4>
                    <p className="text-gray-600 text-sm">您可以在行程页面随时修改行程，AI会实时更新。如果需要取消，请联系客服。</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">支付方式有哪些？</h4>
                    <p className="text-gray-600 text-sm">我们支持支付宝、微信支付、信用卡等多种支付方式。</p>
                  </div>
                </div>
                <Button variant="secondary" className="mt-4" asChild>
                  <a href="/faq">查看全部FAQ</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
