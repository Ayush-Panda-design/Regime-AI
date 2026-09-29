"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight, Activity } from "lucide-react";

const NAV_LINKS = [
  { name: "Product", href: "/" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Regimes", href: "/regimes" },
  { name: "Rain Risk", href: "/rain-risk" },
  { name: "Districts", href: "/districts" },
  { name: "Verification", href: "/verification" },
  { name: "Pipeline", href: "/pipeline" },
  { name: "Audit Log", href: "/audit-log" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#DCCFB6] bg-[#FBF7EF]/90 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" onClick={() => setMobileOpen(false)}>
          <Logo />
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-1.5 text-xs font-medium rounded-lg transition-colors relative",
                  isActive
                    ? "text-[#14453D] font-semibold bg-[#EDE3D0]/80"
                    : "text-[#1C2B2A]/80 hover:text-[#14453D] hover:bg-[#EDE3D0]/50"
                )}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#14453D] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link href="/dashboard" className="hidden sm:inline-flex">
            <Button variant="primary" size="sm" className="shadow-xs">
              Open Dashboard
              <ChevronRight className="h-3.5 w-3.5 ml-0.5" />
            </Button>
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex lg:hidden items-center justify-center p-2 rounded-xl text-[#1C2B2A] hover:bg-[#EDE3D0] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-b border-[#DCCFB6] bg-[#FBF7EF] px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-200 shadow-lg">
          <div className="flex flex-col space-y-1 pt-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors",
                    isActive
                      ? "bg-[#14453D] text-[#F6EFE2]"
                      : "text-[#1C2B2A] hover:bg-[#EDE3D0]"
                  )}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="h-4 w-4 opacity-60" />
                </Link>
              );
            })}
          </div>
          <div className="pt-3 border-t border-[#DCCFB6]/60">
            <Link
              href="/dashboard"
              onClick={() => setMobileOpen(false)}
              className="w-full inline-block"
            >
              <Button variant="primary" className="w-full justify-center">
                <Activity className="h-4 w-4 mr-2" />
                Open Dashboard
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
