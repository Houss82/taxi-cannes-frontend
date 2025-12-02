import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";
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
    default: "Taxi Cannes – Transferts Aéroport Nice & Chauffeur Privé",
    template: "%s | Taxi Cannes",
  },
  description:
    "Taxi Cannes disponible 24h/24 pour vos transferts aéroport Nice, gares, hôtels, congrès et déplacements privés sur la Côte d'Azur.",
  // Google ignore de plus en plus "keywords" mais ça ne gêne pas
  keywords: [
    "taxi Cannes",
    "taxi à Cannes",
    "transfert aéroport Nice Cannes",
    "chauffeur privé Cannes",
    "taxi Croisette",
    "Palais des Festivals taxi",
  ],
  alternates: {
    canonical: "/", // la home a en plus son canonical absolu dans page.jsx
  },
  openGraph: {
    title: "Taxi Cannes – Transferts Aéroport Nice & Chauffeur Privé",
    description:
      "Service de taxi à Cannes haut de gamme : transferts aéroport Nice, gares, hôtels et congrès. Réservation 24h/24.",
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
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

// ISR: Revalidate toutes les 24 heures pour le SEO (si tu veux le garder global)
export const revalidate = 86400;

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
