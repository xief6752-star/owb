import { notFound } from "next/navigation";
import { Metadata } from 'next';
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

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { name } = await params;
  const category = decodeURIComponent(name);
  const posts = getPostsByCategory(category);

  const descriptions: Record<string, string> = {
    '机场评测': '专业的机场速度测试与稳定性评测，涵盖 IEPL、IPLC 专线机场深度对比，帮你找到最适合的科学上网工具。',
    '使用教程': '详细的科学上网工具配置教程，包括 Clash、V2Ray、Shadowrocket 等客户端的完整使用指南。',
    '科普百科': '机场线路技术、网络协议、隐私安全等专业知识科普，帮你深入理解科学上网的底层原理。',
    '科技资讯': '全球科技前沿资讯，AI 工具评测，Web3 动态，SaaS 产品推荐，让你紧跟国际科技潮流。',
  };

  const description = descriptions[category] || `浏览「${category}」分类下的所有文章，共 ${posts.length} 篇优质内容。`;

  return {
    title: `${category}文章与指南`,
    description,
    keywords: [category, '机场推荐', '科技资讯', '数字生活'],
    openGraph: {
      title: `${category}文章与指南`,
      description,
      type: 'website',
      url: `https://outsideweb.net/category/${encodeURIComponent(category)}`,
    },
    alternates: {
      canonical: `https://outsideweb.net/category/${encodeURIComponent(category)}`,
    },
  };
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
