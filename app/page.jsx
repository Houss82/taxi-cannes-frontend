// app/page.jsx — PAGE D’ACCUEIL TAXI CANNES (SERVER)

import {
  Building2,
  Car,
  ChevronRight,
  Clock,
  Compass,
  CreditCard,
  HeartPulse,
  Phone,
  Plane,
  Star,
  Train,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import VehicleCarousel from "./components/client/VehicleCarousel";
import Button from "./components/ui/Button";
import Card from "./components/ui/Card";
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from "./lib/contact";

// ✅ ISR: Revalidate toutes les 24 heures pour le SEO
export const revalidate = 86400;

// ✅ Métadonnées SEO (local + services, sans sur-optimisation)
export const metadata = {
  title:
    "Taxi Cannes 24h/24 | Aéroport Nice, gare, Croisette & taxi conventionné CPAM — 07 56 82 77 99",
  description:
    "Taxi Cannes 24h/24 : aéroport Nice, gare SNCF, Croisette, centre-ville. Transferts, transport médical assis et taxi conventionné CPAM selon éligibilité. Appelez le 07 56 82 77 99.",
  keywords: [
    "taxi cannes",
    "taxi cannes aeroport nice",
    "taxi croisette cannes",
    "taxi cannes gare",
    "taxi conventionné cannes",
    "taxi cpam cannes",
    "transport medical assis cannes",
    "transport medical cannes",
  ],
  alternates: {
    canonical: "https://www.cannestaxi.fr/",
  },
  openGraph: {
    title:
      "Taxi Cannes 24h/24 | Aéroport, gare, Croisette & taxi conventionné CPAM",
    description:
      "Taxi Cannes : aéroport Nice, gare, Croisette. Transport médical assis et taxi conventionné CPAM selon éligibilité. 07 56 82 77 99.",
    url: "https://www.cannestaxi.fr/",
    siteName: "Taxi Cannes",
    locale: "fr_FR",
    type: "website",
  },
};

const vehicles = [
  { name: "TESLA Model S", image: "/tesla-model-S-2.png" },
  { name: "Mercedes SUV", image: "/mercedes-glc-luxury-suv.png" },
  { name: "Mercedes Classe V", image: "/mercedes-v-luxury-van.png" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero — overlay dégradé pour lisibilité, CTA alignés, palette premium */}
      <section className="relative min-h-dvh flex items-center justify-center overflow-hidden pt-20 pb-10">
        <Image
          src="/taxi-cannes.png"
          alt="Taxi Cannes sur la Croisette, véhicule premium face à la mer"
          fill
          className="object-cover object-center"
          priority
        />
        <div
          className="absolute inset-0 bg-linear-to-b from-black/50 via-black/45 to-zinc-950/80"
          aria-hidden
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,255,255,0.12),transparent)] pointer-events-none" />
        <div className="relative z-10 w-full max-w-3xl mx-auto px-5 sm:px-8 text-center text-white">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-white/60 mb-3 font-medium">
            Service premium &middot; Côte d&apos;Azur
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-[1.1] text-balance drop-shadow-sm">
            Taxi Cannes 24h/24
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-3 text-white/95 text-balance font-medium max-w-2xl mx-auto leading-snug">
            Aéroport Nice, gare SNCF, Croisette, centre-ville & Palais des
            Festivals.
          </p>
          <p className="text-sm sm:text-base mb-8 text-white/70 max-w-xl mx-auto text-balance leading-relaxed">
            <Link
              href="/services/taxi-conventionne-cpam-cannes"
              className="text-white/95 font-medium underline decoration-white/30 underline-offset-2 hover:text-white hover:decoration-white/60"
            >
              Taxi conventionné CPAM
            </Link>{" "}
            et{" "}
            <span className="text-white/90">transport médical assis</span> (selon
            éligibilité) — indiquez votre situation au décroché.
          </p>

          <div className="mx-auto w-full max-w-md sm:max-w-2xl space-y-3">
            <a
              href={SITE_PHONE_TEL}
              className="group flex w-full items-stretch justify-center overflow-hidden rounded-2xl bg-white text-zinc-900 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.5)] ring-1 ring-white/30 transition hover:bg-zinc-50 hover:ring-white/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span className="flex flex-1 flex-col items-center justify-center gap-0.5 px-5 py-4 sm:flex-row sm:gap-3 sm:py-5">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 sm:text-base">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900 text-white transition group-hover:scale-105">
                    <Phone className="h-4 w-4" aria-hidden />
                  </span>
                  Appeler
                </span>
                <span className="font-mono text-lg font-semibold tracking-wide text-zinc-900 sm:text-xl whitespace-nowrap tabular-nums">
                  {SITE_PHONE_DISPLAY}
                </span>
              </span>
            </a>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3">
              <Button
                href="/reservation"
                size="lg"
                className="h-12 sm:h-14 w-full rounded-2xl bg-accent text-accent-foreground text-base font-semibold shadow-lg shadow-black/20 hover:opacity-95"
              >
                Réserver en ligne
              </Button>
              <Button
                href="/tarifs"
                size="lg"
                variant="outline"
                className="h-12 sm:h-14 w-full rounded-2xl border-2 border-white/40 bg-white/5 text-white backdrop-blur-sm hover:bg-white/15 hover:border-white/60 text-base font-semibold"
              >
                Voir les tarifs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Bloc info / SEO — style éditorial, pas de “mur”, liens discrets */}
      <section
        className="relative py-8 sm:py-10 border-b border-zinc-200/80 bg-linear-to-b from-zinc-100 to-zinc-50/80"
        aria-label="Taxi Cannes, services et zone"
      >
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="relative rounded-2xl border border-zinc-200/90 bg-white/80 p-6 sm:p-8 shadow-[0_2px_24px_-8px_rgba(0,0,0,0.08)] backdrop-blur-sm">
            <div
              className="absolute left-0 top-6 bottom-6 w-1 rounded-full bg-accent sm:top-8 sm:bottom-8"
              aria-hidden
            />
            <p className="pl-4 sm:pl-5 text-[15px] sm:text-base text-zinc-600 leading-[1.7] text-left">
              <span className="font-semibold text-zinc-900">Taxi à Cannes</span> — nous
              couvrons l&apos;{" "}
              <Link
                href="/services/transfert-aeroport-nice-cannes"
                className="text-zinc-800 underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent/50"
              >
                aéroport de Nice
              </Link>
              , la{" "}
              <Link
                href="/blog/taxi-gare-cannes-service-transport-sncf-2025"
                className="text-zinc-800 underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent/50"
              >
                gare SNCF
              </Link>{" "}
              et la{" "}
              <Link
                href="/secteurs/la-croisette"
                className="text-zinc-800 underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent/50"
              >
                Croisette
              </Link>
              .{" "}
              <span className="text-zinc-700">
                <Link
                  href="/services/taxi-conventionne-cpam-cannes"
                  className="font-semibold text-zinc-900 underline decoration-zinc-300 underline-offset-2 hover:text-accent hover:decoration-accent/50"
                >
                  Taxi conventionné
                </Link>{" "}
                ou transport médical assis (CPAM) : les conditions se confirment à
                l&apos;appel selon votre dossier.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Transport médical — carte premium, même tonalité qu’en haut */}
      <section className="py-6 sm:py-8 px-4 sm:px-6 border-b border-zinc-200/80 bg-zinc-50">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 rounded-2xl border border-zinc-200/90 bg-zinc-900 p-5 sm:p-6 text-left shadow-lg shadow-zinc-900/10">
            <div className="flex shrink-0 items-center justify-center sm:justify-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20">
                <HeartPulse
                  className="h-6 w-6 text-amber-100/90"
                  aria-hidden
                />
              </div>
            </div>
            <div className="min-w-0 flex-1 space-y-1">
              <p className="text-sm font-semibold tracking-wide text-white/90">
                Transport médical &amp; taxi conventionné CPAM
              </p>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Hôpitaux, cliniques, rendez-vous :{" "}
                <span className="text-zinc-300">selon éligibilité</span>. Un conseiller
                vous guide au téléphone.{" "}
                <Link
                  href="/services/taxi-conventionne-cpam-cannes"
                  className="font-medium text-sky-300/95 underline decoration-sky-500/50 underline-offset-2 hover:text-white"
                >
                  Fiche taxi conventionné CPAM
                </Link>
              </p>
            </div>
            <a
              href={SITE_PHONE_TEL}
              className="inline-flex h-12 shrink-0 items-center justify-center gap-2 self-stretch sm:self-center rounded-xl bg-white px-6 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:min-w-36"
            >
              <Phone className="h-4 w-4" aria-hidden />
              Appeler
            </a>
          </div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <header className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Vos trajets en taxi depuis Cannes
            </h2>
            <p className="text-muted-foreground">
              Taxi Cannes pour l&apos;aéroport Nice, gares, hôtels de luxe et
              stations balnéaires de la Côte d&apos;Azur.
            </p>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Plane,
                label: "Aéroport Nice",
                desc: "Transfert taxi Cannes ↔ Nice",
                href: "/services/transfert-aeroport-nice-cannes",
              },
              {
                icon: Train,
                label: "Gare de Cannes",
                desc: "Arrivées & départs",
                href: "/blog/taxi-gare-cannes-service-transport-sncf-2025",
              },
              {
                icon: Building2,
                label: "Palaces & Hôtels",
                desc: "Croisette, Martinez, Carlton",
                href: "/services/trajets-palaces",
              },
              {
                icon: Compass,
                label: "Longue Distance",
                desc: "Monaco, Saint-Tropez, Antibes",
                href: "/services/cannes-monaco",
              },
              {
                icon: HeartPulse,
                label: "Taxi conventionné CPAM",
                desc: "Médical assis, hôpitaux (selon éligibilité)",
                href: "/services/taxi-conventionne-cpam-cannes",
              },
            ].map((service, i) => {
              const Icon = service.icon;
              const card = (
                <Card className="p-6 text-center hover:shadow-lg transition-shadow h-full">
                  <Icon className="w-8 h-8 mx-auto mb-4 text-accent" />
                  <h3 className="font-bold mb-2">{service.label}</h3>
                  <p className="text-sm text-muted-foreground">
                    {service.desc}
                  </p>
                </Card>
              );
              return service.href ? (
                <Link
                  key={i}
                  href={service.href}
                  className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
                >
                  {card}
                </Link>
              ) : (
                <div key={i}>{card}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BLOC CORRECTIF SEO - Identification claire pour Google */}
      <section className="py-12 bg-white border-y border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-gray-900">
            Taxi à Cannes – Taxi conventionné CPAM & transferts 24h/24
          </h2>
          <p className="text-lg text-gray-700 text-center leading-relaxed">
            À Cannes, nous assurons les trajets en taxi (Cannes centre,{" "}
            <Link
              href="/secteurs/la-bocca"
              className="font-bold text-gray-900 underline decoration-gray-300 underline-offset-2 hover:text-accent hover:decoration-accent/50"
            >
              La Bocca
            </Link>
            , la Croisette, le Suquet) et les transferts vers l&apos;aéroport
            Nice Côte d&apos;Azur. Service de taxi disponible 24h/24 et 7j/7 sur
            Cannes et les Alpes-Maritimes. Pour un{" "}
            <Link
              href="/services/taxi-conventionne-cpam-cannes"
              className="font-bold text-gray-900 underline decoration-gray-300 underline-offset-2 hover:text-accent hover:decoration-accent/50"
            >
              taxi conventionné à Cannes
            </Link>{" "}
            ou un{" "}
            <strong>transport médical assis conventionné CPAM</strong>, l&apos;éligibilité se confirme
            lors de l&apos;appel.
          </p>
        </div>
      </section>

      {/* SECTION TEXTE SEO: Taxi Cannes */}
      <section className="py-24 bg-linear-to-b from-accent/5 via-white to-accent/5 relative overflow-hidden">
        {/* Éléments décoratifs plus visibles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          {/* En-tête centré avec design moderne */}
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              <span className="text-sm font-bold text-accent uppercase tracking-wider">
                Service Premium
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Taxi Cannes
              </span>
              <br />
              <span className="text-gray-700">
                votre service de taxi sur la
              </span>{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-linear-to-r from-accent to-primary bg-clip-text text-transparent font-extrabold">
                  Côte d&apos;Azur
                </span>
                <span className="absolute bottom-2 left-0 right-0 h-4 bg-accent/30 -rotate-1 z-0 rounded-sm"></span>
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

          {/* Contenu avec design amélioré */}
          <div className="space-y-10 text-lg leading-relaxed">
            {/* Premier paragraphe avec fond coloré */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100">
              <p className="text-gray-800 mb-0 leading-relaxed text-lg">
                Notre service{" "}
                <strong className="font-bold text-accent text-xl">
                  Taxi Cannes
                </strong>{" "}
                assure tous vos déplacements à Cannes et dans les
                Alpes-Maritimes : transferts entre l&apos;
                <strong className="font-bold text-primary text-lg">
                  aéroport Nice Côte d&apos;Azur
                </strong>{" "}
                et Cannes, trajets vers le{" "}
                <strong className="font-bold text-primary text-lg">
                  Palais des Festivals
                </strong>
                , les palaces de la Croisette, les ports et les quartiers
                résidentiels.
              </p>
            </div>

            {/* Deuxième paragraphe avec bordure accent */}
            <div className="relative pl-6 border-l-4 border-accent bg-linear-to-r from-accent/5 to-transparent py-6 rounded-r-lg">
              <p className="text-gray-800 leading-relaxed text-lg">
                Que vous soyez en voyage d&apos;affaires, en séjour touristique
                ou résident à l&apos;année, vous profitez d&apos;un{" "}
                <strong className="font-bold text-accent text-xl">
                  taxi à Cannes
                </strong>{" "}
                ponctuel, discret et confortable. Nos chauffeurs suivent votre
                vol ou votre train en temps réel et vous attendent à
                l&apos;arrivée avec un accueil personnalisé.
              </p>
            </div>

            {/* Call-to-action avec design premium */}
            <div className="bg-linear-to-r from-accent/10 via-white to-primary/10 border-2 border-accent/30 rounded-2xl p-8 md:p-10 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -ml-16 -mb-16"></div>
              <p className="text-gray-800 mb-0 leading-relaxed text-lg relative z-10">
                Vous pouvez{" "}
                <a
                  href="/reservation"
                  className="inline-flex items-center gap-1 text-accent font-bold hover:text-primary transition-all duration-200 relative group text-xl"
                >
                  <span className="relative">
                    réserver votre taxi à Cannes en ligne
                    <span className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-accent to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
                  </span>
                </a>{" "}
                24h/24 et 7j/7 ou nous contacter pour un{" "}
                <a
                  href="/tarifs"
                  className="inline-flex items-center gap-1 text-accent font-bold hover:text-primary transition-all duration-200 relative group text-xl"
                >
                  <span className="relative">
                    devis de transfert Cannes
                    <span className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-accent to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
                  </span>
                </a>{" "}
                vers Nice, Antibes, Monaco, Saint-Tropez ou toute autre
                destination.
              </p>
            </div>

            {/* Dernier paragraphe avec icône visuelle */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-gray-200 shadow-md">
              <p className="text-gray-800 leading-relaxed text-lg">
                Basés au cœur de la ville, nous connaissons parfaitement les
                contraintes de circulation lors des{" "}
                <strong className="font-bold text-primary text-lg">
                  congrès à Cannes
                </strong>{" "}
                (Festival de Cannes, MIPIM, Lions, etc.) et adaptons nos
                itinéraires pour vous faire gagner du temps.
              </p>
            </div>
          </div>

          {/* Séparateur décoratif amélioré */}
          <div className="mt-16 pt-8">
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="flex items-center justify-center gap-3">
                <div className="h-px w-20 bg-linear-to-r from-transparent via-accent to-transparent"></div>
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <div className="h-px w-20 bg-linear-to-r from-transparent via-primary to-transparent"></div>
              </div>
              <span className="text-base font-bold text-gray-700 bg-white/80 px-6 py-2 rounded-full border border-gray-200 shadow-sm">
                Service disponible 24h/24 7j/7
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Pourquoi choisir notre taxi à Cannes ?
            </h2>
            <p className="text-lg text-muted-foreground">
              Service de taxi à Cannes fiable et haut de gamme depuis 2015.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Chauffeurs Professionnels",
                desc: "Expérience, discrétion et courtoisie garanties.",
              },
              {
                icon: Car,
                title: "Véhicules Premium",
                desc: "Mercedes et Tesla pour vos trajets à Cannes.",
              },
              {
                icon: Clock,
                title: "Disponibilité 24/7",
                desc: "Taxi Cannes disponible jour et nuit.",
              },
              {
                icon: CreditCard,
                title: "Paiement Flexible",
                desc: "CB à bord, espèces ou virement.",
              },
            ].map((advantage, i) => {
              const Icon = advantage.icon;
              return (
                <div key={i} className="text-center">
                  <Icon className="w-12 h-12 mx-auto mb-4 text-accent" />
                  <h3 className="font-bold mb-2 text-lg">{advantage.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {advantage.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vehicles Carousel */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Notre flotte de taxis à Cannes
            </h2>
            <p className="text-lg text-muted-foreground">
              Véhicules haut de gamme adaptés aux trajets individuels, famille
              ou groupes lors de vos séjours à Cannes.
            </p>
          </div>
          <VehicleCarousel vehicles={vehicles} />
        </div>
      </section>

      {/* Airport Transfer Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Taxi Cannes – Transfert Aéroport Nice ↔ Cannes
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              À seulement 30 minutes de l&apos;aéroport Nice Côte d&apos;Azur,
              notre service{" "}
              <Link
                href="/services/transfert-aeroport-nice-cannes"
                className="text-accent font-semibold underline underline-offset-2 hover:opacity-90"
              >
                taxi Cannes aéroport Nice
              </Link>{" "}
              assure des transferts rapides, fiables et confortables vers votre
              hôtel, villa ou lieu d&apos;événement.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Prix fixe annoncé à l’avance",
                "Chauffeur à l’arrivée avec panneau nominatif",
                "Pas de supplément pour bagages ou retard avion",
                "Réservation de taxi Cannes facile en ligne ou par téléphone",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <ChevronRight className="w-5 h-5 text-accent shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button
              href="/services/transfert-aeroport-nice-cannes"
              className="bg-accent text-accent-foreground hover:opacity-90 px-8 py-6 text-lg"
            >
              Voir le transfert aéroport
            </Button>
          </div>
          <Image
            src="/arrivée-glc-2.jpeg"
            alt="Taxi Cannes à l'aéroport Nice Côte d'Azur"
            width={500}
            height={500}
            className="rounded-lg shadow-xl"
          />
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Avis de nos clients taxi Cannes
            </h2>
            <p className="text-lg text-muted-foreground">
              Des centaines de trajets réussis chaque année à Cannes et sur la
              Côte d&apos;Azur.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Marie D.",
                rating: 5,
                review:
                  "Service de taxi à Cannes impeccable pour notre séjour. Très professionnel !",
              },
              {
                name: "Jean M.",
                rating: 5,
                review:
                  "Chauffeur courtois, véhicule propre et à l'heure pour notre transfert Nice–Cannes.",
              },
              {
                name: "Sophie L.",
                rating: 5,
                review:
                  "Expérience premium du début à la fin. Taxi Cannes parfait pour les congrès.",
              },
            ].map((review, i) => (
              <Card key={i} className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  {Array(review.rating)
                    .fill(0)
                    .map((_, j) => (
                      <Star
                        key={j}
                        className="w-4 h-4 fill-accent text-accent"
                      />
                    ))}
                </div>
                <p className="text-foreground mb-4 italic">"{review.review}"</p>
                <p className="font-bold text-sm">{review.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Besoin d&apos;un taxi à Cannes maintenant ?
          </h2>
          <p className="text-lg mb-8 text-accent-foreground/90">
            Réservez votre trajet en quelques clics et recevez une confirmation
            immédiate par email.
          </p>
          <Button
            href="/reservation"
            size="lg"
            className="bg-primary text-primary-foreground hover:opacity-90 px-8 py-6 text-lg"
          >
            Réserver un taxi à Cannes
          </Button>
        </div>
      </section>

      {/* JSON-LD LocalBusiness pour Taxi Cannes */}
      <Script
        id="localbusiness-taxi-cannes"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TaxiService",
            name: "Taxi Cannes",
            url: "https://www.cannestaxi.fr/",
            telephone: "+33 7 56 82 77 99",
            areaServed: [
              "Cannes",
              "Nice",
              "Antibes",
              "Monaco",
              "Saint-Tropez",
              "Alpes-Maritimes",
            ],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Cannes",
              addressRegion: "Provence-Alpes-Côte d'Azur",
              addressCountry: "FR",
            },
            sameAs: [
              "https://hoodspot.fr/taxi/taxi-cannes-99092661000017/",
            ],
          }),
        }}
      />
    </main>
  );
}
