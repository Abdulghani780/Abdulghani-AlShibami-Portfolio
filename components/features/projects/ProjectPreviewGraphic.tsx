"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ProjectPreviewGraphicProps {
  slug: string;
  locale: "en" | "ar";
  className?: string;
}

export function ProjectPreviewGraphic({
  slug,
  locale,
  className,
}: ProjectPreviewGraphicProps) {
  const isRtl = locale === "ar";

  if (slug === "campus-it-tracker") {
    return (
      <div
        className={cn(
          "w-full rounded-lg border border-glass-border bg-obsidian/70 backdrop-blur-sm p-3.5 sm:p-4 font-mono text-[11px] select-none overflow-hidden relative group/preview",
          className
        )}
      >
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(201,162,39,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(201,162,39,0.05)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none opacity-40" />

        {/* Top telemetry bar */}
        <div className="flex items-center justify-between pb-2.5 border-b border-glass-border/60 text-content-muted text-[10px] relative z-10">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-status-emerald animate-pulse" />
            <span className="text-content-secondary font-semibold">
              {isRtl ? "مخدم Oracle 10g: متصل" : "ORACLE 10g: CONNECTED"}
            </span>
          </div>
          <span className="text-gold/80">
            {isRtl ? "بروتوكول ITIL v4" : "ITIL_SERVICE_DESK"}
          </span>
        </div>

        {/* Middle interactive schematic */}
        <div className="grid grid-cols-3 gap-2 py-3 relative z-10">
          <div className="rounded border border-glass-border bg-glass-subtle p-2 space-y-1">
            <div className="text-[9px] text-content-muted uppercase">
              {isRtl ? "مختبر الحاسوب 1" : "LAB_A101"}
            </div>
            <div className="text-status-emerald font-bold text-xs">28/28 OK</div>
            <div className="text-[9px] text-content-muted">
              {isRtl ? "الشبكة نشطة" : "10GbE Synced"}
            </div>
          </div>
          <div className="rounded border border-glass-border bg-glass-subtle p-2 space-y-1">
            <div className="text-[9px] text-content-muted uppercase">
              {isRtl ? "غرفة الخوادم" : "SRV_RM_04"}
            </div>
            <div className="text-gold font-bold text-xs">
              {isRtl ? "حالة مثالية" : "OPTIMAL"}
            </div>
            <div className="text-[9px] text-content-muted">
              {isRtl ? "تخزين RAID 10" : "RAID-10 Online"}
            </div>
          </div>
          <div className="rounded border border-glass-border bg-glass-subtle p-2 space-y-1">
            <div className="text-[9px] text-content-muted uppercase">
              {isRtl ? "بلاغات كانبان" : "ITIL_QUEUE"}
            </div>
            <div className="text-content-primary font-bold text-xs">
              {isRtl ? "0 حرجة" : "0 CRITICAL"}
            </div>
            <div className="text-[9px] text-status-emerald">
              {isRtl ? "تم الفرز" : "All Triaged"}
            </div>
          </div>
        </div>

        {/* Bottom interactive status bar */}
        <div className="flex items-center justify-between pt-2 border-t border-glass-border/40 text-[9px] text-content-muted relative z-10">
          <span>{isRtl ? "الأصول المسجلة: 1,420 جهاز" : "CUSTODY_INDEX: 1,420 ASSETS"}</span>
          <span className="text-gold font-semibold">
            {isRtl ? "لوحة كانبان جاهزة" : "C# .NET WINFORMS ENGINE"}
          </span>
        </div>
      </div>
    );
  }

  if (slug === "metaalgorithm-lab") {
    return (
      <div
        className={cn(
          "w-full rounded-lg border border-glass-border bg-obsidian/70 backdrop-blur-sm p-3.5 sm:p-4 font-mono text-[11px] select-none overflow-hidden relative group/preview",
          className
        )}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(201,162,39,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(201,162,39,0.05)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none opacity-40" />

        <div className="flex items-center justify-between pb-2.5 border-b border-glass-border/60 text-content-muted text-[10px] relative z-10">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-status-emerald animate-pulse" />
            <span className="text-content-secondary font-semibold">
              {isRtl ? "المحرك الخوارزمي: نشط" : "GENETIC_SOLVER: RUNNING"}
            </span>
          </div>
          <span className="text-gold/80">PYTHON • PYQT6 • SCIPY</span>
        </div>

        {/* Visual waveform / convergence representation */}
        <div className="py-2.5 space-y-1.5 relative z-10">
          <div className="flex items-center justify-between text-[9px] text-content-muted">
            <span>{isRtl ? "معدل التقارب الأمثل" : "CONVERGENCE_RATE"}</span>
            <span className="text-status-emerald font-bold">99.82%</span>
          </div>
          <div className="w-full bg-glass-medium h-2 rounded-full overflow-hidden border border-glass-border">
            <div className="bg-gradient-to-r from-gold to-status-emerald h-full w-[94%]" />
          </div>
          <div className="flex justify-between text-[9px] text-content-muted pt-1">
            <span>GEN_01: f(x)=412.0</span>
            <span>GEN_500: f(x)=1.002</span>
            <span className="text-gold">OPT_MIN: ACHIEVED</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-glass-border/40 text-[9px] text-content-muted relative z-10">
          <span>{isRtl ? "مجموعات الحلول: 50 كروموسوم" : "POPULATION: 50 CHROMOSOMES"}</span>
          <span className="text-gold font-semibold">
            {isRtl ? "رسم بياني تفاعلي" : "MATPLOTLIB INTEGRATED"}
          </span>
        </div>
      </div>
    );
  }

  if (slug === "gp") {
    return (
      <div
        className={cn(
          "w-full rounded-lg border border-glass-border bg-obsidian/70 backdrop-blur-sm p-3.5 sm:p-4 font-mono text-[11px] select-none overflow-hidden relative group/preview",
          className
        )}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(201,162,39,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(201,162,39,0.05)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none opacity-40" />

        <div className="flex items-center justify-between pb-2.5 border-b border-glass-border/60 text-content-muted text-[10px] relative z-10">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-status-emerald animate-pulse" />
            <span className="text-content-secondary font-semibold">
              {isRtl ? "بوابة المشاريع الأكاديمية" : "ACADEMIC PORTAL WORKFLOW"}
            </span>
          </div>
          <span className="text-gold/80">PHP 8 • MYSQL</span>
        </div>

        <div className="grid grid-cols-3 gap-2 py-3 relative z-10">
          <div className="rounded border border-glass-border bg-glass-subtle p-2 space-y-0.5 text-center">
            <div className="text-[9px] text-content-muted">{isRtl ? "تقديم المقترح" : "STAGE 01"}</div>
            <div className="text-status-emerald font-bold text-[10px]">{isRtl ? "معتمد" : "APPROVED"}</div>
          </div>
          <div className="rounded border border-gold/40 bg-gold/5 p-2 space-y-0.5 text-center">
            <div className="text-[9px] text-gold">{isRtl ? "لجنة التحكيم" : "STAGE 02"}</div>
            <div className="text-gold font-bold text-[10px]">{isRtl ? "قيد المراجعة" : "IN REVIEW"}</div>
          </div>
          <div className="rounded border border-glass-border bg-glass-subtle p-2 space-y-0.5 text-center">
            <div className="text-[9px] text-content-muted">{isRtl ? "التوثيق والأرشفة" : "STAGE 03"}</div>
            <div className="text-content-muted font-bold text-[10px]">{isRtl ? "جاهز" : "QUEUED"}</div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-glass-border/40 text-[9px] text-content-muted relative z-10">
          <span>{isRtl ? "نظام تقييم معتمد" : "EVALUATION PROTOCOL: v2.1"}</span>
          <span className="text-gold font-semibold">{isRtl ? "توليد تقارير PDF" : "EXPORT ENGINE READY"}</span>
        </div>
      </div>
    );
  }

  if (slug === "cafena") {
    return (
      <div
        className={cn(
          "w-full rounded-lg border border-glass-border bg-obsidian/70 backdrop-blur-sm p-3.5 sm:p-4 font-mono text-[11px] select-none overflow-hidden relative group/preview",
          className
        )}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(201,162,39,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(201,162,39,0.05)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none opacity-40" />

        <div className="flex items-center justify-between pb-2.5 border-b border-glass-border/60 text-content-muted text-[10px] relative z-10">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-status-emerald animate-pulse" />
            <span className="text-content-secondary font-semibold">
              {isRtl ? "منصة كافينا للمقهى المتخصص" : "CAFENA ROASTERY PLATFORM"}
            </span>
          </div>
          <span className="text-gold/80">HTML5 • CSS3 • JS</span>
        </div>

        <div className="grid grid-cols-2 gap-2 py-3 relative z-10">
          <div className="rounded border border-glass-border bg-glass-subtle p-2 space-y-1">
            <div className="text-[9px] text-content-muted uppercase">{isRtl ? "سلة الطلبات" : "CART STATE"}</div>
            <div className="text-status-emerald font-bold text-xs">{isRtl ? "تفاعل فوري" : "Instant Sync"}</div>
          </div>
          <div className="rounded border border-glass-border bg-glass-subtle p-2 space-y-1">
            <div className="text-[9px] text-content-muted uppercase">{isRtl ? "دعم اللغات" : "LOCALIZATION"}</div>
            <div className="text-gold font-bold text-xs">{isRtl ? "عربي / إنجليزي" : "Bilingual LTR/RTL"}</div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-glass-border/40 text-[9px] text-content-muted relative z-10">
          <span>{isRtl ? "أصول قهوة فاخرة" : "CATALOG: SPECIALTY BEANS"}</span>
          <span className="text-gold font-semibold">{isRtl ? "محاكاة فورية" : "BROWSER DEMO LIVE"}</span>
        </div>
      </div>
    );
  }

  // Fallback / novatech
  return (
    <div
      className={cn(
        "w-full rounded-lg border border-glass-border bg-obsidian/70 backdrop-blur-sm p-3.5 sm:p-4 font-mono text-[11px] select-none overflow-hidden relative group/preview",
        className
      )}
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(201,162,39,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(201,162,39,0.05)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none opacity-40" />

      <div className="flex items-center justify-between pb-2.5 border-b border-glass-border/60 text-content-muted text-[10px] relative z-10">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-status-emerald animate-pulse" />
          <span className="text-content-secondary font-semibold">
            {isRtl ? "نظام نوفاتيك التقني" : "NOVATECH ENTERPRISE PORTAL"}
          </span>
        </div>
        <span className="text-gold/80">WEB ARCHITECTURE</span>
      </div>

      <div className="grid grid-cols-2 gap-2 py-3 relative z-10">
        <div className="rounded border border-glass-border bg-glass-subtle p-2 space-y-1">
          <div className="text-[9px] text-content-muted uppercase">{isRtl ? "البنية المعمارية" : "ARCHITECTURE"}</div>
          <div className="text-content-primary font-bold text-xs">{isRtl ? "حلول مؤسسية" : "Enterprise Ready"}</div>
        </div>
        <div className="rounded border border-glass-border bg-glass-subtle p-2 space-y-1">
          <div className="text-[9px] text-content-muted uppercase">{isRtl ? "التصميم والتفاعل" : "UI/UX MATRIX"}</div>
          <div className="text-gold font-bold text-xs">{isRtl ? "استجابة كاملة" : "High Contrast"}</div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-glass-border/40 text-[9px] text-content-muted relative z-10">
        <span>{isRtl ? "خدمات تقنية متقدمة" : "CORPORATE SUITE"}</span>
        <span className="text-gold font-semibold">{isRtl ? "متاح للمعاينة" : "SIMULATION READY"}</span>
      </div>
    </div>
  );
}
