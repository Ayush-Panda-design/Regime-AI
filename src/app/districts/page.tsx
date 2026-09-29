import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "District Intelligence Console | RainRegime AI",
  description:
    "Comprehensive district-wise rainfall forecasts, historical verification stats, regime history, and risk warnings for all 715 Indian districts.",
};

export default function DistrictsPage() {
  return (
    <div className="space-y-8">
      <SectionHeading
        eyebrow="District-Level Intelligence"
        title="715 Districts Forecast & Verification Explorer"
        description="Filter, search, and analyze district-specific precipitation forecasts, corrected NWP outputs, and risk advisories."
      />
    </div>
  );
}
