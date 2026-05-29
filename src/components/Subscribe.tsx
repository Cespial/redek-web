"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Subscribe() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <section className="divide-section bg-bg-soft py-16">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12"
        >
          <div>
            <motion.h2
              variants={fadeUp}
              className="h-display max-w-md text-2xl md:text-3xl"
            >
              Mantente al día con <span className="text-brand">REDEK</span>.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-md text-base text-muted"
            >
              Novedades sobre LegalTech, ODR y resolución de disputas. Sin spam.
            </motion.p>
          </div>

          <motion.form
            variants={fadeUp}
            onSubmit={handleSubmit}
            className="flex w-full flex-col gap-3 sm:flex-row md:justify-end"
          >
            <label htmlFor="subscribe-email" className="sr-only">
              Correo electrónico
            </label>
            <input
              id="subscribe-email"
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder="tu@empresa.com"
              className="w-full rounded-full border border-line bg-bg px-5 py-[0.85rem] text-base text-text placeholder:text-muted transition-colors focus:border-brand focus:outline-none sm:max-w-xs"
            />
            <button type="submit" className="btn-primary justify-center">
              Suscribirme
            </button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
