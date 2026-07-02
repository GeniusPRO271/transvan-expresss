import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Plus_Jakarta_Sans, Instrument_Serif } from "next/font/google";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

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
    "transfer compartido Santiago",
    "traslado aeropuerto Santiago",
    "transfer aeropuerto Chile",
    "traslado privado Chile",
    "transfer centros de ski",
    "Valle Nevado transfer",
    "transfer Farellones",
    "transfer La Parva",
    "transfer El Colorado",
    "transfer Portillo",
    "transfer Valle Nevado ski",
    "transfer Valparaíso",
    "transfer Viña del Mar",
    "tour Embalse del Yeso",
    "city tour Santiago",
    "tour viñedos Chile",
    "tour safari Rancagua",
    "tour Pomaire Isla Negra",
    "van matrimonios Santiago",
    "traslado ski Santiago",
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
    languages: { "es-CL": "/" },
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

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Transvan Express",
  url: "https://www.transvanexpresss.cl",
  logo: "https://www.transvanexpresss.cl/images/trans-express.png",
  email: "transvanexpresss@gmail.com",
  telephone: ["+56992912194", "+56988101802"],
  sameAs: [
    "https://www.instagram.com/transvanexpresss/",
    "https://www.facebook.com/people/Transvanexpressscl/100065082180487/",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "TouristInformationCenter"],
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
  availableLanguage: ["Spanish", "English", "Portuguese"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header />
        {children}
        <div className="hidden lg:block"><Footer /></div>
        <WhatsAppButton />
        <Analytics />
        <SpeedInsights />
        {/* Replace G-XXXXXXXXXX with your GA4 Measurement ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}</Script>
        {/* Replace XXXXXXXXXXXXXXXXXX with your Facebook Pixel ID */}
        <Script id="facebook-pixel" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
          n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
          (window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init','XXXXXXXXXXXXXXXXXX');
          fbq('track','PageView');
        `}</Script>
      </body>
    </html>
  );
}
