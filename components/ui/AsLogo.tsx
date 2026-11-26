"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { tokens } from "@/lib/design-system/tokens";

export interface AsLogoProps {
  className?: string;
  showWordmark?: boolean;
  theme?: "light" | "dark" | "auto";
  locale?: string;
  size?: number;
  variant?: "default" | "minimal" | "wordmark-only" | "monogram-only";
}

export function AsMonogram({
  size = 42,
  className,
  variant = "default",
}: {
  size?: number;
  className?: string;
  variant?: "default" | "elevated" | "subtle";
}) {
  // Design token based styling
  const borderColor = "var(--border-hairline)";
  const hoverBorderColor = "var(--gold-primary)";
  const bgColor = "var(--canvas)";
  const shadow = "var(--shadow-card)";

  const variantStyles = {
    default: "border border-border hover:border-gold/80 hover:shadow-gold-md transition-all duration-300",
    elevated: "border border-gold/40 shadow-gold-lg hover:shadow-gold-xl hover:border-gold transition-all duration-300",
    subtle: "border border-border/50 hover:border-gold/40 transition-all duration-300",
  };

  return (
    <div
      style={{ width: size, height: size }}
      className={cn(
        "relative rounded-xl overflow-hidden shrink-0 bg-canvas",
        variantStyles[variant],
        className
      )}
    >
      <Image
        src="/images/brand/as-logo-3d.png"
        alt="AS 3D Monogram - Abdulghani Al-Shibami"
        width={size * 2}
        height={size * 2}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        priority
      />
    </div>
  );
}

export function AsWordmark({
  locale = "en",
  className,
  size = "default",
}: {
  locale?: string;
  className?: string;
  size?: "sm" | "default" | "lg" | "xl";
}) {
  const isRtl = locale === "ar";
  
  const sizeStyles = {
    sm: "text-xs sm:text-sm tracking-[0.12em]",
    default: "text-[13px] sm:text-[14px] xl:text-[15px] tracking-[0.14em]",
    lg: "text-sm sm:text-base xl:text-lg tracking-[0.16em]",
    xl: "text-base sm:text-lg xl:text-xl tracking-[0.18em]",
  };

  return (
    <span
      className={cn(
        "font-sans font-black uppercase transition-colors leading-none select-none whitespace-nowrap",
        "text-text-primary group-hover:text-gold",
        sizeStyles[size],
        className
      )}
      dir={isRtl ? "rtl" : "ltr"}
    >
      {isRtl ? "عبدالغني الشبامي" : "ABDULGHANI AL-SHIBAMI"}
    </span>
  );
}

export function AsLogo({
  className,
  showWordmark = true,
  theme = "auto",
  locale = "en",
  size = 42,
  variant = "default",
}: AsLogoProps) {
  const isRtl = locale === "ar";

  const layoutStyles = {
    default: "flex items-center gap-2.5 sm:gap-3.5",
    minimal: "flex items-center gap-2",
    "wordmark-only": "flex items-center",
    "monogram-only": "flex items-center",
  };

  return (
    <Link
      href={`/${locale}`}
      className={cn(
        "group focus:outline-none shrink-0",
        layoutStyles[variant],
        className
      )}
      aria-label="Abdulghani Al-Shibami — Home"
    >
      {variant !== "wordmark-only" && (
        <AsMonogram size={size} className="shrink-0" />
      )}

      {showWordmark && variant !== "monogram-only" && (
        <AsWordmark locale={locale} size={size >= 56 ? "lg" : "default"} />
      )}
    </Link>
  );
}

// Pre-configured logo variants matching design tokens
export const AsLogoVariants = {
  // Navigation bar logo
  nav: (locale?: string) => (
    <AsLogo locale={locale} size={36} showWordmark={true} variant="default" />
  ),

  // Footer logo
  footer: (locale?: string) => (
    <AsLogo locale={locale} size={48} showWordmark={true} variant="default" />
  ),

  // Hero section logo
  hero: (locale?: string) => (
    <AsLogo locale={locale} size={64} showWordmark={true} variant="default" />
  ),

  // Minimal monogram only
  monogram: (size = 42) => (
    <AsMonogram size={size} variant="elevated" />
  ),

  // Wordmark only for tight spaces
  wordmark: (locale?: string) => (
    <AsWordmark locale={locale} size="default" />
  ),

  // Preloader logo
  preloader: () => (
    <AsMonogram size={72} variant="elevated" />
  ),
} as const;