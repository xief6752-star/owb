import Link from "next/link";
import Image from "next/image";
import type { Post } from "@/lib/posts";

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/post/${post.slug}`} className="group block">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2px] border border-line bg-bg-soft">
        {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-[11px] text-faint">
            OUTSIDEWEB
          </div>
        )}
      </div>

      <h3 className="mt-3.5 line-clamp-2 text-[13.5px] font-medium leading-snug text-ink transition-colors group-hover:text-accent">
        {post.title}
      </h3>

      <div className="mt-2 flex items-center gap-2 text-[11px] font-light text-muted">
        <span>{post.formattedDate}</span>
        <span className="text-faint">/</span>
        <span>{post.category}</span>
      </div>
    </Link>
  );
}
