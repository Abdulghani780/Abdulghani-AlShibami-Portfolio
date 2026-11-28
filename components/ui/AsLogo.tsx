"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface AsLogoProps {
  className?: string;
  size?: number;
  variant?: "default" | "minimal" | "navbar" | "footer";
  locale?: "en" | "ar";
}

/**
 * AS Monogram — The brand mark
 * A in dark/ink, S in gold
 * Used across navbar, hero, footer
 */
export function AsMonogram({
  size = 42,
  className,
  variant = "default",
  locale = "en",
}: AsLogoProps) {
  const isRtl = locale === "ar";
  const isDark = typeof document !== "undefined" ? document.documentElement.classList.contains("dark") : true;
  
  // Colors based on theme
  const aColor = isDark ? "#FDFBF7" : "#1A1A1C"; // ivory on dark, ink on light
  const sColor = isDark ? "#D9B567" : "#BE943F"; // gold-on-dark on dark, gold on light
  
  const borderColor = isDark ? "rgba(217, 181, 103, 0.4)" : "rgba(190, 148, 63, 0.4)";
  const hoverBorderColor = isDark ? "#D9B567" : "#BE943F";
  const bgColor = isDark ? "#121213" : "#FFFFFF";
  const shadow = isDark 
    ? "0 0 0 1px rgba(217, 181, 103, 0.4), 0 2px 8px rgba(217, 181, 103, 0.15)"
    : "0 0 0 1px rgba(190, 148, 63, 0.3), 0 2px 8px rgba(190, 148, 63, 0.12)";
  const hoverShadow = isDark
    ? "0 0 0 1px rgba(217, 181, 103, 0.6), 0 8px 32px rgba(217, 181, 103, 0.25)"
    : "0 0 0 1px rgba(190, 148, 63, 0.5), 0 8px 32px rgba(190, 148, 63, 0.2)";

  const variantStyles = {
    default: "transition-all duration-200 ease-out",
    minimal: "transition-all duration-200 ease-out",
    navbar: "transition-all duration-200 ease-out",
    footer: "transition-all duration-200 ease-out",
  };

  const sizeStyles = {
    default: { width: size, height: size, fontSize: size * 0.45 },
    minimal: { width: size, height: size, fontSize: size * 0.45 },
    navbar: { width: 36, height: 36, fontSize: 16 },
    footer: { width: 48, height: 48, fontSize: 21 },
  };

  const style = sizeStyles[variant];
  const borderRadius = variant === "navbar" ? "6px" : "8px";

  return (
    <div
      className={cn(
        "inline-flex items-center justify-center font-display font-bold select-none",
        variantStyles[variant],
        className
      )}
      style={{
        ...style,
        borderRadius,
        border: `2px solid ${borderColor}`,
        backgroundColor: bgColor,
        boxShadow: shadow,
        color: aColor,
      }}
      onMouseEnter={(e) => {
        const target = e.currentTarget as HTMLElement;
        target.style.borderColor = hoverBorderColor;
        target.style.boxShadow = hoverShadow;
      }}
      onMouseLeave={(e) => {
        const target = e.currentTarget as HTMLElement;
        target.style.borderColor = borderColor;
        target.style.boxShadow = shadow;
      }}
      aria-hidden="true"
    >
      <span style={{ letterSpacing: "-0.02em" }}>
        A<span style={{ color: sColor }}>S</span>
      </span>
    </div>
  );
}

/**
 * AS Logo with wordmark
 * Used in hero section and footer
 */
export function AsLogoWithWordmark({
  className,
  locale = "en",
  size = "default",
}: {
  className?: string;
  locale?: "en" | "ar";
  size?: "default" | "large";
}) {
  const isRtl = locale === "ar";
  const isDark = typeof document !== "undefined" ? document.documentElement.classList.contains("dark") : true;
  
  const aColor = isDark ? "#FDFBF7" : "#1A1A1C";
  const sColor = isDark ? "#D9B567" : "#BE943F";
  const textColor = isDark ? "#FDFBF7" : "#1A1A1C";
  const mutedColor = isDark ? "#9A9893" : "#6B6B6E";

  const monogramSize = size === "large" ? 56 : 42;
  const fontSize = size === "large" ? 28 : 20;
  const roleFontSize = size === "large" ? 13 : 11;

  return (
    <div className={cn("flex items-center gap-4", className)}>
      <AsMonogram size={monogramSize} variant="default" locale={locale} />
      <div className="flex flex-col" dir={isRtl ? "rtl" : "ltr"}>
        <span
          className="font-display font-bold tracking-tight"
          style={{
            fontSize: fontSize,
            lineHeight: 1.1,
            color: textColor,
            letterSpacing: "-0.02em",
          }}
        >
          {locale === "ar" ? "عَبْدُالْغَنِيُّ" : "ABDULGHANI"}{" "}
          <span style={{ color: sColor }}>
            {locale === "ar" ? "الشبامي" : "AL-SHIBAMI"}
          </span>
        </span>
        <span
          className="font-sans tracking-widest uppercase"
          style={{
            fontSize: roleFontSize,
            lineHeight: 1.4,
            color: mutedColor,
            letterSpacing: "0.12em",
            marginTop: 2,
          }}
        >
          {locale === "ar" ? "مُصَمِّمُ الْأَنْظِمَةِ الْمُسْتَقِلَّة" : "AUTONOMOUS SYSTEMS ARCHITECT"}
        </span>
      </div>
    </div>
  );
}