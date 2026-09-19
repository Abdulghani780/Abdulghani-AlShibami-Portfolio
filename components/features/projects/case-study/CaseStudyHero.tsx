import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Project, Locale } from "@/types/project";
import { Container } from "@/components/ui/Container";
import { TechnologyBadge } from "../TechnologyBadge";

interface CaseStudyHeroProps {
  project: Project;
  categoryName: string;
  locale: Locale;
}

const PROJECT_CONCEPT_IMAGES: Record<string, string> = {
  "campus-it-tracker": "/images/projects/campus-it-tracker/01-dashboard-modern.jpg",
  "metaalgorithm-lab": "/images/projects/metaalgorithm-lab/01-dashboard.jpg",
  "cafena": "/images/projects/cafena/01-storefront-hero.jpg",
  "novatech": "/images/projects/novatech/01-storefront-hero.jpg",
  "gp": "/images/projects/gp/01-proposals-portal.jpg",
};

export const CaseStudyHero: React.FC<CaseStudyHeroProps> = ({
  project,
  categoryName,
  locale,
}) => {
  const isRtl = locale === "ar";
  const title = project.title[locale];
  const summary = project.shortDescription[locale];
  const conceptImg = PROJECT_CONCEPT_IMAGES[project.slug];

  return (
    <div className="border-b border-slate-800 bg-[#0B1120] py-10 sm:py-16">
      <Container className="space-y-8">
        {/* Dossier Breadcrumb & Top Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-2 text-slate-400">
            <Link
              href={`/${locale}/projects`}
              className="hover:text-indigo-400 transition-colors"
            >
              {isRtl ? "المشاريع" : "Projects"}
            </Link>
            <span>/</span>
            <span className="text-slate-300">{categoryName}</span>
            <span>/</span>
            <span className="text-indigo-400 font-bold">{project.slug}</span>
          </div>

          <Link
            href={`/${locale}/projects`}
            className="text-indigo-400 hover:text-indigo-300 hover:underline uppercase tracking-wider font-bold text-[11px]"
          >
            {isRtl ? "← العودة لدليل المشاريع" : "← Systems Catalog"}
          </Link>
        </div>

        {/* Main Grid: Headline & Details + 3D Concept Render */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Headline & Metadata */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex flex-wrap items-center gap-3 font-mono">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
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
              <span className="text-xs text-slate-500">
                {"// SPEC_YEAR: "}{project.year}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight">
              {title}
            </h1>

            <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl">
              {summary}
            </p>

            {/* Technology Badges List */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.technologies.map((tech) => (
                <TechnologyBadge key={tech.id} technology={tech} size="sm" />
              ))}
            </div>

            {/* Action Button Strip */}
            <div className="flex flex-wrap items-center gap-4 pt-4 font-mono text-xs">
              {project.demoType !== "none" && (
                <Link
                  href={`/${locale}/projects/${project.slug}/demo`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold shadow-[0_0_20px_rgba(16,185,129,0.35)] transition-all active:scale-95"
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
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-900/80 text-white hover:border-slate-500 transition-all"
                >
                  <span>{isRtl ? "المستودع البرمجي" : "Source Code"}</span>
                  <span>↗</span>
                </a>
              )}

              <a
                href="#architecture"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-800 bg-slate-900/50 text-slate-300 hover:text-white hover:border-slate-700 transition-all"
              >
                <span>{isRtl ? "استعراض المعمارية" : "Architecture"}</span>
                <span>↓</span>
              </a>
            </div>
          </div>

          {/* Right: 3D Concept Architecture Preview Card */}
          {conceptImg && (
            <div className="lg:col-span-5">
              <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-indigo-500/30 shadow-[0_10px_40px_rgba(0,0,0,0.5)] bg-[#0F172A] group">
                <Image
                  src={conceptImg}
                  alt={title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-50" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none" dir="ltr">
                  <span className="px-2.5 py-1 rounded-md bg-slate-950/85 backdrop-blur-md border border-indigo-500/40 text-[10px] font-mono text-indigo-300">
                    3D System Architecture Render
                  </span>
                  <span className="px-2 py-1 rounded-md bg-emerald-950/80 border border-emerald-500/40 text-[10px] font-mono text-emerald-400">
                    HD Concept
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};
