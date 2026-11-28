"use client";

import React, { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import { createPortal } from "react-dom";

export interface ToastProps {
  title: string;
  description?: string;
  variant?: "default" | "success" | "warning" | "error" | "info";
  action?: { label: string; onClick: () => void };
  duration?: number;
  onClose?: () => void;
  className?: string;
}

interface ToastState extends ToastProps {
  id: string;
  visible: boolean;
  exiting: boolean;
}

const TOAST_LIMIT = 5;
const TOAST_REMOVE_DELAY = 300;

let toastCounter = 0;
const generateId = () => `toast-${++toastCounter}`;

// Toast container state (singleton)
const toastStates: ToastState[] = [];
const listeners: Array<(states: ToastState[]) => void> = [];

function notifyListeners() {
  listeners.forEach((listener) => listener([...toastStates]));
}

function addToast(toast: Omit<ToastState, "id" | "visible" | "exiting">) {
  const id = generateId();
  const newToast: ToastState = { ...toast, id, visible: true, exiting: false };

  // Limit toasts
  if (toastStates.length >= TOAST_LIMIT) {
    removeToast(toastStates[0].id);
  }

  toastStates.push(newToast);
  notifyListeners();

  // Auto dismiss
  if (toast.duration !== 0 && toast.duration !== Infinity) {
    setTimeout(() => dismissToast(id), toast.duration || 5000);
  }

  return id;
}

function dismissToast(id: string) {
  const index = toastStates.findIndex((t) => t.id === id);
  if (index === -1) return;

  toastStates[index].exiting = true;
  notifyListeners();

  setTimeout(() => {
    removeToast(id);
  }, TOAST_REMOVE_DELAY);
}

function removeToast(id: string) {
  const index = toastStates.findIndex((t) => t.id === id);
  if (index === -1) return;

  toastStates.splice(index, 1);
  notifyListeners();
}

export function useToast() {
  const [states, setStates] = useState<ToastState[]>([]);

  useEffect(() => {
    setStates([...toastStates]);
    listeners.push(setStates);
    return () => {
      const index = listeners.indexOf(setStates);
      if (index > -1) listeners.splice(index, 1);
    };
  }, []);

  const toast = useCallback(
    (props: Omit<ToastProps, "onClose">) => {
      return addToast({ ...props, onClose: () => dismissToast(generateId()) });
    },
    []
  );

  const dismiss = useCallback((id: string) => dismissToast(id), []);

  return { toasts: states, toast, dismiss };
}

// Toast component
export function Toast({
  title,
  description,
  variant = "default",
  action,
  duration = 5000,
  onClose,
  className,
  ...props
}: ToastProps & { exiting?: boolean }) {
  const variantStyles = {
    default: "border-border",
    success: "border-status-success/50 bg-status-success-bg/50",
    warning: "border-status-warning/50 bg-status-warning-bg/50",
    error: "border-status-error/50 bg-status-error-bg/50",
    info: "border-status-info/50 bg-status-info-bg/50",
  };

  const iconStyles = {
    default: "text-gold",
    success: "text-status-success",
    warning: "text-status-warning",
    error: "text-status-error",
    info: "text-status-info",
  };

  const icons = {
    default: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
      </svg>
    ),
    success: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    warning: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    error: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="15" y1="9" x2="9" y2="15" />
        <line x1="9" y1="9" x2="15" y2="15" />
      </svg>
    ),
    info: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
      </svg>
    ),
  };

  return (
    <div
      className={cn(
        "relative flex items-start gap-3 p-4 rounded-xl",
        "glass-panel border shadow-gold-lg",
        "animate-[slide-in-right_300ms_cubic-bezier(0.16,1,0.3,1)]",
        "data-[exiting]:animate-[slide-out-right_200ms_ease-in]",
        variantStyles[variant],
        className
      )}
      data-exiting={props.exiting ? "true" : "false"}
      role="alert"
      aria-live="polite"
      {...props}
    >
      <div className={cn("flex-shrink-0 mt-0.5", iconStyles[variant])} aria-hidden="true">
        {icons[variant]}
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-body font-semibold text-text-primary">{title}</h4>
        {description && (
          <p className="mt-1 text-body-sm text-text-secondary">{description}</p>
        )}
      </div>
      <div className="flex items-center gap-2">
        {action && (
          <button
            onClick={() => {
              action.onClick();
              onClose?.();
            }}
            className="text-caption text-gold font-semibold hover:underline transition-colors"
          >
            {action.label}
          </button>
        )}
        <button
          onClick={onClose}
          className="flex-shrink-0 p-1 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface-interactive transition-colors"
          aria-label="Dismiss"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
      {/* Progress bar */}
      {duration !== 0 && duration !== Infinity && !props.exiting && (
        <div
          className="absolute bottom-0 left-0 right-0 h-1 bg-current/20 overflow-hidden"
          aria-hidden="true"
        >
          <div
            className="h-full bg-gold/50 animate-[progress-bar_1s_linear_forwards]"
            style={{ animationDuration: `${duration}ms` }}
          />
        </div>
      )}
    </div>
  );
}

// Toast container (renders all toasts)
export function ToastContainer() {
  const { toasts } = useToast();

  if (toasts.length === 0) return null;

  return createPortal(
    <div
      className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3 pointer-events-none"
      aria-live="polite"
      aria-label="Notifications"
    >
      {toasts.map((toast) => (
        <div key={toast.id} className="pointer-events-auto w-80 sm:w-96">
          <Toast {...toast} onClose={() => dismissToast(toast.id)} exiting={toast.exiting} />
        </div>
      ))}
    </div>,
    document.body
  );
}

// Helper functions for common toast patterns
export const toast = {
  success: (title: string, description?: string, action?: ToastProps["action"]) =>
    addToast({ title, description, variant: "success", action, duration: 5000 }),
  error: (title: string, description?: string, action?: ToastProps["action"]) =>
    addToast({ title, description, variant: "error", action, duration: 8000 }),
  warning: (title: string, description?: string, action?: ToastProps["action"]) =>
    addToast({ title, description, variant: "warning", action, duration: 6000 }),
  info: (title: string, description?: string, action?: ToastProps["action"]) =>
    addToast({ title, description, variant: "info", action, duration: 5000 }),
  default: (title: string, description?: string, action?: ToastProps["action"]) =>
    addToast({ title, description, variant: "default", action, duration: 5000 }),
  dismiss: dismissToast,
};