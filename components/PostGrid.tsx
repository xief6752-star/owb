import PostCard from "./PostCard";
import type { Post } from "@/lib/posts";

interface PostGridProps {
  posts: Post[];
  title?: string;
  titleEn?: string;
}

export default function PostGrid({ posts, title = "最新更新", titleEn = "Latest" }: PostGridProps) {
  return (
    <section className="mx-auto max-w-[1440px] px-12 py-16">
      <div className="mb-9 flex items-baseline gap-3 border-b border-line pb-4">
        <h2 className="text-[15px] font-medium text-ink">{title}</h2>
        <span className="eyebrow text-[10px] text-faint">{titleEn}</span>
      </div>

      <div className="grid grid-cols-1 gap-x-7 gap-y-11 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
