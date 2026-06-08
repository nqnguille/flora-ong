'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { IMAGES, buildWhatsAppUrl, WA_MESSAGES } from '@/lib/constants'

export default function Comunidad() {
  const waUrl = buildWhatsAppUrl(WA_MESSAGES.general)

  return (
    <section id="comunidad" className="bg-[#F7F6EB] py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-20">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">

          {/* Imagen izquierda — cuadrada */}
          <motion.div
            className="w-full md:w-[480px] md:flex-shrink-0 aspect-square relative rounded-[2px] overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px 0px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <Image
              src={IMAGES.comunidad}
              alt="Persona asociada a Flora ONG, comunidad de cannabis medicinal en Neuquén"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 480px"
            />
          </motion.div>

          {/* Contenido derecho */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px 0px' }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          >
            <h2 className="font-[family-name:var(--font-garamond)] text-[38px] md:text-[48px] text-[#2D4239] leading-[1.1] mb-8">
              La pertenencia también forma parte del bienestar.
            </h2>

            <p className="font-[family-name:var(--font-hanken)] text-[16px] text-[#2D4239]/65 leading-relaxed mb-10">
              Más de 200 personas en todo el país encontraron en Flora una comunidad
              donde la información circula sin tabúes y el acceso es transparente.
              No estás sola en este camino.
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
              Conocé nuestra comunidad →
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
