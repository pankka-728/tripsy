import { Shield, User, Lock, Eye, Trash2, Database } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function PrivacyPage() {
  const lastUpdated = "2024年1月20日";

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
            <Shield className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">隐私政策</h1>
          <p className="text-gray-500">最后更新：{lastUpdated}</p>
        </div>

        <div className="space-y-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">概述</h2>
              <p className="text-gray-600 leading-relaxed">
                Tripsign（以下简称&quot;我们&quot;）非常重视用户的隐私保护。本隐私政策旨在向您说明我们如何收集、使用、存储和保护您的个人信息。
                使用我们的服务即表示您同意本隐私政策的内容。如果您不同意本政策的任何内容，请不要使用我们的服务。
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <User className="h-6 w-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">我们收集的信息</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">1. 您提供的信息</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li>姓名、联系方式（邮箱、电话）</li>
                    <li>旅行需求信息（目的地、时间、预算、偏好等）</li>
                    <li>账户登录信息</li>
                    <li>与客服沟通的内容</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">2. 自动收集的信息</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li>设备信息（设备型号、操作系统等）</li>
                    <li>IP地址、浏览器类型</li>
                    <li>使用日志（访问时间、页面浏览记录等）</li>
                    <li>Cookie和类似技术收集的信息</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Database className="h-6 w-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">我们如何使用信息</h2>
              </div>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-900 mb-2">提供和改进服务</h3>
                  <p className="text-blue-800 text-sm">
                    用于为您生成旅行行程、提供客服支持、优化用户体验。
                  </p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="font-semibold text-green-900 mb-2">沟通与通知</h3>
                  <p className="text-green-800 text-sm">
                    向您发送服务相关通知、更新和优惠信息（您可以随时取消订阅）。
                  </p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h3 className="font-semibold text-purple-900 mb-2">安全保障</h3>
                  <p className="text-purple-800 text-sm">
                    检测和防止欺诈行为，保护您的账户安全。
                  </p>
                </div>
                <div className="bg-amber-50 rounded-lg p-4">
                  <h3 className="font-semibold text-amber-900 mb-2">数据分析</h3>
                  <p className="text-amber-800 text-sm">
                    分析服务使用情况，改进我们的产品和服务。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Lock className="h-6 w-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">信息共享与披露</h2>
              </div>
              <p className="text-gray-600 mb-4">
                我们不会出售或出租您的个人信息。我们可能在以下情况下共享您的信息：
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li><strong>获得您的同意：</strong>在获得您的明确同意后</li>
                <li><strong>服务提供商：</strong>与帮助我们提供服务的第三方合作（如云服务、支付处理）</li>
                <li><strong>法律要求：</strong>遵守法律法规、法院命令或政府要求</li>
                <li><strong>权利保护：</strong>保护我们和用户的权利、财产和安全</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-6 w-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">信息安全</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                我们采用行业标准的安全措施保护您的个人信息，包括：
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 mt-4">
                <li>数据加密传输（SSL/TLS）</li>
                <li>数据加密存储</li>
                <li>访问权限控制</li>
                <li>定期安全审计</li>
                <li>员工隐私培训</li>
              </ul>
              <p className="text-gray-600 mt-4">
                但请注意，没有任何方法可以保证100%的安全。我们会尽力保护您的信息，但无法保证绝对安全。
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Eye className="h-6 w-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">您的权利</h2>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-900">访问权</h3>
                  <p className="text-gray-600 text-sm">您可以访问和获取您的个人信息副本</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-gray-900">更正权</h3>
                  <p className="text-gray-600 text-sm">您可以要求更正不准确的信息</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-gray-900">删除权</h3>
                  <p className="text-gray-600 text-sm">您可以要求删除您的个人信息</p>
                </div>
                <div className="border-l-4 border-amber-500 pl-4">
                  <h3 className="font-semibold text-gray-900">限制处理权</h3>
                  <p className="text-gray-600 text-sm">您可以要求限制对您信息的处理</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="font-semibold text-gray-900">数据可携带权</h3>
                  <p className="text-gray-600 text-sm">您可以请求获取结构化、机器可读的数据副本</p>
                </div>
              </div>
              <p className="text-gray-600 mt-6">
                要行使这些权利，请通过 privacy@tripsy.com 与我们联系。
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Trash2 className="h-6 w-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">数据保留</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                我们仅在实现本政策所述目的所需的时间内保留您的个人信息，或根据法律要求保留。
                一般情况下，我们会在您的账户注销后3年内保留您的数据，之后会安全删除或匿名化处理。
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">儿童隐私</h2>
              <p className="text-gray-600 leading-relaxed">
                我们的服务不面向13岁以下的儿童。我们不会故意收集13岁以下儿童的个人信息。
                如果您认为我们收集了儿童的信息，请立即联系我们，我们会尽快删除。
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">政策更新</h2>
              <p className="text-gray-600 leading-relaxed">
                我们可能会不时更新本隐私政策。更新后的政策会在本页面发布，重要变更会通过邮件通知您。
                建议您定期查看本政策。继续使用我们的服务即表示您接受更新后的政策。
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">联系我们</h2>
              <p className="text-white/90 mb-4">
                如果您对本隐私政策有任何疑问或担忧，请通过以下方式联系我们：
              </p>
              <div className="space-y-2">
                <p><strong>邮箱：</strong>privacy@tripsy.com</p>
                <p><strong>地址：</strong>北京市朝阳区建国路88号</p>
                <p><strong>电话：</strong>400-123-4567</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
