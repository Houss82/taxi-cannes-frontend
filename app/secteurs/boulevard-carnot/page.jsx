// app/secteurs/boulevard-carnot/page.jsx — TAXI BOULEVARD CARNOT CANNES

export const metadata = {
  title: "Taxi Boulevard Carnot Cannes | Service 24h/24 | Taxi Cannes",
  description:
    "Service de taxi Boulevard Carnot Cannes disponible 24h/24. Transport vers le quartier résidentiel, commerces, restaurants et hôtels du Boulevard Carnot. Réservez votre taxi.",
  keywords:
    "taxi boulevard carnot cannes, taxi quartier carnot, transport boulevard carnot, taxi cannes carnot, chauffeur boulevard carnot",
  alternates: {
    canonical: "https://www.cannestaxi.fr/secteurs/boulevard-carnot",
  },
};

import Button from "@/app/components/ui/Button";
import {
  Building2,
  Car,
  Clock,
  MapPin,
  Phone,
  ShoppingBag,
  Star,
  UtensilsCrossed,
} from "lucide-react";
import Image from "next/image";

export default function BoulevardCarnot() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <Image
          src="/taxi-boulevard-carnot-cannes.png"
          alt="Taxi Boulevard Carnot Cannes - Service de transport quartier résidentiel"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white max-w-3xl px-6">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-accent/20 rounded-full border border-accent/30">
            <MapPin className="w-5 h-5 text-accent" />
            <span className="text-sm font-bold text-white uppercase tracking-wider">
              Quartier Résidentiel
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-balance">
            Taxi Boulevard Carnot Cannes
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 text-balance">
            Service de taxi disponible 24h/24 pour le quartier résidentiel du
            Boulevard Carnot à Cannes
          </p>
          <Button
            href="/reservation"
            size="lg"
            className="bg-accent text-accent-foreground hover:opacity-90 px-8 py-6 text-lg"
          >
            Réserver un taxi Boulevard Carnot
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
                label: "Quartier Central",
                desc: "Proche centre-ville et Croisette",
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
              Taxi Boulevard Carnot – Service local officiel 24h/24
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nous sommes une entreprise de taxi locale à Cannes qui dessert le
              quartier du Boulevard Carnot. Nous assurons les trajets en taxi
              vers et depuis le Boulevard Carnot, ses commerces, restaurants,
              hôtels et résidences. Service de taxi disponible 24h/24 et 7j/7
              sur Cannes et les Alpes-Maritimes.
            </p>
          </div>

          {/* Présentation du quartier */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Le Boulevard Carnot à Cannes : quartier résidentiel et commercial
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Le <strong>Boulevard Carnot</strong> est l&apos;un des
                principaux axes de circulation de Cannes, reliant le
                centre-ville historique au quartier résidentiel de la
                Californie. Cette artère commerçante et résidentielle
                s&apos;étend sur près de 2 kilomètres et constitue un quartier
                dynamique où se mêlent commerces de proximité, restaurants,
                hôtels et résidences.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Situé à quelques minutes à pied de la Croisette et du Palais des
                Festivals, le Boulevard Carnot offre un accès privilégié aux
                principales attractions de Cannes tout en conservant une
                ambiance résidentielle et commerçante authentique.
              </p>
            </div>
          </div>

          {/* Points d'intérêt */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">
              Points d&apos;intérêt du Boulevard Carnot
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <Building2 className="w-8 h-8 mb-4 text-accent" />
                <h3 className="text-xl font-bold mb-3">
                  Commerces et Services
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Supermarchés et épiceries</li>
                  <li>• Pharmacies et parapharmacies</li>
                  <li>• Banques et services financiers</li>
                  <li>• Coiffeurs et instituts de beauté</li>
                  <li>• Commerces de proximité</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <UtensilsCrossed className="w-8 h-8 mb-4 text-accent" />
                <h3 className="text-xl font-bold mb-3">Restaurants et Cafés</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Restaurants français et internationaux</li>
                  <li>• Brasseries et cafés</li>
                  <li>• Pizzerias et restaurants italiens</li>
                  <li>• Restaurants asiatiques</li>
                  <li>• Bars et terrasses</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <Building2 className="w-8 h-8 mb-4 text-accent" />
                <h3 className="text-xl font-bold mb-3">Hôtels et Résidences</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Hôtels 3 et 4 étoiles</li>
                  <li>• Résidences de tourisme</li>
                  <li>• Appartements de location</li>
                  <li>• Résidences secondaires</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <ShoppingBag className="w-8 h-8 mb-4 text-accent" />
                <h3 className="text-xl font-bold mb-3">Accès et Proximité</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• À 5 minutes de la Croisette</li>
                  <li>• À 10 minutes du Palais des Festivals</li>
                  <li>• Proche de la gare SNCF</li>
                  <li>• Accès facile aux plages</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Service de taxi */}
          <div className="mb-16 bg-white rounded-xl p-8 border-2 border-accent/30 shadow-lg">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Service de taxi Boulevard Carnot Cannes
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>Taxi Cannes</strong> assure un service de transport
                professionnel vers et depuis le Boulevard Carnot. Que vous
                résidiez dans le quartier, que vous y travailliez, ou que vous
                souhaitiez vous y rendre pour faire vos courses ou dîner, notre
                service de taxi vous accompagne 24h/24 et 7j/7.
              </p>
              <h3 className="text-2xl font-bold mb-4 mt-8">
                Nos services pour le Boulevard Carnot
              </h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-accent mt-1 shrink-0" />
                  <span>
                    <strong>Transport depuis votre résidence</strong> : Prise en
                    charge à votre domicile ou résidence sur le Boulevard Carnot
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-accent mt-1 shrink-0" />
                  <span>
                    <strong>Transferts vers les commerces</strong> : Dépose
                    devant les magasins et supermarchés du quartier
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-accent mt-1 shrink-0" />
                  <span>
                    <strong>Transport vers les restaurants</strong> : Service
                    pour vos sorties gastronomiques sur le Boulevard Carnot
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-accent mt-1 shrink-0" />
                  <span>
                    <strong>Transferts aéroport</strong> : Depuis le Boulevard
                    Carnot vers l&apos;aéroport Nice Côte d&apos;Azur
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-accent mt-1 shrink-0" />
                  <span>
                    <strong>Transport vers la Croisette</strong> : Liaison
                    rapide entre le Boulevard Carnot et la Croisette
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-accent mt-1 shrink-0" />
                  <span>
                    <strong>Service de nuit</strong> : Transport disponible même
                    tard dans la nuit pour vos retours de soirée
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Comment réserver */}
          <div className="mb-16 bg-accent/10 rounded-xl p-8 border border-accent/20">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Comment réserver votre taxi Boulevard Carnot ?
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
              Questions fréquentes – Taxi Boulevard Carnot
            </h2>
            <div className="space-y-6">
              <details className="bg-white rounded-lg p-6 border border-gray-200">
                <summary className="font-bold text-lg cursor-pointer">
                  Combien coûte un trajet vers le Boulevard Carnot depuis la
                  Croisette ?
                </summary>
                <p className="mt-4 text-gray-700">
                  Le tarif dépend de la distance exacte et du trafic. Pour un
                  trajet depuis la Croisette vers le Boulevard Carnot, comptez
                  environ <strong>15€ à 25€</strong>. Contactez-nous pour un
                  devis précis.
                </p>
              </details>
              <details className="bg-white rounded-lg p-6 border border-gray-200">
                <summary className="font-bold text-lg cursor-pointer">
                  Peut-on réserver un taxi pour faire ses courses sur le
                  Boulevard Carnot ?
                </summary>
                <p className="mt-4 text-gray-700">
                  Oui, nous proposons un service avec attente pour vos courses.
                  Le chauffeur vous dépose devant les commerces et vous attend
                  pendant vos achats. Tarif sur devis selon la durée
                  d&apos;attente.
                </p>
              </details>
              <details className="bg-white rounded-lg p-6 border border-gray-200">
                <summary className="font-bold text-lg cursor-pointer">
                  Le service est-il disponible la nuit sur le Boulevard Carnot ?
                </summary>
                <p className="mt-4 text-gray-700">
                  Oui, notre service fonctionne 24h/24 et 7j/7, y compris la
                  nuit. Nous assurons les retours de soirée depuis les
                  restaurants et bars du Boulevard Carnot.
                </p>
              </details>
              <details className="bg-white rounded-lg p-6 border border-gray-200">
                <summary className="font-bold text-lg cursor-pointer">
                  Combien de temps faut-il pour aller du Boulevard Carnot à
                  l&apos;aéroport Nice ?
                </summary>
                <p className="mt-4 text-gray-700">
                  Le trajet depuis le Boulevard Carnot vers l&apos;aéroport Nice
                  Côte d&apos;Azur prend environ
                  <strong> 30 à 40 minutes</strong> selon le trafic. Nous
                  recommandons de réserver à l&apos;avance pour les transferts
                  aéroport.
                </p>
              </details>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-accent text-accent-foreground rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Besoin d&apos;un taxi Boulevard Carnot maintenant ?
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
                Réserver un taxi Boulevard Carnot
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
