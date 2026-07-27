import { CheckCircle, Phone } from "lucide-react";
import Link from "next/link";
import Button from "@/app/components/ui/Button";

export const metadata = {
  title: "Message envoyé | Taxi Cannes",
  description:
    "Votre message a bien été envoyé à Taxi Cannes. Nous vous répondrons rapidement.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://www.cannestaxi.fr/contact/succes",
  },
};

export default function ContactSuccesPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 mb-6">
          <CheckCircle className="w-12 h-12 text-accent" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Message envoyé
        </h1>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          Merci. Votre message a bien été transmis. Nous vous répondrons dans
          les plus brefs délais.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            href="/"
            className="bg-accent text-accent-foreground hover:opacity-90 px-8 py-6"
          >
            Retour à l&apos;accueil
          </Button>
          <Button href="/reservation" className="px-8 py-6" variant="outline">
            Réserver un taxi
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
          <Link href="/contact" className="hover:underline">
            Envoyer un autre message
          </Link>
        </p>
      </div>
    </main>
  );
}
