'use client'

import { WHATSAPP_URL, EMAIL, INSTAGRAM, buildWhatsAppUrl, WA_MESSAGES } from '@/lib/constants'

export default function Footer() {
  const waUrl = buildWhatsAppUrl(WA_MESSAGES.general)

  return (
    <footer className="bg-[#2D4239] py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-20">

        {/* Top row */}
        <div className="flex flex-col md:flex-row md:justify-between gap-12 mb-16 pb-16 border-b border-[#F7F6EB]/10">

          {/* Brand */}
          <div className="max-w-[280px]">
            <div className="font-[family-name:var(--font-hanken)] text-xl font-bold text-[#F7F6EB] tracking-tight mb-3">
              Flora<span className="text-[#71CE6A]">.</span>
            </div>
            <p className="font-[family-name:var(--font-garamond)] italic text-[18px] text-[#F7F6EB]/70 leading-snug">
              Cultivamos conciencia.
            </p>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-[family-name:var(--font-hanken)] text-[11px] uppercase tracking-widest text-[#F7F6EB]/40 mb-5">
              Contacto
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar por WhatsApp"
                className="font-[family-name:var(--font-hanken)] text-[15px] text-[#F7F6EB]/70 hover:text-[#71CE6A] transition-colors duration-150"
              >
                WhatsApp: +54 9 299 637 5723
              </a>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="font-[family-name:var(--font-hanken)] text-[15px] text-[#F7F6EB]/70 hover:text-[#71CE6A] transition-colors duration-150"
              >
                Instagram: @floraong
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="font-[family-name:var(--font-hanken)] text-[15px] text-[#F7F6EB]/70 hover:text-[#71CE6A] transition-colors duration-150"
              >
                {EMAIL}
              </a>
            </div>
          </div>

          {/* Ubicación */}
          <div>
            <h3 className="font-[family-name:var(--font-hanken)] text-[11px] uppercase tracking-widest text-[#F7F6EB]/40 mb-5">
              Sede
            </h3>
            <p className="font-[family-name:var(--font-hanken)] text-[15px] text-[#F7F6EB]/70 leading-relaxed">
              Neuquén Capital
              <br />
              Patagonia, Argentina
              <br />
              <span className="text-[#F7F6EB]/40 text-[13px]">Envíos a todo el país</span>
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col justify-between gap-6">
            <h3 className="font-[family-name:var(--font-hanken)] text-[11px] uppercase tracking-widest text-[#F7F6EB]/40">
              Arrancá hoy
            </h3>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Asociarse por WhatsApp desde el footer"
              className="
                inline-flex items-center justify-center gap-2
                h-12 px-6 rounded-[4px]
                bg-transparent text-[#F7F6EB] border-[1.5px] border-[#F7F6EB]/30
                font-[family-name:var(--font-hanken)] text-sm font-bold
                hover:bg-[#F7F6EB]/10 transition-colors duration-150
                whitespace-nowrap
              "
            >
              Asociarse por WhatsApp
            </a>
          </div>

        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="font-[family-name:var(--font-hanken)] text-[12px] text-[#F7F6EB]/30">
            © 2026 Flora ONG — Neuquén, Patagonia
          </p>
          <div className="flex flex-wrap gap-6">
            {['Aviso legal', 'Política de privacidad', 'Estatuto ONG'].map((link) => (
              <a
                key={link}
                href="#"
                className="font-[family-name:var(--font-hanken)] text-[12px] text-[#F7F6EB]/30 hover:text-[#F7F6EB]/60 transition-colors duration-150"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
