import type { Metadata } from "next";
import { ArrowRight, CalendarCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import services from "@/data/services.json";
import { ServiceDetailHero } from "@/components/service-detail-hero";

const serviceKeywords: Record<string, string[]> = {
  "transfer-farellones": ["Transfer Farellones", "transfer privado Farellones", "transfer compartido Farellones", "traslado Farellones Santiago", "ski Farellones"],
  "transfer-valparaiso": ["Transfer Valparaíso", "transfer privado Valparaíso", "transfer compartido Valparaíso", "traslado Valparaíso Santiago"],
  "transfer-aeropuerto": ["Transfer Aeropuerto Santiago", "transfer privado aeropuerto SCL", "transfer compartido aeropuerto Santiago", "traslado aeropuerto Santiago"],
  "transfer-valle-nevado": ["Transfer Valle Nevado", "transfer privado Valle Nevado", "transfer compartido Valle Nevado", "traslado Valle Nevado", "ski Valle Nevado Santiago"],
  "transfer-el-colorado": ["Transfer El Colorado", "transfer privado El Colorado", "transfer compartido El Colorado", "ski El Colorado Santiago"],
  "transfer-la-parva": ["Transfer La Parva", "transfer privado La Parva", "ski La Parva Santiago"],
  "vina-del-mar": ["Tour Viña del Mar", "transfer Viña del Mar", "tour privado Viña del Mar", "Viña del Mar Santiago"],
  "tour-embalse-del-yeso": ["Tour Embalse del Yeso", "excursión Embalse del Yeso", "tour Cajón del Maipo", "Cajón del Maipo Santiago"],
  "city-tour-santiago": ["City Tour Santiago", "city tour Santiago Chile", "tour Santiago", "tour privado Santiago"],
  "tour-vinedos": ["Tour viñedos Chile", "tour viñedos Valle Central", "tour privado viñedos Santiago"],
  "parque-safari": ["Parque Safari Rancagua", "tour safari Rancagua", "transfer Parque Safari", "safari Chile"],
  "portillo-laguna-del-inca": ["Transfer Portillo", "Portillo ski Santiago", "Laguna del Inca tour", "transfer Portillo Laguna del Inca"],
  "pomaire-isla-negra": ["Tour Pomaire Isla Negra", "excursión Pomaire", "excursión Isla Negra", "Casa Museo Pablo Neruda"],
  "van-matrimonios": ["Van matrimonios Santiago", "van privada matrimonios", "traslado matrimonios Chile", "van eventos corporativos Santiago"],
};

export function generateStaticParams() {
  return services.map((s) => ({ id: s.id }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  const { id } = await params;
  const service = services.find((s) => s.id === id);
  if (!service) return {};

  return {
    title: service.title,
    description: service.description[0].slice(0, 160),
    keywords: serviceKeywords[service.id] ?? [],
    alternates: { canonical: `/servicios/${service.id}`, languages: { "es-CL": `/servicios/${service.id}` } },
    openGraph: {
      title: `${service.title} | Transvan Express`,
      description: service.description[0].slice(0, 160),
      images: [{ url: service.cardImage, alt: service.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | Transvan Express`,
      description: service.description[0].slice(0, 160),
      images: [service.cardImage],
    },
  };
}

export default async function Service({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const service = services.find((s) => s.id === id);

  if (!service) notFound();

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description[0],
    provider: {
      "@type": "LocalBusiness",
      name: "Transvan Express",
      url: "https://transporte-eventos.cl",
    },
    areaServed: { "@type": "Country", name: "Chile" },
    availableLanguage: service.languages,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://transporte-eventos.cl",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Servicios",
        item: "https://transporte-eventos.cl/servicios",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `https://transporte-eventos.cl/servicios/${service.id}`,
      },
    ],
  };

  return (
    <main className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div>
        <div className="px-4 pt-8 pb-4">
          <ServiceDetailHero
            title={service.title}
            capacity={service.capacity}
            minReservation={service.minReservation}
            languages={service.languages}
            cardImage={service.cardImage}
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
        </div>

        <div className="">
          <div className="flex flex-col md:flex-row gap-y-[14px] md:gap-y-0 px-4 pt-[90px]">
            <div className="">
              <h2 className="text-sm font-medium text-white">Detalles</h2>
            </div>

            <div className="flex flex-1 justify-end items-center">
              <div className="w-full max-w-[720px] text-white/60 font-medium font-main flex flex-col gap-y-6">
                {service.description.map((paragraph, i) => (
                  <p key={i} className={i === 0 ? "text-xl font-light leading-[120%] text-white" : "font-light text-sm leading-[120%]"}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-y-[14px] md:gap-y-0 px-4 pt-[90px]">
            <div className="">
              <h2 className="text-sm font-medium text-white">Servicios Incluidos</h2>
            </div>

            <div className="flex flex-1 justify-end items-center">
              <div className="w-full max-w-[720px] text-white/60 font-medium font-main flex flex-col gap-0">
                {Array.from({ length: Math.ceil(service.includedServices.length / 2) }, (_, row) => (
                  <div key={row} className="flex justify-center items-stretch w-full">
                    {service.includedServices.slice(row * 2, row * 2 + 2).map((item, col) => (
                      <div key={col} className="w-full p-5 font-light font-main flex justify-start items-center text-xs border rounded-lg border-[#2A2A2A]">
                        {item}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col px-4  lg:flex-row gap-1.75 w-full h-205 mt-[80px]">
          {service.gallery.map((src, i) => (
            <div key={i} className="relative flex-1 rounded-3xl overflow-hidden">
              <Image
                src={src}
                alt={service.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          ))}
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
    </main>
  )
}
