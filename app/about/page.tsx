import Shell from "@/components/Shell";
import Footer from "@/components/Footer";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "关于我们 — 独立的机场评测与科技内容平台",
  description: "OUTSIDEWEB 是一个专注于机场评测、科技资讯和数字生活方式的独立内容平台。我们通过真实测试和深度评测，帮助用户选择最优质的服务。",
  openGraph: {
    title: "关于我们 — 独立的机场评测与科技内容平台",
    description: "了解 OUTSIDEWEB 的内容方向、机场评测方法与团队理念，获取跨境工具、科技资讯和数字生活方式内容。",
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
          OUTSIDEWEB（墙外有网）是一个专注于全球互联网视野的独立内容平台。我们致力于打破信息壁垒，
          每天为您精选墙外的优质资讯、深度评测跨境工具，分享前沿的数字生活方式，
          帮助您建立与全球互联网的深度连接。
        </p>

        <h2 className="mb-3 mt-10 text-[1.3rem] font-semibold text-ink">我们的使命</h2>
        <p className="mb-6">
          在这个信息碎片化的时代，我们相信优质内容的力量。OUTSIDEWEB 不仅是一个信息聚合平台，
          更是一个帮助用户拓展全球视野、提升数字素养的知识社区。我们坚持独立评测、
          真实体验、客观呈现，让每一篇内容都有价值。
        </p>

        <h2 className="mb-3 mt-10 text-[1.3rem] font-semibold text-ink">我们关注什么</h2>
        <ul className="mb-6 space-y-2 pl-5">
          <li className="list-disc">🚀 <strong>科技前沿</strong> — AI 应用、Web3、新兴技术趋势与深度解读</li>
          <li className="list-disc">🌐 <strong>跨境工具</strong> — 机场评测、VPN 对比、网络加速方案与隐私保护</li>
          <li className="list-disc">💼 <strong>远程工作</strong> — 数字游民生活方式、远程协作工具、全球职业机会</li>
          <li className="list-disc">🔒 <strong>隐私安全</strong> — 数据保护、匿名技术、安全工具使用指南</li>
          <li className="list-disc">🎯 <strong>效率提升</strong> — 生产力工具、自动化流程、个人知识管理</li>
        </ul>

        <h2 className="mb-3 mt-10 text-[1.3rem] font-semibold text-ink">评测标准</h2>
        <p className="mb-6">
          我们的每一篇评测都基于真实使用体验。从速度测试、稳定性验证到客户服务体验，
          我们用标准化的测试流程确保评测结果的客观性和参考价值。我们不接受付费推广，
          所有推荐都基于产品本身的质量。
        </p>

        <h2 className="mb-3 mt-10 text-[1.3rem] font-semibold text-ink">内容理念</h2>
        <p className="mb-6">
          我们相信信息应该自由流动，知识应该无界共享。在全球化的今天，
          了解墙外的世界不仅是获取信息的需要，更是拓展认知边界、培养独立思考能力的重要途径。
          OUTSIDEWEB 致力于成为您通往全球互联网的可靠桥梁。
        </p>

        <h2 className="mb-3 mt-10 text-[1.3rem] font-semibold text-ink">加入我们</h2>
        <p className="mb-3">
          如果您有值得分享的经验、工具推荐或独特见解，欢迎通过以下方式与我们联系：
        </p>
        <ul className="space-y-2 pl-5">
          <li className="list-disc">📧 投稿邮箱：contact@outsideweb.net</li>
          <li className="list-disc">🐦 Twitter/X：@outsideweb</li>
          <li className="list-disc">📝 内容建议：通过 GitHub Issues 提交</li>
        </ul>
        <p className="mt-4 text-[13px] text-muted">
          我们会认真阅读每一份来稿，优质内容将获得署名发布机会。
        </p>
      </div>

      <Footer />
    </Shell>
  );
}
