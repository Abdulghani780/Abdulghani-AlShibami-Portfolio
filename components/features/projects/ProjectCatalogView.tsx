"use client";

import React, { useState, useMemo } from "react";
import { Project, ProjectCategory, Locale } from "@/types/project";
import { ProjectFilters } from "./ProjectFilters";
import { ProjectCard } from "./ProjectCard";
import { CanonicalProjectsBento } from "@/components/canonical/CanonicalProjectsBento";
import { Button } from "@/components/ui/Button";

interface ProjectCatalogViewProps {
  initialProjects: Project[];
  categories: ProjectCategory[];
  locale: Locale;
}

export const ProjectCatalogView: React.FC<ProjectCatalogViewProps> = ({
  initialProjects,
  categories,
  locale,
}) => {
  const isRtl = locale === "ar";
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Map of categories by slug for fast lookup
  const categoryMap = useMemo(() => {
    const map = new Map<string, string>();
    categories.forEach((c) => map.set(c.slug, c.name[locale]));
    return map;
  }, [categories, locale]);

  // Filtered projects list
  const filteredProjects = useMemo(() => {
    return initialProjects.filter((project) => {
      // Category match
      const categoryMatch =
        activeCategory === "all" || project.categorySlug === activeCategory;

      // Query match (searches title, description, technologies)
      const query = searchQuery.trim().toLowerCase();
      if (!query) return categoryMatch;

      const titleMatch = project.title[locale].toLowerCase().includes(query);
      const descMatch = project.shortDescription[locale].toLowerCase().includes(query);
      const techMatch = project.technologies.some((t) =>
        t.name.toLowerCase().includes(query)
      );

      return categoryMatch && (titleMatch || descMatch || techMatch);
    });
  }, [initialProjects, activeCategory, searchQuery, locale]);

  const isBentoDefaultView = activeCategory === "all" && !searchQuery.trim();

  return (
    <div className="space-y-8">
      {/* Dynamic Filters Bar */}
      <ProjectFilters
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        locale={locale}
        totalCount={initialProjects.length}
      />

      {/* When on All Projects with no search query: Render Bento Showcase Grid with 3D renders */}
      {isBentoDefaultView ? (
        <CanonicalProjectsBento locale={locale} />
      ) : filteredProjects.length > 0 ? (
        /* Filtered Grid View */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              locale={locale}
              categoryName={categoryMap.get(project.categorySlug)}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur-md p-12 text-center space-y-4 shadow-[0_10px_30px_rgba(2,6,23,0.8)] font-mono">
          <div className="text-xs text-cyan-400 uppercase tracking-widest font-bold">
            {isRtl ? "// لا توجد أنظمة مطابقة" : "// 0 SYSTEMS MATCHED"}
          </div>
          <h4 className="font-serif text-2xl font-normal text-white">
            {isRtl ? "لم يتم العثور على أنظمة مطابقة" : "No Matching Systems Found"}
          </h4>
          <p className="text-slate-300 text-sm max-w-md mx-auto">
            {isRtl
              ? "جرّب تغيير التصنيف أو مسح عبارة البحث للعثور على الأنظمة المطلوبة."
              : "Try adjusting your category selection or clearing the search filter."}
          </p>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => {
              setActiveCategory("all");
              setSearchQuery("");
            }}
          >
            {isRtl ? "إعادة ضبط التصفية" : "Reset Active Filters"}
          </Button>
        </div>
      )}
    </div>
  );
};
