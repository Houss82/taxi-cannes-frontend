// Transfert commercial : port de croisière Cannes → aéroport Nice (page conversion)

export const revalidate = 86400;

import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import {
  Anchor,
  CheckCircle,
  Clock,
  Luggage,
  Phone,
  Plane,
  Shield,
  Users,
  MapPin,
} from "lucide-react";
import Button from "@/app/components/ui/Button";

const canonical =
  "https://www.cannestaxi.fr/services/transfert-port-croisiere-cannes-aeroport-nice";

export const metadata = {
  title:
    "Transfert port croisière Cannes → Aéroport Nice | Taxi Cannes",
  description:
    "Taxi après débarquement au port de Cannes vers l’aéroport Nice T1/T2. Berline ou van, bagages, tarif forfaitaire confirmé à la réservation. +33 7 56 82 77 99.",
  keywords: [
    "transfert port cannes aeroport nice",
    "taxi port croisiere cannes",
    "taxi croisiere cannes nice",
    "port cannes aeroport",
  ],
  alternates: { canonical },
  openGraph: {
    title: "Transfert port croisière Cannes → Aéroport Nice | Taxi Cannes",
    description:
      "Débarquement croisière à Cannes puis vol depuis Nice : réservation port → T1/T2, berline ou van, bagages.",
    url: canonical,
    siteName: "Taxi Cannes",
    locale: "fr_FR",
    type: "website",
  },
};

const faqItems = [
  {
    q: "Peut-on réserver un taxi du port de Cannes vers l'aéroport de Nice ?",
    a: "Oui. Réservez via le formulaire ou par téléphone en indiquant le navire, la date, le créneau de débarquement, le terminal (T1 ou T2) et le volume de bagages.",
  },
  {
    q: "Où se fait la prise en charge au port de Cannes ?",
    a: "Au port ou à proximité immédiate, selon le point de rendez-vous indiqué par votre croisiériste (sortie passagers, gare maritime, etc.). Précisez ce repère à la réservation.",
  },
  {
    q: "Quelles informations faut-il fournir lors de la réservation ?",
    a: "Nom du navire, date, créneau prévu de débarquement, nombre de passagers, volume de bagages, terminal T1 ou T2 si connu, et un contact joignable le jour J.",
  },
  {
    q: "Quel est le tarif du transfert Port de Cannes → Aéroport Nice ?",
    a: "Le tarif forfaitaire est confirmé lors de la réservation. Consultez aussi la grille générale sur la page Tarifs. Aucun montant spécifique Port → Nice n'est affiché sur cette page.",
  },
  {
    q: "Peut-on réserver un van avec des bagages ?",
    a: "Oui, selon disponibilité. Indiquez le nombre de passagers et une estimation des bagages pour orienter berline ou van.",
  },
  {
    q: "Peut-on être déposé au Terminal 1 ou au Terminal 2 ?",
    a: "Oui. Communiquez T1 ou T2 à la réservation (billet ou appli compagnie) pour caler la dépose au bon terminal.",
  },
  {
    q: "Que faire si l'horaire de débarquement change ?",
    a: "Prévenez dès que possible (téléphone ou notes de réservation). Nous adaptons le créneau dans la mesure du possible — aucune attente illimitée ni suivi bateau automatique n'est garanti.",
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
  name: "Taxi Cannes — Transfert port croisière → aéroport Nice",
  url: canonical,
  telephone: "+33 7 56 82 77 99",
  description:
    "Transfert taxi depuis le port de Cannes (débarquement croisière) vers l'aéroport Nice Côte d'Azur T1/T2. Réservation en ligne ou par téléphone.",
  areaServed: [
    { "@type": "City", name: "Cannes" },
    { "@type": "Airport", name: "Aéroport Nice Côte d'Azur" },
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
      name: "Port croisière → Aéroport Nice",
      item: canonical,
    },
  ],
};

export default function TransfertPortCroisiereCannesNice() {
  return (
    <main className="min-h-screen bg-white">
      <Script
        id="port-croisiere-service-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="port-croisiere-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="port-croisiere-breadcrumb-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

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
            <strong>Tarif forfaitaire confirmé à la réservation</strong>, berline
            ou <strong>van Mercedes</strong> selon les bagages —
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
            Pour les <strong>durées détaillées</strong>, marges avant vol et
            repères quais, consultez notre{" "}
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
              {
                icon: Shield,
                label: "Forfait",
                desc: "Confirmé à la réservation",
              },
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

      {/* Contenu */}
      <section className="py-16 md:py-24 bg-linear-to-b from-accent/5 via-white to-accent/5">
        <div className="max-w-5xl mx-auto px-6 space-y-16 md:space-y-20">
          {/* Intro */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 text-balance">
              Transfert du port de Cannes vers l&apos;aéroport de Nice
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Ce service couvre un parcours précis&nbsp;:{" "}
              <strong>débarquement au port de Cannes</strong>, puis route vers{" "}
              <strong>l&apos;aéroport Nice Côte d&apos;Azur</strong> (Terminal 1
              ou Terminal 2). Idéal en fin de croisière, avec bagages et un
              horaire de vol à respecter.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Même exigence de ponctualité que nos{" "}
              <Link
                href="/services/transfert-aeroport-nice-cannes"
                className="text-accent font-semibold hover:underline underline-offset-2"
              >
                transferts aéroport Nice ↔ Cannes
              </Link>
              , avec une prise en charge calée sur le{" "}
              <strong>point de rendez-vous portuaire</strong> communiqué par
              votre compagnie.
            </p>
          </div>

          {/* Prise en charge */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 text-balance">
              Où se fait la prise en charge au port de Cannes&nbsp;?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              La prise en charge se fait{" "}
              <strong>
                au port ou à proximité immédiate, selon les consignes de votre
                croisiériste
              </strong>{" "}
              (sortie passagers, gare maritime, parking voisin, etc.). Nous ne
              promettons pas un accès au pied du navire ni une zone fermée&nbsp;:
              le chauffeur vous attend au <strong>point autorisé</strong> le plus
              adapté le jour J.
            </p>
            <ul className="space-y-3 text-gray-800">
              {[
                "Indiquez le nom du navire et la date",
                "Communiquez le créneau de débarquement fourni par la compagnie",
                "Précisez le repère de RDV si vous le connaissez",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* T1 T2 */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 text-balance">
              Dépose au Terminal 1 ou Terminal 2
            </h2>
            <p className="text-gray-700 leading-relaxed">
              L&apos;aéroport Nice Côte d&apos;Azur dispose de deux terminaux
              principaux. Communiquez{" "}
              <strong>T1 ou T2</strong> lors de la réservation (billet ou appli
              compagnie)&nbsp;: cela évite une erreur de dépose et un détour
              inutile une fois sur place. Si le terminal n&apos;est pas encore
              connu, indiquez-le dès que possible avant le départ.
            </p>
          </div>

          {/* Bagages */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 text-balance">
              Bagages, berline ou van
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Après une croisière, le volume de valises dépasse souvent celui
              d&apos;un week-end classique. Annoncez à la réservation&nbsp;:
            </p>
            <ul className="space-y-3 text-gray-800 mb-6">
              {[
                "Nombre de passagers",
                "Nombre ou volume approximatif des bagages",
                "Poussette ou équipement encombrant si besoin",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Nous orientons vers une <strong>berline</strong> ou un{" "}
              <strong>van Mercedes</strong> selon la demande et la disponibilité.
              Le véhicule est confirmé avant le départ.
            </p>
          </div>

          {/* Tarif */}
          <div className="rounded-2xl border-2 border-accent/30 bg-accent/5 p-8 md:p-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">
              Tarif du transfert Port de Cannes → Nice
            </h2>
            <p className="text-gray-800 leading-relaxed mb-4">
              Le <strong>tarif forfaitaire</strong> de ce trajet est{" "}
              <strong>confirmé lors de la réservation</strong>, selon le créneau,
              le véhicule et les options demandées. Aucun montant spécifique
              «&nbsp;Port → Nice&nbsp;» n&apos;est affiché sur cette page.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Pour consulter la grille générale du site (autres liaisons), ouvrez
              la page{" "}
              <Link
                href="/tarifs"
                className="text-accent font-semibold hover:underline underline-offset-2"
              >
                Tarifs
              </Link>
              .
            </p>
          </div>

          {/* Checklist réservation */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 text-balance">
              Comment réserver après une croisière&nbsp;?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Via le{" "}
              <Link
                href="/reservation"
                className="text-accent font-semibold hover:underline underline-offset-2"
              >
                formulaire de réservation
              </Link>{" "}
              ou au <strong>+33 7 56 82 77 99</strong>, préparez&nbsp;:
            </p>
            <ol className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                "Nom du navire",
                "Date et créneau de débarquement",
                "Nombre de passagers",
                "Volume de bagages",
                "Terminal T1 ou T2 (si connu)",
                "Contact téléphone le jour J",
              ].map((step, i) => (
                <li
                  key={step}
                  className="flex gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/15 text-sm font-bold text-accent">
                    {i + 1}
                  </span>
                  <span className="text-gray-800 font-medium self-center">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/reservation"
                size="lg"
                className="bg-accent text-accent-foreground hover:opacity-90 px-8"
              >
                Réserver port → Nice
              </Button>
              <a
                href="tel:+33756827799"
                className="inline-flex items-center justify-center rounded-full font-medium border-2 border-gray-300 px-8 py-3 text-gray-900 hover:bg-gray-50"
              >
                <Phone className="w-5 h-5 mr-2" aria-hidden />
                +33 7 56 82 77 99
              </a>
            </div>
          </div>

          {/* Différenciation 3 intentions */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 text-balance">
              Quel trajet correspond à votre situation&nbsp;?
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
              <table className="w-full min-w-[520px] text-left text-sm md:text-base">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 font-bold border-b">Situation</th>
                    <th className="px-4 py-3 font-bold border-b">Page utile</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-3 border-b font-medium">
                      Port de Cannes → Aéroport Nice (T1/T2)
                    </td>
                    <td className="px-4 py-3 border-b text-gray-700">
                      <strong>Cette page</strong>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 border-b font-medium">
                      Nice ↔ Cannes hors croisière (hôtel, Croisette, gare…)
                    </td>
                    <td className="px-4 py-3 border-b">
                      <Link
                        href="/services/transfert-aeroport-nice-cannes"
                        className="text-accent font-semibold hover:underline underline-offset-2"
                      >
                        Transfert aéroport Nice–Cannes
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">
                      Port → hôtel, gare ou Palais (escale à Cannes)
                    </td>
                    <td className="px-4 py-3">
                      <Link
                        href="/blog/taxi-port-croisiere-cannes-escale-hotel-gare-palais-guide-2026"
                        className="text-accent font-semibold hover:underline underline-offset-2"
                      >
                        Guide escale port Cannes
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Ce que vous obtenez */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
              <Users className="w-7 h-7 text-accent shrink-0" />
              En résumé
            </h2>
            <ul className="space-y-3 text-gray-800">
              {[
                "Prise en charge au port ou à proximité, selon consignes croisiériste",
                "Dépose aéroport Nice T1 ou T2",
                "Berline ou van selon passagers et bagages",
                "Tarif forfaitaire confirmé à la réservation",
                "Disponibilité 24h/24 pour correspondances matin ou soir",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-balance">
              FAQ — Port de Cannes → Aéroport Nice
            </h2>
            <div className="space-y-3">
              {faqItems.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm open:shadow-md"
                >
                  <summary className="font-bold text-lg cursor-pointer list-none flex justify-between items-center gap-4">
                    {item.q}
                    <span className="text-accent text-xl group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>

          {/* CTA final */}
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Prêt à réserver votre transfert port → Nice&nbsp;?
            </h2>
            <p className="text-primary-foreground/90 mb-8 max-w-lg mx-auto">
              Indiquez <strong>T1 ou T2</strong>, le <strong>navire</strong>, le{" "}
              <strong>créneau</strong> et les <strong>bagages</strong> — nous
              confirmons le véhicule et le tarif forfaitaire.
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

          {/* Guides */}
          <div className="text-center text-muted-foreground text-sm border-t border-gray-200 pt-10 space-y-2">
            <p>
              <strong className="text-gray-800">Guide détaillé</strong> (durées,
              quais, marges)&nbsp;:{" "}
              <Link
                href="/blog/taxi-port-croisiere-cannes-transfert-aeroport-nice-guide-2026"
                className="text-accent font-semibold hover:underline underline-offset-2"
              >
                article port croisière → aéroport Nice
              </Link>
              .
            </p>
            <p>
              Escale à Cannes (hôtel, gare, Palais)&nbsp;:{" "}
              <Link
                href="/blog/taxi-port-croisiere-cannes-escale-hotel-gare-palais-guide-2026"
                className="text-accent font-semibold hover:underline underline-offset-2"
              >
                guide escale port Cannes
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
