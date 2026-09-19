import React from "react";
import { CaseStudy, Locale } from "@/types/project";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Check, ChevronRight } from "lucide-react";

interface ChallengesResultsSectionProps {
  caseStudy: CaseStudy;
  locale: Locale;
}

export const ChallengesResultsSection: React.FC<ChallengesResultsSectionProps> = ({
  caseStudy,
  locale,
}) => {
  const isRtl = locale === "ar";

  return (
    <div className="space-y-8">
      <SectionHeading
        kicker={isRtl ? "// التحقق والنتائج المعمارية" : "// RIGOROUS VERIFICATION"}
        title={isRtl ? "تجاوز العقبات والنتائج التجريبية" : "Engineering Challenges & Empirical Outcomes"}
        subtitle={
          isRtl
            ? "التحديات المعمارية غير البديهية والنتائج المعيارية المحققة فعلياً."
            : "Non-trivial runtime constraints overcome and quantifiable benchmark verification."
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Constraints Panel */}
        <div className="rounded-2xl border border-glass-border bg-obsidian-card/70 backdrop-blur-md p-6 sm:p-8 space-y-4 shadow-glass">
          <div className="font-mono text-xs text-status-amber uppercase tracking-wider font-semibold">
            {"// "}{isRtl ? "عقبات بيئة التشغيل المعالجة" : "CONSTRAINTS OVERCOME"}
          </div>

          <h4 className="font-serif text-2xl font-normal text-content-primary">
            {isRtl ? "تحديات المعمارية والتنفيذ" : "Runtime Bottlenecks Resolved"}
          </h4>

          <ul className="space-y-3 font-mono text-xs sm:text-sm text-content-secondary">
            {caseStudy.challenges[locale].map((challenge, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <ChevronRight className="w-4 h-4 text-status-amber shrink-0 mt-0.5 rtl:rotate-180" />
                <span className="leading-relaxed">{challenge}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Outcomes Panel */}
        <div className="rounded-2xl border border-gold/40 bg-gradient-to-b from-gold/10 via-obsidian-card/80 to-obsidian-card/70 backdrop-blur-md p-6 sm:p-8 space-y-4 shadow-gold-ambient">
          <div className="font-mono text-xs text-gold uppercase tracking-wider font-semibold">
            {"// "}{isRtl ? "المخرجات التجريبية الموثقة" : "EMPIRICAL OUTCOMES"}
          </div>

          <h4 className="font-serif text-2xl font-normal text-content-primary">
            {isRtl ? "النتائج المعيارية المحققة" : "Production Invariants Verified"}
          </h4>

          <ul className="space-y-3 font-mono text-xs sm:text-sm text-content-primary">
            {caseStudy.results[locale].map((result, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-status-emerald shrink-0 mt-0.5" />
                <span className="leading-relaxed">{result}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
