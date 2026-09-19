"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Locale } from "@/lib/i18n/dictionaries";

interface CanonicalDesktopSimulatorProps {
  locale: Locale;
}

export function CanonicalDesktopSimulator({ locale }: CanonicalDesktopSimulatorProps) {
  const isAr = locale === "ar";
  const [activeTab, setActiveTab] = useState("Files");
  const [sortProgress, setSortProgress] = useState(65);
  const [activeNode, setActiveNode] = useState(25);
  const [cpuVal, setCpuVal] = useState(18);
  const [memVal, setMemVal] = useState(23);
  const [netVal, setNetVal] = useState(1.2);
  const [sortBars, setSortBars] = useState([30, 85, 50, 70, 20, 95, 45, 60, 35, 80, 55, 75]);

  useEffect(() => {
    const timer = setInterval(() => {
      setSortProgress((p) => (p >= 100 ? 18 : p + 5));
      setActiveNode((n) => (n === 25 ? 28 : n === 28 ? 75 : 25));
      setCpuVal(Math.floor(Math.random() * 8 + 14));
      setMemVal(Math.floor(Math.random() * 5 + 20));
      setNetVal(parseFloat((Math.random() * 0.7 + 0.9).toFixed(1)));
      setSortBars((prev) => prev.map(() => Math.floor(Math.random() * 70 + 20)));
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const TABS = [
    { name: "Files", icon: "▤" },
    { name: "Tests", icon: "◈" },
    { name: "Metrics", icon: "▲" },
    { name: "Settings", icon: "⚙" },
  ];

  return (
    <section
      id="sandbox"
      className="relative w-full bg-[#03060B] text-white py-20 px-4 sm:px-8 lg:px-16 overflow-hidden"
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#00FF9D]/[0.02] rounded-full blur-[120px] pointer-events-none" />

      {/* ── Section Header ── */}
      <div className="relative z-10 max-w-7xl mx-auto mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00FF9D]/08 border border-[#00FF9D]/25 font-mono text-[10px] tracking-[0.18em] text-[#00FF9D] uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D] animate-ping" />
            {isAr ? "SECTION 03 / المحاكي" : "SECTION 03 / DESKTOP SANDBOX"}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            {isAr ? "بيئة التشغيل الأصيلة المباشرة" : "Live Native Execution Sandbox"}
          </h2>
          <p className="text-zinc-500 text-sm mt-1 font-mono">
            {isAr ? "محاكاة نافذة نظام التشغيل الكاملة" : "MetaAlgorithm Lab v2.4 — full OS window simulation"}
          </p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00FF9D]/10 border border-[#00FF9D]/30 font-mono text-xs text-[#00FF9D]">
          <span className="w-2 h-2 rounded-full bg-[#00FF9D] animate-ping" />
          WASM ENGINE ONLINE
        </div>
      </div>

      {/* ── DESKTOP WINDOW CONTAINER ── */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Outer search & profile bar */}
        <div className="w-full bg-[#070A10] rounded-t-2xl border border-zinc-800 px-4 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2 w-full max-w-xs">
            <span className="text-zinc-500 text-sm">⌕</span>
            <input
              type="text"
              readOnly
              value="Search workstation files & telemetry..."
              className="w-full bg-[#04060A] rounded-md px-3 py-1.5 text-[11px] font-mono text-zinc-400 border border-zinc-800 outline-none"
            />
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono text-zinc-500 hidden sm:block">RENDER v3.1</span>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full border border-[#00FF9D]/35 overflow-hidden relative">
                <Image
                  src="/images/profile/abdulghani-profile-thumb.webp"
                  alt="Abdulghani Al-Shibami"
                  width={28}
                  height={28}
                  className="object-cover"
                />
              </div>
              <span className="text-[11px] font-mono text-white">A. Al-Shibami ∨</span>
            </div>
          </div>
        </div>

        {/* Native OS Window Frame */}
        <div className="w-full bg-[#0A0E18] rounded-b-2xl border-x border-b border-zinc-800 shadow-[0_0_60px_rgba(0,0,0,0.8)] overflow-hidden">
          {/* Title bar */}
          <div className="bg-[#111622] px-4 py-2.5 flex items-center justify-between border-b border-zinc-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56] hover:bg-[#FF5F56]/80 cursor-pointer" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E] hover:bg-[#FFBD2E]/80 cursor-pointer" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F] shadow-[0_0_8px_rgba(39,201,63,0.5)] hover:brightness-110 cursor-pointer" />
            </div>
            <div className="font-mono text-[11px] font-semibold text-zinc-300">
              MetaAlgorithm Lab v2.4 — Live Native Execution Sandbox
            </div>
            <div className="font-mono text-[10px] text-[#00FF9D]">● 60 FPS</div>
          </div>

          {/* Status ticker */}
          <div className="bg-[#070A10] px-4 py-1.5 border-b border-zinc-800 font-mono text-[10px] text-zinc-500 flex flex-wrap items-center justify-between gap-2">
            <span>[USER: Abdulghani Al-Shibami]</span>
            <span>[ENV: RENDER v3.1]</span>
            <span className="text-[#00FF9D] font-bold">[STATUS: ACTIVE RUNTIME]</span>
            <span>[ENGINE: WASM / C# CORE]</span>
          </div>

          {/* Main workspace */}
          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[540px]">

            {/* Left sidebar */}
            <div className="md:col-span-1 bg-[#070A10] border-r border-zinc-800 flex md:flex-col items-center justify-between p-3 py-5">
              <div className="flex md:flex-col items-center gap-5">
                <span className="w-8 h-8 rounded-lg bg-[#00FF9D]/15 border border-[#00FF9D]/35 flex items-center justify-center text-[#00FF9D] text-sm font-bold">
                  ⚡
                </span>
                {TABS.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => setActiveTab(item.name)}
                    className={`flex flex-col items-center gap-1 text-[10px] font-mono transition-colors ${
                      activeTab === item.name
                        ? "text-[#00FF9D]"
                        : "text-zinc-600 hover:text-zinc-400"
                    }`}
                  >
                    <span className="text-base">{item.icon}</span>
                    <span>{item.name}</span>
                  </button>
                ))}
              </div>
              <span className="text-zinc-700 text-sm hidden md:block">⏻</span>
            </div>

            {/* Center workspace: 4 panels */}
            <div className="md:col-span-8 p-4 grid grid-cols-1 sm:grid-cols-2 gap-4 border-r border-zinc-800/60">

              {/* Panel 1: Sorting Visualizer */}
              <div className="bg-[#070A10] rounded-xl border border-zinc-800 p-3.5 flex flex-col justify-between">
                <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                  <span className="font-mono text-xs font-semibold text-white">Merge Sort</span>
                  <span className="text-zinc-600 text-xs">•••</span>
                </div>
                <div className="py-3 flex items-end gap-0.5 h-20">
                  {sortBars.map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t transition-all duration-500"
                      style={{
                        height: `${h}%`,
                        backgroundColor: i < sortBars.length * (sortProgress / 100) ? "#00FF9D" : "#1f2937",
                        opacity: 0.7 + i * 0.02,
                        boxShadow: i < sortBars.length * (sortProgress / 100) ? "0 0 6px rgba(0,255,157,0.4)" : "none",
                      }}
                    />
                  ))}
                </div>
                <div>
                  <div className="w-full bg-zinc-900 rounded-full h-1.5 overflow-hidden">
                    <div
                      className="bg-[#00FF9D] h-full rounded-full transition-all duration-500 shadow-[0_0_8px_#00FF9D]"
                      style={{ width: `${sortProgress}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[9px] font-mono text-zinc-500 pt-1">
                    <span>Merge Sorting</span>
                    <span>{sortProgress}% Complete</span>
                  </div>
                </div>
              </div>

              {/* Panel 2: Graph traversal */}
              <div className="bg-[#070A10] rounded-xl border border-zinc-800 p-3.5 flex flex-col justify-between">
                <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                  <span className="font-mono text-xs font-semibold text-white">BFS Traversal</span>
                  <span className="text-zinc-600 text-xs">•••</span>
                </div>
                <div className="flex items-center justify-center py-2">
                  <div className="grid grid-cols-2 gap-4">
                    {[[25, 28, 75], [24, 25, 13]].map((col, ci) => (
                      <div key={ci} className="flex flex-col items-center space-y-1.5">
                        {col.map((val) => (
                          <span
                            key={val}
                            className={`px-3 py-1 rounded text-xs font-mono transition-all duration-300 ${
                              val === activeNode
                                ? "bg-[#00FF9D] text-black font-bold shadow-[0_0_12px_#00FF9D]"
                                : "bg-zinc-900 border border-zinc-700 text-zinc-300"
                            }`}
                          >
                            {val}
                          </span>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-center text-[10px] font-mono text-[#00FF9D]">
                  ● Active: Node_{activeNode}
                </div>
              </div>

              {/* Panel 3: A* Grid */}
              <div className="bg-[#070A10] rounded-xl border border-zinc-800 p-3.5 flex flex-col justify-between">
                <div className="flex items-center justify-between pb-1 border-b border-zinc-800">
                  <span className="font-mono text-xs font-semibold text-white">A* Pathfinding</span>
                  <span className="text-zinc-600 text-xs">•••</span>
                </div>
                <div className="relative w-full h-28 bg-[#030508] border border-zinc-800 rounded-lg overflow-hidden">
                  <svg className="w-full h-full" viewBox="0 0 160 100" fill="none">
                    <path d="M 20 0 V 100 M 40 0 V 100 M 60 0 V 100 M 80 0 V 100 M 100 0 V 100 M 120 0 V 100 M 140 0 V 100" stroke="rgba(0,255,157,0.08)" strokeWidth="0.5" />
                    <path d="M 0 20 H 160 M 0 40 H 160 M 0 60 H 160 M 0 80 H 160" stroke="rgba(0,255,157,0.08)" strokeWidth="0.5" />
                    <path d="M 20 80 L 50 65 L 70 85 L 100 50 L 130 65 L 145 20" stroke="#00FF9D" strokeWidth="1.5" />
                    {/* Explored cells */}
                    <rect x="15" y="75" width="10" height="10" fill="rgba(0,240,255,0.12)" />
                    <rect x="35" y="60" width="10" height="10" fill="rgba(0,240,255,0.12)" />
                    <rect x="55" y="80" width="10" height="10" fill="rgba(0,240,255,0.12)" />
                    <circle cx="20" cy="80" r="3.5" fill="#00FF9D" />
                    <circle cx="50" cy="65" r="2.5" fill="#00F0FF" />
                    <circle cx="70" cy="85" r="2.5" fill="#00F0FF" />
                    <circle cx="100" cy="50" r="2.5" fill="#00F0FF" />
                    <circle cx="130" cy="65" r="2.5" fill="#00F0FF" />
                    <circle cx="145" cy="20" r="3.5" fill="#FF5F56" />
                  </svg>
                </div>
                <div className="flex justify-between text-[9px] font-mono text-zinc-500 pt-1">
                  <span>Start (0,0)</span>
                  <span className="text-[#00FF9D]">Path Found ✓</span>
                </div>
              </div>

              {/* Panel 4: Terminal */}
              <div className="bg-[#070A10] rounded-xl border border-zinc-800 p-3.5 flex flex-col justify-between font-mono text-[10px]">
                <div className="flex items-center justify-between pb-1 border-b border-zinc-800">
                  <span className="text-white font-bold">Terminal</span>
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#FF5F56]" />
                    <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                    <span className="w-2 h-2 rounded-full bg-[#27C93F]" />
                  </div>
                </div>
                <div className="py-2 space-y-1 text-zinc-300 flex-1 overflow-hidden">
                  <div className="text-emerald-400">[INFO] WASM Env initialized… OK</div>
                  <div className="text-[#00F0FF]">[DB] Connected to DB_CLUSTER_ALPHA</div>
                  <div className="text-yellow-400">[SORT] A* on Graph (250 nodes)</div>
                  <div className="text-zinc-400">[MEM] Usage: 14.8MB / 64MB</div>
                  <div className="text-[#00FF9D] font-bold">[BENCH] Sort time: 3.14ms ✓</div>
                  <div className="flex items-center text-[#00FF9D]">
                    <span>&gt; _</span>
                    <span className="w-1.5 h-3 bg-[#00FF9D] type-cursor ml-1" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right inspector deck */}
            <div className="md:col-span-3 p-4 flex flex-col gap-4">
              {/* Variables */}
              <div className="bg-[#070A10] rounded-xl border border-zinc-800 p-3 font-mono text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                  <span className="text-white font-semibold">Variables</span>
                  <span className="text-zinc-600">•••</span>
                </div>
                <div className="py-2 space-y-1.5 text-[10px] text-zinc-400">
                  <div>Array1[250] <span className="text-[#00FF9D]">[1, 250, 36…]</span></div>
                  <div>currentNode <span className="text-[#00F0FF]">[{activeNode}]</span></div>
                  <div>pathCost <span className="text-white font-bold">10</span></div>
                  <div>sortProgress <span className="text-[#FFBD2E]">{sortProgress}%</span></div>
                </div>
              </div>

              {/* DB Inspector */}
              <div className="bg-[#070A10] rounded-xl border border-zinc-800 p-3 font-mono text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                  <span className="text-white font-semibold">Database</span>
                  <span className="text-zinc-600">•••</span>
                </div>
                <table className="w-full text-[10px] text-left text-zinc-400 pt-1">
                  <thead>
                    <tr className="border-b border-zinc-800 text-zinc-600">
                      <th>#</th>
                      <th>Record</th>
                      <th>ms</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>1</td><td className="text-zinc-200">Abdulg…</td><td>3.14</td></tr>
                    <tr><td>2</td><td className="text-zinc-200">Node_28</td><td>1.89</td></tr>
                    <tr><td>3</td><td className="text-zinc-200">HeapSort</td><td>4.20</td></tr>
                    <tr><td>4</td><td className="text-zinc-200">A*_Graph</td><td>2.77</td></tr>
                  </tbody>
                </table>
              </div>

              {/* Telemetry dials */}
              <div className="bg-[#070A10] rounded-xl border border-zinc-800 p-3 font-mono">
                <div className="flex items-center justify-between pb-2 border-b border-zinc-800 text-xs">
                  <span className="text-white font-semibold">Telemetry</span>
                  <span className="text-zinc-600">•••</span>
                </div>
                <div className="grid grid-cols-3 gap-2 pt-3 text-center">
                  <div>
                    <div className="text-[9px] text-zinc-500 uppercase">CPU</div>
                    <div className="text-sm font-bold text-[#00FF9D]">{cpuVal}%</div>
                  </div>
                  <div>
                    <div className="text-[9px] text-zinc-500 uppercase">MEM</div>
                    <div className="text-sm font-bold text-[#00F0FF]">{memVal}%</div>
                  </div>
                  <div>
                    <div className="text-[9px] text-zinc-500 uppercase">NET</div>
                    <div className="text-sm font-bold text-white">{netVal}MB</div>
                  </div>
                </div>
                {/* Mini telemetry bars */}
                <div className="mt-3 space-y-1.5">
                  {[
                    { label: "CPU", val: cpuVal, max: 100, color: "#00FF9D" },
                    { label: "MEM", val: memVal, max: 100, color: "#00F0FF" },
                    { label: "NET", val: (netVal / 2) * 100, max: 100, color: "#FFBD2E" },
                  ].map((bar) => (
                    <div key={bar.label} className="flex items-center gap-2">
                      <span className="text-[9px] font-mono text-zinc-600 w-6">{bar.label}</span>
                      <div className="flex-1 bg-zinc-900 rounded-full h-1 overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-700"
                          style={{ width: `${bar.val}%`, backgroundColor: bar.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
