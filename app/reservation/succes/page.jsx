import { CheckCircle, Phone } from "lucide-react";
import Link from "next/link";
import Script from "next/script";
import Button from "@/app/components/ui/Button";

export const metadata = {
  title: "Réservation envoyée | Taxi Cannes",
  description:
    "Votre demande de réservation Taxi Cannes a bien été envoyée. Notre équipe vous recontacte rapidement.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://www.cannestaxi.fr/reservation/succes",
  },
};

export default function ReservationSuccesPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      {/* Event snippet for Envoi de formulaire de lead conversion page */}
      <Script id="google-ads-conversion-lead" strategy="afterInteractive">
        {`
          gtag('event', 'conversion', {'send_to': 'AW-18336988709/b6r_CLztu9ccEKX84KdE'});
        `}
      </Script>

      <div className="max-w-2xl mx-auto px-6 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 mb-6">
          <CheckCircle className="w-12 h-12 text-accent" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Réservation envoyée
        </h1>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          Merci. Votre demande a bien été reçue. Notre équipe vous recontacte
          sous peu pour confirmer votre trajet.
        </p>

        <div className="bg-secondary rounded-xl p-6 mb-10 text-left space-y-3">
          <p className="font-semibold text-gray-900">Prochaines étapes</p>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li>• Vérification de votre demande par notre équipe</li>
            <li>• Confirmation par téléphone ou email</li>
            <li>• Ajustement éventuel de l&apos;horaire ou du véhicule</li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            href="/"
            className="bg-accent text-accent-foreground hover:opacity-90 px-8 py-6"
          >
            Retour à l&apos;accueil
          </Button>
          <Button
            href="/contact"
            variant="outline"
            className="px-8 py-6"
          >
            Nous contacter
          </Button>
        </div>

        <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
          <Phone className="w-4 h-4" />
          Urgent ? Appelez le{" "}
          <a
            href="tel:+33756827799"
            className="font-semibold text-accent hover:underline"
          >
            +33 7 56 82 77 99
          </a>
        </p>

        <p className="mt-10 text-xs text-muted-foreground">
          <Link href="/reservation" className="hover:underline">
            Faire une autre réservation
          </Link>
        </p>
      </div>
    </main>
  );
}
