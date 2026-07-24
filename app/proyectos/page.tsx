import { ContactBand, CorporatePage, PageHero } from "../components";

const projects = [
  {
    name: "Avanti",
    location: "El Retiro · Antioquia",
    image: "https://www.promotorasenderos.com/wp-content/uploads/2019/01/Fachada-Avanti.jpg",
    description: "Apartamentos de 1, 2 y 3 alcobas en el sector Martín Pescador, a cinco minutos del parque principal de El Retiro y junto al parque lineal de la quebrada La Agudelo.",
    facts: ["Jardines y balcones", "Domótica", "Zona de mascotas", "Ascensor", "Chimenea", "Terrazas"],
    contact: "avanti@promotorasenderos.com",
  },
  {
    name: "Senderos de Suramérica",
    location: "Itagüí · Antioquia",
    image: "https://www.promotorasenderos.com/wp-content/uploads/2017/02/senderos-10-560x560.jpg",
    description: "Proyecto de construcción tradicional localizado en una zona de alta valorización de Itagüí, con apartamentos de 2, 3 y 4 alcobas.",
    facts: ["79 apartamentos", "84 parqueaderos", "Piscina", "Salón social", "Gimnasio", "Juegos infantiles"],
    contact: "ventas@promotorasenderos.com",
  },
];

export default function Proyectos() {
  return <CorporatePage>
    <PageHero eyebrow="Nuestros proyectos" title="Espacios con identidad y sentido de lugar." text="Proyectos residenciales desarrollados con diseño funcional, calidad y una relación armónica con el entorno." image="https://www.promotorasenderos.com/wp-content/uploads/2019/01/Fachada-Avanti.jpg" />
    <section className="section"><div className="container real-projects">
      {projects.map((project, index) => <article className={`real-project ${index % 2 ? "reverse" : ""}`} key={project.name}>
        <div className="real-project-image"><img src={project.image} alt={`Proyecto ${project.name}`} /></div>
        <div className="real-project-copy"><div className="eyebrow">{project.location}</div><h2>{project.name}</h2><p>{project.description}</p><div className="amenity-grid">{project.facts.map(fact => <span key={fact}>{fact}</span>)}</div><a className="text-link" href={`mailto:${project.contact}`}>Solicitar información <b>→</b></a></div>
      </article>)}
    </div></section>
    <ContactBand />
  </CorporatePage>;
}
