'use client'

import { motion } from 'framer-motion'
import { MEMBRESIAS, buildWhatsAppUrl } from '@/lib/constants'

const BENEFICIOS: Record<string, string[]> = {
  Semilla: [
    'Acceso a 10g mensuales',
    'Variedad documentada',
    'Envío a todo el país',
    'Soporte por WhatsApp',
  ],
  Raíz: [
    'Acceso a 20g mensuales',
    'Variedad documentada',
    'Envío a todo el país',
    'Soporte prioritario',
    'Selección de variedad',
  ],
  Cosecha: [
    'Acceso a 40g mensuales',
    'Variedad documentada',
    'Envío a todo el país',
    'Soporte prioritario',
    'Selección de variedad',
    'Acceso a cepas exclusivas',
  ],
  'Cosecha Max': [
    'Acceso a 60g mensuales',
    'Variedad documentada',
    'Envío a todo el país',
    'Soporte prioritario',
    'Selección de variedad',
    'Acceso a cepas exclusivas',
    'Reserva de genéticas especiales',
  ],
}

function IconWhatsApp() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

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
          <h2 className="font-[family-name:var(--font-garamond)] text-[40px] md:text-[52px] text-[#F7F6EB] leading-[1.05] mb-3">
            Membresías que se adaptan a vos.
          </h2>
          <p className="font-[family-name:var(--font-hanken)] text-[17px] text-[#F7F6EB]/55 max-w-[460px] leading-relaxed">
            Elegí el plan que mejor se ajuste a tu necesidad. Sin contratos, sin letra chica.
          </p>
        </motion.div>

        {/* Cards — 4 en fila */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start">
          {MEMBRESIAS.map((plan, index) => {
            const beneficios = BENEFICIOS[plan.nombre] ?? []
            const isDestacada = plan.destacada

            return (
              <motion.div
                key={plan.nombre}
                className={`
                  rounded-[4px] p-8 flex flex-col
                  ${isDestacada
                    ? 'bg-[#71CE6A] md:-mt-4 md:pb-12'
                    : 'bg-[#F7F6EB]'}
                `}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px 0px' }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.08 }}
              >
                {/* Badge "El más elegido" */}
                <div className="mb-5 min-h-[20px]">
                  {plan.badge && (
                    <span className={`
                      font-[family-name:var(--font-hanken)] text-[10px] font-bold uppercase tracking-[0.1em]
                      ${isDestacada ? 'text-[#2D4239]/70' : 'text-[#71CE6A]'}
                    `}>
                      {plan.badge}
                    </span>
                  )}
                </div>

                {/* Nombre del plan */}
                <h3 className={`
                  font-[family-name:var(--font-garamond)] text-[32px] leading-none mb-1
                  ${isDestacada ? 'text-[#2D4239]' : 'text-[#2D4239]'}
                `}>
                  {plan.nombre}
                </h3>

                {/* Gramaje */}
                <div className="flex items-baseline gap-1.5 mb-6">
                  <span className={`
                    font-[family-name:var(--font-garamond)] text-[44px] leading-none
                    ${isDestacada ? 'text-[#2D4239]' : 'text-[#2D4239]'}
                  `}>
                    {plan.acceso}
                  </span>
                  <span className={`
                    font-[family-name:var(--font-hanken)] text-[13px]
                    ${isDestacada ? 'text-[#2D4239]/60' : 'text-[#2D4239]/50'}
                  `}>
                    {plan.unidad}
                  </span>
                </div>

                {/* Separador */}
                <div className={`h-px mb-6 ${isDestacada ? 'bg-[#2D4239]/15' : 'bg-[#2D4239]/10'}`} />

                {/* Beneficios con checkmarks */}
                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {beneficios.map((beneficio) => (
                    <li key={beneficio} className="flex items-start gap-3">
                      <span className={`
                        text-[16px] leading-none mt-0.5 flex-shrink-0
                        ${isDestacada ? 'text-[#2D4239]' : 'text-[#71CE6A]'}
                      `}>
                        ✓
                      </span>
                      <span className={`
                        font-[family-name:var(--font-hanken)] text-[14px] leading-snug
                        ${isDestacada ? 'text-[#2D4239]/75' : 'text-[#2D4239]/65'}
                      `}>
                        {beneficio}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={buildWhatsAppUrl(plan.waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Consultar membresía ${plan.nombre} por WhatsApp`}
                  className={`
                    inline-flex items-center justify-center gap-2
                    h-12 px-6 rounded-[4px]
                    font-[family-name:var(--font-hanken)] text-sm font-bold
                    transition-colors duration-150
                    ${isDestacada
                      ? 'bg-[#2D4239] text-[#F7F6EB] hover:bg-[#1e2e25]'
                      : 'bg-transparent text-[#2D4239] border-[1.5px] border-[#2D4239]/40 hover:border-[#2D4239]'}
                  `}
                >
                  <IconWhatsApp />
                  Quiero asociarme
                </a>

              </motion.div>
            )
          })}
        </div>

        {/* CTA pie */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <a
            href="#como-funciona"
            className="
              font-[family-name:var(--font-hanken)] text-[13px] font-semibold text-[#F7F6EB]/50
              hover:text-[#F7F6EB]/80 transition-colors duration-150
              underline underline-offset-4 decoration-[#71CE6A]/40
            "
          >
            Ver todas las membresías →
          </a>
        </motion.div>

      </div>
    </section>
  )
}
