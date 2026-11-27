"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  titleTag?: "h1" | "h2" | "h3" | "h4";
  goldShimmer?: boolean;
  locale?: "en" | "ar";
}

export function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "left",
  titleTag = "h2",
  goldShimmer = false,
  locale = "en",
  className,
  ...props
}: SectionHeadingProps) {
  const TitleTag = titleTag;
  const isAr = locale === "ar";
  const isRtlAlign = align === "right" || (isAr && align !== "left");

  return (
    <div
      className={cn(
        "space-y-4 mb-12 sm:mb-16",
        isRtlAlign ? "text-right max-w-3xl" : align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl",
        className
      )}
      {...props}
    >
      {kicker && (
        <div
          className={cn(
            "font-mono text-caption text-gold flex items-center gap-2.5",
            isRtlAlign && "justify-end",
            align === "center" && "justify-center",
            goldShimmer && "gold-shimmer-text"
          )}
        >
          <span className="h-px w-6 bg-gold/60 inline-block" aria-hidden="true" />
          <span>{kicker}</span>
        </div>
      )}
      <TitleTag className={cn(
        isAr ? "font-arabic-display text-arabic-section tracking-normal" : "font-display text-section-headline tracking-tight",
        "text-text-primary leading-snug",
        goldShimmer && "gold-shimmer-text",
        align === "center" ? "mx-auto" : isRtlAlign ? "mr-auto" : ""
      )}>
        {title}
      </TitleTag>
      <span
        aria-hidden="true"
        className={cn(
          "block mt-5 h-px w-20",
          align === "center"
            ? "mx-auto bg-gradient-to-r from-transparent via-gold/70 to-transparent"
            : isRtlAlign
            ? "mr-auto bg-gradient-to-l from-gold/80 via-gold/30 to-transparent"
            : "bg-gradient-to-r from-gold/80 via-gold/30 to-transparent"
        )}
      />
      {subtitle && (
        <p className={cn(
          isAr ? "text-arabic-body text-text-secondary leading-loose" : "text-body text-text-secondary leading-relaxed",
          "max-w-2xl font-normal",
          align === "center" && "mx-auto",
          isRtlAlign && "mr-auto"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

// Deprecated - use SectionHeading with locale="ar" instead
export interface ArabicSectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  titleTag?: "h1" | "h2" | "h3" | "h4";
}

/** @deprecated Use SectionHeading with locale="ar" */
export function ArabicSectionHeading({
  kicker,
  title,
  subtitle,
  align = "right",
  titleTag = "h2",
  className,
  ...props
}: ArabicSectionHeadingProps) {
  const TitleTag = titleTag;

  return (
    <div
      className={cn(
        "space-y-4 mb-12 sm:mb-16 font-arabic",
        align === "center" ? "text-center mx-auto max-w-3xl" : align === "right" ? "text-right max-w-3xl" : "max-w-3xl",
        className
      )}
      {...props}
    >
      {kicker && (
        <div
          className={cn(
            "font-mono text-caption text-gold flex items-center gap-2.5",
            align === "center" && "justify-center",
            align === "right" && "justify-end"
          )}
        >
          <span className="h-px w-6 bg-gold/60 inline-block" aria-hidden="true" />
          <span>{kicker}</span>
        </div>
      )}
      <TitleTag className="font-arabic-display text-arabic-section tracking-normal text-text-primary leading-snug">
        {title}
      </TitleTag>
      <span
        aria-hidden="true"
        className={cn(
          "block mt-5 h-px w-20",
          align === "center"
            ? "mx-auto bg-gradient-to-r from-transparent via-gold/70 to-transparent"
            : align === "right"
            ? "ml-auto bg-gradient-to-l from-gold/80 via-gold/30 to-transparent"
            : "bg-gradient-to-r from-gold/80 via-gold/30 to-transparent"
        )}
      />
      {subtitle && (
        <p className={cn(
          "text-arabic-body text-text-secondary leading-loose max-w-2xl font-normal",
          align === "center" && "mx-auto",
          align === "right" && "mr-auto"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}