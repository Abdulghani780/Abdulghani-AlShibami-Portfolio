import React from "react";
import { RotateCcw, Maximize2, Minimize2, ExternalLink, ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

interface DemoToolbarProps {
  title: string;
  categoryName?: string;
  projectSlug: string;
  locale: "en" | "ar";
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  onReset: () => void;
  actions?: React.ReactNode;
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
}: DemoToolbarProps) {
  const isRtl = locale === "ar";
  const BackIcon = isRtl ? ArrowRight : ArrowLeft;

  return (
    <div className="w-full bg-surface-secondary/90 border-b border-border px-4 py-3 flex items-center justify-between flex-wrap gap-3">
      {/* Title & Category info */}
      <div className="flex items-center gap-3">
        <Link
          href={`/${locale}/projects/${projectSlug}`}
          className="inline-flex items-center gap-1 text-xs font-mono text-text-dim hover:text-brand-gold transition-colors px-2.5 py-1.5 rounded bg-surface border border-border hover:border-brand-gold/40"
        >
          <BackIcon className="w-3.5 h-3.5" />
          <span>{locale === "ar" ? "دراسة الحالة" : "Case Study"}</span>
        </Link>
        <div className="h-4 w-px bg-border hidden sm:block" />
        <div>
          <h2 className="text-xs sm:text-sm font-bold text-text-primary font-mono tracking-tight truncate max-w-[200px] sm:max-w-[320px] md:max-w-md">
            {title}
          </h2>
          {categoryName && (
            <span className="text-[10px] text-text-dim font-mono block sm:inline sm:ml-2 rtl:sm:mr-2">
              [{categoryName}]
            </span>
          )}
        </div>
      </div>

      {/* Control Buttons */}
      <div className="flex items-center gap-2">
        {actions}

        <button
          onClick={onReset}
          title={locale === "ar" ? "إعادة ضبط الحالة" : "Reset Simulation State"}
          className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1.5 rounded bg-surface border border-border text-text-muted hover:text-text-primary hover:border-brand-gold/50 transition-all active:scale-95"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">{locale === "ar" ? "إعادة الضبط" : "Reset"}</span>
        </button>

        <button
          onClick={onToggleFullscreen}
          title={isFullscreen ? (locale === "ar" ? "إنهاء ملء الشاشة" : "Exit Fullscreen") : (locale === "ar" ? "ملء الشاشة" : "Fullscreen")}
          className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1.5 rounded bg-surface border border-border text-text-muted hover:text-text-primary hover:border-brand-gold/50 transition-all active:scale-95"
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
