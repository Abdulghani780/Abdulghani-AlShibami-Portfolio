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
    Language: "border-gold-primary/30 text-gold-dark dark:text-gold-light bg-gold-primary/10",
    Framework: "border-black/15 dark:border-white/15 text-zinc-800 dark:text-zinc-200 bg-black/5 dark:bg-white/5",
    Protocol: "border-emerald-500/30 text-emerald-700 dark:text-emerald-400 bg-emerald-500/10",
    Database: "border-gold-dark/30 text-gold-dark dark:text-gold-light bg-gold-dark/10",
    Tool: "border-black/10 dark:border-white/10 text-zinc-700 dark:text-zinc-300 bg-black/5 dark:bg-white/5",
    Cloud: "border-gold-primary/20 text-zinc-800 dark:text-zinc-200 bg-black/5 dark:bg-white/5",
  }[category] || "border-black/10 dark:border-white/10 text-zinc-700 dark:text-zinc-300 bg-black/5 dark:bg-white/5";

  return (
    <span
      className={cn(
        "inline-flex items-center font-mono border rounded uppercase tracking-wider transition-colors select-none",
        size === "xs" ? "text-[10px] px-2 py-0.5" : "text-xs px-2.5 py-1",
        categoryBorder,
        className
      )}
    >
      {name}
    </span>
  );
};
