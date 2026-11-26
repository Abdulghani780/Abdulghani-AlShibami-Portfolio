"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "row" | "col" | "row-reverse" | "col-reverse";
  align?: "start" | "center" | "end" | "stretch" | "baseline";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  gap?: keyof typeof spacing;
  wrap?: boolean;
  flex?: number | string;
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

const directionMap = {
  row: "flex-row",
  col: "flex-col",
  "row-reverse": "flex-row-reverse",
  "col-reverse": "flex-col-reverse",
};

const alignMap = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
  baseline: "items-baseline",
};

const justifyMap = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
};

export function Flex({
  className,
  direction = "row",
  align = "stretch",
  justify = "start",
  gap = 4,
  wrap = false,
  flex,
  as: Component = "div",
  children,
  style,
  ...props
}: FlexProps) {
  const flexStyles = cn(
    "flex",
    directionMap[direction],
    alignMap[align],
    justifyMap[justify],
    spacing[gap] || `gap-[${gap}]`,
    wrap && "flex-wrap",
    className
  );

  return (
    <Component
      className={flexStyles}
      style={{
        ...style,
        ...(flex !== undefined && { flex: String(flex) }),
      }}
      {...props}
    >
      {children}
    </Component>
  );
}

// InlineFlex for inline-flex display
export interface InlineFlexProps extends FlexProps {}

export function InlineFlex({
  className,
  direction = "row",
  align = "center",
  justify = "start",
  gap = 2,
  wrap = false,
  as: Component = "div",
  children,
  ...props
}: InlineFlexProps) {
  return (
    <Flex
      as={Component}
      className={cn("inline-flex", className)}
      direction={direction}
      align={align}
      justify={justify}
      gap={gap}
      wrap={wrap}
      {...props}
    >
      {children}
    </Flex>
  );
}

// Center - shorthand for centered content
export interface CenterProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
}

export function Center({ as: Component = "div", className, children, ...props }: CenterProps) {
  return (
    <Flex as={Component} align="center" justify="center" className={cn("min-h-[200px]", className)} {...props}>
      {children}
    </Flex>
  );
}