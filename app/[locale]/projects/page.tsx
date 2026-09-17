import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Locale } from "@/types/project";
import { projectRepository } from "@/lib/services/projectRepository";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ProjectCatalogView } from "@/components/features/projects/ProjectCatalogView";

interface ProjectsPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({
  params,
}: ProjectsPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "en" && locale !== "ar") return {};

  const isRtl = locale === "ar";
  return {
    title: isRtl
      ? "دليل الأنظمة الهندسية — عبدالغني الشبامي"
      : "Engineered Systems Catalog — Abdulghani Al-Shibami",
    description: isRtl
      ? "معرض الأنظمة البرمجية الموزعة، أطر الذكاء الاصطناعي المستقلة، ومحركات مطابقة الأوامر منخفضة التأخير."
      : "Catalog of distributed computing architectures, autonomous AI agent workflows, and low-latency state machines.",
  };
}

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const { locale } = await params;

  if (locale !== "en" && locale !== "ar") {
    notFound();
  }

  const typedLocale = locale as Locale;
  const dict = dictionaries[typedLocale];

  const [projects, categories] = await Promise.all([
    projectRepository.getProjects(),
    projectRepository.getCategories(),
  ]);

  return (
    <div className="py-12 sm:py-16 space-y-12">
      <Container>
        {/* Catalog Header Deck */}
        <div className="border border-hairline bg-surface p-6 sm:p-10 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-hairline/60 pb-4">
            <div className="flex items-center gap-2 font-mono text-xs text-gold">
              <Badge variant="gold" dot dotColor="emerald">
                {dict.projectsPage.statusCompleted}
              </Badge>
              <span className="text-content-muted hidden sm:inline">
                {"// "}{dict.projectsPage.operationalCount}
              </span>
            </div>

            <div className="font-mono text-xs text-content-muted">
              ARCH_INDEX: SYS-2025-V2
            </div>
          </div>

          <div className="space-y-3 max-w-3xl">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-content-primary">
              {dict.projectsPage.title}
            </h1>
            <p className="text-content-secondary text-sm sm:text-base leading-relaxed">
              {dict.projectsPage.subtitle}
            </p>
          </div>
        </div>
      </Container>

      {/* Catalog View (Filters, Featured, Grid, Empty State) */}
      <Container>
        <ProjectCatalogView
          initialProjects={projects}
          categories={categories}
          locale={typedLocale}
        />
      </Container>
    </div>
  );
}
