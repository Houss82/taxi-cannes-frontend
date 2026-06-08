// app/secteurs/page.jsx — NOS SECTEURS CANNES

export const metadata = {
  title: "Nos Secteurs | Taxi Cannes | Quartiers Desservis | Taxi Cannes",
  description:
    "Découvrez les quartiers de Cannes desservis par Taxi Cannes : Boulevard Carnot, La Croisette, Le Suquet. Service de taxi disponible 24h/24 dans tous les secteurs de Cannes.",
  keywords:
    "secteurs taxi cannes, quartiers cannes, taxi boulevard carnot, taxi croisette, taxi suquet cannes, zones desservies cannes",
  alternates: {
    canonical: "https://www.cannestaxi.fr/secteurs",
  },
};

import Button from "@/app/components/ui/Button";
import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Secteurs() {
  const secteurs = [
    {
      name: "Boulevard Carnot",
      description: "Quartier résidentiel et commercial au cœur de Cannes",
      href: "/secteurs/boulevard-carnot",
      image: "/taxi-boulevard-carnot-cannes.png",
      features: [
        "Commerces et services de proximité",
        "Restaurants et cafés",
        "Hôtels et résidences",
        "Proche centre-ville et Croisette",
      ],
    },
    {
      name: "La Croisette",
      description: "Quartier prestigieux avec palaces et hôtels de luxe",
      href: "/secteurs/la-croisette",
      image: "/taxi-la-croisette-cannes.png",
      features: [
        "Palaces (Carlton, Martinez, Majestic)",
        "Palais des Festivals",
        "Plages privées",
        "Boutiques de luxe",
      ],
    },
    {
      name: "Le Suquet",
      description:
        "Quartier historique avec marché Forville et vues panoramiques",
      href: "/secteurs/le-suquet",
      image: "/taxi-cannes-le-suquet.png",
      features: [
        "Vieille ville et château",
        "Marché Forville",
        "Restaurants typiques",
        "Vue panoramique sur la baie",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden pt-20">
        <Image
          src="/taxi-cannes.png"
          alt="Nos secteurs Cannes - Taxi Cannes"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white max-w-3xl px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-balance">
            Nos Secteurs à Cannes
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 text-balance">
            Service de taxi disponible 24h/24 dans tous les quartiers de Cannes
          </p>
        </div>
      </section>

      {/* Secteurs Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Quartiers desservis par Taxi Cannes
            </h2>
            <p className="text-lg text-muted-foreground">
              Nous assurons un service de transport professionnel dans tous les
              secteurs de Cannes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {secteurs.map((secteur) => (
              <div
                key={secteur.href}
                className="bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
              >
                <div className="relative h-64">
                  <Image
                    src={secteur.image}
                    alt={`Taxi ${secteur.name} Cannes`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-6 h-6 text-accent" />
                    <h3 className="text-2xl font-bold">{secteur.name}</h3>
                  </div>
                  <p className="text-gray-700 mb-6">{secteur.description}</p>
                  <ul className="space-y-2 mb-6">
                    {secteur.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-700"
                      >
                        <ArrowRight className="w-4 h-4 text-accent mt-1 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={secteur.href}>
                    <Button className="w-full bg-accent text-accent-foreground hover:opacity-90">
                      Découvrir le secteur
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Besoin d&apos;un taxi dans votre secteur ?
          </h2>
          <p className="text-lg mb-8 text-accent-foreground/90">
            Réservez votre trajet en quelques clics et recevez une confirmation
            immédiate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/reservation"
              className="bg-white text-accent hover:opacity-90 px-8 py-6 text-lg"
            >
              Réserver un taxi
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
      </section>
    </main>
  );
}
