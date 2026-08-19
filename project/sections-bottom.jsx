/** @jsx React.createElement */

const MP_STEPS = [
  { step:'Paso 1', title:'Pedí el presupuesto', text:'Contanos fecha, lugar y cuánta gente son. Te respondemos en 24 horas con todo cerrado.' },
  { step:'Paso 2', title:'Preparación', text:'Amasamos 72 horas antes: así la masa gana sabor, base finita y borde bien aireado.' },
  { step:'Paso 3', title:'Montaje in situ', text:'Llegamos 1 a 2 horas antes para armar todo. El truck entra donde sea, adentro o afuera.' },
  { step:'Paso 4', title:'¡A comer!', text:'Salen 12 pizzas cada 4 minutos, directo del horno a la mano de cada invitado.' },
];

function HowSection(){
  const { TicketPanel, CheckerBar } = window.MoscatoPizzaDesignSystem_feab2b;
  const trackRef = React.useRef(null);
  const [p, setP] = React.useState(0);
  React.useEffect(() => {
    let raf = 0;
    const read = () => {
      raf = 0;
      const el = trackRef.current; if(!el) return;
      const r = el.getBoundingClientRect();
      const stickyH = el.firstElementChild ? el.firstElementChild.offsetHeight : window.innerHeight;
      const span = Math.max(1, el.offsetHeight - stickyH);
      setP(Math.max(0, Math.min(1, -r.top / span)));
    };
    const onScroll = () => { if(!raf) raf = requestAnimationFrame(read); };
    read();
    window.addEventListener('scroll', onScroll, { passive:true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); if(raf) cancelAnimationFrame(raf); };
  }, []);
  const W = 340, GAP = 22, rot = [-4.2, -1.4, 1.4, 4.2], dy = [30, 2, 2, 24];
  return (
    <section data-screen-label="Cómo funciona" className="mp-how">
      <CheckerBar size="large" color="var(--navy-900)" />
      <div className="mp-how-body mp-grain">
        <div className="mp-how-track" ref={trackRef}>
          <div className="mp-how-sticky">
            <h2 className="mp-how-title">Cómo funciona</h2>
            <div className="mp-how-fan">
              {MP_STEPS.map((s,i) => {
                const d = Math.max(0, Math.min(1, (p - i * .07) / .55));
                const e = d * d * (3 - 2 * d);
                const x = (1 - e) * (2.4 * (W + GAP) - i * (W + GAP) + i * 14);
                return (
                  <div key={s.step} className="mp-how-ticket" style={{ transform:`translate3d(${x}px,${dy[i]*e}px,0) rotate(${rot[i]*e}deg)`, zIndex:4 - i }}>
                    <TicketPanel eyebrow={s.step} title={s.title} text={s.text} tone="sky" width={W} align="center" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mp-how-pizza"><img src="assets/how-medallion.png" alt="" /></div>
      </div>
    </section>
  );
}

function AwardsStrip(){
  const { Ribbon } = window.MoscatoPizzaDesignSystem_feab2b;
  return (
    <div data-screen-label="Premios" className="mp-awards">
      <div className="mp-award-wrap" style={{ transform:'rotate(-1.4deg)', background:'var(--sky-200)' }}><Ribbon tone="sky" rotate={0}>4.8 ★★★★★ en Google</Ribbon></div>
      <div className="mp-award-wrap" style={{ transform:'rotate(1.1deg)', background:'var(--mustard-500)' }}><Ribbon tone="mustard" rotate={0}>Mejor catering del año · Casilda 2025</Ribbon></div>
      <div className="mp-award-wrap" style={{ transform:'rotate(-0.9deg)', background:'var(--cream-300)' }}><Ribbon tone="cream" rotate={0}>#1 Food truck de Santa Fe · 2026</Ribbon></div>
    </div>
  );
}

function TestimonialsSection(){
  const { TestimonialCard } = window.MoscatoPizzaDesignSystem_feab2b;
  const items = [
    { author:'Valentina', org:'Casamiento en Los Molinos', quote:'El truck llegó dos horas antes y sirvió 180 pizzas sin que se enfríe ninguna. Los invitados todavía lo nombran.' },
    { author:'Marco', org:'Bodega en San Lorenzo', quote:'Evento de 400 personas con tres días de aviso. Salió perfecto y la fugazzetta fue lo primero en desaparecer.' },
    { author:'Sofía', org:'Cumple de 15 · Casilda', quote:'La masa napolitana con el borde bien tostado fue un éxito. Hasta la nonna aprobó, y eso es decir mucho.' },
    { author:'Diego', org:'Empresa agro · Rafaela', quote:'Comunicación clarísima y atención súper amable durante todo el evento. Ya reservamos la fecha del año que viene.' },
  ];
  return (
    <section data-screen-label="Testimonios" className="mp-testimonials">
      <div className="mp-testi-script mp-hand">Wheely good<br />pizzas</div>
      <div className="mp-testi-grid">
        {items.map((it,i) => <div key={i} className="mp-testi-cell" style={{ marginTop:[0,30,52,18][i] }}><TestimonialCard score={5} {...it} /></div>)}
      </div>
      <div className="mp-testi-script-b mp-hand">¡Con un 4.8<br />en Google!</div>
    </section>
  );
}

function MenuRow({ name, desc, price }){
  return (
    <div className="mp-menu-row">
      <div className="mp-menu-line">
        <span className="mp-menu-name">{name}</span>
        <span className="mp-menu-dots"></span>
        <span className="mp-menu-price">{price}</span>
      </div>
      <div className="mp-menu-desc">{desc}</div>
    </div>
  );
}

function MenuSection(){
  const { LetterCard, Button } = window.MoscatoPizzaDesignSystem_feab2b;
  const pizza = React.useRef(null);
  React.useEffect(() => {
    const spin = () => {
      const el = pizza.current; if(!el) return;
      const r = el.getBoundingClientRect();
      const raw = (window.innerHeight - r.top) / (window.innerHeight + r.height);
      const p = Math.min(1, Math.max(0, raw));
      el.style.transform = `translateX(-50%) rotate(${(p * 80 - 26).toFixed(2)}deg)`;
    };
    spin();
    window.addEventListener('scroll', spin, { passive:true });
    window.addEventListener('resize', spin);
    window.addEventListener('load', spin);
    const t = setTimeout(spin, 400);
    return () => { window.removeEventListener('scroll', spin); window.removeEventListener('resize', spin); window.removeEventListener('load', spin); clearTimeout(t); };
  }, []);
  return (
    <section id="menu" data-screen-label="Il Menù" className="mp-menu mp-grain">
      <div className="mp-arch">
        <img src="assets/arch-ciao-pizza-pasta.svg" alt="Ciao! Pizza &amp; Pasta" className="mp-arch-svg" />
        <img src="assets/pizza-medallion-sky.png" alt="Pizza napolitana y pasta recién servidas" className="mp-arch-pizza" ref={pizza} />
        <div className="mp-arch-card mp-arch-card--l">
          <h3>Pizza</h3>
          <p>Napolitana de masa 48 horas, horno a leña y productores santafesinos. En el local, para llevar o en tu evento desde 50 personas.</p>
          <Button variant="navy" size="sm" onClick={()=>window.mpScrollTo('carta')}>Ver la carta</Button>
          <Button variant="primary" size="sm" onClick={()=>window.mpScrollTo('truck')}>Más sobre pizza</Button>
        </div>
        <div className="mp-arch-card mp-arch-card--r">
          <h3>Pasta</h3>
          <p>Pasta fresca amasada cada mañana, salsas lentas y rellenos de la nonna. También sale del truck para tu evento.</p>
          <Button variant="navy" size="sm" onClick={()=>window.mpScrollTo('carta')}>Ver la carta</Button>
          <Button variant="primary" size="sm" onClick={()=>window.mpScrollTo('truck')}>Más sobre pasta</Button>
        </div>
      </div>
      <div id="carta" className="mp-menu-grid">
        <LetterCard title="Pizze" tone="cream" width={520} photoRatio="auto" photoLabel="" signature="Chef Alejandro">
          <div className="mp-menu-list">
            <MenuRow name="Margherita DOP" desc="san marzano, fior di latte, albahaca fresca" price="$12.500" />
            <MenuRow name="Moscato Especial" desc="mortadela, stracciatella, pistacho tostado" price="$14.900" />
            <MenuRow name="Diavola" desc="salame picante, miel de ají, provolone" price="$14.200" />
            <MenuRow name="Fugazzetta Santafesina" desc="cebolla dorada, provolone, orégano de campo" price="$13.800" />
            <MenuRow name="Quattro Formaggi" desc="provolone, azul, parmesano, fior di latte" price="$14.400" />
          </div>
        </LetterCard>
        <LetterCard title="Paste" tone="blue" width={520} photoPosition="none" signature="La Nonna">
          <div className="mp-menu-list">
            <MenuRow name="Tallarines al Pesto" desc="albahaca, parmesano, nueces del litoral" price="$11.900" />
            <MenuRow name="Sorrentinos" desc="jamón y ricota, salsa de tomates asados" price="$13.400" />
            <MenuRow name="Ñoquis al Filetto" desc="papa andina, filetto con albahaca" price="$11.500" />
            <MenuRow name="Lasagna della Nonna" desc="bolognesa lenta, bechamel, tres quesos" price="$14.600" />
            <MenuRow name="Ravón de Osobuco" desc="braseado ocho horas, manteca de salvia" price="$15.200" />
          </div>
        </LetterCard>
      </div>
      <div className="mp-menu-foot">
        <span>Precios de referencia — la carta completa te espera en los locales.</span>
        <div style={{ transform:'rotate(-3deg)' }}><StitchScript lines={['¡Mangia, mangia!']} size={30} /></div>
      </div>
    </section>
  );
}

function StoresSection(){
  const { Button, PolaroidPhoto, CheckerBar } = window.MoscatoPizzaDesignSystem_feab2b;
  return (
    <section id="locales" data-screen-label="Locales" className="mp-stores">
      <img src="assets/stores-bg.png" alt="" className="mp-stores-bg" />
      <div className="mp-stores-checker"><CheckerBar size="small" color="var(--cream-100)" /></div>
      <div className="mp-stores-inner">
        <div className="mp-loc-collage">
          <div className="mp-loc-pola mp-loc-pola--a"><PolaroidPhoto src="moscato-foodt-otro-mt0026z5-n0ce.png" alt="Nuestro pizzaiolo en el local" width={228} rotate={-4} caption="" /></div>
          <div className="mp-loc-pola mp-loc-pola--b"><PolaroidPhoto src="boglione-aleman-mt0016ad-k7up.png" alt="Clientes comiendo su porción en el local" width={236} rotate={3} caption="" /></div>
          <div className="mp-loc-pola mp-loc-pola--c"><PolaroidPhoto src="posible-pasta-mt000jef-eole.jpg" alt="Fachada iluminada de Moscato Pizza" width={240} rotate={-2} caption="" /></div>
          <div className="mp-loc-stat"><b>2</b><span>locales en la ciudad</span></div>
        </div>
        <div className="mp-loc-right">
          <div className="mp-loc-script"><StitchScript lines={['Te esperamos','en Casilda']} size={30} tilt={[-2,1]} offsets={[0,16]} /></div>
          <img src="assets/h2-placa.svg" alt="Más cerca de lo que te imaginas — 3000+ clientes · 480+ pizzas p/ hora" className="mp-loc-placa" />
          <div className="mp-loc-card">
            <h3>¿Venís a comer con nosotros?</h3>
            <p>Bv. Lisandro de la Torre 1580 · martes a domingo 12–23h<br />San Martín 2340 · miércoles a domingo 18–24h</p>
            <Button variant="primary" size="lg" onClick={()=>window.mpScrollTo('contacto')}>Cómo llegar</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function FooterSection(){
  const { Button, CheckerBar } = window.MoscatoPizzaDesignSystem_feab2b;
  return (
    <footer id="contacto" data-screen-label="Contacto">
      <CheckerBar size="small" color="var(--navy-900)" />
      <div className="mp-foot mp-grain">
        <div className="mp-foot-inner">
          <div className="mp-foot-cta">
            <h2>¿Pizza en tu evento?</h2>
            <Button variant="primary" size="lg">Escribinos hoy</Button>
          </div>
          <div className="mp-foot-cols">
            <img src="assets/logo-stacked-cream.png" alt="Moscato Pizza" width="150" />
            <div><h3>Locales</h3><p>Bv. Lisandro de la Torre 1580 · Casilda</p><p>San Martín 2340 · Casilda</p></div>
            <div><h3>Food truck</h3><p>Toda la provincia de Santa Fe</p><p>Reservas con 72 hs de anticipación</p></div>
            <div><h3>Contacto</h3><p>hola@moscatopizza.com.ar</p><p>+54 3464 000 000</p><p>@moscato.pizza</p></div>
          </div>
        </div>
      </div>
      <div className="mp-foot-legal">
        <span>© 2026 Moscato Pizza · Casilda, Santa Fe, Argentina</span>
        <span>Fatto a mano, con amore.</span>
      </div>
    </footer>
  );
}

Object.assign(window, { HowSection, AwardsStrip, TestimonialsSection, MenuSection, StoresSection, FooterSection });
