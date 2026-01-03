// app/secteurs/la-croisette/page.jsx — TAXI LA CROISETTE CANNES

export const metadata = {
  title:
    "Taxi La Croisette Cannes | Service 24h/24 Palaces & Hôtels | Taxi Cannes",
  description:
    "Service de taxi La Croisette Cannes disponible 24h/24. Transport vers les palaces (Carlton, Martinez, Majestic), hôtels de luxe, plages privées et Palais des Festivals. Réservez votre taxi.",
  keywords:
    "taxi la croisette cannes, taxi croisette, taxi palaces cannes, taxi carlton martinez majestic, transport croisette cannes, taxi hôtels croisette",
  alternates: {
    canonical: "https://www.cannestaxi.fr/secteurs/la-croisette",
  },
};

import Button from "@/app/components/ui/Button";
import { Award, Building2, Car, Clock, Phone, Star } from "lucide-react";
import Image from "next/image";

export default function LaCroisette() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <Image
          src="/taxi-la-croisette-cannes.png"
          alt="Taxi La Croisette Cannes - Service de transport vers les palaces et hôtels de luxe"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white max-w-3xl px-6">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-accent/20 rounded-full border border-accent/30">
            <Star className="w-5 h-5 text-accent" />
            <span className="text-sm font-bold text-white uppercase tracking-wider">
              Quartier Prestige
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-balance">
            Taxi La Croisette Cannes
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 text-balance">
            Service de taxi premium disponible 24h/24 pour les palaces, hôtels
            de luxe et plages privées de la Croisette
          </p>
          <Button
            href="/reservation"
            size="lg"
            className="bg-accent text-accent-foreground hover:opacity-90 px-8 py-6 text-lg"
          >
            Réserver un taxi La Croisette
          </Button>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: Star,
                label: "Service Premium",
                desc: "Palaces et hôtels de luxe",
              },
              {
                icon: Clock,
                label: "24h/24",
                desc: "Service disponible",
              },
              {
                icon: Award,
                label: "Chauffeurs Professionnels",
                desc: "Expérience et discrétion",
              },
              {
                icon: Car,
                label: "Véhicules Haut de Gamme",
                desc: "Mercedes et Tesla",
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
              Taxi La Croisette – Service local officiel 24h/24
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nous sommes une entreprise de taxi locale à Cannes qui dessert le
              quartier prestigieux de la Croisette. Nous assurons les trajets en
              taxi vers et depuis la Croisette, ses palaces (Carlton, Martinez,
              Majestic), hôtels de luxe, plages privées et le Palais des
              Festivals. Service de taxi disponible 24h/24 et 7j/7 sur Cannes et
              les Alpes-Maritimes.
            </p>
          </div>

          {/* Présentation du quartier */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              La Croisette à Cannes : l&apos;emblème de la Côte d&apos;Azur
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Le <strong>Boulevard de la Croisette</strong> est l&apos;artère
                la plus prestigieuse de Cannes, s&apos;étendant sur 2 kilomètres
                le long de la Méditerranée. Cette promenade emblématique abrite
                les plus grands palaces de la Côte d&apos;Azur, des hôtels de
                luxe, des plages privées, et constitue le cœur battant de la vie
                cannoise, notamment pendant le Festival de Cannes.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                La Croisette est également le lieu de rendez-vous du{" "}
                <strong>Palais des Festivals et des Congrès</strong>, qui
                accueille chaque année le Festival de Cannes, le MIPIM, le Lions
                Festival, et de nombreux autres événements internationaux. Ce
                quartier d&apos;exception attire des millions de visiteurs
                chaque année et représente l&apos;excellence du tourisme de luxe
                français.
              </p>
            </div>
          </div>

          {/* Palaces et hôtels */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">
              Palaces et hôtels de luxe de la Croisette
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <Star className="w-8 h-8 mb-4 text-accent" />
                <h3 className="text-xl font-bold mb-3">Hôtel Carlton Cannes</h3>
                <p className="text-gray-700 mb-3">
                  L&apos;un des palaces les plus emblématiques de la Croisette,
                  situé au numéro 58. Architecture Belle Époque, plage privée,
                  restaurants étoilés.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Adresse :</strong> 58 Boulevard de la Croisette, 06400
                  Cannes
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <Star className="w-8 h-8 mb-4 text-accent" />
                <h3 className="text-xl font-bold mb-3">Hôtel Martinez</h3>
                <p className="text-gray-700 mb-3">
                  Palace 5 étoiles situé au numéro 73 de la Croisette. Vue
                  panoramique sur la baie de Cannes, spa de luxe, restaurants
                  gastronomiques.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Adresse :</strong> 73 Boulevard de la Croisette, 06400
                  Cannes
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <Star className="w-8 h-8 mb-4 text-accent" />
                <h3 className="text-xl font-bold mb-3">
                  Hôtel Majestic Barrière
                </h3>
                <p className="text-gray-700 mb-3">
                  Palace 5 étoiles situé au numéro 14 de la Croisette, face au
                  Palais des Festivals. Casino, spa, restaurants étoilés.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Adresse :</strong> 14 Boulevard de la Croisette, 06400
                  Cannes
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <Star className="w-8 h-8 mb-4 text-accent" />
                <h3 className="text-xl font-bold mb-3">
                  Autres hôtels de luxe
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Hôtel Barrière Le Gray d&apos;Albion</li>
                  <li>• Grand Hôtel Cannes</li>
                  <li>• Hôtel JW Marriott Cannes</li>
                  <li>• Hôtel Le Grand Hôtel</li>
                  <li>• Hôtel Splendid</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Points d'intérêt */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">
              Points d&apos;intérêt de la Croisette
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <Building2 className="w-8 h-8 mb-4 text-accent" />
                <h3 className="text-xl font-bold mb-3">
                  Palais des Festivals et des Congrès
                </h3>
                <p className="text-gray-700 mb-3">
                  Le lieu emblématique du Festival de Cannes et de nombreux
                  congrès internationaux. Situé face à la Méditerranée, il
                  accueille des milliers de visiteurs chaque année.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Adresse :</strong> 1 Boulevard de la Croisette, 06400
                  Cannes
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <Star className="w-8 h-8 mb-4 text-accent" />
                <h3 className="text-xl font-bold mb-3">Plages Privées</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Plages des palaces (Carlton, Martinez, Majestic)</li>
                  <li>• Plages privées avec restaurants</li>
                  <li>• Clubs de plage exclusifs</li>
                  <li>• Accès VIP et services premium</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <Building2 className="w-8 h-8 mb-4 text-accent" />
                <h3 className="text-xl font-bold mb-3">Boutiques de Luxe</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Boutiques de haute couture</li>
                  <li>• Bijouteries et horlogeries</li>
                  <li>• Parfumeries de luxe</li>
                  <li>• Galeries d&apos;art</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <Star className="w-8 h-8 mb-4 text-accent" />
                <h3 className="text-xl font-bold mb-3">
                  Restaurants Gastronomiques
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Restaurants étoilés Michelin</li>
                  <li>• Restaurants des palaces</li>
                  <li>• Brasseries de prestige</li>
                  <li>• Bars à cocktails exclusifs</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Service de taxi */}
          <div className="mb-16 bg-white rounded-xl p-8 border-2 border-accent/30 shadow-lg">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Service de taxi La Croisette Cannes
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>Taxi Cannes</strong> assure un service de transport
                premium vers et depuis la Croisette. Nos chauffeurs
                professionnels connaissent parfaitement les palaces, hôtels de
                luxe, et les points d&apos;intérêt de la Croisette. Nous
                proposons un service discret, ponctuel et adapté aux exigences
                de nos clients résidant dans les palaces ou fréquentant les
                événements de la Croisette.
              </p>
              <h3 className="text-2xl font-bold mb-4 mt-8">
                Nos services pour la Croisette
              </h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-accent mt-1 shrink-0" />
                  <span>
                    <strong>Transport depuis les palaces</strong> : Prise en
                    charge à l&apos;hôtel (Carlton, Martinez, Majestic, etc.)
                    avec attente dans le hall si nécessaire
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-accent mt-1 shrink-0" />
                  <span>
                    <strong>Transferts aéroport</strong> : Depuis la Croisette
                    vers l&apos;aéroport Nice Côte d&apos;Azur avec suivi de vol
                    en temps réel
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-accent mt-1 shrink-0" />
                  <span>
                    <strong>Transport vers le Palais des Festivals</strong> :
                    Service pour les événements et congrès (Festival de Cannes,
                    MIPIM, Lions, etc.)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-accent mt-1 shrink-0" />
                  <span>
                    <strong>Service de nuit</strong> : Transport disponible même
                    tard dans la nuit pour vos retours de soirée depuis les
                    restaurants et bars de la Croisette
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-accent mt-1 shrink-0" />
                  <span>
                    <strong>Transport vers les plages privées</strong> : Dépose
                    directement sur les plages des palaces et clubs de plage
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-accent mt-1 shrink-0" />
                  <span>
                    <strong>Service VIP</strong> : Véhicules haut de gamme
                    (Mercedes, Tesla) pour une expérience premium
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-accent mt-1 shrink-0" />
                  <span>
                    <strong>Transport depuis la gare SNCF</strong> : Liaison
                    entre la gare et les hôtels de la Croisette avec assistance
                    bagages
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Avantages */}
          <div className="mb-16 bg-accent/10 rounded-xl p-8 border border-accent/20">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Pourquoi choisir notre service de taxi pour la Croisette ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Award className="w-6 h-6 text-accent" />
                  Connaissance parfaite du quartier
                </h3>
                <p className="text-gray-700">
                  Nos chauffeurs connaissent tous les palaces, hôtels,
                  restaurants et points d&apos;intérêt de la Croisette. Ils vous
                  déposent exactement où vous le souhaitez.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Star className="w-6 h-6 text-accent" />
                  Service discret et professionnel
                </h3>
                <p className="text-gray-700">
                  Nous respectons la confidentialité de nos clients et proposons
                  un service adapté aux exigences des palaces et hôtels de luxe.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Car className="w-6 h-6 text-accent" />
                  Véhicules haut de gamme
                </h3>
                <p className="text-gray-700">
                  Notre flotte de Mercedes et Tesla s&apos;adapte à vos besoins
                  : berlines premium, SUV de luxe, ou véhicules spacieux pour
                  groupes.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-accent" />
                  Disponibilité 24h/24
                </h3>
                <p className="text-gray-700">
                  Service disponible jour et nuit, y compris pendant les
                  événements majeurs comme le Festival de Cannes.
                </p>
              </div>
            </div>
          </div>

          {/* Comment réserver */}
          <div className="mb-16 bg-white rounded-xl p-8 border border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Comment réserver votre taxi La Croisette ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-accent/10 rounded-lg p-6">
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
              <div className="bg-accent/10 rounded-lg p-6">
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
              Questions fréquentes – Taxi La Croisette
            </h2>
            <div className="space-y-6">
              <details className="bg-white rounded-lg p-6 border border-gray-200">
                <summary className="font-bold text-lg cursor-pointer">
                  Combien coûte un trajet depuis l&apos;aéroport Nice vers la
                  Croisette ?
                </summary>
                <p className="mt-4 text-gray-700">
                  Le tarif pour un transfert depuis l&apos;aéroport Nice Côte
                  d&apos;Azur vers la Croisette est de{" "}
                  <strong>45€ à 60€</strong> selon le trafic et l&apos;hôtel
                  exact. Prix fixe annoncé à l&apos;avance, sans surprise.
                </p>
              </details>
              <details className="bg-white rounded-lg p-6 border border-gray-200">
                <summary className="font-bold text-lg cursor-pointer">
                  Peut-on réserver un taxi pour le Festival de Cannes ?
                </summary>
                <p className="mt-4 text-gray-700">
                  Oui, nous proposons un service spécialisé pendant le Festival
                  de Cannes avec réservation à l&apos;avance recommandée. Nos
                  chauffeurs connaissent parfaitement les contraintes de
                  circulation et les horaires des événements.
                </p>
              </details>
              <details className="bg-white rounded-lg p-6 border border-gray-200">
                <summary className="font-bold text-lg cursor-pointer">
                  Le service est-il disponible pendant les congrès (MIPIM,
                  Lions) ?
                </summary>
                <p className="mt-4 text-gray-700">
                  Oui, nous assurons un service renforcé pendant tous les grands
                  congrès de Cannes. Nous recommandons de réserver à
                  l&apos;avance pour garantir votre transport.
                </p>
              </details>
              <details className="bg-white rounded-lg p-6 border border-gray-200">
                <summary className="font-bold text-lg cursor-pointer">
                  Peut-on réserver un véhicule premium pour un événement sur la
                  Croisette ?
                </summary>
                <p className="mt-4 text-gray-700">
                  Oui, nous proposons des véhicules haut de gamme (Mercedes
                  Classe S, Tesla Model S) pour vos événements spéciaux.
                  Contactez-nous pour un devis personnalisé.
                </p>
              </details>
              <details className="bg-white rounded-lg p-6 border border-gray-200">
                <summary className="font-bold text-lg cursor-pointer">
                  Combien de temps faut-il pour aller de la Croisette au
                  centre-ville ?
                </summary>
                <p className="mt-4 text-gray-700">
                  Le trajet depuis la Croisette vers le centre-ville (Suquet,
                  Marché Forville) prend environ
                  <strong> 5 à 10 minutes</strong> selon le trafic. La Croisette
                  est très proche du centre historique.
                </p>
              </details>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-accent text-accent-foreground rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Besoin d&apos;un taxi La Croisette maintenant ?
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
                Réserver un taxi La Croisette
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
