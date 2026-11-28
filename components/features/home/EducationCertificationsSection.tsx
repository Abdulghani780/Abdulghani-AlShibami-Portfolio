"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface EducationCertificationsSectionProps {
  locale: "en" | "ar";
}

export function EducationCertificationsSection({ locale }: EducationCertificationsSectionProps) {
  const isRtl = locale === "ar";
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const certImages: Record<string, string> = {
    "ums-innovation": "/images/certificates/ums-innovation-award.jpg",
    "yemen-ai-summit": "/images/certificates/yemen-ai-summit-2026.png",
    "tot-ibct": "/images/certificates/tot-ibct-novice-trainer.png",
    "ums-web-dev": "/images/certificates/ums-web-dev-ai-workshop.jpg",
  };

  const content = {
    en: {
      headline: "EDUCATION & CREDENTIALS",
      subheadline: "Academic foundation at University of Modern Sciences, verified professional credentials, and honors.",
      education: {
        degree: "Bachelor of Information Technology (IT)",
        institution: "University of Modern Sciences (UMS), Sana'a",
        period: "2021 — 2025",
        honors: "First Class Honors · Outstanding Academic Achievement",
        focus: "Artificial Intelligence, Distributed Systems, Software Engineering, Autonomous Multi-Agent Frameworks",
        thesis: "Design & Implementation of Intelligent Decision Support Architecture (Yusra Clinical Engine)",
        imageAlt: "University of Modern Sciences, Sana'a",
      },
      certifications: [
        {
          id: "ums-innovation",
          title: "UMS Innovation & Excellence Award",
          provider: "University of Modern Sciences",
          date: "2024",
          badge: "INNOVATION-UMS",
          description: "Awarded for exceptional innovation in developing AI-driven systems and academic software solutions.",
          imageKey: "ums-innovation",
        },
        {
          id: "yemen-ai-summit",
          title: "Yemen AI Summit Certificate of Honor",
          provider: "Yemen AI Summit 2026",
          date: "2026",
          badge: "AI-SUMMIT-2026",
          description: "Honored for technical contributions and active role in advancing artificial intelligence in Yemen.",
          imageKey: "yemen-ai-summit",
        },
        {
          id: "tot-ibct",
          title: "Certified Professional Trainer (TOT)",
          provider: "IBCT — International Board of Certified Trainers",
          date: "2024",
          badge: "IBCT-TOT-NOVICE",
          description: "Certified trainer for engineering workshops, modern software development, and technical mentorship.",
          imageKey: "tot-ibct",
        },
        {
          id: "ums-web-dev",
          title: "Web Development & AI Engineering Workshop",
          provider: "University of Modern Sciences",
          date: "2024",
          badge: "UMS-DEV-AI",
          description: "Advanced hands-on workshop covering intelligent web platforms, Next.js architecture, and modern full-stack workflows.",
          imageKey: "ums-web-dev",
        },
      ],
    },
    ar: {
      headline: "التعليم والشهادات",
      subheadline: "الأساس الأكاديمي في جامعة العلوم الحديثة، اعتمادات مهنية موثقة، وجوائز تميز.",
      education: {
        degree: "بكالوريوس تكنولوجيا المعلومات (IT)",
        institution: "جامعة العلوم الحديثة (UMS)، صنعاء",
        period: "٢٠٢١ — ٢٠٢٥",
        honors: "مرتبة الشرف الأولى · تميز أكاديمي مستمر",
        focus: "الذكاء الاصطناعي، الأنظمة الموزعة، هندسة البرمجيات، أطر عمل الوكلاء الأذكياء",
        thesis: "تصميم وتنفيذ معمارية دعم القرار السريري الذكي (محرك يسرى السريري)",
        imageAlt: "جامعة العلوم الحديثة، صنعاء",
      },
      certifications: [
        {
          id: "ums-innovation",
          title: "جائزة الابتكار والتميز الأكاديمي",
          provider: "جامعة العلوم الحديثة",
          date: "٢٠٢٤",
          badge: "INNOVATION-UMS",
          description: "مُنحت للابتكار المتميز في تطوير أنظمة الذكاء الاصطناعي والحلول البرمجية الأكاديمية.",
          imageKey: "ums-innovation",
        },
        {
          id: "yemen-ai-summit",
          title: "شهادة شرف قمة اليمن للذكاء الاصطناعي",
          provider: "قمة اليمن للذكاء الاصطناعي ٢٠٢٦",
          date: "٢٠٢٦",
          badge: "AI-SUMMIT-2026",
          description: "تكريم للمساهمات التقنية والدور الفعال في تطوير الذكاء الاصطناعي في اليمن.",
          imageKey: "yemen-ai-summit",
        },
        {
          id: "tot-ibct",
          title: "مدرب محترف معتمد (TOT)",
          provider: "IBCT — البورد الدولي للمدربين المعتمدين",
          date: "٢٠٢٤",
          badge: "IBCT-TOT-NOVICE",
          description: "شهادة تدريب معتمدة لتقديم ورش العمل الهندسية وتطوير البرمجيات الحديثة.",
          imageKey: "tot-ibct",
        },
        {
          id: "ums-web-dev",
          title: "ورشة عمل تطوير الويب وهندسة الذكاء الاصطناعي",
          provider: "جامعة العلوم الحديثة",
          date: "٢٠٢٤",
          badge: "UMS-DEV-AI",
          description: "ورشة عمل عملية متقدمة في المنصات الذكية، معمارية Next.js، وبناء التطبيقات الحديثة.",
          imageKey: "ums-web-dev",
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
      id="education"
      className="section-master relative"
      style={{
        minHeight: "700px",
        backgroundColor: bgColor,
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
      aria-labelledby="education-headline"
    >
      {/* Background ornaments */}
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
        <svg className="absolute top-20 left-20 w-32 h-32" viewBox="0 0 100 100" style={{ opacity: 0.2 }}>
          <circle cx="50" cy="50" r="45" fill="none" stroke={goldColor} strokeWidth="1" strokeDasharray="8 4" />
          <circle cx="50" cy="50" r="30" fill="none" stroke={goldColor} strokeWidth="0.5" />
        </svg>
        <svg className="absolute bottom-20 right-20 w-40 h-40" viewBox="0 0 120 120" style={{ opacity: 0.15 }}>
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
          className="mb-12 lg:mb-16 text-center"
          style={{
            opacity: 1,
            transform: "translateY(0)",
            transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <span className="font-sans font-medium tracking-widest uppercase text-sm caption-gold inline-block mb-4" style={{ letterSpacing: "0.12em" }}>
            {content.headline}
          </span>
          <h2 id="education-headline" className="section-headline mx-auto mb-4" style={{ maxWidth: "800px" }}>
            {content.headline}
          </h2>
          <p className="body-lg mx-auto" style={{ maxWidth: "700px", color: textSecondary }}>
            {content.subheadline}
          </p>
        </div>

        {/* 2-Column Layout: Education Card (left) + 4 Cert Cards (right) */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
          style={{
            opacity: 1,
            transform: "translateY(0)",
            transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 100ms",
          }}
        >
          {/* Column 1: Education Card (col-span-7) */}
          <div className="lg:col-span-7">
            <article className="card-master relative overflow-hidden h-full" style={{ minHeight: "480px" }}>
              {/* Gold top accent */}
              <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(90deg, transparent 0%, ${lineGold} 50%, transparent 100%)`, opacity: 0.6 }} aria-hidden="true" />

              <div className="p-8 lg:p-10 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `rgba(190, 148, 63, 0.1)`, border: `1px solid ${lineGold}` }}>
                    <svg className="w-7 h-7" viewBox="0 0 48 48" fill="none" stroke={goldColor} strokeWidth="1.5" aria-hidden="true">
                      <path d="M24 6L6 14v20l18 8 18-8V14L24 6z" />
                      <path d="M6 14l18 8 18-8" strokeWidth="1" strokeDasharray="4 4" />
                      <path d="M24 14v20" strokeWidth="1" strokeDasharray="4 4" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-mono text-xs text-muted caption-gold" style={{ letterSpacing: "0.08em" }}>
                      {locale === "en" ? "FORMAL EDUCATION" : "التعليم الرسمي"}
                    </span>
                    <h3 className="font-display font-semibold text-xl mt-1" style={{ color: textPrimary }}>
                      {content.education.degree}
                    </h3>
                  </div>
                </div>

                {/* Gold divider */}
                <div className="w-20 h-px mb-6 gold-divider-short" style={{ backgroundColor: lineGold }} />

                {/* Institution & Period */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: goldColor }} />
                    <span className="font-medium" style={{ color: textPrimary }}>{content.education.institution}</span>
                  </div>
                  <div className="flex items-center gap-3 ml-5" style={{ marginLeft: isRtl ? 0 : "1.25rem", marginRight: isRtl ? "1.25rem" : 0 }}>
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: goldColor, opacity: 0.6 }} />
                    <span className="text-sm" style={{ color: textMuted }}>{content.education.period}</span>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-4 mb-6 flex-1">
                  <div>
                    <p className="font-mono text-xs text-muted mb-1" style={{ letterSpacing: "0.05em" }}>
                      {locale === "en" ? "HONORS" : "الشرف"}
                    </p>
                    <p style={{ color: textSecondary }}>{content.education.honors}</p>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-muted mb-1" style={{ letterSpacing: "0.05em" }}>
                      {locale === "en" ? "FOCUS AREAS" : "مجالات التركيز"}
                    </p>
                    <p style={{ color: textSecondary }}>{content.education.focus}</p>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-muted mb-1" style={{ letterSpacing: "0.05em" }}>
                      {locale === "en" ? "THESIS" : "رسالة التخرج"}
                    </p>
                    <p className="font-medium" style={{ color: textPrimary }}>&ldquo;{content.education.thesis}&rdquo;</p>
                  </div>
                </div>

                {/* University Image with Mask */}
                <div className="relative mt-6" style={{ aspectRatio: "16/9", borderRadius: "8px", overflow: "hidden" }}>
                  <div className="absolute inset-0" style={{
                    maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                    border: `1px solid ${lineColor}`,
                  }}>
                    <Image
                      src="/images/optimized/showcase/as-header-brand-800w.webp"
                      alt={content.education.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 500px"
                      className="object-cover filter contrast-[1.05]"
                    />
                  </div>
                  {/* Gold corners */}
                  <div className="absolute top-0 left-0 w-12 h-12 pointer-events-none" style={{ borderTop: `2px solid ${goldColor}`, borderLeft: `2px solid ${goldColor}`, opacity: 0.4 }} />
                  <div className="absolute bottom-0 right-0 w-12 h-12 pointer-events-none" style={{ borderBottom: `2px solid ${goldColor}`, borderRight: `2px solid ${goldColor}`, opacity: 0.3 }} />
                </div>
              </div>
            </article>
          </div>

          {/* Column 2: 4 Certification Cards (col-span-5) */}
          <div className="lg:col-span-5 space-y-4">
            {content.certifications.map((cert, index) => (
              <article
                key={cert.id}
                className="card-master relative overflow-hidden group h-full"
                style={{
                  opacity: 1,
                  transform: "translateY(0)",
                  transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${200 + index * 100}ms`,
                  minHeight: "110px",
                }}
              >
                {/* Gold left accent */}
                <div className="absolute top-0 left-0 w-1 h-full" style={{ background: `linear-gradient(to bottom, ${lineGold} 0%, ${lineColor} 50%, ${lineGold} 100%)`, opacity: 0.6 }} aria-hidden="true" />

                <div className="p-5 flex items-center gap-4">
                  {/* Cert Image */}
                  {cert.imageKey && certImages[cert.imageKey] && (
                    <Image
                      src={certImages[cert.imageKey]}
                      alt={cert.title}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-xl object-cover flex-shrink-0 transition-all duration-300"
                      style={{ border: `1px solid ${lineGold}` }}
                    />
                  )}

                  {/* Cert Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display font-semibold text-base tracking-tight" style={{ color: textPrimary }}>
                      {cert.title}
                    </h4>
                    <p className="text-sm" style={{ color: textMuted }}>{cert.provider}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="font-mono text-xs px-2 py-1 rounded" style={{ backgroundColor: `rgba(190, 148, 63, 0.15)`, color: goldColor, border: `1px solid ${lineGold}` }}>
                        {cert.badge}
                      </span>
                      <span className="font-mono text-xs text-muted">{cert.date}</span>
                    </div>
                  </div>

                  {/* Verify Link / View Certificate */}
                  <a
                    href={cert.imageKey && certImages[cert.imageKey] ? certImages[cert.imageKey] : "/credentials"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 font-mono text-xs text-muted hover:text-gold transition-colors opacity-0 group-hover:opacity-100"
                    style={{ color: textMuted }}
                    aria-label={`${locale === "en" ? "View" : "عرض"} ${cert.title}`}
                  >
                    <svg className="w-4 h-4 rtl-flip" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    <span>{locale === "en" ? "View" : "عرض"}</span>
                  </a>
                </div>

                {/* Description on hover */}
                <div className="absolute inset-x-4 bottom-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0 px-5 pb-4" style={{ background: `linear-gradient(to top, ${surfaceColor}, transparent)` }}>
                  <p className="text-xs" style={{ color: textSecondary }}>{cert.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Gold divider at bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1440px] h-px pointer-events-none" aria-hidden="true">
        <div className="w-full h-full" style={{ background: `linear-gradient(90deg, transparent 0%, ${lineGold} 50%, transparent 100%)`, opacity: 0.4 }} />
      </div>
    </section>
  );
}