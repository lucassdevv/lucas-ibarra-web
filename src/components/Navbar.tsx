"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const WA_NUMBER = "56942836741"; 
const WA_URL = `https://wa.me/${WA_NUMBER}?text=Hola%20Lucas%2C%20me%20interesa%20una%20auditor%C3%ADa%20gratis%20para%20mi%20negocio.`;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { href: "#servicios", label: "Servicios" },
    { href: "#proyectos", label: "Proyectos" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px", gap: "12px" }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", flexShrink: 0 }}>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
            <span style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.05rem, 4.5vw, 1.25rem)",
              color: "var(--text-primary)",
              letterSpacing: "-0.03em",
            }}>
              Lucas <span style={{ color: "var(--accent-bright)" }}>Ibarra</span>
            </span>
            <span style={{
              fontSize: "0.6rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
            }}>
              Soluciones Digitales
            </span>
          </div>
        </Link>

        {/* Desktop nav links */}
        <div style={{ display: "flex", alignItems: "center", gap: "32px" }} className="desktop-nav hide-mobile">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                color: "var(--text-secondary)",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: 500,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-bright)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="navbar-cta"
            className="hide-mobile"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 22px",
              background: "var(--accent-dim)",
              border: "1px solid rgba(59,130,246,0.3)",
              borderRadius: "10px",
              color: "var(--accent-bright)",
              fontSize: "0.85rem",
              fontWeight: 600,
              textDecoration: "none",
              fontFamily: "var(--font-space-grotesk), sans-serif",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 5.49 5.49l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/>
            </svg>
            Auditoría Gratis
          </a>

          {/* Hamburger */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "rgba(59,130,246,0.08)",
              border: "1px solid rgba(59,130,246,0.15)",
              borderRadius: "10px",
              cursor: "pointer",
              color: "var(--accent-bright)",
              display: "none",
              padding: "10px",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="mobile-menu-btn show-mobile"
            aria-label="Menú"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5">
              {menuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div style={{
          position: "fixed",
          top: "72px",
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(4,8,17,0.98)",
          backdropFilter: "blur(20px)",
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          zIndex: 100,
        }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                padding: "20px 0",
                color: "var(--text-primary)",
                textDecoration: "none",
                fontSize: "1.2rem",
                fontWeight: 700,
                borderBottom: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              padding: "18px",
              background: "var(--accent)",
              color: "white",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: 800,
              fontSize: "1.1rem",
              boxShadow: "0 10px 30px rgba(59,130,246,0.3)",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 5.49 5.49l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/>
            </svg>
            Auditoría Gratis
          </a>
        </div>
      )}
    </nav>
  );
}
