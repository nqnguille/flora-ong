"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldAlert, Shuffle, HelpCircle, FileQuestion } from "lucide-react";

const problems = [
  {
    icon: ShieldAlert,
    title: "No sabés qué consumís",
    desc: "Sin análisis de laboratorio no hay forma de conocer la concentración real de cannabinoides ni si el cultivo tuvo pesticidas.",
  },
  {
    icon: Shuffle,
    title: "La genética cambia cada vez",
    desc: "Hoy conseguís algo que funciona. La próxima vez es otra cosa. La consistencia es lo primero que pierde el mercado informal.",
  },
  {
    icon: HelpCircle,
    title: "Ningún respaldo si algo sale mal",
    desc: "Sin profesional de salud que te acompañe, ajustás dosis a prueba y error. Eso no es medicina, es azar.",
  },
  {
    icon: FileQuestion,
    title: "Zona gris innecesaria",
    desc: "La ley existe. REPROCANN existe. No tenerlo no es cómodo, es un riesgo que podés eliminar hoy.",
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
              El problema real
            </span>
            <h2 className="font-garamond font-bold text-green-dark text-4xl sm:text-5xl leading-tight mb-6">
              El tipo de Instagram
              <br />
              <span className="italic">no sabe qué te vendió.</span>
            </h2>
            <p className="font-jakarta text-[#5a6e65] text-lg leading-relaxed mb-5">
              No es un juicio. Es un hecho. El mercado informal no tiene
              trazabilidad, no tiene análisis de lote, no tiene protocolo
              médico. Funciona hasta que no funciona.
            </p>
            <p className="font-jakarta text-[#5a6e65] text-lg leading-relaxed mb-5">
              Flora existe para los que ya tomaron la decisión de usar cannabis
              medicinal y quieren hacerlo con la misma seriedad con la que
              tratan cualquier otro aspecto de su salud.
            </p>
            <p className="font-garamond font-bold text-green-dark text-xl italic">
              Certeza. Eso es lo que ofrecemos.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {problems.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: "easeOut" }}
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
