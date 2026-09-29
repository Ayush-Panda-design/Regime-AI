import * as React from "react";
import { Clock, ShieldCheck, Cpu, Database } from "lucide-react";

export function StatusBar() {
  return (
    <div className="w-full bg-[#14453D] text-[#F6EFE2] text-[11px] font-mono py-1.5 px-4 sm:px-6 lg:px-8 border-b border-[#14453D]/80 flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
      {/* Active Cycle Status */}
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8FA98B] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8FA98B]"></span>
        </span>
        <span className="font-semibold tracking-wide text-[#F6EFE2]">
          Forecast Cycle 00Z (2026-09-29) · Processed
        </span>
        <span className="hidden md:inline-block text-[#EDE3D0]/60">|</span>
        <span className="hidden md:inline-flex items-center gap-1 text-[#EDE3D0]/90">
          <Cpu className="h-3 w-3 text-[#E2A336]" />
          Regime Classifier: ECMWF+GFS Ensemble Bias Corrected
        </span>
      </div>

      {/* Lead Time & Resolution metadata */}
      <div className="flex items-center gap-3 text-[#EDE3D0]/90 ml-auto sm:ml-0">
        <div className="flex items-center gap-1">
          <Clock className="h-3 w-3 text-[#2F6F8F]" />
          <span>Lead Time: +00h to +240h (Day 1–10)</span>
        </div>
        <span className="hidden lg:inline-block text-[#EDE3D0]/40">•</span>
        <div className="hidden lg:flex items-center gap-1">
          <Database className="h-3 w-3 text-[#8FA98B]" />
          <span>Grid: 0.25° × 0.25° (715 Districts)</span>
        </div>
        <span className="hidden sm:inline-block text-[#EDE3D0]/40">•</span>
        <div className="flex items-center gap-1 text-[#8FA98B]">
          <ShieldCheck className="h-3 w-3" />
          <span>v2.4 Audit Log Locked</span>
        </div>
      </div>
    </div>
  );
}
