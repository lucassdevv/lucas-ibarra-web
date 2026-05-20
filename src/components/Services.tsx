"use client";

import { Zap, Code2, Bot } from "lucide-react";

const services = [
  {
    id: "landing",
    title: "Webs Ultra-Rápidas",
    description: "Landing pages optimizadas (100/100 en Google Lighthouse), integración de WhatsApp, sistemas de reservas o CRUDs sencillos para captar clientes 24/7.",
    icon: <Zap size={28} strokeWidth={1.5} />,
    accent: "#f59e0b",
  },
  {
    id: "erp",
    title: "Sistemas a Medida (ERP / CRM)",
    description: "Desarrollo de software complejo y bases de datos robustas (PostgreSQL, MongoDB) para controlar, ordenar y escalar la operativa interna de tu negocio.",
    icon: <Code2 size={28} strokeWidth={1.5} />,
    accent: "#3b82f6",
  },
  {
    id: "ia",
    title: "Automatización con IA",
    description: "Creación de chatbots inteligentes y automatización de flujos de trabajo (n8n, Make) para eliminar tareas manuales y reducir horas de trabajo operativo.",
    icon: <Bot size={28} strokeWidth={1.5} />,
    accent: "#8b5cf6",
  }
];

export default function Services() {
  return (
    <section id="servicios" className="section-pad" style={{ background: "var(--bg-base)", position: "relative" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}>
            <span className="accent-tag">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
              Servicios Digitales
            </span>
          </div>
          <h2 className="section-title" style={{ marginBottom: "16px" }}>
            Soluciones que escalan tu negocio
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Especializados en arquitecturas modernas y rendimiento extremo. 
            Desde una presencia web imbatible hasta software interno complejo.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="glass-card" style={{ padding: "40px 32px", display: "flex", flexDirection: "column" }}>
              <div style={{
                width: "56px",
                height: "56px",
                borderRadius: "14px",
                background: `${service.accent}15`,
                color: service.accent,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "24px",
                border: `1px solid ${service.accent}30`,
              }}>
                {service.icon}
              </div>
              <h3 style={{
                fontSize: "1.4rem",
                fontWeight: 800,
                color: "var(--text-primary)",
                marginBottom: "12px",
                lineHeight: 1.2,
              }}>
                {service.title}
              </h3>
              <p style={{
                color: "var(--text-secondary)",
                lineHeight: 1.6,
                fontSize: "0.95rem",
              }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
