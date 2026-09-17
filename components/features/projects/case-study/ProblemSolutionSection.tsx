import React from "react";
import { CaseStudy, Locale } from "@/types/project";
import { Card } from "@/components/ui/Card";
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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Problem Card */}
      <Card
        cornerBrackets
        className="border-status-rose/30 bg-status-rose/5 p-6 sm:p-8 space-y-4"
      >
        <div className="flex items-center justify-between gap-2 border-b border-status-rose/20 pb-3">
          <Badge variant="danger" dot dotColor="rose">
            {isRtl ? "الإشكالية المعمارية والقيود" : "ARCHITECTURAL BOTTLENECKS"}
          </Badge>
          <span className="font-mono text-[10px] text-status-rose">
            STAGE_01 // INVARIANT_FAULT
          </span>
        </div>

        <h3 className="font-serif text-2xl font-normal text-content-primary">
          {isRtl ? "التحديات التشغيلية والاختناقات" : "System Constraints & Failure Modes"}
        </h3>

        <p className="text-content-secondary text-sm leading-relaxed">
          {caseStudy.problem[locale]}
        </p>
      </Card>

      {/* Solution Card */}
      <Card
        cornerBrackets
        className="border-gold/40 bg-gold/5 p-6 sm:p-8 space-y-4"
      >
        <div className="flex items-center justify-between gap-2 border-b border-gold/20 pb-3">
          <Badge variant="gold" dot dotColor="emerald">
            {isRtl ? "الحل المعماري الحتمي" : "ENGINEERED RESOLUTION"}
          </Badge>
          <span className="font-mono text-[10px] text-gold">
            STAGE_02 // SYSTEM_CONVERGENCE
          </span>
        </div>

        <h3 className="font-serif text-2xl font-normal text-content-primary">
          {isRtl ? "المعمارية الموجهة والتطبيق الميداني" : "Deterministic Vectorized Architecture"}
        </h3>

        <p className="text-content-secondary text-sm leading-relaxed">
          {caseStudy.solution[locale]}
        </p>
      </Card>
    </div>
  );
};
