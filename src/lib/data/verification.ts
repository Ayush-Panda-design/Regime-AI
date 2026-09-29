export interface MetricDefinition {
  code: string;
  name: string;
  fullName: string;
  rawValue: number;
  correctedValue: number;
  unit: string;
  improvement: string;
  direction: "lower-is-better" | "higher-is-better";
  description: string;
  formula: string;
  range: string;
}

export const VERIFICATION_METRICS: MetricDefinition[] = [
  {
    code: "RMSE",
    name: "Root Mean Square Error",
    fullName: "Precipitation Intensity Error",
    rawValue: 19.8,
    correctedValue: 10.4,
    unit: "mm/day",
    improvement: "-47.5%",
    direction: "lower-is-better",
    description: "Measures overall magnitude error of precipitation accumulation over 24-hour periods.",
    formula: "√[ 1/N ∑ (F_i - O_i)² ]",
    range: "0 to ∞ (0 is perfect)",
  },
  {
    code: "ETS",
    name: "Equitable Threat Score",
    fullName: "Gilbert Skill Score (>64.5mm)",
    rawValue: 0.28,
    correctedValue: 0.54,
    unit: "score",
    improvement: "+92.8%",
    direction: "higher-is-better",
    description: "Measures forecast accuracy of heavy rain (>64.5mm) corrected for random chance hits.",
    formula: "(Hits - Hits_random) / (Hits + Misses + FalseAlarms - Hits_random)",
    range: "-1/3 to 1 (1 is perfect)",
  },
  {
    code: "CSI",
    name: "Critical Success Index",
    fullName: "Threat Score for Extreme Rain",
    rawValue: 0.34,
    correctedValue: 0.61,
    unit: "ratio",
    improvement: "+79.4%",
    direction: "higher-is-better",
    description: "Evaluates how well heavy rain events were predicted relative to total hit/miss/false alarm occurrences.",
    formula: "Hits / (Hits + Misses + FalseAlarms)",
    range: "0 to 1 (1 is perfect)",
  },
  {
    code: "POD",
    name: "Probability of Detection",
    fullName: "Hit Rate for Severe Rain Events",
    rawValue: 0.58,
    correctedValue: 0.86,
    unit: "ratio",
    improvement: "+48.3%",
    direction: "higher-is-better",
    description: "Fraction of actual observed heavy rain events that were correctly forecasted by the model.",
    formula: "Hits / (Hits + Misses)",
    range: "0 to 1 (1 is perfect)",
  },
  {
    code: "FAR",
    name: "False Alarm Ratio",
    fullName: "Spurious Heavy Rain Rate",
    rawValue: 0.44,
    correctedValue: 0.18,
    unit: "ratio",
    improvement: "-59.1%",
    direction: "lower-is-better",
    description: "Fraction of forecasted heavy rain alerts that failed to materialize in actual rain observations.",
    formula: "FalseAlarms / (Hits + FalseAlarms)",
    range: "0 to 1 (0 is perfect)",
  },
  {
    code: "FSS",
    name: "Fractions Skill Score",
    fullName: "Spatial Scale Skill (50 km grid)",
    rawValue: 0.42,
    correctedValue: 0.78,
    unit: "score",
    improvement: "+85.7%",
    direction: "higher-is-better",
    description: "Spatial verification metric evaluating forecast skill over varying neighborhood scales.",
    formula: "1 - [ MSE_fraction / MSE_worst ]",
    range: "0 to 1 (1 is perfect)",
  },
];

export interface ThresholdVerification {
  threshold: string; // e.g. ">15.6mm", ">64.5mm", ">115.5mm", ">204.4mm"
  category: "Light/Mod" | "Heavy" | "Very Heavy" | "Extremely Heavy";
  rawEts: number;
  correctedEts: number;
  rawPod: number;
  correctedPod: number;
  rawFar: number;
  correctedFar: number;
}

export const THRESHOLD_VERIFICATION_DATA: ThresholdVerification[] = [
  { threshold: ">15.6mm", category: "Light/Mod", rawEts: 0.48, correctedEts: 0.72, rawPod: 0.76, correctedPod: 0.93, rawFar: 0.28, correctedFar: 0.12 },
  { threshold: ">64.5mm", category: "Heavy", rawEts: 0.28, correctedEts: 0.54, rawPod: 0.58, correctedPod: 0.86, rawFar: 0.44, correctedFar: 0.18 },
  { threshold: ">115.5mm", category: "Very Heavy", rawEts: 0.18, correctedEts: 0.42, rawPod: 0.42, correctedPod: 0.76, rawFar: 0.56, correctedFar: 0.22 },
  { threshold: ">204.4mm", category: "Extremely Heavy", rawEts: 0.09, correctedEts: 0.31, rawPod: 0.26, correctedPod: 0.64, rawFar: 0.68, correctedFar: 0.29 },
];

export function getVerificationMetrics(): MetricDefinition[] {
  return VERIFICATION_METRICS;
}
