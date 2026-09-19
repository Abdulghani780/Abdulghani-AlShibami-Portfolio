import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger" | "gold-outline" | "glass";
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
      "inline-flex items-center justify-center font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer rounded-lg";

    const variantStyles = {
      primary:
        "bg-gold text-black dark:text-black font-bold border border-gold hover:bg-gold-light hover:shadow-gold dark:hover:shadow-gold active:scale-[0.98]",
      secondary:
        "bg-glass-subtle backdrop-blur-md text-content-primary border border-hairline hover:border-gold/50 hover:text-gold dark:hover:bg-glass-medium active:scale-[0.98]",
      ghost:
        "bg-transparent text-content-secondary hover:text-gold hover:bg-glass-subtle border border-transparent active:scale-[0.98]",
      "gold-outline":
        "bg-transparent text-gold border border-gold/40 hover:border-gold hover:bg-gold/10 active:scale-[0.98]",
      glass:
        "bg-glass-medium backdrop-blur-glass text-content-primary border border-glass-border hover:border-gold/40 hover:bg-glass-strong active:scale-[0.98]",
      danger:
        "bg-transparent text-status-rose border border-status-rose/40 hover:bg-status-rose/10 hover:border-status-rose active:scale-[0.98]",
    };

    const sizeStyles = {
      sm: "h-9 px-3.5 text-[11px] gap-1.5",
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
