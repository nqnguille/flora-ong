import type { Metadata } from 'next'
import { Hanken_Grotesk, EB_Garamond } from 'next/font/google'
import './globals.css'

const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-hanken',
  weight: ['400', '500', '600', '700'],
})

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-garamond',
  weight: ['400', '500'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://flora.ar'),
  title: 'Flora ONG — Club de Cultivo Medicinal en Neuquén | REPROCANN',
  description:
    'Club de cultivo de cannabis medicinal en Neuquén. Asociación civil registrada en REPROCANN. Accedé a cannabis de calidad documentada dentro del marco legal. Envío a todo el país.',
  keywords: [
    'cannabis medicinal Neuquén',
    'club de cultivo REPROCANN',
    'Flora ONG',
    'cannabis medicinal Argentina',
    'REPROCANN Neuquén',
    'club cultivo cannabis legal',
    'asociacion civil cannabis',
    'flora.ar',
  ],
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://flora.ar',
    siteName: 'Flora ONG',
    title: 'Flora ONG — Club de Cultivo Medicinal en Neuquén | REPROCANN',
    description:
      'Asociación civil registrada en REPROCANN. Cannabis de calidad documentada dentro del marco legal. Enviamos a todo el país desde Neuquén, Patagonia.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Flora ONG — Club de cultivo medicinal en Neuquén, Patagonia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@floraong',
    title: 'Flora ONG — Club de Cultivo Medicinal en Neuquén | REPROCANN',
    description:
      'Asociación civil registrada en REPROCANN. Cannabis de calidad documentada dentro del marco legal. Enviamos a todo el país desde Neuquén, Patagonia.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: 'https://flora.ar',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${hankenGrotesk.variable} ${ebGaramond.variable}`}>
      <head>
        <link rel="preconnect" href="https://images.pexels.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': ['Organization', 'NGO'],
                '@id': 'https://flora.ar/#organization',
                name: 'Flora ONG',
                alternateName: 'Flora Asociación Civil',
                description:
                  'Club de cultivo de cannabis medicinal bajo el marco legal REPROCANN. Asociación civil registrada en Neuquén, Patagonia.',
                url: 'https://flora.ar',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://flora.ar/og-image.jpg',
                  width: 1200,
                  height: 630,
                },
                email: 'hola@floraong.org',
                telephone: '+54-9-299-637-5723',
                areaServed: {
                  '@type': 'Country',
                  name: 'Argentina',
                },
                sameAs: [
                  'https://instagram.com/floraong',
                  'https://wa.me/5492996375723',
                ],
                contactPoint: {
                  '@type': 'ContactPoint',
                  contactType: 'customer service',
                  telephone: '+54-9-299-637-5723',
                  availableLanguage: 'Spanish',
                  contactOption: 'TollFree',
                },
              },
              {
                '@context': 'https://schema.org',
                '@type': 'LocalBusiness',
                '@id': 'https://flora.ar/#localbusiness',
                name: 'Flora ONG',
                description:
                  'Club de cultivo de cannabis medicinal en Neuquén. Asociación civil registrada en REPROCANN. Envío a todo el país.',
                url: 'https://flora.ar',
                telephone: '+54-9-299-637-5723',
                email: 'hola@floraong.org',
                priceRange: '$$',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Neuquén',
                  addressRegion: 'Neuquén',
                  addressCountry: 'AR',
                },
                geo: {
                  '@type': 'GeoCoordinates',
                  latitude: -38.9516,
                  longitude: -68.0591,
                },
                areaServed: {
                  '@type': 'Country',
                  name: 'Argentina',
                },
                sameAs: [
                  'https://instagram.com/floraong',
                ],
              },
            ]),
          }}
        />
      </head>
      <body className="bg-[#F7F6EB] text-[#2D4239] antialiased">
        {children}
      </body>
    </html>
  )
}
