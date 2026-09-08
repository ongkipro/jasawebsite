export type PortfolioCategory =
  | 'all'
  | 'company-profile'
  | 'sales-website'
  | 'ecommerce'
  | 'shopify'
  | 'custom-app';

export interface PortfolioMetric {
  label: string; // e.g. "Load Speed", "CPL Iklan", "Leads WhatsApp"
  value: string; // e.g. "0.28s", "-42%", "1.200+"
  detail?: string;
}

export interface PortfolioItem {
  id: string; // e.g. "summarecon-mutiara", "nocturne-atelier"
  clientName: string; // e.g. "Summarecon Mutiara Makassar"
  category: PortfolioCategory;
  categoryLabel: string; // e.g. "Sales & Lead Gen Website"
  industry: string; // e.g. "Real Estate & Properti"
  challenge: string;
  solution: string;
  metrics: PortfolioMetric[];
  techStack: string[]; // e.g. ["Next.js 16", "Cloudflare", "Meta CAPI"]
  desktopImage: string; // Image path
  mobileImage: string; // Image path
  liveUrl?: string;
  voucherCode: string;
}
