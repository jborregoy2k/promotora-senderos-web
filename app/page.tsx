import Link from "next/link";
import { SiteFooter, SiteHeader } from "./site-shell";

const projects = [
  { id: "casa-24", name: "Casa 24", place: "Rionegro · Antioquia", status: "Proyecto desarrollado", homes: "Vivienda autosostenible", image: "/images/Casa 24/IMG_9280.jpg" },
  { id: "bodega-tierra-fertil", name: "Bodega Tierra Fértil", place: "La Unión · Antioquia", status: "Diseñado", homes: "Bodega y Locales Comerciales", image: "/images/BodegaTF/Bodega-Tierra-Fertil.jpg" },
  { id: "avanti", name: "Avanti", place: "El Retiro · Antioquia", status: "Proyecto desarrollado", homes: "32 apartamentos", image: "/images/fachada-avanti.jpg" },
  { id: "senderos-de-suramerica", name: "Senderos de Suramérica", place: "Itagüí · Antioquia", status: "Proyecto desarrollado", homes: "79 apartamentos", image: "/images/senderos-suramerica.jpg" },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero">
          <div className="hero-media senderos-hero" role="img" aria-label="Proyecto Avanti en El Retiro, Antioquia" />
          <div className="hero-shade" />
          <div className="container hero-content">
            <div className="eyebrow light">Gerencia de proyectos de construcción</div>
            <h1>Construimos sueños.<br /><span>Integramos soluciones.</span></h1>
            <p>Planeación, modelación, presupuestos, marco jurídico y ejecución articulados para crear proyectos funcionales, estéticos y duraderos.</p>
            <div className="actions">
              <Link className="button button-primary" href="/proyectos">Conoce nuestros proyectos <span>→</span></Link>
              <Link className="button button-ghost" href="/nosotros">Descubre Senderos</Link>
            </div>
          </div>
          <a className="scroll-cue" href="#proposito" aria-label="Ir al contenido"><span>Explora</span><i>↓</i></a>
        </section>

        <section className="statement" id="proposito">
          <div className="container statement-grid">
            <div><div className="eyebrow">Nuestra experiencia</div><h2>Construimos cada proyecto con visión integral.</h2></div>
            <div className="statement-copy">
              <p>Integramos presupuestos, planos, infraestructura, cálculos y ejecución de obra mediante herramientas digitales que permiten tomar mejores decisiones.</p>
              <Link className="text-link" href="/servicios">Conoce nuestros servicios <span>→</span></Link>
            </div>
          </div>
        </section>

        <section className="impact-band" aria-label="Cifras destacadas">
          <div className="container stats">
            <div><strong>360°</strong><span>Gerencia integral de proyectos</span></div>
            <div><strong>3D + 4D</strong><span>Modelación BIM y programación digital</span></div>
            <div><strong>14</strong><span>Proyectos destacados</span></div>
            <div><strong>1 equipo</strong><span>Arquitectos, ingenieros, asesores jurídicos, contables y financieros</span></div>
          </div>
        </section>

        <section className="section projects-preview">
          <div className="container">
            <div className="section-heading">
              <div><div className="eyebrow">Proyectos destacados</div><h2>Diseño, naturaleza<br />y calidad constructiva.</h2></div>
              <Link className="text-link desktop-link" href="/proyectos">Ver todos los proyectos <span>→</span></Link>
            </div>
            <div className="project-grid two-projects">
              {projects.map((project, index) => (
                <article className={`project-card project-${index + 1}`} key={project.name}>
                  <div className="project-image"><img src={project.image} alt="" /><span className="status">{project.status}</span></div>
                  <div className="project-info"><p>{project.place}</p><h3>{project.name}</h3><div><span>{project.homes}</span><Link href={`/proyectos#${project.id}`} aria-label={`Conocer ${project.name}`}>↗</Link></div></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="vis-feature">
          <div className="vis-photo senderos-service-photo" role="img" aria-label="Interior del proyecto Avanti" />
          <div className="vis-panel">
            <div className="eyebrow light">Servicios especializados</div>
            <h2>Tecnología y experiencia para tomar mejores decisiones.</h2>
            <p>Apoyamos a arquitectos, constructores y promotores con modelación digital, control presupuestal, coordinación y gerencia integral.</p>
            <Link className="button button-white" href="/servicios">Explora nuestros servicios <span>→</span></Link>
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
            <div className="section-heading"><div><div className="eyebrow">Casa 24</div><h2>Vivir cerca de la naturaleza.</h2></div><Link className="text-link desktop-link" href="/proyectos#casa-24">Conoce el proyecto <span>→</span></Link></div>
            <div className="news-grid">
              <article className="news-main"><img src="/images/Casa 24/IMG_9283.jpg" alt="" /><div><small>RIONEGRO · ANTIOQUIA</small><h3>Vivienda autosostenible</h3><Link href="/proyectos#casa-24">Ver proyecto →</Link></div></article>
              <div className="news-list">
                <article><small>ESPACIOS</small><h3>Generación de energía solar, aprovechamiento de agua de lluvia, control térmico y acústico</h3><Link href="/proyectos#casa-24">↗</Link></article>
                <article><small>UBICACIÓN</small><h3>Llanogrande</h3><Link href="/proyectos#casa-24">↗</Link></article>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
