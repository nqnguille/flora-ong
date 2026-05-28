"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Stethoscope, PackageCheck } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Contactanos",
    desc: "Escribinos por WhatsApp o completá el formulario. Te respondemos en menos de 24 horas.",
  },
  {
    icon: Stethoscope,
    number: "02",
    title: "Evaluación médica gratuita",
    desc: "Nuestro equipo médico evalúa tu caso, orienta tu tratamiento y gestiona el REPROCANN si lo necesitás.",
  },
  {
    icon: PackageCheck,
    number: "03",
    title: "Recibís tu medicamento",
    desc: "Envío discreto a todo el país por Andreani. Con informe de trazabilidad completo en cada entrega.",
  },
];

export function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="como-funciona" className="bg-green-dark py-24 px-5">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-tag text-green-accent mb-4 block">
            El proceso
          </span>
          <h2 className="font-garamond font-bold text-white text-4xl sm:text-5xl mb-4">
            Tres pasos, y tu medicamento llega a casa.
          </h2>
          <p className="font-jakarta text-white/65 text-lg">
            Sin burocracia innecesaria. Con acompañamiento en cada etapa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connector line - desktop only */}
          <div className="hidden md:block absolute top-12 left-[calc(16.66%+2rem)] right-[calc(16.66%+2rem)] h-px bg-green-accent/20" />

          {steps.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.15 }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative z-10 w-24 h-24 rounded-full bg-green-accent/10 border-2 border-green-accent/30 flex items-center justify-center mb-6">
                <s.icon size={32} className="text-green-accent" />
              </div>
              <span className="section-tag text-green-accent/60 mb-2 block">
                {s.number}
              </span>
              <h3 className="font-garamond font-semibold text-white text-2xl mb-3">
                {s.title}
              </h3>
              <p className="font-jakarta text-white/60 text-sm leading-relaxed max-w-xs">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
