import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6 px-4">
      <Logo className="h-12 w-12" />
      <div className="space-y-2 max-w-md">
        <span className="font-mono text-xs font-bold text-[#C4552D] uppercase tracking-wider">
          404 · Forecast Region Not Found
        </span>
        <h1 className="font-serif text-3xl md:text-4xl font-semibold text-[#1C2B2A]">
          Page Out of Grid Bounds
        </h1>
        <p className="text-xs sm:text-sm text-[#1C2B2A]/70 leading-relaxed">
          The requested operational URL or district record does not exist in the current 0.25° grid domain.
        </p>
      </div>

      <Link href="/">
        <Button variant="primary">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Return to Operational Homepage
        </Button>
      </Link>
    </div>
  );
}
