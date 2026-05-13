import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lucas Ibarra | Soluciones Digitales · Viña del Mar & Valparaíso",
  description:
    "Desarrollo web de alta velocidad y automatización con IA para empresas en la V Región. Digitaliza tu negocio en tiempo récord.",
  keywords: [
    "desarrollo web Valparaíso",
    "desarrollo web Viña del Mar",
    "automatización IA V Región",
    "páginas web rápidas Chile",
    "digitalización empresas Chile",
    "NestJS Angular developer Chile",
  ],
  openGraph: {
    title: "Lucas Ibarra | Soluciones Digitales",
    description:
      "Digitalizamos tu negocio en la V Región en tiempo récord con Inteligencia Artificial.",
    type: "website",
    locale: "es_CL",
    url: "https://lucasibarra.cl",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
