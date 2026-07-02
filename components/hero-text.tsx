'use client'

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"

export function HeroText() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.timeline()
        .from('.word', {
          autoAlpha: 0,
          y: 30,
          duration: 0.71,
          stagger: 0.07,
          ease: 'power3.out',
        })
        .from('.sub-line', {
          autoAlpha: 0,
          y: 10,
          duration: 1.2,
          stagger: 0.14,
          ease: 'power2.out',
        }, '-=0.4')
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className="text-white">
      <h1 className="font-main font-medium text-[40px] md:text-[60px] leading-[100%]">
        <span className="word inline-block font-secondary italic text-[50px] md:text-[70px]">Transfers</span>{' '}
        <span className="word inline-block">compartidos</span>
        {'  '}<br />
        <span className="word inline-block">y</span>{' '}
        <span className="word inline-block">privados</span>{' '}
        <span className="word inline-block">para</span>
        <br />
        <span className="word inline-block">cada</span>{' '}
        <span className="word inline-block font-secondary italic text-[50px] md:text-[70px]">viaje</span>
      </h1>
      <div className="w-full flex items-center justify-end">
        <p className="font-main text-sm max-w-51.5 leading-[120%] font-normal pt-5">
          <span className="sub-line block">Elige entre transfers</span>
          <span className="sub-line block">compartidos o privados y</span>
          <span className="sub-line block">disfruta un servicio cálido,</span>
          <span className="sub-line block">seguro y profesional en</span>
          <span className="sub-line block">todo Chile. Hacemos que</span>
          <span className="sub-line block">cada trayecto sea parte</span>
          <span className="sub-line block">de una gran experiencia.</span>
        </p>
      </div>
    </div>
  )
}
