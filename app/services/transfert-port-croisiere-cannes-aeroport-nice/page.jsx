// Transfert commercial : port de croisière Cannes → aéroport Nice (page conversion)

export const revalidate = 86400;

export const metadata = {
  title:
    "Transfert port croisière Cannes → Aéroport Nice | Taxi premium 24h/24 | Taxi Cannes",
  description:
    "Taxi et transfert prix fixe depuis le port de Cannes (débarquement croisière) vers l’aéroport Nice T1/T2. Van, bagages, ponctualité. Réservez votre course port → Nice avec Taxi Cannes.",
  keywords:
    "transfert port cannes aeroport nice, taxi port croisiere cannes, taxi croisiere cannes nice, port cannes aeroport",
  alternates: {
    canonical:
      "https://www.cannestaxi.fr/services/transfert-port-croisiere-cannes-aeroport-nice",
  },
};

import {
  Anchor,
  CheckCircle,
  Clock,
  Luggage,
  Phone,
  Plane,
  Shield,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/app/components/ui/Button";

export default function TransfertPortCroisiereCannesNice() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[85vh] md:h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-20">
        <Image
          src="/taxi-cannes-port-croisiere.jpeg"
          alt="Taxi Cannes au port — transfert croisière vers l'aéroport Nice"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white max-w-3xl px-6">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-accent/25 rounded-full border border-accent/40">
            <Anchor className="w-5 h-5 text-accent" aria-hidden />
            <span className="text-sm font-bold text-white uppercase tracking-wider">
              Port de Cannes → Nice
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-balance">
            Transfert croisière&nbsp;: port de Cannes vers l&apos;aéroport Nice
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-10 text-white/92 text-balance leading-relaxed">
            Débarquement, valises volumineuses, horaire de vol serré&nbsp;?{" "}
            <strong>Prix fixe convenu à l&apos;avance</strong>, berline ou{" "}
            <strong>van Mercedes</strong>, chauffeur avec accueil personnalisé —
            <span className="whitespace-nowrap"> 24h/24, 7j/7.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              href="/reservation"
              size="lg"
              className="bg-accent text-accent-foreground hover:opacity-90 px-8 py-6 text-lg w-full sm:w-auto"
            >
              Réserver port → Nice
            </Button>
            <a
              href="tel:+33756827799"
              className="inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring px-8 py-6 text-lg w-full sm:w-auto border-2 border-white/80 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20"
            >
              <Phone className="w-5 h-5 mr-2 shrink-0" aria-hidden />
              Appeler
            </a>
          </div>

          <p className="mt-10 text-sm text-white/80 max-w-xl mx-auto">
            Pour les <strong>durées détaillées</strong>, marges avant vol et repères
            quais, consultez gratuitement notre{" "}
            <Link
              href="/blog/taxi-port-croisiere-cannes-transfert-aeroport-nice-guide-2026"
              className="underline underline-offset-2 font-semibold text-accent hover:text-white transition-colors"
            >
              guide croisière Cannes – aéroport Nice
            </Link>
            .
          </p>
        </div>
      </section>

      {/* KPI */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: Clock,
                label: "~35–55 min",
                desc: "Vers T1 / T2 selon trafic",
              },
              { icon: Shield, label: "Prix fixe", desc: "Annoncé avant départ" },
              { icon: Luggage, label: "Grands coffres", desc: "Van si besoin" },
              { icon: Plane, label: "T1 & T2", desc: "Dépose aéroport" },
            ].map((info, i) => {
              const Icon = info.icon;
              return (
                <div
                  key={i}
                  className="text-center p-4 md:p-6 rounded-xl bg-gray-50 border border-gray-100"
                >
                  <Icon className="w-8 h-8 mx-auto mb-3 text-accent" />
                  <p className="font-bold text-gray-900">{info.label}</p>
                  <p className="text-sm text-muted-foreground mt-1">{info.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contenu commercial */}
      <section className="py-20 md:py-24 bg-linear-to-b from-accent/5 via-white to-accent/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">
              Après la croisière&nbsp;: un transfert pensé pour vous
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Ce service cible un parcours précis —{" "}
              <strong>prises en charge au port de Cannes</strong> ou à proximité
              immédiate (selon consignes croisiériste), direction{" "}
              <strong>aéroport Nice Côte d&apos;Azur</strong>.{" "}
              <span className="whitespace-nowrap">
                Même exigence qualité que nos
              </span>{" "}
              <Link
                href="/services/transfert-aeroport-nice-cannes"
                className="text-accent font-semibold hover:underline underline-offset-2"
              >
                transferts aéroport classiques
              </Link>
              .
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Users className="w-6 h-6 text-accent shrink-0" />
                Ce que vous obtenez avec Taxi Cannes
              </h3>
              <ul className="space-y-3 text-gray-800">
                {[
                  "Véhicule premium climatisé — berline ou Van selon passagers & bagages",
                  "Prix forfaitaire convenu à la réservation (pas de mauvaise surprise au compteur)",
                  "Coordination des horaires de débarquement : indiquez navire, date et créneau communiqué",
                  "Priorité au confort après plusieurs jours en mer : aide bagages, conduite souple",
                  "Disponibilité 24h/24 pour correspondances tôt le matin ou vols de soirée",
                ].map((t, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border-2 border-accent/30 bg-accent/5 p-8 md:p-10">
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Tarification
              </h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                Le trajet <strong>port de Cannes → aéroport Nice</strong> est tarifé
                sur la même logique que nos{" "}
                <strong>forfaits transfert Nice ↔ Cannes</strong> (distance et
                zone de départ comparables). Pour une fourchette indicative et nos
                grilles jour / nuit, ouvrez le{" "}
                <Link
                  href="/blog/guide-transfert-aeroport-nice-cannes"
                  className="text-accent font-semibold hover:underline underline-offset-2"
                >
                  guide transfert Nice–Cannes
                </Link>{" "}
                — le{" "}
                <strong className="text-gray-900">devis ferme personnalisé</strong>{" "}
                vous est communiqué à la réservation selon vos créneaux, le véhicule
                et l&apos;heure exacte de prise en charge.
              </p>
              <p className="text-sm text-muted-foreground">
                Cette page est volontairement <strong>courte et orientée réservation</strong>{" "}
                pour éviter le doublon avec notre article de blog (&laquo;&nbsp;même
                sujet, autre intention&nbsp;&raquo;&nbsp;: éducation SEO vs conversion).
              </p>
            </div>

            <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-10 text-center">
              <h3 className="text-2xl font-bold mb-3">
                Prêt à verrouiller votre créneau&nbsp;?
              </h3>
              <p className="text-primary-foreground/90 mb-8 max-w-lg mx-auto">
                Indiquez <strong>T1 ou T2</strong>, votre <strong>vol</strong>, le{" "}
                <strong>nom du navire</strong> et le <strong>volume de bagages</strong>
                — nous confirmons le véhicule adapté.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  href="/reservation"
                  className="bg-accent text-accent-foreground hover:opacity-90 px-8 py-4 text-lg"
                >
                  Formulaire de réservation
                </Button>
                <a
                  href="tel:+33756827799"
                  className="inline-flex items-center justify-center rounded-full font-medium transition-colors px-8 py-4 text-lg border-2 border-primary-foreground/40 text-primary-foreground bg-transparent hover:bg-primary-foreground/10"
                >
                  +33 7 56 82 77 99
                </a>
              </div>
            </div>

            <div className="text-center text-muted-foreground text-sm border-t border-gray-200 pt-10">
              <p>
                <strong className="text-gray-800">Guide détaillé &amp; FAQ</strong>{" "}
                (tableaux de durées, escales, Terminal 1/2)&nbsp;:{" "}
                <Link
                  href="/blog/taxi-port-croisiere-cannes-transfert-aeroport-nice-guide-2026"
                  className="text-accent font-semibold hover:underline underline-offset-2"
                >
                  lire l&apos;article port croisière Cannes
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
