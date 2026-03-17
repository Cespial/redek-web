"use client";

import { motion } from "framer-motion";

const team = [
  { name: "Nicolás Lozada", role: "Chief Executive Officer", initials: "NL" },
  { name: "Shirlei Plaza", role: "Chief Administration Officer", initials: "SP" },
  { name: "Jordan Rojas", role: "Project & Automation Manager", initials: "JR" },
  { name: "James Daly", role: "Business Development Advisor", initials: "JD" },
  { name: "Oscar Echeverry", role: "Commercial & Processes Manager", initials: "OE" },
  { name: "Miguel Andrade", role: "Operations Manager", initials: "MA" },
  { name: "Jacobo Gómez", role: "Head of Research & Development", initials: "JG" },
];

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Team() {
  return (
    <section id="equipo" className="py-32 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-4"
          >
            Nuestro Equipo
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-medium tracking-tighter leading-[1.1] text-[#111] max-w-2xl"
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {team.map((m) => (
              <motion.div
                key={m.name}
                variants={fadeUp}
                className="group"
              >
                <div className="w-full aspect-square bg-zinc-50 border border-zinc-100 rounded-lg flex items-center justify-center mb-4 group-hover:border-zinc-300 transition-all duration-300 group-hover:-translate-y-1">
                  <span className="text-2xl font-light tracking-tight text-zinc-400 group-hover:text-[#111] transition-colors">
                    {m.initials}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-[#111]">{m.name}</h3>
                <p className="text-xs text-gray-400 mt-0.5">{m.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
