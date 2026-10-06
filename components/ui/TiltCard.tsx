"use client";

import React, { useRef, useState, MouseEvent } from "react";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

export interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glowColor?: string;
  cursorText?: string;
}

export function TiltCard({
  children,
  className = "",
  maxTilt = 5,
  glowColor = "rgba(212, 175, 55, 0.16)",
  cursorText,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)");
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, opacity: 0, angle: 0 });
  const reducedMotion = useReducedMotion();

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;
    const angle = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI) + 90;

    setTransform(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(8px)`);
    setSpotlight({
      x: Math.round((x / rect.width) * 100),
      y: Math.round((y / rect.height) * 100),
      opacity: 1,
      angle: Math.round(angle),
    });
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)");
    setSpotlight((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-cursor-text={cursorText}
      style={{
        transform: reducedMotion ? "none" : transform,
        transformStyle: "preserve-3d",
        transition: "transform 280ms cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className={`relative overflow-hidden group [transform-style:preserve-3d] ${className}`}
    >
      {/* Dynamic Conic Specular Border Light */}
      <div
        className="pointer-events-none absolute -inset-[1px] rounded-[inherit] z-20 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{
          opacity: spotlight.opacity * 0.7,
          background: `conic-gradient(from ${spotlight.angle}deg at ${spotlight.x}% ${spotlight.y}%, rgba(243, 229, 171, 0.45), transparent 25%, transparent 75%, rgba(212, 175, 55, 0.5) 100%)`,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: "1px",
        }}
        aria-hidden="true"
      />

      {/* Dynamic Cursor Spotlight Radial Sheen */}
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
        style={{
          opacity: spotlight.opacity,
          background: `radial-gradient(circle 320px at ${spotlight.x}% ${spotlight.y}%, ${glowColor}, transparent 65%)`,
        }}
        aria-hidden="true"
      />

      {/* Subtle Specular Glint Across Glass Surface */}
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{
          background: `linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 50%, rgba(212,175,55,0.02) 100%)`,
        }}
        aria-hidden="true"
      />

      {children}
    </div>
  );
}
