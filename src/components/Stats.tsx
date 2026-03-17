"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "20+", label: "Años de experiencia combinada" },
  { value: "50+", label: "Plataformas ODR implementadas" },
  { value: "12", label: "Países con operaciones activas" },
  { value: "98%", label: "Tasa de resolución efectiva" },
];

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Stats() {
  return (
    <section className="py-20 bg-white border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              className={`text-center ${i > 0 ? "lg:border-l lg:border-gray-100" : ""}`}
            >
              <p className="text-4xl md:text-5xl font-semibold tracking-tighter text-blue-700">
                {s.value}
              </p>
              <p className="mt-2 text-sm text-gray-500">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
