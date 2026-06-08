'use client'

import { motion } from 'framer-motion'
import { PASOS, buildWhatsAppUrl } from '@/lib/constants'

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

        {/* Pasos — 3 columnas con flechas entre ellas */}
        <div className="flex flex-col md:flex-row items-start gap-0">
          {PASOS.map((paso, index) => (
            <div key={paso.numero} className="flex-1 flex items-start gap-0">

              {/* Paso */}
              <motion.div
                className="flex-1 pb-12 md:pb-0 md:pr-8"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px 0px' }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.1 }}
              >
                {/* Número circular */}
                <div className="
                  w-12 h-12 rounded-full
                  border-2 border-[#71CE6A]
                  flex items-center justify-center
                  mb-6
                ">
                  <span className="font-[family-name:var(--font-hanken)] text-[14px] font-bold text-[#2D4239]">
                    {paso.numero}
                  </span>
                </div>

                <h3 className="font-[family-name:var(--font-hanken)] text-[17px] font-bold text-[#2D4239] mb-3">
                  {paso.titulo}
                </h3>
                <p className="font-[family-name:var(--font-hanken)] text-[15px] text-[#2D4239]/60 leading-relaxed">
                  {paso.descripcion}
                </p>
              </motion.div>

              {/* Flecha decorativa entre pasos — solo desktop, no en el último */}
              {index < PASOS.length - 1 && (
                <div className="hidden md:flex items-center justify-center w-12 flex-shrink-0 mt-5">
                  <svg width="28" height="16" viewBox="0 0 28 16" fill="none" aria-hidden="true">
                    <path
                      d="M0 8h24M18 2l6 6-6 6"
                      stroke="#2D4239"
                      strokeOpacity="0.25"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}

              {/* Divisor mobile */}
              {index < PASOS.length - 1 && (
                <div className="md:hidden w-full h-px bg-[#2D4239]/10 mb-12" />
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
