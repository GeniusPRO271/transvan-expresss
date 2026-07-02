import Link from "next/link";

export default function Footer() {
  const time = new Intl.DateTimeFormat("es-CL", {
    timeZone: "America/Santiago",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(new Date());

  return (
    <footer className="bg-black w-full">
      <div className="flex w-full px-4 py-2.5 items-center gap-x-6">
        <div className="flex flex-col text-white gap-0 font-main shrink-0">
          <span className="font-light text-xs">Santiago: {time}</span>
          <address className="not-italic font-light text-xs text-white/50 leading-tight">
            Santiago, Región Metropolitana, Chile
            <br />
            <Link href="tel:+56992912194" className="hover:opacity-70 transition-opacity">+56 9 92912194</Link>
            {" · "}
            <Link href="tel:+56988101802" className="hover:opacity-70 transition-opacity">+56 9 88101802</Link>
          </address>
        </div>

        <div className="text-white flex gap-x-8 font-semibold text-[13px] w-full items-center justify-start font-main">
          <Link href="/contactanos" className="hover:opacity-70 transition-opacity">Preguntas</Link>
          <Link href="/servicios" className="hover:opacity-70 transition-opacity">Servicios</Link>
          <Link href="/nosotros" className="hover:opacity-70 transition-opacity">Nosotros</Link>
          <Link href="/contactanos" className="hover:opacity-70 transition-opacity">Contáctanos</Link>
        </div>

        <div className="flex gap-x-4 font-main text-[13px] font-medium text-white shrink-0">
          <Link
            href="https://www.instagram.com/transvanexpresss/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
          >
            Instagram
          </Link>
          <Link
            href="https://www.facebook.com/people/Transvanexpressscl/100065082180487/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
          >
            Facebook
          </Link>
        </div>
      </div>
    </footer>
  );
}
