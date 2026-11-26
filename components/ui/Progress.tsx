"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "brand" | "success" | "warning" | "error";
  showLabel?: boolean;
  label?: string;
  indeterminate?: boolean;
}

export function Progress({
  className,
  value,
  max = 100,
  size = "md",
  variant = "default",
  showLabel = false,
  label,
  indeterminate = false,
  ...props
}: ProgressProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  const sizeStyles = {
    sm: "h-1.5",
    md: "h-2.5",
    lg: "h-4",
  };

  const variantStyles = {
    default: "bg-gold",
    brand: "bg-gold",
    success: "bg-status-success",
    warning: "bg-status-warning",
    error: "bg-status-error",
  };

  const trackStyles = "bg-surface-interactive";

  return (
    <div className={cn("w-full", className)} {...props}>
      {(showLabel || label) && (
        <div className="flex items-center justify-between mb-1.5 text-caption text-text-secondary">
          <span>{label}</span>
          {showLabel && !indeterminate && <span>{Math.round(percentage)}%</span>}
        </div>
      )}
      <div
        className={cn(
          "relative overflow-hidden rounded-full",
          trackStyles,
          sizeStyles[size]
        )}
        role="progressbar"
        aria-valuenow={indeterminate ? undefined : value}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={label}
      >
        {indeterminate ? (
          <div
            className={cn(
              "absolute inset-0 animate-[shimmer_1.5s_ease-in-out_infinite]",
              variantStyles[variant]
            )}
            style={{ transform: "translateX(-100%)" }}
          />
        ) : (
          <div
            className={cn(
              "h-full rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
              variantStyles[variant]
            )}
            style={{ width: `${percentage}%` }}
          />
        )}
      </div>
    </div>
  );
}

// Circular Progress Ring
export interface ProgressRingProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  size?: number;
  strokeWidth?: number;
  showValue?: boolean;
  variant?: "default" | "success" | "warning" | "error";
  trackColor?: string;
}

export function ProgressRing({
  className,
  value,
  max = 100,
  size = 64,
  strokeWidth = 4,
  showValue = true,
  variant = "default",
  trackColor,
  ...props
}: ProgressRingProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  const variantColors = {
    default: "var(--gold-primary)",
    success: "var(--status-success)",
    warning: "var(--status-warning)",
    error: "var(--status-error)",
  };

  const trackColors = {
    default: "var(--border-hairline)",
    success: "rgba(16, 185, 129, 0.15)",
    warning: "rgba(245, 158, 11, 0.15)",
    error: "rgba(239, 68, 68, 0.15)",
  };

  const strokeColor = variantColors[variant];
  const trackBgColor = trackColor || trackColors[variant];

  return (
    <div
      className={cn("inline-flex items-center justify-center", className)}
      style={{ width: size, height: size }}
      {...props}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="transform -rotate-90"
        role="img"
        aria-label={`${Math.round(percentage)}% complete`}
      >
        <circle
          className="transition-opacity duration-300"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={trackBgColor}
          strokeWidth={strokeWidth}
        />
        <circle
          className="transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{
            filter: variant === "default" ? "drop-shadow(0 0 4px var(--gold-glow))" : "none",
          }}
        />
      </svg>
      {showValue && (
        <div className="absolute flex items-center justify-center font-display font-bold text-text-primary">
          <span className="text-mono-data">{Math.round(percentage)}</span>
          <span className="text-caption ml-1">%</span>
        </div>
      )}
    </div>
  );
}