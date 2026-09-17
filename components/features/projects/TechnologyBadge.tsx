import React from "react";
import { Technology } from "@/types/project";
import { cn } from "@/lib/utils";

interface TechnologyBadgeProps {
  technology: Technology | string;
  size?: "xs" | "sm";
  className?: string;
}

export const TechnologyBadge: React.FC<TechnologyBadgeProps> = ({
  technology,
  size = "xs",
  className,
}) => {
  const name = typeof technology === "string" ? technology : technology.name;
  const category = typeof technology === "string" ? "Tool" : technology.category;

  const categoryBorder = {
    Language: "border-gold/30 text-gold-light/90 bg-gold/5",
    Framework: "border-hairline text-content-secondary bg-surface-elevated",
    Protocol: "border-status-emerald/30 text-status-emerald bg-status-emerald/5",
    Database: "border-status-amber/30 text-status-amber bg-status-amber/5",
    Tool: "border-hairline text-content-muted bg-surface",
    Cloud: "border-status-sky/30 text-sky-400 bg-sky-500/5",
  }[category] || "border-hairline text-content-muted bg-surface";

  return (
    <span
      className={cn(
        "inline-flex items-center font-mono border uppercase tracking-wider transition-colors",
        size === "xs" ? "text-[10px] px-2 py-0.5" : "text-xs px-2.5 py-1",
        categoryBorder,
        className
      )}
    >
      {name}
    </span>
  );
};
