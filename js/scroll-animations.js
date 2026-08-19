/*
 * Whole-page scroll-reveal animation, built with Motion (motion.dev) —
 * loaded as a plain ESM import, no bundler/build step required.
 *
 * Safety rule: several elements on this page already carry a load-bearing
 * inline `transform: rotate(...)` (award ribbons, the truck-card rail,
 * polaroids, the truck CTA) set by js/components.js / js/sections.js.
 * Motion's `y`/`x` keyframes write to the same `transform` property and
 * would silently overwrite that rotation, so anything that already rotates
 * is only ever faded (opacity), never translated. Everything else gets a
 * soft fade-up.
 */
import { animate, inView, stagger } from 'https://cdn.jsdelivr.net/npm/motion@11/+esm';

function start() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const EASE = [0.16, 1, 0.3, 1];
  const DUR = reduce ? 0 : 0.7;
  const VIEW = { margin: '0px 0px -10% 0px', amount: 0.15 };

  // Reveal a whole block once, fading up. Safe on any element that has no
  // inline transform of its own (checked per call-site below).
  function revealUp(selector, { delay = 0, y = 22 } = {}) {
    inView(selector, (el) => {
      if (el.dataset.mpRevealed) return;
      el.dataset.mpRevealed = '1';
      animate(el, { opacity: [0, 1], y: reduce ? 0 : [y, 0] }, { duration: DUR, easing: EASE, delay });
    }, VIEW);
  }

  // Fade-only reveal, for elements/groups that already rotate via inline style.
  function revealFade(selector, { delay = 0 } = {}) {
    inView(selector, (el) => {
      if (el.dataset.mpRevealed) return;
      el.dataset.mpRevealed = '1';
      animate(el, { opacity: [0, 1] }, { duration: DUR, easing: EASE, delay });
    }, VIEW);
  }

  // Staggered group reveal, fade-only (safe for rotated children).
  function revealStagger(containerSelector, itemSelector, { gap = 0.08 } = {}) {
    inView(containerSelector, (container) => {
      if (container.dataset.mpRevealed) return;
      container.dataset.mpRevealed = '1';
      const items = container.querySelectorAll(itemSelector);
      animate(items, { opacity: [0, 1] }, { duration: DUR, easing: EASE, delay: reduce ? 0 : stagger(gap) });
    }, VIEW);
  }

  // Hero is above the fold on load — left alone, no reveal/flash.

  // Story: letter (no transform) gets a fade-up, collage (scales on mobile
  // via CSS) is fade-only so it never fights that transform.
  revealUp('.mp-story-letter');
  revealFade('.mp-story-collage', { delay: 0.1 });

  // Food truck: heading copy fades up; the CTA already rotates, so fade-only;
  // the card rail items already rotate per-card, so fade-only + stagger.
  revealUp('.mp-truck-head > div:first-child');
  revealFade('.mp-truck-cta');
  revealStagger('.mp-rail', '.mp-rail-item', { gap: 0.1 });

  // How it works: just the title — the four tickets already animate via
  // their own scroll-linked fan effect in sections.js.
  revealUp('.mp-how-title');

  // Awards: each ribbon wrapper already rotates, so fade-only + stagger.
  revealStagger('.mp-awards', '.mp-award-wrap', { gap: 0.12 });

  // Testimonials: cards have no transform, safe to fade-up + stagger.
  revealStagger('.mp-testi-grid', '.mp-testi-cell', { gap: 0.08 });

  // Menu: pizza/pasta blurbs slide in from their own side; letter cards fade-up.
  revealUp('.mp-arch-card--l', { y: 18 });
  revealUp('.mp-arch-card--r', { y: 18, delay: 0.1 });
  revealStagger('.mp-menu-grid', '.mp-menu-grid > *', { gap: 0.12 });

  // Stores: collage is fade-only (children carry positions/rotations),
  // the right column (script + plaque + card) fades up as one block.
  revealFade('.mp-loc-collage');
  revealUp('.mp-loc-right', { delay: 0.1 });

  // Footer.
  revealUp('.mp-foot-cta');
  revealStagger('.mp-foot-cols', '.mp-foot-cols > *', { gap: 0.08 });
}

if (document.getElementById('root') && document.getElementById('root').children.length > 1) start();
else document.addEventListener('mp:ready', start, { once: true });
