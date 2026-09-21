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
              每天精选墙外的优质资讯、跨境工具与数字生活方式，
              为你打开通往全球信息的窗口。
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <p className="eyebrow text-[10px] text-faint">Explore</p>
              <ul className="mt-4 space-y-2.5 text-[12.5px] font-light text-ink-soft">
                <li><Link href="/" className="hover:text-accent">首页</Link></li>
                <li><Link href="/category" className="hover:text-accent">分类</Link></li>
                <li><Link href="/about" className="hover:text-accent">关于</Link></li>
              </ul>
            </div>
            <div>
              <p className="eyebrow text-[10px] text-faint">Follow</p>
              <ul className="mt-4 space-y-2.5 text-[12.5px] font-light text-ink-soft">
                <li><a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-accent">X (Twitter)</a></li>
                <li><a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-accent">YouTube</a></li>
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
