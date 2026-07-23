import { ContactBand, CorporatePage, PageHero } from "../components";

export default function Nosotros() {
  return <CorporatePage>
    <PageHero eyebrow="Quiénes somos" title="Gerencia de proyectos con visión integral." text="Somos una empresa localizada en Itagüí, dedicada a integrar los procesos que hacen posible una construcción eficiente." image="https://www.promotorasenderos.com/wp-content/uploads/2017/02/fildisi-single-img-17-768x539-768x539.jpg" />
    <section className="section"><div className="container split-copy"><div><div className="eyebrow">Acerca de nosotros</div><h2>Del presupuesto y los planos a la ejecución de obra.</h2></div><div><p>La planeación presupuestal, la modelación, la infraestructura, los cálculos y la ejecución constituyen el núcleo de nuestro trabajo.</p><p>Integramos estos procesos mediante plataformas digitales para responder a las exigencias de áreas, costos y tiempos, y facilitar decisiones informadas durante todo el proyecto.</p></div></div></section>
    <section className="values"><div className="container value-grid"><article><b>01</b><h3>Nuestra pasión</h3><p>Construir sueños.</p></article><article><b>02</b><h3>Nuestra filosofía</h3><p>Soluciones funcionales, estéticas y duraderas con el mejor equipo.</p></article><article><b>03</b><h3>Nuestro diseño</h3><p>Funcionalidad y armonía con la naturaleza a precios competitivos.</p></article><article><b>04</b><h3>Nuestra calidad</h3><p>Profesionales especializados y materiales que cumplen la normativa.</p></article></div></section>
    <section className="section activity">
      <div className="container">
        <div className="split-copy activity-intro"><div><div className="eyebrow">Actividad principal</div><h2>Gerencia y construcción de proyectos inmobiliarios.</h2></div><div><p>Acompañamos el ciclo completo de proyectos de vivienda, comerciales e industriales: desde el planteamiento, diseño y conceptualización hasta las ventas, entregas, estructuración y gestión contable.</p><p>Integramos los equipos técnicos, el marco jurídico y financiero y el control del proyecto para lograr soluciones funcionales, responsables y con el mejor retorno posible.</p></div></div>
        <div className="capability-grid">
          <article><span>01</span><h3>Promoción inmobiliaria</h3><p>Conceptualización, posicionamiento y promoción comercial de proyectos.</p></article>
          <article><span>02</span><h3>Gerencia de construcción</h3><p>Coordinación integral de equipos, procesos técnicos y ejecución.</p></article>
          <article><span>03</span><h3>Ventas y tramitación</h3><p>Gestión comercial, documentación, entregas y cierre del proyecto.</p></article>
          <article><span>04</span><h3>Estructuración</h3><p>Desarrollo jurídico, financiero, contable y tributario.</p></article>
          <article><span>05</span><h3>Diseño y construcción</h3><p>Urbanizaciones, edificaciones y obras civiles.</p></article>
          <article><span>06</span><h3>Costos y presupuestos</h3><p>Planeación financiera, compras, presupuestos y control de costos.</p></article>
        </div>
      </div>
    </section>
    <section className="purpose-band">
      <div className="container purpose-grid">
        <article><div className="eyebrow light">Misión</div><h2>Profesionalismo, innovación y responsabilidad.</h2><p>Somos una empresa del sector inmobiliario dedicada a la gerencia, promoción y construcción de proyectos de vivienda, comerciales e industriales. Nuestro equipo multidisciplinario, calificado y competente gestiona cada proceso con rigor y compromiso.</p></article>
        <article><div className="eyebrow light">Visión</div><h2>Competitividad con tecnología y sostenibilidad.</h2><p>Nos proyectamos como una empresa reconocida localmente por su capacidad operativa, la integración innovadora de sus procesos y la incorporación de tecnologías que agilicen la gestión y garanticen la sostenibilidad ambiental.</p></article>
      </div>
    </section>
    <section className="section"><div className="container manifesto"><div className="manifesto-image"><img src="https://www.promotorasenderos.com/wp-content/uploads/2019/01/Render1-560x560.jpg" alt="Interior de uno de los proyectos de Promotora Senderos" /></div><div><div className="eyebrow">Nuestro equipo</div><h2>Experiencia especializada en cada decisión.</h2><p>Ingenieros, arquitectos, contadores y administradores trabajan de forma integrada para ofrecer soluciones prácticas, técnica y financieramente sólidas y a la vanguardia de la tecnología.</p></div></div></section>
    <ContactBand />
  </CorporatePage>;
}
