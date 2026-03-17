"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Contact() {
  return (
    <section id="contacto" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid md:grid-cols-2 gap-16"
        >
          {/* Left */}
          <div>
            <motion.p
              variants={fadeUp}
              className="text-xs font-semibold tracking-widest uppercase text-blue-600 mb-4"
            >
              Contacto
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-medium tracking-tighter leading-[1.1] text-[#0F172A]"
            >
              Hablemos de lo que necesitas resolver.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-6 text-gray-500 text-lg leading-relaxed"
            >
              Agenda una demo privada y descubre cómo REDEK puede transformar la
              gestión de disputas en tu organización.
            </motion.p>

            {/* Impact stat */}
            <motion.div
              variants={fadeUp}
              className="mt-10 bg-blue-50/50 rounded-xl p-6 border border-blue-100/50"
            >
              <p className="text-3xl font-semibold tracking-tighter text-blue-700">
                14 días
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Resolución promedio vs. 18 meses en tribunales tradicionales
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3">
              <a
                href="mailto:info@redek.co"
                className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
              >
                info@redek.co
              </a>
              <a
                href="https://redek.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
              >
                redek.co
              </a>
            </motion.div>
          </div>

          {/* Form */}
          <motion.form
            variants={fadeUp}
            className="flex flex-col gap-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-2 block">
                Nombre
              </label>
              <input
                type="text"
                required
                placeholder="Tu nombre completo"
                className="w-full border-b border-gray-200 py-3 text-[#0F172A] placeholder:text-gray-300 focus:outline-none focus:border-blue-600 transition-colors bg-transparent"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-2 block">
                Email corporativo
              </label>
              <input
                type="email"
                required
                placeholder="tu@empresa.com"
                className="w-full border-b border-gray-200 py-3 text-[#0F172A] placeholder:text-gray-300 focus:outline-none focus:border-blue-600 transition-colors bg-transparent"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-2 block">
                Teléfono
              </label>
              <input
                type="tel"
                placeholder="+57 300 000 0000"
                className="w-full border-b border-gray-200 py-3 text-[#0F172A] placeholder:text-gray-300 focus:outline-none focus:border-blue-600 transition-colors bg-transparent"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-2 block">
                ¿Cuál es tu mayor desafío?
              </label>
              <textarea
                rows={4}
                required
                placeholder="Ej: Necesitamos reducir los tiempos de resolución de disputas comerciales..."
                className="w-full border-b border-gray-200 py-3 text-[#0F172A] placeholder:text-gray-300 focus:outline-none focus:border-blue-600 transition-colors bg-transparent resize-none"
              />
            </div>
            <button
              type="submit"
              className="group mt-4 bg-blue-700 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-blue-800 hover:scale-105 transition-all self-start shadow-2xl shadow-blue-700/25 inline-flex items-center gap-2"
            >
              Enviar Mensaje
              <span className="text-blue-200 transition-transform group-hover:translate-x-1">
                &#8594;
              </span>
            </button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
