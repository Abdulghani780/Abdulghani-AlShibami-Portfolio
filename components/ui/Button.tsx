import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger" | "gold-outline";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "start" | "end";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      icon,
      iconPosition = "end",
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer";

    const variantStyles = {
      primary:
        "bg-canvas text-white border border-gold hover:bg-gold/10 hover:shadow-gold dark:bg-canvas dark:text-white dark:border-gold dark:hover:bg-gold/15 dark:hover:shadow-gold active:translate-y-[1px]",
      secondary:
        "bg-surface text-content-primary border border-hairline hover:border-gold hover:text-gold active:translate-y-[1px]",
      ghost:
        "bg-transparent text-content-primary hover:text-gold hover:bg-surface/50 border border-transparent active:translate-y-[1px]",
      "gold-outline":
        "bg-transparent text-gold border border-gold/40 hover:border-gold hover:bg-gold/10 active:translate-y-[1px]",
      danger:
        "bg-transparent text-status-rose border border-status-rose/40 hover:bg-status-rose/10 hover:border-status-rose active:translate-y-[1px]",
    };

    const sizeStyles = {
      sm: "h-8 px-3 text-[11px] gap-1.5",
      md: "h-11 px-5 text-xs gap-2",
      lg: "h-13 px-7 text-sm gap-2.5",
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        {icon && iconPosition === "start" && <span className="inline-flex shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === "end" && <span className="inline-flex shrink-0">{icon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";
