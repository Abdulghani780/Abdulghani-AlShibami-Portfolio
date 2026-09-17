import React from "react";
import Link from "next/link";
import { Project, Locale } from "@/types/project";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
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
    <div className="border-b border-hairline bg-surface/50 py-10 sm:py-16">
      <Container className="space-y-8">
        {/* Dossier Breadcrumb & Top Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-2 text-content-muted">
            <Link
              href={`/${locale}/projects`}
              className="hover:text-gold transition-colors"
            >
              {isRtl ? "المشاريع" : "Projects"}
            </Link>
            <span>/</span>
            <span className="text-content-secondary">{categoryName}</span>
            <span>/</span>
            <span className="text-gold font-semibold">{project.slug}</span>
          </div>

          <Link
            href={`/${locale}/projects`}
            className="text-gold hover:text-gold-light uppercase tracking-wider"
          >
            {isRtl ? "← العودة للدليل" : "← Systems Catalog"}
          </Link>
        </div>

        {/* Hero Headline & Metadata Block */}
        <div className="space-y-4 max-w-4xl">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="gold" dot dotColor="emerald">
              {project.status === "Completed"
                ? isRtl
                  ? "نظام معتمد للإنتاج"
                  : "PRODUCTION SHOWCASE"
                : isRtl
                ? "قيد التطوير"
                : "ACTIVE ENGINEERING"}
            </Badge>
            <span className="font-mono text-xs text-content-muted">
              {"// SPEC_YEAR: "}{project.year}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-content-primary leading-tight">
            {title}
          </h1>

          <p className="text-content-secondary text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl">
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
        <div className="flex flex-wrap items-center gap-4 pt-2">
          {project.demoType === "interactive_simulation" && project.demoUrl && (
            <Link href={`/${locale}${project.demoUrl}`}>
              <Button variant="primary" size="md">
                <span className="h-2 w-2 rounded-full bg-status-emerald animate-pulse" />
                <span>{isRtl ? "تشغيل مختبر المحاكاة التفاعلي" : "Launch Interactive Simulation"}</span>
                <span className={cn("text-xs", isRtl && "rotate-180")}>→</span>
              </Button>
            </Link>
          )}

          <a href="#architecture">
            <Button variant="secondary" size="md">
              <span>{isRtl ? "استعراض المعمارية" : "Architecture Topology"}</span>
              <span className="text-xs">↓</span>
            </Button>
          </a>
        </div>
      </Container>
    </div>
  );
};
