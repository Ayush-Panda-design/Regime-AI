import { RiskLevel, RegimeType } from "@/components/ui/badge";

export interface DayForecast {
  day: string; // e.g., "Day 1 (2026-09-30)", "Day 2", etc.
  dateStr: string;
  rawMm: number;
  correctedMm: number;
  observedMm: number | null;
  heavyProbPct: number;
  veryHeavyProbPct: number;
}

export interface DistrictData {
  id: string;
  name: string;
  state: string;
  zone: "West Coast" | "Northeast" | "Central India" | "North India" | "South Peninsular" | "East Coast";
  lat: number;
  lng: number;
  currentRegime: RegimeType;
  rawRainfallMm: number;
  correctedRainfallMm: number;
  observedRainfallMm: number;
  biasCorrectionMm: number;
  heavyRainProbPct: number; // Exceeding >64.5mm
  veryHeavyRainProbPct: number; // Exceeding >115.5mm
  riskLevel: RiskLevel;
  forecastCycle: string;
  lastUpdated: string;
  auditHash: string;
  forecast7Day: DayForecast[];
  warningNote: string;
}

export const DISTRICTS_DATA: DistrictData[] = [
  {
    id: "wayanad",
    name: "Wayanad",
    state: "Kerala",
    zone: "West Coast",
    lat: 11.6854,
    lng: 76.132,
    currentRegime: "Orographic Rainfall",
    rawRainfallMm: 142.5,
    correctedRainfallMm: 198.2,
    observedRainfallMm: 204.0,
    biasCorrectionMm: +55.7,
    heavyRainProbPct: 98,
    veryHeavyRainProbPct: 84,
    riskLevel: "Extreme",
    forecastCycle: "00Z (2026-09-29)",
    lastUpdated: "2026-09-29 06:00 UTC",
    auditHash: "0x8f7a93b4e12c4d9a",
    warningNote: "Extreme mountain slope rainfall. Potential flash flooding along Kabini river tributaries.",
    forecast7Day: [
      { day: "Day 1", dateStr: "2026-09-30", rawMm: 142.5, correctedMm: 198.2, observedMm: 204.0, heavyProbPct: 98, veryHeavyProbPct: 84 },
      { day: "Day 2", dateStr: "2026-10-01", rawMm: 110.0, correctedMm: 154.0, observedMm: null, heavyProbPct: 92, veryHeavyProbPct: 71 },
      { day: "Day 3", dateStr: "2026-10-02", rawMm: 85.2, correctedMm: 118.5, observedMm: null, heavyProbPct: 85, veryHeavyProbPct: 52 },
      { day: "Day 4", dateStr: "2026-10-03", rawMm: 62.0, correctedMm: 84.0, observedMm: null, heavyProbPct: 68, veryHeavyProbPct: 28 },
      { day: "Day 5", dateStr: "2026-10-04", rawMm: 45.0, correctedMm: 58.0, observedMm: null, heavyProbPct: 40, veryHeavyProbPct: 12 },
      { day: "Day 6", dateStr: "2026-10-05", rawMm: 28.0, correctedMm: 34.0, observedMm: null, heavyProbPct: 18, veryHeavyProbPct: 4 },
      { day: "Day 7", dateStr: "2026-10-06", rawMm: 18.0, correctedMm: 22.0, observedMm: null, heavyProbPct: 8, veryHeavyProbPct: 1 },
    ],
  },
  {
    id: "sohra",
    name: "Cherrapunji (Sohra)",
    state: "Meghalaya",
    zone: "Northeast",
    lat: 25.2986,
    lng: 91.7302,
    currentRegime: "Orographic Rainfall",
    rawRainfallMm: 210.0,
    correctedRainfallMm: 340.5,
    observedRainfallMm: 352.0,
    biasCorrectionMm: +130.5,
    heavyRainProbPct: 99,
    veryHeavyRainProbPct: 95,
    riskLevel: "Extreme",
    forecastCycle: "00Z (2026-09-29)",
    lastUpdated: "2026-09-29 06:00 UTC",
    auditHash: "0x3b1c8f42d90e71aa",
    warningNote: "Unprecedented moisture funneling across Bangladesh plains onto Khasi escarpment.",
    forecast7Day: [
      { day: "Day 1", dateStr: "2026-09-30", rawMm: 210.0, correctedMm: 340.5, observedMm: 352.0, heavyProbPct: 99, veryHeavyProbPct: 95 },
      { day: "Day 2", dateStr: "2026-10-01", rawMm: 180.0, correctedMm: 285.0, observedMm: null, heavyProbPct: 97, veryHeavyProbPct: 91 },
      { day: "Day 3", dateStr: "2026-10-02", rawMm: 145.0, correctedMm: 220.0, observedMm: null, heavyProbPct: 94, veryHeavyProbPct: 82 },
      { day: "Day 4", dateStr: "2026-10-03", rawMm: 95.0, correctedMm: 140.0, observedMm: null, heavyProbPct: 82, veryHeavyProbPct: 60 },
      { day: "Day 5", dateStr: "2026-10-04", rawMm: 68.0, correctedMm: 92.0, observedMm: null, heavyProbPct: 65, veryHeavyProbPct: 35 },
      { day: "Day 6", dateStr: "2026-10-05", rawMm: 42.0, correctedMm: 55.0, observedMm: null, heavyProbPct: 38, veryHeavyProbPct: 15 },
      { day: "Day 7", dateStr: "2026-10-06", rawMm: 25.0, correctedMm: 32.0, observedMm: null, heavyProbPct: 20, veryHeavyProbPct: 5 },
    ],
  },
  {
    id: "mumbai-suburban",
    name: "Mumbai Suburban",
    state: "Maharashtra",
    zone: "West Coast",
    lat: 19.076,
    lng: 72.8777,
    currentRegime: "Coastal Rainfall",
    rawRainfallMm: 125.0,
    correctedRainfallMm: 168.4,
    observedRainfallMm: 172.5,
    biasCorrectionMm: +43.4,
    heavyRainProbPct: 94,
    veryHeavyRainProbPct: 78,
    riskLevel: "High",
    forecastCycle: "00Z (2026-09-29)",
    lastUpdated: "2026-09-29 06:00 UTC",
    auditHash: "0x12a98f45c7e3d100",
    warningNote: "Offshore vortex convergence. High tide interaction warning between 08:30–11:00 IST.",
    forecast7Day: [
      { day: "Day 1", dateStr: "2026-09-30", rawMm: 125.0, correctedMm: 168.4, observedMm: 172.5, heavyProbPct: 94, veryHeavyProbPct: 78 },
      { day: "Day 2", dateStr: "2026-10-01", rawMm: 95.0, correctedMm: 132.0, observedMm: null, heavyProbPct: 88, veryHeavyProbPct: 64 },
      { day: "Day 3", dateStr: "2026-10-02", rawMm: 70.0, correctedMm: 92.0, observedMm: null, heavyProbPct: 75, veryHeavyProbPct: 38 },
      { day: "Day 4", dateStr: "2026-10-03", rawMm: 45.0, correctedMm: 56.0, observedMm: null, heavyProbPct: 45, veryHeavyProbPct: 15 },
      { day: "Day 5", dateStr: "2026-10-04", rawMm: 22.0, correctedMm: 28.0, observedMm: null, heavyProbPct: 18, veryHeavyProbPct: 4 },
      { day: "Day 6", dateStr: "2026-10-05", rawMm: 12.0, correctedMm: 15.0, observedMm: null, heavyProbPct: 6, veryHeavyProbPct: 1 },
      { day: "Day 7", dateStr: "2026-10-06", rawMm: 8.0, correctedMm: 10.0, observedMm: null, heavyProbPct: 3, veryHeavyProbPct: 0 },
    ],
  },
  {
    id: "cuttack",
    name: "Cuttack",
    state: "Odisha",
    zone: "East Coast",
    lat: 20.4625,
    lng: 85.8828,
    currentRegime: "Monsoon Low/Depression",
    rawRainfallMm: 185.0,
    correctedRainfallMm: 142.0,
    observedRainfallMm: 138.2,
    biasCorrectionMm: -43.0,
    heavyRainProbPct: 89,
    veryHeavyRainProbPct: 65,
    riskLevel: "High",
    forecastCycle: "00Z (2026-09-29)",
    lastUpdated: "2026-09-29 06:00 UTC",
    auditHash: "0x77c4e12a90f84521",
    warningNote: "Bay depression tracking WNW over Mahanadi delta basin. NWP core bias downscaled.",
    forecast7Day: [
      { day: "Day 1", dateStr: "2026-09-30", rawMm: 185.0, correctedMm: 142.0, observedMm: 138.2, heavyProbPct: 89, veryHeavyProbPct: 65 },
      { day: "Day 2", dateStr: "2026-10-01", rawMm: 150.0, correctedMm: 115.0, observedMm: null, heavyProbPct: 82, veryHeavyProbPct: 50 },
      { day: "Day 3", dateStr: "2026-10-02", rawMm: 90.0, correctedMm: 68.0, observedMm: null, heavyProbPct: 60, veryHeavyProbPct: 22 },
      { day: "Day 4", dateStr: "2026-10-03", rawMm: 50.0, correctedMm: 38.0, observedMm: null, heavyProbPct: 30, veryHeavyProbPct: 8 },
      { day: "Day 5", dateStr: "2026-10-04", rawMm: 25.0, correctedMm: 19.0, observedMm: null, heavyProbPct: 12, veryHeavyProbPct: 2 },
      { day: "Day 6", dateStr: "2026-10-05", rawMm: 15.0, correctedMm: 12.0, observedMm: null, heavyProbPct: 5, veryHeavyProbPct: 0 },
      { day: "Day 7", dateStr: "2026-10-06", rawMm: 10.0, correctedMm: 8.0, observedMm: null, heavyProbPct: 2, veryHeavyProbPct: 0 },
    ],
  },
  {
    id: "nagpur",
    name: "Nagpur",
    state: "Maharashtra",
    zone: "Central India",
    lat: 21.1458,
    lng: 79.0882,
    currentRegime: "Active Monsoon",
    rawRainfallMm: 48.0,
    correctedRainfallMm: 68.5,
    observedRainfallMm: 71.0,
    biasCorrectionMm: +20.5,
    heavyRainProbPct: 62,
    veryHeavyRainProbPct: 18,
    riskLevel: "Moderate",
    forecastCycle: "00Z (2026-09-29)",
    lastUpdated: "2026-09-29 06:00 UTC",
    auditHash: "0x99a12e34f56b7890",
    warningNote: "Monsoon trough passing south of Nagpur. Moderate rain with isolated heavy spells.",
    forecast7Day: [
      { day: "Day 1", dateStr: "2026-09-30", rawMm: 48.0, correctedMm: 68.5, observedMm: 71.0, heavyProbPct: 62, veryHeavyProbPct: 18 },
      { day: "Day 2", dateStr: "2026-10-01", rawMm: 52.0, correctedMm: 74.0, observedMm: null, heavyProbPct: 68, veryHeavyProbPct: 22 },
      { day: "Day 3", dateStr: "2026-10-02", rawMm: 40.0, correctedMm: 55.0, observedMm: null, heavyProbPct: 45, veryHeavyProbPct: 10 },
      { day: "Day 4", dateStr: "2026-10-03", rawMm: 30.0, correctedMm: 42.0, observedMm: null, heavyProbPct: 28, veryHeavyProbPct: 4 },
      { day: "Day 5", dateStr: "2026-10-04", rawMm: 18.0, correctedMm: 24.0, observedMm: null, heavyProbPct: 10, veryHeavyProbPct: 1 },
      { day: "Day 6", dateStr: "2026-10-05", rawMm: 10.0, correctedMm: 12.0, observedMm: null, heavyProbPct: 4, veryHeavyProbPct: 0 },
      { day: "Day 7", dateStr: "2026-10-06", rawMm: 5.0, correctedMm: 6.0, observedMm: null, heavyProbPct: 1, veryHeavyProbPct: 0 },
    ],
  },
  {
    id: "shimla",
    name: "Shimla",
    state: "Himachal Pradesh",
    zone: "North India",
    lat: 31.1048,
    lng: 77.1734,
    currentRegime: "Break Monsoon",
    rawRainfallMm: 35.0,
    correctedRainfallMm: 88.0,
    observedRainfallMm: 92.5,
    biasCorrectionMm: +53.0,
    heavyRainProbPct: 78,
    veryHeavyRainProbPct: 34,
    riskLevel: "High",
    forecastCycle: "00Z (2026-09-29)",
    lastUpdated: "2026-09-29 06:00 UTC",
    auditHash: "0x44f912c8a30e11ef",
    warningNote: "Monsoon trough at Himalayan foothills causing severe orographic convective enhancement.",
    forecast7Day: [
      { day: "Day 1", dateStr: "2026-09-30", rawMm: 35.0, correctedMm: 88.0, observedMm: 92.5, heavyProbPct: 78, veryHeavyProbPct: 34 },
      { day: "Day 2", dateStr: "2026-10-01", rawMm: 45.0, correctedMm: 110.0, observedMm: null, heavyProbPct: 86, veryHeavyProbPct: 48 },
      { day: "Day 3", dateStr: "2026-10-02", rawMm: 30.0, correctedMm: 72.0, observedMm: null, heavyProbPct: 62, veryHeavyProbPct: 18 },
      { day: "Day 4", dateStr: "2026-10-03", rawMm: 20.0, correctedMm: 44.0, observedMm: null, heavyProbPct: 32, veryHeavyProbPct: 6 },
      { day: "Day 5", dateStr: "2026-10-04", rawMm: 10.0, correctedMm: 22.0, observedMm: null, heavyProbPct: 12, veryHeavyProbPct: 1 },
      { day: "Day 6", dateStr: "2026-10-05", rawMm: 5.0, correctedMm: 10.0, observedMm: null, heavyProbPct: 3, veryHeavyProbPct: 0 },
      { day: "Day 7", dateStr: "2026-10-06", rawMm: 2.0, correctedMm: 4.0, observedMm: null, heavyProbPct: 0, veryHeavyProbPct: 0 },
    ],
  },
  {
    id: "patna",
    name: "Patna",
    state: "Bihar",
    zone: "North India",
    lat: 25.5941,
    lng: 85.1376,
    currentRegime: "Break Monsoon",
    rawRainfallMm: 15.0,
    correctedRainfallMm: 42.0,
    observedRainfallMm: 45.0,
    biasCorrectionMm: +27.0,
    heavyRainProbPct: 35,
    veryHeavyRainProbPct: 8,
    riskLevel: "Moderate",
    forecastCycle: "00Z (2026-09-29)",
    lastUpdated: "2026-09-29 06:00 UTC",
    auditHash: "0x55a8891c3d2e001a",
    warningNote: "Feeder convective bands active near North Bihar border.",
    forecast7Day: [
      { day: "Day 1", dateStr: "2026-09-30", rawMm: 15.0, correctedMm: 42.0, observedMm: 45.0, heavyProbPct: 35, veryHeavyProbPct: 8 },
      { day: "Day 2", dateStr: "2026-10-01", rawMm: 25.0, correctedMm: 58.0, observedMm: null, heavyProbPct: 52, veryHeavyProbPct: 14 },
      { day: "Day 3", dateStr: "2026-10-02", rawMm: 18.0, correctedMm: 38.0, observedMm: null, heavyProbPct: 30, veryHeavyProbPct: 5 },
      { day: "Day 4", dateStr: "2026-10-03", rawMm: 10.0, correctedMm: 20.0, observedMm: null, heavyProbPct: 12, veryHeavyProbPct: 1 },
      { day: "Day 5", dateStr: "2026-10-04", rawMm: 5.0, correctedMm: 10.0, observedMm: null, heavyProbPct: 4, veryHeavyProbPct: 0 },
      { day: "Day 6", dateStr: "2026-10-05", rawMm: 2.0, correctedMm: 4.0, observedMm: null, heavyProbPct: 1, veryHeavyProbPct: 0 },
      { day: "Day 7", dateStr: "2026-10-06", rawMm: 1.0, correctedMm: 2.0, observedMm: null, heavyProbPct: 0, veryHeavyProbPct: 0 },
    ],
  },
  {
    id: "barmer",
    name: "Barmer",
    state: "Rajasthan",
    zone: "Central India",
    lat: 25.7532,
    lng: 71.4181,
    currentRegime: "Break Monsoon",
    rawRainfallMm: 2.5,
    correctedRainfallMm: 0.8,
    observedRainfallMm: 0.0,
    biasCorrectionMm: -1.7,
    heavyRainProbPct: 2,
    veryHeavyRainProbPct: 0,
    riskLevel: "Low",
    forecastCycle: "00Z (2026-09-29)",
    lastUpdated: "2026-09-29 06:00 UTC",
    auditHash: "0x11029e84a2c13499",
    warningNote: "Dry anticyclonic subsidence over West Rajasthan. Minimal precipitation risk.",
    forecast7Day: [
      { day: "Day 1", dateStr: "2026-09-30", rawMm: 2.5, correctedMm: 0.8, observedMm: 0.0, heavyProbPct: 2, veryHeavyProbPct: 0 },
      { day: "Day 2", dateStr: "2026-10-01", rawMm: 1.0, correctedMm: 0.2, observedMm: null, heavyProbPct: 1, veryHeavyProbPct: 0 },
      { day: "Day 3", dateStr: "2026-10-02", rawMm: 0.5, correctedMm: 0.0, observedMm: null, heavyProbPct: 0, veryHeavyProbPct: 0 },
      { day: "Day 4", dateStr: "2026-10-03", rawMm: 0.0, correctedMm: 0.0, observedMm: null, heavyProbPct: 0, veryHeavyProbPct: 0 },
      { day: "Day 5", dateStr: "2026-10-04", rawMm: 0.0, correctedMm: 0.0, observedMm: null, heavyProbPct: 0, veryHeavyProbPct: 0 },
      { day: "Day 6", dateStr: "2026-10-05", rawMm: 0.0, correctedMm: 0.0, observedMm: null, heavyProbPct: 0, veryHeavyProbPct: 0 },
      { day: "Day 7", dateStr: "2026-10-06", rawMm: 0.0, correctedMm: 0.0, observedMm: null, heavyProbPct: 0, veryHeavyProbPct: 0 },
    ],
  },
  {
    id: "bengaluru-urban",
    name: "Bengaluru Urban",
    state: "Karnataka",
    zone: "South Peninsular",
    lat: 12.9716,
    lng: 77.5946,
    currentRegime: "Active Monsoon",
    rawRainfallMm: 32.0,
    correctedRainfallMm: 24.5,
    observedRainfallMm: 26.0,
    biasCorrectionMm: -7.5,
    heavyRainProbPct: 15,
    veryHeavyRainProbPct: 2,
    riskLevel: "Low",
    forecastCycle: "00Z (2026-09-29)",
    lastUpdated: "2026-09-29 06:00 UTC",
    auditHash: "0x78ab12e990c412d0",
    warningNote: "Rain-shadow effect of Western Ghats active. Light evening thunder squalls possible.",
    forecast7Day: [
      { day: "Day 1", dateStr: "2026-09-30", rawMm: 32.0, correctedMm: 24.5, observedMm: 26.0, heavyProbPct: 15, veryHeavyProbPct: 2 },
      { day: "Day 2", dateStr: "2026-10-01", rawMm: 28.0, correctedMm: 20.0, observedMm: null, heavyProbPct: 12, veryHeavyProbPct: 1 },
      { day: "Day 3", dateStr: "2026-10-02", rawMm: 18.0, correctedMm: 14.0, observedMm: null, heavyProbPct: 6, veryHeavyProbPct: 0 },
      { day: "Day 4", dateStr: "2026-10-03", rawMm: 12.0, correctedMm: 9.0, observedMm: null, heavyProbPct: 3, veryHeavyProbPct: 0 },
      { day: "Day 5", dateStr: "2026-10-04", rawMm: 8.0, correctedMm: 5.0, observedMm: null, heavyProbPct: 1, veryHeavyProbPct: 0 },
      { day: "Day 6", dateStr: "2026-10-05", rawMm: 5.0, correctedMm: 3.0, observedMm: null, heavyProbPct: 0, veryHeavyProbPct: 0 },
      { day: "Day 7", dateStr: "2026-10-06", rawMm: 2.0, correctedMm: 1.0, observedMm: null, heavyProbPct: 0, veryHeavyProbPct: 0 },
    ],
  },
];

export function getDistrictById(id: string): DistrictData | undefined {
  return DISTRICTS_DATA.find((d) => d.id === id);
}

export function getAllDistricts(): DistrictData[] {
  return DISTRICTS_DATA;
}
