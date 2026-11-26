"use client";

import React, { useEffect, useState } from "react";
import { useInView } from "@/lib/hooks/useInView";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { tokens } from "@/lib/design-system/tokens";

export interface CountUpProps {
  end: number;
  start?: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  easing?: keyof typeof tokens.easing;
  separator?: string;
}

export function CountUp({
  end,
  start = 0,
  duration = 1600,
  decimals = 0,
  prefix = "",
  suffix = "",
  className = "",
  easing = "easeOut",
  separator = ",",
}: CountUpProps) {
  const { ref, isInView } = useInView<HTMLSpanElement>({ threshold: 0.1, once: true });
  const reducedMotion = useReducedMotion();
  const [value, setValue] = useState(start);

  useEffect(() => {
    if (!isInView) return;

    if (reducedMotion) {
      setValue(end);
      return;
    }

    let startTime: number | null = null;
    let animationFrameId: number;

    // Easing functions from design tokens
    const easingFunctions: Record<keyof typeof tokens.easing, (t: number) => number> = {
      linear: (t: number) => t,
      easeIn: (t: number) => t * t * t * t,
      easeOut: (t: number) => 1 - Math.pow(1 - t, 4),
      easeInOut: (t: number) => (t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2),
      spring: (t: number) => 1 - Math.cos(t * Math.PI / 2),
      springGentle: (t: number) => t * (2 - t),
      gold: (t: number) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2,
      enter: (t: number) => 1 - Math.pow(1 - t, 3),
      exit: (t: number) => Math.pow(t, 3),
    };

    const easeFn = easingFunctions[easing] || easingFunctions.easeOut;

    const updateCounter = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = easeFn(progress);
      const currentValue = start + (end - start) * easedProgress;

      setValue(currentValue);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCounter);
      } else {
        setValue(end);
      }
    };

    animationFrameId = requestAnimationFrame(updateCounter);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, end, start, duration, reducedMotion, easing]);

  const formatted = decimals > 0
    ? value.toFixed(decimals)
    : Math.round(value).toLocaleString(undefined, { useGrouping: true, minimumFractionDigits: 0 });

  return (
    <span
      ref={ref}
      className={className}
      aria-live="polite"
      aria-atomic="true"
    >
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

// Pre-configured count-up variants matching design tokens
export const CountUpVariants = {
  hero: (end: number, props?: Partial<CountUpProps>) => (
    <CountUp
      end={end}
      duration={2000}
      easing="gold"
      className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tabular-nums text-text-primary"
      {...props}
    />
  ),
  stat: (end: number, props?: Partial<CountUpProps>) => (
    <CountUp
      end={end}
      duration={1600}
      easing="easeOut"
      className="font-display text-3xl sm:text-4xl font-bold tabular-nums text-text-primary"
      {...props}
    />
  ),
  metric: (end: number, props?: Partial<CountUpProps>) => (
    <CountUp
      end={end}
      duration={1200}
      easing="easeOut"
      className="font-mono-data text-xl font-medium tabular-nums text-text-primary"
      {...props}
    />
  ),
  compact: (end: number, props?: Partial<CountUpProps>) => (
    <CountUp
      end={end}
      duration={1000}
      easing="easeOut"
      className="font-mono-data text-lg font-medium tabular-nums text-text-primary"
      {...props}
    />
  ),
} as const;