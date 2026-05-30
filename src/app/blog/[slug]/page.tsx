import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface Props {
  params: { slug: string };
}

const posts: Record<string, { title: string; category: string; date: string; readTime: string; body: string[] }> = {
  "terpenos-que-son-y-por-que-importan": {
    title: "Terpenos: qué son y por qué determinan tu experiencia tanto como los cannabinoides",
    category: "Ciencia",
    date: "2026-05-20",
    readTime: "6 min",
    body: [
      "Cuando elegís una variedad por su aroma, estás eligiendo su perfil de terpenos. No es intuición, es química.",
      "Los terpenos son compuestos aromáticos presentes en cientos de plantas. En el cannabis, trabajan junto al THC y el CBD para modular efectos —lo que se conoce como efecto entourage. Una variedad rica en mirceno tiende a ser más sedante. El limoneno se asocia a estados más activos. El beta-cariofileno tiene propiedades antiinflamatorias propias.",
      "Esto explica por qué dos variedades con la misma concentración de THC pueden producir experiencias completamente distintas. La diferencia no está en el porcentaje —está en el perfil completo.",
      "En Flora, el informe de cada lote incluye los terpenos principales además de los cannabinoides. No porque sea un dato técnico interesante, sino porque es la información que necesitás para elegir bien.",
      "Si querés saber más sobre el perfil de las variedades que cultivamos actualmente, escribinos.",
    ],
  },
  "reprocann-guia-completa-2026": {
    title: "Cómo tramitar el REPROCANN en 2026: guía paso a paso",
    category: "Trámites",
    date: "2026-05-10",
    readTime: "5 min",
    body: [
      "El REPROCANN (Registro del Programa de Cannabis) es el documento del Ministerio de Salud de la Nación que habilita legalmente tu acceso al cannabis medicinal. El trámite es online, gratuito y más directo de lo que parece.",
      "Quiénes pueden solicitarlo: cualquier persona con una condición de salud reconocida en el marco de la Ley 27.350. La lista incluye dolor crónico, epilepsia refractaria, ansiedad, insomnio, cuidados paliativos y otras condiciones. Un médico habilitado debe certificar el diagnóstico.",
      "Qué necesitás: DNI vigente, historia clínica o certificado médico con diagnóstico, y la firma digital de un profesional de la salud matriculado. El médico puede ser tu médico de cabecera o, si no encontrás uno que firme, nuestro equipo te orienta.",
      "Cómo es el proceso: entrás al portal del Ministerio de Salud, creás tu usuario, completás el formulario y subís la documentación. En la mayoría de los casos la resolución llega en 7 a 15 días hábiles.",
      "En Flora acompañamos a todos nuestros socios en este proceso. Si ya tenés tu REPROCANN, el ingreso es inmediato. Si todavía no, empezamos por ahí.",
    ],
  },
  "uso-responsable-cannabis-medicinal": {
    title: "Uso responsable del cannabis medicinal: lo que nadie te explica",
    category: "Práctica",
    date: "2026-04-28",
    readTime: "7 min",
    body: [
      "Responsable no significa cauteloso hasta la inutilidad. Significa hacer las cosas bien para que funcionen.",
      "El primer principio es la titulación. Empezar con la dosis mínima efectiva y ajustar gradualmente. No porque el cannabis sea peligroso, sino porque cada organismo responde distinto y encontrar tu dosis tarda tiempo. Subir rápido es el error más común.",
      "El segundo es la consistencia. El cannabis medicinal funciona mejor con un patrón regular que con un uso errático. Si lo usás para dormir, usalo a la misma hora. Si es para dolor crónico, el protocolo importa más que la dosis puntual.",
      "El tercero es el registro. Parece tedioso pero marca la diferencia: anotar qué variedad usaste, cuánto, cuándo y qué efecto tuvo. En dos semanas tenés información real sobre lo que funciona para vos. Sin eso, estás adivinando.",
      "El cuarto, que suele ignorarse: la interacción con otros fármacos. Si tomás medicación de base, revisarlo con un profesional no es optativo. Hay interacciones conocidas con anticoagulantes, benzodiacepinas y algunos antidepresivos.",
      "En Flora incluimos orientación en todos estos puntos desde el primer contacto. No es un bonus —es parte de lo que hacemos.",
    ],
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = posts[params.slug];
  if (!post) return { title: "Artículo | Flora ONG" };
  return {
    title: `${post.title} | Blog Flora ONG`,
    description: post.body[0],
    openGraph: {
      title: post.title,
      description: post.body[0],
      url: `https://flora.ar/blog/${params.slug}`,
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = posts[params.slug];

  return (
    <div className="pt-16">
      <section className="bg-green-dark py-14 px-5">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white font-jakarta text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={14} />
            Volver al blog
          </Link>
          {post ? (
            <>
              <span className="section-tag text-green-accent mb-4 block">
                {post.category} · {post.readTime} de lectura
              </span>
              <h1 className="font-garamond font-bold text-white text-4xl sm:text-5xl leading-tight">
                {post.title}
              </h1>
            </>
          ) : (
            <>
              <span className="section-tag text-green-accent mb-4 block">Artículo</span>
              <h1 className="font-garamond font-bold text-white text-4xl sm:text-5xl leading-tight">
                Artículo en preparación
              </h1>
            </>
          )}
        </div>
      </section>

      <section className="py-16 px-5 bg-cream">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#e8e6d9]">
            {post ? (
              <div className="space-y-5">
                {post.body.map((paragraph, i) => (
                  <p
                    key={i}
                    className={`font-jakarta leading-relaxed ${
                      i === 0
                        ? "text-lg font-medium text-green-dark"
                        : "text-base text-[#5a6e65]"
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
                <div className="pt-6 mt-6 border-t border-[#e8e6d9]">
                  <p className="font-jakarta text-sm text-[#8a9e95]">
                    ¿Tenés dudas sobre este tema?{" "}
                    <Link
                      href="/#contacto"
                      className="text-green-dark underline underline-offset-2 hover:text-green-accent transition-colors"
                    >
                      Escribinos
                    </Link>{" "}
                    y te respondemos sin vueltas.
                  </p>
                </div>
              </div>
            ) : (
              <p className="font-jakarta text-[#6b7f74] text-base leading-relaxed">
                Este artículo está en preparación.
              </p>
            )}
            <div className="mt-8">
              <Link
                href="/blog"
                className="font-jakarta text-sm font-semibold text-green-dark underline underline-offset-4 hover:text-green-accent transition-colors"
              >
                ← Ver todos los artículos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  return [
    { slug: "terpenos-que-son-y-por-que-importan" },
    { slug: "reprocann-guia-completa-2026" },
    { slug: "uso-responsable-cannabis-medicinal" },
  ];
}
