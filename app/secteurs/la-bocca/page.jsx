// app/secteurs/la-bocca/page.jsx — TAXI CANNES LA BOCCA

export const metadata = {
  title: "Taxi Cannes La Bocca | Service 24h/24 Plages & Quartier | Taxi Cannes",
  description:
    "Service de taxi Cannes La Bocca disponible 24h/24. Transport vers les plages, le marché, les résidences et commerces du quartier La Bocca. Réservez votre chauffeur local.",
  keywords:
    "taxi la bocca cannes, taxi cannes la bocca, transport la bocca, taxi plage la bocca, chauffeur la bocca cannes, taxi avenue francis tonner",
  alternates: {
    canonical: "https://www.cannestaxi.fr/secteurs/la-bocca",
  },
};

import Button from "@/app/components/ui/Button";
import {
  Car,
  Clock,
  MapPin,
  Phone,
  Star,
  Sun,
  Umbrella,
  UtensilsCrossed,
  Waves,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LaBocca() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <Image
          src="/taxi-cannes-la-bocca.png"
          alt="Taxi Cannes La Bocca - Mercedes GLC service 24h/24 vers plages et quartier ouest de Cannes"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white max-w-3xl px-6">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-accent/20 rounded-full border border-accent/30">
            <Waves className="w-5 h-5 text-accent" />
            <span className="text-sm font-bold text-white uppercase tracking-wider">
              Quartier Littoral Ouest
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-balance">
            Taxi Cannes La Bocca
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 text-balance">
            Service de taxi premium 24h/24 pour le quartier La Bocca : plages,
            marché, résidences et commerces de l&apos;ouest cannois
          </p>
          <Button
            href="/reservation"
            size="lg"
            className="bg-accent text-accent-foreground hover:opacity-90 px-8 py-6 text-lg"
          >
            Réserver un taxi La Bocca
          </Button>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: Sun,
                label: "Plages & Littoral",
                desc: "Plage de la Bocca, promenade",
              },
              {
                icon: Clock,
                label: "24h/24",
                desc: "Service disponible",
              },
              {
                icon: Car,
                label: "Chauffeur local",
                desc: "Connaissance du quartier",
              },
              {
                icon: Star,
                label: "Mercedes GLC",
                desc: "Véhicules haut de gamme",
              },
            ].map((info, i) => {
              const Icon = info.icon;
              return (
                <div
                  key={i}
                  className="text-center p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <Icon className="w-8 h-8 mx-auto mb-4 text-accent" />
                  <h3 className="font-bold mb-2 text-lg">{info.label}</h3>
                  <p className="text-sm text-muted-foreground">{info.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 bg-linear-to-b from-accent/5 via-white to-accent/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-12 p-8 bg-white rounded-xl border-2 border-accent/30 shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Taxi La Bocca – Service local officiel 24h/24
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nous sommes une entreprise de taxi locale à Cannes qui dessert le
              quartier de <strong>La Bocca</strong>, à l&apos;ouest de la ville.
              Nous assurons les trajets vers et depuis les plages, le marché,
              l&apos;Avenue Francis Tonner, les résidences et commerces du
              secteur. Service disponible 24h/24 et 7j/7 sur Cannes et les
              Alpes-Maritimes. Guide détaillé :{" "}
              <Link
                href="/blog/taxi-cannes-la-bocca-guide-2026"
                className="text-accent font-semibold hover:underline underline-offset-2"
              >
                taxi Cannes La Bocca
              </Link>{" "}
              (durées, tarifs, FAQ).
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              La Bocca à Cannes : le quartier littoral de l&apos;ouest
            </h2>
            <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden mb-8 shadow-lg">
              <Image
                src="/taxi-cannes-la-bocca-plage.png"
                alt="Taxi Cannes La Bocca - Mercedes devant la plage de La Bocca et la Méditerranée"
                fill
                className="object-cover"
              />
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>La Bocca</strong> est un quartier cannois en bord de
                mer, situé à l&apos;ouest du centre-ville, entre la{" "}
                <strong>Croisette</strong> et <strong>Golfe-Juan</strong>. C&apos;est
                un secteur résidentiel et familial réputé pour sa{" "}
                <strong>longue plage de sable</strong>, sa promenade ombragée
                de palmiers et son ambiance plus authentique que le front de
                mer prestige.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                L&apos;<strong>Avenue Francis Tonner</strong>, axe principal du
                quartier, concentre commerces, restaurants et services. Le{" "}
                <strong>marché de La Bocca</strong> et le{" "}
                <strong>Port de la Bocca</strong> animent la vie locale. La
                Bocca est aussi un point de départ pratique vers{" "}
                <Link
                  href="/blog/taxi-cannes-antibes-juan-les-pins-transfert-guide-2026"
                  className="text-accent font-semibold hover:underline"
                >
                  Antibes et Juan-les-Pins
                </Link>
                , l&apos;
                <Link
                  href="/services/transfert-aeroport-nice-cannes"
                  className="text-accent font-semibold hover:underline"
                >
                  aéroport Nice
                </Link>{" "}
                ou la{" "}
                <Link
                  href="/blog/taxi-gare-cannes-service-transport-sncf-2025"
                  className="text-accent font-semibold hover:underline"
                >
                  gare SNCF de Cannes
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">
              Points d&apos;intérêt de La Bocca
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <Umbrella className="w-8 h-8 mb-4 text-accent" />
                <h3 className="text-xl font-bold mb-3">Plage de la Bocca</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Grande plage de sable familiale</li>
                  <li>• Promenade du littoral</li>
                  <li>• Accès facile depuis les résidences</li>
                  <li>• Forte affluence estivale</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <UtensilsCrossed className="w-8 h-8 mb-4 text-accent" />
                <h3 className="text-xl font-bold mb-3">Marché & Commerces</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Marché de La Bocca (matinées)</li>
                  <li>• Avenue Francis Tonner</li>
                  <li>• Restaurants et brasseries</li>
                  <li>• Commerces de proximité</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <MapPin className="w-8 h-8 mb-4 text-accent" />
                <h3 className="text-xl font-bold mb-3">Port & Accès</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Port de la Bocca</li>
                  <li>• Proche sortie A8</li>
                  <li>• Liaison Golfe-Juan / Antibes</li>
                  <li>• Quartiers résidentiels alentour</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <Car className="w-8 h-8 mb-4 text-accent" />
                <h3 className="text-xl font-bold mb-3">Proximité Cannes</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 10–15 min du centre-ville</li>
                  <li>• 15–20 min de la Croisette</li>
                  <li>• 30–40 min aéroport Nice</li>
                  <li>• 15–25 min vers Antibes</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16 bg-white rounded-xl p-8 border-2 border-accent/30 shadow-lg">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Service de taxi La Bocca Cannes
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>Taxi Cannes</strong> assure un service de transport
                professionnel vers et depuis La Bocca. Que vous résidiez dans
                le quartier, que vous y séjourniez en location ou que vous
                souhaitiez vous y rendre pour la plage ou le marché, notre
                chauffeur vous accompagne 24h/24.
              </p>
              <h3 className="text-2xl font-bold mb-4 mt-8">
                Nos services pour La Bocca
              </h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-accent mt-1 shrink-0" />
                  <span>
                    <strong>Prise en charge à domicile</strong> : résidences et
                    villas du quartier La Bocca
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-accent mt-1 shrink-0" />
                  <span>
                    <strong>Transferts plage</strong> : dépose promenade et
                    accès Plage de la Bocca
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-accent mt-1 shrink-0" />
                  <span>
                    <strong>Marché & courses</strong> : service avec attente
                    possible sur devis
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-accent mt-1 shrink-0" />
                  <span>
                    <strong>Transfert aéroport Nice</strong> : depuis La Bocca
                    vers T1/T2 —{" "}
                    <Link
                      href="/services/transfert-aeroport-nice-cannes"
                      className="text-accent font-semibold hover:underline"
                    >
                      transfert aéroport Nice Cannes
                    </Link>{" "}
                    ·{" "}
                    <Link
                      href="/blog/taxi-cannes-aeroport-nice-depart-guide-2026"
                      className="text-accent font-semibold hover:underline"
                    >
                      guide départ aéroport
                    </Link>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-accent mt-1 shrink-0" />
                  <span>
                    <strong>Liaison Croisette & Palais</strong> : trajets vers
                    le centre et les événements
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-accent mt-1 shrink-0" />
                  <span>
                    <strong>Antibes & Juan-les-Pins</strong> : liaison ouest
                    Côte d&apos;Azur
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-16 bg-accent/10 rounded-xl p-8 border border-accent/20">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Comment réserver votre taxi La Bocca ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Phone className="w-6 h-6 text-accent" />
                  Par téléphone
                </h3>
                <p className="text-gray-700 mb-4">
                  Appelez-nous au{" "}
                  <strong className="text-accent">+33 7 56 82 77 99</strong>{" "}
                  pour réserver immédiatement. Service disponible 24h/24.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Car className="w-6 h-6 text-accent" />
                  En ligne
                </h3>
                <p className="text-gray-700 mb-4">
                  Utilisez notre{" "}
                  <Link
                    href="/reservation"
                    className="text-accent font-bold hover:underline"
                  >
                    formulaire de réservation en ligne
                  </Link>{" "}
                  en indiquant votre adresse à La Bocca.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">
              Questions fréquentes – Taxi La Bocca
            </h2>
            <div className="space-y-6">
              <details className="bg-white rounded-lg p-6 border border-gray-200">
                <summary className="font-bold text-lg cursor-pointer">
                  Combien coûte un taxi depuis La Bocca vers la Croisette ?
                </summary>
                <p className="mt-4 text-gray-700">
                  Comptez environ <strong>20€ à 35€</strong> selon l&apos;adresse
                  exacte et le trafic. Détails dans notre{" "}
                  <Link
                    href="/blog/taxi-cannes-la-bocca-guide-2026"
                    className="text-accent font-semibold hover:underline"
                  >
                    guide taxi La Bocca
                  </Link>
                  . Contactez-nous pour un devis précis.
                </p>
              </details>
              <details className="bg-white rounded-lg p-6 border border-gray-200">
                <summary className="font-bold text-lg cursor-pointer">
                  Peut-on réserver un taxi pour la plage de La Bocca ?
                </summary>
                <p className="mt-4 text-gray-700">
                  Oui — dépose au plus près de la promenade. En été, réservez
                  votre créneau à l&apos;avance pour garantir la prise en charge.
                </p>
              </details>
              <details className="bg-white rounded-lg p-6 border border-gray-200">
                <summary className="font-bold text-lg cursor-pointer">
                  Combien de temps de La Bocca à l&apos;aéroport Nice ?
                </summary>
                <p className="mt-4 text-gray-700">
                  En général <strong>30 à 45 minutes</strong> selon trafic et
                  heure. Voir notre{" "}
                  <Link
                    href="/services/transfert-aeroport-nice-cannes"
                    className="text-accent font-semibold hover:underline"
                  >
                    taxi Cannes aéroport Nice
                  </Link>{" "}
                  et le{" "}
                  <Link
                    href="/blog/taxi-cannes-aeroport-nice-depart-guide-2026"
                    className="text-accent font-semibold hover:underline"
                  >
                    guide départ aéroport
                  </Link>
                  .
                </p>
              </details>
              <details className="bg-white rounded-lg p-6 border border-gray-200">
                <summary className="font-bold text-lg cursor-pointer">
                  Desserviez-vous le marché de La Bocca ?
                </summary>
                <p className="mt-4 text-gray-700">
                  Oui, avec possibilité d&apos;attente pendant vos courses —
                  tarif sur devis selon la durée.
                </p>
              </details>
              <details className="bg-white rounded-lg p-6 border border-gray-200">
                <summary className="font-bold text-lg cursor-pointer">
                  Taxi La Bocca vers Antibes : quel tarif ?
                </summary>
                <p className="mt-4 text-gray-700">
                  Liaison proche vers l&apos;ouest — voir notre{" "}
                  <Link
                    href="/blog/taxi-cannes-antibes-juan-les-pins-transfert-guide-2026"
                    className="text-accent font-semibold hover:underline"
                  >
                    guide taxi Cannes Antibes
                  </Link>{" "}
                  (forfait indicatif <strong>45 €</strong> depuis Cannes centre).
                </p>
              </details>
            </div>
          </div>

          <div className="bg-accent text-accent-foreground rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Besoin d&apos;un taxi La Bocca maintenant ?
            </h2>
            <p className="text-lg mb-6 text-accent-foreground/90">
              Réservez votre trajet en quelques clics et recevez une
              confirmation immédiate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/reservation"
                className="bg-white text-accent hover:opacity-90 px-8 py-6 text-lg"
              >
                Réserver un taxi La Bocca
              </Button>
              <Button
                href="/contact"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg bg-transparent"
              >
                Nous contacter
              </Button>
            </div>
            <p className="mt-6 text-sm text-accent-foreground/80">
              📞 <strong>+33 7 56 82 77 99</strong> | ✉️{" "}
              <strong>taxicannes2025@gmail.com</strong>
              <br />
              Service disponible 24h/24 et 7j/7 • Réponse garantie sous 2 heures
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
