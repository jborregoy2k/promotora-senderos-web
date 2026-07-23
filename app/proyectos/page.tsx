import { ContactBand, CorporatePage, PageHero } from "../components";

const items = [
  ["Senderos del Río", "Soacha · Cundinamarca", "En construcción", "480 viviendas", "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85"],
  ["Reserva de la Sabana", "Mosquera · Cundinamarca", "Últimas unidades", "312 viviendas", "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85"],
  ["Parques de Occidente", "Facatativá · Cundinamarca", "Próximo lanzamiento", "240 viviendas", "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=85"],
  ["Altos de Primavera", "Zipaquirá · Cundinamarca", "Entregado", "360 viviendas", "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"],
  ["Bosques de San Juan", "Madrid · Cundinamarca", "Entregado", "280 viviendas", "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85"],
  ["Portal de los Andes", "Tunja · Boyacá", "Entregado", "420 viviendas", "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85"],
];

export default function Proyectos() {
  return <CorporatePage>
    <PageHero eyebrow="Nuestro portafolio" title="Proyectos que se convierten en hogar." text="Vivienda bien ubicada, espacios pensados para la vida y comunidades con futuro." image="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1800&q=85" />
    <section className="section"><div className="container"><div className="filter-row"><button className="selected">Todos</button><button>En venta</button><button>En construcción</button><button>Entregados</button></div><div className="project-grid catalog">{items.map(([name, place, status, homes, image]) => <article className="project-card" key={name}><div className="project-image"><img src={image} alt="" /><span className="status">{status}</span></div><div className="project-info"><p>{place}</p><h3>{name}</h3><div><span>{homes}</span><a href="/contacto" aria-label={`Solicitar información de ${name}`}>↗</a></div></div></article>)}</div></div></section>
    <ContactBand />
  </CorporatePage>;
}
