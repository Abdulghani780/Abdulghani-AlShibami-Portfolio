"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showFirstLast?: boolean;
  showPrevNext?: boolean;
  maxVisiblePages?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
  "aria-label"?: string;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  showFirstLast = true,
  showPrevNext = true,
  maxVisiblePages = 5,
  size = "md",
  className,
  "aria-label": ariaLabel = "Pagination",
}: PaginationProps) {
  const sizeStyles = {
    sm: "h-11 w-11 text-xs",
    md: "h-11 w-11 text-sm",
    lg: "h-12 w-12 text-base",
  };

  const buttonBase = cn(
    "flex items-center justify-center rounded-xl font-medium transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2",
    "disabled:cursor-not-allowed disabled:opacity-50",
    sizeStyles[size]
  );

  const pageNumbers = React.useMemo(() => {
    const pages: (number | "ellipsis")[] = [];
    const half = Math.floor(maxVisiblePages / 2);

    let start = Math.max(1, currentPage - half);
    let end = Math.min(totalPages, start + maxVisiblePages - 1);

    if (end - start + 1 < maxVisiblePages) {
      start = Math.max(1, end - maxVisiblePages + 1);
    }

    if (start > 1) {
      pages.push(1);
      if (start > 2) pages.push("ellipsis");
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < totalPages) {
      if (end < totalPages - 1) pages.push("ellipsis");
      pages.push(totalPages);
    }

    return pages;
  }, [currentPage, totalPages, maxVisiblePages]);

  return (
    <nav aria-label={ariaLabel} className={cn("flex items-center gap-1", className)}>
      {showFirstLast && (
        <button
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          className={cn(buttonBase, "bg-surface-interactive text-text-secondary hover:bg-gold hover:text-surface-elevated hover:border-gold border-border")}
          aria-label="First page"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <polyline points="17 18 11 12 17 6" />
            <polyline points="7 18 1 12 7 6" />
          </svg>
        </button>
      )}

      {showPrevNext && (
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={cn(buttonBase, "bg-surface-interactive text-text-secondary hover:bg-gold hover:text-surface-elevated hover:border-gold border-border")}
          aria-label="Previous page"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      )}

      <div className="flex items-center gap-1" role="group" aria-label="Pages">
        {pageNumbers.map((page, index) =>
          page === "ellipsis" ? (
            <span key="ellipsis" className={cn("px-2 text-text-muted", sizeStyles[size])}>
              ...
            </span>
          ) : (
            <button
              key={page}
              onClick={() => onPageChange(page as number)}
              className={cn(
                buttonBase,
                page === currentPage
                  ? "bg-gold text-surface-elevated font-bold shadow-gold-sm border-gold"
                  : "bg-surface-elevated text-text-secondary hover:bg-gold/10 hover:text-gold hover:border-gold/50 border-border"
              )}
              aria-label={`Page ${page}`}
              aria-current={page === currentPage ? "page" : undefined}
            >
              {page}
            </button>
          )
        )}
      </div>

      {showPrevNext && (
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={cn(buttonBase, "bg-surface-interactive text-text-secondary hover:bg-gold hover:text-surface-elevated hover:border-gold border-border")}
          aria-label="Next page"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      )}

      {showFirstLast && (
        <button
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
          className={cn(buttonBase, "bg-surface-interactive text-text-secondary hover:bg-gold hover:text-surface-elevated hover:border-gold border-border")}
          aria-label="Last page"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <polyline points="7 18 13 12 7 6" />
            <polyline points="17 18 23 12 17 6" />
          </svg>
        </button>
      )}
    </nav>
  );
}