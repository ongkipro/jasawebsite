export interface SiteSocial {
  github?: string;
  instagram?: string;
  linkedin?: string;
  twitter?: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  taglineEn: string;
  description: string;
  url: string;
  phone: string; // e.g. "6281234567890" without + or leading 0
  phoneDisplay: string; // e.g. "+62 812-3456-7890"
  email: string;
  address: {
    city: string;
    region: string;
    country: string;
  };
  social: SiteSocial;
  stats: {
    speedScore: number;
    ttfb: string;
    hostingCost: string;
    codeOwnership: string;
  };
}
