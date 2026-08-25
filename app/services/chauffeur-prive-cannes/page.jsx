// Page service : chauffeur privé / mise à disposition à Cannes

export const revalidate = 86400;

import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Clock,
  Calendar,
  MapPin,
  Building2,
  Briefcase,
  Landmark,
  Compass,
  Plane,
  CheckCircle,
  ChevronRight,
  Users,
} from "lucide-react";
import Button from "@/app/components/ui/Button";
import {
  SITE_PHONE_DISPLAY,
  SITE_PHONE_TEL,
} from "@/app/lib/contact";

const canonical =
  "https://www.cannestaxi.fr/services/chauffeur-prive-cannes";

export const metadata = {
  title: "Chauffeur privé Cannes | Mise à disposition 4h & 8h",
  description:
    "Chauffeur privé à Cannes : mise à disposition 4h ou 8h pour congrès, palaces et déplacements multiples. Réservez votre voiture avec chauffeur.",
  keywords: [
    "chauffeur privé Cannes",
    "mise à disposition Cannes",
    "chauffeur journée Cannes",
    "chauffeur demi-journée Cannes",
    "voiture avec chauffeur Cannes",
    "chauffeur privé congrès Cannes",
  ],
  alternates: { canonical },
  openGraph: {
    title: "Chauffeur privé Cannes | Mise à disposition 4h & 8h",
    description:
      "Mise à disposition avec chauffeur à Cannes : 4h ou 8h, plusieurs déplacements, réservation en ligne ou par téléphone.",
    url: canonical,
    siteName: "Taxi Cannes",
    locale: "fr_FR",
    type: "website",
  },
};

const faqItems = [
  {
    q: "Combien coûte un chauffeur privé à Cannes ?",
    a: "Le tarif dépend de la durée (4 h ou 8 h), du planning et du véhicule. Il est confirmé à la réservation.",
  },
  {
    q: "Peut-on réserver un chauffeur pour 4 heures ?",
    a: "Oui. La demi-journée (4 h) correspond à une mise à disposition : plusieurs déplacements dans cette fenêtre, sans re-réserver à chaque étape.",
  },
  {
    q: "Peut-on réserver un chauffeur pour toute la journée ?",
    a: "Oui. Le forfait journée est de 8 heures. Indiquez l’heure de début et le programme approximatif à la réservation.",
  },
  {
    q: "Quelle différence entre un taxi et une mise à disposition ?",
    a: "Un taxi classique couvre un trajet (point A → point B). Une mise à disposition réserve le chauffeur et le véhicule pour une durée, afin d’enchaîner plusieurs arrêts.",
  },
  {
    q: "Peut-on effectuer plusieurs arrêts ?",
    a: "Oui, c’est l’objet de la prestation : hôtel, rendez-vous, restaurant, Palais, retour — dans la durée réservée.",
  },
  {
    q: "Peut-on réserver pour un congrès à Cannes ?",
    a: "Oui. C’est un usage fréquent (Palais des Festivals, Lions, MIPIM, Festival). Réservez à l’avance en période chargée et précisez les adresses d’entrée.",
  },
  {
    q: "Peut-on partir de son hôtel ?",
    a: "Oui. La prise en charge se fait à l’adresse indiquée : palace Croisette, hôtel centre, résidence. Donnez le nom de l’établissement et l’entrée.",
  },
  {
    q: "Peut-on aller à Monaco ou Saint-Tropez ?",
    a: "Oui, dans le cadre d’une mise à disposition, selon la durée et le planning. Un aller simple vers Monaco ou Saint-Tropez se réserve plutôt comme un transfert ponctuel.",
  },
  {
    q: "Peut-on réserver depuis l’aéroport de Nice ?",
    a: "Pour un seul trajet NCE ↔ Cannes, utilisez la page transfert aéroport. Si vous voulez un véhicule plusieurs heures après l’arrivée, réservez une mise à disposition en plus du transfert.",
  },
  {
    q: "Comment réserver ?",
    a: "Formulaire en ligne (date, heure, départ, passagers, notes : durée 4h ou 8h et programme) ou téléphone. Confirmation avant le départ.",
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
  name: "Taxi Cannes — Chauffeur privé / mise à disposition",
  url: canonical,
  telephone: "+33 7 56 82 77 99",
  description:
    "Mise à disposition avec chauffeur à Cannes : 4 heures ou 8 heures pour congrès, palaces et déplacements multiples.",
  areaServed: [
    { "@type": "City", name: "Cannes" },
    { "@type": "City", name: "Le Cannet" },
    { "@type": "City", name: "Mougins" },
  ],
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
      name: "Chauffeur privé",
      item: canonical,
    },
  ],
};

export default function ChauffeurPriveCannesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Script
        id="chauffeur-prive-service-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <Script
        id="chauffeur-prive-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <Script
        id="chauffeur-prive-breadcrumb-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <Image
          src="/chauffeur-prive-cannes-hero.png"
          alt="Mercedes Classe S — chauffeur privé et mise à disposition à Cannes"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/45" aria-hidden />
        <div className="relative z-10 text-center text-white max-w-3xl px-6">
          <nav className="mb-6 text-sm text-white/75" aria-label="Fil d’Ariane">
            <Link href="/" className="hover:text-white font-medium">
              Accueil
            </Link>
            <span className="mx-2 text-white/40" aria-hidden>
              /
            </span>
            <Link href="/services" className="hover:text-white font-medium">
              Services
            </Link>
            <span className="mx-2 text-white/40" aria-hidden>
              /
            </span>
            <span className="text-white">Chauffeur privé</span>
          </nav>
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-accent/20 rounded-full border border-accent/30">
            <Clock className="w-5 h-5 text-accent" aria-hidden />
            <span className="text-sm font-bold uppercase tracking-wider">
              4 h · 8 h · Côte d’Azur
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 leading-tight text-balance">
            Chauffeur privé à Cannes — mise à disposition 4h / 8h
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90 text-balance max-w-2xl mx-auto">
            Un véhicule et un chauffeur dédiés pour la demi-journée ou la
            journée : plusieurs déplacements à Cannes et sur la Côte d’Azur,
            sans re-réserver à chaque étape.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
            <Button
              href="/reservation"
              size="xl"
              className="bg-accent text-accent-foreground hover:opacity-90 px-8 py-6 text-lg"
            >
              Réserver votre chauffeur
            </Button>
            <Button
              href={SITE_PHONE_TEL}
              variant="secondaryInverse"
              size="xl"
              className="px-8"
              aria-label={`Appeler Taxi Cannes au ${SITE_PHONE_DISPLAY}`}
            >
              <Phone className="w-5 h-5 shrink-0" aria-hidden />
              {SITE_PHONE_DISPLAY}
            </Button>
          </div>
        </div>
      </section>

      {/* Quick info */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Clock, label: "4 heures", desc: "Demi-journée" },
              { icon: Calendar, label: "8 heures", desc: "Journée" },
              {
                icon: MapPin,
                label: "Plusieurs arrêts",
                desc: "Dans la durée réservée",
              },
              {
                icon: Compass,
                label: "Cannes & alentours",
                desc: "Côte d’Azur selon planning",
              },
            ].map((info) => {
              const Icon = info.icon;
              return (
                <div
                  key={info.label}
                  className="text-center p-6 bg-white rounded-2xl border border-gray-200 shadow-sm"
                >
                  <Icon className="w-8 h-8 mx-auto mb-3 text-accent" aria-hidden />
                  <h3 className="font-bold text-lg text-gray-900">{info.label}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{info.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-linear-to-b from-accent/5 via-white to-accent/5">
        <div className="max-w-5xl mx-auto px-6 space-y-20">
          {/* Différence */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Un chauffeur privé à votre disposition à Cannes
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              La{" "}
              <strong className="text-gray-900">mise à disposition Cannes</strong>{" "}
              n’est pas une course unique. Vous réservez une{" "}
              <strong className="text-gray-900">voiture avec chauffeur</strong>{" "}
              pour une durée : le véhicule reste le vôtre le temps convenu.
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Taxi pour un trajet
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Point A → point B. Un forfait par course : aéroport, gare, un
                  rendez-vous. Une fois déposé, la course est terminée.
                </p>
              </div>
              <div className="rounded-2xl border border-accent/30 bg-accent/5 p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Mise à disposition
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Chauffeur et véhicule disponibles pendant 4 h ou 8 h. Exemple
                  : hôtel → rendez-vous → restaurant → Palais → hôtel, dans la
                  même fenêtre.
                </p>
              </div>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Pour le détail des usages et des exemples de journée, le{" "}
              <Link
                href="/blog/chauffeur-prive-cannes-mise-a-disposition-2026"
                className="text-accent font-semibold hover:underline underline-offset-2"
              >
                guide mise à disposition
              </Link>{" "}
              complète cette page.
            </p>
          </div>

          {/* Forfaits */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Forfaits mise à disposition
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Deux durées : 4 heures (demi-journée) ou 8 heures (journée). Le
              tarif est confirmé à la réservation selon le planning et le
              véhicule.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-md">
                <p className="text-sm font-bold text-accent uppercase tracking-wider mb-2">
                  Demi-journée
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Mise à disposition 4 heures
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <strong className="text-gray-800">Chauffeur demi-journée Cannes</strong>{" "}
                  : enchaîner plusieurs étapes sans reprendre un taxi à chaque
                  fois.
                </p>
              </div>
              <div className="rounded-2xl border-2 border-accent/40 bg-white p-8 shadow-md">
                <p className="text-sm font-bold text-accent uppercase tracking-wider mb-2">
                  Journée
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Mise à disposition 8 heures
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <strong className="text-gray-800">Chauffeur journée Cannes</strong>{" "}
                  : congrès, circuit ou journée professionnelle complète.
                </p>
              </div>
            </div>
            <div className="text-center">
              <Button
                href="/reservation"
                size="xl"
                className="bg-accent text-accent-foreground hover:opacity-90 px-8"
              >
                Réserver votre chauffeur
              </Button>
            </div>
          </div>

          {/* Cas d'usage */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Quand réserver un chauffeur privé à Cannes ?
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                {
                  icon: Landmark,
                  title: "Congrès et événements",
                  text: "Palais des Festivals, Cannes Lions, MIPIM, Festival de Cannes : plusieurs sites dans la même journée, horaires serrés.",
                },
                {
                  icon: Briefcase,
                  title: "Journée professionnelle",
                  text: "Rendez-vous successifs sans réserver un véhicule à chaque déplacement. Le chauffeur reste joignable dans la durée convenue.",
                },
                {
                  icon: Building2,
                  title: "Hôtels et palaces",
                  text: "Hôtel, restaurant, rendez-vous, Palais, retour — depuis la Croisette ou le centre, sans chercher une place.",
                },
                {
                  icon: Compass,
                  title: "Excursions",
                  text: "Plusieurs destinations dans la même fenêtre horaire, avec le même véhicule, plutôt qu’une série de courses isolées.",
                },
                {
                  icon: MapPin,
                  title: "Shopping, restaurants, sorties",
                  text: "Enchaîner boutiques, dîner et retour hôtel le soir, surtout quand le stationnement est saturé.",
                },
                {
                  icon: Users,
                  title: "Groupes",
                  text: "Van (Classe V) sur demande, selon le formulaire de réservation : équipes, familles, bagages volumineux.",
                },
              ].map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
                  >
                    <Icon className="w-7 h-7 text-accent mb-3" aria-hidden />
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {card.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {card.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Côte d'Azur */}
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
                Autour de Cannes, dans la même journée
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Une{" "}
                <strong className="text-gray-900">
                  mise à disposition avec chauffeur à Cannes
                </strong>{" "}
                sert d’abord le bassin local : Croisette, Palais, centre-ville,
                parfois Le Cannet. Quatre heures suffisent souvent pour un
                matin Palais + déjeuner + retour hôtel. Huit heures laissent de
                la marge pour un après-midi hors centre.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Selon la durée, le même créneau peut inclure Mougins, Antibes ou
                Grasse — à condition que le planning tienne dans les 4 ou 8
                heures. Deux villages + un déjeuner long tiennent rarement dans
                une demi-journée : mieux vaut le dire à l’appel que de le
                découvrir en route.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Monaco ou Saint-Tropez restent possibles si la journée est
                calée pour ça. Un aller simple vers ces destinations se traite
                plutôt comme un{" "}
                <Link
                  href="/services/cannes-monaco"
                  className="text-accent font-semibold hover:underline underline-offset-2"
                >
                  transfert ponctuel vers Monaco
                </Link>
                , pas comme une demi-journée « tout compris ».
              </p>
            </div>
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
              <Image
                src="/chauffeur-prive-cannes-habitacle.png"
                alt="Habitacle cuir — mise à disposition chauffeur privé à Cannes"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Congrès */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Chauffeur privé pour congrès et événements à Cannes
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Un{" "}
              <strong className="text-gray-900">
                chauffeur privé congrès Cannes
              </strong>{" "}
              sert surtout à enchaîner les points du planning : prise en charge
              à l’hôtel, Palais des Festivals, rendez-vous hors site,
              restaurants, soirées, retour. En période Lions, MIPIM ou Festival,
              réserver à l’avance reste le plus fiable : les courses à la volée
              se raréfient aux heures de sortie du Palais.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Donnez les adresses exactes (nom d’hôtel, entrée, restaurant).
              Nous n’annonçons pas d’accès VIP ni de dépose dans une zone
              fermée : le chauffeur s’arrête au point autorisé le plus proche
              le jour J.
            </p>
            <ul className="space-y-3">
              {[
                "Prise en charge à l’hôtel (entrée indiquée)",
                "Dépose au plus près des accès autorisés — sans promesse de zone réservée",
                "Attente entre deux rendez-vous, dans la durée réservée",
                "Ajustement d’itinéraire selon le trafic du jour",
              ].map((line) => (
                <li key={line} className="flex gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  {line}
                </li>
              ))}
            </ul>
          </div>

          {/* Palaces */}
          <div className="rounded-2xl bg-white border border-gray-100 shadow-md p-8 md:p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Chauffeur depuis les hôtels et palaces de Cannes
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Prise en charge devant le Carlton, le Martinez, le Majestic ou un
              autre hôtel du centre. Un{" "}
              <strong className="text-gray-900">chauffeur privé Croisette</strong>{" "}
              en mise à disposition n’est pas un simple transfert palace : le
              véhicule reste disponible après la première dépose.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Pour un trajet unique palace → aéroport ou palace → gare, voyez
              plutôt les{" "}
              <Link
                href="/services/trajets-palaces"
                className="text-accent font-semibold hover:underline underline-offset-2"
              >
                trajets palaces
              </Link>
              . La Croisette en détail :{" "}
              <Link
                href="/secteurs/la-croisette"
                className="text-accent font-semibold hover:underline underline-offset-2"
              >
                secteur La Croisette
              </Link>
              .
            </p>
          </div>

          {/* Aéroport */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Aéroport Nice : transfert ou journée ?
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                <Plane className="w-7 h-7 text-accent mb-3" aria-hidden />
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  Uniquement NCE ↔ Cannes
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Un trajet, suivi de vol, T1/T2, prix fixe. Ce n’est pas une
                  mise à disposition.
                </p>
                <Link
                  href="/services/transfert-aeroport-nice-cannes"
                  className="text-accent font-semibold hover:underline underline-offset-2"
                >
                  Transfert aéroport Nice Cannes
                </Link>
              </div>
              <div className="rounded-2xl border border-accent/30 bg-accent/5 p-6">
                <Clock className="w-7 h-7 text-accent mb-3" aria-hidden />
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  Véhicule plusieurs heures après l’arrivée
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Transfert jusqu’à l’hôtel, puis 4 h ou 8 h sur place :
                  réservez la mise à disposition en précisant l’enchaînement
                  (vol + journée).
                </p>
              </div>
            </div>
          </div>

          {/* Excursions */}
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 order-2 lg:order-1">
              <Image
                src="/chauffeur-prive-cannes-poste-conduite.png"
                alt="Poste de conduite Mercedes — chauffeur privé Cannes"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
                Excursions avec le même véhicule
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Villages, parfumeries, déjeuner hors Cannes : la journée (8 h)
                est souvent plus adaptée qu’une série de courses. Le chauffeur
                enchaîne les étapes dans le créneau réservé.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Idées d’itinéraires (hors réservation) :{" "}
                <Link
                  href="/blog/villages-autour-cannes-excursions-transport-2025"
                  className="text-accent font-semibold hover:underline underline-offset-2"
                >
                  excursions autour de Cannes
                </Link>
                .
              </p>
            </div>
          </div>

          {/* Réserver */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Comment réserver un chauffeur privé à Cannes ?
            </h2>
            <ol className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                "Date",
                "Heure de début",
                "Durée souhaitée (4 h ou 8 h) dans les notes",
                "Adresse de prise en charge (champ Départ)",
                "Nombre de passagers",
                "Programme approximatif (notes)",
                "Véhicule si besoin (berline, SUV, van)",
                "Confirmation avant le départ",
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
            <p className="text-gray-700 mb-4 leading-relaxed">
              Le formulaire existant est conçu pour un trajet : indiquez « mise
              à disposition » et la durée dans les notes. Champ Départ = adresse
              de prise en charge ; Destination = première étape ou « mise à
              disposition ». Véhicules proposés dans le formulaire : Tesla Model
              S, Mercedes SUV, Classe V (van). Une Mercedes Classe S peut être
              demandée : elle n’est pas garantie, uniquement selon
              disponibilité.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Paiement à bord, comme pour les autres courses. Confirmation par
              e-mail après envoi du formulaire. Le téléphone reste plus simple
              pour un planning de congrès avec plusieurs adresses.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                href="/reservation"
                size="xl"
                className="bg-accent text-accent-foreground hover:opacity-90 px-8"
              >
                Réserver votre chauffeur
              </Button>
              <Button href={SITE_PHONE_TEL} variant="call" size="xl" className="px-8">
                <Phone className="w-5 h-5 shrink-0" aria-hidden />
                {SITE_PHONE_DISPLAY}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
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
            Réserver une mise à disposition à Cannes
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            4 h ou 8 h, plusieurs déplacements, confirmation avant le départ.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              href="/reservation"
              size="xl"
              className="bg-accent text-accent-foreground hover:opacity-90 px-8"
            >
              Réserver votre chauffeur
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
