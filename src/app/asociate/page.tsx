import type { Metadata } from "next";
import Link from "next/link";
import { MEMBERSHIPS, FAQ, waLink, WA_LINK } from "@/lib/constants";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Asociate — Flora ONG",
  description:
    "Conocé las membresías de Flora ONG y accedé legalmente al cannabis medicinal bajo Ley 27.350. Evaluación médica gratuita, envío nacional.",
  openGraph: {
    title: "Asociate — Flora ONG",
    description:
      "Membresías de acceso legal al cannabis medicinal. Evaluación médica gratuita.",
    url: "https://flora.ar/asociate",
  },
};

export default function AsociatePage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-green-dark py-20 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <span className="section-tag text-green-accent mb-5 block">
            Membresías
          </span>
          <h1 className="font-garamond font-bold text-white text-5xl sm:text-6xl leading-tight mb-5">
            Asociate a Flora
          </h1>
          <p className="font-jakarta text-white/70 text-lg leading-relaxed max-w-xl mx-auto">
            Accedé legalmente al cannabis medicinal con acompañamiento médico,
            trazabilidad completa y precio de comunidad. Tu salud merece
            certeza.
          </p>
        </div>
      </section>

      {/* Memberships detail */}
      <section className="py-20 px-5 bg-cream">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MEMBERSHIPS.map((m) => (
              <div
                key={m.name}
                className={cn(
                  "relative rounded-3xl p-7 flex flex-col border",
                  m.featured
                    ? "bg-green-dark border-green-dark text-white shadow-xl"
                    : "bg-white border-[#e8e6d9]"
                )}
              >
                {m.featured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-green-accent text-green-dark font-jakarta font-bold text-xs tracking-widest uppercase px-4 py-1 rounded-full whitespace-nowrap">
                    Más elegida
                  </span>
                )}
                <h2
                  className={cn(
                    "font-garamond font-semibold text-2xl mb-1",
                    m.featured ? "text-white" : "text-green-dark"
                  )}
                >
                  {m.name}
                </h2>
                <p
                  className={cn(
                    "font-jakarta text-sm mb-5",
                    m.featured ? "text-white/60" : "text-[#6b7f74]"
                  )}
                >
                  {m.description}
                </p>
                <div
                  className={cn(
                    "font-garamond text-5xl font-bold leading-none mb-1",
                    m.featured ? "text-green-accent" : "text-green-dark"
                  )}
                >
                  <span className="text-2xl align-super font-semibold">USD</span>{" "}
                  {m.priceUSD}
                </div>
                <p
                  className={cn(
                    "font-jakarta text-xs mb-6",
                    m.featured ? "text-white/50" : "text-[#8a9e95]"
                  )}
                >
                  {m.grams}g · ≈ USD {m.pricePerGram}/g
                </p>
                <div
                  className={cn(
                    "h-px mb-6",
                    m.featured ? "bg-white/15" : "bg-[#e8e6d9]"
                  )}
                />
                <ul className="flex-1 space-y-3 mb-7">
                  {m.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5">
                      <span className="w-4.5 h-4.5 rounded-full bg-green-accent flex-shrink-0 flex items-center justify-center mt-0.5">
                        <Check size={9} className="text-green-dark" strokeWidth={3} />
                      </span>
                      <span
                        className={cn(
                          "font-jakarta text-sm leading-snug",
                          m.featured ? "text-white/80" : "text-[#5a6e65]"
                        )}
                      >
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={waLink(m.waText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "block text-center font-jakarta font-bold text-sm py-3.5 rounded-full transition-all",
                    m.featured
                      ? "bg-green-accent text-green-dark hover:opacity-90"
                      : "border-2 border-green-dark text-green-dark hover:bg-green-dark hover:text-white"
                  )}
                >
                  Empezar con {m.name}
                </Link>
              </div>
            ))}
          </div>

          {/* Note */}
          <p className="text-center font-jakarta text-sm text-[#8a9e95] mt-8">
            Todos los precios son referenciales en USD. El pago se coordina en pesos al tipo de cambio vigente.{" "}
            <Link href={WA_LINK} className="underline underline-offset-2 hover:text-green-dark" target="_blank" rel="noopener noreferrer">
              Consultá medios de pago →
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-5 bg-white border-t border-[#e8e6d9]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-tag text-green-dark mb-4 block">
              Preguntas frecuentes
            </span>
            <h2 className="font-garamond font-bold text-green-dark text-4xl sm:text-5xl">
              Todo lo que necesitás saber
            </h2>
          </div>

          <Accordion multiple={false} className="space-y-3">
            {FAQ.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-[#e8e6d9] rounded-2xl px-5 overflow-hidden data-[state=open]:border-green-dark/30"
              >
                <AccordionTrigger className="font-jakarta font-semibold text-green-dark text-sm text-left py-4 hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="font-jakarta text-[#5a6e65] text-sm leading-relaxed pb-4">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <p className="font-jakarta text-[#6b7f74] text-sm mb-4">
              ¿Tenés otra pregunta?
            </p>
            <Link
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-dark text-white font-jakarta font-semibold text-sm px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              Escribinos por WhatsApp
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
