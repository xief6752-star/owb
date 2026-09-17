import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/posts");

export interface Post {
  slug: string;
  title: string;
  titleEn: string;
  date: string;
  formattedDate: string;
  year: string;
  category: string;
  tags: string[];
  author: string;
  image: string;
  excerpt: string;
  content: string;
  contentHtml?: string;
}

export interface FilterItem {
  name: string;
  count: number;
}

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const [y, m, d] = dateStr.split("-");
  if (!y || !m || !d) return dateStr;
  return `${y}.${m}.${d}`;
}

function parsePost(fileName: string): Omit<Post, "contentHtml"> {
  const slug = fileName.replace(/\.md$/, "");
  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const rawDate = data.date ? String(data.date) : "";

  return {
    slug,
    title: data.title || "",
    titleEn: data.titleEn || "",
    date: rawDate,
    formattedDate: formatDate(rawDate),
    year: rawDate.split("-")[0] || "2024",
    category: data.category || "资讯",
    tags: Array.isArray(data.tags) ? data.tags : [],
    author: data.author || "OutsideWeb",
    image: data.image || "",
    excerpt: data.excerpt || "",
    content,
  };
}

export function getSortedPostsData(): Post[] {
  if (!fs.existsSync(postsDirectory)) return [];
  const fileNames = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".md"));
  const posts = fileNames.map(parsePost) as Post[];
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(slug: string): Promise<Post | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const post = parsePost(`${slug}.md`) as Post;
  const processed = await remark()
    .use(remarkGfm)
    .use(html)
    .process(post.content);
  post.contentHtml = processed.toString();
  return post;
}

export function getAllCategories(): FilterItem[] {
  const posts = getSortedPostsData();
  const map = new Map<string, number>();
  posts.forEach((p) => map.set(p.category, (map.get(p.category) || 0) + 1));
  return Array.from(map.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

export function getAllTags(): FilterItem[] {
  const posts = getSortedPostsData();
  const map = new Map<string, number>();
  posts.forEach((p) => p.tags.forEach((t) => map.set(t, (map.get(t) || 0) + 1)));
  return Array.from(map.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

export function getAllYears(): FilterItem[] {
  const posts = getSortedPostsData();
  const map = new Map<string, number>();
  posts.forEach((p) => map.set(p.year, (map.get(p.year) || 0) + 1));
  return Array.from(map.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.name.localeCompare(a.name));
}

export function getPostsByCategory(category: string): Post[] {
  return getSortedPostsData().filter((p) => p.category === category);
}

export function getPostsByTag(tag: string): Post[] {
  return getSortedPostsData().filter((p) => p.tags.includes(tag));
}
