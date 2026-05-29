"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("redek-theme", next ? "dark" : "light");
    } catch {}
    setDark(next);
  };

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Activar modo claro" : "Activar modo oscuro"}
      title={dark ? "Modo claro" : "Modo oscuro"}
      className={`relative grid h-9 w-9 place-items-center rounded-full border border-line text-muted transition-colors hover:border-brand/50 hover:text-brand ${className}`}
    >
      {/* Sun */}
      <svg
        className={`absolute h-[18px] w-[18px] transition-all duration-300 ${
          mounted && dark ? "scale-0 opacity-0 -rotate-90" : "scale-100 opacity-100 rotate-0"
        }`}
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.7}
        stroke="currentColor"
      >
        <circle cx="12" cy="12" r="4" />
        <path
          strokeLinecap="round"
          d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
        />
      </svg>
      {/* Moon */}
      <svg
        className={`absolute h-[18px] w-[18px] transition-all duration-300 ${
          mounted && dark ? "scale-100 opacity-100 rotate-0" : "scale-0 opacity-0 rotate-90"
        }`}
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.7}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
        />
      </svg>
    </button>
  );
}
