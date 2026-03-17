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
      {/* Background halftone */}
      <motion.div
        initial={{ opacity: 0, scale: 1.03 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, delay: 0.3, ease: "easeOut" as const }}
        className="absolute inset-0"
      >
        <Image
          src="/hero-halftone.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[75%_center] mix-blend-multiply grayscale contrast-125 opacity-80"
        />
        {/* Left fade */}
        <div className="absolute inset-y-0 left-0 w-[50%] bg-gradient-to-r from-white via-white/80 to-transparent" />
        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white to-transparent" />
        {/* Top fade */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/80 to-transparent" />
      </motion.div>

      {/* Text content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-36 pb-24 min-h-screen flex flex-col justify-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start max-w-xl"
        >
          <motion.div
            variants={fadeUp}
            className="rounded-full border border-blue-200 px-4 py-1.5 text-xs text-blue-700 mb-8 font-medium tracking-wide uppercase bg-white/70 backdrop-blur-sm"
          >
            La nueva era de resolución legal
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tighter text-left leading-[1.05] text-[#0F172A]"
          >
            Precisión Algorítmica.
            <br />
            Criterio Humano.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg md:text-xl text-gray-500 max-w-md text-left"
          >
            Transformamos la complejidad jurídica en resoluciones simples.
            Tecnología inteligente que maneja los datos para que tu equipo tome
            las decisiones que importan.
          </motion.p>

          <motion.a
            variants={fadeUp}
            href="#contacto"
            className="mt-10 bg-blue-700 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-blue-800 hover:scale-105 transition-all shadow-2xl shadow-blue-700/25 inline-flex items-center gap-2"
          >
            Agendar Demo Privada
            <span className="text-blue-200">&#8594;</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
