/*
 * One-time hero entrance animation, played when the page first loads:
 * the three hero zones (photo cluster / plaque / ticket cluster) sweep
 * in left-to-right, each overshooting past its resting spot and
 * springing back — a cartoon "snap into place" bounce.
 *
 * Safety: only `.mp-hero-left`, `.mp-hero-center` and `.mp-hero-right`
 * are animated (translateX + opacity) — verified in css/site.css that
 * none of the three ever carry their own `transform` at any breakpoint,
 * only their children do (polaroids, the handwritten note). Animating
 * these three containers can't clobber a child's own rotation.
 *
 * The CDN import is kicked off immediately (in parallel with DOM
 * construction) so it has the best chance of being ready by the time
 * the hero mounts. Elements are only ever hidden *after* the import has
 * actually resolved — if it fails or the browser has no network, the
 * hero simply stays at its normal, fully-visible CSS state.
 */
const motionPromise = import('https://cdn.jsdelivr.net/npm/motion@11/+esm').catch(() => null);

async function run() {
  const groups = ['.mp-hero-left', '.mp-hero-center', '.mp-hero-right']
    .map((sel) => document.querySelector(sel))
    .filter(Boolean);
  if (!groups.length) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const motion = await motionPromise;
  if (!motion) return; // CDN unavailable — hero was never hidden, nothing to fix

  const { animate } = motion;
  const startX = [-110, -70, -45];
  const delay = [0, 0.14, 0.28];

  groups.forEach((el, i) => {
    el.style.opacity = '0';
    animate(
      el,
      { opacity: [0, 1], x: [startX[i], 0] },
      { type: 'spring', bounce: 0.5, visualDuration: 0.8, delay: delay[i] }
    );
  });
}

if (document.getElementById('root') && document.getElementById('root').children.length > 1) run();
else document.addEventListener('mp:ready', run, { once: true });
