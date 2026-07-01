'use client'

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import Image from "next/image"

export function NosotrosHero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.timeline()
        .from('.nosotros-word', {
          autoAlpha: 0,
          y: 30,
          duration: 1.2,
          stagger: 0.02,
          ease: 'power3.out',
        })
        .from('.nosotros-image', {
          autoAlpha: 0,
          y: 60,
          duration: 1.2,
          ease: 'power3.out',
        }, '-=1')
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <div className="w-full flex mt-[180px] px-[7px]">
        <div className=" hidden lg:flex flex-1 shrink-0 flex-col pt-6">
          <span className="text-sm font-medium text-white"></span>
        </div>
        <div className="flex-3 relative flex justify-center items-center text-center lg:justify-start lg:items-start lg:text-left">
          <h1 className="font-main text-[40px] lg:text-[60px] font-light leading-[110%] text-white">
            <span className="nosotros-word inline-block mr-[0.25em]">TransVanExpress;</span>
            <span className="nosotros-word inline-block mr-[0.25em]">servicio</span>
            <span className="nosotros-word inline-block mr-[0.25em]">de</span>
            <br />
            <span className="nosotros-word inline-block mr-[0.25em] font-secondary italic text-[50px] lg:text-[70px]">transfers</span>
            <span className="nosotros-word inline-block mr-[0.25em]">y</span>
            <span className="nosotros-word inline-block mr-[0.25em]">traslados</span>
            <span className="nosotros-word inline-block">fiables.</span>
          </h1>
        </div>
      </div>
      <div className="w-full flex mt-[50px] px-[7px]">
        <div className="flex-1 shrink-0 hidden lg:flex flex-col pt-6">
          <span className="text-sm font-medium text-white"></span>
        </div>
        <div className="nosotros-image flex-3 h-[585px] relative rounded-3xl overflow-hidden">
          <Image
            src="/images/trans-express.png"
            alt="Transvan Express"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  )
}
