'use client'

import { motion } from 'framer-motion'
import { PASOS, buildWhatsAppUrl } from '@/lib/constants'

const TIEMPO_ESTIMADO: Record<string, string> = {
  '01': '5 min',
  '02': '2 min',
  '03': 'Inmediato',
}

export default function ComoFunciona() {
  const waReprocann = `https://wa.me/5492996375723?text=${encodeURIComponent('Hola Flora, no tengo el REPROCANN todavía. ¿Me ayudan con el trámite?')}`

  return (
    <section id="como-funciona" className="bg-[#F7F6EB] py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-20">

        {/* Header */}
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px 0px' }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <h2 className="font-[family-name:var(--font-garamond)] text-[40px] md:text-[52px] text-[#2D4239] leading-[1.05] mb-3">
            Cómo funciona
          </h2>
          <p className="font-[family-name:var(--font-hanken)] text-[17px] text-[#2D4239]/60">
            Tres pasos simples para acceder.
          </p>
        </motion.div>

        {/* Pasos — 3 columnas con conectores mejorados */}
        <div className="flex flex-col md:flex-row items-start gap-0">
          {PASOS.map((paso, index) => (
            <div key={paso.numero} className="flex-1 flex items-start gap-0">

              {/* Paso */}
              <motion.div
                className="flex-1 pb-12 md:pb-0 md:pr-8 group"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px 0px' }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.1 }}
              >
                {/* Número circular con hover */}
                <motion.div
                  className="
                    w-12 h-12 rounded-full
                    border-2 border-[#71CE6A]
                    flex items-center justify-center
                    mb-6
                    transition-colors duration-200
                    group-hover:bg-[#71CE6A]
                  "
                  whileHover={{ backgroundColor: '#71CE6A' }}
                >
                  <span className="font-[family-name:var(--font-hanken)] text-[14px] font-bold text-[#2D4239]">
                    {paso.numero}
                  </span>
                </motion.div>

                <h3 className="font-[family-name:var(--font-hanken)] text-[17px] font-bold text-[#2D4239] mb-3">
                  {paso.titulo}
                </h3>
                <p className="font-[family-name:var(--font-hanken)] text-[15px] text-[#2D4239]/60 leading-relaxed mb-3">
                  {paso.descripcion}
                </p>

                {/* Tag de tiempo estimado */}
                <span className="
                  font-[family-name:var(--font-hanken)] text-[11px] uppercase tracking-[0.1em]
                  text-[#2D4239]/40
                ">
                  {TIEMPO_ESTIMADO[paso.numero]}
                </span>
              </motion.div>

              {/* Conector mejorado — solo desktop */}
              {index < PASOS.length - 1 && (
                <div className="hidden md:flex items-center justify-center w-16 flex-shrink-0 mt-6">
                  <div className="relative flex-1 flex items-center">
                    <div className="w-full h-px bg-[#71CE6A]/30" />
                    <span className="absolute left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#71CE6A]" />
                  </div>
                </div>
              )}

            </div>
          ))}
        </div>

        {/* CTA pie */}
        <motion.div
          className="mt-16 pt-8 border-t border-[#2D4239]/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <a
            href={waReprocann}
            target="_blank"
            rel="noopener noreferrer"
            className="
              font-[family-name:var(--font-hanken)] text-[14px] font-semibold text-[#2D4239]
              underline underline-offset-4 decoration-[#71CE6A] decoration-2
              hover:text-[#2D4239]/70 transition-colors duration-150
            "
          >
            ¿No tenés el REPROCANN? Te ayudamos a tramitarlo →
          </a>
        </motion.div>

      </div>
    </section>
  )
}
