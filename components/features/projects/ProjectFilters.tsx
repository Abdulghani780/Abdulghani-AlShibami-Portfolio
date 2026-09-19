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
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-xl border border-glass-border bg-obsidian-card/70 backdrop-blur-md p-4 shadow-glass">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => onSelectCategory("all")}
            aria-pressed={activeCategory === "all"}
            className={cn(
              "font-mono text-xs px-3.5 py-1.5 rounded-lg border transition-all cursor-pointer uppercase tracking-wider",
              activeCategory === "all"
                ? "border-gold bg-gold/15 text-gold font-semibold shadow-gold-ambient"
                : "border-glass-border bg-glass-subtle text-content-secondary hover:border-gold/40 hover:text-content-primary"
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
                  "font-mono text-xs px-3.5 py-1.5 rounded-lg border transition-all cursor-pointer uppercase tracking-wider",
                  isActive
                    ? "border-gold bg-gold/15 text-gold font-semibold shadow-gold-ambient"
                    : "border-glass-border bg-glass-subtle text-content-secondary hover:border-gold/40 hover:text-content-primary"
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
            className="w-full h-9 px-3.5 rounded-lg border border-glass-border bg-glass-subtle text-content-primary placeholder:text-content-muted font-mono text-xs focus:border-gold/60 focus:ring-1 focus:ring-gold/30 focus:outline-none transition-all"
          />
        </div>
      </div>
    </div>
  );
};
