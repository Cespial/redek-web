"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

type Step = {
  number: string;
  stage: string;
  keyword: string;
  description: string;
  bullets: string[];
};

const steps: Step[] = [
  {
    number: "01",
    stage: "INGRESO",
    keyword: "Minutos",
    description: "Las partes cargan el caso; queda estructurado al instante.",
    bullets: ["Formulario guiado", "Validación de partes", "Carga de evidencia"],
  },
  {
    number: "02",
    stage: "GESTIÓN",
    keyword: "Asistida por IA",
    description:
      "Negociación, mediación o arbitraje guiados, con priorización automática.",
    bullets: [
      "Sugerencias en tiempo real",
      "Priorización automática",
      "Audiencias asíncronas",
    ],
  },
  {
    number: "03",
    stage: "RESOLUCIÓN",
    keyword: "Trazable",
    description: "Acuerdo con evidencia completa y auditable, en días.",
    bullets: [
      "Acuerdo vinculante",
      "Bitácora auditable",
      "Cierre con evidencia",
    ],
  },
];

const AUTO_ADVANCE_MS = 3500;

export default function ODRFlow() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Auto-advance carousel (pauses on hover/focus or reduced motion)
  useEffect(() => {
    if (paused || reduceMotion) return;
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, AUTO_ADVANCE_MS);
    return () => window.clearInterval(id);
  }, [paused, reduceMotion]);

  const select = useCallback((i: number) => {
    setActive(((i % steps.length) + steps.length) % steps.length);
  }, []);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      let next: number | null = null;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") next = active + 1;
      else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = active - 1;
      else if (e.key === "Home") next = 0;
      else if (e.key === "End") next = steps.length - 1;
      if (next === null) return;
      e.preventDefault();
      const idx = ((next % steps.length) + steps.length) % steps.length;
      setActive(idx);
      tabRefs.current[idx]?.focus();
    },
    [active]
  );

  // Progress fraction across the track (center of step 0 -> center of last step)
  const progress = steps.length > 1 ? active / (steps.length - 1) : 0;
  const current = steps[active];

  return (
    <section id="como-funciona" className="divide-section bg-bg py-28 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {/* Header */}
          <motion.p variants={fadeUp} className="eyebrow">
            Arquitectura del proceso
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="h-display mt-4 max-w-3xl text-4xl md:text-5xl"
          >
            Cómo resolvemos en{" "}
            <span className="text-brand">días, no en meses.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg text-muted"
          >
            Un flujo continuo del ingreso al acuerdo: estructuramos el caso,
            asistimos cada etapa con IA y entregamos una resolución auditable.
          </motion.p>

          {/* Interactive stepper */}
          <motion.div
            variants={fadeUp}
            className="mt-16 md:mt-20"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={() => setPaused(false)}
          >
            {/* Track + nodes */}
            <div
              role="tablist"
              aria-label="Etapas del proceso de resolución"
              aria-orientation="horizontal"
              onKeyDown={onKeyDown}
              className="relative grid grid-cols-1 gap-y-3 md:grid-cols-3 md:gap-y-0"
            >
              {/* Connecting line — desktop horizontal */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-0 right-0 top-[19px] hidden md:block"
              >
                <div className="mx-[16.666%] h-px bg-line">
                  <motion.div
                    className="h-px origin-left bg-brand"
                    initial={false}
                    animate={{ scaleX: progress }}
                    transition={
                      reduceMotion
                        ? { duration: 0 }
                        : { duration: 0.5, ease: "easeInOut" }
                    }
                  />
                </div>
              </div>

              {/* Connecting line — mobile vertical */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-5 left-[19px] top-5 w-px md:hidden"
              >
                <div className="h-full w-px bg-line">
                  <motion.div
                    className="w-px origin-top bg-brand"
                    initial={false}
                    animate={{ scaleY: progress, height: "100%" }}
                    transition={
                      reduceMotion
                        ? { duration: 0 }
                        : { duration: 0.5, ease: "easeInOut" }
                    }
                  />
                </div>
              </div>

              {steps.map((step, i) => {
                const isActive = i === active;
                const isDone = i < active;
                return (
                  <button
                    key={step.number}
                    ref={(el) => {
                      tabRefs.current[i] = el;
                    }}
                    role="tab"
                    type="button"
                    id={`odr-tab-${i}`}
                    aria-selected={isActive}
                    aria-controls="odr-panel"
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => select(i)}
                    className="group relative z-10 flex items-center gap-4 rounded-xl px-2 py-3 text-left outline-none transition-colors focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-bg md:flex-col md:items-start md:gap-5 md:px-0"
                  >
                    {/* Node */}
                    <span className="relative flex h-10 w-10 shrink-0 items-center justify-center">
                      {/* Halo on active */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.span
                            aria-hidden="true"
                            initial={{ opacity: 0, scale: 0.4 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.4 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                            className="absolute inset-0 rounded-full bg-brand/15"
                          />
                        )}
                      </AnimatePresence>
                      {!reduceMotion && isActive && (
                        <motion.span
                          aria-hidden="true"
                          className="absolute inset-0 rounded-full bg-brand/20"
                          animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                          transition={{
                            duration: 1.8,
                            repeat: Infinity,
                            ease: "easeOut",
                          }}
                        />
                      )}
                      <span
                        className={[
                          "relative flex h-4 w-4 items-center justify-center rounded-full border-2 transition-all duration-300",
                          isActive
                            ? "scale-110 border-brand bg-brand"
                            : isDone
                            ? "border-brand bg-brand/40"
                            : "border-line bg-bg group-hover:border-brand/60",
                        ].join(" ")}
                      >
                        <span
                          className={[
                            "h-1.5 w-1.5 rounded-full bg-bg transition-opacity",
                            isActive ? "opacity-100" : "opacity-0",
                          ].join(" ")}
                        />
                      </span>
                    </span>

                    {/* Label */}
                    <span className="flex flex-col">
                      <span className="flex items-baseline gap-2">
                        <span
                          className={[
                            "numeral text-lg transition-colors md:text-xl",
                            isActive ? "text-brand" : "text-muted",
                          ].join(" ")}
                        >
                          {step.number}
                        </span>
                        <span
                          className={[
                            "eyebrow transition-opacity",
                            isActive
                              ? "opacity-100"
                              : "opacity-60 group-hover:opacity-90",
                          ].join(" ")}
                        >
                          {step.stage}
                        </span>
                      </span>
                      <span
                        className={[
                          "font-display mt-1 text-base font-medium tracking-tight transition-colors md:text-lg",
                          isActive
                            ? "text-text"
                            : "text-muted group-hover:text-text",
                        ].join(" ")}
                      >
                        {step.keyword}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Detail panel */}
            <div
              id="odr-panel"
              role="tabpanel"
              aria-labelledby={`odr-tab-${active}`}
              className="card mt-10 overflow-hidden p-8 md:mt-14 md:p-12"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.number}
                  initial={
                    reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }
                  }
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12"
                >
                  {/* Left: index + keyword */}
                  <div className="md:col-span-5">
                    <div className="flex items-baseline gap-3">
                      <span className="numeral text-4xl text-muted md:text-5xl">
                        {current.number}
                      </span>
                      <span className="text-sm font-semibold uppercase tracking-[0.16em] text-brand">
                        {current.stage}
                      </span>
                    </div>
                    <p className="h-display mt-6 text-4xl text-brand md:text-5xl">
                      {current.keyword}
                    </p>
                    <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
                      {current.description}
                    </p>
                  </div>

                  {/* Right: micro-bullets */}
                  <div className="md:col-span-7 md:border-l md:border-line md:pl-12">
                    <p className="eyebrow">En esta etapa</p>
                    <ul className="mt-6 flex flex-col gap-px overflow-hidden rounded-xl border border-line">
                      {current.bullets.map((bullet, bi) => (
                        <motion.li
                          key={bullet}
                          initial={
                            reduceMotion
                              ? { opacity: 1 }
                              : { opacity: 0, x: -10 }
                          }
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.35,
                            delay: reduceMotion ? 0 : 0.12 + bi * 0.08,
                            ease: "easeOut",
                          }}
                          className="flex items-center gap-4 bg-bg-soft px-5 py-4"
                        >
                          <span
                            aria-hidden="true"
                            className="numeral text-sm text-brand"
                          >
                            {String(bi + 1).padStart(2, "0")}
                          </span>
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                          <span className="text-base text-text">{bullet}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Auto-advance progress bar — restarts per step, freezes on pause */}
              {!reduceMotion && (
                <div
                  aria-hidden="true"
                  className="mt-10 h-px w-full overflow-hidden bg-line"
                >
                  <div
                    key={active}
                    className="odr-progress h-px bg-brand/60"
                    style={{
                      ["--odr-dur" as string]: `${AUTO_ADVANCE_MS}ms`,
                      animationPlayState: paused ? "paused" : "running",
                    }}
                  />
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
