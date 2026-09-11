import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';

const out = path.resolve('out');
const folios = JSON.parse(fs.readFileSync('src/data/folios.json', 'utf8'));
const niches = JSON.parse(fs.readFileSync('src/data/niches.json', 'utf8'));
const origin = 'https://jasawebsite.co';
const decode = (text) => text.replaceAll('&amp;', '&').replaceAll('&quot;', '"').replaceAll('&#x27;', "'").replaceAll('&lt;', '<').replaceAll('&gt;', '>');
const routes = ['/', ...folios.map(f => `/folio/${f.slug}`), ...niches.map(n => `/folio/niche-${n.slug}`)];
const prices = { 'company-profile': 2900000, 'sales-website': 3500000, 'shopify': 6900000, 'ecommerce-shopify': 3900000, 'custom-web-app': 15000000, 'maintenance-care': 2500000 };
const nichePrices = [5900000,3500000,3500000,8900000,6900000,4900000,5900000,4900000,4900000,6900000,4900000,3500000,3500000,6900000,6900000,2900000,3500000,5900000,5900000,4900000,5900000,3500000,3500000,4900000];
const titles = new Set();
let checks = 0;
function check(ok, message) { assert.ok(ok, message); checks++; }
for (const route of routes) {
  const html = fs.readFileSync(path.join(out, route === '/' ? 'index.html' : `${route.slice(1)}.html`), 'utf8');
  const expected = origin + (route === '/' || route === '/folio/cover' ? '' : route);
  const canonical = [...html.matchAll(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"[^>]*>/g)];
  check(canonical.length === 1 && decode(canonical[0][1]) === expected, `${route}: exactly one correct canonical`);
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
  check(title && (route === '/folio/cover' || !titles.has(title)), `${route}: unique title except explicit cover alias`);
  titles.add(title);
  check(/<meta name="description" content="[^"]+"/.test(html), `${route}: description`);
  check(!/<meta name="robots"[^>]*noindex/.test(html), `${route}: indexable`);
  check(/<meta property="og:url" content="[^"]+"/.test(html) && html.includes(`content="${expected}"`), `${route}: social URL`);
  check(/<meta name="twitter:card" content="summary_large_image"/.test(html), `${route}: share card`);
  const body = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '');
  check(/<h1\b/.test(body) && body.includes('<article'), `${route}: primary content is in initial HTML`);
  check(!body.includes('opacity:0'), `${route}: first content is visible without hydration`);
  const graphs = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].flatMap(m => { const data=JSON.parse(m[1]); return data['@graph'] || [data]; });
  check(graphs.some(g=>g['@type']==='WebPage' && g.url===expected), `${route}: WebPage entity matches canonical`);
  check(!graphs.some(g=>g.aggregateRating || g['@type']==='FAQPage'), `${route}: no unsupported rating or invisible FAQ`);
  const slug=route.split('/').at(-1);
  const nicheIndex=niches.findIndex(n=>`niche-${n.slug}`===slug);
  const price=prices[slug] ?? (nicheIndex < 0 ? undefined : nichePrices[nicheIndex]);
  if (price) {
    const service=graphs.find(g=>g['@type']==='Service');
    check(service?.offers?.priceSpecification?.minPrice===price, `${route}: starting price is ${price} IDR`);
    check(service?.offers?.priceSpecification?.priceCurrency==='IDR', `${route}: rupiah currency`);
  }
  const links=[...body.matchAll(/href="([^"]+)"/g)].map(m=>decode(m[1]));
  const wa=links.filter(h=>h.startsWith('https://wa.me/'));
  check(wa.length>0,`${route}: actual WhatsApp conversion link`);
  check(wa.some(h=>new URL(h).searchParams.get('text')?.includes('[Ref:')),`${route}: WhatsApp carries page attribution`);
  for(const href of wa) {
    const url=new URL(href);
    check(url.pathname==='/6283830441495' && Boolean(url.searchParams.get('text')?.includes('JasaWebsite.co')), `${route}: correct WhatsApp recipient and encoded message`);
  }
  for(const href of links.filter(h=>h.startsWith('/')&&!h.startsWith('//'))) {
    const pathname=new URL(href,origin).pathname;
    check([pathname,`${pathname}.html`,`${pathname}/index.html`].some(p=>fs.existsSync(path.join(out,p))),`${route}: internal target exists ${pathname}`);
  }
}
const sitemap=fs.readFileSync(path.join(out,'sitemap.xml'),'utf8');
const urls=[...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>m[1]);
check(urls.length===32 && new Set(urls).size===32,'Sitemap contains 32 unique canonical URLs');
check(!sitemap.includes('/folio/cover') && !sitemap.includes('<lastmod>'),'Sitemap excludes duplicate cover and fabricated freshness');
for(const route of routes.filter(r=>r!=='/folio/cover')) check(urls.includes(origin+(route==='/'?'':route)),`Sitemap includes ${route}`);
const notFound=fs.readFileSync(path.join(out,'404.html'),'utf8');
check(/<meta name="robots"[^>]*noindex/.test(notFound),'404 is noindex');
check(fs.readFileSync(path.join(out,'robots.txt'),'utf8').includes(`${origin}/sitemap.xml`),'Robots advertises sitemap');
console.log(`PASS: ${checks} generated-output checks across ${routes.length} pages.`);
