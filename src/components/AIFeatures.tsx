"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
    <section className="py-32 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              variants={fadeUp}
              className="relative h-96 rounded-2xl overflow-hidden bg-white order-2 md:order-1"
            >
              <Image
                src="/apoyo-2.png"
                alt="Visión artificial y análisis legal"
                fill
                className="object-cover object-right mix-blend-multiply grayscale"
              />
            </motion.div>

            {/* Content */}
            <div className="order-1 md:order-2">
              <motion.p
                variants={fadeUp}
                className="text-xs font-medium tracking-wide uppercase text-gray-400 mb-4"
              >
                Inteligencia Artificial
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="text-4xl md:text-5xl font-medium tracking-tighter leading-[1.1] text-[#111]"
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
          </div>

          {/* Feature Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                className="border-t border-gray-200 pt-6"
              >
                <span className="text-xs font-mono text-gray-300 mb-3 block">
                  0{i + 1}
                </span>
                <h3 className="text-base font-semibold text-[#111] mb-2">
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
