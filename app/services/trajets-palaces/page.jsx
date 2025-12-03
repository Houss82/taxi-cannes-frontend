// app/services/trajets-palaces/page.jsx — TRAJETS PALACES

export const metadata = {
  title: "Trajets Palaces Cannes | Service VIP Hôtels de Luxe | Taxi Cannes",
  description:
    "Service VIP pour les palaces de Cannes : Majestic, Martinez, Carlton. Taxi premium avec discrétion garantie, service blanc et ponctualité. Réservez votre chauffeur privé.",
  keywords:
    "taxi palaces cannes, taxi majestic cannes, taxi martinez cannes, taxi carlton cannes, service vip cannes, chauffeur privé palaces",
  alternates: {
    canonical: "https://www.cannestaxi.fr/services/trajets-palaces",
  },
};

import { Building2, Star, Shield, CheckCircle, Clock, Users } from "lucide-react";
import Image from "next/image";
import Button from "@/app/components/ui/Button";

export default function TrajetsPalaces() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <Image
          src="/palace-cannes.jpg"
          alt="Trajets Palaces Cannes - Service VIP Taxi Cannes"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white max-w-3xl px-6">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-accent/20 rounded-full border border-accent/30">
            <Star className="w-5 h-5 text-accent" />
            <span className="text-sm font-bold text-white uppercase tracking-wider">
              Service VIP
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-balance">
            Trajets Palaces Cannes
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 text-balance">
            Service premium pour les hôtels de luxe de la Croisette : Majestic,
            Martinez, Carlton
          </p>
          <Button
            href="/reservation"
            size="lg"
            className="bg-accent text-accent-foreground hover:opacity-90 px-8 py-6 text-lg"
          >
            Réserver un service VIP
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
                label: "Service blanc",
                desc: "Prestation premium",
              },
              {
                icon: Shield,
                label: "Discrétion",
                desc: "Garantie absolue",
              },
              {
                icon: Clock,
                label: "Ponctualité",
                desc: "Premium",
              },
              {
                icon: Building2,
                label: "Palaces",
                desc: "Majestic, Martinez, Carlton",
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
                Service Exclusif
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Trajets Palaces Cannes
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
                  taxi pour les palaces de Cannes
                </strong>{" "}
                répond aux exigences des clients des hôtels de luxe de la
                Croisette. Que vous séjourniez au{" "}
                <strong className="font-bold text-primary text-lg">
                  Majestic
                </strong>
                , au{" "}
                <strong className="font-bold text-primary text-lg">
                  Martinez
                </strong>{" "}
                ou au{" "}
                <strong className="font-bold text-primary text-lg">
                  Carlton
                </strong>
                , nous assurons vos déplacements avec la discrétion et le
                professionnalisme que vous attendez.
              </p>
            </div>

            {/* Deuxième paragraphe */}
            <div className="relative pl-6 border-l-4 border-accent bg-linear-to-r from-accent/5 to-transparent py-6 rounded-r-lg">
              <p className="text-gray-800 leading-relaxed text-lg">
                Nos chauffeurs connaissent parfaitement les protocoles des
                palaces et s&apos;adaptent à vos besoins spécifiques. Accueil
                personnalisé, assistance avec les bagages, véhicules impeccables
                et conduite fluide : chaque détail compte pour offrir une
                expérience digne des plus grands établissements de la Côte
                d&apos;Azur.
              </p>
            </div>

            {/* Avantages */}
            <div className="bg-linear-to-r from-accent/10 via-white to-primary/10 border-2 border-accent/30 rounded-2xl p-8 md:p-10 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -ml-16 -mb-16"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                  Service VIP pour les palaces de Cannes
                </h3>
                <ul className="space-y-4 text-gray-800">
                  {[
                    "Discrétion absolue garantie",
                    "Service blanc avec assistance bagages",
                    "Ponctualité premium adaptée aux horaires des palaces",
                    "Véhicules haut de gamme (Mercedes Classe S, Tesla)",
                    "Chauffeurs en tenue professionnelle",
                    "Connaissance des protocoles hôteliers",
                    "Flexibilité pour trajets multiples dans la journée",
                    "Service disponible 24h/24 pour arrivées et départs",
                  ].map((advantage, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{advantage}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Hôtels spécifiques */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-gray-200 shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Palaces desservis à Cannes
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    name: "Hôtel Majestic",
                    desc: "Croisette, face à la mer",
                  },
                  {
                    name: "Hôtel Martinez",
                    desc: "Palace emblématique de Cannes",
                  },
                  {
                    name: "Hôtel Carlton",
                    desc: "Symbole de la Croisette",
                  },
                ].map((hotel, i) => (
                  <div
                    key={i}
                    className="p-4 bg-gray-50 rounded-lg border border-gray-200"
                  >
                    <h4 className="font-bold text-accent mb-2">{hotel.name}</h4>
                    <p className="text-sm text-gray-700">{hotel.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Dernier paragraphe */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-gray-200 shadow-md">
              <p className="text-gray-800 leading-relaxed text-lg">
                Que vous assistiez au Festival de Cannes, à un congrès au Palais
                des Festivals ou que vous profitiez simplement d&apos;un séjour
                dans un palace, notre service de{" "}
                <strong className="font-bold text-primary text-lg">
                  taxi pour les palaces de Cannes
                </strong>{" "}
                s&apos;adapte à votre emploi du temps. Réservez votre chauffeur
                privé pour garantir vos déplacements dans les meilleures
                conditions.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 pt-8">
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-10 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Réservez votre service VIP pour palaces
              </h3>
              <p className="text-lg mb-6 text-primary-foreground/90">
                Service disponible 24h/24. Discrétion et professionnalisme garantis.
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

