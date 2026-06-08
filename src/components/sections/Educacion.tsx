'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ARTICULOS } from '@/lib/constants'

const CATEGORIAS = ['Cannabis medicinal', 'Trámites', 'Variedades']

export default function Educacion() {
  const [principal, ...resto] = ARTICULOS

  return (
    <section id="educacion" className="bg-[#F7F6EB] py-24 md:py-32 border-t border-[#2D4239]/10">
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
            Educación para decidir mejor.
          </h2>
          <p className="font-[family-name:var(--font-hanken)] text-[17px] text-[#2D4239]/60">
            Todo lo que necesitás saber para empezar con información.
          </p>
        </motion.div>

        {/* Grid asimétrico: 2/3 + 1/3 */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">

          {/* Card grande — imagen de fondo */}
          <motion.article
            className="flex-[2] relative min-h-[400px] md:min-h-[480px] rounded-[4px] overflow-hidden flex flex-col justify-end cursor-pointer group"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px 0px' }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            {/* Imagen de fondo */}
            {principal.imagen && (
              <Image
                src={principal.imagen}
                alt={principal.titulo}
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            )}
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

            {/* Contenido sobre el overlay */}
            <div className="relative z-10 p-8">
              {/* Badge de categoría */}
              <span className="inline-block font-[family-name:var(--font-hanken)] text-[10px] font-bold uppercase tracking-[0.1em] text-[#71CE6A] bg-[#71CE6A]/15 px-2.5 py-1 rounded-[3px] mb-4">
                {CATEGORIAS[0]}
              </span>

              <h3 className="font-[family-name:var(--font-garamond)] text-[24px] md:text-[28px] text-white leading-[1.25] mb-4 max-w-[420px]">
                {principal.titulo}
              </h3>

              <div className="flex items-center gap-3 mb-5">
                <span className="font-[family-name:var(--font-hanken)] text-[12px] text-white/55">
                  {principal.fecha}
                </span>
                <span className="w-1 h-1 rounded-full bg-white/30" />
                <span className="font-[family-name:var(--font-hanken)] text-[12px] text-white/55">
                  {principal.lectura}
                </span>
              </div>

              <a
                href="#"
                className="
                  font-[family-name:var(--font-hanken)] text-[13px] font-semibold text-white
                  underline underline-offset-4 decoration-[#71CE6A] decoration-2
                  hover:text-[#71CE6A] transition-colors duration-150
                "
              >
                Ir al blog →
              </a>
            </div>
          </motion.article>

          {/* Columna derecha — 2 cards pequeñas apiladas */}
          <div className="flex-1 flex flex-col gap-4">
            {resto.map((articulo, index) => (
              <motion.article
                key={articulo.titulo}
                className="
                  flex-1 bg-white rounded-[4px] p-6 flex flex-col justify-between
                  cursor-pointer hover:bg-[#F7F6EB] transition-colors duration-150
                "
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px 0px' }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: 0.08 + index * 0.06 }}
              >
                <div>
                  {/* Badge de categoría */}
                  <span className="inline-block font-[family-name:var(--font-hanken)] text-[10px] font-bold uppercase tracking-[0.1em] text-[#2D4239]/40 mb-4">
                    {CATEGORIAS[index + 1] ?? 'Guía'}
                  </span>

                  <h3 className="font-[family-name:var(--font-garamond)] text-[20px] text-[#2D4239] leading-[1.3]">
                    {articulo.titulo}
                  </h3>
                </div>

                <div className="flex items-center gap-2 mt-4">
                  <span className="font-[family-name:var(--font-hanken)] text-[11px] text-[#2D4239]/40">
                    {articulo.fecha}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[#2D4239]/20" />
                  <span className="font-[family-name:var(--font-hanken)] text-[11px] text-[#2D4239]/40">
                    {articulo.lectura}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>

        </div>

        {/* CTA ver toda la guía */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.25 }}
        >
          <a
            href="#"
            className="
              font-[family-name:var(--font-hanken)] text-[14px] font-semibold text-[#2D4239]
              underline underline-offset-4 decoration-[#71CE6A] decoration-2
              hover:text-[#2D4239]/70 transition-colors duration-150
            "
          >
            Ir al blog →
          </a>
        </motion.div>

      </div>
    </section>
  )
}
