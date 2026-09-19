"use client";

import React from "react";
import Link from "next/link";
import { Project, Locale } from "@/types/project";
import { ProjectPreviewMockup } from "@/components/reference/ProjectPreviewMockup";

interface ProjectBentoShowcaseProps {
  projects: Project[];
  locale: Locale;
}

export function ProjectBentoShowcase({ projects, locale }: ProjectBentoShowcaseProps) {
  const isRtl = locale === "ar";

  const getProject = (slug: string) => projects.find((p) => p.slug === slug);

  const campusIT = getProject("campus-it-tracker");
  const metaAlgo = getProject("metaalgorithm-lab");
  const cafena = getProject("cafena");
  const novaTech = getProject("novatech");
  const gp = getProject("gp");

  return (
    <div className="w-full space-y-6 select-none font-mono">
      {/* Top Banner Header matching Reference 4 */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="font-bold text-white tracking-widest uppercase">
            ABDULGHANI AL-SHIBAMI
          </span>
          <span className="text-white/40">|</span>
          <span className="text-[#00FF9D] font-bold tracking-wider">
            {isRtl ? "معرض الأنظمة والمشاريع الحية" : "PROJECT SHOWCASE"}
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-[#00FF9D] bg-[#00FF9D]/10 px-2 py-0.5 rounded border border-[#00FF9D]/30 font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D] animate-ping" />
          <span>5 LIVE RUNTIMES</span>
        </div>
      </div>

      {/* Row 1: 2 Large Workstation Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative">
        {/* Card 01: Campus IT Tracker */}
        {campusIT && (
          <div className="rounded-2xl border border-white/[0.12] bg-[#070A0F] p-4 sm:p-5 flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(0,255,157,0.06)] hover:border-[#00FF9D]/60 transition-all duration-300 group">
            <div className="space-y-3">
              {/* Card Window Bar */}
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00FF9D]" />
                  <h3 className="text-sm font-bold text-white ms-2">Campus IT Tracker</h3>
                </div>
                <span className="px-2 py-0.5 rounded text-[9.5px] font-bold bg-[#00FF9D]/10 text-[#00FF9D] border border-[#00FF9D]/30 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D] animate-pulse" />
                  <span>ONLINE LIVE INSTANCE</span>
                </span>
              </div>

              {/* Mini Interactive Workstation Preview */}
              <div className="h-44 sm:h-48 w-full rounded-xl overflow-hidden border border-white/[0.06] bg-[#05080E]">
                <ProjectPreviewMockup projectSlug="campus-it-tracker" />
              </div>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1 text-[10px] text-white/60">
                {["C# .NET", "WinForms", "Oracle 10g", "ITIL Kanban"].map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Launch Action Footer */}
            <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center justify-between">
              <Link
                href={`/${locale}/projects/campus-it-tracker`}
                className="text-xs text-white/50 hover:text-white transition-colors"
              >
                {isRtl ? "دراسة الحالة ←" : "Case Study →"}
              </Link>
              <Link
                href={`/${locale}/projects/campus-it-tracker/demo`}
                className="px-4 py-1.5 rounded-lg bg-[#00FF9D] hover:bg-[#00FF9D]/90 text-[#070A0F] font-bold text-xs flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,255,157,0.3)] transition-all active:scale-95"
              >
                <span>Launch Workstation Demo</span>
                <span>⚡</span>
              </Link>
            </div>
          </div>
        )}

        {/* Card 02: MetaAlgorithm Lab */}
        {metaAlgo && (
          <div className="rounded-2xl border border-white/[0.12] bg-[#070A0F] p-4 sm:p-5 flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(0,255,157,0.06)] hover:border-[#00FF9D]/60 transition-all duration-300 group">
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00FF9D]" />
                  <h3 className="text-sm font-bold text-white ms-2">MetaAlgorithm Lab</h3>
                </div>
                <span className="px-2 py-0.5 rounded text-[9.5px] font-bold bg-[#00FF9D]/10 text-[#00FF9D] border border-[#00FF9D]/30 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D] animate-pulse" />
                  <span>ONLINE LIVE INSTANCE</span>
                </span>
              </div>

              <div className="h-44 sm:h-48 w-full rounded-xl overflow-hidden border border-white/[0.06] bg-[#05080E]">
                <ProjectPreviewMockup projectSlug="metaalgorithm-lab" />
              </div>

              <div className="flex flex-wrap items-center gap-1.5 pt-1 text-[10px] text-white/60">
                {["Python 3.10+", "PyQt6", "NumPy", "WASM 98%"].map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center justify-between">
              <Link
                href={`/${locale}/projects/metaalgorithm-lab`}
                className="text-xs text-white/50 hover:text-white transition-colors"
              >
                {isRtl ? "دراسة الحالة ←" : "Case Study →"}
              </Link>
              <Link
                href={`/${locale}/projects/metaalgorithm-lab/demo`}
                className="px-4 py-1.5 rounded-lg bg-[#00FF9D] hover:bg-[#00FF9D]/90 text-[#070A0F] font-bold text-xs flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,255,157,0.3)] transition-all active:scale-95"
              >
                <span>Launch Demo</span>
                <span>⚡</span>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Cyber Circuit Connecting Bus Line (matching Reference 4) */}
      <div className="hidden lg:flex items-center justify-center my-2 relative py-2">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#00FF9D]/40 to-transparent relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rotate-45 border border-[#00FF9D] bg-[#070A0F] flex items-center justify-center shadow-[0_0_10px_rgba(0,255,157,0.4)]">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00FF9D]" />
          </div>
        </div>
      </div>

      {/* Row 2: 3 Workstation Panels */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 03: Cafena Coffee Suite */}
        {cafena && (
          <div className="rounded-2xl border border-white/[0.12] bg-[#070A0F] p-4 flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(0,255,157,0.06)] hover:border-[#00FF9D]/60 transition-all duration-300 group">
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#FF5F56]" />
                  <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2 h-2 rounded-full bg-[#00FF9D]" />
                  <h3 className="text-xs font-bold text-white ms-1 truncate max-w-[120px]">
                    Cafena Coffee Suite
                  </h3>
                </div>
                <span className="px-1.5 py-0.5 rounded text-[8.5px] font-bold bg-[#00FF9D]/10 text-[#00FF9D] border border-[#00FF9D]/30">
                  ONLINE
                </span>
              </div>

              <div className="h-36 w-full rounded-xl overflow-hidden border border-white/[0.06] bg-[#05080E]">
                <ProjectPreviewMockup projectSlug="cafena" />
              </div>

              <div className="flex flex-wrap items-center gap-1 text-[9.5px] text-white/60">
                {["HTML5", "CSS3", "JavaScript", "RTL 100%"].map((t) => (
                  <span key={t} className="px-1.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.08]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 mt-3 border-t border-white/[0.06] flex items-center justify-between">
              <Link
                href={`/${locale}/projects/cafena`}
                className="text-[11px] text-white/50 hover:text-white"
              >
                {isRtl ? "التفاصيل" : "Details"}
              </Link>
              <Link
                href={`/${locale}/projects/cafena/demo`}
                className="px-3 py-1 rounded bg-[#00FF9D] hover:bg-[#00FF9D]/90 text-[#070A0F] font-bold text-xs flex items-center gap-1 shadow-[0_0_12px_rgba(0,255,157,0.25)]"
              >
                <span>Launch Demo</span>
                <span>⚡</span>
              </Link>
            </div>
          </div>
        )}

        {/* Card 04: NovaTech Cloud */}
        {novaTech && (
          <div className="rounded-2xl border border-white/[0.12] bg-[#070A0F] p-4 flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(0,255,157,0.06)] hover:border-[#00FF9D]/60 transition-all duration-300 group">
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#FF5F56]" />
                  <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2 h-2 rounded-full bg-[#00FF9D]" />
                  <h3 className="text-xs font-bold text-white ms-1 truncate max-w-[120px]">
                    NovaTech Cloud
                  </h3>
                </div>
                <span className="px-1.5 py-0.5 rounded text-[8.5px] font-bold bg-[#00FF9D]/10 text-[#00FF9D] border border-[#00FF9D]/30">
                  ONLINE
                </span>
              </div>

              <div className="h-36 w-full rounded-xl overflow-hidden border border-white/[0.06] bg-[#05080E]">
                <ProjectPreviewMockup projectSlug="novatech" />
              </div>

              <div className="flex flex-wrap items-center gap-1 text-[9.5px] text-white/60">
                {["Next.js 15", "TypeScript", "Tailwind", "Edge"].map((t) => (
                  <span key={t} className="px-1.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.08]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 mt-3 border-t border-white/[0.06] flex items-center justify-between">
              <Link
                href={`/${locale}/projects/novatech`}
                className="text-[11px] text-white/50 hover:text-white"
              >
                {isRtl ? "التفاصيل" : "Details"}
              </Link>
              <Link
                href={`/${locale}/projects/novatech/demo`}
                className="px-3 py-1 rounded bg-[#00FF9D] hover:bg-[#00FF9D]/90 text-[#070A0F] font-bold text-xs flex items-center gap-1 shadow-[0_0_12px_rgba(0,255,157,0.25)]"
              >
                <span>Launch Demo</span>
                <span>⚡</span>
              </Link>
            </div>
          </div>
        )}

        {/* Card 05: GP Graduation Platform */}
        {gp && (
          <div className="rounded-2xl border border-white/[0.12] bg-[#070A0F] p-4 flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(0,255,157,0.06)] hover:border-[#00FF9D]/60 transition-all duration-300 group">
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#FF5F56]" />
                  <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2 h-2 rounded-full bg-[#00FF9D]" />
                  <h3 className="text-xs font-bold text-white ms-1 truncate max-w-[120px]">
                    GP Platform
                  </h3>
                </div>
                <span className="px-1.5 py-0.5 rounded text-[8.5px] font-bold bg-[#00FF9D]/10 text-[#00FF9D] border border-[#00FF9D]/30">
                  ONLINE
                </span>
              </div>

              <div className="h-36 w-full rounded-xl overflow-hidden border border-white/[0.06] bg-[#05080E]">
                <ProjectPreviewMockup projectSlug="gp" />
              </div>

              <div className="flex flex-wrap items-center gap-1 text-[9.5px] text-white/60">
                {["PHP 8", "MySQL 8", "RBAC", "Rubric Eval"].map((t) => (
                  <span key={t} className="px-1.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.08]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 mt-3 border-t border-white/[0.06] flex items-center justify-between">
              <Link
                href={`/${locale}/projects/gp`}
                className="text-[11px] text-white/50 hover:text-white"
              >
                {isRtl ? "التفاصيل" : "Details"}
              </Link>
              <Link
                href={`/${locale}/projects/gp/demo`}
                className="px-3 py-1 rounded bg-[#00FF9D] hover:bg-[#00FF9D]/90 text-[#070A0F] font-bold text-xs flex items-center gap-1 shadow-[0_0_12px_rgba(0,255,157,0.25)]"
              >
                <span>Launch Demo</span>
                <span>⚡</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
