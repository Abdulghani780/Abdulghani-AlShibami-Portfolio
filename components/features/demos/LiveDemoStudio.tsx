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
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl border border-border/10 dark:border-border/10 bg-surface dark:bg-surfaceElevated text-xs shadow-sm dark:shadow-lg transition-colors">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-status-success dark:bg-status-success motion-safe:animate-ping" />
          <span className="font-bold text-foreground dark:text-foreground tracking-wider text-sm">
            {isRtl ? "معمل المحاكاة الحية المزدوج" : "LIVE INTERACTIVE DEMO STUDIO"}
          </span>
          <span className="text-muted-foreground dark:text-muted-foreground hidden sm:inline">|</span>
          <span className="text-[10px] text-muted-foreground dark:text-muted-foreground hidden md:inline">
            {"// WORKSTATION RUNTIME MULTI-SANDBOX"}
          </span>
        </div>

        {/* Layout Switcher: Dual / Campus IT / MetaAlgorithm */}
        <div className="flex items-center gap-1.5 p-1 rounded-lg bg-surfaceOverlay dark:bg-surfaceOverlay border border-border/10 dark:border-border/10 text-[11px]">
          <button
            type="button"
            onClick={() => setLayoutMode("dual")}
            className={`px-3 py-1 rounded transition-all flex items-center gap-1.5 cursor-pointer ${
              layoutMode === "dual"
                ? "bg-brand text-background font-bold shadow-md"
                : "text-muted-foreground dark:text-muted-foreground hover:text-foreground dark:hover:text-foreground"
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
                ? "bg-brand text-background font-bold"
                : "text-muted-foreground dark:text-muted-foreground hover:text-foreground dark:hover:text-foreground"
            }`}
          >
            <span>Campus IT</span>
          </button>
          <button
            type="button"
            onClick={() => setLayoutMode("algo")}
            className={`px-2.5 py-1 rounded transition-all cursor-pointer ${
              layoutMode === "algo"
                ? "bg-brandLight/20 text-brandLight font-bold"
                : "text-muted-foreground dark:text-muted-foreground hover:text-foreground dark:hover:text-foreground"
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
            <div className="flex items-center justify-between px-2 text-[11px] text-muted-foreground dark:text-muted-foreground">
              <span className="text-status-success font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-status-success" />
                <span>WORKSTATION_01 // CAMPUS IT INFRASTRUCTURE</span>
              </span>
              <span className="text-muted-foreground dark:text-muted-foreground">PORT: 1521 (ORACLE)</span>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border/10 dark:border-border/10">
              <CampusITTrackerSimulation locale={locale} isRtl={isRtl} />
            </div>
          </div>
        )}

        {/* Workstation 2: MetaAlgorithm Lab */}
        {(layoutMode === "dual" || layoutMode === "algo") && (
          <div className="space-y-2">
            <div className="flex items-center justify-between px-2 text-[11px] text-muted-foreground dark:text-muted-foreground">
              <span className="text-brand dark:text-brandLight font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand dark:bg-brandLight" />
                <span>WORKSTATION_02 // METAALGORITHM COMPLEXITY BENCH</span>
              </span>
              <span className="text-muted-foreground dark:text-muted-foreground">ENGINE: WASM CORE</span>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border/10 dark:border-border/10">
              <MetaAlgorithmLabSimulation locale={locale} isRtl={isRtl} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}