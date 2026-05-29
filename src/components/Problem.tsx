"use client";

import { motion, useReducedMotion } from "framer-motion";

const pains = [
  {
    figure: "18 meses",
    label: "Tiempo promedio de un litigio comercial en tribunales tradicionales.",
  },
  {
    figure: "70%",
    label: "De los costos de un conflicto son fricción operativa, no el fondo del caso.",
  },
  {
    figure: "Opacidad",
    label: "Las partes pierden trazabilidad y control sobre su propio proceso.",
  },
];

export default function Problem() {
  const reduce = useReducedMotion();

  const fadeUp = {
    hidden: { y: reduce ? 0 : 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.55, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="problema"
      className="divide-section bg-bg py-28 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {/* Encabezado narrativo */}
          <motion.p variants={fadeUp} className="eyebrow">
            El problema
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="h-display mt-4 max-w-3xl text-4xl md:text-5xl lg:text-6xl"
          >
            Resolver una disputa{" "}
            <span className="text-brand">no debería tomar años.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg text-muted md:text-xl"
          >
            Hoy un conflicto comercial se arrastra entre instancias, audiencias
            que se aplazan y costos que crecen sin relación con lo que realmente
            está en juego. El proceso se vuelve el problema.
          </motion.p>

          {/* Grilla de dolor actual */}
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {pains.map((p) => (
              <motion.div
                key={p.figure}
                variants={fadeUp}
                className="card flex flex-col p-8"
              >
                <p className="numeral text-5xl font-bold text-brand md:text-6xl">
                  {p.figure}
                </p>
                <p className="mt-5 text-base leading-relaxed text-muted">
                  {p.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Línea puente */}
          <motion.p
            variants={fadeUp}
            className="h-display mt-16 max-w-3xl text-2xl text-text md:text-3xl"
          >
            REDEK convierte ese proceso en algo{" "}
            <span className="text-brand">medible, trazable y rápido.</span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
