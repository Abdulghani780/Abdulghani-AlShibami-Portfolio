import React from "react";
import Link from "next/link";
import { Project, Locale } from "@/types/project";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { TechnologyBadge } from "./TechnologyBadge";
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
    <Card
      cornerBrackets
      hoverEffect
      className={cn(
        "flex flex-col justify-between transition-all duration-300 group",
        isFeaturedHero
          ? "border-gold/40 bg-gold/5 p-6 sm:p-8"
          : "border-hairline bg-surface p-6",
        className
      )}
    >
      <div className="space-y-4">
        {/* Card Header: Category Kicker, Status, & Year */}
        <div className="flex items-center justify-between gap-2 border-b border-hairline/60 pb-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] text-gold uppercase tracking-wider font-semibold">
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
                "font-serif font-normal text-content-primary group-hover/title:text-gold transition-colors",
                isFeaturedHero ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
              )}
            >
              {title}
            </h3>
          </Link>
        </div>

        {/* Project Description */}
        <p className="text-content-secondary text-xs sm:text-sm leading-relaxed line-clamp-3">
          {desc}
        </p>

        {/* Technology Badges */}
        <div className="flex flex-wrap gap-1.5 pt-2">
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
      <div className="pt-6 mt-4 border-t border-hairline/50 flex flex-wrap items-center justify-between gap-3">
        <Link href={detailUrl} className="shrink-0">
          <Button variant="secondary" size="sm">
            <span>{isRtl ? "الدراسة المعمارية" : "Architectural Dossier"}</span>
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
    </Card>
  );
};
