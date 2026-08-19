/* @ds-bundle: {"format":4,"namespace":"MoscatoPizzaDesignSystem_feab2b","components":[{"name":"CheckerBar","sourcePath":"components/brand/CheckerBar.jsx"},{"name":"CurvedText","sourcePath":"components/brand/CurvedText.jsx"},{"name":"LetterCard","sourcePath":"components/brand/LetterCard.jsx"},{"name":"LocationPlaque","sourcePath":"components/brand/LocationPlaque.jsx"},{"name":"PolaroidPhoto","sourcePath":"components/brand/PolaroidPhoto.jsx"},{"name":"PostcardPlaque","sourcePath":"components/brand/PostcardPlaque.jsx"},{"name":"Ribbon","sourcePath":"components/brand/Ribbon.jsx"},{"name":"ScoopCard","sourcePath":"components/brand/ScoopCard.jsx"},{"name":"SpecCard","sourcePath":"components/brand/SpecCard.jsx"},{"name":"StampBadge","sourcePath":"components/brand/StampBadge.jsx"},{"name":"TicketCard","sourcePath":"components/brand/TicketCard.jsx"},{"name":"TicketPanel","sourcePath":"components/brand/TicketPanel.jsx"},{"name":"StarRating","sourcePath":"components/core/Badge.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"TestimonialCard","sourcePath":"components/feedback/TestimonialCard.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"}],"sourceHashes":{"components/brand/CheckerBar.jsx":"e4b721db00eb","components/brand/CurvedText.jsx":"3134723a15f7","components/brand/LetterCard.jsx":"43eef7c22e67","components/brand/LocationPlaque.jsx":"84c180fdb928","components/brand/PolaroidPhoto.jsx":"2245c3c6b732","components/brand/PostcardPlaque.jsx":"a20e7d6b1f77","components/brand/Ribbon.jsx":"d7670a869faa","components/brand/ScoopCard.jsx":"1eeae704af6a","components/brand/SpecCard.jsx":"342d855babd3","components/brand/StampBadge.jsx":"035e3533df8d","components/brand/TicketCard.jsx":"72ac0e4bdd5d","components/brand/TicketPanel.jsx":"1b9c1cf38c8d","components/core/Badge.jsx":"22fe52dbf593","components/core/Button.jsx":"fb87af2199ac","components/feedback/TestimonialCard.jsx":"081a5efdbee5","components/navigation/NavBar.jsx":"cbd85f392f48","ui_kits/marketing-site/Sections.jsx":"9d483b5ed4e1"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MoscatoPizzaDesignSystem_feab2b = window.MoscatoPizzaDesignSystem_feab2b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/CheckerBar.jsx
try { (() => {
// Traced from the brand's square-bars assets: a two-row checkerboard rule that runs full-bleed.
// small  — bar 24px tall, block 37.19 × 12    (block/row = 3.10)
// large  — bar 29.65px tall, block 96.03 × 14.82 (block/row = 6.48)
const SIZES = {
  small: {
    row: 12,
    ratio: 3.0994
  },
  large: {
    row: 14.824,
    ratio: 6.4783
  }
};
function CheckerBar({
  size = 'small',
  color = 'var(--navy-900)',
  height,
  offset = 'even',
  style
}) {
  const preset = SIZES[size] || SIZES.small;
  const row = height ? height / 2 : preset.row;
  const block = row * preset.ratio;
  const band = shift => ({
    height: row,
    backgroundImage: `repeating-linear-gradient(90deg, ${color} 0 ${block}px, transparent ${block}px ${block * 2}px)`,
    backgroundPosition: `${shift}px 0`
  });
  const flip = offset === 'odd' ? block : 0;
  return /*#__PURE__*/React.createElement("div", {
    role: "separator",
    "aria-hidden": "true",
    style: {
      width: '100%',
      overflow: 'hidden',
      lineHeight: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: band(flip)
  }), /*#__PURE__*/React.createElement("div", {
    style: band(block - flip)
  }));
}
Object.assign(__ds_scope, { CheckerBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/CheckerBar.jsx", error: String((e && e.message) || e) }); }

// components/brand/CurvedText.jsx
try { (() => {
const {
  useId
} = React;
function CurvedText({
  text,
  curve = 40,
  width = 220,
  color = 'var(--navy-700)',
  fontSize = 26
}) {
  const id = useId().replace(/:/g, '');
  const height = Math.abs(curve) + fontSize + 10;
  const d = curve >= 0 ? `M10,${height - 10} Q${width / 2},${height - 10 - curve * 2} ${width - 10},${height - 10}` : `M10,${fontSize} Q${width / 2},${fontSize + curve * 2} ${width - 10},${fontSize}`;
  return /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    style: {
      overflow: 'visible'
    }
  }, /*#__PURE__*/React.createElement("path", {
    id: id,
    d: d,
    fill: "none",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("text", {
    fontFamily: "var(--font-script)",
    fontSize: fontSize,
    fill: color
  }, /*#__PURE__*/React.createElement("textPath", {
    href: `#${id}`,
    startOffset: "50%",
    textAnchor: "middle"
  }, text)));
}
Object.assign(__ds_scope, { CurvedText });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/CurvedText.jsx", error: String((e && e.message) || e) }); }

// components/brand/LetterCard.jsx
try { (() => {
// Bordered "carta" sheet traced from the brand's carta asset (539×688): concave corner bites of
// r=21.16, a paper margin, then two navy hairlines at ~5.6 and ~10.6 inset.
// Parallel offset of a concave bite inset by p is an arc of radius r+p about the ORIGINAL corner,
// so every layer masks with radius r+p centred at (-p,-p) — one full-box mask per corner, nested
// (nesting composes as intersection).
const UNIT = 539,
  R = 21.163,
  PAD1 = 5.57,
  GAP = 4.5;
const CORNERS = [['-Xpx', '-Xpx'], ['calc(100% + Xpx)', '-Xpx'], ['-Xpx', 'calc(100% + Xpx)'], ['calc(100% + Xpx)', 'calc(100% + Xpx)']];
function cornerMask(rx, ry, p, corner) {
  const at = corner.map(v => v.replace(/X/g, String(p))).join(' ');
  const img = `radial-gradient(ellipse ${rx}px ${ry}px at ${at}, transparent 99%, #000 100%)`;
  return {
    maskImage: img,
    WebkitMaskImage: img,
    maskSize: '100% 100%',
    WebkitMaskSize: '100% 100%',
    maskRepeat: 'no-repeat',
    WebkitMaskRepeat: 'no-repeat'
  };
}
function Shell({
  r,
  p,
  style,
  children
}) {
  let node = /*#__PURE__*/React.createElement("div", {
    style: {
      ...cornerMask(r + p, r + p, p, CORNERS[3]),
      ...style
    }
  }, children);
  for (let i = 2; i >= 0; i--) node = /*#__PURE__*/React.createElement("div", {
    style: cornerMask(r + p, r + p, p, CORNERS[i])
  }, node);
  return node;
}
function LetterCard({
  title = 'Ciao!',
  paragraphs = [],
  children,
  photo,
  photoAlt = '',
  photoLabel = 'Photo',
  photoRatio = '4 / 3',
  photoPosition = 'top',
  signature,
  signatureSrc,
  tone = 'cream',
  width = 539,
  shadow = false,
  style
}) {
  const tones = {
    cream: {
      paper: 'var(--cream-300)',
      ink: 'var(--navy-900)',
      slot: 'var(--cream-100)'
    },
    blue: {
      paper: 'var(--sky-100)',
      ink: 'var(--navy-900)',
      slot: 'var(--sky-200)'
    },
    navy: {
      paper: 'var(--navy-900)',
      ink: 'var(--cream-100)',
      slot: 'var(--navy-700)'
    }
  };
  const t = tones[tone] || tones.cream;
  const line = tone === 'navy' ? 'var(--cream-100)' : 'var(--navy-900)';
  const s = width / UNIT;
  const p1 = PAD1 * s,
    gap = GAP * s,
    r = R * s;
  const body = paragraphs.length ? paragraphs.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      margin: i ? '1.6em 0 0' : 0
    }
  }, p)) : children;
  const slot = /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      aspectRatio: photoRatio,
      background: t.slot,
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: photoPosition === 'top' ? '0 0 ' + 34 * s + 'px' : 34 * s + 'px 0 0'
    }
  }, photo ? /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: photoAlt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: Math.max(10, 13 * s),
      color: t.ink,
      textTransform: 'uppercase',
      letterSpacing: 'var(--letter-caps)',
      opacity: 0.55
    }
  }, photoLabel));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      filter: shadow ? 'drop-shadow(0 14px 30px rgba(15,44,86,.18))' : undefined,
      ...style
    }
  }, /*#__PURE__*/React.createElement(Shell, {
    r: r,
    p: 0,
    style: {
      background: t.paper,
      padding: p1
    }
  }, /*#__PURE__*/React.createElement(Shell, {
    r: r,
    p: p1,
    style: {
      background: line,
      padding: 1
    }
  }, /*#__PURE__*/React.createElement(Shell, {
    r: r,
    p: p1 + 1,
    style: {
      background: t.paper,
      padding: gap
    }
  }, /*#__PURE__*/React.createElement(Shell, {
    r: r,
    p: p1 + 1 + gap,
    style: {
      background: line,
      padding: 1
    }
  }, /*#__PURE__*/React.createElement(Shell, {
    r: r,
    p: p1 + 2 + gap,
    style: {
      background: t.paper,
      color: t.ink,
      padding: `${44 * s}px ${52 * s}px ${38 * s}px`,
      textAlign: 'center'
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 62 * s,
      lineHeight: 1,
      textTransform: 'uppercase',
      letterSpacing: 'var(--letter-tight)',
      margin: `0 0 ${36 * s}px`
    }
  }, title), photoPosition === 'top' && slot, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: Math.max(11, 14 * s),
      lineHeight: 1.75
    }
  }, body), photoPosition === 'bottom' && slot, (signature || signatureSrc) && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 44 * s
    }
  }, signature && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: Math.max(10, 13 * s),
      letterSpacing: 'var(--letter-caps)'
    }
  }, signature), signatureSrc && /*#__PURE__*/React.createElement("img", {
    src: signatureSrc,
    alt: "",
    style: {
      display: 'block',
      margin: `${10 * s}px auto 0`,
      width: 140 * s
    }
  }))))))));
}
Object.assign(__ds_scope, { LetterCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/LetterCard.jsx", error: String((e && e.message) || e) }); }

// components/brand/LocationPlaque.jsx
try { (() => {
const bgPath = 'M446.354 0L154.022 0C147.423 0 141.116 2.71664 136.583 7.51118L6.56095 145.025C-2.30177 154.399 -2.16953 169.102 6.86034 178.314L136.627 310.706C141.141 315.311 147.318 317.906 153.767 317.906H456.434C462.999 317.906 469.278 315.217 473.808 310.464L599.448 178.63C608.382 169.255 608.268 154.483 599.19 145.248L463.47 7.17584C458.957 2.5855 452.791 0 446.354 0Z';
const borderOuter = 'M436.807 1H150.326C144.827 1 139.571 3.26386 135.793 7.25931L6.46752 144.037C-0.918083 151.848 -0.807912 164.101 6.71697 171.778L135.83 303.503C139.592 307.34 144.739 309.503 150.113 309.503H446.619C452.09 309.503 457.322 307.261 461.097 303.301L586.19 172.041C593.635 164.228 593.54 151.919 585.975 144.223L451.07 6.97986C447.31 3.15458 442.171 1 436.807 1Z';
const borderInner = 'M434.105 5.42816H152.282C147.357 5.42816 142.648 7.446 139.25 11.0115L11.2943 145.306C4.58342 152.349 4.68328 163.45 11.5198 170.371L139.285 299.724C142.667 303.148 147.279 305.075 152.091 305.075H443.724C448.624 305.075 453.312 303.077 456.706 299.543L580.528 170.61C587.293 163.566 587.207 152.413 580.334 145.475L446.894 10.7608C443.513 7.34814 438.909 5.42816 434.105 5.42816Z';
// hexagonal "tag" shape + burst-star rating icon, from the brand's asset 88/89/97.svg
const stripMask = "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20viewBox%3D%220%200%201849%2024%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M483.499%2011.9986V-3.51297e-06L446.307%20-1.88725e-06V11.9986L483.499%2011.9986Z%22%20fill%3D%22black%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M409.115%2011.9986V-2.6152e-07L371.923%201.36421e-06V11.9986L409.115%2011.9986Z%22%20fill%3D%22black%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M334.73%2011.9986V2.98993e-06L297.538%204.61566e-06V11.9986L334.73%2011.9986Z%22%20fill%3D%22black%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M260.346%2011.9986V6.24138e-06L223.154%207.86711e-06V11.9986L260.346%2011.9986Z%22%20fill%3D%22black%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M185.961%2011.9986V9.49283e-06L148.769%201.11186e-05V11.9986L185.961%2011.9986Z%22%20fill%3D%22black%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M111.577%2011.9986V1.27443e-05L74.3845%201.437e-05V11.9986L111.577%2011.9986Z%22%20fill%3D%22black%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M37.1923%2011.9986V1.59957e-05L0%201.76215e-05L5.24476e-07%2011.9986L37.1923%2011.9986Z%22%20fill%3D%22black%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M446.307%2023.9972V11.9986L409.115%2011.9986V23.9972L446.307%2023.9972Z%22%20fill%3D%22black%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M371.923%2023.9972V11.9986L334.73%2011.9986V23.9972L371.923%2023.9972Z%22%20fill%3D%22black%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M297.538%2023.9972V11.9986L260.346%2011.9986V23.9972L297.538%2023.9972Z%22%20fill%3D%22black%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M223.154%2023.9972V11.9986L185.961%2011.9986V23.9972L223.154%2023.9972Z%22%20fill%3D%22black%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M148.769%2023.9972V11.9986L111.577%2011.9986V23.9972L148.769%2023.9972Z%22%20fill%3D%22black%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M74.3845%2023.9972V11.9986L37.1923%2011.9986V23.9972H74.3845Z%22%20fill%3D%22black%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M966.999%2011.9986V23.9972L929.806%2023.9972V11.9986L966.999%2011.9986Z%22%20fill%3D%22black%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M892.614%2011.9986V23.9972L855.422%2023.9972V11.9986L892.614%2011.9986Z%22%20fill%3D%22black%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M818.23%2011.9986V23.9972L781.037%2023.9972V11.9986L818.23%2011.9986Z%22%20fill%3D%22black%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M743.845%2011.9986V23.9972L706.653%2023.9972V11.9986L743.845%2011.9986Z%22%20fill%3D%22black%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M669.461%2011.9985V23.9972H632.268V11.9985L669.461%2011.9985Z%22%20fill%3D%22black%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M595.076%2011.9985V23.9971L557.884%2023.9971V11.9985L595.076%2011.9985Z%22%20fill%3D%22black%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M520.692%2011.9985V23.9971L483.499%2023.9971V11.9986L520.692%2011.9985Z%22%20fill%3D%22black%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M929.806%20-4.31522e-05V11.9986L892.614%2011.9986V-4.47779e-05L929.806%20-4.31522e-05Z%22%20fill%3D%22black%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M855.422%20-4.64036e-05V11.9986L818.23%2011.9986V-4.80294e-05L855.422%20-4.64036e-05Z%22%20fill%3D%22black%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M781.037%20-4.96551e-05V11.9986L743.845%2011.9986V-5.12808e-05L781.037%20-4.96551e-05Z%22%20fill%3D%22black%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M706.653%20-5.29065e-05V11.9986L669.461%2011.9985V-5.45323e-05L706.653%20-5.29065e-05Z%22%20fill%3D%22black%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M632.268%20-5.6158e-05V11.9985L595.076%2011.9985V-5.77837e-05L632.268%20-5.6158e-05Z%22%20fill%3D%22black%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M557.884%20-5.94094e-05V11.9985L520.692%2011.9985V-6.10352e-05L557.884%20-5.94094e-05Z%22%20fill%3D%22black%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M1450.5%2011.9986V-2.44938e-05L1413.31%20-2.28681e-05V11.9986L1450.5%2011.9986Z%22%20fill%3D%22black%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M1376.11%2011.9986V-2.12424e-05L1338.92%20-1.96166e-05V11.9986L1376.11%2011.9986Z%22%20fill%3D%22black%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M1301.73%2011.9986V-1.79909e-05L1264.54%20-1.63652e-05V11.9986L1301.73%2011.9986Z%22%20fill%3D%22black%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M1227.34%2011.9986V-1.47395e-05L1190.15%20-1.31137e-05V11.9986L1227.34%2011.9986Z%22%20fill%3D%22black%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M1152.96%2011.9986V-1.1488e-05L1115.77%20-9.86228e-06V11.9986L1152.96%2011.9986Z%22%20fill%3D%22black%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M1078.58%2011.9986V-8.23655e-06L1041.38%20-6.61083e-06V11.9986L1078.58%2011.9986Z%22%20fill%3D%22black%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M1004.19%2011.9986L1004.19%20-4.9851e-06L966.999%20-3.35938e-06L966.999%2011.9986L1004.19%2011.9986Z%22%20fill%3D%22black%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M1413.31%2023.9972V11.9986L1376.11%2011.9986V23.9972L1413.31%2023.9972Z%22%20fill%3D%22black%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M1338.92%2023.9972V11.9986L1301.73%2011.9986V23.9972L1338.92%2023.9972Z%22%20fill%3D%22black%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M1264.54%2023.9972V11.9986L1227.34%2011.9986V23.9972L1264.54%2023.9972Z%22%20fill%3D%22black%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M1190.15%2023.9972V11.9986L1152.96%2011.9986V23.9972L1190.15%2023.9972Z%22%20fill%3D%22black%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M1115.77%2023.9972V11.9986L1078.58%2011.9986V23.9972L1115.77%2023.9972Z%22%20fill%3D%22black%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M1041.38%2023.9972V11.9986L1004.19%2011.9986V23.9972H1041.38Z%22%20fill%3D%22black%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M1934%2011.9986V23.9972L1896.81%2023.9972V11.9986L1934%2011.9986Z%22%20fill%3D%22black%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M1859.61%2011.9986V23.9972L1822.42%2023.9972V11.9986L1859.61%2011.9986Z%22%20fill%3D%22black%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M1785.23%2011.9986V23.9972L1748.04%2023.9972V11.9986L1785.23%2011.9986Z%22%20fill%3D%22black%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M1710.84%2011.9986V23.9972L1673.65%2023.9972V11.9986L1710.84%2011.9986Z%22%20fill%3D%22black%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M1636.46%2011.9986V23.9972H1599.27V11.9986L1636.46%2011.9986Z%22%20fill%3D%22black%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M1562.07%2011.9986V23.9972L1524.88%2023.9972V11.9986L1562.07%2011.9986Z%22%20fill%3D%22black%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M1487.69%2011.9986V23.9972L1450.5%2023.9972L1450.5%2011.9986L1487.69%2011.9986Z%22%20fill%3D%22black%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M1896.81%201.59957e-05V11.9986L1859.61%2011.9986V1.437e-05L1896.81%201.59957e-05Z%22%20fill%3D%22black%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M1822.42%201.27443e-05V11.9986L1785.23%2011.9986V1.11186e-05L1822.42%201.27443e-05Z%22%20fill%3D%22black%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M1748.04%209.49283e-06V11.9986L1710.84%2011.9986V7.86711e-06L1748.04%209.49283e-06Z%22%20fill%3D%22black%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M1673.65%206.24138e-06V11.9986L1636.46%2011.9986V4.61566e-06L1673.65%206.24138e-06Z%22%20fill%3D%22black%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M1599.27%202.98993e-06V11.9986L1562.07%2011.9986V1.36421e-06L1599.27%202.98993e-06Z%22%20fill%3D%22black%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M1524.88%20-2.6152e-07V11.9986L1487.69%2011.9986V-1.88725e-06L1524.88%20-2.6152e-07Z%22%20fill%3D%22black%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E";
function BurstStar({
  filled
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 19 19",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    opacity: "0.45",
    d: "M4.4267 15.8601L5.78444 10.6255L1.79215 6.97478L7.20266 6.64909L9.43341 1.73765L11.4012 6.76023L16.7869 7.37171L12.6071 10.8061L13.686 16.1052L9.13025 13.1899L4.4267 15.8601Z",
    fill: "currentColor"
  }), filled && /*#__PURE__*/React.createElement("path", {
    d: "M10.3512 4.08014L10.0938 13.8062L9.13026 13.1897L4.42709 15.8601L5.78483 10.6257L1.79215 6.97478L7.20305 6.6491L9.43341 1.73765L10.3512 4.08014Z",
    fill: "currentColor"
  }));
}
function LocationPlaque({
  eyebrow = 'Reviews',
  score = 4.6,
  max = 5,
  title,
  stats = [],
  dots = true,
  strip = true,
  background = 'var(--bg-surface)',
  style
}) {
  const full = Math.round(score);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      maxWidth: 620,
      aspectRatio: '607 / 318',
      color: 'var(--navy-900)',
      ...style
    }
  }, strip && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: '50.5%',
      height: 10,
      transform: 'translateY(-50%)',
      background: 'var(--navy-900)',
      WebkitMaskImage: `url("${stripMask}")`,
      maskImage: `url("${stripMask}")`,
      WebkitMaskRepeat: 'repeat-x',
      maskRepeat: 'repeat-x',
      WebkitMaskSize: 'auto 100%',
      maskSize: 'auto 100%',
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 607 318",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: bgPath,
    fill: background
  }), /*#__PURE__*/React.createElement("path", {
    d: borderOuter,
    fill: "none",
    stroke: "var(--navy-900)",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: borderInner,
    fill: "none",
    stroke: "var(--navy-900)",
    strokeWidth: "2"
  })), dots && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: -4,
      top: '50.6%',
      transform: 'translateY(-50%)',
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--navy-900)',
      zIndex: 2
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: -4,
      top: '50.6%',
      transform: 'translateY(-50%)',
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--navy-900)',
      zIndex: 2
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 2,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '2.5%',
      padding: '4% 13%',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: '0.85rem',
      letterSpacing: 'var(--letter-caps)',
      textTransform: 'uppercase'
    }
  }, eyebrow, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 2
    }
  }, Array.from({
    length: max
  }).map((_, i) => /*#__PURE__*/React.createElement(BurstStar, {
    key: i,
    filled: i < full
  }))), /*#__PURE__*/React.createElement("span", null, score.toFixed(1))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-display-lg)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--letter-tight)',
      lineHeight: 1.02
    }
  }, title), stats.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.8rem',
      color: 'var(--text-muted)'
    }
  }, stats.join('  ·  '))));
}
Object.assign(__ds_scope, { LocationPlaque });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/LocationPlaque.jsx", error: String((e && e.message) || e) }); }

// components/brand/PolaroidPhoto.jsx
try { (() => {
// Scalloped (semicircle-tooth) frame edge, traced from the brand's polaroid-top/polaroid-bottom assets:
// tooth pitch 6.55 / radius 3.275 / strip depth 11.98 on a 269.3-wide frame. Scales with `width`.
const UNIT = 269.3,
  STRIP = 11.98,
  PITCH = 6.55,
  R = 3.275;
function scallopStrip(s, flip) {
  const h = STRIP * s,
    tile = PITCH * s,
    bump = R * s;
  return {
    height: h,
    background: 'var(--bg-surface)',
    transform: flip ? 'scaleY(-1)' : undefined,
    maskImage: 'radial-gradient(circle closest-side at 50% ' + (bump / h * 100).toFixed(3) + '%, #000 98%, transparent 100%), linear-gradient(#000,#000)',
    WebkitMaskImage: 'radial-gradient(circle closest-side at 50% ' + (bump / h * 100).toFixed(3) + '%, #000 98%, transparent 100%), linear-gradient(#000,#000)',
    maskSize: tile + 'px ' + h + 'px, 100% ' + (h - bump) + 'px',
    WebkitMaskSize: tile + 'px ' + h + 'px, 100% ' + (h - bump) + 'px',
    maskPosition: '0 0, 0 100%',
    WebkitMaskPosition: '0 0, 0 100%',
    maskRepeat: 'repeat-x, no-repeat',
    WebkitMaskRepeat: 'repeat-x, no-repeat'
  };
}
function PolaroidPhoto({
  src,
  alt = '',
  label = 'Photo',
  caption,
  rotate = -3,
  width = 220,
  tone = 'sky',
  shadow = true,
  style
}) {
  const tones = {
    sky: 'var(--sky-200)',
    mustard: 'var(--mustard-500)',
    cream: 'var(--cream-300)',
    navy: 'var(--navy-700)'
  };
  const s = width / UNIT;
  const overlap = -(STRIP - R) * s;
  const filter = shadow ? 'drop-shadow(0 10px 22px rgba(20,32,66,.16))' : undefined;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      transform: `rotate(${rotate}deg)`,
      filter,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: scallopStrip(s, false)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-surface)',
      marginTop: overlap,
      marginBottom: overlap,
      padding: `${6.72 * s}px ${13.45 * s}px ${40.4 * s}px`,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      aspectRatio: '242.391 / 271.462',
      background: tones[tone] || tones.sky,
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: Math.max(10, 11 * s * 2),
      color: 'var(--navy-900)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--letter-caps)',
      opacity: 0.65
    }
  }, label)), caption && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 40.4 * s,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-script)',
      fontSize: Math.max(13, 26 * s),
      lineHeight: 1,
      color: 'var(--navy-700)'
    }
  }, caption)), /*#__PURE__*/React.createElement("div", {
    style: scallopStrip(s, true)
  }));
}
Object.assign(__ds_scope, { PolaroidPhoto });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/PolaroidPhoto.jsx", error: String((e && e.message) || e) }); }

// components/brand/PostcardPlaque.jsx
try { (() => {
const hex = 'polygon(6% 0,94% 0,100% 50%,94% 100%,6% 100%,0 50%)';
function PostcardPlaque({
  eyebrow,
  title,
  footnote,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--navy-900)',
      clipPath: hex,
      padding: 'var(--border-thick)',
      maxWidth: 540,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-surface)',
      clipPath: hex,
      padding: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--navy-900)',
      clipPath: hex,
      padding: 'var(--border-thin)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-surface)',
      clipPath: hex,
      color: 'var(--navy-900)',
      padding: '38px 56px',
      textAlign: 'center'
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: '0.8rem',
      marginBottom: 8,
      letterSpacing: 'var(--letter-caps)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-display-lg)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--letter-tight)'
    }
  }, title), footnote && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.8rem',
      marginTop: 10,
      color: 'var(--text-muted)'
    }
  }, footnote)))));
}
Object.assign(__ds_scope, { PostcardPlaque });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/PostcardPlaque.jsx", error: String((e && e.message) || e) }); }

// components/brand/Ribbon.jsx
try { (() => {
function Ribbon({
  tone = 'sky',
  children,
  rotate = -1.2,
  style
}) {
  const tones = {
    sky: {
      background: 'var(--sky-200)'
    },
    mustard: {
      background: 'var(--mustard-500)'
    },
    cream: {
      background: 'var(--cream-300)'
    },
    navy: {
      background: 'var(--navy-900)',
      color: 'var(--text-on-inverse)'
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      transform: `rotate(${rotate}deg)`,
      padding: '18px 32px',
      textAlign: 'center',
      borderTop: 'var(--border-thin) solid var(--navy-900)',
      borderBottom: 'var(--border-thin) solid var(--navy-900)',
      font: 'var(--text-display-md)',
      color: 'var(--navy-900)',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      ...tones[tone],
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Ribbon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Ribbon.jsx", error: String((e && e.message) || e) }); }

// components/brand/ScoopCard.jsx
try { (() => {
// scoop-corner mask (concave quarter-circle bite at each corner), from the brand's asset 101/Vector.svg card-frame — resolution-independent via CSS mask intersection, matches the Button scoop-cap language at card scale
function scoopMask(r) {
  const grad = pos => `radial-gradient(circle ${r}px at ${pos}, transparent ${r}px, black ${r + 0.5}px)`;
  return {
    maskImage: [grad('0 0'), grad('100% 0'), grad('0 100%'), grad('100% 100%')].join(','),
    WebkitMaskImage: [grad('0 0'), grad('100% 0'), grad('0 100%'), grad('100% 100%')].join(','),
    maskComposite: 'intersect',
    WebkitMaskComposite: 'source-in, source-in, source-in'
  };
}
function Check() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 9.5L7 13.5L15 4.5",
    stroke: "var(--navy-900)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
function ScoopCard({
  title,
  children,
  checklist,
  ctaLabel,
  ctaHref = '#',
  signature,
  background = 'var(--sky-100)',
  radius = 20,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background,
      ...scoopMask(radius)
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      border: '2px solid var(--navy-900)',
      ...scoopMask(radius)
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 6,
      border: '2px solid var(--navy-900)',
      ...scoopMask(Math.max(radius - 6, 4))
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '15% 12%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 18,
      textAlign: 'center'
    }
  }, title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: 'var(--text-display-md)',
      color: 'var(--navy-900)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--letter-tight)'
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-md)',
      color: 'var(--navy-900)',
      maxWidth: '46ch'
    }
  }, children), checklist && checklist.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      textAlign: 'left'
    }
  }, checklist.map((item, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      borderTop: i > 0 ? '1px solid var(--sky-200)' : 'none',
      paddingTop: i > 0 ? 12 : 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      font: 'var(--text-body-lg)',
      fontWeight: 700,
      color: 'var(--navy-900)'
    }
  }, /*#__PURE__*/React.createElement(Check, null), item.title), item.description && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-muted)',
      paddingLeft: 26
    }
  }, item.description)))), signature && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: '1.7rem',
      color: 'var(--navy-900)'
    }
  }, signature), ctaLabel && /*#__PURE__*/React.createElement("a", {
    href: ctaHref,
    style: {
      marginTop: 4,
      display: 'inline-block',
      padding: '14px 32px',
      background: 'var(--mustard-500)',
      color: 'var(--navy-900)',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      letterSpacing: 'var(--letter-caps)',
      textDecoration: 'none',
      textTransform: 'uppercase',
      clipPath: 'polygon(6% 0,94% 0,100% 30%,100% 70%,94% 100%,6% 100%,0 70%,0 30%)'
    }
  }, ctaLabel)));
}
Object.assign(__ds_scope, { ScoopCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ScoopCard.jsx", error: String((e && e.message) || e) }); }

// components/brand/SpecCard.jsx
try { (() => {
// Photo frame traced from the brand's inside-card asset (450×450): a plus-shaped outline with
// 32×20 corner notches (0.0711 / 0.0444 of the frame width) and a two-row checkerboard of
// card-coloured blocks masking the top edge (block 41.26 wide, rows 19.5 tall).
const NOTCH_W = 0.0711,
  NOTCH_H = 0.0444,
  BLOCK = 0.0917,
  ROW = 0.0433;
function plus(nw, nh) {
  return `polygon(${nw}px 0,calc(100% - ${nw}px) 0,calc(100% - ${nw}px) ${nh}px,100% ${nh}px,100% calc(100% - ${nh}px),calc(100% - ${nw}px) calc(100% - ${nh}px),calc(100% - ${nw}px) 100%,${nw}px 100%,${nw}px calc(100% - ${nh}px),0 calc(100% - ${nh}px),0 ${nh}px,${nw}px ${nh}px)`;
}
function checkerRow(color, block, offset) {
  return {
    backgroundImage: `repeating-linear-gradient(90deg, ${color} 0 ${block}px, transparent ${block}px ${block * 2}px)`,
    backgroundPosition: `${offset}px 0`
  };
}
function SpecCard({
  title,
  photo,
  photoAlt = '',
  photoLabel = 'Photo',
  photoRatio = '3 / 4',
  stats = [],
  ctaLabel,
  onCtaClick,
  ctaHref,
  tone = 'sky',
  width = 278,
  style
}) {
  const tones = {
    sky: {
      bg: 'var(--sky-200)',
      ink: 'var(--navy-900)',
      line: 'var(--navy-900)',
      slot: 'var(--sky-100)',
      cta: 'var(--navy-900)',
      ctaInk: 'var(--cream-100)'
    },
    cream: {
      bg: 'var(--cream-300)',
      ink: 'var(--navy-900)',
      line: 'var(--navy-900)',
      slot: 'var(--cream-100)',
      cta: 'var(--navy-900)',
      ctaInk: 'var(--cream-100)'
    },
    navy: {
      bg: 'var(--navy-900)',
      ink: 'var(--cream-100)',
      line: 'var(--cream-100)',
      slot: 'var(--navy-700)',
      cta: 'var(--mustard-500)',
      ctaInk: 'var(--navy-900)'
    }
  };
  const t = tones[tone] || tones.sky;
  const s = width / 278;
  const pad = 18 * s;
  const fw = width - pad * 2;
  const nw = fw * NOTCH_W,
    nh = fw * NOTCH_H,
    block = fw * BLOCK,
    row = fw * ROW;
  const border = Math.max(1, 1.6 * s);
  const shape = plus(nw, nh);
  const CTA = ctaHref ? 'a' : 'button';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      boxSizing: 'border-box',
      background: t.bg,
      color: t.ink,
      padding: `${22 * s}px ${pad}px ${pad}px`,
      ...style
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 30 * s,
      lineHeight: 1,
      textAlign: 'center',
      textTransform: 'uppercase',
      letterSpacing: 'var(--letter-tight)',
      marginBottom: 18 * s
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      background: t.line,
      clipPath: shape,
      padding: border
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: t.slot,
      clipPath: shape,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      aspectRatio: photoRatio,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, photo ? /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: photoAlt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: Math.max(10, 12 * s),
      textTransform: 'uppercase',
      letterSpacing: 'var(--letter-caps)',
      opacity: 0.55
    }
  }, photoLabel)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: row,
      ...checkerRow(t.bg, block, 0)
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: row,
      height: row,
      ...checkerRow(t.bg, block, block)
    }
  }))), stats.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'stretch',
      marginTop: 20 * s
    }
  }, stats.map((st, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      textAlign: 'center',
      padding: `0 ${10 * s}px`,
      borderLeft: i ? `${Math.max(1, 1.5 * s)}px dotted ${t.line}` : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22 * s,
      lineHeight: 1.1
    }
  }, st.value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: Math.max(9, 10.5 * s),
      lineHeight: 1.35,
      marginTop: 6 * s,
      opacity: 0.9
    }
  }, st.label)))), ctaLabel && /*#__PURE__*/React.createElement(CTA, {
    href: ctaHref,
    onClick: onCtaClick,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      boxSizing: 'border-box',
      marginTop: 18 * s,
      border: 'none',
      textDecoration: 'none',
      cursor: 'pointer',
      background: t.cta,
      color: t.ctaInk,
      minHeight: 42 * s,
      padding: `${11 * s}px ${16 * s}px`,
      fontFamily: 'var(--font-accent)',
      fontStyle: 'italic',
      fontWeight: 500,
      fontSize: Math.max(12, 16 * s),
      lineHeight: 1,
      transition: 'transform .15s ease'
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-2px)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translateY(0)';
    }
  }, ctaLabel));
}
Object.assign(__ds_scope, { SpecCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SpecCard.jsx", error: String((e && e.message) || e) }); }

// components/brand/StampBadge.jsx
try { (() => {
const shapes = {
  circle: {
    clipPath: 'circle(50% at 50% 50%)'
  },
  diamond: {
    clipPath: 'polygon(50% 0,100% 50%,50% 100%,0 50%)'
  },
  octagon: {
    clipPath: 'polygon(30% 0,70% 0,100% 30%,100% 70%,70% 100%,30% 100%,0 70%,0 30%)'
  }
};

// double-outline SVG shapes, from the brand's asset 42/43/62.svg — literal light-blue ring (#C0DEEE) over the tone fill
const ringColor = '#C0DEEE';
const svgShapes = {
  bloom: {
    viewBox: '0 0 406 406',
    aspect: 1,
    Fill: ({
      fill
    }) => /*#__PURE__*/React.createElement("path", {
      fill: fill,
      d: "M202.647 0L332.906 47.4803L402.216 167.704L378.145 304.418L271.957 393.652H133.338L27.1496 304.418L3.07866 167.704L72.3881 47.4803L202.647 0Z"
    }),
    Rings: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M326.449 55.1841L392.323 169.451L369.445 299.389L268.522 384.201H136.773L35.8488 299.39L12.9698 169.451L78.8448 55.1841L202.647 10.0571L326.449 55.1841Z",
      fill: "none",
      stroke: ringColor,
      strokeWidth: "2.3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M320.905 61.9155L383.803 171.017L361.959 295.083L265.596 376.061H139.805L43.4406 295.083L21.5968 171.017L84.4943 61.9155L202.7 18.8296L320.905 61.9155Z",
      fill: "none",
      stroke: ringColor,
      strokeWidth: "2.2"
    }))
  },
  gem: {
    viewBox: '0 0 461 461',
    aspect: 1,
    Fill: ({
      fill
    }) => /*#__PURE__*/React.createElement("rect", {
      fill: fill,
      x: "230.323",
      width: "325.726",
      height: "325.726",
      transform: "rotate(45 230.323 0)"
    }),
    Rings: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "230.323",
      y: "17.9113",
      width: "300.396",
      height: "300.396",
      transform: "rotate(45 230.323 17.9113)",
      fill: "none",
      stroke: ringColor,
      strokeWidth: "2.4"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "230.323",
      y: "9.95853",
      width: "311.643",
      height: "311.643",
      transform: "rotate(45 230.323 9.95853)",
      fill: "none",
      stroke: ringColor,
      strokeWidth: "2.4"
    }))
  },
  plaque: {
    viewBox: '0 0 334 315',
    aspect: 334 / 315,
    Fill: ({
      fill
    }) => /*#__PURE__*/React.createElement("path", {
      fill: fill,
      d: "M309.372 0C309.374 12.5473 319.899 22.7552 333.01 23.0713L333.637 23.0791V291.411H333.635C320.234 291.411 309.37 301.745 309.37 314.493L24.2617 314.493C24.2616 301.746 13.3997 291.412 0 291.411L0 23.0781C13.3994 23.0776 24.262 12.7462 24.2637 0L309.372 0Z"
    }),
    Rings: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M302.747 7.30762C302.748 19.4624 313.106 29.3154 325.884 29.3154L325.885 29.3145L325.885 285.176H325.883C313.104 285.176 302.746 295.03 302.746 307.186V307.187H30.8865L30.8865 307.186C30.8864 295.031 20.5288 285.177 7.75171 285.176L7.75171 29.3145C20.5288 29.3138 30.8865 19.462 30.8875 7.30762L302.747 7.30762Z",
      fill: "none",
      stroke: ringColor,
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M296.869 14.6133C296.869 26.207 306.75 35.6055 318.938 35.6055L318.939 35.6045V279.646H318.937C306.749 279.646 296.869 289.044 296.868 300.637H37.5695C37.5685 289.044 27.6902 279.647 15.504 279.646L15.504 35.6045C27.6912 35.6039 37.5702 26.2066 37.5704 14.6133L296.869 14.6133Z",
      fill: "none",
      stroke: ringColor,
      strokeWidth: "2"
    }))
  }
};
function StampBadge({
  shape = 'circle',
  tone = 'navy',
  value,
  label,
  size = 190,
  style
}) {
  const tones = {
    navy: {
      background: 'var(--navy-900)',
      color: 'var(--sky-100)'
    },
    brown: {
      background: 'var(--brown-700)',
      color: 'var(--sky-100)'
    },
    mustard: {
      background: 'var(--mustard-500)',
      color: 'var(--navy-900)'
    }
  };
  if (svgShapes[shape]) {
    const {
      viewBox,
      aspect,
      Fill,
      Rings
    } = svgShapes[shape];
    const tint = tones[tone];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        width: size,
        height: size / aspect,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontFamily: 'var(--font-display)',
        color: tint.color,
        ...style
      }
    }, /*#__PURE__*/React.createElement("svg", {
      viewBox: viewBox,
      style: {
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%'
      }
    }, /*#__PURE__*/React.createElement(Fill, {
      fill: tint.background
    }), /*#__PURE__*/React.createElement(Rings, null)), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        fontSize: size * 0.2,
        lineHeight: 1
      }
    }, value), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: size * 0.08,
        marginTop: 6,
        textTransform: 'uppercase'
      }
    }, label));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      fontFamily: 'var(--font-display)',
      ...shapes[shape],
      ...tones[tone],
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: size * 0.2,
      lineHeight: 1
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: size * 0.08,
      marginTop: 6,
      textTransform: 'uppercase'
    }
  }, label));
}
Object.assign(__ds_scope, { StampBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/StampBadge.jsx", error: String((e && e.message) || e) }); }

// components/brand/TicketCard.jsx
try { (() => {
// Ticket shape traced from the brand's card-ticket asset (288×263): elliptical concave bites at
// all four corners, rx 15.132 / ry 18.829. Bites keep their absolute size; the card stretches.
const UNIT_W = 288,
  RX = 15.132,
  RY = 18.829;
function ticketMask(rx, ry) {
  const bite = 'radial-gradient(ellipse ' + rx + 'px ' + ry + 'px at PX PY, transparent 99%, #000 100%)';
  const corners = [['0% 0%', '0 0'], ['100% 0%', '100% 0'], ['0% 100%', '0 100%'], ['100% 100%', '100% 100%']];
  const img = corners.map(c => bite.replace('PX PY', c[0])).concat(['linear-gradient(#000,#000)', 'linear-gradient(#000,#000)']).join(',');
  const size = corners.map(() => rx + 'px ' + ry + 'px').concat(['100% calc(100% - ' + 2 * ry + 'px)', 'calc(100% - ' + 2 * rx + 'px) 100%']).join(',');
  const pos = corners.map(c => c[1]).concat(['0 50%', '50% 0']).join(',');
  return {
    maskImage: img,
    WebkitMaskImage: img,
    maskSize: size,
    WebkitMaskSize: size,
    maskPosition: pos,
    WebkitMaskPosition: pos,
    maskRepeat: 'no-repeat',
    WebkitMaskRepeat: 'no-repeat'
  };
}
function TicketCard({
  children,
  text,
  eyebrow,
  photo,
  photoAlt = '',
  photoLabel,
  photoRatio = '4 / 3',
  ctaLabel,
  onCtaClick,
  ctaHref,
  tone = 'sky',
  width = 288,
  align = 'center',
  style
}) {
  const tones = {
    sky: {
      bg: 'var(--sky-200)',
      ink: 'var(--navy-900)',
      slot: 'var(--sky-100)'
    },
    cream: {
      bg: 'var(--cream-300)',
      ink: 'var(--navy-900)',
      slot: 'var(--cream-100)'
    },
    mustard: {
      bg: 'var(--mustard-500)',
      ink: 'var(--navy-900)',
      slot: 'var(--cream-100)'
    },
    navy: {
      bg: 'var(--navy-900)',
      ink: 'var(--cream-100)',
      slot: 'var(--navy-700)'
    }
  };
  const t = tones[tone] || tones.sky;
  const s = width / UNIT_W;
  const pad = 26 * s;
  const ctaBg = tone === 'mustard' ? 'var(--navy-900)' : 'var(--mustard-500)';
  const ctaInk = tone === 'mustard' ? 'var(--cream-100)' : 'var(--navy-900)';
  const CTA = ctaHref ? 'a' : 'button';
  const slot = (photo || photoLabel) && /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      aspectRatio: photoRatio,
      background: t.slot,
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20 * s
    }
  }, photo ? /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: photoAlt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: Math.max(10, 12 * s),
      color: t.ink,
      textTransform: 'uppercase',
      letterSpacing: 'var(--letter-caps)',
      opacity: 0.55
    }
  }, photoLabel));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      background: t.bg,
      color: t.ink,
      boxSizing: 'border-box',
      padding: pad,
      textAlign: align,
      ...ticketMask(RX * s, RY * s),
      ...style
    }
  }, slot, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: Math.max(10, 12 * s),
      textTransform: 'uppercase',
      letterSpacing: 'var(--letter-caps)',
      opacity: 0.7,
      marginBottom: 12 * s
    }
  }, eyebrow), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: Math.max(11, 15 * s),
      lineHeight: 1.6,
      textWrap: 'pretty'
    }
  }, text || children), ctaLabel && /*#__PURE__*/React.createElement(CTA, {
    href: ctaHref,
    onClick: onCtaClick,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      boxSizing: 'border-box',
      marginTop: 26 * s,
      border: 'none',
      textDecoration: 'none',
      cursor: 'pointer',
      background: ctaBg,
      color: ctaInk,
      minHeight: 48 * s,
      padding: `${13 * s}px ${18 * s}px`,
      fontFamily: 'var(--font-accent)',
      fontStyle: 'italic',
      fontWeight: 500,
      fontSize: Math.max(13, 19 * s),
      lineHeight: 1,
      transition: 'transform .15s ease'
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-2px)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translateY(0)';
    }
  }, ctaLabel));
}
Object.assign(__ds_scope, { TicketCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/TicketCard.jsx", error: String((e && e.message) || e) }); }

// components/brand/TicketPanel.jsx
try { (() => {
// Landscape ticket frame traced from the brand's ticker-carousel asset (357×232): elliptical
// concave corner bites rx 18.70 / ry 16.61, with two 2px brown rules inset at 6 and 11.
// Parallel offset of a concave bite inset by p is the arc of radius r+p about the ORIGINAL corner,
// so each layer masks with rx+p / ry+p centred at (-p,-p) — one full-box mask per corner, nested
// (nesting composes as intersection).
const UNIT_W = 357,
  RX = 18.705,
  RY = 16.61;
const CORNERS = [['-Xpx', '-Xpx'], ['calc(100% + Xpx)', '-Xpx'], ['-Xpx', 'calc(100% + Xpx)'], ['calc(100% + Xpx)', 'calc(100% + Xpx)']];
function cornerMask(rx, ry, p, corner) {
  const at = corner.map(v => v.replace(/X/g, String(p))).join(' ');
  const img = `radial-gradient(ellipse ${rx}px ${ry}px at ${at}, transparent 99%, #000 100%)`;
  return {
    maskImage: img,
    WebkitMaskImage: img,
    maskSize: '100% 100%',
    WebkitMaskSize: '100% 100%',
    maskRepeat: 'no-repeat',
    WebkitMaskRepeat: 'no-repeat'
  };
}
function Shell({
  rx,
  ry,
  p,
  style,
  children
}) {
  let node = /*#__PURE__*/React.createElement("div", {
    style: {
      ...cornerMask(rx + p, ry + p, p, CORNERS[3]),
      ...style
    }
  }, children);
  for (let i = 2; i >= 0; i--) node = /*#__PURE__*/React.createElement("div", {
    style: cornerMask(rx + p, ry + p, p, CORNERS[i])
  }, node);
  return node;
}
function TicketPanel({
  eyebrow,
  title,
  text,
  children,
  photo,
  photoAlt = '',
  photoLabel,
  photoRatio = '16 / 9',
  tone = 'sky',
  width = 357,
  align = 'center',
  style
}) {
  const tones = {
    sky: {
      bg: 'var(--sky-200)',
      ink: 'var(--brown-700)',
      rule: 'var(--brown-700)',
      slot: 'var(--sky-100)'
    },
    cream: {
      bg: 'var(--cream-300)',
      ink: 'var(--brown-700)',
      rule: 'var(--brown-700)',
      slot: 'var(--cream-100)'
    },
    mustard: {
      bg: 'var(--mustard-500)',
      ink: 'var(--navy-900)',
      rule: 'var(--navy-900)',
      slot: 'var(--cream-100)'
    },
    navy: {
      bg: 'var(--navy-900)',
      ink: 'var(--cream-100)',
      rule: 'var(--cream-100)',
      slot: 'var(--navy-700)'
    }
  };
  const t = tones[tone] || tones.sky;
  const s = width / UNIT_W;
  const p1 = 6 * s,
    rule = Math.max(1, 2 * s),
    gap = 3 * s;
  const rx = RX * s,
    ry = RY * s;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      ...style
    }
  }, /*#__PURE__*/React.createElement(Shell, {
    rx: rx,
    ry: ry,
    p: 0,
    style: {
      background: t.bg,
      padding: p1
    }
  }, /*#__PURE__*/React.createElement(Shell, {
    rx: rx,
    ry: ry,
    p: p1,
    style: {
      background: t.rule,
      padding: rule
    }
  }, /*#__PURE__*/React.createElement(Shell, {
    rx: rx,
    ry: ry,
    p: p1 + rule,
    style: {
      background: t.bg,
      padding: gap
    }
  }, /*#__PURE__*/React.createElement(Shell, {
    rx: rx,
    ry: ry,
    p: p1 + rule + gap,
    style: {
      background: t.rule,
      padding: rule
    }
  }, /*#__PURE__*/React.createElement(Shell, {
    rx: rx,
    ry: ry,
    p: p1 + rule * 2 + gap,
    style: {
      background: t.bg,
      color: t.ink,
      textAlign: align,
      padding: `${34 * s}px ${34 * s}px ${32 * s}px`
    }
  }, (photo || photoLabel) && /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      aspectRatio: photoRatio,
      background: t.slot,
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20 * s
    }
  }, photo ? /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: photoAlt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: Math.max(10, 12 * s),
      textTransform: 'uppercase',
      letterSpacing: 'var(--letter-caps)',
      opacity: 0.55
    }
  }, photoLabel)), eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-accent)',
      fontStyle: 'italic',
      fontWeight: 500,
      fontSize: Math.max(13, 22 * s),
      lineHeight: 1.1,
      marginBottom: 10 * s
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: Math.max(18, 34 * s),
      lineHeight: 1,
      textTransform: 'uppercase',
      letterSpacing: 'var(--letter-tight)',
      marginBottom: 18 * s
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: Math.max(10, 12.5 * s),
      lineHeight: 1.65,
      textWrap: 'pretty'
    }
  }, text || children)))))));
}
Object.assign(__ds_scope, { TicketPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/TicketPanel.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function Star({
  filled
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: filled ? 'currentColor' : 'none',
    stroke: "currentColor",
    strokeWidth: "1.5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2l2.9 6.4 7 .6-5.3 4.6 1.6 6.9L12 17l-6.2 3.5 1.6-6.9L2.1 9l7-.6z",
    strokeLinejoin: "round"
  }));
}
function StarRating({
  score = 4.6,
  max = 5,
  showScore = true,
  style
}) {
  const full = Math.round(score);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-display)',
      color: 'var(--navy-900)',
      ...style
    }
  }, showScore && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '1.1rem'
    }
  }, score.toFixed(1)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 2
    }
  }, Array.from({
    length: max
  }).map((_, i) => /*#__PURE__*/React.createElement(Star, {
    key: i,
    filled: i < full
  }))));
}
function Badge({
  tone = 'navy',
  children,
  style
}) {
  const tones = {
    navy: {
      background: 'var(--navy-900)',
      color: 'var(--text-on-inverse)'
    },
    mustard: {
      background: 'var(--mustard-500)',
      color: 'var(--text-on-accent)'
    },
    sky: {
      background: 'var(--sky-200)',
      color: 'var(--navy-900)'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '6px 16px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: '0.8rem',
      letterSpacing: 'var(--letter-caps)',
      textTransform: 'uppercase',
      border: 'var(--border-thin) solid var(--navy-900)',
      ...tones[tone],
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { StarRating, Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const notch = 'polygon(14px 0,calc(100% - 14px) 0,100% 14px,100% calc(100% - 14px),calc(100% - 14px) 100%,14px 100%,0 calc(100% - 14px),0 14px)';
// concave "scooped" end-caps, traced from the brand's button-primary/button-secondary assets (and 80/81.svg side pieces):
// a 16.08-wide cap on a 53.64-tall button with an 8.04 corner bite — cap width and bite are both 0.30 / 0.15 of height,
// so caps are sized from height and the middle stretches; the scoop never distorts at any button width.
const scoopCapLeft = 'M24.001 80H12.001C12.0009 73.4763 6.7946 68.1684 0.310547 68.0039L0 68V11.9785C6.30012 11.6145 11.2969 6.39136 11.2969 0H24.001V80Z';
const scoopCapRight = 'M0 80H12C12.0001 73.4763 17.2064 68.1684 23.6904 68.0039L24 68V11.9785C17.7003 11.614 12.7041 6.39103 12.7041 0H0V80Z';
function ScoopCapsule({
  tint,
  capWidth,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      width: '100%',
      height: '100%',
      color: tint,
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 80",
    preserveAspectRatio: "none",
    style: {
      width: capWidth,
      height: '100%',
      flexShrink: 0,
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: scoopCapLeft,
    fill: "currentColor"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: 'currentColor'
    }
  }), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 80",
    preserveAspectRatio: "none",
    style: {
      width: capWidth,
      height: '100%',
      flexShrink: 0,
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: scoopCapRight,
    fill: "currentColor"
  })));
}
function SolidScoopButton({
  bg,
  color,
  height,
  fontSize,
  capWidth,
  children,
  icon,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'none',
      background: 'transparent',
      padding: 0,
      height,
      minWidth: 200,
      cursor: rest.disabled ? 'not-allowed' : 'pointer',
      opacity: rest.disabled ? 0.5 : 1,
      transition: 'transform .15s ease',
      ...style
    },
    onMouseEnter: e => {
      if (!rest.disabled) e.currentTarget.style.transform = 'translateY(-2px)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translateY(0)';
    }
  }), /*#__PURE__*/React.createElement(ScoopCapsule, {
    tint: bg,
    capWidth: capWidth,
    style: {
      position: 'absolute',
      inset: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-accent)',
      fontStyle: 'italic',
      fontWeight: 500,
      fontSize,
      lineHeight: 1,
      color,
      padding: `0 ${capWidth + 22}px`,
      whiteSpace: 'nowrap'
    }
  }, icon, children));
}
function ScoopButton({
  outline,
  bg,
  color,
  size,
  capWidth = 18,
  children,
  icon,
  ...rest
}) {
  const innerTint = outline ? 'var(--bg-surface)' : bg;
  const labelColor = outline ? 'var(--border-primary)' : color;
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    style: {
      position: 'relative',
      display: 'inline-flex',
      border: 'none',
      background: 'transparent',
      cursor: rest.disabled ? 'not-allowed' : 'pointer',
      opacity: rest.disabled ? 0.5 : 1,
      ...size
    }
  }), /*#__PURE__*/React.createElement(ScoopCapsule, {
    tint: "var(--border-primary)",
    capWidth: capWidth,
    style: {
      position: 'absolute',
      inset: 0
    }
  }), /*#__PURE__*/React.createElement(ScoopCapsule, {
    tint: innerTint,
    capWidth: capWidth * 0.82,
    style: {
      position: 'absolute',
      inset: 'var(--border-thin)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      fontFamily: 'var(--font-body)',
      letterSpacing: 'var(--letter-caps)',
      color: labelColor,
      fontWeight: 700,
      width: '100%',
      ...(size.padding !== undefined ? {
        padding: size.padding
      } : {})
    }
  }, icon, children));
}
function Button({
  variant = 'primary',
  shape = 'scoop',
  size = 'md',
  children,
  icon,
  onClick,
  disabled,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 16px',
      font: 'var(--text-body-sm)'
    },
    md: {
      padding: '13px 26px',
      font: '700 0.95rem/1 var(--font-body)'
    },
    lg: {
      padding: '18px 34px',
      font: '700 1.1rem/1 var(--font-body)'
    }
  };
  const variants = {
    primary: {
      background: 'var(--mustard-500)',
      color: 'var(--text-on-accent)',
      fontStyle: 'italic',
      fontWeight: 700
    },
    navy: {
      background: 'var(--navy-900)',
      color: 'var(--text-on-inverse)',
      fontWeight: 700
    },
    ghost: null
  };
  if (variant === 'ghost') {
    return /*#__PURE__*/React.createElement("button", _extends({
      onClick: disabled ? undefined : onClick,
      disabled: disabled,
      style: {
        background: 'transparent',
        color: 'var(--text-primary)',
        border: 'none',
        cursor: disabled ? 'not-allowed' : 'pointer',
        fontFamily: 'var(--font-body)',
        textDecoration: 'underline',
        textUnderlineOffset: '4px',
        opacity: disabled ? 0.5 : 1,
        ...sizes[size],
        ...style
      }
    }, rest), icon, children);
  }
  if (shape === 'scoop') {
    const heights = {
      sm: 44,
      md: 54,
      lg: 64
    };
    const fonts = {
      sm: '1rem',
      md: '1.2rem',
      lg: '1.45rem'
    };
    return /*#__PURE__*/React.createElement(SolidScoopButton, _extends({
      bg: variants[variant].background,
      color: variants[variant].color,
      height: heights[size],
      fontSize: fonts[size],
      capWidth: Math.round(heights[size] * 0.2998),
      icon: icon,
      onClick: disabled ? undefined : onClick,
      disabled: disabled,
      style: style
    }, rest), children);
  }
  if (shape === 'scoop-filled' || shape === 'scoop-outline') {
    return /*#__PURE__*/React.createElement(ScoopButton, _extends({
      outline: shape === 'scoop-outline',
      bg: variants[variant].background,
      color: variants[variant].color,
      size: {
        minWidth: 120,
        minHeight: size === 'lg' ? 64 : size === 'sm' ? 44 : 54,
        padding: sizes[size].padding
      },
      capWidth: size === 'lg' ? 22 : size === 'sm' ? 14 : 18,
      icon: icon,
      onClick: disabled ? undefined : onClick,
      disabled: disabled,
      style: style
    }, rest), children);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: disabled ? undefined : onClick,
    disabled: disabled,
    style: {
      display: 'inline-flex',
      border: 'none',
      padding: 'var(--border-thick)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      background: 'var(--border-primary)',
      clipPath: notch,
      opacity: disabled ? 0.5 : 1,
      ...style
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.transform = 'translateY(-2px)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translateY(0)';
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      fontFamily: 'var(--font-body)',
      letterSpacing: 'var(--letter-caps)',
      clipPath: notch,
      ...sizes[size],
      ...variants[variant]
    }
  }, icon, children));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/feedback/TestimonialCard.jsx
try { (() => {
function TestimonialCard({
  quote,
  author,
  org,
  score = 5,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-page)',
      padding: '28px 26px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      minHeight: 220,
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.StarRating, {
    score: score,
    max: 5,
    showScore: false,
    style: {
      justifyContent: 'center'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body-md)',
      color: 'var(--text-primary)',
      margin: 0,
      textAlign: 'center'
    }
  }, quote), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: '0.85rem',
      color: 'var(--text-muted)',
      textAlign: 'center'
    }
  }, author, org ? ` - ${org}` : ''));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
const {
  useState
} = React;
function NavBar({
  brand = 'Moscato Pizza',
  links = ['Pizza truck', 'Pasta truck', 'Catering', 'Our story', 'Contact'],
  cta = 'Book a truck',
  onCtaClick
}) {
  const [open, setOpen] = useState(false);
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
      background: 'var(--bg-surface)',
      padding: '14px 28px',
      borderBottom: 'var(--border-thick) solid var(--border-primary)',
      fontFamily: 'var(--font-body)',
      position: 'relative',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.4rem',
      color: 'var(--navy-900)',
      display: 'flex',
      alignItems: 'baseline',
      gap: 6
    }
  }, brand.toUpperCase()), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Menu",
    onClick: () => setOpen(o => !o),
    style: {
      display: 'none',
      background: 'none',
      border: 'none',
      cursor: 'pointer'
    },
    className: "mp-nav-toggle"
  }, "\u2630"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      flexWrap: 'wrap'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      color: 'var(--text-primary)',
      textDecoration: 'none',
      fontWeight: 700,
      fontSize: '0.95rem'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--link-hover)',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--text-primary)'
  }, l))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "sm",
    shape: "scoop-filled",
    onClick: onCtaClick
  }, cta));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Sections.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** @jsx React.createElement */
/** @jsxFrag React.Fragment */

function Placeholder({
  tone = 'sky',
  children,
  style
}) {
  const tones = {
    sky: 'var(--sky-200)',
    mustard: 'var(--mustard-500)',
    navy: 'var(--navy-700)',
    cream: 'var(--cream-300)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: tones[tone],
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-body)',
      fontSize: '0.7rem',
      color: 'var(--navy-900)',
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      textAlign: 'center',
      padding: 8,
      ...style
    }
  }, children);
}
function HeroSection() {
  const {
    LocationPlaque,
    StampBadge,
    PolaroidPhoto,
    CurvedText,
    Button
  } = window.MoscatoPizzaDesignSystem_feab2b;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--cream-200)',
      padding: '56px 48px 90px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.3fr 1fr',
      gap: 32,
      alignItems: 'center',
      maxWidth: 1180,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(PolaroidPhoto, {
    label: "Truck window",
    width: 190,
    rotate: -5
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      marginLeft: 60,
      marginTop: -30
    }
  }, /*#__PURE__*/React.createElement(PolaroidPhoto, {
    label: "The crew",
    width: 160,
    rotate: 4,
    tone: "mustard"
  })), /*#__PURE__*/React.createElement(CurvedText, {
    text: "Fastest truck in Santa Fe!",
    curve: -24,
    width: 200,
    fontSize: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(LocationPlaque, {
    eyebrow: "Reviews",
    score: 4.8,
    title: "Rent a pizza food truck on location",
    stats: ['1,200+ caterings', '320+ pizzas per hour'],
    strip: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--sky-200)',
      border: 'var(--border-thin) solid var(--navy-900)',
      padding: '20px',
      maxWidth: 260,
      fontFamily: 'var(--font-body)',
      fontSize: '0.85rem',
      color: 'var(--navy-900)'
    }
  }, "The best pizza food truck in Santa Fe, with authentic Neapolitan pizzas for parties, catering, and festivals. Fresh daily, made fast.", /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "Check out our trucks"))), /*#__PURE__*/React.createElement(StampBadge, {
    shape: "circle",
    tone: "brown",
    value: "24/7",
    label: "On call",
    size: 120,
    style: {
      alignSelf: 'flex-end'
    }
  }))));
}
function RibbonStrip() {
  const {
    Ribbon
  } = window.MoscatoPizzaDesignSystem_feab2b;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Ribbon, {
    tone: "sky",
    rotate: -0.6
  }, "4.8 score \u2605\u2605\u2605\u2605\u2605 on Google"), /*#__PURE__*/React.createElement(Ribbon, {
    tone: "mustard",
    rotate: 0.6
  }, "Best caterer of the year \xB7 Casilda 2025"), /*#__PURE__*/React.createElement(Ribbon, {
    tone: "cream",
    rotate: -0.4
  }, "#1 Santa Fe food-truck award 2026"));
}
function TestimonialsSection() {
  const {
    TestimonialCard,
    CurvedText
  } = window.MoscatoPizzaDesignSystem_feab2b;
  const items = [{
    author: 'Valentina',
    org: 'Estudio Norte',
    quote: 'Pedimos 200 pizzas para la apertura del gimnasio. Todo salió perfecto y a tiempo.'
  }, {
    author: 'Marco',
    org: 'Bodega Casilda',
    quote: 'Llamamos con tres días de anticipación para un evento de 400 personas. Excelente sabor.'
  }, {
    author: 'Sofía',
    org: 'Cumpleaños',
    quote: 'La masa napolitana con el borde bien tostado fue un éxito con todos los invitados.'
  }, {
    author: 'Diego',
    org: 'Fiesta patronal',
    quote: 'Muy buena comunicación y una atención súper amable durante todo el evento.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--cream-200)',
      padding: '64px 48px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 1,
      background: 'var(--navy-900)'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(TestimonialCard, _extends({
    key: i,
    score: 5
  }, it)))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 60,
      bottom: 20
    }
  }, /*#__PURE__*/React.createElement(CurvedText, {
    text: "Con 4.8 en Google!",
    curve: 18,
    width: 200
  })));
}
function FounderSection() {
  const {
    PolaroidPhoto,
    StampBadge
  } = window.MoscatoPizzaDesignSystem_feab2b;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--navy-900)',
      padding: '72px 48px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 40,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 560,
      margin: '0 auto',
      background: 'var(--sky-200)',
      border: 'var(--border-thick) solid var(--navy-900)',
      borderRadius: 18,
      padding: '32px 36px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-display-lg)',
      color: 'var(--navy-900)',
      marginBottom: 16
    }
  }, "CIAO!"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body-md)',
      color: 'var(--navy-900)',
      margin: '0 0 14px'
    }
  }, "Moscato Pizza naci\xF3 de tres amigos con una pasi\xF3n enorme por la pizza napolitana. Hoy somos tres locales y un food truck recorriendo Casilda y Santa Fe."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body-md)',
      color: 'var(--navy-900)',
      margin: 0
    }
  }, "Masa de 48 horas de fermentaci\xF3n, horno a le\xF1a, y el mismo cuidado desde el primer d\xEDa."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      fontFamily: 'var(--font-script)',
      fontSize: '1.6rem',
      color: 'var(--navy-700)'
    }
  }, "Chef Alejandro")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(PolaroidPhoto, {
    label: "Horno a le\xF1a",
    width: 170,
    rotate: -4,
    tone: "cream"
  }), /*#__PURE__*/React.createElement(StampBadge, {
    shape: "diamond",
    tone: "mustard",
    value: "1200+",
    label: "Catering",
    size: 140
  }), /*#__PURE__*/React.createElement(StampBadge, {
    shape: "octagon",
    tone: "brown",
    value: "4",
    label: "Locales",
    size: 130
  })));
}
function Footer() {
  const {
    Button
  } = window.MoscatoPizzaDesignSystem_feab2b;
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--cream-300)',
      padding: '40px 48px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 20,
      borderTop: 'var(--border-thick) solid var(--navy-900)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.3rem',
      color: 'var(--navy-900)'
    }
  }, "MOSCATO PIZZA"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.85rem',
      color: 'var(--text-muted)'
    }
  }, "Casilda & Rosario, Santa Fe, Argentina"), /*#__PURE__*/React.createElement(Button, {
    variant: "navy",
    size: "sm"
  }, "Reserv\xE1 tu evento"));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.CheckerBar = __ds_scope.CheckerBar;

__ds_ns.CurvedText = __ds_scope.CurvedText;

__ds_ns.LetterCard = __ds_scope.LetterCard;

__ds_ns.LocationPlaque = __ds_scope.LocationPlaque;

__ds_ns.PolaroidPhoto = __ds_scope.PolaroidPhoto;

__ds_ns.PostcardPlaque = __ds_scope.PostcardPlaque;

__ds_ns.Ribbon = __ds_scope.Ribbon;

__ds_ns.ScoopCard = __ds_scope.ScoopCard;

__ds_ns.SpecCard = __ds_scope.SpecCard;

__ds_ns.StampBadge = __ds_scope.StampBadge;

__ds_ns.TicketCard = __ds_scope.TicketCard;

__ds_ns.TicketPanel = __ds_scope.TicketPanel;

__ds_ns.StarRating = __ds_scope.StarRating;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.NavBar = __ds_scope.NavBar;

})();
