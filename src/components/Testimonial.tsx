"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" as const } },
};

export default function Testimonial() {
  return (
    <section className="divide-section bg-bg">
      <div className="bg-grid bg-grid-fade">
        <div className="max-w-4xl mx-auto px-6 py-28 md:py-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="text-center"
          >
            <motion.p variants={fadeUp} className="eyebrow mb-6">
              Testimonio
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="font-display text-6xl md:text-7xl text-brand/20 leading-none mb-2 select-none"
              aria-hidden="true"
            >
              &ldquo;
            </motion.div>

            <motion.blockquote
              variants={fadeUp}
              className="h-display text-2xl md:text-4xl !leading-[1.15] text-text max-w-3xl mx-auto"
            >
              REDEK transformó completamente nuestra operación de resolución de
              conflictos. Lo que antes tomaba 18 meses en tribunales, ahora se
              resuelve en{" "}
              <span className="text-brand">semanas con total trazabilidad</span>.
            </motion.blockquote>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col items-center gap-1"
            >
              <span className="text-sm font-semibold text-text">
                Dra. Carolina Vélez
              </span>
              <span className="text-sm text-muted">
                Directora Jurídica — Cámara de Comercio de Medellín
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
