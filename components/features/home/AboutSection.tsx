"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AsLogoWithWordmark } from "@/components/ui/AsLogo";
import { cn } from "@/lib/utils";

interface AboutSectionProps {
  locale: "en" | "ar";
}

export function AboutSection({ locale }: AboutSectionProps) {
  const isRtl = locale === "ar";
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const content = {
    en: {
      headline: "WHO IS ABDULGHANI",
      lead: "I'm an Autonomous Systems Architect and AI Engineering Leader with a decade of experience building systems that think, adapt, and scale. My work sits at the intersection of distributed systems, machine learning, and real-time infrastructure — where theoretical elegance meets production reality.",
      pillars: [
        {
          title: "AUTONOMOUS SYSTEMS",
          description: "Designing self-governing distributed state machines that process 100K+ transitions/second with sub-millisecond latency and zero-downtime deployments.",
          icon: "stateMachine",
        },
        {
          title: "AI ENGINEERING",
          description: "Building production ML pipelines, multi-agent orchestration frameworks, and computer vision systems that operate reliably in constrained environments.",
          icon: "brain",
        },
        {
          title: "ENTERPRISE ARCHITECTURE",
          description: "Leading digital transformation for government and enterprise — legacy modernization, ITIL service management, and cloud-native migration strategies.",
          icon: "building",
        },
      ],
      timeline: [
        {
          year: "2024",
          title: "AI ENGINEERING LEAD",
          org: "Yusra Health — Sana'a, Yemen",
          description: "Architected multi-agent clinical decision support system serving 500K+ patients. Reduced diagnosis latency from 45min to 2.3sec.",
        },
        {
          year: "2022",
          title: "SENIOR SYSTEMS ARCHITECT",
          org: "Campus IT Tracker — Sana'a, Yemen",
          description: "Led enterprise ITIL transformation for university infrastructure. 40% cost reduction, 99.9% uptime across 15 campuses.",
        },
        {
          year: "2020",
          title: "LEAD DEVELOPER",
          org: "MetaAlgorithm Lab — Remote",
          description: "Built interactive algorithm visualization platform used by 10K+ CS students globally. Open-source, 2.4K GitHub stars.",
        },
        {
          year: "2018",
          title: "SOFTWARE ENGINEER",
          org: "Nexora — Sana'a, Yemen",
          description: "Developed high-performance e-commerce platform processing 50K orders/day. Microservices, event-driven, cloud-native.",
        },
        {
          year: "2016",
          title: "JUNIOR DEVELOPER",
          org: "Early Career — Sana'a, Yemen",
          description: "Full-stack development across desktop, web, and mobile. C#, Java, PHP. Foundation in clean architecture and systems thinking.",
        },
      ],
      quote: "Code is not the artifact. The system behavior it produces is. Everything else is implementation detail.",
      quoteAuthor: "— Abdulghani Al-Shibami",
      yemenImageAlt: "Sana'a, Yemen — Historic Old City Architecture",
    },
    ar: {
      headline: "مَنْ هُوَ عَبْدُالْغَنِي",
      lead: "أنا مصمم أنظمة مستقل وقائد هندسة ذكاء اصطناعي مع عقد من الخبرة في بناء أنظمة تفكر، وتتكيف، وتتحمل. عملي يقع عند تقاطع الأنظمة الموزعة، والتعلم الآلي، والبنية التحتية في الوقت الفعلي — حيث تلتقي الأناقة النظرية بواقع الإنتاج.",
      pillars: [
        {
          title: "الأنظمة المستقلة",
          description: "تصميم آلات حالة موزعة ذاتية الحكم تعالج ١٠٠ ألف+ انتقال/ثانية مع كمون دون الميلي ثانية ونشر دون توقف.",
          icon: "stateMachine",
        },
        {
          title: "هندسة الذكاء الاصطناعي",
          description: "بناء خطوط أنابيب تعلم آلي إنتاجية، وأطر تنسيق متعددة الوكلاء، وأنظمة رؤية حاسوبية تعمل بشكل موثوق في بيئات مقيدة.",
          icon: "brain",
        },
        {
          title: "معمارية المؤسسات",
          description: "قيادة التحول الرقمي للحكومات والمؤسسات — تحديث الأنظمة القديمة، وإدارة خدمات ITIL، واستراتيجيات الهجرة السحابية الأصلية.",
          icon: "building",
        },
      ],
      timeline: [
        {
          year: "٢٠٢٤",
          title: "قائد هندسة الذكاء الاصطناعي",
          org: "صحة يسرى — صنعاء، اليمن",
          description: "صمم نظام دعم قراري سريري متعدد الوكلاء يخدم ٥٠٠ ألف مريض. قلل زمن التشخيص من ٤٥ دقيقة إلى ٢.٣ ثانية.",
        },
        {
          year: "٢٠٢٢",
          title: "مصمم أنظمة أول",
          org: "نظام تتبع الحرم الجامعي — صنعاء، اليمن",
          description: "قاد تحول ITIL المؤسسي لبنية الجامعة التحتية. تقليل التكلفة ٤٠٪، توفر ٩٩.٩٪ عبر ١٥ حرمًا جامعيًا.",
        },
        {
          year: "٢٠٢٠",
          title: "مطور رئيسي",
          org: "مختبر ميتاألغوريثم — عن بعد",
          description: "بنى منصة تفاعلية لتصور الخوارزميات يستخدمها ١٠ آلاف+ طالب علوم حاسوب عالميًا. مفتوح المصدر، ٢.٤ ألف نجمة على GitHub.",
        },
        {
          year: "٢٠١٨",
          title: "مهندس برمجيات",
          org: "نكسورا — صنعاء، اليمن",
          description: "طور منصة تجارة إلكترونية عالية الأداء تعالج ٥٠ ألف طلب/يوم. خدمات صغرى، موجهة بالأحداث، سحابية أصلية.",
        },
        {
          year: "٢٠١٦",
          title: "مطور مبتدئ",
          org: "بداية المسار — صنعاء، اليمن",
          description: "تطوير كامل الطيف عبر سطح المكتب، الويب، والجوال. C#، Java، PHP. أساس في المعمارية النظيفة والتفكير النظمي.",
        },
      ],
      quote: "الكود ليس المُنتج. سلوك النظام الذي ينتجه هو. كل شيء آخر تفصيل تنفيذي.",
      quoteAuthor: "— عبدالغني الشبامي",
      yemenImageAlt: "صنعاء، اليمن — عمارة المدينة القديمة التاريخية",
    },
  }[locale];

  const goldColor = theme === "dark" ? "#D9B567" : "#BE943F";
  const textPrimary = theme === "dark" ? "#FDFBF7" : "#1A1A1C";
  const textSecondary = theme === "dark" ? "#E4E2DD" : "#2D2D2F";
  const textMuted = theme === "dark" ? "#9A9893" : "#6B6B6E";
  const bgColor = theme === "dark" ? "#0A0A0B" : "#FDFBF7";
  const surfaceColor = theme === "dark" ? "#121213" : "#FFFFFF";
  const lineColor = theme === "dark" ? "#2A2A2C" : "#E8E4DD";
  const lineGold = theme === "dark" ? "#D9B567" : "#BE943F";

  // SVG Icons for pillars
  const pillarIcons = {
    stateMachine: (
      <svg viewBox="0 0 48 48" fill="none" stroke={goldColor} strokeWidth="1.5" aria-hidden="true">
        <circle cx="24" cy="24" r="20" strokeDasharray="8 4" />
        <circle cx="24" cy="24" r="12" />
        <path d="M24 8v8M24 32v8M8 24h8M32 24h8" />
        <circle cx="24" cy="24" r="4" fill={goldColor} />
      </svg>
    ),
    brain: (
      <svg viewBox="0 0 48 48" fill="none" stroke={goldColor} strokeWidth="1.5" aria-hidden="true">
        <path d="M12 24c0-6.6 5.4-12 12-12s12 5.4 12 12-5.4 12-12 12" />
        <path d="M36 24c0 6.6-5.4 12-12 12s-12-5.4-12-12 5.4-12 12-12" />
        <path d="M24 12v24M12 24h24" strokeWidth="1" strokeDasharray="4 4" />
      </svg>
    ),
    building: (
      <svg viewBox="0 0 48 48" fill="none" stroke={goldColor} strokeWidth="1.5" aria-hidden="true">
        <rect x="6" y="14" width="36" height="30" rx="2" />
        <path d="M6 24h36M6 30h36M6 36h36" strokeWidth="1" />
        <rect x="20" y="30" width="8" height="14" fill={goldColor} opacity="0.3" />
        <path d="M24 6v8" />
        <circle cx="24" cy="6" r="3" fill={goldColor} />
      </svg>
    ),
  };

  return (
    <section
      id="about"
      className="section-master relative"
      style={{
        minHeight: "850px",
        backgroundColor: bgColor,
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
      aria-labelledby="about-headline"
    >
      {/* Background ornaments */}
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
        {/* Top left circuit */}
        <svg className="absolute top-20 left-20 w-32 h-32" viewBox="0 0 100 100" style={{ opacity: 0.3 }}>
          <circle cx="50" cy="50" r="45" fill="none" stroke={goldColor} strokeWidth="1" strokeDasharray="8 4" />
          <circle cx="50" cy="50" r="30" fill="none" stroke={goldColor} strokeWidth="0.5" />
          <circle cx="50" cy="50" r="12" fill={goldColor} opacity="0.2" />
        </svg>
        {/* Bottom right neural */}
        <svg className="absolute bottom-20 right-20 w-40 h-40" viewBox="0 0 120 120" style={{ opacity: 0.25 }}>
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
          className="mb-16"
          style={{
            opacity: 1,
            transform: "translateY(0)",
            transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <div className="flex items-center gap-4 mb-6" style={{ justifyContent: isRtl ? "flex-end" : "flex-start" }}>
            <span className="font-sans font-medium tracking-widest uppercase text-sm caption-gold" style={{ letterSpacing: "0.12em" }}>
              {content.headline}
            </span>
            <div className="w-20 h-px gold-divider-short" />
          </div>
          <h2 id="about-headline" className="section-headline" style={{ maxWidth: "800px" }}>
            {content.headline}
          </h2>
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Column 1: Lead + 3 Pillars (col-span-4) */}
          <div
            className="lg:col-span-4 space-y-8"
            style={{
              opacity: 1,
              transform: "translateY(0)",
              transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 100ms",
            }}
          >
            <div className="space-y-6">
              <p className="body-lg" style={{ color: textSecondary }}>{content.lead}</p>
              
              {/* Gold divider */}
              <div className="gold-divider-short" style={{ backgroundColor: lineGold }} />
            </div>

            {/* Three Pillars */}
            <div className="space-y-6">
              {content.pillars.map((pillar, index) => (
                <div
                  key={pillar.title}
                  className="group card-master p-6"
                  style={{
                    opacity: 1,
                    transform: "translateY(0)",
                    transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${200 + index * 100}ms`,
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200"
                      style={{
                        backgroundColor: `rgba(190, 148, 63, 0.1)`,
                        border: `1px solid ${lineGold}`,
                      }}
                    >
                      {pillarIcons[pillar.icon as keyof typeof pillarIcons]}
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <h3 className="font-display font-semibold text-lg tracking-tight mb-2" style={{ color: textPrimary }}>
                        {pillar.title}
                      </h3>
                      <p className="body" style={{ color: textSecondary }}>{pillar.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Timeline (col-span-4) */}
          <div
            className="lg:col-span-4 relative"
            style={{
              opacity: 1,
              transform: "translateY(0)",
              transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 200ms",
            }}
          >
            {/* Vertical timeline line */}
            <div className="absolute top-0 bottom-0 left-1/2 w-px" style={{
              background: `linear-gradient(to bottom, ${lineGold} 0%, ${lineColor} 50%, ${lineGold} 100%)`,
              transform: "translateX(-50%)",
            }} aria-hidden="true" />

            <div className="space-y-10 relative">
              {content.timeline.map((item, index) => (
                <div key={item.year} className="relative">
                  {/* Timeline circle */}
                  <div
                    className="absolute left-1/2 top-0 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center z-10 transition-all duration-300"
                    style={{
                      backgroundColor: surfaceColor,
                      border: `2px solid ${lineGold}`,
                      boxShadow: `0 0 0 4px ${bgColor}`,
                    }}
                  >
                    <div className="w-3 h-3 rounded-full transition-all duration-300 group-hover:scale-150" style={{ backgroundColor: lineGold }} />
                  </div>

                  {/* Timeline content - alternating sides */}
                  <div
                    className={cn(
                      "w-[calc(50%-24px)] px-4",
                      index % 2 === 0 ? (isRtl ? "text-right" : "text-left") : (isRtl ? "text-left" : "text-right"),
                      index % 2 === 0 ? (isRtl ? "mr-auto" : "ml-auto") : (isRtl ? "ml-auto" : "mr-auto")
                    )}
                  >
                    <span className="font-mono font-semibold text-sm caption-gold" style={{ letterSpacing: "0.08em" }}>
                      {item.year}
                    </span>
                    <h3 className="font-display font-semibold text-lg mt-1" style={{ color: textPrimary }}>
                      {item.title}
                    </h3>
                    <p className="text-sm mt-1" style={{ color: textMuted }}>{item.org}</p>
                    <p className="body text-sm mt-2" style={{ color: textSecondary }}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Quote + Yemen Image (col-span-4) */}
          <div
            className="lg:col-span-4 space-y-8"
            style={{
              opacity: 1,
              transform: "translateY(0)",
              transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 300ms",
            }}
          >
            {/* Quote Card */}
            <div className="card-master p-8 relative" style={{ borderColor: lineGold }}>
              {/* Quote mark ornament */}
              <svg className="absolute top-6 right-6 w-12 h-12" viewBox="0 0 48 48" aria-hidden="true" style={{ opacity: 0.15 }}>
                <path d="M12 20c0-6.6 5.4-12 12-12s12 5.4 12 12" stroke={goldColor} strokeWidth="3" fill="none" />
                <path d="M36 20c0-6.6 5.4-12 12-12s12 5.4 12 12" stroke={goldColor} strokeWidth="3" fill="none" />
              </svg>

              <blockquote className="relative z-10">
                <p className="font-display font-medium text-xl lg:text-2xl leading-relaxed" style={{ color: textPrimary, lineHeight: 1.5 }}>
                  {content.quote}
                </p>
                <footer className="mt-6 flex items-center gap-3">
                  <div className="w-16 h-px" style={{ backgroundColor: lineGold }} />
                  <cite className="font-sans font-medium text-sm" style={{ color: textMuted }}>
                    {content.quoteAuthor}
                  </cite>
                </footer>
              </blockquote>
            </div>

            {/* Yemen Image with Mask */}
            <div className="relative" style={{ aspectRatio: "4/3" }}>
              <div
                className="absolute inset-0 rounded-xl overflow-hidden"
                style={{
                  maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
                  border: `1px solid ${lineColor}`,
                }}
                aria-hidden="true"
              >
                <Image
                  src="/images/optimized/showcase/shibam-skyline-800w.webp"
                  alt={content.yemenImageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover filter contrast-[1.05]"
                />
                
                {/* Subtle gold overlay tint */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${goldColor}15 0%, transparent 60%)`,
                  }}
                />

                {/* Gold accent corners */}
                <div className="absolute -top-1 -left-1 w-20 h-20 pointer-events-none" style={{
                  borderTop: `2px solid ${goldColor}`,
                  borderLeft: `2px solid ${goldColor}`,
                  borderRadius: "16px 0 0 0",
                  opacity: 0.5,
                }} />
                <div className="absolute -bottom-1 -right-1 w-20 h-20 pointer-events-none" style={{
                  borderBottom: `2px solid ${goldColor}`,
                  borderRight: `2px solid ${goldColor}`,
                  borderRadius: "0 0 0 16px",
                  opacity: 0.4,
                }} />
              </div>
            </div>
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