import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Locale } from "@/types/project";
import { projectRepository } from "@/lib/services/projectRepository";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CaseStudyHero } from "@/components/features/projects/case-study/CaseStudyHero";
import { CaseStudyMetrics } from "@/components/features/projects/case-study/CaseStudyMetrics";
import { ProblemSolutionSection } from "@/components/features/projects/case-study/ProblemSolutionSection";
import { ArchitectureTopology } from "@/components/features/projects/case-study/ArchitectureTopology";
import { SubsystemsGrid } from "@/components/features/projects/case-study/SubsystemsGrid";
import { ChallengesResultsSection } from "@/components/features/projects/case-study/ChallengesResultsSection";
import { DemoCalloutBanner } from "@/components/features/projects/case-study/DemoCalloutBanner";

interface ProjectDetailPageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const projects = await projectRepository.getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  if (locale !== "en" && locale !== "ar") return {};

  const project = await projectRepository.getProjectBySlug(slug);
  if (!project) return {};

  const typedLocale = locale as Locale;
  const title = `${project.title[typedLocale]} — Abdulghani Al-Shibami`;
  const description = project.shortDescription[typedLocale];

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { locale, slug } = await params;

  if (locale !== "en" && locale !== "ar") {
    notFound();
  }

  const typedLocale = locale as Locale;
  const project = await projectRepository.getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const category = await projectRepository.getCategoryBySlug(project.categorySlug);
  const categoryName = category?.name[typedLocale] || project.categorySlug;
  const isRtl = typedLocale === "ar";

  return (
    <div className="space-y-12 sm:space-y-16 pb-20">
      {/* 1. Dossier Hero Deck */}
      <CaseStudyHero
        project={project}
        categoryName={categoryName}
        locale={typedLocale}
      />

      {/* 2. Key Empirical Telemetry Metrics */}
      {project.caseStudy.metrics && project.caseStudy.metrics.length > 0 && (
        <Container>
          <CaseStudyMetrics
            metrics={project.caseStudy.metrics}
            locale={typedLocale}
          />
        </Container>
      )}

      {/* 3. Problem vs Solution Split Architecture */}
      <Container>
        <ProblemSolutionSection
          caseStudy={project.caseStudy}
          locale={typedLocale}
        />
      </Container>

      {/* 4. Interactive Simulation Banner Trigger (if simulation exists) */}
      <Container>
        <DemoCalloutBanner project={project} locale={typedLocale} />
      </Container>

      {/* 5. System Topology & Pipeline Flow */}
      {project.caseStudy.architectureFlow &&
        project.caseStudy.architectureFlow.length > 0 && (
          <Container>
            <ArchitectureTopology
              stages={project.caseStudy.architectureFlow}
              locale={typedLocale}
            />
          </Container>
        )}

      {/* 6. Subsystems & Low-Level Innovations */}
      {project.caseStudy.subsystems &&
        project.caseStudy.subsystems.length > 0 && (
          <Container>
            <SubsystemsGrid
              subsystems={project.caseStudy.subsystems}
              locale={typedLocale}
            />
          </Container>
        )}

      {/* 7. Constraints Overcome & Empirical Benchmarks */}
      <Container>
        <ChallengesResultsSection
          caseStudy={project.caseStudy}
          locale={typedLocale}
        />
      </Container>

      {/* 8. Bottom Navigation Anchor */}
      <Container>
        <div className="border border-hairline bg-surface p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-start">
            <div className="font-mono text-[10px] text-gold uppercase tracking-wider">
              {"// END OF ARCHITECTURAL DOSSIER"}
            </div>
            <p className="text-content-secondary text-xs">
              {isRtl
                ? "يمكنك العودة إلى دليل الأنظمة الكامل لاستعراض المشاريع الأخرى."
                : "Explore other systems architectures in the engineered catalog."}
            </p>
          </div>

          <Link href={`/${typedLocale}/projects`}>
            <Button variant="secondary" size="md">
              <span>{isRtl ? "← العودة إلى الدليل" : "Return to Systems Catalog"}</span>
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
