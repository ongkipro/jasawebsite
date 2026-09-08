import { siteConfig } from '@/data/siteConfig';

export interface WhatsAppIntentParams {
  ref?: string; // e.g. "Compro-Folio", "Sales-Folio", "Commerce-Folio", "Niche-Folio", "Portfolio-Case"
  tier?: string; // e.g. "Starter", "Business ⭐", "Corporate", "Growth ⭐"
  serviceName?: string; // e.g. "Company Profile", "Sales & Lead Generation"
  niche?: string; // e.g. "Dealer Mobil & Showroom"
  portfolioTitle?: string; // e.g. "Summarecon Mutiara Makassar"
  customText?: string;
  utmSource?: string;
  utmCampaign?: string;
}

export function buildWhatsAppUrl(params: WhatsAppIntentParams = {}): string {
  const {
    ref,
    tier,
    serviceName,
    niche,
    portfolioTitle,
    customText,
    utmSource = 'digital-brochure',
    utmCampaign = 'living-folio',
  } = params;

  let message = '';

  if (customText) {
    message = customText;
  } else if (portfolioTitle) {
    message = `Halo Tim JasaWebsite.co by ONG, saya tertarik dengan portofolio proyek "${portfolioTitle}". Apakah bisa mendiskusikan konsep dan arsitektur serupa untuk bisnis saya?`;
  } else if (niche) {
    message = `Halo Tim JasaWebsite.co by ONG, saya sedang membaca lembar brosur untuk industri "${niche}". Mohon info proposal SOW dan konsultasi spesifikasi teknisnya via Call/WhatsApp.`;
  } else if (serviceName) {
    const tierText = tier ? ` (Pilihan Paket: ${tier})` : '';
    message = `Halo Tim JasaWebsite.co by ONG, saya tertarik konsultasi pembuatan "${serviceName}"${tierText} untuk bisnis saya. Mohon informasi tahapan pengerjaannya.`;
  } else {
    message = `Halo Tim JasaWebsite.co by ONG, saya ingin konsultasi langsung via Call/WhatsApp mengenai kebutuhan website dan sistem digital untuk bisnis saya.`;
  }

  // Append tracking reference metadata
  const tags: string[] = [];
  if (ref) tags.push(`Ref: ${ref}`);
  if (utmSource) tags.push(`Src: ${utmSource}`);
  if (utmCampaign) tags.push(`Cmp: ${utmCampaign}`);

  if (tags.length > 0) {
    message += `\n\n[${tags.join(' · ')}]`;
  }

  return `https://wa.me/${siteConfig.phone}?text=${encodeURIComponent(message)}`;
}
