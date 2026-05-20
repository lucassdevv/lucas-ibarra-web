"use client";

import { Search, Code, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Auditoría y Propuesta (Gratis)",
    description: "Analizamos tu negocio y presencia digital actual. Si tienes una web, realizamos pruebas de rendimiento. Luego, te presentamos una propuesta clara y sin tecnicismos.",
    icon: <Search size={28} />,
  },
  {
    number: "02",
    title: "Desarrollo Ágil",
    description: "Al aprobar el presupuesto (50% inicial), comenzamos a construir. Tendrás acceso a un entorno de pruebas privado donde verás el progreso semana a semana.",
    icon: <Code size={28} />,
  },
  {
    number: "03",
    title: "Lanzamiento y Traspaso",
    description: "Una vez que apruebas el resultado final (50% restante), publicamos el sitio en tu propio dominio. Todo queda a tu nombre y te brindamos soporte continuo.",
    icon: <Rocket size={28} />,
  }
];

export default function Process() {
  return (
    <section id="proceso" className="section-pad" style={{ background: "var(--bg-base)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}>
            <span className="accent-tag">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
              Nuestro Flujo de Trabajo
            </span>
          </div>
          <h2 className="section-title" style={{ marginBottom: "16px" }}>
            Un proceso transparente de 3 pasos
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Sin letra chica ni sorpresas. Entregamos resultados medibles mediante un proceso estructurado, diseñado para darte tranquilidad total.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ position: "relative" }}>
          {steps.map((step, i) => (
            <div key={i} className="glass-card" style={{ padding: "40px 32px", position: "relative", overflow: "hidden" }}>
              {/* Background Number */}
              <div style={{
                position: "absolute",
                top: "-20px",
                right: "-10px",
                fontSize: "120px",
                fontWeight: 900,
                color: "rgba(255,255,255,0.02)",
                lineHeight: 1,
                fontFamily: "var(--font-space-grotesk), sans-serif",
                pointerEvents: "none"
              }}>
                {step.number}
              </div>

              <div style={{
                width: "56px",
                height: "56px",
                borderRadius: "14px",
                background: "var(--accent-dim)",
                color: "var(--accent-bright)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "24px",
                border: "1px solid rgba(59,130,246,0.3)",
                position: "relative",
                zIndex: 1
              }}>
                {step.icon}
              </div>
              <h3 style={{
                fontSize: "1.3rem",
                fontWeight: 800,
                color: "var(--text-primary)",
                marginBottom: "12px",
                lineHeight: 1.2,
                position: "relative",
                zIndex: 1
              }}>
                {step.title}
              </h3>
              <p style={{
                color: "var(--text-secondary)",
                lineHeight: 1.6,
                fontSize: "0.95rem",
                position: "relative",
                zIndex: 1
              }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
