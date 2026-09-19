"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Locale } from "@/lib/i18n/dictionaries";

interface CanonicalHeroProps {
  locale: Locale;
}

export function CanonicalHero({ locale }: CanonicalHeroProps) {
  const isAr = locale === "ar";

  // Dynamic telemetry states
  const [cpuUsage, setCpuUsage] = useState("0.0 %");
  const [streamRate, setStreamRate] = useState("12.87 M/s");
  const [logs, setLogs] = useState<string[]>([
    "[INIT] System kernel v3.4.1 initialized in 0.8ms",
    "[AUTH] Operator: Abdulghani Al-Shibami (Systems Architect)",
    "[NET] 5 Flagship Workstation Instances linked to bus",
    "[STATUS] Ready for native WASM execution & live telemetry",
    "> Waiting for operator command...",
  ]);
  const [terminalInput, setTerminalInput] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const cpu = (Math.random() * 4 + 1.2).toFixed(1);
      const rate = (Math.random() * 2 + 12).toFixed(2);
      setCpuUsage(`${cpu} %`);
      setStreamRate(`${rate} M/s`);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!terminalInput.trim()) return;
    const cmd = terminalInput.trim().toLowerCase();
    const newLogs = [...logs, `> ${terminalInput}`];

    if (cmd === "help") {
      newLogs.push("Available commands: 'projects', 'status', 'whoami', 'clear'");
    } else if (cmd === "projects") {
      newLogs.push("1: Campus IT Tracker | 2: MetaAlgorithm Lab | 3: Cafena | 4: NovaTech | 5: GP Portal");
    } else if (cmd === "whoami") {
      newLogs.push("Abdulghani Al-Shibami — Software Engineer & AI Systems Builder");
    } else if (cmd === "status") {
      newLogs.push(`All 5 workstations online. CPU: ${cpuUsage}, Rate: ${streamRate}`);
    } else if (cmd === "clear") {
      setLogs(["> Terminal cleared. Ready."]);
      setTerminalInput("");
      return;
    } else {
      newLogs.push(`Command not recognized: '${cmd}'. Type 'help' for instructions.`);
    }

    setLogs(newLogs);
    setTerminalInput("");
  };

  return (
    <section className="relative w-full min-h-[92vh] bg-[#04070D] text-white flex flex-col justify-between px-4 sm:px-8 lg:px-12 pt-6 pb-12 overflow-hidden border-b border-[#00FF9D]/15">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00FF9D]/[0.035] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#00F0FF]/[0.03] rounded-full blur-[140px] pointer-events-none" />

      {/* ─────────────────────────────────────────────────────────────
          1. TOP NAVIGATION (Exact to Reference 1)
      ───────────────────────────────────────────────────────────── */}
      <header className="relative z-20 w-full flex items-center justify-between pb-8">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <Link
            href={`/${locale}`}
            className="text-xl sm:text-2xl font-bold tracking-tight text-white hover:text-[#00FF9D] transition-colors"
          >
            Abdulghani Al-Shibami
          </Link>
          <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[11px] font-mono bg-[#00FF9D]/10 text-[#00FF9D] border border-[#00FF9D]/30">
            {isAr ? "نظام التشغيل: نشط" : "SYS_STATUS: ONLINE"}
          </span>
        </div>

        <nav className="flex items-center space-x-4 sm:space-x-6 rtl:space-x-reverse text-sm font-medium">
          <a
            href="#projects"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            {isAr ? "المشاريع" : "Projects"}
          </a>
          <a
            href="#sandbox"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            {isAr ? "المحاكي المباشر" : "Live Sandbox"}
          </a>
          <a
            href="#studio"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            {isAr ? "معمل الديمو" : "Demo Studio"}
          </a>
          <a
            href="#contact"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            {isAr ? "تواصل" : "Contact"}
          </a>

          {/* Locale switcher */}
          <Link
            href={isAr ? "/en" : "/ar"}
            className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-900 border border-zinc-700 hover:border-[#00FF9D] text-[#00FF9D] transition-colors"
          >
            {isAr ? "English" : "عربي"}
          </Link>

          <a
            href="#contact"
            className="hidden sm:inline-block text-zinc-300 hover:text-[#00FF9D] text-xs font-mono transition-colors"
          >
            {isAr ? "دخول المشرف" : "Log in"}
          </a>
        </nav>
      </header>

      {/* ─────────────────────────────────────────────────────────────
          2. HERO CONTENT GRID (Exact to Reference 1)
      ───────────────────────────────────────────────────────────── */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center flex-1 my-auto">
        {/* Left Column (lg:col-span-7) */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
          {/* Telemetry metadata */}
          <div className="font-mono text-xs text-[#00FF9D]/90 space-y-1">
            <div className="text-[11px] tracking-widest text-[#00FF9D] font-bold">
              SYSTEM STATUS TELEMETRY
            </div>
            <div className="flex items-center space-x-6 rtl:space-x-reverse text-zinc-400">
              <span>CPU in status : <strong className="text-white font-mono">{cpuUsage}</strong></span>
              <span>Monospacezs : <strong className="text-white font-mono">{streamRate}</strong></span>
              <span>User Mode : <strong className="text-white font-mono">10.09 00Q</strong></span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex items-center space-x-2 rtl:space-x-reverse pt-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono uppercase bg-zinc-900/80 border border-zinc-700 text-zinc-300">
              EDITORIAL TYPOGRAPHY
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono uppercase bg-zinc-900/80 border border-zinc-700 text-zinc-300">
              HERO
            </span>
          </div>

          {/* Monumental Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] sm:leading-[1.15]">
            {isAr ? (
              <>
                هندسة الذكاء البرمجي <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#00FF9D]">
                  خلف الواجهة
                </span>
              </>
            ) : (
              <>
                Architecting Intelligence <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#00FF9D]">
                  Behind the Interface
                </span>
              </>
            )}
          </h1>

          {/* Subtitle */}
          <p className="text-zinc-400 text-base sm:text-lg max-w-xl leading-relaxed">
            {isAr
              ? "منصة تحكم وهندسة برمجية متقدمة، تبث خطوط بيانات التيليمتري الحية بلون الزمرد النيوني الفسفوري."
              : "A futuristic personal command center interface, presiding neon emerald's HUD bioluminescent data lines."}
          </p>

          {/* Action Buttons (Exact pill buttons from image) */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-[#00FF9D] text-black font-semibold text-xs tracking-wider uppercase transition-all duration-200 shadow-[0_0_25px_rgba(0,255,157,0.55)] hover:shadow-[0_0_35px_rgba(0,255,157,0.8)] hover:scale-[1.02] active:scale-[0.98]"
            >
              {isAr ? "استعراض المشاريع الخمسة" : "ACTION BUTTONS"}
            </a>
            <a
              href="#sandbox"
              className="px-6 py-3 rounded-full bg-zinc-950 border border-[#00FF9D]/40 text-white font-medium text-xs tracking-wider uppercase transition-all duration-200 hover:bg-[#00FF9D]/10 hover:border-[#00FF9D] active:scale-[0.98]"
            >
              {isAr ? "تشغيل محاكي النظام" : "ACTION COMMAND"}
            </a>
          </div>

          {/* Bioluminescent data bus waves (flowing towards the right) */}
          <div className="relative w-full h-12 overflow-hidden pointer-events-none opacity-80 my-2">
            <svg className="w-full h-full" viewBox="0 0 600 48" fill="none" preserveAspectRatio="none">
              <path
                d="M 0 24 C 150 10, 300 38, 450 20 C 520 12, 570 30, 600 24"
                stroke="#00FF9D"
                strokeWidth="1.5"
                strokeOpacity="0.8"
              />
              <path
                d="M 0 30 C 180 18, 320 42, 480 24 C 540 18, 580 32, 600 28"
                stroke="#00F0FF"
                strokeWidth="1"
                strokeOpacity="0.6"
              />
              <path
                d="M 0 18 C 120 8, 280 32, 420 16 C 500 8, 560 26, 600 20"
                stroke="#00FF9D"
                strokeWidth="0.8"
                strokeOpacity="0.4"
                strokeDasharray="4 4"
              />
            </svg>
          </div>

          {/* Live Tech Stack */}
          <div className="pt-2">
            <div className="font-mono text-[11px] tracking-widest text-zinc-400 uppercase pb-2">
              LIVE TECH STACK
            </div>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "TypeScript", "Tailwind CSS", "Python", "C# .NET", "Supabase", "PostgreSQL", "Docker"].map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-full text-xs font-mono bg-zinc-900/90 border border-zinc-700/80 text-zinc-300 hover:border-[#00FF9D]/60 hover:text-[#00FF9D] transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: TECHNICAL CONSOLE (lg:col-span-4) */}
        <div className="lg:col-span-4 flex flex-col items-center justify-center">
          <div className="w-full max-w-md h-[480px] bg-[#070A0F] rounded-2xl border border-[#00FF9D]/30 p-4 flex flex-col justify-between shadow-[0_0_35px_-5px_rgba(0,255,157,0.15)] relative overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
              <span className="font-mono text-xs tracking-wider text-[#00FF9D] font-bold">
                TECHNICAL CONSOLE
              </span>
              <button
                type="button"
                onClick={() => setLogs(["> Terminal reset. Ready."])}
                className="text-zinc-500 hover:text-white text-xs font-mono"
                title="Reset Console"
              >
                ✕
              </button>
            </div>

            {/* Terminal Body */}
            <div className="flex-1 py-3 font-mono text-xs space-y-2 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-800 text-zinc-300 select-text">
              {logs.map((log, idx) => (
                <div
                  key={idx}
                  className={
                    log.startsWith(">")
                      ? "text-[#00FF9D]"
                      : log.includes("[AUTH]")
                      ? "text-[#00F0FF]"
                      : log.includes("[STATUS]")
                      ? "text-emerald-400"
                      : "text-zinc-400"
                  }
                >
                  {log}
                </div>
              ))}
            </div>

            {/* Prompt input */}
            <form onSubmit={handleCommand} className="pt-2 border-t border-zinc-800 flex items-center space-x-2 rtl:space-x-reverse">
              <span className="font-mono text-[#00FF9D] text-sm font-bold">&gt;</span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="type 'help', 'projects', 'status'..."
                className="flex-1 bg-transparent border-none outline-none font-mono text-xs text-white placeholder-zinc-600"
              />
              <span className="w-2 h-4 bg-[#00FF9D] animate-pulse inline-block" />
            </form>
          </div>
        </div>

        {/* Far Right Vertical Telemetry Rail (lg:col-span-1) */}
        <div className="hidden lg:flex lg:col-span-1 flex-col items-center justify-center h-full py-6">
          <div className="w-10 h-[480px] bg-[#070A0F] rounded-xl border border-zinc-800/80 flex flex-col items-center justify-between py-4 relative shadow-inner">
            <span className="[writing-mode:vertical-lr] text-[9px] font-mono tracking-widest text-zinc-500 uppercase">
              TELEMETRY LARGE
            </span>

            {/* LED segmented bar */}
            <div className="flex flex-col space-y-1 w-2 my-auto">
              {Array.from({ length: 18 }).map((_, i) => (
                <span
                  key={i}
                  className={`w-2 h-1 rounded-sm ${
                    i > 12 ? "bg-[#00FF9D] shadow-[0_0_8px_#00FF9D]" : i > 8 ? "bg-[#00F0FF]/80" : "bg-zinc-800"
                  }`}
                />
              ))}
            </div>

            <div className="flex flex-col items-center space-y-2">
              <span className="[writing-mode:vertical-lr] text-[8px] font-mono text-zinc-400">
                25 MB/s
              </span>
              <span className="[writing-mode:vertical-lr] text-[9px] font-mono tracking-widest text-[#00FF9D] uppercase">
                TELEMETRY RAIL
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
