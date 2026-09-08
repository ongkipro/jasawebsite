export interface NichePainPoint {
  title: string;
  description: string;
}

export interface NicheFeature {
  title: string;
  description: string;
}

export interface NicheFieldNote {
  tag: string;
  content: string;
}

export interface NicheConversionStep {
  step: string;
  label: string;
  detail: string;
}

export interface NicheItem {
  id: string; // e.g. "niche-otomotif"
  slug: string; // e.g. "dealer-otomotif"
  industryName: string; // e.g. "Dealer Mobil & Showroom Kendaraan"
  category: string; // e.g. "Otomotif & Transportasi"
  targetMarket: string; // e.g. "Dealer Resmi Mobil Baru, Showroom Mobil Bekas, Rental Komersial"
  headline: string;
  fieldNote: NicheFieldNote;
  conversionFlow: NicheConversionStep[];
  painPoints: NichePainPoint[];
  keyFeatures: NicheFeature[];
  techRationale: string;
  recommendedPillar: string; // e.g. "Sales & Lead Generation"
  startingPrice: string; // e.g. "Rp 5,9jt"
  schemaType: string; // e.g. "AutomotiveBusiness"
  voucherCode: string;
}

