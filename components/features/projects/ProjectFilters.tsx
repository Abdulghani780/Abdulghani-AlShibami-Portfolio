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
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#121214] p-4 shadow-sm dark:shadow-xl">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => onSelectCategory("all")}
            aria-pressed={activeCategory === "all"}
            className={cn(
              "text-xs px-3.5 py-1.5 rounded-lg border transition-all cursor-pointer uppercase tracking-wider",
              activeCategory === "all"
                ? "border-gold-primary bg-gold-primary/15 text-gold-dark dark:text-gold-light font-bold shadow-sm"
                : "border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-zinc-700 dark:text-zinc-300 hover:border-gold-primary/50 hover:text-zinc-900 dark:hover:text-white"
            )}
          >
            {isRtl ? "كافة الأنظمة" : "All Systems"}{" "}
            <span className="text-[10px] opacity-75">({totalCount})</span>
          </button>

          {categories.map((category) => {
            const isActive = activeCategory === category.slug;
            return (
              <button
                key={category.id}
                onClick={() => onSelectCategory(category.slug)}
                aria-pressed={isActive}
                className={cn(
                  "text-xs px-3.5 py-1.5 rounded-lg border transition-all cursor-pointer uppercase tracking-wider",
                  isActive
                    ? "border-gold-primary bg-gold-primary/15 text-gold-dark dark:text-gold-light font-bold shadow-sm"
                    : "border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-zinc-700 dark:text-zinc-300 hover:border-gold-primary/50 hover:text-zinc-900 dark:hover:text-white"
                )}
              >
                {category.name[locale]}
              </button>
            );
          })}
        </div>

        {/* Search Input Box */}
        <div className="w-full md:w-64">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={isRtl ? "بحث في الأنظمة..." : "Filter systems..."}
            aria-label={isRtl ? "بحث في الأنظمة" : "Filter systems"}
            className="w-full h-9 px-3.5 rounded-lg border border-black/10 dark:border-white/10 bg-black/5 dark:bg-black/40 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 text-xs focus:border-gold-primary focus:ring-1 focus:ring-gold-primary/30 focus:outline-none transition-all"
          />
        </div>
      </div>
    </div>
  );
};
