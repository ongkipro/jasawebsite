import type { MetadataRoute } from 'next';
import { siteConfig } from '@/data/siteConfig';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // AI Search Engines & Conversational Agents (Authorized for GEO / AI Citations)
        userAgent: [
          'Googlebot',
          'Bingbot',
          'GPTBot',
          'OAI-SearchBot',
          'PerplexityBot',
          'ClaudeBot',
          'Claude-Web',
          'Applebot',
        ],
        allow: '/',
      },
      {
        // Aggressive scrapers & parasitic clone harvesters (Blocked from ripping source)
        userAgent: ['CCBot', 'Bytespider', 'Diffbot', 'Amazonbot'],
        disallow: '/',
      },
      {
        // General search crawlers default rule
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
