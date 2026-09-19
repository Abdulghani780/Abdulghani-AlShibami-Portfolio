"use client";

import React from "react";
import { RotateCcw, Maximize2, Minimize2, ArrowLeft, ArrowRight, Terminal } from "lucide-react";
import Link from "next/link";

interface DemoToolbarProps {
  title: string;
  categoryName?: string;
  projectSlug: string;
  locale: "en" | "ar";
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  onReset: () => void;
  actions?: React.ReactNode;
  onToggleTerminal?: () => void;
  isTerminalOpen?: boolean;
}

export function DemoToolbar({
  title,
  categoryName,
  projectSlug,
  locale,
  isFullscreen,
  onToggleFullscreen,
  onReset,
  actions,
  onToggleTerminal,
  isTerminalOpen = false,
}: DemoToolbarProps) {
  const isRtl = locale === "ar";
  const BackIcon = isRtl ? ArrowRight : ArrowLeft;

  return (
    <div className="w-full bg-[#0B0F19] border-b border-white/[0.08] px-4 py-2.5 flex items-center justify-between flex-wrap gap-3">
      {/* Title & Navigation Info */}
      <div className="flex items-center gap-3">
        <Link
          href={`/${locale}/projects/${projectSlug}`}
          className="inline-flex items-center gap-1.5 text-xs font-mono text-white/60 hover:text-[#00FF9D] transition-colors px-2.5 py-1.5 rounded bg-white/[0.04] border border-white/[0.08] hover:border-[#00FF9D]/40"
        >
          <BackIcon className="w-3.5 h-3.5" />
          <span>{locale === "ar" ? "دراسة الحالة" : "Case Study"}</span>
        </Link>

        <div className="h-4 w-px bg-white/10 hidden sm:block" />

        <div className="flex items-center gap-2">
          <h2 className="text-xs sm:text-sm font-bold text-white font-mono tracking-tight truncate max-w-[180px] sm:max-w-[280px] md:max-w-md">
            {title}
          </h2>
          {categoryName && (
            <span className="text-[10px] text-white/40 font-mono hidden sm:inline px-1.5 py-0.5 rounded bg-white/[0.03]">
              [{categoryName}]
            </span>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2">
        {actions}

        {onToggleTerminal && (
          <button
            type="button"
            onClick={onToggleTerminal}
            title={locale === "ar" ? "تبديل شاشة الأوامر" : "Toggle Terminal Console"}
            className={`inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1.5 rounded border transition-all active:scale-95 ${
              isTerminalOpen
                ? "bg-[#00FF9D]/15 border-[#00FF9D]/60 text-[#00FF9D]"
                : "bg-white/[0.04] border-white/[0.08] text-white/70 hover:text-white hover:border-white/20"
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{locale === "ar" ? "الترمينال" : "Terminal"}</span>
          </button>
        )}

        <button
          type="button"
          onClick={onReset}
          title={locale === "ar" ? "إعادة ضبط الحالة" : "Reset Simulation State"}
          className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1.5 rounded bg-white/[0.04] border border-white/[0.08] text-white/70 hover:text-white hover:border-[#00FF9D]/40 transition-all active:scale-95"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">{locale === "ar" ? "إعادة الضبط" : "Reset"}</span>
        </button>

        <button
          type="button"
          onClick={onToggleFullscreen}
          title={isFullscreen ? (locale === "ar" ? "إنهاء ملء الشاشة" : "Exit Fullscreen") : (locale === "ar" ? "ملء الشاشة" : "Fullscreen")}
          className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1.5 rounded bg-white/[0.04] border border-white/[0.08] text-white/70 hover:text-white hover:border-[#00FF9D]/40 transition-all active:scale-95"
        >
          {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          <span className="hidden sm:inline">
            {isFullscreen ? (locale === "ar" ? "إنهاء" : "Exit") : (locale === "ar" ? "تكبير" : "Maximize")}
          </span>
        </button>
      </div>
    </div>
  );
}
