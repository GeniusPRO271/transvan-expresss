import Link from "next/link";

export default function Footer() {
  const time = new Intl.DateTimeFormat("es-CL", {
    timeZone: "America/Santiago",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(new Date());

  return (
    <div className="bg-black w-full">
      <div className="flex w-full px-4 py-2.5 items-center">
        <div className="flex flex-col text-white gap-0 font-main w-full">
          <span className="font-light text-xs">
            Santiago: {time}
          </span>
        </div>

        <div className="text-white flex gap-x-10 font-semibold text-[13px] w-full items-center justify-start font-main">
          <Link href="/contactanos" className="hover:opacity-70 transition-opacity">Preguntas</Link>
          <Link href="/servicios" className="hover:opacity-70 transition-opacity">Servicios</Link>
          <Link href="/nosotros" className="hover:opacity-70 transition-opacity">Nosotros</Link>
          <Link href="/contactanos" className="hover:opacity-70 transition-opacity">Contáctanos</Link>
        </div>
      </div>
    </div>
  );
}
