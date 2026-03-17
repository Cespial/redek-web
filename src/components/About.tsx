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
    <section id="nosotros" className="py-32 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid md:grid-cols-2 gap-16 items-start"
        >
          {/* Left */}
          <div>
            <motion.p
              variants={fadeUp}
              className="text-xs font-medium tracking-wide uppercase text-gray-400 mb-4"
            >
              Conoce a REDEK
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-medium tracking-tighter leading-[1.1] text-[#111]"
            >
              Pionera en soluciones jurídicas digitales.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-6 text-gray-500 text-lg leading-relaxed"
            >
              Somos especialistas en sistemas de resolución electrónica de
              disputas (ODR). Combinamos profundo conocimiento legal con
              tecnología de vanguardia para transformar la forma en que las
              organizaciones resuelven conflictos.
            </motion.p>
          </div>

          {/* Right — Pillars */}
          <div className="grid gap-8">
            {pillars.map((p) => (
              <motion.div
                key={p.number}
                variants={fadeUp}
                className="flex gap-5"
              >
                <span className="text-xs font-mono text-gray-300 mt-1 shrink-0">
                  {p.number}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-[#111] mb-1">
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
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
