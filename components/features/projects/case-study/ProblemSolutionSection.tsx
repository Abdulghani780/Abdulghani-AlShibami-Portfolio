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
      <div className="rounded-2xl border border-border/10 dark:border-border/10 bg-surface dark:bg-surfaceElevated p-8 sm:p-10 space-y-5 shadow-md">
        <div className="flex items-center justify-between gap-2 border-b border-border/10 dark:border-border/10 pb-4">
          <Badge variant="error" dot dotColor="rose">
            {isRtl ? "الإشكالية والقيود التشغيلية" : "ARCHITECTURAL BOTTLENECK"}
          </Badge>
          <span className="font-mono text-xs text-status-error">
            PHASE_01 // PROBLEM
          </span>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl font-normal text-foreground dark:text-foreground">
          {isRtl ? "التحديات التشغيلية والاختناقات" : "System Constraints & Failure Modes"}
        </h3>

        <p className="text-muted-foreground dark:text-muted-foreground text-base sm:text-lg leading-relaxed font-normal">
          {caseStudy.problem[locale]}
        </p>
      </div>

      {/* Solution Column */}
      <div className="rounded-2xl border border-brand/30 dark:border-brandLight/30 bg-gradient-to-b from-brand/10 dark:from-brandLight/20 via-surface dark:via-surfaceElevated to-surface dark:to-surfaceElevated backdrop-blur-md p-8 sm:p-10 space-y-5 shadow-md">
        <div className="flex items-center justify-between gap-2 border-b border-brand/20 dark:border-brandLight/20 pb-4">
          <Badge variant="brand" dot dotColor="emerald">
            {isRtl ? "الحل المعماري والتنفيذ" : "ENGINEERED RESOLUTION"}
          </Badge>
          <span className="font-mono text-xs text-brand dark:text-brandLight">
            PHASE_02 // SOLUTION
          </span>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl font-normal text-foreground dark:text-foreground">
          {isRtl ? "المعمارية الموجهة والتطبيق الميداني" : "Deterministic Architecture"}
        </h3>

        <p className="text-muted-foreground dark:text-muted-foreground text-base sm:text-lg leading-relaxed font-normal">
          {caseStudy.solution[locale]}
        </p>
      </div>
    </div>
  );
};