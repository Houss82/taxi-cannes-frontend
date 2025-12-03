// app/services/transfert-aeroport-nice-cannes/page.jsx — TRANSFERT AÉROPORT NICE CANNES

export const metadata = {
  title: "Transfert Aéroport Nice Cannes | Taxi Premium 24h/24 | Taxi Cannes",
  description:
    "Service de transfert aéroport Nice-Cannes disponible 24h/24. Prix fixe, chauffeur à l'accueil, suivi vol en temps réel. Réservez votre taxi Cannes aéroport Nice.",
  keywords:
    "transfert aéroport nice cannes, taxi aéroport nice cannes, navette aéroport nice cannes, taxi cannes aéroport, transfert nice cannes",
  alternates: {
    canonical: "https://www.cannestaxi.fr/services/transfert-aeroport-nice-cannes",
  },
};

import { Plane, Clock, Shield, CheckCircle, MapPin, Users } from "lucide-react";
import Image from "next/image";
import Button from "@/app/components/ui/Button";

export default function TransfertAeroportNiceCannes() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <Image
          src="/aeroport-nice-cannes.jpg"
          alt="Transfert aéroport Nice Cannes - Taxi Cannes"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white max-w-3xl px-6">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-accent/20 rounded-full border border-accent/30">
            <Plane className="w-5 h-5 text-accent" />
            <span className="text-sm font-bold text-white uppercase tracking-wider">
              Service Premium
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-balance">
            Transfert Aéroport Nice ↔ Cannes
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 text-balance">
            Service de taxi Cannes disponible 24h/24 pour vos transferts vers
            l&apos;aéroport Nice Côte d&apos;Azur
          </p>
          <Button
            href="/reservation"
            size="lg"
            className="bg-accent text-accent-foreground hover:opacity-90 px-8 py-6 text-lg"
          >
            Réserver un transfert aéroport
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
                label: "30 minutes",
                desc: "Temps de trajet moyen",
              },
              {
                icon: Shield,
                label: "Prix fixe",
                desc: "Sans surprise",
              },
              {
                icon: Plane,
                label: "Suivi vol",
                desc: "En temps réel",
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
                Transfert Premium
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Transfert Aéroport Nice Cannes
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
                  transfert aéroport Nice Cannes
                </strong>{" "}
                assure vos déplacements entre l&apos;
                <strong className="font-bold text-primary text-lg">
                  aéroport Nice Côte d&apos;Azur
                </strong>{" "}
                et Cannes en toute sérénité. Que vous arriviez de Paris, Londres,
                New York ou toute autre destination, votre chauffeur vous attend
                avec un panneau nominatif à la sortie de la zone de récupération
                des bagages.
              </p>
            </div>

            {/* Deuxième paragraphe */}
            <div className="relative pl-6 border-l-4 border-accent bg-linear-to-r from-accent/5 to-transparent py-6 rounded-r-lg">
              <p className="text-gray-800 leading-relaxed text-lg">
                Le trajet entre l&apos;aéroport Nice et Cannes dure environ{" "}
                <strong className="font-bold text-accent text-xl">
                  30 minutes
                </strong>
                , selon les conditions de circulation. Nos chauffeurs suivent
                votre vol en temps réel et s&apos;adaptent automatiquement en cas
                de retard. Aucun supplément n&apos;est appliqué pour les retards
                d&apos;avion ou les bagages supplémentaires.
              </p>
            </div>

            {/* Avantages */}
            <div className="bg-linear-to-r from-accent/10 via-white to-primary/10 border-2 border-accent/30 rounded-2xl p-8 md:p-10 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -ml-16 -mb-16"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                  Pourquoi choisir notre taxi Cannes aéroport Nice ?
                </h3>
                <ul className="space-y-4 text-gray-800">
                  {[
                    "Prix fixe annoncé à l'avance, sans surprise",
                    "Chauffeur professionnel à l'accueil avec panneau nominatif",
                    "Suivi de votre vol en temps réel",
                    "Véhicules premium (Mercedes, Tesla) climatisés et confortables",
                    "WiFi gratuit à bord",
                    "Disponibilité 24h/24, 7j/7",
                    "Pas de supplément pour retards d'avion ou bagages",
                    "Service personnalisé et discret",
                  ].map((advantage, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{advantage}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Dernier paragraphe */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-gray-200 shadow-md">
              <p className="text-gray-800 leading-relaxed text-lg">
                Que vous séjourniez dans un hôtel de la Croisette, une villa à
                Cannes ou que vous partiez en voyage d&apos;affaires, notre service
                de{" "}
                <strong className="font-bold text-primary text-lg">
                  transfert aéroport Nice Cannes
                </strong>{" "}
                s&apos;adapte à vos besoins. Réservez votre taxi Cannes en ligne
                ou par téléphone pour garantir votre transfert à l&apos;heure
                souhaitée.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 pt-8">
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-10 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Réservez votre transfert aéroport Nice Cannes
              </h3>
              <p className="text-lg mb-6 text-primary-foreground/90">
                Service disponible 24h/24. Confirmation immédiate par email.
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

