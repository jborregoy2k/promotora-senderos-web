import Link from "next/link";
import { SiteFooter, SiteHeader } from "./site-shell";

const projects = [
  { name: "Senderos del Río", place: "Soacha · Cundinamarca", status: "En construcción", homes: "480 viviendas", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85" },
  { name: "Reserva de la Sabana", place: "Mosquera · Cundinamarca", status: "Últimas unidades", homes: "312 viviendas", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85" },
  { name: "Parques de Occidente", place: "Facatativá · Cundinamarca", status: "Próximo lanzamiento", homes: "240 viviendas", image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=85" },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero">
          <div className="hero-media" role="img" aria-label="Proyecto residencial moderno entre zonas verdes" />
          <div className="hero-shade" />
          <div className="container hero-content">
            <div className="eyebrow light">Vivienda que transforma territorios</div>
            <h1>Construimos hogares.<br /><span>Impulsamos futuro.</span></h1>
            <p>Desarrollamos proyectos de Vivienda de Interés Social que conectan a las familias colombianas con bienestar, ciudad y nuevas oportunidades.</p>
            <div className="actions">
              <Link className="button button-primary" href="/proyectos">Conoce nuestros proyectos <span>→</span></Link>
              <Link className="button button-ghost" href="/nosotros">Descubre Senderos</Link>
            </div>
          </div>
          <a className="scroll-cue" href="#proposito" aria-label="Ir al contenido"><span>Explora</span><i>↓</i></a>
        </section>

        <section className="statement" id="proposito">
          <div className="container statement-grid">
            <div><div className="eyebrow">Nuestro propósito</div><h2>La vivienda es el punto de partida de una vida mejor.</h2></div>
            <div className="statement-copy">
              <p>En Promotora Senderos entendemos que construir vivienda VIS es mucho más que levantar edificaciones. Es crear entornos seguros, conectados y sostenibles donde las familias puedan crecer.</p>
              <Link className="text-link" href="/enfoque-vis">Nuestro enfoque VIS <span>→</span></Link>
            </div>
          </div>
        </section>

        <section className="impact-band" aria-label="Cifras destacadas">
          <div className="container stats">
            <div><strong>15+</strong><span>Años creando ciudad</span></div>
            <div><strong>3.200</strong><span>Hogares entregados</span></div>
            <div><strong>9</strong><span>Proyectos desarrollados</span></div>
            <div><strong>86%</strong><span>Compras a proveedores locales</span></div>
          </div>
        </section>

        <section className="section projects-preview">
          <div className="container">
            <div className="section-heading">
              <div><div className="eyebrow">Proyectos destacados</div><h2>Espacios para vivir,<br />crecer y pertenecer.</h2></div>
              <Link className="text-link desktop-link" href="/proyectos">Ver todos los proyectos <span>→</span></Link>
            </div>
            <div className="project-grid">
              {projects.map((project, index) => (
                <article className={`project-card project-${index + 1}`} key={project.name}>
                  <div className="project-image"><img src={project.image} alt="" /><span className="status">{project.status}</span></div>
                  <div className="project-info"><p>{project.place}</p><h3>{project.name}</h3><div><span>{project.homes}</span><Link href="/proyectos" aria-label={`Conocer ${project.name}`}>↗</Link></div></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="vis-feature">
          <div className="vis-photo" role="img" aria-label="Familia recorriendo un proyecto de vivienda" />
          <div className="vis-panel">
            <div className="eyebrow light">Vivienda de Interés Social</div>
            <h2>Una vivienda posible. Una inversión para toda la vida.</h2>
            <p>Acompañamos a cada familia desde la elección del proyecto hasta la entrega de su hogar, con información clara sobre financiación, subsidios y proceso de compra.</p>
            <Link className="button button-white" href="/enfoque-vis">Conoce cómo comprar vivienda VIS <span>→</span></Link>
          </div>
        </section>

        <section className="section trust">
          <div className="container">
            <div className="eyebrow">Nuestra manera de construir</div><h2>Confianza en cada etapa.</h2>
            <div className="trust-grid">
              <article><span>01</span><h3>Planeación responsable</h3><p>Proyectos viables, pensados desde las necesidades reales del territorio.</p></article>
              <article><span>02</span><h3>Calidad que permanece</h3><p>Control técnico y materiales seleccionados para hogares durables.</p></article>
              <article><span>03</span><h3>Acompañamiento cercano</h3><p>Orientación clara y humana durante todo el proceso de compra.</p></article>
              <article><span>04</span><h3>Impacto positivo</h3><p>Decisiones que cuidan los recursos y fortalecen las comunidades.</p></article>
            </div>
          </div>
        </section>

        <section className="cta"><div className="container cta-inner"><div><div className="eyebrow light">Tu hogar puede estar más cerca</div><h2>Da el primer paso hacia tu vivienda propia.</h2></div><Link className="button button-white" href="/contacto">Hablemos de tu proyecto <span>→</span></Link></div></section>

        <section className="section news">
          <div className="container">
            <div className="section-heading"><div><div className="eyebrow">Actualidad Senderos</div><h2>Historias que construyen futuro.</h2></div><Link className="text-link desktop-link" href="/novedades">Ver todas las novedades <span>→</span></Link></div>
            <div className="news-grid">
              <article className="news-main"><img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=85" alt="" /><div><small>COMUNIDAD · 18 JUL 2026</small><h3>Así acompañamos a 120 nuevas familias en la entrega de su hogar</h3><Link href="/novedades">Leer historia →</Link></div></article>
              <div className="news-list">
                <article><small>SOSTENIBILIDAD · 02 JUL 2026</small><h3>Nuevas zonas verdes conectan a la comunidad en Senderos del Río</h3><Link href="/novedades">↗</Link></article>
                <article><small>GUÍA VIS · 20 JUN 2026</small><h3>Cuatro pasos para prepararte para comprar vivienda propia</h3><Link href="/novedades">↗</Link></article>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
