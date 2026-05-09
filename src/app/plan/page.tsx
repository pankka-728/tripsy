"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Calendar as CalendarIcon, MapPin, Users, DollarSign, Sparkles, CheckCircle, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { TravelRequest } from "@/types/travel";
import { PREFERENCES, TRAVEL_TYPES, TRANSPORTATION_TYPES, BUDGET_RANGES } from "@/lib/constants";

export default function PlanPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [destinations, setDestinations] = useState<string[]>([""]);
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState<Partial<TravelRequest>>({
    departureDate: "",
    days: 7,
    destinations: [],
    budget: {
      min: 10000,
      max: 20000,
      currency: "CNY"
    },
    transportationType: "flight",
    travelType: "family",
    travelers: {
      adults: 2,
      children: 0,
      seniors: 0
    },
    preferences: [],
    specialRequirements: ""
  });

  const totalSteps = 4;

  const addDestination = () => {
    setDestinations([...destinations, ""]);
  };

  const removeDestination = (index: number) => {
    if (destinations.length > 1) {
      const newDestinations = destinations.filter((_, i) => i !== index);
      setDestinations(newDestinations);
    }
  };

  const updateDestination = (index: number, value: string) => {
    const newDestinations = [...destinations];
    newDestinations[index] = value;
    setDestinations(newDestinations);
  };

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    router.push("/itinerary?demo=true");
    setLoading(false);
  };

  const togglePreference = (value: 'relax' | 'culture' | 'food' | 'beach' | 'adventure' | 'luxury') => {
    const currentPrefs = formData.preferences || [];
    const newPrefs = currentPrefs.includes(value)
      ? currentPrefs.filter((p: string) => p !== value)
      : [...currentPrefs, value];
    setFormData({ ...formData, preferences: newPrefs });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">定制您的完美旅程</h1>
          <p className="text-lg text-gray-600">填写以下信息，AI旅游规划师将为您量身打造行程</p>
        </div>

        <div className="mb-12">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    s < step 
                      ? "bg-green-500 text-white" 
                      : s === step 
                        ? "bg-blue-600 text-white animate-pulse" 
                        : "bg-gray-200 text-gray-500"
                  }`}>
                    {s < step ? <CheckCircle className="h-5 w-5" /> : s}
                  </div>
                  <span className={`text-sm mt-2 ${s === step ? "text-blue-600 font-medium" : "text-gray-500"}`}>
                    {s === 1 ? "基本信息" : s === 2 ? "目的地" : s === 3 ? "预算偏好" : "特殊要求"}
                  </span>
                </div>
                {s < 4 && (
                  <div className={`flex-1 h-1 w-16 md:w-24 mx-2 mt-5 ${
                    s < step ? "bg-green-500" : "bg-gray-200"
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <Card className="border-0 shadow-xl">
          <CardContent className="p-8">
            {step === 1 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <CalendarIcon className="h-6 w-6 text-blue-600" />
                    基本信息
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="departureDate">出发日期</Label>
                      <Input
                        id="departureDate"
                        type="date"
                        value={formData.departureDate}
                        onChange={(e) => setFormData({ ...formData, departureDate: e.target.value })}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="days">旅行天数</Label>
                      <Select
                        value={formData.days?.toString()}
                        onValueChange={(value) => setFormData({ ...formData, days: parseInt(value) })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="选择天数" />
                        </SelectTrigger>
                        <SelectContent>
                          {[3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 21].map((d) => (
                            <SelectItem key={d} value={d.toString()}>
                              {d} 天
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label className="text-base font-medium">交通方式</Label>
                  <RadioGroup 
                    value={formData.transportationType} 
                    onValueChange={(value: 'flight' | 'train' | 'self-drive' | 'bus' | 'mixed') => setFormData({ ...formData, transportationType: value })}
                    className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4"
                  >
                    {TRANSPORTATION_TYPES.map((type) => (
                      <div key={type.value}>
                        <RadioGroupItem value={type.value} id={type.value} className="peer sr-only" />
                        <Label 
                          htmlFor={type.value} 
                          className="flex flex-col items-center p-4 border-2 rounded-lg cursor-pointer peer-data-[state=checked]:border-blue-600 peer-data-[state=checked]:bg-blue-50 hover:bg-gray-50 transition-all"
                        >
                          <span className="text-3xl mb-2">{type.icon}</span>
                          <span className="font-semibold text-gray-900">{type.label}</span>
                          <span className="text-xs text-gray-500 text-center">{type.description}</span>
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div className="space-y-4">
                  <Label className="text-base font-medium">出行性质</Label>
                  <RadioGroup 
                    value={formData.travelType} 
                    onValueChange={(value: 'family' | 'colleague' | 'friends' | 'honeymoon' | 'couple' | 'solo') => setFormData({ ...formData, travelType: value })}
                    className="grid grid-cols-2 md:grid-cols-3 gap-4"
                  >
                    {TRAVEL_TYPES.map((type) => (
                      <div key={type.value}>
                        <RadioGroupItem value={type.value} id={`travel-type-${type.value}`} className="peer sr-only" />
                        <Label 
                          htmlFor={`travel-type-${type.value}`}
                          className="flex flex-col items-center p-4 border-2 rounded-lg cursor-pointer peer-data-[state=checked]:border-blue-600 peer-data-[state=checked]:bg-blue-50 hover:bg-gray-50 transition-all w-full"
                        >
                          <span className="text-3xl mb-2">{type.icon}</span>
                          <span className="font-medium text-gray-900 text-center">{type.label}</span>
                          <span className="text-xs text-gray-500">{type.sublabel}</span>
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div className="space-y-4">
                  <Label className="text-base font-medium flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    出行人数
                  </Label>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="adults">成人</Label>
                      <Input
                        id="adults"
                        type="number"
                        min={1}
                        value={formData.travelers?.adults}
                        onChange={(e) => setFormData({
                          ...formData,
                          travelers: { ...formData.travelers!, adults: parseInt(e.target.value) || 0 }
                        })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="children">儿童</Label>
                      <Input
                        id="children"
                        type="number"
                        min={0}
                        value={formData.travelers?.children}
                        onChange={(e) => setFormData({
                          ...formData,
                          travelers: { ...formData.travelers!, children: parseInt(e.target.value) || 0 }
                        })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="seniors">老人</Label>
                      <Input
                        id="seniors"
                        type="number"
                        min={0}
                        value={formData.travelers?.seniors}
                        onChange={(e) => setFormData({
                          ...formData,
                          travelers: { ...formData.travelers!, seniors: parseInt(e.target.value) || 0 }
                        })}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <MapPin className="h-6 w-6 text-blue-600" />
                    目的地
                  </h2>
                  <p className="text-gray-600 mb-6">请输入您想去的国家或城市（支持多目的地）</p>
                  
                  <div className="space-y-4">
                    {destinations.map((dest, index) => (
                      <div key={index} className="flex gap-4 items-start">
                        <div className="flex-1">
                          <Label htmlFor={`dest-${index}`} className="sr-only">目的地 {index + 1}</Label>
                          <Input
                            id={`dest-${index}`}
                            placeholder="例如：巴黎、东京、巴厘岛..."
                            value={dest}
                            onChange={(e) => updateDestination(index, e.target.value)}
                          />
                        </div>
                        {destinations.length > 1 && (
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => removeDestination(index)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={addDestination}
                    className="mt-4"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    添加目的地
                  </Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <DollarSign className="h-6 w-6 text-blue-600" />
                    预算范围
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label>货币类型</Label>
                      <RadioGroup 
                        value={formData.budget?.currency} 
                        onValueChange={(value: 'CNY' | 'USD') => setFormData({
                          ...formData,
                          budget: { ...formData.budget!, currency: value }
                        })}
                        className="flex gap-4"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="CNY" id="currency-cny" />
                          <Label htmlFor="currency-cny">人民币 (CNY)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="USD" id="currency-usd" />
                          <Label htmlFor="currency-usd">美元 (USD)</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>总预算</Label>
                      <RadioGroup 
                        value={`${formData.budget?.min}-${formData.budget?.max}`}
                        onValueChange={(value) => {
                          const [min, max] = value.split('-').map(Number);
                          setFormData({
                            ...formData,
                            budget: { ...formData.budget!, min, max }
                          });
                        }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      >
                        {BUDGET_RANGES[formData.budget?.currency || "CNY"].map((range) => (
                          <div key={`${range.min}-${range.max}`}>
                            <RadioGroupItem
                              value={`${range.min}-${range.max}`}
                              id={`budget-${range.min}`}
                              className="peer sr-only"
                            />
                            <Label
                              htmlFor={`budget-${range.min}`}
                              className="flex-1 p-3 border-2 rounded-lg cursor-pointer peer-data-[state=checked]:border-blue-600 peer-data-[state=checked]:bg-blue-50 hover:bg-gray-50 transition-all block"
                            >
                              {range.label}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-blue-600" />
                    旅行偏好
                  </h3>
                  <p className="text-gray-600">请选择您感兴趣的旅行方式（可多选）</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {PREFERENCES.map((pref) => (
                      <div key={pref.value} className="flex items-center space-x-2">
                        <Checkbox
                          id={`pref-${pref.value}`}
                          checked={formData.preferences?.includes(pref.value)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              togglePreference(pref.value);
                            } else {
                              togglePreference(pref.value);
                            }
                          }}
                        />
                        <Label
                          htmlFor={`pref-${pref.value}`}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <span>{pref.icon}</span>
                          <span>{pref.label}</span>
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">特殊要求</h2>
                  <p className="text-gray-600 mb-6">
                    请告诉我们您的特殊需求，如饮食禁忌、过敏信息、住宿偏好、交通偏好等，我们会在规划行程时特别注意。
                  </p>
                  
                  <div className="space-y-2">
                    <Label htmlFor="specialRequirements">特殊要求（选填）</Label>
                    <Textarea
                      id="specialRequirements"
                      placeholder="例如：对海鲜过敏，需要清真餐厅；希望住在市中心；有老人需要慢节奏等..."
                      rows={6}
                      value={formData.specialRequirements}
                      onChange={(e) => setFormData({ ...formData, specialRequirements: e.target.value })}
                    />
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    信息确认
                  </h3>
                  <p className="text-blue-800 text-sm">
                    请仔细核对您填写的信息，点击下方按钮后，AI旅游规划师将为您生成定制行程。
                    行程生成后您还可以无限次修改，直到满意为止。
                  </p>
                </div>
              </div>
            )}

            <div className="flex justify-between mt-10 pt-6 border-t">
              {step > 1 ? (
                <Button type="button" variant="secondary" onClick={handleBack}>
                  上一步
                </Button>
              ) : (
                <div></div>
              )}
              <Button type="button" onClick={handleNext} disabled={loading}>
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                    AI正在规划中...
                  </>
                ) : step < totalSteps ? (
                  "下一步"
                ) : (
                  "生成行程"
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
