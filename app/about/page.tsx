import Shell from "@/components/Shell";
import Footer from "@/components/Footer";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "关于我们 — OUTSIDEWEB 墙外有网",
  description: "OUTSIDEWEB 是一个专注于机场评测、科技资讯和数字生活方式的独立内容平台。我们通过真实测试和深度评测，帮助用户选择最优质的服务。",
  openGraph: {
    title: "关于我们 — OUTSIDEWEB 墙外有网",
    description: "专注于机场评测、科技资讯和数字生活方式的独立内容平台。",
    type: 'website',
    url: 'https://outsideweb.net/about',
  },
  alternates: {
    canonical: 'https://outsideweb.net/about',
  },
};

export default function AboutPage() {
  return (
    <Shell>
      <div className="border-b border-line bg-bg-soft px-12 py-20 text-center">
        <p className="eyebrow text-[11px] text-accent">About</p>
        <h1 className="mt-4 text-[2.4rem] font-semibold tracking-tight text-ink">
          关于墙外有网
        </h1>
      </div>

      <div className="mx-auto max-w-[720px] px-12 py-16 text-[15px] leading-[1.95] text-ink-soft">
        <p className="mb-6">
          OUTSIDEWEB（墙外有网）是一个专注于分享全球视野的内容平台。我们每天精选墙外的优质资讯、
          跨境实用工具与数字生活方式，帮助你打开通往更广阔互联网的窗口。
        </p>
        <h2 className="mb-3 mt-10 text-[1.3rem] font-semibold text-ink">我们关注什么</h2>
        <p className="mb-6">
          科技前沿、AI 应用、远程工作、数字游民、隐私安全与跨境工具评测。
          我们相信信息应该自由流动，知识应该无界共享。
        </p>
        <h2 className="mb-3 mt-10 text-[1.3rem] font-semibold text-ink">如何投稿</h2>
        <p>
          如果你有值得分享的经验或工具推荐，欢迎通过邮件或社交媒体与我们联系。
          我们会认真阅读每一份来稿。
        </p>
      </div>

      <Footer />
    </Shell>
  );
}
