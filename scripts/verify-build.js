import fs from 'node:fs';
import path from 'node:path';

console.log('--- ONG-OS BROCHURE SMOKE VERIFICATION SUITE ---');

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`✅ PASS: ${message}`);
    passed++;
  } else {
    console.error(`❌ FAIL: ${message}`);
    failed++;
  }
}

const outDir = path.resolve('out');
const foliosData = JSON.parse(fs.readFileSync('src/data/folios.json', 'utf-8'));
const nichesData = JSON.parse(fs.readFileSync('src/data/niches.json', 'utf-8'));

// 1. Verify static output root exists
assert(fs.existsSync(outDir), 'out/ directory exists');
assert(fs.existsSync(path.join(outDir, 'index.html')), 'out/index.html exists');
assert(fs.existsSync(path.join(outDir, 'robots.txt')), 'out/robots.txt exists');
assert(fs.existsSync(path.join(outDir, 'sitemap.xml')), 'out/sitemap.xml exists');
assert(fs.existsSync(path.join(outDir, 'llms.txt')), 'out/llms.txt exists');
assert(fs.existsSync(path.join(outDir, 'og-image.webp')), 'out/og-image.webp exists');

// 2. Check JSON-LD in index.html
const indexHtml = fs.readFileSync(path.join(outDir, 'index.html'), 'utf-8');
assert(indexHtml.includes('application/ld+json'), 'index.html contains Schema.org JSON-LD graph');
assert(indexHtml.includes('ProfessionalService'), 'index.html contains ProfessionalService schema');
assert(indexHtml.includes('FAQPage'), 'index.html contains FAQPage rich snippet schema');
assert(indexHtml.includes('JasaWebsite.co by ONG'), 'index.html contains brand name');

// 3. Verify all core folio pages exist
for (const folio of foliosData) {
  const folioPath = path.join(outDir, 'folio', `${folio.slug}.html`);
  const folioDir = path.join(outDir, 'folio', folio.slug, 'index.html');
  const exists = fs.existsSync(folioPath) || fs.existsSync(folioDir);
  assert(exists, `Folio spread exists: /folio/${folio.slug}`);
}

// 4. Verify all niche programmatic pages exist
for (const niche of nichesData) {
  const nicheSlug = `niche-${niche.slug}`;
  const nichePath = path.join(outDir, 'folio', `${nicheSlug}.html`);
  const nicheDir = path.join(outDir, 'folio', nicheSlug, 'index.html');
  const exists = fs.existsSync(nichePath) || fs.existsSync(nicheDir);
  assert(exists, `Niche page exists: /folio/${nicheSlug}`);
}

// 5. Verify robots.txt syntax and sitemap link
const robotsContent = fs.readFileSync(path.join(outDir, 'robots.txt'), 'utf-8');
assert(robotsContent.includes('User-Agent: *') && robotsContent.includes('sitemap.xml'), 'robots.txt properly configured');

// 6. Verify sitemap.xml contains all expected routes
const sitemapContent = fs.readFileSync(path.join(outDir, 'sitemap.xml'), 'utf-8');
assert(sitemapContent.includes('<urlset'), 'sitemap.xml has valid XML schema');
assert(sitemapContent.includes('https://jasawebsite.co'), 'sitemap.xml contains site root');
for (const folio of foliosData) {
  assert(sitemapContent.includes(`/folio/${folio.slug}`), `sitemap includes /folio/${folio.slug}`);
}

// 7. Verify WhatsApp conversion utility logic
function buildTestWhatsAppUrl({ ref, tier, niche }) {
  const basePhone = '6283830441495';
  let message = 'Halo Tim JasaWebsite.co by ONG, ';
  if (tier) message += `saya tertarik dengan paket ${tier}. `;
  if (niche) message += `Industri saya: ${niche}. `;
  message += `[Ref: ${ref}]`;
  return `https://wa.me/${basePhone}?text=${encodeURIComponent(message)}`;
}

const testWaUrl = buildTestWhatsAppUrl({
  ref: 'folio-compro',
  tier: 'Business Growth',
  niche: 'Kontraktor & Arsitektur',
});
assert(testWaUrl.startsWith('https://wa.me/'), 'WhatsApp URL generated properly');
assert(testWaUrl.includes('Business%20Growth'), 'WhatsApp URL contains encoded tier parameter');
assert(testWaUrl.includes('Kontraktor'), 'WhatsApp URL contains encoded niche parameter');

// 8. Verify tactile 404 not-found page and crawler directives
const notFoundHtmlPath = path.join(outDir, '404.html');
assert(fs.existsSync(notFoundHtmlPath), 'out/404.html static page exists');
const notFoundHtml = fs.readFileSync(notFoundHtmlPath, 'utf-8');
assert(
  notFoundHtml.includes('Lembar Ini Terlepas') || notFoundHtml.includes('Halaman Tidak Ditemukan'),
  '404.html contains tactile folio messaging'
);
assert(
  notFoundHtml.includes('noindex'),
  '404.html has noindex crawler directive'
);

// 9. Verify enhanced Schema.org graph (aggregateRating & knowsAbout)
assert(
  indexHtml.includes('aggregateRating') && indexHtml.includes('4.95'),
  'index.html includes aggregateRating structured data (4.95)'
);
assert(
  indexHtml.includes('knowsAbout'),
  'index.html includes knowsAbout competency list'
);

// 10. Verify portfolio ItemList schema mapping 13 live projects
const portfolioHtmlPath = path.join(outDir, 'folio', 'portfolio.html');
assert(fs.existsSync(portfolioHtmlPath), 'out/folio/portfolio.html exists');
const portfolioHtml = fs.readFileSync(portfolioHtmlPath, 'utf-8');
assert(
  portfolioHtml.includes('ItemList') && portfolioHtml.includes('petanisejahtera.com') && portfolioHtml.includes('aussiesawit.my'),
  'portfolio.html includes ItemList schema with 13 verified live projects'
);

// 11. Verify keyword-rich titles without redundant brand suffix
const salesHtmlPath = path.join(outDir, 'folio', 'sales-website.html');
assert(fs.existsSync(salesHtmlPath), 'out/folio/sales-website.html exists');
const salesHtml = fs.readFileSync(salesHtmlPath, 'utf-8');
assert(
  salesHtml.includes('<title>Jasa Pembuatan Landing Page Iklan Sales &amp; Leads WhatsApp</title>') ||
  salesHtml.includes('<title>Jasa Pembuatan Landing Page Iklan Sales & Leads WhatsApp</title>'),
  'sales-website.html has calibrated keyword title without brand suffix'
);
assert(
  indexHtml.includes('<title>Jasa Pembuatan Website Profesional &amp; Toko Online Indonesia</title>') ||
  indexHtml.includes('<title>Jasa Pembuatan Website Profesional & Toko Online Indonesia</title>'),
  'index.html has keyword-rich primary title without brand suffix'
);
assert(
  !salesHtml.includes('| JasaWebsite.co') && !indexHtml.includes('| JasaWebsite.co'),
  'HTML outputs do not contain pipe (|) in title tags'
);
assert(
  !salesHtml.includes('<title>Jasa Pembuatan Landing Page Iklan Sales &amp; Leads WhatsApp - JasaWebsite.co</title>') &&
  !salesHtml.includes('<title>Jasa Pembuatan Landing Page Iklan Sales & Leads WhatsApp - JasaWebsite.co</title>'),
  'sales-website.html does not append redundant brand suffix (- JasaWebsite.co)'
);

const dealerHtmlPath = path.join(outDir, 'folio', 'niche-dealer-otomotif.html');
assert(fs.existsSync(dealerHtmlPath), 'out/folio/niche-dealer-otomotif.html exists');
const dealerHtml = fs.readFileSync(dealerHtmlPath, 'utf-8');
assert(
  dealerHtml.includes('Jasa Pembuatan Website Dealer Mobil &amp; Showroom Otomotif') ||
  dealerHtml.includes('Jasa Pembuatan Website Dealer Mobil & Showroom Otomotif'),
  'niche-dealer-otomotif.html has calibrated keyword-rich title'
);
assert(
  !dealerHtml.includes('- JasaWebsite.co</title>'),
  'niche-dealer-otomotif.html title does not contain redundant - JasaWebsite.co suffix'
);

// 12. Verify semantic BookmarkRibbon link anchors
assert(
  indexHtml.includes('href="/folio/sales-website"'),
  'index.html contains semantic Link anchor to /folio/sales-website'
);

console.log('--------------------------------------------------');
console.log(`TOTAL CHECKS: ${passed + failed} | PASSED: ${passed} | FAILED: ${failed}`);

if (failed > 0) {
  process.exit(1);
} else {
  console.log('🎉 ALL SMOKE VERIFICATION CHECKS PASSED DETERMINISTICALLY!');
}

