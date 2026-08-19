/*
 * Whole-page scroll-reveal animation, built with Motion (motion.dev).
 *
 * Loaded as a classic (non-module) script that dynamically imports Motion
 * from a CDN at runtime, deliberately NOT `type="module"`: a module script
 * requesting a local file is blocked by CORS when the page is opened via
 * `file://` (origin "null") — dynamic `import()` from a plain script has
 * no such restriction, so this still works if someone just double-clicks
 * index.html instead of serving it.
 *
 * Safety rule: several elements on this page already carry a load-bearing
 * inline `transform: rotate(...)` (award ribbons, the truck-card rail,
 * polaroids, the truck CTA) set by js/components.js / js/sections.js.
 * Motion's `y`/`x` keyframes write to the same `transform` property and
 * would silently overwrite that rotation, so anything that already rotates
 * is only ever faded (opacity), never translated. Everything else gets a
 * soft fade-up.
 */
async function start() {
  const motion = await import('https://cdn.jsdelivr.net/npm/motion@11/+esm').catch(() => null);
  if (!motion) return startNativeReveal();
  const { animate, inView, stagger } = motion;
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

  // Staggered group reveal. Translation is reserved for elements without
  // pre-existing transforms, so rotations and layout transforms stay intact.
  function revealStagger(containerSelector, itemSelector, { gap = 0.08, y = 0 } = {}) {
    inView(containerSelector, (container) => {
      if (container.dataset.mpRevealed) return;
      container.dataset.mpRevealed = '1';
      const items = container.querySelectorAll(itemSelector);
      animate(items, { opacity: [0, 1], ...(y ? { y: reduce ? 0 : [y, 0] } : {}) }, { duration: DUR, easing: EASE, delay: reduce ? 0 : stagger(gap) });
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
  revealStagger('.mp-testi-grid', '.mp-testi-cell', { gap: 0.08, y: 20 });

  // Menu: pizza/pasta blurbs slide in from their own side; letter cards fade-up.
  revealUp('.mp-arch-card--l', { y: 18 });
  revealUp('.mp-arch-card--r', { y: 18, delay: 0.1 });
  revealStagger('.mp-menu-grid', '.mp-menu-grid > *', { gap: 0.12, y: 20 });

  // Stores: collage is fade-only (children carry positions/rotations),
  // the right column (script + plaque + card) fades up as one block.
  revealFade('.mp-loc-collage');
  revealUp('.mp-loc-right', { delay: 0.1 });

  // Footer.
  revealUp('.mp-foot-cta');
  revealStagger('.mp-foot-cols', '.mp-foot-cols > *', { gap: 0.08, y: 16 });
}

// Local-file previews or offline devices can block the CDN import above.
// This fallback keeps the same visual language using the browser's native
// Web Animations API, without hiding content if JavaScript is unavailable.
function startNativeReveal() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting || entry.target.dataset.mpRevealed) return;
      entry.target.dataset.mpRevealed = '1';
      const y = Number(entry.target.dataset.mpRevealY || 0);
      const delay = Number(entry.target.dataset.mpRevealDelay || 0);
      entry.target.animate(
        reduce || !y
          ? [{ opacity: 0 }, { opacity: 1 }]
          : [{ opacity: 0, transform: `translateY(${y}px)` }, { opacity: 1, transform: 'translateY(0)' }],
        { duration: reduce ? 0 : 700, delay: reduce ? 0 : delay, easing: 'cubic-bezier(.16,1,.3,1)', fill: 'both' }
      );
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.15 });

  function reveal(selector, { y = 0, delay = 0 } = {}) {
    document.querySelectorAll(selector).forEach((el) => {
      el.dataset.mpRevealY = y;
      el.dataset.mpRevealDelay = delay;
      observer.observe(el);
    });
  }
  function stagger(containerSelector, itemSelector, { y = 0, gap = 80 } = {}) {
    document.querySelectorAll(containerSelector).forEach((container) => {
      container.querySelectorAll(itemSelector).forEach((el, i) => revealElement(el, y, i * gap));
    });
  }
  function revealElement(el, y, delay) {
    el.dataset.mpRevealY = y;
    el.dataset.mpRevealDelay = delay;
    observer.observe(el);
  }

  reveal('.mp-story-letter', { y: 22 });
  reveal('.mp-story-collage');
  reveal('.mp-truck-head > div:first-child', { y: 22 });
  reveal('.mp-truck-cta');
  stagger('.mp-rail', '.mp-rail-item', { gap: 100 });
  reveal('.mp-how-title', { y: 22 });
  stagger('.mp-awards', '.mp-award-wrap', { gap: 120 });
  stagger('.mp-testi-grid', '.mp-testi-cell', { y: 20 });
  reveal('.mp-arch-card--l', { y: 18 });
  reveal('.mp-arch-card--r', { y: 18, delay: 100 });
  stagger('.mp-menu-grid', '.mp-menu-grid > *', { y: 20, gap: 120 });
  reveal('.mp-loc-collage');
  reveal('.mp-loc-right', { y: 22, delay: 100 });
  reveal('.mp-foot-cta', { y: 22 });
  stagger('.mp-foot-cols', '.mp-foot-cols > *', { y: 16 });
}

if (document.getElementById('root') && document.getElementById('root').children.length > 1) start();
else document.addEventListener('mp:ready', start, { once: true });
