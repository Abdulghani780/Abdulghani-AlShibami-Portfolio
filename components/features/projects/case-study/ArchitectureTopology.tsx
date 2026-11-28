"use client";

import React from "react";
import { ArchitectureStage, Locale } from "@/types/project";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";

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
      <ScrollReveal isRtl={isRtl} direction="up">
        <SectionHeading
          kicker={isRtl ? "// مواصفات مسار المعالجة" : "// PIPELINE SPECIFICATION"}
          title={isRtl ? "طوبولوجيا النظام ومسار المعالجة" : "System Topology & Execution Pipeline"}
          subtitle={
            isRtl
              ? "المسار الحتمي لتسجيل المعاملات وتأكيد الاتساق عبر مراحل الذاكرة والشبكة."
              : "Deterministic end-to-end execution flow staging client requests into durable quorum state."
          }
        />
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stages.map((stage, idx) => (
          <ScrollReveal
            key={idx}
            delay={idx * 90}
            isRtl={isRtl}
            direction="up"
            className="h-full"
          >
            <Card
              cornerBrackets
              hoverEffect
              className="border-border/10 dark:border-border/10 bg-surface dark:bg-surfaceElevated p-5 space-y-3 relative group h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" aria-hidden="true" />
              <div className="flex items-center justify-between font-mono text-xs text-brand dark:text-brandLight">
                <span className="font-bold">STAGE {stage.step}</span>
                <span className="text-muted-foreground dark:text-muted-foreground flex items-center">
                  {idx < stages.length - 1 ? (
                    isRtl ? (
                      <ArrowRight className="w-3.5 h-3.5 text-brand/70 dark:text-brandLight/70 rtl-flip" />
                    ) : (
                      <ArrowRight className="w-3.5 h-3.5 text-brand/70 dark:text-brandLight/70" />
                    )
                  ) : (
                    <Check className="w-3.5 h-3.5 text-status-success" />
                  )}
                </span>
              </div>

              <h4 className="font-serif text-lg font-normal text-foreground dark:text-foreground group-hover:text-brand dark:group-hover:text-brandLight transition-colors">
                {stage.name[locale]}
              </h4>

              <p className="text-muted-foreground dark:text-muted-foreground text-xs leading-relaxed">
                {stage.desc[locale]}
              </p>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};