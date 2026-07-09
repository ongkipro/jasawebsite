// Motion system global (PRD §13) — clone "Hello Monday feel".
// Lenis smooth scroll + GSAP: SplitText reveal, custom cursor, magnetic hover,
// parallax, clip-path image reveal, dan marquee reaktif-kecepatan-scroll.
//
// Prinsip:
// - Menghormati prefers-reduced-motion (§13.4): tanpa motion, konten tampil normal.
// - Progressive enhancement: JS yang set initial state, konten TIDAK disembunyikan via CSS.
// - Re-init tiap navigasi View Transitions (astro:page-load) + cleanup rapi.
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger, SplitText);

let lenis: Lenis | null = null;
let scrollVelocity = 0; // dipakai marquee & skew, di-update dari Lenis
let cursorCleanup: (() => void) | null = null;
const splits: SplitText[] = [];
const marqueeTickers: gsap.TickerCallback[] = []; // dibuat ulang tiap halaman
const cycleTweens: gsap.core.Timeline[] = []; // hero word cycler

function initLenis() {
  if (lenis) return;
  lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
  (window as unknown as { __lenis?: Lenis }).__lenis = lenis; // dipakai tombol "kembali ke atas"
  lenis.on('scroll', (e: { velocity: number }) => {
    scrollVelocity = e.velocity;
    ScrollTrigger.update();
  });
  const raf: gsap.TickerCallback = (t) => lenis?.raf(t * 1000);
  gsap.ticker.add(raf);
  gsap.ticker.lagSmoothing(0);
}

/* ── Custom cursor: dot ikut instan, ring lag; membesar saat hover ── */
function initCursor() {
  if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  const cursor = document.querySelector<HTMLElement>('.cursor');
  const dot = cursor?.querySelector<HTMLElement>('.cursor-dot');
  const ring = cursor?.querySelector<HTMLElement>('.cursor-ring');
  const label = cursor?.querySelector<HTMLElement>('.cursor-label');
  if (!cursor || !dot || !ring) return;

  document.documentElement.classList.add('cursor-active');
  const dotX = gsap.quickTo(dot, 'x', { duration: 0.15, ease: 'power3' });
  const dotY = gsap.quickTo(dot, 'y', { duration: 0.15, ease: 'power3' });
  const ringX = gsap.quickTo(ring, 'x', { duration: 0.5, ease: 'power3' });
  const ringY = gsap.quickTo(ring, 'y', { duration: 0.5, ease: 'power3' });

  const onMove = (e: PointerEvent) => {
    dotX(e.clientX);
    dotY(e.clientY);
    ringX(e.clientX);
    ringY(e.clientY);
  };
  const onEnterInteractive = () => document.documentElement.classList.add('cursor-hover');
  const onLeaveInteractive = () => document.documentElement.classList.remove('cursor-hover');
  const onEnterView = (e: Event) => {
    document.documentElement.classList.add('cursor-view');
    const txt = (e.currentTarget as HTMLElement).dataset.cursor || 'Lihat';
    if (label) label.textContent = txt;
  };
  const onLeaveView = () => document.documentElement.classList.remove('cursor-view');

  window.addEventListener('pointermove', onMove);

  const interactive = document.querySelectorAll<HTMLElement>(
    'a, button, [data-magnetic], input, textarea, select',
  );
  interactive.forEach((el) => {
    el.addEventListener('pointerenter', onEnterInteractive);
    el.addEventListener('pointerleave', onLeaveInteractive);
  });
  const viewEls = document.querySelectorAll<HTMLElement>('[data-cursor]');
  viewEls.forEach((el) => {
    el.addEventListener('pointerenter', onEnterView);
    el.addEventListener('pointerleave', onLeaveView);
  });

  cursorCleanup = () => {
    window.removeEventListener('pointermove', onMove);
    interactive.forEach((el) => {
      el.removeEventListener('pointerenter', onEnterInteractive);
      el.removeEventListener('pointerleave', onLeaveInteractive);
    });
    viewEls.forEach((el) => {
      el.removeEventListener('pointerenter', onEnterView);
      el.removeEventListener('pointerleave', onLeaveView);
    });
    document.documentElement.classList.remove('cursor-active', 'cursor-hover', 'cursor-view');
  };
}

/* ── Magnetic: elemen tertarik ke kursor + kembali elastis ── */
function initMagnetic() {
  if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  gsap.utils.toArray<HTMLElement>('[data-magnetic]').forEach((el) => {
    const strength = Number(el.dataset.magnetic) || 0.4;
    const xTo = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'elastic.out(1, 0.4)' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'elastic.out(1, 0.4)' });
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      xTo((e.clientX - (r.left + r.width / 2)) * strength);
      yTo((e.clientY - (r.top + r.height / 2)) * strength);
    };
    const onLeave = () => {
      xTo(0);
      yTo(0);
    };
    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);
  });
}

/* ── Marquee: kecepatan dasar + dorongan dari velocity scroll, arah ikut scroll ── */
function initMarquee() {
  gsap.utils.toArray<HTMLElement>('[data-marquee]').forEach((wrap) => {
    const track = wrap.querySelector<HTMLElement>('.marquee-track');
    if (!track) return;
    const base = Number(wrap.dataset.speed) || 0.6; // px/frame @60fps
    const half = track.scrollWidth / 2; // konten diduplikasi 2x
    let x = 0;
    const tick: gsap.TickerCallback = (_t, delta) => {
      const dir = scrollVelocity < 0 ? -1 : 1; // arah ikut scroll
      const boost = Math.min(Math.abs(scrollVelocity) * 0.35, 40);
      x -= (base + boost) * dir * (delta / 16.67);
      x = gsap.utils.wrap(-half, 0, x);
      gsap.set(track, { x });
      // skew halus sesuai velocity — sinyatur Hello Monday
      gsap.set(track, { skewX: gsap.utils.clamp(-8, 8, scrollVelocity * 0.4) });
    };
    gsap.ticker.add(tick);
    marqueeTickers.push(tick);
  });
}

/* ── Hero word cycler: kata raksasa berganti dengan mask slide (ala Hello Monday) ── */
function initCycle() {
  document.querySelectorAll<HTMLElement>('[data-cycle]').forEach((el) => {
    const words = gsap.utils.toArray<HTMLElement>(el.querySelectorAll('.cycle-word'));
    if (words.length < 2) return;
    gsap.set(words, { yPercent: 110 });
    gsap.set(words[0], { yPercent: 0 });
    const tl = gsap.timeline({ repeat: -1, delay: 1 });
    words.forEach((w, i) => {
      const next = words[(i + 1) % words.length];
      tl.to(w, { yPercent: -110, duration: 0.7, ease: 'expo.inOut' }, `+=1.4`).fromTo(
        next,
        { yPercent: 110 },
        { yPercent: 0, duration: 0.7, ease: 'expo.inOut' },
        '<',
      );
    });
    cycleTweens.push(tl);
  });
}

/* ── Reveal + counter + hero/heading split + parallax + image clip ── */
function initReveals() {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;

  // Hero: SplitText per-kata, di-mask per baris (stagger)
  document.querySelectorAll<HTMLElement>('[data-split-hero]').forEach((el) => {
    const split = new SplitText(el, { type: 'lines,words', mask: 'lines', linesClass: 'split-mask' });
    splits.push(split);
    gsap.from(split.words, {
      yPercent: 115,
      duration: 1,
      ease: 'power4.out',
      stagger: 0.06,
      delay: 0.15,
    });
  });

  // Heading section: reveal per-baris saat masuk viewport
  gsap.utils.toArray<HTMLElement>('[data-split]').forEach((el) => {
    const split = new SplitText(el, { type: 'lines', mask: 'lines', linesClass: 'split-mask' });
    splits.push(split);
    gsap.from(split.lines, {
      yPercent: 115,
      duration: 0.9,
      ease: 'power4.out',
      stagger: 0.09,
      scrollTrigger: { trigger: el, start: 'top 88%' },
    });
  });

  // Hero entrance: langsung animasi saat load (bukan scroll-trigger) — elemen di
  // bawah fold hero tetap muncul tanpa perlu scroll.
  gsap.utils.toArray<HTMLElement>('[data-hero-in]').forEach((el, i) => {
    gsap.from(el, {
      y: 26,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      delay: 0.35 + i * 0.12,
    });
  });

  // Stagger: anak-anak elemen muncul berurutan (mis. baris daftar layanan)
  gsap.utils.toArray<HTMLElement>('[data-stagger]').forEach((el) => {
    gsap.from(Array.from(el.children) as HTMLElement[], {
      y: 26,
      opacity: 0,
      duration: 0.7,
      ease: 'power3.out',
      stagger: 0.07,
      scrollTrigger: { trigger: el, start: 'top 82%' },
    });
  });

  // Blok umum: fade+translate
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

  // Reveal sinematik: clip wipe + gambar "settle" dari zoom besar (skala turun) —
  // memberi kesan gambar tersingkap sambil menepi ke posisi. Parallax tetap jalan
  // karena GSAP menggabungkan komponen transform (yPercent) & scale terpisah.
  gsap.utils.toArray<HTMLElement>('[data-reveal-img]').forEach((el) => {
    const img = el.querySelector<HTMLElement>('.po-img');
    const tl = gsap.timeline({
      scrollTrigger: { trigger: el, start: 'top 86%' },
      // lepas clip-path inline agar aturan CSS (sudut terpotong saat hover) aktif
      onComplete: () => gsap.set(el, { clearProps: 'clipPath' }),
    });
    tl.fromTo(
      el,
      { clipPath: 'inset(0 0 100% 0)' },
      { clipPath: 'inset(0 0 0% 0)', duration: 1.15, ease: 'expo.out' },
      0,
    );
    if (img) {
      tl.fromTo(
        img,
        { scale: 1.45 },
        { scale: 1, duration: 1.4, ease: 'expo.out' },
        0,
      );
    }
  });

  // Parallax: geser elemen relatif terhadap scroll (speed via data-parallax)
  gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
    const speed = Number(el.dataset.parallax) || 0.2;
    gsap.fromTo(
      el,
      { yPercent: -speed * 50 },
      {
        yPercent: speed * 50,
        ease: 'none',
        scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
      },
    );
  });

  // Counter metrik (§13.1)
  gsap.utils.toArray<HTMLElement>('[data-counter]').forEach((el) => {
    const target = Number(el.dataset.counter ?? 0);
    const obj = { v: 0 };
    gsap.to(obj, {
      v: target,
      duration: 1.4,
      ease: 'power2.out',
      snap: { v: 1 },
      scrollTrigger: { trigger: el, start: 'top 90%' },
      onUpdate: () => {
        el.textContent = String(Math.round(obj.v));
      },
    });
  });
}

function initAll() {
  initReveals();
  initCycle();
  initMarquee();
  initCursor();
  initMagnetic();
  ScrollTrigger.refresh();
}

function teardown() {
  ScrollTrigger.getAll().forEach((st) => st.kill());
  splits.forEach((s) => s.revert());
  splits.length = 0;
  cycleTweens.forEach((t) => t.kill());
  cycleTweens.length = 0;
  cursorCleanup?.();
  cursorCleanup = null;
  // Marquee tickers dilepas & dibuat ulang tiap halaman (raf Lenis tetap hidup)
  marqueeTickers.forEach((t) => gsap.ticker.remove(t));
  marqueeTickers.length = 0;
  gsap.set('.marquee-track', { clearProps: 'transform' });
}

export default function SmoothScroll() {
  useEffect(() => {
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return; // versi statis: tanpa smooth scroll & motion

    document.documentElement.classList.add('motion'); // aktifkan hero cycler dari CSS
    initLenis();
    initAll();

    // Lenis menyimpan posisi scroll → tanpa reset, halaman baru muncul di posisi lama.
    let direction = 'forward';
    const onBeforeSwap = (e: Event) => {
      direction = (e as unknown as { direction?: string }).direction ?? 'forward';
      teardown();
    };
    const onAfterSwap = () => {
      const lenis = (window as unknown as { __lenis?: Lenis }).__lenis;
      // Klik link (forward) → mulai dari atas. Back/forward → hormati posisi tersimpan.
      const toTop = direction !== 'back' && !location.hash;
      if (toTop) window.scrollTo(0, 0);
      lenis?.scrollTo(toTop ? 0 : window.scrollY, { immediate: true, force: true });
    };
    const onPageLoad = () => {
      teardown();
      initAll();
    };
    document.addEventListener('astro:before-swap', onBeforeSwap);
    document.addEventListener('astro:after-swap', onAfterSwap);
    document.addEventListener('astro:page-load', onPageLoad);
    return () => {
      document.removeEventListener('astro:before-swap', onBeforeSwap);
      document.removeEventListener('astro:after-swap', onAfterSwap);
      document.removeEventListener('astro:page-load', onPageLoad);
    };
  }, []);

  return null;
}
