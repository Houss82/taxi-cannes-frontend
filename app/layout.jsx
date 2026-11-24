import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://www.cannestaxi.fr"),
  title: "Cessation d'activité — cannestaxi.fr",
  description:
    "Le site cannestaxi.fr a définitivement cessé son activité de réservation de taxis.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className="min-h-screen bg-white text-neutral-900 antialiased"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
