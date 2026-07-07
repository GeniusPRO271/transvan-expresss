import type { Metadata } from "next";
import services from "@/data/services.json";
import { HeroText } from "@/components/hero-text";
import { ServiceCards } from "@/components/service-cards";

export const metadata: Metadata = {
  title: "Transfer Privado en Chile — Aeropuerto, Ski, Tours y más",
  description:
    "Reserva tu transfer privado en Chile con Transvan Express. Aeropuerto Santiago, centros de ski, Valparaíso, Viña del Mar y tours exclusivos.",
  alternates: { canonical: "/", languages: { "es-CL": "/" } },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cómo puedo reservar un transfer con Transvan Express?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Puedes reservar a través de nuestro formulario en línea, por WhatsApp al +56 9 92912194 o +56 9 88101802, o enviando un correo a transvanexpresss@gmail.com. Respondemos de forma inmediata.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué incluye el servicio de transfer privado?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nuestro transfer privado incluye traslado puerta a puerta, vehículo con aire acondicionado y Wi-Fi, conductor capacitado, seguimiento GPS y atención en español, inglés y portugués.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuántos pasajeros pueden viajar en una van?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Disponemos de vans para hasta 10 y 16 pasajeros, ideales para grupos familiares, turistas y eventos corporativos.",
      },
    },
    {
      "@type": "Question",
      name: "¿A qué destinos hacen transfers desde Santiago?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Realizamos transfers al aeropuerto de Santiago, centros de ski (Valle Nevado, Farellones, El Colorado, La Parva, Portillo), Valparaíso, Viña del Mar, Cajón del Maipo, Pomaire, Isla Negra y más.",
      },
    },
    {
      "@type": "Question",
      name: "¿Operan los 365 días del año?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, Transvan Express opera los 365 días del año, incluyendo feriados, para garantizarte traslados cuando más lo necesitas.",
      },
    },
  ],
};

export default function Home() {
  return (
    <main className="">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className=" flex flex-col  w-full ">
        <div className="pt-55 w-full flex justify-center items-start lg:justify-start lg:items-center px-[8px] h-auto lg:h-[calc(100vh-52px)] max-w-355 mx-auto lg:w-[80%]  relative items-start justify-center px-4 lg:px-0">
          <HeroText />
        </div>
        <div className="items-start flex right-0 h-auto min-h-[90%] mt-[80px] max-h-[525px] justify-stretch static overflow-y-scroll lg:px-0 lg:pb-0 lg:absolute lg:right-0 lg:bottom-0  lg:h-[calc(100vh-52px-50px)] lg:items-stretch lg:max-w-105 lg:w-full lg:justify-end lg:z-50 lg:overflow-y-auto lg:scrollbar-hide">
          <ServiceCards services={services} />
        </div>
      </div>

      <section className="px-4 py-16 max-w-355 mx-auto lg:w-[80%]">
        <h2 className="font-main text-sm font-medium text-white/60 mb-8">
          Transfer privado y tours en Chile
        </h2>

        <div className="flex flex-col gap-10">
          <div>
            <h3 className="font-main font-medium text-white/70 text-xs uppercase tracking-widest mb-3">
              Transfer Aeropuerto Santiago
            </h3>
            <p className="font-main font-light text-xs leading-relaxed text-white/40">
              El Aeropuerto Internacional Arturo Merino Benítez (SCL) está a 30–40 minutos del centro de Santiago. Nuestro servicio de transfer al aeropuerto incluye seguimiento de vuelo en tiempo real, conductor esperándote en el área de llegadas con tu nombre, y recogida directamente en tu hotel, domicilio o cualquier punto de la Región Metropolitana. Operamos las 24 horas, los 365 días del año, incluyendo Año Nuevo, Navidad y todos los feriados.
            </p>
          </div>

          <div>
            <h3 className="font-main font-medium text-white/70 text-xs uppercase tracking-widest mb-3">
              Transfers a Centros de Ski
            </h3>
            <p className="font-main font-light text-xs leading-relaxed text-white/40">
              A menos de una hora de Santiago se concentran algunos de los mejores centros de ski de Sudamérica. Realizamos transfers privados y compartidos a Valle Nevado (3.025 m de altitud), Farellones (2.330 m), El Colorado, La Parva y Portillo. Todos nuestros vehículos están equipados con cadenas de nieve y son aptos para ruta de montaña. Nuestros conductores conocen el camino a los Andes a la perfección, con horarios de salida coordenados para que llegues a la apertura de las pistas.
            </p>
          </div>

          <div>
            <h3 className="font-main font-medium text-white/70 text-xs uppercase tracking-widest mb-3">
              Tours y Excursiones desde Santiago
            </h3>
            <p className="font-main font-light text-xs leading-relaxed text-white/40">
              Santiago es el punto de partida ideal para explorar Chile. Ofrecemos tours privados al Embalse del Yeso en el Cajón del Maipo, city tours por el centro histórico de Santiago, visitas a los viñedos del Valle Central, excursiones al pueblo artesanal de Pomaire y la Casa Museo Pablo Neruda en Isla Negra, tours a Valparaíso (Patrimonio de la Humanidad UNESCO) y Viña del Mar, y safaris en el Parque Safari de Rancagua. Todos los tours se realizan en vans privadas con conductor bilingüe.
            </p>
          </div>

          <div>
            <h3 className="font-main font-medium text-white/70 text-xs uppercase tracking-widest mb-3">
              ¿Por qué elegir Transvan Express?
            </h3>
            <p className="font-main font-light text-xs leading-relaxed text-white/40 mb-3">
              Con más de 5 años de experiencia y 200+ traslados completados, somos una empresa de transporte turístico con sede en Santiago que atiende en español, inglés y portugués.
            </p>
            <ul className="font-main font-light text-xs leading-relaxed text-white/40 flex flex-col gap-1">
              <li>— GPS en tiempo real en todos los vehículos</li>
              <li>— Flota inscrita en el Ministerio de Transporte y Telecomunicaciones de Chile</li>
              <li>— Vans con aire acondicionado y Wi-Fi a bordo</li>
              <li>— Capacidad para grupos de 8, 10, 16 o 19 pasajeros</li>
              <li>— Atención personalizada y respuesta en menos de 1 hora</li>
              <li>— Servicio disponible 365 días al año, incluyendo feriados</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
