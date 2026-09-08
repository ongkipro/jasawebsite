import type { MetadataRoute } from 'next';
import foliosData from '@/data/folios.json';
import nichesData from '@/data/niches.json';
import { siteConfig } from '@/data/siteConfig';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  // Root entry
  const rootEntry: MetadataRoute.Sitemap[number] = {
    url: siteConfig.url,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 1.0,
  };

  // Core folio spreads
  const coreEntries: MetadataRoute.Sitemap = foliosData.map((folio) => ({
    url: `${siteConfig.url}/folio/${folio.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // 30+ Niche programmatic SEO pages
  const nicheEntries: MetadataRoute.Sitemap = nichesData.map((niche) => ({
    url: `${siteConfig.url}/folio/niche-${niche.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [rootEntry, ...coreEntries, ...nicheEntries];
}
