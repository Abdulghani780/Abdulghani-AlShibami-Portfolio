import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { dictionaries, Locale } from "@/lib/i18n/dictionaries";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ContactForm } from "@/components/features/ContactForm";

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
  const isRtl = currentLocale === "ar";

  return (
    <div className="space-y-24 sm:space-y-32 py-12 sm:py-20">
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION (References 01, 02, 03, 04, 11)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* Subtle Ambient Background Grid & Glow */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border-hairline)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-hairline)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left/Right Text Column depending on RTL */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              {/* Executive Status Ticker */}
              <div className="inline-flex items-center gap-2">
                <Badge variant="gold" dot dotColor="emerald">
                  {dict.hero.greeting}
                </Badge>
                <span className="font-mono text-[10px] text-content-muted hidden sm:inline">
                  {"// "}{dict.hero.coordinates}
                </span>
              </div>

              {/* Marquee Headline */}
              <div className="space-y-3">
                <h2 className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-gold font-medium">
                  {dict.hero.name}
                </h2>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-content-primary leading-[1.12] tracking-tight">
                  {dict.hero.title}
                </h1>
              </div>

              {/* Introduction Prose */}
              <p className="text-content-secondary text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                {dict.hero.subtitle}
              </p>

              {/* Stacked / Row Action Cluster */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link href={`/${currentLocale}#featured-projects`}>
                  <Button variant="primary" size="md" className="w-full sm:w-auto">
                    {dict.hero.exploreCta} {isRtl ? "←" : "→"}
                  </Button>
                </Link>

                <Link href={`/${currentLocale}/projects/auraledger/demo`}>
                  <Button variant="secondary" size="md" className="w-full sm:w-auto">
                    {dict.hero.simulationCta}
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right/Left Profile Placeholder Column (Strictly [PROFILE_IMAGE]) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] border border-gold/40 bg-surface/60 p-6 flex flex-col justify-between backdrop-blur-sm transition-all duration-300 hover:border-gold hover:shadow-gold">
                {/* Corner Technical Coordinate Brackets */}
                <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-gold pointer-events-none" />
                <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-gold pointer-events-none" />
                <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-gold pointer-events-none" />
                <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-gold pointer-events-none" />

                {/* Header status inside card */}
                <div className="flex items-center justify-between font-mono text-[10px] text-content-muted">
                  <span>ID: ALSHIBAMI-01</span>
                  <span className="text-status-emerald flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-status-emerald animate-ping inline-block" />
                    ONLINE
                  </span>
                </div>

                {/* Central Replacement Placeholder */}
                <div className="my-auto text-center space-y-4 py-8">
                  <div className="w-24 h-24 mx-auto border border-dashed border-gold/50 flex items-center justify-center font-serif text-3xl text-gold/80 bg-gold/5 rounded-none">
                    AS
                  </div>
                  <div className="space-y-1">
                    <div className="font-mono text-sm tracking-[0.25em] text-gold font-bold uppercase">
                      {dict.hero.profilePlaceholder}
                    </div>
                    <div className="font-mono text-[11px] text-content-muted uppercase tracking-wider">
                      {dict.hero.profileVerified}
                    </div>
                  </div>
                  <div className="text-[11px] text-content-secondary max-w-[240px] mx-auto leading-relaxed">
                    {isRtl
                      ? "إطار مخصص لاستقبال الصورة الشخصية الرسمية للمهندس عبدالغني الشبامي."
                      : "Reserved architectural container for Abdulghani Al-Shibami's official photograph."}
                  </div>
                </div>

                {/* Card Footer coordinates */}
                <div className="border-t border-hairline pt-3 flex items-center justify-between font-mono text-[9px] text-content-muted">
                  <span>{dict.hero.coordinates}</span>
                  <span>ARCH: x64_AVX512</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. SYSTEMS TELEMETRY HUD (References 01, 02, 03, 04, 11)
      ───────────────────────────────────────────────────────────── */}
      <section id="telemetry" className="border-y border-hairline bg-surface/30 py-16">
        <Container>
          <SectionHeading
            kicker="// EMPIRICAL VERIFICATION"
            title={dict.telemetry.heading}
            subtitle={dict.telemetry.subheading}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Metric 01: Throughput */}
            <Card hoverEffect cornerBrackets className="space-y-2">
              <div className="font-mono text-[11px] text-content-muted uppercase tracking-wider">
                {dict.telemetry.throughputLabel}
              </div>
              <div className="font-mono text-3xl sm:text-4xl font-bold text-gold tracking-tight">
                {dict.telemetry.throughputValue}
              </div>
              <div className="text-xs text-content-secondary">
                {dict.telemetry.throughputDesc}
              </div>
            </Card>

            {/* Metric 02: Latency */}
            <Card hoverEffect cornerBrackets className="space-y-2">
              <div className="font-mono text-[11px] text-content-muted uppercase tracking-wider">
                {dict.telemetry.latencyLabel}
              </div>
              <div className="font-mono text-3xl sm:text-4xl font-bold text-content-primary tracking-tight">
                {dict.telemetry.latencyValue}
              </div>
              <div className="text-xs text-content-secondary">
                {dict.telemetry.latencyDesc}
              </div>
            </Card>

            {/* Metric 03: Availability */}
            <Card hoverEffect cornerBrackets className="space-y-2">
              <div className="font-mono text-[11px] text-content-muted uppercase tracking-wider">
                {dict.telemetry.availabilityLabel}
              </div>
              <div className="font-mono text-3xl sm:text-4xl font-bold text-status-emerald tracking-tight">
                {dict.telemetry.availabilityValue}
              </div>
              <div className="text-xs text-content-secondary">
                {dict.telemetry.availabilityDesc}
              </div>
            </Card>

            {/* Metric 04: Invariants */}
            <Card hoverEffect cornerBrackets className="space-y-2">
              <div className="font-mono text-[11px] text-content-muted uppercase tracking-wider">
                {dict.telemetry.verificationLabel}
              </div>
              <div className="font-mono text-3xl sm:text-4xl font-bold text-gold-light tracking-tight">
                {dict.telemetry.verificationValue}
              </div>
              <div className="text-xs text-content-secondary">
                {dict.telemetry.verificationDesc}
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. SIMULATION DISCLOSURE BANNER (References 09 & 10 Standard)
      ───────────────────────────────────────────────────────────── */}
      <section>
        <Container>
          <div className="border border-gold/40 bg-gold/5 dark:bg-gold/10 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition-all hover:border-gold">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-3">
                <Badge variant="gold" dot dotColor="emerald">
                  {dict.simulationBanner.badge}
                </Badge>
                <span className="font-mono text-[10px] text-gold font-semibold uppercase tracking-wider">
                  {"// "}{dict.simulationBanner.engineOnline}
                </span>
              </div>
              <p className="text-content-secondary text-xs sm:text-sm leading-relaxed">
                {dict.simulationBanner.disclaimer}
              </p>
            </div>

            <Link href={`/${currentLocale}/projects/auraledger/demo`} className="shrink-0 w-full md:w-auto">
              <Button variant="primary" size="md" className="w-full">
                {dict.hero.simulationCta} {isRtl ? "←" : "→"}
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. FEATURED PROJECTS SHOWCASE (References 01, 02, 05, 06, 12)
      ───────────────────────────────────────────────────────────── */}
      <section id="featured-projects">
        <Container>
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10 md:mb-14">
            <SectionHeading
              kicker="// DISTRIBUTED RUNTIMES"
              title={dict.featured.heading}
              subtitle={dict.featured.subheading}
              className="mb-0"
            />
            <Link
              href={`/${currentLocale}#featured-projects`}
              className="font-mono text-xs text-gold hover:text-gold-light transition-colors uppercase tracking-wider shrink-0"
            >
              {dict.featured.viewAll}
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Flagship Card: AuraLedger */}
            <Card hoverEffect cornerBrackets className="lg:col-span-2 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <Badge variant="gold" dot dotColor="emerald">
                    {dict.featured.statusProduction}
                  </Badge>
                  <span className="font-mono text-[10px] text-content-muted">
                    SUBSTRATE: C# .NET 9 CORE
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-content-primary">
                    AuraLedger: Distributed Consensus Engine & Order Matching
                  </h3>
                  <p className="text-content-secondary text-sm leading-relaxed">
                    A high-throughput distributed state machine implementing optimized Raft consensus, speculative pre-vote phases, and unmanaged memory-mapped circular ring buffers at 145k tx/s.
                  </p>
                </div>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {["C# 13", ".NET 9", "Raft Consensus", "MemoryMappedFiles", "TLA+ Verified", "gRPC HTTP/3"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[10px] font-mono border border-hairline bg-surface/80 text-content-secondary"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Telemetry Strip & Actions */}
              <div className="pt-6 border-t border-hairline/60 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div className="font-mono text-xs text-content-muted flex items-center gap-4">
                  <span>THROUGHPUT: <strong className="text-gold font-semibold">145k TPS</strong></span>
                  <span>p99: <strong className="text-content-primary font-semibold">0.8ms</strong></span>
                </div>

                <div className="flex items-center gap-3">
                  <Link href={`/${currentLocale}/projects/auraledger/demo`}>
                    <Button variant="primary" size="sm">
                      {dict.featured.demoCta}
                    </Button>
                  </Link>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-8 px-3 border border-hairline bg-surface hover:border-gold hover:text-gold text-xs font-mono tracking-wider transition-colors uppercase"
                  >
                    {dict.featured.sourceCta} ↗
                  </a>
                </div>
              </div>
            </Card>

            {/* Project 02: NeuroScribe Multi-Agent */}
            <Card hoverEffect className="flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <Badge variant="status" dot dotColor="amber">
                    {dict.featured.statusVerified}
                  </Badge>
                  <span className="font-mono text-[10px] text-content-muted">
                    AI AGENT SWARM
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-content-primary">
                    NeuroScribe: Multi-Agent Code Generation Fabric
                  </h3>
                  <p className="text-content-secondary text-xs sm:text-sm leading-relaxed">
                    Multi-agent autonomous coding swarm coordinating planning, synthesis, static linting, and formal verification gates with 99.4% syntactic pass rates.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {["TypeScript", "LangGraph", "Next.js 15", "PostgreSQL"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] font-mono border border-hairline bg-surface/80 text-content-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-hairline/60 flex items-center justify-between">
                <span className="font-mono text-[11px] text-content-muted">
                  PASS: <strong className="text-status-emerald font-semibold">99.4%</strong>
                </span>
                <Link href={`/${currentLocale}/projects/auraledger/demo`}>
                  <Button variant="secondary" size="sm">
                    {dict.featured.demoCta}
                  </Button>
                </Link>
              </div>
            </Card>

            {/* Project 03: OmniTrader C# */}
            <Card hoverEffect className="flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <Badge variant="status">
                    {dict.featured.statusProduction}
                  </Badge>
                  <span className="font-mono text-[10px] text-content-muted">
                    C# DESKTOP / WPF
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-content-primary">
                    OmniTrader: Sub-Millisecond L2 Execution Terminal
                  </h3>
                  <p className="text-content-secondary text-xs sm:text-sm leading-relaxed">
                    Native desktop algorithmic trading workstation featuring LMAX Disruptor order pipelines and hardware-accelerated charting.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {[".NET 9", "WPF", "Disruptor", "Zero GC"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] font-mono border border-hairline bg-surface/80 text-content-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-hairline/60 flex items-center justify-between">
                <span className="font-mono text-[11px] text-content-muted">
                  DISPATCH: <strong className="text-gold font-semibold">&lt; 45μs</strong>
                </span>
                <Link href={`/${currentLocale}/projects/auraledger/demo`}>
                  <Button variant="secondary" size="sm">
                    {dict.featured.demoCta}
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. CORE ARCHITECTURAL COMPETENCIES (References 01 & 02)
      ───────────────────────────────────────────────────────────── */}
      <section id="competencies" className="border-t border-hairline bg-surface/20 py-20">
        <Container>
          <SectionHeading
            kicker="// FOUNDATIONAL PILLARS"
            title={dict.competencies.heading}
            subtitle={dict.competencies.subheading}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card hoverEffect className="space-y-3">
              <div className="font-mono text-gold text-xs tracking-wider">{"// 01"}</div>
              <h4 className="font-serif text-lg font-normal text-content-primary">
                {dict.competencies.systemsTitle}
              </h4>
              <p className="text-xs text-content-secondary leading-relaxed">
                {dict.competencies.systemsDesc}
              </p>
            </Card>

            <Card hoverEffect className="space-y-3">
              <div className="font-mono text-gold text-xs tracking-wider">{"// 02"}</div>
              <h4 className="font-serif text-lg font-normal text-content-primary">
                {dict.competencies.aiTitle}
              </h4>
              <p className="text-xs text-content-secondary leading-relaxed">
                {dict.competencies.aiDesc}
              </p>
            </Card>

            <Card hoverEffect className="space-y-3">
              <div className="font-mono text-gold text-xs tracking-wider">{"// 03"}</div>
              <h4 className="font-serif text-lg font-normal text-content-primary">
                {dict.competencies.lowLatencyTitle}
              </h4>
              <p className="text-xs text-content-secondary leading-relaxed">
                {dict.competencies.lowLatencyDesc}
              </p>
            </Card>

            <Card hoverEffect className="space-y-3">
              <div className="font-mono text-gold text-xs tracking-wider">{"// 04"}</div>
              <h4 className="font-serif text-lg font-normal text-content-primary">
                {dict.competencies.cloudTitle}
              </h4>
              <p className="text-xs text-content-secondary leading-relaxed">
                {dict.competencies.cloudDesc}
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. CONTACT & EXECUTIVE INQUIRY (Section ID: contact)
      ───────────────────────────────────────────────────────────── */}
      <section id="contact" className="py-20">
        <Container>
          <div className="max-w-2xl mx-auto border border-hairline bg-surface p-8 sm:p-12 space-y-8">
            <div className="space-y-3 text-center">
              <div className="font-mono text-[11px] text-gold uppercase tracking-[0.2em]">
                {"// INITIATE TRANSMISSION"}
              </div>
              <h3 className="font-serif text-3xl font-normal text-content-primary">
                {isRtl ? "تواصل معي مباشرة" : "Executive Inquiry & Contact"}
              </h3>
              <p className="text-content-secondary text-xs sm:text-sm leading-relaxed max-w-lg mx-auto">
                {isRtl
                  ? "للمشاريع الاستشارية المعمارية، وتطوير الأنظمة الموزعة فائقة الموثوقية."
                  : "For mission-critical systems architecture, distributed computing advisories, and engineering leadership inquiries."}
              </p>
            </div>

            <ContactForm isRtl={isRtl} />
          </div>
        </Container>
      </section>
    </div>
  );
}
