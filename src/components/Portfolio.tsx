"use client";

import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    id: "erp-logistico",
    tag: "Logística & Gestión",
    title: "ERP de Gestión Territorial",
    subtitle: "Digitalización de operaciones en terreno",
    description: "Sistema integral desarrollado con NestJS y Angular para optimizar la planificación y seguimiento de recursos. Eliminamos el uso de planillas de papel, logrando trazabilidad total en tiempo real.",
    images: [
      "/projects/erp/1.webp",
      "/projects/erp/2.webp",
      "/projects/erp/3.webp",
    ],
    tech: ["NestJS", "Angular", "PostgreSQL", "Google Maps API"],
    accentColor: "#3b82f6",
    impact: [
      { icon: "📉", text: "Eliminación total de planillas físicas" },
      { icon: "⚡", text: "Reducción del 40% en tiempos de reporte" },
      { icon: "📍", text: "Trazabilidad geográfica en tiempo real" },
    ]
  },
  {
    id: "creativ-hub",
    tag: "Marketplace MVP",
    title: "CreatiV Hub",
    subtitle: "Lanzamiento ágil con asistencia de IA",
    description: "Plataforma de comercio digital para creativos. Demostramos capacidad de ejecución extrema lanzando un MVP funcional en solo 30 minutos utilizando herramientas de IA avanzada.",
    images: [
      "/projects/creativhub/Screenshot_20260512_134945.webp",
      "/projects/creativhub/Screenshot_20260512_134957.webp",
      "/projects/creativhub/Screenshot_20260512_135006.webp",
      "/projects/creativhub/Screenshot_20260512_135014.webp",
      "/projects/creativhub/Screenshot_20260512_135033.webp",
      "/projects/creativhub/Screenshot_20260512_135041.webp",
    ],
    tech: ["Next.js", "Tailwind CSS", "Supabase", "AI Tools"],
    accentColor: "#8b5cf6",
    impact: [
      { icon: "⏱️", text: "Despliegue récord de 30 minutos" },
      { icon: "🚀", text: "MVP funcional listo para mercado" },
      { icon: "🎨", text: "Diseño moderno y centrado en el usuario" },
    ]
  }
];

const WA_NUMBER = "56942836741";
const WA_URL = `https://wa.me/${WA_NUMBER}?text=Hola%20Lucas%2C%20vi%20tu%20portfolio%20y%20me%20gustar%C3%ADa%20cotizar%20un%20proyecto.`;

function ProjectCard({ project, reversed }: { project: typeof projects[0]; reversed?: boolean }) {
  const [activeImg, setActiveImg] = useState(0);

  return (
    <div
      id={`project-${project.id}`}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "40px",
        alignItems: "center",
      }}
      className={`project-row ${reversed ? "row-reverse-desktop" : ""}`}
    >
      {/* Image side */}
      <div className="project-media" style={{ width: "100%" }}>
        {/* Main image container */}
        <div
          className="project-img-wrapper"
          style={{ 
            marginBottom: "16px", 
            aspectRatio: "16/10", 
            position: "relative", 
            background: "var(--bg-elevated)",
            boxShadow: "0 10px 40px rgba(0,0,0,0.3)"
          }}
        >
          <Image
            src={project.images[activeImg]}
            alt={`${project.title}`}
            fill
            style={{ objectFit: "cover", objectPosition: "top" }}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={project.id === "erp-logistico"}
          />
        </div>

        {/* Thumbnail strip */}
        <div style={{
          display: "flex",
          gap: "10px",
          overflowX: "auto",
          paddingBottom: "12px",
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
        }} className="no-scrollbar">
          {project.images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveImg(i)}
              style={{
                flexShrink: 0,
                width: "min(80px, 20vw)",
                aspectRatio: "16/10",
                borderRadius: "8px",
                overflow: "hidden",
                border: `2px solid ${i === activeImg ? project.accentColor : "transparent"}`,
                cursor: "pointer",
                background: "var(--bg-elevated)",
                padding: 0,
                position: "relative",
                transition: "all 0.2s",
                opacity: i === activeImg ? 1 : 0.5,
                scrollSnapAlign: "start",
              }}
            >
              <Image
                src={img}
                alt={`Miniatura del proyecto ${project.title} - Imagen ${i + 1}`}
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
                sizes="80px"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Content side */}
      <div className="project-content">
        <div style={{ marginBottom: "12px" }}>
          <span style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "5px 14px",
            background: `${project.accentColor}12`,
            border: `1px solid ${project.accentColor}25`,
            borderRadius: "100px",
            fontSize: "0.7rem",
            fontWeight: 800,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: project.accentColor,
          }}>
            {project.tag}
          </span>
        </div>

        <h3 style={{
          fontSize: "clamp(1.6rem, 5vw, 2.2rem)",
          fontWeight: 800,
          color: "var(--text-primary)",
          marginBottom: "8px",
          lineHeight: 1.1,
        }}>
          {project.title}
        </h3>
        <p style={{ 
          color: project.accentColor, 
          fontSize: "0.85rem", 
          fontWeight: 700, 
          marginBottom: "20px", 
          textTransform: "uppercase", 
          letterSpacing: "0.05em" 
        }}>
          {project.subtitle}
        </p>

        <p style={{
          color: "var(--text-secondary)",
          lineHeight: 1.6,
          fontSize: "0.95rem",
          marginBottom: "24px",
        }}>
          {project.description}
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "28px" }}>
          {project.impact.map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
              <span style={{ fontSize: "1rem", flexShrink: 0, marginTop: "2px" }}>{item.icon}</span>
              <span style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.4 }}>{item.text}</span>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {project.tech.map((t) => (
            <span key={t} style={{
              padding: "4px 12px",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "6px",
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "var(--text-muted)",
            }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .row-reverse-desktop { direction: rtl; }
          .row-reverse-desktop .project-media, 
          .row-reverse-desktop .project-content { direction: ltr; }
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="proyectos" className="section-pad" style={{ background: "var(--bg-base)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}>
            <span className="accent-tag">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
              Casos de éxito
            </span>
          </div>
          <h2 className="section-title" style={{ marginBottom: "16px" }}>
            Proyectos con impacto
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Soluciones reales para problemas complejos. No solo código, sino herramientas que generan resultados.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(60px, 12vw, 100px)" }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} reversed={i % 2 !== 0} />
          ))}
        </div>

        {/* CTA Card */}
        <div style={{
          textAlign: "center",
          marginTop: "100px",
          padding: "clamp(40px, 8vw, 64px) 24px",
          background: "linear-gradient(135deg, rgba(8,15,31,0.8), rgba(13,23,41,0.8))",
          border: "1px solid var(--glass-border)",
          borderRadius: "24px",
          backdropFilter: "blur(20px)",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "300px",
            height: "150px",
            background: "radial-gradient(ellipse, rgba(59,130,246,0.2) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          <h3 style={{
            fontSize: "clamp(1.5rem, 5vw, 2.4rem)",
            fontWeight: 800,
            marginBottom: "16px",
            position: "relative",
          }}>
            ¿Tu proyecto es el siguiente?
          </h3>
          <p style={{
            color: "var(--text-secondary)",
            fontSize: "clamp(0.95rem, 3vw, 1.1rem)",
            marginBottom: "32px",
            position: "relative",
            maxWidth: "600px",
            margin: "0 auto 32px",
          }}>
            Agenda una llamada de 15 minutos para analizar cómo podemos digitalizar tu negocio.
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon"
            style={{ position: "relative", width: "100%", maxWidth: "340px" }}
          >
            Empieza hoy mismo
          </a>
        </div>
      </div>
    </section>
  );
}
