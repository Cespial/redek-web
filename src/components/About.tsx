"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "Experiencia Probada",
    description:
      "Más de 20 años de expertise combinado en resolución de disputas y tecnología jurídica.",
  },
  {
    number: "02",
    title: "Enfoque al Cliente",
    description:
      "Soluciones personalizadas que se adaptan a las necesidades específicas de cada organización.",
  },
  {
    number: "03",
    title: "Innovación Continua",
    description:
      "Investigación y desarrollo permanente en inteligencia artificial aplicada al derecho.",
  },
  {
    number: "04",
    title: "Eficiencia Medible",
    description:
      "Reducción comprobable en tiempos y costos de resolución de conflictos.",
  },
];

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function About() {
  return (
    <section id="nosotros" className="divide-section bg-bg-soft py-28 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid items-start gap-16 md:grid-cols-2"
        >
          {/* Left — sticky */}
          <div className="md:sticky md:top-28">
            <motion.p variants={fadeUp} className="eyebrow mb-4">
              Conoce a REDEK
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="h-display text-4xl md:text-5xl"
            >
              Pionera en soluciones jurídicas{" "}
              <span className="text-brand">digitales.</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-6 text-lg leading-relaxed text-muted"
            >
              Somos especialistas en sistemas de resolución electrónica de
              disputas (ODR). Combinamos profundo conocimiento legal con
              tecnología de vanguardia para transformar la forma en que las
              organizaciones resuelven conflictos.
            </motion.p>
          </div>

          {/* Right — Pillars */}
          <div className="grid gap-6">
            {pillars.map((p) => (
              <motion.div
                key={p.number}
                variants={fadeUp}
                className="card flex gap-5 px-6 py-5"
              >
                <span className="numeral mt-0.5 shrink-0 text-sm text-brand">
                  {p.number}
                </span>
                <div>
                  <h3 className="font-display mb-1 text-base font-semibold text-text">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {p.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
