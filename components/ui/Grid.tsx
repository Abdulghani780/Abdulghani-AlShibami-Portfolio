"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: number | Partial<Record<"sm" | "md" | "lg" | "xl" | "2xl", number>>;
  gap?: keyof typeof spacing | Partial<Record<"sm" | "md" | "lg" | "xl" | "2xl", keyof typeof spacing>>;
  rows?: number;
  flow?: "row" | "column" | "dense";
  as?: React.ElementType;
}

const spacing = {
  0: "gap-0",
  1: "gap-1",
  2: "gap-2",
  3: "gap-3",
  4: "gap-4",
  5: "gap-5",
  6: "gap-6",
  8: "gap-8",
  10: "gap-10",
  12: "gap-12",
  16: "gap-16",
};

function getGapClass(gap?: GridProps["gap"]): string {
  if (!gap) return "gap-6";
  if (typeof gap === "string") return spacing[gap as keyof typeof spacing] || `gap-[${gap}]`;
  // Responsive gap object
  return Object.entries(gap)
    .map(([breakpoint, value]) => {
      const prefix = breakpoint === "sm" ? "sm:" : breakpoint === "md" ? "md:" : breakpoint === "lg" ? "lg:" : breakpoint === "xl" ? "xl:" : "2xl:";
      return `${prefix}${spacing[value as keyof typeof spacing] || `gap-[${value}]`}`;
    })
    .join(" ");
}

function getColumnsClass(columns?: GridProps["columns"]): string {
  if (!columns) return "grid-cols-1";
  if (typeof columns === "number") return `grid-cols-${columns}`;
  // Responsive columns object
  return Object.entries(columns)
    .map(([breakpoint, value]) => {
      const prefix = breakpoint === "sm" ? "sm:" : breakpoint === "md" ? "md:" : breakpoint === "lg" ? "lg:" : breakpoint === "xl" ? "xl:" : "2xl:";
      return `${prefix}grid-cols-${value}`;
    })
    .join(" ");
}

export function Grid({
  className,
  columns,
  gap,
  rows,
  flow = "row",
  as: Component = "div",
  children,
  style,
  ...props
}: GridProps) {
  const gridStyles = cn(
    "grid",
    getColumnsClass(columns),
    getGapClass(gap),
    rows && `grid-rows-${rows}`,
    flow !== "row" && `grid-flow-${flow}`,
    className
  );

  return (
    <Component
      className={gridStyles}
      style={{
        ...style,
        ...(columns && typeof columns === "number" && { "--grid-cols": columns }),
        ...(gap && typeof gap === "string" && { "--grid-gap": gap }),
      }}
      {...props}
    >
      {children}
    </Component>
  );
}

// Pre-configured grid layouts
export const GridPresets = {
  // 1/2/3/4 column responsive
  responsive: { columns: { sm: 1, md: 2, lg: 3, xl: 4 }, gap: 6 },
  // 1/2/3 column responsive
  triple: { columns: { sm: 1, md: 2, lg: 3 }, gap: 6 },
  // 1/2 column responsive
  double: { columns: { sm: 1, md: 2 }, gap: 6 },
  // Single column
  single: { columns: 1, gap: 6 },
  // Auto-fit for cards
  autoFit: (minWidth = "280px") => ({
    className: `grid grid-cols-[repeat(auto-fit,minmax(${minWidth},1fr))] gap-6`,
  }),
  // Auto-fill for equal items
  autoFill: (minWidth = "200px") => ({
    className: `grid grid-cols-[repeat(auto-fill,minmax(${minWidth},1fr))] gap-6`,
  }),
} as const;