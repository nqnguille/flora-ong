"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import Link from "next/link";
import { MEMBERSHIPS, waLink } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Memberships() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="membresias" className="bg-cream py-24 px-5">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="section-tag text-green-dark mb-4 block">
            Membresías
          </span>
          <h2 className="font-garamond font-bold text-green-dark text-4xl sm:text-5xl mb-4">
            Elegí la que se adapta a vos
          </h2>
          <p className="font-jakarta text-[#5a6e65] text-lg max-w-md mx-auto">
            Precio referencial de USD 9 a 12 por gramo. Todos los socios acceden a evaluación médica gratuita.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {MEMBERSHIPS.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className={cn(
                "relative rounded-3xl p-6 flex flex-col border transition-all hover:-translate-y-1.5 hover:shadow-xl",
                m.featured
                  ? "bg-green-dark border-green-dark text-white shadow-lg shadow-green-dark/20"
                  : "bg-white border-[#e8e6d9]"
              )}
            >
              {m.featured && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-green-accent text-green-dark font-jakarta font-bold text-xs tracking-widest uppercase px-4 py-1 rounded-full whitespace-nowrap">
                  Más elegida
                </span>
              )}

              <div className="mb-1">
                <h3
                  className={cn(
                    "font-garamond font-semibold text-2xl",
                    m.featured ? "text-white" : "text-green-dark"
                  )}
                >
                  {m.name}
                </h3>
                <p
                  className={cn(
                    "font-jakarta text-sm mt-0.5",
                    m.featured ? "text-white/60" : "text-[#6b7f74]"
                  )}
                >
                  {m.grams}g por mes
                </p>
              </div>

              <div className="my-5">
                <div
                  className={cn(
                    "font-garamond text-5xl font-bold leading-none",
                    m.featured ? "text-green-accent" : "text-green-dark"
                  )}
                >
                  <span className="text-2xl align-super font-semibold">USD</span>{" "}
                  {m.priceUSD}
                </div>
                <p
                  className={cn(
                    "font-jakarta text-xs mt-1.5",
                    m.featured ? "text-white/50" : "text-[#8a9e95]"
                  )}
                >
                  ≈ USD {m.pricePerGram}/g · precio de comunidad
                </p>
              </div>

              <div
                className={cn(
                  "h-px w-full mb-5",
                  m.featured ? "bg-white/15" : "bg-[#e8e6d9]"
                )}
              />

              <ul className="flex-1 space-y-3 mb-6">
                {m.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5">
                    <span className="w-4.5 h-4.5 rounded-full bg-green-accent flex-shrink-0 flex items-center justify-center mt-0.5">
                      <Check
                        size={9}
                        className="text-green-dark"
                        strokeWidth={3}
                      />
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
                  "block text-center font-jakarta font-bold text-sm py-3 rounded-full transition-all",
                  m.featured
                    ? "bg-green-accent text-green-dark hover:opacity-90"
                    : "border-2 border-green-dark text-green-dark hover:bg-green-dark hover:text-white"
                )}
              >
                Quiero esta membresía
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
