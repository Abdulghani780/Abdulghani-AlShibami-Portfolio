"use client";

import React, { useEffect, useState } from "react";
import { AsMonogram } from "@/components/ui/AsLogo";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

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

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#0B0B0C] transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        phase === "exiting" ? "-translate-y-full" : "translate-y-0"
      }`}
      onTransitionEnd={(e) => {
        if (phase === "exiting" && e.propertyName === "transform") {
          setPhase("done");
        }
      }}
    >
      <div className="flex flex-col items-center gap-6 cinematic-reveal">
        <AsMonogram size={72} />
        <span
          className="inline-block font-mono text-[10px] sm:text-[11px] tracking-[0.45em] uppercase text-[#E2C366] slide-in-up"
          style={{ animationDelay: "150ms" }}
        >
          Abdulghani Al-Shibami
        </span>
      </div>
      {/* Gold hairline accent */}
      <div className="absolute bottom-16 inset-x-0 flex justify-center">
        <div className="h-px w-40 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
      </div>
    </div>
  );
}
