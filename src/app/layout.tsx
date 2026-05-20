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
  metadataBase: new URL("https://lucasibarra.cl"),
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
    "diseño de paginas web Vina del Mar",
    "desarrollador freelance Chile",
    "automatizacion n8n Chile",
  ],
  alternates: {
    canonical: "https://lucasibarra.cl",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Lucas Ibarra | Soluciones Digitales · Viña del Mar & Valparaíso",
    description:
      "Desarrollo web de alta velocidad y automatización con IA para empresas de la V Región. ¡Agenda tu auditoría gratis!",
    type: "website",
    locale: "es_CL",
    url: "https://lucasibarra.cl",
    siteName: "Lucas Ibarra | Soluciones Digitales",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lucas Ibarra | Soluciones Digitales · Viña del Mar & Valparaíso",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucas Ibarra | Soluciones Digitales · Viña del Mar & Valparaíso",
    description:
      "Desarrollo web de alta velocidad y automatización con IA para empresas de la V Región. ¡Agenda tu auditoría gratis!",
    images: ["/og-image.png"],
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
