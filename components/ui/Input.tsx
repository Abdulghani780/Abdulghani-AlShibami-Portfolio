"use client";

import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  helperText?: string;
  error?: string;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  fullWidth?: boolean;
  inputSize?: "sm" | "md" | "lg";
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      label,
      helperText,
      error,
      startAdornment,
      endAdornment,
      fullWidth = true,
      inputSize = "md",
      id,
      disabled,
      required,
      type = "text",
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const inputId = id || `input-${generatedId}`;
    const errorId = error ? `${inputId}-error` : undefined;
    const helperId = helperText && !error ? `${inputId}-helper` : undefined;

    const sizeStyles = {
      sm: "h-11 px-3 text-sm",
      md: "h-11 px-4 text-base",
      lg: "h-13 px-5 text-lg",
    };

    const baseStyles = cn(
      "w-full rounded-xl bg-surface-elevated border",
      "font-sans transition-all duration-200",
      "placeholder:text-text-dim",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2",
      "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-surface-interactive",
      "dark:bg-surface-overlay",
      sizeStyles[inputSize],
      error
        ? "border-status-error focus-visible:ring-status-error"
        : "border-border hover:border-gold/50",
      fullWidth ? "w-full" : "",
      (startAdornment || endAdornment) && "pl-10 pr-10",
      className
    );

    const labelStyles = cn(
      "block text-caption text-text-secondary mb-2 font-medium",
      required && "after:content-['*'] after:ml-1 after:text-status-error"
    );

    return (
      <div className={cn("w-full", fullWidth ? "w-full" : "")}>
        {label && <label htmlFor={inputId} className={labelStyles}>{label}</label>}
        <div className="relative">
          {startAdornment && (
            <div
              className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-text-muted"
              aria-hidden="true"
            >
              {startAdornment}
            </div>
          )}
          <input
            ref={ref}
            id={inputId}
            type={type}
            disabled={disabled}
            required={required}
            aria-invalid={error ? "true" : "false"}
            aria-describedby={cn(errorId, helperId)}
            className={baseStyles}
            {...props}
          />
          {endAdornment && (
            <div
              className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-text-muted"
              aria-hidden="true"
            >
              {endAdornment}
            </div>
          )}
          {error && (
            <span
              id={errorId}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-caption text-status-error flex items-center gap-1"
              role="alert"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              {error}
            </span>
          )}
        </div>
        {(helperText && !error) && (
          <p id={helperId} className="mt-1.5 text-caption text-text-muted">{helperText}</p>
        )}
        {error && (
          <p id={errorId} className="mt-1.5 text-caption text-status-error" role="alert">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

// Textarea component
export interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "rows"> {
  label?: string;
  helperText?: string;
  error?: string;
  fullWidth?: boolean;
  textareaRows?: number;
  autoResize?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      label,
      helperText,
      error,
      fullWidth = true,
      textareaRows = 4,
      autoResize = false,
      id,
      disabled,
      required,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const textareaId = id || `textarea-${generatedId}`;
    const errorId = error ? `${textareaId}-error` : undefined;
    const helperId = helperText && !error ? `${textareaId}-helper` : undefined;

    const textareaRef = React.useRef<HTMLTextAreaElement>(null);
    const combinedRef = (instance: HTMLTextAreaElement | null) => {
      textareaRef.current = instance;
      if (typeof ref === "function") {
        ref(instance);
      } else if (ref) {
        ref.current = instance;
      }
    };

    const baseStyles = cn(
      "w-full rounded-xl bg-surface-elevated border px-4 py-3",
      "font-sans text-base transition-all duration-200 resize-none",
      "placeholder:text-text-dim",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2",
      "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-surface-interactive",
      "dark:bg-surface-overlay",
      error
        ? "border-status-error focus-visible:ring-status-error"
        : "border-border hover:border-gold/50",
      fullWidth ? "w-full" : "",
      className
    );

    const labelStyles = cn(
      "block text-caption text-text-secondary mb-2 font-medium",
      required && "after:content-['*'] after:ml-1 after:text-status-error"
    );

    // Auto-resize effect
    React.useEffect(() => {
      if (autoResize && textareaRef.current) {
        textareaRef.current.style.height = "auto";
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      }
    }, [props.value, autoResize]);

    return (
      <div className={cn("w-full", fullWidth ? "w-full" : "")}>
        {label && <label htmlFor={textareaId} className={labelStyles}>{label}</label>}
        <textarea
          ref={combinedRef}
          id={textareaId}
          disabled={disabled}
          required={required}
          rows={textareaRows}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={cn(errorId, helperId)}
          className={baseStyles}
          {...props}
        />
        {(helperText && !error) && (
          <p id={helperId} className="mt-1.5 text-caption text-text-muted">{helperText}</p>
        )}
        {error && (
          <p id={errorId} className="mt-1.5 text-caption text-status-error" role="alert">{error}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

// Select component
export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  label?: string;
  helperText?: string;
  error?: string;
  options: SelectOption[];
  placeholder?: string;
  fullWidth?: boolean;
  selectSize?: "sm" | "md" | "lg";
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      label,
      helperText,
      error,
      options,
      placeholder,
      fullWidth = true,
      selectSize = "md",
      id,
      disabled,
      required,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const selectId = id || `select-${generatedId}`;
    const errorId = error ? `${selectId}-error` : undefined;
    const helperId = helperText && !error ? `${selectId}-helper` : undefined;

    const sizeStyles = {
      sm: "h-11 px-3 text-sm",
      md: "h-11 px-4 text-base",
      lg: "h-13 px-5 text-lg",
    };

    const baseStyles = cn(
      "w-full rounded-xl bg-surface-elevated border appearance-none",
      "font-sans transition-all duration-200",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2",
      "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-surface-interactive",
      "dark:bg-surface-overlay",
      sizeStyles[selectSize],
      error
        ? "border-status-error focus-visible:ring-status-error"
        : "border-border hover:border-gold/50",
      fullWidth ? "w-full" : "",
      className
    );

    const labelStyles = cn(
      "block text-caption text-text-secondary mb-2 font-medium",
      required && "after:content-['*'] after:ml-1 after:text-status-error"
    );

    return (
      <div className={cn("w-full", fullWidth ? "w-full" : "")}>
        {label && <label htmlFor={selectId} className={labelStyles}>{label}</label>}
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            disabled={disabled}
            required={required}
            aria-invalid={error ? "true" : "false"}
            aria-describedby={cn(errorId, helperId)}
            className={baseStyles}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value} disabled={option.disabled}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-text-muted" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
        {(helperText && !error) && (
          <p id={helperId} className="mt-1.5 text-caption text-text-muted">{helperText}</p>
        )}
        {error && (
          <p id={errorId} className="mt-1.5 text-caption text-status-error" role="alert">{error}</p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";