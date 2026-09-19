"use client";

import React from "react";
import Link from "next/link";
import { Locale } from "@/lib/i18n/dictionaries";

interface CanonicalProjectsBentoProps {
  locale: Locale;
}

export function CanonicalProjectsBento({ locale }: CanonicalProjectsBentoProps) {
  const isAr = locale === "ar";

  return (
    <section id="projects" className="relative w-full bg-[#05080E] text-white py-16 px-4 sm:px-8 lg:px-12 border-b border-[#00FF9D]/15 overflow-hidden">
      {/* Background Circuit Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,157,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,157,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* ─────────────────────────────────────────────────────────────
          HEADER (Exact to Reference 4: ABDULGHANI AL-SHIBAMI | PROJECT SHOWCASE)
      ───────────────────────────────────────────────────────────── */}
      <div className="relative z-10 flex items-center justify-between pb-10 max-w-7xl mx-auto">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white uppercase">
            ABDULGHANI AL-SHIBAMI <span className="text-[#00FF9D]">| {isAr ? "استعراض المشاريع الحية" : "PROJECT SHOWCASE"}</span>
          </h2>
        </div>
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00FF9D] animate-ping" />
          <span className="font-mono text-xs text-[#00FF9D] font-medium uppercase tracking-wider">
            {isAr ? "5 نُظم تشغيلية متصلة" : "5 ACTIVE INSTANCES"}
          </span>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          BENTO GRID (Connected by glowing circuit lines)
      ───────────────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto space-y-8">
        {/* TOP ROW: 2 Large Cards (Campus IT Tracker & MetaAlgorithm Lab) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Campus IT Tracker */}
          <div className="bg-[#070A0F] rounded-2xl border border-[#00FF9D]/25 p-5 flex flex-col justify-between shadow-[0_0_30px_-5px_rgba(0,255,157,0.12)] hover:border-[#00FF9D]/50 transition-all duration-300 relative group">
            {/* Window Chrome */}
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56] inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F] inline-block" />
                <span className="font-mono text-sm font-semibold text-white pl-2">
                  Campus IT Tracker
                </span>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-medium tracking-wider bg-[#00FF9D]/15 text-[#00FF9D] border border-[#00FF9D]/30 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D] animate-pulse" />
                ONLINE LIVE INSTANCE
              </span>
            </div>

            {/* Dashboard Content Mockup */}
            <div className="py-4 grid grid-cols-1 sm:grid-cols-12 gap-3 items-stretch">
              {/* Floorplan Map (sm:col-span-8) */}
              <div className="sm:col-span-8 bg-[#04060A] rounded-xl border border-zinc-800/80 p-3 flex flex-col justify-between relative min-h-[170px]">
                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 pb-2">
                  <span>Campus Floorplan v2.1</span>
                  <span className="text-[#00FF9D]">100% Signal</span>
                </div>
                {/* Visual architectural rooms */}
                <div className="relative w-full h-28 border border-zinc-800/60 rounded-lg p-2 grid grid-cols-3 gap-2 bg-[#020306]">
                  <div className="border border-zinc-800 rounded p-1 flex items-center justify-center relative">
                    <span className="w-2 h-2 rounded-full bg-[#00FF9D] shadow-[0_0_8px_#00FF9D]" />
                    <span className="absolute bottom-1 text-[8px] font-mono text-zinc-500">Rack_A</span>
                  </div>
                  <div className="border border-zinc-800 rounded p-1 flex items-center justify-center relative bg-[#00FF9D]/5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00F0FF] shadow-[0_0_10px_#00F0FF] animate-pulse" />
                    <span className="absolute bottom-1 text-[8px] font-mono text-zinc-400">Server Hub</span>
                  </div>
                  <div className="border border-zinc-800 rounded p-1 flex items-center justify-center relative">
                    <span className="w-2 h-2 rounded-full bg-[#00FF9D]" />
                    <span className="absolute bottom-1 text-[8px] font-mono text-zinc-500">Lab_04</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-[9px] font-mono text-zinc-400 pt-2">
                  <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D]" /> Servers</span>
                  <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" /> Network</span>
                  <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Users</span>
                </div>
              </div>

              {/* Metrics & Blueprints (sm:col-span-4) */}
              <div className="sm:col-span-4 flex flex-col gap-2 justify-between">
                <div className="bg-[#04060A] rounded-xl border border-zinc-800/80 p-2.5">
                  <div className="text-[10px] font-mono text-zinc-500 uppercase">Assets</div>
                  <div className="text-xl font-bold font-mono text-[#00FF9D]">1,450+</div>
                </div>
                <div className="bg-[#04060A] rounded-xl border border-zinc-800/80 p-2.5">
                  <div className="text-[10px] font-mono text-zinc-500 uppercase">Helpdesk</div>
                  <div className="text-xl font-bold font-mono text-white">21 Active</div>
                </div>
                <div className="bg-[#04060A] rounded-xl border border-zinc-800/80 p-2 flex items-center justify-between text-[10px] font-mono text-zinc-400">
                  <span>Blueprint</span>
                  <span className="text-[#00F0FF]">Ready</span>
                </div>
              </div>
            </div>

            {/* Footer Tech Badges & Launch Action */}
            <div className="pt-3 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {["Next.js", "TypeScript", "PostgreSQL", "Docker"].map((tech) => (
                  <span key={tech} className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-300">
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                href={`/${locale}/projects/campus-it-tracker/demo`}
                className="px-5 py-2 rounded-lg bg-[#00FF9D] text-black font-mono font-semibold text-xs tracking-wider uppercase transition-all duration-200 shadow-[0_0_20px_rgba(0,255,157,0.4)] hover:shadow-[0_0_25px_rgba(0,255,157,0.7)] hover:scale-[1.02] active:scale-[0.98]"
              >
                {isAr ? "تشغيل ديمو المحطة" : "Launch Workstation Demo"}
              </Link>
            </div>
          </div>

          {/* Card 2: MetaAlgorithm Lab */}
          <div className="bg-[#070A0F] rounded-2xl border border-[#00FF9D]/25 p-5 flex flex-col justify-between shadow-[0_0_30px_-5px_rgba(0,255,157,0.12)] hover:border-[#00FF9D]/50 transition-all duration-300 relative group">
            {/* Window Chrome */}
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56] inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F] inline-block" />
                <span className="font-mono text-sm font-semibold text-white pl-2">
                  MetaAlgorithm Lab
                </span>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-medium tracking-wider bg-[#00FF9D]/15 text-[#00FF9D] border border-[#00FF9D]/30 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D] animate-pulse" />
                ONLINE LIVE INSTANCE
              </span>
            </div>

            {/* Dashboard Content Mockup */}
            <div className="py-4 grid grid-cols-1 sm:grid-cols-12 gap-3 items-stretch">
              {/* Algorithm curves (sm:col-span-8) */}
              <div className="sm:col-span-8 bg-[#04060A] rounded-xl border border-zinc-800/80 p-3 flex flex-col justify-between relative min-h-[170px]">
                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 pb-2">
                  <span>Data Visualization & Sorting Waves</span>
                  <span className="text-[#00FF9D]">O(n log n)</span>
                </div>
                {/* Visual SVG curve */}
                <div className="relative w-full h-28 border border-zinc-800/60 rounded-lg p-2 flex items-center justify-center bg-[#020306] overflow-hidden">
                  <svg className="w-full h-full" viewBox="0 0 240 80" fill="none">
                    <path
                      d="M 0 65 Q 40 60, 80 45 T 160 30 T 240 10"
                      stroke="#00FF9D"
                      strokeWidth="2"
                    />
                    <path
                      d="M 0 75 Q 60 70, 120 60 T 200 40 T 240 25"
                      stroke="#00F0FF"
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                    />
                    <circle cx="240" cy="10" r="4" fill="#00FF9D" />
                  </svg>
                </div>
                <div className="flex items-center justify-between text-[9px] font-mono text-zinc-400 pt-2">
                  <span>Sorting Performance: 98%</span>
                  <span className="text-[#00F0FF]">HeapSort Benchmark</span>
                </div>
              </div>

              {/* Radial Score Gauge (sm:col-span-4) */}
              <div className="sm:col-span-4 flex flex-col gap-2 justify-between">
                <div className="bg-[#04060A] rounded-xl border border-zinc-800/80 p-3 flex flex-col items-center justify-center text-center">
                  <div className="text-[10px] font-mono text-zinc-500 uppercase pb-1">WASM Performance</div>
                  <div className="relative w-14 h-14 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-zinc-800"
                        strokeWidth="3"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-[#00FF9D]"
                        strokeDasharray="86, 100"
                        strokeWidth="3"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <span className="absolute font-mono text-xs font-bold text-white">86%</span>
                  </div>
                </div>
                <div className="bg-[#04060A] rounded-xl border border-zinc-800/80 p-2 text-center">
                  <div className="text-[9px] font-mono text-zinc-500 uppercase">Engine</div>
                  <div className="text-xs font-bold font-mono text-[#00FF9D]">C# WASM Core</div>
                </div>
              </div>
            </div>

            {/* Footer Tech Badges & Launch Action */}
            <div className="pt-3 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {["React", "Python", "C++", "WASM", "Tailwind CSS"].map((tech) => (
                  <span key={tech} className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-300">
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                href={`/${locale}/projects/metaalgorithm-lab/demo`}
                className="px-5 py-2 rounded-lg bg-[#00FF9D] text-black font-mono font-semibold text-xs tracking-wider uppercase transition-all duration-200 shadow-[0_0_20px_rgba(0,255,157,0.4)] hover:shadow-[0_0_25px_rgba(0,255,157,0.7)] hover:scale-[1.02] active:scale-[0.98]"
              >
                {isAr ? "تشغيل الديمو" : "Launch Demo"}
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW: 3 Columns (Cafena, NovaTech, GP) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 3: Cafena Coffee Suite */}
          <div className="bg-[#070A0F] rounded-2xl border border-[#00FF9D]/20 p-4 flex flex-col justify-between shadow-lg hover:border-[#00FF9D]/40 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                <span className="font-mono text-sm font-semibold text-white">Cafena Coffee Suite</span>
                <span className="px-2 py-0.5 rounded-full text-[9px] font-mono bg-[#00FF9D]/10 text-[#00FF9D]">
                  ● ONLINE
                </span>
              </div>
              <div className="py-3 space-y-2">
                <div className="bg-[#04060A] rounded-lg p-2.5 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-zinc-400">Total Sales</span>
                  <span className="font-mono text-sm font-bold text-[#00FF9D]">$12,650</span>
                </div>
                <div className="bg-[#04060A] rounded-lg p-2.5 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-zinc-400">Orders Processed</span>
                  <span className="font-mono text-sm font-bold text-white">412</span>
                </div>
                <div className="h-10 bg-[#04060A] rounded-lg p-1.5 flex items-end justify-between gap-1">
                  {[30, 45, 60, 40, 80, 75, 90, 65, 85].map((h, i) => (
                    <div key={i} className="flex-1 bg-[#00FF9D]/50 rounded-t" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </div>
            <div className="pt-3 border-t border-zinc-800 flex items-center justify-between gap-2">
              <div className="flex flex-wrap gap-1">
                {["C#", "ASP.NET", "Supabase"].map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-900 text-zinc-400">
                    {t}
                  </span>
                ))}
              </div>
              <Link
                href={`/${locale}/projects/cafena/demo`}
                className="px-3.5 py-1.5 rounded-md bg-[#00FF9D] text-black font-mono font-semibold text-xs uppercase hover:shadow-[0_0_15px_#00FF9D]"
              >
                {isAr ? "ديمو" : "Launch Demo"}
              </Link>
            </div>
          </div>

          {/* Card 4: NovaTech Cloud */}
          <div className="bg-[#070A0F] rounded-2xl border border-[#00FF9D]/20 p-4 flex flex-col justify-between shadow-lg hover:border-[#00FF9D]/40 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                <span className="font-mono text-sm font-semibold text-white">NovaTech Cloud</span>
                <span className="px-2 py-0.5 rounded-full text-[9px] font-mono bg-[#00FF9D]/10 text-[#00FF9D]">
                  ● ONLINE
                </span>
              </div>
              <div className="py-3 space-y-2">
                <div className="bg-[#04060A] rounded-lg p-2.5 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-zinc-400">Cloud Nodes</span>
                  <span className="font-mono text-sm font-bold text-[#00FF9D]">350 Nodes</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-[#04060A] rounded-lg p-2 text-center">
                    <span className="text-[10px] font-mono text-zinc-500">CPU LOAD</span>
                    <div className="font-mono text-sm font-bold text-white">49%</div>
                  </div>
                  <div className="bg-[#04060A] rounded-lg p-2 text-center">
                    <span className="text-[10px] font-mono text-zinc-500">LATENCY</span>
                    <div className="font-mono text-sm font-bold text-[#00F0FF]">12ms</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-3 border-t border-zinc-800 flex items-center justify-between gap-2">
              <div className="flex flex-wrap gap-1">
                {["AWS", "K8s", "Go"].map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-900 text-zinc-400">
                    {t}
                  </span>
                ))}
              </div>
              <Link
                href={`/${locale}/projects/novatech/demo`}
                className="px-3.5 py-1.5 rounded-md bg-[#00FF9D] text-black font-mono font-semibold text-xs uppercase hover:shadow-[0_0_15px_#00FF9D]"
              >
                {isAr ? "ديمو" : "Launch Demo"}
              </Link>
            </div>
          </div>

          {/* Card 5: GP Graduation Platform */}
          <div className="bg-[#070A0F] rounded-2xl border border-[#00FF9D]/20 p-4 flex flex-col justify-between shadow-lg hover:border-[#00FF9D]/40 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                <span className="font-mono text-sm font-semibold text-white">GP Graduation Platform</span>
                <span className="px-2 py-0.5 rounded-full text-[9px] font-mono bg-[#00FF9D]/10 text-[#00FF9D]">
                  ● ONLINE
                </span>
              </div>
              <div className="py-3 space-y-2">
                <div className="bg-[#04060A] rounded-lg p-2.5 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-zinc-400">Student Portals</span>
                  <span className="font-mono text-sm font-bold text-[#00FF9D]">Active Queue</span>
                </div>
                <div className="bg-[#04060A] rounded-lg p-2.5 space-y-1">
                  <div className="flex justify-between text-[10px] font-mono text-zinc-400">
                    <span>Defense Review</span>
                    <span className="text-[#00FF9D]">Stage 3/4</span>
                  </div>
                  <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-[#00FF9D] h-full w-3/4 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-3 border-t border-zinc-800 flex items-center justify-between gap-2">
              <div className="flex flex-wrap gap-1">
                {["Vue.js", "Node.js", "Redis"].map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-900 text-zinc-400">
                    {t}
                  </span>
                ))}
              </div>
              <Link
                href={`/${locale}/projects/gp/demo`}
                className="px-3.5 py-1.5 rounded-md bg-[#00FF9D] text-black font-mono font-semibold text-xs uppercase hover:shadow-[0_0_15px_#00FF9D]"
              >
                {isAr ? "ديمو" : "Launch Demo"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
