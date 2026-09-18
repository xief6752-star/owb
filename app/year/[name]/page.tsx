import { notFound } from "next/navigation";
import { Metadata } from 'next';
import Shell from "@/components/Shell";
import PostGrid from "@/components/PostGrid";
import Footer from "@/components/Footer";
import { getAllYears, getSortedPostsData } from "@/lib/posts";

interface PageProps {
  params: Promise<{ name: string }>;
}

export function generateStaticParams() {
  return getAllYears().map((y) => ({ name: y.name }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { name } = await params;
  const year = decodeURIComponent(name);
  const posts = getSortedPostsData().filter((p) => p.year === year);

  return {
    title: `${year} 年文章存档 — OUTSIDEWEB 墙外有网`,
    description: `浏览 ${year} 年发布的所有文章，共 ${posts.length} 篇。包含机场评测、科技资讯、AI 应用、使用教程等精选内容。`,
    openGraph: {
      title: `${year} 年文章存档 — OUTSIDEWEB`,
      description: `${year} 年发布的 ${posts.length} 篇精选文章合集。`,
      type: 'website',
      url: `https://outsideweb.net/year/${year}`,
    },
    alternates: {
      canonical: `https://outsideweb.net/year/${year}`,
    },
  };
}

export default async function YearPage({ params }: PageProps) {
  const { name } = await params;
  const year = decodeURIComponent(name);
  const posts = getSortedPostsData().filter((p) => p.year === year);
  if (posts.length === 0) notFound();

  return (
    <Shell>
      <div className="border-b border-line bg-bg-soft px-12 py-16 text-center">
        <p className="eyebrow text-[11px] text-accent">Year</p>
        <h1 className="mt-4 text-[2.2rem] font-semibold tracking-tight text-ink">
          {year}
        </h1>
        <p className="mt-3 text-[13px] font-light text-muted">
          共 {posts.length} 篇文章
        </p>
      </div>
      <PostGrid posts={posts} title={`${year} 年`} titleEn="Archive" />
      <Footer />
    </Shell>
  );
}
