import type { MetadataRoute } from 'next';
import foliosData from '@/data/folios.json';
import nichesData from '@/data/niches.json';
import { siteConfig } from '@/data/siteConfig';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  // Root entry
  const rootEntry: MetadataRoute.Sitemap[number] = {
    url: siteConfig.url,
    changeFrequency: 'weekly',
    priority: 1.0,
  };

  // Dedicated Shopify Featured Landing Page
  const shopifyEntry: MetadataRoute.Sitemap[number] = {
    url: `${siteConfig.url}/shopify`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.95,
  };

  // Core folio spreads
  const coreEntries: MetadataRoute.Sitemap = foliosData.filter((folio) => folio.slug !== 'cover').map((folio) => ({
    url: `${siteConfig.url}/folio/${folio.slug}`,
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // 30+ Niche programmatic SEO pages
  const nicheEntries: MetadataRoute.Sitemap = nichesData.map((niche) => ({
    url: `${siteConfig.url}/folio/niche-${niche.slug}`,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [rootEntry, shopifyEntry, ...coreEntries, ...nicheEntries];
}
