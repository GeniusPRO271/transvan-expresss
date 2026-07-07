import type { Metadata } from "next";
import { ArrowRight, CalendarCheck } from "lucide-react";
import Image from 'next/image'
import Link from "next/link";
import services from "@/data/services.json";
import { NosotrosHero } from "@/components/nosotros-hero";

export const metadata: Metadata = {
  title: "Nosotros — Quiénes Somos",
  description:
    "Conoce a Transvan Express: más de 5 años ofreciendo traslados privados y tours en Chile con puntualidad, seguridad y cobertura en toda la Región Metropolitana y más.",
  keywords: [
    "Transvan Express",
    "empresa de transfers Chile",
    "transporte turístico Santiago",
    "empresa traslados privados Chile",
  ],
  alternates: { canonical: "/nosotros", languages: { "es-CL": "/nosotros" } },
  openGraph: {
    title: "Nosotros — Quiénes Somos | Transvan Express",
    description:
      "Más de 5 años ofreciendo traslados privados y tours en Chile con puntualidad, seguridad y cobertura en toda la Región Metropolitana.",
    images: [{ url: "/images/trans-express.png", width: 1200, height: 630, alt: "Transvan Express" }],
  },
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Sobre Transvan Express",
  description:
    "Más de 5 años ofreciendo traslados privados y compartidos y tours en Chile con puntualidad, seguridad y cobertura en toda la Región Metropolitana.",
  url: "https://transporte-eventos.cl/nosotros",
  mainEntity: {
    "@type": "Organization",
    name: "Transvan Express",
    url: "https://transporte-eventos.cl",
    areaServed: "Chile",
  },
};

export default function About() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <div>
        <div className="hidden lg:block absolute right-[7px] bottom-0 h-[calc(100vh-10px)] items-stretch max-w-[320px] w-full justify-end z-50 scrollbar-hide">
          <Link href={"https://form.typeform.com/to/MIwhR07i"} className="flex items-center cursor-pointer justify-start bg-[#ffffff14] hover:bg-[rgba(255,255,255,0.15)] backdrop-blur-md gap-x-2.5 p-2.5 font-main text-white rounded-[12.8px] w-[320px] h-26.25">
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

        <NosotrosHero />
        <div>
          <div className="flex flex-col lg:flex-row gap-y-[14px] px-4 pt-[90px]">
            <div className="flex-1 w-full">
              <h2 className="text-sm font-medium text-white">Nuestra Misión</h2>
            </div>

            <div className="flex flex-3 justify-end items-center">
              <div className="w-full text-white/60 font-medium font-main flex flex-col gap-y-6">
                <p className="text-[26px] md:text-[31px] lg:text-[33px] font-main font-light leading-[120%] text-white">
                  Brindamos servicios de <span className="font-secondary italic font-[40px]">traslados privados</span>  y transporte <span className="font-secondary italic font-[40px]">confiable </span>que conectan a los viajeros con aeropuertos, tours y destinos, entregando <span className="font-secondary italic font-[40px]">movilidad segura </span>, puntual y cómoda en todo Chile.
                </p>
                <div className="flex flex-col lg:flex-row lg:items-center items-start lg:gap-0 gap-y-[14px] justify-start pt-[80px]">
                  <div className="flex-1">
                    <div className="font-secondary text-[90px] font-normal text-white leading-[100%]">200+</div>
                    <div className="font-main text-[14px] font-normal text-white/60">Traslados completados</div>
                  </div>
                  <div className="flex-1">
                    <div className="font-secondary text-[90px] font-normal text-white leading-[100%]">100%</div>
                    <div className="font-main text-[14px] font-normal text-white/60">Viajes seguros y puntuales</div>
                  </div>
                  <div className="flex-1">
                    <div className="font-secondary text-[90px] font-normal text-white leading-[100%]">5+</div>
                    <div className="font-main text-[14px] font-normal text-white/60">Años de experiencia en transfer</div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row  px-1 pt-22.5">
            <div className="flex-1 w-full md:border rounded-3xl border-[#2A2A2A]">
              <div className="flex-1 w-full p-4.5 pl-3 ">
                <h2 className="text-sm font-medium text-white">Nuestros Pilares</h2>
              </div>
            </div>
            <div className="flex flex-3 flex-col justify-end items-center">
              <div className="w-full flex-col lg:flex-row text-white font-medium font-main flex border rounded-3xl border-[#2A2A2A] p-[18px]">
                <div className="w-full text-[33px] font-light font-secondary">
                  <h3>Puntualidad</h3>
                </div>
                <div className="text-[14px] lg:max-w-[282px] font-light font-main">
                  <p>Todos nuestros vehículos cuentan con sistema GPS en tiempo real, lo que nos permite garantizar traslados puntuales desde y hacia el Aeropuerto de Santiago, centros de ski, viñedos y cualquier destino en Chile.</p>
                </div>
              </div>
              <div className="w-full flex-col lg:flex-row text-white font-medium font-main flex border rounded-3xl border-[#2A2A2A] p-[18px]">
                <div className="w-full text-[33px] font-light font-secondary">
                  <h3>Seguridad</h3>
                </div>
                <div className="text-[14px] lg:max-w-[282px] font-light font-main">
                  <p>Nuestros vehículos están inscritos en el Ministerio de Transporte y Telecomunicaciones de Chile. Conductores capacitados, con vasta experiencia en rutas urbanas e interurbanas, para que tu viaje sea seguro en todo momento.</p>
                </div>
              </div>
              <div className="w-full flex-col lg:flex-row text-white font-medium font-main flex border rounded-3xl border-[#2A2A2A] p-[18px]">
                <div className="w-full text-[33px] font-light font-secondary">
                  <h3>Cobertura</h3>
                </div>
                <div className="text-[14px] lg:max-w-[282px] font-light font-main">
                  <p>Operamos en toda la región metropolitana y más allá — Aeropuerto de Santiago, Viña del Mar, Valparaíso, Valle Nevado, Farellones, Portillo, Cajón del Maipo, Pomaire e Isla Negra, entre otros destinos.</p>
                </div>
              </div>

              <div className="w-full flex-col lg:flex-row text-white font-medium font-main flex border rounded-3xl border-[#2A2A2A] p-[18px]">
                <div className="w-full text-[33px] font-light font-secondary">
                  <h3>Comodidad</h3>
                </div>
                <div className="text-[14px] lg:max-w-[282px] font-light font-main">
                  <p>Viaja en vans full equipo con aire acondicionado y Wi-Fi a bordo. Contamos con vehículos de distintas capacidades — 8, 10, 16 o 19 pasajeros — ideales para grupos familiares, turistas y eventos corporativos.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="mt-[85px]">
          <div className="flex gap-[2px] overflow-x-auto scrollbar-hide">
            {services.map((service) => (
              <Link key={service.id} href={`/servicios/${service.id}`} className="relative flex justify-center items-end cursor-pointer rounded-[20px] h-[460px] w-[346px] shrink-0 overflow-hidden">
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
                        <p className="font-medium text-[16px] w-full">{service.title}</p>
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
          <div className="right-0 bottom-0 p-1 items-stretch max-w-[360px] w-full justify-end z-50 overflow-y-auto scrollbar-hide">
            <Link href={"https://form.typeform.com/to/MIwhR07i"} className="flex items-center cursor-pointer justify-start bg-[#ffffff14] hover:bg-[rgba(255,255,255,0.15)] backdrop-blur-md gap-x-2.5 p-2.5 font-main text-white rounded-[12.8px] w-[360px] h-26.25">
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
            </Link>
          </div>
        </div>

      </div>

    </div >
  )
}

