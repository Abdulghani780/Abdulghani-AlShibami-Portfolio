"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  padding?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
}

const sizeStyles: Record<string, string> = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-7xl",
  xl: "max-w-[1440px]",
  full: "max-w-full",
};

const paddingStyles: Record<string, string> = {
  none: "px-0",
  xs: "px-3",
  sm: "px-4",
  md: "px-5 sm:px-8",
  lg: "px-5 sm:px-8 md:px-12",
  xl: "px-5 sm:px-8 md:px-12 lg:px-16",
  "2xl": "px-5 sm:px-8 md:px-16 lg:px-20",
};

export function Container({
  as: Component = "div",
  className,
  children,
  size = "xl",
  padding = "lg",
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "w-full mx-auto",
        sizeStyles[size],
        paddingStyles[padding],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}