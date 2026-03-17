"use client";

import Image from "next/image";

const navLinks = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Equipo", href: "#equipo" },
  { label: "Contacto", href: "#contacto" },
];

const legalLinks = [
  { label: "Política de Privacidad", href: "#" },
  { label: "Términos de Uso", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0C1B3A] text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo + tagline */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/redek-logo.png"
                alt="REDEK"
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
              />
              <span className="text-xl font-semibold tracking-tight">
                REDEK
              </span>
            </div>
            <p className="text-sm text-blue-200/60 max-w-xs leading-relaxed">
              Pionera en soluciones jurídicas digitales. Precisión algorítmica,
              criterio humano.
            </p>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/redek"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm text-blue-200/60 hover:text-white transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-blue-300 mb-4">
              Navegación
            </h4>
            <div className="flex flex-col gap-2.5">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-blue-100/60 hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-blue-300 mb-4">
              Legal
            </h4>
            <div className="flex flex-col gap-2.5">
              {legalLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-sm text-blue-100/60 hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-blue-300 mb-4">
              Contacto
            </h4>
            <div className="flex flex-col gap-2.5">
              <a
                href="mailto:info@redek.co"
                className="text-sm text-blue-100/60 hover:text-white transition-colors"
              >
                info@redek.co
              </a>
              <a
                href="https://redek.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-100/60 hover:text-white transition-colors"
              >
                redek.co
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-blue-200/50">
            &copy; {new Date().getFullYear()} REDEK. Todos los derechos reservados.
          </p>
          <p className="text-xs text-blue-200/50">
            Soluciones Tecnológicas para Resolución de Disputas
          </p>
        </div>
      </div>
    </footer>
  );
}
