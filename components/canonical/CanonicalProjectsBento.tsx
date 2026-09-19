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
  },
  {
    slug: "cafena",
    name: "Cafena Coffee Suite",
    nameAr: "منظومة كافينا للكافيه",
    stack: ["HTML/CSS", "JavaScript"],
    badge: "REAL LIVE DEMO",
    img: "/images/projects/cafena/01-storefront-hero.webp",
    metric1Label: "Sales",
    metric1Value: "$12,650",
    metric2Label: "Orders",
    metric2Value: "412 / day",
    demoType: "REAL LIVE DEMO",
    accentColor: "#FFBD2E",
  },
  {
    slug: "novatech",
    name: "NovaTech Cloud Store",
    nameAr: "متجر نوفاتك السحابي",
    stack: ["HTML/CSS", "JavaScript"],
    badge: "REAL LIVE DEMO",
    metric1Label: "Products",
    metric1Value: "350 SKUs",
    metric2Label: "Uptime",
    metric2Value: "99.8%",
    demoType: "REAL LIVE DEMO",
    accentColor: "#00F0FF",
  },
  {
    slug: "gp",
    name: "GP Graduation Platform",
    nameAr: "منصة مشاريع التخرج",
    stack: ["PHP", "MySQL", "Bootstrap"],
    badge: "EMBEDDED DEMO",
    metric1Label: "Students",
    metric1Value: "Active Queue",
    metric2Label: "Defense",
    metric2Value: "Stage 3/4",
    demoType: "EMBEDDED DEMO",
    accentColor: "#00FF9D",
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
            {isAr ? (
              <>استعراض المشاريع <span className="text-[#00FF9D]">الحية</span></>
            ) : (
              <>Flagship <span className="text-[#00FF9D]">Projects Showcase</span></>
            )}
          </h2>
        </div>
        <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-400">
          <span className="w-2 h-2 rounded-full bg-[#00FF9D] animate-ping" />
          {isAr ? "5 مشاريع نشطة" : "5 ACTIVE PROJECT INSTANCES"}
        </div>
      </div>

      {/* ── ASYMMETRIC BENTO GRID ── */}
      <div className="relative z-10 max-w-7xl mx-auto space-y-6">

        {/* TOP ROW: Featured (tall) + MetaAlgorithm Lab */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* FEATURED CARD: Campus IT Tracker (tall) — lg:col-span-7 */}
          <div className="lg:col-span-7 bg-[#070B12] rounded-2xl border border-[#00FF9D]/25 flex flex-col overflow-hidden shadow-[0_0_40px_-8px_rgba(0,255,157,0.15)] hover:border-[#00FF9D]/50 hover:shadow-[0_0_50px_-5px_rgba(0,255,157,0.25)] transition-all duration-300 group">
            {/* Window chrome */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-zinc-800/80 bg-[#060A10]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
                <span className="font-mono text-sm font-semibold text-white ml-2">
                  {isAr ? featured.nameAr : featured.name}
                </span>
              </div>
              <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-medium border ${BADGE_COLORS[featured.demoType]}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D] animate-pulse" />
                LIVE DEMO
              </span>
            </div>

            {/* App screenshot or live mockup */}
            <div className="relative w-full h-52 sm:h-64 bg-[#04060A] overflow-hidden">
              {featured.img ? (
                <Image
                  src={featured.img}
                  alt={`${featured.name} dashboard`}
                  fill
                  className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="font-mono text-zinc-700 text-sm">No preview</span>
                </div>
              )}
              {/* Live overlay badge */}
              <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-sm border border-[#00FF9D]/30 font-mono text-[10px] text-[#00FF9D] flex items-center gap-1.5">
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

            {/* Footer */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4">
              <div className="flex flex-wrap gap-1.5">
                {featured.stack.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-300">
                    {t}
                  </span>
                ))}
              </div>
              <Link
                href={`/${locale}/projects/${featured.slug}/demo`}
                className="px-5 py-2.5 rounded-lg bg-[#00FF9D] text-black font-mono font-semibold text-xs tracking-wider uppercase transition-all duration-200 shadow-[0_0_20px_rgba(0,255,157,0.4)] hover:shadow-[0_0_30px_rgba(0,255,157,0.7)] hover:scale-[1.02] active:scale-[0.97]"
              >
                {isAr ? "تشغيل ديمو المحطة" : "Launch Workstation Demo"}
              </Link>
            </div>
          </div>

          {/* MetaAlgorithm Lab — lg:col-span-5 */}
          <div className="lg:col-span-5 bg-[#070B12] rounded-2xl border border-[#00F0FF]/20 flex flex-col overflow-hidden shadow-[0_0_35px_-8px_rgba(0,240,255,0.1)] hover:border-[#00F0FF]/40 transition-all duration-300">
            <div className="flex items-center justify-between px-5 py-3 border-b border-zinc-800/80 bg-[#060A10]">
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

              {/* Terminal snippet */}
              <div className="bg-[#030508] rounded-xl border border-zinc-800 p-3 font-mono text-[10px] space-y-1">
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
              <Link
                href={`/${locale}/projects/metaalgorithm-lab/demo`}
                className="px-4 py-2 rounded-lg bg-[#00F0FF] text-black font-mono font-semibold text-xs uppercase hover:shadow-[0_0_20px_rgba(0,240,255,0.5)] transition-all"
              >
                {isAr ? "تشغيل" : "Launch Demo"}
              </Link>
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
                <div className="flex flex-wrap gap-1">
                  {project.stack.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-900 text-zinc-500 border border-zinc-800">
                      {t}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/${locale}/projects/${project.slug}/demo`}
                  className="flex-shrink-0 px-3.5 py-1.5 rounded-md font-mono font-semibold text-xs uppercase transition-all hover:scale-[1.03]"
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
