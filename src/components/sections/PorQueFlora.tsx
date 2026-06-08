'use client'

import { motion } from 'framer-motion'
import { VALORES } from '@/lib/constants'

export default function PorQueFlora() {
  return (
    <section id="por-que-flora" className="bg-[#F7F6EB] py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-20">

        {/* Header — claim directo, no descripción */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px 0px' }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <h2 className="font-[family-name:var(--font-garamond)] text-[40px] md:text-[52px] text-[#2D4239] leading-[1.05] mb-3">
            Sabés lo que fumás.
          </h2>
          <p className="font-[family-name:var(--font-hanken)] text-[17px] text-[#2D4239]/60 max-w-[460px]">
            Cinco razones concretas por las que esto es diferente al mercado negro.
          </p>
        </motion.div>

        {/* Valores en lista de dos columnas — sin íconos, jerarquía tipográfica */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {VALORES.map((valor, index) => (
            <motion.div
              key={valor.titulo}
              className="py-7 border-t border-[#2D4239]/10"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px 0px' }}
              transition={{ duration: 0.35, ease: 'easeOut', delay: (index % 2) * 0.07 }}
            >
              <h3 className="font-[family-name:var(--font-hanken)] text-[14px] font-bold uppercase tracking-[0.06em] text-[#2D4239] mb-2">
                {valor.titulo}
              </h3>
              <p className="font-[family-name:var(--font-hanken)] text-[15px] text-[#2D4239]/60 leading-relaxed max-w-[460px]">
                {valor.descripcion}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
