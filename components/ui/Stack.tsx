"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "vertical" | "horizontal";
  gap?: keyof typeof spacing;
  align?: "start" | "center" | "end" | "stretch";
  divider?: React.ReactNode;
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

export function Stack({
  className,
  direction = "vertical",
  gap = 4,
  align = "stretch",
  divider,
  as: Component = "div",
  children,
  ...props
}: StackProps) {
  const childrenArray = React.Children.toArray(children).filter(
    (child) => React.isValidElement(child) || typeof child === "string" || typeof child === "number"
  );

  const childrenWithDividers = divider
    ? childrenArray.flatMap((child, index) =>
        index === childrenArray.length - 1
          ? child
          : [child, <div key={`divider-${index}`} className="w-full h-px bg-border" aria-hidden="true" />]
      )
    : childrenArray;

  const alignMap = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
  };

  const stackStyles = cn(
    "flex",
    direction === "vertical" ? "flex-col" : "flex-row",
    alignMap[align],
    spacing[gap] || `gap-[${gap}]`,
    className
  );

  return (
    <Component className={stackStyles} {...props}>
      {childrenWithDividers}
    </Component>
  );
}

// VStack - vertical stack shorthand
export interface VStackProps extends Omit<StackProps, "direction"> {}

export function VStack({ className, gap = 4, align = "stretch", divider, children, ...props }: VStackProps) {
  return (
    <Stack direction="vertical" gap={gap} align={align} divider={divider} className={className} {...props}>
      {children}
    </Stack>
  );
}

// HStack - horizontal stack shorthand
export interface HStackProps extends Omit<StackProps, "direction"> {}

export function HStack({ className, gap = 4, align = "center", divider, children, ...props }: HStackProps) {
  return (
    <Stack direction="horizontal" gap={gap} align={align} divider={divider} className={className} {...props}>
      {children}
    </Stack>
  );
}