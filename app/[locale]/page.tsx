import React from "react";
import { notFound } from "next/navigation";
import { Locale } from "@/lib/i18n/dictionaries";
import { CanonicalHero } from "@/components/canonical/CanonicalHero";
import { CanonicalProjectsBento } from "@/components/canonical/CanonicalProjectsBento";
import { CanonicalDesktopSimulator } from "@/components/canonical/CanonicalDesktopSimulator";
import { CanonicalDemoStudio } from "@/components/canonical/CanonicalDemoStudio";
import { CanonicalFooter } from "@/components/canonical/CanonicalFooter";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "en" && locale !== "ar") {
    notFound();
  }

  const currentLocale = locale as Locale;

  return (
    <div className="relative min-h-screen w-full bg-[#0B1120] text-white overflow-x-hidden selection:bg-indigo-500/30 selection:text-indigo-300">
      {/* ─────────────────────────────────────────────────────────────
          CANONICAL FRONTEND REPLACEMENT (FROM APPROVED VISUAL REFERENCES)
          1. Hero Command Center (new/portfolio_hero_concept.jpg)
          2. Flagship Projects Showcase Bento Grid (new/projects_showcase_grid.jpg)
          3. Live Desktop OS Workstation Sandbox (new/desktop_demo_simulation.jpg)
          4. Live Interactive Demo Studio (new/live_demo_studio.jpg)
          5. Canonical Footer & Contact (new/projects_showcase_grid.jpg)
      ───────────────────────────────────────────────────────────── */}
      <div className="w-full">
        {/* Section 1: Hero Command Center */}
        <CanonicalHero locale={currentLocale} />

        {/* Section 2: Projects Showcase Bento Grid */}
        <CanonicalProjectsBento locale={currentLocale} />

        {/* Section 3: Native Desktop OS Workstation Sandbox */}
        <CanonicalDesktopSimulator locale={currentLocale} />

        {/* Section 4: Multi-Workstation Dual Simulation Studio */}
        <CanonicalDemoStudio locale={currentLocale} />

        {/* Section 5: Canonical Footer & Contact */}
        <CanonicalFooter locale={currentLocale} />
      </div>
    </div>
  );
}
