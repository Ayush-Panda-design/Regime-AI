import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "AI Correction Pipeline Architecture | RainRegime AI",
  description:
    "Technical workflow of raw NWP ingest, synoptic classification, quantile-based bias correction, ensemble weighting, and output export.",
};

export default function PipelinePage() {
  return (
    <div className="space-y-8">
      <SectionHeading
        eyebrow="Architecture & Workflow"
        title="AI Correction Pipeline & Model Stack"
        description="End-to-end data processing workflow from GFS/ECMWF GRIB2 ingestion to regime-aware bias correction."
      />
    </div>
  );
}
