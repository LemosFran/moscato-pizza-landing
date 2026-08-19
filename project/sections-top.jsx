/** @jsx React.createElement */
window.mpScrollTo = function(id){ const el = document.getElementById(id); if(el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 104, behavior: 'smooth' }); };

function HeroSection(){
  const { PolaroidPhoto, TicketCard } = window.MoscatoPizzaDesignSystem_feab2b;
  return (
    <section data-screen-label="Hero" className="mp-hero mp-grain">
      <div className="mp-hero-photo"><img src="assets/hero-truck-crew.png" alt="El equipo de Moscato Pizza en la ventanilla del food truck" /></div>
      <div className="mp-hero-collage">
        <div className="mp-hero-left">
          <div className="mp-hero-pola-a"><PolaroidPhoto src="assets/eating-slice-boxes.png" alt="Comiendo una porción sobre las cajas Moscato" width={230} rotate={-3} caption="" /></div>
          <div className="mp-hero-pola-b"><PolaroidPhoto src="assets/pizzaiolo-holding-pizza.png" alt="Pizzaiolo mostrando una pizza recién salida del horno" width={265} rotate={3} caption="" /></div>
          <div className="mp-hero-script"><StitchScript lines={['El food truck','más rápido','de la provincia']} size={38} tilt={[-1,1,-1]} offsets={[0,18,34]} /></div>
        </div>
        <div className="mp-hero-center">
          <img src="./h1-container-msv73e3a-eea6.svg" alt="Reseñas ★★★★☆ 4.6 — Simplemente un foodtruck super italiano — 3000+ clientes · 480+ pizzas p/ mes" className="mp-hero-plaque" width="487" height="264" style={{width:'487px',height:'auto',aspectRatio:'487 / 264'}} />
        </div>
        <div className="mp-hero-right">
          <TicketCard width={290} tone="sky" text="Desde 2017 moviendo nuestros foodtrucks y llenando de pizzas &amp; pasta toda Santa Fe, desde Casilda como una tradición italiana legada de nuestros ancestros." ctaLabel="Ver Food Trucks" onCtaClick={()=>window.mpScrollTo('truck')} />
          <img src="assets/pizza-medallion-brown.png" alt="" className="mp-hero-medallion" />
        </div>
      </div>
    </section>
  );
}

function ShapeStat({ shape = 'rombo', value, label, size = 215 }){
  const art = shape === 'rombo' ? (
    <svg viewBox="0 0 300 300" width={size} height={size} aria-hidden="true">
      <path d="M299.77 149.885L149.885 0L-9.60223e-05 149.885L149.885 299.77L299.77 149.885Z" fill="var(--brown-700)"></path>
      <path d="M288.114 149.885L149.885 11.6559L11.6557 149.885L149.885 288.114L288.114 149.885Z" fill="var(--brown-700)" stroke="var(--sky-200)" strokeWidth="1.57305"></path>
      <path d="M293.289 149.885L149.885 6.48059L6.48028 149.885L149.885 293.29L293.289 149.885Z" fill="none" stroke="var(--sky-200)" strokeWidth="1.57305"></path>
    </svg>
  ) : (
    <svg viewBox="0 0 264 264" width={size} height={size} aria-hidden="true">
      <path d="M131.771 0L216.471 30.8739L261.54 109.049L245.887 197.947L176.839 255.971H86.7026L17.654 197.947L2.00195 109.049L47.0702 30.8739L131.771 0Z" fill="var(--navy-900)"></path>
      <path d="M212.272 35.8832L255.107 110.185L240.23 194.677L174.605 249.825H88.9362L23.3106 194.677L8.43359 110.185L51.2686 35.8832L131.77 6.53955L212.272 35.8832Z" fill="none" stroke="var(--sky-200)" strokeWidth="1.50344"></path>
      <path d="M208.668 40.2603L249.567 111.203L235.363 191.877L172.703 244.532H90.9079L28.2473 191.877L14.0435 111.203L54.9423 40.2603L131.805 12.2439L208.668 40.2603Z" fill="none" stroke="var(--sky-200)" strokeWidth="1.43548"></path>
    </svg>
  );
  return (
    <div className="mp-shapestat" style={{ width:size, height:size }}>
      {art}
      <div className="mp-shapestat-text">
        <span className="mp-shapestat-value" style={{ fontSize:size * .21 }}>{value}</span>
        <span className="mp-shapestat-label" style={{ fontSize:Math.max(20, size * .1) }}>{label}</span>
      </div>
    </div>
  );
}

function StorySection(){
  const { LetterCard, PolaroidPhoto } = window.MoscatoPizzaDesignSystem_feab2b;
  return (
    <section id="historia" data-screen-label="Nuestra Historia" className="mp-grain mp-story">
      <img src="assets/pizza-medallion-brown.png" alt="" className="mp-story-medallion" />
      <div className="mp-story-inner">
        <div className="mp-story-letter">
          <LetterCard title="¡Ciao!" width={520} tone="blue" signature="Chef Alejandro" photoRatio="auto" photoLabel="" paragraphs={[
            'Moscato nació en 2017 en una esquina de Casilda: un horno prestado, tres amigos y la idea fija de que la napolitana de verdad también se hace acá. La tradición viene de familia; la velocidad la aprendimos en la calle.',
            'Hoy somos dos locales y un food truck que cruza la provincia. Nuestros hornos Cuppone nos dejan sacar 12 pizzas cada 4 minutos sin resignar nada: masa de 48 horas, borde alto y bien tostado, ingredientes de productores santafesinos.',
            'Nos llevamos un pedazo de Italia a tu evento, fiesta o casamiento — vos ponés la fecha, nosotros el fuego.',
          ]} />
        </div>
        <div className="mp-story-collage">
          <div className="mp-story-pola-a"><PolaroidPhoto src="assets/hero-truck-crew.png" alt="El food truck de Moscato en un evento" width={250} rotate={-5} caption="" /></div>
          <div className="mp-story-pola-b"><PolaroidPhoto src="assets/chef-portrait.png" alt="Nuestro pizzaiolo en plena tanda" width={215} rotate={4} caption="" /></div>
          <div className="mp-story-pola-c"><PolaroidPhoto src="assets/eating-slice-boxes.png" alt="Clientas disfrutando su porción en un festival" width={245} rotate={3} caption="¡Ciao amici!" /></div>
          <div className="mp-story-badge-a"><ShapeStat shape="rombo" value="3000+" label="Caterings" size={215} /></div>
          <div className="mp-story-badge-b"><ShapeStat shape="many" value="1250+" label="Festivales" size={205} /></div>
        </div>
      </div>
    </section>
  );
}

const MP_TRUCKS = [
  { title:'Il Capo', photo:'assets/hero-truck-crew.png', alt:'Food truck Il Capo en un evento', stats:[{value:'480',label:'pizzas por hora'},{value:'7 x 4M',label:'medidas del truck'}] },
  { title:'La Nonna', photo:'assets/truck-moscato-fascia.png', photoPos:'50% 30%', alt:'Truck La Nonna con el cartel Moscato Pizza iluminado', stats:[{value:'320',label:'pizzas por hora'},{value:'6,5 x 4M',label:'medidas del truck'}] },
  { title:'Il Piccolo', photo:'assets/eating-slice-boxes.png', photoPos:'50% 2%', alt:'Clientes comiendo porciones junto al truck Il Piccolo', stats:[{value:'275',label:'pizzas por hora'},{value:'7 x 2,5M',label:'medidas del truck'}] },
  { title:'La Pasta', photo:'assets/pasta-bowl.jpg', photoPos:'50% 62%', alt:'Plato de pasta con rúcula y queso rallado frente al truck', stats:[{value:'300',label:'platos por hora'},{value:'5 x 2,5M',label:'medidas del truck'}] },
];

function TruckCard({ title, photo, alt, photoLabel, photoPos, stats = [], ctaLabel = 'Más sobre este truck', onCtaClick }){
  const { Button } = window.MoscatoPizzaDesignSystem_feab2b;
  return (
    <article className="mp-tcard">
      <div className="mp-tcard-body">
        <h3 className="mp-tcard-title">{title}</h3>
        <div className="mp-tcard-frame">
          <div className="mp-tcard-mat">
            <div className="mp-tcard-photo">
              {photo ? <img src={photo} alt={alt || title} style={{ '--photo-pos':photoPos }} /> : <span className="mp-tcard-ph">{photoLabel || 'Foto del truck'}</span>}
            </div>
          </div>
          <div className="mp-tcard-checker" aria-hidden="true"></div>
        </div>
        <div className="mp-tcard-stats">
          {stats.map(s => (
            <div className="mp-tcard-stat" key={s.label}>
              <span className="mp-tcard-stat-value">{s.value}</span>
              <span className="mp-tcard-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
        <div className="mp-tcard-cta"><Button variant="navy" size="sm" onClick={onCtaClick} style={{ width:'100%' }}>{ctaLabel}</Button></div>
      </div>
    </article>
  );
}

function StitchScript({ lines, size = 54, offsets = [], className = '', style, tilt = [] }){
  const layers = [
    { w:19, c:'var(--sky-100)', op:1 },
    { w:6, c:'var(--sky-100)', op:1 },
    { w:0, c:null, op:1 },
  ];
  const body = lines.map((l,i) => (
    <span key={i} style={{ display:'block', marginLeft:offsets[i] || 0, transform:tilt[i] ? `rotate(${tilt[i]}deg)` : undefined, marginTop:i ? '-.24em' : 0 }}>{l}</span>
  ));
  return (
    <div className={'mp-stitch ' + className} style={{ fontSize:size, ...style }}>
      {layers.map((l,i) => (
        <div key={i} className="mp-stitch-layer" aria-hidden={i < layers.length - 1} style={{ WebkitTextStroke: l.w ? `${l.w}px ${l.c}` : undefined, opacity:l.op, zIndex:i }}>{body}</div>
      ))}
    </div>
  );
}

function TruckSection(){
  const { Button } = window.MoscatoPizzaDesignSystem_feab2b;
  const rail = React.useRef(null);
  const nudge = (dir) => { const el = rail.current; if(el) el.scrollBy({ left: dir * 360, behavior:'smooth' }); };
  return (
    <section id="truck" data-screen-label="Food Truck" className="mp-truck mp-grain">
      <div className="mp-truck-head">
        <div>
          <h2 className="mp-truck-title">¿Reservás nuestro food truck?</h2>
          <p className="mp-truck-copy">¿Fiesta de empresa, catering o festival? ¿Y buscás la napolitana más rica de la provincia? Mandanos una consulta sin compromiso: te contestamos dentro de las 24 horas.</p>
        </div>
        <div className="mp-truck-cta"><Button variant="primary" size="lg" onClick={()=>window.mpScrollTo('contacto')}>Reservá un food truck</Button></div>
        <div className="mp-truck-script"><StitchScript lines={['El food truck','más rápido','de la provincia']} size={38} tilt={[-1,1,-1]} offsets={[0,18,34]} /></div>
        <div className="mp-truck-arrows">
          <button aria-label="Anterior" onClick={()=>nudge(-1)}>←</button>
          <button aria-label="Siguiente" onClick={()=>nudge(1)}>→</button>
        </div>
      </div>
      <div className="mp-rail-wrap">
        <img src="assets/pizza-medallion-brown.png" alt="" className="mp-truck-medallion" />
        <div className="mp-rail" ref={rail}>
          {MP_TRUCKS.map((t,i) => (
            <div className="mp-rail-item" key={t.title} style={{ transform:`rotate(${[-1.2,0.9,-0.7,1.1][i % 4]}deg)` }}>
              <TruckCard title={t.title} photo={t.photo} alt={t.alt} photoLabel={t.photoLabel} photoPos={t.photoPos} stats={t.stats} onCtaClick={()=>window.mpScrollTo('contacto')} />
            </div>
          ))}
        </div>
        <img src="assets/hand-kiss.png" alt="" className="mp-truck-hand" />
      </div>
    </section>
  );
}

Object.assign(window, { HeroSection, StorySection, TruckSection, StitchScript, ShapeStat, TruckCard });
