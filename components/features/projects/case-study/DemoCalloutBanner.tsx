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

  if (project.slug === "campus-it-tracker") {
    bannerTitle = isRtl
      ? "رصد طوبولوجيا شبكات الحرم الجامعي وفرز البلاغات"
      : "Monitor Campus Network Nodes & Incident Triage";
    bannerDesc = isRtl
      ? "محاكاة لمركز إدارة الشبكة تتيح فحص استجابة العقد وتتبع عهد الأجهزة وتوزيع بلاغات الدعم الفني."
      : "Interactive network operations center simulation: inspect campus equipment mapping and dispatch incident response tickets.";
  } else if (project.slug === "metaalgorithm-lab") {
    bannerTitle = isRtl
      ? "تشغيل وتحليل خوارزميات الفرز خطوة بخطوة"
      : "Run In-Browser Algorithm Benchmarks & Visualizer";
    bannerDesc = isRtl
      ? "اختبار خوارزميات الفرز الحقيقية في المتصفح مع عرض بصري متحرك لحركة المؤشرات وإحصاء دقيق للمقارنات والتبديلات."
      : "Execute real client-side sorting algorithms with step-by-step animated bar charts and real-time comparison counters.";
  } else if (project.slug === "novatech") {
    bannerTitle = isRtl
      ? "استكشف متجر نوفا تيك والتسوق الإلكتروني المستقبلي"
      : "Experience NOVA TECH Cyber Gadgets Storefront";
    bannerDesc = isRtl
      ? "تطبيق ويب تفاعلي يستعرض الأجهزة الذكية مع سلة مشتريات جانبية، ومظهر داكن وفاتح، ومحاكاة فورية للفواتير."
      : "Interactive web storefront showcasing smart devices, offcanvas cart calculations, dual theming, and checkout invoicing.";
  } else if (project.slug === "cafena") {
    bannerTitle = isRtl
      ? "تجربة مقهى كافينا الفاخر وسلة التسوق المباشرة"
      : "Experience Cafena Artisanal Coffee & Dynamic Cart";
    bannerDesc = isRtl
      ? "منصة ويب عربية سريعة بنكهة تراثية فاخرة تتيح تصفح محاصيل القهوة وحساب فوري لقيمة الطلبات بالريال."
      : "Fast responsive Arabic specialty coffee platform with real-time in-browser cart arithmetic and search filtering.";
  } else if (project.slug === "gp") {
    bannerTitle = isRtl
      ? "منصة مقترحات مشاريع التخرج وإدارة الاعتماد"
      : "Test Academic Graduation Project Proposal Lifecycle";
    bannerDesc = isRtl
      ? "محاكاة لمسار رفع مقترحات المشاريع الجامعية من قبل الطلاب ومراجعتها واعتمادها من اللجان المشرفة."
      : "Interactive simulation of the academic graduation project submission, committee review, and approval workflow.";
  }

  const demoUrl = project.demoUrl ? `/${locale}${project.demoUrl}` : `/${locale}/projects/${project.slug}/demo`;

  return (
    <div className="rounded-2xl border border-gold/40 bg-gradient-to-r from-gold/15 via-obsidian-card/85 to-obsidian-card/75 backdrop-blur-xl p-6 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 transition-all hover:border-gold shadow-gold-ambient">
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
          <span className="font-mono text-xs text-gold font-semibold uppercase tracking-wider">
            {"// "}{isRtl ? "بيئة المحاكاة جاهزة" : "SANDBOX ONLINE"}
          </span>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl font-normal text-content-primary">
          {bannerTitle}
        </h3>

        <p className="text-content-secondary text-sm sm:text-base leading-relaxed">
          {bannerDesc}
        </p>
      </div>

      <div className="shrink-0 w-full lg:w-auto">
        <Link href={demoUrl} className="w-full block">
          <Button variant="primary" size="lg" className="w-full lg:w-auto shadow-gold-ambient">
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
