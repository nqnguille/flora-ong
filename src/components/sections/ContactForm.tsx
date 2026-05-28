"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { submitContact } from "@/actions/contact";
import { WA_LINK } from "@/lib/constants";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";

export function ContactForm() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const newErrors: Record<string, string> = {};
    if (!data.get("nombre")) newErrors.nombre = "Campo obligatorio.";
    if (!data.get("email") || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(data.get("email"))))
      newErrors.email = "Ingresá un email válido.";
    if (!data.get("mensaje")) newErrors.mensaje = "Contanos algo de tu situación.";

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    setStatus("loading");
    setErrors({});

    const result = await submitContact({
      nombre: String(data.get("nombre")),
      email: String(data.get("email")),
      telefono: String(data.get("telefono") || ""),
      mensaje: String(data.get("mensaje")),
    });

    if (result.success) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  const inputBase =
    "w-full font-jakarta text-sm text-green-darker bg-cream border border-[#dddbd0] rounded-xl px-4 py-3 outline-none focus:border-green-dark focus:ring-2 focus:ring-green-dark/10 transition placeholder:text-[#aaa89e]";

  return (
    <section id="contacto" className="bg-cream border-t border-[#e8e6d9] py-24 px-5">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="grid md:grid-cols-[1fr_1.3fr] gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="section-tag text-green-dark mb-4 block">Contacto</span>
            <h2 className="font-garamond font-bold text-green-dark text-4xl sm:text-5xl leading-tight mb-5">
              ¿Querés saber si Flora es para vos?
            </h2>
            <p className="font-jakarta text-[#5a6e65] leading-relaxed mb-8 text-base">
              Dejanos tus datos y nuestro equipo te contacta para una evaluación
              inicial gratuita y sin compromiso.
            </p>

            <div className="space-y-4">
              {[
                { icon: Phone, label: "+54 9 299 4XX-XXXX" },
                { icon: Mail, label: "hola@flora.ar" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-green-dark rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon size={15} className="text-white" />
                  </div>
                  <span className="font-jakarta text-sm font-medium text-green-darker">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 font-jakarta font-semibold text-sm text-green-dark underline underline-offset-4 hover:text-green-accent transition-colors"
            >
              O escribinos directo por WhatsApp →
            </Link>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="bg-white rounded-3xl p-7 shadow-sm border border-[#e8e6d9]"
          >
            {status === "success" ? (
              <div className="text-center py-10">
                <div className="text-5xl mb-4">🌿</div>
                <h3 className="font-garamond font-bold text-green-dark text-2xl mb-2">
                  ¡Gracias por escribirnos!
                </h3>
                <p className="font-jakarta text-[#6b7f74] text-sm">
                  Te contactamos en menos de 24 horas para coordinar tu evaluación
                  médica gratuita.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <label className="font-jakarta text-xs font-semibold text-green-dark block mb-1.5">
                      Nombre *
                    </label>
                    <input
                      name="nombre"
                      placeholder="Tu nombre"
                      className={inputBase}
                    />
                    {errors.nombre && (
                      <p className="text-red-500 text-xs mt-1">{errors.nombre}</p>
                    )}
                  </div>
                  <div>
                    <label className="font-jakarta text-xs font-semibold text-green-dark block mb-1.5">
                      Email *
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="tu@email.com"
                      className={inputBase}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="mb-3">
                  <label className="font-jakarta text-xs font-semibold text-green-dark block mb-1.5">
                    Teléfono
                  </label>
                  <input
                    name="telefono"
                    type="tel"
                    placeholder="+54 9 11 XXXX-XXXX"
                    className={inputBase}
                  />
                </div>

                <div className="mb-5">
                  <label className="font-jakarta text-xs font-semibold text-green-dark block mb-1.5">
                    ¿Por qué te interesa el cannabis medicinal? *
                  </label>
                  <textarea
                    name="mensaje"
                    rows={4}
                    placeholder="Contanos brevemente tu situación o condición de salud..."
                    className={`${inputBase} resize-y`}
                  />
                  {errors.mensaje && (
                    <p className="text-red-500 text-xs mt-1">{errors.mensaje}</p>
                  )}
                </div>

                {status === "error" && (
                  <p className="text-red-500 text-sm mb-3">
                    Hubo un error al enviar. Intentá de nuevo o escribinos por WhatsApp.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-green-accent hover:opacity-90 disabled:opacity-60 text-green-dark font-jakarta font-bold text-base py-3.5 rounded-full transition-all hover:-translate-y-0.5"
                >
                  {status === "loading" ? "Enviando..." : "Solicitar evaluación gratuita →"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
