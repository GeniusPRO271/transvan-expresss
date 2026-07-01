import type { Metadata } from "next";
import services from "@/data/services.json";
import { HeroText } from "@/components/hero-text";
import { ServiceCards } from "@/components/service-cards";

export const metadata: Metadata = {
  title: "Transfer Privado en Chile — Aeropuerto, Ski, Tours y más",
  description:
    "Reserva tu transfer privado en Chile con Transvan Express. Traslados al aeropuerto de Santiago, centros de ski, Valparaíso, Viña del Mar, viñedos y tours exclusivos.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main className="">
      <div className=" flex flex-col  w-full ">
        <div className="pt-55 w-full flex justify-center items-start lg:justify-start lg:items-center px-[8px] h-auto lg:h-[calc(100vh-52px)] max-w-355 mx-auto lg:w-[80%]  relative items-start justify-center px-4 lg:px-0">
          <HeroText />
        </div>
        <div className="items-start flex right-0 h-auto min-h-[90%] mt-[80px] max-h-[525px] justify-stretch static overflow-y-scroll lg:px-0 lg:pb-0 lg:absolute lg:right-0 lg:bottom-0  lg:h-[calc(100vh-52px-50px)] lg:items-stretch lg:max-w-105 lg:w-full lg:justify-end lg:z-50 lg:overflow-y-auto lg:scrollbar-hide">
          <ServiceCards services={services} />
        </div>
      </div>
    </main>
  );
}
