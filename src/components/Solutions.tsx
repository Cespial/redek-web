"use client";

import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Desarrollo a la Medida",
    description:
      "Co-diseñamos, desarrollamos e implementamos plataformas ODR personalizadas que se integran con tu ecosistema tecnológico existente.",
    features: ["Co-diseño", "Desarrollo", "Implementación"],
  },
  {
    number: "02",
    title: "Soluciones Manejadas",
    description:
      "Accede a nuestra plataforma mediante suscripción o bajo demanda. Nosotros gestionamos la infraestructura mientras tú resuelves disputas.",
    features: ["Suscripción", "Bajo demanda", "Soporte 24/7"],
  },
  {
    number: "03",
    title: "Soluciones Licenciadas",
    description:
      "Licencia completa de nuestra tecnología para gestión interna con total control y autonomía operativa.",
    features: ["Control total", "Autonomía", "Personalización"],
  },
  {
    number: "04",
    title: "Consultorías Especializadas",
    description:
      "Proyectos de transformación digital, fintech, digitalización de la justicia y capacitación en LegalTech.",
    features: ["Estrategia", "Capacitación", "Implementación"],
  },
];

const capabilities = [
  "Negociación directa entre partes",
  "Mediación digital automatizada",
  "Arbitraje eficiente",
  "Interfaz intuitiva",
  "Seguridad y confidencialidad",
  "Accesibilidad global",
];

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Solutions() {
  return (
    <section id="soluciones" className="py-32 bg-white">
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
            Soluciones
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-medium tracking-tighter leading-[1.1] text-[#0F172A] max-w-3xl"
          >
            Cuatro modelos. Una misión: resolver.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-gray-500 text-lg max-w-2xl"
          >
            Adaptamos nuestra tecnología a la forma en que tu organización
            necesita operar. Sin rigidez, sin sobre-ingeniería.
          </motion.p>

          {/* Service Cards — 2x2 grid */}
          <div className="grid sm:grid-cols-2 gap-6 mt-16">
            {services.map((s) => (
              <motion.div
                key={s.number}
                variants={fadeUp}
                className="border border-gray-200 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(29,78,216,0.08)] cursor-pointer hover:border-blue-200 group"
              >
                <span className="text-sm font-mono text-blue-300 tracking-widest">
                  {s.number}
                </span>
                <h3 className="text-xl font-semibold text-[#0F172A] mt-4 mb-3 tracking-tight">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">
                  {s.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {s.features.map((f) => (
                    <span
                      key={f}
                      className="text-xs text-gray-400 border border-gray-100 rounded-full px-3 py-1 group-hover:border-blue-100 group-hover:text-blue-500 transition-colors"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Platform capabilities — visual break */}
          <motion.div
            variants={fadeUp}
            className="mt-20 bg-[#0C1B3A] rounded-2xl p-10 md:p-14"
          >
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-blue-400 mb-4">
                  Plataforma ODR
                </p>
                <h3 className="text-3xl md:text-4xl font-medium tracking-tighter leading-[1.1] text-white">
                  Resolución de disputas sin fronteras.
                </h3>
                <p className="mt-4 text-blue-200/60 leading-relaxed">
                  Resultados rápidos y efectivos. Costos reducidos. Acceso desde
                  cualquier lugar del mundo.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {capabilities.map((c) => (
                  <div key={c} className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                    <span className="text-sm text-blue-100/80">{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
