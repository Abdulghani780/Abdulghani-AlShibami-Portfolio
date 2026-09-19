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
        "space-y-4 mb-12 sm:mb-16",
        align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl",
        className
      )}
      {...props}
    >
      {kicker && (
        <div
          className={cn(
            "font-mono text-xs font-semibold tracking-[0.22em] text-gold uppercase flex items-center gap-2.5",
            align === "center" && "justify-center"
          )}
        >
          <span className="h-px w-6 bg-gold/60 inline-block" />
          <span>{kicker}</span>
        </div>
      )}
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-normal tracking-tight text-content-primary leading-[1.12]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-content-secondary text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}
