"use client";

import Link from "next/link";

const navLinks = [
  { label: "排行榜", href: "/rankings" },
  { label: "收录标准", href: "/standards" },
  { label: "分类列表", href: "/category" },
  { label: "关于", href: "/about" },
];

export default function Header() {
  return (
    <div className="fixed top-0 right-0 left-[76px] z-40">
      {/* Utility banner */}
      <div className="border-b border-line bg-bg-soft">
        <div className="flex items-center justify-between px-10 py-2">
          <p className="truncate pr-4 text-[11px] font-light text-muted">
            OUTSIDEWEB 每天精选墙外的优质资讯、跨境工具与数字生活方式
          </p>
          <div className="flex shrink-0 items-center gap-4 text-[11px]">
            <button
              onClick={() => {
                const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
                const key = isMac ? '⌘D' : 'Ctrl+D';
                alert(`请按 ${key} 收藏本站到浏览器书签`);
              }}
              className="flex items-center gap-1.5 rounded border border-line px-3 py-1 text-muted transition-colors hover:bg-white hover:text-ink hover:border-accent"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
              收藏本站
            </button>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className="border-b border-line bg-white/90 backdrop-blur-md">
        <div className="flex h-[58px] items-center justify-between px-10">
          <Link href="/" className="flex items-baseline gap-2.5">
            <span className="font-display text-[18px] font-medium tracking-[0.14em] text-ink">
              OUTSIDEWEB
            </span>
            <span className="text-[10px] font-light text-faint">墙外有网</span>
          </Link>

          <nav className="flex items-center gap-7 text-[12.5px] font-light text-ink-soft">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </div>
  );
}
