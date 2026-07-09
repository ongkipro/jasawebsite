// Header menu ala Hello Monday: burger kanan + overlay fullscreen dengan
// link raksasa yang stagger masuk. Selalu aktif (tidak digating reduced-motion —
// hanya animasinya yang disederhanakan), a11y: aria-expanded, ESC, focus, route-close.
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

type Link = { href: string; label: string };
interface Props {
  links: Link[];
  email: string;
  wa: string;
}

export default function NavMenu({ links, email, wa }: Props) {
  const [open, setOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const reduce = useRef(false);

  // Bangun timeline sekali
  useEffect(() => {
    reduce.current = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const overlay = overlayRef.current;
    if (!overlay) return;
    const panel = overlay.querySelector<HTMLElement>('.menu-panel');
    const items = gsap.utils.toArray<HTMLElement>(overlay.querySelectorAll('.menu-link > span'));
    const foot = overlay.querySelector<HTMLElement>('.menu-foot');
    const d = reduce.current ? 0 : 1;

    const tl = gsap.timeline({
      paused: true,
      onReverseComplete: () => gsap.set(overlay, { autoAlpha: 0 }),
    });
    tl.set(overlay, { autoAlpha: 1 })
      .fromTo(
        panel,
        { yPercent: -100 },
        { yPercent: 0, duration: 0.7 * d, ease: 'expo.inOut' },
      )
      .fromTo(
        items,
        { yPercent: 115 },
        { yPercent: 0, duration: 0.7 * d, ease: 'expo.out', stagger: 0.06 * d },
        '-=0.25',
      )
      .fromTo(foot, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 * d }, '-=0.3');
    tlRef.current = tl;
    gsap.set(overlay, { autoAlpha: 0 });
    return () => {
      tl.kill();
    };
  }, []);

  // Play / reverse saat state berubah + scroll lock + focus
  useEffect(() => {
    const tl = tlRef.current;
    if (!tl) return;
    document.documentElement.classList.toggle('menu-open', open);
    if (open) {
      tl.timeScale(1).play();
      document.documentElement.style.overflow = 'hidden';
      const first = overlayRef.current?.querySelector<HTMLElement>('.menu-link');
      requestAnimationFrame(() => first?.focus());
    } else {
      tl.timeScale(1.4).reverse();
      document.documentElement.style.overflow = '';
    }
  }, [open]);

  // ESC untuk tutup
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Tutup instan saat pindah halaman (View Transitions)
  useEffect(() => {
    const close = () => {
      setOpen(false);
      document.documentElement.style.overflow = '';
      document.documentElement.classList.remove('menu-open');
    };
    document.addEventListener('astro:before-swap', close);
    return () => document.removeEventListener('astro:before-swap', close);
  }, []);

  return (
    <>
      <button
        ref={btnRef}
        type="button"
        className="burger"
        aria-label={open ? 'Tutup menu' : 'Buka menu'}
        aria-expanded={open}
        aria-controls="site-menu"
        data-open={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span></span>
        <span></span>
      </button>

      <div
        ref={overlayRef}
        id="site-menu"
        className="menu-overlay"
        role="dialog"
        aria-modal="true"
        aria-label="Menu utama"
        hidden={false}
      >
        <div className="menu-panel">
          <div className="mx-auto flex min-h-dvh max-w-[90rem] flex-col justify-between gap-8 px-5 pb-8 pt-20 md:px-10 md:pb-10 md:pt-24">
            <nav className="mt-4 flex flex-col md:mt-10" aria-label="Navigasi utama">
              {links.map((item, i) => (
                <a key={item.href} href={item.href} className="menu-link group" tabIndex={open ? 0 : -1}>
                  <span>
                    <em className="menu-index">0{i + 1}</em>
                    {item.label}
                    <span className="menu-arrow" aria-hidden="true">↗</span>
                  </span>
                </a>
              ))}
            </nav>

            <div className="menu-foot flex flex-col justify-between gap-4 border-t border-white/15 pt-6 md:flex-row md:items-end md:gap-6 md:pt-8">
              <div>
                <p className="text-sm text-white/50">Mulai project</p>
                <a href={`mailto:${email}`} className="menu-contact" tabIndex={open ? 0 : -1}>
                  {email}
                </a>
              </div>
              <a
                href={wa}
                target="_blank"
                rel="noopener"
                className="menu-wa"
                tabIndex={open ? 0 : -1}
              >
                Chat WhatsApp ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
