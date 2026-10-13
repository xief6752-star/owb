import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg-soft">
      <div className="mx-auto max-w-[1440px] px-12 py-14">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <p className="font-display text-[17px] font-medium tracking-[0.14em] text-ink">
              OUTSIDEWEB
            </p>
            <p className="mt-3 text-[12.5px] font-light leading-loose text-muted">
              打破信息壁垒，连接全球视野。我们专注于跨境工具评测、
              科技前沿追踪与数字生活方式分享，帮助您建立与世界的深度连接。
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <p className="eyebrow text-[10px] text-faint">Explore</p>
              <ul className="mt-4 space-y-2.5 text-[12.5px] font-light text-ink-soft">
                <li><Link href="/" className="hover:text-accent">首页</Link></li>
                <li><Link href="/rankings" className="hover:text-accent">排行榜</Link></li>
                <li><Link href="/category" className="hover:text-accent">分类浏览</Link></li>
                <li><Link href="/standards" className="hover:text-accent">收录标准</Link></li>
                <li><Link href="/about" className="hover:text-accent">关于我们</Link></li>
              </ul>
            </div>
            <div>
              <p className="eyebrow text-[10px] text-faint">Follow</p>
              <ul className="mt-4 space-y-2.5 text-[12.5px] font-light text-ink-soft">
                <li><a href="https://x.com/outsideweb" target="_blank" rel="noreferrer" className="hover:text-accent">X (Twitter)</a></li>
                <li><a href="https://github.com/outsideweb" target="_blank" rel="noreferrer" className="hover:text-accent">GitHub</a></li>
                <li><a href="https://t.me/outsideweb" target="_blank" rel="noreferrer" className="hover:text-accent">Telegram</a></li>
              </ul>
            </div>
            <div>
              <p className="eyebrow text-[10px] text-faint">Resources</p>
              <ul className="mt-4 space-y-2.5 text-[12.5px] font-light text-ink-soft">
                <li><Link href="/tag/机场评测" className="hover:text-accent">机场评测</Link></li>
                <li><Link href="/tag/科技资讯" className="hover:text-accent">科技资讯</Link></li>
                <li><Link href="/tag/远程工作" className="hover:text-accent">远程工作</Link></li>
                <li><Link href="/tag/隐私安全" className="hover:text-accent">隐私安全</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-line pt-6 text-[11px] font-light text-faint">
          <span>© {new Date().getFullYear()} OUTSIDEWEB · 墙外有网</span>
          <span>Powered by GitHub &amp; Cloudflare Pages</span>
        </div>
      </div>
    </footer>
  );
}
