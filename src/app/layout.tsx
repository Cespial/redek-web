import type { Metadata } from "next";
import { Schibsted_Grotesk, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const display = Schibsted_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const body = Hanken_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "REDEK — Precisión Algorítmica. Criterio Humano.",
  description:
    "Pionera en soluciones jurídicas digitales. Transformamos la complejidad jurídica en resoluciones simples con tecnología inteligente y sistemas ODR.",
  keywords: [
    "REDEK",
    "ODR",
    "resolución de disputas",
    "LegalTech",
    "tecnología jurídica",
    "arbitraje digital",
    "conciliación en línea",
  ],
  openGraph: {
    title: "REDEK — Precisión Algorítmica. Criterio Humano.",
    description:
      "Pionera en soluciones jurídicas digitales. Transformamos la complejidad jurídica en resoluciones simples.",
    type: "website",
    locale: "es_CO",
  },
};

const themeScript = `(function(){try{var t=localStorage.getItem('redek-theme');var m=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(!t&&m)){document.documentElement.classList.add('dark');}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${display.variable} ${body.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
