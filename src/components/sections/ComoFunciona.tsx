'use client'

import SectionWrapper from '@/components/ui/SectionWrapper'
import { PASOS } from '@/lib/constants'

export default function ComoFunciona() {
  return (
    <SectionWrapper id="como-funciona" className="bg-[#F7F6EB]">
      {/* Header */}
      <div className="mb-16">
        <span className="font-[family-name:var(--font-hanken)] text-xs font-semibold uppercase tracking-widest text-[#2D4239]/50 block mb-4">
          El proceso
        </span>
        <h2 className="font-[family-name:var(--font-garamond)] text-[40px] md:text-[48px] text-[#2D4239] leading-[1.05]">
          Tres pasos.
          <br />
          Sin burocracia.
        </h2>
      </div>

      {/* Pasos — línea de tiempo horizontal */}
      <div className="flex flex-col md:flex-row gap-0">
        {PASOS.map((paso, index) => (
          <div key={paso.numero} className="flex-1 relative">
            {/* Conector horizontal — entre pasos en desktop */}
            {index < PASOS.length - 1 && (
              <div className="hidden md:block absolute top-10 left-[calc(50%+2rem)] right-0 h-px bg-[#2D4239]/15" />
            )}

            <div className="pb-12 md:pb-0 md:pr-12 border-b md:border-b-0 border-[#2D4239]/10 last:border-0">
              {/* Número decorativo */}
              <div className="font-[family-name:var(--font-garamond)] text-[80px] md:text-[96px] text-[#71CE6A]/30 leading-none select-none mb-2">
                {paso.numero}
              </div>

              {/* Contenido */}
              <h3 className="font-[family-name:var(--font-hanken)] text-[17px] font-bold text-[#2D4239] mb-3 uppercase tracking-[0.04em]">
                {paso.titulo}
              </h3>
              <p className="font-[family-name:var(--font-hanken)] text-[15px] text-[#2D4239]/65 leading-relaxed">
                {paso.descripcion}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Nota final */}
      <div className="mt-16 pt-8 border-t border-[#2D4239]/10">
        <p className="font-[family-name:var(--font-hanken)] text-[14px] text-[#2D4239]/50">
          ¿No tenés el REPROCANN todavía?{' '}
          <a
            href="https://wa.me/5492996375723?text=Hola%20Flora%2C%20necesito%20información%20sobre%20el%20REPROCANN."
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2D4239] underline underline-offset-4 decoration-[#71CE6A] hover:text-[#71CE6A] transition-colors duration-150"
          >
            Escribinos por WhatsApp, te ayudamos con el trámite.
          </a>
        </p>
      </div>
    </SectionWrapper>
  )
}
