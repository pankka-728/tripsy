"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  Book, 
  CheckCircle, 
  ArrowLeft, 
  ShoppingCart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { BOOK_OPTIONS } from "@/lib/constants";

export default function BookPage() {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState(BOOK_OPTIONS[0]);
  const [ordering, setOrdering] = useState(false);

  const handleOrder = () => {
    setOrdering(true);
    setTimeout(() => {
      setOrdering(false);
      alert(`感谢您的订购！我们将在${selectedOption.deliveryDays}个工作日内为您发货。`);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" onClick={() => router.back()} className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            返回
          </Button>
          
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl p-4">
                  <Book className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    定制实体纪念册
                  </h1>
                  <p className="text-gray-600">
                    将您的精美游记打印成精装纪念书册，永久珍藏美好旅行回忆
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Book Options */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-gray-900 mb-6">选择版本</h2>
            <RadioGroup 
              value={selectedOption.id} 
              onValueChange={(value) => {
                const option = BOOK_OPTIONS.find(opt => opt.id === value);
                if (option) setSelectedOption(option);
              }}
              className="space-y-4"
            >
              {BOOK_OPTIONS.map((option) => (
                <div key={option.id}>
                  <RadioGroupItem value={option.id} id={option.id} className="peer sr-only" />
                  <Label 
                    htmlFor={option.id}
                    className={`flex flex-col md:flex-row gap-6 p-6 border-2 rounded-xl cursor-pointer transition-all peer-data-[state=checked]:border-amber-500 peer-data-[state=checked]:bg-amber-50 hover:bg-gray-50`}
                  >
                    <div className="md:w-48">
                      <img 
                        src={option.image} 
                        alt={option.name} 
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{option.name}</h3>
                          <p className="text-gray-600">{option.description}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-3xl font-bold text-amber-600">¥{option.price}</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                        <div className="bg-white rounded-lg p-3">
                          <p className="text-xs text-gray-500 mb-1">尺寸</p>
                          <p className="font-medium text-gray-900">{option.size}</p>
                        </div>
                        <div className="bg-white rounded-lg p-3">
                          <p className="text-xs text-gray-500 mb-1">页数</p>
                          <p className="font-medium text-gray-900">{option.pages}页</p>
                        </div>
                        <div className="bg-white rounded-lg p-3">
                          <p className="text-xs text-gray-500 mb-1">装帧</p>
                          <p className="font-medium text-gray-900">{option.binding}</p>
                        </div>
                        <div className="bg-white rounded-lg p-3">
                          <p className="text-xs text-gray-500 mb-1">纸张</p>
                          <p className="font-medium text-gray-900">{option.paperType}</p>
                        </div>
                        <div className="bg-white rounded-lg p-3">
                          <p className="text-xs text-gray-500 mb-1">制作周期</p>
                          <p className="font-medium text-gray-900">{option.deliveryDays}个工作日</p>
                        </div>
                      </div>
                    </div>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg sticky top-8">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">订单摘要</h3>
                
                <div className="space-y-4">
                  <div className="bg-amber-50 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-medium text-gray-900">{selectedOption.name}</p>
                        <p className="text-sm text-gray-500">{selectedOption.size} · {selectedOption.pages}页</p>
                      </div>
                      <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100">
                        实体书
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-2 pt-4 border-t">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">商品金额</span>
                      <span className="text-gray-900">¥{selectedOption.price}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">快递费</span>
                      <span className="text-green-600">免运费</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold pt-2 border-t">
                      <span className="text-gray-900">应付总额</span>
                      <span className="text-amber-600">¥{selectedOption.price}</span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t">
                    <div className="flex items-start gap-3 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">专业彩色印刷</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">精美礼盒包装</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">顺丰快递配送</span>
                    </div>
                  </div>
                </div>

                <Button 
                  className="w-full mt-6 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600"
                  onClick={handleOrder}
                  disabled={ordering}
                >
                  {ordering ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                      处理中...
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      立即订购
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-4">制作流程</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">确认订单</p>
                      <p className="text-gray-500 text-xs">选择版本，完成支付</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">设计排版</p>
                      <p className="text-gray-500 text-xs">设计师优化排版</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">印刷制作</p>
                      <p className="text-gray-500 text-xs">高品质印刷装帧</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">快递发货</p>
                      <p className="text-gray-500 text-xs">顺丰快递配送到家</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
