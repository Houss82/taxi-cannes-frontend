import {
  SITE_PHONE_DISPLAY,
  SITE_PHONE_DISPLAY_INTL,
  SITE_PHONE_TEL,
} from "@/app/lib/contact";
import {
  Building2,
  Car,
  Check,
  ChevronRight,
  Clock,
  Landmark,
  MapPin,
  Phone,
  Plane,
  ShieldCheck,
  Star,
  Train,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import VehicleCarousel from "../client/VehicleCarousel";
import Button from "../ui/Button";
import Card from "../ui/Card";

const vehicles = [
  { name: "TESLA Model S", image: "/tesla-model-S-2.png" },
  { name: "Mercedes SUV", image: "/mercedes-glc-luxury-suv.png" },
  { name: "Mercedes Classe V", image: "/mercedes-v-luxury-van.png" },
];

const trustPills = [
  "24h/24 · 7j/7",
  "Palaces & Palais des Festivals",
  "Aéroport Nice Côte d’Azur",
  "Gare SNCF Cannes",
  "Croisette & centre-ville",
  "Taxi conventionné CPAM (sous conditions)",
  "Transport médical assis & conventionné (éligibilité)",
  "Monaco & longue distance",
];

const popularRoutes = [
  {
    title: "Taxi Cannes aéroport Nice",
    desc: "Transfert direct, suivi de vol, prix annoncé avant le départ. Environ 30–45 min selon trafic.",
    href: "/services/transfert-aeroport-nice-cannes",
    icon: Plane,
  },
  {
    title: "Taxi gare de Cannes",
    desc: "Prise en charge à la sortie SNCF, bagages gérés, idéal après un TGV ou un TER.",
    href: "/blog/taxi-gare-cannes-service-transport-sncf-2025",
    icon: Train,
  },
  {
    title: "Taxi Croisette Cannes",
    desc: "Palaces, plages, congrès : dépose au plus près selon la circulation.",
    href: "/secteurs/la-croisette",
    icon: MapPin,
  },
  {
    title: "Palais des Festivals",
    desc: "Festivals, salons, soirées : horaires serrés, itinéraire adapté.",
    href: "/blog/taxi-palais-des-festivals-cannes-acces-congres-evenements-2026",
    icon: Landmark,
  },
  {
    title: "Cannes → Antibes & Nice",
    desc: "Trajets sur l’axe est : affaires, gare Nice-Ville ou Riviera.",
    href: "/blog/guide-transfert-aeroport-nice-cannes",
    icon: Building2,
  },
];

const serviceBlocks = [
  {
    title: "Transferts aéroport",
    desc: "Nice-Côte d’Azur ↔ Cannes, pancarte à l’arrivée, aide bagages.",
    href: "/services/transfert-aeroport-nice-cannes",
  },
  {
    title: "Transferts gare",
    desc: "Gare SNCF avenue de la Gare : prise en charge rapide, train suivi.",
    href: "/blog/taxi-gare-cannes-service-transport-sncf-2025",
  },
  {
    title: "Trajets locaux",
    desc: "Centre-ville, Suquet, Bocca, Carnot : courses courtes et déposes.",
    href: "/secteurs",
  },
  {
    title: "Longue distance",
    desc: "Monaco, Saint-Tropez, golfe : van ou berline sur réservation.",
    href: "/services/cannes-monaco",
  },
  {
    title: "Taxi conventionné CPAM — transport médical assis",
    desc: "Transport médical assis, trajets hôpital / clinique : éligibilité et conventionnement à confirmer au téléphone.",
    href: "/services/taxi-conventionne-cpam-cannes",
  },
];

const faqItems = [
  {
    q: "Combien coûte un taxi à Cannes ?",
    a: (
      <p className="text-gray-700 leading-relaxed">
        Cela dépend de la distance et du trafic. Les{" "}
        <Link
          href="/tarifs"
          className="font-semibold text-accent underline-offset-2 hover:underline"
        >
          tarifs indicatifs
        </Link>{" "}
        sont en ligne ; pour un prix ferme, appelez le{" "}
        <a
          href={SITE_PHONE_TEL}
          className="font-bold text-gray-900 tabular-nums hover:underline"
        >
          {SITE_PHONE_DISPLAY}
        </a>
        .
      </p>
    ),
  },
  {
    q: "Taxi Cannes aéroport Nice : quel prix et combien de temps ?",
    a: (
      <p className="text-gray-700 leading-relaxed">
        Comptez souvent <strong>30 à 45 minutes</strong> et un forfait dans la
        grille « Nice → Cannes » sur la page{" "}
        <Link
          href="/tarifs"
          className="font-semibold text-accent underline-offset-2 hover:underline"
        >
          Tarifs
        </Link>
        . Le{" "}
        <strong className="text-gray-900">
          taxi Cannes transfert aéroport
        </strong>{" "}
        inclut le suivi de vol sur demande.
      </p>
    ),
  },
  {
    q: "Un taxi est-il disponible la nuit à Cannes ?",
    a: (
      <p className="text-gray-700 leading-relaxed">
        Oui, <strong className="text-gray-900">24h/24 et 7j/7</strong>. Le plus
        rapide reste l’appel au{" "}
        <a
          href={SITE_PHONE_TEL}
          className="font-bold text-gray-900 tabular-nums hover:underline"
        >
          {SITE_PHONE_DISPLAY}
        </a>
        .
      </p>
    ),
  },
  {
    q: "Comment réserver un taxi rapidement à Cannes ?",
    a: (
      <p className="text-gray-700 leading-relaxed">
        1) Appelez le{" "}
        <a
          href={SITE_PHONE_TEL}
          className="font-bold text-gray-900 tabular-nums hover:underline"
        >
          {SITE_PHONE_DISPLAY}
        </a>{" "}
        pour une course immédiate ou à l’heure. 2) Ou utilisez le{" "}
        <Link
          href="/reservation"
          className="font-semibold text-accent underline-offset-2 hover:underline"
        >
          formulaire de réservation
        </Link>{" "}
        si vous préférez le texte écrit.
      </p>
    ),
  },
  {
    q: "Intervenez-vous au centre-ville et sur la Croisette ?",
    a: (
      <p className="text-gray-700 leading-relaxed">
        Oui :{" "}
        <strong className="text-gray-900">taxi Cannes centre-ville</strong> et{" "}
        <Link
          href="/secteurs/la-croisette"
          className="font-semibold text-accent underline-offset-2 hover:underline"
        >
          taxi Croisette Cannes
        </Link>{" "}
        font partie de nos courses quotidiennes.
      </p>
    ),
  },
  {
    q: "Proposez-vous un taxi conventionné CPAM à Cannes ?",
    a: (
      <p className="text-gray-700 leading-relaxed">
        Oui, dans le cadre prévu par la CPAM et{" "}
        <strong className="text-gray-900">sous conditions d’éligibilité</strong>
        . Indiquez-nous votre situation au{" "}
        <a
          href={SITE_PHONE_TEL}
          className="font-bold text-gray-900 tabular-nums hover:underline"
        >
          {SITE_PHONE_DISPLAY}
        </a>{" "}
        ou consultez la page{" "}
        <Link
          href="/services/taxi-conventionne-cpam-cannes"
          className="font-semibold text-accent underline-offset-2 hover:underline"
        >
          taxi conventionné CPAM à Cannes
        </Link>
        , puis{" "}
        <Link
          href="/contact"
          className="font-semibold text-accent underline-offset-2 hover:underline"
        >
          Contact
        </Link>{" "}
        si vous préférez écrire.
      </p>
    ),
  },
  {
    q: "Taxi conventionné, transport médical assis : comment savoir ?",
    a: (
      <p className="text-gray-700 leading-relaxed">
        Pour un{" "}
        <strong className="text-gray-900">taxi conventionné</strong> (CPAM) ou
        un <strong className="text-gray-900">transport médical assis</strong> à
        Cannes, chaque
        situation est particulière. Appelez le{" "}
        <a
          href={SITE_PHONE_TEL}
          className="font-bold text-gray-900 tabular-nums hover:underline"
        >
          {SITE_PHONE_DISPLAY}
        </a>{" "}
        : nous vous disons clairement ce que nous pouvons organiser et ce qui
        relève de votre caisse, de la prescription et des règles
        d’<strong className="text-gray-900">éligibilité</strong>. Détails sur la
        page{" "}
        <Link
          href="/services/taxi-conventionne-cpam-cannes"
          className="font-semibold text-accent underline-offset-2 hover:underline"
        >
          taxi conventionné CPAM & transport médical à Cannes
        </Link>
        .
      </p>
    ),
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero conversion — image présente mais atténuée (LCP maîtrisé) */}
      <section className="relative overflow-hidden bg-zinc-900">
        <div className="absolute inset-0">
          <Image
            src="/taxi-cannes.png"
            alt="Taxi à Cannes — transfert aéroport Nice, gare SNCF, Croisette"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-45"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/75 via-black/55 to-black/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-14 md:pt-32 md:pb-16 lg:pt-36 lg:pb-20">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-7 text-white">
              <p className="text-sm font-semibold uppercase tracking-wider text-amber-300/95 mb-3">
                Taxi à Cannes · Croisette, palaces & congrès
              </p>
              <h1 className="text-[1.65rem] leading-tight sm:text-4xl md:text-5xl font-extrabold text-balance">
                Taxi Cannes 24h/24 —{" "}
                <span className="text-amber-300">un appel, on s’occupe du reste</span>
              </h1>
              <p className="mt-3 flex items-center gap-2 text-amber-200 font-bold text-sm sm:text-base md:text-lg">
                <Clock
                  className="w-5 h-5 sm:w-6 shrink-0 text-amber-300"
                  aria-hidden
                />
                <span>
                  Course immédiate ou rendez-vous serré ? Réponse directe au téléphone.
                </span>
              </p>
              <p className="mt-4 text-lg md:text-xl text-white/90 max-w-xl text-pretty">
                Transferts haut de gamme vers{" "}
                <strong className="text-white">l’aéroport Nice</strong>, la{" "}
                <strong className="text-white">gare SNCF</strong>, les{" "}
                <Link
                  href="/services/trajets-palaces"
                  className="font-semibold text-amber-200 underline decoration-amber-300/80 underline-offset-2 hover:text-white"
                >
                  palaces
                </Link>
                , la{" "}
                <Link
                  href="/secteurs/la-croisette"
                  className="font-semibold text-amber-200 underline decoration-amber-300/80 underline-offset-2 hover:text-white"
                >
                  Croisette
                </Link>
                , le{" "}
                <Link
                  href="/blog/taxi-palais-des-festivals-cannes-acces-congres-evenements-2026"
                  className="font-semibold text-amber-200 underline decoration-amber-300/80 underline-offset-2 hover:text-white"
                >
                  Palais des Festivals
                </Link>{" "}
                et le centre-ville — service{" "}
                <strong className="text-white">24h/24</strong>.{" "}
                <span className="text-white/85">
                  <strong className="text-white">Taxi conventionné</strong>{" "}
                  <strong className="text-white">CPAM</strong> et{" "}
                  <strong className="text-white">transport médical assis</strong>{" "}
                  à Cannes, <strong className="text-white">sous conditions</strong>{" "}
                  d’éligibilité — précisez votre situation avant la course.
                </span>
              </p>

              {/* Numéro mis en avant (même contenu qu’avant : pas de changement SEO sur le H1) */}
              <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2">
                <a
                  href={SITE_PHONE_TEL}
                  className="inline-flex items-center gap-2 rounded-full bg-green-600 px-4 py-2.5 text-white shadow-lg shadow-black/25 ring-2 ring-white/20 hover:bg-green-500 transition-colors"
                  aria-label={`Appeler Taxi Cannes au ${SITE_PHONE_DISPLAY}`}
                >
                  <Phone className="w-5 h-5 shrink-0" aria-hidden />
                  <span className="text-lg sm:text-xl font-extrabold tabular-nums tracking-tight">
                    {SITE_PHONE_DISPLAY_INTL}
                  </span>
                </a>
                <span className="text-sm text-white/85 max-w-[16rem] leading-snug">
                  Un seul numéro — devis clair au téléphone
                </span>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:flex-wrap">
                <Button
                  href={SITE_PHONE_TEL}
                  variant="call"
                  size="xl"
                  className="w-full sm:w-auto active:scale-[0.99]"
                  aria-label={`Appeler Taxi Cannes au ${SITE_PHONE_DISPLAY}`}
                >
                  <Phone className="w-5 h-5 shrink-0" aria-hidden />
                  Appeler maintenant
                </Button>
                <Button
                  href="/tarifs"
                  variant="secondaryInverse"
                  size="xl"
                  className="w-full sm:w-auto"
                >
                  Voir les tarifs
                </Button>
                <Button
                  href="/reservation"
                  variant="accent"
                  size="xl"
                  className="w-full sm:w-auto"
                >
                  Réserver en ligne
                </Button>
              </div>

              <ul
                className="mt-6 flex flex-wrap gap-2"
                aria-label="Zones et services"
              >
                {trustPills.map((label) => (
                  <li
                    key={label}
                    className="rounded-full bg-white/10 backdrop-blur-sm px-3 py-1.5 text-xs sm:text-sm font-medium text-white/95 border border-white/15"
                  >
                    {label}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 w-full">
              <div className="rounded-2xl text-gray-900 shadow-2xl p-6 md:p-7 border max-lg:border-white/25 max-lg:bg-white/75 max-lg:backdrop-blur-md max-lg:shadow-black/20 lg:border-white/10 lg:bg-white">
                <h2 className="text-lg font-bold text-gray-900">
                  Course immédiate ou à l’heure ?
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  Un humain répond : adresse de prise en charge, destination,
                  nombre de passagers et bagages.
                </p>
                <p className="mt-3 flex items-start gap-2 text-sm font-semibold text-green-800 bg-green-50 border border-green-200/80 rounded-lg px-3 py-2">
                  <Check
                    className="w-5 h-5 text-green-600 shrink-0 mt-0.5"
                    strokeWidth={2.5}
                    aria-hidden
                  />
                  <span>Priorité au téléphone pour une arrivée rapide</span>
                </p>
                <Button
                  href={SITE_PHONE_TEL}
                  variant="call"
                  size="lg"
                  className="mt-4 w-full text-lg font-bold"
                  aria-label={`Appeler Taxi Cannes au ${SITE_PHONE_DISPLAY}`}
                >
                  <Phone className="w-5 h-5" aria-hidden />
                  {SITE_PHONE_DISPLAY}
                </Button>
                <Button
                  href="/tarifs"
                  variant="outline"
                  size="lg"
                  className="mt-3 w-full font-semibold"
                >
                  Consulter les tarifs
                </Button>
                <p className="mt-3 text-center">
                  <Link
                    href="/reservation"
                    className="text-sm text-gray-600 hover:text-accent font-medium underline underline-offset-2"
                  >
                    Préférez-vous le formulaire ?
                  </Link>
                </p>
                <p className="mt-3 text-xs text-gray-500 text-center">
                  Palaces, festivals, aéroport —{" "}
                  <Link
                    href="/services/taxi-conventionne-cpam-cannes"
                    className="text-accent font-medium hover:underline"
                  >
                    taxi conventionné & transport médical assis (CPAM)
                  </Link>{" "}
                  (éligibilité au téléphone). Tarifs annoncés quand le trajet
                  est défini.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Étapes — réassurance courte */}
      <section className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <div className="grid sm:grid-cols-3 gap-8 sm:gap-10">
            {[
              {
                step: 1,
                kicker: "Immédiat",
                title: "Vous appelez",
                desc: "Indiquez où vous êtes à Cannes et où vous allez.",
              },
              {
                step: 2,
                kicker: "Confirmation",
                title: "On vous confirme",
                desc: "Créneau, véhicule et tarif quand c’est possible.",
              },
              {
                step: 3,
                kicker: "Départ",
                title: "Prise en charge",
                desc: "Chauffeur local, itinéraire adapté au trafic.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex flex-col items-center sm:items-start text-center sm:text-left"
              >
                <span
                  className="text-6xl sm:text-7xl font-black text-accent leading-none tabular-nums drop-shadow-sm select-none"
                  aria-hidden
                >
                  {item.step}
                </span>
                <p className="mt-3 text-xs font-bold uppercase tracking-wide text-accent">
                  {item.kicker}
                </p>
                <p className="mt-1 font-semibold text-gray-900 text-base">
                  {item.title}
                </p>
                <p className="text-sm text-gray-600 mt-1 max-w-xs sm:max-w-none">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO local court — une seule section dense */}
      <section
        className="py-14 md:py-16 bg-gray-50"
        aria-labelledby="local-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2
            id="local-heading"
            className="text-2xl md:text-3xl font-bold text-gray-900"
          >
            Votre taxi à Cannes : aéroport, gare, Croisette, centre-ville
          </h2>
          <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
            <p>
              Vous cherchez un{" "}
              <strong className="text-gray-900">taxi à Cannes</strong> pour
              aujourd’hui ? Appelez le{" "}
              <a
                href={SITE_PHONE_TEL}
                className="text-accent font-bold tabular-nums hover:underline"
              >
                {SITE_PHONE_DISPLAY}
              </a>
              : nous desservons tout Cannes (06400), le{" "}
              <Link
                href="/services/transfert-aeroport-nice-cannes"
                className="font-semibold text-accent underline-offset-2 hover:underline"
              >
                taxi Cannes aéroport Nice
              </Link>
              , la{" "}
              <Link
                href="/blog/taxi-gare-cannes-service-transport-sncf-2025"
                className="font-semibold text-accent underline-offset-2 hover:underline"
              >
                gare SNCF
              </Link>
              , la{" "}
              <Link
                href="/secteurs/la-croisette"
                className="font-semibold text-accent underline-offset-2 hover:underline"
              >
                Croisette
              </Link>
              , le <strong className="text-gray-900">centre-ville</strong> et
              les{" "}
              <Link
                href="/services/cannes-monaco"
                className="font-semibold text-accent underline-offset-2 hover:underline"
              >
                longues distances
              </Link>{" "}
              (Monaco, golfe de Saint-Tropez…).
            </p>
            <p>
              Le{" "}
              <strong className="text-gray-900">
                taxi Cannes transfert aéroport
              </strong>{" "}
              est l’une de nos demandes les plus fréquentes : nous annonçons le
              prix avant le départ lorsque le trajet est défini. Pour le{" "}
              <strong className="text-gray-900">taxi Cannes gare</strong> ou un{" "}
              <strong className="text-gray-900">taxi Croisette Cannes</strong>,
              précisez votre point de rendez-vous : nous connaissons les
              contraintes du Festival, des congrès et de la saison estivale.
            </p>
            <p>
              Nous assurons aussi des trajets en{" "}
              <Link
                href="/services/taxi-conventionne-cpam-cannes"
                className="font-semibold text-accent underline-offset-2 hover:underline"
              >
                taxi conventionné CPAM à Cannes
              </Link>{" "}
              lorsque votre situation le permet : indiquez-le dès l’appel pour
              vérifier l’éligibilité et les formalités, sans engagement.
            </p>
            <p>
              Pour un{" "}
              <strong className="text-gray-900">transport médical assis</strong>, un
              trajet vers hôpital ou clinique ou un{" "}
              <strong className="text-gray-900">taxi conventionné</strong> (prise
              en charge CPAM), le même numéro permet de faire le point : nous
              vérifions avec vous ce qui est possible selon votre dossier et les
              obligations de la caisse.
            </p>
          </div>
        </div>
      </section>

      {/* Pourquoi nous — ton « Cannes » (événements & exigence) */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
            Pourquoi un taxi à Cannes qui connaît la ville (et les événements) ?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Clock,
                title: "Timing congrès & Festival",
                desc: "Horaires serrés, accès déviés : on s’adapte au calme du lieu.",
              },
              {
                icon: MapPin,
                title: "Palaces & Croisette",
                desc: "Déposes discrètes, accès hôtels et front de mer.",
              },
              {
                icon: Car,
                title: "Véhicules premium",
                desc: "Berlines et van : confort pour affaires ou famille.",
              },
              {
                icon: Users,
                title: "Disponible 24h/24",
                desc: "Nuit, week-end, haute saison : même numéro.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="text-center sm:text-left">
                  <Icon className="w-10 h-10 mx-auto sm:mx-0 mb-3 text-accent" />
                  <h3 className="font-bold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CPAM — rappel mesuré (pas un doublon de page Cagnes : angle médical + appel) */}
      <section className="py-10 bg-blue-50/80 border-y border-blue-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex gap-4">
            <ShieldCheck
              className="w-10 h-10 text-blue-700 shrink-0"
              aria-hidden
            />
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Taxi conventionné CPAM & transport médical assis à Cannes
              </h2>
              <p className="mt-2 text-gray-700 text-sm md:text-base leading-relaxed">
                <strong className="text-gray-900">Taxi conventionné</strong>,{" "}
                <strong className="text-gray-900">transport médical assis</strong> et trajets
                hospitaliers : tout est vérifié{" "}
                <strong className="text-gray-900">
                  sous conditions d’éligibilité CPAM
                </strong>
                . Une question sur votre prise en charge ou un rendez-vous
                hospitalier ? Appelez-nous avant de monter en voiture.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Button
              href={SITE_PHONE_TEL}
              variant="call"
              size="lg"
              className="font-bold"
              aria-label={`Appeler Taxi Cannes au ${SITE_PHONE_DISPLAY}`}
            >
              <Phone className="w-5 h-5" aria-hidden />
              {SITE_PHONE_DISPLAY}
            </Button>
            <Button
              href="/services/taxi-conventionne-cpam-cannes"
              variant="secondary"
              size="lg"
            >
              Fiche taxi CPAM
            </Button>
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-gray-600">
          Préférez écrire ?{" "}
          <Link
            href="/contact"
            className="font-medium text-blue-800 underline underline-offset-2 hover:text-blue-900"
          >
            Page Contact
          </Link>
        </p>
        </div>
      </section>

      {/* Trajets populaires — SEO + CTA appel */}
      <section className="py-14 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center max-w-3xl mx-auto">
            Trajets fréquents en taxi depuis Cannes
          </h2>
          <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">
            Liens vers nos pages détaillées — même infos qu’au téléphone.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {popularRoutes.map((item) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.title}
                  className="flex flex-col h-full border-gray-200 hover:border-accent/40 hover:shadow-md transition-shadow p-0 overflow-hidden"
                >
                  <Link
                    href={item.href}
                    className="flex flex-col flex-1 p-5 pb-3 min-h-0 hover:bg-gray-50/90 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
                  >
                    <Icon className="w-8 h-8 text-accent mb-3" aria-hidden />
                    <h3 className="font-bold text-lg text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2 grow">{item.desc}</p>
                    <span className="mt-3 inline-flex items-center gap-0.5 text-sm font-medium text-accent group-hover:underline underline-offset-2">
                      En savoir plus
                      <ChevronRight
                        className="w-4 h-4 opacity-80"
                        aria-hidden
                      />
                    </span>
                  </Link>
                  <div className="p-5 pt-3 mt-auto border-t border-gray-100 bg-white">
                    <Button
                      href={SITE_PHONE_TEL}
                      variant="call"
                      size="lg"
                      className="w-full justify-center text-sm font-semibold rounded-full py-3.5"
                      aria-label={`Appeler pour ${item.title}`}
                    >
                      <Phone className="w-4 h-4 shrink-0" aria-hidden />
                      Appeler pour ce trajet
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services — 4 blocs */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
            Nos services taxi à Cannes
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {serviceBlocks.map((s) => (
              <Card
                key={s.title}
                className="flex flex-col h-full border-gray-200 p-0 overflow-hidden"
              >
                <Link
                  href={s.href}
                  className="flex flex-col flex-1 p-5 pb-3 min-h-0 hover:bg-gray-50/90 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
                >
                  <h3 className="font-bold text-gray-900">{s.title}</h3>
                  <p className="text-sm text-gray-600 mt-2 grow">{s.desc}</p>
                  <span className="mt-3 inline-flex items-center gap-0.5 text-sm font-medium text-accent group-hover:underline underline-offset-2">
                    Détails
                    <ChevronRight
                      className="w-4 h-4 opacity-80"
                      aria-hidden
                    />
                  </span>
                </Link>
                <div className="p-5 pt-3 mt-auto border-t border-gray-100 bg-white">
                  <Button
                    href={SITE_PHONE_TEL}
                    variant="call"
                    size="lg"
                    className="w-full justify-center text-sm font-bold rounded-full py-3.5 gap-1.5"
                    aria-label={`Appeler pour ${s.title}`}
                  >
                    <Phone className="w-4 h-4 shrink-0" aria-hidden />
                    Appeler
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Réservation rapide — bandeau */}
      <section className="py-12 bg-accent text-accent-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl md:text-2xl font-bold">
            Besoin d’un taxi immédiatement à Cannes ?
          </h2>
          <p className="mt-2 text-white/90 text-sm md:text-base">
            Appelez maintenant — nous indiquons le délai et le véhicule adapté.
          </p>
          <p className="mt-2 text-white/80 text-xs md:text-sm max-w-lg mx-auto">
            Transport médical assis ou taxi conventionné CPAM ? Mentionnez-le : nous vérifions
            l’éligibilité avec vous.
          </p>
          <Button
            href={SITE_PHONE_TEL}
            variant="soft"
            size="xl"
            className="mt-6 text-lg font-bold"
            aria-label={`Appeler Taxi Cannes au ${SITE_PHONE_DISPLAY}`}
          >
            <Phone className="w-5 h-5" aria-hidden />
            {SITE_PHONE_DISPLAY}
          </Button>
        </div>
      </section>

      {/* Flotte — confiance visuelle légère */}
      <section className="py-14 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Flotte taxi Cannes
            </h2>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              Véhicules confortables pour particuliers et groupes.
            </p>
          </div>
          <VehicleCarousel vehicles={vehicles} />
        </div>
      </section>

      {/* Aéroport — bandeau conversion */}
      <section className="py-14 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold leading-tight">
              Taxi Cannes — transfert aéroport Nice
            </h2>
            <p className="mt-4 text-primary-foreground/90 text-sm md:text-base">
              <strong>Taxi Cannes aéroport Nice</strong> : prise en charge au
              terminal, aide bagages, durée selon trafic. Prix annoncé quand le
              trajet est défini.
            </p>
            <ul className="mt-6 space-y-2 text-sm md:text-base">
              {[
                "Suivi de vol sur demande",
                "Idéal après un vol long-courrier",
                "Réservation ou appel express",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-accent shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                href={SITE_PHONE_TEL}
                variant="call"
                size="lg"
                className="font-bold"
                aria-label={`Appeler pour un transfert aéroport au ${SITE_PHONE_DISPLAY}`}
              >
                Appeler pour l’aéroport
              </Button>
              <Button
                href="/services/transfert-aeroport-nice-cannes"
                variant="accent"
                size="lg"
              >
                Page transfert
              </Button>
            </div>
          </div>
          <Image
            src="/arrivée-glc-2.jpeg"
            alt="Transfert taxi Cannes aéroport Nice Côte d’Azur"
            width={520}
            height={380}
            className="rounded-xl shadow-xl w-full h-auto object-cover max-h-[320px] lg:max-h-[380px]"
          />
        </div>
      </section>

      {/* Avis — social proof court */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Ils nous ont fait confiance
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Marie D.",
                rating: 5,
                review:
                  "Service impeccable pour notre séjour. Chauffeur ponctuel à Cannes.",
              },
              {
                name: "Jean M.",
                rating: 5,
                review: "Transfert Nice–Cannes sans stress, véhicule propre.",
              },
              {
                name: "Sophie L.",
                rating: 5,
                review:
                  "Parfait pendant un congrès. Taxi Cannes fiable sur la Croisette.",
              },
            ].map((review, i) => (
              <Card key={i} className="p-6 flex flex-col h-full">
                <div className="flex gap-1 mb-3">
                  {Array(review.rating)
                    .fill(0)
                    .map((_, j) => (
                      <Star
                        key={j}
                        className="w-4 h-4 fill-accent text-accent"
                      />
                    ))}
                </div>
                <p className="text-gray-800 italic grow text-sm">
                  &ldquo;{review.review}&rdquo;
                </p>
                <p className="font-bold text-sm mt-4 pt-4 border-t">
                  {review.name}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 id="faq-heading" className="text-2xl md:text-3xl font-bold">
            Questions fréquentes — taxi Cannes
          </h2>
          <div className="mt-8 space-y-3">
            {faqItems.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-gray-200 bg-white open:shadow-sm"
              >
                <summary className="cursor-pointer list-none font-semibold text-gray-900 px-4 py-4 flex items-center justify-between gap-2">
                  {item.q}
                  <ChevronRight className="w-5 h-5 shrink-0 transition-transform group-open:rotate-90 text-accent" />
                </summary>
                <div className="px-4 pb-4 pt-0">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 bg-accent text-accent-foreground">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-bold">
            Taxi Cannes : un numéro, une réponse.
          </h2>
          <p className="mt-4 text-accent-foreground/90">
            Pour un taxi à Cannes maintenant ou sur réservation, appelez — c’est
            le plus direct.
          </p>
          <Button
            href={SITE_PHONE_TEL}
            variant="dark"
            size="xl"
            className="mt-8 text-lg font-bold gap-2"
            aria-label={`Appeler Taxi Cannes au ${SITE_PHONE_DISPLAY}`}
          >
            <Phone className="w-5 h-5" aria-hidden />
            {SITE_PHONE_DISPLAY}
          </Button>
          <p className="mt-4 text-sm opacity-90">
            <Link
              href="/reservation"
              className="font-bold underline underline-offset-2"
            >
              Réserver en ligne
            </Link>
            {" · "}
            <Link
              href="/contact"
              className="font-bold underline underline-offset-2"
            >
              Contact
            </Link>
            {" · "}
            <Link
              href="/tarifs"
              className="font-bold underline underline-offset-2"
            >
              Tarifs
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
