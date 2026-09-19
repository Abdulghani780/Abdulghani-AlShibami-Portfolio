import React from "react";
import Link from "next/link";
import { Project, Locale } from "@/types/project";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
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

  return (
    <div
      className={cn(
        "rounded-xl border transition-all duration-300 group flex flex-col justify-between overflow-hidden",
        isFeaturedHero
          ? "border-gold/40 bg-gradient-to-b from-obsidian-card/90 via-obsidian-card/80 to-obsidian/95 p-6 sm:p-8 md:p-10 shadow-gold-ambient hover:border-gold"
          : "border-glass-border bg-obsidian-card/60 backdrop-blur-md p-6 hover:border-gold/40 hover:shadow-gold-ambient",
        className
      )}
    >
      <div className="space-y-5">
        {/* Card Header: Category Kicker, Status, & Year */}
        <div className="flex items-center justify-between gap-3 border-b border-glass-border/70 pb-3.5">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[11px] text-gold uppercase tracking-wider font-semibold">
              {"// "}{categoryName || project.categorySlug}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Badge
              variant={project.status === "Completed" ? "gold" : "outline"}
              dot
              dotColor={project.status === "Completed" ? "emerald" : "amber"}
            >
              {project.year}
            </Badge>
          </div>
        </div>

        {/* Project Title */}
        <div>
          <Link href={detailUrl} className="group/title block">
            <h3
              className={cn(
                "font-serif font-normal text-content-primary group-hover/title:text-gold transition-colors tracking-tight",
                isFeaturedHero ? "text-2xl sm:text-3xl lg:text-4xl" : "text-xl sm:text-2xl"
              )}
            >
              {title}
            </h3>
          </Link>
        </div>

        {/* Engineered Interface Preview Graphic */}
        <div className="pt-1">
          <ProjectPreviewGraphic slug={project.slug} locale={locale} />
        </div>

        {/* Project Description */}
        <p className="text-content-secondary text-sm sm:text-base leading-relaxed line-clamp-3">
          {desc}
        </p>

        {/* Technology Badges */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.slice(0, isFeaturedHero ? 6 : 4).map((tech) => (
            <TechnologyBadge key={tech.id} technology={tech} size="xs" />
          ))}
          {project.technologies.length > (isFeaturedHero ? 6 : 4) && (
            <span className="font-mono text-[10px] text-content-muted self-center px-1">
              +{project.technologies.length - (isFeaturedHero ? 6 : 4)}
            </span>
          )}
        </div>
      </div>

      {/* Card Actions Footer */}
      <div className="pt-6 mt-6 border-t border-glass-border/60 flex flex-wrap items-center justify-between gap-3">
        <Link href={detailUrl} className="shrink-0">
          <Button variant="secondary" size="sm">
            <span>{isRtl ? "الدراسة المعمارية" : "Case Study Dossier"}</span>
            <span className={cn("text-xs transition-transform group-hover:translate-x-1", isRtl && "rotate-180")}>
              →
            </span>
          </Button>
        </Link>

        {project.demoType !== "none" && (
          <Link href={`/${locale}/projects/${project.slug}/demo`} className="shrink-0">
            <Button variant="gold-outline" size="sm">
              <span className="h-1.5 w-1.5 rounded-full bg-status-emerald animate-pulse" />
              <span>
                {project.demoType === "real_live"
                  ? isRtl
                    ? "الموقع المباشر"
                    : "Live Demo"
                  : project.demoType === "repo"
                  ? isRtl
                    ? "المستودع"
                    : "Repository"
                  : isRtl
                  ? "تشغيل المحاكاة"
                  : "Launch Simulation"}
              </span>
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};
