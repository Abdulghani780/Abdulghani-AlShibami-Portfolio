"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ProjectPreviewGraphicProps {
  slug?: string;
  projectSlug?: string;
  locale?: "en" | "ar";
  className?: string;
}

export function ProjectPreviewGraphic({
  slug,
  projectSlug,
  locale = "en",
  className,
}: ProjectPreviewGraphicProps) {
  const activeSlug = slug || projectSlug || "campus-it-tracker";
  const isRtl = locale === "ar";

  if (activeSlug === "campus-it-tracker") {
    return (
      <div
        className={cn(
          "w-full rounded-xl border border-slate-200 dark:border-slate-800/80 bg-slate-950 dark:bg-[#0B1120] p-3 sm:p-4 font-mono text-[11px] select-none overflow-hidden relative group/preview shadow-sm dark:shadow-[0_0_20px_rgba(99,102,241,0.06)]",
          className
        )}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none opacity-40" />

        {/* Top OS Window Bar */}
        <div className="flex items-center justify-between pb-2.5 border-b border-slate-800/70 text-slate-400 text-[10px] relative z-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF5F56]" />
            <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-white font-semibold ms-1">
              {isRtl ? "مخدم Oracle 10g: متصل" : "ORACLE 10g: CONNECTED"}
            </span>
          </div>
          <span className="text-emerald-400 font-bold px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-[9px]">
            {isRtl ? "بيئة حية" : "LIVE RUNTIME"}
          </span>
        </div>

        {/* Middle interactive schematic */}
        <div className="grid grid-cols-3 gap-2 py-3 relative z-10">
          <div className="rounded border border-slate-800 bg-slate-900/40 p-2 space-y-1">
            <div className="text-[9px] text-slate-400 uppercase">
              {isRtl ? "مختبر الحاسوب 1" : "LAB_A101"}
            </div>
            <div className="text-emerald-400 font-bold text-xs">28/28 OK</div>
            <div className="text-[9px] text-slate-400">
              {isRtl ? "الشبكة نشطة" : "10GbE Synced"}
            </div>
          </div>
          <div className="rounded border border-slate-800 bg-slate-900/40 p-2 space-y-1">
            <div className="text-[9px] text-slate-400 uppercase">
              {isRtl ? "غرفة الخوادم" : "SRV_RM_04"}
            </div>
            <div className="text-cyan-400 font-bold text-xs">
              {isRtl ? "حالة مثالية" : "OPTIMAL"}
            </div>
            <div className="text-[9px] text-slate-400">
              {isRtl ? "تخزين RAID 10" : "RAID-10 Online"}
            </div>
          </div>
          <div className="rounded border border-slate-800 bg-slate-900/40 p-2 space-y-1">
            <div className="text-[9px] text-slate-400 uppercase">
              {isRtl ? "بلاغات كانبان" : "ITIL_QUEUE"}
            </div>
            <div className="text-white font-bold text-xs">
              {isRtl ? "0 حرجة" : "0 CRITICAL"}
            </div>
            <div className="text-[9px] text-emerald-400">
              {isRtl ? "تم الفرز" : "All Triaged"}
            </div>
          </div>
        </div>

        {/* Bottom interactive status bar */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-800/70 text-[9px] text-slate-400 relative z-10">
          <span>{isRtl ? "الأصول المسجلة: 1,420 جهاز" : "CUSTODY_INDEX: 1,420 ASSETS"}</span>
          <span className="text-emerald-400 font-semibold">
            {isRtl ? "لوحة كانبان جاهزة" : "C# .NET WINFORMS ENGINE"}
          </span>
        </div>
      </div>
    );
  }

  if (activeSlug === "metaalgorithm-lab") {
    return (
      <div
        className={cn(
          "w-full rounded-xl border border-slate-200 dark:border-slate-800/80 bg-slate-950 dark:bg-[#0B1120] p-3 sm:p-4 font-mono text-[11px] select-none overflow-hidden relative group/preview shadow-sm dark:shadow-[0_0_20px_rgba(99,102,241,0.06)]",
          className
        )}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none opacity-40" />

        <div className="flex items-center justify-between pb-2.5 border-b border-slate-800/70 text-slate-400 text-[10px] relative z-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF5F56]" />
            <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
            <span className="w-2 h-2 rounded-full bg-indigo-400" />
            <span className="text-white font-semibold ms-1">
              {isRtl ? "المحرك الخوارزمي: نشط" : "ALGORITHM_ENGINE: ACTIVE"}
            </span>
          </div>
          <span className="text-cyan-400 font-bold px-1.5 py-0.5 rounded bg-cyan-950/40 border border-cyan-500/30 text-[9px]">
            WASM 98%
          </span>
        </div>

        {/* Visual waveform / convergence representation */}
        <div className="py-2.5 space-y-1.5 relative z-10">
          <div className="flex items-center justify-between text-[9px] text-slate-400">
            <span>{isRtl ? "معدل التقارب الأمثل" : "CONVERGENCE_RATE"}</span>
            <span className="text-indigo-300 font-bold">99.82%</span>
          </div>
          <div className="w-full bg-slate-800/60 h-2 rounded-full overflow-hidden border border-slate-700/50">
            <div className="bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400 h-full w-[94%]" />
          </div>
          <div className="flex justify-between text-[9px] text-slate-400 pt-1">
            <span>Sort: 3.14ms</span>
            <span>Heap: 14.8MB</span>
            <span className="text-indigo-300 font-bold">O(n log n)</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-slate-800/70 text-[9px] text-slate-400 relative z-10">
          <span>{isRtl ? "محاكي العمليات الحسابية" : "BENCHMARK_SUITE: READY"}</span>
          <span className="text-indigo-300 font-semibold">
            {isRtl ? "رسم بياني تفاعلي" : "PYQT6 + NUMPY"}
          </span>
        </div>
      </div>
    );
  }

  if (activeSlug === "gp") {
    return (
      <div
        className={cn(
          "w-full rounded-xl border border-slate-200 dark:border-slate-800/80 bg-slate-950 dark:bg-[#0B1120] p-3 sm:p-4 font-mono text-[11px] select-none overflow-hidden relative group/preview shadow-sm dark:shadow-[0_0_20px_rgba(99,102,241,0.06)]",
          className
        )}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none opacity-40" />

        <div className="flex items-center justify-between pb-2.5 border-b border-slate-800/70 text-slate-400 text-[10px] relative z-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF5F56]" />
            <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span className="text-white font-semibold ms-1">
              {isRtl ? "بوابة المشاريع الأكاديمية" : "ACADEMIC PORTAL WORKFLOW"}
            </span>
          </div>
          <span className="text-cyan-400 font-bold px-1.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-[9px]">
            EVAL: 94/100
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 py-3 relative z-10">
          <div className="rounded border border-slate-800 bg-slate-900/40 p-2 space-y-0.5 text-center">
            <div className="text-[9px] text-slate-400">{isRtl ? "تقديم المقترح" : "STAGE 01"}</div>
            <div className="text-emerald-400 font-bold text-[10px]">{isRtl ? "معتمد" : "APPROVED"}</div>
          </div>
          <div className="rounded border border-indigo-500/30 bg-indigo-500/10 p-2 space-y-0.5 text-center">
            <div className="text-[9px] text-indigo-300">{isRtl ? "لجنة التحكيم" : "STAGE 02"}</div>
            <div className="text-cyan-400 font-bold text-[10px]">{isRtl ? "قيد المراجعة" : "IN REVIEW"}</div>
          </div>
          <div className="rounded border border-slate-800 bg-slate-900/40 p-2 space-y-0.5 text-center">
            <div className="text-[9px] text-slate-400">{isRtl ? "التوثيق والأرشفة" : "STAGE 03"}</div>
            <div className="text-slate-300 font-bold text-[10px]">{isRtl ? "جاهز" : "QUEUED"}</div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-slate-800/70 text-[9px] text-slate-400 relative z-10">
          <span>{isRtl ? "نظام تقييم معتمد" : "EVALUATION PROTOCOL: v2.1"}</span>
          <span className="text-cyan-400 font-semibold">{isRtl ? "توليد تقارير PDF" : "EXPORT ENGINE READY"}</span>
        </div>
      </div>
    );
  }

  if (activeSlug === "cafena") {
    return (
      <div
        className={cn(
          "w-full rounded-xl border border-slate-200 dark:border-slate-800/80 bg-slate-950 dark:bg-[#0B1120] p-3 sm:p-4 font-mono text-[11px] select-none overflow-hidden relative group/preview shadow-sm dark:shadow-[0_0_20px_rgba(99,102,241,0.06)]",
          className
        )}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none opacity-40" />

        <div className="flex items-center justify-between pb-2.5 border-b border-slate-800/70 text-slate-400 text-[10px] relative z-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF5F56]" />
            <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="text-white font-semibold ms-1">
              {isRtl ? "منصة كافينا للمقهى المتخصص" : "CAFENA ROASTERY PLATFORM"}
            </span>
          </div>
          <span className="text-amber-400 font-bold px-1.5 py-0.5 rounded bg-amber-950/40 border border-amber-500/30 text-[9px]">
            RTL 100%
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 py-3 relative z-10">
          <div className="rounded border border-slate-800 bg-slate-900/40 p-2 space-y-1">
            <div className="text-[9px] text-slate-400 uppercase">{isRtl ? "سلة الطلبات" : "CART STATE"}</div>
            <div className="text-amber-400 font-bold text-xs">{isRtl ? "تفاعل فوري" : "Instant Sync"}</div>
          </div>
          <div className="rounded border border-slate-800 bg-slate-900/40 p-2 space-y-1">
            <div className="text-[9px] text-slate-400 uppercase">{isRtl ? "دعم اللغات" : "LOCALIZATION"}</div>
            <div className="text-cyan-400 font-bold text-xs">{isRtl ? "عربي / إنجليزي" : "Bilingual LTR/RTL"}</div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-slate-800/70 text-[9px] text-slate-400 relative z-10">
          <span>{isRtl ? "أصول قهوة فاخرة" : "CATALOG: SPECIALTY BEANS"}</span>
          <span className="text-amber-400 font-semibold">{isRtl ? "محاكاة فورية" : "BROWSER DEMO LIVE"}</span>
        </div>
      </div>
    );
  }

  // Novatech
  return (
    <div
      className={cn(
        "w-full rounded-xl border border-slate-200 dark:border-slate-800/80 bg-slate-950 dark:bg-[#0B1120] p-3 sm:p-4 font-mono text-[11px] select-none overflow-hidden relative group/preview shadow-sm dark:shadow-[0_0_20px_rgba(99,102,241,0.06)]",
        className
      )}
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none opacity-40" />

      <div className="flex items-center justify-between pb-2.5 border-b border-slate-800/70 text-slate-400 text-[10px] relative z-10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FF5F56]" />
          <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          <span className="text-white font-semibold ms-1">
            {isRtl ? "نظام نوفاتيك التقني" : "NOVATECH CLOUD STORE"}
          </span>
        </div>
        <span className="text-cyan-400 font-bold px-1.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-[9px]">
          NEXT.JS 15
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 py-3 relative z-10">
        <div className="rounded border border-slate-800 bg-slate-900/40 p-2 space-y-1">
          <div className="text-[9px] text-slate-400 uppercase">{isRtl ? "البنية السحابية" : "NODES ACTIVE"}</div>
          <div className="text-cyan-400 font-bold text-xs">{isRtl ? "350 عقدة متصلة" : "350 Nodes"}</div>
        </div>
        <div className="rounded border border-slate-800 bg-slate-900/40 p-2 space-y-1">
          <div className="text-[9px] text-slate-400 uppercase">{isRtl ? "زمن الاستجابة" : "LATENCY"}</div>
          <div className="text-indigo-300 font-bold text-xs">{isRtl ? "12 ميلي ثانية" : "12ms Edge"}</div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-slate-800/70 text-[9px] text-slate-400 relative z-10">
        <span>{isRtl ? "خدمات تقنية متقدمة" : "CORPORATE CLOUD"}</span>
        <span className="text-cyan-400 font-semibold">{isRtl ? "متاح للمعاينة" : "SIMULATION READY"}</span>
      </div>
    </div>
  );
}
