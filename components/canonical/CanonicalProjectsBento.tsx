"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Locale } from "@/lib/i18n/dictionaries";

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

const PROJECTS: Project[] = [
  {
    slug: "campus-it-tracker",
    name: "Campus IT Tracker",
    nameAr: "نظام تتبع البنية التحتية",
    stack: ["C# .NET", "Oracle DB", "WinForms"],
    badge: "INTERACTIVE SIMULATION",
    img: "/images/projects/campus-it-tracker/01-dashboard.webp",
    metric1Label: "Assets",
    metric1Value: "1,450+",
    metric2Label: "Helpdesk",
    metric2Value: "21 Active",
    demoType: "INTERACTIVE SIMULATION",
    accentColor: "#00FF9D",
    featured: true,
    githubUrl: "https://github.com/Abdulghani780/Campuse-IT-Tracker",
  },
  {
    slug: "metaalgorithm-lab",
    name: "MetaAlgorithm Lab",
    nameAr: "مختبر الميتا-خوارزمي",
    stack: ["Python", "C++", "Qt", "Docker"],
    badge: "INTERACTIVE SIMULATION",
    metric1Label: "Algorithms",
    metric1Value: "12 + Types",
    metric2Label: "WASM Core",
    metric2Value: "86% Bench",
    demoType: "INTERACTIVE SIMULATION",
    accentColor: "#00F0FF",
    githubUrl: "https://github.com/Abdulghani780/MetaAlgorithmLab",
  },
  {
    slug: "cafena",
    name: "Cafena Coffee Suite",
    nameAr: "منظومة كافينا للكافيه",
    stack: ["HTML/CSS", "JavaScript"],
    badge: "INTERACTIVE SIMULATION",
    img: "/images/projects/cafena/01-storefront-hero.webp",
    metric1Label: "Sales",
    metric1Value: "$12,650",
    metric2Label: "Orders",
    metric2Value: "412 / day",
    demoType: "INTERACTIVE SIMULATION",
    accentColor: "#FFBD2E",
    githubUrl: "https://github.com/Abdulghani780/Cafena",
  },
  {
    slug: "novatech",
    name: "NovaTech Cloud Store",
    nameAr: "متجر نوفاتك السحابي",
    stack: ["HTML/CSS", "JavaScript"],
    badge: "INTERACTIVE SIMULATION",
    metric1Label: "Products",
    metric1Value: "350 SKUs",
    metric2Label: "Uptime",
    metric2Value: "99.8%",
    demoType: "INTERACTIVE SIMULATION",
    accentColor: "#00F0FF",
    githubUrl: "https://github.com/Abdulghani780/NovaTech",
  },
  {
    slug: "gp",
    name: "GP Graduation Platform",
    nameAr: "منصة مشاريع التخرج",
    stack: ["PHP", "MySQL", "Bootstrap"],
    badge: "INTERACTIVE SIMULATION",
    metric1Label: "Students",
    metric1Value: "Active Queue",
    metric2Label: "Defense",
    metric2Value: "Stage 3/4",
    demoType: "INTERACTIVE SIMULATION",
    accentColor: "#00FF9D",
    githubUrl: "https://github.com/Abdulghani780/Graduation-Project-Management-Portal",
  },
];

const BADGE_COLORS: Record<string, string> = {
  "INTERACTIVE SIMULATION": "bg-[#00FF9D]/10 text-[#00FF9D] border-[#00FF9D]/30",
  "REAL LIVE DEMO": "bg-[#FFBD2E]/10 text-[#FFBD2E] border-[#FFBD2E]/30",
  "EMBEDDED DEMO": "bg-[#00F0FF]/10 text-[#00F0FF] border-[#00F0FF]/30",
  "REPOSITORY": "bg-zinc-900 text-zinc-400 border-zinc-700",
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
      className="relative w-full bg-[#04070D] text-white py-20 px-4 sm:px-8 lg:px-16 overflow-hidden"
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* Bioluminescent circuit grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,255,157,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,255,157,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Section ambient glow */}
      <div className="absolute top-32 right-1/4 w-[500px] h-[500px] bg-[#00FF9D]/[0.025] rounded-full blur-[130px] pointer-events-none" />

      {/* ── Section Header ── */}
      <div className="relative z-10 max-w-7xl mx-auto mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00FF9D]/08 border border-[#00FF9D]/25 font-mono text-[10px] tracking-[0.18em] text-[#00FF9D] uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D] animate-ping" />
            {isAr ? "SECTION 02 / المشاريع" : "SECTION 02 / PROJECTS"}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            {isAr ? "المشاريع الهندسية وواجهات الديمو" : "Core Systems & Live Environments"}
          </h2>
          <p className="text-zinc-500 text-sm mt-1 font-mono">
            {isAr ? "استكشف الكود المصدري، دراسات المعمارية، والمحاكاة المباشرة" : "Production systems with interactive browser runtimes, architecture case studies, and code repositories"}
          </p>
        </div>

        {/* Global links */}
        <div className="flex items-center gap-3">
          <Link
            href={`/${locale}/projects`}
            className="px-4 py-2 rounded-xl bg-zinc-900/90 border border-zinc-700/80 text-zinc-300 hover:text-white hover:border-[#00FF9D]/50 font-mono text-xs transition-all flex items-center gap-2"
          >
            <span>{isAr ? "عرض أرشيف المشاريع" : "View All Projects"}</span>
            <span className="text-[#00FF9D]">→</span>
          </Link>
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 font-mono text-xs text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-[#00FF9D] animate-pulse" />
            5 DEPLOYMENTS ONLINE
          </div>
        </div>
      </div>

      {/* ── BENTO GRID ── */}
      <div className="relative z-10 max-w-7xl mx-auto space-y-6">

        {/* TOP ROW: Featured Workstation (7 cols) + MetaAlgorithm Lab (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Campus IT Tracker — lg:col-span-7 */}
          <div className="lg:col-span-7 bg-[#070B12] rounded-2xl border border-[#00FF9D]/25 flex flex-col overflow-hidden shadow-[0_0_40px_-10px_rgba(0,255,157,0.12)] hover:border-[#00FF9D]/45 transition-all duration-300">
            {/* Header / Title bar */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-zinc-800/80 bg-[#060A10]" dir="ltr">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
                <span className="font-mono text-sm font-semibold text-white ml-2">
                  {isAr ? featured.nameAr : featured.name}
                </span>
              </div>
              <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono border ${BADGE_COLORS[featured.demoType]}`}>
                {featured.badge}
              </span>
            </div>

            {/* Preview image / canvas */}
            <div className="relative w-full h-56 sm:h-72 bg-[#030508] overflow-hidden border-b border-zinc-800/80">
              {featured.img ? (
                <Image
                  src={featured.img}
                  alt={featured.name}
                  fill
                  className="object-cover object-top hover:scale-[1.03] transition-transform duration-700"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="font-mono text-zinc-700 text-sm">No preview</span>
                </div>
              )}
              {/* Live overlay badge */}
              <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md border border-[#00FF9D]/30 font-mono text-[10px] text-[#00FF9D] flex items-center gap-1.5" dir="ltr">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D] animate-ping" />
                INTERACTIVE SIM ONLINE
              </div>
            </div>

            {/* Metrics row */}
            <div className="grid grid-cols-2 gap-3 px-5 py-4 border-b border-zinc-800/80">
              <div className="bg-[#04060A] rounded-xl border border-zinc-800 p-3">
                <div className="text-[10px] font-mono text-zinc-500 uppercase">{featured.metric1Label}</div>
                <div className="text-xl font-bold font-mono text-[#00FF9D]">{featured.metric1Value}</div>
              </div>
              <div className="bg-[#04060A] rounded-xl border border-zinc-800 p-3">
                <div className="text-[10px] font-mono text-zinc-500 uppercase">{featured.metric2Label}</div>
                <div className="text-xl font-bold font-mono text-white">{featured.metric2Value}</div>
              </div>
            </div>

            {/* Footer with Stack, GitHub, Case Study & Launch Demo */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4">
              <div className="flex flex-wrap gap-1.5">
                {featured.stack.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-300">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href={featured.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-300 hover:text-white font-mono text-xs transition-colors inline-flex items-center gap-1.5"
                  title="GitHub Repository"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>GitHub</span>
                </a>
                <Link
                  href={`/${locale}/projects/${featured.slug}`}
                  className="px-3.5 py-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-zinc-200 hover:text-white font-mono text-xs transition-colors inline-flex items-center gap-1.5"
                >
                  <span>{isAr ? "المعمارية" : "Architecture"}</span>
                  <span className="text-[#00FF9D]">→</span>
                </Link>
                <Link
                  href={`/${locale}/projects/${featured.slug}/demo`}
                  className="px-4 py-2 rounded-lg bg-[#00FF9D] text-black font-mono font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-[0_0_20px_rgba(0,255,157,0.4)] hover:shadow-[0_0_30px_rgba(0,255,157,0.7)] hover:scale-[1.02] active:scale-[0.97]"
                >
                  {isAr ? "تشغيل المحاكي" : "Launch Demo"}
                </Link>
              </div>
            </div>
          </div>

          {/* MetaAlgorithm Lab — lg:col-span-5 */}
          <div className="lg:col-span-5 bg-[#070B12] rounded-2xl border border-[#00F0FF]/20 flex flex-col overflow-hidden shadow-[0_0_35px_-8px_rgba(0,240,255,0.1)] hover:border-[#00F0FF]/40 transition-all duration-300">
            <div className="flex items-center justify-between px-5 py-3 border-b border-zinc-800/80 bg-[#060A10]" dir="ltr">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
                <span className="font-mono text-sm font-semibold text-white ml-2">
                  {isAr ? PROJECTS[1].nameAr : PROJECTS[1].name}
                </span>
              </div>
              <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono border ${BADGE_COLORS[PROJECTS[1].demoType]}`}>
                SIM
              </span>
            </div>

            <div className="flex-1 p-5 space-y-4">
              {/* Sort wave visualizer */}
              <div className="bg-[#04060A] rounded-xl border border-zinc-800 p-3">
                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 pb-2">
                  <span>Algorithm Visualizer</span>
                  <span className="text-[#00F0FF]">O(n log n)</span>
                </div>
                <SortWaves color="#00F0FF" />
                <div className="mt-2">
                  <div className="w-full bg-zinc-900 rounded-full h-1.5 overflow-hidden">
                    <div
                      className="bg-[#00F0FF] h-full rounded-full transition-all duration-500 shadow-[0_0_8px_#00F0FF]"
                      style={{ width: `${sortProgress}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[9px] font-mono text-zinc-500 pt-1">
                    <span>HeapSort running</span>
                    <span>{sortProgress}%</span>
                  </div>
                </div>
              </div>

              {/* Performance gauges */}
              <div className="flex items-center justify-around py-2">
                <AlgoCircle value={86} label="WASM" color="#00F0FF" />
                <AlgoCircle value={94} label="Accuracy" color="#00FF9D" />
                <AlgoCircle value={73} label="Coverage" color="#FFBD2E" />
              </div>

              {/* Terminal snippet (Strict LTR) */}
              <div className="bg-[#030508] rounded-xl border border-zinc-800 p-3 font-mono text-[10px] space-y-1 text-left" dir="ltr">
                <div className="text-emerald-400">[BENCH] Sort time: 3.14ms</div>
                <div className="text-[#00F0FF]">[MEM] Usage: 14.8MB / 64MB</div>
                <div className="flex items-center text-[#00FF9D]">
                  <span>&gt; _</span>
                  <span className="w-1.5 h-3 bg-[#00FF9D] type-cursor ml-1" />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 border-t border-zinc-800">
              <div className="flex flex-wrap gap-1.5">
                {PROJECTS[1].stack.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-400">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={PROJECTS[1].githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-400 hover:text-white transition-colors"
                  title="GitHub"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
                <Link
                  href={`/${locale}/projects/metaalgorithm-lab`}
                  className="px-2.5 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-zinc-300 text-[11px] font-mono transition-colors"
                >
                  {isAr ? "المعمارية" : "Docs"}
                </Link>
                <Link
                  href={`/${locale}/projects/metaalgorithm-lab/demo`}
                  className="px-3.5 py-1.5 rounded-lg bg-[#00F0FF] text-black font-mono font-bold text-xs uppercase hover:shadow-[0_0_20px_rgba(0,240,255,0.5)] transition-all"
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
              className="bg-[#070B12] rounded-2xl border border-zinc-800/80 flex flex-col overflow-hidden hover:border-zinc-700 transition-all duration-300"
              style={{ borderTopColor: `${project.accentColor}30` }}
            >
              {/* Top accent bar */}
              <div className="h-0.5 w-full" style={{ backgroundColor: project.accentColor, opacity: 0.4 }} />

              <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800/80">
                <span className="font-mono text-sm font-semibold text-white">
                  {isAr ? project.nameAr : project.name}
                </span>
                <span
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-mono border"
                  style={{
                    color: project.accentColor,
                    backgroundColor: `${project.accentColor}15`,
                    borderColor: `${project.accentColor}35`,
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: project.accentColor }} />
                  ONLINE
                </span>
              </div>

              {project.img && (
                <div className="relative w-full h-36 bg-[#04060A] overflow-hidden border-b border-zinc-800/80">
                  <Image
                    src={project.img}
                    alt={project.name}
                    fill
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070B12] via-transparent to-transparent opacity-50" />
                </div>
              )}

              <div className="flex-1 p-4 space-y-2.5">
                <div className="bg-[#04060A] rounded-lg border border-zinc-800 p-2.5 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-zinc-400">{project.metric1Label}</span>
                  <span className="font-mono text-sm font-bold" style={{ color: project.accentColor }}>
                    {project.metric1Value}
                  </span>
                </div>
                <div className="bg-[#04060A] rounded-lg border border-zinc-800 p-2.5 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-zinc-400">{project.metric2Label}</span>
                  <span className="font-mono text-sm font-bold text-white">{project.metric2Value}</span>
                </div>
                {/* Mini bar chart */}
                <div className="bg-[#04060A] rounded-lg border border-zinc-800 p-2 h-10 flex items-end gap-0.5">
                  {[40, 60, 50, 80, 65, 90, 70, 85, 55].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t"
                      style={{ height: `${h}%`, backgroundColor: project.accentColor, opacity: 0.45 }}
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between gap-2 px-4 py-3 border-t border-zinc-800">
                <div className="flex items-center gap-1.5">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-400 hover:text-white transition-colors"
                    title="GitHub"
                  >
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>
                  <Link
                    href={`/${locale}/projects/${project.slug}`}
                    className="px-2 py-1 rounded bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-[10px] font-mono text-zinc-400 hover:text-zinc-200 transition-colors"
                  >
                    {isAr ? "المعمارية" : "Docs"}
                  </Link>
                </div>
                <Link
                  href={`/${locale}/projects/${project.slug}/demo`}
                  className="flex-shrink-0 px-3 py-1 rounded-md font-mono font-bold text-xs uppercase transition-all hover:scale-[1.03]"
                  style={{
                    backgroundColor: project.accentColor,
                    color: "#000",
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
