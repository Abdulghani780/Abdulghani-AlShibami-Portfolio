"use client";

import React, { useRef, useState, MouseEvent } from "react";
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

  if (reducedMotion) {
    return <span className={className}>{children}</span>;
  }

  const handleMouseMove = (e: MouseEvent<HTMLSpanElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) * strength;
    const dy = (e.clientY - cy) * strength;
    setOffset({
      x: Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, dx)),
      y: Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, dy)),
    });
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
    setHovering(false);
  };

  return (
    <span
      ref={ref}
      data-magnetic=""
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-flex will-change-transform ${className}`}
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
