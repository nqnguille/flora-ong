"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, TrendingDown, UserX, Scale } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Sin trazabilidad",
    desc: "No sabés qué concentración de cannabinoides tiene lo que comprás, ni si tiene pesticidas o metales pesados.",
  },
  {
    icon: TrendingDown,
    title: "Precios especulativos",
    desc: "El mercado informal fija precios sin regulación. Pagás más por menos calidad y más incertidumbre.",
  },
  {
    icon: UserX,
    title: "Sin acompañamiento",
    desc: "Nadie te orienta sobre dosis, genéticas o interacciones. Navegás a ciegas con tu propia salud.",
  },
  {
    icon: Scale,
    title: "Riesgo legal innecesario",
    desc: "Sin REPROCANN estás en zona gris. La Ley 27.350 existe, pero acceder a ella no debería ser un laberinto.",
  },
];

export function PorQueFlora() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="por-que" className="bg-cream py-24 px-5">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="section-tag text-green-dark mb-4 block">
              El sistema falla
            </span>
            <h2 className="font-garamond font-bold text-green-dark text-4xl sm:text-5xl leading-tight mb-6">
              El mercado informal no es una solución.{" "}
              <span className="italic">Es un parche.</span>
            </h2>
            <p className="font-jakarta text-[#5a6e65] text-lg leading-relaxed mb-5">
              Miles de argentinos acceden hoy al cannabis medicinal sin ningún
              control de calidad, sin saber qué consumen, sin respaldo médico y
              exponiéndose a riesgos legales innecesarios.
            </p>
            <p className="font-jakarta text-[#5a6e65] text-lg leading-relaxed mb-5">
              El sistema de salud no les da respuesta. La industria farmacéutica
              los ignora. Y el mercado informal les cobra caro por algo que no
              puede garantizarles nada.
            </p>
            <p className="font-garamond font-bold text-green-dark text-xl italic">
              Eso tiene que cambiar.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {problems.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.1 + i * 0.1,
                  ease: "easeOut",
                }}
                className="bg-white rounded-2xl p-5 shadow-sm border border-[#e8e6d9] hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center mb-3">
                  <p.icon size={18} className="text-red-400" />
                </div>
                <h4 className="font-jakarta font-bold text-green-dark text-sm mb-1.5">
                  {p.title}
                </h4>
                <p className="font-jakarta text-[#6b7f74] text-sm leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
