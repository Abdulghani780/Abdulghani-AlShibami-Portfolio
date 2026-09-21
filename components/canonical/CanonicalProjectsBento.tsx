"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Locale } from "@/lib/i18n/dictionaries";
import { PROJECTS as BASE_PROJECTS } from "@/lib/data/projectsData";

interface CanonicalProjectsBentoProps {
  locale: Locale;
}

interface Project {
  slug: string;
  name: string;
  nameAr: string;
  stack: string[];
  badge: string;
  img?: string;
  metric1Label: string;
  metric1Value: string;
  metric2Label: string;
  metric2Value: string;
  demoType: "INTERACTIVE SIMULATION" | "EMBEDDED DEMO" | "REAL LIVE DEMO" | "REPOSITORY";
  accentColor: string;
  featured?: boolean;
  githubUrl: string;
}

const BENTO_METRICS: Record<
  string,
  {
    badge: string;
    img?: string;
    metric1Label: string;
    metric1Value: string;
    metric2Label: string;
    metric2Value: string;
    accentColor: string;
    featured?: boolean;
  }
> = {
  "campus-it-tracker": {
    badge: "INTERACTIVE SIMULATION",
    img: "/images/projects/campus-it-tracker/01-dashboard-modern.jpg",
    metric1Label: "Assets",
    metric1Value: "1,450+",
    metric2Label: "Helpdesk",
    metric2Value: "21 Active",
    accentColor: "#10B981",
    featured: true,
  },
  "metaalgorithm-lab": {
    badge: "INTERACTIVE SIMULATION",
    img: "/images/projects/metaalgorithm-lab/01-dashboard.jpg",
    metric1Label: "Algorithms",
    metric1Value: "12 + Types",
    metric2Label: "WASM Core",
    metric2Value: "86% Bench",
    accentColor: "#6366F1",
  },
  cafena: {
    badge: "INTERACTIVE SIMULATION",
    img: "/images/projects/cafena/01-storefront-hero.jpg",
    metric1Label: "Sales",
    metric1Value: "$12,650",
    metric2Label: "Orders",
    metric2Value: "412 / day",
    accentColor: "#F59E0B",
  },
  novatech: {
    badge: "INTERACTIVE SIMULATION",
    img: "/images/projects/novatech/01-storefront-hero.jpg",
    metric1Label: "Products",
    metric1Value: "350 SKUs",
    metric2Label: "Uptime",
    metric2Value: "99.8%",
    accentColor: "#06B6D4",
  },
  gp: {
    badge: "INTERACTIVE SIMULATION",
    img: "/images/projects/gp/01-proposals-portal.jpg",
    metric1Label: "Students",
    metric1Value: "Active Queue",
    metric2Label: "Defense",
    metric2Value: "Stage 3/4",
    accentColor: "#8B5CF6",
  },
};

const BENTO_SLUGS = [
  "campus-it-tracker",
  "metaalgorithm-lab",
  "cafena",
  "novatech",
  "gp",
];

const PROJECTS: Project[] = BENTO_SLUGS.map((slug) => {
  const bp = BASE_PROJECTS.find((p) => p.slug === slug);
  const meta = BENTO_METRICS[slug];
  return {
    slug,
    name: bp ? bp.title.en : slug,
    nameAr: bp ? bp.title.ar : slug,
    stack: bp ? bp.technologies.map((t) => t.name) : [],
    badge: meta?.badge || "INTERACTIVE SIMULATION",
    img: meta?.img,
    metric1Label: meta?.metric1Label || "Metric",
    metric1Value: meta?.metric1Value || "100%",
    metric2Label: meta?.metric2Label || "Status",
    metric2Value: meta?.metric2Value || "Active",
    demoType: "INTERACTIVE SIMULATION",
    accentColor: meta?.accentColor || "#6366F1",
    featured: meta?.featured,
    githubUrl: bp?.githubUrl || "https://github.com/Abdulghani780",
  };
});

const BADGE_COLORS: Record<string, string> = {
  "INTERACTIVE SIMULATION": "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  "REAL LIVE DEMO": "bg-amber-500/10 text-amber-400 border-amber-500/30",
  "EMBEDDED DEMO": "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
  "REPOSITORY": "bg-slate-800 text-slate-400 border-slate-700",
};

function SortWaves({ color }: { color: string }) {
  const heights = [30, 60, 45, 80, 55, 90, 65, 75, 40, 85, 50, 95];
  return (
    <div className="flex items-end gap-0.5 h-16">
      {heights.map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-t transition-all duration-700"
          style={{ height: `${h}%`, backgroundColor: `${color}`, opacity: 0.5 + i * 0.025 }}
        />
      ))}
    </div>
  );
}

function AlgoCircle({ value, label, color }: { value: number; label: string; color: string }) {
  const circ = 2 * Math.PI * 15.9155;
  const dash = (value / 100) * circ;
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative w-14 h-14">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
          <path
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            stroke="#1f2937"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            stroke={color}
            strokeWidth="3"
            strokeDasharray={`${dash}, ${circ}`}
            strokeLinecap="round"
            fill="none"
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center font-mono text-xs font-bold text-white">
          {value}%
        </span>
      </div>
      <span className="text-[9px] font-mono text-zinc-500 uppercase">{label}</span>
    </div>
  );
}

export function CanonicalProjectsBento({ locale }: CanonicalProjectsBentoProps) {
  const isAr = locale === "ar";
  const [sortProgress, setSortProgress] = useState(65);
  const [metaView, setMetaView] = useState<"render" | "sim">("render");

  useEffect(() => {
    const id = setInterval(() => {
      setSortProgress((p) => (p >= 100 ? 15 : p + 4));
    }, 1800);
    return () => clearInterval(id);
  }, []);

  const featured = PROJECTS.find((p) => p.featured)!;
  const secondary = PROJECTS.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="relative w-full bg-canvas text-content-primary py-20 px-4 sm:px-8 lg:px-16 overflow-hidden transition-colors duration-300"
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* Electric circuit grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(99,102,241,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(99,102,241,0.05) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Section ambient glow */}
      <div className="absolute top-32 right-1/4 w-[500px] h-[500px] bg-indigo-500/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 left-1/4 w-[400px] h-[400px] bg-cyan-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

      {/* ── Section Header ── */}
      <div className="relative z-10 max-w-7xl mx-auto mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 font-mono text-[10px] tracking-[0.18em] text-indigo-600 dark:text-indigo-400 uppercase mb-3 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400 motion-safe:animate-ping" />
            {isAr ? "SECTION 02 / المشاريع" : "SECTION 02 / PROJECTS"}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-content-primary tracking-tight">
            {isAr ? "المشاريع الهندسية وواجهات الديمو" : "Core Systems & Live Environments"}
          </h2>
          <p className="text-content-muted text-sm mt-1 font-mono">
            {isAr ? "استكشف الكود المصدري، دراسات المعمارية، والمحاكاة المباشرة" : "Production systems with interactive browser runtimes, architecture case studies, and code repositories"}
          </p>
        </div>

        {/* Global links */}
        <div className="flex items-center gap-3">
          <Link
            href={`/${locale}/projects`}
            className="px-4 py-2 rounded-xl bg-surface-secondary border border-hairline text-content-secondary hover:text-content-primary hover:border-indigo-500/50 font-mono text-xs transition-all flex items-center gap-2"
          >
            <span>{isAr ? "عرض أرشيف المشاريع" : "View All Projects"}</span>
            <span className="text-indigo-600 dark:text-indigo-400">→</span>
          </Link>
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-secondary border border-hairline font-mono text-xs text-content-muted">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            5 DEPLOYMENTS ONLINE
          </div>
        </div>
      </div>

      {/* ── BENTO GRID ── */}
      <div className="relative z-10 max-w-7xl mx-auto space-y-6">

        {/* TOP ROW: Featured Workstation (7 cols) + MetaAlgorithm Lab (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Campus IT Tracker — lg:col-span-7 */}
          <div className="lg:col-span-7 bg-surface-card rounded-2xl border border-emerald-500/30 flex flex-col overflow-hidden shadow-[0_0_40px_-10px_rgba(16,185,129,0.15)] hover:border-emerald-500/50 transition-all duration-300">
            {/* Header / Title bar */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-hairline bg-surface-secondary/70" dir="ltr">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="font-mono text-sm font-semibold text-content-primary ml-2">
                  {isAr ? featured.nameAr : featured.name}
                </span>
              </div>
              <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono border ${BADGE_COLORS[featured.demoType]}`}>
                {featured.badge}
              </span>
            </div>

            {/* Preview image / canvas */}
            <div className="relative w-full h-60 sm:h-72 bg-surface-secondary/50 overflow-hidden border-b border-hairline group">
              {featured.img ? (
                <Image
                  src={featured.img}
                  alt={featured.name}
                  fill
                  className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="font-mono text-slate-500 text-sm">No preview</span>
                </div>
              )}
              {/* Live overlay badge */}
              <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-emerald-500/40 font-mono text-[10px] text-emerald-400 flex items-center gap-1.5" dir="ltr">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 motion-safe:animate-ping" />
                INTERACTIVE SIM ONLINE
              </div>
            </div>

            {/* Metrics row */}
            <div className="grid grid-cols-2 gap-3 px-5 py-4 border-b border-hairline">
              <div className="bg-surface-secondary rounded-xl border border-hairline p-3">
                <div className="text-[10px] font-mono text-content-muted uppercase">{featured.metric1Label}</div>
                <div className="text-xl font-bold font-mono text-emerald-500 dark:text-emerald-400">{featured.metric1Value}</div>
              </div>
              <div className="bg-surface-secondary rounded-xl border border-hairline p-3">
                <div className="text-[10px] font-mono text-content-muted uppercase">{featured.metric2Label}</div>
                <div className="text-xl font-bold font-mono text-content-primary">{featured.metric2Value}</div>
              </div>
            </div>

            {/* Footer with Stack, GitHub, Case Study & Launch Demo */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4">
              <div className="flex flex-wrap gap-1.5">
                {featured.stack.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-surface-secondary border border-hairline text-content-secondary">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href={featured.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-lg bg-surface-secondary hover:bg-surface-interactive border border-hairline text-content-secondary hover:text-content-primary font-mono text-xs transition-colors inline-flex items-center gap-1.5"
                  title="GitHub Repository"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>GitHub</span>
                </a>
                <Link
                  href={`/${locale}/projects/${featured.slug}`}
                  className="px-3.5 py-2 rounded-lg bg-surface-secondary hover:bg-surface-interactive border border-hairline text-content-primary font-mono text-xs transition-colors inline-flex items-center gap-1.5"
                >
                  <span>{isAr ? "المعمارية" : "Architecture"}</span>
                  <span className="text-emerald-500 dark:text-emerald-400">→</span>
                </Link>
                <Link
                  href={`/${locale}/projects/${featured.slug}/demo`}
                  className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] hover:scale-[1.02] active:scale-[0.97]"
                >
                  {isAr ? "تشغيل المحاكي" : "Launch Demo"}
                </Link>
              </div>
            </div>
          </div>

          {/* MetaAlgorithm Lab — lg:col-span-5 */}
          <div className="lg:col-span-5 bg-surface-card rounded-2xl border border-indigo-500/30 flex flex-col overflow-hidden shadow-[0_0_35px_-8px_rgba(99,102,241,0.15)] hover:border-indigo-500/50 transition-all duration-300">
            <div className="flex items-center justify-between px-5 py-3 border-b border-hairline bg-surface-secondary/70" dir="ltr">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="font-mono text-sm font-semibold text-content-primary ml-2">
                  {isAr ? PROJECTS[1].nameAr : PROJECTS[1].name}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setMetaView(metaView === "render" ? "sim" : "render")}
                  className="px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-500/15 border border-indigo-500/35 text-indigo-600 dark:text-indigo-300 hover:bg-indigo-500/25 transition-colors cursor-pointer"
                >
                  {metaView === "render" ? "⚡ Live Sim" : "🖼️ 3D Render"}
                </button>
                <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono border ${BADGE_COLORS[PROJECTS[1].demoType]}`}>
                  SIM
                </span>
              </div>
            </div>

            <div className="flex-1 p-5 space-y-4">
              {metaView === "render" ? (
                /* 3D High-Res Concept Render View */
                <div className="space-y-3">
                  <div className="relative w-full h-44 sm:h-52 bg-surface-secondary/50 rounded-xl overflow-hidden border border-hairline group">
                    <Image
                      src={PROJECTS[1].img!}
                      alt={PROJECTS[1].name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-indigo-950/90 border border-indigo-500/40 text-[10px] font-mono text-indigo-300 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 motion-safe:animate-ping" />
                      3D Computational Core Visualizer
                    </div>
                  </div>
                  {/* Mini metrics bar */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-surface-secondary rounded-lg border border-hairline p-2 text-center">
                      <span className="text-[10px] font-mono text-content-muted block">{PROJECTS[1].metric1Label}</span>
                      <span className="text-sm font-bold font-mono text-indigo-600 dark:text-indigo-400">{PROJECTS[1].metric1Value}</span>
                    </div>
                    <div className="bg-surface-secondary rounded-lg border border-hairline p-2 text-center">
                      <span className="text-[10px] font-mono text-content-muted block">{PROJECTS[1].metric2Label}</span>
                      <span className="text-sm font-bold font-mono text-cyan-600 dark:text-cyan-400">{PROJECTS[1].metric2Value}</span>
                    </div>
                  </div>
                </div>
              ) : (
                /* Interactive Algorithm Simulation View */
                <>
                  <div className="bg-surface-secondary rounded-xl border border-hairline p-3">
                    <div className="flex items-center justify-between text-[10px] font-mono text-content-muted pb-2">
                      <span>Algorithm Visualizer</span>
                      <span className="text-cyan-600 dark:text-cyan-400">O(n log n)</span>
                    </div>
                    <SortWaves color="#6366F1" />
                    <div className="mt-2">
                      <div className="w-full bg-surface-interactive rounded-full h-1.5 overflow-hidden">
                        <div
                          className="bg-indigo-500 h-full rounded-full transition-all duration-500 shadow-[0_0_8px_#6366F1]"
                          style={{ width: `${sortProgress}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-[9px] font-mono text-content-muted pt-1">
                        <span>HeapSort running</span>
                        <span>{sortProgress}%</span>
                      </div>
                    </div>
                  </div>

                  {/* Performance gauges */}
                  <div className="flex items-center justify-around py-2">
                    <AlgoCircle value={86} label="WASM" color="#6366F1" />
                    <AlgoCircle value={94} label="Accuracy" color="#10B981" />
                    <AlgoCircle value={73} label="Coverage" color="#F59E0B" />
                  </div>

                  {/* Terminal snippet (Strict LTR) */}
                  <div className="bg-surface-dark dark:bg-[#0B1120] text-slate-200 rounded-xl border border-hairline p-3 font-mono text-[10px] space-y-1 text-left" dir="ltr">
                    <div className="text-emerald-400">[BENCH] Sort time: 3.14ms</div>
                    <div className="text-cyan-400">[MEM] Usage: 14.8MB / 64MB</div>
                    <div className="flex items-center text-indigo-400">
                      <span>&gt; _</span>
                      <span className="w-1.5 h-3 bg-indigo-400 type-cursor ml-1" />
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 border-t border-hairline">
              <div className="flex flex-wrap gap-1.5">
                {PROJECTS[1].stack.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-surface-secondary border border-hairline text-content-secondary">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={PROJECTS[1].githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-surface-secondary hover:bg-surface-interactive border border-hairline text-content-secondary hover:text-content-primary transition-colors"
                  title="GitHub"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
                <Link
                  href={`/${locale}/projects/metaalgorithm-lab`}
                  className="px-2.5 py-1.5 rounded-lg bg-surface-secondary hover:bg-surface-interactive border border-hairline text-content-primary text-[11px] font-mono transition-colors"
                >
                  {isAr ? "المعمارية" : "Docs"}
                </Link>
                <Link
                  href={`/${locale}/projects/metaalgorithm-lab/demo`}
                  className="px-3.5 py-1.5 rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white font-mono font-bold text-xs uppercase shadow-[0_0_15px_rgba(99,102,241,0.4)] transition-all"
                >
                  {isAr ? "تشغيل" : "Demo"}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW: Cafena · NovaTech · GP Platform */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {secondary.slice(1).map((project) => (
            <div
              key={project.slug}
              className="bg-surface-card rounded-2xl border border-hairline flex flex-col overflow-hidden hover:border-indigo-500/30 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
              style={{ borderTopColor: `${project.accentColor}50` }}
            >
              {/* Top accent bar */}
              <div className="h-1 w-full" style={{ backgroundColor: project.accentColor }} />

              <div className="flex items-center justify-between px-4 py-3 border-b border-hairline bg-surface-secondary/70">
                <span className="font-mono text-sm font-semibold text-content-primary">
                  {isAr ? project.nameAr : project.name}
                </span>
                <span
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-mono border"
                  style={{
                    color: project.accentColor,
                    backgroundColor: `${project.accentColor}18`,
                    borderColor: `${project.accentColor}40`,
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: project.accentColor }} />
                  ONLINE
                </span>
              </div>

              {project.img && (
                <div className="relative w-full h-44 bg-surface-secondary/50 overflow-hidden border-b border-hairline group">
                  <Image
                    src={project.img}
                    alt={project.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60" />
                </div>
              )}

              <div className="flex-1 p-4 space-y-2.5">
                <div className="bg-surface-secondary rounded-lg border border-hairline p-2.5 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-content-muted">{project.metric1Label}</span>
                  <span className="font-mono text-sm font-bold" style={{ color: project.accentColor }}>
                    {project.metric1Value}
                  </span>
                </div>
                <div className="bg-surface-secondary rounded-lg border border-hairline p-2.5 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-content-muted">{project.metric2Label}</span>
                  <span className="font-mono text-sm font-bold text-content-primary">{project.metric2Value}</span>
                </div>
                {/* Mini bar chart */}
                <div className="bg-surface-secondary rounded-lg border border-hairline p-2 h-10 flex items-end gap-0.5">
                  {[40, 60, 50, 80, 65, 90, 70, 85, 55].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t"
                      style={{ height: `${h}%`, backgroundColor: project.accentColor, opacity: 0.55 }}
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between gap-2 px-4 py-3 border-t border-hairline">
                <div className="flex items-center gap-1.5">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded bg-surface-secondary hover:bg-surface-interactive border border-hairline text-content-secondary hover:text-content-primary transition-colors"
                    title="GitHub"
                  >
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>
                  <Link
                    href={`/${locale}/projects/${project.slug}`}
                    className="px-2 py-1 rounded bg-surface-secondary hover:bg-surface-interactive border border-hairline text-[10px] font-mono text-content-secondary hover:text-content-primary transition-colors"
                  >
                    {isAr ? "المعمارية" : "Docs"}
                  </Link>
                </div>
                <Link
                  href={`/${locale}/projects/${project.slug}/demo`}
                  className="flex-shrink-0 px-3.5 py-1.5 rounded-lg font-mono font-bold text-xs uppercase transition-all hover:scale-[1.03] shadow-sm text-slate-950"
                  style={{
                    backgroundColor: project.accentColor,
                  }}
                >
                  {isAr ? "ديمو" : "Demo"}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
