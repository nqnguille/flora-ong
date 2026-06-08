'use client'

import { motion } from 'framer-motion'
import { MEMBRESIAS, buildWhatsAppUrl } from '@/lib/constants'

export default function Membresias() {
  return (
    <section id="membresias" className="py-24 md:py-32 bg-[#2D4239]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-20">

        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px 0px' }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <span className="font-[family-name:var(--font-hanken)] text-xs font-semibold uppercase tracking-widest text-[#F7F6EB]/40 block mb-4">
            Membresías
          </span>
          <h2 className="font-[family-name:var(--font-garamond)] text-[40px] md:text-[48px] text-[#F7F6EB] leading-[1.05]">
            Elegís cuánto
            <br />
            necesitás.
          </h2>
          <p className="font-[family-name:var(--font-hanken)] text-[17px] text-[#F7F6EB]/60 mt-4 max-w-[480px] leading-relaxed">
            Tres opciones de acceso mensual. Sin contratos, sin letra chica.
            Consultá por WhatsApp para conocer precios y disponibilidad.
          </p>
        </motion.div>

        {/* Cards — el de la mitad levemente más alto en desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-3 items-start">
          {MEMBRESIAS.map((plan, index) => (
            <motion.div
              key={plan.nombre}
              className={`
                bg-[#F7F6EB] rounded-[4px] p-8 flex flex-col
                border transition-all duration-200
                ${plan.destacada
                  ? 'border-[#71CE6A] md:-mt-4 md:pb-12'
                  : 'border-transparent hover:border-[#71CE6A]/40'}
              `}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px 0px' }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.08 }}
            >
              {/* Badge */}
              {plan.badge && (
                <span className="font-[family-name:var(--font-hanken)] text-[10px] font-semibold uppercase tracking-[0.08em] text-[#71CE6A] mb-6 block">
                  {plan.badge}
                </span>
              )}
              {!plan.badge && <div className="mb-6 h-4" />}

              {/* Nombre */}
              <h3 className="font-[family-name:var(--font-garamond)] text-[32px] text-[#2D4239] leading-none mb-1">
                {plan.nombre}
              </h3>

              {/* Acceso */}
              <div className="flex items-baseline gap-1 mb-6">
                <span className="font-[family-name:var(--font-garamond)] text-[40px] text-[#2D4239] leading-none">
                  {plan.acceso}
                </span>
                <span className="font-[family-name:var(--font-hanken)] text-[13px] text-[#2D4239]/50">
                  {plan.unidad}
                </span>
              </div>

              {/* Separador */}
              <div className="h-px bg-[#2D4239]/10 mb-6" />

              {/* Descripción */}
              <p className="font-[family-name:var(--font-hanken)] text-[14px] text-[#2D4239]/65 leading-relaxed mb-8 flex-1">
                {plan.descripcion}
              </p>

              {/* CTA */}
              <motion.a
                href={buildWhatsAppUrl(plan.waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Consultar membresía ${plan.nombre} por WhatsApp`}
                className={`
                  inline-flex items-center justify-center gap-2
                  h-12 px-6 rounded-[4px]
                  font-[family-name:var(--font-hanken)] text-sm font-bold
                  transition-colors duration-150
                  ${plan.destacada
                    ? 'bg-[#71CE6A] text-[#2D4239] hover:bg-[#60bb59]'
                    : 'bg-transparent text-[#2D4239] border-[1.5px] border-[#2D4239] hover:bg-[#2D4239]/5'}
                `}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15, ease: 'easeOut' }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Consultar por WhatsApp
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Nota final */}
        <motion.p
          className="font-[family-name:var(--font-hanken)] text-[13px] text-[#F7F6EB]/40 mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          Podés cambiar de membresía en cualquier momento.
        </motion.p>

      </div>
    </section>
  )
}
