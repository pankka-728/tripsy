"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  Edit2, 
  Send, 
  RotateCcw, 
  MapPin, 
  Hotel, 
  Plane, 
  Utensils,
  CheckCircle,
  ArrowLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export default function EditPage() {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState<Array<{role: 'user' | 'assistant', content: string}>>([
    {
      role: 'assistant',
      content: '您好！我是您的AI旅游规划师。您可以告诉我想要修改的内容，比如：\n\n• "把第二天的博物馆换成美术馆"\n• "把酒店升级到五星级"\n• "增加一天在大阪的行程"\n• "把预算降低到15000元"\n\n请告诉我您想如何调整行程？'
    }
  ]);

  const quickModifications = [
    { icon: <MapPin className="h-4 w-4" />, text: "更换景点", example: "把第二天的浅草寺换成东京塔" },
    { icon: <Hotel className="h-4 w-4" />, text: "调整酒店", example: "把酒店升级到五星级，位置在市中心" },
    { icon: <Plane className="h-4 w-4" />, text: "调整交通", example: "把新干线换成飞机，节省时间" },
    { icon: <Utensils className="h-4 w-4" />, text: "调整餐饮", example: "增加更多当地特色美食" },
  ];

  const handleQuickModify = (example: string) => {
    setMessage(example);
  };

  const handleSend = async () => {
    if (!message.trim()) return;
    
    setChatHistory(prev => [...prev, { role: 'user', content: message }]);
    const userMessage = message;
    setMessage("");
    setLoading(true);

    // 模拟AI回复
    setTimeout(() => {
      let response = "";
      
      if (userMessage.includes("博物馆") && userMessage.includes("美术馆")) {
        response = "好的，我已经为您把第二天的博物馆换成了美术馆！\n\n主要变更：\n• 将东京国立博物馆替换为东京都美术馆\n• 调整了参观时间（美术馆10:00开门）\n• 门票价格从1000日元改为1500日元\n• 预算增加了150元\n\n更新后的行程已准备好，您可以继续提出其他修改要求！";
      } else if (userMessage.includes("酒店") && userMessage.includes("五星")) {
        response = "明白了，我已为您将所有酒店升级到五星级！\n\n主要变更：\n• 东京酒店升级为柏悦酒店（五星）\n• 京都酒店升级为柊家旅馆（五星）\n• 增加了泳池、SPA等设施\n• 预算增加了4000元\n\n您还需要其他调整吗？";
      } else if (userMessage.includes("预算")) {
        response = "好的，我会帮您优化预算！\n\n我为您做了以下调整：\n• 将部分酒店调整为四星\n• 选择更经济的交通方式\n• 优化餐饮选择\n• 总预算调整为15000元\n\n这样的调整可以吗？";
      } else {
        response = "好的，我已经根据您的要求调整了行程！\n\n已完成的修改：\n• 已按照您的要求更新了行程安排\n• 重新计算了预算明细\n• 检查了所有预订可行性\n\n请查看更新后的行程，如果还有其他需要调整的地方，请随时告诉我！";
      }
      
      setChatHistory(prev => [...prev, { role: 'assistant', content: response }]);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" onClick={() => router.back()} className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            返回行程
          </Button>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <Edit2 className="h-6 w-6 text-amber-700" />
                <h1 className="text-2xl font-bold text-slate-900">修改行程</h1>
              </div>
              <p className="text-slate-600">
                用自然语言告诉AI您想要修改的内容，我会实时为您调整行程并重新计算价格。
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Modifications */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-lg sticky top-8">
              <CardContent className="p-6">
                <h3 className="font-semibold text-slate-900 mb-4">快捷修改</h3>
                <p className="text-sm text-slate-500 mb-4">点击下方示例快速修改</p>
                <div className="space-y-3">
                  {quickModifications.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickModify(item.example)}
                      className="w-full text-left p-3 rounded-lg border hover:border-amber-600 hover:bg-amber-50 transition-all"
                    >
                      <div className="flex items-center gap-2 text-slate-700 mb-1">
                        {item.icon}
                        <span className="font-medium">{item.text}</span>
                      </div>
                      <p className="text-xs text-slate-500">{item.example}</p>
                    </button>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-medium text-slate-900 mb-3">修改范围</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-slate-600">更换景点</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-slate-600">调整酒店</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-slate-600">变更交通</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-slate-600">调整餐饮</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-slate-600">预算优化</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-slate-600">增减天数</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-0">
                {/* Chat Messages */}
                <div className="h-[500px] overflow-y-auto p-6 space-y-6">
                  {chatHistory.map((chat, index) => (
                    <div
                      key={index}
                      className={`flex ${chat.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-4 rounded-2xl ${
                          chat.role === 'user'
                            ? 'bg-amber-700 text-white rounded-tr-none'
                            : 'bg-stone-100 text-slate-900 rounded-tl-none'
                        }`}
                      >
                        <div className="whitespace-pre-line text-sm">
                          {chat.content}
                        </div>
                      </div>
                    </div>
                  ))}
                  {loading && (
                    <div className="flex justify-start">
                      <div className="bg-stone-100 p-4 rounded-2xl rounded-tl-none">
                        <div className="flex gap-2">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Input Area */}
                <div className="p-6 border-t bg-stone-50 rounded-b-xl">
                  <div className="flex gap-3">
                    <Textarea
                      placeholder="告诉我您想如何修改行程...例如：把第二天的博物馆换成美术馆"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          handleSend();
                        }
                      }}
                      rows={3}
                      className="resize-none"
                    />
                  </div>
                  <div className="flex justify-between items-center mt-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setMessage("")}
                    >
                      <RotateCcw className="h-4 w-4 mr-2" />
                      清空
                    </Button>
                    <Button onClick={handleSend} disabled={loading || !message.trim()}>
                      <Send className="h-4 w-4 mr-2" />
                      发送
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6 flex gap-4 justify-center">
              <Button variant="secondary" onClick={() => router.push('/itinerary?demo=true')}>
                查看更新后的行程
              </Button>
              <Button>
                <CheckCircle className="h-4 w-4 mr-2" />
                确认满意
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
