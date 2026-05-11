import Link from "next/link";
import { 
  Sparkles, 
  ArrowRight, 
  Star,
  Zap,
  PenTool,
  BookOpen
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { POPULAR_DESTINATIONS, TESTIMONIALS } from "@/lib/constants";

export default function Home() {
  const features = [
    {
      icon: <Sparkles className="h-8 w-8 text-amber-700" />,
      title: "AI智能规划",
      description: "10年经验AI旅游规划师，根据您的需求智能生成完美行程"
    },
    {
      icon: <Zap className="h-8 w-8 text-amber-700" />,
      title: "实时联网查询",
      description: "实时获取景点、酒店、交通、天气信息，确保数据真实可靠"
    },
    {
      icon: <PenTool className="h-8 w-8 text-amber-700" />,
      title: "无限次修改",
      description: "支持自然语言修改行程，AI实时更新并重新计算报价"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-amber-700" />,
      title: "精美PDF游记",
      description: "生成图文并茂的游记式行程书，留下美好旅行回忆"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "填写需求",
      description: "告诉我们您的出行时间、目的地、预算和偏好"
    },
    {
      number: "02",
      title: "AI规划",
      description: "智能规划师3秒内为您生成完整行程和详细报价"
    },
    {
      number: "03",
      title: "调整优化",
      description: "无限次修改行程，直到您满意为止"
    },
    {
      number: "04",
      title: "生成游记",
      description: "一键生成精美PDF游记，还可定制实体纪念书册"
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-stone-50 via-white to-amber-50/30 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07]">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-stone-300 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-amber-200/50">
              <Sparkles className="h-4 w-4" />
              <span>AI智能旅游规划 · 全球定制</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
              让每一次旅行
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-amber-500">
                都成为美好回忆
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Tripsign AI旅游规划师为您量身定制全球旅行行程，实时联网查询，智能报价，无限次修改，生成精美游记。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6 h-auto">
                <Link href="/plan">
                  开始定制行程
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="text-lg px-8 py-6 h-auto">
                <Link href="/destinations">
                  查看热门目的地
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative Image */}
        <div className="mt-16 container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="md:col-span-2">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80" 
                  alt="旅行" 
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80" 
                  alt="海滩" 
                  className="w-full h-36 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80" 
                  alt="山脉" 
                  className="w-full h-36 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">为什么选择 Tripsign</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">专业、智能、贴心的旅行规划服务</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-b from-stone-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">定制流程</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">简单四步，开启您的完美旅程</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="text-6xl font-bold text-amber-100 mb-4 transition-colors group-hover:text-amber-200">{step.number}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4">
                    <ArrowRight className="h-8 w-8 text-stone-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/plan">
                立即开始定制
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Destinations Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">热门目的地</h2>
              <p className="text-lg text-slate-600">探索全球最受欢迎的旅行目的地</p>
            </div>
            <Button asChild variant="secondary" className="mt-6 md:mt-0">
              <Link href="/destinations">
                查看全部
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {POPULAR_DESTINATIONS.slice(0, 6).map((dest) => (
              <Link href={`/plan?destination=${dest.id}`} key={dest.id}>
                <Card className="border-0 overflow-hidden shadow-lg hover:shadow-xl transition-all group cursor-pointer">
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={dest.image} 
                      alt={dest.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-1">{dest.name}</h3>
                      <p className="text-white/90 text-sm">{dest.country}</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-slate-600 text-sm mb-4 line-clamp-2">{dest.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <span className="font-medium">{dest.rating}</span>
                        <span className="text-slate-500 text-sm">({dest.reviews.toLocaleString()})</span>
                      </div>
                      <span className="text-sm text-slate-600">
                        约 ¥{dest.averageBudgetPerDay}/天
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-stone-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">用户好评</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">听听我们的用户怎么说</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {TESTIMONIALS.map((testimonial) => (
              <Card key={testimonial.id} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300'}`}
                      />
                    ))}
                  </div>
                  <p className="text-slate-700 mb-6 leading-relaxed">&quot;{testimonial.comment}&quot;</p>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-slate-900">{testimonial.name}</p>
                      <p className="text-sm text-slate-500">{testimonial.destination}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-500 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">准备好开始您的完美旅程了吗？</h2>
            <p className="text-xl text-stone-300 mb-10">
              让Tripsign AI旅游规划师为您打造独一无二的旅行体验
            </p>
            <Button asChild size="lg" className="text-lg px-8 py-6 h-auto bg-amber-700 hover:bg-amber-800 text-white border-0">
              <Link href="/plan">
                立即开始定制
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
