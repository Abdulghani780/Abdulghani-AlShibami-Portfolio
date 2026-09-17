"use client";

import React, { useState, useRef } from "react";
import { DemoToolbar } from "./DemoToolbar";
import { DemoStatusBar } from "./DemoStatusBar";
import { DemoDisclosure } from "./DemoDisclosure";

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
  statusText = "SIMULATION ONLINE",
  statusItems = [],
  toolbarActions,
  children,
}: DemoShellProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isRtl = locale === "ar";

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
          ? "fixed inset-0 z-50 bg-background overflow-y-auto p-2 sm:p-4"
          : "relative"
      }`}
    >
      {/* Simulation Disclosure Banner */}
      <DemoDisclosure disclaimer={disclaimer} locale={locale} isRtl={isRtl} />

      {/* Main Desktop Window Frame */}
      <div className="w-full rounded-xl border border-border/80 bg-surface shadow-2xl overflow-hidden flex flex-col transition-colors duration-200">
        {/* macOS / Windows Classic Window Header */}
        <div className="bg-surface-secondary px-4 py-2.5 border-b border-border/70 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 hover:opacity-100 transition-opacity" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 hover:opacity-100 transition-opacity" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 hover:opacity-100 transition-opacity" />
            <span className="text-[11px] font-mono text-text-dim ml-2 hidden sm:inline">
              // {projectSlug}.exe [SIMULATED_HOST]
            </span>
          </div>

          <div className="text-[11px] font-mono font-medium text-text-muted text-center truncate px-2">
            {title}
          </div>

          <div className="text-[10px] font-mono text-brand-gold bg-brand-gold/10 px-2 py-0.5 rounded border border-brand-gold/30">
            x64 SIM
          </div>
        </div>

        {/* Toolbar */}
        <DemoToolbar
          title={title}
          categoryName={categoryName}
          projectSlug={projectSlug}
          locale={locale}
          isFullscreen={isFullscreen}
          onToggleFullscreen={toggleFullscreen}
          onReset={onReset}
          actions={toolbarActions}
        />

        {/* Primary Simulation Workspace */}
        <div className="relative min-h-[480px] w-full bg-surface/50 overflow-x-auto">
          {children}
        </div>

        {/* Status Bar */}
        <DemoStatusBar status={statusText} items={statusItems} locale={locale} />
      </div>
    </div>
  );
}
