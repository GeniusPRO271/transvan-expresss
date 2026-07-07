import type { Metadata } from "next";
import { ArrowRight, CalendarCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import services from "@/data/services.json";
import { ServiceDetailHero } from "@/components/service-detail-hero";

const faqByService: Record<string, { q: string; a: string }[]> = {
  "transfer-farellones": [
    { q: "¿Cuánto dura el transfer de Santiago a Farellones?", a: "El trayecto desde Santiago a Farellones toma aproximadamente 50 minutos por la Ruta G-21, con vistas panorámicas de la cordillera." },
    { q: "¿El transfer a Farellones incluye cadenas de nieve?", a: "Sí, todos nuestros vehículos están preparados para ruta de montaña y cuentan con cadenas de nieve disponibles durante toda la temporada invernal." },
    { q: "¿Puedo reservar el transfer a Farellones para el mismo día?", a: "Sí, ofrecemos reserva instantánea confirmada por WhatsApp al +56 9 92912194, con vehículos de 8, 10, 16 o 19 pasajeros." },
  ],
  "transfer-valparaiso": [
    { q: "¿Cuánto dura el transfer de Santiago a Valparaíso?", a: "El recorrido toma aproximadamente 1 hora 30 minutos por la Ruta 68, atravesando el Valle de Casablanca." },
    { q: "¿El transfer a Valparaíso incluye recogida en el hotel?", a: "Sí, el servicio incluye recogida en el punto que elijas: hotel, aeropuerto o domicilio, con traslado directo o con paradas fotográficas opcionales." },
    { q: "¿Ofrecen transfer compartido a Valparaíso?", a: "Sí, el servicio está disponible en modalidad privada o compartida, con confirmación inmediata por WhatsApp." },
  ],
  "transfer-aeropuerto": [
    { q: "¿El transfer al aeropuerto de Santiago opera de madrugada?", a: "Sí, operamos las 24 horas los 7 días de la semana, incluyendo vuelos de madrugada y feriados." },
    { q: "¿Qué pasa si mi vuelo se retrasa?", a: "Monitoreamos tu vuelo en tiempo real y ajustamos la hora de recogida automáticamente, sin costo adicional. Tu conductor te espera en llegadas con un cartel con tu nombre." },
    { q: "¿Desde qué comunas hacen transfer al aeropuerto?", a: "Cubrimos toda la Región Metropolitana: Providencia, Las Condes, Vitacura, Ñuñoa, La Florida, San Bernardo y más, en modalidad privada o compartida." },
  ],
  "transfer-valle-nevado": [
    { q: "¿Cuánto dura el transfer de Santiago a Valle Nevado?", a: "Valle Nevado está a 60 km de Santiago por la Ruta G-21. El viaje toma entre 1 hora 30 minutos y 2 horas según las condiciones de la ruta de montaña." },
    { q: "¿Cuándo es la temporada de ski en Valle Nevado?", a: "La temporada va de junio a septiembre. Nuestras vans salen temprano para que llegues a la apertura de las remontadas y regresan al final de la tarde." },
    { q: "¿Hay espacio para el equipaje de ski en la van?", a: "Sí, nuestros vehículos tienen espacio para esquíes, tablas de snowboard y todo el equipaje de nieve, además de cadenas disponibles para la ruta." },
  ],
  "transfer-el-colorado": [
    { q: "¿Cuánto dura el transfer de Santiago a El Colorado?", a: "El Colorado está a unos 45 minutos a 1 hora de Santiago por la Ruta G-21, pasando por Farellones." },
    { q: "¿Puedo esquiar en El Colorado y La Parva el mismo día?", a: "Sí, ambos centros están conectados por remontadas con un solo ticket. Nuestro conductor puede recogerte en cualquiera de los dos al finalizar el día." },
    { q: "¿Cómo reservo el transfer a El Colorado?", a: "Con reserva instantánea confirmada por WhatsApp al +56 9 92912194. Disponible como transfer privado o compartido con vans de 8, 10, 16 o 19 pasajeros." },
  ],
  "transfer-la-parva": [
    { q: "¿Cuánto dura el transfer de Santiago a La Parva?", a: "El viaje desde Santiago toma aproximadamente 1 hora 15 minutos por la Ruta G-21, pasando por Farellones." },
    { q: "¿Cuándo es la temporada de ski en La Parva?", a: "La temporada va de junio a septiembre. La Parva está conectada por remontadas con El Colorado, duplicando las pistas disponibles con un solo ski pass." },
    { q: "¿El vehículo está preparado para la ruta de montaña?", a: "Sí, todos nuestros vehículos cuentan con cadenas de nieve, calefacción y espacio para equipaje de ski. Disponible como transfer privado o compartido." },
  ],
  "vina-del-mar": [
    { q: "¿Cuánto dura el viaje de Santiago a Viña del Mar?", a: "El traslado toma aproximadamente 1 hora 30 minutos por la Ruta 68, atravesando el Valle de Casablanca." },
    { q: "¿Puedo combinar Viña del Mar con Valparaíso en el mismo día?", a: "Sí, ambas ciudades están a solo 10 minutos de distancia. Coordinamos el recorrido a tu medida con tiempo libre en los principales atractivos." },
    { q: "¿Hacen traslados para el Festival de Viña del Mar?", a: "Sí, realizamos traslados para el Festival de la Canción y eventos en el Casino Enjoy, con horarios completamente flexibles y reserva las 24 horas." },
  ],
  "tour-embalse-del-yeso": [
    { q: "¿Cuánto dura el tour al Embalse del Yeso?", a: "Es una excursión de día completo. El embalse está a unos 100 km al sureste de Santiago, a 2.475 metros de altitud en el Cajón del Maipo." },
    { q: "¿Qué debo llevar al Embalse del Yeso?", a: "Recomendamos ropa abrigada, ya que la temperatura en altura puede ser considerablemente más baja que en Santiago, especialmente en primavera y otoño." },
    { q: "¿Con cuánta anticipación debo reservar el tour?", a: "El tour requiere reserva con 48 horas de anticipación para coordinar la logística y verificar el clima de la ruta. Incluye guía local y transporte puerta a puerta." },
  ],
  "city-tour-santiago": [
    { q: "¿Qué incluye el city tour por Santiago?", a: "Incluye van con guía bilingüe, itinerario personalizado y paradas en la Plaza de Armas, Barrio Lastarria, Bellavista, Cerro Santa Lucía, Barrio Italia y Las Condes, entre otros." },
    { q: "¿El city tour de Santiago es privado o compartido?", a: "Ofrecemos ambas modalidades cualquier día del año, con reserva instantánea. El itinerario se construye contigo según tus intereses y tiempo disponible." },
    { q: "¿Ofrecen city tours nocturnos en Santiago?", a: "Sí, también realizamos tours nocturnos para descubrir la vida nocturna y la iluminación del centro histórico de Santiago." },
  ],
  "tour-vinedos": [
    { q: "¿Qué valles vitivinícolas visita el tour?", a: "Conectamos Santiago con los valles del Maipo (30-60 min), Casablanca y Colchagua (2 hrs), incluyendo bodegas icónicas como Concha y Toro, Santa Rita y Cousiño-Macul." },
    { q: "¿El tour de viñedos incluye conductor designado?", a: "Sí, contarás siempre con un conductor designado para que tu grupo disfrute la experiencia sin preocupaciones, en modalidad privada o compartida." },
    { q: "¿Cuándo es la mejor época para visitar los viñedos?", a: "Los tours operan todo el año, pero primavera y la vendimia (marzo-abril) son las épocas más recomendadas. Reserva con 48 horas de anticipación." },
  ],
  "parque-safari": [
    { q: "¿Cuánto dura el viaje de Santiago al Parque Safari?", a: "El Parque Safari está en Rancagua, a unos 90 km al sur de Santiago. El trayecto toma aproximadamente 60 minutos por la Ruta 5 Sur." },
    { q: "¿El transfer espera mientras visitamos el parque?", a: "Nuestro conductor te deja y recoge directamente en la entrada del parque, con total flexibilidad en el horario de retorno." },
    { q: "¿Cómo reservo el transfer al Parque Safari?", a: "Con reserva instantánea confirmada por WhatsApp, disponible cualquier día del año incluyendo fines de semana y festivos, en modalidad privada o compartida." },
  ],
  "portillo-laguna-del-inca": [
    { q: "¿Cuánto dura el viaje de Santiago a Portillo?", a: "Portillo está a 145 km de Santiago por la ruta del Paso Los Libertadores, uno de los trayectos más espectaculares de Sudamérica. El viaje toma unas 2 horas 30 minutos." },
    { q: "¿Se puede visitar la Laguna del Inca todo el año?", a: "Sí. En invierno se ve congelada junto a las pistas de ski, y en verano y otoño adquiere su icónico color turquesa-esmeralda con acceso libre." },
    { q: "¿Con cuánta anticipación debo reservar?", a: "Se requiere reserva con 24 horas de anticipación para verificar las condiciones de la ruta, especialmente en invierno. Incluye guía de montaña y paradas fotográficas." },
  ],
  "pomaire-isla-negra": [
    { q: "¿Cuánto dura el tour a Pomaire e Isla Negra?", a: "El tour completo dura aproximadamente 8 a 9 horas, con retorno a Santiago al atardecer. Incluye guía cultural y transporte ida y vuelta." },
    { q: "¿Qué se visita en Isla Negra?", a: "La Casa Museo de Pablo Neruda, que conserva la colección de objetos del poeta: mascarones de proa, conchas marinas, botellas de colores y mapas antiguos." },
    { q: "¿Hay tiempo libre en Pomaire?", a: "Sí, tendrás tiempo libre para explorar las tiendas de cerámica y los talleres donde los alfareros trabajan el barro en vivo. Reserva con 24 horas de anticipación." },
  ],
  "van-matrimonios": [
    { q: "¿Qué incluye el servicio de van para matrimonios?", a: "Incluye vehículo decorado según los colores del evento, conductor formal de etiqueta, coordinación con el wedding planner y rutas alternativas para garantizar puntualidad." },
    { q: "¿Con cuánta anticipación debo reservar la van para mi matrimonio?", a: "La reserva mínima es con 72 horas de anticipación para garantizar disponibilidad y preparación del vehículo. Recomendamos reservar con más tiempo para fechas de alta demanda." },
    { q: "¿Qué capacidad tienen las vans para eventos?", a: "Disponemos de vehículos de 8, 10, 16 o 19 pasajeros para novios, familiares e invitados. También cubrimos despedidas de solteros, aniversarios y eventos corporativos." },
  ],
};

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
      images: [{ url: `https://transporte-eventos.cl${service.cardImage}`, width: 1200, height: 630, alt: service.title }],
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

  const faqs = faqByService[service.id] ?? [];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
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
      {faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
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

        {faqs.length > 0 && (
          <section className="flex flex-col md:flex-row gap-y-[14px] md:gap-y-0 px-4 pt-[90px]">
            <div className="">
              <h2 className="text-sm font-medium text-white">Preguntas Frecuentes</h2>
            </div>

            <div className="flex flex-1 justify-end items-center">
              <div className="w-full max-w-[720px] flex flex-col gap-y-2">
                {faqs.map((faq, i) => (
                  <details key={i} className="group border rounded-lg border-[#2A2A2A] p-5">
                    <summary className="cursor-pointer list-none font-main font-medium text-sm text-white flex justify-between items-center gap-4">
                      {faq.q}
                      <span className="text-white/40 shrink-0 transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <p className="font-main font-light text-sm leading-[140%] text-white/60 pt-3">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="px-4 pt-[90px]">
          <h2 className="text-sm font-medium text-white mb-6">Otros servicios que podrían interesarte</h2>
          <div className="flex flex-col sm:flex-row gap-[2px] overflow-x-auto scrollbar-hide">
            {services
              .filter((s) => s.id !== service.id)
              .slice(0, 3)
              .map((related) => (
                <Link
                  key={related.id}
                  href={`/servicios/${related.id}`}
                  className="relative flex justify-center items-end cursor-pointer rounded-[20px] h-[280px] sm:flex-1 shrink-0 overflow-hidden"
                >
                  <Image
                    src={related.cardImage}
                    alt={related.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
                  <div className="relative z-20 flex flex-col justify-end p-4 w-full">
                    <p className="font-main font-medium text-[14px] text-white">{related.title}</p>
                    <p className="font-main font-light text-xs text-white/60 leading-[120%]">{related.shortDesc}</p>
                  </div>
                </Link>
              ))}
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
