import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import AboutMe from "@/components/AboutMe";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Lucas Ibarra | Soluciones Digitales",
  "image": "https://lucasibarra.cl/profile/lucas-edited.webp",
  "@id": "https://lucasibarra.cl/#professional-service",
  "url": "https://lucasibarra.cl",
  "telephone": "+56942836741",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Viña del Mar",
    "addressRegion": "Valparaíso",
    "addressCountry": "CL",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -33.0245,
    "longitude": -71.5518,
  },
  "sameAs": [
    "https://wa.me/56942836741",
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
    ],
    "opens": "09:00",
    "closes": "19:00",
  },
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <PainPoints />
      <Services />
      <Portfolio />
      <Process />
      <AboutMe />
      <FAQ />
      <Footer />
    </main>
  );
}
