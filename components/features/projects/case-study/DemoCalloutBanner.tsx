import React from "react";
import Link from "next/link";
import { Project, Locale } from "@/types/project";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
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
  if (project.demoType !== "interactive_simulation" || !project.demoUrl) {
    return null;
  }

  return (
    <div className="border border-gold/50 bg-gold/5 dark:bg-gold/10 p-6 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 transition-all hover:border-gold shadow-[0_0_30px_rgba(212,175,55,0.08)]">
      <div className="space-y-3 max-w-2xl">
        <div className="flex items-center gap-3">
          <Badge variant="gold" dot dotColor="emerald">
            {isRtl ? "محاكاة ويب تفاعلية" : "INTERACTIVE WEB SIMULATION"}
          </Badge>
          <span className="font-mono text-[10px] text-gold font-semibold uppercase tracking-wider">
            {"// "}{isRtl ? "المحرك متصل بالإنترنت" : "SANDBOX ONLINE"}
          </span>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl font-normal text-content-primary">
          {isRtl
            ? "اختبر آلة الحالة الموزعة مباشرة داخل المتصفح"
            : "Test Distributed State Machine Faults Live in Browser"}
        </h3>

        <p className="text-content-secondary text-xs sm:text-sm leading-relaxed">
          {isRtl
            ? "تتيح لك بيئة المحاكاة التفاعلية حقن انقسامات الشبكة، وإسقاط العقد الخادمة، واختبار استعادة التوافق عبر محطة أوامر تفاعلية مباشرة. إعادة إنتاج حتمية لمعمارية C# .NET 9 (الكود المكتبي المترجم يعمل خارج المتصفح)."
            : "The interactive simulation sandbox enables live partition chaos injection, node failovers, and consensus recovery via an interactive terminal REPL. High-fidelity in-browser reproduction of the C# .NET 9 core engine (compiled binaries run out-of-browser)."}
        </p>
      </div>

      <div className="shrink-0">
        <Link href={`/${locale}${project.demoUrl}`}>
          <Button variant="primary" size="lg">
            <span>{isRtl ? "تشغيل مختبر المحاكاة التفاعلي" : "Launch Interactive Simulation"}</span>
            <span className={cn("text-sm", isRtl && "rotate-180")}>→</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};
