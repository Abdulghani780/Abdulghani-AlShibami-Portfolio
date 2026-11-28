"use client";

import React from "react";
import { cn } from "@/lib/utils";
import {
  type BadgeVariant,
  type BadgeSize,
} from "@/lib/design-system/components";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  removable?: boolean;
  onRemove?: () => void;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  dot?: boolean;
  dotColor?: string;
  children: React.ReactNode;
}

export function Badge({
  className,
  variant = "default",
  size = "md",
  removable = false,
  onRemove,
  startIcon,
  endIcon,
  dot = false,
  dotColor,
  children,
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center gap-1 font-sans font-medium transition-colors select-none rounded-full";

  const variantStyles: Record<BadgeVariant, string> = {
    default: "bg-surface-interactive text-text-secondary border border-border",
    brand: "bg-gold-subtle text-gold border border-gold/30",
    success: "bg-status-success-bg text-status-success border border-status-success/30",
    warning: "bg-status-warning-bg text-status-warning border border-status-warning/30",
    error: "bg-status-error-bg text-status-error border border-status-error/30",
    outline: "bg-transparent text-text-secondary border border-border-strong",
  };

  const sizeStyles: Record<BadgeSize, string> = {
    sm: "px-2.5 py-1 text-xs gap-1",
    md: "px-3 py-1 text-sm gap-1.5",
    lg: "px-4 py-1.5 text-base gap-2",
  };

  const dotStyles = dot
    ? "relative pl-5"
    : "";

  const combinedStyles = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    dotStyles,
    className
  );

  return (
    <span className={combinedStyles} {...props}>
      {dot && (
        <span
          className={cn(
            "absolute left-2.5 top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full shrink-0 animate-pulse",
            dotColor
              ? `bg-[${dotColor}] shadow-[0_0_8px_${dotColor}]`
              : "bg-text-primary shadow-[0_0_8px_rgba(15,23,42,0.6)]"
          )}
          aria-hidden="true"
        />
      )}
      {startIcon && <span className="inline-flex shrink-0" aria-hidden="true">{startIcon}</span>}
      <span>{children}</span>
      {endIcon && <span className="inline-flex shrink-0" aria-hidden="true">{endIcon}</span>}
      {removable && (
        <button
          type="button"
          onClick={onRemove}
          className={cn(
            "ml-1 inline-flex h-full items-center justify-center rounded-full transition-colors",
            "hover:bg-black/10 dark:hover:bg-white/10",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          )}
          aria-label="Remove"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </span>
  );
}

// Tag component - clickable badge variant
export interface TagProps {
  className?: string;
  variant?: BadgeVariant;
  size?: BadgeSize;
  rounded?: boolean;
  onClick?: () => void;
  href?: string;
  children: React.ReactNode;
}

export function Tag({ className, variant = "default", size = "md", rounded = true, onClick, href, children }: TagProps) {
  const baseStyles = "inline-flex items-center gap-1 font-sans font-medium transition-colors select-none";
  const variantStyles: Record<BadgeVariant, string> = {
    default: "bg-surface-interactive text-text-secondary border border-border",
    brand: "bg-gold-subtle text-gold border border-gold/30",
    success: "bg-status-success-bg text-status-success border border-status-success/30",
    warning: "bg-status-warning-bg text-status-warning border border-status-warning/30",
    error: "bg-status-error-bg text-status-error border border-status-error/30",
    outline: "bg-transparent text-text-secondary border border-border-strong",
  };
  const sizeStyles: Record<BadgeSize, string> = {
    sm: "px-2.5 py-1 text-xs gap-1",
    md: "px-3 py-1 text-sm gap-1.5",
    lg: "px-4 py-1.5 text-base gap-2",
  };
  const radiusStyles = rounded ? "rounded-full" : "rounded-xl";

  const combinedStyles = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    radiusStyles,
    (onClick || href) && "cursor-pointer hover:shadow-gold-sm",
    className
  );

  if (href) {
    return (
      <a href={href} className={combinedStyles} {...(onClick ? { onClick: (e: React.MouseEvent) => { e.preventDefault(); onClick(); } } : {})}>
        {children}
      </a>
    );
  }

  return (
    <span
      className={combinedStyles}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onClick(); } } : undefined}
    >
      {children}
    </span>
  );
}

// Pill component - for filter/selectable states
export interface PillProps {
  className?: string;
  variant?: BadgeVariant;
  size?: BadgeSize;
  selected?: boolean;
  onClick?: () => void;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export function Pill({ className, variant = "default", size = "md", selected = false, onClick, icon, children }: PillProps) {
  const baseStyles = "inline-flex items-center gap-1.5 font-sans font-semibold transition-all duration-200 select-none rounded-full";
  const variantStyles: Record<BadgeVariant, string> = {
    default: selected ? "bg-gold text-surface-elevated shadow-gold-sm" : "bg-surface-interactive text-text-secondary border border-border hover:border-gold/50",
    brand: selected ? "bg-gold text-surface-elevated shadow-gold-md" : "bg-gold-subtle text-gold border border-gold/30 hover:bg-gold/20",
    success: selected ? "bg-status-success text-surface-elevated shadow-[0_0_12px_rgba(16,185,129,0.4)]" : "bg-status-success-bg text-status-success border border-status-success/30",
    warning: selected ? "bg-status-warning text-surface-elevated shadow-[0_0_12px_rgba(245,158,11,0.4)]" : "bg-status-warning-bg text-status-warning border border-status-warning/30",
    error: selected ? "bg-status-error text-surface-elevated shadow-[0_0_12px_rgba(239,68,68,0.4)]" : "bg-status-error-bg text-status-error border border-status-error/30",
    outline: selected ? "bg-gold text-surface-elevated border-gold shadow-gold-sm" : "bg-transparent text-text-secondary border border-border-strong hover:border-gold",
  };
  const sizeStyles: Record<BadgeSize, string> = {
    sm: "px-3 py-1.5 text-xs gap-1.5",
    md: "px-4 py-2 text-sm gap-2",
    lg: "px-5 py-2.5 text-base gap-2.5",
  };

  const combinedStyles = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    onClick && "cursor-pointer active:scale-[0.97]",
    className
  );

  return (
    <span
      className={combinedStyles}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onClick(); } } : undefined}
      aria-pressed={onClick ? selected : undefined}
    >
      {icon && <span className="inline-flex shrink-0" aria-hidden="true">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}