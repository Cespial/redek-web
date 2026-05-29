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
    <section id="equipo" className="divide-section bg-bg-soft py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.p variants={fadeUp} className="eyebrow mb-4">
            Nuestro Equipo
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="h-display max-w-2xl text-4xl md:text-5xl"
          >
            Las personas detrás de la{" "}
            <span className="text-brand">precisión</span>.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg text-muted"
          >
            Un equipo multidisciplinario que combina derecho, tecnología y
            visión de negocio.
          </motion.p>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <motion.div
                key={m.name}
                variants={fadeUp}
                className="card group flex items-center gap-4 px-5 py-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-bg-soft transition-colors group-hover:border-brand">
                  <span className="numeral text-xs font-semibold text-brand">
                    {m.initials}
                  </span>
                </div>
                <div className="min-w-0">
                  <h3 className="truncate text-sm font-semibold text-text">
                    {m.name}
                  </h3>
                  <p className="truncate text-xs text-muted">{m.role}</p>
                </div>
              </motion.div>
            ))}

            {/* Join CTA card */}
            <motion.a
              href="#contacto"
              variants={fadeUp}
              className="card group flex items-center gap-4 border-dashed px-5 py-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line transition-colors group-hover:border-brand">
                <span className="text-lg leading-none text-muted transition-colors group-hover:text-brand">
                  +
                </span>
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-brand">
                  Únete al equipo
                </h3>
                <p className="text-xs text-muted">Estamos creciendo</p>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
