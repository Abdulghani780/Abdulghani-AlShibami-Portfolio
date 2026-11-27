"use client";

import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  label?: string;
  description?: string;
  indeterminate?: boolean;
  checkboxSize?: "sm" | "md" | "lg";
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      label,
      description,
      indeterminate = false,
      checkboxSize = "md",
      id,
      disabled,
      required,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const checkboxId = id || `checkbox-${generatedId}`;
    const [indeterminateState, setIndeterminateState] = React.useState(indeterminate);

    React.useEffect(() => {
      setIndeterminateState(indeterminate);
    }, [indeterminate]);

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
      "rounded-md border-2 flex-shrink-0",
      "transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "checked:bg-gold checked:border-gold checked:shadow-gold-sm",
      "indeterminate:bg-gold indeterminate:border-gold indeterminate:shadow-gold-sm",
      "hover:not(:disabled):border-gold/50",
      sizeStyles[checkboxSize],
      className
    );

    const wrapperStyles = cn(
      "relative flex items-center justify-center",
      touchTargetStyles[checkboxSize],
      "rounded-md"
    );

    const labelStyles = "ml-3 text-body text-text-primary leading-relaxed";
    const descriptionStyles = "ml-7 text-body-sm text-text-muted";

    return (
      <div className="flex items-start gap-0">
        <input
          ref={ref}
          type="checkbox"
          id={checkboxId}
          disabled={disabled}
          required={required}
          aria-describedby={description ? `${checkboxId}-desc` : undefined}
          className={cn(baseStyles, "sr-only peer")}
          {...props}
        />
        <div
          className={wrapperStyles}
          aria-hidden="true"
        >
          <div
            className={cn(
              sizeStyles[checkboxSize],
              "relative flex items-center justify-center",
              "rounded-md border-2",
              "transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]",
              "bg-surface-elevated border-border",
              "peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-gold peer-focus-visible:ring-offset-2",
              "peer-disabled:cursor-not-allowed peer-disabled:opacity-50 peer-disabled:bg-surface-interactive",
              "peer-checked:bg-gold peer-checked:border-gold peer-checked:shadow-gold-sm",
              "peer-indeterminate:bg-gold peer-indeterminate:border-gold peer-indeterminate:shadow-gold-sm",
              "peer-hover:not(:disabled):border-gold/50",
              className
            )}
          >
            {indeterminateState ? (
              <svg className="w-full h-full text-surface-elevated" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            ) : (
              <svg className="w-3/4 h-3/4 text-surface-elevated" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            )}
          </div>
        </div>
        {(label || description) && (
          <div className="flex flex-col">
            {label && <label htmlFor={checkboxId} className={labelStyles}>{label}</label>}
            {description && <p id={`${checkboxId}-desc`} className={descriptionStyles}>{description}</p>}
          </div>
        )}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

// Checkbox Group
export interface CheckboxGroupProps {
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
  value: string[];
  onChange: (value: string[]) => void;
  className?: string;
}

export function CheckboxGroup({
  label,
  helperText,
  error,
  options,
  orientation = "vertical",
  name,
  value,
  onChange,
  className,
}: CheckboxGroupProps) {
  const groupId = `checkbox-group-${React.useId()}`;
  const errorId = error ? `${groupId}-error` : undefined;
  const helperId = helperText && !error ? `${groupId}-helper` : undefined;

  const handleChange = (optionValue: string, checked: boolean) => {
    const newValue = checked
      ? [...value, optionValue]
      : value.filter((v) => v !== optionValue);
    onChange(newValue);
  };

  return (
    <fieldset className={cn("w-full", className)} aria-describedby={cn(errorId, helperId)}>
      {label && <legend className="text-caption text-text-secondary mb-3 font-medium">{label}</legend>}
      <div
        className={cn(
          "flex gap-4",
          orientation === "horizontal" ? "flex-wrap" : "flex-col"
        )}
        role="group"
        aria-labelledby={label ? undefined : groupId}
      >
        {options.map((option) => (
          <Checkbox
            key={option.value}
            id={`${groupId}-${option.value}`}
            name={name}
            checked={value.includes(option.value)}
            disabled={option.disabled}
            onChange={(e) => handleChange(option.value, e.target.checked)}
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