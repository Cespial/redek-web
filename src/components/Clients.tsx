"use client";

import { motion } from "framer-motion";

const clients = [
  "Ministerio de Justicia",
  "Cámara de Comercio",
  "Superintendencia de Sociedades",
  "Corte de Arbitraje",
  "Banco de Desarrollo",
  "Fiscalía General",
  "Defensoría del Pueblo",
  "Procuraduría Nacional",
];

const fadeUp = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Clients() {
  return (
    <section className="py-14 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-xs font-semibold tracking-widest uppercase text-gray-400 text-center mb-10"
        >
          Organizaciones que confían en nosotros
        </motion.p>
      </div>

      {/* Infinite marquee */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee">
          {/* Duplicate the list for seamless loop */}
          {[...clients, ...clients].map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex-shrink-0 px-10 flex items-center"
            >
              <span className="text-lg font-semibold tracking-tight text-gray-300 whitespace-nowrap select-none">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
