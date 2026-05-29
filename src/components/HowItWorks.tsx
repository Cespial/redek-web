"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const steps = [
  {
    number: "01",
    stage: "INGRESO",
    headline: "Minutos",
    description: "Las partes cargan el caso; queda estructurado al instante.",
  },
  {
    number: "02",
    stage: "GESTIÓN",
    headline: "Asistida por IA",
    description: "Negociación, mediación o arbitraje guiados, con priorización automática.",
  },
  {
    number: "03",
    stage: "RESOLUCIÓN",
    headline: "Trazable",
    description: "Acuerdo con evidencia completa y auditable, en días.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="divide-section bg-bg py-28 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {/* Header */}
          <motion.p variants={fadeUp} className="eyebrow">
            Arquitectura del proceso
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="h-display mt-4 max-w-3xl text-4xl md:text-5xl"
          >
            Cómo resolvemos en{" "}
            <span className="text-brand">días, no en meses.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg text-muted"
          >
            Un flujo continuo del ingreso al acuerdo: estructuramos el caso,
            asistimos cada etapa con IA y entregamos una resolución auditable.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8">
            <a href="#soluciones" className="btn-secondary">
              Conoce la plataforma
              <span aria-hidden="true">&#8594;</span>
            </a>
          </motion.div>

          {/* Architecture row — 3 columns with hairline dividers */}
          <div className="mt-16 grid grid-cols-1 border-t border-line md:mt-20 md:grid-cols-3">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                variants={fadeUp}
                className={[
                  "py-10 md:py-12 md:px-10",
                  i === 0 ? "md:pl-0" : "",
                  i === steps.length - 1 ? "md:pr-0" : "",
                  i !== 0 ? "border-t border-line md:border-t-0 md:border-l" : "",
                ].join(" ")}
              >
                <div className="flex items-baseline gap-3">
                  <span className="numeral text-2xl text-muted md:text-3xl">
                    {step.number}
                  </span>
                  <span className="eyebrow">{step.stage}</span>
                </div>
                <p className="h-display mt-6 text-3xl text-brand md:text-4xl">
                  {step.headline}
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
