import { MetadataRoute } from 'next';
import { getSortedPostsData, getAllCategories } from '@/lib/posts';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getSortedPostsData();
  const categories = getAllCategories();

  const baseUrl = 'https://outsideweb.net';
  const siteLastModified = new Date('2026-09-21');

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: siteLastModified,
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/rankings`,
      lastModified: siteLastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/standards`,
      lastModified: siteLastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/category`,
      lastModified: siteLastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: siteLastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ];

  // Post pages
  const postPages = posts.map(post => ({
    url: `${baseUrl}/post/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Category pages
  const categoryPages = categories.map(cat => ({
    url: `${baseUrl}/category/${encodeURIComponent(cat.name)}`,
    lastModified: siteLastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...postPages, ...categoryPages];
}
