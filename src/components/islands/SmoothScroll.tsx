// Motion global (PRD §13): Lenis smooth scroll + GSAP ScrollTrigger reveal.
// - Menghormati prefers-reduced-motion (§13.4): tanpa motion, konten tampil normal.
// - Konten TIDAK disembunyikan via CSS — JS yang set initial state (progressive enhancement).
// - Re-init tiap navigasi View Transitions (astro:page-load).
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

let lenis: Lenis | null = null;

function initLenis() {
  if (lenis) return;
  lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis?.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}

function initReveals() {
  // Hero: mask line reveal (stagger per baris)
  document.querySelectorAll<HTMLElement>('[data-hero]').forEach((hero) => {
    const lines = hero.querySelectorAll('.mask-line > span');
    if (!lines.length) return;
    gsap.fromTo(
      lines,
      { yPercent: 110 },
      { yPercent: 0, duration: 0.9, ease: 'power3.out', stagger: 0.08, delay: 0.1 },
    );
  });

  // Section/card: fade+translate on enter viewport
  gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
    gsap.fromTo(
      el,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%' },
      },
    );
  });

  // Counter metrik (§13.1)
  gsap.utils.toArray<HTMLElement>('[data-counter]').forEach((el) => {
    const target = Number(el.dataset.counter ?? 0);
    const obj = { v: 0 };
    gsap.to(obj, {
      v: target,
      duration: 1.2,
      ease: 'power2.out',
      snap: { v: 1 },
      scrollTrigger: { trigger: el, start: 'top 90%' },
      onUpdate: () => {
        el.textContent = String(Math.round(obj.v));
      },
    });
  });
}

export default function SmoothScroll() {
  useEffect(() => {
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return; // versi statis: tidak ada smooth scroll & reveal

    initLenis();
    initReveals();

    const onPageLoad = () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      initReveals();
      ScrollTrigger.refresh();
    };
    document.addEventListener('astro:page-load', onPageLoad);
    return () => document.removeEventListener('astro:page-load', onPageLoad);
  }, []);

  return null;
}
