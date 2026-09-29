import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Traceable Audit Logs & Model Runs | RainRegime AI",
  description:
    "Versioned forecast outputs, model pipeline checksums, configuration hashes, and immutable audit logs.",
};

export default function AuditLogPage() {
  return (
    <div className="space-y-8">
      <SectionHeading
        eyebrow="Compliance & Governance"
        title="Traceable Operational Audit Log"
        description="Versioned forecast cycles, execution parameters, model hashes, and data lineage logs."
      />
    </div>
  );
}
