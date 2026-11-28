"use client";

import React, { Suspense, lazy, LazyExoticComponent, ComponentType } from "react";
import { cn } from "@/lib/utils";

interface LazySectionProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
}

function DefaultFallback() {
  return (
    <div className="h-64 animate-pulse bg-surface dark:bg-surfaceElevated rounded-xl" />
  );
}

export function LazySection({
  children,
  fallback = <DefaultFallback />,
  className = "",
  threshold = 0.1,
  rootMargin = "100px",
}: LazySectionProps) {
  const [isVisible, setIsVisible] = React.useState(true);
  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} className={cn("w-full", className)}>
      <Suspense fallback={fallback}>{children}</Suspense>
    </div>
  );
}

export function createLazyComponent<T extends ComponentType<any>>(
  importFn: () => Promise<{ default: T }>,
  fallback?: React.ReactNode
): LazyExoticComponent<T> {
  return lazy(importFn);
}

// Pre-configured lazy components for below-fold sections
export const LazyFlagshipCaseStudy = createLazyComponent(
  () => import("@/components/features/home/FlagshipCaseStudySection").then(m => ({ default: m.FlagshipCaseStudySection })),
  <DefaultFallback />
);

export const LazyEducationCertifications = createLazyComponent(
  () => import("@/components/features/home/EducationCertificationsSection").then(m => ({ default: m.EducationCertificationsSection })),
  <DefaultFallback />
);

export const LazyEngineeringInPublic = createLazyComponent(
  () => import("@/components/features/home/EngineeringInPublicSection").then(m => ({ default: m.EngineeringInPublicSection })),
  <DefaultFallback />
);

export const LazyLiveDemoStudio = createLazyComponent(
  () => import("@/components/features/demos/LiveDemoStudio").then(m => ({ default: m.LiveDemoStudio })),
  <DefaultFallback />
);

export const LazyArchitectureTopology = createLazyComponent(
  () => import("@/components/features/projects/case-study/ArchitectureTopology").then(m => ({ default: m.ArchitectureTopology })),
  <DefaultFallback />
);

export const LazyDemoViewer = createLazyComponent(
  () => import("@/components/features/demos/DemoViewer").then(m => ({ default: m.DemoViewer })),
  <DefaultFallback />
);