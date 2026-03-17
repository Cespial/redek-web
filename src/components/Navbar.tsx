"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Equipo", href: "#equipo" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" as const }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo — blue icon natural + text */}
        <a href="#" className="flex items-center gap-2.5">
          <Image
            src="/redek-logo.png"
            alt="REDEK"
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
          />
          <span className="text-lg font-semibold tracking-tight text-[#0F172A]">
            REDEK
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-500 hover:text-[#0F172A] transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-800 transition-colors"
          >
            Agendar Demo
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span
            className={`block w-5 h-px bg-[#0F172A] transition-transform ${mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""}`}
          />
          <span
            className={`block w-5 h-px bg-[#0F172A] transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-px bg-[#0F172A] transition-transform ${mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white border-t border-gray-100"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base text-gray-600 hover:text-[#0F172A] transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setMobileOpen(false)}
                className="bg-blue-700 text-white px-5 py-3 rounded-full text-sm font-medium text-center mt-2"
              >
                Agendar Demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
