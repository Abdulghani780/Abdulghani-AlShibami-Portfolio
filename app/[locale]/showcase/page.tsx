import React from "react";
import { dictionaries, Locale } from "@/lib/i18n/dictionaries";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";

export default async function ShowcasePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const currentLocale = (locale as Locale) || "en";
  const dict = dictionaries[currentLocale];
  const isRtl = currentLocale === "ar";

  return (
    <div className="py-12 space-y-16">
      <Container>
        <SectionHeading
          kicker="// DESIGN SYSTEM CHECKPOINT"
          title={isRtl ? "معاينة عناصر التصميم ومكونات الواجهة" : "Design System & Foundational UI Showcase"}
          subtitle={
            isRtl
              ? "فحص بصري وتقني شامل لكافة الأزرار، البطاقات، الشارات، والألوان المعتمدة."
              : "Comprehensive visual and technical verification of buttons, cards, badges, and tokens."
          }
        />

        {/* 1. Theme & Controls Verification */}
        <Card className="space-y-4 mb-10">
          <div className="font-mono text-xs uppercase tracking-wider text-gold font-semibold">
            01 // Active Controls & Layout Switchers
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-content-secondary">Theme:</span>
              <ThemeToggle />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-content-secondary">Locale:</span>
              <LanguageSwitcher currentLocale={currentLocale} />
            </div>
            <Badge variant="gold" dot dotColor="emerald">
              {isRtl ? "الوضع العربي النشط (RTL)" : "English Active (LTR)"}
            </Badge>
          </div>
        </Card>

        {/* 2. Buttons Matrix */}
        <Card className="space-y-6 mb-10">
          <div className="font-mono text-xs uppercase tracking-wider text-gold font-semibold">
            02 // Button Component Matrix
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary" size="md">
              Primary Gilded Action
            </Button>
            <Button variant="secondary" size="md">
              Secondary Architectural
            </Button>
            <Button variant="ghost" size="md">
              Ghost Link Action
            </Button>
            <Button variant="gold-outline" size="md">
              Gold Outline
            </Button>
            <Button variant="danger" size="md">
              Fault / Kill Node
            </Button>
            <Button variant="primary" size="sm">
              Small Button
            </Button>
            <Button variant="primary" size="lg">
              Large Hero Button
            </Button>
            <Button variant="primary" disabled size="md">
              Disabled State
            </Button>
          </div>
        </Card>

        {/* 3. Badges & Status Chips */}
        <Card className="space-y-6 mb-10">
          <div className="font-mono text-xs uppercase tracking-wider text-gold font-semibold">
            03 // Badges & Telemetry Indicators
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="gold" dot dotColor="emerald">
              Production Verified
            </Badge>
            <Badge variant="gold" dot dotColor="gold">
              Specular Leader Active
            </Badge>
            <Badge variant="status" dot dotColor="amber">
              Pre-Vote Phase
            </Badge>
            <Badge variant="danger" dot dotColor="rose">
              Partition Isolated
            </Badge>
            <Badge variant="default">
              C# .NET 9 CORE
            </Badge>
            <Badge variant="outline">
              LAT: 24.7136° N
            </Badge>
          </div>
        </Card>

        {/* 4. Cards & Brackets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card hoverEffect cornerBrackets className="space-y-3">
            <div className="font-mono text-xs text-gold">{"// CORNER BRACKET ARCHITECTURE"}</div>
            <h3 className="font-serif text-2xl font-normal text-content-primary">
              Elevated Gilded Card
            </h3>
            <p className="text-xs text-content-secondary leading-relaxed">
              Demonstrating 1px hairline border, corner coordinate brackets in gold, and localized specular luminescence on hover.
            </p>
          </Card>

          <Card hoverEffect className="space-y-3">
            <div className="font-mono text-xs text-content-muted">{"// STANDARD CARD"}</div>
            <h3 className="font-serif text-2xl font-normal text-content-primary">
              Architectural Surface Panel
            </h3>
            <p className="text-xs text-content-secondary leading-relaxed">
              Demonstrating the subtle elevated surface with crisp dark/light theme contrast.
            </p>
          </Card>
        </div>
      </Container>
    </div>
  );
}
