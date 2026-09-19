"use client";

import React, { useState } from "react";
import { Locale } from "@/lib/i18n/dictionaries";

interface CanonicalDemoStudioProps {
  locale: Locale;
}

export function CanonicalDemoStudio({ locale }: CanonicalDemoStudioProps) {
  const isAr = locale === "ar";
  const [codeInspector, setCodeInspector] = useState(true);

  return (
    <section id="studio" className="relative w-full bg-[#04070D] text-white py-16 px-4 sm:px-8 lg:px-12 border-b border-[#00FF9D]/15 overflow-hidden">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto pb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="font-mono text-xs text-[#00FF9D] tracking-widest uppercase">
            {"// "}{isAr ? "معمل الديمو التفاعلي المزدوج" : "LIVE INTERACTIVE DEMO STUDIO"}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-1">
            {isAr ? "محطة المحاكاة متعددة النوافذ والتحليل الفوري" : "Multi-Workstation Dual Simulation Studio"}
          </h2>
        </div>
        <div className="flex items-center space-x-2 rtl:space-x-reverse font-mono text-xs text-zinc-400">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00FF9D] animate-pulse" />
          <span>demos.portfolio.io (Sandbox)</span>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          DUAL WORKSTATION CANVAS (Exact to Reference 2: live_demo_studio.jpg)
      ───────────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {/* Left Window: ITIL Floorplan & Kanban */}
        <div className="bg-[#0A0E17] rounded-2xl border border-zinc-800 shadow-[0_0_35px_rgba(0,0,0,0.6)] flex flex-col justify-between overflow-hidden">
          {/* Window Header */}
          <div className="bg-[#111622] px-4 py-2.5 flex items-center justify-between border-b border-zinc-800">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
              <span className="font-mono text-xs text-zinc-300 pl-2">
                ITIL Floorplan & Kanban - Active Session (Live)
              </span>
            </div>
            <span className="text-zinc-500 text-xs">⚙️</span>
          </div>

          {/* Telemetry subheader */}
          <div className="bg-[#070A0F] px-4 py-2 border-b border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-400">
            <span>Latency: <strong className="text-[#00FF9D]">12ms</strong></span>
            <div className="flex items-center space-x-2">
              <span>Code Inspector</span>
              <button
                onClick={() => setCodeInspector(!codeInspector)}
                className={`w-8 h-4 rounded-full transition-colors relative ${codeInspector ? "bg-[#00FF9D]" : "bg-zinc-700"}`}
              >
                <span className={`w-3 h-3 rounded-full bg-black absolute top-0.5 transition-transform ${codeInspector ? "left-4" : "left-0.5"}`} />
              </button>
            </div>
            <span>Oct 26, 14:38:12</span>
          </div>

          {/* Split Content: Floorplan on left, Kanban on right */}
          <div className="p-4 grid grid-cols-1 sm:grid-cols-12 gap-4 flex-1">
            {/* ITIL Floorplan (sm:col-span-6) */}
            <div className="sm:col-span-6 bg-[#04060A] rounded-xl border border-zinc-800 p-3 flex flex-col justify-between">
              <div className="text-xs font-mono text-zinc-300 font-bold text-center pb-2">
                ITIL Floorplan
              </div>
              <div className="relative w-full h-52 border border-zinc-800 rounded-lg p-3 bg-[#020306] flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 160 140">
                  {/* Building Rooms */}
                  <rect x="10" y="10" width="60" height="50" fill="#080C14" stroke="#1F2937" />
                  <rect x="80" y="10" width="70" height="50" fill="#080C14" stroke="#1F2937" />
                  <rect x="10" y="70" width="60" height="60" fill="#080C14" stroke="#1F2937" />
                  <rect x="80" y="70" width="70" height="60" fill="#080C14" stroke="#1F2937" />
                  {/* Hallway paths */}
                  <path d="M 40 35 L 40 95 L 115 95 L 115 35" stroke="#00FF9D" strokeWidth="1" strokeDasharray="2 2" fill="none" />
                  {/* Nodes */}
                  <circle cx="40" cy="35" r="4" fill="#00FF9D" className="animate-pulse" />
                  <circle cx="115" cy="35" r="5" fill="#00F0FF" />
                  <circle cx="115" cy="95" r="4" fill="#00FF9D" />
                  <circle cx="40" cy="95" r="4" fill="#10B981" />
                </svg>
              </div>
              <div className="flex justify-around text-[10px] font-mono text-zinc-400 pt-2">
                <span className="text-[#00FF9D]">● Servers</span>
                <span className="text-[#00F0FF]">● Network</span>
                <span className="text-emerald-400">● Users</span>
              </div>
            </div>

            {/* Kanban Board (sm:col-span-6) */}
            <div className="sm:col-span-6 bg-[#04060A] rounded-xl border border-zinc-800 p-3 flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs font-mono pb-2">
                <span className="font-bold text-white">Agile Workflow</span>
                <span className="text-zinc-500">+ Progress</span>
              </div>
              <div className="space-y-2">
                <div className="bg-[#0B101D] border border-zinc-800 rounded-lg p-2 text-[10px] font-mono">
                  <div className="text-zinc-300 font-semibold">Campus IT Core Update</div>
                  <div className="flex items-center justify-between pt-1">
                    <span className="px-1.5 py-0.5 rounded bg-red-900/40 text-red-400 text-[9px]">Critical</span>
                    <span className="text-zinc-500">ID: 781</span>
                  </div>
                </div>
                <div className="bg-[#0B101D] border border-zinc-800 rounded-lg p-2 text-[10px] font-mono">
                  <div className="text-zinc-300 font-semibold">Deploy API Gateway</div>
                  <div className="flex items-center justify-between pt-1">
                    <span className="px-1.5 py-0.5 rounded bg-blue-900/40 text-blue-400 text-[9px]">API-Fix</span>
                    <span className="text-zinc-500">ID: 412</span>
                  </div>
                </div>
                <div className="bg-[#0B101D] border border-zinc-800 rounded-lg p-2 text-[10px] font-mono">
                  <div className="text-zinc-300 font-semibold">Custody Transfer Task</div>
                  <div className="flex items-center justify-between pt-1">
                    <span className="px-1.5 py-0.5 rounded bg-emerald-900/40 text-emerald-400 text-[9px]">Deploy</span>
                    <span className="text-zinc-500">ID: 098</span>
                  </div>
                </div>
              </div>
              <div className="text-[10px] font-mono text-zinc-500 text-center pt-2">
                + Add Custom Sprint Task
              </div>
            </div>
          </div>

          {/* Window Footer */}
          <div className="bg-[#070A0F] px-4 py-2 border-t border-zinc-800 text-[10px] font-mono text-zinc-500 flex justify-between">
            <span>Demo Version v1.4.1</span>
            <span>Oct 28, 14:38:12</span>
          </div>
        </div>

        {/* Right Window: Algorithmic Performance Benchmark */}
        <div className="bg-[#0A0E17] rounded-2xl border border-zinc-800 shadow-[0_0_35px_rgba(0,0,0,0.6)] flex flex-col justify-between overflow-hidden">
          {/* Window Header */}
          <div className="bg-[#111622] px-4 py-2.5 flex items-center justify-between border-b border-zinc-800">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
              <span className="font-mono text-xs text-zinc-300 pl-2">
                Telemetry
              </span>
            </div>
            <span className="text-zinc-500 text-xs">📊</span>
          </div>

          {/* Body Content */}
          <div className="p-4 space-y-4 flex-1">
            <div className="font-mono text-xs font-bold text-white">
              Algorithmic Performance Benchmark (Live Metrics)
            </div>

            {/* Graphs Grid */}
            <div className="grid grid-cols-2 gap-3">
              {/* CPU Load */}
              <div className="bg-[#04060A] rounded-xl border border-zinc-800 p-2.5">
                <div className="flex justify-between text-[10px] font-mono text-zinc-400 pb-1">
                  <span>Main Process Load</span>
                  <span className="text-[#00F0FF]">● CPU Load</span>
                </div>
                <div className="h-20 w-full flex items-end">
                  <svg className="w-full h-full" viewBox="0 0 100 40">
                    <path d="M 0 30 L 10 20 L 20 28 L 30 10 L 40 32 L 50 15 L 60 25 L 70 8 L 80 20 L 90 12 L 100 22" fill="none" stroke="#00F0FF" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>

              {/* Memory Usage */}
              <div className="bg-[#04060A] rounded-xl border border-zinc-800 p-2.5">
                <div className="flex justify-between text-[10px] font-mono text-zinc-400 pb-1">
                  <span>Memory Usage</span>
                  <span className="text-[#00FF9D]">● Memory</span>
                </div>
                <div className="h-20 w-full flex items-end">
                  <svg className="w-full h-full" viewBox="0 0 100 40">
                    <path d="M 0 35 Q 20 25, 40 20 T 70 12 T 100 8 L 100 40 L 0 40 Z" fill="rgba(0,255,157,0.15)" />
                    <path d="M 0 35 Q 20 25, 40 20 T 70 12 T 100 8" fill="none" stroke="#00FF9D" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Network & Speed */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#04060A] rounded-xl border border-zinc-800 p-2 text-xs font-mono">
                <div className="text-zinc-500 text-[10px]">Network Throughput</div>
                <div className="text-sm font-bold text-white">15k req/s</div>
              </div>
              <div className="bg-[#04060A] rounded-xl border border-zinc-800 p-2 text-xs font-mono">
                <div className="text-zinc-500 text-[10px]">Execution Speed</div>
                <div className="text-sm font-bold text-[#00FF9D]">10.00 ms</div>
              </div>
            </div>

            {/* Code Inspector & Data Logging Streams */}
            <div className="grid grid-cols-2 gap-3 font-mono text-[9px]">
              <div className="bg-[#04060A] rounded-xl border border-zinc-800 p-2 text-zinc-400 space-y-1 overflow-hidden h-24">
                <div className="text-zinc-300 font-bold border-b border-zinc-800 pb-1">Live Code Inspector</div>
                <div className="text-[#00FF9D]">Executing matrix ops...</div>
                <div>Thread status: <span className="text-emerald-400">Active</span></div>
                <div>data_t_tempin(1): 8:t</div>
              </div>

              <div className="bg-[#04060A] rounded-xl border border-zinc-800 p-2 text-zinc-400 space-y-1 overflow-hidden h-24">
                <div className="text-zinc-300 font-bold border-b border-zinc-800 pb-1">Data Logging</div>
                <div>Log: 398538 [23:44:30.3]</div>
                <div>Log: 298634 [72:44:30.3]</div>
                <div>Log: 286517 [29:45:30.3]</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
