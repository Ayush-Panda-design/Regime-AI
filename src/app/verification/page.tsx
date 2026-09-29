import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Forecast Skill Verification Metrics | RainRegime AI",
  description:
    "Empirical forecast skill benchmarking comparing raw NWP vs AI RainRegime across ETS, CSI, POD, FAR, FSS, and RMSE metrics.",
};

export default function VerificationPage() {
  return (
    <div className="space-y-8">
      <SectionHeading
        eyebrow="Skill Benchmarks & Audit"
        title="Forecast Verification & Performance Metrics"
        description="Comprehensive verification comparing corrected RainRegime AI outputs against raw GFS and ECMWF control runs."
      />
    </div>
  );
}
