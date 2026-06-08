'use client'

import SectionWrapper from '@/components/ui/SectionWrapper'
import { VALORES } from '@/lib/constants'

export default function PorQueFlora() {
  return (
    <SectionWrapper id="por-que-flora" className="bg-[#F7F6EB]">
      {/* Headline claim */}
      <div className="mb-16 max-w-[640px]">
        <span className="font-[family-name:var(--font-hanken)] text-xs font-semibold uppercase tracking-widest text-[#2D4239]/50 block mb-4">
          Por qué Flora
        </span>
        <h2 className="font-[family-name:var(--font-garamond)] text-[40px] md:text-[48px] text-[#2D4239] leading-[1.05]">
          Sabés lo que recibís.
        </h2>
        <p className="font-[family-name:var(--font-hanken)] text-[17px] text-[#2D4239]/65 mt-4 leading-relaxed">
          Sin intermediarios opacos, sin incertidumbre. Cada detalle de tu acceso está documentado y bajo el marco legal vigente.
        </p>
      </div>

      {/* Lista de valores — dos columnas desktop, una mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {VALORES.map((valor, index) => (
          <div
            key={valor.titulo}
            className={`
              py-8 border-t border-[#2D4239]/10
              ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16 md:border-l md:border-[#2D4239]/10'}
            `}
          >
            <h3 className="font-[family-name:var(--font-hanken)] text-[13px] font-semibold uppercase tracking-[0.06em] text-[#2D4239] mb-2">
              {valor.titulo}
            </h3>
            <p className="font-[family-name:var(--font-hanken)] text-[15px] text-[#2D4239]/65 leading-relaxed">
              {valor.descripcion}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
