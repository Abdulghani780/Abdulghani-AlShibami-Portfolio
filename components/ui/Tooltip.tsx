"use client";

import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { createPortal } from "react-dom";

export interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactElement;
  position?: "top" | "bottom" | "left" | "right";
  delay?: number;
  arrow?: boolean;
  className?: string;
}

export function Tooltip({
  content,
  children,
  position = "top",
  delay = 200,
  arrow = true,
  className,
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [tooltipRect, setTooltipRect] = useState<{ top: number; left: number; transform: string } | null>(null);
  const [arrowStyle, setArrowStyle] = useState<React.CSSProperties | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement>(null);

  const showTooltip = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsVisible(true), delay);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsVisible(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") hideTooltip();
  };

  // Position calculation
  useEffect(() => {
    if (!isVisible || !triggerRef.current || !tooltipRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipHeight = tooltipRef.current.offsetHeight;
    const tooltipWidth = tooltipRef.current.offsetWidth;
    const gap = 8;
    const arrowSize = 6;

    let top = 0;
    let left = 0;
    let transform = "";
    let arrowStyleLocal: React.CSSProperties = {};

    switch (position) {
      case "top":
        left = triggerRect.left + triggerRect.width / 2 - tooltipWidth / 2;
        top = triggerRect.top - tooltipHeight - gap;
        transform = "translateX(-50%)";
        arrowStyleLocal = { bottom: `-${arrowSize}px`, left: "50%", transform: "translateX(-50%) rotate(45deg)" };
        break;
      case "bottom":
        left = triggerRect.left + triggerRect.width / 2 - tooltipWidth / 2;
        top = triggerRect.bottom + gap;
        transform = "translateX(-50%)";
        arrowStyleLocal = { top: `-${arrowSize}px`, left: "50%", transform: "translateX(-50%) rotate(45deg)" };
        break;
      case "left":
        left = triggerRect.left - tooltipWidth - gap;
        top = triggerRect.top + triggerRect.height / 2 - tooltipHeight / 2;
        transform = "translateY(-50%)";
        arrowStyleLocal = { right: `-${arrowSize}px`, top: "50%", transform: "translateY(-50%) rotate(45deg)" };
        break;
      case "right":
        left = triggerRect.right + gap;
        top = triggerRect.top + triggerRect.height / 2 - tooltipHeight / 2;
        transform = "translateY(-50%)";
        arrowStyleLocal = { left: `-${arrowSize}px`, top: "50%", transform: "translateY(-50%) rotate(45deg)" };
        break;
    }

    // Boundary checks
    const viewportPadding = 16;
    if (left < viewportPadding) left = viewportPadding;
    if (left + tooltipWidth > window.innerWidth - viewportPadding) {
      left = window.innerWidth - tooltipWidth - viewportPadding;
    }
    if (top < viewportPadding) top = viewportPadding;
    if (top + tooltipHeight > window.innerHeight - viewportPadding) {
      top = window.innerHeight - tooltipHeight - viewportPadding;
    }

    setTooltipRect({ top, left, transform });
    setArrowStyle(arrowStyleLocal);
  }, [isVisible, position]);

  const tooltipContent = tooltipRect && (
    <div
      ref={tooltipRef}
      role="tooltip"
      className={cn(
        "fixed z-[9999] pointer-events-none",
        "glass-panel px-3 py-2 rounded-lg text-body-sm text-text-primary",
        "shadow-gold-lg border border-glass-gold-border",
        "animate-[fade-in_150ms_ease-out]",
        className
      )}
      style={{
        top: tooltipRect.top,
        left: tooltipRect.left,
        transform: tooltipRect.transform,
      }}
    >
      {content}
      {arrow && arrowStyle && (
        <div
          className="absolute w-2 h-2 bg-inherit rotate-45 border-l border-t border-inherit"
          style={arrowStyle}
          aria-hidden="true"
        />
      )}
    </div>
  );

  const childProps = children.props as React.HTMLAttributes<HTMLElement> & { ref?: React.Ref<HTMLElement> };
  const enhancedChild = React.cloneElement(children as React.ReactElement<any>, {
    ref: (node: HTMLElement | null) => {
      triggerRef.current = node;
      if (typeof childProps.ref === "function") {
        childProps.ref(node);
      } else if (childProps.ref && typeof childProps.ref === "object") {
        (childProps.ref as React.MutableRefObject<HTMLElement | null>).current = node;
      }
    },
    onMouseEnter: showTooltip,
    onMouseLeave: hideTooltip,
    onFocus: showTooltip,
    onBlur: hideTooltip,
    onKeyDown: handleKeyDown,
    tabIndex: 0,
  });

  return (
    <>
      <span>{enhancedChild}</span>
      {typeof window !== "undefined" && tooltipContent && createPortal(tooltipContent, document.body)}
    </>
  );
}

// Tooltip provider for global management
export interface TooltipProviderProps {
  children: React.ReactNode;
}

export function TooltipProvider({ children }: TooltipProviderProps) {
  return <div>{children}</div>;
}