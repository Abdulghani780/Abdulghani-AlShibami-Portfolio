"use client";

import React, { useState, useMemo } from "react";
import { Project, ProjectCategory, Locale } from "@/types/project";
import { ProjectFilters } from "./ProjectFilters";
import { ProjectCard } from "./ProjectCard";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

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

  // Filter projects
  const filteredProjects = useMemo(() => {
    return initialProjects.filter((project) => {
      const matchesCategory = activeCategory === "all" || project.categorySlug === activeCategory;
      const matchesSearch =
        searchQuery === "" ||
        project.title[locale].toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.shortDescription[locale].toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((t) => t.name.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [initialProjects, activeCategory, searchQuery, locale]);

  return (
    <div className="space-y-8">
      <ProjectFilters
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        locale={locale}
        totalCount={filteredProjects.length}
      />

      {filteredProjects.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-muted-foreground dark:text-muted-foreground">
            {isRtl ? "لا توجد مشاريع مطابقة للبحث" : "No projects match your search"}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <ScrollReveal key={project.slug} delay={idx * 50} isRtl={isRtl} direction="up" className="h-full">
              <ProjectCard project={project} locale={locale} categoryName={categoryMap.get(project.categorySlug)} />
            </ScrollReveal>
          ))}
        </div>
      )}
    </div>
  );
};