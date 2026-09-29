import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Synoptic Rainfall Regimes | RainRegime AI",
  description:
    "Classification methodology and active synoptic regime diagnostic across Indian meteorological zones.",
};

export default function RegimesPage() {
  return (
    <div className="space-y-8">
      <SectionHeading
        eyebrow="Synoptic Classification"
        title="Monsoon & Synoptic Rainfall Regimes"
        description="Dynamic classification of Indian precipitation drivers into 5 synoptic regimes for targeted AI model selection."
      />
    </div>
  );
}
