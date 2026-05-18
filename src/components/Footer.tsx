"use client";

const WA_NUMBER = "56942836741";
const WA_URL = `https://wa.me/${WA_NUMBER}?text=Hola%20Lucas%2C%20quiero%20hablar%20sobre%20mi%20proyecto%20digital.`;

const contactItems = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Zona de operación",
    value: "Viña del Mar & Valparaíso, V Región",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Email",
    value: "libarra.vnb@gmail.com",
    href: "mailto:libarra.vnb@gmail.com",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    label: "WhatsApp",
    value: "+56 9 4283 6741",
    href: WA_URL,
  },
];

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#proceso", label: "Proceso" },
  { href: "#nosotros", label: "Sobre Mí" },
];

const services = [
  "Desarrollo Web de Alta Velocidad",
  "Automatización con IA",
  "Sistemas ERP a Medida",
  "Consultoría Digital",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contacto"
      style={{
        background: "var(--bg-surface)",
        borderTop: "1px solid var(--border)",
        paddingTop: "80px",
        paddingBottom: "32px",
      }}
    >
      <div className="container">
        {/* Top grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "40px",
          marginBottom: "48px",
        }} className="footer-grid">

          {/* Brand column */}
          <div style={{ gridColumn: "span 1" }} className="footer-brand">
            <div style={{ marginBottom: "20px" }}>
              <div style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontWeight: 800,
                fontSize: "1.4rem",
                color: "var(--text-primary)",
                letterSpacing: "-0.03em",
                marginBottom: "4px",
              }}>
                Lucas <span style={{ color: "var(--accent-bright)" }}>Ibarra</span>
              </div>
              <div style={{
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
              }}>
                Soluciones Digitales
              </div>
            </div>

            <p style={{
              color: "var(--text-secondary)",
              fontSize: "0.88rem",
              lineHeight: 1.6,
              maxWidth: "320px",
              marginBottom: "24px",
            }}>
              Desarrollo web de alta velocidad y automatización con IA para empresas de la V Región que quieren crecer en el mundo digital.
            </p>

            {/* Contact items */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {contactItems.map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <span style={{ color: "var(--accent-bright)", flexShrink: 0, marginTop: "2px" }}>{item.icon}</span>
                  <div>
                    <div style={{ fontSize: "0.65rem", color: "var(--text-muted)", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" as const, marginBottom: "2px" }}>
                      {item.label}
                    </div>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" style={{ color: "var(--text-secondary)", fontSize: "0.85rem", textDecoration: "none", transition: "color 0.2s" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-bright)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span style={{ color: "var(--text-secondary)", fontSize: "0.85rem" }}>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div className="footer-links">
            <h4 style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "16px" }}>
              Navegación
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: "0.88rem", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-bright)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-services">
            <h4 style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "16px" }}>
              Servicios
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {services.map((s) => (
                <li key={s} style={{ color: "var(--text-secondary)", fontSize: "0.88rem" }}>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="divider" style={{ marginBottom: "24px" }} />

        {/* Bottom bar */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
        }}>
          <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", width: "100%", textAlign: "center" }} className="footer-copy-mobile">
            © {year} Lucas Ibarra · Soluciones Digitales · Viña del Mar, Chile
          </p>
          <div style={{ width: "100%", display: "flex", justifyContent: "center" }} className="show-mobile">
             <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "var(--accent-bright)",
                fontSize: "0.85rem",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Auditoría Gratis por WhatsApp
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .footer-copy-mobile { width: auto !important; text-align: left !important; }
        }
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
