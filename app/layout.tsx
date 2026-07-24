import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const base = new URL(`${protocol}://${host}`);
  const title = "Promotora Senderos | Vivienda VIS en Colombia";
  const description = "Promotora Senderos integra planeación, modelación, presupuestos, cálculos y ejecución para la gerencia de proyectos de construcción en Antioquia.";
  return {
    metadataBase: base,
    title: { default: title, template: "%s | Promotora Senderos" },
    description,
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: { title, description, type: "website", locale: "es_CO", images: [{ url: new URL("/og.png", base).toString(), width: 1733, height: 907, alt: "Promotora Senderos — Construimos hogares. Impulsamos futuro." }] },
    twitter: { card: "summary_large_image", title, description, images: [new URL("/og.png", base).toString()] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
