"use client";

import React, { useEffect, useState, useRef } from "react";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

export function MagneticCursor() {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [isPointerDevice, setIsPointerDevice] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [cursorText, setCursorText] = useState<string | null>(null);

  // Real mouse coordinates
  const mousePos = useRef({ x: -100, y: -100 });
  // Damped ring coordinates
  const ringPos = useRef({ x: -100, y: -100 });

  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const auraRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMounted(true);
    const media = window.matchMedia("(pointer: fine)");
    setIsPointerDevice(media.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsPointerDevice(e.matches);
    };

    media.addEventListener("change", handleMediaChange);
    return () => media.removeEventListener("change", handleMediaChange);
  }, []);

  const cursorActive = mounted && isPointerDevice && !prefersReducedMotion;

  useEffect(() => {
    const root = document.documentElement;
    if (cursorActive) {
      root.classList.add("custom-cursor-active");
    } else {
      root.classList.remove("custom-cursor-active");
    }
    return () => root.classList.remove("custom-cursor-active");
  }, [cursorActive]);

  useEffect(() => {
    if (!cursorActive) return;

    let animFrame: number;

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Check if hovering over clickable or custom element
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest("a, button, input, textarea, [role='button'], [data-magnetic]");
        const textTarget = target.closest("[data-cursor-text]") as HTMLElement | null;

        setIsHovered(!!interactive);
        setCursorText(textTarget ? textTarget.getAttribute("data-cursor-text") : null);
      }
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });
    window.addEventListener("mouseup", onMouseUp, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    // Physics loop with lerp easing
    const loop = () => {
      const { x: targetX, y: targetY } = mousePos.current;

      // Update center dot instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
      }

      // Smooth damped lerp for trailing ring and aura (factor: 0.16)
      const currentX = ringPos.current.x;
      const currentY = ringPos.current.y;
      const nextX = currentX + (targetX - currentX) * 0.16;
      const nextY = currentY + (targetY - currentY) * 0.16;
      ringPos.current = { x: nextX, y: nextY };

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${nextX}px, ${nextY}px, 0)`;
      }

      if (auraRef.current) {
        auraRef.current.style.transform = `translate3d(${nextX}px, ${nextY}px, 0)`;
      }

      animFrame = requestAnimationFrame(loop);
    };

    animFrame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [cursorActive, isVisible]);

  if (!cursorActive) {
    return null;
  }

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden="true"
    >
      {/* Ambient Large Gold Studio Flashlight Aura */}
      <div
        ref={auraRef}
        className="absolute -top-[100px] -left-[100px] w-[200px] h-[200px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,rgba(212,175,55,0.015)_50%,transparent_70%)] blur-xl pointer-events-none will-change-transform"
      />

      {/* Trailing Fluid Luxury Ring */}
      <div
        ref={ringRef}
        className={`absolute -top-4 -left-4 w-8 h-8 rounded-full border transition-[border-color,background-color,width,height,transform-origin] duration-200 pointer-events-none flex items-center justify-center will-change-transform ${
          cursorText
            ? "w-24 h-8 -top-4 -left-12 rounded-full border-[#D4AF37] bg-black/85 backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.4)]"
            : isHovered
            ? "w-12 h-12 -top-6 -left-6 border-[#F3E5AB]/80 bg-[#D4AF37]/10 shadow-[0_0_15px_rgba(212,175,55,0.3)]"
            : isClicked
            ? "w-7 h-7 -top-[14px] -left-[14px] border-[#D4AF37] bg-[#D4AF37]/20 scale-90"
            : "border-[#D4AF37]/30 bg-transparent"
        }`}
      >
        {cursorText && (
          <span className="font-mono text-[9px] uppercase tracking-wider text-[#F3E5AB] font-bold">
            {cursorText}
          </span>
        )}
      </div>

      {/* Razor-Sharp Center Gold Node */}
      <div
        ref={dotRef}
        className={`absolute -top-1 -left-1 w-2 h-2 rounded-full bg-[#E2C366] shadow-[0_0_8px_#D4AF37] pointer-events-none transition-transform duration-75 will-change-transform ${
          isHovered ? "scale-150 bg-white" : isClicked ? "scale-75" : "scale-100"
        }`}
      />
    </div>
  );
}
