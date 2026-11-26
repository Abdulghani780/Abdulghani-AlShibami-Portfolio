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
}

export function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "left",
  titleTag = "h2",
  goldShimmer = false,
  className,
  ...props
}: SectionHeadingProps) {
  const TitleTag = titleTag;

  return (
    <div
      className={cn(
        "space-y-4 mb-12 sm:mb-16",
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
            align === "right" && "justify-end",
            goldShimmer && "gold-shimmer-text"
          )}
        >
          <span className="h-px w-6 bg-gold/60 inline-block" aria-hidden="true" />
          <span>{kicker}</span>
        </div>
      )}
      <TitleTag className={cn(
        "font-display text-section-headline tracking-tight text-text-primary leading-tight",
        goldShimmer && "gold-shimmer-text",
        align === "center" ? "mx-auto" : align === "right" ? "mr-auto" : ""
      )}>
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
          "text-body text-text-secondary leading-relaxed max-w-2xl font-normal",
          align === "center" && "mx-auto",
          align === "right" && "mr-auto"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

// Arabic variant - now unified with SectionHeading using align="right"
export interface ArabicSectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  titleTag?: "h1" | "h2" | "h3" | "h4";
}

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