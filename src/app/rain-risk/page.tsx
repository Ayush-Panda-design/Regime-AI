import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Heavy Rainfall Risk Probabilities | RainRegime AI",
  description:
    "Grid & district-level heavy and very-heavy rainfall exceedance probabilities calibrated with ensemble uncertainty.",
};

export default function RainRiskPage() {
  return (
    <div className="space-y-8">
      <SectionHeading
        eyebrow="Calibrated Risk Assessment"
        title="Heavy & Very Heavy Rainfall Probabilities"
        description="Threshold-based probability of precipitation (PoP) exceeding IMD heavy (64.5mm) and very heavy (115.5mm) standards."
      />
    </div>
  );
}
