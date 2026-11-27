"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface CaseStudyYusraSectionProps {
  locale: "en" | "ar";
}

export function CaseStudyYusraSection({ locale }: CaseStudyYusraSectionProps) {
  const isRtl = locale === "ar";
  const [isVisible, setIsVisible] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [activeScreen, setActiveScreen] = useState(0);

  useEffect(() => {
    const root = document.documentElement;
    const checkTheme = () => setTheme(root.classList.contains("dark") ? "dark" : "light");
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    const el = document.getElementById("yusra");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const content = {
    en: {
      headline: "CASE STUDY — YUSRA HEALTH",
      subheadline: "Transforming healthcare delivery in Yemen through AI-powered clinical decision support and integrated hospital management.",
      problem: {
        title: "PROBLEM",
        items: [
          "Fragmented paper-based records across 12 hospitals",
          "Average diagnosis time: 45 minutes per patient",
          "No interoperability — 60% duplicate tests",
          "Critical specialist shortage in rural facilities",
          "Zero real-time visibility into bed capacity or drug inventory",
        ],
      },
      solution: {
        title: "SOLUTION",
        items: [
          "Multi-agent clinical decision support (CDS) reducing diagnosis to 2.3 seconds",
          "FHIR R4 compliant unified patient record across all facilities",
          "Predictive bed management and drug inventory optimization",
          "Telemedicine bridge connecting rural clinics to specialists in Sana'a",
          "Offline-first PWA for areas with intermittent connectivity",
        ],
      },
      architecture: {
        title: "ARCHITECTURE",
        items: [
          "Event-driven microservices (.NET 8, Azure Kubernetes Service)",
          "Agent orchestration layer: 12 specialized clinical agents",
          "Event sourcing + CQRS for audit trail and replay",
          "PostgreSQL + Redis + Azure Cosmos DB (multi-model)",
          "SignalR for real-time clinical collaboration",
        ],
      },
      implementation: {
        title: "IMPLEMENTATION",
        items: [
          "6-month phased rollout across 12 hospitals",
          "Zero-downtime migration from legacy MUMPS systems",
          "Clinician training program: 400+ staff certified",
          "HIPAA/GDPR compliance with Yemen data sovereignty",
          "Chaos engineering: monthly game days, 99.99% resilience",
        ],
      },
      outcome: {
        title: "OUTCOME",
        items: [
          "Diagnosis latency: 45min → 2.3sec (99.9% improvement)",
          "Duplicate tests eliminated: 60% → <2%",
          "Patient throughput: +340% without new hires",
          "Specialist access: 100% rural coverage via telemedicine",
          "Cost per encounter: -42% operational savings",
        ],
      },
      screens: [
        { id: 1, title: "Clinical Dashboard", description: "Real-time patient vitals, AI recommendations, and care team coordination", image: "/images/projects/yusra-health/screen-1.webp" },
        { id: 2, title: "Agent Orchestration View", description: "Multi-agent reasoning trace with confidence scores and evidence citations", image: "/images/projects/yusra-health/screen-2.webp" },
        { id: 3, title: "FHIR Resource Explorer", description: "Interactive FHIR R4 resource graph with version history and provenance", image: "/images/projects/yusra-health/screen-3.webp" },
        { id: 4, title: "Predictive Bed Management", description: "ML-powered occupancy forecasting with discharge planning optimization", image: "/images/projects/yusra-health/screen-4.webp" },
        { id: 5, title: "Telemedicine Consultation", description: "Low-bandwidth video with real-time translation and annotation overlay", image: "/images/projects/yusra-health/screen-5.webp" },
      ],
      features: [
        { title: "Multi-Agent CDS", description: "12 specialized clinical agents (triage, diagnosis, drug interaction, pathway, referral) with consensus voting", icon: "brain" },
        { title: "FHIR R4 Native", description: "Full FHIR R4 compliance with SMART on FHIR authorization. Interoperable with Epic, Cerner, OpenMRS", icon: "database" },
        { title: "Offline-First PWA", description: "Service worker + IndexedDB for full functionality in disconnected environments. Background sync on reconnect", icon: "wifi" },
        { title: "Real-Time Collaboration", description: "SignalR-powered multi-disciplinary team huddles with shared context and audit trail", icon: "users" },
        { title: "Predictive Analytics", description: "Bed occupancy, drug demand, readmission risk, and length-of-stay forecasting", icon: "chart" },
        { title: "Audit & Compliance", description: "Immutable event-sourced audit log. HIPAA, GDPR, Yemen Health Authority compliant", icon: "shield" },
      ],
      systemFlow: {
        title: "SYSTEM FLOW",
        description: "Patient admission → Triage agent → Specialist agents (parallel) → Consensus → Treatment plan → Execution monitoring → Outcome learning loop",
        image: "/images/projects/yusra-health/system-flow.webp",
      },
    },
    ar: {
      headline: "دراسة حالة — صحة يسرى",
      subheadline: "تحويل تقديم الرعاية الصحية في اليمن من خلال دعم قراري سريري مدعوم بالذكاء الاصطناعي وإدارة مستشفيات متكاملة.",
      problem: {
        title: "المشكلة",
        items: [
          "سجلات ورقية مجزأة عبر ١٢ مستشفى",
          "متوسط وقت التشخيص: ٤٥ دقيقة لكل مريض",
          "لا توجد قابلية تشغيل متبادل — ٦٠٪ فحوصات مكررة",
          "نقص حاد في الأخصائيين في المرافق الريفية",
          "صفر رؤية فورية لسعة الأسرة أو مخزون الأدوية",
        ],
      },
      solution: {
        title: "الحل",
        items: [
          "دعم قراري سريري متعدد الوكلاء يقلل التشخيص إلى ٢.٣ ثانية",
          "سجل مريض موحد متوافق مع FHIR R4 عبر جميع المرافق",
          "إدارة أسرة تنبؤية وتحسين مخزون الأدوية",
          "جسر طب عن بعد يربط العيادات الريفية بأخصائيين في صنعاء",
          "PWA يعمل دون اتصال أولاً للمناطق ذات الاتصال المتقطع",
        ],
      },
      architecture: {
        title: "المعمارية",
        items: [
          "خدمات صغرى موجهة بالأحداث (.NET 8، Azure Kubernetes Service)",
          "طبقة تنسيق الوكلاء: ١٢ وكيل سريري متخصص",
          "مصادر أحداث + CQRS لمسار تدقيق وإعادة تشغيل",
          "PostgreSQL + Redis + Azure Cosmos DB (متعدد النماذج)",
          "SignalR للتعاون السريري الفوري",
        ],
      },
      implementation: {
        title: "التنفيذ",
        items: [
          "نشر مرحلي لمدة ٦ أشهر عبر ١٢ مستشفى",
          "هجرة دون توقف من أنظمة MUMPS القديمة",
          "برنامج تدريب أطباء: ٤٠٠+ موظف معتمد",
          "امتثال HIPAA/GDPR مع سيادة بيانات اليمن",
          "هندسة الفوضى: أيام لعب شهرية، مرونة ٩٩.٩٩٪",
        ],
      },
      outcome: {
        title: "النتيجة",
        items: [
          "كمون التشخيص: ٤٥د → ٢.٣ث (تحسين ٩٩.٩٪)",
          "الفحوصات المكررة مُلغاة: ٦٠٪ → <٢٪",
          "إنتاجية المرضى: +٣٤٠٪ دون موظفين جدد",
          "وصول الأخصائيين: ١٠٠٪ تغطية ريفية عبر الطب عن بعد",
          "تكلفة كل مقابلة: -٤٢٪ توفير تشغيلي",
        ],
      },
      screens: [
        { id: 1, title: "لوحة التحكم السريرية", description: "علامات حيوية فورية، توصيات الذكاء الاصطناعي، وتنسيق فريق الرعاية", image: "/images/projects/yusra-health/screen-1.webp" },
        { id: 2, title: "عرض تنسيق الوكلاء", description: "تتبع استدلال متعدد الوكلاء مع درجات ثقة واستشهادات أدلة", image: "/images/projects/yusra-health/screen-2.webp" },
        { id: 3, title: "مستكشف موارد FHIR", description: "مخطط موارد FHIR R4 تفاعلي مع تاريخ إصدارات وأصل", image: "/images/projects/yusra-health/screen-3.webp" },
        { id: 4, title: "إدارة الأسرة التنبؤية", description: "تنبؤ إشغال مدعوم بـ ML مع تحسين تخطيط الخروج", image: "/images/projects/yusra-health/screen-4.webp" },
        { id: 5, title: "استشارة طب عن بعد", description: "فيديو منخفض النطاق مع ترجمة فورية وتراكب تعليقات", image: "/images/projects/yusra-health/screen-5.webp" },
      ],
      features: [
        { title: "دعم قراري سريري متعدد الوكلاء", description: "١٢ وكيل سريري متخصص (فرز، تشخيص، تفاعل دوائي، مسار، إحالة) مع تصويت إجماع", icon: "brain" },
        { title: "FHIR R4 أصلي", description: "امتثال كامل لـ FHIR R4 مع تفويض SMART on FHIR. قابل للتشغيل المتبادل مع Epic، Cerner، OpenMRS", icon: "database" },
        { title: "PWA يعمل دون اتصال أولاً", description: "عامل خدمة + IndexedDB لوظيفة كاملة في بيئات منفصلة. مزامنة خلفية عند إعادة الاتصال", icon: "wifi" },
        { title: "تعاون فوري", description: "اجتماعات فريق متعدد التخصصات مدعومة بـ SignalR مع سياق مشترك ومسار تدقيق", icon: "users" },
        { title: "تحليلات تنبؤية", description: "تنبؤ إشغال الأسرة، طلب الأدوية، خطر إعادة الدخول، ومدة الإقامة", icon: "chart" },
        { title: "تدقيق وامتثال", description: "سجل تدقيق مبني على مصادر أحداث غير قابل للتغيير. متوافق مع HIPAA، GDPR، هيئة الصحة اليمنية", icon: "shield" },
      ],
      systemFlow: {
        title: "تدفق النظام",
        description: "قبول المريض → وكيل الفرز → الوكلاء الأخصائيون (متوازي) → إجماع → خطة علاج → مراقبة التنفيذ → حلقة تعلم النتائج",
        image: "/images/projects/yusra-health/system-flow.webp",
      },
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

  // SVG Icons for features
  const featureIcons = {
    brain: (
      <svg viewBox="0 0 48 48" fill="none" stroke={goldColor} strokeWidth="1.5" aria-hidden="true">
        <path d="M12 24c0-6.6 5.4-12 12-12s12 5.4 12 12-5.4 12-12 12" />
        <path d="M36 24c0 6.6-5.4 12-12 12s-12-5.4-12-12 5.4-12 12-12" />
        <path d="M24 12v24M12 24h24" strokeWidth="1" strokeDasharray="4 4" />
      </svg>
    ),
    database: (
      <svg viewBox="0 0 48 48" fill="none" stroke={goldColor} strokeWidth="1.5" aria-hidden="true">
        <ellipse cx="24" cy="14" rx="18" ry="6" />
        <path d="M6 14v20M42 14v20" />
        <ellipse cx="24" cy="34" rx="18" ry="6" />
        <path d="M24 8v6" strokeDasharray="4 4" />
      </svg>
    ),
    wifi: (
      <svg viewBox="0 0 48 48" fill="none" stroke={goldColor} strokeWidth="1.5" aria-hidden="true">
        <path d="M8 32c0-10 8-14 16-14s16 4 16 14" />
        <path d="M14 32c0-6 6-8 10-8s10 2 10 8" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="24" cy="32" r="3" fill={goldColor} />
      </svg>
    ),
    users: (
      <svg viewBox="0 0 48 48" fill="none" stroke={goldColor} strokeWidth="1.5" aria-hidden="true">
        <circle cx="16" cy="18" r="6" />
        <circle cx="32" cy="18" r="6" />
        <path d="M8 40c0-7 6-10 16-10s16 3 16 10" />
        <path d="M24 18v22" strokeDasharray="4 4" />
      </svg>
    ),
    chart: (
      <svg viewBox="0 0 48 48" fill="none" stroke={goldColor} strokeWidth="1.5" aria-hidden="true">
        <path d="M8 40h32M8 40v-32" />
        <path d="M8 36l6-10 6 6 8-12 10 16" />
        <circle cx="14" cy="26" r="3" fill={goldColor} />
        <circle cx="26" cy="32" r="3" fill={goldColor} />
        <circle cx="40" cy="20" r="3" fill={goldColor} />
      </svg>
    ),
    shield: (
      <svg viewBox="0 0 48 48" fill="none" stroke={goldColor} strokeWidth="1.5" aria-hidden="true">
        <path d="M24 4L6 10v28c0 10 18 16 18 16s18-6 18-16V10L24 4z" />
        <path d="M24 14v14M16 24h16" strokeWidth="1" strokeDasharray="4 4" />
      </svg>
    ),
  };

  const columns = [
    content.problem,
    content.solution,
    content.architecture,
    content.implementation,
    content.outcome,
  ];

  return (
    <section
      id="yusra"
      className="section-master relative"
      style={{
        minHeight: "950px",
        backgroundColor: bgColor,
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
      aria-labelledby="yusra-headline"
    >
      {/* Background - dark theme with subtle gold radial */}
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full"
          style={{
            background: theme === "dark"
              ? "radial-gradient(ellipse at center, rgba(217, 181, 103, 0.05) 0%, transparent 60%)"
              : "radial-gradient(ellipse at center, rgba(190, 148, 63, 0.04) 0%, transparent 60%)",
          }}
        />
        {/* Ornaments */}
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
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <span className="font-sans font-medium tracking-widest uppercase text-sm caption-gold inline-block mb-4" style={{ letterSpacing: "0.12em" }}>
            {content.headline}
          </span>
          <h2 id="yusra-headline" className="section-headline mx-auto mb-4" style={{ maxWidth: "800px" }}>
            {content.headline}
          </h2>
          <p className="body-lg mx-auto" style={{ maxWidth: "700px", color: textSecondary }}>
            {content.subheadline}
          </p>
        </div>

        {/* Top Row: 5 Columns (Problem, Solution, Architecture, Implementation, Outcome) */}
        <div
          className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-6 mb-12 lg:mb-16"
          role="list"
          aria-label={locale === "ar" ? "مراحل دراسة الحالة" : "Case study phases"}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 100ms",
          }}
        >
          {columns.map((column, colIndex) => (
            <article
              key={column.title}
              role="listitem"
              className="card-master h-full flex flex-col"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${200 + colIndex * 80}ms`,
              }}
            >
              {/* Gold top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ background: `linear-gradient(90deg, transparent 0%, ${lineGold} 50%, transparent 100%)`, opacity: 0.6 }}
                aria-hidden="true"
              />

              <div className="p-6 flex flex-col h-full">
                {/* Column Header */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono font-semibold text-sm caption-gold" style={{ letterSpacing: "0.08em" }}>
                    {String(colIndex + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display font-semibold text-lg tracking-tight" style={{ color: textPrimary }}>
                    {column.title}
                  </h3>
                </div>

                {/* Gold divider */}
                <div className="w-16 h-px mb-4 gold-divider-short" style={{ backgroundColor: lineGold }} />

                {/* Items List */}
                <ul className="space-y-3 flex-1" style={{ listStyle: "none", padding: 0 }}>
                  {column.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-3 group"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? "translateX(0)" : (isRtl ? "translateX(20px)" : "translateX(-20px)"),
                        transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${300 + colIndex * 80 + itemIndex * 50}ms`,
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 mt-2 flex-shrink-0 rounded-full transition-all duration-200 group-hover:scale-150"
                        style={{ backgroundColor: goldColor }}
                        aria-hidden="true"
                      />
                      <span className="body text-sm" style={{ color: textSecondary, lineHeight: 1.6 }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Row: 3 Columns (Screens, Features, System Flow) */}
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8"
          role="list"
          aria-label={locale === "ar" ? "تفاصيل دراسة الحالة" : "Case study details"}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 300ms",
          }}
        >
          {/* Column 1: Screens Carousel */}
          <article role="listitem" className="lg:col-span-1 card-master relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(90deg, transparent 0%, ${lineGold} 50%, transparent 100%)`, opacity: 0.6 }} aria-hidden="true" />
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display font-semibold text-lg tracking-tight" style={{ color: textPrimary }}>
                  {locale === "en" ? "APPLICATION SCREENS" : "شاشات التطبيق"}
                </h3>
                <span className="font-mono text-xs text-muted">{String(activeScreen + 1).padStart(2, "0")} / 05</span>
              </div>

              {/* Screen Display */}
              <div className="relative mb-6" style={{ aspectRatio: "16/10", borderRadius: "8px", overflow: "hidden" }}>
                <div className="absolute inset-0" style={{
                  background: `linear-gradient(145deg, ${theme === "dark" ? "#1A1A1C" : "#E8E4DD"} 0%, ${theme === "dark" ? "#121213" : "#FAF8F3"} 100%)`,
                  border: `1px solid ${lineColor}`,
                }} />
                
                {/* Screen content placeholder */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center" style={{ opacity: 0.3 }}>
                  <svg className="w-20 h-20 mb-4" viewBox="0 0 48 48" fill="none" stroke={goldColor} strokeWidth="1.5" aria-hidden="true">
                    <rect x="4" y="4" width="40" height="30" rx="3" />
                    <path d="M12 14h24M12 20h18M12 26h24" strokeWidth="1" />
                  </svg>
                  <p className="font-mono text-xs text-muted mb-1">
                    {content.screens[activeScreen].image}
                  </p>
                  <p className="font-display font-semibold text-lg" style={{ color: textPrimary }}>
                    {content.screens[activeScreen].title}
                  </p>
                </div>

                {/* Gold corner accents */}
                <div className="absolute top-0 left-0 w-12 h-12 pointer-events-none" style={{ borderTop: `2px solid ${goldColor}`, borderLeft: `2px solid ${goldColor}`, opacity: 0.4 }} />
                <div className="absolute bottom-0 right-0 w-12 h-12 pointer-events-none" style={{ borderBottom: `2px solid ${goldColor}`, borderRight: `2px solid ${goldColor}`, opacity: 0.3 }} />
              </div>

              {/* Screen Description */}
              <p className="body text-sm mb-6" style={{ color: textSecondary }}>
                {content.screens[activeScreen].description}
              </p>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setActiveScreen((prev) => (prev === 0 ? content.screens.length - 1 : prev - 1))}
                  className="btn-ghost text-sm px-4 py-2"
                  aria-label={locale === "ar" ? "السابق" : "Previous"}
                >
                  <svg className="w-4 h-4 rtl-flip" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>

                <div className="flex items-center gap-2" role="tablist" aria-label="Screen navigation">
                  {content.screens.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveScreen(index)}
                      role="tab"
                      aria-selected={index === activeScreen}
                      aria-label={`${locale === "en" ? "Screen" : "شاشة"} ${index + 1}`}
                      className="w-2.5 h-2.5 rounded-full transition-all duration-200"
                      style={{
                        backgroundColor: index === activeScreen ? goldColor : lineColor,
                        transform: index === activeScreen ? "scale(1.3)" : "scale(1)",
                      }}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setActiveScreen((prev) => (prev === content.screens.length - 1 ? 0 : prev + 1))}
                  className="btn-ghost text-sm px-4 py-2"
                  aria-label={locale === "ar" ? "التالي" : "Next"}
                >
                  <svg className="w-4 h-4 rtl-flip" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>
          </article>

          {/* Column 2: Key Features (2x3 grid) */}
          <article role="listitem" className="lg:col-span-1 card-master">
            <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(90deg, transparent 0%, ${lineGold} 50%, transparent 100%)`, opacity: 0.6 }} aria-hidden="true" />
            
            <div className="p-6">
              <h3 className="font-display font-semibold text-lg tracking-tight mb-6" style={{ color: textPrimary }}>
                {locale === "en" ? "KEY FEATURES" : "الميزات الرئيسية"}
              </h3>

              <div className="grid grid-cols-2 gap-4" role="list">
                {content.features.map((feature, index) => (
                  <div
                    key={feature.title}
                    role="listitem"
                    className="group p-4 rounded-lg transition-all duration-200"
                    style={{
                      backgroundColor: `rgba(190, 148, 63, 0.05)`,
                      border: `1px solid ${lineColor}`,
                    }}
                    onMouseEnter={(e) => {
                      const target = e.currentTarget as HTMLElement;
                      target.style.borderColor = lineGold;
                      target.style.backgroundColor = `rgba(190, 148, 63, 0.1)`;
                    }}
                    onMouseLeave={(e) => {
                      const target = e.currentTarget as HTMLElement;
                      target.style.borderColor = lineColor;
                      target.style.backgroundColor = `rgba(190, 148, 63, 0.05)`;
                    }}
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-colors duration-200" style={{ backgroundColor: `rgba(190, 148, 63, 0.1)`, border: `1px solid ${lineGold}` }}>
                      {featureIcons[feature.icon as keyof typeof featureIcons]}
                    </div>
                    <h4 className="font-display font-medium text-sm mb-2" style={{ color: textPrimary }}>
                      {feature.title}
                    </h4>
                    <p className="text-xs" style={{ color: textMuted, lineHeight: 1.5 }}>
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* Column 3: System Flow Diagram */}
          <article role="listitem" className="lg:col-span-1 card-master relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(90deg, transparent 0%, ${lineGold} 50%, transparent 100%)`, opacity: 0.6 }} aria-hidden="true" />
            
            <div className="p-6">
              <h3 className="font-display font-semibold text-lg tracking-tight mb-6" style={{ color: textPrimary }}>
                {content.systemFlow.title}
              </h3>

              {/* System Flow Diagram */}
              <div className="relative" style={{ aspectRatio: "1/1", minHeight: "300px", borderRadius: "8px", overflow: "hidden" }}>
                <div className="absolute inset-0" style={{
                  background: `linear-gradient(145deg, ${theme === "dark" ? "#1A1A1C" : "#E8E4DD"} 0%, ${theme === "dark" ? "#121213" : "#FAF8F3"} 100%)`,
                  border: `1px solid ${lineColor}`,
                }} />

                {/* Flow Diagram SVG */}
                <svg className="absolute inset-0 p-8" viewBox="0 0 400 400" aria-label={locale === "ar" ? "مخطط تدفق النظام" : "System flow diagram"}>
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill={goldColor} />
                    </marker>
                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Background grid */}
                  <g stroke={lineColor} strokeWidth="0.5" opacity="0.3">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <React.Fragment key={i}>
                        <line x1={i * 20} y1="0" x2={i * 20} y2="400" />
                        <line x1="0" y1={i * 20} x2="400" y2={i * 20} />
                      </React.Fragment>
                    ))}
                  </g>

                  {/* Flow nodes data */}
                  {(() => {
                    const nodes = [
                      { x: 50, y: 200, label: locale === "en" ? "ADMISSION" : "القبول", color: goldColor },
                      { x: 150, y: 200, label: locale === "en" ? "TRIAGE" : "الفرز", color: goldColor },
                      { x: 250, y: 100, label: locale === "en" ? "DIAGNOSIS" : "التشخيص", color: goldColor },
                      { x: 250, y: 200, label: locale === "en" ? "DRUG CHECK" : "فحص الأدوية", color: goldColor },
                      { x: 250, y: 300, label: locale === "en" ? "PATHWAY" : "المسار", color: goldColor },
                      { x: 350, y: 200, label: locale === "en" ? "CONSENSUS" : "الإجماع", color: goldColor },
                    ];

                    return (
                      <React.Fragment>
                        {/* Connections */}
                        <g stroke={goldColor} strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" opacity="0.6">
                          <path d="M90 200 L110 200" />
                          <path d="M190 200 L210 130" />
                          <path d="M190 200 L210 200" />
                          <path d="M190 200 L210 270" />
                          <path d="M290 100 L310 160" />
                          <path d="M290 200 L310 200" />
                          <path d="M290 300 L310 240" />
                        </g>

                        {/* Nodes */}
                        {nodes.map((node, i) => (
                          <g key={i} filter="url(#glow)">
                            <circle cx={node.x} cy={node.y} r="35" fill={bgColor} stroke={node.color} strokeWidth="2" />
                            <circle cx={node.x} cy={node.y} r="20" fill={node.color} opacity="0.15" />
                            <text x={node.x} y={node.y + 5} textAnchor="middle" fontFamily="IBM Plex Sans" fontSize="10" fontWeight="600" fill={textPrimary} style={{ letterSpacing: "0.05em" }}>
                              {node.label}
                            </text>
                          </g>
                        ))}

                        {/* Learning loop arrow */}
                        <path
                          d="M370 200 Q400 200 400 300 Q400 380 300 380 Q200 380 200 300 Q200 200 230 200"
                          stroke={goldColor}
                          strokeWidth="2"
                          fill="none"
                          strokeDasharray="8 4"
                          opacity="0.4"
                          markerEnd="url(#arrowhead)"
                        />
                        <text x="380" y="280" textAnchor="middle" fontFamily="IBM Plex Sans" fontSize="9" fontWeight="500" fill={goldColor} style={{ letterSpacing: "0.05em" }}>
                          {locale === "en" ? "LEARNING LOOP" : "حلقة التعلم"}
                        </text>
                      </React.Fragment>
                    );
                  })()}
                </svg>

                {/* Gold corners */}
                <div className="absolute top-0 left-0 w-12 h-12 pointer-events-none" style={{ borderTop: `2px solid ${goldColor}`, borderLeft: `2px solid ${goldColor}`, opacity: 0.4 }} />
                <div className="absolute bottom-0 right-0 w-12 h-12 pointer-events-none" style={{ borderBottom: `2px solid ${goldColor}`, borderRight: `2px solid ${goldColor}`, opacity: 0.3 }} />
              </div>

              <p className="body text-sm mt-6" style={{ color: textSecondary }}>
                {content.systemFlow.description}
              </p>
            </div>
          </article>
        </div>
      </div>

      {/* Gold divider at bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1440px] h-px pointer-events-none" aria-hidden="true">
        <div className="w-full h-full" style={{ background: `linear-gradient(90deg, transparent 0%, ${lineGold} 50%, transparent 100%)`, opacity: 0.4 }} />
      </div>
    </section>
  );
}