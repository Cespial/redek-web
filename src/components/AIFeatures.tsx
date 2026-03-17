"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "01",
    title: "Automatización Legal (RPA)",
    description:
      "Procesos repetitivos gestionados por agentes inteligentes que reducen errores y aceleran resoluciones.",
  },
  {
    icon: "02",
    title: "Análisis Predictivo",
    description:
      "Machine learning aplicado a patrones de conflicto para anticipar resultados y optimizar estrategias.",
  },
  {
    icon: "03",
    title: "Clasificación Documental",
    description:
      "Procesamiento avanzado de documentos legales con clasificación automática por relevancia y tipo.",
  },
  {
    icon: "04",
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
          <div className="grid md:grid-cols-5 gap-12 md:gap-16">
            {/* Left intro — 2 cols */}
            <div className="md:col-span-2">
              <motion.p
                variants={fadeUp}
                className="text-xs font-semibold tracking-widest uppercase text-blue-600 mb-4"
              >
                Inteligencia Artificial
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="text-4xl md:text-5xl font-medium tracking-tighter leading-[1.1] text-[#0F172A]"
              >
                IA que amplifica el criterio jurídico.
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-6 text-gray-500 text-lg leading-relaxed"
              >
                No reemplazamos abogados. Les damos superpoderes. Nuestra IA
                procesa la complejidad para que los humanos tomen mejores
                decisiones.
              </motion.p>
            </div>

            {/* Right — 2x2 feature cards — 3 cols */}
            <div className="md:col-span-3 grid sm:grid-cols-2 gap-6">
              {features.map((f) => (
                <motion.div
                  key={f.title}
                  variants={fadeUp}
                  className="bg-white rounded-xl p-6 border border-blue-100/60 hover:border-blue-200 transition-colors"
                >
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-blue-50 text-blue-600 text-xs font-mono font-semibold mb-4">
                    {f.icon}
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
