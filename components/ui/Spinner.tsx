"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "brand" | "inverse";
  label?: string;
}

export function Spinner({
  className,
  size = "md",
  variant = "default",
  label = "Loading",
  ...props
}: SpinnerProps) {
  const sizeStyles = {
    sm: "h-4 w-4 border-2",
    md: "h-6 w-6 border-2",
    lg: "h-8 w-8 border-3",
    xl: "h-12 w-12 border-3",
  };

  const variantStyles = {
    default: "border-text-muted border-t-gold",
    brand: "border-gold/30 border-t-gold",
    inverse: "border-surface-elevated/30 border-t-surface-elevated",
  };

  return (
    <div
      className={cn(
        "inline-flex",
        "animate-spin",
        "rounded-full",
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
      role="status"
      aria-label={label}
      {...props}
    >
      <span className="sr-only">{label}</span>
    </div>
  );
}

// Spinner with overlay
export interface SpinnerOverlayProps {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "brand" | "inverse";
  label?: string;
  className?: string;
}

export function SpinnerOverlay({
  size = "lg",
  variant = "brand",
  label = "Loading...",
  className,
}: SpinnerOverlayProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-[9999] flex items-center justify-center",
        "bg-overlay backdrop-blur-sm",
        className
      )}
      role="status"
      aria-live="polite"
      aria-label={label}
    >
      <div className="flex flex-col items-center gap-4 glass-panel p-8 rounded-2xl shadow-gold-lg">
        <Spinner size={size} variant={variant} label={label} />
        <span className="text-body text-text-secondary">{label}</span>
      </div>
    </div>
  );
}