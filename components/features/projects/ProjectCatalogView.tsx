"use client";

import React, { useState, useMemo } from "react";
import { Project, ProjectCategory, Locale } from "@/types/project";
import { ProjectFilters } from "./ProjectFilters";
import { ProjectCard } from "./ProjectCard";
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

  // Separate flagship hero project if on "all" view with no search query
  const { heroProject, gridProjects } = useMemo(() => {
    if (activeCategory === "all" && !searchQuery.trim()) {
      const hero = filteredProjects.find((p) => p.featured) || filteredProjects[0];
      const rest = filteredProjects.filter((p) => p.id !== hero?.id);
      return { heroProject: hero, gridProjects: rest };
    }
    return { heroProject: null, gridProjects: filteredProjects };
  }, [filteredProjects, activeCategory, searchQuery]);

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

      {/* Featured Spotlight Card */}
      {heroProject && (
        <div className="space-y-3">
          <div className="font-mono text-[10px] text-gold uppercase tracking-[0.2em] font-semibold">
            {"// "}{isRtl ? "النظام الرئيسي المعتمد" : "FEATURED FLAGSHIP ARCHITECTURE"}
          </div>
          <ProjectCard
            project={heroProject}
            locale={locale}
            categoryName={categoryMap.get(heroProject.categorySlug)}
            isFeaturedHero
          />
        </div>
      )}

      {/* Standard 3-Column Systems Grid */}
      {gridProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridProjects.map((project) => (
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
        <div className="border border-hairline bg-surface p-12 text-center space-y-4">
          <div className="font-mono text-xs text-gold uppercase tracking-widest">
            {"// 0 SYSTEMS MATCHED"}
          </div>
          <h4 className="font-serif text-2xl font-normal text-content-primary">
            {isRtl ? "لم يتم العثور على أنظمة مطابقة" : "No Matching Systems Found"}
          </h4>
          <p className="text-content-secondary text-sm max-w-md mx-auto">
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
