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

        {/* 编辑推荐板块 */}
        <div className="mb-12 rounded-lg border border-line bg-gradient-to-br from-accent/5 to-transparent p-8">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-2xl">⭐</span>
            <h2 className="text-[1.5rem] font-semibold text-ink">编辑推荐</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <a href="/post/top5-airports-comparison-2026" className="group rounded-lg border border-line bg-white p-6 transition-all hover:border-accent hover:shadow-md">
              <h3 className="text-[16px] font-semibold text-ink group-hover:text-accent">
                Top5 机场横向对比评测
              </h3>
              <p className="mt-2 text-[13px] text-ink-soft">
                云图、鲲鹏、瞬云、九云、筋斗云全方位对比，帮你选出最适合的机场
              </p>
              <span className="mt-3 inline-block text-[12px] text-accent">阅读评测 →</span>
            </a>
            <a href="/post/budget-airports-recommendation-2026" className="group rounded-lg border border-line bg-white p-6 transition-all hover:border-accent hover:shadow-md">
              <h3 className="text-[16px] font-semibold text-ink group-hover:text-accent">
                便宜机场推荐指南
              </h3>
              <p className="mt-2 text-[13px] text-ink-soft">
                10+ 家高性价比机场推荐，¥10-40/月，预算有限也能用好机场
              </p>
              <span className="mt-3 inline-block text-[12px] text-accent">查看推荐 →</span>
            </a>
            <a href="/post/airport-beginner-guide" className="group rounded-lg border border-line bg-white p-6 transition-all hover:border-accent hover:shadow-md">
              <h3 className="text-[16px] font-semibold text-ink group-hover:text-accent">
                机场新手选购指南
              </h3>
              <p className="mt-2 text-[13px] text-ink-soft">
                第一次选机场？从预算、线路、速度到避坑，手把手教你选
              </p>
              <span className="mt-3 inline-block text-[12px] text-accent">新手必读 →</span>
            </a>
            <a href="/post/airport-iplc-vs-iepl" className="group rounded-lg border border-line bg-white p-6 transition-all hover:border-accent hover:shadow-md">
              <h3 className="text-[16px] font-semibold text-ink group-hover:text-accent">
                IEPL vs IPLC 线路对比
              </h3>
              <p className="mt-2 text-[13px] text-ink-soft">
                专线机场的线路类型有什么区别？看懂机场参数，不再被忽悠
              </p>
              <span className="mt-3 inline-block text-[12px] text-accent">技术科普 →</span>
            </a>
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
