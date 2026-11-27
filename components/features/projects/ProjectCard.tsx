import React from "react";
import Link from "next/link";
import { Project, Locale } from "@/types/project";
import { TechnologyBadge } from "./TechnologyBadge";
import { ProjectPreviewGraphic } from "./ProjectPreviewGraphic";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  locale: Locale;
  categoryName?: string;
  isFeaturedHero?: boolean;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  locale,
  categoryName,
  isFeaturedHero = false,
  className,
}) => {
  const isRtl = locale === "ar";
  const title = project.title[locale];
  const desc = project.shortDescription[locale];
  const detailUrl = `/${locale}/projects/${project.slug}`;
  const demoUrl = `/${locale}/projects/${project.slug}/demo`;

  return (
    <div
      className={cn(
        "rounded-2xl border transition-all duration-300 group flex flex-col justify-between overflow-hidden relative",
        isFeaturedHero
          ? "border-border/15 dark:border-border/20 bg-surface dark:bg-surfaceElevated hover:border-brand/50 shadow-sm hover:shadow-xl"
          : "border-border dark:border-border bg-surface dark:bg-surfaceElevated hover:border-brand/50 shadow-sm hover:shadow-lg",
        className
      )}
    >
      {/* Preview Graphic / Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-surfaceOverlay dark:bg-surfaceOverlay">
        <ProjectPreviewGraphic slug={project.slug} locale={locale} />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent dark:from-background/80 dark:via-transparent" />
        {/* Category Badge */}
        <div className="absolute top-3 start-3 end-3">
          {categoryName && (
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-background/90 dark:bg-background/90 backdrop-blur-sm border border-border/20 dark:border-border/20 text-xs font-mono font-medium text-muted-foreground dark:text-muted-foreground">
              {categoryName}
            </span>
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className={cn("p-5 sm:p-6 flex flex-col flex-1", isRtl ? "font-arabic" : "")}>
        <h3 className={cn("font-bold text-lg sm:text-xl text-foreground dark:text-foreground leading-snug group-hover:text-brand dark:group-hover:text-brandLight transition-colors mb-2 line-clamp-2", isRtl ? "font-arabic-display" : "font-sans")}>
          {title}
        </h3>
        <p className={cn("text-sm text-muted-foreground dark:text-muted-foreground leading-relaxed mb-4 flex-1", isRtl ? "text-arabic-body" : "")}>
          {desc}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4" role="list" aria-label={isRtl ? "تقنيات المشروع" : "Project technologies"}>
          {project.technologies.slice(0, 6).map((tech, idx) => (
            <TechnologyBadge key={idx} technology={tech} size="xs" />
          ))}
          {project.technologies.length > 6 && (
            <span className={cn("inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium text-muted-foreground dark:text-muted-foreground bg-surface dark:bg-surfaceElevated border border-border/10 dark:border-border/10", isRtl ? "font-arabic" : "font-mono")}>
              +{project.technologies.length - 6}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className={cn("flex items-center justify-between pt-3 border-t border-border/10 dark:border-border/10", isRtl ? "font-arabic" : "font-mono")}>
          <Link
            href={detailUrl}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand dark:text-brandLight uppercase tracking-wider transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
          >
            {isRtl ? "عرض التفاصيل" : "VIEW CASE STUDY"}
            <span>→</span>
          </Link>

          <Link
            href={demoUrl}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-brand/30 dark:border-brandLight/30 bg-brand/10 dark:bg-brandLight/20 text-brand dark:text-brandLight text-xs font-bold uppercase tracking-wider hover:bg-brand hover:text-background dark:hover:bg-brandLight dark:hover:text-background transition-all"
          >
            {isRtl ? "تشغيل" : "DEMO"}
          </Link>
        </div>
      </div>
    </div>
  );
};