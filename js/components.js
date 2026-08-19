/*
 * Moscato Pizza — vanilla-JS port of the Claude Design component bundle
 * (originally `_ds/.../_ds_bundle.js`, React + inline styles).
 * Every factory below reproduces the exact math/markup of its React source
 * so the rendered output is pixel-identical, with no React/JSX/build step.
 */
(function (global) {
  'use strict';

  // ---------- tiny DOM helper ----------
  function el(tag, attrs, ...children) {
    const node = document.createElement(tag);
    attrs = attrs || {};
    for (const k in attrs) {
      const v = attrs[k];
      if (v === undefined || v === null || v === false) continue;
      if (k === 'style') node.style.cssText = v;
      else if (k === 'class') node.className = v;
      else if (k === 'html') node.innerHTML = v;
      else if (k.slice(0, 2) === 'on' && typeof v === 'function') node.addEventListener(k.slice(2), v);
      else node.setAttribute(k, v);
    }
    for (const c of children.flat(Infinity)) {
      if (c === undefined || c === null || c === false || c === '') continue;
      node.appendChild(c instanceof Node ? c : document.createTextNode(String(c)));
    }
    return node;
  }
  function svg(tag, attrs, ...children) {
    const node = document.createElementNS('http://www.w3.org/2000/svg', tag);
    attrs = attrs || {};
    for (const k in attrs) {
      const v = attrs[k];
      if (v === undefined || v === null || v === false) continue;
      if (k === 'style') node.style.cssText = v;
      else node.setAttribute(k, v);
    }
    for (const c of children.flat(Infinity)) {
      if (c === undefined || c === null || c === false) continue;
      node.appendChild(c instanceof Node ? c : document.createTextNode(String(c)));
    }
    return node;
  }

  // ---------- shared scoop-cap paths (nav panels + buttons) ----------
  const MP_CAP_L = 'M24.001 80H12.001C12.0009 73.4763 6.7946 68.1684 0.310547 68.0039L0 68V11.9785C6.30012 11.6145 11.2969 6.39136 11.2969 0H24.001V80Z';
  const MP_CAP_R = 'M0 80H12C12.0001 73.4763 17.2064 68.1684 23.6904 68.0039L24 68V11.9785C17.7003 11.614 12.7041 6.39103 12.7041 0H0V80Z';

  function scoopCapsuleSvg(capWidth) {
    return [
      svg('svg', { viewBox: '0 0 24 80', preserveAspectRatio: 'none', style: `width:${capWidth}px;height:100%;flex-shrink:0;display:block` },
        svg('path', { d: MP_CAP_L, fill: 'currentColor' })),
      el('div', { style: 'flex:1;background:currentColor' }),
      svg('svg', { viewBox: '0 0 24 80', preserveAspectRatio: 'none', style: `width:${capWidth}px;height:100%;flex-shrink:0;display:block` },
        svg('path', { d: MP_CAP_R, fill: 'currentColor' })),
    ];
  }

  // ---------- ScoopPanel (nav) ----------
  function ScoopPanel({ tint, height = 72, children, style = '', className = '', onClick, center }) {
    const cap = Math.round(height * 0.2998);
    const wrap = el('div', {
      class: className,
      style: `position:relative;height:${height}px;display:flex;align-items:center;${style}`,
      onclick: onClick,
    },
      el('div', { style: `position:absolute;inset:0;display:flex;color:${tint};pointer-events:none` }, scoopCapsuleSvg(cap)),
      el('div', { style: `position:relative;display:flex;align-items:center;${center ? 'justify-content:center;' : ''}width:100%;height:100%;padding:0 ${cap + 14}px` }, children)
    );
    return wrap;
  }

  // ---------- Button ----------
  const BTN_HEIGHTS = { sm: 44, md: 54, lg: 64 };
  const BTN_FONTS = { sm: '1rem', md: '1.2rem', lg: '1.45rem' };
  const BTN_VARIANTS = {
    primary: { background: 'var(--mustard-500)', color: 'var(--text-on-accent)' },
    navy: { background: 'var(--navy-900)', color: 'var(--text-on-inverse)' },
  };
  function Button(props, ...children) {
    const { variant = 'primary', size = 'md', onClick, ariaLabel, style = '', extraClass = '' } = props;
    const height = BTN_HEIGHTS[size];
    const fontSize = BTN_FONTS[size];
    const capWidth = Math.round(height * 0.2998);
    const v = BTN_VARIANTS[variant] || BTN_VARIANTS.primary;
    return el('button', {
      class: `mp-btn ${extraClass}`,
      'aria-label': ariaLabel,
      style: `position:relative;display:inline-flex;align-items:center;justify-content:center;border:none;background:transparent;padding:0;height:${height}px;min-width:200px;cursor:pointer;transition:transform .15s ease;${style}`,
      onclick: onClick,
    },
      el('div', { style: 'position:absolute;inset:0;color:' + v.background }, scoopCapsuleSvgWrap(capWidth)),
      el('span', { style: `position:relative;display:inline-flex;align-items:center;justify-content:center;gap:10px;font-family:var(--font-accent);font-style:italic;font-weight:500;font-size:${fontSize};line-height:1;color:${v.color};padding:0 ${capWidth + 22}px;white-space:nowrap` }, children)
    );
  }
  function scoopCapsuleSvgWrap(capWidth) {
    return el('div', { style: 'display:flex;width:100%;height:100%' }, scoopCapsuleSvg(capWidth));
  }

  // ---------- PolaroidPhoto ----------
  const POLA_UNIT = 269.3, POLA_STRIP = 11.98, POLA_PITCH = 6.55, POLA_R = 3.275;
  const POLA_TONES = { sky: 'var(--sky-200)', mustard: 'var(--mustard-500)', cream: 'var(--cream-300)', navy: 'var(--navy-700)' };
  function scallopStrip(s, flip) {
    const h = POLA_STRIP * s, tile = POLA_PITCH * s, bump = POLA_R * s;
    const pct = (bump / h * 100).toFixed(3);
    const maskImg = `radial-gradient(circle closest-side at 50% ${pct}%, #000 98%, transparent 100%), linear-gradient(#000,#000)`;
    const maskSize = `${tile}px ${h}px, 100% ${h - bump}px`;
    return `height:${h}px;background:var(--bg-surface);${flip ? 'transform:scaleY(-1);' : ''}` +
      `mask-image:${maskImg};-webkit-mask-image:${maskImg};` +
      `mask-size:${maskSize};-webkit-mask-size:${maskSize};` +
      `mask-position:0 0, 0 100%;-webkit-mask-position:0 0, 0 100%;` +
      `mask-repeat:repeat-x, no-repeat;-webkit-mask-repeat:repeat-x, no-repeat;`;
  }
  function PolaroidPhoto({ src, alt = '', label = 'Photo', caption, rotate = -3, width = 220, tone = 'sky', shadow = true, style = '' }) {
    const s = width / POLA_UNIT;
    const overlap = -(POLA_STRIP - POLA_R) * s;
    const filter = shadow ? 'filter:drop-shadow(0 10px 22px rgba(20,32,66,.16));' : '';
    const photoBox = el('div', { style: `width:100%;aspect-ratio:242.391 / 271.462;background:${POLA_TONES[tone] || POLA_TONES.sky};overflow:hidden;display:flex;align-items:center;justify-content:center` },
      src
        ? el('img', { src, alt, style: 'width:100%;height:100%;object-fit:cover;display:block' })
        : el('span', { style: `font-family:var(--font-body);font-size:${Math.max(10, 11 * s * 2)}px;color:var(--navy-900);text-transform:uppercase;letter-spacing:var(--letter-caps);opacity:.65` }, label)
    );
    const mid = el('div', { style: `background:var(--bg-surface);margin-top:${overlap}px;margin-bottom:${overlap}px;padding:${6.72 * s}px ${13.45 * s}px ${40.4 * s}px;position:relative` },
      photoBox,
      caption ? el('div', { style: `position:absolute;left:0;right:0;bottom:0;height:${40.4 * s}px;display:flex;align-items:center;justify-content:center;font-family:var(--font-script);font-size:${Math.max(13, 26 * s)}px;line-height:1;color:var(--navy-700)` }, caption) : null
    );
    return el('div', { style: `width:${width}px;transform:rotate(${rotate}deg);${filter}${style}` },
      el('div', { style: scallopStrip(s, false) }),
      mid,
      el('div', { style: scallopStrip(s, true) })
    );
  }

  // ---------- TicketCard ----------
  const TCK_UNIT_W = 288, TCK_RX = 15.132, TCK_RY = 18.829;
  function ticketMaskCss(rx, ry) {
    const biteAt = (x, y) => `radial-gradient(ellipse ${rx}px ${ry}px at ${x} ${y}, transparent 99%, #000 100%)`;
    const corners = [['0%', '0%', '0', '0'], ['100%', '0%', '100%', '0'], ['0%', '100%', '0', '100%'], ['100%', '100%', '100%', '100%']];
    const img = corners.map(c => biteAt(c[0], c[1])).concat(['linear-gradient(#000,#000)', 'linear-gradient(#000,#000)']).join(',');
    const size = corners.map(() => `${rx}px ${ry}px`).concat([`100% calc(100% - ${2 * ry}px)`, `calc(100% - ${2 * rx}px) 100%`]).join(',');
    const pos = corners.map(c => `${c[2]} ${c[3]}`).concat(['0 50%', '50% 0']).join(',');
    return `mask-image:${img};-webkit-mask-image:${img};mask-size:${size};-webkit-mask-size:${size};mask-position:${pos};-webkit-mask-position:${pos};mask-repeat:no-repeat;-webkit-mask-repeat:no-repeat;`;
  }
  const TCK_TONES = {
    sky: { bg: 'var(--sky-200)', ink: 'var(--navy-900)' },
    cream: { bg: 'var(--cream-300)', ink: 'var(--navy-900)' },
    mustard: { bg: 'var(--mustard-500)', ink: 'var(--navy-900)' },
    navy: { bg: 'var(--navy-900)', ink: 'var(--cream-100)' },
  };
  function TicketCard({ text, children, eyebrow, ctaLabel, onCtaClick, tone = 'sky', width = 288, align = 'center', style = '' }) {
    const t = TCK_TONES[tone] || TCK_TONES.sky;
    const s = width / TCK_UNIT_W;
    const pad = 26 * s;
    const ctaBg = tone === 'mustard' ? 'var(--navy-900)' : 'var(--mustard-500)';
    const ctaInk = tone === 'mustard' ? 'var(--cream-100)' : 'var(--navy-900)';
    return el('div', {
      style: `width:${width}px;background:${t.bg};color:${t.ink};box-sizing:border-box;padding:${pad}px;text-align:${align};${ticketMaskCss(TCK_RX * s, TCK_RY * s)}${style}`,
    },
      eyebrow ? el('div', { style: `font-family:var(--font-body);font-weight:700;font-size:${Math.max(10, 12 * s)}px;text-transform:uppercase;letter-spacing:var(--letter-caps);opacity:.7;margin-bottom:${12 * s}px` }, eyebrow) : null,
      el('div', { style: `font-family:var(--font-body);font-size:${Math.max(11, 15 * s)}px;line-height:1.6` }, text || children),
      ctaLabel ? el('button', {
        style: `display:flex;align-items:center;justify-content:center;width:100%;box-sizing:border-box;margin-top:${26 * s}px;border:none;text-decoration:none;cursor:pointer;background:${ctaBg};color:${ctaInk};min-height:${48 * s}px;padding:${13 * s}px ${18 * s}px;font-family:var(--font-accent);font-style:italic;font-weight:500;font-size:${Math.max(13, 19 * s)}px;line-height:1;transition:transform .15s ease`,
        class: 'mp-btn',
        onclick: onCtaClick,
      }, ctaLabel) : null
    );
  }

  // ---------- LetterCard ----------
  const LTR_UNIT = 539, LTR_R = 21.163, LTR_PAD1 = 5.57, LTR_GAP = 4.5;
  function cornerMaskCircular(r, p, idx) {
    const at = [
      `${-p}px ${-p}px`,
      `calc(100% + ${p}px) ${-p}px`,
      `${-p}px calc(100% + ${p}px)`,
      `calc(100% + ${p}px) calc(100% + ${p}px)`,
    ][idx];
    const img = `radial-gradient(ellipse ${r}px ${r}px at ${at}, transparent 99%, #000 100%)`;
    return `mask-image:${img};-webkit-mask-image:${img};mask-size:100% 100%;-webkit-mask-size:100% 100%;mask-repeat:no-repeat;-webkit-mask-repeat:no-repeat;`;
  }
  function shellLetter(r, p, extraStyle, child) {
    let node = el('div', { style: cornerMaskCircular(r + p, p, 3) + extraStyle }, child);
    for (let i = 2; i >= 0; i--) node = el('div', { style: cornerMaskCircular(r + p, p, i) }, node);
    return node;
  }
  const LTR_TONES = {
    cream: { paper: 'var(--cream-300)', ink: 'var(--navy-900)', slot: 'var(--cream-100)' },
    blue: { paper: 'var(--sky-100)', ink: 'var(--navy-900)', slot: 'var(--sky-200)' },
    navy: { paper: 'var(--navy-900)', ink: 'var(--cream-100)', slot: 'var(--navy-700)' },
  };
  function LetterCard({ title = 'Ciao!', paragraphs = [], children, photo, photoAlt = '', photoLabel = 'Photo', photoRatio = '4 / 3', photoPosition = 'top', signature, signatureImage, tone = 'cream', width = 539, style = '' }) {
    const t = LTR_TONES[tone] || LTR_TONES.cream;
    const line = tone === 'navy' ? 'var(--cream-100)' : 'var(--navy-900)';
    const s = width / LTR_UNIT;
    const p1 = LTR_PAD1 * s, gap = LTR_GAP * s, r = LTR_R * s;
    const body = paragraphs.length
      ? paragraphs.map((p, i) => el('p', { style: `margin:${i ? '1.6em 0 0' : '0'}` }, p))
      : children;
    const slot = el('div', { style: `width:100%;aspect-ratio:${photoRatio};background:${t.slot};overflow:hidden;display:flex;align-items:center;justify-content:center;margin:${photoPosition === 'top' ? `0 0 ${34 * s}px` : `${34 * s}px 0 0`}` },
      photo
        ? el('img', { src: photo, alt: photoAlt, style: 'width:100%;height:100%;object-fit:cover;display:block' })
        : el('span', { style: `font-family:var(--font-body);font-size:${Math.max(10, 13 * s)}px;color:${t.ink};text-transform:uppercase;letter-spacing:var(--letter-caps);opacity:.55` }, photoLabel)
    );
    const inner = el('div', { style: `background:${t.paper};color:${t.ink};padding:${44 * s}px ${52 * s}px ${38 * s}px;text-align:center` },
      title ? el('div', { style: `font-family:var(--font-display);font-weight:700;font-size:${62 * s}px;line-height:1;text-transform:uppercase;letter-spacing:var(--letter-tight);margin:0 0 ${36 * s}px` }, title) : null,
      photoPosition === 'top' ? slot : null,
      el('div', { style: `font-family:var(--font-body);font-size:${Math.max(11, 14 * s)}px;line-height:1.75` }, body),
      photoPosition === 'bottom' ? slot : null,
      signature ? el('div', { style: `margin-top:${44 * s}px` },
        el('div', { style: `font-family:var(--font-body);font-size:${Math.max(10, 13 * s)}px;letter-spacing:var(--letter-caps)` }, signature),
        signatureImage ? el('img', {
          src: signatureImage,
          alt: `Firma de ${signature}`,
          style: `display:block;width:${144 * s}px;height:auto;margin:${6 * s}px auto 0`,
        }) : null
      ) : null
    );
    const shell5 = shellLetter(r, p1 + 2 + gap, '', inner);
    const shell4 = shellLetter(r, p1 + 1 + gap, `background:${line};padding:1px`, shell5);
    const shell3 = shellLetter(r, p1 + 1, `background:${t.paper};padding:${gap}px`, shell4);
    const shell2 = shellLetter(r, p1, `background:${line};padding:1px`, shell3);
    const shell1 = shellLetter(r, 0, `background:${t.paper};padding:${p1}px`, shell2);
    return el('div', { style: `width:${width}px;${style}` }, shell1);
  }

  // ---------- TicketPanel ----------
  const TKP_UNIT_W = 357, TKP_RX = 18.705, TKP_RY = 16.61;
  function cornerMaskElliptical(rx, ry, p, idx) {
    const at = [
      `${-p}px ${-p}px`,
      `calc(100% + ${p}px) ${-p}px`,
      `${-p}px calc(100% + ${p}px)`,
      `calc(100% + ${p}px) calc(100% + ${p}px)`,
    ][idx];
    const img = `radial-gradient(ellipse ${rx}px ${ry}px at ${at}, transparent 99%, #000 100%)`;
    return `mask-image:${img};-webkit-mask-image:${img};mask-size:100% 100%;-webkit-mask-size:100% 100%;mask-repeat:no-repeat;-webkit-mask-repeat:no-repeat;`;
  }
  function shellTicket(rx, ry, p, extraStyle, child) {
    let node = el('div', { style: cornerMaskElliptical(rx + p, ry + p, p, 3) + extraStyle }, child);
    for (let i = 2; i >= 0; i--) node = el('div', { style: cornerMaskElliptical(rx + p, ry + p, p, i) }, node);
    return node;
  }
  const TKP_TONES = {
    sky: { bg: 'var(--sky-200)', ink: 'var(--brown-700)', rule: 'var(--brown-700)', slot: 'var(--sky-100)' },
    cream: { bg: 'var(--cream-300)', ink: 'var(--brown-700)', rule: 'var(--brown-700)', slot: 'var(--cream-100)' },
    mustard: { bg: 'var(--mustard-500)', ink: 'var(--navy-900)', rule: 'var(--navy-900)', slot: 'var(--cream-100)' },
    navy: { bg: 'var(--navy-900)', ink: 'var(--cream-100)', rule: 'var(--cream-100)', slot: 'var(--navy-700)' },
  };
  function TicketPanel({ eyebrow, title, text, tone = 'sky', width = 357, align = 'center', style = '' }) {
    const t = TKP_TONES[tone] || TKP_TONES.sky;
    const s = width / TKP_UNIT_W;
    const p1 = 6 * s, rule = Math.max(1, 2 * s), gap = 3 * s;
    const rx = TKP_RX * s, ry = TKP_RY * s;
    const inner = el('div', { style: `background:${t.bg};color:${t.ink};text-align:${align};padding:${34 * s}px ${34 * s}px ${32 * s}px` },
      eyebrow ? el('div', { style: `font-family:var(--font-accent);font-style:italic;font-weight:500;font-size:${Math.max(13, 22 * s)}px;line-height:1.1;margin-bottom:${10 * s}px` }, eyebrow) : null,
      title ? el('div', { style: `font-family:var(--font-display);font-size:${Math.max(18, 34 * s)}px;line-height:1;text-transform:uppercase;letter-spacing:var(--letter-tight);margin-bottom:${18 * s}px` }, title) : null,
      el('div', { style: `font-family:var(--font-body);font-size:${Math.max(10, 12.5 * s)}px;line-height:1.65` }, text)
    );
    const shell5 = shellTicket(rx, ry, p1 + rule * 2 + gap, '', inner);
    const shell4 = shellTicket(rx, ry, p1 + rule + gap, `background:${t.rule};padding:${rule}px`, shell5);
    const shell3 = shellTicket(rx, ry, p1 + rule, `background:${t.bg};padding:${gap}px`, shell4);
    const shell2 = shellTicket(rx, ry, p1, `background:${t.rule};padding:${rule}px`, shell3);
    const shell1 = shellTicket(rx, ry, 0, `background:${t.bg};padding:${p1}px`, shell2);
    return el('div', { style: `width:${width}px;${style}` }, shell1);
  }

  // ---------- CheckerBar ----------
  const CHK_SIZES = { small: { row: 12, ratio: 3.0994 }, large: { row: 14.824, ratio: 6.4783 } };
  function CheckerBar({ size = 'small', color = 'var(--navy-900)' }) {
    const preset = CHK_SIZES[size] || CHK_SIZES.small;
    const row = preset.row;
    const block = row * preset.ratio;
    const band = (shift) => `height:${row}px;background-image:repeating-linear-gradient(90deg, ${color} 0 ${block}px, transparent ${block}px ${block * 2}px);background-position:${shift}px 0`;
    return el('div', { role: 'separator', 'aria-hidden': 'true', style: 'width:100%;overflow:hidden;line-height:0' },
      el('div', { style: band(0) }),
      el('div', { style: band(block) })
    );
  }

  // ---------- Ribbon ----------
  const RBN_TONES = {
    sky: 'background:var(--sky-200)',
    mustard: 'background:var(--mustard-500)',
    cream: 'background:var(--cream-300)',
    navy: 'background:var(--navy-900);color:var(--text-on-inverse)',
  };
  function Ribbon(props, ...children) {
    const { tone = 'sky', rotate = -1.2 } = props;
    return el('div', {
      style: `transform:rotate(${rotate}deg);padding:18px 32px;text-align:center;border-top:var(--border-thin) solid var(--navy-900);border-bottom:var(--border-thin) solid var(--navy-900);font:var(--text-display-md);color:var(--navy-900);text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;${RBN_TONES[tone] || RBN_TONES.sky}`,
    }, children);
  }

  // ---------- StarRating + TestimonialCard ----------
  function starSvg(filled) {
    return svg('svg', { width: '16', height: '16', viewBox: '0 0 24 24', fill: filled ? 'currentColor' : 'none', stroke: 'currentColor', 'stroke-width': '1.5' },
      svg('path', { d: 'M12 2l2.9 6.4 7 .6-5.3 4.6 1.6 6.9L12 17l-6.2 3.5 1.6-6.9L2.1 9l7-.6z', 'stroke-linejoin': 'round' })
    );
  }
  function StarRating({ score = 4.6, max = 5, showScore = true, style = '' }) {
    const full = Math.round(score);
    return el('div', { style: `display:inline-flex;align-items:center;gap:10px;font-family:var(--font-display);color:var(--navy-900);${style}` },
      showScore ? el('span', { style: 'font-size:1.1rem' }, score.toFixed(1)) : null,
      el('span', { style: 'display:inline-flex;gap:2px' }, Array.from({ length: max }).map((_, i) => starSvg(i < full)))
    );
  }
  function TestimonialCard({ quote, author, org, score = 5 }) {
    return el('div', { style: 'background:var(--bg-page);padding:28px 26px;display:flex;flex-direction:column;gap:16px;min-height:220px' },
      StarRating({ score, max: 5, showScore: false, style: 'justify-content:center' }),
      el('p', { style: 'font:var(--text-body-md);color:var(--text-primary);margin:0;text-align:center' }, quote),
      el('div', { style: 'font-family:var(--font-body);font-weight:700;font-size:.85rem;color:var(--text-muted);text-align:center' }, author + (org ? ` - ${org}` : ''))
    );
  }

  // ---------- ShapeStat (page-local brand badge) ----------
  function ShapeStat({ shape = 'rombo', value, label, size = 215 }) {
    const art = shape === 'rombo'
      ? svg('svg', { viewBox: '0 0 300 300', width: size, height: size, 'aria-hidden': 'true' },
          svg('path', { d: 'M299.77 149.885L149.885 0L-9.60223e-05 149.885L149.885 299.77L299.77 149.885Z', fill: 'var(--brown-700)' }),
          svg('path', { d: 'M288.114 149.885L149.885 11.6559L11.6557 149.885L149.885 288.114L288.114 149.885Z', fill: 'var(--brown-700)', stroke: 'var(--sky-200)', 'stroke-width': '1.57305' }),
          svg('path', { d: 'M293.289 149.885L149.885 6.48059L6.48028 149.885L149.885 293.29L293.289 149.885Z', fill: 'none', stroke: 'var(--sky-200)', 'stroke-width': '1.57305' })
        )
      : svg('svg', { viewBox: '0 0 264 264', width: size, height: size, 'aria-hidden': 'true' },
          svg('path', { d: 'M131.771 0L216.471 30.8739L261.54 109.049L245.887 197.947L176.839 255.971H86.7026L17.654 197.947L2.00195 109.049L47.0702 30.8739L131.771 0Z', fill: 'var(--navy-900)' }),
          svg('path', { d: 'M212.272 35.8832L255.107 110.185L240.23 194.677L174.605 249.825H88.9362L23.3106 194.677L8.43359 110.185L51.2686 35.8832L131.77 6.53955L212.272 35.8832Z', fill: 'none', stroke: 'var(--sky-200)', 'stroke-width': '1.50344' }),
          svg('path', { d: 'M208.668 40.2603L249.567 111.203L235.363 191.877L172.703 244.532H90.9079L28.2473 191.877L14.0435 111.203L54.9423 40.2603L131.805 12.2439L208.668 40.2603Z', fill: 'none', stroke: 'var(--sky-200)', 'stroke-width': '1.43548' })
        );
    return el('div', { class: 'mp-shapestat', style: `width:${size}px;height:${size}px` },
      art,
      el('div', { class: 'mp-shapestat-text' },
        el('span', { class: 'mp-shapestat-value', style: `font-size:${size * 0.21}px` }, value),
        el('span', { class: 'mp-shapestat-label', style: `font-size:${Math.max(20, size * 0.1)}px` }, label)
      )
    );
  }

  // ---------- StitchScript (embroidered handwritten lettering) ----------
  const STITCH_LAYERS = [
    { w: 19, c: 'var(--sky-100)' },
    { w: 6, c: 'var(--sky-100)' },
    { w: 0, c: null },
  ];
  function stitchBody(lines, offsets, tilt) {
    return lines.map((l, i) => el('span', {
      style: `display:block;margin-left:${offsets[i] || 0}px;${tilt[i] ? `transform:rotate(${tilt[i]}deg);` : ''}margin-top:${i ? '-.24em' : '0'}`,
    }, l));
  }
  function StitchScript({ lines, size = 54, offsets = [], tilt = [], className = '', style = '' }) {
    const layerDivs = STITCH_LAYERS.map((l, i) => el('div', {
      class: 'mp-stitch-layer',
      'aria-hidden': i < STITCH_LAYERS.length - 1 ? 'true' : 'false',
      style: `${l.w ? `-webkit-text-stroke:${l.w}px ${l.c};` : ''}opacity:1;z-index:${i}`,
    }, stitchBody(lines, offsets, tilt)));
    return el('div', { class: `mp-stitch ${className}`, style: `font-size:${size}px;${style}` }, layerDivs);
  }

  global.MP = {
    el, svg,
    ScoopPanel, Button, PolaroidPhoto, TicketCard, LetterCard, TicketPanel,
    CheckerBar, Ribbon, StarRating, TestimonialCard, ShapeStat, StitchScript,
  };
})(window);
