import type { Metadata } from "next";
import { ArrowRight, CalendarCheck } from "lucide-react";
import Image from 'next/image'
import Link from "next/link";
import services from "@/data/services.json";

export const metadata: Metadata = {
  title: "Servicios — Transfers y Tours en Chile",
  description:
    "Explora todos los servicios de Transvan Express: transfer aeropuerto Santiago, centros de ski, Valparaíso, Viña del Mar, tour Embalse del Yeso, viñedos, city tour y más.",
  keywords: [
    "transfers Chile",
    "transfer aeropuerto Santiago",
    "transfer centros de ski",
    "transfer Valparaíso",
    "city tour Santiago",
    "tours privados Chile",
    "Transvan Express servicios",
  ],
  alternates: { canonical: "/servicios", languages: { "es-CL": "/servicios" } },
  openGraph: {
    title: "Servicios — Transfers y Tours en Chile | Transvan Express",
    description:
      "Explora todos los servicios de Transvan Express: transfer aeropuerto Santiago, centros de ski, Valparaíso, Viña del Mar, tours y más.",
    images: [{ url: "/images/trans-express.png", width: 1200, height: 630, alt: "Servicios de Transvan Express" }],
  },
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Servicios de Transvan Express",
  itemListElement: services.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: s.title,
    url: `https://transporte-eventos.cl/servicios/${s.id}`,
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://transporte-eventos.cl" },
    { "@type": "ListItem", position: 2, name: "Servicios", item: "https://transporte-eventos.cl/servicios" },
  ],
};

export default function Service() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="hidden lg:flex pointer-events-none absolute right-[7px] bottom-0 h-[calc(100vh-10px)] items-stretch max-w-[320px] w-full justify-end z-50 scrollbar-hide">
        <Link href={"https://form.typeform.com/to/MIwhR07i"} className="pointer-events-auto flex items-center cursor-pointer justify-start bg-[#ffffff14] hover:bg-[rgba(255,255,255,0.15)] backdrop-blur-md gap-x-2.5 p-2.5 font-main text-white rounded-[12.8px] w-[320px] h-26.25">
          <div className="flex justify-center items-center rounded-lg w-21.25 h-21.25 bg-white/10 shrink-0">
            <CalendarCheck size={28} className="text-white/70" />
          </div>
          <div className="flex flex-col justify-center items-start h-full">
            <div className="flex justify-start items-start h-full w-full">
              <div className="flex justify-start items-center w-full">
                <p className="font-medium text-[16px] w-full">Agendar una reserva</p>
                <ArrowRight size={16} />
              </div>
            </div>
            <div>
              <p className="font-main text-sm font-light leading-[120%]">
                ¿Te gusta lo que ves? Planifica tu próxima aventura con nosotros.
              </p>
            </div>
          </div>
        </Link>
      </div>

      <div className="w-full flex mt-[180px] px-[16px] justify-center">
        <h1 className="font-main text-[40px] sm:text-[60px] font-light leading-[110%] text-white text-center">
          Descubre Chile<br />
          como{" "}
          <span className="font-secondary italic">nunca antes </span>
          lo viviste.
        </h1>
      </div>

      <div className="mt-[85px] p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[2px]">
          {services.map((service) => (
            <Link key={service.id} href={`/servicios/${service.id}`} className="[aspect-ratio:1/1.314] relative flex justify-center items-end cursor-pointer rounded-[20px] overflow-hidden">
              <Image
                src={service.cardImage}
                alt={service.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
              <div className="relative z-20 flex items-center cursor-pointer justify-start gap-x-2.5 p-2.5 font-main text-white rounded-[12.8px] w-full h-26.25">
                <div className="flex flex-col justify-center items-start h-full">
                  <div className="flex justify-start items-start h-full w-full">
                    <div className="flex justify-start items-center w-full">
                      <h2 className="font-medium text-[16px] w-full">{service.title}</h2>
                    </div>
                  </div>
                  <div>
                    <p className="font-main text-sm font-light leading-[120%]">{service.shortDesc}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <section className="flex flex-col lg:flex-row gap-y-[14px] px-4 pt-[90px]">
        <div className="flex-1 w-full">
          <span className="text-sm font-medium text-white">Sobre nuestros servicios</span>
        </div>
        <div className="flex flex-3 justify-end items-start">
          <div className="w-full text-white/60 font-light font-main flex flex-col gap-y-5 max-w-[720px]">
            <p className="text-sm leading-[140%]">
              Transvan Express ofrece transfers privados y compartidos desde Santiago hacia los aeropuertos, centros de ski y destinos costeros de Chile, además de tours y excursiones para grupos de todos los tamaños. Atendemos los 365 días del año en español, inglés y portugués.
            </p>
            <p className="text-sm leading-[140%]">
              Nuestros transfers al aeropuerto de Santiago incluyen seguimiento de vuelo en tiempo real. Los transfers a centros de ski cubren Valle Nevado, Farellones, El Colorado, La Parva y Portillo con vehículos equipados con cadenas de nieve. Para los amantes de la cultura, ofrecemos tours a Valparaíso, Viña del Mar, viñedos, Cajón del Maipo y más destinos.
            </p>
            <p className="text-sm leading-[140%]">
              Todas nuestras vans cuentan con Wi-Fi, aire acondicionado y GPS. Capacidad para grupos de 8 a 19 pasajeros — ideales para familias, turistas y eventos corporativos.
            </p>
          </div>
        </div>
      </section>

      <div className="flex flex-col gap-y-[14px] lg:flex-row lg:gap-y-0 my-22.5 px-1.75">
        <div className="w-full">
          <p className="font-normal text-[34px] text-white leading-[120%]">
            ¿Te gusta lo que ves?               <br />
            Reserva tu transfer con nosotros
            <br />
            <span className="italic font-secondary text-[34px]">
              transvanexpresss@gmail.com
            </span>
          </p>
        </div>
        <div className="right-0 bottom-0 p-1 items-stretch max-w-90 w-full justify-end z-50 overflow-y-auto scrollbar-hide">
          <div className="flex items-center cursor-pointer justify-start bg-[#ffffff14] hover:bg-[rgba(255,255,255,0.15)] backdrop-blur-md gap-x-2.5 p-2.5 font-main text-white rounded-[12.8px] w-[360px] h-26.25">
            <div className="flex justify-center items-center rounded-lg w-21.25 h-21.25 bg-white/10 shrink-0">
              <CalendarCheck size={28} className="text-white/70" />
            </div>
            <div className="flex flex-col justify-center items-start h-full">
              <div className="flex justify-start items-start h-full w-full">
                <div className="flex justify-start items-center w-full">
                  <p className="font-medium text-[16px] w-full">Agendar una reserva</p>
                  <ArrowRight size={16} />
                </div>
              </div>
              <div>
                <p className="font-main text-sm font-light leading-[120%]"> Reserva para tus eventos o contrata uno de nuestros servicios de transporte.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

