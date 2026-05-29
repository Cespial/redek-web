"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Contact() {
  return (
    <section id="contacto" className="divide-section bg-bg py-28 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid gap-16 md:grid-cols-2"
        >
          {/* Left */}
          <div>
            <motion.p variants={fadeUp} className="eyebrow mb-4">
              Contacto
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="h-display text-4xl md:text-5xl"
            >
              Hablemos de lo que{" "}
              <span className="text-brand">necesitas resolver.</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-6 text-lg leading-relaxed text-muted"
            >
              Agenda una demo privada y descubre cómo REDEK puede transformar la
              gestión de disputas en tu organización.
            </motion.p>

            {/* Impact stat */}
            <motion.div variants={fadeUp} className="card mt-10 p-6">
              <p className="numeral text-3xl font-bold text-brand">
                14 días
              </p>
              <p className="mt-1 text-sm text-muted">
                Resolución promedio vs. 18 meses en tribunales tradicionales
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3">
              <a
                href="mailto:info@redek.co"
                className="text-sm text-muted transition-colors hover:text-brand"
              >
                info@redek.co
              </a>
              <a
                href="https://redek.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted transition-colors hover:text-brand"
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
              <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-muted">
                Nombre
              </label>
              <input
                type="text"
                required
                placeholder="Tu nombre completo"
                className="w-full border-b border-line bg-transparent py-3 text-text placeholder:text-muted/50 transition-colors focus:border-brand focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-muted">
                Email corporativo
              </label>
              <input
                type="email"
                required
                placeholder="tu@empresa.com"
                className="w-full border-b border-line bg-transparent py-3 text-text placeholder:text-muted/50 transition-colors focus:border-brand focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-muted">
                Teléfono
              </label>
              <input
                type="tel"
                placeholder="+57 300 000 0000"
                className="w-full border-b border-line bg-transparent py-3 text-text placeholder:text-muted/50 transition-colors focus:border-brand focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-muted">
                ¿Cuál es tu mayor desafío?
              </label>
              <textarea
                rows={4}
                required
                placeholder="Ej: Necesitamos reducir los tiempos de resolución de disputas comerciales..."
                className="w-full resize-none border-b border-line bg-transparent py-3 text-text placeholder:text-muted/50 transition-colors focus:border-brand focus:outline-none"
              />
            </div>
            <button type="submit" className="btn-primary group mt-4 self-start">
              Enviar Mensaje
              <span className="transition-transform group-hover:translate-x-1">
                &#8594;
              </span>
            </button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
