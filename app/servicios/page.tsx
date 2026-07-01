import type { Metadata } from "next";
import { ArrowRight, CalendarCheck } from "lucide-react";
import Image from 'next/image'
import Link from "next/link";
import services from "@/data/services.json";

export const metadata: Metadata = {
  title: "Servicios — Transfers y Tours en Chile",
  description:
    "Explora todos los servicios de Transvan Express: transfer aeropuerto Santiago, centros de ski, Valparaíso, Viña del Mar, tour Embalse del Yeso, viñedos, city tour y más.",
  alternates: { canonical: "/servicios" },
};


export default function Service() {
  return (
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

      <div className="w-full flex mt-[180px] px-[16px]">
        <div className="flex-1 relative rounded-3xl overflow-hidden">
          <h1 className="font-main text-[40px] sm:text-[60px] font-light leading-[110%] text-white">Descubre
            Chile
            como <br />
            <span className="font-secondary italic">nunca antes </span>
            lo viviste.
          </h1>
        </div>
      </div>

      <div className="mt-[85px] p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[2px]">
          {services.map((service) => (
            <Link key={service.id} href={`/servicios/${service.id}`} style={{ aspectRatio: '1 / 1.314' }} className="relative flex justify-center items-end cursor-pointer rounded-[20px] overflow-hidden">
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

