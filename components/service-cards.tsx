'use client'

import { useEffect, useRef } from "react"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type Service = {
  id: string
  title: string
  shortDesc: string
  cardImage: string
}

export function ServiceCards({ services }: { services: Service[] }) {
  const containerRef = useRef<HTMLDivElement>(null)

  const { contextSafe } = useGSAP(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from('.service-card', {
        autoAlpha: 0,
        y: 60,
        duration: 1.2,
        stagger: { each: 0.07, from: 'end' },
        ease: 'power3.out',
      })
    })
  }, { scope: containerRef })

  const handleEnter = contextSafe((link: HTMLElement) =>
    gsap.to(link, { backgroundColor: 'rgba(255,255,255,0.15)', duration: 1, ease: 'power2.out' })
  )

  const handleLeave = contextSafe((link: HTMLElement) =>
    gsap.to(link, {
      backgroundColor: 'rgba(255,255,255,0.0784)',
      duration: 1,
      ease: 'power2.out',
      onComplete: () => gsap.set(link, { clearProps: 'backgroundColor' }),
    })
  )

  useEffect(() => {
    const container = containerRef.current
    const links = container ? Array.from(container.querySelectorAll<HTMLElement>('.card-link')) : []

    const handlers = links.map(link => {
      const enter = () => handleEnter(link)
      const leave = () => handleLeave(link)
      link.addEventListener('mouseenter', enter)
      link.addEventListener('mouseleave', leave)
      link.addEventListener('touchstart', enter, { passive: true })
      link.addEventListener('touchend', leave, { passive: true })
      return { link, enter, leave }
    })

    return () => {
      handlers.forEach(({ link, enter, leave }) => {
        link.removeEventListener('mouseenter', enter)
        link.removeEventListener('mouseleave', leave)
        link.removeEventListener('touchstart', enter)
        link.removeEventListener('touchend', leave)
      })
    }
  }, [handleEnter, handleLeave])

  return (
    <div ref={containerRef}>
      {services.map((service) => (
        <div key={service.id} className="service-card mb-0.5">
          <Link href={`/servicios/${service.id}`} className="card-link max-w-[518px] max-w-[105px] group flex items-center cursor-pointer justify-start bg-[#ffffff14] backdrop-blur-md gap-x-2.5 p-2.5 font-main text-white rounded-[12.8px] w-full lg:w-103 h-26.25">
            <div className="relative flex justify-center items-center rounded-lg w-21.25 h-21.25 overflow-hidden shrink-0">
              <Image
                src={service.cardImage}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center items-start h-full">
              <div className="flex justify-start items-start h-full w-full">
                <div className="flex justify-start items-center w-full">
                  <h2 className="font-medium text-[16px] w-full">{service.title}</h2>
                  <div className="relative w-4 h-4 overflow-hidden shrink-0">
                    <ArrowRight
                      size={16}
                      className="absolute inset-0 transition-transform duration-[900ms] ease-in-out group-hover:translate-x-full"
                    />
                    <ArrowRight
                      size={16}
                      className="absolute inset-0 -translate-x-full transition-transform duration-[900ms] ease-in-out group-hover:translate-x-0"
                    />
                  </div>
                </div>
              </div>
              <div>
                <p className="font-main text-sm font-light leading-[120%]">{service.shortDesc}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}
