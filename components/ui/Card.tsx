import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  cornerBrackets?: boolean;
}

export function Card({
  className,
  hoverEffect = false,
  cornerBrackets = false,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "relative bg-surface border border-hairline p-6 transition-all duration-200",
        hoverEffect &&
          "hover:border-gold hover:shadow-gold dark:hover:shadow-gold cursor-pointer",
        className
      )}
      {...props}
    >
      {cornerBrackets && (
        <>
          <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-gold pointer-events-none" />
          <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-gold pointer-events-none" />
          <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-gold pointer-events-none" />
          <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-gold pointer-events-none" />
        </>
      )}
      {children}
    </div>
  );
}
