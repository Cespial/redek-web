"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function CTABand() {
  return (
    <section className="divide-section bg-bg-soft py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="h-display mx-auto max-w-2xl text-3xl md:text-4xl"
          >
            ¿Listo para transformar la gestión de disputas en tu{" "}
            <span className="text-brand">organización</span>?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-xl text-lg text-muted"
          >
            Agenda una conversación con nuestro equipo y descubre el modelo
            ideal para tu operación.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8">
            <a
              href="#contacto"
              className="btn-primary group"
            >
              Agendar Demo Privada
              <span className="transition-transform group-hover:translate-x-1">
                &#8594;
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
