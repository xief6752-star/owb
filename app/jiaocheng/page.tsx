import Shell from "@/components/Shell";
import PostGrid from "@/components/PostGrid";
import Footer from "@/components/Footer";
import { getSortedPostsData } from "@/lib/posts";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "使用教程汇总 — 科学上网完整指南 | OUTSIDEWEB",
  description: "OUTSIDEWEB 使用教程汇总，包含 Clash、V2Ray、iOS、Android、路由器等全平台科学上网配置教程，帮助您快速上手翻墙工具。",
  keywords: "科学上网教程, 翻墙教程, Clash教程, V2Ray教程, iOS翻墙, Android翻墙, 机场使用教程",
  openGraph: {
    title: "使用教程汇总 — 科学上网完整指南",
    description: "全平台科学上网配置教程，从入门到进阶，帮助您快速上手",
    type: 'website',
    url: 'https://outsideweb.net/jiaocheng',
  },
  alternates: {
    canonical: 'https://outsideweb.net/jiaocheng',
  },
};

export default function JiaochengPage() {
  const posts = getSortedPostsData();
  const tutorialPosts = posts.filter(post =>
    post.category === "使用教程" ||
    post.tags.some(tag => ["教程", "指南", "配置", "使用"].includes(tag))
  );

  return (
    <Shell>
      <div className="border-b border-line bg-bg-soft px-12 py-20 text-center">
        <p className="eyebrow text-[11px] text-accent">Tutorials</p>
        <h1 className="mt-4 text-[2.4rem] font-semibold tracking-tight text-ink">
          使用教程汇总
        </h1>
        <p className="mx-auto mt-4 max-w-[600px] text-[14px] leading-relaxed text-ink-soft">
          从入门到进阶，全平台科学上网配置教程。
          详细的图文步骤，让您快速掌握翻墙工具的使用方法。
        </p>
      </div>

      <div className="mx-auto max-w-[1440px] px-12 py-16">
        <div className="mb-12 grid gap-8 md:grid-cols-3">
          <div className="rounded-lg border border-line bg-white p-6">
            <h3 className="text-[18px] font-semibold text-ink">客户端教程</h3>
            <ul className="mt-4 space-y-2 text-[13px] text-ink-soft">
              <li>• Clash 使用教程</li>
              <li>• V2Ray 配置指南</li>
              <li>• Shadowrocket 设置</li>
              <li>• Surge 进阶教程</li>
            </ul>
          </div>

          <div className="rounded-lg border border-line bg-white p-6">
            <h3 className="text-[18px] font-semibold text-ink">系统教程</h3>
            <ul className="mt-4 space-y-2 text-[13px] text-ink-soft">
              <li>• iOS 翻墙完整教程</li>
              <li>• Android 科学上网</li>
              <li>• Windows 配置指南</li>
              <li>• macOS 使用教程</li>
            </ul>
          </div>

          <div className="rounded-lg border border-line bg-white p-6">
            <h3 className="text-[18px] font-semibold text-ink">进阶教程</h3>
            <ul className="mt-4 space-y-2 text-[13px] text-ink-soft">
              <li>• 路由器翻墙设置</li>
              <li>• 主机联机教程</li>
              <li>• 分流规则配置</li>
              <li>• 故障排查指南</li>
            </ul>
          </div>
        </div>

        {/* 新手快速入门 */}
        <div className="mb-12 rounded-lg border border-line bg-gradient-to-br from-blue-50 to-transparent p-8">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-2xl">🚀</span>
            <h2 className="text-[1.5rem] font-semibold text-ink">新手快速入门</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <a href="/post/ios-vpn-setup-guide-2026" className="group rounded-lg border border-line bg-white p-5 transition-all hover:border-blue-500 hover:shadow-md">
              <div className="mb-2 flex items-center gap-2">
                <span className="rounded bg-blue-100 px-2 py-1 text-[11px] font-medium text-blue-700">iOS</span>
              </div>
              <h3 className="text-[15px] font-semibold text-ink group-hover:text-blue-600">
                iPhone/iPad 翻墙教程
              </h3>
              <p className="mt-2 text-[12px] text-ink-soft">
                美区 Apple ID 注册、Shadowrocket 购买配置
              </p>
            </a>
            <a href="/post/android-vpn-setup-guide-2026" className="group rounded-lg border border-line bg-white p-5 transition-all hover:border-blue-500 hover:shadow-md">
              <div className="mb-2 flex items-center gap-2">
                <span className="rounded bg-green-100 px-2 py-1 text-[11px] font-medium text-green-700">Android</span>
              </div>
              <h3 className="text-[15px] font-semibold text-ink group-hover:text-blue-600">
                安卓手机科学上网
              </h3>
              <p className="mt-2 text-[12px] text-ink-soft">
                Clash for Android 完整配置指南
              </p>
            </a>
            <a href="/post/clash-complete-tutorial-2026" className="group rounded-lg border border-line bg-white p-5 transition-all hover:border-blue-500 hover:shadow-md">
              <div className="mb-2 flex items-center gap-2">
                <span className="rounded bg-purple-100 px-2 py-1 text-[11px] font-medium text-purple-700">全平台</span>
              </div>
              <h3 className="text-[15px] font-semibold text-ink group-hover:text-blue-600">
                Clash 完整使用教程
              </h3>
              <p className="mt-2 text-[12px] text-ink-soft">
                Windows/Mac/iOS/Android 全平台指南
              </p>
            </a>
          </div>
        </div>

        {/* 配套机场推荐 */}
        <div className="mb-12 rounded-lg border border-accent/30 bg-accent/5 p-6">
          <div className="flex items-start gap-4">
            <span className="text-3xl">💡</span>
            <div className="flex-1">
              <h3 className="text-[16px] font-semibold text-ink">
                配套机场推荐
              </h3>
              <p className="mt-2 text-[13px] text-ink-soft">
                教程配合优质机场使用效果更佳。查看我们的 <a href="/post/top5-airports-comparison-2026" className="text-accent underline hover:text-accent/80">Top5 机场横评</a> 或 <a href="/post/budget-airports-recommendation-2026" className="text-accent underline hover:text-accent/80">便宜机场推荐</a>，找到适合你的科学上网服务。
              </p>
            </div>
          </div>
        </div>

        <h2 className="mb-6 text-[1.5rem] font-semibold text-ink">
          全部教程文章 ({tutorialPosts.length})
        </h2>
        {tutorialPosts.length > 0 ? (
          <PostGrid posts={tutorialPosts} />
        ) : (
          <div className="rounded-lg border border-line bg-bg-soft p-12 text-center">
            <p className="text-[14px] text-muted">
              教程内容正在更新中，敬请期待...
            </p>
          </div>
        )}
      </div>

      <Footer />
    </Shell>
  );
}
