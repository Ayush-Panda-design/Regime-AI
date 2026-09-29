import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
  centered?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  className,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 md:mb-8",
        centered && "text-center md:text-center items-center md:items-center",
        className
      )}
    >
      <div className={cn("space-y-1.5", centered ? "max-w-2xl mx-auto" : "max-w-3xl")}>
        {eyebrow && (
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-wider text-[#C4552D] uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C4552D]" />
            {eyebrow}
          </div>
        )}
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-tight text-[#1C2B2A] font-medium leading-tight">
          {title}
        </h2>
        {description && (
          <p className="text-sm text-[#1C2B2A]/75 leading-relaxed pt-1">
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0 pt-2 md:pt-0">{action}</div>}
    </div>
  );
}
