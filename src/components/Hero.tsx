"use client";

const WA_NUMBER = "56942836741";
const WA_URL = `https://wa.me/${WA_NUMBER}?text=Hola%20Lucas%2C%20quiero%20hablar%20sobre%20mi%20proyecto%20digital.`;

export default function Hero() {
  return (
    <section
      id="inicio"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        paddingTop: "72px",
      }}
    >
      {/* Grid background */}
      <div className="grid-bg" />

      {/* Glow blobs */}
      <div className="glow-blob glow-blob-1" />
      <div className="glow-blob glow-blob-2" />

      {/* Bottom fade */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "150px",
        background: "linear-gradient(to top, var(--bg-base), transparent)",
        pointerEvents: "none",
        zIndex: 1,
      }} />

      <div className="container" style={{ position: "relative", zIndex: 10, padding: "clamp(40px, 10vw, 80px) 20px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>

          {/* Live badge */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "24px" }}>
            <div className="float-anim" style={{ 
              display: "inline-flex", 
              alignItems: "center", 
              gap: "10px", 
              padding: "8px 16px", 
              background: "rgba(8,15,31,0.8)", 
              border: "1px solid rgba(59,130,246,0.2)", 
              borderRadius: "100px", 
              backdropFilter: "blur(12px)" 
            }}>
              <div className="pulse-dot">
                <div className="pulse-dot-inner" />
              </div>
              <span style={{ fontSize: "clamp(0.65rem, 2vw, 0.75rem)", fontWeight: 700, color: "var(--text-secondary)", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                Disponible · V Región, Chile
              </span>
            </div>
          </div>

          {/* H1 */}
          <h1 style={{
            fontSize: "clamp(2.1rem, 9vw, 4.2rem)",
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: "20px",
            color: "var(--text-primary)",
            wordBreak: "break-word",
          }}>
            Digitalizamos tu negocio{" "}
            <br className="hide-mobile" />
            en la <span className="gradient-text">V Región</span>{" "}
            en tiempo récord con{" "}
            <span style={{
              position: "relative",
              display: "inline-block",
              color: "var(--accent-bright)",
            }}>
              Inteligencia Artificial
              <span style={{
                position: "absolute",
                bottom: "2px",
                left: 0,
                right: 0,
                height: "2px",
                background: "linear-gradient(90deg, var(--accent), rgba(59,130,246,0))",
              }} />
            </span>.
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: "clamp(0.95rem, 3vw, 1.2rem)",
            color: "var(--text-secondary)",
            lineHeight: 1.6,
            maxWidth: "700px",
            margin: "0 auto 40px",
          }}>
            Desarrollo web de alta velocidad y automatización de procesos para empresas que quieren{" "}
            <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>vender más</strong>{" "}y{" "}
            <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>ahorrar tiempo</strong>.
          </p>

          {/* CTA Buttons */}
          <div style={{ 
            display: "flex", 
            flexDirection: "column",
            alignItems: "center",
            gap: "12px", 
            justifyContent: "center",
          }} className="hero-ctas">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon btn-neon-pulse"
              style={{ width: "100%", maxWidth: "340px" }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: "4px" }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Hablemos de tu proyecto
            </a>

            <a href="#proyectos" className="btn-ghost" style={{ width: "100%", maxWidth: "340px" }}>
              Ver proyectos
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginLeft: "8px" }}>
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 600px) {
          .hero-ctas { flex-direction: row !important; }
        }
      `}</style>
    </section>
  );
}
