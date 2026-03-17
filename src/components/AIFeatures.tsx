"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Automatización Legal (RPA)",
    description:
      "Procesos repetitivos gestionados por agentes inteligentes que reducen errores y aceleran resoluciones.",
  },
  {
    title: "Análisis Predictivo",
    description:
      "Machine learning aplicado a patrones de conflicto para anticipar resultados y optimizar estrategias.",
  },
  {
    title: "Clasificación Documental",
    description:
      "Procesamiento avanzado de documentos legales con clasificación automática por relevancia y tipo.",
  },
  {
    title: "Prevención de Conflictos",
    description:
      "Detección temprana de patrones de riesgo para intervenir antes de que los conflictos escalen.",
  },
];

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function AIFeatures() {
  return (
    <section className="py-32 bg-blue-50/40">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-semibold tracking-widest uppercase text-blue-600 mb-4"
          >
            Inteligencia Artificial
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-medium tracking-tighter leading-[1.1] text-[#0F172A] max-w-3xl"
          >
            IA que amplifica el criterio jurídico.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-gray-500 text-lg leading-relaxed max-w-2xl"
          >
            No reemplazamos abogados. Les damos superpoderes. Nuestra IA
            procesa la complejidad para que los humanos tomen mejores
            decisiones.
          </motion.p>

          {/* Feature Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                className="border-t border-blue-200/60 pt-6"
              >
                <span className="text-sm font-mono text-blue-300 tracking-widest mb-3 block">
                  0{i + 1}
                </span>
                <h3 className="text-base font-semibold text-[#0F172A] mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {f.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
