"use client";

import { AlertCircle, Clock, Zap, TrendingDown } from "lucide-react";

const painPoints = [
  {
    id: "lentitud",
    tag: "Pérdida de clientes",
    title: "Sitios web lentos y obsoletos",
    description: "Cada segundo de carga extra te cuesta dinero. Si tu web no vuela, tus clientes se van a la competencia.",
    icon: <Zap size={22} />,
    iconBg: "rgba(59, 130, 246, 0.1)",
    iconColor: "#3b82f6",
    accent: "#3b82f6",
    metric: { value: "53%", label: "usuarios abandonan si tarda >3s" },
    size: "wide",
  },
  {
    id: "procesos",
    tag: "Ineficiencia",
    title: "Procesos manuales lentos",
    description: "¿Sigues usando planillas de papel o Excel para todo? La automatización elimina el error humano.",
    icon: <Clock size={22} />,
    iconBg: "rgba(245, 158, 11, 0.1)",
    iconColor: "#f59e0b",
    accent: "#f59e0b",
  },
  {
    id: "conversion",
    tag: "Ventas bajas",
    title: "Baja tasa de conversión",
    description: "Mucho tráfico pero pocas llamadas. Tu diseño actual no transmite la confianza que tu negocio merece.",
    icon: <TrendingDown size={22} />,
    iconBg: "rgba(239, 68, 68, 0.1)",
    iconColor: "#ef4444",
    accent: "#ef4444",
  },
  {
    id: "ia",
    tag: "Tecnología",
    title: "Miedo a la IA",
    description: "La IA no va a reemplazar tu negocio, pero alguien que la use sí podría hacerlo. Te ayudamos a integrarla.",
    icon: <AlertCircle size={22} />,
    iconBg: "rgba(139, 92, 246, 0.1)",
    iconColor: "#8b5cf6",
    accent: "#8b5cf6",
    metric: { value: "40%", label: "ahorro en tiempo operativo" },
    size: "wide",
  },
];

export default function PainPoints() {
  return (
    <section id="problemas" className="section-pad" style={{ background: "var(--bg-surface)", position: "relative" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}>
            <span className="accent-tag">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              El problema
            </span>
          </div>
          <h2 className="section-title" style={{ marginBottom: "16px" }}>
            ¿Tu negocio sufre estos problemas?
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Las empresas de la V Región pierden competitividad por tecnología obsoleta. 
            Es momento de dar el salto digital.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {painPoints.map((point) => (
            <div
              key={point.id}
              className={`glass-card ${point.size === "wide" ? "md:col-span-2 lg:col-span-2" : ""}`}
              style={{ padding: "clamp(24px, 5vw, 32px)", display: "flex", flexDirection: "column" }}
            >
              {/* Tag */}
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "4px 12px",
                background: `${point.accent}15`,
                border: `1px solid ${point.accent}30`,
                borderRadius: "100px",
                fontSize: "0.65rem",
                fontWeight: 800,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: point.accent,
                marginBottom: "20px",
                width: "fit-content"
              }}>
                {point.tag}
              </div>

              {/* Icon + Title */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "16px", marginBottom: "16px" }}>
                <div
                  className="icon-box"
                  style={{ background: point.iconBg, color: point.iconColor, width: "42px", height: "42px", minWidth: "42px" }}
                >
                  {point.icon}
                </div>
                <h3 style={{
                  fontSize: "clamp(1.1rem, 4vw, 1.3rem)",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  lineHeight: 1.2,
                  marginTop: "2px",
                }}>
                  {point.title}
                </h3>
              </div>

              {/* Description */}
              <p style={{
                color: "var(--text-secondary)",
                lineHeight: 1.6,
                fontSize: "0.9rem",
                marginBottom: point.metric ? "24px" : "0",
              }}>
                {point.description}
              </p>

              {/* Metric badge */}
              {point.metric && (
                <div style={{
                  marginTop: "auto",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "12px 16px",
                  background: "rgba(0,0,0,0.2)",
                  border: `1px solid ${point.accent}20`,
                  borderRadius: "10px",
                  width: "fit-content"
                }}>
                  <span style={{
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                    fontSize: "1.6rem",
                    fontWeight: 800,
                    color: point.accent,
                  }}>
                    {point.metric.value}
                  </span>
                  <span style={{ fontSize: "0.7rem", color: "var(--text-secondary)", maxWidth: "150px", lineHeight: 1.3, fontWeight: 500 }}>
                    {point.metric.label}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
