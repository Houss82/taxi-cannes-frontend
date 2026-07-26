import { Inter } from "next/font/google";
import Script from "next/script";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MobileScrollCTA from "./components/client/MobileScrollCTA";
import { Providers } from "./providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// 🌐 Métadonnées globales SEO pour Taxi Cannes
export const metadata = {
  metadataBase: new URL("https://www.cannestaxi.fr"),
  title: {
    default: "Taxi Cannes – Transferts Aéroport Nice & Taxi conventionné CPAM",
    template: "%s | Taxi Cannes",
  },
  description:
    "Taxi Cannes disponible 24h/24 pour vos transferts aéroport Nice, gares, hôtels, congrès et déplacements privés sur la Côte d'Azur.",
  // Google ignore de plus en plus "keywords" mais ça ne gêne pas
  keywords: [
    "taxi Cannes",
    "taxi à Cannes",
    "transfert aéroport Nice Cannes",
    "taxi conventionné CPAM Cannes",
    "taxi Croisette",
    "Palais des Festivals taxi",
  ],
  alternates: {
    canonical: "/", // la home a en plus son canonical absolu dans page.jsx
  },
  openGraph: {
    title: "Taxi Cannes – Transferts Aéroport Nice & Taxi conventionné CPAM",
    description:
      "Service de taxi à Cannes haut de gamme : transferts aéroport Nice, Conventionné CPAM, hôtels et congrès. Réservation 24h/24.",
    url: "/",
    siteName: "Taxi Cannes",
    locale: "fr_FR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/Taxi_Cannes-removebg-preview.png",
        sizes: "any",
        type: "image/png",
      },
    ],
    apple: "/Taxi_Cannes-removebg-preview.png",
  },
};

// ISR: Revalidate toutes les 24 heures pour le SEO (si tu veux le garder global)
export const revalidate = 86400;

const GOOGLE_ADS_ID = "AW-18336988709";

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ADS_ID}');
          `}
        </Script>
        <Providers>
          <Header />
          <main className="min-h-screen pb-28 md:pb-0">{children}</main>
          <Footer />
          <MobileScrollCTA />
        </Providers>
      </body>
    </html>
  );
}
