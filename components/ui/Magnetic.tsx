"use client";

import React, { useEffect, useRef, useState, MouseEvent } from "react";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

export interface MagneticProps {
  children: React.ReactElement;
  strength?: number;
  radius?: number;
  disabled?: boolean;
  className?: string;
}

const MAX_OFFSET = 24;

export function Magnetic({
  children,
  strength = 0.35,
  radius = 80,
  disabled = false,
  className = "",
}: MagneticProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const reducedMotion = useReducedMotion();

  const pointer = useRef<{ x: number; y: number } | null>(null);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, []);

  if (reducedMotion || disabled || !React.isValidElement(children)) {
    return <span className={cn("inline-block", className)}>{children}</span>;
  }

  const flush = () => {
    rafId.current = null;
    const el = ref.current;
    const pos = pointer.current;
    if (!el || !pos) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const distX = pos.x - cx;
    const distY = pos.y - cy;
    const dist = Math.sqrt(distX * distX + distY * distY);

    // Only apply magnetic effect within radius
    if (dist > radius) {
      setOffset({ x: 0, y: 0 });
      return;
    }

    const rawX = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, distX));
    const rawY = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, distY));
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

  const childElement = children as React.ReactElement<any>;
  const childProps = childElement.props as React.HTMLAttributes<HTMLElement> & { ref?: React.Ref<HTMLElement> };
  const childRef = childProps.ref;

  const childWithProps = React.cloneElement(childElement, {
    ref: (node: HTMLElement | null) => {
      ref.current = node;
      if (typeof childRef === "function") {
        childRef(node);
      } else if (childRef && typeof childRef === "object") {
        (childRef as React.MutableRefObject<HTMLElement | null>).current = node;
      }
    },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    className: cn(
      "inline-block will-change-transform",
      childProps.className,
      className
    ),
    style: {
      ...childProps.style,
      transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
      transition: hovering
        ? "transform 200ms cubic-bezier(0.16, 1, 0.3, 1)"
        : "transform 400ms cubic-bezier(0.34, 1.56, 0.64, 1)",
    },
  });

  return <span data-magnetic="">{childWithProps}</span>;
}