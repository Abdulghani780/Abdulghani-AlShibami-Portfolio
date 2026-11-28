"use client";

import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  label?: string;
  description?: string;
  radioSize?: "sm" | "md" | "lg";
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      className,
      label,
      description,
      radioSize = "md",
      id,
      disabled,
      required,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const radioId = id || `radio-${generatedId}`;

    const sizeStyles = {
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
    };

    // Touch target wrapper sizes (44px minimum)
    const touchTargetStyles = {
      sm: "min-h-[44px] min-w-[44px]",
      md: "min-h-[44px] min-w-[44px]",
      lg: "min-h-[44px] min-w-[44px]",
    };

    const baseStyles = cn(
      "rounded-full border-2 flex-shrink-0",
      "transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "checked:border-gold checked:shadow-gold-sm",
      "hover:not(:disabled):border-gold/50",
      sizeStyles[radioSize],
      className
    );

    const wrapperStyles = cn(
      "relative flex items-center justify-center",
      touchTargetStyles[radioSize],
      "rounded-full"
    );

    const labelStyles = "ml-3 text-body text-text-primary leading-relaxed";
    const descriptionStyles = "ml-7 text-body-sm text-text-muted";

    return (
      <div className="flex items-start gap-0">
        <input
          ref={ref}
          type="radio"
          id={radioId}
          disabled={disabled}
          required={required}
          aria-describedby={description ? `${radioId}-desc` : undefined}
          className={cn(baseStyles, "sr-only peer")}
          {...props}
        />
        <div
          className={wrapperStyles}
          aria-hidden="true"
        >
          <div
            className={cn(
              sizeStyles[radioSize],
              "relative flex items-center justify-center",
              "rounded-full border-2",
              "transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]",
              "bg-surface-elevated border-border",
              "peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-gold peer-focus-visible:ring-offset-2",
              "peer-disabled:cursor-not-allowed peer-disabled:opacity-50 peer-disabled:bg-surface-interactive",
              "peer-checked:border-gold peer-checked:shadow-gold-sm",
              "peer-hover:not(:disabled):border-gold/50",
              "after:content-[''] after:absolute after:rounded-full after:bg-gold after:opacity-0 after:transition-all after:duration-200",
              "peer-checked:after:opacity-100",
              "sm:after:w-1.5 sm:after:h-1.5 md:after:w-2 md:after:h-2 lg:after:w-2.5 lg:after:h-2.5",
              className
            )}
          />
        </div>
        {(label || description) && (
          <div className="flex flex-col">
            {label && <label htmlFor={radioId} className={labelStyles}>{label}</label>}
            {description && <p id={`${radioId}-desc`} className={descriptionStyles}>{description}</p>}
          </div>
        )}
      </div>
    );
  }
);

Radio.displayName = "Radio";

// Radio Group
export interface RadioGroupProps {
  label?: string;
  helperText?: string;
  error?: string;
  options: Array<{
    value: string;
    label: string;
    description?: string;
    disabled?: boolean;
  }>;
  orientation?: "horizontal" | "vertical";
  name: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function RadioGroup({
  label,
  helperText,
  error,
  options,
  orientation = "vertical",
  name,
  value,
  onChange,
  className,
}: RadioGroupProps) {
  const groupId = `radio-group-${React.useId()}`;
  const errorId = error ? `${groupId}-error` : undefined;
  const helperId = helperText && !error ? `${groupId}-helper` : undefined;

  return (
    <fieldset className={cn("w-full", className)} aria-describedby={cn(errorId, helperId)}>
      {label && <legend className="text-caption text-text-secondary mb-3 font-medium">{label}</legend>}
      <div
        className={cn(
          "flex gap-4",
          orientation === "horizontal" ? "flex-wrap" : "flex-col"
        )}
        role="radiogroup"
        aria-labelledby={label ? undefined : groupId}
      >
        {options.map((option) => (
          <Radio
            key={option.value}
            id={`${groupId}-${option.value}`}
            name={name}
            value={option.value}
            checked={value === option.value}
            disabled={option.disabled}
            onChange={() => onChange(option.value)}
            label={option.label}
            description={option.description}
          />
        ))}
      </div>
      {(helperText && !error) && (
        <p id={helperId} className="mt-1.5 text-caption text-text-muted">{helperText}</p>
      )}
      {error && (
        <p id={errorId} className="mt-1.5 text-caption text-status-error" role="alert">{error}</p>
      )}
    </fieldset>
  );
}