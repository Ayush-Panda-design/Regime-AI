"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
  label?: string;
  icon?: React.ReactNode;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, options, label, icon, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1 w-full sm:w-auto">
        {label && (
          <label className="text-xs font-medium text-[#1C2B2A]/80 flex items-center gap-1.5">
            {icon}
            {label}
          </label>
        )}
        <div className="relative inline-block w-full">
          <select
            ref={ref}
            className={cn(
              "w-full appearance-none rounded-xl border border-[#DCCFB6] bg-[#FBF7EF] px-3.5 py-2 pr-9 text-xs font-medium text-[#1C2B2A] transition-colors focus:border-[#14453D] focus:outline-none focus:ring-1 focus:ring-[#14453D] cursor-pointer shadow-xs",
              className
            )}
            {...props}
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value} className="bg-[#FBF7EF] text-[#1C2B2A] py-1">
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#1C2B2A]/60" />
        </div>
      </div>
    );
  }
);

Select.displayName = "Select";
