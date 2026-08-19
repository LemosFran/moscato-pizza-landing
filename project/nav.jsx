/** @jsx React.createElement */
const MP_CAP_L = 'M24.001 80H12.001C12.0009 73.4763 6.7946 68.1684 0.310547 68.0039L0 68V11.9785C6.30012 11.6145 11.2969 6.39136 11.2969 0H24.001V80Z';
const MP_CAP_R = 'M0 80H12C12.0001 73.4763 17.2064 68.1684 23.6904 68.0039L24 68V11.9785C17.7003 11.614 12.7041 6.39103 12.7041 0H0V80Z';

function ScoopPanel({ tint, height = 72, children, style, className, onClick, center }){
  const cap = Math.round(height * 0.2998);
  return (
    <div className={className} onClick={onClick} style={{ position:'relative', height, display:'flex', alignItems:'center', ...style }}>
      <div style={{ position:'absolute', inset:0, display:'flex', color:tint, pointerEvents:'none' }}>
        <svg viewBox="0 0 24 80" preserveAspectRatio="none" style={{ width:cap, height:'100%', flexShrink:0, display:'block' }}><path d={MP_CAP_L} fill="currentColor" /></svg>
        <div style={{ flex:1, background:'currentColor' }} />
        <svg viewBox="0 0 24 80" preserveAspectRatio="none" style={{ width:cap, height:'100%', flexShrink:0, display:'block' }}><path d={MP_CAP_R} fill="currentColor" /></svg>
      </div>
      <div style={{ position:'relative', display:'flex', alignItems:'center', justifyContent:center?'center':undefined, width:'100%', height:'100%', padding:`0 ${cap + 14}px` }}>{children}</div>
    </div>
  );
}

function MPNav({ links = [], onCta }){
  const [open, setOpen] = React.useState(false);
  const go = (id) => { setOpen(false); window.mpScrollTo(id); };
  const logo = <img src="assets/logo-wordmark-trim.png" alt="Moscato Pizza" className="mp-nav-logo" />;
  return (
    <div className="mp-nav-wrap">
      <div className="mp-nav-row mp-nav-desktop">
        <ScoopPanel tint="var(--cream-100)" style={{ flex:1, minWidth:0 }}>
          {logo}
          <nav className="mp-nav-links">
            {links.map(l => <a key={l.id} href={'#' + l.id} onClick={e=>{e.preventDefault();go(l.id);}}>{l.label}</a>)}
          </nav>
        </ScoopPanel>
        <ScoopPanel tint="var(--mustard-500)" style={{ width:250, cursor:'pointer' }} onClick={onCta}>
          <span className="mp-nav-cta">Contacto</span>
        </ScoopPanel>
      </div>
      <div className="mp-nav-row mp-nav-mobile">
        <ScoopPanel tint="var(--cream-100)" height={60} center style={{ flex:1, minWidth:0 }}>{logo}</ScoopPanel>
        <ScoopPanel tint="var(--mustard-500)" height={60} style={{ flex:'0 0 auto', cursor:'pointer' }} onClick={()=>setOpen(o=>!o)}>
          <span className="mp-nav-cta">{open ? 'Cerrar' : 'Menú'}</span>
        </ScoopPanel>
      </div>
      {open && (
        <div className="mp-nav-sheet">
          {links.map(l => <a key={l.id} href={'#' + l.id} onClick={e=>{e.preventDefault();go(l.id);}}>{l.label}</a>)}
          <a href="#contacto" className="mp-nav-sheet-cta" onClick={e=>{e.preventDefault();setOpen(false);onCta && onCta();}}>Contacto</a>
        </div>
      )}
    </div>
  );
}

Object.assign(window, { MPNav, ScoopPanel });
