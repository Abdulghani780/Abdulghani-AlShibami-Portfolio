import React from "react";
import Link from "next/link";
import { Project, Locale } from "@/types/project";
import { Container } from "@/components/ui/Container";
import { TechnologyBadge } from "../TechnologyBadge";
import { cn } from "@/lib/utils";

interface CaseStudyHeroProps {
  project: Project;
  categoryName: string;
  locale: Locale;
}

export const CaseStudyHero: React.FC<CaseStudyHeroProps> = ({
  project,
  categoryName,
  locale,
}) => {
  const isRtl = locale === "ar";
  const title = project.title[locale];
  const summary = project.shortDescription[locale];

  return (
    <div className="border-b border-white/[0.08] bg-[#070A0F] py-10 sm:py-16">
      <Container className="space-y-8">
        {/* Dossier Breadcrumb & Top Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-2 text-white/50">
            <Link
              href={`/${locale}/projects`}
              className="hover:text-[#00FF9D] transition-colors"
            >
              {isRtl ? "المشاريع" : "Projects"}
            </Link>
            <span>/</span>
            <span className="text-white/70">{categoryName}</span>
            <span>/</span>
            <span className="text-[#00FF9D] font-bold">{project.slug}</span>
          </div>

          <Link
            href={`/${locale}/projects`}
            className="text-[#00FF9D] hover:underline uppercase tracking-wider font-bold text-[11px]"
          >
            {isRtl ? "← العودة لدليل المشاريع" : "← Systems Catalog"}
          </Link>
        </div>

        {/* Hero Headline & Metadata Block */}
        <div className="space-y-4 max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 font-mono">
            <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-[#00FF9D]/10 text-[#00FF9D] border border-[#00FF9D]/30 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D] animate-ping" />
              <span>
                {project.status === "Completed"
                  ? isRtl
                    ? "نظام معتمد للإنتاج"
                    : "PRODUCTION SHOWCASE"
                  : isRtl
                  ? "قيد التطوير"
                  : "ACTIVE ENGINEERING"}
              </span>
            </span>
            <span className="text-xs text-white/40">
              {"// SPEC_YEAR: "}{project.year}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight">
            {title}
          </h1>

          <p className="text-white/70 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl">
            {summary}
          </p>

          {/* Technology Badges List */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.map((tech) => (
              <TechnologyBadge key={tech.id} technology={tech} size="sm" />
            ))}
          </div>
        </div>

        {/* Action Button Strip */}
        <div className="flex flex-wrap items-center gap-4 pt-2 font-mono text-xs">
          {project.demoType !== "none" && (
            <Link
              href={`/${locale}/projects/${project.slug}/demo`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00FF9D] hover:bg-[#00FF9D]/90 text-[#070A0F] font-bold shadow-[0_0_15px_rgba(0,255,157,0.3)] transition-all active:scale-95"
            >
              <span>⚡</span>
              <span>
                {project.demoType === "real_live"
                  ? isRtl
                    ? "فتح التطبيق المباشر"
                    : "Open Live Demo"
                  : isRtl
                  ? "تشغيل محاكي سطح المكتب"
                  : "Launch Workstation Demo"}
              </span>
            </Link>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/[0.1] bg-white/[0.04] text-white hover:border-white/20 transition-all"
            >
              <span>{isRtl ? "المستودع البرمجي" : "Source Code"}</span>
              <span>↗</span>
            </a>
          )}

          <a
            href="#architecture"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/[0.1] bg-white/[0.04] text-white/70 hover:text-white hover:border-white/20 transition-all"
          >
            <span>{isRtl ? "استعراض المعمارية" : "Architecture"}</span>
            <span>↓</span>
          </a>
        </div>
      </Container>
    </div>
  );
};
