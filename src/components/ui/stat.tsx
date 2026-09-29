import * as React from "react";
import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

export interface StatProps {
  label: string;
  value: string | number;
  unit?: string;
  delta?: string;
  deltaType?: "increase" | "decrease" | "neutral" | "positive" | "negative";
  subtext?: string;
  icon?: React.ReactNode;
  className?: string;
}

export function Stat({
  label,
  value,
  unit,
  delta,
  deltaType = "neutral",
  subtext,
  icon,
  className,
}: StatProps) {
  const getDeltaBadge = () => {
    if (!delta) return null;
    let colors = "bg-[#EDE3D0] text-[#1C2B2A]";
    let Icon = Minus;

    if (deltaType === "positive" || deltaType === "decrease") {
      // Often in weather bias/RMSE lower is positive
      colors = "bg-[#8FA98B]/20 text-[#14453D] border-[#8FA98B]/40";
      Icon = deltaType === "positive" ? TrendingUp : TrendingDown;
    } else if (deltaType === "negative" || deltaType === "increase") {
      colors = "bg-[#C4552D]/20 text-[#9E3613] border-[#C4552D]/40";
      Icon = deltaType === "increase" ? TrendingUp : TrendingDown;
    }

    return (
      <span className={cn("inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-full border", colors)}>
        <Icon className="h-3 w-3" />
        {delta}
      </span>
    );
  };

  return (
    <div
      className={cn(
        "flex flex-col p-5 rounded-2xl bg-[#FBF7EF] border border-[#DCCFB6] shadow-xs relative overflow-hidden",
        className
      )}
    >
      <div className="flex items-center justify-between gap-2 text-xs font-medium text-[#1C2B2A]/70 mb-2">
        <span>{label}</span>
        {icon && <span className="text-[#14453D]">{icon}</span>}
      </div>

      <div className="flex items-baseline gap-2">
        <span className="font-mono text-2xl md:text-3xl font-bold tracking-tight text-[#1C2B2A]">
          {value}
        </span>
        {unit && <span className="text-xs font-mono font-medium text-[#1C2B2A]/70">{unit}</span>}
      </div>

      {(delta || subtext) && (
        <div className="flex items-center justify-between gap-2 mt-3 pt-2.5 border-t border-[#DCCFB6]/40 text-xs">
          {getDeltaBadge()}
          {subtext && <span className="text-[11px] text-[#1C2B2A]/60 truncate">{subtext}</span>}
        </div>
      )}
    </div>
  );
}
