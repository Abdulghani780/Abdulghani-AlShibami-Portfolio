"use client";

import React from "react";
import { Locale } from "@/lib/i18n/dictionaries";

export function EngineeringInPublicSection({ locale }: { locale: Locale }) {
  const isRtl = locale === "ar";

  const pinnedRepos = [
    {
      name: "campuse-it-tracker",
      desc: "C# · WinForms · Oracle",
      stars: 12,
      href: "https://github.com/Abdulghani780/Campuse-IT-Tracker",
    },
    {
      name: "metaalgorithm-lab",
      desc: "Python · PyQt6 · Algorithms",
      stars: 10,
      href: "https://github.com/Abdulghani780/metaalgorithm-lab",
    },
    {
      name: "novatech",
      desc: "Next.js · PostgreSQL",
      stars: 8,
      href: "https://github.com/Abdulghani780/novatech",
    },
    {
      name: "Cafena",
      desc: "HTML5 · CSS3 Grid · Modern JS",
      stars: 9,
      href: "https://github.com/Abdulghani780/Cafena",
    },
  ];

  const recentCommits = [
    {
      msg: "feat: implement campus topology canvas and GDI+ rendering",
      time: isRtl ? "منذ ساعتين" : "2 hours ago",
    },
    {
      msg: "perf: optimize sorting algorithms and benchmark telemetry",
      time: isRtl ? "منذ 5 ساعات" : "5 hours ago",
    },
    {
      msg: "refactor: normalize relational schema and connection pooling",
      time: isRtl ? "أمس" : "1 day ago",
    },
    {
      msg: "docs: update system architecture and technical specifications",
      time: isRtl ? "منذ يومين" : "2 days ago",
    },
  ];

  return (
    <section className="relative w-full bg-white dark:bg-[#0B0B0C] text-[#0B0B0C] dark:text-white py-20 lg:py-28 border-b border-black/5 dark:border-white/5 transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <h2 className="font-mono font-bold text-2xl sm:text-3xl uppercase tracking-wider text-[#0B0B0C] dark:text-white">
            {isRtl ? "الهندسة على الملأ" : "ENGINEERING IN PUBLIC"}
          </h2>
          <p className="mt-1 text-xs sm:text-sm font-mono tracking-widest text-gold-dark dark:text-gold-light/90 uppercase font-bold">
            {isRtl ? "كود. بناء. مشاركة. نمو." : "Code. Build. Share. Grow."}
          </p>
        </div>

        {/* 4 Technical Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Column 1: GitHub Contribution Heatmap */}
          <div className="p-5 rounded-2xl border border-black/10 dark:border-white/10 bg-[#FAF9F6] dark:bg-[#121214] flex flex-col justify-between shadow-sm">
            <div>
              <span className="font-mono text-xs font-bold text-zinc-700 dark:text-zinc-400 uppercase tracking-wider block mb-4">
                {isRtl ? "نشاط المساهمات" : "CONTRIBUTION ACTIVITY"}
              </span>

              {/* 52-Week Simulated Matrix Heatmap */}
              <div className="grid grid-cols-12 gap-1.5 p-3 rounded-xl bg-white dark:bg-black/60 border border-black/10 dark:border-white/5">
                {Array.from({ length: 48 }).map((_, i) => {
                  const level = (i * 7 + 3) % 5;
                  const color =
                    level === 0
                      ? "bg-zinc-200 dark:bg-zinc-800"
                      : level === 1
                      ? "bg-emerald-200 dark:bg-emerald-950"
                      : level === 2
                      ? "bg-emerald-400 dark:bg-emerald-800"
                      : level === 3
                      ? "bg-emerald-600 dark:bg-emerald-600"
                      : "bg-emerald-700 dark:bg-emerald-400";
                  return <div key={i} className={`w-full aspect-square rounded-[2px] ${color}`} />;
                })}
              </div>

              <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500 mt-2 px-1">
                <span>Jan</span>
                <span>Jun</span>
                <span>Dec</span>
              </div>
            </div>

            <div className="pt-4 border-t border-black/5 dark:border-white/5 mt-4">
              <span className="font-mono text-xs text-gold-dark dark:text-gold-light font-bold">
                {isRtl ? "512 مساهمة خلال العام الماضي" : "512 contributions in the last year"}
              </span>
            </div>
          </div>

          {/* Column 2: Pinned Repositories */}
          <div className="p-5 rounded-2xl border border-black/10 dark:border-white/10 bg-[#FAF9F6] dark:bg-[#121214] flex flex-col justify-between shadow-sm">
            <div>
              <span className="font-mono text-xs font-bold text-zinc-700 dark:text-zinc-400 uppercase tracking-wider block mb-4">
                {isRtl ? "المستودعات المثبتة" : "PINNED REPOSITORIES"}
              </span>

              <div className="space-y-3">
                {pinnedRepos.map((repo, idx) => (
                  <a
                    key={idx}
                    href={repo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-2.5 rounded-xl bg-white dark:bg-black/50 border border-black/10 dark:border-white/5 hover:border-gold-primary/60 transition-colors group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-zinc-900 dark:text-zinc-200 group-hover:text-gold-dark dark:group-hover:text-gold-light transition-colors">
                        {repo.name}
                      </span>
                      <span className="text-[10px] font-mono text-gold-dark dark:text-gold-primary font-bold">★ {repo.stars}</span>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500 block mt-0.5">{repo.desc}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-black/5 dark:border-white/5 mt-4">
              <a
                href="https://github.com/Abdulghani780"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                github.com/Abdulghani780 →
              </a>
            </div>
          </div>

          {/* Column 3: Recent Activity */}
          <div className="p-5 rounded-2xl border border-black/10 dark:border-white/10 bg-[#FAF9F6] dark:bg-[#121214] flex flex-col justify-between shadow-sm">
            <div>
              <span className="font-mono text-xs font-bold text-zinc-700 dark:text-zinc-400 uppercase tracking-wider block mb-4">
                {isRtl ? "النشاط الأخير" : "RECENT ACTIVITY"}
              </span>

              <div className="space-y-3">
                {recentCommits.map((c, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-white dark:bg-black/50 border border-black/10 dark:border-white/5">
                    <p className="font-mono text-xs text-zinc-800 dark:text-zinc-300 line-clamp-1">{c.msg}</p>
                    <span className="font-mono text-[10px] text-zinc-500 block mt-0.5">{c.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-black/5 dark:border-white/5 mt-4">
              <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>ACTIVE DEV</span>
              </span>
            </div>
          </div>

          {/* Column 4: Recent Code Snippet Window */}
          <div className="p-5 rounded-2xl border border-black/10 dark:border-white/10 bg-[#FAF9F6] dark:bg-[#121214] flex flex-col justify-between shadow-sm">
            <div>
              {/* Window Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-zinc-700 dark:text-zinc-400 uppercase tracking-wider">
                  {isRtl ? "الكود الأخير" : "RECENT CODE"}
                </span>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                </div>
              </div>

              {/* Code Editor */}
              <div className="p-3.5 rounded-xl bg-[#0D1117] border border-black/10 dark:border-white/5 font-mono text-[11px] leading-relaxed text-zinc-300">
                <div className="text-zinc-500 mb-1">{"// Campus IT Telemetry Engine"}</div>
                <div>
                  <span className="text-rose-400">class</span> <span className="text-gold-light">IncidentDispatcher</span> :
                </div>
                <div className="pl-3">
                  <span className="text-blue-400">public async Task</span>&lt;<span className="text-emerald-400">TicketResult</span>&gt;
                </div>
                <div className="pl-3">
                  RouteIncidentAsync(<span className="text-amber-300">Incident</span> ticket)
                </div>
                <div className="pl-3">{"{"}</div>
                <div className="pl-6 text-zinc-400">
                  var node = await <br />
                  _oracleDb.QueryAssetAsync(ticket.AssetId);
                </div>
                <div className="pl-6 text-emerald-300">return TelemetryRouter.Dispatch(node);</div>
                <div className="pl-3">{"}"}</div>
              </div>
            </div>

            <div className="pt-4 border-t border-black/5 dark:border-white/5 mt-4">
              <span className="font-mono text-[11px] text-zinc-600 dark:text-zinc-500 font-bold">C# · Oracle · ITIL Architecture</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
