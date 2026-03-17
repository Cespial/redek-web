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
              className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-4"
            >
              Contacto
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-medium tracking-tighter leading-[1.1] text-[#111]"
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
                placeholder="Tu nombre completo"
                className="w-full border-b border-gray-200 py-3 text-[#111] placeholder:text-gray-300 focus:outline-none focus:border-[#111] transition-colors bg-transparent"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-2 block">
                Email
              </label>
              <input
                type="email"
                placeholder="tu@email.com"
                className="w-full border-b border-gray-200 py-3 text-[#111] placeholder:text-gray-300 focus:outline-none focus:border-[#111] transition-colors bg-transparent"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-2 block">
                Teléfono
              </label>
              <input
                type="tel"
                placeholder="+57 300 000 0000"
                className="w-full border-b border-gray-200 py-3 text-[#111] placeholder:text-gray-300 focus:outline-none focus:border-[#111] transition-colors bg-transparent"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-2 block">
                Mensaje
              </label>
              <textarea
                rows={4}
                placeholder="Cuéntanos sobre tu caso..."
                className="w-full border-b border-gray-200 py-3 text-[#111] placeholder:text-gray-300 focus:outline-none focus:border-[#111] transition-colors bg-transparent resize-none"
              />
            </div>
            <button
              type="submit"
              className="mt-4 bg-[#111] text-white px-8 py-4 rounded-full text-sm font-medium hover:scale-105 transition-transform self-start shadow-2xl shadow-black/20"
            >
              Enviar Mensaje
            </button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
