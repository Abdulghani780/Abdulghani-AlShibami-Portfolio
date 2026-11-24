"use client";

import React, { useEffect, useRef, useState, MouseEvent } from "react";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

export interface MagneticProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}

const MAX_OFFSET = 24;

export function Magnetic({ children, strength = 0.35, className = "" }: MagneticProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const reducedMotion = useReducedMotion();

  // Latest pointer position + rAF throttle so we setState at most once per frame
  const pointer = useRef<{ x: number; y: number } | null>(null);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, []);

  if (reducedMotion) {
    return <span className={className}>{children}</span>;
  }

  const flush = () => {
    rafId.current = null;
    const el = ref.current;
    const pos = pointer.current;
    if (!el || !pos) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const rawX = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, pos.x - cx));
    const rawY = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, pos.y - cy));
    setOffset({ x: rawX * strength, y: rawY * strength });
  };

  const handleMouseMove = (e: MouseEvent<HTMLSpanElement>) => {
    pointer.current = { x: e.clientX, y: e.clientY };
    if (rafId.current === null) {
      rafId.current = requestAnimationFrame(flush);
    }
    setHovering(true);
  };

  const handleMouseLeave = () => {
    pointer.current = null;
    if (rafId.current !== null) {
      cancelAnimationFrame(rafId.current);
      rafId.current = null;
    }
    setOffset({ x: 0, y: 0 });
    setHovering(false);
  };

  return (
    <span
      ref={ref}
      data-magnetic=""
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block will-change-transform ${className}`}
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
        transition: hovering
          ? "transform 200ms cubic-bezier(0.16, 1, 0.3, 1)"
          : "transform 400ms cubic-bezier(0.34, 1.56, 0.64, 1)",
      }}
    >
      {children}
    </span>
  );
}
