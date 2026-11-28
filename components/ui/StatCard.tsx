"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface StatCardProps {
  label: string;
  value: string | number;
  change?: {
    value: number;
    label: string;
    trend: "up" | "down" | "neutral";
  };
  icon?: React.ReactNode;
  trendIcon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}

export function StatCard({
  label,
  value,
  change,
  icon,
  trendIcon,
  className,
  onClick,
  href,
}: StatCardProps) {
  const trendColors = {
    up: "text-status-success",
    down: "text-status-error",
    neutral: "text-text-muted",
  };

  const trendIcons = {
    up: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    down: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <polyline points="1 18 10.5 8.5 15.5 13.5 23 6" />
        <polyline points="7 18 1 18 1 12" />
      </svg>
    ),
    neutral: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    ),
  };

  const content = (
    <div className="p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <p className="text-caption text-text-secondary">{label}</p>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="font-display text-3xl sm:text-4xl font-bold text-text-primary tabular-nums">
              {value}
            </span>
            {trendIcon && <span className="mt-1">{trendIcon}</span>}
          </div>
          {change && (
            <div className="mt-3 flex items-center gap-1.5">
              <span className={cn("text-body-sm font-medium", trendColors[change.trend])}>
                {change.trend === "up" ? "+" : change.trend === "down" ? "" : ""}
                {Math.abs(change.value)}%
              </span>
              <span className="text-body-sm text-text-muted">{change.label}</span>
            </div>
          )}
        </div>
        {icon && (
          <div
            className={cn(
              "flex-shrink-0 p-3 rounded-xl",
              "bg-gold-subtle text-gold",
              "dark:bg-gold/10 dark:text-gold"
            )}
            aria-hidden="true"
          >
            {icon}
          </div>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        className={cn(
          "block bg-surface-card border border-border rounded-2xl",
          "transition-all duration-300 hover:border-gold/50 hover:shadow-gold-md",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2",
          className
        )}
      >
        {content}
      </a>
    );
  }

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={cn(
          "w-full text-left bg-surface-card border border-border rounded-2xl",
          "transition-all duration-300 hover:border-gold/50 hover:shadow-gold-md",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2",
          className
        )}
      >
        {content}
      </button>
    );
  }

  return (
    <div className={cn("bg-surface-card border border-border rounded-2xl", className)}>
      {content}
    </div>
  );
}

// Compact StatCard for grids
export interface CompactStatCardProps {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
  trend?: "up" | "down" | "neutral";
  trendValue?: number;
  className?: string;
}

export function CompactStatCard({
  label,
  value,
  icon,
  trend,
  trendValue,
  className,
}: CompactStatCardProps) {
  const trendColors = {
    up: "text-status-success",
    down: "text-status-error",
    neutral: "text-text-muted",
  };

  const trendIcons = {
    up: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      </svg>
    ),
    down: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <polyline points="1 18 10.5 8.5 15.5 13.5 23 6" />
      </svg>
    ),
    neutral: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    ),
  };

  return (
    <div className={cn("p-4 bg-surface-card border border-border rounded-xl", className)}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-caption text-text-secondary">{label}</p>
          <div className="mt-1 flex items-baseline gap-1.5">
            <span className="font-display text-xl font-bold text-text-primary tabular-nums">
              {value}
            </span>
            {trend && trendValue !== undefined && (
              <span className={cn("text-caption font-medium mt-0.5", trendColors[trend])}>
                {trendIcons[trend]}
                {trendValue > 0 ? "+" : ""}{trendValue}%
              </span>
            )}
          </div>
        </div>
        {icon && (
          <div className="flex-shrink-0 p-2 rounded-lg bg-gold-subtle text-gold" aria-hidden="true">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}