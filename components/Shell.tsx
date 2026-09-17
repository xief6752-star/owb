import Sidebar from "./Sidebar";
import Header from "./Header";
import {
  getAllCategories,
  getAllTags,
  getAllYears,
} from "@/lib/posts";

export default function Shell({ children }: { children: React.ReactNode }) {
  const categories = getAllCategories();
  const tags = getAllTags();
  const years = getAllYears();

  return (
    <div className="min-h-screen bg-white">
      <Sidebar categories={categories} tags={tags} years={years} />
      <Header />
      <main className="ml-[76px] pt-[92px]">{children}</main>
    </div>
  );
}
