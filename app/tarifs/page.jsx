// ✅ SERVER COMPONENT - Pas de "use client"
export const revalidate = 86400;

import Link from "next/link";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

export const metadata = {
  title: {
    absolute:
      "Taxis à Cannes : comprendre les tarifs et la réservation | cannestaxi.fr",
  },
  description:
    "Comment fonctionnent les tarifs de taxi à Cannes et sur la Côte d’Azur : réglementation, paiement au chauffeur, demande de réservation via cannestaxi.fr. Sans grille de prix commerciaux inventés.",
  keywords:
    "tarifs taxi cannes, comprendre tarif taxi, réservation taxi cannes, réglementation taxi",
  alternates: {
    canonical: "https://www.cannestaxi.fr/tarifs",
  },
};

export default function Pricing() {
  return (
    <main className="min-h-screen bg-white">
      <section className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Taxis à Cannes : comprendre les tarifs et la réservation
            </h1>
            <p className="text-lg text-muted-foreground">
              Informations générales sur la tarification des taxis et le rôle de
              cannestaxi.fr — sans grille de prix commerciaux présentés comme
              réglementaires.
            </p>
          </div>

          <Card className="p-8 mb-10 border border-border">
            <h2 className="text-2xl font-bold mb-4">
              Rôle de cannestaxi.fr
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">cannestaxi.fr</strong> est un
              service de mise en relation permettant aux voyageurs de transmettre
              une demande de réservation à des chauffeurs de taxi professionnels
              indépendants, titulaires des autorisations nécessaires.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Les prestations de transport sont réalisées par les chauffeurs
              partenaires, qui encaissent directement le règlement des courses.
              Le site ne revendique pas d’être une centrale de réservation
              déclarée, ni de disposer d’une licence de taxi au nom de
              l’éditeur.
            </p>
          </Card>

          <div className="space-y-10 mb-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">
                Comment sont déterminés les tarifs de taxi ?
              </h2>
              <ul className="space-y-3 text-muted-foreground leading-relaxed list-disc pl-5">
                <li>
                  Les tarifs des taxis sont{" "}
                  <strong className="text-foreground">réglementés</strong>{" "}
                  (compteur et règles applicables selon le cadre en vigueur).
                </li>
                <li>
                  Les conditions tarifaires dépendent des règles applicables au
                  trajet et au véhicule (commune d’autorisation, type de
                  course, éventuels forfaits prévus par la réglementation
                  lorsqu’ils existent).
                </li>
                <li>
                  Certains trajets peuvent relever de{" "}
                  <strong className="text-foreground">
                    forfaits réglementaires
                  </strong>{" "}
                  lorsqu’ils sont prévus par les textes ; ce site{" "}
                  <strong className="text-foreground">
                    n’affiche pas de grille commerciale
                  </strong>{" "}
                  présentée comme tarif officiel.
                </li>
                <li>
                  Les éventuels suppléments (nuit, attente, bagages
                  volumineux, etc.) doivent respecter la réglementation
                  applicable — ils ne sont pas fixés arbitrairement par le site.
                </li>
                <li>
                  Le client{" "}
                  <strong className="text-foreground">
                    paie directement le chauffeur
                  </strong>{" "}
                  qui effectue la course.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                Demande de réservation
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                En transmettant une demande via le formulaire, vous indiquez
                trajet, horaire et besoins. Un chauffeur partenaire peut alors
                vous confirmer la prise en charge. La disponibilité n’est pas
                garantie à l’avance ; le montant et les conditions applicables
                sont ceux du cadre réglementaire et de la confirmation du
                chauffeur.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Pour les trajets fréquents (aéroport Nice, Monaco, gare,
                palaces, etc.), consultez les pages services et guides
                associés — informations pratiques, sans prix commerciaux
                inventés.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                Pages utiles
              </h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link
                    href="/services/transfert-aeroport-nice-cannes"
                    className="text-accent font-medium hover:underline"
                  >
                    Transfert aéroport Nice ↔ Cannes
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/cannes-monaco"
                    className="text-accent font-medium hover:underline"
                  >
                    Trajet Cannes → Monaco
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/chauffeur-prive-cannes"
                    className="text-accent font-medium hover:underline"
                  >
                    Mise à disposition / chauffeur
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/taxi-cannes-saint-tropez-transfert-guide-2026"
                    className="text-accent font-medium hover:underline"
                  >
                    Guide Cannes → Saint-Tropez
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-accent font-medium hover:underline"
                  >
                    Tous les services
                  </Link>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">FAQ courte</h2>
              <div className="space-y-4">
                <details className="border border-border rounded-lg p-4">
                  <summary className="font-semibold cursor-pointer">
                    Pourquoi le site n’affiche-t-il plus de grille de prix ?
                  </summary>
                  <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                    Pour éviter de présenter des montants commerciaux comme s’il
                    s’agissait de tarifs réglementaires ou de forfaits officiels.
                    Les règles applicables relèvent de la réglementation des
                    taxis et de la confirmation du chauffeur.
                  </p>
                </details>
                <details className="border border-border rounded-lg p-4">
                  <summary className="font-semibold cursor-pointer">
                    Qui encaisse le paiement ?
                  </summary>
                  <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                    Le chauffeur qui réalise la course. cannestaxi.fr met en
                    relation ; il n’effectue pas lui-même le transport.
                  </p>
                </details>
                <details className="border border-border rounded-lg p-4">
                  <summary className="font-semibold cursor-pointer">
                    Comment obtenir une estimation ?
                  </summary>
                  <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                    Décrivez votre trajet dans le{" "}
                    <Link href="/reservation" className="text-accent underline">
                      formulaire de réservation
                    </Link>{" "}
                    ou par téléphone. Le chauffeur partenaire peut vous préciser
                    les modalités avant le départ, dans le respect des règles
                    applicables.
                  </p>
                </details>
              </div>
            </section>
          </div>

          <div className="text-center bg-secondary p-8 rounded-lg">
            <p className="mb-6 text-muted-foreground">
              Prêt à transmettre une demande de prise en charge ?
            </p>
            <Link href="/reservation">
              <Button className="bg-accent text-accent-foreground hover:opacity-90 px-8 py-6 text-lg">
                Demander une réservation
              </Button>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Ou{" "}
              <Link href="/contact" className="text-accent underline">
                nous contacter
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
