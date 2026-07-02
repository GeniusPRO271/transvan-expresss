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
        <h2 className="font-main text-sm font-medium text-white/60 mb-6">
          Transfer privado y tours en Chile
        </h2>
        <p className="font-main font-light text-xs leading-relaxed text-white/40 mb-4">
          Transvan Express ofrece traslados privados y compartidos desde Santiago hacia los principales destinos de Chile. Nuestro servicio de transfer al Aeropuerto Internacional Arturo Merino Benítez está disponible las 24 horas, los 365 días del año. También cubrimos los centros de ski más importantes de la Región Metropolitana: Valle Nevado, Farellones, El Colorado, La Parva y Portillo.
        </p>
        <p className="font-main font-light text-xs leading-relaxed text-white/40 mb-4">
          Para quienes quieren explorar Chile, ofrecemos tours exclusivos al Embalse del Yeso en el Cajón del Maipo, city tours por Santiago, visitas a viñedos, safari en Rancagua, y excursiones a Pomaire e Isla Negra. Todos nuestros vehículos cuentan con aire acondicionado, Wi-Fi y GPS en tiempo real.
        </p>
        <p className="font-main font-light text-xs leading-relaxed text-white/40">
          Con más de 5 años de experiencia y 200+ traslados completados, atendemos en español, inglés y portugués. Nuestras vans tienen capacidad para grupos de hasta 16 pasajeros, perfectas para familias, grupos de turistas y eventos corporativos.
        </p>
      </section>
    </main>
  );
}
