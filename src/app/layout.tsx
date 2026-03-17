import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="antialiased bg-white text-[#0F172A]">{children}</body>
    </html>
  );
}
