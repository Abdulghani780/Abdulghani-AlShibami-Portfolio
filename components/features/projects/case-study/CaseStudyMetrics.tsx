import React from "react";
import { MetricItem, Locale } from "@/types/project";
import { Card } from "@/components/ui/Card";

interface CaseStudyMetricsProps {
  metrics: MetricItem[];
  locale: Locale;
}

export const CaseStudyMetrics: React.FC<CaseStudyMetricsProps> = ({
  metrics,
  locale,
}) => {
  if (!metrics || metrics.length === 0) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric, idx) => (
        <Card
          key={idx}
          cornerBrackets
          hoverEffect
          className="border-hairline bg-surface p-5 space-y-2 text-center sm:text-start"
        >
          <div className="font-mono text-[10px] text-gold uppercase tracking-[0.16em] font-semibold">
            {"// "}{metric.label[locale]}
          </div>
          <div className="font-mono text-2xl sm:text-3xl font-bold text-content-primary tracking-tight">
            {metric.value}
          </div>
          <div className="text-[11px] text-content-secondary leading-relaxed">
            {metric.description[locale]}
          </div>
        </Card>
      ))}
    </div>
  );
};
