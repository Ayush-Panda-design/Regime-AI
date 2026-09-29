export interface MonthlyRainfall {
  month: string;
  normalMm: number;
  actualMm: number;
  correctedNwpMm: number;
  isMonsoonPeak?: boolean;
}

export const MONTHLY_RAINFALL_DATA: MonthlyRainfall[] = [
  { month: "Jan", normalMm: 17.2, actualMm: 14.1, correctedNwpMm: 15.8 },
  { month: "Feb", normalMm: 16.5, actualMm: 18.2, correctedNwpMm: 17.0 },
  { month: "Mar", normalMm: 30.4, actualMm: 26.8, correctedNwpMm: 28.5 },
  { month: "Apr", normalMm: 38.3, actualMm: 41.2, correctedNwpMm: 39.7 },
  { month: "May", normalMm: 62.1, actualMm: 68.5, correctedNwpMm: 64.0 },
  { month: "Jun", normalMm: 165.3, actualMm: 178.4, correctedNwpMm: 168.0, isMonsoonPeak: true },
  { month: "Jul", normalMm: 280.5, actualMm: 312.0, correctedNwpMm: 286.5, isMonsoonPeak: true },
  { month: "Aug", normalMm: 254.8, actualMm: 242.1, correctedNwpMm: 251.0, isMonsoonPeak: true },
  { month: "Sep", normalMm: 167.9, actualMm: 185.3, correctedNwpMm: 172.4, isMonsoonPeak: true },
  { month: "Oct", normalMm: 75.4, actualMm: 82.0, correctedNwpMm: 77.2 },
  { month: "Nov", normalMm: 29.7, actualMm: 24.5, correctedNwpMm: 28.0 },
  { month: "Dec", normalMm: 16.0, actualMm: 12.8, correctedNwpMm: 15.1 },
];

export interface AudienceCard {
  role: string;
  iconName: string;
  benefit: string;
  keyMetric: string;
}

export const AUDIENCE_CARDS: AudienceCard[] = [
  {
    role: "Operational Meteorologists",
    iconName: "CloudSun",
    benefit: "Diagnose active synoptic rainfall regimes and compare AI-corrected NWP spatial fields against raw GFS & ECMWF controls.",
    keyMetric: "47.5% RMSE Reduction",
  },
  {
    role: "Disaster Management Authorities",
    iconName: "AlertTriangle",
    benefit: "Receive high-confidence district-level heavy (>64.5mm) and very-heavy (>115.5mm) rainfall exceedance probabilities with zero false-alarm spam.",
    keyMetric: "0.86 POD for Extreme Rain",
  },
  {
    role: "Water Resource Managers",
    iconName: "Droplets",
    benefit: "Forecast catchment-scale inflows with calibrated 7-day volume totals to manage reservoir storage and spillway release timing.",
    keyMetric: "715 Districts Monitored",
  },
  {
    role: "Agricultural Extension Officers",
    iconName: "Sprout",
    benefit: "Differentiate break-monsoon dry spells from active monsoon spells to guide district sowing, irrigation schedules, and crop protection.",
    keyMetric: "Sub-district 0.25° Resolution",
  },
  {
    role: "Infrastructure & Logistics Operators",
    iconName: "Truck",
    benefit: "Anticipate coastal convective squalls and mountain landslides to protect transport corridors and power grid assets.",
    keyMetric: "Immutable Audit Log Traceability",
  },
];
