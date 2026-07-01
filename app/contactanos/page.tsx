import type { Metadata } from "next";
import { ArrowRight, CalendarCheck } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contáctanos — Reserva tu Transfer",
  description:
    "Contacta a Transvan Express por WhatsApp o email para reservar tu transfer privado o tour en Chile. Atención personalizada y respuesta inmediata.",
  alternates: { canonical: "/contactanos" },
};

export default function Contact() {
  return (
    <main className="">
      <div className="h-[calc(100vh-52px)] w-full px-8 py-4 relative flex flex-col lg:flex-row items-end lg:justify-between">
        <div className="w-full flex flex-1 justify-start items-end ">
          <div className="text-white">
            <p className="font-main font-medium text-[40px] sm:text-[60px] leading-[100%]">
              Si <span className="font-secondary italic text-[40px] sm:text-[70px]"> buscas </span><br />
              <span className="font-secondary italic text-[40px] sm:text-[70px]">transporte,</span> privado <br /> o compartido <br />
              hablemos.
            </p>
          </div>
        </div>
        <div className="w-full flex-1 lg:flex-0  flex mt-[14px] justify-start items-start ">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col text-white leading-[140%]">
              <span className="font-semibold text-[16px]">Redes Sociales</span>
              <p className="font-light text-white/80 text-[16px]">Instagram</p>
              <p className="font-light text-[16px] text-white/80">Facebook</p>
            </div>
            <div className="flex flex-col text-white leading-[140%]">
              <span className="font-semibold text-[16px]">Contacto Whatsapp</span>
              <Link href="https://wa.me/56992912194" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:opacity-80 transition-opacity">
                <p className="font-light text-white/80 text-[16px]">+56 9 92912194</p>
              </Link>
              <Link href="https://wa.me/56988101802" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:opacity-80 transition-opacity">
                <p className="font-light text-[16px] text-white/80">+56 9 88101802</p>
              </Link>
            </div>

            <div className="flex flex-col text-white leading-[140%]">
              <span className="font-semibold text-[16px]">Contacto</span>
              <p className="font-light text-white/80 text-[16px]">transvanexpresss@gmail.com</p>
            </div>
            <Link href={"https://form.typeform.com/to/MIwhR07i"} className="lg:hidden flex items-center cursor-pointer justify-start bg-[#ffffff14] hover:bg-[rgba(255,255,255,0.15)] backdrop-blur-md gap-x-2.5 p-2.5 font-main text-white rounded-[12.8px] w-full h-26.25">
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
      </div>
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

    </main >
  )
}

