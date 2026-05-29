"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/* ------------------------------------------------------------------ */
/* Datos ficticios coherentes                                          */
/* ------------------------------------------------------------------ */

type Estado = "mediacion" | "resuelto" | "revision";

const estadoMeta: Record<
  Estado,
  { label: string; className: string; dot: string }
> = {
  mediacion: {
    label: "En mediación",
    className: "bg-brand/10 text-brand",
    dot: "bg-brand",
  },
  resuelto: {
    label: "Resuelto",
    className: "bg-success/10 text-success",
    dot: "bg-success",
  },
  revision: {
    label: "En revisión",
    className: "bg-warning/10 text-warning",
    dot: "bg-warning",
  },
};

const casos: {
  id: string;
  partes: string;
  estado: Estado;
  fecha: string;
}[] = [
  {
    id: "CASO-2041",
    partes: "Rivera vs. Logística Andina",
    estado: "mediacion",
    fecha: "28 may",
  },
  {
    id: "CASO-2038",
    partes: "Mendoza vs. Seguros Pacífico",
    estado: "resuelto",
    fecha: "26 may",
  },
  {
    id: "CASO-2035",
    partes: "Cooperativa El Roble vs. Téllez",
    estado: "revision",
    fecha: "24 may",
  },
  {
    id: "CASO-2030",
    partes: "Castro vs. Inmobiliaria Sur",
    estado: "mediacion",
    fecha: "21 may",
  },
  {
    id: "CASO-2027",
    partes: "Duarte vs. TecnoServicios S.A.",
    estado: "resuelto",
    fecha: "19 may",
  },
];

const hilo: {
  autor: string;
  rol: "Demandante" | "Demandado" | "Mediador";
  texto: string;
  hora: string;
  side: "left" | "right";
}[] = [
  {
    autor: "L. Rivera",
    rol: "Demandante",
    texto: "Adjunté la factura original y el comprobante de entrega tardía.",
    hora: "09:14",
    side: "left",
  },
  {
    autor: "Mediador REDEK",
    rol: "Mediador",
    texto:
      "Recibido. Propongo revisar la cláusula 7 antes de plantear cifras concretas.",
    hora: "09:21",
    side: "right",
  },
  {
    autor: "Logística Andina",
    rol: "Demandado",
    texto: "De acuerdo. Aceptamos un reembolso parcial del 60% del flete.",
    hora: "09:35",
    side: "left",
  },
];

const documentos: { nombre: string; tamano: string }[] = [
  { nombre: "contrato_marco.pdf", tamano: "1.8 MB" },
  { nombre: "factura_2041.pdf", tamano: "240 KB" },
  { nombre: "comprobante_entrega.pdf", tamano: "512 KB" },
  { nombre: "peritaje_tecnico.pdf", tamano: "3.1 MB" },
];

const kpis: { label: string; valor: string; sub: string }[] = [
  { label: "Tiempo promedio", valor: "12", sub: "días por caso" },
  { label: "Tasa de acuerdo", valor: "87%", sub: "últimos 90 días" },
  { label: "Casos activos", valor: "34", sub: "en curso ahora" },
];

const sparkline = [14, 18, 12, 22, 19, 27, 24, 31, 29, 36];

const capacidades = [
  {
    titulo: "Bandeja única de casos",
    desc: "Cada disputa, su estado y sus plazos en un solo flujo.",
    dot: "bg-brand",
  },
  {
    titulo: "Mediación asistida",
    desc: "Hilos estructurados entre partes con propuestas de acuerdo.",
    dot: "bg-accent",
  },
  {
    titulo: "Evidencia verificada",
    desc: "Documentos con sello de integridad y trazabilidad completa.",
    dot: "bg-brand",
  },
  {
    titulo: "Métricas en vivo",
    desc: "Tiempos, tasas de acuerdo y carga del equipo en tiempo real.",
    dot: "bg-accent",
  },
];

const sidebar = ["Casos", "Mediación", "Evidencia", "Métricas"] as const;
type Tab = (typeof sidebar)[number];

const fadeUp = {
  hidden: { y: 28, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

/* ------------------------------------------------------------------ */
/* Iconos sidebar (inline, theme-aware vía currentColor)               */
/* ------------------------------------------------------------------ */

function NavIcon({ name }: { name: Tab }) {
  const common = {
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "Casos":
      return (
        <svg {...common} aria-hidden="true">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M3 9h18M8 14h8M8 17h5" />
        </svg>
      );
    case "Mediación":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M21 11.5a8.4 8.4 0 0 1-9 8 9.1 9.1 0 0 1-4-1l-5 1 1.5-4a8 8 0 0 1-1-4 8.4 8.4 0 0 1 9-8 8.4 8.4 0 0 1 8.5 8z" />
        </svg>
      );
    case "Evidencia":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
          <path d="M14 3v5h5" />
        </svg>
      );
    case "Métricas":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M3 3v18h18" />
          <path d="M7 14l3-4 3 3 4-6" />
        </svg>
      );
  }
}

/* ------------------------------------------------------------------ */
/* Paneles por tab                                                     */
/* ------------------------------------------------------------------ */

function CasosPanel() {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display font-semibold text-base text-text">
          Casos recientes
        </h3>
        <span className="text-xs text-muted">5 de 34</span>
      </div>
      <div className="overflow-hidden rounded-xl border border-line">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-line bg-bg-soft text-[0.7rem] uppercase tracking-wider text-muted">
              <th className="px-3 py-2 font-semibold">ID</th>
              <th className="px-3 py-2 font-semibold">Partes</th>
              <th className="px-3 py-2 font-semibold">Estado</th>
              <th className="px-3 py-2 font-semibold text-right">Fecha</th>
            </tr>
          </thead>
          <tbody>
            {casos.map((c, i) => {
              const m = estadoMeta[c.estado];
              return (
                <motion.tr
                  key={c.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="border-b border-line last:border-0 hover:bg-bg-soft/70 transition-colors"
                >
                  <td className="px-3 py-2.5">
                    <span className="numeral text-xs text-brand">{c.id}</span>
                  </td>
                  <td className="px-3 py-2.5 text-text">{c.partes}</td>
                  <td className="px-3 py-2.5">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${m.className}`}
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${m.dot}`} />
                      {m.label}
                    </span>
                  </td>
                  <td className="px-3 py-2.5 text-right text-xs text-muted">
                    {c.fecha}
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function MediacionPanel() {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-display font-semibold text-base text-text">
            CASO-2041 · Mediación
          </h3>
          <p className="text-xs text-muted">Rivera vs. Logística Andina</p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-2.5 py-1 text-xs font-medium text-brand">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          En mediación
        </span>
      </div>

      <div className="space-y-3">
        {hilo.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.3 }}
            className={`flex ${
              m.side === "right" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[78%] rounded-2xl px-3.5 py-2.5 text-sm ${
                m.side === "right"
                  ? "bg-brand text-white"
                  : "border border-line bg-bg-soft text-text"
              }`}
            >
              <div
                className={`mb-1 flex items-center gap-2 text-[0.68rem] ${
                  m.side === "right" ? "text-white/75" : "text-muted"
                }`}
              >
                <span className="font-semibold">{m.autor}</span>
                <span>·</span>
                <span>{m.rol}</span>
                <span className="ml-auto">{m.hora}</span>
              </div>
              <p className="leading-snug">{m.texto}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between gap-3 rounded-xl border border-line bg-bg-soft px-3.5 py-3">
        <p className="text-xs text-muted">
          ¿Listo para formalizar? Genera un borrador de acuerdo.
        </p>
        <button
          type="button"
          className="btn-primary shrink-0 !px-4 !py-2 !text-xs"
        >
          Proponer acuerdo
        </button>
      </div>
    </div>
  );
}

function EvidenciaPanel() {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display font-semibold text-base text-text">
          Evidencia del expediente
        </h3>
        <span className="text-xs text-muted">4 documentos</span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {documentos.map((d, i) => (
          <motion.div
            key={d.nombre}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05, duration: 0.3 }}
            className="group rounded-xl border border-line bg-bg-soft p-3.5 transition-colors hover:border-brand/45"
          >
            <div className="mb-3 flex items-start justify-between">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
                  <path d="M14 3v5h5" />
                </svg>
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-success/10 px-2 py-0.5 text-[0.65rem] font-medium text-success">
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Verificado
              </span>
            </div>
            <p className="truncate text-sm font-medium text-text">{d.nombre}</p>
            <p className="text-xs text-muted">{d.tamano}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function MetricasPanel() {
  const max = Math.max(...sparkline);
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display font-semibold text-base text-text">
          Métricas del equipo
        </h3>
        <span className="text-xs text-muted">Últimos 30 días</span>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {kpis.map((k, i) => (
          <motion.div
            key={k.label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06, duration: 0.3 }}
            className="rounded-xl border border-line bg-bg-soft p-3.5"
          >
            <p className="text-[0.68rem] uppercase tracking-wide text-muted">
              {k.label}
            </p>
            <p className="numeral mt-1 text-2xl font-bold text-text">
              {k.valor}
            </p>
            <p className="text-[0.7rem] text-muted">{k.sub}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-4 rounded-xl border border-line bg-bg-soft p-4">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-xs font-medium text-text">Casos resueltos / semana</p>
          <span className="inline-flex items-center gap-1 text-xs font-medium text-success">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M3 17l6-6 4 4 7-7" />
              <path d="M21 8v5h-5" />
            </svg>
            +18%
          </span>
        </div>
        <div className="flex h-20 items-end gap-1.5" aria-hidden="true">
          {sparkline.map((v, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${(v / max) * 100}%` }}
              transition={{ delay: i * 0.04, duration: 0.4, ease: "easeOut" }}
              className={`flex-1 rounded-t-sm ${
                i === sparkline.length - 1 ? "bg-brand" : "bg-brand/30"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ActivePanel({ tab }: { tab: Tab }) {
  switch (tab) {
    case "Casos":
      return <CasosPanel />;
    case "Mediación":
      return <MediacionPanel />;
    case "Evidencia":
      return <EvidenciaPanel />;
    case "Métricas":
      return <MetricasPanel />;
  }
}

/* ------------------------------------------------------------------ */
/* Componente principal                                                */
/* ------------------------------------------------------------------ */

export default function PlatformShowcase() {
  const [tab, setTab] = useState<Tab>("Casos");
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const onTabKeyDown = (e: React.KeyboardEvent, idx: number) => {
    let next = idx;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = (idx + 1) % sidebar.length;
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft")
      next = (idx - 1 + sidebar.length) % sidebar.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = sidebar.length - 1;
    else return;
    e.preventDefault();
    setTab(sidebar[next]);
    tabRefs.current[next]?.focus();
  };

  return (
    <section
      id="plataforma"
      className="divide-section bg-bg-soft py-28 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
        >
          {/* Columna intro */}
          <div>
            <motion.p variants={fadeUp} className="eyebrow mb-4">
              La plataforma
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="h-display text-4xl md:text-5xl"
            >
              Tu sala de resolución,{" "}
              <span className="text-brand">en un solo lugar.</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-md text-base leading-relaxed text-muted"
            >
              Una consola pensada para mediadores y equipos legales: ordena cada
              disputa, conversa con las partes, custodia la evidencia y mide el
              desempeño sin saltar entre herramientas.
            </motion.p>

            <motion.ul variants={fadeUp} className="mt-8 space-y-4">
              {capacidades.map((cap) => (
                <li key={cap.titulo} className="flex gap-3">
                  <span
                    className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${cap.dot}`}
                    aria-hidden="true"
                  />
                  <span>
                    <span className="font-medium text-text">{cap.titulo}</span>
                    <span className="block text-sm text-muted">{cap.desc}</span>
                  </span>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Columna mockup */}
          <motion.div variants={fadeUp}>
            <div className="card overflow-hidden !rounded-2xl">
              {/* Barra de ventana */}
              <div className="flex items-center gap-2 border-b border-line bg-bg-soft px-4 py-3">
                <div className="flex gap-1.5" aria-hidden="true">
                  <span className="h-3 w-3 rounded-full bg-danger/80" />
                  <span className="h-3 w-3 rounded-full bg-warning/80" />
                  <span className="h-3 w-3 rounded-full bg-success/80" />
                </div>
                <div className="mx-auto flex items-center gap-1.5 rounded-md border border-line bg-bg px-3 py-1 text-xs text-muted">
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <rect x="5" y="11" width="14" height="9" rx="2" />
                    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                  </svg>
                  app.redek.co
                </div>
                <span className="w-[42px]" aria-hidden="true" />
              </div>

              {/* Cuerpo app */}
              <div className="grid grid-cols-[auto_1fr] bg-bg">
                {/* Sidebar */}
                <nav
                  aria-label="Navegación de la consola"
                  className="flex flex-col gap-1 border-r border-line bg-bg-soft/60 p-2.5"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <div className="mb-2 hidden items-center gap-2 px-2 py-1 sm:flex">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-brand text-[0.7rem] font-bold text-white">
                      R
                    </span>
                    <span className="font-display text-sm font-semibold text-text">
                      REDEK
                    </span>
                  </div>
                  {sidebar.map((item, idx) => {
                    const active = tab === item;
                    return (
                      <button
                        key={item}
                        type="button"
                        role="tab"
                        id={`tab-${item}`}
                        aria-selected={active}
                        aria-controls={`panel-${item}`}
                        tabIndex={active ? 0 : -1}
                        ref={(el) => {
                          tabRefs.current[idx] = el;
                        }}
                        onKeyDown={(e) => onTabKeyDown(e, idx)}
                        onClick={() => setTab(item)}
                        className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-sm font-medium transition-colors sm:px-3 ${
                          active
                            ? "bg-brand/10 text-brand"
                            : "text-muted hover:bg-bg hover:text-text"
                        }`}
                      >
                        <NavIcon name={item} />
                        <span className="hidden sm:inline">{item}</span>
                      </button>
                    );
                  })}
                </nav>

                {/* Área principal */}
                <div className="min-h-[360px] p-4 sm:p-5">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={tab}
                      role="tabpanel"
                      id={`panel-${tab}`}
                      aria-labelledby={`tab-${tab}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                      <ActivePanel tab={tab} />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
