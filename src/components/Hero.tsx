"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      {/* Halftone image — right 55%, contained, not zoomed */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" as const }}
        className="absolute top-0 right-0 bottom-0 w-full md:w-[55%] pointer-events-none"
      >
        <Image
          src="/hero-halftone.png"
          alt="REDEK — Inteligencia artificial y criterio humano"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 55vw"
          className="object-contain object-right mix-blend-multiply grayscale contrast-125"
        />
        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
        {/* Left fade — blend into text area */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent" />
      </motion.div>

      {/* Text content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-36 pb-24 min-h-screen flex flex-col justify-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start max-w-xl"
        >
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            className="rounded-full border border-gray-200 px-4 py-1.5 text-xs text-gray-600 mb-8 font-medium tracking-wide uppercase"
          >
            La nueva era de resolución legal
          </motion.div>

          {/* Titular */}
          <motion.h1
            variants={fadeUp}
            className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tighter text-left leading-[1.05] text-black"
          >
            Precisión
            <br />
            Algorítmica.
            <br />
            Criterio Humano.
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg md:text-xl text-gray-500 max-w-md text-left"
          >
            Transformamos la complejidad jurídica en resoluciones simples.
            Tecnología inteligente que maneja los datos para que tu equipo tome
            las decisiones que importan.
          </motion.p>

          {/* CTA */}
          <motion.a
            variants={fadeUp}
            href="#contacto"
            className="mt-10 bg-black text-white px-8 py-4 rounded-full text-sm font-medium hover:scale-105 transition-transform shadow-2xl shadow-black/20 inline-block"
          >
            Agendar Demo Privada
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
