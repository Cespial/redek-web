"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type Testimonial = {
  quote: React.ReactNode;
  name: string;
  role: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote: (
      <>
        REDEK transformó completamente nuestra operación de resolución de
        conflictos. Lo que antes tomaba 18 meses en tribunales, ahora se resuelve
        en <span className="text-brand">semanas con total trazabilidad</span>.
      </>
    ),
    name: "Dra. Carolina Vélez",
    role: "Directora Jurídica — Cámara de Comercio de Medellín",
  },
  {
    quote: (
      <>
        Migramos nuestras audiencias de conciliación a un entorno digital sin
        perder rigor probatorio. El expediente electrónico nos dio{" "}
        <span className="text-brand">trazabilidad de cada actuación</span> y
        redujo las nulidades por forma.
      </>
    ),
    name: "Dr. Andrés Felipe Restrepo",
    role: "Coordinador de Métodos Alternativos — Centro de Arbitraje y Conciliación de Bogotá",
  },
  {
    quote: (
      <>
        La resolución de disputas en línea dejó de ser un experimento. Hoy
        atendemos reclamaciones de consumo en toda la región con{" "}
        <span className="text-brand">acuerdos vinculantes y firma electrónica</span>{" "}
        en una sola plataforma.
      </>
    ),
    name: "Mariana Quispe Loayza",
    role: "Gerente de Resolución de Conflictos — Defensoría del Consumidor Financiero LatAm",
  },
];

const AUTOPLAY_MS = 6000;

export default function Testimonial() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const count = TESTIMONIALS.length;

  const goTo = useCallback(
    (next: number, dir: number) => {
      setDirection(dir);
      setIndex(((next % count) + count) % count);
    },
    [count]
  );

  const next = useCallback(() => goTo(index + 1, 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1, -1), [goTo, index]);

  // Autoplay (pauses on hover/focus and when reduced motion is preferred)
  const indexRef = useRef(index);
  indexRef.current = index;

  useEffect(() => {
    if (paused || reduceMotion) return;
    const id = window.setInterval(() => {
      goTo(indexRef.current + 1, 1);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, reduceMotion, goTo]);

  const current = TESTIMONIALS[index];

  const slideVariants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: reduceMotion ? 0 : dir * 40,
    }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({
      opacity: 0,
      x: reduceMotion ? 0 : dir * -40,
    }),
  };

  return (
    <section className="divide-section bg-bg">
      <div className="bg-grid bg-grid-fade">
        <div className="max-w-4xl mx-auto px-6 py-28 md:py-32">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center"
          >
            <p className="eyebrow mb-6">Testimonios</p>

            <div
              className="font-display text-6xl md:text-7xl text-brand/20 leading-none mb-2 select-none"
              aria-hidden="true"
            >
              &ldquo;
            </div>

            <div
              role="group"
              aria-roledescription="carrusel"
              aria-label="Testimonios de clientes"
              className="relative"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onFocusCapture={() => setPaused(true)}
              onBlurCapture={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                  setPaused(false);
                }
              }}
            >
              {/* Slides — one visible at a time, fixed min-height to avoid layout jump */}
              <div className="relative min-h-[180px] md:min-h-[240px] flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.figure
                    key={index}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-full"
                    aria-roledescription="slide"
                    aria-label={`${index + 1} de ${count}`}
                  >
                    <blockquote className="h-display text-2xl md:text-4xl !leading-[1.15] text-text max-w-3xl mx-auto">
                      {current.quote}
                    </blockquote>

                    <figcaption className="mt-10 flex flex-col items-center gap-1">
                      <span className="text-sm font-semibold text-text">
                        {current.name}
                      </span>
                      <span className="text-sm text-muted">{current.role}</span>
                    </figcaption>
                  </motion.figure>
                </AnimatePresence>
              </div>

              {/* Controls */}
              <div className="mt-12 flex items-center justify-center gap-6">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Testimonio anterior"
                  className="grid h-10 w-10 place-items-center rounded-full border border-line text-text transition-colors hover:text-brand hover:border-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>

                {/* Dots */}
                <div className="flex items-center gap-3">
                  {TESTIMONIALS.map((t, i) => {
                    const active = i === index;
                    return (
                      <button
                        key={t.name}
                        type="button"
                        aria-label={`Ir al testimonio ${i + 1}: ${t.name}`}
                        aria-current={active ? "true" : undefined}
                        onClick={() => goTo(i, i > index ? 1 : -1)}
                        className={`h-2 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${
                          active
                            ? "w-6 bg-brand"
                            : "w-2 bg-text/20 hover:bg-text/40"
                        }`}
                      />
                    );
                  })}
                </div>

                <button
                  type="button"
                  onClick={next}
                  aria-label="Testimonio siguiente"
                  className="grid h-10 w-10 place-items-center rounded-full border border-line text-text transition-colors hover:text-brand hover:border-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>

              {/* Live region for screen readers */}
              <span className="sr-only" aria-live="polite">
                Testimonio {index + 1} de {count}: {current.name},{" "}
                {current.role}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
