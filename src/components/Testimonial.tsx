"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" as const } },
};

export default function Testimonial() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="text-center"
        >
          <motion.div
            variants={fadeUp}
            className="text-5xl md:text-6xl text-blue-200 leading-none mb-6 select-none"
          >
            &ldquo;
          </motion.div>
          <motion.blockquote
            variants={fadeUp}
            className="text-2xl md:text-3xl font-medium tracking-tight leading-snug text-[#0F172A] max-w-3xl mx-auto"
          >
            REDEK transformó completamente nuestra operación de resolución de
            conflictos. Lo que antes tomaba 18 meses en tribunales, ahora se
            resuelve en semanas con total trazabilidad.
          </motion.blockquote>
          <motion.div variants={fadeUp} className="mt-8 flex flex-col items-center gap-1">
            <span className="text-sm font-semibold text-[#0F172A]">
              Dra. Carolina Vélez
            </span>
            <span className="text-sm text-gray-400">
              Directora Jurídica — Cámara de Comercio de Medellín
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
