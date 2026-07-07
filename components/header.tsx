'use client'

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { usePathname } from "next/navigation"
import { gsap } from "gsap"
import Link from "next/link"

export function Header() {
  const headerRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useGSAP(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const isMobile = window.innerWidth < 768
      gsap.from(headerRef.current, {
        y: isMobile ? '100%' : '-100%',
        autoAlpha: 0,
        duration: 1.2,
        ease: 'power3.out',
      })
    })
  }, { scope: headerRef, dependencies: [pathname], revertOnUpdate: true })

  return (
    <div ref={headerRef} className="fixed bottom-0 left-0 right-0 z-50 bg-black w-full md:static md:z-auto">
      <div className="flex w-full px-4 py-2.5 items-center">
        <div className="hidden md:flex flex-col text-white gap-0 font-main w-full">
          <Link href="/" className="font-bold text-xs w-fit">
            TRANSVAN <br /> EXPRESS
          </Link>
        </div>
        <div className="text-white flex gap-x-0 md:gap-x-10 font-semibold text-[13px] w-full items-center justify-around md:justify-start font-main lg:pr-[343px]">
          <Link href="/" className="md:hidden py-3 px-4 hover:opacity-80 transition-opacity">
            Inicio
          </Link>

          <Link href="/servicios" className="py-3 px-4 hover:opacity-80 transition-opacity">
            Servicios
          </Link>

          <Link href="/preguntas-frecuentes" className="py-3 px-4 hover:opacity-80 transition-opacity">
            Preguntas
          </Link>

          <Link href="/nosotros" className="py-3 px-4 hover:opacity-80 transition-opacity">
            Nosotros
          </Link>

          <Link href="/contactanos" className="py-3 px-4 hover:opacity-80 transition-opacity">
            Contáctanos
          </Link>
        </div>
      </div>
    </div>
  )
}
