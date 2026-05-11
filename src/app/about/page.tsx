import { 
  Heart, 
  Sparkles, 
  Globe, 
  CheckCircle
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  const team = [
    { name: "张明", role: "创始人 & CEO", bio: "15年旅游行业经验，走遍60多个国家" },
    { name: "李华", role: "首席技术官", bio: "AI专家，致力于将人工智能与旅游结合" },
    { name: "王芳", role: "产品总监", bio: "资深旅行规划师，设计过上千条行程" },
  ];

  const values = [
    { icon: <Heart className="h-8 w-8 text-red-500" />, title: "用心服务", description: "把每一位用户的旅行当成自己的旅行来规划" },
    { icon: <Sparkles className="h-8 w-8 text-blue-500" />, title: "创新科技", description: "用AI技术让旅行规划更简单、更智能" },
    { icon: <CheckCircle className="h-8 w-8 text-green-500" />, title: "品质保证", description: "严格筛选合作伙伴，确保服务质量" },
    { icon: <Globe className="h-8 w-8 text-purple-500" />, title: "全球视野", description: "覆盖全球目的地，提供国际化服务" },
  ];

  const milestones = [
    { year: "2020", title: "品牌创立", description: "Tripsign正式成立，开始AI旅游规划的探索" },
    { year: "2021", title: "产品上线", description: "第一代AI规划师上线，服务首批用户" },
    { year: "2022", title: "快速发展", description: "服务用户突破10万，覆盖100+目的地" },
    { year: "2023", title: "全新升级", description: "推出PDF游记和实体纪念册服务" },
    { year: "2024", title: "继续前行", description: "致力于成为全球领先的智能旅游平台" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">关于 Tripsign</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            我们致力于用人工智能让每一次旅行都成为美好的回忆
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">我们的使命</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Tripsign 成立于2020年，我们的使命是让每个人都能享受到专业、便捷、个性化的旅行规划服务。
              通过人工智能技术，我们希望打破传统旅行规划的壁垒，让定制旅行不再是少数人的专利。
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">我们的价值观</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">核心团队</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    {member.name[0]}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">发展历程</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                      {milestone.year}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 flex-1 bg-gray-300 my-2"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100,000+</div>
              <p className="text-white/80">服务用户</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">150+</div>
              <p className="text-white/80">目的地国家</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <p className="text-white/80">用户满意度</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <p className="text-white/80">全天候服务</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
