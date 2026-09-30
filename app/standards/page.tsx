import Shell from "@/components/Shell";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "机场收录标准与评测方法 — 如何筛选与提交机场",
  description: "OUTSIDEWEB 机场收录标准：至少运营 6 个月、90 天在线率 98%+、实测速度 300Mbps+、无跑路历史。投稿邮箱：flybors@proton.me",
  openGraph: {
    title: "机场收录标准与评测方法 — 如何筛选与提交机场",
    description: "了解 OUTSIDEWEB 如何筛选机场、测试速度与稳定性、处理商业合作，并提交机场进行独立评测。",
    type: 'website',
    url: 'https://outsideweb.net/standards',
  },
  alternates: {
    canonical: 'https://outsideweb.net/standards',
  },
};

export default function StandardsPage() {
  return (
    <Shell>
      <div className="container mx-auto max-w-[900px] px-10 py-16">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="font-display mb-4 text-[42px] font-medium tracking-tight text-ink">
            收录标准
          </h1>
          <p className="text-[15px] leading-relaxed text-muted">
            OUTSIDEWEB 的文章收录标准与投稿指南
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-neutral max-w-none">
          <section className="mb-12">
            <h2 className="mb-6 text-[28px] font-medium text-ink">我们收录什么内容</h2>

            <div className="space-y-6 text-[14px] leading-relaxed text-ink-soft">
              <p>
                OUTSIDEWEB（墙外有网）专注于分享国际互联网的优质内容、跨境工具评测和数字生活方式。
                我们收录的内容必须符合以下主题之一：
              </p>

              <div className="grid gap-4">
                <div className="rounded-sm border border-line bg-bg-soft p-5">
                  <h3 className="mb-2 text-[16px] font-medium text-ink">🌐 科技前沿</h3>
                  <p className="text-[13px] text-muted">
                    国际科技新闻、产品发布、技术趋势分析，聚焦 AI、Web3、加密货币、SaaS 工具等前沿领域
                  </p>
                </div>

                <div className="rounded-sm border border-line bg-bg-soft p-5">
                  <h3 className="mb-2 text-[16px] font-medium text-ink">🛠️ 工具评测</h3>
                  <p className="text-[13px] text-muted">
                    跨境工具深度评测，包括机场/VPN、云服务、生产力工具、开发工具、AI 工具等
                  </p>
                </div>

                <div className="rounded-sm border border-line bg-bg-soft p-5">
                  <h3 className="mb-2 text-[16px] font-medium text-ink">🤖 AI 应用</h3>
                  <p className="text-[13px] text-muted">
                    ChatGPT、Claude、Midjourney 等 AI 工具的使用技巧、提示词工程、应用案例
                  </p>
                </div>

                <div className="rounded-sm border border-line bg-bg-soft p-5">
                  <h3 className="mb-2 text-[16px] font-medium text-ink">💼 远程工作 & 数字游民</h3>
                  <p className="text-[13px] text-muted">
                    远程工作经验分享、跨国办公技巧、全球税务法务、签证攻略、城市生活成本对比
                  </p>
                </div>

                <div className="rounded-sm border border-line bg-bg-soft p-5">
                  <h3 className="mb-2 text-[16px] font-medium text-ink">🔒 隐私安全</h3>
                  <p className="text-[13px] text-muted">
                    网络隐私保护、数据安全实践、匿名通信工具、加密技术科普
                  </p>
                </div>

                <div className="rounded-sm border border-line bg-bg-soft p-5">
                  <h3 className="mb-2 text-[16px] font-medium text-ink">🌍 全球观察</h3>
                  <p className="text-[13px] text-muted">
                    国际文化差异、海外生活经验、跨境电商实践、全球市场趋势
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-[28px] font-medium text-ink">内容质量标准</h2>

            <div className="space-y-4 text-[14px] leading-relaxed text-ink-soft">
              <div className="rounded-sm border-l-4 border-accent bg-accent/5 p-5">
                <h3 className="mb-2 text-[15px] font-medium text-ink">✅ 我们欢迎的内容</h3>
                <ul className="mt-3 space-y-2 text-[13px] text-muted">
                  <li>• 基于真实体验的评测与分享</li>
                  <li>• 有数据支撑的深度分析</li>
                  <li>• 实用的教程与操作指南</li>
                  <li>• 客观中立的产品对比</li>
                  <li>• 原创内容或经授权的翻译</li>
                  <li>• 排版清晰、配图合理</li>
                </ul>
              </div>

              <div className="rounded-sm border-l-4 border-red-500 bg-red-50 p-5">
                <h3 className="mb-2 text-[15px] font-medium text-ink">❌ 我们不收录的内容</h3>
                <ul className="mt-3 space-y-2 text-[13px] text-muted">
                  <li>• 纯营销软文或虚假宣传</li>
                  <li>• 未经验证的二手信息</li>
                  <li>• 低质量翻译或机翻内容</li>
                  <li>• 涉及政治敏感话题的内容</li>
                  <li>• 违法违规内容（黑产、诈骗等）</li>
                  <li>• 抄袭或侵权内容</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-[28px] font-medium text-ink">如何投稿</h2>

            <div className="space-y-6 text-[14px] leading-relaxed text-ink-soft">
              <p>
                如果你有符合我们收录标准的优质内容，欢迎通过邮件投稿。
              </p>

              <div className="rounded-sm border border-accent bg-accent/5 p-6">
                <div className="mb-4 flex items-center gap-3">
                  <svg className="h-5 w-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <div className="text-[15px] font-medium text-ink">投稿邮箱</div>
                    <a
                      href="mailto:flybors@proton.me"
                      className="text-[16px] font-medium text-accent hover:underline"
                    >
                      flybors@proton.me
                    </a>
                  </div>
                </div>
                <p className="text-[13px] text-muted">
                  请在邮件主题中注明「OUTSIDEWEB 投稿」，并在正文中简要说明文章主题。
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-[18px] font-medium text-ink">投稿格式要求</h3>
                <ul className="space-y-2 text-[13px] text-muted">
                  <li>• <strong>文件格式</strong>：Markdown（.md）或纯文本</li>
                  <li>• <strong>字数要求</strong>：不少于 800 字</li>
                  <li>• <strong>配图要求</strong>：如有配图，请提供高清图片（建议 1200px 宽度以上）</li>
                  <li>• <strong>作者信息</strong>：请注明笔名/昵称、简介（可选）、个人主页/社交账号（可选）</li>
                  <li>• <strong>版权说明</strong>：请确认内容为原创或已获授权，并注明出处</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 text-[18px] font-medium text-ink">审核流程</h3>
                <ol className="space-y-2 text-[13px] text-muted">
                  <li>1. 编辑团队会在 3-5 个工作日内审核投稿</li>
                  <li>2. 通过审核的文章会在 7 个工作日内发布</li>
                  <li>3. 如需修改，我们会通过邮件与你沟通</li>
                  <li>4. 未通过审核的稿件，我们会说明原因</li>
                </ol>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-[28px] font-medium text-ink">稿酬说明</h2>

            <div className="space-y-4 text-[14px] leading-relaxed text-ink-soft">
              <p>
                目前 OUTSIDEWEB 暂不提供稿酬，但我们会：
              </p>
              <ul className="space-y-2 text-[13px] text-muted">
                <li>• 在文章中署名并链接到你的个人主页/社交账号</li>
                <li>• 通过我们的社交媒体渠道推广你的文章</li>
                <li>• 为优质作者提供长期合作机会</li>
              </ul>
              <p className="text-[13px] text-faint">
                未来我们计划推出稿酬制度，优先考虑已有合作的作者。
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-[28px] font-medium text-ink">版权声明</h2>

            <div className="space-y-4 text-[14px] leading-relaxed text-ink-soft">
              <p>
                投稿即代表你同意将文章以 <strong>CC BY-NC 4.0</strong>（署名-非商业性使用 4.0 国际）协议授权给 OUTSIDEWEB 发布。
              </p>
              <p className="text-[13px] text-muted">
                这意味着：
              </p>
              <ul className="space-y-2 text-[13px] text-muted">
                <li>• 你保留文章的版权</li>
                <li>• 你可以在其他平台发布同一篇文章</li>
                <li>• 他人可以转载，但必须署名并注明出处</li>
                <li>• 他人不得将文章用于商业用途</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-[28px] font-medium text-ink">联系我们</h2>

            <div className="space-y-4 text-[14px] leading-relaxed text-ink-soft">
              <p>
                如果你对收录标准有疑问，或想与我们建立长期合作关系，欢迎通过以下方式联系：
              </p>
              <div className="rounded-sm border border-line bg-bg-soft p-5">
                <div className="space-y-3 text-[13px]">
                  <div className="flex items-center gap-3">
                    <span className="text-faint">邮箱：</span>
                    <a href="mailto:flybors@proton.me" className="font-medium text-accent hover:underline">
                      flybors@proton.me
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-faint">主页：</span>
                    <Link href="/" className="font-medium text-accent hover:underline">
                      outsideweb.net
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </Shell>
  );
}
