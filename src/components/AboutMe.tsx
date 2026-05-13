"use client";

import Image from "next/image";
import { GraduationCap, MapPin, Building2, Terminal } from "lucide-react";

export default function AboutMe() {
  return (
    <section id="nosotros" className="section-pad" style={{ background: "var(--bg-surface)", position: "relative" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}>
            <span className="accent-tag">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              Sobre el desarrollador
            </span>
          </div>
          <h2 className="section-title" style={{ marginBottom: "16px" }}>
            El talento técnico detrás del código
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Desarrollo local con estándares de calidad internacionales. Conoce a Lucas Ibarra, el experto que impulsará la digitalización de tu negocio.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "48px",
          alignItems: "center"
        }}>
          {/* Photo/Avatar Side */}
          <div style={{ position: "relative", width: "100%", aspectRatio: "1/1", maxWidth: "400px", margin: "0 auto" }}>
            <div style={{
              position: "absolute",
              inset: "-10px",
              background: "linear-gradient(135deg, var(--accent), var(--accent-bright))",
              borderRadius: "24px",
              opacity: 0.15,
              filter: "blur(20px)",
              zIndex: 0
            }} />
            <div style={{
              position: "relative",
              width: "100%",
              height: "100%",
              borderRadius: "20px",
              overflow: "hidden",
              border: "1px solid var(--glass-border)",
              zIndex: 1,
              background: "var(--bg-elevated)"
            }}>
              <Image 
                src="/profile/lucas.png" 
                alt="Lucas Ibarra"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </div>

          {/* Details Side */}
          <div>
            <h3 style={{
              fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
              fontWeight: 800,
              color: "var(--text-primary)",
              marginBottom: "24px",
              lineHeight: 1.2
            }}>
              Lucas Ibarra
            </h3>
            <p style={{
              color: "var(--text-secondary)",
              fontSize: "1.05rem",
              lineHeight: 1.7,
              marginBottom: "32px"
            }}>
              Soy un desarrollador Full Stack apasionado por llevar la mejor tecnología a las pymes tradicionales. Mi objetivo es que tu negocio deje de depender del papel y procesos lentos, integrando soluciones digitales modernas, rápidas y seguras.
            </p>

            <div style={{ display: "grid", gap: "20px" }}>
              {[
                { icon: <GraduationCap size={24} />, title: "Formación de Excelencia", desc: "Egresado de Informática de la prestigiosa Universidad Técnica Federico Santa María." },
                { icon: <MapPin size={24} />, title: "Experto Local", desc: "Basado en la V Región, comprendo las necesidades y los dolores del comercio local." },
                { icon: <Building2 size={24} />, title: "Experiencia Internacional", desc: "Trayectoria en Azurian, consultora internacional de software creando soluciones empresariales robustas." },
                { icon: <Terminal size={24} />, title: "Perfil Full Stack", desc: "Dominio técnico completo: desde el Frontend visual hasta arquitecturas Backend y Bases de Datos (Node.js, PostgreSQL)." },
              ].map((item, idx) => (
                <div key={idx} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <div style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: "rgba(59,130,246,0.1)",
                    color: "var(--accent-bright)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    border: "1px solid rgba(59,130,246,0.2)"
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 style={{ color: "var(--text-primary)", fontWeight: 700, fontSize: "1rem", marginBottom: "4px" }}>{item.title}</h4>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.5 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
