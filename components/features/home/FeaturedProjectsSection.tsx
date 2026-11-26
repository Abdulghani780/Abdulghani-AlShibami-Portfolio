"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Locale } from "@/lib/i18n/dictionaries";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TiltCard } from "@/components/ui/TiltCard";

export function FeaturedProjectsSection({ locale }: { locale: Locale }) {
  const isRtl = locale === "ar";

  const projects = [
    {
      id: "campus-it-tracker",
      title: isRtl ? "نظام تتبع البنية التحتية الجامعية" : "CAMPUS IT INFRASTRUCTURE TRACKER",
      subtitle: isRtl ? "إدارة ذكية لأصول وشبكات الحرم الجامعي" : "Smart IT infrastructure management",
      tech: "C# · WinForms · Oracle · RBAC",
      image: "/images/projects/campus-it-tracker/01-dashboard-modern.jpg",
      href: `/${locale}/projects/campus-it-tracker`,
    },
    {
      id: "metaalgorithm-lab",
      title: isRtl ? "مختبر الخوارزميات التفاعلي" : "METAALGORITHM LAB",
      subtitle: isRtl ? "منصة تفاعلية لدراسة وتعقيد الخوارزميات" : "Interactive algorithm learning platform",
      tech: "Python · PyQt6 · SciPy · Benchmarking",
      image: "/images/projects/metaalgorithm-lab/01-main-interface.jpg",
      href: `/${locale}/projects/metaalgorithm-lab`,
    },
    {
      id: "novatech",
      title: isRtl ? "نوفاتيك — منصة تجارة إلكترونية" : "NOVATECH E-COMMERCE",
      subtitle: isRtl ? "متجر إلكتروني كامل مع سلة ذكية ونظام VAT" : "Full-stack e-commerce with smart cart & VAT",
      tech: "Vanilla JS · Modern CSS3 · RTL · Stripe",
      image: "/images/projects/novatech/01-homepage.jpg",
      href: `/${locale}/projects/novatech`,
    },
    {
      id: "cafena-roasters",
      title: isRtl ? "كافينا — محمصة قهوة متخصصة" : "CAFENA ROASTERS",
      subtitle: isRtl ? "موقع تجاري لعلامة قهوة يمنية فاخرة" : "Premium Yemeni coffee brand experience",
      tech: "Vanilla JS · GSAP · RTL Arabic · CMS",
      image: "/images/projects/cafena/01-hero.jpg",
      href: `/${locale}/projects/cafena-roasters`,
    },
  ];

  return (
    <section
      id="projects"
      className="relative w-full bg-background dark:bg-background text-foreground dark:text-foreground py-20 lg:py-28 border-b border-border/5 dark:border-border/5 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal isRtl={isRtl} direction="up">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4 border-b border-border/10 dark:border-border/10 pb-6">
            <div>
              <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-foreground dark:text-foreground">
                {isRtl ? "مشاريع مختارة" : "FEATURED PROJECTS"}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground dark:text-muted-foreground font-sans">
                {isRtl
                  ? "أبرز المشاريع التي صممتها وطوّرتها — من أنظمة مؤسسية إلى منصات ذكية"
                  : "Key projects I've architected and built — from enterprise systems to intelligent platforms"}
              </p>
            </div>

            <Link
              href={`/${locale}/projects`}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-brand dark:text-brand-light hover:text-brandHover dark:hover:text-brandHover transition-colors group"
            >
              <span>{isRtl ? "عرض جميع المشاريع" : "VIEW ALL PROJECTS"}</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">→</span>
            </Link>
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <ScrollReveal key={project.id} delay={idx * 100} isRtl={isRtl} direction="up" className="h-full">
              <Link href={project.href} className="block h-full">
                <TiltCard className="h-full flex flex-col overflow-hidden rounded-2xl border border-border dark:border-border bg-surface dark:bg-surfaceElevated hover:border-brand/50 transition-all shadow-sm group hover:-translate-y-1 shadow-lg">
                  {/* Project Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-surfaceOverlay dark:bg-surfaceOverlay">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent dark:from-background/80 dark:via-transparent" />
                    {/* Tech Stack Badge */}
                    <div className="absolute bottom-3 start-3 end-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-background/90 dark:bg-background/90 backdrop-blur-sm border border-border/20 dark:border-border/20 text-xs font-mono font-medium text-muted-foreground dark:text-muted-foreground">
                        {project.tech}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    <h3 className="font-sans font-bold text-lg sm:text-xl text-foreground dark:text-foreground leading-snug group-hover:text-brand dark:group-hover:text-brand-light transition-colors mb-2 line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground dark:text-muted-foreground leading-relaxed mb-4 flex-1">
                      {project.subtitle}
                    </p>
                    {/* CTA Arrow */}
                    <div className="flex items-center justify-between pt-3 border-t border-border/10 dark:border-border/10">
                      <span className="font-mono text-xs font-bold text-brand dark:text-brandLight uppercase tracking-wider">
                        {isRtl ? "عرض التفاصيل" : "VIEW CASE STUDY"}
                      </span>
                      <span className="text-brand dark:text-brandLight transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1">→</span>
                    </div>
                  </div>
                </TiltCard>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}