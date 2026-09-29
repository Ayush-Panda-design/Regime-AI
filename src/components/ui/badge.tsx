import * as React from "react";
import { cn } from "@/lib/utils";

export type RiskLevel = "Low" | "Moderate" | "High" | "Extreme";
export type RegimeType =
  | "Active Monsoon"
  | "Break Monsoon"
  | "Monsoon Low/Depression"
  | "Coastal Rainfall"
  | "Orographic Rainfall";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?:
    | "default"
    | "outline"
    | "forest"
    | "monsoon"
    | "terracotta"
    | "saffron"
    | "sage"
    | RiskLevel
    | RegimeType;
  size?: "sm" | "md";
}

export function Badge({
  className,
  variant = "default",
  size = "md",
  children,
  ...props
}: BadgeProps) {
  const getVariantStyles = (v: string) => {
    switch (v) {
      // Risk Levels
      case "Low":
        return "bg-[#8FA98B]/20 text-[#14453D] border-[#8FA98B]/50 font-mono";
      case "Moderate":
        return "bg-[#E2A336]/20 text-[#8F6110] border-[#E2A336]/50 font-mono";
      case "High":
        return "bg-[#C4552D]/20 text-[#9E3613] border-[#C4552D]/50 font-mono";
      case "Extreme":
        return "bg-[#8B1E2D]/20 text-[#8B1E2D] border-[#8B1E2D]/50 font-semibold font-mono";

      // Regime Types
      case "Active Monsoon":
        return "bg-[#2F6F8F]/15 text-[#2F6F8F] border-[#2F6F8F]/30";
      case "Break Monsoon":
        return "bg-[#E2A336]/20 text-[#9B6A14] border-[#E2A336]/40";
      case "Monsoon Low/Depression":
        return "bg-[#6B4E8F]/15 text-[#6B4E8F] border-[#6B4E8F]/30";
      case "Coastal Rainfall":
        return "bg-[#2A9D8F]/15 text-[#1D6C63] border-[#2A9D8F]/30";
      case "Orographic Rainfall":
        return "bg-[#14453D]/15 text-[#14453D] border-[#14453D]/30";

      // Standard Colors
      case "forest":
        return "bg-[#14453D] text-[#F6EFE2] border-transparent";
      case "monsoon":
        return "bg-[#2F6F8F] text-[#F6EFE2] border-transparent";
      case "terracotta":
        return "bg-[#C4552D] text-[#F6EFE2] border-transparent";
      case "saffron":
        return "bg-[#E2A336] text-[#1C2B2A] border-transparent";
      case "sage":
        return "bg-[#8FA98B] text-[#1C2B2A] border-transparent";
      case "outline":
        return "bg-transparent text-[#1C2B2A] border-[#DCCFB6]";
      default:
        return "bg-[#EDE3D0] text-[#1C2B2A] border-[#DCCFB6]";
    }
  };

  const sizeStyles = {
    sm: "px-2 py-0.5 text-[10px] rounded-md",
    md: "px-2.5 py-1 text-xs rounded-lg",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 font-medium border transition-colors",
        sizeStyles[size],
        getVariantStyles(variant),
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
