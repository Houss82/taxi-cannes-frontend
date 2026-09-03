// Page service : taxi / transfert depuis ou vers les palaces de Cannes

export const revalidate = 86400;

import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Building2,
  Plane,
  CheckCircle,
  ChevronRight,
  Luggage,
  Calendar,
} from "lucide-react";
import Button from "@/app/components/ui/Button";
import {
  SITE_PHONE_DISPLAY,
  SITE_PHONE_TEL,
} from "@/app/lib/contact";

const canonical = "https://www.cannestaxi.fr/services/trajets-palaces";

export const metadata = {
  title: "Taxi Palaces Cannes | Carlton, Martinez & Majestic",
  description:
    "Réservez un taxi depuis ou vers le Carlton, le Martinez ou le Majestic à Cannes. Transfert aéroport Nice, gare, Palais. Forfait Croisette / palaces 100 € (grille aéroport). +33 7 56 82 77 99.",
  keywords: [
    "taxi palaces Cannes",
    "taxi Carlton Cannes",
    "taxi Martinez Cannes",
    "taxi Majestic Cannes",
    "transfert palace aéroport Nice",
    "prise en charge palace Cannes",
  ],
  alternates: { canonical },
  openGraph: {
    title: "Taxi Palaces Cannes | Carlton, Martinez & Majestic",
    description:
      "Taxi depuis ou vers les palaces de la Croisette à Cannes. Réservation en ligne ou par téléphone.",
    url: canonical,
    siteName: "Taxi Cannes",
    locale: "fr_FR",
    type: "website",
  },
};

const faqItems = [
  {
    q: "Quel est le tarif entre l'aéroport de Nice et un palace de Cannes ?",
    a: "Le forfait réservation Aéroport Nice ↔ Croisette / palaces est de 100 € (grille Tarifs et page transfert aéroport Nice–Cannes). Montant confirmé à la réservation.",
  },
  {
    q: "Peut-on réserver un taxi depuis le Carlton à Cannes ?",
    a: "Oui. Indiquez le nom Carlton, l'entrée souhaitée, l'heure et la destination (aéroport, gare, Palais, autre adresse). Confirmation avant le départ.",
  },
  {
    q: "Assurez-vous les prises en charge au Martinez ?",
    a: "Oui, au point convenu le jour J — entrée principale, bagages ou accès indiqué par la conciergerie. Précisez le nom Martinez à la réservation.",
  },
  {
    q: "Peut-on réserver un départ depuis le Majestic ?",
    a: "Oui. Même principe : nom de l'hôtel, heure, destination et volume de bagages. La dépose se fait au point autorisé le plus proche.",
  },
  {
    q: "Peut-on rejoindre la gare de Cannes depuis un palace ?",
    a: "Oui. Course locale avec bagages : tarif confirmé à la réservation. Indiquez l'horaire de train pour caler la marge.",
  },
  {
    q: "Comment réserver pour un départ tôt le matin depuis un palace ?",
    a: "Réservez à l'avance via le formulaire ou par téléphone en précisant l'heure exacte et, pour un vol, le terminal et l'heure de décollage.",
  },
  {
    q: "Quelle différence entre un trajet palace et une mise à disposition ?",
    a: "Cette page couvre une course ou un transfert ponctuel (palace → aéroport, gare, Palais, etc.). Pour plusieurs arrêts la même journée, voir la mise à disposition 4 h ou 8 h sur la page chauffeur privé.",
  },
  {
    q: "Peut-on réserver pendant un congrès ou un événement à Cannes ?",
    a: "Oui. En période chargée (Festival, MIPIM, Lions), anticipez la réservation : circulation dense devant les palaces aux heures de pointe.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  "@id": `${canonical}#service`,
  name: "Taxi Cannes — Trajets palaces",
  url: canonical,
  telephone: "+33 7 56 82 77 99",
  description:
    "Taxi et transfert depuis ou vers les palaces Carlton, Martinez et Majestic à Cannes. Réservation en ligne ou par téléphone.",
  areaServed: { "@type": "City", name: "Cannes" },
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: "https://www.cannestaxi.fr/reservation",
    servicePhone: "+33 7 56 82 77 99",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Accueil",
      item: "https://www.cannestaxi.fr/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://www.cannestaxi.fr/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Trajets palaces",
      item: canonical,
    },
  ],
};

export default function TrajetsPalaces() {
  return (
    <main className="min-h-screen bg-white">
      <Script
        id="trajets-palaces-service-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="trajets-palaces-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="trajets-palaces-breadcrumb-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Hero */}
      <section className="relative min-h-[85vh] md:h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-20">
        <Image
          src="/taxi-palaces-cannes-croisette-hero.png"
          alt="Taxi palaces Cannes — Carlton, Martinez et Majestic sur la Croisette"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white max-w-3xl px-6">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-accent/25 rounded-full border border-accent/40">
            <Building2 className="w-5 h-5 text-accent" aria-hidden />
            <span className="text-sm font-bold text-white uppercase tracking-wider">
              Carlton · Martinez · Majestic
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-5 leading-tight text-balance">
            Taxi palaces Cannes&nbsp;: Carlton, Martinez et Majestic
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/92 text-balance leading-relaxed">
            Départ ou arrivée devant votre palace sur la Croisette — aéroport
            Nice, gare, Palais des Festivals ou rendez-vous en ville.{" "}
            <strong className="text-white">Réservation en ligne ou par téléphone.</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              href="/reservation"
              size="lg"
              className="bg-accent text-accent-foreground hover:opacity-90 px-8 py-6 text-lg w-full sm:w-auto"
            >
              Réserver
            </Button>
            <Button
              href={SITE_PHONE_TEL}
              variant="secondaryInverse"
              size="lg"
              className="px-8 py-6 text-lg w-full sm:w-auto"
              aria-label={`Appeler Taxi Cannes au ${SITE_PHONE_DISPLAY}`}
            >
              <Phone className="w-5 h-5 shrink-0" aria-hidden />
              Appeler
            </Button>
          </div>
        </div>
      </section>

      {/* KPI */}
      <section className="py-12 md:py-16 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {[
              {
                icon: Building2,
                label: "3 palaces",
                desc: "Carlton, Martinez, Majestic",
              },
              {
                icon: Plane,
                label: "100 €",
                desc: "Forfait aéroport ↔ palaces",
              },
              {
                icon: Luggage,
                label: "Bagages",
                desc: "Précisez le volume à la réservation",
              },
              {
                icon: Calendar,
                label: "Réservation",
                desc: "En ligne ou par téléphone",
              },
            ].map((info) => {
              const Icon = info.icon;
              return (
                <div
                  key={info.label}
                  className="text-center p-5 md:p-6 bg-white rounded-2xl border border-gray-200 shadow-sm"
                >
                  <Icon
                    className="w-7 h-7 md:w-8 md:h-8 mx-auto mb-3 text-accent"
                    aria-hidden
                  />
                  <h3 className="font-bold text-lg text-gray-900">
                    {info.label}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {info.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-linear-to-b from-accent/5 via-white to-accent/5">
        <div className="max-w-5xl mx-auto px-6 space-y-16 md:space-y-20">
          {/* Intro */}
          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Vous logez au <strong className="text-gray-900">Carlton</strong>, au{" "}
              <strong className="text-gray-900">Martinez</strong> ou au{" "}
              <strong className="text-gray-900">Majestic</strong> et vous devez
              organiser un trajet sans improviser sur la Croisette. Cette page sert
              à <strong className="text-gray-900">réserver une course ou un transfert</strong>{" "}
              depuis ou vers l&apos;un de ces établissements — pas à décrire le
              quartier (voir le{" "}
              <Link
                href="/secteurs/la-croisette"
                className="text-accent font-semibold hover:underline underline-offset-2"
              >
                secteur La Croisette
              </Link>
              ).
            </p>
          </div>

          {/* Taxi depuis ou vers palace */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
              Taxi depuis ou vers votre palace à Cannes
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Nous prenons en charge les départs et arrivées devant les palaces
              cités sur la Croisette&nbsp;: check-out matinal, transfert vers
              l&apos;aéroport, liaison gare SNCF, rendez-vous au Palais des
              Festivals ou course locale avec valises.
            </p>
            <ul className="space-y-3 text-gray-700">
              {[
                "Départ depuis la réception ou l'entrée indiquée par l'hôtel",
                "Arrivée à l'hôtel depuis l'aéroport, la gare ou un autre point",
                "Bagages : précisez le nombre de valises à la réservation",
                "Dépose au point autorisé le plus proche — sans promesse d'accès parking réservé",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Palaces */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Carlton, Martinez et Majestic&nbsp;: prise en charge à Cannes
            </h2>
            <div className="space-y-8">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Carlton Cannes
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Indiquez <strong>Carlton</strong>, l&apos;entrée souhaitée et
                  l&apos;heure de départ. Utile pour un transfert aéroport, un
                  départ gare ou un rendez-vous au Palais. Nous ne disposons
                  d&apos;aucun partenariat officiel avec l&apos;établissement&nbsp;;
                  la prise en charge se fait au point convenu le jour J.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Hôtel Martinez
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Même logique pour le <strong>Martinez</strong>&nbsp;: nom
                  d&apos;hôtel, créneau horaire, destination et bagages. En
                  période d&apos;événements, la circulation devant l&apos;hôtel
                  peut être dense — une réservation anticipée limite l&apos;attente.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Majestic Cannes
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Face mer, proche du Palais des Festivals. Précisez{" "}
                  <strong>Majestic</strong> et l&apos;entrée si la conciergerie
                  vous en a indiqué une. Idéal pour enchaîner hôtel ↔ congrès le
                  même jour en course ponctuelle.
                </p>
              </div>
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Depuis votre palace vers les principales destinations
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
              <table className="w-full min-w-[560px] text-left text-sm md:text-base">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 font-bold border-b">Destination</th>
                    <th className="px-4 py-3 font-bold border-b">Usage typique</th>
                    <th className="px-4 py-3 font-bold border-b">Tarif / info</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-3 border-b font-medium">
                      Aéroport Nice Côte d&apos;Azur (T1 / T2)
                    </td>
                    <td className="px-4 py-3 border-b text-gray-700">
                      Vol, check-out, bagages
                    </td>
                    <td className="px-4 py-3 border-b">
                      Forfait{" "}
                      <Link
                        href="/services/transfert-aeroport-nice-cannes"
                        className="text-accent font-semibold hover:underline underline-offset-2"
                      >
                        aéroport ↔ palaces
                      </Link>{" "}
                      <strong>100 €</strong>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 border-b font-medium">
                      Gare SNCF de Cannes
                    </td>
                    <td className="px-4 py-3 border-b text-gray-700">
                      Train TER / TGV, correspondance
                    </td>
                    <td className="px-4 py-3 border-b text-gray-700">
                      Tarif confirmé à la réservation
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border-b font-medium">
                      Palais des Festivals
                    </td>
                    <td className="px-4 py-3 border-b text-gray-700">
                      Congrès, séance, événement
                    </td>
                    <td className="px-4 py-3 border-b text-gray-700">
                      Course locale — tarif confirmé à la réservation
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium">Monaco</td>
                    <td className="px-4 py-3 text-gray-700">
                      Longue distance depuis la Croisette
                    </td>
                    <td className="px-4 py-3">
                      Forfait public{" "}
                      <Link
                        href="/services/cannes-monaco"
                        className="text-accent font-semibold hover:underline underline-offset-2"
                      >
                        Cannes → Monaco
                      </Link>{" "}
                      <strong>160 €</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Grille complète sur la page{" "}
              <Link
                href="/tarifs"
                className="text-accent font-semibold hover:underline underline-offset-2"
              >
                Tarifs
              </Link>
              .
            </p>
          </div>

          {/* Aéroport */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Aéroport Nice et palaces de la Croisette
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Les transferts entre l&apos;aéroport Nice Côte d&apos;Azur et les
              palaces de la Croisette relèvent du service{" "}
              <Link
                href="/services/transfert-aeroport-nice-cannes"
                className="text-accent font-semibold hover:underline underline-offset-2"
              >
                transfert aéroport Nice–Cannes
              </Link>
              . Sur la grille publiée&nbsp;:
            </p>
            <div className="rounded-2xl border-2 border-accent/40 bg-white p-8 md:p-10 shadow-md text-center mb-6">
              <p className="text-sm font-bold text-accent uppercase tracking-wider mb-2">
                Forfait réservation
              </p>
              <p className="text-lg text-gray-700 mb-2">
                Aéroport Nice ↔ Croisette / palaces
              </p>
              <p className="text-5xl font-bold text-accent mb-4">100 €</p>
              <p className="text-sm text-muted-foreground max-w-lg mx-auto">
                Affiché sur{" "}
                <Link
                  href="/tarifs"
                  className="text-accent font-semibold hover:underline underline-offset-2"
                >
                  Tarifs
                </Link>{" "}
                (Aéroport Nice → Palaces) et page transfert aéroport (Nice ↔
                Croisette / palaces). Van 8 places&nbsp;: forfait{" "}
                <strong>120 €</strong> sur la page aéroport. Confirmé à la
                réservation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                href="/reservation"
                size="xl"
                className="bg-accent text-accent-foreground hover:opacity-90 px-8"
              >
                Réserver un transfert aéroport
              </Button>
              <Button
                href="/services/transfert-aeroport-nice-cannes"
                variant="outline"
                size="xl"
                className="px-8"
              >
                Voir le service aéroport
              </Button>
            </div>
          </div>

          {/* Trajet vs MAD */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
              Trajet ponctuel ou chauffeur à disposition&nbsp;?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Trajets palaces</strong> (cette page)&nbsp;: une course ou
              un transfert — palace → aéroport, palace → gare, palace → Palais,
              etc.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Chauffeur privé</strong>&nbsp;: plusieurs déplacements
              dans la même fenêtre (hôtel, Palais, déjeuner, retour). Mise à
              disposition{" "}
              <strong>4 h (240 €)</strong> ou <strong>8 h (420 €)</strong> sur
              la grille{" "}
              <Link
                href="/tarifs"
                className="text-accent font-semibold hover:underline underline-offset-2"
              >
                Tarifs
              </Link>
              .
            </p>
            <Button
              href="/services/chauffeur-prive-cannes"
              variant="outline"
              size="lg"
              className="px-8"
            >
              Mise à disposition — chauffeur privé
            </Button>
          </div>

          {/* Événements */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
              Déplacements pendant les congrès et événements à Cannes
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Pendant le <strong>Festival de Cannes</strong>, le{" "}
              <strong>MIPIM</strong> ou le <strong>Cannes Lions</strong>, la
              Croisette se sature aux heures de sortie des congrès. Anticiper la
              réservation depuis votre palace limite l&apos;incertitude devant
              l&apos;hôtel.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Contexte accès Palais&nbsp;:{" "}
              <Link
                href="/blog/taxi-palais-des-festivals-cannes-acces-congres-evenements-2026"
                className="text-accent font-semibold hover:underline underline-offset-2"
              >
                taxi Palais des Festivals
              </Link>
              . Mobilité Lions&nbsp;:{" "}
              <Link
                href="/blog/taxi-cannes-lions-2026-guide-chauffeur-reservation"
                className="text-accent font-semibold hover:underline underline-offset-2"
              >
                guide Cannes Lions
              </Link>
              . Aucune disponibilité ni durée de trajet n&apos;est garantie en
              période d&apos;événement.
            </p>
          </div>

          {/* Réservation */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Comment réserver votre taxi depuis un palace&nbsp;?
            </h2>
            <ol className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                "Palace ou point de départ (Carlton, Martinez, Majestic…)",
                "Destination (aéroport, gare, Palais, adresse)",
                "Date et heure souhaitées",
                "Nombre de passagers",
                "Bagages si pertinent",
                "N° de vol ou de train si nécessaire",
              ].map((step, i) => (
                <li
                  key={step}
                  className="rounded-xl border border-gray-100 bg-white p-4 flex gap-3"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-white text-sm font-bold">
                    {i + 1}
                  </span>
                  <span className="text-gray-800 font-medium pt-1">{step}</span>
                </li>
              ))}
            </ol>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                href="/reservation"
                size="xl"
                className="bg-accent text-accent-foreground hover:opacity-90 px-8"
              >
                Réserver
              </Button>
              <Button href={SITE_PHONE_TEL} variant="call" size="xl" className="px-8">
                <Phone className="w-5 h-5 shrink-0" aria-hidden />
                Appeler — {SITE_PHONE_DISPLAY}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
            Questions fréquentes
          </h2>
          <div className="space-y-3">
            {faqItems.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-gray-200 bg-white p-5 md:p-6 shadow-sm open:border-accent/30"
              >
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between gap-4 items-start">
                  <span>{item.q}</span>
                  <ChevronRight className="w-5 h-5 shrink-0 text-accent group-open:rotate-90 transition-transform mt-0.5" />
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Réserver un taxi palace à Cannes
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Carlton, Martinez ou Majestic — confirmation avant le départ.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              href="/reservation"
              size="xl"
              className="bg-accent text-accent-foreground hover:opacity-90 px-8"
            >
              Réserver
            </Button>
            <Button
              href={SITE_PHONE_TEL}
              variant="secondaryInverse"
              size="xl"
              className="px-8"
            >
              <Phone className="w-5 h-5 shrink-0" aria-hidden />
              {SITE_PHONE_DISPLAY}
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
