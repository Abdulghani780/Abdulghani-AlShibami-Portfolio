"use client";

import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  label?: string;
  description?: string;
  switchSize?: "sm" | "md" | "lg";
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      className,
      label,
      description,
      switchSize = "md",
      id,
      disabled,
      required,
      checked,
      onChange,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const switchId = id || `switch-${generatedId}`;

    const sizeStyles = {
      sm: "w-8 h-5",
      md: "w-11 h-6",
      lg: "w-14 h-8",
    };

    const thumbSizeStyles = {
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-6 h-6",
    };

    const thumbTranslateStyles = {
      sm: "peer-checked:translate-x-4",
      md: "peer-checked:translate-x-5",
      lg: "peer-checked:translate-x-6",
    };

    const baseStyles = cn(
      "relative inline-flex flex-shrink-0 cursor-pointer rounded-full border-2",
      "transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "bg-surface-interactive border-border",
      "peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-gold peer-focus-visible:ring-offset-2",
      "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
      "peer-checked:bg-gold peer-checked:border-gold peer-checked:shadow-gold-sm",
      "peer-hover:not(:disabled):border-gold/50",
      sizeStyles[switchSize],
      className
    );

    const thumbStyles = cn(
      "absolute top-1/2 left-1 -translate-y-1/2 rounded-full bg-surface-elevated shadow-lg",
      "transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]",
      "peer-checked:shadow-gold-sm",
      thumbSizeStyles[switchSize],
      thumbTranslateStyles[switchSize]
    );

    const labelStyles = "ml-3 text-body text-text-primary leading-relaxed flex items-center";
    const descriptionStyles = "ml-7 text-body-sm text-text-muted";

    const handleToggle = () => {
      if (!disabled && onChange) {
        onChange({ target: { checked: !checked } } as React.ChangeEvent<HTMLInputElement>);
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        handleToggle();
      }
    };

    return (
      <div className="flex items-start gap-0">
        <button
          role="switch"
          type="button"
          id={switchId}
          disabled={disabled}
          aria-checked={checked || false}
          aria-describedby={description ? `${switchId}-desc` : undefined}
          aria-required={required}
          className={cn(baseStyles, "peer")}
          onClick={handleToggle}
          onKeyDown={handleKeyDown}
        >
          <span className={thumbStyles} aria-hidden="true" />
        </button>
        <input
          ref={ref}
          type="checkbox"
          id={`${switchId}-input`}
          checked={checked}
          disabled={disabled}
          required={required}
          className="sr-only"
          onChange={onChange}
          tabIndex={-1}
          aria-hidden="true"
        />
        {(label || description) && (
          <div className="flex flex-col">
            {label && <label htmlFor={switchId} className={labelStyles}>{label}</label>}
            {description && <p id={`${switchId}-desc`} className={descriptionStyles}>{description}</p>}
          </div>
        )}
      </div>
    );
  }
);

Switch.displayName = "Switch";