import * as React from "react";
import { cn } from "@/lib/utils";

export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
    >
      {/* Outer Contour Ring */}
      <circle
        cx="50"
        cy="50"
        r="44"
        stroke="#14453D"
        strokeWidth="3.5"
        strokeDasharray="6 4"
        opacity="0.5"
      />
      {/* Middle Contour Ring */}
      <circle
        cx="50"
        cy="50"
        r="32"
        stroke="#2F6F8F"
        strokeWidth="3"
        opacity="0.75"
      />
      {/* Inner Ring */}
      <circle
        cx="50"
        cy="50"
        r="20"
        stroke="#C4552D"
        strokeWidth="2.5"
        opacity="0.9"
      />
      {/* Center Raindrop */}
      <path
        d="M50 24 C50 24, 34 46, 34 56 C34 64.8366 41.1634 72 50 72 C58.8366 72 66 64.8366 66 56 C66 46, 50 24, 50 24 Z"
        fill="#14453D"
      />
      <path
        d="M50 32 C50 32, 40 48, 40 55 C40 60.5228 44.4772 65 50 65 C55.5228 65 60 60.5228 60 55 C60 48, 50 32, 50 32 Z"
        fill="#2F6F8F"
        opacity="0.9"
      />
      {/* Dynamic AI Core Accent */}
      <circle cx="50" cy="56" r="4" fill="#F6EFE2" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("inline-flex items-center gap-2.5 group cursor-pointer", className)}>
      <LogoMark className="h-8 w-8 text-[#14453D] group-hover:scale-105 transition-transform duration-200" />
      <div className="flex flex-col">
        <span className="font-serif text-lg font-bold tracking-tight text-[#1C2B2A] leading-none">
          RainRegime <span className="font-sans text-xs uppercase font-extrabold tracking-widest text-[#C4552D] ml-0.5">AI</span>
        </span>
        <span className="text-[9px] font-mono text-[#1C2B2A]/60 tracking-wider uppercase mt-0.5">
          Rainfall Intelligence
        </span>
      </div>
    </div>
  );
}
