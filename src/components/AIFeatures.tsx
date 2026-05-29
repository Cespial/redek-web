"use client";

import { motion } from "framer-motion";

const features = [
  {
    abbr: "AL",
    title: "Automatización Legal (RPA)",
    description:
      "Procesos repetitivos gestionados por agentes inteligentes que reducen errores y aceleran resoluciones.",
    metric: "Reduce tiempos de gestión hasta 70%",
  },
  {
    abbr: "AP",
    title: "Análisis Predictivo",
    description:
      "Machine learning aplicado a patrones de conflicto para anticipar resultados y optimizar estrategias.",
    metric: "94% de precisión en predicción de resultados",
  },
  {
    abbr: "CD",
    title: "Clasificación Documental",
    description:
      "Procesamiento avanzado de documentos legales con clasificación automática por relevancia y tipo.",
    metric: "Procesa +10,000 documentos por hora",
  },
  {
    abbr: "PC",
    title: "Prevención de Conflictos",
    description:
      "Detección temprana de patrones de riesgo para intervenir antes de que los conflictos escalen.",
    metric: "Detección temprana en el 89% de los casos",
  },
];

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function AIFeatures() {
  return (
    <section className="divide-section py-28 md:py-32 bg-bg">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <div className="grid md:grid-cols-5 gap-12 md:gap-16">
            {/* Left intro */}
            <div className="md:col-span-2">
              <motion.p variants={fadeUp} className="eyebrow mb-4">
                Inteligencia Artificial
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="h-display text-4xl md:text-5xl"
              >
                IA que amplifica el <span className="text-brand">criterio jurídico</span>.
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-6 text-muted text-lg leading-relaxed"
              >
                No reemplazamos abogados. Les damos superpoderes. Nuestra IA
                procesa la complejidad para que los humanos tomen mejores
                decisiones.
              </motion.p>
            </div>

            {/* Right — 2x2 feature cards */}
            <div className="md:col-span-3 grid sm:grid-cols-2 gap-5">
              {features.map((f) => (
                <motion.div
                  key={f.title}
                  variants={fadeUp}
                  className="card p-6"
                >
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-brand text-white text-[10px] font-semibold tracking-wide mb-4 font-display">
                    {f.abbr}
                  </span>
                  <h3 className="text-base font-semibold text-text mb-2 font-display tracking-tight">
                    {f.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-3">
                    {f.description}
                  </p>
                  <p className="text-xs font-semibold text-brand">
                    {f.metric}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
