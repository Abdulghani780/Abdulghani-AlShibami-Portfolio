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
          ? "border-gold-primary/30 bg-white dark:bg-[#141417] p-6 sm:p-8 md:p-10 shadow-md dark:shadow-2xl hover:border-gold-primary"
          : "border-black/10 dark:border-white/10 bg-white dark:bg-[#121214] p-5 sm:p-6 shadow-sm dark:shadow-xl hover:border-gold-primary/50 hover:shadow-md",
        className
      )}
    >
      <div className="space-y-4">
        {/* Card Header: Category Kicker, Status, & Year */}
        <div className="flex items-center justify-between gap-3 border-b border-black/10 dark:border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[11px] text-gold-dark dark:text-gold-light uppercase tracking-wider font-semibold">
              {"// "}{categoryName || project.categorySlug}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 motion-safe:animate-ping" />
              <span>LIVE INSTANCE</span>
            </span>
            <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
              {project.year}
            </span>
          </div>
        </div>

        {/* Project Title */}
        <div>
          <Link href={detailUrl} className="group/title block">
            <h3
              className={cn(
                "font-serif font-normal text-zinc-900 dark:text-white group-hover/title:text-gold-dark dark:group-hover/title:text-gold-light transition-colors tracking-tight",
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
        <p className="text-zinc-600 dark:text-zinc-300 text-xs sm:text-sm leading-relaxed line-clamp-3 font-sans">
          {desc}
        </p>

        {/* Technology Badges */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.slice(0, isFeaturedHero ? 6 : 4).map((tech) => (
            <TechnologyBadge key={tech.id} technology={tech} size="xs" />
          ))}
          {project.technologies.length > (isFeaturedHero ? 6 : 4) && (
            <span className="font-mono text-[10px] text-zinc-400 self-center px-1">
              +{project.technologies.length - (isFeaturedHero ? 6 : 4)}
            </span>
          )}
        </div>
      </div>

      {/* Card Actions Footer */}
      <div className="pt-5 mt-5 border-t border-black/10 dark:border-white/10 flex flex-wrap items-center justify-between gap-3">
        <Link
          href={detailUrl}
          className="text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white px-3 py-1.5 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-gold-primary/40 transition-all flex items-center gap-1.5"
        >
          <span>{isRtl ? "الدراسة المعمارية" : "Case Study"}</span>
          <span className={cn("text-xs transition-transform group-hover:translate-x-1", isRtl && "rotate-180")}>
            →
          </span>
        </Link>

        {project.demoType !== "none" && (
          <Link
            href={demoUrl}
            className="text-xs font-mono font-bold text-gold-dark dark:text-gold-light hover:bg-gold-primary hover:text-black px-3.5 py-1.5 rounded-lg bg-gold-primary/10 border border-gold-primary/30 transition-all flex items-center gap-1.5 shadow-sm active:scale-95"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold-primary motion-safe:animate-pulse" />
            <span>
              {project.demoType === "real_live"
                ? isRtl
                  ? "الموقع المباشر"
                  : "Live Demo"
                : isRtl
                ? "تشغيل محاكي الديمو"
                : "Launch Workstation Demo"}
            </span>
            <span className="text-[10px] rtl:rotate-180">⚡</span>
          </Link>
        )}
      </div>
    </div>
  );
};
