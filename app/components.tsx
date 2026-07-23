import Link from "next/link";
import { SiteFooter, SiteHeader } from "./site-shell";

export function PageHero({ eyebrow, title, text, image }: { eyebrow: string; title: string; text: string; image: string }) {
  return <section className="page-hero"><img src={image} alt="" /><div className="page-hero-overlay" /><div className="container"><div className="eyebrow light">{eyebrow}</div><h1>{title}</h1><p>{text}</p></div></section>;
}

export function CorporatePage({ children }: { children: React.ReactNode }) {
  return <><SiteHeader /><main>{children}</main><SiteFooter /></>;
}

export function ContactBand() {
  return <section className="cta"><div className="container cta-inner"><div><div className="eyebrow light">Conversemos</div><h2>¿Tienes preguntas sobre tu próxima vivienda?</h2></div><Link className="button button-white" href="/contacto">Habla con un asesor <span>→</span></Link></div></section>;
}
