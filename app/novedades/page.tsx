import { CorporatePage, PageHero } from "../components";

const articles = [
  ["COMUNIDAD", "Así acompañamos a 120 nuevas familias en la entrega de su hogar", "18 JUL 2026", "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=85"],
  ["SOSTENIBILIDAD", "Nuevas zonas verdes conectan a la comunidad en Senderos del Río", "02 JUL 2026", "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=85"],
  ["GUÍA VIS", "Cuatro pasos para prepararte para comprar vivienda propia", "20 JUN 2026", "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=85"],
  ["PROYECTOS", "Reserva de la Sabana alcanza un nuevo hito de construcción", "05 JUN 2026", "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=85"],
  ["BIENESTAR", "Diseñar espacios comunes para una vida en comunidad", "21 MAY 2026", "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=85"],
  ["ACTUALIDAD", "Claves para entender el proceso de escrituración", "08 MAY 2026", "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=85"],
];

export default function Novedades() {
  return <CorporatePage>
    <PageHero eyebrow="Actualidad Senderos" title="Ideas, avances e historias que nos mueven." text="Información útil para compradores, comunidades y aliados." image="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=85" />
    <section className="section"><div className="container"><div className="article-grid">{articles.map(([tag, title, date, image]) => <article className="article-card" key={title}><img src={image} alt="" /><small>{tag} · {date}</small><h2>{title}</h2><a href="#">Leer más <span>→</span></a></article>)}</div></div></section>
  </CorporatePage>;
}
