import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://outsideweb.net'),
  title: {
    default: "OUTSIDEWEB — 墙外有网 | 机场推荐·科技资讯·数字生活",
    template: "%s | OUTSIDEWEB"
  },
  description:
    "专业的机场评测与推荐平台，提供最新的科技资讯、跨境工具、AI 应用和数字游民生活方式。云图、瞬云、寰宇云等顶级机场深度评测，助你畅游全球互联网。",
  keywords: [
    "机场推荐",
    "机场评测",
    "VPN推荐",
    "科学上网",
    "IEPL专线",
    "翻墙工具",
    "云图机场",
    "瞬云",
    "寰宇云",
    "科技资讯",
    "数字游民",
    "远程工作",
    "AI工具",
    "跨境工具"
  ],
  authors: [{ name: "OutsideWeb Team" }],
  creator: "OutsideWeb",
  publisher: "OutsideWeb",
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://outsideweb.net',
    siteName: 'OUTSIDEWEB — 墙外有网',
    title: 'OUTSIDEWEB — 墙外有网 | 机场推荐·科技资讯·数字生活',
    description: '专业的机场评测与推荐平台，提供最新的科技资讯、跨境工具、AI 应用和数字游民生活方式。',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'OUTSIDEWEB — 墙外有网',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OUTSIDEWEB — 墙外有网',
    description: '专业的机场评测与推荐平台，提供最新的科技资讯、跨境工具和数字生活方式。',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // 稍后添加 Google Search Console 验证码
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600&family=Noto+Sans+SC:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
