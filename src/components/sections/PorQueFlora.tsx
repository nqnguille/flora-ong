'use client'

import { motion } from 'framer-motion'
import { VALORES } from '@/lib/constants'

const ICONOS = [
  // Documentado — documento/lista
  <svg key="doc" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>,
  // Legal — escudo con check
  <svg key="legal" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>,
  // Calidad verificada — microscopio / planta
  <svg key="calidad" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22V12" />
    <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
    <circle cx="12" cy="5" r="3" />
    <path d="M6.168 18.849A10 10 0 0 0 12 22a10 10 0 0 0 5.832-3.151" />
  </svg>,
  // Acompañamiento — chat/mensaje
  <svg key="acomp" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>,
  // Comunidad — personas
  <svg key="com" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>,
]

export default function PorQueFlora() {
  return (
    <section id="por-que-flora" className="bg-white py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-20">

        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px 0px' }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <h2 className="font-[family-name:var(--font-garamond)] text-[40px] md:text-[52px] text-[#2D4239] leading-[1.05] mb-3">
            ¿Por qué elegir Flora?
          </h2>
          <p className="font-[family-name:var(--font-hanken)] text-[17px] text-[#2D4239]/60 max-w-[520px]">
            Más que acceso. Una experiencia que te acompaña.
          </p>
        </motion.div>

        {/* Grid de 5 valores — 3 en primera fila, 2 en segunda */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0">
          {VALORES.map((valor, index) => (
            <motion.div
              key={valor.titulo}
              className="py-8 px-0 md:px-8 border-t border-[#2D4239]/10 first:border-t-0 sm:first:border-t-0"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px 0px' }}
              transition={{ duration: 0.35, ease: 'easeOut', delay: (index % 3) * 0.08 }}
            >
              {/* Ícono */}
              <div className="text-[#71CE6A] mb-4">
                {ICONOS[index]}
              </div>
              <h3 className="font-[family-name:var(--font-hanken)] text-[15px] font-bold text-[#2D4239] mb-2">
                {valor.titulo}
              </h3>
              <p className="font-[family-name:var(--font-hanken)] text-[14px] text-[#2D4239]/60 leading-relaxed">
                {valor.descripcion}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <a
            href="#como-funciona"
            className="
              font-[family-name:var(--font-hanken)] text-[14px] font-semibold text-[#2D4239]
              underline underline-offset-4 decoration-[#71CE6A] decoration-2
              hover:text-[#2D4239]/70 transition-colors duration-150
            "
          >
            Conocé más sobre nosotros →
          </a>
        </motion.div>

      </div>
    </section>
  )
}
