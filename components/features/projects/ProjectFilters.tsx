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
    <div className="space-y-4">
      {/* Category Pills and Search Bar Grid */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border border-hairline bg-surface p-4">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => onSelectCategory("all")}
            aria-pressed={activeCategory === "all"}
            className={cn(
              "font-mono text-xs px-3 py-1.5 border transition-all cursor-pointer uppercase tracking-wider",
              activeCategory === "all"
                ? "border-gold bg-gold/10 text-gold shadow-[0_0_12px_rgba(212,175,55,0.2)]"
                : "border-hairline bg-surface-elevated text-content-secondary hover:border-gold/40 hover:text-content-primary"
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
                  "font-mono text-xs px-3 py-1.5 border transition-all cursor-pointer uppercase tracking-wider",
                  isActive
                    ? "border-gold bg-gold/10 text-gold shadow-[0_0_12px_rgba(212,175,55,0.2)]"
                    : "border-hairline bg-surface-elevated text-content-secondary hover:border-gold/40 hover:text-content-primary"
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
            className="w-full h-9 px-3 border border-hairline bg-canvas text-content-primary placeholder:text-content-muted font-mono text-xs focus:border-gold focus:outline-none transition-colors"
          />
        </div>
      </div>
    </div>
  );
};
