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
  return getAllTags().map((t) => ({ name: t.name }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { name } = await params;
  const tag = decodeURIComponent(name);
  const posts = getPostsByTag(tag);

  const title = `${tag}相关文章合集 — 评测、教程与选购指南`;
  const description = `汇总 OUTSIDEWEB 关于「${tag}」的 ${posts.length} 篇精选文章，涵盖机场评测、科学上网工具、AI 应用、远程办公与数字游民生活等主题，帮你快速找到相关评测、使用教程与选购建议。`;

  return {
    title,
    description,
    keywords: [tag, '机场推荐', '机场评测', '科技资讯', '数字生活'],
    openGraph: {
      title,
      description,
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
