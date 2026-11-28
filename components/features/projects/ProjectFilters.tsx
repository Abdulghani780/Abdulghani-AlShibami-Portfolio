"use client";

import React from "react";
import { ProjectCategory, Locale } from "@/types/project";
import { cn } from "@/lib/utils";

interface ProjectFiltersProps {
  categories: ProjectCategory[];
  activeCategory: string;
  onSelectCategory: (slug: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  locale: Locale;
  totalCount: number;
}

export const ProjectFilters: React.FC<ProjectFiltersProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  locale,
  totalCount,
}) => {
  const isRtl = locale === "ar";

  return (
    <div className="space-y-4 font-mono">
      {/* Category Pills and Search Bar Grid */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-2xl border border-border/10 dark:border-border/10 bg-surface dark:bg-surfaceElevated p-4 shadow-sm">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => onSelectCategory("all")}
            className={cn(
              "px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all min-h-[44px]",
              activeCategory === "all"
                ? "bg-brand text-background shadow-md"
                : "bg-surfaceOverlay dark:bg-surfaceOverlay text-foreground dark:text-foreground hover:bg-surfaceOverlay/80 dark:hover:bg-surfaceOverlay/80 hover:border-brand/50 border border-border/10 dark:border-border/10"
            )}
          >
            {isRtl ? "الكل" : "ALL"}
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => onSelectCategory(cat.slug)}
              className={cn(
                "px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all min-h-[44px]",
                activeCategory === cat.slug
                  ? "bg-brand text-background shadow-md"
                  : "bg-surfaceOverlay dark:bg-surfaceOverlay text-foreground dark:text-foreground hover:bg-surfaceOverlay/80 dark:hover:bg-surfaceOverlay/80 hover:border-brand/50 border border-border/10 dark:border-border/10"
              )}
            >
              {cat.name[locale]}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <label htmlFor="project-search" className="sr-only">
            {isRtl ? "البحث في المشاريع" : "Search projects"}
          </label>
          <input
            id="project-search"
            type="search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={isRtl ? "ابحث في المشاريع..." : "Search projects..."}
            className="w-full h-11 px-4 rounded-lg bg-background dark:bg-background border border-border/10 dark:border-border/10 text-foreground dark:text-foreground placeholder:text-muted-foreground dark:placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
            dir={isRtl ? "rtl" : "ltr"}
          />
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs font-mono text-muted-foreground dark:text-muted-foreground">
        <span>
          {isRtl ? "عرض" : "Showing"} <span className="text-foreground dark:text-foreground font-bold">{totalCount}</span> {isRtl ? "مشروعاً" : "projects"}
        </span>
        {activeCategory !== "all" && (
          <span className="text-brand dark:text-brandLight">
            {categories.find((c) => c.slug === activeCategory)?.name[locale]}
          </span>
        )}
      </div>
    </div>
  );
};