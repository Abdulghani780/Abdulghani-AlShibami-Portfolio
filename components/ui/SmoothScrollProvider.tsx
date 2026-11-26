"use client";

import React, { useEffect, useRef } from "react";
import Lenis, { type LenisOptions } from "lenis";
import { tokens } from "@/lib/design-system/tokens";

export interface SmoothScrollProviderProps {
  children: React.ReactNode;
  options?: Partial<LenisOptions>;
}

export function SmoothScrollProvider({ 
  children, 
  options = {} 
}: SmoothScrollProviderProps) {
  const lenisRef = useRef<Lenis | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const optionsRef = useRef(options);

  useEffect(() => {
    optionsRef.current = options;
  }, [options]);

  useEffect(() => {
    // Gracefully bypass if user prefers reduced motion
    if (typeof window === "undefined" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // Default configuration using design tokens
    const defaultOptions: LenisOptions = {
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.2,
      infinite: false,
      autoRaf: false,
      ...optionsRef.current,
    };

    const lenis = new Lenis(defaultOptions);
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      animationFrameRef.current = requestAnimationFrame(raf);
    }

    animationFrameRef.current = requestAnimationFrame(raf);

    // Expose lenis instance globally for scroll-triggered animations
    if (typeof window !== "undefined") {
      (window as Window & { __lenis__?: Lenis }).__lenis__ = lenis;
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      lenis.destroy();
      if (typeof window !== "undefined") {
        delete (window as Window & { __lenis__?: Lenis }).__lenis__;
      }
    };
  }, []);

  return <>{children}</>;
}

// Helper hook to access Lenis instance
export function useLenis() {
  if (typeof window === "undefined") return null;
  return (window as Window & { __lenis__?: Lenis }).__lenis__ ?? null;
}

// Scroll utility functions using design tokens
export const scrollUtils = {
  // Scroll to element with design token easing
  scrollTo: (target: string | HTMLElement | number, options?: { duration?: number; easing?: (t: number) => number; offset?: number }) => {
    const lenis = (window as Window & { __lenis__?: Lenis }).__lenis__;
    if (!lenis) return;
    
    lenis.scrollTo(target, {
      duration: tokens.duration.pageTransition ? parseFloat(tokens.duration.pageTransition) / 1000 : 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      ...options,
    });
  },

  // Stop all scrolling
  stop: () => {
    const lenis = (window as Window & { __lenis__?: Lenis }).__lenis__;
    if (lenis) lenis.stop();
  },

  // Start scrolling again
  start: () => {
    const lenis = (window as Window & { __lenis__?: Lenis }).__lenis__;
    if (lenis) lenis.start();
  },

  // Check if scrolling is stopped
  isStopped: () => {
    const lenis = (window as Window & { __lenis__?: Lenis }).__lenis__;
    return lenis?.isStopped ?? false;
  },
} as const;

// Configuration presets matching design tokens
export const SmoothScrollPresets = {
  default: {
    duration: 1.15,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: "vertical" as const,
    gestureOrientation: "vertical" as const,
    smoothWheel: true,
    wheelMultiplier: 0.95,
    touchMultiplier: 1.2,
  },
  
  fast: {
    duration: 0.8,
    easing: (t: number) => 1 - Math.pow(1 - t, 4),
    orientation: "vertical" as const,
    gestureOrientation: "vertical" as const,
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.5,
  },

  gentle: {
    duration: 1.5,
    easing: (t: number) => t * (2 - t),
    orientation: "vertical" as const,
    gestureOrientation: "vertical" as const,
    smoothWheel: true,
    wheelMultiplier: 0.8,
    touchMultiplier: 1,
  },

  // For horizontal scroll sections
  horizontal: {
    duration: 1.15,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: "horizontal" as const,
    gestureOrientation: "horizontal" as const,
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.2,
  },
} as const;