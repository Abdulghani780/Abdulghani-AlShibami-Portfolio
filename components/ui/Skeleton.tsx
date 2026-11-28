"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "text" | "circular" | "rectangular" | "card";
  width?: string | number;
  height?: string | number;
  lines?: number;
  animation?: "pulse" | "wave" | "none";
}

export function Skeleton({
  className,
  variant = "text",
  width,
  height,
  lines = 1,
  animation = "wave",
  style,
  ...props
}: SkeletonProps) {
  const baseStyles = "bg-surface-interactive rounded overflow-hidden";

  const animationStyles = {
    pulse: "animate-pulse",
    wave: "animate-[shimmer_1.5s_ease-in-out_infinite]",
    none: "",
  };

  const variantStyles = {
    text: "h-4 rounded",
    circular: "rounded-full",
    rectangular: "rounded-xl",
    card: "rounded-2xl",
  };

  const combinedStyles = cn(
    baseStyles,
    variantStyles[variant],
    animationStyles[animation],
    className
  );

  if (variant === "text" && lines > 1) {
    return (
      <div className={cn("space-y-3", className)} {...props}>
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={cn(
              baseStyles,
              variantStyles.text,
              animationStyles[animation],
              i === lines - 1 && "w-3/4"
            )}
            style={{
              ...style,
              width: typeof width === "number" ? `${width}px` : width,
              height: typeof height === "number" ? `${height}px` : height,
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={combinedStyles}
      style={{
        ...style,
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
        borderRadius: variant === "circular" ? "50%" : undefined,
      }}
      {...props}
    />
  );
}

// Pre-configured skeleton compositions
export const SkeletonPresets = {
  card: () => (
    <div className="space-y-4 p-6 bg-surface-card border border-border rounded-2xl">
      <Skeleton variant="rectangular" width="100%" height={200} />
      <div className="space-y-3">
        <Skeleton variant="text" width="60%" />
        <Skeleton variant="text" width="40%" />
        <Skeleton variant="text" width="80%" lines={3} />
      </div>
    </div>
  ),

  avatar: (size: "sm" | "md" | "lg" | "xl" = "md") => {
    const sizes = { sm: 32, md: 48, lg: 64, xl: 96 };
    return <Skeleton variant="circular" width={sizes[size]} height={sizes[size]} />;
  },

  button: () => (
    <Skeleton variant="rectangular" width={120} height={44} />
  ),

  input: () => (
    <Skeleton variant="rectangular" width="100%" height={44} />
  ),

  tableRow: (columns = 4) => (
    <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
      {Array.from({ length: columns }).map((_, i) => (
        <Skeleton key={i} variant="text" width="100%" />
      ))}
    </div>
  ),
} as const;