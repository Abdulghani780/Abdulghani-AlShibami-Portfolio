"use client";

import React, { useState } from "react";
import { Terminal, Trash2, ChevronDown, ChevronUp, Copy, Check } from "lucide-react";

export interface WorkstationLog {
  id: string;
  time: string;
  level: "info" | "exec" | "metric" | "warn";
  tag: string;
  message: string;
}

interface WorkstationConsoleProps {
  logs: WorkstationLog[];
  onClear: () => void;
  isOpen: boolean;
  onToggle: () => void;
  locale: "en" | "ar";
}

export function WorkstationConsole({
  logs,
  onClear,
  isOpen,
  onToggle,
  locale,
}: WorkstationConsoleProps) {
  const isRtl = locale === "ar";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = logs
      .map((l) => `[${l.time}] [${l.tag}] ${l.message}`)
      .join("\n");
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getLevelStyle = (level: WorkstationLog["level"]) => {
    switch (level) {
      case "exec":
        return "text-emerald-400";
      case "metric":
        return "text-cyan-400";
      case "warn":
        return "text-amber-400";
      case "info":
      default:
        return "text-white/70";
    }
  };

  return (
    <div className="w-full border-t border-white/[0.08] bg-[#070A0F] font-mono text-xs transition-all duration-200 select-text">
      {/* Console Header / Toggle Strip */}
      <div
        onClick={onToggle}
        className="px-4 py-2 bg-[#0A0F17] hover:bg-[#0D141F] flex items-center justify-between cursor-pointer border-b border-white/[0.04] transition-colors"
      >
        <div className="flex items-center gap-2 text-white/80">
          <Terminal className="w-3.5 h-3.5 text-emerald-400" />
          <span className="font-bold text-[11px] text-white">
            {isRtl ? "شاشة الأوامر الحية (Live Workstation Terminal)" : "TERMINAL CONSOLE // LIVE EXECUTION STREAM"}
          </span>
          <span className="px-1.5 py-0.5 rounded text-[9px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            {logs.length} {isRtl ? "حدث" : "events"}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {isOpen && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCopy();
                }}
                title={isRtl ? "نسخ السجلات" : "Copy Logs"}
                className="p-1 rounded text-white/50 hover:text-white hover:bg-white/10 transition-colors"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onClear();
                }}
                title={isRtl ? "مسح السجلات" : "Clear Console"}
                className="p-1 rounded text-white/50 hover:text-rose-400 hover:bg-white/10 transition-colors"
              >
                <Trash2 className="w-3 h-3" />
              </button>
            </>
          )}
          <span className="text-white/40 text-[10px]">
            {isOpen ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
          </span>
        </div>
      </div>

      {/* Expanded Console Window */}
      {isOpen && (
        <div className="p-3.5 max-h-48 overflow-y-auto space-y-1.5 text-[10.5px] leading-relaxed bg-[#05070B]/95 scrollbar-thin scrollbar-thumb-white/10">
          {logs.length === 0 ? (
            <div className="text-white/40 py-2 text-center">
              {isRtl ? "لا توجد سجلات حالياً. ابدأ التفاعل مع النظام لتسجيل الأحداث." : "Console idle. Perform interactions inside the application to stream live logs."}
            </div>
          ) : (
            logs.map((log) => (
              <div key={log.id} className="flex items-start gap-2 flex-wrap font-mono">
                <span className="text-white/40 text-[9.5px] shrink-0">[{log.time}]</span>
                <span className={`px-1 py-0.2 rounded text-[9px] font-bold shrink-0 ${getLevelStyle(log.level)} bg-white/[0.04]`}>
                  {log.tag}
                </span>
                <span className={getLevelStyle(log.level)}>{log.message}</span>
              </div>
            ))
          )}
          <div className="flex items-center gap-1 text-emerald-400 pt-1">
            <span className="text-emerald-400 font-bold">&gt;</span>
            <span className="inline-block w-1.5 h-3.5 bg-emerald-400 animate-pulse" />
          </div>
        </div>
      )}
    </div>
  );
}
