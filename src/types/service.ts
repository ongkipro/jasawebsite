export interface ServiceTier {
  id: string; // e.g. "starter", "business", "growth", "corporate", "pro"
  name: string; // e.g. "Starter", "Business", "Growth", "Pro"
  isRecommended?: boolean;
  investment: string; // e.g. "Rp 2.900.000", "Rp 4.900.000", "Rp 8.900.000 - Rp 15.000.000+"
  timeline: string; // e.g. "3–5 Hari Kerja"
  targetClients: string; // e.g. "UMKM, Legalitas Baru"
  deliverables: string[];
  couponCode: string; // e.g. "ONG-COMPRO-STARTER"
}

export interface ServiceOffering {
  id: string; // "company-profile", "sales-website", "ecommerce-shopify", "custom-web-app", "maintenance-care"
  pillarNumber: string; // "PILLAR 01", "PILLAR 02", etc.
  category: string; // "Credibility & B2B", "Revenue & Acquisition", "Commerce", "Enterprise", "Retainer"
  title: string;
  headline: string;
  startingPriceAnchor: string; // e.g. "Mulai Rp 2,9 jt"
  problemStatement: string;
  solutionNarrative: string;
  idealFor: string[];
  tiers: ServiceTier[];
  voucherTitle: string;
  voucherCode: string;
  voucherPerks: string;
  whatsappMessageTemplate: string;
}
