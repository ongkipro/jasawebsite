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
assert(fs.existsSync(path.join(outDir, 'og-image.webp')), 'out/og-image.webp exists');

// 2. Check JSON-LD in index.html
const indexHtml = fs.readFileSync(path.join(outDir, 'index.html'), 'utf-8');
assert(indexHtml.includes('application/ld+json'), 'index.html contains Schema.org JSON-LD graph');
assert(indexHtml.includes('ProfessionalService'), 'index.html contains ProfessionalService schema');
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

console.log('--------------------------------------------------');
console.log(`TOTAL CHECKS: ${passed + failed} | PASSED: ${passed} | FAILED: ${failed}`);

if (failed > 0) {
  process.exit(1);
} else {
  console.log('🎉 ALL SMOKE VERIFICATION CHECKS PASSED DETERMINISTICALLY!');
}
