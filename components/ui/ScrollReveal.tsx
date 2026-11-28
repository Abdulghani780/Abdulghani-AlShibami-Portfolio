"use client";

import React, { CSSProperties } from "react";
import { useInView } from "@/lib/hooks/useInView";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

export interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  distance?: number;
  isRtl?: boolean;
  className?: string;
  threshold?: number;
  once?: boolean;
  style?: CSSProperties;
}

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 700,
  distance = 18,
  isRtl = false,
  className = "",
  threshold = 0.15,
  once = true,
  style,
}: ScrollRevealProps) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold, once });
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className} style={style}>{children}</div>;
  }

  let initialTransform = "none";
  if (direction === "up") {
    initialTransform = `translate3d(0, ${distance}px, 0)`;
  } else if (direction === "down") {
    initialTransform = `translate3d(0, -${distance}px, 0)`;
  } else if (direction === "left") {
    const xDist = isRtl ? -distance : distance;
    initialTransform = `translate3d(${xDist}px, 0, 0)`;
  } else if (direction === "right") {
    const xDist = isRtl ? distance : -distance;
    initialTransform = `translate3d(${xDist}px, 0, 0)`;
  }

  const computedStyle: CSSProperties = {
    ...style,
    opacity: isInView ? 1 : 0,
    transform: isInView ? "translate3d(0, 0, 0)" : initialTransform,
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)", // gold easing
    willChange: isInView ? "auto" : "opacity, transform",
  };

  return (
    <div
      ref={ref}
      style={computedStyle}
      className={cn("transition-all", className)}
    >
      {children}
    </div>
  );
}

// Pre-configured reveal variants for consistency
export const RevealPresets = {
  fadeUp: (delay = 0) => ({ direction: "up" as const, delay, distance: 20, duration: 600 }),
  fadeDown: (delay = 0) => ({ direction: "down" as const, delay, distance: 20, duration: 600 }),
  fadeLeft: (delay = 0, isRtl = false) => ({ direction: "left" as const, delay, distance: 20, duration: 600, isRtl }),
  fadeRight: (delay = 0, isRtl = false) => ({ direction: "right" as const, delay, distance: 20, duration: 600, isRtl }),
  stagger: (index: number, baseDelay = 0, staggerDelay = 60) => ({ delay: baseDelay + index * staggerDelay }),
} as const;