import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Plus_Jakarta_Sans, Instrument_Serif } from "next/font/google";
import Footer from "@/components/footer";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-main",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-secondary",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.transvanexpresss.cl"),
  title: {
    default: "Transvan Express — Transfer Privado en Chile",
    template: "%s | Transvan Express",
  },
  description:
    "Transvan Express ofrece traslados privados y tours en Chile: aeropuerto Santiago, centros de ski, Valparaíso, Viña del Mar, viñedos y más. Reserva ahora.",
  keywords: [
    "transfer privado Santiago",
    "traslado aeropuerto Santiago",
    "transfer aeropuerto Chile",
    "traslado privado Chile",
    "transfer centros de ski",
    "Valle Nevado transfer",
    "transfer Valparaíso",
    "transfer Viña del Mar",
    "tour Embalse del Yeso",
    "city tour Santiago",
    "tour viñedos Chile",
    "Transvan Express",
    "van privada Santiago",
    "transporte turístico Chile",
  ],
  authors: [{ name: "Transvan Express" }],
  creator: "Transvan Express",
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://www.transvanexpresss.cl",
    siteName: "Transvan Express",
    title: "Transvan Express — Transfer Privado en Chile",
    description:
      "Traslados privados y tours en Chile. Aeropuerto, centros de ski, Valparaíso, Viña del Mar y mucho más. Servicio cálido, puntual y profesional.",
    images: [
      {
        url: "/images/trans-express.png",
        width: 1200,
        height: 630,
        alt: "Transvan Express — Transfer Privado en Chile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transvan Express — Transfer Privado en Chile",
    description:
      "Traslados privados y tours en Chile. Aeropuerto, centros de ski, Valparaíso, Viña del Mar y mucho más.",
    images: ["/images/trans-express.png"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Transvan Express",
  url: "https://www.transvanexpresss.cl",
  telephone: ["+56992912194", "+56988101802"],
  email: "transvanexpresss@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Santiago",
    addressRegion: "Región Metropolitana",
    addressCountry: "CL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -33.4489,
    longitude: -70.6693,
  },
  areaServed: [
    "Santiago",
    "Valparaíso",
    "Viña del Mar",
    "Valle Nevado",
    "El Colorado",
    "La Parva",
    "Farellones",
    "Portillo",
    "Cajón del Maipo",
    "Pomaire",
    "Isla Negra",
    "Rancagua",
  ],
  availableLanguage: ["Spanish", "English", "German"],
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${jakartaSans.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black pb-[52px] md:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
        <div className="hidden lg:block"><Footer /></div>
        <WhatsAppButton />
      </body>
    </html>
  );
}
