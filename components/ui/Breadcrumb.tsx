"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  maxItems?: number;
  className?: string;
  "aria-label"?: string;
}

export function Breadcrumb({
  items,
  separator = <span className="mx-2 text-text-muted" aria-hidden="true">/</span>,
  maxItems = 5,
  className,
  "aria-label": ariaLabel = "Breadcrumb",
}: BreadcrumbProps) {
  // Truncate items if exceeding maxItems
  const displayItems = items.length > maxItems
    ? [
        items[0],
        { label: "...", href: undefined, current: false } as BreadcrumbItem,
        ...items.slice(-(maxItems - 2)),
      ]
    : items;

  return (
    <nav aria-label={ariaLabel} className={cn("flex items-center gap-1", className)}>
      <ol className="flex items-center gap-1 flex-wrap" role="list">
        {displayItems.map((item, index) => (
          <li key={item.label} className="flex items-center gap-1">
            {index > 0 && <span className="flex-shrink-0" aria-hidden="true">{separator}</span>}
            {item.current ? (
              <span
                aria-current="page"
                className="text-body text-text-primary font-medium"
              >
                {item.label}
              </span>
            ) : item.href ? (
              <Link
                href={item.href}
                className="text-body text-text-secondary hover:text-gold transition-colors font-normal"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-body text-text-muted">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

// Compact breadcrumb for tight spaces
export interface CompactBreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function CompactBreadcrumb({ items, className }: CompactBreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("flex items-center gap-1.5", className)}>
      {items.map((item, index) => (
        <span key={item.label} className="flex items-center gap-1.5">
          {index > 0 && (
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-text-muted flex-shrink-0"
              aria-hidden="true"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          )}
          {item.current ? (
            <span className="text-caption text-text-primary font-medium">{item.label}</span>
          ) : item.href ? (
            <Link
              href={item.href}
              className="text-caption text-text-secondary hover:text-gold transition-colors font-normal"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-caption text-text-muted">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}