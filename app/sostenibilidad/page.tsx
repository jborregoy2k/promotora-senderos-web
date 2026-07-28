import { ContactBand, CorporatePage, PageHero } from "../components";

export default function Sostenibilidad() {
  return <CorporatePage>
    <PageHero eyebrow="Sostenibilidad" title="Construir hoy sin comprometer el mañana." text="Integramos criterios ambientales y sociales desde la planeación hasta la vida en comunidad." image="/images/sostenibilidad-energia.jpg" />
    <section className="section"><div className="container split-copy"><div><div className="eyebrow">Impacto consciente</div><h2>La sostenibilidad vive en las decisiones concretas.</h2></div><div><p>Priorizamos diseños eficientes, consumo responsable de recursos, paisajismo adaptado y proveedores cercanos. Durante la obra medimos residuos y promovemos prácticas seguras.</p><p>Después de la entrega, fortalecemos la cultura de cuidado y convivencia para que cada proyecto sea una comunidad duradera.</p></div></div></section>
    <section className="sustain-pillars section"><div className="container"><div className="pillar-grid"><article><span>AGUA</span><h3>Uso eficiente</h3><p>Aparatos ahorradores, paisajismo consciente y control de consumos en obra.</p><strong>–24%</strong><small>Meta de consumo en zonas comunes</small></article><article><span>ENERGÍA</span><h3>Diseño bioclimático</h3><p>Iluminación y ventilación natural para mejorar el confort de cada hogar.</p><strong>100%</strong><small>Iluminación LED en zonas comunes</small></article><article><span>COMUNIDAD</span><h3>Entornos que conectan</h3><p>Espacios comunes que promueven convivencia, bienestar y apropiación.</p><strong>9.600 m²</strong><small>Zonas verdes proyectadas</small></article></div></div></section>
    <section className="section"><div className="container manifesto reverse"><div className="manifesto-image"><img src="/images/sostenibilidad-zona-verde.jpg" alt="Zona verde urbana" /></div><div><div className="eyebrow">Territorio y comunidad</div><h2>El valor de un proyecto también está fuera de sus muros.</h2><p>Diseñamos espacios de encuentro, senderos peatonales y áreas verdes que favorecen relaciones sanas con el entorno y entre vecinos.</p></div></div></section>
    <ContactBand />
  </CorporatePage>;
}
