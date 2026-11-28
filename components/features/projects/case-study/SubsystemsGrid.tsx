import React from "react";
import { SubsystemItem, Locale } from "@/types/project";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface SubsystemsGridProps {
  subsystems: SubsystemItem[];
  locale: Locale;
}

export const SubsystemsGrid: React.FC<SubsystemsGridProps> = ({
  subsystems,
  locale,
}) => {
  const isRtl = locale === "ar";
  if (!subsystems || subsystems.length === 0) return null;

  return (
    <div className="space-y-6">
      <SectionHeading
        kicker={isRtl ? "// ابتكارات الأنظمة الفرعية" : "// SUBSYSTEM INNOVATIONS"}
        title={isRtl ? "الأنظمة الفرعية والابتكارات الخوارزمية" : "Subsystems & Algorithmic Innovations"}
        subtitle={
          isRtl
            ? "التقنيات المبتكرة التي تم بناؤها للتغلب على قيود بيئات التشغيل القياسية."
            : "Bespoke architectural modules engineered to transcend standard runtime bottlenecks."
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {subsystems.map((subsystem) => (
          <Card
            key={subsystem.id}
            hoverEffect
            className="border-border/10 dark:border-border/10 bg-surface dark:bg-surfaceElevated p-6 space-y-3"
          >
            <div className="flex items-center justify-between font-mono text-[10px]">
              <span className="text-brand dark:text-brandLight font-bold">{subsystem.tag}</span>
              <span className="text-muted-foreground dark:text-muted-foreground">MOD_0{subsystem.id.slice(-1)}</span>
            </div>

            <h4 className="font-serif text-xl font-normal text-foreground dark:text-foreground">
              {subsystem.title[locale]}
            </h4>

            <p className="text-muted-foreground dark:text-muted-foreground text-xs sm:text-sm leading-relaxed">
              {subsystem.desc[locale]}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};