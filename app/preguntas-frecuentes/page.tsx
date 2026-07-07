import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes — Transfer Privado Chile",
  description:
    "Respuestas a las preguntas más frecuentes sobre transfers, tours y reservas con Transvan Express en Chile. Aeropuerto Santiago, ski, Valparaíso y más.",
  alternates: { canonical: "/preguntas-frecuentes", languages: { "es-CL": "/preguntas-frecuentes" } },
};

const faqs = [
  {
    category: "Reservas",
    items: [
      {
        q: "¿Cómo puedo hacer una reserva?",
        a: "Puedes reservar por WhatsApp al +56 9 92912194 o +56 9 88101802, por correo a transvanexpresss@gmail.com, o a través de nuestro formulario en línea. Respondemos en menos de 1 hora durante el día.",
      },
      {
        q: "¿Con cuánta anticipación debo reservar?",
        a: "Recomendamos reservar con al menos 24 horas de anticipación. Para grupos grandes o traslados en temporada alta de ski (julio–agosto), lo ideal es reservar con 48–72 horas de anticipación.",
      },
      {
        q: "¿Qué información necesito para reservar?",
        a: "Necesitamos: fecha y hora del traslado, punto de origen y destino, número de pasajeros y cantidad de equipaje, y un número de contacto. Para transfers de aeropuerto, también el número de vuelo.",
      },
      {
        q: "¿Cómo se paga el servicio?",
        a: "Aceptamos pago en efectivo (pesos chilenos o dólares) y transferencia bancaria. El pago se realiza antes o durante el traslado. Contáctanos para coordinar la forma de pago más conveniente para ti.",
      },
      {
        q: "¿Puedo cancelar o modificar mi reserva?",
        a: "Sí. Aceptamos cancelaciones y cambios sin costo hasta 12 horas antes del servicio. Para cancelaciones con menos anticipación, contáctanos directamente y buscamos la mejor solución.",
      },
    ],
  },
  {
    category: "Traslados y Servicio",
    items: [
      {
        q: "¿Qué pasa si mi vuelo se atrasa?",
        a: "Para transfers de aeropuerto, monitoreamos tu vuelo en tiempo real. Si hay atraso, ajustamos el horario del conductor automáticamente sin costo adicional. Solo necesitamos el número de vuelo al momento de reservar.",
      },
      {
        q: "¿El servicio incluye tiempo de espera?",
        a: "Sí. En transfers de aeropuerto incluimos hasta 60 minutos de espera gratuita desde el aterrizaje. Para otros servicios, el conductor espera hasta 15 minutos en el punto acordado.",
      },
      {
        q: "¿Puedo cambiar el horario el mismo día?",
        a: "Intentamos ser flexibles. Si necesitas cambiar el horario el mismo día, avísanos con la mayor anticipación posible por WhatsApp y coordinaremos según disponibilidad.",
      },
      {
        q: "¿Los conductores hablan inglés o portugués?",
        a: "Sí. Contamos con conductores que atienden en español, inglés y portugués. Si necesitas atención en un idioma específico, indícalo al reservar.",
      },
      {
        q: "¿Las vans tienen Wi-Fi y aire acondicionado?",
        a: "Sí. Todos nuestros vehículos cuentan con Wi-Fi a bordo, aire acondicionado, sistema GPS en tiempo real y espacio para equipaje. Las vans tienen capacidad para 8, 10, 16 o 19 pasajeros.",
      },
    ],
  },
  {
    category: "Destinos y Servicios",
    items: [
      {
        q: "¿A qué centros de ski realizan transfers?",
        a: "Operamos transfers a Valle Nevado, Farellones, El Colorado, La Parva y Portillo. Todos desde Santiago, con opción de recogida en tu hotel o domicilio en la Región Metropolitana.",
      },
      {
        q: "¿Hacen tours personalizados?",
        a: "Sí. Además de nuestros tours estándar (Embalse del Yeso, City Tour Santiago, Viñedos, Pomaire e Isla Negra, Safari Rancagua, Valparaíso y Viña del Mar), podemos armar tours a medida según tus intereses y horarios.",
      },
      {
        q: "¿Hasta dónde llega la cobertura geográfica?",
        a: "Cubrimos toda la Región Metropolitana y rutas hacia Valparaíso, Viña del Mar, Valle Nevado, Portillo, Cajón del Maipo, Pomaire, Isla Negra y Rancagua. Para destinos fuera de estas zonas, consulta disponibilidad.",
      },
      {
        q: "¿Hacen transfers para matrimonios y eventos corporativos?",
        a: "Sí. Ofrecemos servicio de van privada para matrimonios, eventos corporativos y grupos. Contamos con vehículos de distintas capacidades. Contáctanos para una cotización personalizada.",
      },
      {
        q: "¿Operan los 365 días del año, incluyendo feriados?",
        a: "Sí, operamos todos los días del año, incluyendo feriados nacionales y festivos. Para fechas especiales, recomendamos reservar con anticipación ya que la disponibilidad es mayor.",
      },
    ],
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.flatMap((cat) =>
    cat.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    }))
  ),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://transporte-eventos.cl" },
    { "@type": "ListItem", position: 2, name: "Preguntas Frecuentes", item: "https://transporte-eventos.cl/preguntas-frecuentes" },
  ],
};

export default function FAQ() {
  return (
    <main className="min-h-[calc(100vh-52px)] px-4 pt-[120px] pb-20 max-w-355 mx-auto lg:w-[80%]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <h1 className="font-main font-medium text-[40px] sm:text-[56px] leading-[100%] text-white mb-4">
        Preguntas{" "}
        <span className="font-secondary italic text-[48px] sm:text-[64px]">frecuentes</span>
      </h1>
      <p className="font-main font-light text-white/50 text-sm mb-16 max-w-lg leading-relaxed">
        Todo lo que necesitas saber sobre reservas, traslados y tours con Transvan Express. ¿No encuentras tu pregunta?{" "}
        <Link href="/contactanos" className="underline underline-offset-2 hover:opacity-70 transition-opacity">
          Escríbenos directamente.
        </Link>
      </p>

      <div className="flex flex-col gap-16">
        {faqs.map((section) => (
          <section key={section.category}>
            <h2 className="font-main text-sm font-medium text-white/60 mb-6 uppercase tracking-widest">
              {section.category}
            </h2>
            <div className="flex flex-col divide-y divide-white/10">
              {section.items.map((item, i) => (
                <div key={i} className="py-5">
                  <h3 className="font-main font-medium text-white text-[15px] mb-2">{item.q}</h3>
                  <p className="font-main font-light text-white/50 text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-20 pt-10 border-t border-white/10">
        <p className="font-main font-light text-white/40 text-sm mb-4">¿Tienes otra pregunta?</p>
        <Link
          href="/contactanos"
          className="font-main font-medium text-white text-sm underline underline-offset-4 hover:opacity-70 transition-opacity"
        >
          Contáctanos →
        </Link>
      </div>
    </main>
  );
}
