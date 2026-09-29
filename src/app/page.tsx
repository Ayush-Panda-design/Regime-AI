"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Activity,
  BarChart3,
  MapPin,
  ArrowRight,
  Database,
  Cpu,
  Layers,
  Share2,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  TrendingDown,
  AlertTriangle,
  Droplets,
  Sprout,
  Truck,
  CloudSun,
  Eye,
  EyeOff,
} from "lucide-react";

import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Stat } from "@/components/ui/stat";

import { getAllRegimes } from "@/lib/data/regimes";
import { getAllDistricts } from "@/lib/data/districts";
import { getVerificationMetrics } from "@/lib/data/verification";
import { getPipelineSteps } from "@/lib/data/pipeline";
import { MONTHLY_RAINFALL_DATA, AUDIENCE_CARDS } from "@/lib/data/monsoon-stats";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
  LineChart,
  Line,
  CartesianGrid,
  Legend,
} from "recharts";

// Helper for dynamic icon rendering
const iconMap = {
  Database: Database,
  Cpu: Cpu,
  Layers: Layers,
  ShieldCheck: ShieldCheck,
  Share2: Share2,
  CloudSun: CloudSun,
  AlertTriangle: AlertTriangle,
  Droplets: Droplets,
  Sprout: Sprout,
  Truck: Truck,
};

export default function HomePage() {
  const regimes = getAllRegimes();
  const districts = getAllDistricts();
  const metrics = getVerificationMetrics();
  const pipelineSteps = getPipelineSteps();

  // Interactive state for Raw vs Corrected Slider section
  const [selectedDistrictId, setSelectedDistrictId] = React.useState<string>("wayanad");
  const selectedDistrict = districts.find((d) => d.id === selectedDistrictId) || districts[0];

  const [showRawSeries, setShowRawSeries] = React.useState(true);
  const [showCorrectedSeries, setShowCorrectedSeries] = React.useState(true);
  const [showObservedSeries, setShowObservedSeries] = React.useState(true);

  // Stepper state
  const [expandedStep, setExpandedStep] = React.useState<number>(3); // Default Step 3 Classify

  const scrollToPipeline = () => {
    const el = document.getElementById("how-it-works");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="space-y-16 md:space-y-24 pb-12">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden rounded-3xl bg-[#EDE3D0]/60 border border-[#DCCFB6] p-6 sm:p-10 md:p-14 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#14453D]/10 border border-[#14453D]/20 text-xs font-semibold text-[#14453D] tracking-wide uppercase">
              <span className="h-2 w-2 rounded-full bg-[#C4552D] animate-pulse" />
              Regime-Aware Rainfall Intelligence
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#1C2B2A] leading-[1.12]">
              Rainfall forecasts that know which monsoon they&apos;re in.
            </h1>

            <p className="text-base sm:text-lg text-[#1C2B2A]/80 leading-relaxed font-sans max-w-2xl">
              RainRegime AI identifies the active rainfall regime, corrects raw numerical weather model output specifically for it, and delivers verified district-level forecasts with calibrated heavy-rain probabilities.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link href="/dashboard">
                <Button variant="primary" size="lg" className="shadow-md">
                  Open Dashboard
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToPipeline}
              >
                See how it works
              </Button>
            </div>
          </motion.div>

          {/* Right Hero Interactive Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center min-h-[320px] sm:min-h-[380px]"
          >
            {/* SVG Background Motifs */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
              viewBox="0 0 400 400"
              fill="none"
            >
              <circle cx="200" cy="200" r="180" stroke="#14453D" strokeWidth="1.5" strokeDasharray="4 4" />
              <circle cx="200" cy="200" r="130" stroke="#2F6F8F" strokeWidth="1.5" />
              <circle cx="200" cy="200" r="80" stroke="#C4552D" strokeWidth="1" strokeDasharray="2 2" />
              {/* Rain lines */}
              <line x1="80" y1="40" x2="60" y2="120" stroke="#2F6F8F" strokeWidth="2" strokeDasharray="6 8" opacity="0.6" />
              <line x1="160" y1="20" x2="140" y2="100" stroke="#14453D" strokeWidth="2" strokeDasharray="6 8" opacity="0.4" />
              <line x1="320" y1="60" x2="300" y2="140" stroke="#2F6F8F" strokeWidth="2" strokeDasharray="6 8" opacity="0.5" />
            </svg>

            {/* Floating Live Mini Widget */}
            <div className="relative w-full max-w-sm rounded-2xl bg-[#FBF7EF]/95 backdrop-blur-md border border-[#DCCFB6] p-5 shadow-xl space-y-4 transition-transform hover:scale-[1.02] duration-300">
              <div className="flex items-center justify-between border-b border-[#DCCFB6]/50 pb-3">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#C4552D]" />
                  <div>
                    <h3 className="font-serif font-bold text-sm text-[#1C2B2A]">Wayanad District</h3>
                    <p className="text-[10px] text-[#1C2B2A]/60 font-mono">Kerala · West Coast</p>
                  </div>
                </div>
                <Badge variant="Orographic Rainfall" size="sm">
                  Orographic
                </Badge>
              </div>

              {/* Live Metric comparison */}
              <div className="grid grid-cols-2 gap-3 bg-[#EDE3D0]/60 p-3 rounded-xl border border-[#DCCFB6]/60">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#1C2B2A]/60 font-mono block">Raw NWP</span>
                  <span className="font-mono text-lg font-bold text-[#1C2B2A]/70 line-through">142.5 mm</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#14453D] font-mono block font-bold">RainRegime AI</span>
                  <span className="font-mono text-xl font-bold text-[#14453D]">198.2 mm</span>
                </div>
              </div>

              {/* Heavy Rain Probability Ring Display */}
              <div className="flex items-center justify-between pt-1">
                <div className="space-y-0.5">
                  <span className="text-xs font-semibold text-[#1C2B2A]">Heavy Rain Risk (&gt;64.5mm)</span>
                  <div className="flex items-center gap-1 text-[11px] text-[#C4552D] font-mono">
                    <AlertTriangle className="h-3 w-3" />
                    <span>Extreme Warning Active</span>
                  </div>
                </div>
                <div className="relative flex items-center justify-center h-12 w-12 rounded-full bg-[#C4552D]/15 border-2 border-[#C4552D] text-[#C4552D] font-mono text-xs font-bold">
                  98%
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Hero Trust Metric Strip */}
        <div className="mt-10 md:mt-12 pt-8 border-t border-[#DCCFB6]/70 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <Stat
            label="Districts Covered"
            value="715"
            unit="Districts"
            subtext="All Indian Meteorological Subdivisions"
          />
          <Stat
            label="Synoptic Regimes"
            value="5"
            unit="Classified"
            subtext="Active, Break, Low, Coastal, Orographic"
          />
          <Stat
            label="Forecast Lead Time"
            value="10"
            unit="Days (+240h)"
            subtext="Updated 4x Daily (00Z, 06Z, 12Z, 18Z)"
          />
          <Stat
            label="Verification Metrics"
            value="6"
            unit="Skill Scores"
            subtext="RMSE, ETS, CSI, POD, FAR, FSS"
          />
        </div>
      </section>

      {/* 2. PROBLEM / INSIGHT BAND */}
      <section className="rounded-3xl bg-[#EDE3D0]/70 border border-[#DCCFB6] p-6 sm:p-10 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-4">
            <Badge variant="terracotta">Meteorological Challenge</Badge>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-medium text-[#1C2B2A] leading-tight">
              One bias correction algorithm cannot fit all monsoon physics.
            </h2>
            <p className="text-sm md:text-base text-[#1C2B2A]/80 leading-relaxed">
              India receives over 80% of its annual precipitation between June and September. However, monsoon rainfall is not uniform—it is driven by distinct physical regimes: break spells that dry central India, intense Bay depressions, orographic lifting over the Ghats, and coastal breeze convergence.
            </p>
            <p className="text-sm md:text-base text-[#1C2B2A]/80 leading-relaxed font-medium text-[#14453D]">
              Raw numerical weather prediction (NWP) models suffer from systematic errors: overestimating break-monsoon drizzle while missing mountain slope torrents. RainRegime AI dynamically identifies the active regime first, then applies regime-tailored AI corrections.
            </p>
          </div>

          {/* All-India Monthly Chart */}
          <div className="lg:col-span-6 bg-[#FBF7EF] rounded-2xl border border-[#DCCFB6] p-5 shadow-xs space-y-3">
            <div className="flex items-center justify-between border-b border-[#DCCFB6]/50 pb-2">
              <span className="font-serif text-sm font-semibold text-[#1C2B2A]">All-India Monthly Normal vs AI Corrected Rainfall (mm)</span>
              <span className="text-[10px] font-mono text-[#2F6F8F] font-bold">Monsoon Peak (Jun-Sep)</span>
            </div>
            <div className="h-56 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={MONTHLY_RAINFALL_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#DCCFB6" vertical={false} opacity={0.5} />
                  <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#1C2B2A" }} axisLine={{ stroke: "#DCCFB6" }} />
                  <YAxis tick={{ fontSize: 10, fill: "#1C2B2A" }} axisLine={{ stroke: "#DCCFB6" }} />
                  <RechartsTooltip
                    contentStyle={{ backgroundColor: "#FBF7EF", borderColor: "#DCCFB6", borderRadius: "12px", fontSize: "12px" }}
                  />
                  <Bar dataKey="normalMm" name="Historical Normal (mm)" fill="#8FA98B" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="correctedNwpMm" name="RainRegime Corrected (mm)" fill="#14453D" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS (5-STEP HORIZONTAL STEPPER) */}
      <section id="how-it-works" className="space-y-8 scroll-mt-24">
        <SectionHeading
          eyebrow="Workflow Stepper"
          title="How RainRegime AI Post-Processes NWP Data"
          description="A 5-stage sequential pipeline executing every 6 hours to convert raw weather grids into verified district intelligence."
        />

        {/* Stepper Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {pipelineSteps.map((step) => {
            const Icon = iconMap[step.iconName] || Activity;
            const isExpanded = expandedStep === step.stepNumber;
            return (
              <div
                key={step.id}
                onClick={() => setExpandedStep(step.stepNumber)}
                className={`rounded-2xl border p-4 cursor-pointer transition-all duration-200 ${
                  isExpanded
                    ? "bg-[#FBF7EF] border-[#14453D] ring-2 ring-[#14453D]/20 shadow-md"
                    : "bg-[#FBF7EF]/70 border-[#DCCFB6] hover:bg-[#FBF7EF]"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-[#C4552D]">
                    Step 0{step.stepNumber}
                  </span>
                  <div className={`h-8 w-8 rounded-xl flex items-center justify-center ${isExpanded ? "bg-[#14453D] text-[#F6EFE2]" : "bg-[#EDE3D0] text-[#14453D]"}`}>
                    <Icon className="h-4 w-4" />
                  </div>
                </div>
                <h3 className="font-serif font-semibold text-sm text-[#1C2B2A] mb-1">
                  {step.shortTitle}
                </h3>
                <p className="text-[11px] text-[#1C2B2A]/70 line-clamp-2">
                  {step.summary}
                </p>
                <div className="mt-3 pt-2 border-t border-[#DCCFB6]/50 flex items-center justify-between text-[10px] font-mono text-[#14453D]">
                  <span>{step.latencyMs}ms</span>
                  {isExpanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                </div>
              </div>
            );
          })}
        </div>

        {/* Expanded Stepper Drawer Detail */}
        {expandedStep && (
          <motion.div
            key={expandedStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl bg-[#EDE3D0]/80 border border-[#14453D]/30 p-6 shadow-sm space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#DCCFB6]">
              <div>
                <span className="text-xs font-mono uppercase text-[#C4552D] font-bold">
                  Step 0{expandedStep} Deep Dive
                </span>
                <h4 className="font-serif text-xl font-semibold text-[#1C2B2A]">
                  {pipelineSteps[expandedStep - 1].name}
                </h4>
              </div>
              <Badge variant="forest" size="sm" className="w-fit">
                Execution Latency: {pipelineSteps[expandedStep - 1].latencyMs}ms
              </Badge>
            </div>

            <p className="text-xs text-[#1C2B2A]/80 font-mono bg-[#FBF7EF] p-3 rounded-xl border border-[#DCCFB6]/60">
              <span className="font-semibold text-[#14453D]">Technical Parameter Specs: </span>
              {pipelineSteps[expandedStep - 1].techDetails}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              {pipelineSteps[expandedStep - 1].subSteps.map((sub, i) => (
                <div key={i} className="bg-[#FBF7EF] p-4 rounded-xl border border-[#DCCFB6] space-y-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#14453D]">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#2F6F8F]" />
                    <span>{sub.title}</span>
                  </div>
                  <p className="text-xs text-[#1C2B2A]/70 leading-relaxed">
                    {sub.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </section>

      {/* 4. FEATURES GRID (6 CARDS) */}
      <section className="space-y-8">
        <SectionHeading
          eyebrow="Platform Capabilities"
          title="Built for Meteorological Accuracy and Operational Rigor"
          description="Explore the full suite of modules available in RainRegime AI."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:border-[#14453D] transition-colors">
            <CardHeader>
              <div className="h-10 w-10 rounded-xl bg-[#2F6F8F]/15 flex items-center justify-center text-[#2F6F8F] mb-2">
                <Layers className="h-5 w-5" />
              </div>
              <CardTitle>Regime Identification</CardTitle>
              <CardDescription>
                Automated classification of atmospheric states into 5 synoptic monsoon regimes using thermodynamic features.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/regimes" className="text-xs font-semibold text-[#14453D] hover:underline inline-flex items-center gap-1">
                View Regime Classifier &rarr;
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:border-[#14453D] transition-colors">
            <CardHeader>
              <div className="h-10 w-10 rounded-xl bg-[#14453D]/15 flex items-center justify-center text-[#14453D] mb-2">
                <Cpu className="h-5 w-5" />
              </div>
              <CardTitle>AI Post-Processing Correction</CardTitle>
              <CardDescription>
                Regime-aware Quantile Delta Mapping (QDM) eliminates systematic NWP wet and dry intensity biases.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/pipeline" className="text-xs font-semibold text-[#14453D] hover:underline inline-flex items-center gap-1">
                Explore Pipeline Architecture &rarr;
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:border-[#14453D] transition-colors">
            <CardHeader>
              <div className="h-10 w-10 rounded-xl bg-[#C4552D]/15 flex items-center justify-center text-[#C4552D] mb-2">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <CardTitle>Heavy-Rainfall Probability</CardTitle>
              <CardDescription>
                Calibrated exceedance probabilities for IMD heavy (&gt;64.5mm) and very heavy (&gt;115.5mm) thresholds.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/rain-risk" className="text-xs font-semibold text-[#14453D] hover:underline inline-flex items-center gap-1">
                Inspect Risk Thresholds &rarr;
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:border-[#14453D] transition-colors">
            <CardHeader>
              <div className="h-10 w-10 rounded-xl bg-[#E2A336]/20 flex items-center justify-center text-[#8F6110] mb-2">
                <MapPin className="h-5 w-5" />
              </div>
              <CardTitle>District Dashboard</CardTitle>
              <CardDescription>
                Interactive maps, district tables, and search tools covering all 715 Indian districts.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/dashboard" className="text-xs font-semibold text-[#14453D] hover:underline inline-flex items-center gap-1">
                Open Operational Console &rarr;
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:border-[#14453D] transition-colors">
            <CardHeader>
              <div className="h-10 w-10 rounded-xl bg-[#8FA98B]/25 flex items-center justify-center text-[#14453D] mb-2">
                <BarChart3 className="h-5 w-5" />
              </div>
              <CardTitle>Verification Engine</CardTitle>
              <CardDescription>
                Transparent benchmarking using RMSE, ETS, CSI, POD, FAR, and FSS skill scores against observations.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/verification" className="text-xs font-semibold text-[#14453D] hover:underline inline-flex items-center gap-1">
                See Skill Scores &rarr;
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:border-[#14453D] transition-colors">
            <CardHeader>
              <div className="h-10 w-10 rounded-xl bg-[#6B4E8F]/15 flex items-center justify-center text-[#6B4E8F] mb-2">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <CardTitle>Traceable Audit Logs</CardTitle>
              <CardDescription>
                Versioned cycle hashes, execution logs, and cryptographic parameters ensuring full auditability.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/audit-log" className="text-xs font-semibold text-[#14453D] hover:underline inline-flex items-center gap-1">
                View Audit Register &rarr;
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 5. REGIMES SHOWCASE (5 TABS) */}
      <section className="space-y-8">
        <SectionHeading
          eyebrow="Synoptic Classification"
          title="The 5 Synoptic Rainfall Regimes"
          description="Each regime represents a distinct atmospheric state requiring dedicated AI post-processing logic."
        />

        <Tabs defaultValue="active-monsoon" className="w-full">
          <TabsList className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 h-auto p-1.5 gap-1">
            {regimes.map((r) => (
              <TabsTrigger key={r.id} value={r.id} className="text-xs py-2">
                {r.shortName}
              </TabsTrigger>
            ))}
          </TabsList>

          {regimes.map((regime) => (
            <TabsContent key={regime.id} value={regime.id}>
              <Card className="bg-[#FBF7EF] border-[#DCCFB6] p-6 md:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-3">
                      <Badge variant={regime.badgeVariant} size="md">
                        {regime.name}
                      </Badge>
                      <span className="text-xs font-mono text-[#1C2B2A]/60">
                        RMSE Improvement: <span className="font-bold text-[#14453D]">+{regime.improvementPct}%</span>
                      </span>
                    </div>

                    <h3 className="font-serif text-xl md:text-2xl font-semibold text-[#1C2B2A]">
                      {regime.signature}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#1C2B2A]/80 leading-relaxed">
                      {regime.description}
                    </p>

                    <div className="bg-[#EDE3D0]/60 p-3.5 rounded-xl border border-[#DCCFB6]/60 space-y-1 text-xs">
                      <span className="font-semibold text-[#C4552D]">Typical Raw NWP Bias: </span>
                      <span className="text-[#1C2B2A]/90">{regime.typicalBias}</span>
                    </div>

                    <div className="space-y-1.5 pt-1">
                      <span className="text-xs font-semibold text-[#1C2B2A]">Key Synoptic Diagnostic Indicators:</span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {regime.synopticFeatures.map((feat, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-[#1C2B2A]/80">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#14453D]" />
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Mini RMSE Error Bar Chart */}
                  <div className="lg:col-span-5 bg-[#EDE3D0]/40 p-5 rounded-2xl border border-[#DCCFB6] space-y-3">
                    <div className="text-xs font-semibold text-[#1C2B2A] border-b border-[#DCCFB6] pb-2">
                      Error Metric Comparison (RMSE mm/day)
                    </div>

                    <div className="h-44 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={[
                            { label: "Raw NWP", error: regime.rawRmse, fill: "#C4552D" },
                            { label: "RainRegime AI", error: regime.correctedRmse, fill: "#14453D" },
                          ]}
                          margin={{ top: 10, right: 20, left: -20, bottom: 0 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" stroke="#DCCFB6" vertical={false} opacity={0.5} />
                          <XAxis dataKey="label" tick={{ fontSize: 11 }} />
                          <YAxis tick={{ fontSize: 10 }} />
                          <RechartsTooltip contentStyle={{ backgroundColor: "#FBF7EF", borderRadius: "10px" }} />
                          <Bar dataKey="error" name="RMSE (mm/day)" radius={[6, 6, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>

                    <div className="text-center text-[11px] font-mono text-[#14453D] bg-[#FBF7EF] py-1.5 rounded-lg border border-[#DCCFB6]">
                      Error reduced from {regime.rawRmse} → {regime.correctedRmse} mm/day
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* 6. RAW VS CORRECTED INTERACTIVE SLIDER */}
      <section className="space-y-8 rounded-3xl bg-[#FBF7EF] border border-[#DCCFB6] p-6 sm:p-10">
        <SectionHeading
          eyebrow="Interactive Diagnostic"
          title="7-Day Raw vs Corrected NWP Comparison"
          description="Select any district to examine how RainRegime AI adjusts the raw numerical forecast series against actual observations."
          action={
            <Select
              label="Select District"
              value={selectedDistrictId}
              onChange={(e) => setSelectedDistrictId(e.target.value)}
              options={districts.map((d) => ({
                label: `${d.name} (${d.state})`,
                value: d.id,
              }))}
            />
          }
        />

        {/* Series Visibility Toggles */}
        <div className="flex flex-wrap items-center justify-between gap-4 bg-[#EDE3D0]/60 p-4 rounded-2xl border border-[#DCCFB6]">
          <div className="flex items-center gap-2 text-xs font-medium text-[#1C2B2A]">
            <MapPin className="h-4 w-4 text-[#C4552D]" />
            <span>
              District: <strong className="text-[#14453D] font-serif">{selectedDistrict.name}, {selectedDistrict.state}</strong>
            </span>
            <Badge variant={selectedDistrict.riskLevel} size="sm" className="ml-2">
              {selectedDistrict.riskLevel} Risk
            </Badge>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setShowRawSeries(!showRawSeries)}
              className={`inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg border cursor-pointer transition-colors ${
                showRawSeries ? "bg-[#C4552D]/15 text-[#C4552D] border-[#C4552D]/40" : "bg-transparent text-[#1C2B2A]/40 border-[#DCCFB6]"
              }`}
            >
              {showRawSeries ? <Eye className="h-3.5 w-3.5" /> : <EyeOff className="h-3.5 w-3.5" />}
              Raw NWP (mm)
            </button>

            <button
              onClick={() => setShowCorrectedSeries(!showCorrectedSeries)}
              className={`inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg border cursor-pointer transition-colors ${
                showCorrectedSeries ? "bg-[#14453D] text-[#F6EFE2] border-transparent" : "bg-transparent text-[#1C2B2A]/40 border-[#DCCFB6]"
              }`}
            >
              {showCorrectedSeries ? <Eye className="h-3.5 w-3.5" /> : <EyeOff className="h-3.5 w-3.5" />}
              RainRegime AI (mm)
            </button>

            <button
              onClick={() => setShowObservedSeries(!showObservedSeries)}
              className={`inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg border cursor-pointer transition-colors ${
                showObservedSeries ? "bg-[#2F6F8F]/15 text-[#2F6F8F] border-[#2F6F8F]/40" : "bg-transparent text-[#1C2B2A]/40 border-[#DCCFB6]"
              }`}
            >
              {showObservedSeries ? <Eye className="h-3.5 w-3.5" /> : <EyeOff className="h-3.5 w-3.5" />}
              Observed (mm)
            </button>
          </div>
        </div>

        {/* 7-Day Line Chart */}
        <div className="h-80 w-full pt-2">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={selectedDistrict.forecast7Day} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#DCCFB6" opacity={0.6} />
              <XAxis dataKey="day" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} label={{ value: "Rainfall (mm/24h)", angle: -90, position: "insideLeft", fontSize: 11 }} />
              <RechartsTooltip contentStyle={{ backgroundColor: "#FBF7EF", borderRadius: "12px", borderColor: "#DCCFB6", fontSize: "12px" }} />
              <Legend wrapperStyle={{ fontSize: "12px", paddingTop: "10px" }} />
              {showRawSeries && (
                <Line type="monotone" dataKey="rawMm" name="Raw NWP Forecast (mm)" stroke="#C4552D" strokeDasharray="5 5" strokeWidth={2} dot={{ r: 4 }} />
              )}
              {showCorrectedSeries && (
                <Line type="monotone" dataKey="correctedMm" name="RainRegime AI Corrected (mm)" stroke="#14453D" strokeWidth={3} dot={{ r: 5 }} />
              )}
              {showObservedSeries && (
                <Line type="monotone" dataKey="observedMm" name="IMD Gauge Observed (Day 1)" stroke="#2F6F8F" strokeWidth={2.5} dot={{ r: 6 }} />
              )}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* 7. VERIFIED ACCURACY (6 METRIC CARDS) */}
      <section className="space-y-8">
        <SectionHeading
          eyebrow="Empirical Verification"
          title="Verified Accuracy Metrics"
          description="Rigorous skill score benchmarks evaluating corrected RainRegime AI against raw GFS and ECMWF control runs."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((m) => (
            <Card key={m.code} className="hover:border-[#14453D] transition-all">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#C4552D] bg-[#C4552D]/10 px-2 py-0.5 rounded">
                    {m.code}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#14453D] bg-[#8FA98B]/20 px-2 py-0.5 rounded-full border border-[#8FA98B]/50">
                    <TrendingDown className="h-3 w-3" />
                    {m.improvement}
                  </span>
                </div>
                <CardTitle className="pt-2">{m.name}</CardTitle>
                <CardDescription>{m.fullName}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-2 bg-[#EDE3D0]/60 p-3 rounded-xl text-xs font-mono border border-[#DCCFB6]/50">
                  <div>
                    <span className="text-[10px] text-[#1C2B2A]/60 block">Raw Model</span>
                    <span className="text-sm font-semibold text-[#C4552D]">
                      {m.rawValue} {m.unit !== "ratio" && m.unit !== "score" ? m.unit : ""}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#14453D] block font-semibold">RainRegime AI</span>
                    <span className="text-sm font-bold text-[#14453D]">
                      {m.correctedValue} {m.unit !== "ratio" && m.unit !== "score" ? m.unit : ""}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-[#1C2B2A]/70 leading-relaxed">
                  {m.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center pt-2">
          <Link href="/verification">
            <Button variant="secondary" size="md">
              Explore Full Verification Benchmarks & Metric Methodology &rarr;
            </Button>
          </Link>
        </div>
      </section>

      {/* 8. WHO IT'S FOR (5 CARDS) */}
      <section className="space-y-8 rounded-3xl bg-[#EDE3D0]/60 border border-[#DCCFB6] p-6 sm:p-10">
        <SectionHeading
          eyebrow="Target Applications"
          title="Designed for Critical Meteorological Decision Makers"
          description="Delivering tailored intelligence across India's weather-sensitive sectors."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {AUDIENCE_CARDS.map((aud, idx) => {
            const Icon = iconMap[aud.iconName as keyof typeof iconMap] || CloudSun;
            return (
              <Card key={idx} className="bg-[#FBF7EF]">
                <CardHeader>
                  <div className="h-10 w-10 rounded-xl bg-[#14453D]/10 flex items-center justify-center text-[#14453D] mb-2">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle>{aud.role}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-xs text-[#1C2B2A]/80 leading-relaxed">
                    {aud.benefit}
                  </p>
                  <div className="inline-block text-[11px] font-mono text-[#14453D] bg-[#8FA98B]/20 px-2.5 py-1 rounded-lg border border-[#8FA98B]/40 font-semibold">
                    {aud.keyMetric}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* 9. FINAL CTA BAND */}
      <section className="relative overflow-hidden rounded-3xl bg-[#14453D] text-[#F6EFE2] p-8 sm:p-12 md:p-16 text-center space-y-6 shadow-lg">
        {/* SVG Decorative Background */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-15"
          viewBox="0 0 800 400"
          fill="none"
        >
          <circle cx="400" cy="200" r="300" stroke="#F6EFE2" strokeWidth="2" strokeDasharray="8 8" />
          <circle cx="400" cy="200" r="200" stroke="#8FA98B" strokeWidth="2" />
          <circle cx="400" cy="200" r="100" stroke="#E2A336" strokeWidth="1.5" />
        </svg>

        <div className="relative max-w-3xl mx-auto space-y-4">
          <Badge variant="saffron" size="sm" className="uppercase font-mono tracking-wider">
            Operational Intelligence Ready
          </Badge>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#F6EFE2] leading-tight">
            See tomorrow&apos;s rain, regime by regime.
          </h2>
          <p className="text-sm md:text-base text-[#EDE3D0]/90 leading-relaxed max-w-xl mx-auto">
            Access 715 district forecasts, live regime classifications, calibrated heavy rain risk probabilities, and verifiable audit records.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link href="/dashboard">
              <Button variant="accent" size="lg" className="shadow-md">
                Open Operational Dashboard
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
            <Link href="/verification">
              <Button variant="secondary" size="lg" className="bg-[#FBF7EF] text-[#1C2B2A]">
                View Skill Benchmarks
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
