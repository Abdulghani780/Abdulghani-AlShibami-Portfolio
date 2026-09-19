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
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-2xl border border-white/[0.08] bg-[#070A0F] p-4 shadow-lg">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => onSelectCategory("all")}
            aria-pressed={activeCategory === "all"}
            className={cn(
              "text-xs px-3.5 py-1.5 rounded-lg border transition-all cursor-pointer uppercase tracking-wider",
              activeCategory === "all"
                ? "border-[#00FF9D] bg-[#00FF9D]/15 text-[#00FF9D] font-bold shadow-[0_0_12px_rgba(0,255,157,0.25)]"
                : "border-white/[0.08] bg-white/[0.03] text-white/70 hover:border-[#00FF9D]/40 hover:text-white"
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
                    ? "border-[#00FF9D] bg-[#00FF9D]/15 text-[#00FF9D] font-bold shadow-[0_0_12px_rgba(0,255,157,0.25)]"
                    : "border-white/[0.08] bg-white/[0.03] text-white/70 hover:border-[#00FF9D]/40 hover:text-white"
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
            className="w-full h-9 px-3.5 rounded-lg border border-white/[0.1] bg-black/40 text-white placeholder:text-white/40 text-xs focus:border-[#00FF9D] focus:ring-1 focus:ring-[#00FF9D]/30 focus:outline-none transition-all"
          />
        </div>
      </div>
    </div>
  );
};
