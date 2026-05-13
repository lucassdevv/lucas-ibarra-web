import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

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
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
