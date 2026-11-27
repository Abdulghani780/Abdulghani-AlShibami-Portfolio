"use client";

import React from "react";
import { MetricItem, Locale } from "@/types/project";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CountUp } from "@/components/ui/CountUp";

interface CaseStudyMetricsProps {
  metrics: MetricItem[];
  locale: Locale;
}

function renderMetricValue(value: string) {
  const match = value.match(/^[\d.,]+/);
  if (!match) return value;
  const numeric = parseFloat(match[0].replace(/,/g, ""));
  if (Number.isNaN(numeric)) return value;
  const decimals = (match[0].split(".")[1] || "").replace(/,/g, "").length;
  return (
    <CountUp
      end={numeric}
      decimals={decimals}
      suffix={value.slice(match[0].length)}
      duration={1400}
    />
  );
}

export const CaseStudyMetrics: React.FC<CaseStudyMetricsProps> = ({
  metrics,
  locale,
}) => {
  if (!metrics || metrics.length === 0) return null;

  const isRtl = locale === "ar";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric, idx) => (
        <ScrollReveal
          key={idx}
          delay={idx * 80}
          isRtl={isRtl}
          direction="up"
          className="h-full"
        >
          <Card
            cornerBrackets
            hoverEffect
            className="border-border/10 dark:border-border/10 bg-surface dark:bg-surfaceElevated p-5 space-y-2 text-center sm:text-start h-full"
          >
            <div className="font-mono text-[10px] text-brand dark:text-brandLight uppercase tracking-[0.16em] font-semibold">
              {"// "}{metric.label[locale]}
            </div>
            <div className="font-mono text-2xl sm:text-3xl font-bold text-foreground dark:text-foreground tracking-tight">
              {renderMetricValue(metric.value)}
            </div>
            <div className="text-[11px] text-muted-foreground dark:text-muted-foreground leading-relaxed">
              {metric.description[locale]}
            </div>
          </Card>
        </ScrollReveal>
      ))}
    </div>
  );
};