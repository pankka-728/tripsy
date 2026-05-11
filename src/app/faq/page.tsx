import { 
  HelpCircle, 
  CreditCard, 
  Plane, 
  Calendar, 
  MessageSquare,
  Shield
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQPage() {
  const categories = [
    {
      title: "预订相关",
      icon: <Calendar className="h-6 w-6 text-amber-700" />,
      questions: [
        {
          q: "如何定制旅行行程？",
          a: "您只需要在首页点击'立即定制'，填写您的出行需求，包括时间、目的地、预算、偏好等信息，AI旅游规划师会在3秒内为您生成完整的行程方案。"
        },
        {
          q: "行程可以修改吗？",
          a: "当然可以！您可以无限次修改行程。在行程页面，您可以用自然语言告诉AI您想要修改的内容，比如'把第二天的博物馆换成美术馆'，AI会实时更新行程并重新计算价格。"
        },
        {
          q: "定制行程需要付费吗？",
          a: "AI行程规划服务是免费的！只有当您需要PDF游记或实体纪念册时才需要付费。我们希望让每个人都能享受到专业的旅行规划服务。"
        }
      ]
    },
    {
      title: "支付与退款",
      icon: <CreditCard className="h-6 w-6 text-green-600" />,
      questions: [
        {
          q: "支持哪些支付方式？",
          a: "我们支持支付宝、微信支付、银联卡、信用卡（Visa、MasterCard）等多种支付方式，您可以选择最方便的方式进行支付。"
        },
        {
          q: "如何申请退款？",
          a: "如果您对服务不满意，可以在购买后7天内申请退款。请通过客服邮箱或电话联系我们，我们会在3个工作日内处理您的退款申请。"
        },
        {
          q: "PDF游记可以重新生成吗？",
          a: "可以的。如果您修改了行程，可以重新生成PDF游记。已购买的PDF游记在30天内可以免费重新生成3次。"
        }
      ]
    },
    {
      title: "行程与服务",
      icon: <Plane className="h-6 w-6 text-purple-600" />,
      questions: [
        {
          q: "行程信息来源是什么？",
          a: "我们的AI旅游规划师会实时联网查询最新的景点、酒店、交通、天气等信息，确保所有数据真实可靠。所有信息都来自权威数据源。"
        },
        {
          q: "可以代订机票和酒店吗？",
          a: "目前我们主要提供行程规划服务，不直接代订机票和酒店。但我们会在行程中为您推荐合适的航班和酒店，您可以根据推荐自行预订。"
        },
        {
          q: "行程中提到的价格准确吗？",
          a: "我们提供的价格是参考价格，实际价格可能因季节、预订时间等因素有所变动。建议您在预订时以实际价格为准。"
        }
      ]
    },
    {
      title: "实体纪念册",
      icon: <MessageSquare className="h-6 w-6 text-amber-600" />,
      questions: [
        {
          q: "实体纪念册多长时间能收到？",
          a: "根据您选择的版本不同，制作周期为7-15个工作日。我们使用顺丰快递，国内一般1-3天可以送达。"
        },
        {
          q: "纪念册可以定制封面吗？",
          a: "豪华版和珍藏版支持定制封面。您可以上传您喜欢的照片作为封面，我们的设计师会为您进行专业排版。"
        },
        {
          q: "纪念册质量有问题怎么办？",
          a: "如果收到的纪念册有质量问题（如印刷错误、装订问题等），请在7天内联系我们，我们会为您免费重新制作。"
        }
      ]
    },
    {
      title: "账户与安全",
      icon: <Shield className="h-6 w-6 text-red-600" />,
      questions: [
        {
          q: "我的个人信息安全吗？",
          a: "我们非常重视用户隐私保护。所有个人信息都经过加密存储，不会泄露给第三方。您可以查看我们的隐私政策了解更多详情。"
        },
        {
          q: "如何删除我的账户？",
          a: "如果您需要删除账户，请联系客服，我们会在确认您的身份后为您处理。账户删除后，所有相关数据将被永久删除。"
        },
        {
          q: "可以导出我的行程数据吗？",
          a: "可以的。您可以在个人中心导出您的所有行程数据，包括PDF游记、原始需求等，格式为JSON和PDF。"
        }
      ]
    },
    {
      title: "其他问题",
      icon: <HelpCircle className="h-6 w-6 text-slate-600" />,
      questions: [
        {
          q: "如何成为合作伙伴？",
          a: "如果您是酒店、航空公司、景点等旅游相关企业，欢迎与我们联系。请发送邮件至partner@tripsy.com，我们会尽快与您取得联系。"
        },
        {
          q: "有手机APP吗？",
          a: "目前我们主要通过网站提供服务，移动端适配良好，可以在手机浏览器中直接使用。原生APP正在开发中，敬请期待！"
        },
        {
          q: "如何反馈问题或建议？",
          a: "您可以通过联系页面的表单发送消息，或者直接发送邮件至feedback@tripsy.com。每一条反馈我们都会认真对待！"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 mb-6">
            <HelpCircle className="h-8 w-8 text-amber-700" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">常见问题</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            找到您想要的答案。如果没有，请联系我们的客服团队
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {categories.map((category, catIndex) => (
            <Card key={catIndex} className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-stone-50 rounded-full p-3">
                    {category.icon}
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">{category.title}</h2>
                </div>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((question, qIndex) => (
                    <AccordionItem 
                      key={qIndex} 
                      value={`${catIndex}-${qIndex}`}
                      className="border-b last:border-b-0"
                    >
                      <AccordionTrigger className="text-left font-medium text-slate-900 hover:no-underline py-4">
                        {question.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-slate-600 pb-4">
                        {question.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-16 text-center">
          <Card className="border-0 shadow-lg max-w-2xl mx-auto bg-gradient-to-r from-slate-700 to-slate-600 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">还有问题？</h3>
              <p className="text-white/90 mb-6">
                我们的客服团队随时为您服务
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" asChild>
                  <a href="/contact">联系我们</a>
                </Button>
                <Button className="bg-white text-amber-700 hover:bg-stone-100" asChild>
                  <a href="mailto:support@tripsy.com">发送邮件</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
