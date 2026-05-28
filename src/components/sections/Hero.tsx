"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { WA_LINK } from "@/lib/constants";

const d = (i: number) => ({ duration: 0.7, delay: i * 0.12, ease: "easeOut" as const });

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-green-dark overflow-hidden"
    >
      {/* Botanical SVG bg */}
      <svg
        className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 max-w-lg opacity-[0.07] pointer-events-none"
        viewBox="0 0 500 700"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M250 650C250 650 60 490 60 340C60 190 150 90 250 40C350 90 440 190 440 340C440 490 250 650 250 650Z"
          stroke="#71CE6A"
          strokeWidth="2"
        />
        <line
          x1="250"
          y1="40"
          x2="250"
          y2="650"
          stroke="#71CE6A"
          strokeWidth="1.5"
          strokeDasharray="8 6"
        />
        <path
          d="M250 180C200 180 120 210 70 340"
          stroke="#71CE6A"
          strokeWidth="1.5"
        />
        <path
          d="M250 180C300 180 380 210 430 340"
          stroke="#71CE6A"
          strokeWidth="1.5"
        />
        <path
          d="M250 310C195 290 125 315 75 420"
          stroke="#71CE6A"
          strokeWidth="1.5"
        />
        <path
          d="M250 310C305 290 375 315 425 420"
          stroke="#71CE6A"
          strokeWidth="1.5"
        />
        <path
          d="M250 430C200 410 135 445 100 530"
          stroke="#71CE6A"
          strokeWidth="1.5"
        />
        <path
          d="M250 430C300 410 365 445 400 530"
          stroke="#71CE6A"
          strokeWidth="1.5"
        />
        <circle cx="250" cy="40" r="7" fill="#71CE6A" />
        <circle cx="250" cy="180" r="4" fill="#71CE6A" opacity="0.6" />
        <circle cx="250" cy="310" r="4" fill="#71CE6A" opacity="0.6" />
        <circle cx="250" cy="430" r="4" fill="#71CE6A" opacity="0.6" />
      </svg>

      <div className="relative z-10 max-w-6xl mx-auto px-5 w-full pt-28 pb-16">
        <div>
          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={d(0)}>
            <span className="inline-flex items-center gap-2 bg-green-accent/15 border border-green-accent/30 text-green-accent section-tag px-4 py-1.5 rounded-full mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-green-accent" />
              Cannabis Medicinal · Ley 27.350
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={d(1)}
            className="font-garamond font-bold text-white text-5xl sm:text-6xl lg:text-7xl leading-[1.08] tracking-tight max-w-3xl mb-6"
          >
            Accedé a lo que{" "}
            <em className="text-green-accent not-italic">
              siempre fue tuyo.
            </em>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={d(2)}
            className="font-jakarta text-white/75 text-lg sm:text-xl max-w-xl leading-relaxed mb-10"
          >
            Flora es una comunidad de acceso legal al cannabis medicinal.
            Acompañamiento médico real, calidad verificada, precio justo.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={d(3)}
            className="flex flex-wrap gap-3 items-center"
          >
            <Link
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-green-accent hover:opacity-90 transition-all text-green-dark font-jakarta font-bold text-base px-7 py-3.5 rounded-full hover:-translate-y-0.5"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-green-dark"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Consultá por WhatsApp
            </Link>
            <Link
              href="/#contacto"
              className="inline-flex items-center gap-2 text-white font-jakarta font-semibold text-base px-7 py-3.5 rounded-full border border-white/30 hover:border-white hover:bg-white/5 transition-all"
            >
              Quiero más información
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={d(4)}
            className="flex flex-wrap gap-10 mt-14 pt-8 border-t border-white/10"
          >
            {[
              { n: "50+", label: "Socios activos" },
              { n: "100%", label: "Legal · Ley 27.350" },
              { n: "Gratis", label: "Evaluación médica" },
            ].map((s) => (
              <div key={s.label}>
                <span className="font-garamond text-green-accent text-3xl font-bold block">
                  {s.n}
                </span>
                <span className="section-tag text-white/50 mt-0.5 block">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
