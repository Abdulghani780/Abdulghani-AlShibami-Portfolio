"use client";

import React from "react";

interface ProjectPreviewMockupProps {
  projectSlug: string;
  variant?: "card" | "row";
  className?: string;
}

export function ProjectPreviewMockup({
  projectSlug,
  variant = "card",
  className = "",
}: ProjectPreviewMockupProps) {
  if (projectSlug === "campus-it-tracker") {
    return (
      <div
        className={`relative w-full h-full bg-[#090C10] rounded-lg border border-white/[0.08] overflow-hidden p-2.5 font-mono text-[10px] flex flex-col justify-between select-none ${className}`}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-1.5 text-white/50">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2 h-2 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-2 h-2 rounded-full bg-green-500/80 inline-block" />
            <span className="text-[9px] text-white/70 ms-1 font-semibold">CampusIT_v2.4.exe</span>
          </div>
          <span className="text-emerald-400 text-[9px] bg-emerald-950/60 border border-emerald-800/50 px-1.5 py-0.2 rounded">
            ORACLE 10g: CONNECTED
          </span>
        </div>

        {/* Floorplan & Asset Grid */}
        <div className="grid grid-cols-3 gap-1.5 my-1.5 flex-1">
          <div className="rounded bg-white/[0.03] border border-white/[0.05] p-1.5 flex flex-col justify-between">
            <span className="text-white/40 text-[8px]">LAB_01 (CS)</span>
            <div className="space-y-0.5 my-0.5">
              <div className="h-1 bg-emerald-500/60 rounded w-4/5" />
              <div className="h-1 bg-emerald-500/40 rounded w-3/5" />
            </div>
            <span className="text-white/80 text-[8px] font-semibold">24 / 24 Online</span>
          </div>
          <div className="rounded bg-white/[0.03] border border-white/[0.05] p-1.5 flex flex-col justify-between">
            <span className="text-white/40 text-[8px]">SERVER_RM</span>
            <div className="space-y-0.5 my-0.5">
              <div className="h-1 bg-emerald-500/70 rounded w-full" />
              <div className="h-1 bg-gold/60 rounded w-2/5" />
            </div>
            <span className="text-gold text-[8px] font-semibold">1 Warning</span>
          </div>
          <div className="rounded bg-white/[0.03] border border-white/[0.05] p-1.5 flex flex-col justify-between">
            <span className="text-white/40 text-[8px]">ITIL_KANBAN</span>
            <div className="space-y-0.5 my-0.5">
              <div className="h-1 bg-blue-500/60 rounded w-3/4" />
              <div className="h-1 bg-purple-500/50 rounded w-1/2" />
            </div>
            <span className="text-blue-300 text-[8px] font-semibold">7 Triage Open</span>
          </div>
        </div>

        {/* Telemetry Footer */}
        <div className="flex items-center justify-between text-[8px] text-white/40 pt-1 border-t border-white/[0.05]">
          <span>Custody Audit: OK</span>
          <span className="text-white/60">40+ Managed Assets</span>
        </div>
      </div>
    );
  }

  if (projectSlug === "metaalgorithm-lab") {
    return (
      <div
        className={`relative w-full h-full bg-[#090C10] rounded-lg border border-white/[0.08] overflow-hidden p-2.5 font-mono text-[10px] flex flex-col justify-between select-none ${className}`}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-1.5 text-white/50">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-500/80 inline-block" />
            <span className="text-[9px] text-white/70 font-semibold">MetaAlgo_Workbench.py</span>
          </div>
          <span className="text-cyan-400 text-[9px] bg-cyan-950/60 border border-cyan-800/50 px-1.5 py-0.2 rounded">
            O(n log n) BENCHMARK
          </span>
        </div>

        {/* Chart Visualization Simulation */}
        <div className="relative flex-1 my-1.5 flex items-end justify-between gap-1 px-2 pt-2 pb-1 bg-black/40 rounded border border-white/[0.04]">
          <div className="absolute top-1.5 start-2 text-[8px] text-white/40">
            Runtime vs Input Size (n)
          </div>
          <div className="w-2 bg-cyan-500/40 rounded-t h-[25%]" />
          <div className="w-2 bg-cyan-500/60 rounded-t h-[40%]" />
          <div className="w-2 bg-cyan-500/80 rounded-t h-[60%]" />
          <div className="w-2 bg-gold/80 rounded-t h-[80%]" />
          <div className="w-2 bg-purple-500/80 rounded-t h-[95%]" />
          <div className="w-2 bg-blue-500/70 rounded-t h-[70%]" />
          <div className="w-2 bg-emerald-500/70 rounded-t h-[50%]" />
        </div>

        {/* Telemetry Footer */}
        <div className="flex items-center justify-between text-[8px] text-white/40 pt-1 border-t border-white/[0.05]">
          <span>Engine: PyQt6 + NumPy</span>
          <span className="text-cyan-300 font-semibold">Empirical O(n)</span>
        </div>
      </div>
    );
  }

  if (projectSlug === "novatech") {
    return (
      <div
        className={`relative w-full h-full bg-[#090C10] rounded-lg border border-white/[0.08] overflow-hidden p-2.5 font-mono text-[10px] flex flex-col justify-between select-none ${className}`}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-1.5 text-white/50">
          <span className="text-gold font-bold text-[9px] tracking-wider">NOVATECH // STORE</span>
          <span className="text-emerald-400 text-[8px] bg-emerald-950/50 px-1 rounded">LIVE NEXT.JS</span>
        </div>

        {/* Product Catalog Mockup */}
        <div className="flex-1 my-1.5 flex items-center justify-between gap-2 p-1.5 bg-black/40 rounded border border-white/[0.04]">
          <div className="w-10 h-10 rounded bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-gold text-base">
            ⚡
          </div>
          <div className="flex-1 min-w-0 space-y-0.5">
            <div className="text-white/90 text-[9px] font-semibold truncate">Pro Wireless Audio</div>
            <div className="text-white/40 text-[8px]">Active Noise Cancellation</div>
            <div className="text-gold text-[9px] font-mono font-bold">$249.00</div>
          </div>
        </div>

        {/* Telemetry Footer */}
        <div className="flex items-center justify-between text-[8px] text-white/40 pt-1 border-t border-white/[0.05]">
          <span>Cart Telemetry: Active</span>
          <span className="text-white/70">Tailwind + React</span>
        </div>
      </div>
    );
  }

  if (projectSlug === "graduation-project-portal" || projectSlug === "gp") {
    return (
      <div
        className={`relative w-full h-full bg-[#090C10] rounded-lg border border-white/[0.08] overflow-hidden p-2.5 font-mono text-[10px] flex flex-col justify-between select-none ${className}`}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-1.5 text-white/50">
          <span className="text-purple-400 font-bold text-[9px]">GP_PORTAL // ACADEMIC</span>
          <span className="text-white/40 text-[8px]">PHP 8 + MySQL</span>
        </div>

        {/* Proposal Lifecycle Pipeline */}
        <div className="flex-1 my-1.5 flex flex-col justify-around py-0.5">
          <div className="flex items-center justify-between text-[8px]">
            <span className="text-white/60">Proposal Review</span>
            <span className="text-emerald-400 font-semibold">APPROVED (94/100)</span>
          </div>
          <div className="h-1 bg-white/10 rounded overflow-hidden">
            <div className="h-full bg-purple-500 w-4/5 rounded" />
          </div>
          <div className="flex items-center justify-between text-[8px] text-white/40">
            <span>Committee: 3 Evaluators</span>
            <span>Defense: Scheduled</span>
          </div>
        </div>

        {/* Telemetry Footer */}
        <div className="flex items-center justify-between text-[8px] text-white/40 pt-1 border-t border-white/[0.05]">
          <span>Role: Student / Supervisor / Admin</span>
          <span className="text-purple-300">RBAC Verified</span>
        </div>
      </div>
    );
  }

  // Cafena Fallback
  return (
    <div
      className={`relative w-full h-full bg-[#090C10] rounded-lg border border-white/[0.08] overflow-hidden p-2.5 font-mono text-[10px] flex flex-col justify-between select-none ${className}`}
    >
      <div className="flex items-center justify-between border-b border-white/[0.06] pb-1.5 text-white/50">
        <span className="text-amber-500 font-bold text-[9px]">CAFENA // ARABIC RTL</span>
        <span className="text-emerald-400 text-[8px]">HTML5 / CSS3</span>
      </div>
      <div className="flex-1 my-1.5 flex items-center justify-between gap-2 p-1 bg-black/40 rounded border border-white/[0.04]">
        <div className="text-amber-400 text-lg">☕</div>
        <div className="flex-1 text-[8px] space-y-0.5">
          <div className="text-white/90 font-semibold">Specialty Roast Profile</div>
          <div className="text-white/40">Native Arabic RTL Platform</div>
        </div>
      </div>
      <div className="flex items-center justify-between text-[8px] text-white/40 pt-1 border-t border-white/[0.05]">
        <span>Artisanal Coffee</span>
        <span className="text-amber-400">100% RTL Parity</span>
      </div>
    </div>
  );
}
