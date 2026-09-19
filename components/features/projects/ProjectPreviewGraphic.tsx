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
          "w-full rounded-xl border border-white/[0.1] bg-[#070A0F] p-3 sm:p-4 font-mono text-[11px] select-none overflow-hidden relative group/preview shadow-[0_0_20px_rgba(0,255,157,0.04)]",
          className
        )}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,157,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,157,0.03)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none opacity-40" />

        {/* Top OS Window Bar */}
        <div className="flex items-center justify-between pb-2.5 border-b border-white/[0.08] text-white/50 text-[10px] relative z-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF5F56]" />
            <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
            <span className="w-2 h-2 rounded-full bg-[#00FF9D]" />
            <span className="text-white font-semibold ms-1">
              {isRtl ? "مخدم Oracle 10g: متصل" : "ORACLE 10g: CONNECTED"}
            </span>
          </div>
          <span className="text-[#00FF9D] font-bold px-1.5 py-0.5 rounded bg-[#00FF9D]/10 border border-[#00FF9D]/20 text-[9px]">
            {isRtl ? "بيئة حية" : "LIVE RUNTIME"}
          </span>
        </div>

        {/* Middle interactive schematic */}
        <div className="grid grid-cols-3 gap-2 py-3 relative z-10">
          <div className="rounded border border-white/[0.06] bg-white/[0.02] p-2 space-y-1">
            <div className="text-[9px] text-white/40 uppercase">
              {isRtl ? "مختبر الحاسوب 1" : "LAB_A101"}
            </div>
            <div className="text-[#00FF9D] font-bold text-xs">28/28 OK</div>
            <div className="text-[9px] text-white/50">
              {isRtl ? "الشبكة نشطة" : "10GbE Synced"}
            </div>
          </div>
          <div className="rounded border border-white/[0.06] bg-white/[0.02] p-2 space-y-1">
            <div className="text-[9px] text-white/40 uppercase">
              {isRtl ? "غرفة الخوادم" : "SRV_RM_04"}
            </div>
            <div className="text-cyan-400 font-bold text-xs">
              {isRtl ? "حالة مثالية" : "OPTIMAL"}
            </div>
            <div className="text-[9px] text-white/50">
              {isRtl ? "تخزين RAID 10" : "RAID-10 Online"}
            </div>
          </div>
          <div className="rounded border border-white/[0.06] bg-white/[0.02] p-2 space-y-1">
            <div className="text-[9px] text-white/40 uppercase">
              {isRtl ? "بلاغات كانبان" : "ITIL_QUEUE"}
            </div>
            <div className="text-white font-bold text-xs">
              {isRtl ? "0 حرجة" : "0 CRITICAL"}
            </div>
            <div className="text-[9px] text-[#00FF9D]">
              {isRtl ? "تم الفرز" : "All Triaged"}
            </div>
          </div>
        </div>

        {/* Bottom interactive status bar */}
        <div className="flex items-center justify-between pt-2 border-t border-white/[0.06] text-[9px] text-white/50 relative z-10">
          <span>{isRtl ? "الأصول المسجلة: 1,420 جهاز" : "CUSTODY_INDEX: 1,420 ASSETS"}</span>
          <span className="text-[#00FF9D] font-semibold">
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
          "w-full rounded-xl border border-white/[0.1] bg-[#070A0F] p-3 sm:p-4 font-mono text-[11px] select-none overflow-hidden relative group/preview shadow-[0_0_20px_rgba(0,255,157,0.04)]",
          className
        )}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,157,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,157,0.03)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none opacity-40" />

        <div className="flex items-center justify-between pb-2.5 border-b border-white/[0.08] text-white/50 text-[10px] relative z-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF5F56]" />
            <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
            <span className="w-2 h-2 rounded-full bg-[#00FF9D]" />
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
          <div className="flex items-center justify-between text-[9px] text-white/50">
            <span>{isRtl ? "معدل التقارب الأمثل" : "CONVERGENCE_RATE"}</span>
            <span className="text-[#00FF9D] font-bold">99.82%</span>
          </div>
          <div className="w-full bg-white/[0.05] h-2 rounded-full overflow-hidden border border-white/[0.08]">
            <div className="bg-gradient-to-r from-cyan-400 to-[#00FF9D] h-full w-[94%]" />
          </div>
          <div className="flex justify-between text-[9px] text-white/50 pt-1">
            <span>Sort: 3.14ms</span>
            <span>Heap: 14.8MB</span>
            <span className="text-[#00FF9D] font-bold">O(n log n)</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-white/[0.06] text-[9px] text-white/50 relative z-10">
          <span>{isRtl ? "محاكي العمليات الحسابية" : "BENCHMARK_SUITE: READY"}</span>
          <span className="text-[#00FF9D] font-semibold">
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
          "w-full rounded-xl border border-white/[0.1] bg-[#070A0F] p-3 sm:p-4 font-mono text-[11px] select-none overflow-hidden relative group/preview shadow-[0_0_20px_rgba(0,255,157,0.04)]",
          className
        )}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,157,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,157,0.03)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none opacity-40" />

        <div className="flex items-center justify-between pb-2.5 border-b border-white/[0.08] text-white/50 text-[10px] relative z-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF5F56]" />
            <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
            <span className="w-2 h-2 rounded-full bg-[#00FF9D]" />
            <span className="text-white font-semibold ms-1">
              {isRtl ? "بوابة المشاريع الأكاديمية" : "ACADEMIC PORTAL WORKFLOW"}
            </span>
          </div>
          <span className="text-[#00FF9D] font-bold px-1.5 py-0.5 rounded bg-[#00FF9D]/10 border border-[#00FF9D]/20 text-[9px]">
            EVAL: 94/100
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 py-3 relative z-10">
          <div className="rounded border border-white/[0.06] bg-white/[0.02] p-2 space-y-0.5 text-center">
            <div className="text-[9px] text-white/40">{isRtl ? "تقديم المقترح" : "STAGE 01"}</div>
            <div className="text-[#00FF9D] font-bold text-[10px]">{isRtl ? "معتمد" : "APPROVED"}</div>
          </div>
          <div className="rounded border border-[#00FF9D]/30 bg-[#00FF9D]/5 p-2 space-y-0.5 text-center">
            <div className="text-[9px] text-[#00FF9D]">{isRtl ? "لجنة التحكيم" : "STAGE 02"}</div>
            <div className="text-cyan-400 font-bold text-[10px]">{isRtl ? "قيد المراجعة" : "IN REVIEW"}</div>
          </div>
          <div className="rounded border border-white/[0.06] bg-white/[0.02] p-2 space-y-0.5 text-center">
            <div className="text-[9px] text-white/40">{isRtl ? "التوثيق والأرشفة" : "STAGE 03"}</div>
            <div className="text-white/60 font-bold text-[10px]">{isRtl ? "جاهز" : "QUEUED"}</div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-white/[0.06] text-[9px] text-white/50 relative z-10">
          <span>{isRtl ? "نظام تقييم معتمد" : "EVALUATION PROTOCOL: v2.1"}</span>
          <span className="text-[#00FF9D] font-semibold">{isRtl ? "توليد تقارير PDF" : "EXPORT ENGINE READY"}</span>
        </div>
      </div>
    );
  }

  if (activeSlug === "cafena") {
    return (
      <div
        className={cn(
          "w-full rounded-xl border border-white/[0.1] bg-[#070A0F] p-3 sm:p-4 font-mono text-[11px] select-none overflow-hidden relative group/preview shadow-[0_0_20px_rgba(0,255,157,0.04)]",
          className
        )}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,157,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,157,0.03)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none opacity-40" />

        <div className="flex items-center justify-between pb-2.5 border-b border-white/[0.08] text-white/50 text-[10px] relative z-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF5F56]" />
            <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
            <span className="w-2 h-2 rounded-full bg-[#00FF9D]" />
            <span className="text-white font-semibold ms-1">
              {isRtl ? "منصة كافينا للمقهى المتخصص" : "CAFENA ROASTERY PLATFORM"}
            </span>
          </div>
          <span className="text-amber-400 font-bold px-1.5 py-0.5 rounded bg-amber-950/40 border border-amber-500/30 text-[9px]">
            RTL 100%
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 py-3 relative z-10">
          <div className="rounded border border-white/[0.06] bg-white/[0.02] p-2 space-y-1">
            <div className="text-[9px] text-white/40 uppercase">{isRtl ? "سلة الطلبات" : "CART STATE"}</div>
            <div className="text-[#00FF9D] font-bold text-xs">{isRtl ? "تفاعل فوري" : "Instant Sync"}</div>
          </div>
          <div className="rounded border border-white/[0.06] bg-white/[0.02] p-2 space-y-1">
            <div className="text-[9px] text-white/40 uppercase">{isRtl ? "دعم اللغات" : "LOCALIZATION"}</div>
            <div className="text-cyan-400 font-bold text-xs">{isRtl ? "عربي / إنجليزي" : "Bilingual LTR/RTL"}</div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-white/[0.06] text-[9px] text-white/50 relative z-10">
          <span>{isRtl ? "أصول قهوة فاخرة" : "CATALOG: SPECIALTY BEANS"}</span>
          <span className="text-[#00FF9D] font-semibold">{isRtl ? "محاكاة فورية" : "BROWSER DEMO LIVE"}</span>
        </div>
      </div>
    );
  }

  // Novatech
  return (
    <div
      className={cn(
        "w-full rounded-xl border border-white/[0.1] bg-[#070A0F] p-3 sm:p-4 font-mono text-[11px] select-none overflow-hidden relative group/preview shadow-[0_0_20px_rgba(0,255,157,0.04)]",
        className
      )}
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,157,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,157,0.03)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none opacity-40" />

      <div className="flex items-center justify-between pb-2.5 border-b border-white/[0.08] text-white/50 text-[10px] relative z-10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FF5F56]" />
          <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
          <span className="w-2 h-2 rounded-full bg-[#00FF9D]" />
          <span className="text-white font-semibold ms-1">
            {isRtl ? "نظام نوفاتيك التقني" : "NOVATECH CLOUD STORE"}
          </span>
        </div>
        <span className="text-[#00FF9D] font-bold px-1.5 py-0.5 rounded bg-[#00FF9D]/10 border border-[#00FF9D]/20 text-[9px]">
          NEXT.JS 15
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 py-3 relative z-10">
        <div className="rounded border border-white/[0.06] bg-white/[0.02] p-2 space-y-1">
          <div className="text-[9px] text-white/40 uppercase">{isRtl ? "البنية السحابية" : "NODES ACTIVE"}</div>
          <div className="text-[#00FF9D] font-bold text-xs">{isRtl ? "350 عقدة متصلة" : "350 Nodes"}</div>
        </div>
        <div className="rounded border border-white/[0.06] bg-white/[0.02] p-2 space-y-1">
          <div className="text-[9px] text-white/40 uppercase">{isRtl ? "زمن الاستجابة" : "LATENCY"}</div>
          <div className="text-cyan-400 font-bold text-xs">{isRtl ? "12 ميلي ثانية" : "12ms Edge"}</div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-white/[0.06] text-[9px] text-white/50 relative z-10">
        <span>{isRtl ? "خدمات تقنية متقدمة" : "CORPORATE CLOUD"}</span>
        <span className="text-[#00FF9D] font-semibold">{isRtl ? "متاح للمعاينة" : "SIMULATION READY"}</span>
      </div>
    </div>
  );
}
