import { CorporatePage, PageHero } from "../components";

const articles = [
  ["COMUNIDAD", "Así acompañamos a 120 nuevas familias en la entrega de su hogar", "18 JUL 2026", "/images/novedad-comunidad.jpg"],
  ["SOSTENIBILIDAD", "Nuevas zonas verdes conectan a la comunidad en Senderos del Río", "02 JUL 2026", "/images/novedad-sostenibilidad.jpg"],
  ["GUÍA VIS", "Cuatro pasos para prepararte para comprar vivienda propia", "20 JUN 2026", "/images/novedad-guia-vis.jpg"],
  ["PROYECTOS", "Reserva de la Sabana alcanza un nuevo hito de construcción", "05 JUN 2026", "/images/novedad-construccion.jpg"],
  ["BIENESTAR", "Diseñar espacios comunes para una vida en comunidad", "21 MAY 2026", "/images/novedad-bienestar.jpg"],
  ["ACTUALIDAD", "Claves para entender el proceso de escrituración", "08 MAY 2026", "/images/novedad-escrituracion.jpg"],
];

export default function Novedades() {
  return <CorporatePage>
    <PageHero eyebrow="Actualidad Senderos" title="Ideas, avances e historias que nos mueven." text="Información útil para compradores, comunidades y aliados." image="/images/novedades-oficina.jpg" />
    <section className="section"><div className="container"><div className="article-grid">{articles.map(([tag, title, date, image]) => <article className="article-card" key={title}><img src={image} alt="" /><small>{tag} · {date}</small><h2>{title}</h2><a href="#">Leer más <span>→</span></a></article>)}</div></div></section>
  </CorporatePage>;
}
