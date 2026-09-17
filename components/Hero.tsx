import Link from "next/link";
import Image from "next/image";
import type { Post } from "@/lib/posts";

export default function Hero({ post }: { post: Post }) {
  return (
    <section className="relative overflow-hidden bg-bg-soft">
      {/* Oversized ghost type in the background */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none text-center">
        <span className="font-display block whitespace-nowrap text-[13vw] font-semibold uppercase leading-none tracking-tight text-ink/[0.045]">
          Site of the Day
        </span>
      </div>

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-14 px-12 py-20 lg:grid-cols-[1fr_1.05fr]">
        {/* Text */}
        <div>
          <p className="eyebrow text-[11px] text-accent">Site of the Day</p>
          <p className="mt-4 text-[12px] font-light tracking-widest text-muted">
            {post.formattedDate}
          </p>
          <h1 className="mt-4 text-[2.6rem] font-semibold leading-[1.18] tracking-tight text-ink">
            {post.title}
          </h1>
          {post.titleEn && (
            <p className="font-display mt-3 text-[15px] uppercase tracking-[0.18em] text-faint">
              {post.titleEn}
            </p>
          )}
          <p className="mt-6 max-w-[440px] text-[13.5px] font-light leading-loose text-ink-soft">
            {post.excerpt}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            {post.tags.slice(0, 5).map((tag) => (
              <Link
                key={tag}
                href={`/tag/${encodeURIComponent(tag)}`}
                className="rounded-full border border-line bg-white px-3.5 py-1.5 text-[11.5px] font-light text-ink-soft transition-colors hover:border-accent hover:text-accent"
              >
                {tag}
              </Link>
            ))}
          </div>

          <Link
            href={`/post/${post.slug}`}
            className="group mt-9 inline-flex items-center gap-2 text-[13px] font-medium text-ink"
          >
            <span className="border-b border-ink pb-0.5 transition-colors group-hover:border-accent group-hover:text-accent">
              阅读全文
            </span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>

        {/* Image */}
        <Link href={`/post/${post.slug}`} className="group block">
          <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[3px] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.35)]">
            {post.image ? (
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 640px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-line text-faint">
                OUTSIDEWEB
              </div>
            )}
          </div>
        </Link>
      </div>
    </section>
  );
}
