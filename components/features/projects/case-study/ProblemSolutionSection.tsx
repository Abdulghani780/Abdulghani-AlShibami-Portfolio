import React from "react";
import { CaseStudy, Locale } from "@/types/project";
import { Badge } from "@/components/ui/Badge";

interface ProblemSolutionSectionProps {
  caseStudy: CaseStudy;
  locale: Locale;
}

export const ProblemSolutionSection: React.FC<ProblemSolutionSectionProps> = ({
  caseStudy,
  locale,
}) => {
  const isRtl = locale === "ar";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
      {/* Problem Column */}
      <div className="rounded-2xl border border-glass-border bg-obsidian-card/70 backdrop-blur-md p-8 sm:p-10 space-y-5 shadow-glass">
        <div className="flex items-center justify-between gap-2 border-b border-glass-border pb-4">
          <Badge variant="danger" dot dotColor="rose">
            {isRtl ? "الإشكالية والقيود التشغيلية" : "ARCHITECTURAL BOTTLENECK"}
          </Badge>
          <span className="font-mono text-xs text-status-rose/80">
            PHASE_01 // PROBLEM
          </span>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl font-normal text-content-primary">
          {isRtl ? "التحديات التشغيلية والاختناقات" : "System Constraints & Failure Modes"}
        </h3>

        <p className="text-content-secondary text-base sm:text-lg leading-relaxed font-normal">
          {caseStudy.problem[locale]}
        </p>
      </div>

      {/* Solution Column */}
      <div className="rounded-2xl border border-gold/40 bg-gradient-to-b from-gold/10 via-obsidian-card/80 to-obsidian-card/70 backdrop-blur-md p-8 sm:p-10 space-y-5 shadow-gold-ambient">
        <div className="flex items-center justify-between gap-2 border-b border-gold/20 pb-4">
          <Badge variant="gold" dot dotColor="emerald">
            {isRtl ? "الحل المعماري والتنفيذ" : "ENGINEERED RESOLUTION"}
          </Badge>
          <span className="font-mono text-xs text-gold">
            PHASE_02 // SOLUTION
          </span>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl font-normal text-content-primary">
          {isRtl ? "المعمارية الموجهة والتطبيق الميداني" : "Deterministic Architecture"}
        </h3>

        <p className="text-content-secondary text-base sm:text-lg leading-relaxed font-normal">
          {caseStudy.solution[locale]}
        </p>
      </div>
    </div>
  );
};
