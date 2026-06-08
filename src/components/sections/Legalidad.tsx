'use client'

import SectionWrapper from '@/components/ui/SectionWrapper'
import { LEGAL_ITEMS, buildWhatsAppUrl, WA_MESSAGES } from '@/lib/constants'

export default function Legalidad() {
  return (
    <SectionWrapper id="legalidad" className="bg-[#F7F6EB] border-t border-[#2D4239]/10">
      <div className="flex flex-col md:flex-row gap-16 md:gap-24">

        {/* Columna izquierda — badge + título */}
        <div className="flex-1 max-w-[400px]">
          {/* Badge REPROCANN */}
          <div className="inline-flex items-center gap-3 mb-10 px-4 py-3 border border-[#2D4239]/15 rounded-[4px]">
            <div className="w-7 h-7 rounded-full bg-[#71CE6A] flex items-center justify-center flex-shrink-0">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#2D4239" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div>
              <div className="font-[family-name:var(--font-hanken)] text-[10px] uppercase tracking-wider text-[#2D4239]/50 mb-0.5">
                Registro habilitado
              </div>
              <div className="font-[family-name:var(--font-hanken)] text-[13px] font-bold text-[#2D4239]">
                REPROCANN HABILITADA
              </div>
            </div>
          </div>

          <h2 className="font-[family-name:var(--font-garamond)] text-[40px] md:text-[48px] text-[#2D4239] leading-[1.05] mb-6">
            Operamos bajo
            el marco legal.
          </h2>
          <p className="font-[family-name:var(--font-hanken)] text-[16px] text-[#2D4239]/65 leading-relaxed mb-8">
            El Decreto 883/2020 y la Ley 27.350 amparan cada paso de nuestro
            funcionamiento. No hay zonas grises.
          </p>

          <p className="font-[family-name:var(--font-hanken)] text-[14px] text-[#2D4239]/55 leading-relaxed">
            ¿Tenés dudas sobre tu situación legal?{' '}
            <a
              href={buildWhatsAppUrl(WA_MESSAGES.legalidad)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2D4239] underline underline-offset-4 decoration-[#71CE6A] hover:text-[#71CE6A] transition-colors duration-150"
            >
              Escribinos. Te explicamos sin compromiso.
            </a>
          </p>
        </div>

        {/* Columna derecha — afirmaciones legales */}
        <div className="flex-1">
          <span className="font-[family-name:var(--font-hanken)] text-xs font-semibold uppercase tracking-widest text-[#2D4239]/50 block mb-8">
            Marco legal
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
            {LEGAL_ITEMS.map((item, index) => (
              <div
                key={index}
                className={`
                  py-6 border-t border-[#2D4239]/10 flex items-start gap-4
                  ${index % 2 === 1 ? 'sm:pl-8 sm:border-l sm:border-[#2D4239]/10' : 'sm:pr-8'}
                `}
              >
                {/* Checkmark tipográfico */}
                <span className="font-[family-name:var(--font-garamond)] text-[18px] text-[#71CE6A] leading-none mt-0.5 flex-shrink-0">
                  ✓
                </span>
                <span className="font-[family-name:var(--font-hanken)] text-[15px] text-[#2D4239] leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </SectionWrapper>
  )
}
