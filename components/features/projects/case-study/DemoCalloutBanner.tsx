import React from "react";
import Link from "next/link";
import { Project, Locale } from "@/types/project";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface DemoCalloutBannerProps {
  project: Project;
  locale: Locale;
}

export const DemoCalloutBanner: React.FC<DemoCalloutBannerProps> = ({
  project,
  locale,
}) => {
  const isRtl = locale === "ar";
  if (project.demoType === "none") {
    return null;
  }

  // Dynamic content depending on project and demoType
  let bannerTitle = isRtl
    ? "اختبر النظام التفاعلي مباشرة داخل محاكي سطح المكتب"
    : "Experience Native Workstation Sandbox in Browser";

  let bannerDesc = isRtl
    ? "تتيح لك بيئة المحاكاة التفاعلية تجربة واجهة النظام كأنها تطبيق حقيقي يعمل على حاسوبك مع سجلات ترمينال وتيليمتري عتاد حقيقي."
    : "The interactive workstation simulation provides authentic desktop runtime execution, live memory/CPU telemetry gauges, and streaming terminal logs.";

  if (project.slug === "campus-it-tracker") {
    bannerTitle = isRtl
      ? "رصد طوبولوجيا شبكات الحرم الجامعي وفرز البلاغات"
      : "Monitor Campus Network Nodes & Incident Triage";
    bannerDesc = isRtl
      ? "محاكاة سطح مكتب لتطبيق C# WinForms وقاعدة بيانات Oracle 10g لفحص الأصول وبلاغات ITIL."
      : "Interactive workstation simulation: inspect campus equipment mapping, custody auditing, and ITIL incident triage.";
  } else if (project.slug === "metaalgorithm-lab") {
    bannerTitle = isRtl
      ? "تشغيل وتحليل خوارزميات الفرز خطوة بخطوة"
      : "Run In-Browser Algorithm Benchmarks & Visualizer";
    bannerDesc = isRtl
      ? "اختبار خوارزميات الفرز والمسارات الحقيقية مع رسوم بيانية ومحرك WASM وفاحص متغيرات مباشر."
      : "Execute real algorithmic benchmarks with step-by-step visualizations, variable inspectors, and WASM performance dials.";
  } else if (project.slug === "novatech") {
    bannerTitle = isRtl
      ? "استكشف متجر نوفا تيك والتسوق الإلكتروني المستقبلي"
      : "Experience NovaTech Cloud Gadgets Storefront";
    bannerDesc = isRtl
      ? "تطبيق ويب تفاعلي يستعرض الأجهزة الذكية مع سلة مشتريات فورية وتزامن عقدي مع خوادم الحافة."
      : "Interactive cloud storefront showcasing smart devices, dynamic cart calculations, and edge cluster telemetry.";
  } else if (project.slug === "cafena") {
    bannerTitle = isRtl
      ? "تجربة مقهى كافينا الفاخر ونقاط البيع المباشرة"
      : "Experience Cafena Artisanal POS & Operations";
    bannerDesc = isRtl
      ? "منصة ويب عربية سريعة بالكامل (RTL) لإدارة محاصيل القهوة وحساب فوري لفواتير المبيعات."
      : "Fast responsive Arabic RTL coffee operations suite with live orders ledger, inventory telemetry, and POS checkout.";
  } else if (project.slug === "gp") {
    bannerTitle = isRtl
      ? "منصة مقترحات مشاريع التخرج وإدارة الاعتماد"
      : "Test Academic Graduation Project Proposal Lifecycle";
    bannerDesc = isRtl
      ? "محاكاة لمسار رفع مقترحات المشاريع الجامعية من قبل الطلاب ومراجعتها واعتمادها بلجان التحكيم."
      : "Interactive simulation of the academic proposal submission, committee review, and rubric scoring workflow.";
  }

  const demoUrl = project.demoUrl ? `/${locale}${project.demoUrl}` : `/${locale}/projects/${project.slug}/demo`;

  return (
    <div className="rounded-2xl border border-indigo-500/30 bg-gradient-to-r from-[#0F172A] via-[#0B1120] to-[#090D16] p-6 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 transition-all hover:border-indigo-500/60 shadow-[0_15px_40px_rgba(2,6,23,0.8),0_0_25px_rgba(99,102,241,0.15)]">
      <div className="space-y-3 max-w-2xl font-mono">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>
              {project.demoType === "real_live"
                ? isRtl
                  ? "تطبيق تشغيلي مباشر"
                  : "LIVE PRODUCTION SYSTEM"
                : isRtl
                ? "محاكي سطح المكتب الحي"
                : "WORKSTATION SANDBOX"}
            </span>
          </span>
          <span className="text-xs text-slate-400 hidden sm:inline">
            {"// "}{isRtl ? "بيئة التشغيل جاهزة" : "ACTIVE RUNTIME READY"}
          </span>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white">
          {bannerTitle}
        </h3>

        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
          {bannerDesc}
        </p>
      </div>

      <div className="shrink-0 w-full lg:w-auto">
        <Link
          href={demoUrl}
          className="w-full lg:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white font-mono font-bold text-sm shadow-[0_0_20px_rgba(99,102,241,0.35)] transition-all active:scale-95"
        >
          <span>
            {project.demoType === "real_live"
              ? isRtl
                ? "فتح التطبيق المباشر"
                : "Launch Live App"
              : isRtl
              ? "تشغيل محاكي سطح المكتب"
              : "Launch Workstation Demo"}
          </span>
          <span>⚡</span>
        </Link>
      </div>
    </div>
  );
};
