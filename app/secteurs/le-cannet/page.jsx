// app/secteurs/le-cannet/page.jsx — TAXI LE CANNET

export const metadata = {
  title: "Taxi Le Cannet | Service 24h/24 Cannes & Alpes-Maritimes | Taxi Cannes",
  description:
    "Service de taxi Le Cannet disponible 24h/24. Transport vers résidences, Vieux Cannet, musée Bonnard, Rocheville. Transfert aéroport Nice, Croisette, gare SNCF. Réservez votre taxi.",
  keywords:
    "taxi le cannet, taxi cannet cannes, transport le cannet, taxi rocheville, taxi musée bonnard, chauffeur le cannet, taxi cannes le cannet",
  alternates: {
    canonical: "https://www.cannestaxi.fr/secteurs/le-cannet",
  },
};

import Button from "@/app/components/ui/Button";
import {
  Building2,
  Car,
  Clock,
  Home,
  MapPin,
  Phone,
  Star,
  Trees,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LeCannet() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <Image
          src="/taxi-cannes-le-cannet.png"
          alt="Taxi Tesla Le Cannet - Service de transport résidentiel près de Cannes"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white max-w-3xl px-6">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-accent/20 rounded-full border border-accent/30">
            <Home className="w-5 h-5 text-accent" />
            <span className="text-sm font-bold text-white uppercase tracking-wider">
              Commune voisine de Cannes
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-balance">
            Taxi Le Cannet
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 text-balance">
            Service de taxi disponible 24h/24 pour Le Cannet, Rocheville et les
            résidences proches de Cannes
          </p>
          <Button
            href="/reservation"
            size="lg"
            className="bg-accent text-accent-foreground hover:opacity-90 px-8 py-6 text-lg"
          >
            Réserver un taxi Le Cannet
          </Button>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: MapPin,
                label: "Proche Cannes",
                desc: "Quelques minutes du centre",
              },
              {
                icon: Clock,
                label: "24h/24",
                desc: "Service disponible",
              },
              {
                icon: Car,
                label: "Réservation rapide",
                desc: "En ligne ou par téléphone",
              },
              {
                icon: Star,
                label: "Service Premium",
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
          {/* Identification claire pour Google */}
          <div className="mb-12 p-8 bg-white rounded-xl border-2 border-accent/30 shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Taxi Le Cannet – Service local officiel 24h/24
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nous sommes une entreprise de taxi locale à Cannes qui dessert{" "}
              <strong>Le Cannet</strong>. Nous assurons les trajets en taxi vers
              et depuis le Cannet, Rocheville, le Vieux Cannet, les résidences
              et les commerces. Service de taxi disponible 24h/24 et 7j/7 sur
              Cannes et les Alpes-Maritimes.
            </p>
          </div>

          {/* Présentation du quartier */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Le Cannet : ville résidentielle aux portes de Cannes
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Le <strong>Cannet</strong> est une commune limitrophe de Cannes,
                réputée pour ses quartiers résidentiels, ses villas et sa
                proximité immédiate avec la Croisette. Beaucoup d&apos;habitants
                et de visiteurs y logent tout en se déplaçant quotidiennement
                vers le centre de Cannes, la gare SNCF ou l&apos;aéroport Nice
                Côte d&apos;Azur.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Entre le <strong>Vieux Cannet</strong>,{" "}
                <strong>Rocheville</strong>, les axes vers Mougins et les
                résidences en hauteur, le taxi évite le stationnement difficile
                et les correspondances. Notre équipe connaît les adresses
                précises, les codes d&apos;accès et les meilleurs itinéraires
                selon l&apos;heure.
              </p>
            </div>
            <div className="relative mt-8 h-64 md:h-80 rounded-xl overflow-hidden border border-gray-200 shadow-md">
              <Image
                src="/taxi-cannes-le-cannet-vieux.png"
                alt="Taxi Tesla Le Cannet — prise en charge Vieux Cannet et résidences"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Points d'intérêt */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">
              Points d&apos;intérêt au Cannet
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <Trees className="w-8 h-8 mb-4 text-accent" />
                <h3 className="text-xl font-bold mb-3">Vieux Cannet & culture</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Vieux village et ruelles provençales</li>
                  <li>• Musée Bonnard</li>
                  <li>• Places et commerces de proximité</li>
                  <li>• Ambiance résidentielle calme</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <Home className="w-8 h-8 mb-4 text-accent" />
                <h3 className="text-xl font-bold mb-3">Résidences & quartiers</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Rocheville et axes résidentiels</li>
                  <li>• Villas et résidences avec portail</li>
                  <li>• Appartements et locations saisonnières</li>
                  <li>• Accès Mougins / Californie</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <Building2 className="w-8 h-8 mb-4 text-accent" />
                <h3 className="text-xl font-bold mb-3">Commerces & services</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Centres commerciaux et grandes surfaces</li>
                  <li>• Pharmacies, banques, services</li>
                  <li>• Restaurants et cafés locaux</li>
                  <li>• Courses avec attente sur devis</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <MapPin className="w-8 h-8 mb-4 text-accent" />
                <h3 className="text-xl font-bold mb-3">Accès et proximité</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• À quelques minutes de Cannes centre</li>
                  <li>• Liaison rapide vers la Croisette</li>
                  <li>• Proche gare SNCF Cannes</li>
                  <li>
                    •{" "}
                    <Link
                      href="/services/transfert-aeroport-nice-cannes"
                      className="text-accent font-semibold hover:underline underline-offset-2"
                    >
                      Transfert aéroport Nice
                    </Link>{" "}
                    (~35–48 min)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Service de taxi */}
          <div className="mb-16 bg-white rounded-xl p-8 border-2 border-accent/30 shadow-lg">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Service de taxi Le Cannet
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>Taxi Cannes</strong> assure un service de transport
                professionnel vers et depuis Le Cannet. Que vous résidiez dans
                une villa, une résidence avec code d&apos;accès, ou que vous
                veniez pour un événement à Cannes, notre service de taxi vous
                accompagne 24h/24 et 7j/7.
              </p>
              <h3 className="text-2xl font-bold mb-4 mt-8">
                Nos services pour Le Cannet
              </h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-accent mt-1 shrink-0" />
                  <span>
                    <strong>Prise en charge à domicile</strong> : villa,
                    résidence, portail — indiquez l&apos;adresse complète et le
                    code si besoin
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-accent mt-1 shrink-0" />
                  <span>
                    <strong>Liaison Cannes centre / Croisette</strong> : trajets
                    fréquents vers palaces, Palais des Festivals et commerces
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-accent mt-1 shrink-0" />
                  <span>
                    <strong>Gare SNCF Cannes</strong> : correspondances TER et
                    trains longue distance
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-accent mt-1 shrink-0" />
                  <span>
                    <strong>Transferts aéroport</strong> : depuis Le Cannet vers
                    l&apos;
                    <Link
                      href="/services/transfert-aeroport-nice-cannes"
                      className="text-accent font-semibold hover:underline underline-offset-2"
                    >
                      aéroport Nice Côte d&apos;Azur
                    </Link>{" "}
                    (T1 / T2)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-accent mt-1 shrink-0" />
                  <span>
                    <strong>Mougins & villages</strong> : liaisons vers Mougins,
                    Grasse et environs sur réservation
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-accent mt-1 shrink-0" />
                  <span>
                    <strong>Service de nuit</strong> : retours de soirée et
                    départs matinaux garantis
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Comment réserver */}
          <div className="mb-16 bg-accent/10 rounded-xl p-8 border border-accent/20">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Comment réserver votre taxi Le Cannet ?
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
                  pour réserver immédiatement votre taxi. Service disponible
                  24h/24.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Car className="w-6 h-6 text-accent" />
                  En ligne
                </h3>
                <p className="text-gray-700 mb-4">
                  Utilisez notre{" "}
                  <a
                    href="/reservation"
                    className="text-accent font-bold hover:underline"
                  >
                    formulaire de réservation en ligne
                  </a>{" "}
                  pour réserver votre trajet en quelques clics.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">
              Questions fréquentes – Taxi Le Cannet
            </h2>
            <div className="space-y-6">
              <details className="bg-white rounded-lg p-6 border border-gray-200">
                <summary className="font-bold text-lg cursor-pointer">
                  Combien coûte un trajet Le Cannet → Croisette ?
                </summary>
                <p className="mt-4 text-gray-700">
                  Selon l&apos;adresse exacte et le trafic, comptez souvent une{" "}
                  <strong>course courte à moyenne</strong> (ordre de grandeur
                  indicatif : environ 15€ à 30€). Contactez-nous pour un devis
                  précis.
                </p>
              </details>
              <details className="bg-white rounded-lg p-6 border border-gray-200">
                <summary className="font-bold text-lg cursor-pointer">
                  Le chauffeur peut-il accéder à une résidence avec portail ?
                </summary>
                <p className="mt-4 text-gray-700">
                  Oui. Indiquez le <strong>code d&apos;accès</strong>, le
                  numéro de bâtiment et le point de rendez-vous (hall, parking)
                  à la réservation.
                </p>
              </details>
              <details className="bg-white rounded-lg p-6 border border-gray-200">
                <summary className="font-bold text-lg cursor-pointer">
                  Combien de temps du Cannet à l&apos;aéroport Nice ?
                </summary>
                <p className="mt-4 text-gray-700">
                  Comptez souvent <strong>35 à 48 minutes</strong> selon trafic
                  et heure. Réservez à l&apos;avance votre{" "}
                  <Link
                    href="/services/transfert-aeroport-nice-cannes"
                    className="text-accent font-semibold hover:underline underline-offset-2"
                  >
                    transfert aéroport Nice Cannes
                  </Link>
                  .
                </p>
              </details>
              <details className="bg-white rounded-lg p-6 border border-gray-200">
                <summary className="font-bold text-lg cursor-pointer">
                  Desservez-vous Rocheville et le Vieux Cannet ?
                </summary>
                <p className="mt-4 text-gray-700">
                  Oui — prise en charge et dépose dans tout Le Cannet, y compris
                  Rocheville, le Vieux Cannet et les axes vers Mougins.
                </p>
              </details>
              <details className="bg-white rounded-lg p-6 border border-gray-200">
                <summary className="font-bold text-lg cursor-pointer">
                  Le service est-il disponible la nuit au Cannet ?
                </summary>
                <p className="mt-4 text-gray-700">
                  Oui, 24h/24 et 7j/7 — retours de soirée, vols matinaux et
                  trajets urgents.
                </p>
              </details>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-accent text-accent-foreground rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Besoin d&apos;un taxi Le Cannet maintenant ?
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
                Réserver un taxi Le Cannet
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
