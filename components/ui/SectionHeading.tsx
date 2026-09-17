import React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "left",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-3 mb-10 md:mb-14",
        align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl",
        className
      )}
      {...props}
    >
      {kicker && (
        <div className="font-mono text-[11px] font-medium tracking-[0.2em] text-gold uppercase flex items-center gap-2">
          <span className="h-px w-6 bg-gold/50 inline-block" />
          <span>{kicker}</span>
        </div>
      )}
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-content-primary leading-[1.15]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-content-secondary text-sm sm:text-base leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
