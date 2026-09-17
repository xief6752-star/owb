"use client";

import Link from "next/link";
import { useState } from "react";
import type { FilterItem } from "@/lib/posts";

interface SidebarProps {
  categories: FilterItem[];
  tags: FilterItem[];
  years: FilterItem[];
}

type GroupKey = "category" | "tag" | "year";

export default function Sidebar({ categories, tags, years }: SidebarProps) {
  const [open, setOpen] = useState(false);
  const [group, setGroup] = useState<GroupKey>("category");

  const groups: {
    key: GroupKey;
    label: string;
    en: string;
    items: FilterItem[];
    hrefBase: string;
  }[] = [
    { key: "category", label: "分类", en: "Category", items: categories, hrefBase: "/category/" },
    { key: "tag", label: "标签", en: "Tags", items: tags, hrefBase: "/tag/" },
    { key: "year", label: "年份", en: "Year", items: years, hrefBase: "/year/" },
  ];

  const active = groups.find((g) => g.key === group)!;

  return (
    <div className="fixed left-0 top-0 z-50 flex h-screen" onMouseLeave={() => setOpen(false)}>
      {/* Narrow rail */}
      <aside
        className="flex h-full w-[76px] flex-col items-center justify-between bg-sidebar pb-8 pt-14 text-white"
        onMouseEnter={() => setOpen(true)}
      >
        <Link
          href="/"
          className="font-display whitespace-nowrap text-[9px] font-medium uppercase tracking-[0.1em] text-white/90"
        >
          Outsideweb
        </Link>
        <div className="flex flex-col items-center gap-3">
          <span className="h-8 w-px bg-white/25" />
          <span
            className="text-[13px] tracking-[0.35em] text-white"
            style={{ writingMode: "vertical-rl" }}
          >
            分类搜索
          </span>
          <span
            className={`text-[10px] text-white/70 transition-transform duration-300 ${
              open ? "-rotate-90" : "rotate-90"
            }`}
          >
            ▸
          </span>
          <span className="h-8 w-px bg-white/25" />
        </div>

        <span
          className="eyebrow text-[9px] tracking-[0.3em] text-white/50"
          style={{ writingMode: "vertical-rl" }}
        >
          SEARCH
        </span>
      </aside>

      {/* Flyout mega menu */}
      <div
        className={`h-full overflow-hidden border-r border-line bg-white shadow-[8px_0_40px_rgba(0,0,0,0.06)] transition-[width,opacity] duration-300 ease-out ${
          open ? "w-[520px] opacity-100" : "w-0 opacity-0"
        }`}
      >
        <div className="flex h-full w-[520px]">
          {/* Group tabs */}
          <div className="w-[180px] shrink-0 border-r border-line bg-bg-soft pt-10">
            <p className="eyebrow px-7 text-[10px] text-faint">Filter</p>
            <ul className="mt-5">
              {groups.map((g) => (
                <li key={g.key}>
                  <button
                    onMouseEnter={() => setGroup(g.key)}
                    className={`flex w-full items-center justify-between px-7 py-3.5 text-left transition-colors ${
                      group === g.key
                        ? "bg-white text-ink"
                        : "text-muted hover:text-ink"
                    }`}
                  >
                    <span className="flex flex-col">
                      <span className="text-[13px]">{g.label}</span>
                      <span className="eyebrow text-[9px] text-faint">{g.en}</span>
                    </span>
                    <span className="text-[11px] text-faint">›</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto pt-10">
            <p className="eyebrow px-8 text-[10px] text-faint">{active.en}</p>
            <ul className="mt-4 px-8 pb-10">
              <li>
                <Link
                  href="/"
                  className="flex items-center justify-between border-b border-line-soft py-3 text-[13px] text-ink transition-colors hover:text-accent"
                >
                  <span>全部</span>
                </Link>
              </li>
              {active.items.map((item) => (
                <li key={item.name}>
                  <Link
                    href={`${active.hrefBase}${encodeURIComponent(item.name)}`}
                    className="flex items-center justify-between border-b border-line-soft py-3 text-[13px] text-ink-soft transition-colors hover:text-accent"
                  >
                    <span>{item.name}</span>
                    <span className="text-[11px] text-faint">{item.count}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
