"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Locale } from "@/lib/i18n/dictionaries";

export function FeaturedProjectsSection({ locale }: { locale: Locale }) {
  const isRtl = locale === "ar";

  const projects = [
    {
      id: "yusra",
      title: isRtl ? "يُسرى | YUSRA" : "YUSRA | يُسرى",
      subtitle: isRtl ? "تقنية ذكاء اصطناعي مساندة لحياة مستقلة" : "Assistive AI technology",
      tech: "Kotlin · Jetpack Compose · Firebase · TFLite · MediaPipe",
      image: "/images/projects/yusra-card.png",
      href: `/${locale}/projects/yusra`,
    },
    {
      id: "campus-it-tracker",
      title: isRtl ? "نظام تتبع البنية التحتية الجامعية" : "CAMPUS IT INFRASTRUCTURE TRACKER",
      subtitle: isRtl ? "إدارة ذكية لأصول وشبكات الحرم الجامعي" : "Smart IT infrastructure management",
      tech: "C# · WinForms · Oracle · RBAC",
      image: "/images/projects/campus-card.png",
      href: `/${locale}/projects/campus-it-tracker`,
    },
    {
      id: "metaalgorithm-lab",
      title: isRtl ? "مختبر الخوارزميات التفاعلي" : "METAALGORITHM LAB",
      subtitle: isRtl ? "منصة تفاعلية لدراسة وتعقيد الخوارزميات" : "Interactive algorithm learning platform",
      tech: "Algorithms · Big-O · Clean Architecture · REST",
      image: "/images/projects/meta-card.png",
      href: `/${locale}/projects/metaalgorithm-lab`,
    },
    {
      id: "nexora-tech",
      title: isRtl ? "نوفا تيك | نكسورا للأجهزة الذكية" : "NEXORA TECH",
      subtitle: isRtl ? "متجر إلكتروني ذكي للأجهزة والحلول التقنية" : "Next-generation PC hardware platform",
      tech: "Next.js · PostgreSQL · Search · PC Builder",
      image: "/images/projects/nexora-card.png",
      href: `/${locale}/projects/novatech`,
    },
  ];

  return (
    <section
      id="projects"
      className="relative w-full bg-white dark:bg-[#0B0B0C] py-20 lg:py-28 border-b border-black/5 dark:border-white/5 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & View All Link */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div>
            <h2 className="font-sans font-black text-3xl sm:text-4xl uppercase tracking-tight text-[#0B0B0C] dark:text-white">
              {isRtl ? "المشاريع المميزة" : "FEATURED PROJECTS"}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-sans">
              {isRtl
                ? "نماذج لأنظمة برمجية متكاملة مصممة بأعلى معايير الهندسة."
                : "Real-world production systems engineered with precision."}
            </p>
          </div>

          <Link
            href={`/${locale}/projects`}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#B88E1F] dark:text-[#E2C366] hover:text-[#C59B27] transition-colors group"
          >
            <span>{isRtl ? "عرض جميع المشاريع" : "VIEW ALL PROJECTS"}</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">→</span>
          </Link>
        </div>

        {/* 4 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="flex flex-col justify-between rounded-2xl border border-black/10 dark:border-white/10 bg-[#FAF9F6] dark:bg-[#121214] p-5 shadow-sm hover:shadow-xl hover:border-[#C59B27]/50 transition-all duration-300 group hover:-translate-y-1"
            >
              <div>
                {/* Built Badge */}
                <div className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#C59B27]/15 border border-[#C59B27]/30 text-[#B88E1F] dark:text-[#E2C366] font-mono text-[10px] font-bold tracking-wider uppercase mb-3">
                  BUILT
                </div>

                {/* Title */}
                <h3 className="font-sans font-black text-base text-zinc-900 dark:text-white uppercase leading-snug group-hover:text-[#B88E1F] dark:group-hover:text-[#E2C366] transition-colors line-clamp-2 min-h-[44px]">
                  {proj.title}
                </h3>

                {/* Subtitle */}
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 font-medium line-clamp-1">
                  {proj.subtitle}
                </p>

                {/* Tech Stack */}
                <p className="text-[11px] font-mono text-zinc-600 dark:text-zinc-400 mt-2 border-t border-black/5 dark:border-white/5 pt-2 line-clamp-2 min-h-[36px]">
                  {proj.tech}
                </p>

                {/* Preview Image Card */}
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mt-4 bg-zinc-100 dark:bg-black/50 border border-black/5 dark:border-white/5">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
                  />
                </div>
              </div>

              {/* View Case Study CTA Link */}
              <div className="pt-5 border-t border-black/5 dark:border-white/5 mt-4">
                <Link
                  href={proj.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-zinc-800 dark:text-zinc-200 group-hover:text-[#B88E1F] dark:group-hover:text-[#E2C366] transition-colors"
                >
                  <span>{isRtl ? "عرض دراسة الحالة" : "VIEW CASE STUDY"}</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
