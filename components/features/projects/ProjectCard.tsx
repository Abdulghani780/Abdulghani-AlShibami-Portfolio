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
          ? "border-[#00FF9D]/40 bg-gradient-to-b from-[#0A0E17]/95 via-[#070A0F]/90 to-[#04060A]/95 p-6 sm:p-8 md:p-10 shadow-[0_10px_35px_rgba(0,0,0,0.8),0_0_25px_rgba(0,255,157,0.08)] hover:border-[#00FF9D]"
          : "border-white/[0.08] bg-[#070A0F]/90 backdrop-blur-md p-5 sm:p-6 hover:border-[#00FF9D]/50 hover:shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(0,255,157,0.08)]",
        className
      )}
    >
      <div className="space-y-4">
        {/* Card Header: Category Kicker, Status, & Year */}
        <div className="flex items-center justify-between gap-3 border-b border-white/[0.06] pb-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[11px] text-[#00FF9D] uppercase tracking-wider font-semibold">
              {"// "}{categoryName || project.categorySlug}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#00FF9D]/10 text-[#00FF9D] border border-[#00FF9D]/25 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D] animate-ping" />
              <span>LIVE INSTANCE</span>
            </span>
            <span className="text-[11px] font-mono text-white/40">
              {project.year}
            </span>
          </div>
        </div>

        {/* Project Title */}
        <div>
          <Link href={detailUrl} className="group/title block">
            <h3
              className={cn(
                "font-serif font-normal text-white group-hover/title:text-[#00FF9D] transition-colors tracking-tight",
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
        <p className="text-white/70 text-xs sm:text-sm leading-relaxed line-clamp-3">
          {desc}
        </p>

        {/* Technology Badges */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.slice(0, isFeaturedHero ? 6 : 4).map((tech) => (
            <TechnologyBadge key={tech.id} technology={tech} size="xs" />
          ))}
          {project.technologies.length > (isFeaturedHero ? 6 : 4) && (
            <span className="font-mono text-[10px] text-white/40 self-center px-1">
              +{project.technologies.length - (isFeaturedHero ? 6 : 4)}
            </span>
          )}
        </div>
      </div>

      {/* Card Actions Footer */}
      <div className="pt-5 mt-5 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
        <Link
          href={detailUrl}
          className="text-xs font-mono text-white/70 hover:text-white px-3 py-1.5 rounded bg-white/[0.04] border border-white/[0.08] hover:border-white/20 transition-all flex items-center gap-1.5"
        >
          <span>{isRtl ? "الدراسة المعمارية" : "Case Study"}</span>
          <span className={cn("text-xs transition-transform group-hover:translate-x-1", isRtl && "rotate-180")}>
            →
          </span>
        </Link>

        {project.demoType !== "none" && (
          <Link
            href={demoUrl}
            className="text-xs font-mono font-bold text-[#00FF9D] hover:bg-[#00FF9D] hover:text-[#070A0F] px-3.5 py-1.5 rounded bg-[#00FF9D]/10 border border-[#00FF9D]/40 transition-all flex items-center gap-1.5 shadow-[0_0_12px_rgba(0,255,157,0.12)] active:scale-95"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D] animate-pulse" />
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
