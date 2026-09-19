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
    Language: "border-indigo-500/30 text-indigo-300 bg-indigo-500/10",
    Framework: "border-cyan-500/30 text-cyan-400 bg-cyan-500/10",
    Protocol: "border-emerald-500/30 text-emerald-400 bg-emerald-500/10",
    Database: "border-amber-500/30 text-amber-400 bg-amber-500/10",
    Tool: "border-slate-700/60 text-slate-300 bg-slate-800/40",
    Cloud: "border-sky-500/30 text-sky-400 bg-sky-500/10",
  }[category] || "border-slate-700/60 text-slate-300 bg-slate-800/40";

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
