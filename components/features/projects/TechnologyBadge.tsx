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

  const categoryStyles = {
    Language: "border-brand/30 text-brand dark:text-brandLight bg-brand/10 dark:bg-brandLight/20",
    Framework: "border-border/20 text-foreground dark:text-foreground bg-surface dark:bg-surfaceElevated",
    Protocol: "border-status-success/30 text-status-success dark:text-status-success bg-status-successBg dark:bg-status-successBg",
    Database: "border-brand/30 text-brand dark:text-brandLight bg-brand/10 dark:bg-brandLight/20",
    Tool: "border-border/15 text-muted-foreground dark:text-muted-foreground bg-surface dark:bg-surfaceElevated",
    Cloud: "border-status-info/30 text-status-info dark:text-status-info bg-status-infoBg dark:bg-status-infoBg",
    Platform: "border-status-warning/30 text-status-warning dark:text-status-warning bg-status-warningBg dark:bg-status-warningBg",
    Library: "border-violet-500/30 text-violet-700 dark:text-violet-400 bg-violet-500/10 dark:bg-violet-900/30",
    Default: "border-border/15 text-muted-foreground dark:text-muted-foreground bg-surface dark:bg-surfaceElevated",
  };

  const styleKey = categoryStyles[category as keyof typeof categoryStyles] ? category : "Default";

  const sizeStyles = {
    xs: "px-3 py-1.5 text-[10px] min-h-[44px] min-w-[44px]",
    sm: "px-3 py-2 text-xs min-h-[44px] min-w-[44px]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center font-mono font-medium uppercase tracking-wider rounded-full border transition-colors",
        categoryStyles[styleKey],
        sizeStyles[size],
        className
      )}
    >
      {name}
    </span>
  );
};