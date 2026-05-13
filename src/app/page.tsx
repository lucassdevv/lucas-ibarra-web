import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import AboutMe from "@/components/AboutMe";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
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
