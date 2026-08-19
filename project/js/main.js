(function (global) {
  'use strict';
  const NAV_LINKS = [
    { id: 'locales', label: 'Locales' },
    { id: 'truck', label: 'Food Truck' },
    { id: 'historia', label: 'Nosotros' },
    { id: 'menu', label: 'Pizzas & Pasta' },
  ];

  document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const { el, MPNav } = global.MP;
    const s = global.MP.sections;

    root.appendChild(MPNav({ links: NAV_LINKS, onCta: () => global.mpScrollTo('contacto') }));
    root.appendChild(s.HeroSection());
    root.appendChild(s.StorySection());
    root.appendChild(s.TruckSection());
    root.appendChild(s.HowSection());
    root.appendChild(s.AwardsStrip());
    root.appendChild(s.TestimonialsSection());
    root.appendChild(s.MenuSection());
    root.appendChild(s.StoresSection());
    root.appendChild(s.FooterSection());

    document.dispatchEvent(new CustomEvent('mp:ready'));
  });
})(window);
