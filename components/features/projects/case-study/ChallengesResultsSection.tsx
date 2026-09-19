import React from "react";
import { CaseStudy, Locale } from "@/types/project";
import { Card } from "@/components/ui/Card";
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
        {/* Constraints Card */}
        <Card cornerBrackets className="border-hairline bg-surface p-6 sm:p-8 space-y-4">
          <div className="font-mono text-[10px] text-status-amber uppercase tracking-wider font-semibold">
            {"// "}{isRtl ? "عقبات بيئة التشغيل المعالجة" : "CONSTRAINTS OVERCOME"}
          </div>

          <h4 className="font-serif text-2xl font-normal text-content-primary">
            {isRtl ? "تحديات المعمارية والتنفيذ" : "Low-Level Runtime Bottlenecks"}
          </h4>

          <ul className="space-y-3 font-mono text-xs text-content-secondary">
            {caseStudy.challenges[locale].map((challenge, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <ChevronRight className="w-3.5 h-3.5 text-status-amber shrink-0 mt-0.5 rtl:rotate-180" />
                <span className="leading-relaxed">{challenge}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Outcomes Card */}
        <Card cornerBrackets className="border-gold/30 bg-gold/5 p-6 sm:p-8 space-y-4">
          <div className="font-mono text-[10px] text-gold uppercase tracking-wider font-semibold">
            {"// "}{isRtl ? "المخرجات التجريبية الموثقة" : "EMPIRICAL OUTCOMES"}
          </div>

          <h4 className="font-serif text-2xl font-normal text-content-primary">
            {isRtl ? "النتائج المعيارية المحققة" : "Production Invariants Verified"}
          </h4>

          <ul className="space-y-3 font-mono text-xs text-content-primary">
            {caseStudy.results[locale].map((result, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-status-emerald shrink-0 mt-0.5" />
                <span className="leading-relaxed">{result}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
};
