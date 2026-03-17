"use client";

import { motion } from "framer-motion";

const clients = [
  { name: "Ministerio de Justicia", style: "uppercase tracking-widest text-base font-bold" },
  { name: "Cámara de Comercio", style: "text-lg font-semibold tracking-tight" },
  { name: "Superintendencia de Sociedades", style: "uppercase tracking-wider text-sm font-bold" },
  { name: "Corte de Arbitraje", style: "text-lg font-light tracking-wide italic" },
  { name: "Banco de Desarrollo", style: "uppercase tracking-[0.25em] text-sm font-semibold" },
  { name: "Fiscalía General", style: "text-xl font-bold tracking-tighter" },
  { name: "Defensoría del Pueblo", style: "text-base font-medium tracking-wide" },
  { name: "Procuraduría Nacional", style: "uppercase tracking-widest text-sm font-bold" },
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
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee">
          {[...clients, ...clients].map((c, i) => (
            <div
              key={`${c.name}-${i}`}
              className="flex-shrink-0 px-10 flex items-center"
            >
              <span
                className={`text-gray-300 whitespace-nowrap select-none ${c.style}`}
              >
                {c.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
