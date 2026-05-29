"use client";

import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Desarrollo a la Medida",
    description:
      "Co-diseñamos, desarrollamos e implementamos plataformas ODR personalizadas que se integran con tu ecosistema tecnológico existente.",
    result: "Control total sobre la experiencia y los datos",
    features: ["Co-diseño", "Desarrollo", "Implementación"],
  },
  {
    number: "02",
    title: "Soluciones Manejadas",
    description:
      "Accede a nuestra plataforma mediante suscripción o bajo demanda. Nosotros gestionamos la infraestructura mientras tú resuelves disputas.",
    result: "Operativo en semanas, no en meses",
    features: ["Suscripción", "Bajo demanda", "Soporte 24/7"],
  },
  {
    number: "03",
    title: "Soluciones Licenciadas",
    description:
      "Licencia completa de nuestra tecnología para gestión interna con total control y autonomía operativa.",
    result: "Independencia tecnológica con respaldo experto",
    features: ["Licenciamiento", "Autonomía", "Personalización"],
  },
  {
    number: "04",
    title: "Consultorías Especializadas",
    description:
      "Proyectos de transformación digital, fintech, digitalización de la justicia y capacitación en LegalTech.",
    result: "De la estrategia a la implementación medible",
    features: ["Estrategia", "Capacitación", "Acompañamiento"],
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
    <section id="soluciones" className="divide-section py-28 md:py-32 bg-bg">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.p variants={fadeUp} className="eyebrow mb-4">
            Soluciones
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="h-display text-4xl md:text-5xl max-w-3xl"
          >
            Cuatro modelos. Una misión:{" "}
            <span className="text-brand">resolver</span>.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-muted text-lg max-w-2xl"
          >
            Adaptamos nuestra tecnología a la forma en que tu organización
            necesita operar. Sin rigidez, sin sobre-ingeniería.
          </motion.p>

          {/* Service Cards — 2x2 */}
          <div className="grid sm:grid-cols-2 gap-6 mt-16">
            {services.map((s) => (
              <motion.div
                key={s.number}
                variants={fadeUp}
                className="card p-8 cursor-pointer group"
              >
                <span className="numeral text-sm text-brand/60">
                  {s.number}
                </span>
                <h3 className="font-display text-xl font-semibold text-text mt-4 mb-3 tracking-tight">
                  {s.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-3">
                  {s.description}
                </p>
                <p className="text-xs font-semibold text-brand mb-5">
                  &#8594; {s.result}
                </p>
                <div className="flex flex-wrap gap-2">
                  {s.features.map((f) => (
                    <span
                      key={f}
                      className="text-xs text-muted border border-line rounded-full px-3 py-1 group-hover:border-brand/30 group-hover:text-brand transition-colors"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Platform ODR block — dark */}
          <motion.div
            variants={fadeUp}
            className="mt-20 bg-ink border border-white/10 rounded-2xl p-10 md:p-14"
          >
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <p className="eyebrow !text-accent mb-4">Plataforma ODR</p>
                <h3 className="h-display text-3xl md:text-4xl text-white">
                  Resolución de disputas{" "}
                  <span className="text-accent">sin fronteras.</span>
                </h3>
                <p className="mt-4 text-white/60 leading-relaxed">
                  Resultados rápidos y efectivos. Costos reducidos. Acceso desde
                  cualquier lugar del mundo.
                </p>
                <a
                  href="#contacto"
                  className="group inline-flex items-center gap-2 mt-6 text-sm font-medium text-accent hover:text-white transition-colors"
                >
                  Explorar la plataforma
                  <span className="transition-transform group-hover:translate-x-1">
                    &#8594;
                  </span>
                </a>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {capabilities.map((c) => (
                  <div key={c} className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span className="text-sm text-white/80">{c}</span>
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
