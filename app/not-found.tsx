import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-bg-soft px-6 text-center">
      <p className="font-display text-[8rem] font-semibold leading-none text-ink/10">404</p>
      <h1 className="mt-4 text-[1.4rem] font-semibold text-ink">页面走丢了</h1>
      <p className="mt-3 text-[13px] font-light text-muted">
        你要找的内容可能已被移动或不存在。
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 border-b border-ink pb-0.5 text-[13px] font-medium text-ink transition-colors hover:border-accent hover:text-accent"
      >
        ← 返回首页
      </Link>
    </div>
  );
}
