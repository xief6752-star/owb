import { notFound } from "next/navigation";
import { Metadata } from 'next';
import Shell from "@/components/Shell";
import PostGrid from "@/components/PostGrid";
import Footer from "@/components/Footer";
import { getAllTags, getPostsByTag } from "@/lib/posts";

interface PageProps {
  params: Promise<{ name: string }>;
}

export function generateStaticParams() {
  return getAllTags().map((t) => ({ name: encodeURIComponent(t.name) }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { name } = await params;
  const tag = decodeURIComponent(name);
  const posts = getPostsByTag(tag);

  return {
    title: `${tag}相关文章合集`,
    description: `浏览 OUTSIDEWEB 精选的「${tag}」相关文章，共 ${posts.length} 篇，覆盖机场评测、科技工具、AI 应用与数字生活等实用内容。`,
    openGraph: {
      title: `${tag}相关文章合集`,
      description: `浏览「${tag}」主题下的 ${posts.length} 篇精选文章，快速找到相关评测、教程和实用指南。`,
      type: 'website',
      url: `https://outsideweb.net/tag/${encodeURIComponent(tag)}`,
    },
    alternates: {
      canonical: `https://outsideweb.net/tag/${encodeURIComponent(tag)}`,
    },
  };
}

export default async function TagPage({ params }: PageProps) {
  const { name } = await params;
  const tag = decodeURIComponent(name);
  const posts = getPostsByTag(tag);
  if (posts.length === 0) notFound();

  return (
    <Shell>
      <div className="border-b border-line bg-bg-soft px-12 py-16 text-center">
        <p className="eyebrow text-[11px] text-accent">Tag</p>
        <h1 className="mt-4 text-[2.2rem] font-semibold tracking-tight text-ink">
          #{tag}
        </h1>
        <p className="mt-3 text-[13px] font-light text-muted">
          共 {posts.length} 篇文章
        </p>
      </div>
      <PostGrid posts={posts} title={`#${tag}`} titleEn="Tag" />
      <Footer />
    </Shell>
  );
}
