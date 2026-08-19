(function (global) {
  'use strict';
  const { el, ScoopPanel } = global.MP;

  global.mpScrollTo = function (id) {
    const target = document.getElementById(id);
    if (target) window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 104, behavior: 'smooth' });
  };

  function MPNav({ links = [], onCta }) {
    let open = false;
    const go = (id) => { open = false; renderSheet(); global.mpScrollTo(id); };

    const logo = () => el('img', { src: 'assets/logo-wordmark-trim.png', alt: 'Moscato Pizza', class: 'mp-nav-logo' });

    const desktopRow = el('div', { class: 'mp-nav-row mp-nav-desktop' },
      ScoopPanel({
        tint: 'var(--cream-100)', style: 'flex:1;min-width:0',
        children: [
          logo(),
          el('nav', { class: 'mp-nav-links' }, links.map(l =>
            el('a', { href: '#' + l.id, onclick: (e) => { e.preventDefault(); go(l.id); } }, l.label)
          )),
        ],
      }),
      ScoopPanel({
        tint: 'var(--mustard-500)', style: 'width:250px;cursor:pointer', onClick: onCta,
        children: el('span', { class: 'mp-nav-cta' }, 'Contacto'),
      })
    );

    const mobileCtaLabel = el('span', { class: 'mp-nav-cta' }, 'Menú');
    const mobileToggle = ScoopPanel({
      tint: 'var(--mustard-500)', height: 60, style: 'flex:0 0 auto;cursor:pointer',
      onClick: () => { open = !open; renderSheet(); },
      children: mobileCtaLabel,
    });
    const mobileRow = el('div', { class: 'mp-nav-row mp-nav-mobile' },
      ScoopPanel({ tint: 'var(--cream-100)', height: 60, center: true, style: 'flex:1;min-width:0', children: logo() }),
      mobileToggle
    );

    const sheetSlot = el('div');
    function renderSheet() {
      mobileCtaLabel.textContent = open ? 'Cerrar' : 'Menú';
      sheetSlot.innerHTML = '';
      if (open) {
        sheetSlot.appendChild(el('div', { class: 'mp-nav-sheet' },
          links.map(l => el('a', { href: '#' + l.id, onclick: (e) => { e.preventDefault(); go(l.id); } }, l.label)),
          el('a', { href: '#contacto', class: 'mp-nav-sheet-cta', onclick: (e) => { e.preventDefault(); open = false; renderSheet(); if (onCta) onCta(); } }, 'Contacto')
        ));
      }
    }

    return el('div', { class: 'mp-nav-wrap' }, desktopRow, mobileRow, sheetSlot);
  }

  global.MP.MPNav = MPNav;
})(window);
