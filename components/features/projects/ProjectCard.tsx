import React from "react";
import Link from "next/link";
import { Project, Locale } from "@/types/project";
import { Badge } from "@/components/ui/Badge";
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
          ? "border-slate-200 dark:border-indigo-500/40 bg-white dark:bg-gradient-to-b dark:from-[#0F172A] dark:via-[#0B1120] dark:to-[#090D16] p-6 sm:p-8 md:p-10 shadow-sm dark:shadow-[0_10px_35px_rgba(2,6,23,0.8),0_0_25px_rgba(99,102,241,0.2)] hover:border-indigo-400"
          : "border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/70 backdrop-blur-md p-5 sm:p-6 shadow-xs hover:border-indigo-400 dark:hover:border-indigo-500/50 hover:shadow-md dark:hover:shadow-[0_10px_30px_rgba(2,6,23,0.8),0_0_20px_rgba(99,102,241,0.12)]",
        className
      )}
    >
      <div className="space-y-4">
        {/* Card Header: Category Kicker, Status, & Year */}
        <div className="flex items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800/70 pb-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[11px] text-indigo-600 dark:text-cyan-400 uppercase tracking-wider font-semibold">
              {"// "}{categoryName || project.categorySlug}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 motion-safe:animate-ping" />
              <span>LIVE INSTANCE</span>
            </span>
            <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
              {project.year}
            </span>
          </div>
        </div>

        {/* Project Title */}
        <div>
          <Link href={detailUrl} className="group/title block">
            <h3
              className={cn(
                "font-serif font-normal text-slate-900 dark:text-white group-hover/title:text-indigo-600 dark:group-hover/title:text-indigo-300 transition-colors tracking-tight",
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
        <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
          {desc}
        </p>

        {/* Technology Badges */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.slice(0, isFeaturedHero ? 6 : 4).map((tech) => (
            <TechnologyBadge key={tech.id} technology={tech} size="xs" />
          ))}
          {project.technologies.length > (isFeaturedHero ? 6 : 4) && (
            <span className="font-mono text-[10px] text-slate-400 self-center px-1">
              +{project.technologies.length - (isFeaturedHero ? 6 : 4)}
            </span>
          )}
        </div>
      </div>

      {/* Card Actions Footer */}
      <div className="pt-5 mt-5 border-t border-slate-200 dark:border-slate-800/70 flex flex-wrap items-center justify-between gap-3">
        <Link
          href={detailUrl}
          className="text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-3 py-1.5 rounded bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 hover:border-slate-400 dark:hover:border-slate-500 transition-all flex items-center gap-1.5"
        >
          <span>{isRtl ? "الدراسة المعمارية" : "Case Study"}</span>
          <span className={cn("text-xs transition-transform group-hover:translate-x-1", isRtl && "rotate-180")}>
            →
          </span>
        </Link>

        {project.demoType !== "none" && (
          <Link
            href={demoUrl}
            className="text-xs font-mono font-bold text-indigo-700 dark:text-indigo-300 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-cyan-500 hover:text-white px-3.5 py-1.5 rounded bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/40 transition-all flex items-center gap-1.5 shadow-sm dark:shadow-[0_0_12px_rgba(99,102,241,0.15)] active:scale-95"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400 motion-safe:animate-pulse" />
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
