"use client";

import React from "react";
import Image from "next/image";
import { Locale } from "@/lib/i18n/dictionaries";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TiltCard } from "@/components/ui/TiltCard";

export function AboutSection({ locale }: { locale: Locale }) {
  const isRtl = locale === "ar";

  const corePillars = [
    {
      title: isRtl ? "تكنولوجيا المعلومات" : "Information Technology",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
    },
    {
      title: isRtl ? "تطوير البرمجيات" : "Software Development",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    {
      title: isRtl ? "هندسة الذكاء الاصطناعي" : "AI Engineering",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-2.26c-1.81-1.27-3-3.36-3-5.74a7 7 0 0 1 7-7z" />
          <path d="M12 9v4" />
          <path d="M12 17h.01" />
        </svg>
      ),
    },
    {
      title: isRtl ? "البنية التحتية" : "Infrastructure",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <path d="M6 12h12M12 5v7M12 19v2" />
        </svg>
      ),
    },
  ];

  const journey = [
    {
      year: "2020",
      title: isRtl ? "البداية" : "BEGINNING",
      desc: isRtl ? "بدء رحلة تطوير البرمجيات والتعلم الذاتي" : "Started software development journey, self-taught foundations",
    },
    {
      year: "2022",
      title: isRtl ? "الجامعة" : "UNIVERSITY",
      desc: isRtl ? "بكالوريوس تكنولوجيا المعلومات — جامعة العلوم الحديثة" : "Bachelor's IT — University of Modern Sciences",
    },
    {
      year: "2023",
      title: isRtl ? "المشروع الأول" : "FIRST PROJECT",
      desc: isRtl ? "نظام تتبع البنية التحتية الجامعية (Campus IT Tracker)" : "Campus IT Infrastructure Tracker — flagship project",
    },
    {
      year: "2024",
      title: isRtl ? "الذكاء الاصطناعي" : "AI ENGINEERING",
      desc: isRtl ? "تخصص في هندسة الأوامر، الرؤية الحاسوبية، والأتمتة" : "Specialized in Prompt Engineering, Computer Vision, Automation",
    },
    {
      year: "2025",
      title: isRtl ? "الآن" : "NOW",
      desc: isRtl ? "بناء حلول ذكية، مشاركة المعرفة، هندسة على الملأ" : "Building intelligent solutions, sharing knowledge, engineering in public",
    },
  ];

  return (
    <section
      id="about"
      className="relative w-full bg-background dark:bg-background text-foreground dark:text-foreground py-20 lg:py-28 border-b border-border/5 dark:border-border/5 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Portrait + Core Pillars */}
          <div className="lg:col-span-5 space-y-8">
            {/* Portrait Card */}
            <ScrollReveal isRtl={isRtl} direction="right">
              <TiltCard className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border dark:border-border bg-surface dark:bg-surfaceElevated group hover:border-brand/50 transition-all">
                {/* Shibam Skyline Watermark */}
                <div className="absolute inset-0 opacity-10 dark:opacity-5 pointer-events-none flex items-end justify-center pb-4">
                  <Image
                    src="/images/showcase/shibam-skyline.png"
                    alt="Shibam Skyline"
                    width={200}
                    height={130}
                    className="object-contain"
                  />
                </div>

                {/* Portrait Image */}
                <Image
                  src="/images/profile/abdulghani-portrait.webp"
                  alt="Abdulghani Al-Shibami — AI Engineer & Software Developer"
                  fill
                  priority
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />

                {/* Gold Accent Bar */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-brand to-transparent dark:via-brand-light" />
              </TiltCard>
            </ScrollReveal>

            {/* Core Pillars */}
            <ScrollReveal delay={100} isRtl={isRtl} direction="right">
              <div className="grid grid-cols-2 gap-4">
                {corePillars.map((pillar, idx) => (
                  <TiltCard key={idx} className="p-5 rounded-xl border border-border dark:border-border bg-surface dark:bg-surfaceElevated hover:border-brand/50 transition-all flex flex-col items-center text-center group">
                    <div className="w-10 h-10 rounded-lg bg-brand/10 dark:bg-brandLight/20 flex items-center justify-center text-brand dark:text-brand-light mb-3 group-hover:bg-brand group-hover:text-background dark:group-hover:bg-brandLight dark:group-hover:text-background transition-colors">
                      {pillar.icon}
                    </div>
                    <span className="text-sm font-semibold text-foreground dark:text-foreground leading-snug">
                      {pillar.title}
                    </span>
                  </TiltCard>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Bio + Journey Timeline */}
          <div className="lg:col-span-7 space-y-10">
            {/* Header */}
            <ScrollReveal isRtl={isRtl} direction="left">
              <div className="mb-6">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand dark:text-brand-light">
                  {isRtl ? "من أنا" : "WHO IS ABDULGHANI"}
                </span>
                <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-foreground dark:text-foreground mt-2 leading-tight">
                  {isRtl ? "مهندس ذكاء اصطناعي<br />و مطور أنظمة ذكية" : "AI ENGINEER &<br />INTELLIGENT SYSTEMS DEVELOPER"}
                </h2>
              </div>
            </ScrollReveal>

            {/* Bio Paragraphs */}
            <ScrollReveal delay={100} isRtl={isRtl} direction="left">
              <div className="space-y-4 text-base sm:text-lg text-muted-foreground dark:text-muted-foreground leading-relaxed font-sans">
                <p>
                  {isRtl
                    ? "أنا عبدالغني الشبامي، مهندس ذكاء اصطناعي ومطور برمجيات شغوف ببناء حلول ذكية تحل مشكلات حقيقية. أجمع بين الخبرة في تطوير البرمجيات التقليدية وهندسة الذكاء الاصطناعي الحديثة لإنشاء أنظمة عملية وقابلة للتوسع."
                    : "I'm Abdulghani Al-Shibami, an AI Engineer and Software Developer passionate about building intelligent solutions that solve real problems. I bridge traditional software engineering with modern AI to create practical, scalable systems."}
                </p>
                <p>
                  {isRtl
                    ? "مشاريعي الرائدة تشمل: نظام تتبع البنية التحتية الجامعية (Campus IT Tracker) — نظام شامل لإدارة أصول وشبكات الحرم الجامعي بتقنيات C# و Oracle، ومختبر الخوارزميات التفاعلي (MetaAlgorithm Lab) — منصة تعليمية لتصور وتحليل تعقيد الخوارزميات."
                    : "My flagship projects include: Campus IT Infrastructure Tracker — a comprehensive campus asset and network management system built with C# and Oracle, and MetaAlgorithm Lab — an interactive platform for algorithm complexity visualization and analysis."}
                </p>
                <p>
                  {isRtl
                    ? "أؤمن بـ 'الهندسة على الملأ' — بناء الكود في العلن، مشاركة المعرفة، والنمو مع المجتمع التقني العالمي."
                    : "I believe in 'Engineering in Public' — building in the open, sharing knowledge, and growing with the global tech community."}
                </p>
              </div>
            </ScrollReveal>

            {/* Journey Timeline */}
            <ScrollReveal delay={200} isRtl={isRtl} direction="left">
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute start-3 top-0 bottom-0 w-0.5 bg-brand/20 dark:bg-brandLight/20" aria-hidden="true" />
                
                <div className="space-y-8 ps-10">
                  {journey.map((item, idx) => (
                    <div key={idx} className="relative group">
                      {/* Timeline Dot */}
                      <div className="absolute start-3 -translate-x-1/2 w-3 h-3 rounded-full bg-background dark:bg-background border-2 border-brand dark:border-brandLight transition-all duration-300 group-hover:scale-125 group-hover:border-brandLight dark:group-hover:border-brand z-10" />
                      
                      <div className="space-y-1">
                        <div className="flex items-baseline gap-3">
                          <span className="font-mono text-sm font-bold text-brand dark:text-brandLight whitespace-nowrap">
                            {item.year}
                          </span>
                          <span className="font-sans font-bold text-sm uppercase tracking-wider text-foreground dark:text-foreground">
                            {item.title}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground dark:text-muted-foreground font-sans leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}