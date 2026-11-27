"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface AbdulghaniMethodSectionProps {
  locale: "en" | "ar";
}

export function AbdulghaniMethodSection({ locale }: AbdulghaniMethodSectionProps) {
  const isRtl = locale === "ar";
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const content = {
    en: {
      headline: "THE ABDULGHANI METHOD",
      subheadline: "A systematic approach to building autonomous systems that scale. Seven phases. Zero compromise.",
      steps: [
        {
          number: "01",
          title: "PROBLEM",
          description: "Define the true constraint. Not symptoms — the fundamental bottleneck. Measure it. Write it down. Get consensus.",
        },
        {
          number: "02",
          title: "UNDERSTAND",
          description: "Map the system boundary. Identify every actor, data flow, and failure mode. Build the mental model before writing code.",
        },
        {
          number: "03",
          title: "ARCHITECT",
          description: "Choose the right abstraction. State machine? Actor? Event log? Pipeline? The architecture must match the problem topology.",
        },
        {
          number: "04",
          title: "BUILD",
          description: "Write the thinnest slice that proves the architecture. Observability first. Tests as documentation. No premature optimization.",
        },
        {
          number: "05",
          title: "VERIFY",
          description: "Chaos test it. Load test it. Formal verify critical paths. If it hasn't failed in staging, it's not ready for production.",
        },
        {
          number: "06",
          title: "DEPLOY",
          description: "Blue-green. Canary. Feature flags. Rollback in <30 seconds. Zero-downtime is not optional — it's the baseline.",
        },
        {
          number: "07",
          title: "EVOLVE",
          description: "Measure everything. Learn from production. Refactor ruthlessly. The system that doesn't evolve becomes legacy.",
        },
      ],
      waveAlt: "The Abdulghani Method — Continuous Evolution",
    },
    ar: {
      headline: "منهجية عبدالغني",
      subheadline: "نهج منهجي لبناء أنظمة مستقلة تتحمل. سبع مراحل. صفر مساومة.",
      steps: [
        {
          number: "٠١",
          title: "المشكلة",
          description: "حدد القيد الحقيقي. ليس الأعراض — عنق الزجاجة الأساسي. قِسْه. اكتبه. احصل على إجماع.",
        },
        {
          number: "٠٢",
          title: "الفهم",
          description: "ارسم حدود النظام. حدد كل ممثل، تدفق بيانات، ووضع فشل. ابنِ النموذج الذهني قبل كتابة الكود.",
        },
        {
          number: "٠٣",
          title: "المعمارية",
          description: "اختر التجريد الصحيح. آلة حالة؟ ممثل؟ سجل أحداث؟ خط أنابيب؟ يجب أن تطابق المعمارية طوبولوجيا المشكلة.",
        },
        {
          number: "٠٤",
          title: "البناء",
          description: "اكتب أنحف شريحة تثبت المعمارية. قابلية المراقبة أولاً. الاختبارات كتوثيق. لا تحسين مبكر.",
        },
        {
          number: "٠٥",
          title: "التحقق",
          description: "اختبره بالفوضى. اختبره بالحمل. تحقق رسمي من المسارات الحرجة. إذا لم يفشل في التدريج، فهو غير جاهز للإنتاج.",
        },
        {
          number: "٠٦",
          title: "النشر",
          description: "أزرق-أخضر. كناري. أعلام ميزات. تراجع في أقل من ٣٠ ثانية. صفر توقف ليس اختياريًا — هو خط الأساس.",
        },
        {
          number: "٠٧",
          title: "التطور",
          description: "قِسْ كل شيء. تعلَّم من الإنتاج. أعد هيكلة بلا رحمة. النظام الذي لا يتطور يصبح إرثًا.",
        },
      ],
      waveAlt: "منهجية عبدالغني — التطور المستمر",
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
      id="method"
      className="section-master relative overflow-hidden"
      style={{
        minHeight: "580px",
        backgroundColor: bgColor,
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
      aria-labelledby="method-headline"
    >
      {/* Wavy Gold Background SVG */}
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
        <svg className="absolute bottom-0 left-0 w-full h-[200px]" viewBox="0 0 1440 200" preserveAspectRatio="none" style={{ opacity: 0.15 }}>
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={goldColor} stopOpacity="0" />
              <stop offset="50%" stopColor={goldColor} stopOpacity="1" />
              <stop offset="100%" stopColor={goldColor} stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,100 C200,200 400,0 600,100 C800,200 1000,0 1200,100 C1400,200 1440,100 1440,100 L1440,200 L0,200 Z"
            fill="url(#waveGradient)"
          />
          <path
            d="M0,120 C250,50 500,150 750,80 C1000,10 1250,140 1440,110 L1440,200 L0,200 Z"
            fill={goldColor}
            opacity="0.08"
          />
        </svg>

        {/* Additional ornaments */}
        <svg className="absolute top-20 left-20 w-32 h-32" viewBox="0 0 100 100" style={{ opacity: 0.2 }}>
          <circle cx="50" cy="50" r="45" fill="none" stroke={goldColor} strokeWidth="1" strokeDasharray="8 4" />
          <circle cx="50" cy="50" r="30" fill="none" stroke={goldColor} strokeWidth="0.5" />
        </svg>
        <svg className="absolute top-1/2 right-20 w-40 h-40" viewBox="0 0 120 120" style={{ opacity: 0.15 }}>
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
          <h2 id="method-headline" className="section-headline mx-auto mb-4" style={{ maxWidth: "800px" }}>
            {content.headline}
          </h2>
          <p className="body-lg mx-auto" style={{ maxWidth: "700px", color: textSecondary }}>
            {content.subheadline}
          </p>
        </div>

        {/* Horizontal Steps with 76px circles and gold connectors */}
        <div
          className="relative"
          role="list"
          aria-label={locale === "ar" ? "خطوات المنهجية" : "Method steps"}
          style={{
            opacity: 1,
            transform: "translateY(0)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 200ms",
          }}
        >
          {/* Gold connector line running through centers of circles */}
          <div
            className="absolute top-0 bottom-0 left-0 right-0 pointer-events-none"
            aria-hidden="true"
          >
            <svg className="w-full h-full" viewBox="0 0 1264 200" preserveAspectRatio="none">
              <defs>
                <linearGradient id="connectorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor={goldColor} stopOpacity="0.3" />
                  <stop offset="50%" stopColor={goldColor} stopOpacity="0.8" />
                  <stop offset="100%" stopColor={goldColor} stopOpacity="0.3" />
                </linearGradient>
              </defs>
              {/* Main horizontal line */}
              <line
                x1="38"
                y1="100"
                x2="1226"
                y2="100"
                stroke="url(#connectorGradient)"
                strokeWidth="2"
                strokeDasharray="8 4"
              />
              {/* Pulse animation on line */}
              <line
                x1="38"
                y1="100"
                x2="1226"
                y2="100"
                stroke={goldColor}
                strokeWidth="1"
                strokeDasharray="200 400"
                opacity="0.4"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="-600"
                  dur="8s"
                  repeatCount="indefinite"
                />
              </line>
            </svg>
          </div>

          {/* Steps Container */}
          <div className="flex flex-nowrap gap-0 pb-20 overflow-x-auto scrollbar-hide pb-4" style={{ 
            WebkitOverflowScrolling: "touch",
            scrollSnapType: "x mandatory",
          }}>
            {content.steps.map((step, index) => (
              <article
                key={step.number}
                role="listitem"
                className="flex-shrink-0 w-[calc(100%/3)] lg:w-[calc(100%/7)] px-4 snap-center"
                style={{
                  opacity: 1,
                  transform: "translateY(0)",
                  transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${300 + index * 100}ms`,
                }}
              >
                <div className="flex flex-col items-center">
                  {/* Step Circle - 76px diameter */}
                  <div
                    className="relative w-19 h-19 lg:w-19 lg:h-19 rounded-full flex items-center justify-center flex-shrink-0 z-10"
                    style={{
                      backgroundColor: surfaceColor,
                      border: `3px solid ${lineGold}`,
                      boxShadow: `0 0 0 4px ${bgColor}, 0 0 0 7px ${lineGold}40`,
                    }}
                  >
                    <span className="font-mono font-bold text-lg" style={{ color: goldColor }}>
                      {step.number}
                    </span>
                    
                    {/* Pulse ring on hover */}
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{
                        border: `2px solid ${goldColor}`,
                        opacity: 0,
                        transform: "scale(1)",
                        transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Step Content */}
                  <div className="mt-6 text-center px-2 w-full" style={{ minWidth: "180px" }}>
                    <h3 className="font-display font-semibold text-base lg:text-lg tracking-tight mb-3" style={{ color: textPrimary }}>
                      {step.title}
                    </h3>
                    <p className="body text-sm leading-relaxed" style={{ color: textSecondary }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Scroll hint for mobile */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-2 text-center py-4 pointer-events-none" style={{ opacity: 0.6 }}>
            <svg className="w-5 h-5 animate-bounce" viewBox="0 0 24 24" fill="none" stroke={goldColor} strokeWidth="2" aria-hidden="true">
              <path d="M12 5h.01M12 12h.01M12 19h.01" />
            </svg>
            <span className="font-mono text-xs text-muted">{locale === "en" ? "SCROLL FOR MORE" : "اسحب للمزيد"}</span>
          </div>
        </div>
      </div>

      {/* Gold divider at bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1440px] h-px pointer-events-none" aria-hidden="true">
        <div className="w-full h-full" style={{ background: `linear-gradient(90deg, transparent 0%, ${lineGold} 50%, transparent 100%)`, opacity: 0.4 }} />
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}