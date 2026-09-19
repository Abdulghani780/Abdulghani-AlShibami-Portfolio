"use client";

import React from "react";
import { usePathname } from "next/navigation";

export function MainWrapper({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) {
  const pathname = usePathname();
  const isHomePage =
    pathname === `/${locale}` ||
    pathname === `/${locale}/` ||
    pathname === "/" ||
    pathname === "";

  return (
    <main
      id="main-content"
      className={`flex-1 w-full transition-all duration-200 ${
        isHomePage ? "p-0" : "pt-20 sm:pt-24"
      }`}
    >
      {children}
    </main>
  );
}
