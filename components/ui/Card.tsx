"use client";

import React from "react";
import { cn } from "@/lib/utils";
import {
  type CardElevation,
} from "@/lib/design-system/components";

type CardDivProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'>;
type CardAnchorProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'target' | 'rel'>;

export interface CardProps extends CardDivProps {
  elevation?: CardElevation;
  interactive?: boolean;
  hoverEffect?: boolean; // Alias for interactive
  selected?: boolean;
  padding?: keyof typeof spacing | "none";
  onClick?: () => void;
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  cornerBrackets?: boolean;
}

const spacing = {
  none: "p-0",
  xs: "p-3",
  sm: "p-4",
  md: "p-5",
  lg: "p-6",
  xl: "p-8",
  "2xl": "p-10",
} as const;

export function Card({
  className,
  elevation = "base",
  interactive = false,
  hoverEffect = false,
  selected = false,
  padding = "lg",
  onClick,
  href,
  target,
  cornerBrackets = false,
  children,
  ...props
}: CardProps) {
  const elevationStyles: Record<CardElevation, string> = {
    base: "bg-surface-card border border-border shadow-sm",
    elevated: "bg-surface-card border border-border shadow-md",
    interactive: "bg-surface-card border border-border shadow-sm hover:shadow-lg hover:border-gold/50 transition-all duration-300",
    overlay: "bg-surface-card/80 backdrop-blur-lg border border-border/50 shadow-xl",
  };

  const paddingStyles: Record<string, string> = {
    none: "p-0",
    xs: "p-3",
    sm: "p-4",
    md: "p-5",
    lg: "p-6",
    xl: "p-8",
    "2xl": "p-10",
  };

  const interactiveStyles = (interactive || hoverEffect)
    ? "transition-all duration-300 hover:shadow-gold-md hover:border-gold/50 cursor-pointer active:scale-[0.99]"
    : "";

  const selectedStyles = selected
    ? "border-gold shadow-gold-sm ring-1 ring-gold/20"
    : "";

  const combinedStyles = cn(
    "relative rounded-2xl overflow-hidden",
    elevationStyles[elevation],
    paddingStyles[padding],
    interactiveStyles,
    selectedStyles,
    className
  );

  const cornerBracketsMarkup = (
    <>
      <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-gold pointer-events-none" />
      <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-gold pointer-events-none" />
      <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-gold pointer-events-none" />
      <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-gold pointer-events-none" />
    </>
  );

  // Render as link if href provided
  if (href) {
    // Filter props to only include valid anchor attributes
    // onClick is already extracted as a separate prop, so we just use the rest
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={combinedStyles}
        id={props.id}
        style={props.style}
        onMouseEnter={props.onMouseEnter as React.MouseEventHandler<HTMLAnchorElement> | undefined}
        onMouseLeave={props.onMouseLeave as React.MouseEventHandler<HTMLAnchorElement> | undefined}
        onFocus={props.onFocus as React.FocusEventHandler<HTMLAnchorElement> | undefined}
        onBlur={props.onBlur as React.FocusEventHandler<HTMLAnchorElement> | undefined}
        onKeyDown={props.onKeyDown as React.KeyboardEventHandler<HTMLAnchorElement> | undefined}
        onKeyUp={props.onKeyUp as React.KeyboardEventHandler<HTMLAnchorElement> | undefined}
        tabIndex={props.tabIndex}
      >
        {cornerBrackets && cornerBracketsMarkup}
        {children}
      </a>
    );
  }

  // Render as clickable div if onClick provided
  if (onClick) {
    return (
      <div
        onClick={onClick}
        tabIndex={0}
        role="button"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onClick();
          }
        }}
        className={combinedStyles}
        {...props}
      >
        {cornerBrackets && cornerBracketsMarkup}
        {children}
      </div>
    );
  }

  // Default render as div
  return (
    <div className={combinedStyles} {...props}>
      {cornerBrackets && cornerBracketsMarkup}
      {children}
    </div>
  );
}

// Compound components for Card composition
export interface CardHeaderProps {
  className?: string;
  children: React.ReactNode;
  action?: React.ReactNode;
  divider?: boolean;
}

export function CardHeader({ className, children, action, divider = false }: CardHeaderProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between",
        divider ? "pb-4 border-b border-border" : "pb-4",
        className
      )}
    >
      <div>{children}</div>
      {action && <div>{action}</div>}
    </div>
  );
}

export interface CardContentProps {
  className?: string;
  children: React.ReactNode;
}

export function CardContent({ className, children }: CardContentProps) {
  return <div className={cn(className)}>{children}</div>;
}

export interface CardFooterProps {
  className?: string;
  children: React.ReactNode;
  divider?: boolean;
  alignEnd?: boolean;
}

export function CardFooter({ className, children, divider = false, alignEnd = false }: CardFooterProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3",
        divider ? "pt-4 border-t border-border" : "pt-4",
        alignEnd ? "justify-end" : "justify-start",
        className
      )}
    >
      {children}
    </div>
  );
}