"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  ["/nosotros", "Nosotros"],
  ["/proyectos", "Proyectos"],
  ["/enfoque-vis", "Enfoque VIS"],
  ["/sostenibilidad", "Sostenibilidad"],
  ["/novedades", "Novedades"],
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
        <div className="footer-col"><h3>Compañía</h3><Link href="/nosotros">Quiénes somos</Link><Link href="/sostenibilidad">Sostenibilidad</Link><Link href="/novedades">Novedades</Link></div>
        <div className="footer-col"><h3>Proyectos</h3><Link href="/proyectos">En venta</Link><Link href="/proyectos">En construcción</Link><Link href="/enfoque-vis">Guía de compra VIS</Link></div>
        <div className="footer-col"><h3>Contacto</h3><p>Bogotá D.C., Colombia</p><a href="tel:+576017450800">+57 (601) 745 0800</a><a href="mailto:contacto@senderos.com.co">contacto@senderos.com.co</a></div>
      </div>
      <div className="container footer-bottom"><p>© 2026 Promotora Senderos S.A.S.</p><div><a href="#">Política de privacidad</a><a href="#">Tratamiento de datos</a><a href="#">Términos y condiciones</a></div></div>
    </footer>
  );
}
