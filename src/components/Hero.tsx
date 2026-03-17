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
    <section className="min-h-screen relative overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-16 min-h-screen grid md:grid-cols-2 gap-8 items-center">
        {/* Left — Text */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start z-10"
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
            className="text-5xl sm:text-6xl md:text-5xl lg:text-7xl font-medium tracking-tighter text-left leading-[1.05] text-black"
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

        {/* Right — Halftone Image */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" as const }}
          className="relative h-[70vh] md:h-[85vh] [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]"
        >
          <Image
            src="/hero-halftone.png"
            alt="REDEK — Inteligencia artificial y criterio humano"
            fill
            priority
            className="object-cover object-right mix-blend-multiply grayscale contrast-125"
          />
        </motion.div>
      </div>
    </section>
  );
}
