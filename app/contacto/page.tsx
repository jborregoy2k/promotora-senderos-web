"use client";

import { FormEvent, useState } from "react";
import { CorporatePage } from "../components";

export default function Contacto() {
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent) { e.preventDefault(); setSent(true); }
  return <CorporatePage>
    <section className="contact-hero"><div className="container contact-layout"><div className="contact-intro"><div className="eyebrow light">Contacto</div><h1>Conversemos sobre tu próximo proyecto.</h1><p>Solicita información sobre cómo desarrollar, diseñar, financiar o construir tu lote, uotros servicios de proyectos.</p><div className="contact-data"><div><small>LÍNEAS DE ATENCIÓN</small><a className="whatsapp-link" href="https://wa.me/573127770990?text=Hola%20Promotora%20Senderos%2C%20quiero%20recibir%20informaci%C3%B3n." target="_blank" rel="noopener noreferrer" aria-label="Abrir chat de WhatsApp con Promotora Senderos"><img className="whatsapp-icon" src="/whatsapp.svg" alt="" />+57 312 777 0990</a></div><div><small>CORREOS</small><a href="mailto:info@promotorasenderos.com?subject=Contacto%20desde%20Website%20-%20Necesito%20informaci%C3%B3n">info@promotorasenderos.com</a></div><div><small>HORARIO</small><span>Lun — Vie · 8:00 a.m. — 5:00 p.m.</span></div></div></div>
      <form className="contact-form" onSubmit={submit}>
        {sent ? <div className="form-success"><strong>¡Gracias por escribirnos!</strong><p>Recibimos tus datos. Un asesor se pondrá en contacto contigo.</p><button type="button" onClick={() => setSent(false)}>Enviar otra consulta</button></div> : <>
          <h2>Déjanos tus datos</h2><p>Los campos marcados con * son obligatorios.</p>
          <div className="field-row"><label>Nombre completo *<input required name="name" placeholder="Escribe tu nombre" /></label><label>Celular *<input required name="phone" type="tel" placeholder="+57 300 000 0000" /></label></div>
          <label>Correo electrónico *<input required name="email" type="email" placeholder="nombre@correo.com" /></label>
          <label>Interés<select name="project" defaultValue=""><option value="" disabled>Selecciona una opción</option><option>Quiero hacer un proyecto inmobiliario</option><option>Quiero comprar una propiedad</option><option>Quiero construir una propiedad</option><option>Quiero recibir otra orientación</option></select></label>
          <label>¿Cómo podemos ayudarte?<textarea name="message" rows={4} placeholder="Cuéntanos qué información necesitas" /></label>
          <label className="check"><input required type="checkbox" /> <span>Acepto la política de tratamiento de datos personales.</span></label>
          <button className="button button-primary submit" type="submit">Enviar solicitud <span>→</span></button>
        </>}
      </form>
    </div></section>
    <section className="office-band"><div className="container"><div><div className="eyebrow">Correspondencia</div><h2>Promotora Senderos</h2><p>Calle 31 # 61–28 Of. 102<br />Itagüí, Antioquia 055413<br />Colombia</p></div><div className="map-block"><div className="map-placeholder"><iframe
      src="https://www.google.com/maps?q=Senderos%20de%20Suram%C3%A9rica%2C%20Calle%2031%20%23%2061-28%2C%20Itag%C3%BC%C3%AD%2C%20Antioquia%20055413&output=embed"
      title="Ubicación de Senderos de Suramérica en Itagüí"
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
    /></div><a
      className="waze-link"
      href="https://www.waze.com/ul?q=Calle%2031%20%23%2061-28%2C%20Itag%C3%BC%C3%AD%2C%20Antioquia%20055413&navigate=yes"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir la ubicación de Senderos de Suramérica en Waze"
    ><img src="/waze.svg" alt="" />Abrir en Waze</a></div></div></section>
  </CorporatePage>;
}
