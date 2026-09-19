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

  useEffect(() => {
    const timer = setInterval(() => {
      setSortProgress((p) => (p >= 100 ? 20 : p + 5));
      setActiveNode((n) => (n === 25 ? 28 : n === 28 ? 75 : 25));
      setCpuVal(Math.floor(Math.random() * 8 + 15));
      setMemVal(Math.floor(Math.random() * 4 + 22));
      setNetVal(parseFloat((Math.random() * 0.6 + 1.0).toFixed(1)));
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="sandbox" className="relative w-full bg-[#03060B] text-white py-16 px-4 sm:px-8 lg:px-12 border-b border-[#00FF9D]/15 overflow-hidden">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto pb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="font-mono text-xs text-[#00FF9D] tracking-widest uppercase">
            {"// "}{isAr ? "محاكي سطح المكتب الحقيقي" : "DESKTOP OS WORKSTATION SANDBOX"}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white pt-1">
            {isAr ? "بيئة التشغيل المستقلة والمحاكاة الحية" : "Live Native Execution Sandbox"}
          </h2>
        </div>
        <div className="flex items-center space-x-3 rtl:space-x-reverse text-xs font-mono text-zinc-400">
          <span className="px-3 py-1 rounded-full bg-[#00FF9D]/10 text-[#00FF9D] border border-[#00FF9D]/30 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#00FF9D] animate-ping" />
            WASM ENGINE ONLINE
          </span>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          DESKTOP WINDOW CONTAINER (Exact to Reference 3)
      ───────────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto">
        {/* Top Desktop Search & Profile Bar */}
        <div className="w-full bg-[#070A0F] rounded-t-2xl border border-zinc-800 p-3 flex items-center justify-between px-4">
          <div className="flex items-center space-x-2 w-full max-w-sm">
            <span className="text-zinc-500 text-sm">🔍</span>
            <input
              type="text"
              readOnly
              value="Search workstation files & telemetry..."
              className="w-full bg-[#04060A] rounded-md px-3 py-1 text-xs font-mono text-zinc-400 border border-zinc-800 focus:outline-none"
            />
          </div>

          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <span className="text-xs font-mono text-zinc-400 hidden sm:inline-block">
              RENDERv3.1
            </span>
            <div className="flex items-center space-x-2 rtl:space-x-reverse pl-2">
              <div className="w-7 h-7 rounded-full border border-[#00FF9D]/40 overflow-hidden relative">
                <Image
                  src="/images/profile/abdulghani-profile-thumb.webp"
                  alt="Abdulghani Al-Shibami"
                  width={28}
                  height={28}
                  className="object-cover"
                />
              </div>
              <span className="text-xs font-medium text-white">A. Al-Shibami ⌵</span>
            </div>
          </div>
        </div>

        {/* Native OS Window Chrome */}
        <div className="w-full bg-[#0A0E17] rounded-b-2xl border-x border-b border-zinc-800 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden">
          {/* Window Titlebar */}
          <div className="bg-[#111622] px-4 py-2.5 flex items-center justify-between border-b border-zinc-800">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
            </div>
            <div className="font-mono text-xs font-semibold text-zinc-300">
              MetaAlgorithm Lab v2.4 — Live Native Execution Sandbox
            </div>
            <div className="w-12 text-right">
              <span className="text-[10px] font-mono text-[#00FF9D]">● 60 FPS</span>
            </div>
          </div>

          {/* Subheader Status Ticker */}
          <div className="bg-[#070A0F] px-4 py-1.5 border-b border-zinc-800/80 font-mono text-[10px] text-zinc-400 flex flex-wrap items-center justify-between gap-2">
            <span>[USER: Abdulghani Al-Shibami]</span>
            <span>[ENV: RENDERv3.1]</span>
            <span className="text-[#00FF9D] font-bold">[STATUS: ACTIVE RUNTIME]</span>
            <span>[ENGINE: WASM/C# CORE]</span>
          </div>

          {/* Window Main Area (Sidebar + Multi-Panel Content) */}
          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[560px]">
            {/* Left Nav Sidebar (md:col-span-1) */}
            <div className="md:col-span-1 bg-[#070A0F] border-r border-zinc-800 flex md:flex-col items-center justify-between p-3 py-6">
              <div className="flex md:flex-col items-center gap-5">
                <span className="w-8 h-8 rounded-lg bg-[#00FF9D]/20 border border-[#00FF9D]/40 flex items-center justify-center text-[#00FF9D] text-xs font-bold">
                  ⚡
                </span>
                {[
                  { name: "Files", icon: "📁" },
                  { name: "Tests", icon: "📋" },
                  { name: "Metrics", icon: "📈" },
                  { name: "Settings", icon: "⚙️" },
                ].map((item) => (
                  <button
                    key={item.name}
                    onClick={() => setActiveTab(item.name)}
                    className={`flex flex-col items-center gap-1 text-[10px] font-mono transition-colors ${
                      activeTab === item.name
                        ? "text-[#00FF9D] font-bold"
                        : "text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    <span className="text-base">{item.icon}</span>
                    <span>{item.name}</span>
                  </button>
                ))}
              </div>
              <span className="text-zinc-600 text-sm hidden md:block">🚪</span>
            </div>

            {/* Center Content Workspace (md:col-span-8) */}
            <div className="md:col-span-8 p-4 grid grid-cols-1 sm:grid-cols-2 gap-4 border-r border-zinc-800/80">
              {/* Card 1: Merge Sort Visualizer */}
              <div className="bg-[#070A0F] rounded-xl border border-zinc-800 p-3.5 flex flex-col justify-between">
                <div className="flex items-center justify-between pb-2">
                  <span className="font-mono text-xs font-semibold text-white">Merge Sort</span>
                  <span className="text-zinc-500 text-xs">•••</span>
                </div>
                {/* Node Tree */}
                <div className="py-2 flex flex-col items-center space-y-2">
                  <div className="flex gap-1">
                    {[1, 3, 5, 7, 9, 9].map((val, i) => (
                      <span key={i} className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-[#00FF9D]/15 text-[#00FF9D] border border-[#00FF9D]/30">
                        {val}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#00F0FF]/15 text-[#00F0FF] border border-[#00F0FF]/30">2 | 7</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#00FF9D]/15 text-[#00FF9D] border border-[#00FF9D]/30">9 | 16</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#00FF9D]/15 text-[#00FF9D] border border-[#00FF9D]/30">3</span>
                  </div>
                  <div className="flex gap-1">
                    {[1, 3, 6, 9, 14, 5, 9, 10].map((val, i) => (
                      <span key={i} className="px-1 py-0.5 rounded text-[9px] font-mono bg-zinc-800 text-zinc-300">
                        {val}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Progress bar */}
                <div className="pt-2">
                  <div className="w-full bg-zinc-900 rounded-full h-2 overflow-hidden border border-zinc-800">
                    <div className="bg-[#00FF9D] h-full rounded-full transition-all duration-500 shadow-[0_0_10px_#00FF9D]" style={{ width: `${sortProgress}%` }} />
                  </div>
                  <div className="flex justify-between text-[9px] font-mono text-zinc-400 pt-1">
                    <span>Merge Sorting</span>
                    <span>{sortProgress}% Complete</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Algorithms Flowchart */}
              <div className="bg-[#070A0F] rounded-xl border border-zinc-800 p-3.5 flex flex-col justify-between">
                <div className="flex items-center justify-between pb-2">
                  <span className="font-mono text-xs font-semibold text-white">Algorithms</span>
                  <span className="text-zinc-500 text-xs">•••</span>
                </div>
                <div className="flex items-center justify-center py-2">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex flex-col items-center space-y-1.5">
                      <span className="px-3 py-1 rounded text-xs font-mono bg-zinc-900 border border-zinc-700">25</span>
                      <span className="text-[10px] text-zinc-500">↓</span>
                      <span className="px-3 py-1 rounded text-xs font-mono bg-zinc-900 border border-zinc-700">28</span>
                      <span className="text-[10px] text-zinc-500">↓</span>
                      <span className="px-3 py-1 rounded text-xs font-mono bg-zinc-900 border border-zinc-700">75</span>
                    </div>
                    <div className="flex flex-col items-center space-y-1.5">
                      <span className="px-3 py-1 rounded text-xs font-mono bg-zinc-900 border border-zinc-700">24</span>
                      <span className="text-[10px] text-zinc-500">↓</span>
                      <span className={`px-3 py-1 rounded text-xs font-mono transition-all ${activeNode === 25 ? "bg-[#00FF9D] text-black font-bold shadow-[0_0_12px_#00FF9D]" : "bg-zinc-900 border border-zinc-700"}`}>25</span>
                      <span className="text-[10px] text-zinc-500">↓</span>
                      <span className="px-3 py-1 rounded text-xs font-mono bg-zinc-900 border border-zinc-700">13</span>
                    </div>
                  </div>
                </div>
                <div className="text-center text-[10px] font-mono text-[#00FF9D]">
                  ● Active Traversal: Node_{activeNode}
                </div>
              </div>

              {/* Card 3: A* Pathfinding Grid */}
              <div className="bg-[#070A0F] rounded-xl border border-zinc-800 p-3.5 flex flex-col justify-between">
                <div className="flex items-center justify-between pb-1">
                  <span className="font-mono text-xs font-semibold text-white">A* Pathfinding</span>
                  <span className="text-zinc-500 text-xs">•••</span>
                </div>
                <div className="relative w-full h-32 bg-[#030508] border border-zinc-800/80 rounded-lg p-2 flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 160 100">
                    {/* Grid lines */}
                    <path d="M 20 0 V 100 M 40 0 V 100 M 60 0 V 100 M 80 0 V 100 M 100 0 V 100 M 120 0 V 100 M 140 0 V 100" stroke="rgba(0,255,157,0.1)" strokeWidth="0.5" />
                    <path d="M 0 20 H 160 M 0 40 H 160 M 0 60 H 160 M 0 80 H 160" stroke="rgba(0,255,157,0.1)" strokeWidth="0.5" />
                    {/* Graph Path */}
                    <path d="M 20 80 L 50 65 L 70 85 L 100 50 L 130 65 L 145 20" stroke="#00FF9D" strokeWidth="1.5" fill="none" />
                    <circle cx="20" cy="80" r="4" fill="#00FF9D" />
                    <circle cx="50" cy="65" r="3" fill="#00F0FF" />
                    <circle cx="70" cy="85" r="3" fill="#00F0FF" />
                    <circle cx="100" cy="50" r="3" fill="#00F0FF" />
                    <circle cx="130" cy="65" r="3" fill="#00F0FF" />
                    <circle cx="145" cy="20" r="4" fill="#FF5F56" />
                  </svg>
                </div>
                <div className="flex justify-between text-[9px] font-mono text-zinc-400 pt-1">
                  <span>Start (0,0)</span>
                  <span className="text-[#00FF9D]">Shortest Path Found</span>
                </div>
              </div>

              {/* Card 4: Terminal Console */}
              <div className="bg-[#070A0F] rounded-xl border border-zinc-800 p-3.5 flex flex-col justify-between font-mono text-[10px]">
                <div className="flex items-center justify-between pb-1 border-b border-zinc-800">
                  <span className="text-white font-bold">Terminal</span>
                  <span className="text-zinc-500">✕</span>
                </div>
                <div className="py-2 space-y-1 text-zinc-300">
                  <div className="text-emerald-400">[INFO] Initializing WASM Environment... OK</div>
                  <div className="text-[#00F0FF]">[DB] Connected to DB_CLUSTER_ALPHA_7</div>
                  <div className="text-yellow-400">[SORT] Executing A* on Graph (250 nodes)</div>
                  <div className="text-zinc-400">[MEM] Usage: 14.8MB / 64MB</div>
                  <div className="text-[#00FF9D] font-bold">[BENCH] Sort time: 3.14ms</div>
                  <div className="flex items-center text-[#00FF9D]">
                    <span>&gt; _</span>
                    <span className="w-1.5 h-3 bg-[#00FF9D] animate-pulse ml-1" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Inspector Deck (md:col-span-3) */}
            <div className="md:col-span-3 p-4 flex flex-col justify-between space-y-4">
              {/* Variables */}
              <div className="bg-[#070A0F] rounded-xl border border-zinc-800 p-3 font-mono text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                  <span className="text-white font-semibold">Variables</span>
                  <span className="text-zinc-500">•••</span>
                </div>
                <div className="py-2 space-y-1.5 text-[10px] text-zinc-300">
                  <div>Array1[250] <span className="text-[#00FF9D]">[1, 250, 36, 30]</span></div>
                  <div>currentNode <span className="text-[#00F0FF]">[098]</span></div>
                  <div>pathCost <span className="text-white font-bold">10</span></div>
                </div>
              </div>

              {/* Database Table Inspector */}
              <div className="bg-[#070A0F] rounded-xl border border-zinc-800 p-3 font-mono text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                  <span className="text-white font-semibold">Database</span>
                  <span className="text-zinc-500">•••</span>
                </div>
                <table className="w-full text-[10px] text-left rtl:text-right text-zinc-400 pt-1">
                  <thead>
                    <tr className="border-b border-zinc-800 text-zinc-500">
                      <th>#</th>
                      <th>Record</th>
                      <th>Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>1</td><td className="text-zinc-200">Abdulgha...</td><td>85:00</td></tr>
                    <tr><td>2</td><td className="text-zinc-200">Jclri1250</td><td>89:00</td></tr>
                    <tr><td>3</td><td className="text-zinc-200">Abdulgha...</td><td>85:00</td></tr>
                    <tr><td>4</td><td className="text-zinc-200">Darinnsań</td><td>36:00</td></tr>
                  </tbody>
                </table>
              </div>

              {/* Telemetry Dials */}
              <div className="bg-[#070A0F] rounded-xl border border-zinc-800 p-3 font-mono">
                <div className="flex items-center justify-between pb-2 border-b border-zinc-800 text-xs">
                  <span className="text-white font-semibold">Telemetry</span>
                  <span className="text-zinc-500">•••</span>
                </div>
                <div className="grid grid-cols-3 gap-2 pt-2 text-center">
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
                    <div className="text-sm font-bold text-white">{netVal}MB/s</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
