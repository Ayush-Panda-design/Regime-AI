import * as React from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { Shield, BookOpen, Layers, Mail, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-[#DCCFB6] bg-[#EDE3D0]/50 pt-12 pb-8 text-[#1C2B2A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 pb-12 border-b border-[#DCCFB6]/70">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-2 space-y-4">
            <Logo />
            <p className="text-xs text-[#1C2B2A]/80 leading-relaxed max-w-sm">
              RainRegime AI post-processes raw numerical weather prediction (NWP) rainfall forecasts across 715 Indian districts. By blending synoptic regime identification with calibrated AI bias correction, it provides risk probability and verified forecasts for meteorologists, disaster managers, and agricultural planners.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#FBF7EF] border border-[#DCCFB6] text-[11px] font-mono text-[#14453D]">
              <Shield className="h-3.5 w-3.5 text-[#C4552D]" />
              <span>Calibrated Probability & Audit Logs Enabled</span>
            </div>
          </div>

          {/* Column 1: Product */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold text-[#1C2B2A] tracking-tight">
              Product
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/dashboard" className="text-[#1C2B2A]/80 hover:text-[#14453D] transition-colors">
                  Operational Dashboard
                </Link>
              </li>
              <li>
                <Link href="/regimes" className="text-[#1C2B2A]/80 hover:text-[#14453D] transition-colors">
                  Synoptic Regime Classifier
                </Link>
              </li>
              <li>
                <Link href="/rain-risk" className="text-[#1C2B2A]/80 hover:text-[#14453D] transition-colors">
                  Heavy Rain Risk Probabilities
                </Link>
              </li>
              <li>
                <Link href="/districts" className="text-[#1C2B2A]/80 hover:text-[#14453D] transition-colors">
                  District Intelligence (715)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Platform */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold text-[#1C2B2A] tracking-tight">
              Platform
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/verification" className="text-[#1C2B2A]/80 hover:text-[#14453D] transition-colors">
                  Verification Metrics (ETS, CSI)
                </Link>
              </li>
              <li>
                <Link href="/pipeline" className="text-[#1C2B2A]/80 hover:text-[#14453D] transition-colors">
                  AI Correction Pipeline
                </Link>
              </li>
              <li>
                <Link href="/audit-log" className="text-[#1C2B2A]/80 hover:text-[#14453D] transition-colors">
                  Traceable Audit Logs
                </Link>
              </li>
              <li>
                <span className="text-[#1C2B2A]/50 flex items-center gap-1">
                  <Layers className="h-3 w-3" />
                  NWP Engine: GFS & ECMWF 0.25°
                </span>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources & Standards */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold text-[#1C2B2A] tracking-tight">
              Resources & Contact
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#conventions" className="text-[#1C2B2A]/80 hover:text-[#14453D] transition-colors flex items-center gap-1">
                  <BookOpen className="h-3 w-3" />
                  IMD Threshold Conventions
                </a>
              </li>
              <li>
                <a href="#api-spec" className="text-[#1C2B2A]/80 hover:text-[#14453D] transition-colors flex items-center gap-1">
                  <ExternalLink className="h-3 w-3" />
                  Grid Data Export Specs
                </a>
              </li>
              <li>
                <a href="mailto:ops@rainregime.ai" className="text-[#1C2B2A]/80 hover:text-[#14453D] transition-colors flex items-center gap-1">
                  <Mail className="h-3 w-3" />
                  ops@rainregime.ai
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Compliance Note */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#1C2B2A]/70">
          <div className="flex items-center gap-2">
            <span className="font-medium text-[#14453D]">Note:</span>
            <span>Built on IMD-style district forecast conventions (Heavy: &gt;64.5mm, Very Heavy: &gt;115.5mm).</span>
          </div>

          <div className="font-mono text-[11px]">
            © {new Date().getFullYear()} RainRegime AI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
