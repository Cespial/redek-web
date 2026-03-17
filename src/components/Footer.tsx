"use client";

import Image from "next/image";

const links = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Equipo", href: "#equipo" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Logo + tagline */}
          <div>
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
            <p className="text-sm text-gray-500 max-w-xs">
              Pionera en soluciones jurídicas digitales. Precisión algorítmica,
              criterio humano.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-10">
            <div className="flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-gray-500 hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} REDEK. Todos los derechos reservados.
          </p>
          <p className="text-xs text-gray-600">
            Soluciones Tecnológicas para Resolución de Disputas
          </p>
        </div>
      </div>
    </footer>
  );
}
