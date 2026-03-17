"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
            className="text-xs font-medium tracking-wide uppercase text-gray-400 mb-4"
          >
            Soluciones
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-medium tracking-tighter leading-[1.1] text-[#111] max-w-3xl"
          >
            Tres modelos. Una misión: resolver.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-gray-500 text-lg max-w-2xl"
          >
            Adaptamos nuestra tecnología a la forma en que tu organización
            necesita operar. Sin rigidez, sin sobre-ingeniería.
          </motion.p>

          {/* Service Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {services.map((s) => (
              <motion.div
                key={s.number}
                variants={fadeUp}
                className="border border-gray-100 rounded-2xl p-8 hover:border-gray-300 transition-colors group"
              >
                <span className="text-xs font-mono text-gray-300">
                  {s.number}
                </span>
                <h3 className="text-xl font-semibold text-[#111] mt-4 mb-3 tracking-tight">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">
                  {s.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {s.features.map((f) => (
                    <span
                      key={f}
                      className="text-xs text-gray-400 border border-gray-100 rounded-full px-3 py-1 group-hover:border-gray-200 transition-colors"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Consultorías + Image */}
          <motion.div
            variants={fadeUp}
            className="mt-16 grid md:grid-cols-2 gap-8 items-center"
          >
            <div>
              <span className="text-xs font-mono text-gray-300">04</span>
              <h3 className="text-2xl font-semibold text-[#111] mt-4 mb-3 tracking-tight">
                Consultorías Especializadas
              </h3>
              <p className="text-gray-500 leading-relaxed">
                Proyectos de transformación digital, fintech, digitalización de
                la justicia y capacitación en LegalTech. Acompañamos tu
                organización desde la estrategia hasta la implementación.
              </p>
            </div>
            <div className="relative h-72 rounded-2xl overflow-hidden bg-[#FAFAFA] [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]">
              <Image
                src="/apoyo-1.png"
                alt="Tecnología de resolución de disputas"
                fill
                className="object-cover mix-blend-multiply grayscale"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
