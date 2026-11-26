"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Locale } from "@/lib/i18n/dictionaries";
import { MapPin, CheckSquare, ShieldCheck, Database, Users, Monitor, Cpu, Server, Layers, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TiltCard } from "@/components/ui/TiltCard";

export function FlagshipCaseStudySection({ locale }: { locale: Locale }) {
  const isRtl = locale === "ar";

  const keyFeatures = [
    {
      title: isRtl ? "الخريطة التفاعلية للحرم الجامعي" : "Interactive Campus Map",
      icon: <MapPin className="w-4 h-4 text-brand dark:text-brandLight" />,
    },
    {
      title: isRtl ? "لوحة كانبان لفرز البلاغات (ITIL)" : "ITIL Service Desk Kanban",
      icon: <CheckSquare className="w-4 h-4 text-brand dark:text-brandLight" />,
    },
    {
      title: isRtl ? "إدارة ومناقلة العهد الرقمية" : "Asset Custody Transfer",
      icon: <ShieldCheck className="w-4 h-4 text-brand dark:text-brandLight" />,
    },
    {
      title: isRtl ? "قاعدة بيانات Oracle موحدة" : "Unified Oracle Database",
      icon: <Database className="w-4 h-4 text-brand dark:text-brandLight" />,
    },
    {
      title: isRtl ? "نظام صلاحيات RBAC متقدم" : "Advanced RBAC Permissions",
      icon: <Users className="w-4 h-4 text-brand dark:text-brandLight" />,
    },
    {
      title: isRtl ? "لوحة مراقبة فورية" : "Real-time Monitoring Dashboard",
      icon: <Monitor className="w-4 h-4 text-brand dark:text-brandLight" />,
    },
    {
      title: isRtl ? "معالجة متوازية عالية الأداء" : "High-Performance Parallel Processing",
      icon: <Cpu className="w-4 h-4 text-brand dark:text-brandLight" />,
    },
    {
      title: isRtl ? "هندسة خدمات قابلة للتوسع" : "Scalable Service Architecture",
      icon: <Server className="w-4 h-4 text-brand dark:text-brandLight" />,
    },
    {
      title: isRtl ? "طبقات عزل نظيفة (Clean Architecture)" : "Clean Architecture Layers",
      icon: <Layers className="w-4 h-4 text-brand dark:text-brandLight" />,
    },
  ];

  const techStack = [
    { name: "C#", color: "#239120" },
    { name: "WinForms", color: "#5C2D91" },
    { name: "Oracle 19c", color: "#F80000" },
    { name: "PL/SQL", color: "#800000" },
    { name: "Entity Framework", color: "#0078D4" },
    { name: "RabbitMQ", color: "#FF6600" },
    { name: "Redis", color: "#DC382D" },
    { name: "Serilog", color: "#009688" },
    { name: "xUnit", color: "#B02E0C" },
    { name: "GitHub Actions", color: "#2088FF" },
  ];

  return (
    <section
      id="flagship-case-study"
      className="relative w-full bg-background dark:bg-background text-foreground dark:text-foreground py-20 lg:py-28 border-b border-border/5 dark:border-border/5 transition-colors overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal isRtl={isRtl} direction="up">
          <div className="mb-12 sm:mb-16">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand dark:text-brandLight block mb-3">
              {isRtl ? "دراسة حالة رائدة" : "FLAGSHIP CASE STUDY"}
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-foreground dark:text-foreground">
              {isRtl ? "نظام تتبع البنية التحتية الجامعية" : "CAMPUS IT INFRASTRUCTURE TRACKER"}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-muted-foreground dark:text-muted-foreground max-w-2xl font-sans leading-relaxed">
              {isRtl
                ? "نظام مؤسسي شامل لإدارة أصول وشبكات وخدمات الحرم الجامعي — مبني بهندسة نظيفة، قابلية توسع، وموثوقية عالية."
                : "A comprehensive enterprise system for managing campus assets, networks, and services — built with clean architecture, scalability, and high reliability."}
            </p>
          </div>
        </ScrollReveal>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Visual + Key Metrics */}
          <div className="lg:col-span-6 space-y-8">
            {/* Hero Visual */}
            <ScrollReveal isRtl={isRtl} direction="right">
              <TiltCard className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border dark:border-border bg-surface dark:bg-surfaceElevated group hover:border-brand/50 transition-all">
                <Image
                  src="/images/projects/campus-it-tracker/01-dashboard-modern.jpg"
                  alt="Campus IT Tracker — Modern Dashboard"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Gold Accent Bar */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-brand to-transparent dark:via-brandLight" />
              </TiltCard>
            </ScrollReveal>

            {/* Key Metrics */}
            <ScrollReveal delay={100} isRtl={isRtl} direction="right">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { value: "50+", label: isRtl ? "مبنى" : "Buildings" },
                  { value: "1,200+", label: isRtl ? "أصل" : "Assets" },
                  { value: "99.9%", label: isRtl ? "زمن تشغيل" : "Uptime" },
                  { value: "< 200ms", label: isRtl ? "استجابة" : "Response" },
                ].map((metric, idx) => (
                  <TiltCard key={idx} className="p-4 rounded-xl border border-border dark:border-border bg-surface dark:bg-surfaceElevated hover:border-brand/50 transition-all text-center group">
                    <div className="font-mono text-2xl sm:text-3xl font-bold text-brand dark:text-brandLight mb-1">
                      {metric.value}
                    </div>
                    <div className="text-xs font-medium text-muted-foreground dark:text-muted-foreground uppercase tracking-wider">
                      {metric.label}
                    </div>
                  </TiltCard>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Features + Tech Stack */}
          <div className="lg:col-span-6 space-y-8">
            {/* Key Features */}
            <ScrollReveal isRtl={isRtl} direction="left">
              <h3 className="font-sans font-bold text-lg uppercase tracking-wider text-foreground dark:text-foreground mb-5 flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-brand/10 dark:bg-brandLight/20 flex items-center justify-center text-brand dark:text-brandLight">
                  <CheckSquare className="w-4 h-4" />
                </span>
                {isRtl ? "المميزات الرئيسية" : "KEY FEATURES"}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {keyFeatures.map((feature, idx) => (
                  <TiltCard key={idx} className="p-4 rounded-xl border border-border dark:border-border bg-surface dark:bg-surfaceElevated hover:border-brand/50 transition-all flex items-start gap-3 group">
                    <div className="w-10 h-10 rounded-lg bg-brand/10 dark:bg-brandLight/20 flex items-center justify-center shrink-0 group-hover:bg-brand group-hover:text-background dark:group-hover:bg-brandLight dark:group-hover:text-background transition-colors">
                      {feature.icon}
                    </div>
                    <span className="text-sm font-medium text-foreground dark:text-foreground leading-snug pt-0.5">
                      {feature.title}
                    </span>
                  </TiltCard>
                ))}
              </div>
            </ScrollReveal>

            {/* Tech Stack */}
            <ScrollReveal delay={100} isRtl={isRtl} direction="left">
              <h3 className="font-sans font-bold text-lg uppercase tracking-wider text-foreground dark:text-foreground mb-5 flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-brand/10 dark:bg-brandLight/20 flex items-center justify-center text-brand dark:text-brandLight">
                  <Cpu className="w-4 h-4" />
                </span>
                {isRtl ? "التقنيات المستخدمة" : "TECHNOLOGY STACK"}
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider"
                    style={{
                      backgroundColor: `${tech.color}15`,
                      color: tech.color,
                      border: `1px solid ${tech.color}30`,
                    }}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            {/* CTA */}
            <ScrollReveal delay={200} isRtl={isRtl} direction="left">
              <Link
                href={`/${locale}/projects/campus-it-tracker`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-hover hover:bg-brand text-background font-bold text-sm tracking-wider uppercase shadow-md hover:shadow-lg transition-all duration-300 active:scale-95 group cursor-pointer"
              >
                <span>{isRtl ? "دراسة الحالة الكاملة" : "FULL CASE STUDY"}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}