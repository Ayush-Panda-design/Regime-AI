import type { Metadata } from "next";
import { Fraunces, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { StatusBar } from "@/components/layout/StatusBar";
import { Footer } from "@/components/layout/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RainRegime AI | Rainfall Intelligence & Regime-Based NWP Bias Correction",
  description:
    "Advanced rainfall forecasting platform for India combining synoptic monsoon regime classification, AI bias correction, grid & district probability estimates, and verified skill metrics.",
  keywords: [
    "Rainfall Intelligence",
    "Monsoon Regime",
    "NWP Bias Correction",
    "India Weather Forecast",
    "Extreme Rainfall Risk",
    "District Precipitation Forecast",
    "IMD Conventions",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${manrope.variable} ${jetbrainsMono.variable}`}
    >
      <body className="weather-noise flex flex-col min-h-screen text-[#1C2B2A] antialiased selection:bg-[#14453D] selection:text-[#F6EFE2]">
        <Navbar />
        <StatusBar />
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
