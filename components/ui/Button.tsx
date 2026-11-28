"use client";

import React from "react";
import { cn } from "@/lib/utils";
import {
  type ButtonVariant,
  type ButtonSize,
} from "@/lib/design-system/components";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  iconOnly?: boolean;
  "aria-label"?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      loading = false,
      disabled = false,
      fullWidth = false,
      startIcon,
      endIcon,
      iconOnly = false,
      children,
      type = "button",
      "aria-label": ariaLabel,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-sans font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer rounded-xl";

    const variantStyles: Record<ButtonVariant, string> = {
      primary:
        "bg-gold text-surface-elevated font-bold border border-gold hover:bg-gold-hover hover:shadow-gold-md dark:hover:shadow-gold-md active:scale-[0.98] active:bg-gold-dark",
      secondary:
        "bg-surface-interactive text-text-primary border border-border hover:border-gold/50 hover:text-gold hover:bg-surface-overlay active:scale-[0.98]",
      ghost:
        "bg-transparent text-text-secondary hover:text-gold hover:bg-gold-subtle border border-transparent active:scale-[0.98]",
      outline:
        "bg-transparent text-gold border border-gold/40 hover:border-gold hover:bg-gold-subtle active:scale-[0.98]",
      destructive:
        "bg-transparent text-status-error border border-status-error/40 hover:bg-status-error/10 hover:border-status-error active:scale-[0.98]",
      link:
        "bg-transparent text-gold underline-offset-2 hover:underline border border-transparent p-0",
    };

    const sizeStyles: Record<ButtonSize, string> = {
      sm: "h-10 px-3.5 text-xs gap-1.5 min-w-[44px]",
      md: "h-11 px-5 text-sm gap-2",
      lg: "h-13 px-7 text-base gap-2.5",
      icon: "h-11 w-11 p-0",
      "icon-lg": "h-13 w-13 p-0",
    };

    const loadingStyles = "relative pr-8";
    const iconOnlyStyles = "p-0 aspect-square";

    const combinedStyles = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      fullWidth && "w-full",
      loading && loadingStyles,
      iconOnly && iconOnlyStyles,
      className
    );

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        type={type}
        aria-label={iconOnly ? ariaLabel : undefined}
        aria-busy={loading}
        className={combinedStyles}
        {...props}
      >
        {loading && (
          <span
            className="absolute right-3 inline-flex h-4 w-4 animate-spin text-current"
            aria-hidden="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </svg>
          </span>
        )}
        {!loading && startIcon && (
          <span className="inline-flex shrink-0" aria-hidden="true">
            {startIcon}
          </span>
        )}
        {!iconOnly && <span>{children}</span>}
        {!loading && endIcon && (
          <span className="inline-flex shrink-0" aria-hidden="true">
            {endIcon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";