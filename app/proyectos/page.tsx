import { ContactBand, CorporatePage, PageHero } from "../components";

const projects = [
  {
    id: "casa-24",
    name: "Casa 24",
    location: "Rionegro · Antioquia",
    image: "/images/Casa 24/IMG_9279.jpg",
    gallery: [
      "/images/Casa 24/IMG_0170.jpg",
      "/images/Casa 24/IMG_0177.jpg",
      "/images/Casa 24/IMG_0179.jpg",
      "/images/Casa 24/IMG_1744.jpg",
      "/images/Casa 24/IMG_1948.jpg",
      "/images/Casa 24/IMG_2061.jpg",
      "/images/Casa 24/IMG_2403.jpg",
      "/images/Casa 24/IMG_2471.jpg",
      "/images/Casa 24/IMG_2522.jpg",
      "/images/Casa 24/IMG_3253.jpg",
      "/images/Casa 24/IMG_5055.jpg",
      "/images/Casa 24/IMG_9275.jpg",
      "/images/Casa 24/IMG_9277.jpg",
      "/images/Casa 24/IMG_9278.jpg",
      "/images/Casa 24/IMG_9279.jpg",
      "/images/Casa 24/IMG_9280.jpg",
      "/images/Casa 24/IMG_9282.jpg",
      "/images/Casa 24/IMG_9283.jpg",
      "/images/Casa 24/IMG_9285.jpg",
    ],
    imageRatio: "16 / 9",
    description: "Vivienda campestre de dos niveles auto-sostenible. Construida en estructura metálica con alta eficiencia volumétrica, menor peso total, menor impacto ambiental y costos. Interiorismo con acabados industriales, piedras y maderas naturales.",
    facts: ["Materiales arquitectónicos de vanguardia con menor peso total que aprovechan mejor el espacio interior libre disfrutable", "Sistema solar fotovoltáico interconectado a la red de EPM autocosteable", "Agua caliente solar 365 dias del año", "Cero 0% de contaminación por NO uso de gas natural", "Aislamiento térmico y acústico con paredes Durapanel", "100% de recolección aguas lluvias en techos", "Sistemas independientes de alimentación de baños, lavadora y aguas para riego con aguas lluvias", "Modelación BIM arquitectónica, estructural, eléctrica e hidrosanitaria", "Sistema Home Theater con experiencia Dolby Digital 7.1 y proyección de cine en casa con pantalla de 190 pulgadas - 495cm (16:10)", "Sistema de seguridad con cámaras IP y sensores de movimiento", "Sistema de domótica para control de iluminación, persianas, audio y video"],
    status: "ENTREGADA",
    showContact: false,
    contactEmail: "info@promotorasenderos.com",
  },
  {
    id: "bodega-tierra-fertil",
    name: "Bodega Tierra Fértil",
    location: "La Unión · Antioquia",
    image: "/images/BodegaTF/Bodega-Tierra-Fertil-dusk.jpg",
    imageRatio: "16 / 9",
    description: "Mall con 8 locales comerciales con 1,947m2 de almacenamiento.",
    facts: ["Estructura metálica", "Tramitación licencia y diseños arquitectónicos", "Modelación BIM arquitectónica, incendios, estructural, eléctrica e hidrosanitaria"],
    status: "DISEÑADO",
    showContact: false,
    contactEmail: "info@promotorasenderos.com",
  },
  {
    id: "avanti",
    name: "Avanti",
    location: "El Retiro · Antioquia",
    image: "/images/fachada-avanti.jpg",
    imageRatio: "16 / 9",
    description: "Apartamentos de 1, 2 y 3 alcobas en el sector Martín Pescador, a cinco minutos del parque principal de El Retiro y junto al parque lineal de la quebrada La Agudelo. Crédito Constructor de Banco de Occidente, Fiducia Administración de Acción Fiduciaria S.A.",
    facts: ["Jardines y balcones", "Domótica", "Zona de mascotas", "Ascensor", "Chimenea", "Terrazas"],
    status: "VENDIDO",
    showContact: false,
    contactEmail: "info@promotorasenderos.com",
  },
  {
    id: "senderos-de-suramerica",
    name: "Senderos de Suramérica",
    location: "Itagüí · Antioquia",
    image: "/images/senderos-suramerica.jpg",
    imageRatio: "1 / 1",
    description: "Proyecto de construcción tradicional localizado en una zona de alta valorización de Itagüí, con apartamentos de 2, 3 y 4 alcobas. Crédito Constructor de BBVA, Fiducia Lote y de Administración de Acción Fiduciaria S.A.",
    facts: ["79 apartamentos, 1 local, 1 oficina", "84 parqueaderos", "Piscina", "Salón social", "Gimnasio", "Juegos infantiles"],
    status: "VENDIDO",
    showContact: false,
    contactEmail: "info@promotorasenderos.com",
  },
];

const contactEmailSubject = encodeURIComponent("Contacto desde Website - Necesito información");

export default function Proyectos() {
  return <CorporatePage>
    <PageHero eyebrow="Nuestros proyectos" title="Espacios con identidad y sentido de lugar." text="Proyectos residenciales desarrollados con diseño funcional, calidad y una relación armónica con el entorno." image="/images/Casa 24/IMG_9279.jpg" />
    <section className="section"><div className="container real-projects">
      {projects.map((project, index) => <article id={project.id} className={`real-project ${index % 2 ? "reverse" : ""}`} key={project.name}>
        <div className={`real-project-image ${project.gallery ? "project-gallery" : ""}`} style={{ aspectRatio: project.imageRatio }}>
          {(project.gallery ?? [project.image]).map((image, imageIndex) => <img
            src={image}
            alt={imageIndex === 0 ? `Proyecto ${project.name}` : ""}
            className={project.gallery ? "project-gallery-slide" : undefined}
            style={project.gallery ? { animationDelay: `${imageIndex * 4}s` } : undefined}
            key={image}
          />)}
        </div>
        <div className="real-project-copy"><div className="eyebrow">{project.location}</div><h2>{project.name}</h2><p>{project.description}</p><div className="amenity-grid">{project.facts.map(fact => <span key={fact}>{fact}</span>)}</div>{project.showContact && <a className="text-link" href={`mailto:${project.contactEmail}?subject=${contactEmailSubject}`}>Solicitar información <b>→</b></a>}</div>
      </article>)}
    </div></section>
    <ContactBand />
  </CorporatePage>;
}
