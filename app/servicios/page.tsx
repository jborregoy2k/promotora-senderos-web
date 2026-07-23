import { ContactBand, CorporatePage, PageHero } from "../components";

export default function Servicios() {
  return <CorporatePage>
    <PageHero eyebrow="Servicios" title="Gerencia integral para proyectos de construcción." text="Acompañamos a arquitectos, constructores y promotores con decisiones soportadas en información precisa." image="https://www.promotorasenderos.com/wp-content/uploads/2017/02/fildisi-single-img-17-768x539-768x539.jpg" />
    <section className="section"><div className="container split-copy"><div><div className="eyebrow">Lo que hacemos</div><h2>Integramos diseño, presupuesto, tiempo y ejecución.</h2></div><div><p>Nuestro núcleo de trabajo abarca la planeación presupuestal, la modelación de planos, los cálculos, la infraestructura y la ejecución de obra.</p><p>Las plataformas digitales conectan estos procesos para facilitar decisiones oportunas, controlar cambios y mejorar el retorno de cada proyecto.</p></div></div></section>
    <section className="sustain-pillars section"><div className="container"><div className="pillar-grid">
      <article><span>ARQUITECTOS</span><h3>Modelación y coordinación</h3><p>Conversión de planos y topografía a modelos 3D, coordinación de interferencias, cantidades de obra y capacitación digital.</p><strong>2D → 4D</strong><small>Información centralizada y actualizada</small></article>
      <article><span>CONSTRUCTORES</span><h3>Control de obra</h3><p>Integración de presupuestos, planos, cortes y contabilidad; cálculo de materiales y apoyo a la programación.</p><strong>Tiempo real</strong><small>Seguimiento de cantidades y cambios</small></article>
      <article><span>PROMOTORES</span><h3>Gerencia y consultoría</h3><p>Optimización financiera y arquitectónica, evaluación de cambios, conceptualización y apoyo visual para el proyecto.</p><strong>360°</strong><small>Acompañamiento total o parcial</small></article>
    </div></div></section>
    <section className="section integrated-process">
      <div className="container split-copy">
        <div><div className="eyebrow">Un proceso integrado</div><h2>Todas las disciplinas conectadas.</h2></div>
        <div><p>La planeación del negocio, las compras y los diseños arquitectónicos, hidrosanitarios, eléctricos y estructurales se coordinan como un solo sistema.</p><p>Nuestras herramientas tecnológicas permiten evaluar forma, funcionalidad, costos e impacto ambiental antes de tomar decisiones, buscando mayor eficiencia y retorno financiero.</p></div>
      </div>
      <div className="container process-flow" aria-label="Etapas del servicio">
        <span>Planteamiento</span><i>→</i><span>Diseño</span><i>→</i><span>Estructuración</span><i>→</i><span>Construcción</span><i>→</i><span>Ventas y entregas</span>
      </div>
    </section>
    <ContactBand />
  </CorporatePage>;
}
