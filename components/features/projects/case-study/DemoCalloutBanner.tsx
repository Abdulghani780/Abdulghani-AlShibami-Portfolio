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
    <div className={cn(
      "rounded-2xl border transition-all hover:border-brand/60 shadow-md dark:shadow-xl",
      "border-border/15 dark:border-border/20 bg-surface dark:bg-surfaceElevated p-6 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
    )}>
      <div className="space-y-3 max-w-2xl font-mono">
        <div className="flex items-center gap-3">
          <Badge variant="success" dot className="text-[10px]">
            {project.demoType === "real_live"
              ? isRtl
                ? "تطبيق تشغيلي مباشر"
                : "LIVE PRODUCTION SYSTEM"
              : isRtl
              ? "محاكي تفاعلي حي"
              : "INTERACTIVE SIMULATION"}
          </Badge>
          <span className="text-xs text-brand dark:text-brandLight hidden sm:inline font-bold">
            {"// "}{isRtl ? "بيئة التشغيل جاهزة" : "ACTIVE RUNTIME READY"}
          </span>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl font-normal text-foreground dark:text-foreground">
          {bannerTitle}
        </h3>

        <p className="text-muted-foreground dark:text-muted-foreground text-xs sm:text-sm leading-relaxed font-sans">
          {bannerDesc}
        </p>
      </div>

      <div className="shrink-0 w-full lg:w-auto">
        <Link
          href={demoUrl}
          className="w-full lg:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand hover:bg-brandLight text-background font-mono font-bold text-sm shadow-md transition-all active:scale-95"
        >
          <span>
            {project.demoType === "real_live"
              ? isRtl
                ? "فتح التطبيق المباشر"
                : "Launch Live App"
              : isRtl
              ? "تشغيل المحاكي التفاعلي"
              : "Launch Interactive Demo"}
          </span>
          <span>⚡</span>
        </Link>
      </div>
    </div>
  );
};