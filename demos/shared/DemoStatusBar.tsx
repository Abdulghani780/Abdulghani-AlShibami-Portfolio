"use client";

import React, { useState, useEffect } from "react";
import { Activity, Server, Cpu, Database, Wifi } from "lucide-react";

interface DemoStatusBarProps {
  status?: string;
  items?: Array<{
    label: string;
    value: string;
    icon?: React.ReactNode;
  }>;
  locale?: "en" | "ar";
}

export function DemoStatusBar({ status = "ONLINE", items = [], locale = "en" }: DemoStatusBarProps) {
  const isRtl = locale === "ar";
  
  // Dynamic simulated telemetry for real computer feel
  const [cpuUsage, setCpuUsage] = useState(18);
  const [memUsage, setMemUsage] = useState(14.8);

  useEffect(() => {
    const interval = setInterval(() => {
      setCpuUsage((prev) => {
        const delta = Math.floor(Math.random() * 5) - 2;
        return Math.min(38, Math.max(12, prev + delta));
      });
      setMemUsage((prev) => {
        const delta = (Math.random() * 0.4) - 0.2;
        return parseFloat(Math.min(24.0, Math.max(12.0, prev + delta)).toFixed(1));
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#080C14] border-t border-white/[0.08] px-4 py-2 flex items-center justify-between flex-wrap gap-3 text-xs font-mono text-white/70 select-none">
      {/* Left: Online Status & Isolation Badge */}
      <div className="flex items-center gap-3 flex-wrap">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF9D] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FF9D]"></span>
          </span>
          <span className="font-bold text-[#00FF9D] uppercase tracking-wider text-[11px]">{status}</span>
        </div>
        <span className="hidden sm:inline text-white/20">|</span>
        <span className="text-[10px] text-white/50 hidden md:inline">
          {isRtl ? "بيئة عمل معزولة بمحاكي العتاد" : "Virtual Workstation Runtime Sandbox"}
        </span>
      </div>

      {/* Center/Right: Live Telemetry Gauges matching Concept 3 */}
      <div className="flex items-center gap-3 sm:gap-4 flex-wrap text-[10.5px]">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-1.5">
            {item.icon}
            <span className="text-white/50">{item.label}:</span>
            <span className="text-white font-semibold">{item.value}</span>
          </div>
        ))}

        {/* Live Simulated CPU Gauge */}
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] text-[#00FF9D]">
          <Cpu className="w-3 h-3 text-[#00FF9D]" />
          <span className="text-white/50">CPU:</span>
          <span className="font-bold text-[#00FF9D]">{cpuUsage}%</span>
        </div>

        {/* Live Simulated Memory Gauge */}
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] text-cyan-400">
          <Database className="w-3 h-3 text-cyan-400" />
          <span className="text-white/50">MEM:</span>
          <span className="font-bold text-cyan-400">{memUsage}MB</span>
        </div>

        {/* Network latency */}
        <div className="hidden lg:flex items-center gap-1.5 text-white/50">
          <Wifi className="w-3 h-3 text-emerald-400" />
          <span>NET: 12ms</span>
        </div>
      </div>
    </div>
  );
}
