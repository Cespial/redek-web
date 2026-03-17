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
    <section className="min-h-screen flex flex-col items-center pt-32 overflow-hidden relative bg-white">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center px-6"
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
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-center leading-[1.05] max-w-4xl z-10 text-black"
        >
          Precisión Algorítmica.
          <br />
          Criterio Humano.
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          variants={fadeUp}
          className="mt-6 text-lg md:text-xl text-gray-500 max-w-2xl text-center z-10"
        >
          Transformamos la complejidad jurídica en resoluciones simples.
          Tecnología inteligente que maneja los datos para que tu equipo tome las
          decisiones que importan.
        </motion.p>

        {/* CTA */}
        <motion.a
          variants={fadeUp}
          href="#contacto"
          className="mt-10 bg-black text-white px-8 py-4 rounded-full text-sm font-medium hover:scale-105 transition-transform z-10 shadow-2xl shadow-black/20 inline-block"
        >
          Agendar Demo Privada
        </motion.a>
      </motion.div>

      {/* Halftone Image */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" as const }}
        className="w-full max-w-3xl mx-auto relative mt-16 flex-1 min-h-[500px] [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]"
      >
        <Image
          src="/hero-halftone.png"
          alt="REDEK — Inteligencia artificial y criterio humano"
          fill
          priority
          className="object-cover object-top mix-blend-multiply grayscale contrast-125"
        />
      </motion.div>
    </section>
  );
}
