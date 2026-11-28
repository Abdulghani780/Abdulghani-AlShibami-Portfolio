"use client";

import React, { useEffect } from "react";
import { initWebVitals } from "@/lib/utils/web-vitals";

export function WebVitalsProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initWebVitals();
  }, []);

  return <>{children}</>;
}