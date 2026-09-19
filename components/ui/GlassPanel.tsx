import React from "react";
import { cn } from "@/lib/utils";

export interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "subtle" | "medium" | "strong" | "solid";
  hoverEffect?: boolean;
  hoverHighlight?: boolean;
  borderGlow?: boolean;
}

export const GlassPanel = React.forwardRef<HTMLDivElement, GlassPanelProps>(
  (
    {
      className,
      variant = "subtle",
      hoverEffect = false,
      hoverHighlight = false,
      borderGlow = false,
      children,
      ...props
    },
    ref
  ) => {
    const isHoverActive = hoverEffect || hoverHighlight;
    const variantStyles = {
      subtle: "bg-glass-subtle backdrop-blur-glass border-glass-border",
      medium: "bg-glass-medium backdrop-blur-glass border-glass-border",
      strong: "bg-glass-strong backdrop-blur-glass-lg border-glass-border",
      solid: "bg-surface border-hairline",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "relative border transition-all duration-300",
          variantStyles[variant],
          isHoverActive &&
            "hover:border-gold/40 hover:bg-glass-medium hover:shadow-lg dark:hover:shadow-[0_12px_36px_-8px_rgba(0,0,0,0.5)]",
          borderGlow && "border-gold/30 shadow-[0_0_24px_-4px_rgba(201,162,39,0.18)]",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlassPanel.displayName = "GlassPanel";
