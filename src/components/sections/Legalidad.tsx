'use client'

import { motion } from 'framer-motion'
import { buildWhatsAppUrl, WA_MESSAGES } from '@/lib/constants'

const VALORES_LEGALES = [
  {
    titulo: 'Legalidad',
    descripcion: 'Operamos bajo la Ley 27.350 y el Decreto 883/2020. Cada socio tiene REPROCANN vigente.',
    icono: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    titulo: 'Transparencia',
    descripcion: 'Documentación completa de cada variedad. Sin zonas grises ni información oculta.',
    icono: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    titulo: 'Cuidado',
    descripcion: 'Cultivo sin pesticidas, análisis de laboratorio disponibles. Sabés exactamente qué recibís.',
    icono: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
]

export default function Legalidad() {
  const waUrl = buildWhatsAppUrl(WA_MESSAGES.legalidad)

  return (
    <section id="legalidad" className="bg-white py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-20">

        {/* Fila superior — stat grande + texto descriptivo */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end gap-6 md:gap-12 mb-20 pb-16 border-b border-[#2D4239]/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px 0px' }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          {/* Número grande */}
          <div className="flex items-baseline gap-4 flex-shrink-0">
            <span className="font-[family-name:var(--font-garamond)] text-[80px] md:text-[96px] text-[#71CE6A] leading-none">
              4x
            </span>
          </div>

          {/* Texto */}
          <div className="max-w-[520px]">
            <p className="font-[family-name:var(--font-hanken)] text-[18px] text-[#2D4239] leading-relaxed mb-4">
              Operamos bajo el marco REPROCANN con cuatro pilares de cumplimiento legal que nos distinguen como asociación civil registrada en Argentina.
            </p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                font-[family-name:var(--font-hanken)] text-[14px] font-semibold text-[#2D4239]
                underline underline-offset-4 decoration-[#71CE6A] decoration-2
                hover:text-[#2D4239]/70 transition-colors duration-150
              "
            >
              ¿Tenés dudas? Te explicamos sin compromiso →
            </a>
          </div>

          {/* Badge REPROCANN — esquina */}
          <div className="md:ml-auto flex-shrink-0">
            <div className="inline-flex items-center gap-3 px-4 py-3 border border-[#2D4239]/15 rounded-[4px]">
              <div className="w-7 h-7 rounded-full bg-[#71CE6A] flex items-center justify-center flex-shrink-0">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#2D4239" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <div className="font-[family-name:var(--font-hanken)] text-[9px] uppercase tracking-wider text-[#2D4239]/40 mb-0.5">
                  Registro habilitado
                </div>
                <div className="font-[family-name:var(--font-hanken)] text-[12px] font-bold text-[#2D4239]">
                  REPROCANN HABILITADA
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3 columnas de valores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {VALORES_LEGALES.map((valor, index) => (
            <motion.div
              key={valor.titulo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px 0px' }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.1 }}
            >
              <div className="text-[#71CE6A] mb-5">
                {valor.icono}
              </div>
              <h3 className="font-[family-name:var(--font-hanken)] text-[16px] font-bold text-[#2D4239] mb-3">
                {valor.titulo}
              </h3>
              <p className="font-[family-name:var(--font-hanken)] text-[14px] text-[#2D4239]/60 leading-relaxed">
                {valor.descripcion}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
