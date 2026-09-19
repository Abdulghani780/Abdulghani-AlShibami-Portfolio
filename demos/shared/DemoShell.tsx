"use client";

import React, { useState, useRef, useEffect } from "react";
import { DemoToolbar } from "./DemoToolbar";
import { DemoStatusBar } from "./DemoStatusBar";
import { DemoDisclosure } from "./DemoDisclosure";
import { WorkstationConsole, WorkstationLog } from "./WorkstationConsole";

interface DemoShellProps {
  title: string;
  subtitle?: string;
  categoryName?: string;
  projectSlug: string;
  locale: "en" | "ar";
  disclaimer: {
    en: string;
    ar: string;
  };
  onReset: () => void;
  statusText?: string;
  statusItems?: Array<{
    label: string;
    value: string;
    icon?: React.ReactNode;
  }>;
  toolbarActions?: React.ReactNode;
  children: React.ReactNode;
}

export function DemoShell({
  title,
  subtitle,
  categoryName,
  projectSlug,
  locale,
  disclaimer,
  onReset,
  statusText = "LIVE RUNTIME ACTIVE",
  statusItems = [],
  toolbarActions,
  children,
}: DemoShellProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isRtl = locale === "ar";

  // Initial authentic boot sequence logs per project
  const getInitialLogs = (): WorkstationLog[] => {
    const time = new Date().toLocaleTimeString("en-US", { hour12: false });
    
    if (projectSlug === "metaalgorithm-lab") {
      return [
        { id: "1", time, level: "info", tag: "SYS", message: "Initializing Native Algorithm Workbench v2.4..." },
        { id: "2", time, level: "exec", tag: "WASM", message: "WASM / C# Core Execution Sandbox loaded successfully." },
        { id: "3", time, level: "metric", tag: "MEM", message: "Heap Allocated: 64MB Virtual Buffer (Usage: 14.8MB)." },
        { id: "4", time, level: "info", tag: "BENCH", message: "Vectorized Math & O(n log n) Telemetry Engine: READY." },
      ];
    }
    if (projectSlug === "campus-it-tracker") {
      return [
        { id: "1", time, level: "info", tag: "SYS", message: "Booting Campus IT Tracker ITIL Environment..." },
        { id: "2", time, level: "exec", tag: "ORACLE", message: "Connected to Oracle 10g Enterprise Cluster (Port 1521)." },
        { id: "3", time, level: "metric", tag: "ASSETS", message: "Loaded 1,420 custody records across 14 campus zones." },
        { id: "4", time, level: "info", tag: "KANBAN", message: "ITIL Service Desk Triage Pipeline: OPERATIONAL." },
      ];
    }
    if (projectSlug === "novatech") {
      return [
        { id: "1", time, level: "info", tag: "SYS", message: "NovaTech Cloud Storefront Instance online." },
        { id: "2", time, level: "exec", tag: "EDGE", message: "Edge Cache Synced: 24 active SKU nodes." },
        { id: "3", time, level: "metric", tag: "LATENCY", message: "Client round-trip latency: 12ms." },
      ];
    }
    if (projectSlug === "graduation-project-portal" || projectSlug === "gp") {
      return [
        { id: "1", time, level: "info", tag: "SYS", message: "Academic Lifecycle Evaluation Engine started." },
        { id: "2", time, level: "exec", tag: "RBAC", message: "Permissions verified: Committee, Supervisor, Student." },
        { id: "3", time, level: "info", tag: "PROPOSAL", message: "Evaluation Rubric Pipeline: ACTIVE (94/100 score threshold)." },
      ];
    }
    // Cafena default
    return [
      { id: "1", time, level: "info", tag: "SYS", message: "Cafena POS & Inventory Enterprise Suite initialized." },
      { id: "2", time, level: "exec", tag: "RTL", message: "Arabic RTL Layout Engine & Currency Formatter: SYNCED." },
      { id: "3", time, level: "metric", tag: "ORDERS", message: "Live orders ledger active: 412 transactions processed." },
    ];
  };

  const [logs, setLogs] = useState<WorkstationLog[]>(getInitialLogs);

  const handleResetWithLog = () => {
    onReset();
    const time = new Date().toLocaleTimeString("en-US", { hour12: false });
    setLogs((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        time,
        level: "warn",
        tag: "RESET",
        message: "Simulation state cleared and re-initialized to defaults.",
      },
    ]);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;

    if (!isFullscreen) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen().catch(() => {});
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
      setIsFullscreen(false);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`w-full transition-all duration-300 ${
        isFullscreen
          ? "fixed inset-0 z-50 bg-[#070A0F] overflow-y-auto p-2 sm:p-4"
          : "relative"
      }`}
    >
      {/* Simulation Disclosure Banner */}
      <DemoDisclosure disclaimer={disclaimer} locale={locale} isRtl={isRtl} />

      {/* Main Desktop Window Frame — Workstation Sandbox matching Concept 3 */}
      <div className="w-full rounded-2xl border border-white/[0.12] bg-[#070A0F] shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(0,255,157,0.06)] overflow-hidden flex flex-col transition-all duration-200">
        
        {/* Operating System Window Header Bar (Traffic Lights + Metadata) */}
        <div className="bg-[#090D17] px-4 py-2.5 border-b border-white/[0.08] flex items-center justify-between select-none flex-wrap gap-2">
          {/* Left: Traffic Lights Controls */}
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56] hover:brightness-125 transition-all cursor-pointer shadow-sm" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E] hover:brightness-125 transition-all cursor-pointer shadow-sm" />
            <span className="w-3 h-3 rounded-full bg-[#27C93F] hover:brightness-125 transition-all cursor-pointer shadow-sm shadow-[#27C93F]/40" />
            
            <span className="text-[11px] font-mono text-white/40 ml-2 hidden sm:inline">
              // {projectSlug}.app
            </span>
          </div>

          {/* Center: Window Application Title */}
          <div className="text-xs font-mono font-semibold text-white/90 text-center truncate px-2 max-w-[220px] sm:max-w-md">
            {title} — Live Native Workstation Sandbox
          </div>

          {/* Right: Telemetry Environment Badges matching Concept 3 */}
          <div className="flex items-center gap-2 text-[10px] font-mono">
            <span className="hidden md:inline text-white/40">
              [USER: A. Al-Shibami]
            </span>
            <span className="px-2 py-0.5 rounded bg-[#00FF9D]/10 text-[#00FF9D] font-bold border border-[#00FF9D]/30 flex items-center gap-1.5 shadow-[0_0_10px_rgba(0,255,157,0.15)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D] animate-ping" />
              <span>{isRtl ? "بيئة حية مباشرة" : "ACTIVE RUNTIME"}</span>
            </span>
          </div>
        </div>

        {/* Toolbar with Terminal Toggle */}
        <DemoToolbar
          title={title}
          categoryName={categoryName}
          projectSlug={projectSlug}
          locale={locale}
          isFullscreen={isFullscreen}
          onToggleFullscreen={toggleFullscreen}
          onReset={handleResetWithLog}
          actions={toolbarActions}
          onToggleTerminal={() => setIsTerminalOpen(!isTerminalOpen)}
          isTerminalOpen={isTerminalOpen}
        />

        {/* Primary Simulation Workspace */}
        <div className="relative min-h-[500px] w-full bg-[#060911]/90 overflow-x-auto">
          {children}
        </div>

        {/* Collapsible Live Workstation Terminal Drawer */}
        <WorkstationConsole
          logs={logs}
          onClear={() => setLogs([])}
          isOpen={isTerminalOpen}
          onToggle={() => setIsTerminalOpen(!isTerminalOpen)}
          locale={locale}
        />

        {/* Status Bar with Live CPU & Memory Telemetry */}
        <DemoStatusBar status={statusText} items={statusItems} locale={locale} />
      </div>
    </div>
  );
}
