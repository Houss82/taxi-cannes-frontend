// app/services/cannes-monaco/page.jsx — CANNES MONACO

export const metadata = {
  title: "Taxi Cannes Monaco | Transfert Premium Côte d'Azur | Taxi Cannes",
  description:
    "Service de taxi Cannes Monaco disponible 24h/24. Trajet confortable vers la Principauté, véhicules premium, WiFi à bord. Réservez votre transfert Cannes Monaco.",
  keywords:
    "taxi cannes monaco, transfert cannes monaco, taxi cannes principauté monaco, navette cannes monaco, chauffeur privé cannes monaco",
  alternates: {
    canonical: "https://www.cannestaxi.fr/services/cannes-monaco",
  },
};

import { MapPin, Clock, Shield, CheckCircle, Compass, Users } from "lucide-react";
import Image from "next/image";
import Button from "@/app/components/ui/Button";

export default function CannesMonaco() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <Image
          src="/yacht-monaco.jpg"
          alt="Taxi Cannes Monaco - Transfert vers la Principauté"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white max-w-3xl px-6">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-accent/20 rounded-full border border-accent/30">
            <Compass className="w-5 h-5 text-accent" />
            <span className="text-sm font-bold text-white uppercase tracking-wider">
              Longue Distance
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-balance">
            Cannes → Monaco
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 text-balance">
            Transfert premium vers la Principauté de Monaco depuis Cannes
          </p>
          <Button
            href="/reservation"
            size="lg"
            className="bg-accent text-accent-foreground hover:opacity-90 px-8 py-6 text-lg"
          >
            Réserver un transfert Monaco
          </Button>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: Clock,
                label: "45 minutes",
                desc: "Temps de trajet",
              },
              {
                icon: MapPin,
                label: "50 km",
                desc: "Distance",
              },
              {
                icon: Shield,
                label: "Confort",
                desc: "Assuré",
              },
              {
                icon: Users,
                label: "24h/24",
                desc: "Disponible",
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
      <section className="py-24 bg-linear-to-b from-accent/5 via-white to-accent/5 relative overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          {/* En-tête centré */}
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              <span className="text-sm font-bold text-accent uppercase tracking-wider">
                Trajet Premium
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Taxi Cannes Monaco
              </span>
            </h2>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-1 w-16 bg-linear-to-r from-transparent to-accent rounded-full"></div>
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <div className="h-1 w-24 bg-linear-to-r from-accent via-primary to-accent rounded-full"></div>
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <div className="h-1 w-16 bg-linear-to-r from-primary to-transparent rounded-full"></div>
            </div>
          </div>

          {/* Contenu */}
          <div className="space-y-10 text-lg leading-relaxed">
            {/* Premier paragraphe */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100">
              <p className="text-gray-800 mb-0 leading-relaxed text-lg">
                Notre service de{" "}
                <strong className="font-bold text-accent text-xl">
                  taxi Cannes Monaco
                </strong>{" "}
                relie deux destinations emblématiques de la Côte d&apos;Azur en
                toute sérénité. Le trajet de{" "}
                <strong className="font-bold text-primary text-lg">
                  50 kilomètres
                </strong>{" "}
                entre Cannes et la Principauté de Monaco s&apos;effectue en
                environ{" "}
                <strong className="font-bold text-primary text-lg">
                  45 minutes
                </strong>
                , en empruntant la magnifique route côtière qui longe la Méditerranée.
              </p>
            </div>

            {/* Deuxième paragraphe */}
            <div className="relative pl-6 border-l-4 border-accent bg-linear-to-r from-accent/5 to-transparent py-6 rounded-r-lg">
              <p className="text-gray-800 leading-relaxed text-lg">
                Que vous vous rendiez à Monaco pour les affaires, le Grand Prix,
                un événement au Casino ou simplement pour découvrir la
                Principauté, nos chauffeurs connaissent parfaitement les
                itinéraires et les horaires de circulation. Ils adaptent le trajet
                selon vos besoins et vous garantissent une arrivée ponctuelle à
                destination.
              </p>
            </div>

            {/* Avantages */}
            <div className="bg-linear-to-r from-accent/10 via-white to-primary/10 border-2 border-accent/30 rounded-2xl p-8 md:p-10 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -ml-16 -mb-16"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                  Pourquoi choisir notre taxi Cannes Monaco ?
                </h3>
                <ul className="space-y-4 text-gray-800">
                  {[
                    "Trajet confortable dans véhicules premium (Mercedes, Tesla)",
                    "Connaissance des itinéraires et horaires optimaux",
                    "WiFi gratuit à bord pour rester connecté",
                    "Service disponible 24h/24, 7j/7",
                    "Ponctualité garantie pour vos rendez-vous",
                    "Trajets réguliers possibles avec tarifs préférentiels",
                    "Arrêts possibles en cours de route (Nice, Antibes)",
                    "Service discret et professionnel",
                  ].map((advantage, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{advantage}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Destinations */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-gray-200 shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Destinations desservies depuis Cannes
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    name: "Monaco-Ville",
                    desc: "Le Rocher et le Palais Princier",
                  },
                  {
                    name: "Monte-Carlo",
                    desc: "Casino, hôtels de luxe",
                  },
                  {
                    name: "Port Hercule",
                    desc: "Port de Monaco",
                  },
                  {
                    name: "Circuit de Monaco",
                    desc: "Pour le Grand Prix",
                  },
                ].map((destination, i) => (
                  <div
                    key={i}
                    className="p-4 bg-gray-50 rounded-lg border border-gray-200"
                  >
                    <h4 className="font-bold text-accent mb-2">
                      {destination.name}
                    </h4>
                    <p className="text-sm text-gray-700">{destination.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Dernier paragraphe */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-gray-200 shadow-md">
              <p className="text-gray-800 leading-relaxed text-lg">
                Que vous effectuiez un trajet ponctuel ou que vous ayez besoin
                d&apos;un service régulier entre Cannes et Monaco, notre équipe
                s&apos;adapte à vos besoins. Réservez votre{" "}
                <strong className="font-bold text-primary text-lg">
                  transfert Cannes Monaco
                </strong>{" "}
                en ligne ou par téléphone pour garantir votre déplacement dans
                les meilleures conditions.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 pt-8">
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-10 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Réservez votre transfert Cannes Monaco
              </h3>
              <p className="text-lg mb-6 text-primary-foreground/90">
                Service disponible 24h/24. Confort et ponctualité garantis.
              </p>
              <Button
                href="/reservation"
                className="bg-accent text-accent-foreground hover:opacity-90 px-8 py-4 text-lg"
              >
                Réserver maintenant
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

