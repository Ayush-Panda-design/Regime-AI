export interface RegimeInfo {
  id: string;
  name: string;
  shortName: string;
  color: string;
  badgeVariant: "Active Monsoon" | "Break Monsoon" | "Monsoon Low/Depression" | "Coastal Rainfall" | "Orographic Rainfall";
  signature: string;
  typicalBias: string;
  description: string;
  activeRegions: string;
  synopticFeatures: string[];
  rawRmse: number; // mm/day
  correctedRmse: number; // mm/day
  improvementPct: number;
  sampleDistricts: string[];
}

export const REGIMES_DATA: RegimeInfo[] = [
  {
    id: "active-monsoon",
    name: "Active Monsoon",
    shortName: "Active",
    color: "#2F6F8F",
    badgeVariant: "Active Monsoon",
    signature: "Strong cross-equatorial flow & persistent trough line across Indo-Gangetic Plains",
    typicalBias: "NWP under-predicts widespread stratiform rain by -15% to -25%",
    description: "Characterized by vigorous low-level westerly winds (30+ knots) over the Arabian Sea, a well-defined monsoon trough, and widespread moderate-to-heavy rainfall across central and northern India.",
    activeRegions: "Central India, Konkan, Western Ghats, Indo-Gangetic Belt",
    synopticFeatures: [
      "Monsoon Trough south of normal position",
      "Strong Arabian Sea low-level jet",
      "High column-integrated moisture (>55 kg/m²)",
    ],
    rawRmse: 18.4,
    correctedRmse: 9.8,
    improvementPct: 46.7,
    sampleDistricts: ["Mumbai", "Pune", "Wayanad", "Nagpur"],
  },
  {
    id: "break-monsoon",
    name: "Break Monsoon",
    shortName: "Break",
    color: "#E2A336",
    badgeVariant: "Break Monsoon",
    signature: "Monsoon trough shifts north to Himalayan foothills; central India dry spell",
    typicalBias: "NWP over-predicts rainfall in central peninsular India (+35%)",
    description: "The seasonal monsoon trough moves north close to the Himalayas. Rainfall drops sharply over central and southern India while heavy localized spells occur along the Himalayan foothills and northeast India.",
    activeRegions: "Himalayan Foothills, North Bihar, Sub-Himalayan West Bengal, Assam",
    synopticFeatures: [
      "Monsoon Trough shifted to 27°N - 30°N",
      "Surface pressure above normal over central India",
      "Weak low-level westerlies over Arabian Sea",
    ],
    rawRmse: 14.2,
    correctedRmse: 7.1,
    improvementPct: 50.0,
    sampleDistricts: ["Shimla", "Dehradun", "Darjeeling", "Guwahati"],
  },
  {
    id: "monsoon-depression",
    name: "Monsoon Low / Depression",
    shortName: "Depression",
    color: "#6B4E8F",
    badgeVariant: "Monsoon Low/Depression",
    signature: "Cyclonic vortex over Bay of Bengal tracking west-northwestward",
    typicalBias: "NWP misplaces heavy rain core by 80-150 km and over-estimates peak core intensity",
    description: "Synoptic-scale low pressure systems or depressions forming in the Head Bay of Bengal and moving along the monsoon trough across central India, causing concentrated extreme precipitation events.",
    activeRegions: "Odisha, Chhattisgarh, Vidarbha, East MP, South Odisha Coast",
    synopticFeatures: [
      "Closed cyclonic circulation up to 500 hPa",
      "Strong convergence in southwest quadrant",
      "Pressure anomaly -4 to -8 hPa",
    ],
    rawRmse: 26.5,
    correctedRmse: 12.3,
    improvementPct: 53.6,
    sampleDistricts: ["Cuttack", "Bhubaneswar", "Raipur", "Puri"],
  },
  {
    id: "coastal-rainfall",
    name: "Coastal Rainfall",
    shortName: "Coastal",
    color: "#2A9D8F",
    badgeVariant: "Coastal Rainfall",
    signature: "Land-sea breeze convergence & offshore vortex along west/east coastlines",
    typicalBias: "NWP smoothes narrow coastal convective rain cells into broad offshore rain",
    description: "Mesoscale convective systems formed by boundary-layer friction mismatch between sea and land, producing intense morning convective bursts along coastal belts.",
    activeRegions: "Konkan & Goa, Coastal Karnataka, Malabar Coast, Coromandel Coast",
    synopticFeatures: [
      "Offshore trough along Konkan-Kerala coast",
      "Low-level coastal wind shear",
      "High Sea Surface Temperatures (>29.5°C)",
    ],
    rawRmse: 21.0,
    correctedRmse: 11.2,
    improvementPct: 46.7,
    sampleDistricts: ["Mangaluru", "Udupi", "Kochi", "Ratnagiri"],
  },
  {
    id: "orographic-rainfall",
    name: "Orographic Rainfall",
    shortName: "Orographic",
    color: "#14453D",
    badgeVariant: "Orographic Rainfall",
    signature: "Moist airflow forced over Western Ghats or Khasi Hills topography",
    typicalBias: "Coarse NWP grid (25km) under-resolves narrow crest rainfall peaks by up to 50%",
    description: "Forced topographic lifting of moisture-laden monsoonal westerlies hitting mountain barriers, generating world-record extreme rainfall intensities on windward slopes.",
    activeRegions: "Western Ghats Escarpment, Meghalaya Plateau (Khasi Hills), Nilgiris",
    synopticFeatures: [
      "Perpendicular moisture flux hitting high terrain (>1000m)",
      "Strong Froude number (>0.5)",
      "Deep convective column over windward slope",
    ],
    rawRmse: 32.8,
    correctedRmse: 14.1,
    improvementPct: 57.0,
    sampleDistricts: ["Cherrapunji (Sohra)", "Mahabaleshwar", "Agumbe", "Wayanad"],
  },
];

export function getRegimeById(id: string): RegimeInfo | undefined {
  return REGIMES_DATA.find((r) => r.id === id);
}

export function getAllRegimes(): RegimeInfo[] {
  return REGIMES_DATA;
}
