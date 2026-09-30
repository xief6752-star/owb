import { getSortedPostsData, getAllCategories } from '@/lib/posts';
import Shell from '@/components/Shell';
import Footer from '@/components/Footer';
import PostCard from '@/components/PostCard';
import Link from 'next/link';
import { Metadata } from 'next';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "文章分类与主题导航 — 机场评测、科技与数字生活",
  description: "浏览 OUTSIDEWEB 的所有文章分类：机场评测、科技前沿、工具评测、AI 应用、远程工作、数字游民、创业观察、隐私安全、Web3 等，按主题快速找到你需要的深度内容。",
  openGraph: {
    title: "文章分类与主题导航 — 机场评测、科技与数字生活",
    description: "浏览 OUTSIDEWEB 所有文章分类：机场评测、科技前沿、工具评测、AI 应用、数字游民等，按主题快速定位深度内容。",
    type: 'website',
    url: 'https://outsideweb.net/category',
  },
  alternates: {
    canonical: 'https://outsideweb.net/category',
  },
};

export default function CategoryListPage() {
  const posts = getSortedPostsData();
  const categories = getAllCategories();

  // Group posts by category
  const postsByCategory = categories.map(cat => ({
    category: cat.name,
    count: cat.count,
    posts: posts.filter(p => p.category === cat.name).slice(0, 4) // Show first 4 posts
  }));

  return (
    <Shell>
      <div className="container mx-auto max-w-[1400px] px-10 py-16">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="font-display mb-4 text-[42px] font-medium tracking-tight text-ink">
            分类列表
          </h1>
          <p className="text-[15px] leading-relaxed text-muted">
            按主题浏览所有文章
          </p>
        </div>

        {/* Category sections */}
        <div className="space-y-16">
          {postsByCategory.map(({ category, count, posts: categoryPosts }) => (
            <section key={category} className="space-y-6">
              {/* Category header */}
              <div className="flex items-baseline justify-between border-b border-line pb-3">
                <h2 className="text-[28px] font-medium text-ink">
                  {category}
                </h2>
                <Link
                  href={`/category/${encodeURIComponent(category)}`}
                  className="text-[13px] text-accent hover:underline"
                >
                  查看全部 {count} 篇 →
                </Link>
              </div>

              {/* Posts grid */}
              {categoryPosts.length > 0 ? (
                <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
                  {categoryPosts.map(post => (
                    <PostCard key={post.slug} post={post} />
                  ))}
                </div>
              ) : (
                <p className="text-[14px] text-faint">暂无文章</p>
              )}
            </section>
          ))}
        </div>

        {/* All categories overview */}
        <div className="mt-16 rounded-sm border border-line bg-bg-soft p-8">
          <h3 className="mb-6 text-[20px] font-medium text-ink">所有分类</h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {categories.map(cat => (
              <Link
                key={cat.name}
                href={`/category/${encodeURIComponent(cat.name)}`}
                className="group flex items-baseline justify-between rounded-sm border border-line bg-white px-4 py-3 transition-colors hover:border-accent hover:bg-accent/5"
              >
                <span className="text-[14px] text-ink group-hover:text-accent">
                  {cat.name}
                </span>
                <span className="text-[12px] text-faint">
                  {cat.count}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </Shell>
  );
}
