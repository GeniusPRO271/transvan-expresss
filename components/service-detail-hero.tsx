'use client'

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import Image from "next/image"

type ServiceDetailHeroProps = {
  title: string
  capacity: string
  minReservation: string
  languages: string[]
  cardImage: string
}

export function ServiceDetailHero({ title, capacity, minReservation, languages, cardImage }: ServiceDetailHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.timeline()
        .from('.title-word', {
          autoAlpha: 0,
          y: 40,
          duration: 1.2,
          stagger: 0.1,
          ease: 'power3.out',
        })
        .from('.service-info', {
          autoAlpha: 0,
          duration: 1.2,
          stagger: { each: 0.1, from: 'start' },
          ease: 'power2.out',
        }, '-=1')
        .from('.service-hero-image', {
          autoAlpha: 0,
          y: 60,
          duration: 1.2,
          ease: 'power3.out',
        }, '-=1')
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <h1 className="mb-2.5 font-secondary font-normal leading-[100%] text-[90px] text-white">
        {title.split(' ').map((word, i) => (
          <span key={i} className="title-word inline-block mr-[0.25em]">{word}</span>
        ))}
      </h1>
      <div className="flex flex-col md:flex-row justify-start items-center pt-8 pb-4">
        <div className="service-info mb-[14px] font-main flex flex-col items-start justify-center w-full md:w-auto flex-1">
          <span className="font-medium text-sm text-white">Capacidad</span>
          <span className="font-light text-sm leading-[110%] text-white">{capacity}</span>
        </div>
        <div className="flex flex-col md:flex-row flex-1 w-full justify-center items-center">
          <div className="service-info mb-[14px] font-main flex flex-1 flex-col items-start w-full md:w-auto justify-center">
            <span className="font-medium text-sm text-white">Reserva mínima</span>
            <span className="font-light text-sm leading-[110%] text-white">{minReservation}</span>
          </div>
          <div className="service-info mb-[14px] font-main flex flex-1 flex-col items-start w-full md:w-auto justify-center">
            <span className="font-medium text-sm text-white">Idiomas</span>
            <span className="font-light text-sm leading-[110%] text-white">{languages.join(" · ")}</span>
          </div>
        </div>
      </div>
      <div className="service-hero-image w-full h-[820px] shrink-0 relative rounded-3xl mt-6">
        <Image
          src={cardImage}
          alt={title}
          fill
          className="object-cover  px-0 rounded-3xl"
          priority
        />
      </div>
    </div>
  )
}
