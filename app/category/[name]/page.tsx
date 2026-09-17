import { notFound } from "next/navigation";
import Shell from "@/components/Shell";
import PostGrid from "@/components/PostGrid";
import Footer from "@/components/Footer";
import { getAllCategories, getPostsByCategory } from "@/lib/posts";

interface PageProps {
  params: Promise<{ name: string }>;
}

export function generateStaticParams() {
  return getAllCategories().map((c) => ({ name: encodeURIComponent(c.name) }));
}

export default async function CategoryPage({ params }: PageProps) {
  const { name } = await params;
  const category = decodeURIComponent(name);
  const posts = getPostsByCategory(category);
  if (posts.length === 0) notFound();

  return (
    <Shell>
      <div className="border-b border-line bg-bg-soft px-12 py-16 text-center">
        <p className="eyebrow text-[11px] text-accent">Category</p>
        <h1 className="mt-4 text-[2.2rem] font-semibold tracking-tight text-ink">
          {category}
        </h1>
        <p className="mt-3 text-[13px] font-light text-muted">
          共 {posts.length} 篇文章
        </p>
      </div>
      <PostGrid posts={posts} title={category} titleEn="Category" />
      <Footer />
    </Shell>
  );
}
