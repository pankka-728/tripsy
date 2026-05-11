import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { AuthProvider } from '@/contexts/AuthContext';

export const metadata: Metadata = {
  title: {
    default: 'Tripsign - 您的私人旅行规划师',
    template: '%s | Tripsign',
  },
  description:
    'Tripsy是您的全球私人定制旅行专家，AI旅游规划师为您量身打造完美行程，智能报价，无限修改，生成精美PDF游记。',
  keywords: [
    '旅游定制',
    '旅行规划',
    'AI旅游',
    '私人定制',
    '全球旅游',
    '行程规划',
    'Tripsy',
    '旅游攻略',
  ],
  authors: [{ name: 'Tripsy Team' }],
  generator: 'Tripsy',
  openGraph: {
    title: 'Tripsy - 您的私人旅行规划师',
    description:
      'AI旅游规划师为您量身定制全球旅行行程，智能报价，无限次修改，生成精美PDF游记。',
    locale: 'zh_CN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`antialiased min-h-screen flex flex-col`}>
        <AuthProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
