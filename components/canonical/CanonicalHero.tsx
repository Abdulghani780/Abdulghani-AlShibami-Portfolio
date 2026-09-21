"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Locale } from "@/lib/i18n/dictionaries";

interface CanonicalHeroProps {
  locale: Locale;
}

const TERMINAL_LINES_EN = [
  { text: "[INIT] Titanium Slate Runtime v3.4.1 — online", color: "text-indigo-400" },
  { text: "[AUTH] Engineer: Abdulghani Al-Shibami · Systems Architect", color: "text-cyan-400" },
  { text: "[LOAD] 5 flagship project instances linked to neural bus", color: "text-slate-300" },
  { text: "[PERF] Algorithm benchmarks: HeapSort 3.14ms · A* 1.2ms", color: "text-slate-300" },
  { text: "[STATUS] All systems online. Ready for command.", color: "text-emerald-400" },
];

const TERMINAL_LINES_AR = [
  { text: "[INIT] بيئة تشغيل التيتانيوم السيبراني v3.4.1 — نشطة", color: "text-indigo-400" },
  { text: "[AUTH] المهندس: عبدالغني الشبامي · مهندس أنظمة", color: "text-cyan-400" },
  { text: "[LOAD] 5 مشاريع رئيسية متصلة بالشبكة مع نماذج 3D", color: "text-slate-300" },
  { text: "[STATUS] جميع الأنظمة جاهزة للأوامر.", color: "text-emerald-400" },
];

export function CanonicalHero({ locale }: CanonicalHeroProps) {
  const isAr = locale === "ar";
  const [cpuVal, setCpuVal] = useState(18);
  const [memVal, setMemVal] = useState(2.4);
  const [algCount, setAlgCount] = useState(847);
  const [termLines, setTermLines] = useState<{ text: string; color: string }[]>([]);
  const [termInput, setTermInput] = useState("");
  const termBodyRef = useRef<HTMLDivElement>(null);
  const lines = isAr ? TERMINAL_LINES_AR : TERMINAL_LINES_EN;

  // Progressive terminal reveal on mount
  useEffect(() => {
    setTermLines([]);
    let i = 0;
    const tick = setInterval(() => {
      if (i < lines.length) {
        const nextLine = lines[i];
        if (nextLine) {
          setTermLines((prev) => [...prev, nextLine]);
        }
        i++;
      } else {
        clearInterval(tick);
      }
    }, 450);
    return () => clearInterval(tick);
  }, [isAr, lines]);

  // Live telemetry ticker
  useEffect(() => {
    const id = setInterval(() => {
      setCpuVal(Math.floor(Math.random() * 10 + 14));
      setMemVal(parseFloat((Math.random() * 0.8 + 2.0).toFixed(1)));
      setAlgCount((n) => n + Math.floor(Math.random() * 3));
    }, 2400);
    return () => clearInterval(id);
  }, []);

  // Auto-scroll terminal
  useEffect(() => {
    if (termBodyRef.current) {
      termBodyRef.current.scrollTop = termBodyRef.current.scrollHeight;
    }
  }, [termLines]);

  const [mousePos, setMousePos] = useState({ x: 700, y: 300 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const runQuickCommand = (cmd: string) => {
    const entry = { text: `> ${cmd}`, color: "text-indigo-400" };
    let response: { text: string; color: string } | null = null;
    if (cmd === "help") {
      response = { text: "Commands: projects · whoami · status · clear", color: "text-slate-300" };
    } else if (cmd === "projects") {
      response = { text: "1: Campus IT Tracker  2: MetaAlgorithm Lab  3: Cafena  4: NovaTech  5: GP Portal", color: "text-cyan-400" };
    } else if (cmd === "whoami") {
      response = { text: "Abdulghani Al-Shibami — Software Engineer & Systems Architect", color: "text-slate-200" };
    } else if (cmd === "status") {
      response = { text: `CPU: ${cpuVal}%  MEM: ${memVal}GB  Algorithms: ${algCount}  Projects: 5`, color: "text-emerald-400" };
    } else if (cmd === "clear") {
      setTermLines([]);
      setTermInput("");
      return;
    } else {
      response = { text: `Command not found: '${cmd}'. Type 'help'`, color: "text-slate-500" };
    }
    setTermLines((prev) => (response ? [...prev, entry, response] : [...prev, entry]));
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = termInput.trim().toLowerCase();
    if (!cmd) return;
    runQuickCommand(cmd);
    setTermInput("");
  };

  const METRICS = [
    { label: isAr ? "المعالج" : "CPU", value: `${cpuVal}%`, color: "text-indigo-400" },
    { label: isAr ? "الذاكرة" : "RAM", value: `${memVal}GB`, color: "text-cyan-400" },
    { label: isAr ? "خوارزميات" : "Algorithms", value: `${algCount}`, color: "text-white" },
    { label: isAr ? "مشاريع" : "Projects", value: "5", color: "text-emerald-400" },
  ];

  return (
    <section
      className="relative w-full min-h-screen bg-canvas text-content-primary flex flex-col overflow-hidden transition-colors duration-300"
      dir={isAr ? "rtl" : "ltr"}
      onMouseMove={handleMouseMove}
    >
      {/* ── Electric background glows ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Mouse interactive spotlight */}
        <div
          className="absolute pointer-events-none transition-opacity duration-300"
          style={{
            width: "800px",
            height: "800px",
            left: `${mousePos.x - 400}px`,
            top: `${mousePos.y - 400}px`,
            background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, rgba(6,182,212,0.03) 40%, transparent 70%)",
          }}
        />
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-500/[0.04] rounded-full blur-[160px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-500/[0.03] rounded-full blur-[140px]" />
        {/* Indigo dot particle grid */}
        <div
          className="absolute inset-0 opacity-[0.3] dark:opacity-[0.4]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(99,102,241,0.3) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      {/* ── TOP NAVIGATION ── */}
      <header className="relative z-20 w-full flex items-center justify-between px-6 sm:px-10 lg:px-16 pt-6 pb-4">
        <Link
          href={`/${locale}`}
          className="font-mono text-sm font-bold tracking-widest text-content-primary hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors uppercase"
        >
          ABDULGHANI.DEV
        </Link>

        <nav className="flex items-center gap-3 sm:gap-6 lg:gap-8 text-xs font-mono font-medium">
          {[
            { href: "#projects", en: "Projects", ar: "المشاريع", mobile: true },
            { href: "#sandbox", en: "Live Sandbox", ar: "المحاكي", mobile: false },
            { href: "#studio", en: "Demo Studio", ar: "معمل الديمو", mobile: false },
            { href: "#contact", en: "Contact", ar: "تواصل", mobile: true },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-content-muted hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors relative group ${
                item.mobile ? "inline-block" : "hidden md:inline-block"
              }`}
            >
              {isAr ? item.ar : item.en}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-indigo-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <Link
            href={isAr ? "/en" : "/ar"}
            className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-surface-secondary border border-hairline hover:border-indigo-500/60 text-indigo-600 dark:text-indigo-400 transition-colors"
          >
            {isAr ? "EN" : "عربي"}
          </Link>
        </nav>
      </header>

      {/* ── SECTION LABEL & AVAILABILITY STATUS ── */}
      <div className="relative z-10 px-6 sm:px-10 lg:px-16 pt-8 flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 font-mono text-[10px] tracking-[0.18em] text-indigo-600 dark:text-indigo-400 uppercase font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400 motion-safe:animate-ping" />
          {isAr ? "SECTION 01 / البطل" : "SECTION 01 / HERO"}
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-secondary/90 border border-hairline text-[11px] font-mono text-content-secondary">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-emerald-500 dark:text-emerald-400 font-semibold">{isAr ? "الحالة:" : "STATUS:"}</span>
          <span>{isAr ? "متاح لأدوار هندسة الأنظمة والذكاء الاصطناعي" : "Available for Systems Architecture & AI"}</span>
        </div>
      </div>

      {/* ── CINEMATIC HERO TYPOGRAPHY + 3D CORE & PORTRAIT ── */}
      <div className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-0 items-center px-6 sm:px-10 lg:px-16 pt-4 pb-0">

        {/* Left: Cinematic Headline (lg:col-span-7) */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
          {/* Tag chips */}
          <div className="flex flex-wrap gap-2">
            {(isAr
              ? ["مهندس برمجيات", "باحث خوارزميات", "مطور متكامل"]
              : ["SOFTWARE ENGINEER", "ALGORITHM RESEARCHER", "FULL-STACK ARCHITECT"]
            ).map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-[10px] font-mono bg-surface-secondary border border-hairline text-content-secondary tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Cinematic display headline */}
          <div className="space-y-0 leading-none">
            {(isAr
              ? ["هندسة", "الأنظمة", "والخوارزميات"]
              : ["SOFTWARE", "ENGINEER", "& ARCHITECT"]
            ).map((word, i) => (
              <div
                key={word}
                className="overflow-hidden"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <h1
                  className={`block font-extrabold tracking-tight text-content-primary leading-[0.92]
                    ${i === 2
                      ? "text-4xl sm:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 dark:from-indigo-400 via-cyan-500 dark:via-cyan-400 to-emerald-500 dark:to-emerald-400"
                      : "text-5xl sm:text-7xl lg:text-[104px]"
                    }`}
                >
                  {word}
                </h1>
              </div>
            ))}
          </div>

          {/* Subtitle */}
          <p className="text-content-muted text-sm sm:text-base max-w-lg leading-relaxed">
            {isAr
              ? "منصة تحكم هندسية متقدمة مبنية على لوحة التيتانيوم السيبراني والأزرق الكهربائي، مع ديمو تفاعلي حقيقي لكل مشروع."
              : "A futuristic engineering command center crafted in Titanium Slate and Electric Indigo, streaming live interactive simulations for every project."}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-400 hover:to-indigo-500 text-white font-semibold text-xs tracking-wider uppercase transition-all duration-200 shadow-[0_0_28px_rgba(99,102,241,0.45)] hover:shadow-[0_0_40px_rgba(99,102,241,0.7)] hover:scale-[1.03] active:scale-[0.97]"
            >
              {isAr ? "استعراض المشاريع" : "Explore Projects"}
            </a>
            <a
              href="#sandbox"
              className="px-7 py-3.5 rounded-full bg-surface border border-indigo-500/40 text-content-primary font-medium text-xs tracking-wider uppercase transition-all duration-200 hover:bg-indigo-500/10 hover:border-indigo-400 active:scale-[0.97]"
            >
              {isAr ? "تشغيل المحاكي" : "Launch Sandbox"}
            </a>
          </div>

          {/* Tech stack pills */}
          <div>
            <div className="font-mono text-[10px] tracking-[0.15em] text-content-muted uppercase pb-2.5">
              {isAr ? "مكدس التقنيات الحي" : "LIVE TECH STACK"}
            </div>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "TypeScript", "Python", "C# .NET", "Oracle DB", "Supabase", "Docker", "Tailwind"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-full text-[11px] font-mono bg-surface-secondary border border-hairline text-content-secondary hover:border-indigo-500/50 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* Right: Portrait + 3D Core Card + Terminal (lg:col-span-5) */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center gap-5 pt-8 lg:pt-0">
          
          <div className="flex items-center gap-4">
            {/* 3D Computational Core Preview Card */}
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border border-indigo-500/35 shadow-[0_0_30px_rgba(99,102,241,0.25)] group hidden sm:block">
              <Image
                src="/images/hero/hero-abstract-core.jpg"
                alt="3D Computational Core"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <span className="absolute bottom-1.5 left-1.5 px-2 py-0.5 rounded bg-slate-950/80 text-[8px] font-mono text-cyan-400 border border-cyan-500/30">
                3D CORE v3.4
              </span>
            </div>

            {/* Portrait with electric data lines */}
            <div className="relative w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] lg:w-[220px] lg:h-[220px] flex-shrink-0">
              {/* Outer glowing ring */}
              <div className="absolute inset-0 rounded-full border border-indigo-500/40 shadow-[0_0_40px_rgba(99,102,241,0.25)] animate-pulse" />
              <div className="absolute inset-[6px] rounded-full border border-cyan-500/20" />
              {/* Portrait image */}
              <div className="absolute inset-3 rounded-full overflow-hidden border border-indigo-500/30">
                <Image
                  src="/images/profile/abdulghani-profile.webp"
                  alt="Abdulghani Al-Shibami"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
              {/* Electric data lines radiating out */}
              <svg
                className="absolute inset-[-60px] w-[calc(100%+120px)] h-[calc(100%+120px)] pointer-events-none"
                viewBox="-60 -60 420 420"
                fill="none"
              >
                <path d="M 150 -60 L 150 20" stroke="#6366F1" strokeWidth="1" strokeOpacity="0.6" strokeDasharray="4 4" />
                <path d="M 150 280 L 150 360" stroke="#6366F1" strokeWidth="1" strokeOpacity="0.6" strokeDasharray="4 4" />
                <path d="M -60 150 L 20 150" stroke="#06B6D4" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="4 4" />
                <path d="M 280 150 L 360 150" stroke="#06B6D4" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="4 4" />
                <path d="M 60 60 L 30 30" stroke="#6366F1" strokeWidth="0.8" strokeOpacity="0.4" />
                <path d="M 240 60 L 270 30" stroke="#6366F1" strokeWidth="0.8" strokeOpacity="0.4" />
                <path d="M 60 240 L 30 270" stroke="#06B6D4" strokeWidth="0.8" strokeOpacity="0.4" />
                <path d="M 240 240 L 270 270" stroke="#06B6D4" strokeWidth="0.8" strokeOpacity="0.4" />
                {/* Corner dots */}
                <circle cx="30" cy="30" r="2.5" fill="#6366F1" fillOpacity="0.7" />
                <circle cx="270" cy="30" r="2.5" fill="#6366F1" fillOpacity="0.7" />
                <circle cx="30" cy="270" r="2.5" fill="#06B6D4" fillOpacity="0.7" />
                <circle cx="270" cy="270" r="2.5" fill="#06B6D4" fillOpacity="0.7" />
              </svg>
            </div>
          </div>

          {/* Technical Console */}
          <div
            className="w-full max-w-sm bg-[#0F172A] rounded-2xl border border-indigo-500/30 p-4 flex flex-col shadow-[0_0_35px_-5px_rgba(99,102,241,0.18)] relative overflow-hidden text-left"
            dir="ltr"
          >
            {/* Console header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 mb-2">
              <span className="font-mono text-[10px] tracking-widest text-indigo-400 font-bold uppercase">
                Technical Console
              </span>
              <button
                type="button"
                onClick={() => setTermLines([])}
                aria-label="Clear terminal output"
                className="text-slate-400 hover:text-white text-[10px] font-mono"
              >
                CLR
              </button>
            </div>
            {/* Log body */}
            <div
              ref={termBodyRef}
              className="flex-1 h-32 overflow-y-auto space-y-1 font-mono text-[10px] text-slate-300 scrollbar-thin text-left"
            >
              {termLines.filter(Boolean).map((line, i) => (
                <div key={i} className={line?.color || "text-indigo-400"}>{line?.text || ""}</div>
              ))}
            </div>
            {/* Prompt input */}
            <form onSubmit={handleCommand} className="flex items-center gap-2 border-t border-slate-800 pt-2 mt-2">
              <span className="text-indigo-400 font-mono text-sm font-bold" aria-hidden="true">›</span>
              <input
                type="text"
                value={termInput}
                onChange={(e) => setTermInput(e.target.value)}
                placeholder="type 'help'..."
                aria-label="Terminal command input"
                className="flex-1 bg-transparent font-mono text-[11px] text-white placeholder-slate-500 outline-none border-none text-left"
              />
              <span className="w-2 h-3.5 bg-indigo-400 type-cursor" />
            </form>
            {/* Quick command chips */}
            <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-800/60 mt-1">
              <span className="font-mono text-[9px] text-slate-400 uppercase mr-1">RUN:</span>
              {["help", "projects", "whoami", "status", "clear"].map((cmd) => (
                <button
                  key={cmd}
                  type="button"
                  onClick={() => runQuickCommand(cmd)}
                  className="px-2 py-0.5 rounded text-[9px] font-mono bg-slate-800 border border-slate-700 text-slate-300 hover:text-indigo-400 hover:border-indigo-500/40 transition-colors cursor-pointer"
                >
                  &gt; {cmd}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── LIVE METRICS HUD BAR ── */}
      <div className="relative z-10 mt-8 mx-6 sm:mx-10 lg:px-16 mb-0">
        <div className="w-full border-t border-hairline pt-5 pb-8">
          <div className="flex flex-wrap items-center gap-3 sm:gap-6">
            {METRICS.map((m) => (
              <div
                key={m.label}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-surface-secondary border border-hairline hover:border-indigo-500/30 transition-colors"
              >
                <span className="font-mono text-[10px] text-content-muted uppercase tracking-wider">{m.label}:</span>
                <span className={`font-mono text-sm font-bold ${m?.color || "text-indigo-600 dark:text-indigo-400"}`} suppressHydrationWarning>
                  {m?.value}
                </span>
              </div>
            ))}
            {/* Separator + scroll indicator */}
            <div className="flex items-center gap-2 ml-auto text-content-muted">
              <span className="font-mono text-[10px]">{isAr ? "اسحب لأسفل" : "SCROLL TO EXPLORE"}</span>
              <span className="w-px h-4 bg-hairline" />
              <span className="text-indigo-600 dark:text-indigo-400 text-xs animate-bounce">↓</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-canvas to-transparent pointer-events-none z-10" />
    </section>
  );
}
