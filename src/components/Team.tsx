"use client";

import { motion } from "framer-motion";

const team = [
  { name: "Nicolás Lozada", role: "Chief Executive Officer", initials: "NL" },
  { name: "Shirlei Plaza", role: "Chief Administration Officer", initials: "SP" },
  { name: "Jordan Rojas", role: "Project & Automation Manager", initials: "JR" },
  { name: "James Daly", role: "Business Development Advisor", initials: "JD" },
  { name: "Oscar Echeverry", role: "Commercial & Processes Manager", initials: "OE" },
  { name: "Miguel Andrade", role: "Operations Manager", initials: "MA" },
  { name: "Jacobo Gómez", role: "Head of R&D", initials: "JG" },
];

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Team() {
  return (
    <section id="equipo" className="py-32 bg-blue-50/40">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-semibold tracking-widest uppercase text-blue-600 mb-4"
          >
            Nuestro Equipo
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-medium tracking-tighter leading-[1.1] text-[#0F172A] max-w-2xl"
          >
            Las personas detrás de la precisión.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-gray-500 text-lg max-w-2xl"
          >
            Un equipo multidisciplinario que combina derecho, tecnología y
            visión de negocio.
          </motion.p>

          {/* Compact horizontal cards */}
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {team.map((m) => (
              <motion.div
                key={m.name}
                variants={fadeUp}
                className="flex items-center gap-4 bg-white border border-blue-100/60 rounded-xl px-5 py-4 hover:border-blue-200 transition-all duration-300 hover:-translate-y-0.5 group"
              >
                <div className="w-11 h-11 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
                  <span className="text-sm font-medium text-blue-600">
                    {m.initials}
                  </span>
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-[#0F172A] truncate">
                    {m.name}
                  </h3>
                  <p className="text-xs text-gray-400 truncate">{m.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
