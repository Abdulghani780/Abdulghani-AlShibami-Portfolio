import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { dictionaries, Locale } from "@/lib/i18n/dictionaries";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { ContactForm } from "@/components/features/ContactForm";
import { projectRepository } from "@/lib/services/projectRepository";
import { ProjectCard } from "@/components/features/projects/ProjectCard";

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

  const [featuredProjects, categories] = await Promise.all([
    projectRepository.getFeaturedProjects(),
    projectRepository.getCategories(),
  ]);

  const categoryMap = new Map(categories.map((c) => [c.slug, c.name[currentLocale]]));

  return (
    <div className="space-y-28 sm:space-y-36 pb-20">
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION — MONUMENTAL OBSIDIAN & LIQUID GLASS IDENTITY
      ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-4 pb-12 sm:pb-20">
        {/* Ambient Environmental Lighting: Radial Gold Glow & Obsidian Vignette */}
        <div className="ambient-glow-gold -top-32 left-1/2 -translate-x-1/2" />
        <div className="ambient-glow-gold -top-20 start-10 opacity-30" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border-hairline)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-hairline)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_10%,#000_60%,transparent_100%)] opacity-25 pointer-events-none" />

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Monumental Identity & Typography */}
            <div className="lg:col-span-7 space-y-7 sm:space-y-9 relative z-10">
              {/* Eyebrow & Status Indicator */}
              <div className="inline-flex items-center gap-2.5">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/40 bg-gold/10 text-gold text-xs font-mono font-medium tracking-wide shadow-gold-ambient">
                  <span className="h-2 w-2 rounded-full bg-status-emerald animate-pulse" />
                  <span>
                    {isRtl
                      ? "مهندس برمجيات • ذكاء اصطناعي • تقنية معلومات"
                      : "SOFTWARE ENGINEER • AI • SYSTEMS ARCHITECTURE"}
                  </span>
                </span>
              </div>

              {/* Monumental Hero Headline */}
              <div className="space-y-3">
                <div className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-gold font-semibold">
                  {dict.hero.greeting}
                </div>
                <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-normal text-content-primary leading-[1.04] tracking-tight text-balance">
                  {isRtl ? "عبدالغني" : "ABDULGHANI"}
                  <br />
                  <span className="text-gold-gradient font-medium">
                    {isRtl ? "الشبامي" : "AL-SHIBAMI"}
                  </span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl font-mono text-gold-light/90 pt-1">
                  {isRtl
                    ? "مهندس برمجيات • مطور متخصص في الذكاء الاصطناعي والأنظمة"
                    : "Software Engineer • AI-Focused Developer • Systems Builder"}
                </p>
              </div>

              {/* Introduction Prose */}
              <p className="text-content-secondary text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                {dict.hero.subtitle}
              </p>

              {/* Stacked / Row Action Cluster */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link href={`/${currentLocale}#featured-projects`}>
                  <Button variant="primary" size="lg" className="w-full sm:w-auto shadow-gold-ambient">
                    <span>{dict.hero.exploreCta}</span>
                    <span className="text-base rtl:rotate-180">→</span>
                  </Button>
                </Link>

                <Link href={`/${currentLocale}/projects/campus-it-tracker/demo`}>
                  <Button variant="glass" size="lg" className="w-full sm:w-auto">
                    <span className="h-2 w-2 rounded-full bg-status-emerald animate-pulse" />
                    <span>{dict.hero.simulationCta}</span>
                  </Button>
                </Link>

                <a
                  href="https://github.com/Abdulghani780"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button variant="secondary" size="lg" className="w-full">
                    <span>GitHub</span>
                    <span className="text-xs rtl:rotate-[-90deg]">↗</span>
                  </Button>
                </a>
              </div>
            </div>

            {/* Right Column: Integrated Cinematic Profile Portrait */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
              {/* Back Glow Effect */}
              <div className="absolute inset-0 bg-gold/15 rounded-3xl blur-3xl -z-10 scale-90" />

              <div className="relative w-full max-w-sm sm:max-w-md rounded-2xl border border-glass-border bg-obsidian-card/80 backdrop-blur-xl p-4 sm:p-5 flex flex-col justify-between shadow-glass transition-all duration-500 hover:border-gold/50 hover:shadow-gold-ambient group">
                {/* Header status inside frame */}
                <div className="flex items-center justify-between font-mono text-[11px] text-content-muted pb-3 border-b border-glass-border">
                  <span className="tracking-wider">ID: ALSHIBAMI-01</span>
                  <span className="text-status-emerald flex items-center gap-1.5 font-semibold">
                    <span className="h-2 w-2 rounded-full bg-status-emerald animate-ping inline-block" />
                    {isRtl ? "متصل للعمل" : "AVAILABLE FOR HIRE"}
                  </span>
                </div>

                {/* Portrait Frame with Genuine Authentic Profile Image */}
                <div className="relative my-3 w-full flex-1 min-h-[300px] sm:min-h-[360px] rounded-xl overflow-hidden border border-glass-border bg-obsidian">
                  <Image
                    src="/images/profile/abdulghani-profile-hero.webp"
                    alt={isRtl ? "عبدالغني الشبامي" : "Abdulghani Al-Shibami"}
                    fill
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105 filter contrast-[1.03]"
                  />
                  {/* Subtle Cinematic Vignette Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-black/25 pointer-events-none" />

                  {/* Identification Glass Ribbon */}
                  <div className="absolute bottom-3 inset-x-3 rounded-lg bg-obsidian/85 backdrop-blur-md border border-glass-border p-3 flex items-center justify-between font-mono text-xs">
                    <div>
                      <div className="text-gold font-bold">{dict.hero.name}</div>
                      <div className="text-content-muted text-[10px]">{dict.hero.profileVerified}</div>
                    </div>
                    <span className="text-status-emerald text-[10px] uppercase tracking-wider font-semibold border border-status-emerald/40 bg-status-emerald/10 px-2 py-0.5 rounded">
                      {isRtl ? "موثق" : "VERIFIED"}
                    </span>
                  </div>
                </div>

                {/* Card Footer coordinates */}
                <div className="border-t border-glass-border pt-3 flex items-center justify-between font-mono text-[10px] text-content-muted">
                  <span>{dict.hero.coordinates}</span>
                  <span className="text-gold/80">{isRtl ? "ملف موثق" : "ENGINEERING DOSSIER"}</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. SYSTEMS TELEMETRY HORIZON (Editorial Floating Glass Bar)
      ───────────────────────────────────────────────────────────── */}
      <section id="telemetry" className="relative">
        <Container>
          <div className="mb-8">
            <SectionHeading
              kicker={dict.kickers.telemetry}
              title={dict.telemetry.heading}
              subtitle={dict.telemetry.subheading}
              className="mb-0"
            />
          </div>

          <GlassPanel
            variant="medium"
            hoverHighlight
            className="p-6 sm:p-8 md:p-10 rounded-2xl"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y lg:divide-y-0 lg:divide-x rtl:lg:divide-x-reverse divide-glass-border">
              {/* Metric 01: Throughput */}
              <div className="space-y-2.5 pt-4 lg:pt-0 lg:px-4 first:lg:pl-0 rtl:first:lg:pr-0">
                <div className="font-mono text-xs text-content-muted uppercase tracking-wider">
                  {dict.telemetry.throughputLabel}
                </div>
                <div className="font-mono text-3xl sm:text-4xl lg:text-5xl font-bold text-gold tracking-tight">
                  {dict.telemetry.throughputValue}
                </div>
                <div className="text-xs sm:text-sm text-content-secondary leading-relaxed">
                  {dict.telemetry.throughputDesc}
                </div>
              </div>

              {/* Metric 02: Latency */}
              <div className="space-y-2.5 pt-6 lg:pt-0 lg:px-6">
                <div className="font-mono text-xs text-content-muted uppercase tracking-wider">
                  {dict.telemetry.latencyLabel}
                </div>
                <div className="font-mono text-3xl sm:text-4xl lg:text-5xl font-bold text-content-primary tracking-tight">
                  {dict.telemetry.latencyValue}
                </div>
                <div className="text-xs sm:text-sm text-content-secondary leading-relaxed">
                  {dict.telemetry.latencyDesc}
                </div>
              </div>

              {/* Metric 03: Availability */}
              <div className="space-y-2.5 pt-6 lg:pt-0 lg:px-6">
                <div className="font-mono text-xs text-content-muted uppercase tracking-wider">
                  {dict.telemetry.availabilityLabel}
                </div>
                <div className="font-mono text-3xl sm:text-4xl lg:text-5xl font-bold text-status-emerald tracking-tight">
                  {dict.telemetry.availabilityValue}
                </div>
                <div className="text-xs sm:text-sm text-content-secondary leading-relaxed">
                  {dict.telemetry.availabilityDesc}
                </div>
              </div>

              {/* Metric 04: Invariants */}
              <div className="space-y-2.5 pt-6 lg:pt-0 lg:px-6 last:lg:pr-0 rtl:last:lg:pl-0">
                <div className="font-mono text-xs text-content-muted uppercase tracking-wider">
                  {dict.telemetry.verificationLabel}
                </div>
                <div className="font-mono text-3xl sm:text-4xl lg:text-5xl font-bold text-gold-light tracking-tight">
                  {dict.telemetry.verificationValue}
                </div>
                <div className="text-xs sm:text-sm text-content-secondary leading-relaxed">
                  {dict.telemetry.verificationDesc}
                </div>
              </div>
            </div>
          </GlassPanel>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. SIMULATION DISCLOSURE BANNER (Authentic Transparency)
      ───────────────────────────────────────────────────────────── */}
      <section>
        <Container>
          <div className="rounded-xl border border-gold/40 bg-gradient-to-r from-gold/10 via-obsidian-card/70 to-gold/5 backdrop-blur-md p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-gold-ambient">
            <div className="space-y-2.5 max-w-2xl">
              <div className="flex items-center gap-3">
                <Badge variant="gold" dot dotColor="emerald">
                  {dict.simulationBanner.badge}
                </Badge>
                <span className="font-mono text-xs text-gold font-semibold uppercase tracking-wider">
                  {"// "}{dict.simulationBanner.engineOnline}
                </span>
              </div>
              <p className="text-content-secondary text-sm leading-relaxed">
                {dict.simulationBanner.disclaimer}
              </p>
            </div>

            <Link href={`/${currentLocale}/projects/campus-it-tracker/demo`} className="shrink-0 w-full md:w-auto">
              <Button variant="primary" size="md" className="w-full">
                <span>{dict.hero.simulationCta}</span>
                <span className="text-sm rtl:rotate-180">→</span>
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. FEATURED PROJECTS SHOWCASE (Product Launch Layout)
      ───────────────────────────────────────────────────────────── */}
      <section id="featured-projects">
        <Container>
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10 md:mb-14">
            <SectionHeading
              kicker={dict.kickers.featured}
              title={dict.featured.heading}
              subtitle={dict.featured.subheading}
              className="mb-0"
            />
            <Link
              href={`/${currentLocale}/projects`}
              className="font-mono text-xs text-gold hover:text-gold-light transition-colors uppercase tracking-wider shrink-0 inline-flex items-center gap-1.5 font-semibold"
            >
              <span>{dict.featured.viewAll}</span>
              <span className="rtl:rotate-180">→</span>
            </Link>
          </div>

          {/* Connected Featured Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProjects[0] && (
              <div className="lg:col-span-2">
                <ProjectCard
                  project={featuredProjects[0]}
                  locale={currentLocale}
                  categoryName={categoryMap.get(featuredProjects[0].categorySlug)}
                  isFeaturedHero
                  className="h-full"
                />
              </div>
            )}

            <div className="space-y-8 flex flex-col justify-between">
              {featuredProjects.slice(1, 3).map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  locale={currentLocale}
                  categoryName={categoryMap.get(project.categorySlug)}
                  className="h-full"
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. CORE ARCHITECTURAL COMPETENCIES (Categorized Hierarchy)
      ───────────────────────────────────────────────────────────── */}
      <section id="competencies" className="relative">
        <Container>
          <SectionHeading
            kicker={dict.kickers.competencies}
            title={dict.competencies.heading}
            subtitle={dict.competencies.subheading}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <GlassPanel hoverHighlight className="p-6 rounded-xl space-y-3">
              <div className="font-mono text-gold text-xs font-semibold tracking-wider">{"// 01 ARCHITECTURE"}</div>
              <h4 className="font-serif text-xl font-normal text-content-primary">
                {dict.competencies.systemsTitle}
              </h4>
              <p className="text-sm text-content-secondary leading-relaxed">
                {dict.competencies.systemsDesc}
              </p>
            </GlassPanel>

            <GlassPanel hoverHighlight className="p-6 rounded-xl space-y-3">
              <div className="font-mono text-gold text-xs font-semibold tracking-wider">{"// 02 INTELLIGENCE"}</div>
              <h4 className="font-serif text-xl font-normal text-content-primary">
                {dict.competencies.aiTitle}
              </h4>
              <p className="text-sm text-content-secondary leading-relaxed">
                {dict.competencies.aiDesc}
              </p>
            </GlassPanel>

            <GlassPanel hoverHighlight className="p-6 rounded-xl space-y-3">
              <div className="font-mono text-gold text-xs font-semibold tracking-wider">{"// 03 COMPUTATION"}</div>
              <h4 className="font-serif text-xl font-normal text-content-primary">
                {dict.competencies.lowLatencyTitle}
              </h4>
              <p className="text-sm text-content-secondary leading-relaxed">
                {dict.competencies.lowLatencyDesc}
              </p>
            </GlassPanel>

            <GlassPanel hoverHighlight className="p-6 rounded-xl space-y-3">
              <div className="font-mono text-gold text-xs font-semibold tracking-wider">{"// 04 PLATFORMS"}</div>
              <h4 className="font-serif text-xl font-normal text-content-primary">
                {dict.competencies.cloudTitle}
              </h4>
              <p className="text-sm text-content-secondary leading-relaxed">
                {dict.competencies.cloudDesc}
              </p>
            </GlassPanel>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. CONTACT & EXECUTIVE INQUIRY (Section ID: contact)
      ───────────────────────────────────────────────────────────── */}
      <section id="contact" className="relative">
        <Container>
          <div className="max-w-2xl mx-auto rounded-2xl border border-glass-border bg-obsidian-card/80 backdrop-blur-xl p-8 sm:p-12 space-y-8 shadow-glass">
            <div className="space-y-3 text-center">
              <div className="font-mono text-xs text-gold uppercase tracking-[0.2em] font-semibold">
                {dict.kickers.contact}
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl font-normal text-content-primary">
                {isRtl ? "تواصل معي مباشرة" : "Let's Build Something Meaningful"}
              </h3>
              <p className="text-content-secondary text-sm leading-relaxed max-w-lg mx-auto">
                {isRtl
                  ? "للمشاريع الاستشارية المعمارية، وتطوير الأنظمة الموزعة والحلول التقنية المتقدمة."
                  : "For mission-critical systems architecture, distributed computing, and engineering leadership inquiries."}
              </p>
            </div>

            <ContactForm isRtl={isRtl} />
          </div>
        </Container>
      </section>
    </div>
  );
}
