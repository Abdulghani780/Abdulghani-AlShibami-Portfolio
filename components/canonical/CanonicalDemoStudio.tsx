"use client";

import React, { useState, useEffect } from "react";
import { Locale } from "@/lib/i18n/dictionaries";

interface CanonicalDemoStudioProps {
  locale: Locale;
}

export function CanonicalDemoStudio({ locale }: CanonicalDemoStudioProps) {
  const isAr = locale === "ar";
  const [codeInspector, setCodeInspector] = useState(true);
  const [cpuLoad, setCpuLoad] = useState([30, 20, 28, 10, 32, 15, 25, 8, 20, 12, 22]);
  const [memLoad, setMemLoad] = useState([35, 25, 20, 12, 8]);
  const [latency, setLatency] = useState(12);
  const [timeString, setTimeString] = useState("23:44:30");
  const [dateString, setDateString] = useState("2026-09-19");
  const [logLines, setLogLines] = useState([
    "Log: 398538 [23:44:30.3]",
    "Log: 298634 [72:44:30.3]",
    "Log: 286517 [29:45:30.3]",
  ]);

  useEffect(() => {
    setTimeString(new Date().toLocaleTimeString());
    setDateString(new Date().toLocaleDateString());
    const id = setInterval(() => {
      setCpuLoad(() => Array.from({ length: 11 }, () => Math.floor(Math.random() * 32 + 6)));
      setMemLoad(() => {
        const base = Math.random() * 15 + 25;
        return [base, base - 5, base - 10, base - 18, base - 24].map(v => parseFloat(v.toFixed(1)));
      });
      setLatency(Math.floor(Math.random() * 5 + 10));
      const now = new Date().toLocaleTimeString();
      setTimeString(now);
      setLogLines(() => [
        `Log: ${Math.floor(Math.random() * 900000 + 100000)} [${now}]`,
        `Log: ${Math.floor(Math.random() * 900000 + 100000)} [${now}]`,
        `Log: ${Math.floor(Math.random() * 900000 + 100000)} [${now}]`,
      ]);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="studio"
      className="relative w-full bg-[#0B1120] text-white py-20 px-4 sm:px-8 lg:px-16 overflow-hidden"
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* Ambient glows */}
      <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[400px] bg-cyan-500/[0.03] rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

      {/* ── Section Header ── */}
      <div className="relative z-10 max-w-7xl mx-auto mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 font-mono text-[10px] tracking-[0.18em] text-cyan-400 uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            {isAr ? "SECTION 04 / معمل الديمو" : "SECTION 04 / DEMO STUDIO"}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {isAr ? "محطة المحاكاة المزدوجة المباشرة" : "Multi-Workstation Dual Simulation Studio"}
          </h2>
        </div>
        <div className="flex items-center gap-2 font-mono text-[11px] text-slate-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          demos.portfolio.io (Sandbox)
        </div>
      </div>

      {/* ── DUAL WORKSTATION CANVAS ── */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">

        {/* LEFT WINDOW: Campus ITIL Floorplan + Kanban */}
        <div className="bg-[#0A0E18] rounded-2xl border border-zinc-800 shadow-[0_0_40px_rgba(0,0,0,0.6)] flex flex-col overflow-hidden">
          {/* Title bar */}
          <div className="bg-[#111622] px-4 py-2.5 flex items-center justify-between border-b border-zinc-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
              <span className="font-mono text-[11px] text-zinc-300 ml-2">
                {isAr ? "مخطط ITIL + Kanban — جلسة نشطة" : "ITIL Floorplan & Kanban — Active Session (Live)"}
              </span>
            </div>
            <span className="text-zinc-500 text-sm">⚙</span>
          </div>

          {/* Sub-header */}
          <div className="bg-[#070A10] px-4 py-2 border-b border-zinc-800 flex items-center justify-between text-[11px] font-mono text-zinc-400">
            <span>Latency: <strong className="text-[#00FF9D]">{latency}ms</strong></span>
            <div className="flex items-center gap-2">
              <span>Code Inspector</span>
              <button
                onClick={() => setCodeInspector(!codeInspector)}
                className={`w-8 h-4 rounded-full transition-colors relative ${codeInspector ? "bg-[#00FF9D]" : "bg-zinc-700"}`}
              >
                <span className={`w-3 h-3 rounded-full bg-black absolute top-0.5 transition-transform ${codeInspector ? "left-4" : "left-0.5"}`} />
              </button>
            </div>
            <span className="text-zinc-600" suppressHydrationWarning>{timeString}</span>
          </div>

          {/* Content */}
          <div className="p-4 grid grid-cols-2 gap-4 flex-1">
            {/* ITIL Floorplan SVG */}
            <div className="bg-[#04060A] rounded-xl border border-zinc-800 p-3 flex flex-col">
              <div className="text-[10px] font-mono text-zinc-300 font-bold pb-2 text-center">ITIL Floorplan</div>
              <div className="relative flex-1 min-h-[160px] border border-zinc-800 rounded-lg bg-[#020306] flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 180 160" fill="none">
                  {/* Rooms */}
                  <rect x="12" y="12" width="68" height="56" rx="2" fill="#070C14" stroke="#1F2937" />
                  <rect x="90" y="12" width="78" height="56" rx="2" fill="#070C14" stroke="#1F2937" />
                  <rect x="12" y="78" width="68" height="68" rx="2" fill="#070C14" stroke="#1F2937" />
                  <rect x="90" y="78" width="78" height="68" rx="2" fill="#070C14" stroke="#1F2937" />
                  {/* Rooms labels */}
                  <text x="46" y="44" textAnchor="middle" fontSize="7" fill="#374151" fontFamily="monospace">Rack_A</text>
                  <text x="129" y="44" textAnchor="middle" fontSize="7" fill="#374151" fontFamily="monospace">Server Hub</text>
                  <text x="46" y="116" textAnchor="middle" fontSize="7" fill="#374151" fontFamily="monospace">Lab_04</text>
                  <text x="129" y="116" textAnchor="middle" fontSize="7" fill="#374151" fontFamily="monospace">Control</text>
                  {/* Path */}
                  <path d="M 46 40 L 46 112 L 129 112 L 129 40" stroke="#00FF9D" strokeWidth="1" strokeDasharray="3 3" />
                  {/* Network nodes */}
                  <circle cx="46" cy="40" r="5" fill="#00FF9D" className="animate-pulse" />
                  <circle cx="129" cy="40" r="6" fill="#00F0FF" />
                  <circle cx="129" cy="112" r="5" fill="#00FF9D" />
                  <circle cx="46" cy="112" r="5" fill="#10B981" />
                </svg>
              </div>
              <div className="flex justify-around text-[9px] font-mono pt-2 text-zinc-500">
                <span className="text-[#00FF9D]">● Servers</span>
                <span className="text-[#00F0FF]">● Network</span>
                <span className="text-emerald-400">● Users</span>
              </div>
            </div>

            {/* Kanban Board */}
            <div className="bg-[#04060A] rounded-xl border border-zinc-800 p-3 flex flex-col">
              <div className="flex items-center justify-between text-[10px] font-mono pb-2">
                <span className="font-bold text-white">Agile Workflow</span>
                <span className="text-zinc-600">+ Sprint</span>
              </div>
              <div className="space-y-2 flex-1">
                {[
                  { title: "Campus IT Core Update", badge: "Critical", badgeColor: "bg-red-900/40 text-red-400", id: "781" },
                  { title: "Deploy API Gateway", badge: "API-Fix", badgeColor: "bg-blue-900/40 text-blue-400", id: "412" },
                  { title: "Custody Transfer Task", badge: "Deploy", badgeColor: "bg-emerald-900/40 text-emerald-400", id: "098" },
                ].map((task) => (
                  <div key={task.id} className="bg-[#0B101E] border border-zinc-800 rounded-lg p-2.5 font-mono text-[10px]">
                    <div className="text-zinc-200 font-semibold">{task.title}</div>
                    <div className="flex items-center justify-between pt-1">
                      <span className={`px-1.5 py-0.5 rounded text-[9px] ${task.badgeColor}`}>{task.badge}</span>
                      <span className="text-zinc-600">ID: {task.id}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-[10px] font-mono text-zinc-700 text-center pt-2">+ Add Custom Sprint Task</div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-[#070A10] px-4 py-2 border-t border-zinc-800 text-[10px] font-mono text-zinc-600 flex justify-between">
            <span>Demo Version v1.4.1</span>
            <span suppressHydrationWarning>{dateString}</span>
          </div>
        </div>

        {/* RIGHT WINDOW: Algorithm Performance Benchmark */}
        <div className="bg-[#0A0E18] rounded-2xl border border-zinc-800 shadow-[0_0_40px_rgba(0,0,0,0.6)] flex flex-col overflow-hidden">
          {/* Title bar */}
          <div className="bg-[#111622] px-4 py-2.5 flex items-center justify-between border-b border-zinc-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
              <span className="font-mono text-[11px] text-zinc-300 ml-2">
                {isAr ? "مقياس أداء الخوارزميات" : "Algorithmic Performance Benchmark"}
              </span>
            </div>
            <span className="text-zinc-500 text-sm">📊</span>
          </div>

          {/* Body */}
          <div className="p-4 space-y-4 flex-1">
            <div className="font-mono text-xs font-bold text-white">
              {isAr ? "أداء الخوارزميات المباشر" : "Live Metrics Dashboard"}
            </div>

            {/* CPU + Memory charts */}
            <div className="grid grid-cols-2 gap-3">
              {/* CPU Load */}
              <div className="bg-[#04060A] rounded-xl border border-zinc-800 p-2.5">
                <div className="flex justify-between text-[10px] font-mono text-zinc-500 pb-1">
                  <span>Main Process</span>
                  <span className="text-[#00F0FF]">● CPU</span>
                </div>
                <div className="h-16 w-full">
                  <svg className="w-full h-full" viewBox="0 0 110 40" fill="none">
                    <polyline
                      points={cpuLoad.map((v, i) => `${i * 11},${40 - (v / 40) * 40}`).join(" ")}
                      stroke="#00F0FF"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <polygon
                      points={[
                        ...cpuLoad.map((v, i) => `${i * 11},${40 - (v / 40) * 40}`),
                        `${10 * 11},40`,
                        `0,40`,
                      ].join(" ")}
                      fill="rgba(0,240,255,0.08)"
                    />
                  </svg>
                </div>
              </div>

              {/* Memory Usage */}
              <div className="bg-[#04060A] rounded-xl border border-zinc-800 p-2.5">
                <div className="flex justify-between text-[10px] font-mono text-zinc-500 pb-1">
                  <span>Memory</span>
                  <span className="text-[#00FF9D]">● MEM</span>
                </div>
                <div className="h-16 w-full">
                  <svg className="w-full h-full" viewBox="0 0 110 40" fill="none">
                    <path
                      d={`M 0 ${40 - memLoad[0]} Q 27.5 ${40 - memLoad[1]}, 55 ${40 - memLoad[2]} T 110 ${40 - memLoad[4]} L 110 40 L 0 40 Z`}
                      fill="rgba(0,255,157,0.12)"
                    />
                    <path
                      d={`M 0 ${40 - memLoad[0]} Q 27.5 ${40 - memLoad[1]}, 55 ${40 - memLoad[2]} T 110 ${40 - memLoad[4]}`}
                      stroke="#00FF9D"
                      strokeWidth="1.5"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Key metrics */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#04060A] rounded-xl border border-zinc-800 p-2.5 font-mono">
                <div className="text-[10px] text-zinc-500">Network Throughput</div>
                <div className="text-base font-bold text-white">15k req/s</div>
              </div>
              <div className="bg-[#04060A] rounded-xl border border-zinc-800 p-2.5 font-mono">
                <div className="text-[10px] text-zinc-500">Execution Speed</div>
                <div className="text-base font-bold text-[#00FF9D]">3.14 ms</div>
              </div>
            </div>

            {/* Code inspector + Data logging */}
            <div className="grid grid-cols-2 gap-3 font-mono text-[9px]">
              <div className="bg-[#04060A] rounded-xl border border-zinc-800 p-2.5 h-24 overflow-hidden">
                <div className="text-zinc-200 font-bold border-b border-zinc-800 pb-1 mb-1">Live Code Inspector</div>
                {codeInspector ? (
                  <>
                    <div className="text-[#00FF9D]">Executing matrix ops…</div>
                    <div>Thread: <span className="text-emerald-400">Active</span></div>
                    <div className="text-zinc-600">Heap: 14.8MB allocated</div>
                  </>
                ) : (
                  <div className="text-zinc-600">Inspector paused</div>
                )}
              </div>
              <div className="bg-[#04060A] rounded-xl border border-zinc-800 p-2.5 h-24 overflow-hidden">
                <div className="text-zinc-200 font-bold border-b border-zinc-800 pb-1 mb-1">Data Logging</div>
                {logLines.map((line, i) => (
                  <div key={i} className="text-zinc-500">{line}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
