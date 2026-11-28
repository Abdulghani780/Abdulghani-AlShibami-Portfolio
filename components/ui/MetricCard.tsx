"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface MetricCardProps {
  title: string;
  value: string | number;
  unit?: string;
  subtitle?: string;
  sparkline?: number[];
  trend?: {
    value: number;
    label: string;
    positive: boolean;
  };
  status?: "normal" | "warning" | "critical";
  className?: string;
  onClick?: () => void;
}

export function MetricCard({
  title,
  value,
  unit,
  subtitle,
  sparkline,
  trend,
  status = "normal",
  className,
  onClick,
}: MetricCardProps) {
  const statusColors = {
    normal: "border-border",
    warning: "border-status-warning/50 bg-status-warning-bg/30",
    critical: "border-status-error/50 bg-status-error-bg/30",
  };

  const statusIndicatorColors = {
    normal: "bg-status-success",
    warning: "bg-status-warning",
    critical: "bg-status-error",
  };

  // Simple sparkline SVG
  const Sparkline = ({ data }: { data: number[] }) => {
    if (!data.length) return null;

    const width = 120;
    const height = 40;
    const padding = 2;
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min || 1;

    const points = data.map((val, i) => {
      const x = padding + (i / (data.length - 1)) * (width - 2 * padding);
      const y = height - padding - ((val - min) / range) * (height - 2 * padding);
      return `${x},${y}`;
    }).join(" ");

    return (
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} aria-hidden="true">
        <defs>
          <linearGradient id="sparkline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--gold-primary)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="var(--gold-secondary)" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        <path
          d={`M${points}`}
          stroke="url(#sparkline-gradient)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {data.length > 1 && (
          <circle
            cx={width - padding - (width - 2 * padding) * ((data.length - 1) / (data.length - 1))}
            cy={height - padding - ((data[data.length - 1] - min) / range) * (height - 2 * padding)}
            r="3"
            fill="var(--gold-primary)"
          />
        )}
      </svg>
    );
  };

  const content = (
    <div className="p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="text-body font-medium text-text-primary">{title}</h3>
            <span
              className={cn(
                "h-2 w-2 rounded-full",
                statusIndicatorColors[status]
              )}
              aria-label={`Status: ${status}`}
            />
          </div>
          <div className="mt-2 flex items-baseline gap-1">
            <span className="font-display text-3xl sm:text-4xl font-bold text-text-primary tabular-nums">
              {value}
            </span>
            {unit && <span className="text-body text-text-muted self-end mb-1">{unit}</span>}
          </div>
          {subtitle && (
            <p className="mt-1 text-body-sm text-text-secondary">{subtitle}</p>
          )}
        </div>
      </div>

      {sparkline && (
        <div className="mt-4 pt-4 border-t border-border">
          <Sparkline data={sparkline} />
        </div>
      )}

      {trend && (
        <div className="mt-4 flex items-center gap-2">
          <span
            className={cn(
              "text-body-sm font-medium flex items-center gap-1",
              trend.positive ? "text-status-success" : "text-status-error"
            )}
          >
            {trend.positive ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <polyline points="1 18 10.5 8.5 15.5 13.5 23 6" />
              </svg>
            )}
            <span>{trend.value > 0 ? "+" : ""}{trend.value}%</span>
            <span className="text-text-muted">{trend.label}</span>
          </span>
        </div>
      )}
    </div>
  );

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={cn(
          "w-full text-left bg-surface-card rounded-2xl transition-all duration-300",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2",
          statusColors[status],
          className
        )}
      >
        {content}
      </button>
    );
  }

  return (
    <div className={cn("bg-surface-card rounded-2xl", statusColors[status], className)}>
      {content}
    </div>
  );
}

// Compact MetricCard for dense layouts
export interface CompactMetricCardProps {
  title: string;
  value: string | number;
  unit?: string;
  sparkline?: number[];
  trend?: {
    value: number;
    positive: boolean;
  };
  status?: "normal" | "warning" | "critical";
  className?: string;
}

export function CompactMetricCard({
  title,
  value,
  unit,
  sparkline,
  trend,
  status = "normal",
  className,
}: CompactMetricCardProps) {
  const statusColors = {
    normal: "border-border",
    warning: "border-status-warning/50",
    critical: "border-status-error/50",
  };

  return (
    <div className={cn("p-4 bg-surface-card border rounded-xl", statusColors[status], className)}>
      <div className="flex items-center justify-between gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-caption text-text-secondary">{title}</p>
          <div className="mt-1 flex items-baseline gap-1">
            <span className="font-display text-xl font-bold text-text-primary tabular-nums">
              {value}
            </span>
            {unit && <span className="text-body-sm text-text-muted">{unit}</span>}
          </div>
          {sparkline && (
            <div className="mt-2 h-8">
              <svg width="100" height="32" viewBox="0 0 100 32" aria-hidden="true">
                {sparkline.length > 1 && (() => {
                  const max = Math.max(...sparkline);
                  const min = Math.min(...sparkline);
                  const range = max - min || 1;
                  const points = sparkline.map((val, i) => {
                    const x = (i / (sparkline.length - 1)) * 100;
                    const y = 32 - ((val - min) / range) * 28 - 2;
                    return `${x},${y}`;
                  }).join(" ");
                  return <path d={`M${points}`} stroke="var(--gold-primary)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />;
                })()}
              </svg>
            </div>
          )}
        </div>
        {trend && (
          <span
            className={cn(
              "text-caption font-medium flex items-center gap-1",
              trend.positive ? "text-status-success" : "text-status-error"
            )}
          >
            {trend.positive ? (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
              </svg>
            ) : (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <polyline points="1 18 10.5 8.5 15.5 13.5 23 6" />
              </svg>
            )}
            {trend.value > 0 ? "+" : ""}{trend.value}%
          </span>
        )}
      </div>
    </div>
  );
}