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
