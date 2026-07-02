import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página no encontrada — Transvan Express",
};

export default function NotFound() {
  return (
    <main className="flex flex-col items-start justify-end h-[calc(100vh-52px)] px-8 pb-16 text-white">
      <h1 className="font-secondary italic text-[80px] leading-[100%] mb-4">404</h1>
      <p className="font-main font-light text-white/60 text-lg mb-8">
        Esta página no existe o fue movida.
      </p>
      <Link
        href="/"
        className="font-main font-medium text-sm text-white underline underline-offset-4 hover:opacity-70 transition-opacity"
      >
        Volver al inicio
      </Link>
    </main>
  );
}
