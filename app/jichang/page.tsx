import Shell from "@/components/Shell";
import PostGrid from "@/components/PostGrid";
import Footer from "@/components/Footer";
import { getSortedPostsData } from "@/lib/posts";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "机场评测汇总 — 专业的机场测速与推荐 | OUTSIDEWEB",
  description: "OUTSIDEWEB 机场评测汇总页面，涵盖云图、鲲鹏加速、瞬云等主流机场的深度评测、速度测试、稳定性分析和使用体验。帮助您选择最适合的科学上网服务。",
  keywords: "机场评测, 机场推荐, 机场测速, 科学上网, VPN推荐, 翻墙工具, IEPL专线, IPLC专线",
  openGraph: {
    title: "机场评测汇总 — 专业的机场测速与推荐",
    description: "专业的机场评测、速度测试、稳定性分析，帮助您选择最适合的科学上网服务",
    type: 'website',
    url: 'https://outsideweb.net/jichang',
  },
  alternates: {
    canonical: 'https://outsideweb.net/jichang',
  },
};

export default function JichangPage() {
  const posts = getSortedPostsData();
  const jichangPosts = posts.filter(post =>
    post.category === "机场评测" ||
    post.tags.some(tag => ["机场", "评测", "VPN", "专线"].includes(tag))
  );

  return (
    <Shell>
      <div className="border-b border-line bg-bg-soft px-12 py-20 text-center">
        <p className="eyebrow text-[11px] text-accent">Airport Reviews</p>
        <h1 className="mt-4 text-[2.4rem] font-semibold tracking-tight text-ink">
          机场评测汇总
        </h1>
        <p className="mx-auto mt-4 max-w-[600px] text-[14px] leading-relaxed text-ink-soft">
          专业的机场评测、速度测试、稳定性分析。
          我们通过真实测试和长期使用体验，为您推荐优质的科学上网服务。
        </p>
      </div>

      <div className="mx-auto max-w-[1440px] px-12 py-16">
        <div className="mb-12 grid gap-8 md:grid-cols-3">
          <div className="rounded-lg border border-line bg-white p-6">
            <h3 className="text-[18px] font-semibold text-ink">评测维度</h3>
            <ul className="mt-4 space-y-2 text-[13px] text-ink-soft">
              <li>• 速度测试（多节点、多时段）</li>
              <li>• 稳定性评估（30 天监测）</li>
              <li>• 流媒体解锁能力</li>
              <li>• 价格与性价比分析</li>
              <li>• 客服响应速度</li>
            </ul>
          </div>

          <div className="rounded-lg border border-line bg-white p-6">
            <h3 className="text-[18px] font-semibold text-ink">推荐机场</h3>
            <ul className="mt-4 space-y-2 text-[13px] text-ink-soft">
              <li>• 云图 — 高性价比首选</li>
              <li>• 鲲鹏加速 — 游戏玩家专用</li>
              <li>• 瞬云 — 流媒体解锁强</li>
              <li>• 更多机场持续评测中...</li>
            </ul>
          </div>

          <div className="rounded-lg border border-line bg-white p-6">
            <h3 className="text-[18px] font-semibold text-ink">选购建议</h3>
            <ul className="mt-4 space-y-2 text-[13px] text-ink-soft">
              <li>• 新手：选择老牌稳定机场</li>
              <li>• 游戏：选择低延迟游戏专线</li>
              <li>• 流媒体：选择解锁能力强的</li>
              <li>• 预算有限：关注性价比</li>
            </ul>
          </div>
        </div>

        <h2 className="mb-6 text-[1.5rem] font-semibold text-ink">
          全部评测文章 ({jichangPosts.length})
        </h2>
        <PostGrid posts={jichangPosts} />
      </div>

      <Footer />
    </Shell>
  );
}
