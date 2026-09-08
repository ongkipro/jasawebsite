export type SpreadSide = 'left' | 'right' | 'single';

export interface FolioSpreadMeta {
  id: string; // "spread-00", "spread-01", ...
  spreadIndex: number;
  slug: string; // "cover", "company-profile", "sales-website", "ecommerce-shopify", "custom-web-app", "portfolio", "maintenance-care", "colophon"
  ribbonLabel: string; // "COVER", "COMPRO", "SALES", "COMM", "APPS", "GALERI", "CARE", "INDEX"
  title: string;
  leftTitle: string;
  rightTitle: string;
  leftFolioNumber: string;
  rightFolioNumber: string;
  description: string;
}
