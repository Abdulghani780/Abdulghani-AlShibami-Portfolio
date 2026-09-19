import React from "react";
import { notFound } from "next/navigation";
import { dictionaries, Locale } from "@/lib/i18n/dictionaries";
import { projectRepository } from "@/lib/services/projectRepository";
import { ReferenceLeftColumn } from "@/components/reference/ReferenceLeftColumn";
import { ReferenceRightColumn } from "@/components/reference/ReferenceRightColumn";

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
  const dict = dictionaries[currentLocale];

  const projects = await projectRepository.getProjects();

  return (
    <div className="relative min-h-screen w-full bg-[#050709] dark:bg-[#050709] bg-zinc-100 text-white dark:text-white text-zinc-900 overflow-x-hidden selection:bg-gold/30 selection:text-gold transition-colors duration-200">
      {/* Background Subtle Monospace Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/[0.03] dark:bg-gold/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 w-96 h-96 bg-gold/[0.02] dark:bg-gold/[0.03] rounded-full blur-3xl pointer-events-none" />

      {/* ─────────────────────────────────────────────────────────────
          MASTER DESKTOP DUAL-COLUMN COMMAND CENTER (1536x1024 BLUEPRINT)
          Left Column (~49%) + Right Column (~49%) with controlled gutter
      ───────────────────────────────────────────────────────────── */}
      <main className="relative z-10 w-full max-w-[1580px] mx-auto p-3 sm:p-5 lg:p-6 grid grid-cols-1 xl:grid-cols-2 gap-5 lg:gap-6 min-h-screen items-stretch">
        <ReferenceLeftColumn
          locale={currentLocale}
          dict={dict}
          projects={projects}
        />
        <ReferenceRightColumn
          locale={currentLocale}
          dict={dict}
          projects={projects}
        />
      </main>
    </div>
  );
}
