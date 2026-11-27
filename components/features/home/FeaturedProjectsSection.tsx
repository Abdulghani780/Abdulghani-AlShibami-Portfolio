"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface FeaturedProjectsSectionProps {
  locale: "en" | "ar";
}

export function FeaturedProjectsSection({ locale }: FeaturedProjectsSectionProps) {
  const isRtl = locale === "ar";
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const projectImages: Record<string, string> = {
    yusra: "/images/optimized/projects/yusra-card-800w.webp",
    campus: "/images/optimized/projects/campus-card-800w.webp",
    metaalgorithm: "/images/optimized/projects/meta-card-800w.webp",
    nexora: "/images/optimized/projects/nexora-card-800w.webp",
  };

  const content = {
    en: {
      headline: "FEATURED PROJECTS",
      subheadline: "Production systems delivered across healthcare, education, enterprise, and e-commerce. Each represents a complete product lifecycle — from architecture to deployment.",
      items: [
        {
          id: "yusra",
          name: "YUSRA HEALTH",
          tagline: "AI-Powered Healthcare Management Platform",
          description: "Multi-agent clinical decision support, patient portal, appointment scheduling, and FHIR-compliant medical records. Serves 500K+ patients across 12 hospitals.",
          tech: "C# · .NET 8 · Angular · SQL Server · Azure · FHIR R4",
          metrics: "500K+ patients · 12 hospitals · 2.3s diagnosis · 99.9% uptime",
          href: "/en/projects/yusra-health",
          image: "/images/projects/yusra-health/hero.webp",
          featured: true,
        },
        {
          id: "campus",
          name: "CAMPUS IT TRACKER",
          tagline: "Enterprise IT Infrastructure & ITIL Service Management",
          description: "Interactive campus map, asset custody transfer, Kanban service desk, and predictive maintenance. Manages 15K+ assets across 15 university campuses.",
          tech: "C# · WinForms · Oracle · SignalR · ITIL v4 · RBAC",
          metrics: "15K+ assets · 15 campuses · 40% cost reduction · 99.9% uptime",
          href: "/en/projects/campus-it-tracker",
          image: "/images/projects/campus-it-tracker/hero.webp",
          featured: true,
        },
        {
          id: "metaalgorithm",
          name: "METAALGORITHM LAB",
          tagline: "Interactive Algorithm Learning & Complexity Visualization",
          description: "Visual algorithm execution with step-by-step state inspection, complexity analysis engine, and benchmark suite. 10K+ active learners, open source.",
          tech: "Python · PyQt6 · SciPy · NumPy · OpenGL · WebAssembly",
          metrics: "10K+ learners · 2.4K stars · 150+ algorithms · 94% retention",
          href: "/en/projects/metaalgorithm-lab",
          image: "/images/projects/metaalgorithm-lab/hero.webp",
          featured: true,
        },
        {
          id: "nexora",
          name: "NEXORA",
          tagline: "High-Performance Multi-Vendor E-Commerce Platform",
          description: "Real-time inventory, Stripe Connect marketplace, advanced analytics, and headless PWA. Processes 50K orders/day with sub-200ms API latency.",
          tech: "Next.js · PostgreSQL · Redis · Stripe · Tailwind · Vercel",
          metrics: "50K orders/day · 200ms p99 · 99.95% uptime · 3.2x conversion",
          href: "/en/projects/nexora",
          image: "/images/projects/nexora/hero.webp",
          featured: true,
        },
      ],
    },
    ar: {
      headline: "المشاريع المميزة",
      subheadline: "أنظمة إنتاجية سُلمت عبر الرعاية الصحية، التعليم، المؤسسات، والتجارة الإلكترونية. كل منها يمثل دورة حياة منتج كاملة — من المعمارية إلى النشر.",
      items: [
        {
          id: "yusra",
          name: "صحة يسرى",
          tagline: "منصة إدارة رعاية صحية مدعومة بالذكاء الاصطناعي",
          description: "دعم قراري سريري متعدد الوكلاء، بوابة مرضى، جدولة مواعيد، وسجلات طبية متوافقة مع FHIR. تخدم ٥٠٠ ألف+ مريض عبر ١٢ مستشفى.",
          tech: "C# · .NET 8 · Angular · SQL Server · Azure · FHIR R4",
          metrics: "٥٠٠ ألف+ مريض · ١٢ مستشفى · ٢.٣ث تشخيص · ٩٩.٩٪ توفر",
          href: "/ar/projects/yusra-health",
          image: "/images/projects/yusra-health/hero.webp",
          featured: true,
        },
        {
          id: "campus",
          name: "نظام تتبع الحرم الجامعي",
          tagline: "بنية تحتية تقنية مؤسسية وإدارة خدمات ITIL",
          description: "خريطة حرم تفاعلية، نقل عهد الأصول، كانبان مكتب خدمات، وصيانة تنبؤية. يدير ١٥ ألف+ أصل عبر ١٥ حرمًا جامعيًا.",
          tech: "C# · WinForms · Oracle · SignalR · ITIL v4 · RBAC",
          metrics: "١٥ ألف+ أصل · ١٥ حرمًا · تقليل تكلفة ٤٠٪ · ٩٩.٩٪ توفر",
          href: "/ar/projects/campus-it-tracker",
          image: "/images/projects/campus-it-tracker/hero.webp",
          featured: true,
        },
        {
          id: "metaalgorithm",
          name: "مختبر ميتاألغوريثم",
          tagline: "منصة تعلم خوارزميات تفاعلية وتصور التعقيد",
          description: "تنفيذ خوارزمي مرئي مع فحص حالة خطوة بخطوة، محرك تحليل تعقيد، ومجموعة معايير أداء. ١٠ آلاف+ متعلم نشط، مفتوح المصدر.",
          tech: "Python · PyQt6 · SciPy · NumPy · OpenGL · WebAssembly",
          metrics: "١٠ آلاف+ متعلم · ٢.٤ ألف نجمة · ١٥٠+ خوارزمية · ٩٤٪ احتفاظ",
          href: "/ar/projects/metaalgorithm-lab",
          image: "/images/projects/metaalgorithm-lab/hero.webp",
          featured: true,
        },
        {
          id: "nexora",
          name: "نكسورا",
          tagline: "منصة تجارة إلكترونية متعددة البائعين عالية الأداء",
          description: "مخزون فوري، سوق Stripe Connect، تحليلات متقدمة، و PWA بدون رأس. يعالج ٥٠ ألف طلب/يوم مع كمون API دون ٢٠٠ ميلي ثانية.",
          tech: "Next.js · PostgreSQL · Redis · Stripe · Tailwind · Vercel",
          metrics: "٥٠ ألف طلب/يوم · ٢٠٠مي p99 · ٩٩.٩٥٪ توفر · ٣.٢x تحويل",
          href: "/ar/projects/nexora",
          image: "/images/projects/nexora/hero.webp",
          featured: true,
        },
      ],
    },
  }[locale];

  const goldColor = theme === "dark" ? "#D9B567" : "#BE943F";
  const goldHover = theme === "dark" ? "#D9B567" : "#A87F30";
  const textPrimary = theme === "dark" ? "#FDFBF7" : "#1A1A1C";
  const textSecondary = theme === "dark" ? "#E4E2DD" : "#2D2D2F";
  const textMuted = theme === "dark" ? "#9A9893" : "#6B6B6E";
  const bgColor = theme === "dark" ? "#0A0A0B" : "#FDFBF7";
  const surfaceColor = theme === "dark" ? "#121213" : "#FFFFFF";
  const lineColor = theme === "dark" ? "#2A2A2C" : "#E8E4DD";
  const lineGold = theme === "dark" ? "#D9B567" : "#BE943F";

  return (
    <section
      id="projects"
      className="section-master relative"
      style={{
        minHeight: "720px",
        backgroundColor: bgColor,
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
      aria-labelledby="projects-headline"
    >
      {/* Background ornaments */}
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
        <svg className="absolute top-20 left-20 w-32 h-32" viewBox="0 0 100 100" style={{ opacity: 0.25 }}>
          <circle cx="50" cy="50" r="45" fill="none" stroke={goldColor} strokeWidth="1" strokeDasharray="8 4" />
          <circle cx="50" cy="50" r="30" fill="none" stroke={goldColor} strokeWidth="0.5" />
          <circle cx="50" cy="50" r="12" fill={goldColor} opacity="0.15" />
        </svg>
        <svg className="absolute bottom-20 right-20 w-40 h-40" viewBox="0 0 120 120" style={{ opacity: 0.2 }}>
          <rect x="10" y="10" width="100" height="100" rx="4" fill="none" stroke={goldColor} strokeWidth="0.5" />
          <circle cx="35" cy="35" r="4" fill={goldColor} opacity="0.6" />
          <circle cx="85" cy="35" r="4" fill={goldColor} opacity="0.6" />
          <circle cx="35" cy="85" r="4" fill={goldColor} opacity="0.6" />
          <circle cx="85" cy="85" r="4" fill={goldColor} opacity="0.6" />
          <circle cx="60" cy="60" r="5" fill={goldColor} opacity="0.8" />
          <line x1="35" y1="35" x2="60" y2="60" stroke={goldColor} strokeWidth="0.5" opacity="0.4" />
          <line x1="85" y1="35" x2="60" y2="60" stroke={goldColor} strokeWidth="0.5" opacity="0.4" />
          <line x1="35" y1="85" x2="60" y2="60" stroke={goldColor} strokeWidth="0.5" opacity="0.4" />
          <line x1="85" y1="85" x2="60" y2="60" stroke={goldColor} strokeWidth="0.5" opacity="0.4" />
        </svg>
      </div>

      <div className="container-master relative z-10">
        {/* Section Header */}
        <div
          className="mb-16 text-center"
          style={{
            opacity: 1,
            transform: "translateY(0)",
            transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <span className="font-sans font-medium tracking-widest uppercase text-sm caption-gold inline-block mb-6" style={{ letterSpacing: "0.12em" }}>
            {content.headline}
          </span>
          <h2 id="projects-headline" className="section-headline mx-auto mb-4" style={{ maxWidth: "600px" }}>
            {content.headline}
          </h2>
          <p className="body-lg mx-auto" style={{ maxWidth: "700px", color: textSecondary }}>
            {content.subheadline}
          </p>
        </div>

        {/* Project Cards Grid - 4 columns on desktop, 2 on tablet, 1 on mobile */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          role="list"
          aria-label={locale === "ar" ? "المشاريع المميزة" : "Featured projects"}
        >
          {content.items.map((project, index) => (
            <article
              key={project.id}
              role="listitem"
              className="group card-master relative overflow-hidden flex flex-col"
              style={{
                opacity: 1,
                transform: "translateY(0)",
                transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 100}ms`,
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Gold top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{
                  background: `linear-gradient(90deg, transparent 0%, ${lineGold} 50%, transparent 100%)`,
                  opacity: 0.5,
                }}
                aria-hidden="true"
              />

              {/* Project Image */}
              <div
                className="relative aspect-video rounded-t-lg overflow-hidden"
                style={{
                  background: `linear-gradient(145deg, ${theme === "dark" ? "#1A1A1C" : "#E8E4DD"} 0%, ${theme === "dark" ? "#121213" : "#FAF8F3"} 100%)`,
                }}
              >
                <Image
                  src={projectImages[project.id] || "/images/optimized/projects/yusra-card-800w.webp"}
                  alt={`${project.name} project screenshot`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover filter contrast-[1.05] group-hover:scale-[1.02] transition-transform duration-300"
                />
                {/* Featured badge */}
                {project.featured && project.id === "yusra" && (
                  <div className="absolute top-4 right-4" style={{ transform: isRtl ? "none" : "none" }}>
                    <span className="font-mono text-xs tracking-widest uppercase px-2 py-1 rounded" style={{
                      backgroundColor: `rgba(190, 148, 63, 0.15)`,
                      color: goldColor,
                      border: `1px solid ${lineGold}`,
                    }}>
                      {locale === "en" ? "FLAGSHIP" : "الرائد"}
                    </span>
                  </div>
                )}
                {/* Gold corner accents */}
                <div className="absolute top-0 left-0 w-12 h-12 pointer-events-none" style={{
                  borderTop: `2px solid ${goldColor}`,
                  borderLeft: `2px solid ${goldColor}`,
                  opacity: 0.4,
                }} />
                <div className="absolute bottom-0 right-0 w-12 h-12 pointer-events-none" style={{
                  borderBottom: `2px solid ${goldColor}`,
                  borderRight: `2px solid ${goldColor}`,
                  opacity: 0.3,
                }} />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display font-bold text-lg tracking-tight mb-2" style={{ color: textPrimary }}>
                  {project.name}
                </h3>
                <p className="text-sm font-medium mb-3" style={{ color: goldColor }}>
                  {project.tagline}
                </p>
                <p className="body text-sm flex-1 mb-4" style={{ color: textSecondary, lineHeight: 1.6 }}>
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="mb-4">
                  <p className="font-mono text-xs text-muted mb-2" style={{ letterSpacing: "0.05em" }}>
                    {locale === "en" ? "TECH STACK" : "التقنيات"}
                  </p>
                  <div className="flex flex-wrap gap-1.5" dir="ltr">
                    {project.tech.split(" · ").map((tech, idx) => (
                      <span
                        key={idx}
                        className="font-mono text-xs px-2 py-0.5 rounded"
                        style={{
                          backgroundColor: theme === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.04)",
                          color: textMuted,
                          border: `1px solid ${lineColor}`,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="mb-6 pt-4 border-t" style={{ borderColor: lineColor }}>
                  <p className="font-mono text-xs text-muted mb-2" style={{ letterSpacing: "0.05em" }}>
                    {locale === "en" ? "METRICS" : "المقاييس"}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.metrics.split(" · ").map((metric, idx) => (
                      <span
                        key={idx}
                        className="font-mono text-xs px-2.5 py-1 rounded-md"
                        style={{
                          backgroundColor: "rgba(190, 148, 63, 0.1)",
                          color: goldColor,
                          border: `1px solid ${lineGold}40`,
                        }}
                      >
                        <bdi>{metric}</bdi>
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Link */}
                <a
                  href={project.href}
                  className="inline-flex items-center gap-2 font-sans font-semibold text-sm tracking-wider uppercase transition-all duration-200"
                  style={{ color: goldColor }}
                  onMouseEnter={(e) => {
                    const target = e.currentTarget as HTMLElement;
                    target.style.color = goldHover;
                    target.style.transform = "translateX(4px)";
                  }}
                  onMouseLeave={(e) => {
                    const target = e.currentTarget as HTMLElement;
                    target.style.color = goldColor;
                    target.style.transform = "translateX(0)";
                  }}
                >
                  {locale === "en" ? "VIEW CASE STUDY" : "عرض دراسة الحالة"}
                  <svg className="w-4 h-4 rtl-flip transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Gold divider at bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1440px] h-px pointer-events-none" aria-hidden="true">
        <div className="w-full h-full" style={{ background: `linear-gradient(90deg, transparent 0%, ${lineGold} 50%, transparent 100%)`, opacity: 0.4 }} />
      </div>
    </section>
  );
}