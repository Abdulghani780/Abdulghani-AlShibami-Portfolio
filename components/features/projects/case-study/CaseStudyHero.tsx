import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Project, Locale } from "@/types/project";
import { Container } from "@/components/ui/Container";
import { TechnologyBadge } from "../TechnologyBadge";
import { Magnetic } from "@/components/ui/Magnetic";

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
  const desc = project.shortDescription[locale];
  const conceptImage = PROJECT_CONCEPT_IMAGES[project.slug] || "/images/og-default.jpg";

  return (
    <section className="relative w-full bg-background dark:bg-background text-foreground dark:text-foreground pt-20 pb-12 lg:pt-28 lg:pb-16 overflow-hidden border-b border-border/5 dark:border-border/5 transition-colors">
      {/* Ambient Background Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand/10 blur-[140px] rounded-full" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          {/* LEFT COLUMN: Text Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Category Badge & Kicker */}
            <div className="flex items-center gap-3 flex-wrap">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand dark:text-brandLight">
                {categoryName}
              </span>
              <span className="w-8 h-[1px] bg-brand/60 inline-block hidden sm:block" />
              <span className="font-sans text-sm text-muted-foreground dark:text-muted-foreground uppercase tracking-wider">
                {isRtl ? "دراسة حالة" : "CASE STUDY"}
              </span>
            </div>

            {/* Main Title */}
            <h1 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[52px] 2xl:text-[60px] tracking-tight text-foreground dark:text-foreground uppercase leading-[0.98]">
              {title}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-muted-foreground dark:text-muted-foreground max-w-2xl leading-relaxed font-sans">
              {desc}
            </p>

            {/* Tech Stack Preview */}
            <div className="flex flex-wrap items-center gap-2 mt-4" role="list" aria-label={isRtl ? "تقنيات المشروع" : "Project technologies"}>
              {project.technologies.slice(0, 8).map((tech, idx) => (
                <TechnologyBadge key={idx} technology={tech} size="sm" />
              ))}
              {project.technologies.length > 8 && (
                <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-surfaceOverlay dark:bg-surfaceOverlay border border-border/10 dark:border-border/10 text-xs font-mono font-medium text-muted-foreground dark:text-muted-foreground">
                  +{project.technologies.length - 8} more
                </span>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mt-6 pt-4 border-t border-border/10 dark:border-border/10">
              <Magnetic strength={0.35}>
                <Link
                  href={`/${locale}/projects/${project.slug}/demo`}
                  className="relative overflow-hidden inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand-hover hover:bg-brand text-background font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-md hover:shadow-lg transition-all duration-300 active:scale-95 group cursor-pointer min-h-[44px]"
                >
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
                  <span>{project.demoType === "real_live" ? (isRtl ? "فتح التطبيق المباشر" : "LAUNCH LIVE APP") : (isRtl ? "تشغيل المحاكي التفاعلي" : "LAUNCH INTERACTIVE DEMO")}</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1.5 rtl:group-hover:-translate-x-1.5">⚡</span>
                </Link>
              </Magnetic>

              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-border/15 dark:border-border/20 bg-surface dark:bg-transparent hover:bg-foreground/5 dark:hover:bg-background/5 hover:border-brand/50 text-foreground dark:text-foreground text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 active:scale-95 min-h-[44px]"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>{isRtl ? "عرض الكود المصدري" : "VIEW SOURCE"}</span>
                </Link>
              )}

              {project.liveUrl && project.demoType === "real_live" && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full border border-brand/30 dark:border-brandLight/30 bg-brand/10 dark:bg-brandLight/20 text-brand dark:text-brandLight text-xs sm:text-sm font-bold tracking-wider uppercase transition-all hover:bg-brand hover:text-background dark:hover:bg-brandLight dark:hover:text-background active:scale-95 min-h-[44px]"
                >
                  <span>{isRtl ? "الإنتاج المباشر" : "LIVE PRODUCTION"}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </Link>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN: Visual Preview */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border/10 dark:border-border/10 bg-surfaceOverlay dark:bg-surfaceOverlay shadow-2xl group relative">
              <Image
                src={conceptImage}
                alt={`${title} - ${isRtl ? "معاينة المشروع" : "Project Preview"}`}
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Gold accent bar at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-brand to-transparent dark:via-brandLight" />
            </div>

            {/* Floating stats badges */}
            <div className="absolute -bottom-6 -start-6 lg:-start-8 grid grid-cols-2 gap-3 pointer-events-none">
              {[
                { value: "50+", label: isRtl ? "مكون" : "Modules" },
                { value: "99.9%", label: isRtl ? "زمن تشغيل" : "Uptime" },
                { value: "<200ms", label: isRtl ? "استجابة" : "Latency" },
                { value: "0", label: isRtl ? "أخطاء حرجة" : "Critical Bugs" },
              ].map((stat, idx) => (
                <div key={idx} className="bg-surface dark:bg-surfaceElevated border border-border/10 dark:border-border/10 rounded-xl p-4 shadow-lg pointer-events-auto">
                  <div className="font-mono text-2xl font-bold text-brand dark:text-brandLight">{stat.value}</div>
                  <div className="text-xs text-muted-foreground dark:text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};