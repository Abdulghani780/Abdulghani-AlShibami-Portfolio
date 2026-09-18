import React from "react";
import { ArchitectureStage, Locale } from "@/types/project";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface ArchitectureTopologyProps {
  stages: ArchitectureStage[];
  locale: Locale;
}

export const ArchitectureTopology: React.FC<ArchitectureTopologyProps> = ({
  stages,
  locale,
}) => {
  const isRtl = locale === "ar";
  if (!stages || stages.length === 0) return null;

  return (
    <div id="architecture" className="space-y-6">
      <SectionHeading
        kicker={isRtl ? "// مواصفات مسار المعالجة" : "// PIPELINE SPECIFICATION"}
        title={isRtl ? "طوبولوجيا النظام ومسار المعالجة" : "System Topology & Execution Pipeline"}
        subtitle={
          isRtl
            ? "المسار الحتمي لتسجيل المعاملات وتأكيد الاتساق عبر مراحل الذاكرة والشبكة."
            : "Deterministic end-to-end execution flow staging client requests into durable quorum state."
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stages.map((stage, idx) => (
          <Card
            key={idx}
            cornerBrackets
            hoverEffect
            className="border-hairline bg-surface p-5 space-y-3 relative group"
          >
            <div className="flex items-center justify-between font-mono text-xs text-gold">
              <span className="font-bold">STAGE {stage.step}</span>
              <span className="text-content-muted text-[10px]">
                {idx < stages.length - 1 ? (isRtl ? "←" : "→") : "✓"}
              </span>
            </div>

            <h4 className="font-serif text-lg font-normal text-content-primary group-hover:text-gold transition-colors">
              {stage.name[locale]}
            </h4>

            <p className="text-content-secondary text-xs leading-relaxed">
              {stage.desc[locale]}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};
