import type { Metadata } from "next";
import { ArrowRight, CalendarCheck } from "lucide-react";
import Link from "next/link";

function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

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
              <Link href="https://www.instagram.com/transvanexpresss/" target="_blank" rel="noopener noreferrer" className="font-light text-white/80 text-[16px] hover:opacity-80 transition-opacity">Instagram</Link>
              <Link href="https://www.facebook.com/people/Transvanexpressscl/100065082180487/" target="_blank" rel="noopener noreferrer" className="font-light text-[16px] text-white/80 hover:opacity-80 transition-opacity">Facebook</Link>
            </div>
            <div className="flex flex-col text-white leading-[140%]">
              <span className="font-semibold text-[16px]">Contacto Whatsapp</span>
              <Link href="https://wa.me/56992912194" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:opacity-80 transition-opacity flex items-center gap-1.5">
                <WhatsAppIcon size={15} />
                <p className="font-light text-white/80 text-[16px]">+56 9 92912194</p>
              </Link>
              <Link href="https://wa.me/56988101802" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:opacity-80 transition-opacity flex items-center gap-1.5">
                <WhatsAppIcon size={15} />
                <p className="font-light text-[16px] text-white/80">+56 9 88101802</p>
              </Link>
            </div>

            <div className="flex flex-col text-white leading-[140%]">
              <span className="font-semibold text-[16px]">Contacto</span>
              <Link href="mailto:transvanexpresss@gmail.com" className="font-light text-white/80 text-[16px] hover:opacity-80 transition-opacity">transvanexpresss@gmail.com</Link>
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

