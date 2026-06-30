import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { FloraTrack } from "@/components/analytics/FloraTrack";

export const metadata: Metadata = {
  metadataBase: new URL("https://flora.ar"),
  title: {
    default: "Flora ONG — Cultivamos Conciencia",
    template: "%s | Flora ONG",
  },
  description:
    "Acceso legal al cannabis medicinal bajo Ley 27.350. Acompañamiento médico, trazabilidad completa y precio justo. Somos una comunidad, no una marca.",
  keywords: [
    "cannabis medicinal argentina",
    "ley 27350",
    "REPROCANN",
    "cannabis terapéutico",
    "ONG cannabis",
    "acceso legal cannabis",
  ],
  authors: [{ name: "Flora ONG" }],
  creator: "Flora ONG",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://flora.ar",
    siteName: "Flora ONG",
    title: "Flora ONG — Cultivamos Conciencia",
    description:
      "Acceso legal al cannabis medicinal. Con acompañamiento médico, calidad garantizada y precio justo. Ley 27.350.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Flora ONG — Cultivamos Conciencia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flora ONG — Cultivamos Conciencia",
    description:
      "Acceso legal al cannabis medicinal bajo Ley 27.350. Acompañamiento médico, calidad verificada, precio de comunidad.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-AR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Flora ONG",
              url: "https://flora.ar",
              description:
                "ONG de cannabis medicinal. Acceso legal bajo Ley 27.350 con acompañamiento médico.",
              sameAs: ["https://instagram.com/flora.cultivamosconciencia"],
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <FloraTrack />
      </body>
    </html>
  );
}
