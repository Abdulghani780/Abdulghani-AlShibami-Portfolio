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
  // 1. Campus IT Tracker
  if (projectSlug === "campus-it-tracker") {
    return (
      <div
        className={`relative w-full h-full bg-[#070A0F] rounded-lg border border-white/[0.12] overflow-hidden p-2 font-mono text-[9.5px] flex flex-col justify-between select-none shadow-[0_0_15px_rgba(0,255,157,0.05)] ${className}`}
      >
        {/* Top Control Bar with traffic lights & Live badge */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-1.5 text-white/50">
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5F56] inline-block" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFBD2E] inline-block" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D] inline-block" />
            <span className="text-[8.5px] text-white/80 ms-1 font-semibold">CampusIT.exe</span>
          </div>
          <span className="text-[#00FF9D] text-[8px] bg-[#00FF9D]/10 border border-[#00FF9D]/30 px-1.5 py-0.5 rounded flex items-center gap-1 font-bold">
            <span className="w-1 h-1 rounded-full bg-[#00FF9D] animate-ping" />
            <span>LIVE INSTANCE</span>
          </span>
        </div>

        {/* Floorplan & Asset Grid */}
        <div className="grid grid-cols-3 gap-1 my-1 flex-1">
          <div className="rounded bg-white/[0.02] border border-white/[0.06] p-1 flex flex-col justify-between">
            <span className="text-white/40 text-[7.5px]">LAB_A101</span>
            <div className="space-y-0.5 my-0.5">
              <div className="h-1 bg-[#00FF9D]/80 rounded w-full" />
              <div className="h-1 bg-[#00FF9D]/50 rounded w-3/4" />
            </div>
            <span className="text-[#00FF9D] text-[7.5px] font-semibold">28/28 Active</span>
          </div>
          <div className="rounded bg-white/[0.02] border border-white/[0.06] p-1 flex flex-col justify-between">
            <span className="text-white/40 text-[7.5px]">SERVER_RM</span>
            <div className="space-y-0.5 my-0.5">
              <div className="h-1 bg-[#00FF9D]/70 rounded w-full" />
              <div className="h-1 bg-cyan-400/60 rounded w-2/5" />
            </div>
            <span className="text-cyan-300 text-[7.5px] font-semibold">RAID 10 OK</span>
          </div>
          <div className="rounded bg-white/[0.02] border border-white/[0.06] p-1 flex flex-col justify-between">
            <span className="text-white/40 text-[7.5px]">KANBAN</span>
            <div className="space-y-0.5 my-0.5">
              <div className="h-1 bg-cyan-500/60 rounded w-3/4" />
              <div className="h-1 bg-[#00FF9D]/50 rounded w-1/2" />
            </div>
            <span className="text-white/80 text-[7.5px] font-semibold">0 Critical</span>
          </div>
        </div>

        {/* Telemetry Footer */}
        <div className="flex items-center justify-between text-[7.5px] text-white/40 pt-1 border-t border-white/[0.06]">
          <span>Oracle 10g : 1521</span>
          <span className="text-[#00FF9D] font-semibold">1,420 Assets</span>
        </div>
      </div>
    );
  }

  // 2. MetaAlgorithm Lab
  if (projectSlug === "metaalgorithm-lab") {
    return (
      <div
        className={`relative w-full h-full bg-[#070A0F] rounded-lg border border-white/[0.12] overflow-hidden p-2 font-mono text-[9.5px] flex flex-col justify-between select-none shadow-[0_0_15px_rgba(0,255,157,0.05)] ${className}`}
      >
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-1.5 text-white/50">
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5F56] inline-block" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFBD2E] inline-block" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D] inline-block" />
            <span className="text-[8.5px] text-white/80 ms-1 font-semibold">AlgoLab_v2.4.py</span>
          </div>
          <span className="text-[#00FF9D] text-[8px] bg-[#00FF9D]/10 border border-[#00FF9D]/30 px-1.5 py-0.5 rounded flex items-center gap-1 font-bold">
            <span className="w-1 h-1 rounded-full bg-[#00FF9D] animate-ping" />
            <span>WASM 98%</span>
          </span>
        </div>

        {/* Dynamic Graph / Chart */}
        <div className="relative flex-1 my-1 flex items-end justify-between gap-1 px-1.5 pt-2 pb-1 bg-black/50 rounded border border-white/[0.04]">
          <div className="absolute top-1 start-1.5 text-[7px] text-white/40">
            Empirical O(n log n)
          </div>
          <div className="w-1.5 bg-[#00FF9D]/30 rounded-t h-[25%]" />
          <div className="w-1.5 bg-[#00FF9D]/50 rounded-t h-[40%]" />
          <div className="w-1.5 bg-[#00FF9D]/70 rounded-t h-[60%]" />
          <div className="w-1.5 bg-[#00FF9D] rounded-t h-[80%]" />
          <div className="w-1.5 bg-cyan-400 rounded-t h-[95%]" />
          <div className="w-1.5 bg-cyan-500/70 rounded-t h-[70%]" />
          <div className="w-1.5 bg-[#00FF9D]/80 rounded-t h-[50%]" />
        </div>

        <div className="flex items-center justify-between text-[7.5px] text-white/40 pt-1 border-t border-white/[0.06]">
          <span>Heap: 14.8MB</span>
          <span className="text-[#00FF9D] font-semibold">Bench: 3.14ms</span>
        </div>
      </div>
    );
  }

  // 3. NovaTech Cloud
  if (projectSlug === "novatech") {
    return (
      <div
        className={`relative w-full h-full bg-[#070A0F] rounded-lg border border-white/[0.12] overflow-hidden p-2 font-mono text-[9.5px] flex flex-col justify-between select-none shadow-[0_0_15px_rgba(0,255,157,0.05)] ${className}`}
      >
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-1.5 text-white/50">
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5F56] inline-block" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFBD2E] inline-block" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D] inline-block" />
            <span className="text-[8.5px] text-[#00FF9D] ms-1 font-bold">NOVATECH</span>
          </div>
          <span className="text-[#00FF9D] text-[8px] bg-[#00FF9D]/10 border border-[#00FF9D]/30 px-1 py-0.5 rounded font-bold">
            NEXT.JS 15
          </span>
        </div>

        <div className="flex-1 my-1 flex items-center justify-between gap-1.5 p-1 bg-black/50 rounded border border-white/[0.04]">
          <div className="w-7 h-7 rounded bg-[#00FF9D]/10 border border-[#00FF9D]/20 flex items-center justify-center text-[#00FF9D] text-xs">
            ⚡
          </div>
          <div className="flex-1 min-w-0 space-y-0.5">
            <div className="text-white/90 text-[8px] font-semibold truncate">Enterprise Edge Mesh</div>
            <div className="text-white/40 text-[7px]">350 Nodes Active</div>
            <div className="text-[#00FF9D] text-[8px] font-mono font-bold">Latency: 12ms</div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[7.5px] text-white/40 pt-1 border-t border-white/[0.06]">
          <span>CPU: 49%</span>
          <span className="text-[#00FF9D]">Edge KV Synced</span>
        </div>
      </div>
    );
  }

  // 4. Graduation Project Portal (GP)
  if (projectSlug === "graduation-project-portal" || projectSlug === "gp") {
    return (
      <div
        className={`relative w-full h-full bg-[#070A0F] rounded-lg border border-white/[0.12] overflow-hidden p-2 font-mono text-[9.5px] flex flex-col justify-between select-none shadow-[0_0_15px_rgba(0,255,157,0.05)] ${className}`}
      >
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-1.5 text-white/50">
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5F56] inline-block" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFBD2E] inline-block" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D] inline-block" />
            <span className="text-[8.5px] text-cyan-300 ms-1 font-semibold">GP_Portal.php</span>
          </div>
          <span className="text-[#00FF9D] text-[8px] bg-[#00FF9D]/10 border border-[#00FF9D]/30 px-1 py-0.5 rounded font-bold">
            EVAL: 94/100
          </span>
        </div>

        <div className="flex-1 my-1 flex flex-col justify-around py-0.5">
          <div className="flex items-center justify-between text-[7.5px]">
            <span className="text-white/60">Defense Pipeline</span>
            <span className="text-[#00FF9D] font-bold">APPROVED</span>
          </div>
          <div className="h-1 bg-white/10 rounded overflow-hidden">
            <div className="h-full bg-gradient-to-r from-cyan-400 to-[#00FF9D] w-4/5 rounded" />
          </div>
          <div className="flex items-center justify-between text-[7px] text-white/40">
            <span>3 Committee Evaluators</span>
            <span>Role: RBAC OK</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[7.5px] text-white/40 pt-1 border-t border-white/[0.06]">
          <span>PHP 8 + MySQL</span>
          <span className="text-cyan-300 font-semibold">Ready to Defend</span>
        </div>
      </div>
    );
  }

  // 5. Cafena Coffee Suite
  return (
    <div
      className={`relative w-full h-full bg-[#070A0F] rounded-lg border border-white/[0.12] overflow-hidden p-2 font-mono text-[9.5px] flex flex-col justify-between select-none shadow-[0_0_15px_rgba(0,255,157,0.05)] ${className}`}
    >
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-1.5 text-white/50">
        <div className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF5F56] inline-block" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#FFBD2E] inline-block" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D] inline-block" />
          <span className="text-[8.5px] text-[#00FF9D] ms-1 font-semibold">Cafena_POS</span>
        </div>
        <span className="text-[#00FF9D] text-[8px] bg-[#00FF9D]/10 border border-[#00FF9D]/30 px-1 py-0.5 rounded font-bold">
          RTL 100%
        </span>
      </div>

      <div className="flex-1 my-1 flex items-center justify-between gap-1.5 p-1 bg-black/50 rounded border border-white/[0.04]">
        <div className="w-7 h-7 rounded bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 text-xs">
          ☕
        </div>
        <div className="flex-1 min-w-0 space-y-0.5">
          <div className="text-white/90 text-[8px] font-semibold truncate">POS Live Ledger</div>
          <div className="text-white/40 text-[7px]">412 Transactions</div>
          <div className="text-[#00FF9D] text-[8px] font-mono font-bold">$12,650 Rev</div>
        </div>
      </div>

      <div className="flex items-center justify-between text-[7.5px] text-white/40 pt-1 border-t border-white/[0.06]">
        <span>Inventory: 156 SKU</span>
        <span className="text-amber-400 font-semibold">Specialty Roast</span>
      </div>
    </div>
  );
}
