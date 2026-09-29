export interface PipelineStep {
  stepNumber: number;
  id: string;
  name: string;
  shortTitle: string;
  iconName: "Database" | "Cpu" | "Layers" | "ShieldCheck" | "Share2";
  summary: string;
  latencyMs: number;
  techDetails: string;
  subSteps: { title: string; description: string }[];
}

export const PIPELINE_STEPS: PipelineStep[] = [
  {
    stepNumber: 1,
    id: "ingest",
    name: "Multi-Model NWP Ingestion",
    shortTitle: "Data Ingestion",
    iconName: "Database",
    summary: "Ingests raw 0.25° grid GFS & ECMWF GRIB2 forecast outputs every 6 hours (00Z, 06Z, 12Z, 18Z).",
    latencyMs: 340,
    techDetails: "Decodes 240-hour precipitation fields, 850hPa/500hPa winds, precipitable water, and sea-level pressure arrays.",
    subSteps: [
      { title: "GRIB2 Parsing", description: "Extracts total precipitation (APCP) and synoptic fields across 0.25° latitude/longitude grid." },
      { title: "Bilinear Interpolation", description: "Regrids multi-center model outputs onto standard IMD 715-district centroid boundaries." },
      { title: "Quality Check", description: "Sanity bounds checking against extreme climatological physical limits." },
    ],
  },
  {
    stepNumber: 2,
    id: "feature-engineering",
    name: "Synoptic Feature Extraction",
    shortTitle: "Preprocessing",
    iconName: "Cpu",
    summary: "Derives synoptic thermodynamic indices, moisture transport fluxes, and topographic elevation profiles.",
    latencyMs: 520,
    techDetails: "Computes integrated vapor transport (IVT), low-level jet velocity, Froude topography number, and monsoon trough axis distance.",
    subSteps: [
      { title: "Moisture Flux Vectoring", description: "Calculates IVT magnitude and direction at 850 hPa pressure surfaces." },
      { title: "Trough Axis Alignment", description: "Locates pressure minima line across 20°N–28°N to measure trough displacement." },
      { title: "Topographic Gradient Map", description: "Combines 30m SRTM DEM slope vectors with low-level wind incidence angles." },
    ],
  },
  {
    stepNumber: 3,
    id: "classify",
    name: "Synoptic Regime Classification",
    shortTitle: "Regime Classify",
    iconName: "Layers",
    summary: "Passes extracted atmospheric feature vectors into a trained Gradient Boosted Regime Classifier.",
    latencyMs: 180,
    techDetails: "Assigns one of 5 synoptic rainfall regimes (Active, Break, Low/Depression, Coastal, Orographic) with softmax probability confidence.",
    subSteps: [
      { title: "Vector Encoding", description: "Formats 48 atmospheric diagnostic variables into normalized tensor vectors." },
      { title: "XGBoost Classifier", description: "Runs inference across ensemble decision trees calibrated on 40 years of ERA5 reanalysis." },
      { title: "Confidence Scoring", description: "Outputs primary regime type along with secondary regime mix probability percentages." },
    ],
  },
  {
    stepNumber: 4,
    id: "correct",
    name: "Regime-Aware Bias Correction",
    shortTitle: "AI Correction",
    iconName: "ShieldCheck",
    summary: "Applies regime-specific Quantile Delta Mapping (QDM) and spatial neural network bias correction.",
    latencyMs: 650,
    techDetails: "Adjusts model intensity distribution tailored to active regime physics, eliminating systematic wet and dry biases.",
    subSteps: [
      { title: "Regime QDM Scaling", description: "Scales precipitation quantiles using regime-specific historical transfer functions." },
      { title: "Spatial Downscaling", description: "Refines coarse grid cells near steep terrain using high-resolution DEM guidance." },
      { title: "Ensemble Calibrated Output", description: "Generates mean corrected rain (mm) and uncertainty variance bands." },
    ],
  },
  {
    stepNumber: 5,
    id: "deliver",
    name: "Verification & Traceable Logging",
    shortTitle: "Verify & Deliver",
    iconName: "Share2",
    summary: "Calculates threshold exceedance probabilities, updates district alerts, and signs immutable audit logs.",
    latencyMs: 210,
    techDetails: "Generates GeoJSON district layers, CSV exports, ETS/CSI verification metrics, and cryptographic cycle hashes.",
    subSteps: [
      { title: "Exceedance Probability", description: "Calculates cumulative distribution function for >64.5mm and >115.5mm thresholds." },
      { title: "Audit SHA-256 Sign", description: "Hashes run configuration, input GRIB2 hashes, and model parameters for audit traceability." },
      { title: "API & Web Dispatch", description: "Pushes versioned products to district dashboards and automated emergency alert feeds." },
    ],
  },
];

export function getPipelineSteps(): PipelineStep[] {
  return PIPELINE_STEPS;
}
