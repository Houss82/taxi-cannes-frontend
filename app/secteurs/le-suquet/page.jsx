// app/secteurs/le-suquet/page.jsx — TAXI LE SUQUET CANNES

export const metadata = {
  title:
    "Taxi Le Suquet Cannes | Service 24h/24 | Quartier Historique | Taxi Cannes",
  description:
    "Service de taxi Le Suquet Cannes disponible 24h/24. Transport vers le quartier historique, Forville, restaurants et points de vue. Réservez votre taxi vieille ville Cannes.",
  keywords:
    "taxi le suquet cannes, taxi suquet cannes, taxi vieille ville cannes, transport suquet, taxi forville cannes",
  alternates: {
    canonical: "https://www.cannestaxi.fr/secteurs/le-suquet",
  },
};

import Button from "@/app/components/ui/Button";
import {
  Camera,
  Car,
  Castle,
  Clock,
  MapPin,
  Phone,
  ShoppingBag,
  UtensilsCrossed,
} from "lucide-react";
import Image from "next/image";

export default function LeSuquet() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <Image
          src="/taxi-cannes-le-suquet.png"
          alt="Taxi Le Suquet Cannes - Service de transport quartier historique"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white max-w-3xl px-6">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-accent/20 rounded-full border border-accent/30">
            <Castle className="w-5 h-5 text-accent" />
            <span className="text-sm font-bold text-white uppercase tracking-wider">
              Quartier Historique
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-balance">
            Taxi Le Suquet Cannes
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 text-balance">
            Service de taxi disponible 24h/24 pour le quartier historique du
            Suquet à Cannes
          </p>
          <Button
            href="/reservation"
            size="lg"
            className="bg-accent text-accent-foreground hover:opacity-90 px-8 py-6 text-lg"
          >
            Réserver un taxi Le Suquet
          </Button>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: Castle,
                label: "Vieille Ville",
                desc: "Quartier historique emblématique",
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
                icon: Camera,
                label: "Vues panoramiques",
                desc: "Accès aux spots photo",
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
              Taxi Le Suquet – Service local officiel 24h/24
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nous sommes une entreprise de taxi locale à Cannes qui dessert le
              quartier du Suquet. Nous assurons les trajets en taxi vers et
              depuis le Suquet, la place Forville, les restaurants, le musée et
              les points de vue panoramiques. Service de taxi disponible 24h/24
              et 7j/7 sur Cannes et les Alpes-Maritimes.
            </p>
          </div>

          {/* Présentation du quartier */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Le Suquet à Cannes : quartier historique et panoramique
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Le <strong>Suquet</strong> est le quartier historique de Cannes,
                perché sur la colline à 66 mètres d&apos;altitude. C&apos;est le
                berceau de la ville, avec ses ruelles pavées, ses maisons
                colorées et la tour du château médiéval qui domine la baie. Le
                Suquet offre le panorama le plus spectaculaire sur la Croisette,
                la Méditerranée et les îles de Lérins.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Le quartier abrite le <strong>Marché Forville</strong>,
                l&apos;un des marchés les plus animés de Cannes, ainsi
                qu&apos;une concentration de restaurants typiques et de
                terrasses avec vue. Les rues étroites et pentues rendent le taxi
                particulièrement pratique pour les visiteurs et les résidents.
              </p>
            </div>
          </div>

          {/* Points d'intérêt */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">
              Points d&apos;intérêt du Suquet
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <Castle className="w-8 h-8 mb-4 text-accent" />
                <h3 className="text-xl font-bold mb-3">Patrimoine et Vue</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Tour du château et musée de la Castre</li>
                  <li>• Église Notre-Dame de l&apos;Espérance</li>
                  <li>• Vue panoramique sur la baie de Cannes</li>
                  <li>• Ruelles pavées et maisons colorées</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <ShoppingBag className="w-8 h-8 mb-4 text-accent" />
                <h3 className="text-xl font-bold mb-3">Marché Forville</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Marché alimentaire couvert historique</li>
                  <li>• Fruits, légumes, poissons frais</li>
                  <li>• Produits régionaux et artisanat</li>
                  <li>• Ouvert lundi-samedi 7h-13h</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <UtensilsCrossed className="w-8 h-8 mb-4 text-accent" />
                <h3 className="text-xl font-bold mb-3">Restaurants</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Restaurants provençaux typiques</li>
                  <li>• Terrasses avec vue sur la baie</li>
                  <li>• Brasseries et bistrots</li>
                  <li>• Ambiance authentique et conviviale</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <MapPin className="w-8 h-8 mb-4 text-accent" />
                <h3 className="text-xl font-bold mb-3">Accès et Proximité</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• À 5 minutes de la Croisette</li>
                  <li>• À 10 minutes du Palais des Festivals</li>
                  <li>• Proche du centre-ville et Rue d&apos;Antibes</li>
                  <li>• Rues étroites : taxi recommandé</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Service de taxi */}
          <div className="mb-16 bg-white rounded-xl p-8 border-2 border-accent/30 shadow-lg">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Service de taxi Le Suquet Cannes
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>Taxi Cannes</strong> assure un service de transport
                professionnel vers et depuis le Suquet. Les rues pentues et
                étroites du quartier historique rendent le taxi particulièrement
                pratique pour les visiteurs, les personnes à mobilité réduite,
                ou ceux qui font leurs courses au marché Forville.
              </p>
              <h3 className="text-2xl font-bold mb-4 mt-8">
                Nos services pour le Suquet
              </h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-accent mt-1 shrink-0" />
                  <span>
                    <strong>Transport vers le marché Forville</strong> : Dépose
                    devant le marché avec aide au chargement des courses
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-accent mt-1 shrink-0" />
                  <span>
                    <strong>Transport vers les restaurants</strong> : Dépose
                    directe au pied du Suquet ou dans les ruelles accessibles
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-accent mt-1 shrink-0" />
                  <span>
                    <strong>Visite du musée de la Castre</strong> : Accès au
                    château et aux points de vue panoramiques
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-accent mt-1 shrink-0" />
                  <span>
                    <strong>Transferts Croisette / centre-ville</strong> :
                    Liaison rapide entre le Suquet et le reste de Cannes
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-accent mt-1 shrink-0" />
                  <span>
                    <strong>Transferts aéroport</strong> : Depuis le Suquet vers
                    l&apos;aéroport Nice Côte d&apos;Azur
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-accent mt-1 shrink-0" />
                  <span>
                    <strong>Service de nuit</strong> : Retours de soirée depuis
                    les restaurants du Suquet
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Comment réserver */}
          <div className="mb-16 bg-accent/10 rounded-xl p-8 border border-accent/20">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Comment réserver votre taxi Le Suquet ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Phone className="w-6 h-6 text-accent" />
                  Par téléphone
                </h3>
                <p className="text-gray-700 mb-4">
                  Appelez-nous au{" "}
                  <strong className="text-accent">+33 6 25 61 73 11</strong>{" "}
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
              Questions fréquentes – Taxi Le Suquet
            </h2>
            <div className="space-y-6">
              <details className="bg-white rounded-lg p-6 border border-gray-200">
                <summary className="font-bold text-lg cursor-pointer">
                  Où se fait-on déposer au Suquet ?
                </summary>
                <p className="mt-4 text-gray-700">
                  Nous vous déposons au pied du Suquet (place du Suquet, rue
                  Saint-Antoine) ou dans les ruelles accessibles en voiture. Les
                  rues les plus hautes sont piétonnes ; le taxi vous dépose au
                  point le plus proche de votre destination.
                </p>
              </details>
              <details className="bg-white rounded-lg p-6 border border-gray-200">
                <summary className="font-bold text-lg cursor-pointer">
                  Peut-on réserver un taxi pour le marché Forville ?
                </summary>
                <p className="mt-4 text-gray-700">
                  Oui, nous proposons un service avec attente pour vos courses
                  au marché Forville. Le chauffeur vous dépose devant le marché
                  et vous attend pendant vos achats. Tarif sur devis selon la
                  durée d&apos;attente.
                </p>
              </details>
              <details className="bg-white rounded-lg p-6 border border-gray-200">
                <summary className="font-bold text-lg cursor-pointer">
                  Combien coûte un trajet Croisette → Suquet ?
                </summary>
                <p className="mt-4 text-gray-700">
                  Le trajet depuis la Croisette vers le Suquet coûte environ{" "}
                  <strong>8€ à 12€</strong> pour une durée de 3 à 5 minutes.
                  Contactez-nous pour un devis précis.
                </p>
              </details>
              <details className="bg-white rounded-lg p-6 border border-gray-200">
                <summary className="font-bold text-lg cursor-pointer">
                  Le Suquet est-il accessible en taxi la nuit ?
                </summary>
                <p className="mt-4 text-gray-700">
                  Oui, notre service fonctionne 24h/24 et 7j/7. Nous assurons
                  les retours de soirée depuis les restaurants du Suquet, même
                  tard dans la nuit.
                </p>
              </details>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-accent text-accent-foreground rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Besoin d&apos;un taxi Le Suquet maintenant ?
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
                Réserver un taxi Le Suquet
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
              📞 <strong>+33 6 25 61 73 11</strong> | ✉️{" "}
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
