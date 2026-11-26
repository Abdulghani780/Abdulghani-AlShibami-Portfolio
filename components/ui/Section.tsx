"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Container, ContainerProps } from "@/components/ui/Container";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: "none" | "sm" | "md" | "lg" | "xl" | "2xl";
  background?: "default" | "muted" | "brand" | "gradient";
  gradient?: "gold-primary" | "gold-subtle" | "gold-edge" | "gold-radial" | "mesh-dark" | "mesh-light";
  container?: boolean | ContainerProps;
  as?: React.ElementType;
}

const spacingStyles = {
  none: "py-0",
  sm: "py-12 sm:py-16",
  md: "py-16 sm:py-20 lg:py-24",
  lg: "py-20 sm:py-24 lg:py-32",
  xl: "py-24 sm:py-32 lg:py-40",
  "2xl": "py-32 sm:py-40 lg:py-48",
};

const backgroundStyles = {
  default: "bg-canvas",
  muted: "bg-surface-secondary",
  brand: "bg-gradient-gold-subtle",
  gradient: "bg-gradient-gold-subtle",
};

const gradientStyles = {
  "gold-primary": "bg-gradient-gold",
  "gold-subtle": "bg-gradient-gold-subtle",
  "gold-edge": "bg-gradient-gold-edge",
  "gold-radial": "bg-gradient-gold-radial",
  "mesh-dark": "bg-mesh",
  "mesh-light": "bg-mesh dark:bg-mesh",
};

export function Section({
  className,
  spacing = "lg",
  background = "default",
  gradient,
  container = true,
  as: Component = "section",
  children,
  ...props
}: SectionProps) {
  const sectionStyles = cn(
    "relative w-full overflow-hidden",
    spacingStyles[spacing],
    backgroundStyles[background],
    gradient && gradientStyles[gradient],
    className
  );

  const containerProps = container === true ? {} : container;

  const content = (
    <>
      {gradient && (
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute inset-0" style={{ background: `var(--gradient-${gradient})` }} />
        </div>
      )}
      <div className="relative z-10">{children}</div>
    </>
  );

  if (container) {
    return (
      <Component className={sectionStyles} {...props}>
        <Container {...containerProps}>{content}</Container>
      </Component>
    );
  }

  return (
    <Component className={sectionStyles} {...props}>
      {content}
    </Component>
  );
}

// Section divider with gold edge flow
export interface SectionDividerProps {
  className?: string;
  animated?: boolean;
}

export function SectionDivider({ className, animated = true }: SectionDividerProps) {
  return (
    <div
      className={cn(
        "relative h-px w-full",
        className
      )}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      {animated && (
        <div className="absolute inset-0 gold-edge-flow" aria-hidden="true" />
      )}
    </div>
  );
}