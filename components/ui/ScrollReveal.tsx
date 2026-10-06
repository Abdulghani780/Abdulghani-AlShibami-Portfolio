"use client";

import React, { CSSProperties } from "react";
import { useInView } from "@/lib/hooks/useInView";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

export interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  distance?: number;
  isRtl?: boolean;
  className?: string;
  threshold?: number;
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
}: ScrollRevealProps) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold, once: true });
  const reducedMotion = useReducedMotion();

  // If user prefers reduced motion, bypass transformation and transition
  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  // Calculate direction offsets (with RTL logical mirroring for left/right)
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

  const style: CSSProperties = {
    opacity: isInView ? 1 : 0,
    transform: isInView ? "translate3d(0, 0, 0)" : initialTransform,
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    willChange: isInView ? "auto" : "opacity, transform",
  };

  return (
    <div ref={ref} style={style} className={`transition-all ${className}`}>
      {children}
    </div>
  );
}
