export interface NicheItem {
  id: string; // e.g. "niche-otomotif"
  slug: string; // e.g. "otomotif" or "dealer-otomotif"
  industryName: string; // e.g. "Dealer Mobil & Showroom"
  targetMarket: string; // e.g. "Dealer Resmi, Showroom Mobil Bekas, Rental Komersial"
  headline: string;
  painPoints: string[];
  keyFeatures: string[];
  recommendedPillar: string; // e.g. "Sales & Lead Generation"
  startingPrice: string; // e.g. "Rp 5.900.000"
  schemaType: string; // e.g. "AutomotiveBusiness", "MedicalBusiness"
  voucherCode: string;
}
