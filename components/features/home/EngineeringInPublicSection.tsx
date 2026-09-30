"use client";

import React from "react";
import { Locale } from "@/lib/i18n/dictionaries";

export function EngineeringInPublicSection({ locale }: { locale: Locale }) {
  const isRtl = locale === "ar";

  const pinnedRepos = [
    {
      name: "yusra-app",
      desc: "Kotlin · Android · Firebase",
      stars: 142,
      href: "https://github.com/Abdulghani780/yusra-app",
    },
    {
      name: "campus-tracker",
      desc: "C# · WinForms · Oracle",
      stars: 87,
      href: "https://github.com/Abdulghani780/Campuse-IT-Tracker",
    },
    {
      name: "metaalgorithm-lab",
      desc: "Python · PyQt6 · Algorithms",
      stars: 65,
      href: "https://github.com/Abdulghani780/MetaAlgorithmLab",
    },
    {
      name: "novatech",
      desc: "Next.js · PostgreSQL",
      stars: 52,
      href: "https://github.com/Abdulghani780/NovaTech",
    },
  ];

  const recentCommits = [
    {
      msg: "feat: add voice assistant module",
      time: isRtl ? "منذ ساعتين" : "2 hours ago",
    },
    {
      msg: "fix: improve camera detection",
      time: isRtl ? "منذ 5 ساعات" : "5 hours ago",
    },
    {
      msg: "feat: update database schema",
      time: isRtl ? "أمس" : "1 day ago",
    },
    {
      msg: "docs: update README",
      time: isRtl ? "منذ يومين" : "2 days ago",
    },
  ];

  return (
    <section className="relative w-full bg-[#0B0B0D] dark:bg-[#0B0B0D] text-white py-20 lg:py-28 border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl uppercase tracking-wider text-white">
            {isRtl ? "الهندسة على الملأ" : "ENGINEERING IN PUBLIC"}
          </h2>
          <p className="mt-1 text-xs sm:text-sm font-mono tracking-widest text-[#D4AF37] uppercase font-bold">
            {isRtl ? "كود. بناء. مشاركة. نمو." : "Code. Build. Share. Grow."}
          </p>
        </div>

        {/* 4 Technical Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Column 1: GitHub Contribution Heatmap */}
          <div className="p-5 rounded-2xl border border-white/10 bg-[#141418] flex flex-col justify-between shadow-sm">
            <div>
              <span className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-wider block mb-4">
                {isRtl ? "نشاط المساهمات" : "CONTRIBUTION ACTIVITY"}
              </span>

              {/* 52-Week Simulated Matrix Heatmap */}
              <div className="grid grid-cols-12 gap-1.5 p-3 rounded-xl bg-black/60 border border-white/5">
                {Array.from({ length: 48 }).map((_, i) => {
                  const level = (i * 7 + 3) % 5;
                  const color =
                    level === 0
                      ? "bg-zinc-800"
                      : level === 1
                      ? "bg-emerald-950"
                      : level === 2
                      ? "bg-emerald-800"
                      : level === 3
                      ? "bg-emerald-600"
                      : "bg-emerald-400";
                  return <div key={i} className={`w-full aspect-square rounded-[2px] ${color}`} />;
                })}
              </div>

              <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500 mt-2 px-1">
                <span>Jan</span>
                <span>Jun</span>
                <span>Dec</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 font-mono text-[11px] text-zinc-400">
              {isRtl ? "679 مساهمة في العام الماضي" : "679 contributions in the last year"}
            </div>
          </div>

          {/* Column 2: Pinned Repositories */}
          <div className="p-5 rounded-2xl border border-white/10 bg-[#141418] flex flex-col justify-between shadow-sm">
            <div>
              <span className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-wider block mb-4">
                {isRtl ? "المستودعات المثبتة" : "PINNED REPOSITORIES"}
              </span>

              <div className="space-y-3">
                {pinnedRepos.map((repo, idx) => (
                  <a
                    key={idx}
                    href={repo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-white/5 bg-white/5 hover:border-[#D4AF37]/40 block transition-colors group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-zinc-200 group-hover:text-[#D4AF37] transition-colors">
                        {repo.name}
                      </span>
                      <span className="font-mono text-[10px] text-zinc-400 flex items-center gap-1">
                        ★ {repo.stars}
                      </span>
                    </div>
                    <span className="text-[10px] text-zinc-500 font-mono block mt-0.5">
                      {repo.desc}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 font-mono text-[10px] text-zinc-500">
              GIT_HOST // GITHUB_VERIFIED
            </div>
          </div>

          {/* Column 3: Recent Activity (Commits Timeline) */}
          <div className="p-5 rounded-2xl border border-white/10 bg-[#141418] flex flex-col justify-between shadow-sm">
            <div>
              <span className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-wider block mb-4">
                {isRtl ? "النشاط البرمجي الأخير" : "RECENT ACTIVITY"}
              </span>

              <div className="space-y-3">
                {recentCommits.map((c, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1.5 shrink-0" />
                    <div>
                      <p className="text-xs font-mono text-zinc-300 leading-snug">
                        {c.msg}
                      </p>
                      <span className="text-[10px] font-mono text-zinc-500">
                        {c.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 font-mono text-[10px] text-zinc-500">
              BRANCH // MAIN
            </div>
          </div>

          {/* Column 4: Syntax-Highlighted Code Editor */}
          <div className="p-5 rounded-2xl border border-white/10 bg-[#141418] flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-3 border-b border-white/5 pb-2">
                <span className="font-mono text-[10px] text-zinc-400">Recent Code</span>
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
              </div>

              <pre className="font-mono text-[11px] leading-relaxed text-zinc-300 overflow-x-auto p-2 rounded-lg bg-black/60">
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

            <div className="mt-4 pt-3 border-t border-white/5 font-mono text-[10px] text-zinc-500 flex justify-between">
              <span>C#</span>
              <span>UTF-8</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
