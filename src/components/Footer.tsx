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
