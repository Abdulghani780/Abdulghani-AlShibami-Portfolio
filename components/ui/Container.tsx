import React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
}

export function Container({
  as: Component = "div",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "w-full max-w-arch mx-auto px-5 sm:px-8 md:px-12 lg:px-16",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
