import Link from "next/link";
import { MapPin, Mail, Phone, Instagram, Twitter, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-6 w-6 text-blue-400" />
              <span className="text-xl font-bold text-white">Tripsy</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              您的私人旅行规划师，让每一次旅途都充满惊喜。
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">首页</Link></li>
              <li><Link href="/plan" className="hover:text-white transition-colors">定制行程</Link></li>
              <li><Link href="/destinations" className="hover:text-white transition-colors">热门目的地</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">关于我们</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">服务支持</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/faq" className="hover:text-white transition-colors">常见问题</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">联系我们</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">隐私政策</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">服务条款</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">联系我们</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>contact@tripsy.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>+86 400-123-4567</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-500 text-center">
          <p>© 2024 Tripsy. 保留所有权利。</p>
        </div>
      </div>
    </footer>
  );
}
