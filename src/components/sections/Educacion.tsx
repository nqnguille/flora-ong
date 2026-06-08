'use client'

import Image from 'next/image'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { ARTICULOS } from '@/lib/constants'

export default function Educacion() {
  const [principal, ...resto] = ARTICULOS

  return (
    <SectionWrapper id="educacion" className="bg-[#F7F6EB]">
      {/* Header */}
      <div className="mb-16">
        <span className="font-[family-name:var(--font-hanken)] text-xs font-semibold uppercase tracking-widest text-[#2D4239]/50 block mb-4">
          De nuestra guía
        </span>
        <h2 className="font-[family-name:var(--font-garamond)] text-[40px] md:text-[48px] text-[#2D4239] leading-[1.05] max-w-[560px]">
          Lo que querés saber
          antes de empezar.
        </h2>
      </div>

      {/* Layout editorial: 1 grande + 2 compactos */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-12">

        {/* Artículo principal — con imagen */}
        <article className="flex-[2] flex flex-col">
          <div className="relative h-[240px] md:h-[280px] rounded-[2px] overflow-hidden mb-6">
            <Image
              src={principal.imagen!}
              alt={principal.titulo}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 55vw"
            />
          </div>
          <div className="flex items-center gap-3 mb-3">
            <span className="font-[family-name:var(--font-hanken)] text-[11px] uppercase tracking-wider text-[#2D4239]/40">
              {principal.fecha}
            </span>
            <span className="w-1 h-1 rounded-full bg-[#2D4239]/20" />
            <span className="font-[family-name:var(--font-hanken)] text-[11px] uppercase tracking-wider text-[#2D4239]/40">
              {principal.lectura}
            </span>
          </div>
          <h3 className="font-[family-name:var(--font-garamond)] text-[22px] md:text-[26px] text-[#2D4239] leading-[1.25] hover:text-[#2D4239]/70 transition-colors duration-150 cursor-pointer">
            {principal.titulo}
          </h3>
        </article>

        {/* Artículos secundarios */}
        <div className="flex-1 flex flex-col gap-8 justify-between">
          {resto.map((articulo) => (
            <article key={articulo.titulo} className="border-t border-[#2D4239]/10 pt-6 first:border-t-0 first:pt-0 md:border-t md:pt-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-[family-name:var(--font-hanken)] text-[11px] uppercase tracking-wider text-[#2D4239]/40">
                  {articulo.fecha}
                </span>
                <span className="w-1 h-1 rounded-full bg-[#2D4239]/20" />
                <span className="font-[family-name:var(--font-hanken)] text-[11px] uppercase tracking-wider text-[#2D4239]/40">
                  {articulo.lectura}
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-garamond)] text-[20px] text-[#2D4239] leading-[1.3] hover:text-[#2D4239]/70 transition-colors duration-150 cursor-pointer">
                {articulo.titulo}
              </h3>
            </article>
          ))}

          {/* CTA educación */}
          <div className="pt-4">
            <a
              href="#"
              className="
                font-[family-name:var(--font-hanken)] text-[13px] font-semibold
                text-[#2D4239] underline underline-offset-4 decoration-[#71CE6A] decoration-2
                hover:text-[#2D4239]/70 transition-colors duration-150
              "
            >
              Ver toda la guía
            </a>
          </div>
        </div>

      </div>
    </SectionWrapper>
  )
}
