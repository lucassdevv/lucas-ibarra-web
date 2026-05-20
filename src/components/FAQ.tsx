"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "¿Por qué necesito una web si ya tengo redes sociales?",
    a: "Las redes sociales no son tuyas y sus algoritmos cambian constantemente. Una web propia te da autoridad, posicionamiento en Google (SEO) para que te encuentren clientes nuevos, y control total sobre cómo presentas tus servicios y productos."
  },
  {
    q: "¿Cuánto tiempo demora el desarrollo?",
    a: "Depende de la complejidad. Una Landing Page de alta conversión puede estar lista en 1-2 semanas. Un sistema complejo a medida (como un ERP o automatización) tomará más tiempo. Trabajamos con metodologías ágiles para que veas avances rápidos."
  },
  {
    q: "¿Cómo es la forma de pago?",
    a: "Trabajamos con un esquema 50/50. Se solicita el 50% inicial para agendar el proyecto y comenzar el desarrollo. El 50% restante se paga contra entrega, una vez que pruebas y apruebas el resultado final en el entorno de pruebas."
  },
  {
    q: "¿Quién es el dueño del dominio y el código?",
    a: "Tú. Te asesoramos para que el dominio (.cl o .com) quede registrado bajo tu propio nombre o el de tu empresa. Una vez finalizado y pagado el proyecto, todo te pertenece."
  },
  {
    q: "¿Qué pasa si necesito cambios después?",
    a: "Ofrecemos planes mensuales o anuales de mantenimiento para actualizaciones de seguridad, cambios menores y soporte técnico continuo para que nunca te quedes solo."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad" style={{ background: "var(--bg-surface)" }}>
      <div className="container" style={{ maxWidth: "800px" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <h2 className="section-title" style={{ marginBottom: "16px" }}>
            Preguntas Frecuentes
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Todo lo que necesitas saber antes de empezar a digitalizar tu negocio.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div 
                key={i}
                className="glass-card"
                style={{ 
                  padding: "0", 
                  overflow: "hidden", 
                  border: isOpen ? "1px solid var(--border-hover)" : "1px solid var(--glass-border)",
                }}
              >
                <button
                  id={`faq-btn-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    background: isOpen ? "rgba(59,130,246,0.05)" : "transparent",
                    border: "none",
                    outline: "none",
                    padding: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "16px",
                    cursor: "pointer",
                    fontFamily: "inherit",
                    transition: "background 0.2s"
                  }}
                >
                  <span style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: isOpen ? "var(--text-primary)" : "var(--text-secondary)",
                    lineHeight: 1.4,
                    transition: "color 0.2s"
                  }}>
                    {faq.q}
                  </span>
                  <ChevronDown 
                    size={20} 
                    style={{ 
                      color: isOpen ? "var(--accent-bright)" : "var(--text-muted)",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "all 0.3s ease",
                      flexShrink: 0
                    }} 
                  />
                </button>
                
                <div 
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  style={{
                    maxHeight: isOpen ? "500px" : "0",
                    opacity: isOpen ? 1 : 0,
                    transition: "all 0.3s ease",
                    overflow: "hidden"
                  }}
                >
                  <p style={{
                    padding: "0 24px 24px",
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                    fontSize: "0.95rem"
                  }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
