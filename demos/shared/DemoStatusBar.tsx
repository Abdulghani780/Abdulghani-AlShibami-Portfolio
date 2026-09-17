import React from "react";
import { Activity, Server, Cpu, Database } from "lucide-react";

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

  return (
    <div className="w-full bg-surface-secondary/80 border-t border-border px-4 py-2 flex items-center justify-between flex-wrap gap-3 text-xs font-mono text-text-dim">
      <div className="flex items-center gap-3 flex-wrap">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-bold text-emerald-500 uppercase tracking-wider">{status}</span>
        </div>
        <span className="hidden sm:inline text-border">|</span>
        <span className="text-[11px] text-text-dim">
          {locale === "ar" ? "بيئة محاكاة معزولة" : "Sandboxed Simulation Runtime"}
        </span>
      </div>

      <div className="flex items-center gap-4 flex-wrap text-[11px]">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-1.5">
            {item.icon}
            <span className="text-text-muted">{item.label}:</span>
            <span className="text-text-primary font-semibold">{item.value}</span>
          </div>
        ))}
        <div className="hidden md:flex items-center gap-1.5 text-brand-gold">
          <Cpu className="w-3.5 h-3.5" />
          <span>V-CPU: IDLE</span>
        </div>
      </div>
    </div>
  );
}
