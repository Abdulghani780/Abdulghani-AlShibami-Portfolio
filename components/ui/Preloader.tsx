"use client";

import React, { useEffect, useState } from "react";
import { AsMonogram } from "@/components/ui/AsLogo";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { tokens } from "@/lib/design-system/tokens";

const STORAGE_KEY = "as-preloader-seen";
const VISIBLE_MS = 900;
const FAILSAFE_MS = 2500;

export function Preloader() {
  const reducedMotion = useReducedMotion();
  const [phase, setPhase] = useState<"checking" | "visible" | "exiting" | "done">("checking");

  useEffect(() => {
    // Synchronous matchMedia check — the hook's state lags one render
    // and could flash the overlay for reduced-motion users.
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || reducedMotion) {
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        // storage unavailable — preloader simply never shows
      }
      setPhase("done");
      return;
    }

    let seen = false;
    try {
      seen = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      seen = true; // storage blocked → skip preloader entirely
    }
    if (seen) {
      setPhase("done");
      return;
    }

    setPhase("visible");

    const exitTimer = setTimeout(() => {
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        // ignore
      }
      setPhase("exiting");
    }, VISIBLE_MS);

    // Failsafe: force-unmount if the exit transition never completes
    const failsafe = setTimeout(() => setPhase("done"), FAILSAFE_MS);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(failsafe);
    };
  }, [reducedMotion]);

  if (phase === "checking" || phase === "done") {
    return null;
  }

  // Use design tokens for colors and transitions
  const isDark = typeof window !== "undefined" && document.documentElement.classList.contains("dark");
  const bgColor = isDark ? tokens.colors.dark.background : tokens.colors.light.background;
  const goldColor = isDark ? tokens.colors.dark.brand : tokens.colors.light.brand;
  const textColor = isDark ? tokens.colors.dark.textPrimary : tokens.colors.light.textPrimary;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        phase === "exiting" ? "-translate-y-full" : "translate-y-0"
      }`}
      style={{ backgroundColor: bgColor }}
      onTransitionEnd={(e) => {
        if (phase === "exiting" && e.propertyName === "transform") {
          setPhase("done");
        }
      }}
    >
      <div className="flex flex-col items-center gap-6">
        <AsMonogram size={72} />
        <span
          className="inline-block font-mono text-[10px] sm:text-[11px] tracking-[0.45em] uppercase slide-in-up"
          style={{ 
            color: goldColor,
            animationDelay: "150ms"
          }}
        >
          Abdulghani Al-Shibami
        </span>
      </div>
      {/* Gold hairline accent using design token gradient */}
      <div className="absolute bottom-16 inset-x-0 flex justify-center">
        <div 
          className="h-px w-40" 
          style={{ 
            background: `linear-gradient(90deg, transparent 0%, ${goldColor} 50%, transparent 100%)` 
          }} 
        />
      </div>
    </div>
  );
}

// Preloader variant for specific use cases
export const PreloaderVariants = {
  minimal: () => (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-canvas" aria-hidden="true">
      <AsMonogram size={64} />
    </div>
  ),
  withProgress: (progress: number) => (
    <div className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-canvas" aria-hidden="true">
      <AsMonogram size={72} />
      <div className="mt-8 w-64 h-1 bg-surface-interactive rounded-full overflow-hidden">
        <div 
          className="h-full bg-gold transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ width: `${Math.min(Math.max(progress, 0), 100)}%` }}
        />
      </div>
    </div>
  ),
} as const;