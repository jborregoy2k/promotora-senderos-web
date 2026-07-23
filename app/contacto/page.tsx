"use client";

import { FormEvent, useState } from "react";
import { CorporatePage } from "../components";

export default function Contacto() {
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent) { e.preventDefault(); setSent(true); }
  return <CorporatePage>
    <section className="contact-hero"><div className="container contact-layout"><div className="contact-intro"><div className="eyebrow light">Contacto</div><h1>Tu próximo hogar comienza con una conversación.</h1><p>Cuéntanos qué buscas. Nuestro equipo te orientará sobre proyectos, financiación y proceso de compra.</p><div className="contact-data"><div><small>LÍNEA COMERCIAL</small><a href="tel:+576017450800">+57 (601) 745 0800</a></div><div><small>CORREO</small><a href="mailto:contacto@senderos.com.co">contacto@senderos.com.co</a></div><div><small>HORARIO</small><span>Lun — Vie · 8:00 a.m. — 5:30 p.m.</span></div></div></div>
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
    <section className="office-band"><div className="container"><div><div className="eyebrow">Oficina principal</div><h2>Bogotá D.C.</h2><p>Carrera 11 # 93–53 · Piso 6<br />Colombia</p></div><div className="map-placeholder"><span>Promotora Senderos</span><b>Bogotá</b></div></div></section>
  </CorporatePage>;
}
