"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface AILabSectionProps {
  locale: "en" | "ar";
}

export function AILabSection({ locale }: AILabSectionProps) {
  const isRtl = locale === "ar";
  const [isVisible, setIsVisible] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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
    const el = document.getElementById("ai-lab");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const content = {
    en: {
      headline: "AI LAB",
      subheadline: "Active research and production implementations in machine learning, computer vision, and autonomous agents.",
      cards: [
        {
          title: "MULTI-AGENT ORCHESTRATION",
          description: "Framework for coordinating 50+ autonomous agents with emergent behavior patterns. Implements consensus protocols, conflict resolution, and dynamic role assignment. Production-deployed in clinical decision support.",
          icon: "network",
        },
        {
          title: "DISTRIBUTED STATE MACHINES",
          description: "High-throughput state machine runtime processing 100K+ transitions/second. Optimistic concurrency, event sourcing, and saga-based compensation. Sub-millisecond p99 latency.",
          icon: "stateMachine",
        },
        {
          title: "COMPUTER VISION PIPELINES",
          description: "Real-time inference pipelines for medical imaging (DICOM), satellite imagery, and industrial inspection. ONNX Runtime, TensorRT optimization. 99.2% accuracy on validation sets.",
          icon: "vision",
        },
        {
          title: "REINFORCEMENT LEARNING OPS",
          description: "End-to-end RL training and deployment infrastructure. PPO, SAC algorithms with distributed experience replay. Automated hyperparameter tuning and safe policy rollout.",
          icon: "rl",
        },
        {
          title: "KNOWLEDGE GRAPHS & RAG",
          description: "Enterprise knowledge graphs with 2M+ entities. Hybrid vector-symbolic retrieval, GraphRAG for complex reasoning. Sub-100ms query latency at scale.",
          icon: "graph",
        },
        {
          title: "EDGE ML OPTIMIZATION",
          description: "Model quantization (INT4/INT8), distillation, and compilation for edge deployment. ARM NEON, Qualcomm Hexagon, NVIDIA Jetson. 10x compression with <1% accuracy drop.",
          icon: "edge",
        },
      ],
    },
    ar: {
      headline: "مختبر الذكاء الاصطناعي",
      subheadline: "أبحاث نشطة وتنفيذات إنتاجية في التعلم الآلي، والرؤية الحاسوبية، والوكلاء المستقلين.",
      cards: [
        {
          title: "تنسيق متعدد الوكلاء",
          description: "إطار لتنسيق ٥٠+ وكيل مستقل مع أنماط سلوك ناشئة. يطبق بروتوكولات الإجماع، حل النزاعات، وتوزيع الأدوار الديناميكي. منتشر إنتاجيًا في دعم القرار السريري.",
          icon: "network",
        },
        {
          title: "آلات الحالة الموزعة",
          description: "بيئة تشغيل آلة حالة عالية الإنتاجية تعالج ١٠٠ ألف+ انتقال/ثانية. تزامن تفاؤلي، مصادر أحداث، وتعويض قائم على ساجا. كمون p99 دون الميلي ثانية.",
          icon: "stateMachine",
        },
        {
          title: "خطوط أنابيب الرؤية الحاسوبية",
          description: "خطوط استنتاج فورية للتصوير الطبي (DICOM)، والصور الفضائية، والفحص الصناعي. ONNX Runtime، تحسين TensorRT. دقة ٩٩.٢٪ على مجموعات التحقق.",
          icon: "vision",
        },
        {
          title: "عمليات التعلم المعزز",
          description: "بنية تحتية شاملة لتدريب ونشر التعلم المعزز. خوارزميات PPO، SAC مع إعادة تجربة خبرة موزعة. ضبط فائق المعاملات آلي ونشر سياسة آمن.",
          icon: "rl",
        },
        {
          title: "مخططات المعرفة و RAG",
          description: "مخططات معرفة مؤسسية مع ٢ مليون+ كيان. استرجاع هجين متجه-رمزي، GraphRAG للاستدلال المعقد. كمون استعلام دون ١٠٠ ميلي ثانية عند المقياس.",
          icon: "graph",
        },
        {
          title: "تحسين التعلم الآلي للحافة",
          description: "كمية النموذج (INT4/INT8)، التقطير، والتجميع للنشر على الحافة. ARM NEON، Qualcomm Hexagon، NVIDIA Jetson. ضغط ١٠ أضعاف مع انخفاض دقة <١٪.",
          icon: "edge",
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

  // SVG Icons for each card
  const cardIcons = {
    network: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <circle cx="24" cy="12" r="4" />
        <circle cx="12" cy="28" r="4" />
        <circle cx="36" cy="28" r="4" />
        <circle cx="6" cy="42" r="4" />
        <circle cx="24" cy="42" r="4" />
        <circle cx="42" cy="42" r="4" />
        <line x1="24" y1="16" x2="12" y2="24" />
        <line x1="24" y1="16" x2="36" y2="24" />
        <line x1="12" y1="32" x2="6" y2="38" />
        <line x1="12" y1="32" x2="24" y2="38" />
        <line x1="36" y1="32" x2="24" y2="38" />
        <line x1="36" y1="32" x2="42" y2="38" />
        <line x1="24" y1="12" x2="24" y2="28" strokeDasharray="4 4" />
      </svg>
    ),
    stateMachine: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <circle cx="24" cy="24" r="20" strokeDasharray="8 4" />
        <circle cx="24" cy="24" r="12" />
        <path d="M24 8v8M24 32v8M8 24h8M32 24h8" />
        <circle cx="24" cy="24" r="4" fill="currentColor" />
      </svg>
    ),
    vision: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <ellipse cx="24" cy="24" rx="20" ry="14" />
        <ellipse cx="24" cy="24" rx="10" ry="7" />
        <circle cx="24" cy="24" r="3" fill="currentColor" />
        <path d="M4 24c0-11 9-14 20-14s20 3 20 14" strokeWidth="1" strokeDasharray="4 4" />
      </svg>
    ),
    rl: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M8 40c0-15 12-22 20-22s20 7 20 22" />
        <path d="M24 8v12M12 24h12M24 24h12" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="24" cy="24" r="4" fill="currentColor" />
        <path d="M34 30l4-4-4-4" />
      </svg>
    ),
    graph: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <circle cx="14" cy="14" r="4" />
        <circle cx="34" cy="14" r="4" />
        <circle cx="14" cy="34" r="4" />
        <circle cx="34" cy="34" r="4" />
        <circle cx="24" cy="24" r="5" fill="currentColor" />
        <line x1="18" y1="14" x2="22" y2="20" />
        <line x1="30" y1="14" x2="26" y2="20" />
        <line x1="18" y1="34" x2="22" y2="28" />
        <line x1="30" y1="34" x2="26" y2="28" />
        <line x1="14" y1="18" x2="20" y2="22" />
        <line x1="14" y1="30" x2="20" y2="26" />
        <line x1="34" y1="18" x2="28" y2="22" />
        <line x1="34" y1="30" x2="28" y2="26" />
      </svg>
    ),
    edge: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="8" y="12" width="32" height="24" rx="4" />
        <path d="M16 24h16M24 16v16" strokeWidth="1" strokeDasharray="4 4" />
        <path d="M40 24l6-6 6 6" />
        <circle cx="24" cy="24" r="3" fill="currentColor" />
      </svg>
    ),
  };

  return (
    <section
      id="ai-lab"
      className="section-master relative"
      style={{
        minHeight: "780px",
        backgroundColor: bgColor,
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
      aria-labelledby="ai-lab-headline"
    >
      {/* Background ornaments - dark theme uses subtle gold radial */}
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full"
          style={{
            background: theme === "dark"
              ? "radial-gradient(ellipse at center, rgba(217, 181, 103, 0.04) 0%, transparent 60%)"
              : "radial-gradient(ellipse at center, rgba(190, 148, 63, 0.03) 0%, transparent 60%)",
          }}
        />
        {/* Top left circuit */}
        <svg className="absolute top-20 left-20 w-32 h-32" viewBox="0 0 100 100" style={{ opacity: 0.2 }}>
          <circle cx="50" cy="50" r="45" fill="none" stroke={goldColor} strokeWidth="1" strokeDasharray="8 4" />
          <circle cx="50" cy="50" r="30" fill="none" stroke={goldColor} strokeWidth="0.5" />
        </svg>
        {/* Bottom right neural */}
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
          className="mb-16 text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <span className="font-sans font-medium tracking-widest uppercase text-sm caption-gold inline-block mb-6" style={{ letterSpacing: "0.12em" }}>
            {content.headline}
          </span>
          <h2 id="ai-lab-headline" className="section-headline mx-auto mb-4" style={{ maxWidth: "600px" }}>
            {content.headline}
          </h2>
          <p className="body-lg mx-auto" style={{ maxWidth: "700px", color: textSecondary }}>
            {content.subheadline}
          </p>
        </div>

        {/* 6-Card Grid: 2 cols on mobile, 3 on tablet, 3 on desktop */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          role="list"
          aria-label={locale === "ar" ? "بطاقات مختبر الذكاء الاصطناعي" : "AI Lab research areas"}
        >
          {content.cards.map((card, index) => (
            <article
              key={card.title}
              role="listitem"
              className="group card-master relative overflow-hidden"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: hoveredCard === index
                  ? "translateY(-8px)"
                  : isVisible
                  ? "translateY(0)"
                  : "translateY(20px)",
                transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 80}ms`,
                boxShadow: hoveredCard === index
                  ? (theme === "dark"
                      ? "0 0 0 1px rgba(217, 181, 103, 0.5), 0 20px 40px rgba(0, 0, 0, 0.4)"
                      : "0 0 0 1px rgba(190, 148, 63, 0.4), 0 20px 40px rgba(26, 26, 28, 0.12)")
                  : undefined,
                borderColor: hoveredCard === index ? lineGold : lineColor,
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Gold top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{
                  background: `linear-gradient(90deg, transparent 0%, ${lineGold} 50%, transparent 100%)`,
                  opacity: hoveredCard === index ? 1 : 0.4,
                  transform: hoveredCard === index ? "scaleX(1)" : "scaleX(0.6)",
                  transformOrigin: "center",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                aria-hidden="true"
              />

              <div className="p-8 space-y-6">
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{
                    backgroundColor: `rgba(190, 148, 63, 0.1)`,
                    border: `1px solid ${lineGold}`,
                    color: goldColor,
                  }}
                >
                  {cardIcons[card.icon as keyof typeof cardIcons]}
                </div>

                {/* Title */}
                <h3 className="font-display font-semibold text-lg lg:text-xl tracking-tight" style={{ color: textPrimary }}>
                  {card.title}
                </h3>

                {/* Description */}
                <p className="body" style={{ color: textSecondary, lineHeight: 1.65 }}>
                  {card.description}
                </p>

                {/* Hover indicator */}
                <div
                  className="flex items-center gap-2 font-mono text-xs tracking-widest uppercase transition-all duration-300"
                  style={{
                    color: goldColor,
                    opacity: hoveredCard === index ? 1 : 0,
                    transform: hoveredCard === index ? "translateX(0)" : "translateX(-10px)",
                  }}
                >
                  <span>{locale === "en" ? "ACTIVE RESEARCH" : "بحث نشط"}</span>
                  <svg className="w-3 h-3 rtl-flip" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
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