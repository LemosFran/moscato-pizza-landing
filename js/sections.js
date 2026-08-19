(function (global) {
  'use strict';
  const { el, Button, PolaroidPhoto, TicketCard, LetterCard, TicketPanel, CheckerBar, Ribbon, TestimonialCard, ShapeStat, StitchScript } = global.MP;

  // ---------- Hero ----------
  function HeroSection() {
    const section = el('section', { 'data-screen-label': 'Hero', class: 'mp-hero mp-grain' },
      el('div', { class: 'mp-hero-photo' }, el('img', { src: 'assets/hero-truck-crew.png', alt: 'El equipo de Moscato Pizza en la ventanilla del food truck' })),
      el('div', { class: 'mp-hero-collage' },
        el('div', { class: 'mp-hero-left' },
          el('div', { class: 'mp-hero-pola-a' }, PolaroidPhoto({ src: 'assets/eating-slice-boxes.png', alt: 'Comiendo una porción sobre las cajas Moscato', width: 230, rotate: -3, caption: '' })),
          el('div', { class: 'mp-hero-pola-b' }, PolaroidPhoto({ src: 'assets/pizzaiolo-holding-pizza.png', alt: 'Pizzaiolo mostrando una pizza recién salida del horno', width: 265, rotate: 3, caption: '' })),
          el('div', { class: 'mp-hero-script' }, StitchScript({ lines: ['El food truck', 'más rápido', 'de la provincia'], size: 38, tilt: [-1, 1, -1], offsets: [0, 18, 34] }))
        ),
        el('div', { class: 'mp-hero-center' },
          el('img', {
            src: 'assets/h1-container-msv73e3a-eea6.svg',
            alt: 'Reseñas ★★★★☆ 4.6 — Simplemente un foodtruck super italiano — 3000+ clientes · 480+ pizzas p/ mes',
            class: 'mp-hero-plaque', width: '487', height: '264',
          })
        ),
        el('div', { class: 'mp-hero-right' },
          TicketCard({ width: 290, tone: 'sky', text: 'Desde 2017 moviendo nuestros foodtrucks y llenando de pizzas & pasta toda Santa Fe, desde Casilda como una tradición italiana legada de nuestros ancestros.', ctaLabel: 'Ver Food Trucks', onCtaClick: () => global.mpScrollTo('truck') }),
          el('img', { src: 'assets/pizza-medallion-brown.png', alt: '', class: 'mp-hero-medallion' })
        )
      )
    );
    return section;
  }

  // ---------- Story ----------
  function StorySection() {
    return el('section', { id: 'historia', 'data-screen-label': 'Nuestra Historia', class: 'mp-grain mp-story' },
      el('img', { src: 'assets/pizza-medallion-brown.png', alt: '', class: 'mp-story-medallion' }),
      el('div', { class: 'mp-story-inner' },
        el('div', { class: 'mp-story-letter' },
          LetterCard({
            title: '¡Ciao!', width: 520, tone: 'blue', signature: 'Chef Alejandro', photoRatio: 'auto', photoLabel: '',
            paragraphs: [
              'Moscato nació en 2017 en una esquina de Casilda: un horno prestado, tres amigos y la idea fija de que la napolitana de verdad también se hace acá. La tradición viene de familia; la velocidad la aprendimos en la calle.',
              'Hoy somos dos locales y un food truck que cruza la provincia. Nuestros hornos Cuppone nos dejan sacar 12 pizzas cada 4 minutos sin resignar nada: masa de 48 horas, borde alto y bien tostado, ingredientes de productores santafesinos.',
              'Nos llevamos un pedazo de Italia a tu evento, fiesta o casamiento — vos ponés la fecha, nosotros el fuego.',
            ],
          })
        ),
        el('div', { class: 'mp-story-collage' },
          el('div', { class: 'mp-story-pola-a' }, PolaroidPhoto({ src: 'assets/hero-truck-crew.png', alt: 'El food truck de Moscato en un evento', width: 250, rotate: -5, caption: '' })),
          el('div', { class: 'mp-story-pola-b' }, PolaroidPhoto({ src: 'assets/chef-portrait.png', alt: 'Nuestro pizzaiolo en plena tanda', width: 215, rotate: 4, caption: '' })),
          el('div', { class: 'mp-story-pola-c' }, PolaroidPhoto({ src: 'assets/eating-slice-boxes.png', alt: 'Clientas disfrutando su porción en un festival', width: 245, rotate: 3, caption: '¡Ciao amici!' })),
          el('div', { class: 'mp-story-badge-a' }, ShapeStat({ shape: 'rombo', value: '3000+', label: 'Caterings', size: 215 })),
          el('div', { class: 'mp-story-badge-b' }, ShapeStat({ shape: 'many', value: '1250+', label: 'Festivales', size: 205 }))
        )
      )
    );
  }

  // ---------- Trucks ----------
  const MP_TRUCKS = [
    { title: 'Il Capo', photo: 'assets/hero-truck-crew.png', alt: 'Food truck Il Capo en un evento', stats: [{ value: '480', label: 'pizzas por hora' }, { value: '7 x 4M', label: 'medidas del truck' }] },
    { title: 'La Nonna', photo: 'assets/truck-moscato-fascia.png', photoPos: '50% 30%', alt: 'Truck La Nonna con el cartel Moscato Pizza iluminado', stats: [{ value: '320', label: 'pizzas por hora' }, { value: '6,5 x 4M', label: 'medidas del truck' }] },
    { title: 'Il Piccolo', photo: 'assets/eating-slice-boxes.png', photoPos: '50% 2%', alt: 'Clientes comiendo porciones junto al truck Il Piccolo', stats: [{ value: '275', label: 'pizzas por hora' }, { value: '7 x 2,5M', label: 'medidas del truck' }] },
    { title: 'La Pasta', photo: 'assets/pasta-bowl.jpg', photoPos: '50% 62%', alt: 'Plato de pasta con rúcula y queso rallado frente al truck', stats: [{ value: '300', label: 'platos por hora' }, { value: '5 x 2,5M', label: 'medidas del truck' }] },
  ];

  function TruckCard({ title, photo, alt, photoLabel, photoPos, stats = [], ctaLabel = 'Más sobre este truck', onCtaClick }) {
    return el('article', { class: 'mp-tcard' },
      el('div', { class: 'mp-tcard-body' },
        el('h3', { class: 'mp-tcard-title' }, title),
        el('div', { class: 'mp-tcard-frame' },
          el('div', { class: 'mp-tcard-mat' },
            el('div', { class: 'mp-tcard-photo' },
              photo
                ? el('img', { src: photo, alt: alt || title, style: photoPos ? `--photo-pos:${photoPos}` : '' })
                : el('span', { class: 'mp-tcard-ph' }, photoLabel || 'Foto del truck')
            )
          ),
          el('div', { class: 'mp-tcard-checker', 'aria-hidden': 'true' })
        ),
        el('div', { class: 'mp-tcard-stats' }, stats.map(s =>
          el('div', { class: 'mp-tcard-stat' },
            el('span', { class: 'mp-tcard-stat-value' }, s.value),
            el('span', { class: 'mp-tcard-stat-label' }, s.label)
          )
        )),
        el('div', { class: 'mp-tcard-cta' }, Button({ variant: 'navy', size: 'sm', onClick: onCtaClick, style: 'width:100%' }, ctaLabel))
      )
    );
  }

  function TruckSection() {
    const rail = el('div', { class: 'mp-rail' }, MP_TRUCKS.map((t, i) =>
      el('div', { class: 'mp-rail-item', style: `transform:rotate(${[-1.2, 0.9, -0.7, 1.1][i % 4]}deg)` },
        TruckCard({ title: t.title, photo: t.photo, alt: t.alt, photoLabel: t.photoLabel, photoPos: t.photoPos, stats: t.stats, onCtaClick: () => global.mpScrollTo('contacto') })
      )
    ));
    const nudge = (dir) => rail.scrollBy({ left: dir * 360, behavior: 'smooth' });
    return el('section', { id: 'truck', 'data-screen-label': 'Food Truck', class: 'mp-truck mp-grain' },
      el('div', { class: 'mp-truck-head' },
        el('div', {},
          el('h2', { class: 'mp-truck-title' }, '¿Reservás nuestro food truck?'),
          el('p', { class: 'mp-truck-copy' }, '¿Fiesta de empresa, catering o festival? ¿Y buscás la napolitana más rica de la provincia? Mandanos una consulta sin compromiso: te contestamos dentro de las 24 horas.')
        ),
        el('div', { class: 'mp-truck-cta' }, Button({ variant: 'primary', size: 'lg', onClick: () => global.mpScrollTo('contacto') }, 'Reservá un food truck')),
        el('div', { class: 'mp-truck-script' }, StitchScript({ lines: ['El food truck', 'más rápido', 'de la provincia'], size: 38, tilt: [-1, 1, -1], offsets: [0, 18, 34] })),
        el('div', { class: 'mp-truck-arrows' },
          el('button', { 'aria-label': 'Anterior', onclick: () => nudge(-1) }, '←'),
          el('button', { 'aria-label': 'Siguiente', onclick: () => nudge(1) }, '→')
        )
      ),
      el('div', { class: 'mp-rail-wrap' },
        el('img', { src: 'assets/pizza-medallion-brown.png', alt: '', class: 'mp-truck-medallion' }),
        rail,
        el('img', { src: 'assets/hand-kiss.png', alt: '', class: 'mp-truck-hand' })
      )
    );
  }

  // ---------- How it works ----------
  const MP_STEPS = [
    { step: 'Paso 1', title: 'Pedí el presupuesto', text: 'Contanos fecha, lugar y cuánta gente son. Te respondemos en 24 horas con todo cerrado.' },
    { step: 'Paso 2', title: 'Preparación', text: 'Amasamos 72 horas antes: así la masa gana sabor, base finita y borde bien aireado.' },
    { step: 'Paso 3', title: 'Montaje en sitio', text: 'Llegamos 1 a 2 horas antes para armar todo. El truck entra donde sea, adentro o afuera.' },
    { step: 'Paso 4', title: '¡A comer!', text: 'Salen 12 pizzas cada 4 minutos, directo del horno a la mano de cada invitado.' },
  ];

  function HowSection() {
    const W = 340, GAP = 22, rot = [-4.2, -1.4, 1.4, 4.2], dy = [30, 2, 2, 24];
    const ticketEls = MP_STEPS.map((s) => el('div', { class: 'mp-how-ticket' }, TicketPanel({ eyebrow: s.step, title: s.title, text: s.text, tone: 'sky', width: W, align: 'center' })));
    const fan = el('div', { class: 'mp-how-fan' }, ticketEls);
    const track = el('div', { class: 'mp-how-track' },
      el('div', { class: 'mp-how-sticky' },
        el('h2', { class: 'mp-how-title' }, 'Cómo funciona'),
        fan
      )
    );

    let raf = 0;
    function read() {
      raf = 0;
      const r = track.getBoundingClientRect();
      const stickyH = track.firstElementChild ? track.firstElementChild.offsetHeight : window.innerHeight;
      const span = Math.max(1, track.offsetHeight - stickyH);
      const p = Math.max(0, Math.min(1, -r.top / span));
      MP_STEPS.forEach((s, i) => {
        const d = Math.max(0, Math.min(1, (p - i * .07) / .55));
        const e = d * d * (3 - 2 * d);
        const x = (1 - e) * (2.4 * (W + GAP) - i * (W + GAP) + i * 14);
        ticketEls[i].style.transform = `translate3d(${x}px,${dy[i] * e}px,0) rotate(${rot[i] * e}deg)`;
        ticketEls[i].style.zIndex = 4 - i;
      });
    }
    function onScroll() { if (!raf) raf = requestAnimationFrame(read); }
    global.addEventListener('scroll', onScroll, { passive: true });
    global.addEventListener('resize', onScroll);
    global.addEventListener('load', read);
    setTimeout(read, 0);

    return el('section', { 'data-screen-label': 'Cómo funciona', class: 'mp-how' },
      CheckerBar({ size: 'large', color: 'var(--navy-900)' }),
      el('div', { class: 'mp-how-body mp-grain' },
        track,
        el('div', { class: 'mp-how-pizza' }, el('img', { src: 'assets/how-medallion.png', alt: '' }))
      )
    );
  }

  // ---------- Awards ----------
  function AwardsStrip() {
    return el('div', { 'data-screen-label': 'Premios', class: 'mp-awards' },
      el('div', { class: 'mp-award-wrap', style: 'transform:rotate(-1.4deg);background:var(--sky-200)' }, Ribbon({ tone: 'sky', rotate: 0 }, '4.8 ★★★★★ en Google')),
      el('div', { class: 'mp-award-wrap', style: 'transform:rotate(1.1deg);background:var(--mustard-500)' }, Ribbon({ tone: 'mustard', rotate: 0 }, 'Mejor catering del año · Casilda 2025')),
      el('div', { class: 'mp-award-wrap', style: 'transform:rotate(-0.9deg);background:var(--cream-300)' }, Ribbon({ tone: 'cream', rotate: 0 }, '#1 Food truck de Santa Fe · 2026'))
    );
  }

  // ---------- Testimonials ----------
  function TestimonialsSection() {
    const items = [
      { author: 'Valentina', org: 'Casamiento en Los Molinos', quote: 'El truck llegó dos horas antes y sirvió 180 pizzas sin que se enfríe ninguna. Los invitados todavía lo nombran.' },
      { author: 'Marco', org: 'Bodega en San Lorenzo', quote: 'Evento de 400 personas con tres días de aviso. Salió perfecto y la fugazzetta fue lo primero en desaparecer.' },
      { author: 'Sofía', org: 'Cumple de 15 · Casilda', quote: 'La masa napolitana con el borde bien tostado fue un éxito. Hasta la nonna aprobó, y eso es decir mucho.' },
      { author: 'Diego', org: 'Empresa agro · Rafaela', quote: 'Comunicación clarísima y atención súper amable durante todo el evento. Ya reservamos la fecha del año que viene.' },
    ];
    const marginTop = [0, 30, 52, 18];
    return el('section', { 'data-screen-label': 'Testimonios', class: 'mp-testimonials' },
      el('div', { class: 'mp-testi-script mp-hand' }, 'Wheely good', el('br'), 'pizzas'),
      el('div', { class: 'mp-testi-grid' }, items.map((it, i) =>
        el('div', { class: 'mp-testi-cell', style: `margin-top:${marginTop[i]}px` }, TestimonialCard({ score: 5, ...it }))
      )),
      el('div', { class: 'mp-testi-script-b mp-hand' }, '¡Con un 4.8', el('br'), 'en Google!')
    );
  }

  // ---------- Menu ----------
  function MenuRow({ name, desc, price }) {
    return el('div', { class: 'mp-menu-row' },
      el('div', { class: 'mp-menu-line' },
        el('span', { class: 'mp-menu-name' }, name),
        el('span', { class: 'mp-menu-dots' }),
        el('span', { class: 'mp-menu-price' }, price)
      ),
      el('div', { class: 'mp-menu-desc' }, desc)
    );
  }

  function MenuSection() {
    const pizzaImg = el('img', { src: 'assets/pizza-medallion-sky.png', alt: 'Pizza napolitana y pasta recién servidas', class: 'mp-arch-pizza' });

    function spin() {
      const r = pizzaImg.getBoundingClientRect();
      const raw = (window.innerHeight - r.top) / (window.innerHeight + r.height);
      const p = Math.min(1, Math.max(0, raw));
      pizzaImg.style.transform = `translateX(-50%) rotate(${(p * 80 - 26).toFixed(2)}deg)`;
    }
    global.addEventListener('scroll', spin, { passive: true });
    global.addEventListener('resize', spin);
    global.addEventListener('load', spin);
    setTimeout(spin, 400);
    setTimeout(spin, 0);

    return el('section', { id: 'menu', 'data-screen-label': 'Il Menù', class: 'mp-menu mp-grain' },
      el('div', { class: 'mp-arch' },
        el('img', { src: 'assets/arch-ciao-pizza-pasta.svg', alt: 'Ciao! Pizza & Pasta', class: 'mp-arch-svg' }),
        pizzaImg,
        el('div', { class: 'mp-arch-card mp-arch-card--l' },
          el('h3', {}, 'Pizza'),
          el('p', {}, 'Napolitana de masa 48 horas, horno a leña y productores santafesinos. En el local, para llevar o en tu evento desde 50 personas.'),
          Button({ variant: 'navy', size: 'sm', onClick: () => global.mpScrollTo('carta') }, 'Ver la carta'),
          Button({ variant: 'primary', size: 'sm', onClick: () => global.mpScrollTo('truck') }, 'Más sobre pizza')
        ),
        el('div', { class: 'mp-arch-card mp-arch-card--r' },
          el('h3', {}, 'Pasta'),
          el('p', {}, 'Pasta fresca amasada cada mañana, salsas lentas y rellenos de la nonna. También sale del truck para tu evento.'),
          Button({ variant: 'navy', size: 'sm', onClick: () => global.mpScrollTo('carta') }, 'Ver la carta'),
          Button({ variant: 'primary', size: 'sm', onClick: () => global.mpScrollTo('truck') }, 'Más sobre pasta')
        )
      ),
      el('div', { id: 'carta', class: 'mp-menu-grid' },
        LetterCard({
          title: 'Pizze', tone: 'cream', width: 520, photoRatio: 'auto', photoLabel: '', signature: 'Chef Alejandro', signatureImage: 'assets/firma-chef.svg',
          children: el('div', { class: 'mp-menu-list' },
            MenuRow({ name: 'Margherita DOP', desc: 'san marzano, fior di latte, albahaca fresca', price: '$12.500' }),
            MenuRow({ name: 'Moscato Especial', desc: 'mortadela, stracciatella, pistacho tostado', price: '$14.900' }),
            MenuRow({ name: 'Diavola', desc: 'salame picante, miel de ají, provolone', price: '$14.200' }),
            MenuRow({ name: 'Fugazzetta Santafesina', desc: 'cebolla dorada, provolone, orégano de campo', price: '$13.800' }),
            MenuRow({ name: 'Quattro Formaggi', desc: 'provolone, azul, parmesano, fior di latte', price: '$14.400' })
          ),
        }),
        LetterCard({
          title: 'Paste', tone: 'blue', width: 520, photoPosition: 'none', signature: 'Chef Alejandro', signatureImage: 'assets/firma-chef.svg',
          children: el('div', { class: 'mp-menu-list' },
            MenuRow({ name: 'Tallarines al Pesto', desc: 'albahaca, parmesano, nueces del litoral', price: '$11.900' }),
            MenuRow({ name: 'Sorrentinos', desc: 'jamón y ricota, salsa de tomates asados', price: '$13.400' }),
            MenuRow({ name: 'Ñoquis al Filetto', desc: 'papa andina, filetto con albahaca', price: '$11.500' }),
            MenuRow({ name: 'Lasagna della Nonna', desc: 'bolognesa lenta, bechamel, tres quesos', price: '$14.600' }),
            MenuRow({ name: 'Ravón de Osobuco', desc: 'braseado ocho horas, manteca de salvia', price: '$15.200' })
          ),
        })
      ),
      el('div', { class: 'mp-menu-foot' },
        el('span', {}, 'Precios de referencia — la carta completa te espera en los locales.'),
        el('div', { style: 'transform:rotate(-3deg)' }, StitchScript({ lines: ['¡Mangia, mangia!'], size: 30 }))
      )
    );
  }

  // ---------- Stores ----------
  function StoresSection() {
    return el('section', { id: 'locales', 'data-screen-label': 'Locales', class: 'mp-stores' },
      el('img', { src: 'assets/stores-bg.png', alt: '', class: 'mp-stores-bg' }),
      el('div', { class: 'mp-stores-checker' }, CheckerBar({ size: 'small', color: 'var(--cream-100)' })),
      el('div', { class: 'mp-stores-inner' },
        el('div', { class: 'mp-loc-collage' },
          el('div', { class: 'mp-loc-pola mp-loc-pola--a' }, PolaroidPhoto({ src: 'assets/moscato-foodt-otro-mt0026z5-n0ce.png', alt: 'Nuestro pizzaiolo en el local', width: 228, rotate: -4, caption: '' })),
          el('div', { class: 'mp-loc-pola mp-loc-pola--b' }, PolaroidPhoto({ src: 'assets/boglione-aleman-mt0016ad-k7up.png', alt: 'Clientes comiendo su porción en el local', width: 236, rotate: 3, caption: '' })),
          el('div', { class: 'mp-loc-pola mp-loc-pola--c' }, PolaroidPhoto({ src: 'assets/posible-pasta-mt000jef-eole.jpg', alt: 'Fachada iluminada de Moscato Pizza', width: 240, rotate: -2, caption: '' })),
          el('div', { class: 'mp-loc-stat' }, el('b', {}, '2'), el('span', {}, 'locales en la ciudad'))
        ),
        el('div', { class: 'mp-loc-right' },
          el('div', { class: 'mp-loc-script' }, StitchScript({ lines: ['Te esperamos', 'en Casilda'], size: 30, tilt: [-2, 1], offsets: [0, 16] })),
          el('img', { src: 'assets/h2-placa.svg', alt: 'Más cerca de lo que te imaginas — 3000+ clientes · 480+ pizzas p/ hora', class: 'mp-loc-placa' }),
          el('div', { class: 'mp-loc-card' },
            el('h3', {}, '¿Venís a comer con nosotros?'),
            el('p', {}, 'Bv. Lisandro de la Torre 1580 · martes a domingo 12–23h', el('br'), 'San Martín 2340 · miércoles a domingo 18–24h'),
            Button({
              variant: 'primary',
              size: 'lg',
              onClick: () => global.open('https://www.google.com/maps/search/?api=1&query=Moscato%20Pizza%20Casilda', '_blank', 'noopener'),
              ariaLabel: 'Abrir Moscato Pizza en Google Maps',
            }, 'Cómo llegar')
          )
        )
      )
    );
  }

  // ---------- Footer ----------
  function FooterSection() {
    return el('footer', { id: 'contacto', 'data-screen-label': 'Contacto' },
      CheckerBar({ size: 'small', color: 'var(--navy-900)' }),
      el('div', { class: 'mp-foot mp-grain' },
        el('div', { class: 'mp-foot-inner' },
          el('div', { class: 'mp-foot-cta' },
            el('h2', {}, '¿Pizza en tu evento?'),
            Button({ variant: 'primary', size: 'lg' }, 'Escribinos hoy')
          ),
          el('div', { class: 'mp-foot-cols' },
            el('img', { src: 'assets/logo-stacked-cream.png', alt: 'Moscato Pizza', width: '150' }),
            el('div', {}, el('h3', {}, 'Locales'), el('p', {}, 'Bv. Lisandro de la Torre 1580 · Casilda'), el('p', {}, 'San Martín 2340 · Casilda')),
            el('div', {}, el('h3', {}, 'Food truck'), el('p', {}, 'Toda la provincia de Santa Fe'), el('p', {}, 'Reservas con 72 hs de anticipación')),
            el('div', {}, el('h3', {}, 'Contacto'), el('p', {}, 'hola@moscatopizza.com.ar'), el('p', {}, '+54 3464 000 000'), el('p', {}, '@moscato.pizza'))
          )
        )
      ),
      el('div', { class: 'mp-foot-legal' },
        el('span', {}, '© 2026 Moscato Pizza · Casilda, Santa Fe, Argentina'),
        el('span', {}, 'Fatto a mano, con amore.')
      )
    );
  }

  global.MP.sections = { HeroSection, StorySection, TruckSection, HowSection, AwardsStrip, TestimonialsSection, MenuSection, StoresSection, FooterSection };
})(window);
