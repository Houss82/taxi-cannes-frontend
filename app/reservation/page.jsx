// ✅ SERVER COMPONENT - Pas de "use client"
export const revalidate = 86400;

import Link from "next/link";
import ReservationForm from "../components/client/ReservationForm";
import Card from "../components/ui/Card";

export const metadata = {
  title: {
    absolute: "Demande de réservation taxi | cannestaxi.fr",
  },
  description:
    "Transmettez une demande de réservation à des chauffeurs de taxi indépendants via cannestaxi.fr. Paiement auprès du chauffeur. Confirmation selon disponibilité.",
  keywords:
    "réservation taxi cannes, demande taxi nice, réservation chauffeur",
  alternates: {
    canonical: "https://www.cannestaxi.fr/reservation",
  },
};

export default function Reservation() {
  return (
    <main className="min-h-screen bg-white">
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Demande de réservation
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Vous transmettez une demande de prise en charge. Un chauffeur de
              taxi professionnel indépendant peut ensuite confirmer le trajet.
              La disponibilité n&apos;est pas garantie à l&apos;avance.
            </p>
          </div>

          <Card className="p-6 mb-8 border border-border bg-secondary/40">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">cannestaxi.fr</strong> est un
              service de mise en relation. Les courses sont réalisées par les
              chauffeurs partenaires, qui encaissent directement le règlement.
              Les conditions tarifaires applicables sont celles de la
              réglementation des taxis et de la confirmation du chauffeur. Voir
              aussi{" "}
              <Link href="/tarifs" className="text-accent underline">
                comprendre les tarifs
              </Link>
              .
            </p>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ReservationForm />
            </div>

            <div className="space-y-6">
              <Card className="p-6 bg-secondary">
                <h3 className="font-bold text-lg mb-4">
                  Conditions d&apos;annulation
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    • Les modalités d&apos;annulation vous sont précisées lors
                    de la confirmation par le chauffeur ou l&apos;équipe de mise
                    en relation.
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold text-lg mb-4">À savoir</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span>
                    <span>
                      Accusé de réception de votre demande (selon le canal
                      utilisé)
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span>
                    <span>
                      Confirmation de prise en charge par un chauffeur
                      partenaire (sous réserve de disponibilité)
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span>
                    <span>
                      Montant et conditions selon la réglementation applicable
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span>
                    <span>Paiement directement auprès du chauffeur</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
