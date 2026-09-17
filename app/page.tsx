import Shell from "@/components/Shell";
import Hero from "@/components/Hero";
import PostGrid from "@/components/PostGrid";
import Footer from "@/components/Footer";
import { getSortedPostsData } from "@/lib/posts";

export default function Home() {
  const posts = getSortedPostsData();
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <Shell>
      {featured && <Hero post={featured} />}
      <PostGrid posts={rest} />
      <Footer />
    </Shell>
  );
}
