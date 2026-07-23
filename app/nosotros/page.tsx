import { ContactBand, CorporatePage, PageHero } from "../components";

export default function Nosotros() {
  return <CorporatePage>
    <PageHero eyebrow="Quiénes somos" title="Construimos con visión. Cumplimos con confianza." text="Somos una promotora colombiana que convierte suelo, diseño y gestión responsable en comunidades que perduran." image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1800&q=85" />
    <section className="section"><div className="container split-copy"><div><div className="eyebrow">Nuestra historia</div><h2>Más de una década abriendo caminos hacia la vivienda propia.</h2></div><div><p>Nacimos con una convicción sencilla: la Vivienda de Interés Social puede combinar calidad arquitectónica, gestión rigurosa y una experiencia cercana para las familias.</p><p>Integramos estructuración, diseño, construcción y acompañamiento comercial en un mismo equipo. Así cuidamos cada decisión y damos continuidad a cada compromiso.</p></div></div></section>
    <section className="values"><div className="container value-grid"><article><b>01</b><h3>Integridad</h3><p>Actuamos con transparencia, cuidando cada compromiso.</p></article><article><b>02</b><h3>Excelencia</h3><p>Elevamos el estándar técnico en cada etapa.</p></article><article><b>03</b><h3>Cercanía</h3><p>Escuchamos y acompañamos a las personas.</p></article><article><b>04</b><h3>Visión</h3><p>Diseñamos pensando en el futuro del territorio.</p></article></div></section>
    <section className="section"><div className="container manifesto"><div className="manifesto-image"><img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85" alt="Equipo revisando planos de construcción" /></div><div><div className="eyebrow">Nuestro compromiso</div><h2>Hacer bien las cosas, desde el primer trazo.</h2><p>Combinamos experiencia local con procesos claros y decisiones responsables. Nuestro trabajo se mide tanto en la calidad de una vivienda como en la tranquilidad de quien la recibe.</p></div></div></section>
    <ContactBand />
  </CorporatePage>;
}
