import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "gold" | "status" | "outline" | "danger";
  dot?: boolean;
  dotColor?: "emerald" | "amber" | "rose" | "gold";
}

export function Badge({
  className,
  variant = "default",
  dot = false,
  dotColor = "emerald",
  children,
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded transition-colors select-none";

  const variantStyles = {
    default:
      "bg-surface text-content-secondary border border-hairline",
    gold:
      "bg-gold/10 text-gold border border-gold/30 dark:bg-gold/15 dark:border-gold/40 font-bold",
    status:
      "bg-surface text-content-primary border border-hairline/80 font-medium",
    outline:
      "bg-transparent text-content-muted border border-hairline",
    danger:
      "bg-status-rose/10 text-status-rose border border-status-rose/30",
  };

  const dotColorStyles = {
    emerald: "bg-status-emerald shadow-[0_0_8px_rgba(0,255,157,0.6)]",
    amber: "bg-status-amber shadow-[0_0_8px_rgba(245,158,11,0.6)]",
    rose: "bg-status-rose shadow-[0_0_8px_rgba(239,68,68,0.6)]",
    gold: "bg-gold shadow-[0_0_8px_rgba(0,255,157,0.6)]",
  };

  return (
    <span className={cn(baseStyles, variantStyles[variant], className)} {...props}>
      {dot && (
        <span
          className={cn(
            "h-1.5 w-1.5 rounded-full shrink-0 animate-pulse",
            dotColorStyles[dotColor]
          )}
        />
      )}
      {children}
    </span>
  );
}
