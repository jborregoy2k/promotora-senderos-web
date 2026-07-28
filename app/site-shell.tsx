"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  ["/nosotros", "Nosotros"],
  ["/proyectos", "Proyectos"],
  ["/servicios", "Servicios"],
  ["/sostenibilidad", "Sostenibilidad"],
];

export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="Promotora Senderos, inicio">
      <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
      <span><b>PROMOTORA</b><strong>SENDEROS</strong></span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Brand />
        <nav className={`main-nav ${open ? "is-open" : ""}`} aria-label="Navegación principal">
          {navigation.map(([href, label]) => <Link className={pathname === href ? "active" : ""} href={href} key={href}>{label}</Link>)}
          <Link className="button button-nav" href="/contacto">Hablemos <span>→</span></Link>
        </nav>
        <button className={`menu-button ${open ? "is-open" : ""}`} onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Cerrar menú" : "Abrir menú"}><span /><span /></button>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-brand"><Brand /><p>Construimos vivienda.<br />Impulsamos futuro.</p></div>
        <div className="footer-col"><h3>Compañía</h3><Link href="/nosotros">Quiénes somos</Link><Link href="/servicios">Servicios</Link><Link href="/sostenibilidad">Nuestra filosofía</Link></div>
        <div className="footer-col"><h3>Proyectos Recientes</h3><Link href="/proyectos#casa-24">Casa 24</Link><Link href="/proyectos#bodega-tierra-fertil">Bodega Tierra Fértil</Link><Link href="/contacto">Solicitar información</Link></div>
        <div className="footer-col"><h3>Contacto</h3><a className="whatsapp-link" href="https://wa.me/573127770990?text=Hola%20Promotora%20Senderos%2C%20quiero%20recibir%20informaci%C3%B3n." target="_blank" rel="noopener noreferrer" aria-label="Abrir chat de WhatsApp con Promotora Senderos"><img className="whatsapp-icon" src="/whatsapp.svg" alt="" />+57 312 777 0990</a><a href="mailto:info@promotorasenderos.com?subject=Contacto%20desde%20Website%20-%20Necesito%20informaci%C3%B3n">info@promotorasenderos.com</a></div>
      </div>
      <div className="container footer-bottom"><p>© 2011-2026 Promotora Senderos S.A.S.</p><div><a href="#">Política de privacidad</a><a href="#">Tratamiento de datos</a><a href="#">Términos y condiciones</a></div></div>
    </footer>
  );
}
