import React from "react";
import { dictionaries, Locale } from "@/lib/i18n/dictionaries";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LiveDemoStudio } from "@/components/features/demos/LiveDemoStudio";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";

export default async function ShowcasePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const currentLocale = (locale as Locale) || "en";
  const isRtl = currentLocale === "ar";

  return (
    <div className="py-10 space-y-12">
      <Container>
        {/* Top Header */}
        <SectionHeading
          kicker="// LIVE DEMO STUDIO & WORKSTATION SANDBOX"
          title={isRtl ? "استوديو المحاكاة الحية ومعمل العتاد" : "Live Interactive Demo Studio"}
          subtitle={
            isRtl
              ? "بيئة تشغيل تفاعلية متزامنة تحاكي تشغيل الأنظمة مباشرة داخل أجهزة سطح المكتب مع تيليمتري حقيقي وترمينال أوامر مدمج."
              : "Synchronous multi-workstation sandbox simulating authentic desktop runtime execution with real-time telemetry gauges and streaming terminal console."
          }
        />

        {/* Live Demo Studio (Reference 2) */}
        <div className="pt-2 pb-10">
          <LiveDemoStudio locale={currentLocale} />
        </div>

        {/* Design System & Foundational UI Showcase */}
        <div className="border-t border-white/[0.08] pt-10 space-y-8">
          <div className="font-mono text-xs text-[#00FF9D] tracking-widest uppercase font-bold">
            {"// DESIGN TOKENS & SYSTEM AFFORDANCES"}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Theme & Controls */}
            <div className="p-5 rounded-2xl border border-white/[0.08] bg-[#070A0F] space-y-4 font-mono text-xs">
              <div className="text-white/60 font-semibold border-b border-white/[0.06] pb-2">
                01 // Controls & Language
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-white/50">Theme:</span>
                  <ThemeToggle />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white/50">Locale:</span>
                  <LanguageSwitcher currentLocale={currentLocale} />
                </div>
                <span className="px-2 py-0.5 rounded bg-[#00FF9D]/10 text-[#00FF9D] border border-[#00FF9D]/30">
                  {isRtl ? "Arabic RTL Active" : "English LTR Active"}
                </span>
              </div>
            </div>

            {/* Buttons Matrix */}
            <div className="p-5 rounded-2xl border border-white/[0.08] bg-[#070A0F] space-y-4 font-mono text-xs">
              <div className="text-white/60 font-semibold border-b border-white/[0.06] pb-2">
                02 // Button Matrix
              </div>
              <div className="flex flex-wrap items-center gap-2.5">
                <button className="px-3.5 py-1.5 rounded-lg bg-[#00FF9D] text-[#070A0F] font-bold text-xs shadow-[0_0_12px_rgba(0,255,157,0.3)]">
                  Primary Mint
                </button>
                <button className="px-3.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.1] text-white text-xs hover:border-[#00FF9D]/40">
                  Secondary Slate
                </button>
                <button className="px-3.5 py-1.5 rounded-lg bg-[#00FF9D]/10 border border-[#00FF9D]/40 text-[#00FF9D] text-xs font-bold">
                  Workstation Action
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
