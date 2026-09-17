export interface Post {
  slug: string;
  title: string;
  date: string;
  formattedDate: string;
  year: string;
  category: string;
  tags: string[];
  meta: string;
  image: string;
  excerpt: string;
  content: string;
  contentHtml?: string;
  author?: string;
  titleEn?: string;
}
