"use client";

import React from "react";
import { Locale } from "@/lib/i18n/dictionaries";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { CountUp } from "@/components/ui/CountUp";

export function EngineeringInPublicSection({ locale }: { locale: Locale }) {
  const isRtl = locale === "ar";

  const pinnedRepos = [
    {
      name: "campus-it-tracker",
      desc: "C# · WinForms · Oracle · RBAC",
      stars: 124,
      href: "https://github.com/Abdulghani780/Campuse-IT-Tracker",
    },
    {
      name: "metaalgorithm-lab",
      desc: "Python · PyQt6 · SciPy · Benchmark",
      stars: 98,
      href: "https://github.com/Abdulghani780/MetaAlgorithmLab",
    },
    {
      name: "novatech",
      desc: "HTML5 · CSS3 · ES6 JavaScript",
      stars: 76,
      href: "https://github.com/Abdulghani780/NovaTech",
    },
    {
      name: "cafena-roasters",
      desc: "Vanilla JS · Modern CSS3 · RTL Arabic",
      stars: 64,
      href: "https://github.com/Abdulghani780/Cafena",
    },
  ];

  const recentCommits = [
    {
      msg: "feat: implement interactive campus map floorplan canvas",
      time: isRtl ? "منذ ساعتين" : "2 hours ago",
    },
    {
      msg: "perf: optimize SciPy non-linear asymptotic curve fitting",
      time: isRtl ? "منذ 4 ساعات" : "4 hours ago",
    },
    {
      msg: "feat: offcanvas cart VAT computation and discount timer",
      time: isRtl ? "أمس" : "1 day ago",
    },
    {
      msg: "refactor: Oracle PL/SQL custody transfer audit service",
      time: isRtl ? "منذ يومين" : "2 days ago",
    },
  ];

  return (
    <section
      className="relative w-full bg-background dark:bg-background text-foreground dark:text-foreground py-20 lg:py-28 border-b border-border/10 dark:border-border/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal isRtl={isRtl} direction="up">
          <div className="mb-12 sm:mb-16">
            <h2 className="font-serif font-bold text-2xl sm:text-3xl uppercase tracking-wider text-foreground dark:text-foreground">
              {isRtl ? "الهندسة على الملأ" : "ENGINEERING IN PUBLIC"}
            </h2>
            <p className="mt-1 text-xs sm:text-sm font-mono tracking-widest text-brand dark:text-brandLight uppercase font-bold">
              {isRtl ? "كود. بناء. مشاركة. نمو." : "Code. Build. Share. Grow."}
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Technical Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Column 1: GitHub Contribution Heatmap */}
          <ScrollReveal delay={0} isRtl={isRtl} direction="up" className="h-full">
            <TiltCard className="h-full p-5 rounded-2xl border border-border/10 dark:border-border/10 bg-surfaceOverlay dark:bg-surfaceOverlay flex flex-col justify-between shadow-sm hover:border-brand/40 transition-colors">
              <div>
                <span className="font-mono text-xs font-bold text-muted-foreground dark:text-muted-foreground uppercase tracking-wider block mb-4">
                  {isRtl ? "نشاط المساهمات" : "CONTRIBUTION ACTIVITY"}
                </span>

                {/* 52-Week Simulated Matrix Heatmap */}
                <div className="grid grid-cols-12 gap-1.5 p-3 rounded-xl bg-background/60 dark:bg-background/60 border border-border/10 dark:border-border/10">
                  {Array.from({ length: 48 }).map((_, i) => {
                    const level = (i * 7 + 3) % 5;
                    const color =
                      level === 0
                        ? "bg-muted/30"
                        : level === 1
                        ? "bg-emerald-950/50"
                        : level === 2
                        ? "bg-emerald-800/50"
                        : level === 3
                        ? "bg-emerald-600/50"
                        : "bg-emerald-400/50";
                    return <div key={i} className={`w-full aspect-square rounded-[2px] ${color} transition-transform hover:scale-125`} />;
                  })}
                </div>

                <div className="flex justify-between items-center text-[10px] font-mono text-muted-foreground dark:text-muted-foreground mt-2 px-1">
                  <span>Jan</span>
                  <span>Jun</span>
                  <span>Dec</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-border/10 dark:border-border/10 font-mono text-[11px] text-muted-foreground dark:text-muted-foreground">
                {isRtl ? (
                  <span>
                    <CountUp end={679} duration={1400} className="text-brand dark:text-brandLight font-bold" /> مساهمة في العام الماضي
                  </span>
                ) : (
                  <span>
                    <CountUp end={679} duration={1400} className="text-brand dark:text-brandLight font-bold" /> contributions in the last year
                  </span>
                )}
              </div>
            </TiltCard>
          </ScrollReveal>

          {/* Column 2: Pinned Repositories */}
          <ScrollReveal delay={100} isRtl={isRtl} direction="up" className="h-full">
            <TiltCard className="h-full p-5 rounded-2xl border border-border/10 dark:border-border/10 bg-surfaceOverlay dark:bg-surfaceOverlay flex flex-col justify-between shadow-sm hover:border-brand/40 transition-colors">
              <div>
                <span className="font-mono text-xs font-bold text-muted-foreground dark:text-muted-foreground uppercase tracking-wider block mb-4">
                  {isRtl ? "المستودعات المثبتة" : "PINNED REPOSITORIES"}
                </span>

                <div className="space-y-3">
                  {pinnedRepos.map((repo, idx) => (
                    <a
                      key={idx}
                      href={repo.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl border border-border/5 dark:border-border/5 bg-background/5 dark:bg-background/5 hover:border-brand/40 block transition-all hover:bg-background/10 dark:hover:bg-background/10 group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-foreground dark:text-foreground group-hover:text-brand dark:group-hover:text-brandLight transition-colors">
                          {repo.name}
                        </span>
                        <span className="font-mono text-[10px] text-muted-foreground dark:text-muted-foreground flex items-center gap-1">
                          ★ <CountUp end={repo.stars} duration={1200} />
                        </span>
                      </div>
                      <span className="text-[10px] text-muted-foreground dark:text-muted-foreground font-mono block mt-0.5">
                        {repo.desc}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-border/10 dark:border-border/10 font-mono text-[10px] text-muted-foreground dark:text-muted-foreground">
                GIT_HOST // GITHUB_VERIFIED
              </div>
            </TiltCard>
          </ScrollReveal>

          {/* Column 3: Recent Activity (Commits Timeline) */}
          <ScrollReveal delay={200} isRtl={isRtl} direction="up" className="h-full">
            <TiltCard className="h-full p-5 rounded-2xl border border-border/10 dark:border-border/10 bg-surfaceOverlay dark:bg-surfaceOverlay flex flex-col justify-between shadow-sm hover:border-brand/40 transition-colors">
              <div>
                <span className="font-mono text-xs font-bold text-muted-foreground dark:text-muted-foreground uppercase tracking-wider block mb-4">
                  {isRtl ? "النشاط البرمجي الأخير" : "RECENT ACTIVITY"}
                </span>

                <div className="space-y-3">
                  {recentCommits.map((c, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand dark:bg-brandLight mt-1.5 shrink-0 animate-pulse" />
                      <div>
                        <p className="text-xs font-mono text-foreground dark:text-foreground leading-snug">
                          {c.msg}
                        </p>
                        <span className="text-[10px] font-mono text-muted-foreground dark:text-muted-foreground">
                          {c.time}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-border/10 dark:border-border/10 font-mono text-[10px] text-muted-foreground dark:text-muted-foreground">
                BRANCH // MAIN
              </div>
            </TiltCard>
          </ScrollReveal>

          {/* Column 4: Syntax-Highlighted Code Editor */}
          <ScrollReveal delay={300} isRtl={isRtl} direction="up" className="h-full">
            <TiltCard className="h-full p-5 rounded-2xl border border-border/10 dark:border-border/10 bg-surfaceOverlay dark:bg-surfaceOverlay flex flex-col justify-between shadow-sm hover:border-brand/40 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-3 border-b border-border/10 dark:border-border/10 pb-2">
                  <span className="font-mono text-[10px] text-muted-foreground dark:text-muted-foreground">Recent Code</span>
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                </div>

                <pre className="font-mono text-[11px] leading-relaxed text-foreground dark:text-foreground overflow-x-auto p-2 rounded-lg bg-background/60 dark:bg-background/60">
                  <code>
                    <span className="text-purple-400">class</span>{" "}
                    <span className="text-emerald-400">Solution</span> {"{\n"}
                    {"  "}<span className="text-blue-400">public string</span>{" "}
                    <span className="text-amber-300">Solve</span>(<span className="text-blue-400">string</span> input) {"{\n"}
                    {"    "}<span className="text-purple-400">return</span> input.Trim().ToLower();{"\n"}
                    {"  }\n"}
                    {"}"}
                  </code>
                </pre>
              </div>

              <div className="mt-4 pt-3 border-t border-border/10 dark:border-border/10 font-mono text-[10px] text-muted-foreground dark:text-muted-foreground flex justify-between">
                <span>C#</span>
                <span>UTF-8</span>
              </div>
            </TiltCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}