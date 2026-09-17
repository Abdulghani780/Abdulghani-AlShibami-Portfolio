import React from "react";
import Link from "next/link";
import { Project, Locale } from "@/types/project";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { ExternalLink, Code } from "lucide-react";

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
    ? "اختبر النظام التفاعلي مباشرة داخل المتصفح"
    : "Experience System Workflows Live in Browser";

  let bannerDesc = isRtl
    ? "تتيح لك بيئة المحاكاة التفاعلية تجربة واجهة النظام وسير عملياته ببيانات تجريبية آمنة دون الحاجة لتثبيت برمجيات إضافية."
    : "The interactive simulation provides hands-on inspection of user interface flows, data validation rules, and system behavior using safe mock data.";

  if (project.slug === "yusra") {
    bannerTitle = isRtl
      ? "اختبر نظام يسرى المحاسبي وقيود اليومية المزدوجة"
      : "Test Yusra Enterprise Double-Entry Ledger & Billing";
    bannerDesc = isRtl
      ? "محاكاة تفاعلية لتطبيق سطح المكتب C# WinForms تتيح تجربة تسجيل قيود اليومية مع فحص التوازن الحسابي وإصدار الفواتير فورياً."
      : "Interactive simulation of the C# WinForms desktop software: test real-time double-entry balance validation and generate printable sales invoices.";
  } else if (project.slug === "campus-it-tracker") {
    bannerTitle = isRtl
      ? "رصد طوبولوجيا شبكات الحرم الجامعي وفرز البلاغات"
      : "Monitor Campus Network Nodes & Incident Triage";
    bannerDesc = isRtl
      ? "محاكاة لمركز إدارة الشبكة تتيح فحص استجابة العقد عبر ICMP Ping وتسجيل وتوزيع بلاغات الدعم الفني."
      : "Interactive network operations center simulation: perform live ICMP pings across campus node tiers and dispatch incident response tickets.";
  } else if (project.slug === "metaalgorithm-lab") {
    bannerTitle = isRtl
      ? "تشغيل وتحليل خوارزميات الفرز خطوة بخطوة"
      : "Run In-Browser Algorithm Benchmarks & Visualizer";
    bannerDesc = isRtl
      ? "اختبار خوارزميات الفرز الحقيقية في المتصفح مع عرض بصري متحرك لحركة المؤشرات وإحصاء دقيق للمقارنات والتبديلات."
      : "Execute real client-side sorting algorithms with step-by-step animated bar charts and real-time comparison counters.";
  } else if (project.slug === "auraledger") {
    bannerTitle = isRtl
      ? "اختبر آلة الحالة الموزعة وتوافق Raft في المتصفح"
      : "Test Raft Consensus State Machine & Fault Injection";
    bannerDesc = isRtl
      ? "محاكاة معمارية لـ ٥ عقد خوادم توضح انتخاب القائد وحقن انقسامات الشبكة العشوائية واستعادة التوافق."
      : "Architectural consensus sandbox: isolate cluster nodes, observe speculative pre-voting, and inspect vectorized WAL commit streams.";
  }

  const demoUrl = project.demoUrl ? `/${locale}${project.demoUrl}` : `/${locale}/projects/${project.slug}/demo`;

  return (
    <div className="border border-gold/50 bg-gold/5 dark:bg-gold/10 p-6 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 transition-all hover:border-gold shadow-[0_0_30px_rgba(212,175,55,0.08)]">
      <div className="space-y-3 max-w-2xl">
        <div className="flex items-center gap-3">
          <Badge variant="gold" dot dotColor="emerald">
            {project.demoType === "real_live"
              ? isRtl
                ? "تطبيق تشغيلي مباشر"
                : "LIVE PRODUCTION SYSTEM"
              : project.demoType === "repo"
              ? isRtl
                ? "مستودع الكود"
                : "SOURCE REPOSITORY"
              : isRtl
              ? "محاكاة ويب تفاعلية"
              : "INTERACTIVE WEB SIMULATION"}
          </Badge>
          <span className="font-mono text-[10px] text-gold font-semibold uppercase tracking-wider">
            {"// "}{isRtl ? "المحرك متصل بالإنترنت" : "SANDBOX ONLINE"}
          </span>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl font-normal text-content-primary">
          {bannerTitle}
        </h3>

        <p className="text-content-secondary text-xs sm:text-sm leading-relaxed">
          {bannerDesc}
        </p>
      </div>

      <div className="shrink-0">
        <Link href={demoUrl}>
          <Button variant="primary" size="lg">
            <span>
              {project.demoType === "real_live"
                ? isRtl
                  ? "فتح التطبيق المباشر"
                  : "Launch Live Demo"
                : project.demoType === "repo"
                ? isRtl
                  ? "استعراض المستودع البرمجي"
                  : "View Repository"
                : isRtl
                ? "تشغيل مختبر المحاكاة التفاعلي"
                : "Launch Interactive Demo"}
            </span>
            <span className={cn("text-sm", isRtl && "rotate-180")}>→</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};
