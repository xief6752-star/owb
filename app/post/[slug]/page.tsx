import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Shell from "@/components/Shell";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import { getPostData, getSortedPostsData } from "@/lib/posts";
import { Metadata } from "next";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getSortedPostsData().map((post) => ({ slug: post.slug }));
}

function absoluteUrl(value: string): string {
  return value.startsWith("http") ? value : `https://outsideweb.net${value}`;
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostData(slug);

  if (!post) {
    return {
      title: '文章未找到',
    };
  }

  return {
    title: post.title,
    description: post.excerpt || post.content.replace(/\s+/g, ' ').trim().substring(0, 160),
    keywords: [post.category, ...post.tags],
    authors: [{ name: post.author || 'OutsideWeb' }],
    openGraph: {
      title: post.title,
      description: post.excerpt || post.content.replace(/\s+/g, ' ').trim().substring(0, 160),
      type: 'article',
      publishedTime: post.date,
      authors: [post.author || 'OutsideWeb'],
      tags: post.tags,
      images: post.image ? [
        {
          url: absoluteUrl(post.image),
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ] : [{ url: '/images/yuntu-logo.png', width: 1200, height: 630, alt: post.title }],
      url: `https://outsideweb.net/post/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt || post.content.replace(/\s+/g, ' ').trim().substring(0, 160),
      images: post.image ? [absoluteUrl(post.image)] : ['/images/yuntu-logo.png'],
    },
    alternates: {
      canonical: `https://outsideweb.net/post/${slug}`,
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostData(slug);
  if (!post) notFound();

  const related = getSortedPostsData()
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 4);

  // JSON-LD 结构化数据
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: absoluteUrl(post.image || '/images/yuntu-logo.png'),
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author || 'OutsideWeb Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'OUTSIDEWEB',
      logo: {
        '@type': 'ImageObject',
        url: 'https://outsideweb.net/images/yuntu-logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://outsideweb.net/post/${slug}`,
    },
    keywords: post.tags.join(', '),
    articleSection: post.category,
  };

  return (
    <Shell>
      {/* JSON-LD 结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        {post.image && (
          <div className="absolute inset-0">
            <Image
              src={post.image}
              alt=""
              fill
              priority
              sizes="100vw"
              className="scale-110 object-cover opacity-40 blur-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/75 to-white" />
          </div>
        )}

        <div className="relative mx-auto max-w-[860px] px-12 py-24 text-center">
          <Link
            href={`/category/${encodeURIComponent(post.category)}`}
            className="eyebrow inline-block rounded-sm bg-sidebar px-3 py-1 text-[10px] text-white"
          >
            {post.category}
          </Link>
          <h1 className="mt-7 text-[2.7rem] font-semibold leading-[1.16] tracking-tight text-ink">
            {post.title}
          </h1>
          {post.titleEn && (
            <p className="font-display mt-4 text-[14px] uppercase tracking-[0.2em] text-faint">
              {post.titleEn}
            </p>
          )}
          <div className="mt-6 flex items-center justify-center gap-3 text-[12px] font-light text-muted">
            <span>{post.formattedDate}</span>
            {post.tags.length > 0 && (
              <>
                <span className="text-faint">/</span>
                <span>{post.tags.join(" · ")}</span>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Excerpt */}
      {post.excerpt && (
        <div className="border-b border-line bg-bg-soft">
          <div className="mx-auto max-w-[720px] px-12 py-12">
            <p className="text-center text-[15px] font-light leading-loose text-ink-soft">
              {post.excerpt}
            </p>
          </div>
        </div>
      )}

      {/* Body */}
      <div className="mx-auto max-w-[1080px] px-12 py-16">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-[160px_1fr]">
          <aside className="md:sticky md:top-28 md:self-start">
            <p className="eyebrow text-[10px] text-faint">Article</p>
            <p className="mt-2 text-[15px] font-medium text-ink">正文</p>
          </aside>

          <article
            className="prose-body max-w-none text-[15px] leading-[1.9] text-ink-soft
              [&_h2]:mt-11 [&_h2]:mb-4 [&_h2]:text-[1.35rem] [&_h2]:font-semibold [&_h2]:text-ink
              [&_h3]:mt-7 [&_h3]:mb-3 [&_h3]:text-[1.05rem] [&_h3]:font-medium [&_h3]:text-ink
              [&_p]:mb-5
              [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-5
              [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-5
              [&_li]:mb-2
              [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2
              [&_pre]:mb-5 [&_pre]:overflow-x-auto [&_pre]:rounded [&_pre]:bg-bg-soft [&_pre]:p-4 [&_pre]:text-[13px]
              [&_code]:rounded [&_code]:bg-bg-soft [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-[13px]
              [&_blockquote]:border-l-2 [&_blockquote]:border-accent [&_blockquote]:pl-4 [&_blockquote]:text-muted"
            dangerouslySetInnerHTML={{ __html: post.contentHtml || "" }}
          />
        </div>

        <div className="mt-16 flex items-center justify-between border-t border-line pt-6 text-[13px]">
          <Link
            href={`/category/${encodeURIComponent(post.category)}`}
            className="font-light text-muted hover:text-accent"
          >
            更多「{post.category}」
          </Link>
          <Link href="/" className="font-medium text-accent hover:underline">
            ← 返回首页
          </Link>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="border-t border-line bg-bg-soft">
          <div className="mx-auto max-w-[1440px] px-12 py-16">
            <div className="mb-9 flex items-baseline gap-3 border-b border-line pb-4">
              <h2 className="text-[15px] font-medium text-ink">相关文章</h2>
              <span className="eyebrow text-[10px] text-faint">Related</span>
            </div>
            <div className="grid grid-cols-1 gap-x-7 gap-y-11 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </Shell>
  );
}
