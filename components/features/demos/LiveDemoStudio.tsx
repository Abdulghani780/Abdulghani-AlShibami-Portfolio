"use client";

import React, { useState } from "react";
import { Locale } from "@/types/project";
import { CampusITTrackerSimulation } from "@/demos/simulations/CampusITTrackerSimulation";
import { MetaAlgorithmLabSimulation } from "@/demos/simulations/MetaAlgorithmLabSimulation";
import { LayoutGrid, Split, Terminal, Cpu, Database, Wifi } from "lucide-react";

interface LiveDemoStudioProps {
  locale: Locale;
}

export function LiveDemoStudio({ locale }: LiveDemoStudioProps) {
  const isRtl = locale === "ar";
  const [layoutMode, setLayoutMode] = useState<"dual" | "campus" | "algo">("dual");

  return (
    <div className="w-full space-y-6 font-mono select-none">
      {/* Studio Header Bar matching Reference 2 */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-[#0B1120] text-xs shadow-sm dark:shadow-lg transition-colors">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 dark:bg-emerald-400 motion-safe:animate-ping" />
          <span className="font-bold text-slate-900 dark:text-white tracking-wider text-sm">
            {isRtl ? "معمل المحاكاة الحية المزدوج" : "LIVE INTERACTIVE DEMO STUDIO"}
          </span>
          <span className="text-slate-400 dark:text-slate-500 hidden sm:inline">|</span>
          <span className="text-[10px] text-slate-500 dark:text-slate-400 hidden md:inline">
            {"// WORKSTATION RUNTIME MULTI-SANDBOX"}
          </span>
        </div>

        {/* Layout Switcher: Dual / Campus IT / MetaAlgorithm */}
        <div className="flex items-center gap-1.5 p-1 rounded-lg bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-[11px]">
          <button
            type="button"
            onClick={() => setLayoutMode("dual")}
            className={`px-3 py-1 rounded transition-all flex items-center gap-1.5 cursor-pointer ${
              layoutMode === "dual"
                ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-bold shadow-[0_0_12px_rgba(99,102,241,0.3)]"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <Split className="w-3.5 h-3.5" />
            <span>{isRtl ? "عرض مزدوج" : "Dual Workstation"}</span>
          </button>
          <button
            type="button"
            onClick={() => setLayoutMode("campus")}
            className={`px-2.5 py-1 rounded transition-all cursor-pointer ${
              layoutMode === "campus"
                ? "bg-indigo-600 dark:bg-indigo-500 text-white font-bold"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <span>Campus IT</span>
          </button>
          <button
            type="button"
            onClick={() => setLayoutMode("algo")}
            className={`px-2.5 py-1 rounded transition-all cursor-pointer ${
              layoutMode === "algo"
                ? "bg-cyan-600 dark:bg-cyan-500 text-white font-bold"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <span>Algo Lab</span>
          </button>
        </div>
      </div>

      {/* Main Workstation Studio Grid */}
      <div className={`grid gap-6 ${layoutMode === "dual" ? "grid-cols-1 xl:grid-cols-2" : "grid-cols-1"}`}>
        {/* Workstation 1: Campus IT Tracker */}
        {(layoutMode === "dual" || layoutMode === "campus") && (
          <div className="space-y-2">
            <div className="flex items-center justify-between px-2 text-[11px] text-slate-400">
              <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>WORKSTATION_01 // CAMPUS IT INFRASTRUCTURE</span>
              </span>
              <span className="text-slate-500">PORT: 1521 (ORACLE)</span>
            </div>
            <div className="rounded-2xl overflow-hidden border border-slate-800">
              <CampusITTrackerSimulation locale={locale} isRtl={isRtl} />
            </div>
          </div>
        )}

        {/* Workstation 2: MetaAlgorithm Lab */}
        {(layoutMode === "dual" || layoutMode === "algo") && (
          <div className="space-y-2">
            <div className="flex items-center justify-between px-2 text-[11px] text-white/60">
              <span className="text-cyan-400 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>WORKSTATION_02 // METAALGORITHM COMPLEXITY BENCH</span>
              </span>
              <span className="text-white/40">ENGINE: WASM CORE</span>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/[0.08]">
              <MetaAlgorithmLabSimulation locale={locale} isRtl={isRtl} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
