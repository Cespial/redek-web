"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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

export default function Platform() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Content */}
          <div>
            <motion.p
              variants={fadeUp}
              className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-4"
            >
              Plataforma ODR
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-medium tracking-tighter leading-[1.1] text-[#111]"
            >
              Resolución de disputas sin fronteras.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-6 text-gray-500 text-lg leading-relaxed"
            >
              Resultados rápidos y efectivos. Costos reducidos. Acceso desde
              cualquier lugar del mundo. Una plataforma diseñada para que la
              justicia sea accesible.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 grid grid-cols-2 gap-3">
              {capabilities.map((c) => (
                <div key={c} className="flex items-center gap-2.5">
                  <div className="w-1 h-1 rounded-full bg-[#111] shrink-0" />
                  <span className="text-sm text-gray-600">{c}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            variants={fadeUp}
            className="relative h-[500px] [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]"
          >
            <Image
              src="/apoyo-3.png"
              alt="Plataforma ODR REDEK"
              fill
              className="object-cover mix-blend-multiply grayscale contrast-125"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
