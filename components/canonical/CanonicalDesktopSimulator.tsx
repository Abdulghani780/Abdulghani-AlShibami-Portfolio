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
  const [simdEnabled, setSimdEnabled] = useState(true);
  const [wasmThreads, setWasmThreads] = useState(8);
  const [gcMode, setGcMode] = useState<"Low-Latency" | "Balanced" | "Throughput">("Low-Latency");
  const [telemetryRate, setTelemetryRate] = useState("100ms");
  const [isRunningTests, setIsRunningTests] = useState(false);
  const [testRunCount, setTestRunCount] = useState(1);
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

  const handleRunTests = () => {
    setIsRunningTests(true);
    setTimeout(() => {
      setIsRunningTests(false);
      setTestRunCount((c) => c + 1);
    }, 650);
  };

  const TABS = [
    { name: "Files", icon: "▤", labelAr: "الملفات" },
    { name: "Tests", icon: "◈", labelAr: "الاختبارات" },
    { name: "Metrics", icon: "▲", labelAr: "المقاييس" },
    { name: "Settings", icon: "⚙", labelAr: "الإعدادات" },
  ];

  return (
    <section
      id="sandbox"
      className="relative w-full bg-canvas text-content-primary py-20 px-4 sm:px-8 lg:px-16 overflow-hidden transition-colors duration-300"
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

      {/* ── Section Header ── */}
      <div className="relative z-10 max-w-7xl mx-auto mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 font-mono text-[10px] tracking-[0.18em] text-emerald-600 dark:text-emerald-400 uppercase mb-3 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 motion-safe:animate-ping" />
            {isAr ? "SECTION 03 / المحاكي" : "SECTION 03 / DESKTOP SANDBOX"}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-content-primary tracking-tight">
            {isAr ? "بيئة التشغيل الأصيلة المباشرة" : "Live Native Execution Sandbox"}
          </h2>
          <p className="text-content-muted text-sm mt-1 font-mono">
            {isAr ? "محاكاة نافذة نظام التشغيل الكاملة — تفاعل مع التبويبات والمقاييس" : "MetaAlgorithm Lab v2.4 — full OS window simulation with interactive runtime panels"}
          </p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-secondary border border-hairline font-mono text-xs text-emerald-600 dark:text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 motion-safe:animate-ping" />
          WASM ENGINE ONLINE
        </div>
      </div>

      {/* ── DESKTOP WINDOW CONTAINER (Strict LTR for Authentic Engineering IDE Ergonomics) ── */}
      <div className="relative z-10 max-w-7xl mx-auto" dir="ltr">
        {/* Outer search & profile bar */}
        <div className="w-full bg-[#070A10] rounded-t-2xl border border-zinc-800 px-4 py-2.5 flex items-center justify-between text-left">
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
              <div className="w-7 h-7 rounded-full border border-emerald-400/35 overflow-hidden relative">
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
        <div className="w-full bg-[#0A0E18] rounded-b-2xl border-x border-b border-zinc-800 shadow-[0_0_60px_rgba(0,0,0,0.8)] overflow-hidden text-left">
          {/* Title bar */}
          <div className="bg-[#111622] px-4 py-2.5 flex items-center justify-between border-b border-zinc-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56] hover:bg-[#FF5F56]/80 cursor-pointer" title="Close" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E] hover:bg-[#FFBD2E]/80 cursor-pointer" title="Minimize" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F] shadow-[0_0_8px_rgba(39,201,63,0.5)] hover:brightness-110 cursor-pointer" title="Maximize" />
            </div>
            <div className="font-mono text-[11px] font-semibold text-zinc-300">
              MetaAlgorithm Lab v2.4 — Live Native Execution Sandbox
            </div>
            <div className="font-mono text-[10px] text-emerald-400">● 60 FPS</div>
          </div>

          {/* Status ticker */}
          <div className="bg-[#070A10] px-4 py-1.5 border-b border-zinc-800 font-mono text-[10px] text-zinc-500 flex flex-wrap items-center justify-between gap-2">
            <span>[USER: Abdulghani Al-Shibami]</span>
            <span>[ENV: RENDER v3.1]</span>
            <span className="text-emerald-400 font-bold">[STATUS: ACTIVE RUNTIME]</span>
            <span>[ENGINE: WASM / C# CORE]</span>
          </div>

          {/* Main workspace */}
          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[540px]">

            {/* Left sidebar: Tabs */}
            <div className="md:col-span-1 bg-[#070A10] border-r border-zinc-800 flex md:flex-col items-center justify-between p-3 py-5">
              <div className="flex md:flex-col items-center gap-5">
                <span className="w-8 h-8 rounded-lg bg-emerald-400/15 border border-emerald-400/35 flex items-center justify-center text-emerald-400 text-sm font-bold shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                  ⚡
                </span>
                {TABS.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => setActiveTab(item.name)}
                    className={`flex flex-col items-center gap-1 text-[10px] font-mono transition-all duration-200 cursor-pointer p-1.5 rounded-lg ${
                      activeTab === item.name
                        ? "text-emerald-400 bg-emerald-400/10 border border-emerald-400/30 shadow-[0_0_12px_rgba(16,185,129,0.15)]"
                        : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/40"
                    }`}
                    title={isAr ? item.labelAr : item.name}
                  >
                    <span className="text-base">{item.icon}</span>
                    <span>{item.name}</span>
                  </button>
                ))}
              </div>
              <span className="text-zinc-700 text-sm hidden md:block">⏻</span>
            </div>

            {/* Center workspace: Dynamic based on activeTab */}
            <div className="md:col-span-8 p-4 border-r border-zinc-800/60 overflow-hidden">

              {/* TAB 1: FILES & ALGORITHMS (4 PANELS) */}
              {activeTab === "Files" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
                  {/* Panel 1: Sorting Visualizer */}
                  <div className="bg-[#070A10] rounded-xl border border-zinc-800 p-3.5 flex flex-col justify-between">
                    <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                      <span className="font-mono text-xs font-semibold text-white">Merge Sort</span>
                      <span className="text-emerald-400 text-[10px] font-mono">O(n log n)</span>
                    </div>
                    <div className="py-3 flex items-end gap-0.5 h-20">
                      {sortBars.map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t transition-all duration-500"
                          style={{
                            height: `${h}%`,
                            backgroundColor: i < sortBars.length * (sortProgress / 100) ? "#10B981" : "#1f2937",
                            opacity: 0.7 + i * 0.02,
                            boxShadow: i < sortBars.length * (sortProgress / 100) ? "0 0 6px rgba(16,185,129,0.4)" : "none",
                          }}
                        />
                      ))}
                    </div>
                    <div>
                      <div className="w-full bg-zinc-900 rounded-full h-1.5 overflow-hidden">
                        <div
                          className="bg-emerald-400 h-full rounded-full transition-all duration-500 shadow-[0_0_8px_#10B981]"
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
                      <span className="text-zinc-500 text-[10px] font-mono">Queue Active</span>
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
                                    ? "bg-emerald-400 text-black font-bold shadow-[0_0_12px_#10B981]"
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
                    <div className="text-center text-[10px] font-mono text-emerald-400">
                      ● Active: Node_{activeNode}
                    </div>
                  </div>

                  {/* Panel 3: A* Grid */}
                  <div className="bg-[#070A10] rounded-xl border border-zinc-800 p-3.5 flex flex-col justify-between">
                    <div className="flex items-center justify-between pb-1 border-b border-zinc-800">
                      <span className="font-mono text-xs font-semibold text-white">A* Pathfinding</span>
                      <span className="text-[#00F0FF] text-[10px] font-mono">Heuristic: Euclidean</span>
                    </div>
                    <div className="relative w-full h-28 bg-[#030508] border border-zinc-800 rounded-lg overflow-hidden">
                      <svg className="w-full h-full" viewBox="0 0 160 100" fill="none">
                        <path d="M 20 0 V 100 M 40 0 V 100 M 60 0 V 100 M 80 0 V 100 M 100 0 V 100 M 120 0 V 100 M 140 0 V 100" stroke="rgba(16,185,129,0.08)" strokeWidth="0.5" />
                        <path d="M 0 20 H 160 M 0 40 H 160 M 0 60 H 160 M 0 80 H 160" stroke="rgba(16,185,129,0.08)" strokeWidth="0.5" />
                        <path d="M 20 80 L 50 65 L 70 85 L 100 50 L 130 65 L 145 20" stroke="#10B981" strokeWidth="1.5" />
                        {/* Explored cells */}
                        <rect x="15" y="75" width="10" height="10" fill="rgba(0,240,255,0.12)" />
                        <rect x="35" y="60" width="10" height="10" fill="rgba(0,240,255,0.12)" />
                        <rect x="55" y="80" width="10" height="10" fill="rgba(0,240,255,0.12)" />
                        <circle cx="20" cy="80" r="3.5" fill="#10B981" />
                        <circle cx="50" cy="65" r="2.5" fill="#00F0FF" />
                        <circle cx="70" cy="85" r="2.5" fill="#00F0FF" />
                        <circle cx="100" cy="50" r="2.5" fill="#00F0FF" />
                        <circle cx="130" cy="65" r="2.5" fill="#00F0FF" />
                        <circle cx="145" cy="20" r="3.5" fill="#FF5F56" />
                      </svg>
                    </div>
                    <div className="flex justify-between text-[9px] font-mono text-zinc-500 pt-1">
                      <span>Start (0,0)</span>
                      <span className="text-emerald-400">Optimal Path Found ✓</span>
                    </div>
                  </div>

                  {/* Panel 4: Terminal */}
                  <div className="bg-[#070A10] rounded-xl border border-zinc-800 p-3.5 flex flex-col justify-between font-mono text-[10px]">
                    <div className="flex items-center justify-between pb-1 border-b border-zinc-800">
                      <span className="text-white font-bold">WASM Terminal</span>
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
                      <div className="text-emerald-400 font-bold">[BENCH] Sort time: 3.14ms ✓</div>
                      <div className="flex items-center text-emerald-400">
                        <span>&gt; _</span>
                        <span className="w-1.5 h-3 bg-emerald-400 type-cursor ml-1" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: AUTOMATED TESTS RUNNER */}
              {activeTab === "Tests" && (
                <div className="bg-[#070A10] rounded-xl border border-zinc-800 p-4 h-full flex flex-col justify-between font-mono">
                  {/* Test Runner Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-zinc-800">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-white font-bold text-sm">MetaAlgorithm.Wasm.UnitTests</span>
                        <span className="px-2 py-0.5 rounded text-[9px] bg-emerald-400/10 text-emerald-400 border border-emerald-400/30">
                          xUnit / .NET 8
                        </span>
                      </div>
                      <p className="text-zinc-500 text-[10px] mt-0.5">
                        Test Run #{testRunCount} · NativeAOT SIMD Vectorization Suite
                      </p>
                    </div>
                    <button
                      onClick={handleRunTests}
                      disabled={isRunningTests}
                      className="px-3 py-1.5 rounded-lg bg-emerald-400/15 hover:bg-emerald-400/25 border border-emerald-400/40 text-emerald-400 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                    >
                      <span className={isRunningTests ? "animate-spin" : ""}>↺</span>
                      <span>{isRunningTests ? "Running Suite..." : "Re-run Test Suite"}</span>
                    </button>
                  </div>

                  {/* Tests List */}
                  <div className="py-3 space-y-2 overflow-y-auto max-h-[340px] pr-1">
                    {[
                      {
                        name: "Test_MergeSort_Stability_100k_Integers",
                        assert: "Assert.True(IsSorted(arr) && IsStable(arr))",
                        time: "1.84ms",
                      },
                      {
                        name: "Test_AStar_Euclidean_Heuristic_Admissibility",
                        assert: "Assert.InRange(path.Cost, 0.0, optimalBound)",
                        time: "0.65ms",
                      },
                      {
                        name: "Test_BPlusTree_Concurrent_Split_Merge",
                        assert: "Parallel.For(0, 10000) => Tree.VerifyBalance()",
                        time: "3.42ms",
                      },
                      {
                        name: "Test_SIMD_Vector128_DotProduct_Accuracy",
                        assert: "Assert.Equal(scalarRes, vectorRes, precision: 1e-6)",
                        time: "0.28ms",
                      },
                      {
                        name: "Test_HeapSort_InPlace_Zero_Allocation",
                        assert: "Assert.Equal(0, GC.GetAllocatedBytesForCurrentThread())",
                        time: "2.15ms",
                      },
                      {
                        name: "Test_Graph_Dijkstra_DenseMatrix_Convergence",
                        assert: "Assert.True(HasOptimalPath(graph, start, end))",
                        time: "4.11ms",
                      },
                      {
                        name: "Test_Wasm_LinearMemory_PageGuard",
                        assert: "Assert.Throws<AccessViolationException>(outOfBounds)",
                        time: "0.18ms",
                      },
                    ].map((t, idx) => (
                      <div
                        key={t.name}
                        className={`p-2.5 rounded-lg border transition-all text-[11px] flex items-center justify-between gap-3 ${
                          isRunningTests
                            ? "bg-zinc-900/60 border-zinc-700 animate-pulse"
                            : "bg-[#04060A] border-zinc-800/80 hover:border-zinc-700"
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className="text-emerald-400 font-bold">✓</span>
                          <div className="truncate">
                            <span className="text-zinc-200 font-semibold">{t.name}</span>
                            <div className="text-[10px] text-zinc-500 font-mono truncate">{t.assert}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="text-zinc-400 text-[10px]">{t.time}</span>
                          <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[9px] font-bold">
                            PASSED
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Test Telemetry Summary */}
                  <div className="pt-2 border-t border-zinc-800 flex flex-wrap items-center justify-between text-[10px] text-zinc-400 gap-2">
                    <div className="flex items-center gap-3">
                      <span className="text-emerald-400 font-bold">● 7 Passed</span>
                      <span>0 Failed</span>
                      <span className="text-zinc-500">12.63ms execution</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>Branch Coverage:</span>
                      <span className="text-white font-bold bg-zinc-800 px-2 py-0.5 rounded">98.4%</span>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: METRICS & COMPLEXITY MATRIX */}
              {activeTab === "Metrics" && (
                <div className="bg-[#070A10] rounded-xl border border-zinc-800 p-4 h-full flex flex-col justify-between font-mono text-xs">
                  <div>
                    <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                      <span className="text-white font-bold">Algorithmic Complexity & Empirical Matrix</span>
                      <span className="text-[10px] text-[#00F0FF]">[BENCHMARK HARNESS: v2.4]</span>
                    </div>

                    {/* Complexity Table */}
                    <div className="mt-3 overflow-x-auto">
                      <table className="w-full text-[10px] text-left">
                        <thead>
                          <tr className="border-b border-zinc-800 text-zinc-500 uppercase">
                            <th className="py-1.5 px-2">Algorithm</th>
                            <th className="py-1.5 px-2">Best</th>
                            <th className="py-1.5 px-2">Average</th>
                            <th className="py-1.5 px-2">Worst</th>
                            <th className="py-1.5 px-2">Space</th>
                            <th className="py-1.5 px-2">Hardware Vector</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-800/60 text-zinc-300">
                          <tr>
                            <td className="py-1.5 px-2 font-bold text-white">Merge Sort</td>
                            <td className="py-1.5 px-2 text-emerald-400">Ω(n log n)</td>
                            <td className="py-1.5 px-2">Θ(n log n)</td>
                            <td className="py-1.5 px-2 text-[#FFBD2E]">O(n log n)</td>
                            <td className="py-1.5 px-2">O(n)</td>
                            <td className="py-1.5 px-2 text-emerald-400">Cache-Aligned</td>
                          </tr>
                          <tr>
                            <td className="py-1.5 px-2 font-bold text-white">HeapSort</td>
                            <td className="py-1.5 px-2 text-emerald-400">Ω(n log n)</td>
                            <td className="py-1.5 px-2">Θ(n log n)</td>
                            <td className="py-1.5 px-2 text-[#FFBD2E]">O(n log n)</td>
                            <td className="py-1.5 px-2 text-emerald-400">O(1) [In-place]</td>
                            <td className="py-1.5 px-2 text-[#00F0FF]">SIMD128</td>
                          </tr>
                          <tr>
                            <td className="py-1.5 px-2 font-bold text-white">QuickSort</td>
                            <td className="py-1.5 px-2 text-emerald-400">Ω(n log n)</td>
                            <td className="py-1.5 px-2">Θ(n log n)</td>
                            <td className="py-1.5 px-2 text-[#FF5F56]">O(n²)</td>
                            <td className="py-1.5 px-2">O(log n)</td>
                            <td className="py-1.5 px-2 text-[#00F0FF]">AVX2 Partition</td>
                          </tr>
                          <tr>
                            <td className="py-1.5 px-2 font-bold text-white">A* Search</td>
                            <td className="py-1.5 px-2 text-emerald-400">Ω(1)</td>
                            <td className="py-1.5 px-2">Θ(b^d)</td>
                            <td className="py-1.5 px-2">O(b^d)</td>
                            <td className="py-1.5 px-2">O(b^d)</td>
                            <td className="py-1.5 px-2 text-yellow-400">Min-Heap PQueue</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* Empirical Throughput Comparison Bars */}
                    <div className="mt-4 pt-3 border-t border-zinc-800 space-y-2">
                      <span className="text-[11px] font-bold text-zinc-300">Throughput Benchmark (ops / sec):</span>
                      {[
                        { name: "SIMD Vector Sort (AVX2)", ops: "4.82 M", percent: 96, color: "#10B981" },
                        { name: "QuickSort (Median-of-3)", ops: "2.91 M", percent: 65, color: "#00F0FF" },
                        { name: "MergeSort (Memory-Bound)", ops: "2.10 M", percent: 48, color: "#FFBD2E" },
                        { name: "A* Pathfinding Search", ops: "520 K", percent: 32, color: "#a855f7" },
                      ].map((bench) => (
                        <div key={bench.name} className="space-y-1">
                          <div className="flex justify-between text-[10px] text-zinc-400">
                            <span>{bench.name}</span>
                            <span className="font-bold text-white">{bench.ops}</span>
                          </div>
                          <div className="w-full bg-zinc-900 rounded-full h-1.5 overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all duration-700"
                              style={{ width: `${bench.percent}%`, backgroundColor: bench.color }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Cache Efficiency Metric */}
                  <div className="pt-2 border-t border-zinc-800 flex justify-between text-[10px] text-zinc-500">
                    <span>L1/L2 Cache Hit Ratio: <strong className="text-emerald-400">99.2%</strong></span>
                    <span>Branch Prediction: <strong className="text-[#00F0FF]">98.7%</strong></span>
                  </div>
                </div>
              )}

              {/* TAB 4: RUNTIME SANDBOX SETTINGS */}
              {activeTab === "Settings" && (
                <div className="bg-[#070A10] rounded-xl border border-zinc-800 p-4 h-full flex flex-col justify-between font-mono text-xs">
                  <div>
                    <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                      <span className="text-white font-bold">WASM Execution & Sandbox Configuration</span>
                      <span className="text-[10px] text-emerald-400">ACTIVE PROFILE</span>
                    </div>

                    <div className="mt-4 space-y-4 text-[11px]">
                      {/* SIMD Toggle */}
                      <div className="flex items-center justify-between p-3 rounded-lg bg-[#04060A] border border-zinc-800">
                        <div>
                          <div className="text-white font-bold">SIMD Hardware Acceleration</div>
                          <div className="text-[10px] text-zinc-500">
                            AVX2 / WASM Simd128 vector instructions (4x scalar throughput)
                          </div>
                        </div>
                        <button
                          onClick={() => setSimdEnabled(!simdEnabled)}
                          className={`px-3 py-1 rounded-md text-[10px] font-bold transition-all cursor-pointer ${
                            simdEnabled
                              ? "bg-emerald-400 text-black shadow-[0_0_10px_rgba(16,185,129,0.4)]"
                              : "bg-zinc-800 text-zinc-400 border border-zinc-700"
                          }`}
                        >
                          {simdEnabled ? "ENABLED ✓" : "DISABLED"}
                        </button>
                      </div>

                      {/* Worker Threads Selector */}
                      <div className="p-3 rounded-lg bg-[#04060A] border border-zinc-800 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-white font-bold">WASM Worker Thread Pool</span>
                          <span className="text-[#00F0FF] font-bold">{wasmThreads} Threads</span>
                        </div>
                        <div className="flex gap-2">
                          {[2, 4, 8, 16].map((threads) => (
                            <button
                              key={threads}
                              onClick={() => setWasmThreads(threads)}
                              className={`flex-1 py-1 rounded text-[10px] font-bold border transition-all cursor-pointer ${
                                wasmThreads === threads
                                  ? "bg-[#00F0FF]/15 border-[#00F0FF] text-[#00F0FF] shadow-[0_0_8px_rgba(0,240,255,0.25)]"
                                  : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white"
                              }`}
                            >
                              {threads}T
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* GC Mode */}
                      <div className="p-3 rounded-lg bg-[#04060A] border border-zinc-800 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-white font-bold">Garbage Collector Target</span>
                          <span className="text-yellow-400 font-bold">{gcMode}</span>
                        </div>
                        <div className="flex gap-2">
                          {(["Low-Latency", "Balanced", "Throughput"] as const).map((mode) => (
                            <button
                              key={mode}
                              onClick={() => setGcMode(mode)}
                              className={`flex-1 py-1 rounded text-[10px] font-bold border transition-all cursor-pointer ${
                                gcMode === mode
                                  ? "bg-yellow-400/15 border-yellow-400 text-yellow-400"
                                  : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white"
                              }`}
                            >
                              {mode}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Telemetry Refresh */}
                      <div className="flex items-center justify-between p-3 rounded-lg bg-[#04060A] border border-zinc-800">
                        <span className="text-white font-bold">Telemetry Sample Rate</span>
                        <div className="flex gap-1.5">
                          {["50ms", "100ms", "250ms"].map((rate) => (
                            <button
                              key={rate}
                              onClick={() => setTelemetryRate(rate)}
                              className={`px-2 py-0.5 rounded text-[10px] border transition-all cursor-pointer ${
                                telemetryRate === rate
                                  ? "bg-emerald-400/15 border-emerald-400 text-emerald-400"
                                  : "bg-zinc-900 border-zinc-800 text-zinc-500"
                              }`}
                            >
                              {rate}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Live Simulation Impact Card */}
                  <div className="p-3 rounded-lg bg-emerald-400/06 border border-emerald-400/25 mt-3 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-bold text-emerald-400">ESTIMATED SYSTEM THROUGHPUT</div>
                      <div className="text-[9px] text-zinc-400">
                        Threads: {wasmThreads} · SIMD: {simdEnabled ? "Active" : "Off"} · GC: {gcMode}
                      </div>
                    </div>
                    <div className="text-base font-black font-mono text-emerald-400">
                      {(wasmThreads * (simdEnabled ? 1.45 : 1.0) * 1.8).toFixed(1)} M ops/s
                    </div>
                  </div>
                </div>
              )}
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
                  <div>Array1[250] <span className="text-emerald-400">[1, 250, 36…]</span></div>
                  <div>currentNode <span className="text-[#00F0FF]">[{activeNode}]</span></div>
                  <div>simd_accel <span className="text-white font-bold">{simdEnabled ? "true" : "false"}</span></div>
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
                    <div className="text-sm font-bold text-emerald-400">{cpuVal}%</div>
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
                    { label: "CPU", val: cpuVal, max: 100, color: "#10B981" },
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
