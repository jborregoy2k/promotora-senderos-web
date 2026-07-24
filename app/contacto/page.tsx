"use client";

import { FormEvent, useState } from "react";
import { CorporatePage } from "../components";

export default function Contacto() {
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent) { e.preventDefault(); setSent(true); }
  return <CorporatePage>
    <section className="contact-hero"><div className="container contact-layout"><div className="contact-intro"><div className="eyebrow light">Contacto</div><h1>Conversemos sobre tu próximo proyecto.</h1><p>Solicita información sobre Avanti, Senderos de Suramérica o nuestros servicios de gerencia de proyectos.</p><div className="contact-data"><div><small>LÍNEAS DE ATENCIÓN</small><a href="tel:+5744441593">+57 (4) 444 1593</a><a href="tel:+573127770990">+57 312 777 0990</a></div><div><small>CORREOS</small><a href="mailto:avanti@promotorasenderos.com">avanti@promotorasenderos.com</a><a href="mailto:ventas@promotorasenderos.com">ventas@promotorasenderos.com</a></div><div><small>HORARIO AVANTI</small><span>Lun — Dom · 10:00 a.m. — 6:00 p.m.</span></div></div></div>
      <form className="contact-form" onSubmit={submit}>
        {sent ? <div className="form-success"><strong>¡Gracias por escribirnos!</strong><p>Recibimos tus datos. Un asesor se pondrá en contacto contigo.</p><button type="button" onClick={() => setSent(false)}>Enviar otra consulta</button></div> : <>
          <h2>Déjanos tus datos</h2><p>Los campos marcados con * son obligatorios.</p>
          <div className="field-row"><label>Nombre completo *<input required name="name" placeholder="Escribe tu nombre" /></label><label>Celular *<input required name="phone" type="tel" placeholder="+57 300 000 0000" /></label></div>
          <label>Correo electrónico *<input required name="email" type="email" placeholder="nombre@correo.com" /></label>
          <label>Proyecto de interés<select name="project" defaultValue=""><option value="" disabled>Selecciona una opción</option><option>Senderos del Río</option><option>Reserva de la Sabana</option><option>Parques de Occidente</option><option>Quiero recibir orientación</option></select></label>
          <label>¿Cómo podemos ayudarte?<textarea name="message" rows={4} placeholder="Cuéntanos qué información necesitas" /></label>
          <label className="check"><input required type="checkbox" /> <span>Acepto la política de tratamiento de datos personales.</span></label>
          <button className="button button-primary submit" type="submit">Enviar solicitud <span>→</span></button>
        </>}
      </form>
    </div></section>
    <section className="office-band"><div className="container"><div><div className="eyebrow">Proyecto Senderos de Suramérica</div><h2>Itagüí, Antioquia</h2><p>Calle 31 # 61–28<br />Colombia</p></div><div className="map-placeholder"><span>Promotora Senderos</span><b>Itagüí</b></div></div></section>
  </CorporatePage>;
}
