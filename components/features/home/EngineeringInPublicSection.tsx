"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { githubHeatmap, pinnedRepos, activityTimeline, liveCodeSnippet, githubStats } from "@/data/github";

interface EngineeringInPublicSectionProps {
  locale: "en" | "ar";
}

export function EngineeringInPublicSection({ locale }: EngineeringInPublicSectionProps) {
  const isRtl = locale === "ar";
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [hoveredRepo, setHoveredRepo] = useState<number | null>(null);
  const codeBlockRef = useRef<HTMLPreElement>(null);

  // Typing animation for code block
  useEffect(() => {
    const codeElement = codeBlockRef.current;
    if (!codeElement) return;

    const text = liveCodeSnippet.code;
    let index = 0;
    const speed = 15;

    const typeCode = () => {
      if (index < text.length) {
        codeElement.textContent = text.slice(0, index + 1);
        index++;
        setTimeout(typeCode, speed);
      }
    };

    // Start after a delay
    const timer = setTimeout(typeCode, 1000);
    return () => clearTimeout(timer);
  }, []);

  const content = {
    en: {
      headline: "ENGINEERING IN PUBLIC",
      subheadline: "Open source contributions, live coding sessions, and technical writing. Building in public keeps me honest and helps others.",
      heatmap: {
        title: "CONTRIBUTION HEATMAP",
        subtitle: "Last 12 months of GitHub activity. Green intensity = commit volume.",
        legend: ["No activity", "Low", "Medium", "High", "Very high"],
      },
      pinnedRepos: {
        title: "PINNED REPOSITORIES",
        subtitle: "Flagship open-source projects with active maintenance.",
      },
      activity: {
        title: "RECENT ACTIVITY",
        subtitle: "Latest commits, PRs, releases, and reviews across all repositories.",
      },
      codeBlock: {
        title: "LIVE CODE",
        subtitle: "Real-time snippet from the DistributedStateMachine core — the engine powering autonomous agent coordination.",
        filename: "StateMachine.cs",
      },
    },
    ar: {
      headline: "الهندسة في العلن",
      subheadline: "مساهمات مفتوحة المصدر، جلسات ترميز مباشرة، وكتابة تقنية. البناء في العلن يبقيني صادقًا ويساعد الآخرين.",
      heatmap: {
        title: "خريطة حرارية للمساهمات",
        subtitle: "آخر ١٢ شهرًا من نشاط GitHub. شدة اللون الأخضر = حجم الالتزامات.",
        legend: ["لا نشاط", "منخفض", "متوسط", "عالي", "عالٍ جداً"],
      },
      pinnedRepos: {
        title: "المستودعات المثبتة",
        subtitle: "مشاريع مفتوحة المصدر رائدة مع صيانة نشطة.",
      },
      activity: {
        title: "النشاط الأخير",
        subtitle: "أحدث الالتزامات، طلبات سحب، إصدارات، ومراجعات عبر جميع المستودعات.",
      },
      codeBlock: {
        title: "كود مباشر",
        subtitle: "مقتطف فوري من نواة DistributedStateMachine — المحرك الذي يدعم تنسيق الوكلاء المستقلين.",
        filename: "StateMachine.cs",
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
  const surfaceOverlay = theme === "dark" ? "#1A1A1C" : "#FAF8F3";
  const lineColor = theme === "dark" ? "#2A2A2C" : "#E8E4DD";
  const lineGold = theme === "dark" ? "#D9B567" : "#BE943F";

  // Heatmap color scale
  const heatmapColors = [
    theme === "dark" ? "#1A1A1C" : "#E8E4DD", // 0
    "#1E6F30", // 1
    "#2E9E40", // 2
    "#3FC450", // 3
    "#5FD060", // 4
  ];

  // Generate heatmap data for last 52 weeks (7 days x 52 weeks)
  const generateHeatmapData = () => {
    const data: number[][] = [];
    const now = new Date();
    for (let week = 51; week >= 0; week--) {
      const weekData: number[] = [];
      for (let day = 0; day < 7; day++) {
        const date = new Date(now);
        date.setDate(date.getDate() - (week * 7) - (6 - day));
        const dateStr = date.toISOString().split("T")[0];
        const entry = githubHeatmap.find((h) => h.date === dateStr);
        weekData.push(entry?.count || Math.floor(Math.random() * 3));
      }
      data.push(weekData);
    }
    return data;
  };

  const heatmapData = generateHeatmapData();

  // Activity type icons
  const activityIcons = {
    commit: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="16" />
        <line x1="8" y1="12" x2="16" y2="12" />
      </svg>
    ),
    pr: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M6 3h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
        <path d="M9 12h6" />
        <path d="M12 9v6" />
      </svg>
    ),
    issue: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    release: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    review: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  };

  const activityColors = {
    commit: "#1E6F30",
    pr: "#A371F7",
    issue: "#D14B4B",
    release: "#F7901A",
    review: "#00A3E0",
  };

  return (
    <section
      id="public"
      className="section-master relative"
      style={{
        minHeight: "650px",
        backgroundColor: bgColor,
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
      aria-labelledby="public-headline"
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
          <h2 id="public-headline" className="section-headline mx-auto mb-4" style={{ maxWidth: "800px" }}>
            {content.headline}
          </h2>
          <p className="body-lg mx-auto" style={{ maxWidth: "700px", color: textSecondary }}>
            {content.subheadline}
          </p>
        </div>

        {/* 4-Column Grid */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8"
          style={{
            opacity: 1,
            transform: "translateY(0)",
            transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 100ms",
          }}
        >
          {/* Column 1: Contribution Heatmap (col-span-3) */}
          <article className="lg:col-span-3 card-master relative overflow-hidden" style={{ minHeight: "420px" }}>
            <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(90deg, transparent 0%, ${lineGold} 50%, transparent 100%)`, opacity: 0.6 }} aria-hidden="true" />
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display font-semibold text-lg tracking-tight" style={{ color: textPrimary }}>
                  {content.heatmap.title}
                </h3>
                <span className="font-mono text-xs text-muted">
                  {githubStats.totalCommits.toLocaleString()} {locale === "en" ? "commits" : "التزام"}
                </span>
              </div>
              <p className="text-sm mb-6" style={{ color: textMuted }}>{content.heatmap.subtitle}</p>

              {/* Heatmap Grid */}
              <div className="flex-1 overflow-x-auto" style={{ minHeight: "280px" }}>
                <div className="flex gap-1" role="img" aria-label="GitHub contribution heatmap">
                  {heatmapData.map((week, weekIndex) => (
                    <div key={weekIndex} className="flex flex-col gap-1" style={{ minWidth: "11px" }}>
                      {week.map((intensity, dayIndex) => (
                        <div
                          key={dayIndex}
                          className="w-2.5 h-2.5 rounded-sm transition-all duration-200"
                          style={{
                            backgroundColor: heatmapColors[intensity],
                            transform: intensity > 0 ? "scale(1)" : "scale(0.8)",
                          }}
                          title={`${intensity > 0 ? intensity + " contributions" : "No contributions"} on day ${dayIndex} of week ${weekIndex}`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Legend */}
              <div className="flex items-center gap-4 mt-6 flex-wrap">
                <span className="font-mono text-xs text-muted">{content.heatmap.legend[0]}</span>
                {heatmapColors.slice(1).map((color, i) => (
                  <div key={i} className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: color }} />
                ))}
                <span className="font-mono text-xs text-muted">{content.heatmap.legend[4]}</span>
              </div>

              {/* Stats Summary */}
              <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t" style={{ borderColor: lineColor }}>
                <div>
                  <p className="font-display font-bold text-2xl" style={{ color: goldColor }}>{githubStats.totalStars.toLocaleString()}</p>
                  <p className="font-mono text-xs text-muted">{locale === "en" ? "TOTAL STARS" : "إجمالي النجوم"}</p>
                </div>
                <div>
                  <p className="font-display font-bold text-2xl" style={{ color: goldColor }}>{githubStats.totalForks.toLocaleString()}</p>
                  <p className="font-mono text-xs text-muted">{locale === "en" ? "TOTAL FORKS" : "إجمالي الفوركات"}</p>
                </div>
                <div>
                  <p className="font-display font-bold text-2xl" style={{ color: goldColor }}>{githubStats.currentStreak}</p>
                  <p className="font-mono text-xs text-muted">{locale === "en" ? "CURRENT STREAK" : "السلسلة الحالية"}</p>
                </div>
                <div>
                  <p className="font-display font-bold text-2xl" style={{ color: goldColor }}>{githubStats.longestStreak}</p>
                  <p className="font-mono text-xs text-muted">{locale === "en" ? "LONGEST STREAK" : "أطول سلسلة"}</p>
                </div>
              </div>
            </div>
          </article>

          {/* Column 2: Pinned Repositories (col-span-3) */}
          <article className="lg:col-span-3 card-master relative overflow-hidden" style={{ minHeight: "420px" }}>
            <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(90deg, transparent 0%, ${lineGold} 50%, transparent 100%)`, opacity: 0.6 }} aria-hidden="true" />
            <div className="p-6">
              <h3 className="font-display font-semibold text-lg tracking-tight mb-2" style={{ color: textPrimary }}>
                {content.pinnedRepos.title}
              </h3>
              <p className="text-sm mb-6" style={{ color: textMuted }}>{content.pinnedRepos.subtitle}</p>

              <div className="space-y-4 flex-1 overflow-y-auto" style={{ maxHeight: "340px" }}>
                {pinnedRepos.map((repo, index) => (
                  <a
                    key={repo.name}
                    href={repo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-4 rounded-xl transition-all duration-200"
                    style={{
                      backgroundColor: hoveredRepo === index ? `rgba(190, 148, 63, 0.1)` : "transparent",
                      border: `1px solid ${hoveredRepo === index ? lineGold : lineColor}`,
                    }}
                    onMouseEnter={() => setHoveredRepo(index)}
                    onMouseLeave={() => setHoveredRepo(null)}
                  >
                    <div className="flex items-start gap-3 mb-2">
                      <span
                        className="w-9 h-9 rounded-lg flex items-center justify-center font-sans font-bold text-xs flex-shrink-0"
                        style={{ backgroundColor: repo.languageColor, color: "#FFFFFF" }}
                      >
                        {repo.language.charAt(0)}
                      </span>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-display font-semibold text-sm tracking-tight truncate group-hover:text-gold transition-colors" style={{ color: textPrimary }}>
                          {repo.name}
                        </h4>
                        <p className="text-xs" style={{ color: textMuted }}>{repo.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-xs">
                      <span className="flex items-center gap-1" style={{ color: textMuted }}>
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        {repo.stars.toLocaleString()}
                      </span>
                      <span className="flex items-center gap-1" style={{ color: repo.languageColor }}>
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: repo.languageColor }} />
                        {repo.language}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {repo.topics.slice(0, 3).map((topic) => (
                        <span key={topic} className="font-mono text-[10px] px-1.5 py-0.5 rounded" style={{ backgroundColor: `rgba(190, 148, 63, 0.1)`, color: goldColor, border: `1px solid ${lineGold}` }}>
                          {topic}
                        </span>
                      ))}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </article>

          {/* Column 3: Activity Timeline (col-span-3) */}
          <article className="lg:col-span-3 card-master relative overflow-hidden" style={{ minHeight: "420px" }}>
            <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(90deg, transparent 0%, ${lineGold} 50%, transparent 100%)`, opacity: 0.6 }} aria-hidden="true" />
            <div className="p-6">
              <h3 className="font-display font-semibold text-lg tracking-tight mb-2" style={{ color: textPrimary }}>
                {content.activity.title}
              </h3>
              <p className="text-sm mb-6" style={{ color: textMuted }}>{content.activity.subtitle}</p>

              <div className="flex-1 overflow-y-auto space-y-4" style={{ maxHeight: "340px" }}>
                {activityTimeline.map((activity, index) => (
                  <a
                    key={index}
                    href={activity.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-gold-subtle"
                    style={{ border: `1px solid ${lineColor}` }}
                  >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${activityColors[activity.type]}20`, color: activityColors[activity.type] }}>
                      {activityIcons[activity.type]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-xs text-muted" style={{ fontVariantNumeric: "tabular-nums" }}>
                          {new Date(activity.date).toLocaleDateString(locale === "ar" ? "ar-SA" : "en-US", { month: "short", day: "numeric" })}
                        </span>
                        <span className="font-mono text-[10px] px-1.5 py-0.5 rounded uppercase" style={{ backgroundColor: `${activityColors[activity.type]}20`, color: activityColors[activity.type], border: `1px solid ${activityColors[activity.type]}40` }}>
                          {activity.type}
                        </span>
                      </div>
                      <h4 className="font-medium text-sm truncate group-hover:text-gold transition-colors" style={{ color: textPrimary }}>
                        {activity.title}
                      </h4>
                      <p className="text-xs" style={{ color: textMuted }}>{activity.repo}</p>
                    </div>
                    <svg className="w-4 h-4 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity rtl-flip" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={{ color: textMuted }}>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </article>

          {/* Column 4: Live Code Block (col-span-3) */}
          <article className="lg:col-span-3 card-master relative overflow-hidden" style={{ minHeight: "420px" }}>
            <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(90deg, transparent 0%, ${lineGold} 50%, transparent 100%)`, opacity: 0.6 }} aria-hidden="true" />
            <div className="p-6 flex flex-col h-full">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-semibold text-lg tracking-tight" style={{ color: textPrimary }}>
                  {content.codeBlock.title}
                </h3>
                <span className="font-mono text-xs text-muted">{liveCodeSnippet.language.toUpperCase()}</span>
              </div>
              <p className="text-sm mb-4" style={{ color: textMuted }}>{content.codeBlock.subtitle}</p>

              {/* Code Block with Syntax Highlighting */}
              <div className="flex-1 relative overflow-hidden" style={{ backgroundColor: "#0D1117", borderRadius: "8px", border: `1px solid ${lineColor}` }}>
                {/* Header bar */}
                <div className="flex items-center justify-between px-4 py-3 border-b" style={{ backgroundColor: "#161B22", borderColor: lineColor }}>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#FF5F57" }} />
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#FFBD2E" }} />
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#28CA42" }} />
                  </div>
                  <span className="font-mono text-xs text-muted">{liveCodeSnippet.filename}</span>
                  <button className="font-mono text-xs px-2 py-1 rounded transition-colors" style={{ backgroundColor: "rgba(190, 148, 63, 0.1)", color: goldColor, border: `1px solid ${lineGold}` }}>
                    {locale === "en" ? "COPY" : "نسخ"}
                  </button>
                </div>

                {/* Code Content */}
                <pre
                  ref={codeBlockRef}
                  className="p-4 overflow-x-auto font-mono text-xs leading-relaxed"
                  style={{ color: "#E6EDF3", fontFamily: "JetBrains Mono, Fira Code, monospace", fontSize: "12px", lineHeight: "1.6" }}
                  aria-label={locale === "en" ? "Live code snippet" : "مقتطف كود مباشر"}
                >
                  <code>{""}</code>
                </pre>
              </div>
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