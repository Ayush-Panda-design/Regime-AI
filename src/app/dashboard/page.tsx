import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Operational Forecast Dashboard | RainRegime AI",
  description:
    "Interactive multi-model rainfall forecast dashboard with active regime diagnostic, district risk alert status, and spatial NWP correction comparison.",
};

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <SectionHeading
        eyebrow="Operational Forecast Console"
        title="India Rainfall Intelligence Dashboard"
        description="Real-time regime diagnostic, calibrated NWP ensemble post-processing, and district extreme rain alerts."
      />
    </div>
  );
}
