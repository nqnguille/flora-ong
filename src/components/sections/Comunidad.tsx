'use client'

import Image from 'next/image'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { IMAGES } from '@/lib/constants'

export default function Comunidad() {
  return (
    <SectionWrapper id="comunidad" className="bg-[#F7F6EB]">
      <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">

        {/* Imagen */}
        <div className="flex-1 relative h-[300px] md:h-[420px] rounded-[2px] overflow-hidden">
          <Image
            src={IMAGES.comunidad}
            alt="Personas de la comunidad Flora, asociados al club de cultivo medicinal"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Contenido */}
        <div className="flex-1 max-w-[440px]">
          <span className="font-[family-name:var(--font-hanken)] text-xs font-semibold uppercase tracking-widest text-[#2D4239]/50 block mb-8">
            Comunidad
          </span>

          {/* Quote editorial */}
          <blockquote className="font-[family-name:var(--font-garamond)] text-[22px] md:text-[26px] italic text-[#2D4239] leading-[1.4] mb-6">
            "Ya no recibo sin saber qué es. Eso cambia todo."
          </blockquote>

          <cite className="not-italic block">
            <span className="font-[family-name:var(--font-hanken)] text-[12px] uppercase tracking-wider text-[#2D4239]/50">
              María — Asociada desde 2024, Neuquén Capital
            </span>
          </cite>

          {/* Separador */}
          <div className="h-px bg-[#2D4239]/10 my-8" />

          <p className="font-[family-name:var(--font-hanken)] text-[15px] text-[#2D4239]/65 leading-relaxed">
            Más de 200 personas en todo el país encontraron en Flora una comunidad
            donde la información circula sin tabúes y el acceso es transparente.
            No estás sola en este camino.
          </p>
        </div>

      </div>
    </SectionWrapper>
  )
}
