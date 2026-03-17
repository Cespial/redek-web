"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function CTABand() {
  return (
    <section className="py-20 bg-blue-50/40">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-medium tracking-tighter text-[#0F172A] max-w-2xl mx-auto leading-tight"
          >
            ¿Listo para transformar la gestión de disputas en tu organización?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-gray-500 text-lg max-w-xl mx-auto"
          >
            Agenda una conversación con nuestro equipo y descubre el modelo
            ideal para tu operación.
          </motion.p>
          <motion.a
            variants={fadeUp}
            href="#contacto"
            className="group mt-8 bg-blue-700 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-blue-800 hover:scale-105 transition-all shadow-2xl shadow-blue-700/25 inline-flex items-center gap-2"
          >
            Agendar Demo Privada
            <span className="text-blue-200 transition-transform group-hover:translate-x-1">
              &#8594;
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
