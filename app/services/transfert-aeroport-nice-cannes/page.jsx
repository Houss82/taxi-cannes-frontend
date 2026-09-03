// app/services/transfert-aeroport-nice-cannes/page.jsx — TRANSFERT AÉROPORT NICE CANNES

export const metadata = {
  title:
    "Transfert Aéroport Nice Cannes | Taxi Premium 24h/24 — Prix fixe | Taxi Cannes",
  description:
    "Taxi transfert aéroport Nice ↔ Cannes : prix fixe 95–100 €, suivi vol, T1/T2, Croisette, Palm Beach, Le Cannet. Chauffeur à l'accueil 24h/24. Réservez +33 7 56 82 77 99.",
  keywords:
    "transfert aéroport nice cannes, taxi aéroport nice cannes, taxi cannes aéroport nice, navette aéroport nice cannes, taxi nice cannes, transfert cannes aeroport nice prix, taxi terminal 1 nice, taxi terminal 2 nice",
  alternates: {
    canonical:
      "https://www.cannestaxi.fr/services/transfert-aeroport-nice-cannes",
  },
};

import Button from "@/app/components/ui/Button";
import {
  Baby,
  CheckCircle,
  Clock,
  CreditCard,
  Luggage,
  MapPin,
  Plane,
  Shield,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

const faqItems = [
  {
    q: "Combien coûte un taxi aéroport Nice Cannes ?",
    a: "Forfait réservation : 95 € (centre / gare), 100 € (Croisette / palaces), 120 € (van 8 places). Confirmation à la réservation.",
  },
  {
    q: "Combien de temps dure le trajet Nice ↔ Cannes ?",
    a: "Environ 30 à 40 minutes hors pic ; 40 à 55 minutes en été, week-end ou événements (Festival, Lions, MIPIM).",
  },
  {
    q: "Le chauffeur suit-il mon vol en cas de retard ?",
    a: "Oui. Indiquez votre numéro de vol : nous adaptons l'heure d'accueil sans supplément pour un retard d'avion raisonnable.",
  },
  {
    q: "Terminal 1 ou Terminal 2 ?",
    a: "Dépose ou prise en charge au terminal indiqué sur votre billet. Précisez T1 ou T2 (et le n° de vol) à la réservation.",
  },
  {
    q: "Puis-je réserver un transfert à 4h du matin ?",
    a: "Oui, service 24h/24. Les vols matinaux depuis Cannes sont courants : réservez la veille pour garantir le véhicule.",
  },
  {
    q: "Combien de temps le chauffeur attend-il à l'aéroport ?",
    a: "Nous suivons le vol et attendons à la sortie bagages. Au-delà d'une attente prolongée hors retard de vol, une facturation peut s'appliquer selon les conditions communiquées.",
  },
  {
    q: "Puis-je payer par carte bancaire ?",
    a: "Oui, paiement CB possible. Précisez votre mode de paiement préféré à la réservation ou au téléphone.",
  },
  {
    q: "Le siège bébé est-il gratuit ?",
    a: "Siège bébé / rehausseur sur demande (selon disponibilité). Signalez-le à la réservation : gratuit dans la plupart des cas.",
  },
  {
    q: "Acceptez-vous skis, clubs de golf ou poussette ?",
    a: "Oui. Indiquez le volume de bagages : nous affectons une berline, un SUV ou un van selon le besoin.",
  },
  {
    q: "Proposez-vous un véhicule PMR / fauteuil roulant ?",
    a: "Pour le transport adapté, consultez notre guide Taxi PMR Cannes ou précisez votre besoin au téléphone.",
  },
  {
    q: "Transfert depuis le Carlton, Martinez ou Majestic ?",
    a: "Oui. Dépose / prise en charge devant les palaces de la Croisette — voir aussi notre service trajets palaces.",
  },
  {
    q: "Combien de temps avant mon vol partir de Cannes ?",
    a: "Vol intérieur : souvent 2h30 à 3h avant. Vol international : plutôt 3h à 3h30 (trajet + check-in). Détails dans notre guide départ.",
  },
  {
    q: "Y a-t-il un supplément bagages ?",
    a: "Non pour les bagages standards. Pour volume important (groupe, ski, golf), optez pour le van 120 €.",
  },
  {
    q: "Desservez-vous Le Cannet, Mougins, La Bocca ?",
    a: "Oui. Précisez l'adresse exacte : forfait adapté selon le quartier (confirmation à la réservation).",
  },
  {
    q: "Puis-je réserver EasyJet / Air France / Emirates ?",
    a: "Oui, toutes compagnies. Donnez le n° de vol : nous gérons l'accueil T1 ou T2 selon votre billet.",
  },
  {
    q: "Différence avec Uber pour l'aéroport ?",
    a: "Avec Taxi Cannes : prix fixe annoncé, suivi vol, panneau nominatif, véhicule premium réservé. Moins d'incertitude en haute saison.",
  },
  {
    q: "Port de croisière Cannes vers Nice ?",
    a: "Oui — service dédié port → aéroport (prix fixe, van). Voir la page transfert port croisière.",
  },
  {
    q: "Comment réserver rapidement ?",
    a: "Formulaire en ligne ou téléphone +33 7 56 82 77 99. Indiquez date, sens (arrivée/départ), terminal, adresses et n° de vol.",
  },
  {
    q: "WiFi à bord ?",
    a: "Oui, WiFi gratuit dans nos véhicules premium.",
  },
  {
    q: "Où lire le guide complet (bus, navette, comparatifs) ?",
    a: "Sur le blog : guide pilier transfert aéroport Nice–Cannes, article départ Cannes→Nice, et guide événements Festival/Lions.",
  },
];

export default function TransfertAeroportNiceCannes() {
  return (
    <main className="min-h-screen bg-white">
      <Script
        id="transfert-aeroport-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "TaxiService",
                "@id":
                  "https://www.cannestaxi.fr/services/transfert-aeroport-nice-cannes#service",
                name: "Taxi Cannes — Transfert Aéroport Nice Côte d'Azur",
                url: "https://www.cannestaxi.fr/services/transfert-aeroport-nice-cannes",
                telephone: "+33 7 56 82 77 99",
                description:
                  "Transfert taxi aéroport Nice ↔ Cannes : prix fixe 95–100 €, suivi vol, Terminal 1 et 2, chauffeur à l'accueil 24h/24.",
                areaServed: [
                  { "@type": "City", name: "Cannes" },
                  { "@type": "City", name: "Le Cannet" },
                  { "@type": "City", name: "Mougins" },
                  {
                    "@type": "Airport",
                    name: "Aéroport Nice Côte d'Azur",
                    iataCode: "NCE",
                  },
                ],
                availableChannel: {
                  "@type": "ServiceChannel",
                  serviceUrl: "https://www.cannestaxi.fr/reservation",
                  servicePhone: "+33 7 56 82 77 99",
                },
              },
              {
                "@type": "FAQPage",
                "@id":
                  "https://www.cannestaxi.fr/services/transfert-aeroport-nice-cannes#faq",
                mainEntity: faqItems.map((item) => ({
                  "@type": "Question",
                  name: item.q,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: item.a,
                  },
                })),
              },
            ],
          }),
        }}
      />

      {/* Hero */}
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
            Taxi Cannes 24h/24 : prix fixe, suivi vol, Terminal 1 &amp; 2 —
            réservation en ligne ou au +33 7 56 82 77 99
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/reservation"
              size="lg"
              className="bg-accent text-accent-foreground hover:opacity-90 px-8 py-6 text-lg"
            >
              Réserver un transfert aéroport
            </Button>
            <Button
              href="tel:+33756827799"
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg bg-transparent"
            >
              Appeler maintenant
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: Clock, label: "30–40 min", desc: "Trajet moyen hors pic" },
              { icon: Shield, label: "95–100 €", desc: "Prix fixe réservation" },
              { icon: Plane, label: "Suivi vol", desc: "T1 & T2 Nice" },
              { icon: Users, label: "24h/24", desc: "Vols matin & nuit" },
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

      <section className="py-20 bg-linear-to-b from-accent/5 via-white to-accent/5">
        <div className="max-w-5xl mx-auto px-6 space-y-20">
          {/* Intro transactionnelle */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Taxi transfert aéroport Nice Cannes — service local
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>Taxi Cannes</strong> assure vos{" "}
              <strong>transferts aéroport Nice ↔ Cannes</strong> dans les deux
              sens : arrivée{" "}
              <strong>Nice Côte d&apos;Azur (NCE)</strong> vers hôtel,
              Croisette, villa ou gare ; départ{" "}
              <strong>Cannes → Terminal 1 ou Terminal 2</strong> pour vos vols
              matinaux et internationaux.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Cette page est notre <strong>offre commerciale</strong> (réserver,
              tarifs, zones, FAQ). Pour les comparatifs bus / navette et les
              guides détaillés, consultez le{" "}
              <Link
                href="/blog/guide-transfert-aeroport-nice-cannes"
                className="text-accent font-semibold hover:underline"
              >
                guide pilier blog
              </Link>{" "}
              et l&apos;article{" "}
              <Link
                href="/blog/taxi-cannes-aeroport-nice-depart-guide-2026"
                className="text-accent font-semibold hover:underline"
              >
                départ Cannes → aéroport
              </Link>
              .
            </p>
            <div className="rounded-2xl border border-primary/15 bg-primary/5 p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Vous souhaitez en savoir plus ?
              </h3>
              <ul className="space-y-2 text-gray-800">
                <li>
                  • Combien de temps dure le trajet ? →{" "}
                  <Link
                    href="/blog/guide-transfert-aeroport-nice-cannes"
                    className="text-accent font-semibold hover:underline"
                  >
                    guide complet transfert Nice–Cannes
                  </Link>
                </li>
                <li>
                  • À quelle heure partir de Cannes ? →{" "}
                  <Link
                    href="/blog/taxi-cannes-aeroport-nice-depart-guide-2026"
                    className="text-accent font-semibold hover:underline"
                  >
                    guide départ Cannes → aéroport Nice
                  </Link>
                </li>
                <li>
                  • Comment éviter les embouteillages (Festival, Lions) ? →{" "}
                  <Link
                    href="/blog/aeroport-nice-cannes-festival-congres-2026"
                    className="text-accent font-semibold hover:underline"
                  >
                    aéroport Nice → Cannes en période congrès
                  </Link>
                </li>
                <li>
                  • Débarquement croisière puis vol ? →{" "}
                  <Link
                    href="/blog/taxi-port-croisiere-cannes-transfert-aeroport-nice-guide-2026"
                    className="text-accent font-semibold hover:underline"
                  >
                    guide port → aéroport Nice
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Pourquoi Taxi Cannes */}
          <div className="bg-white rounded-2xl border-2 border-accent/30 p-8 md:p-10 shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Pourquoi choisir Taxi Cannes ?
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Chauffeurs locaux — Cannes & Alpes-Maritimes",
                "Disponible 24h/24 et 7j/7",
                "Prix fixe annoncé avant le départ",
                "Paiement CB accepté",
                "Flotte Mercedes / Tesla / van",
                "Suivi des vols en temps réel",
                "Panneau nominatif à l'arrivée",
                "Aide bagages à l'embarquement",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Déroulement */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Comment se déroule un transfert ?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Un parcours simple, pensé pour éviter le stress aéroport et les
              files d&apos;attente.
            </p>
            <ol className="space-y-4">
              {[
                {
                  t: "Réservation",
                  d: "En ligne ou par téléphone : date, sens, adresses, n° de vol, passagers et bagages.",
                },
                {
                  t: "Confirmation",
                  d: "Vous recevez la confirmation du forfait et des détails de prise en charge.",
                },
                {
                  t: "Suivi du vol",
                  d: "À l'arrivée Nice, nous suivons votre vol et ajustons l'heure d'accueil.",
                },
                {
                  t: "Accueil avec panneau",
                  d: "Votre chauffeur vous attend à la sortie bagages (T1 ou T2) avec panneau nominatif.",
                },
                {
                  t: "Aide bagages",
                  d: "Chargement des valises, poussette, skis ou clubs de golf selon le véhicule.",
                },
                {
                  t: "Trajet A8",
                  d: "Itinéraire optimisé vers Cannes — WiFi, climatisation, conduite professionnelle.",
                },
                {
                  t: "Dépose",
                  d: "Hôtel, palace, villa, gare ou Palais des Festivals — au point le plus proche autorisé.",
                },
              ].map((step, i) => (
                <li
                  key={step.t}
                  className="flex gap-4 p-5 bg-white rounded-xl border border-gray-200"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">{step.t}</h3>
                    <p className="text-gray-700 mt-1">{step.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Pourquoi réserver à l'avance */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Pourquoi réserver à l&apos;avance ?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              À Cannes, la demande de taxis explose pendant les{" "}
              <strong>périodes événementielles</strong> et l&apos;
              <strong>été</strong>. Sans réservation, l&apos;attente à
              l&apos;aéroport ou devant un palace peut être longue — et le prix
              moins prévisible.
            </p>
            <ul className="space-y-3 text-gray-800 text-lg">
              <li>
                • <strong>Été (juillet–août)</strong> : trafic A8 dense,
                affluence T1/T2
              </li>
              <li>
                • <strong>Festival de Cannes</strong> : accès restreints,
                parkings saturés
              </li>
              <li>
                • <strong>
                  <Link
                    href="/blog/taxi-cannes-lions-2026-guide-chauffeur-reservation"
                    className="text-accent font-semibold hover:underline"
                  >
                    Cannes Lions
                  </Link>
                </strong>{" "}
                : délégations, multi-trajets, créneaux saturés
              </li>
              <li>
                • <strong>MIPIM / ILTM</strong> et congrès au{" "}
                <Link
                  href="/blog/taxi-palais-des-festivals-cannes-acces-congres-evenements-2026"
                  className="text-accent font-semibold hover:underline"
                >
                  Palais des Festivals
                </Link>
              </li>
            </ul>
            <p className="mt-4 text-gray-700">
              Pour les durées en période congrès :{" "}
              <Link
                href="/blog/aeroport-nice-cannes-festival-congres-2026"
                className="text-accent font-semibold hover:underline"
              >
                Aéroport Nice → Cannes : Festival, Lions, congrès
              </Link>
              .
            </p>
          </div>

          {/* Deux sens */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
              Les deux sens : arrivée et départ
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-2">
                  <Plane className="w-6 h-6 text-accent" />
                  Aéroport Nice → Cannes
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Accueil à la sortie bagages, panneau à votre nom, trajet
                  vers Croisette, hôtel, villa ou gare. Idéal après un vol
                  EasyJet, Air France, British Airways, Lufthansa, Emirates ou
                  American Airlines.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Suivi du vol en temps réel</li>
                  <li>• Pas de stress parking ni file taxi</li>
                  <li>• Dépose porte à porte</li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-accent" />
                  Cannes → Aéroport Nice
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Départs matinaux, vols internationaux, check-out palace :
                  nous vous déposons au <strong>Terminal 1</strong> ou{" "}
                  <strong>Terminal 2</strong> selon votre billet.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Marges horaires adaptées au type de vol</li>
                  <li>• Prise en charge hôtel / villa / gare</li>
                  <li>
                    • Guide détaillé :{" "}
                    <Link
                      href="/blog/taxi-cannes-aeroport-nice-depart-guide-2026"
                      className="text-accent font-semibold hover:underline"
                    >
                      départ Cannes → Nice
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tarifs */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Tarifs transfert aéroport Nice Cannes
            </h2>
            <p className="text-gray-700 mb-6">
              Forfaits indicatifs alignés sur notre page{" "}
              <Link href="/tarifs" className="text-accent font-semibold hover:underline">
                Tarifs
              </Link>{" "}
              — confirmation à la réservation.
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
              <table className="w-full min-w-[520px] text-left">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 font-bold border-b">Trajet</th>
                    <th className="px-4 py-3 font-bold border-b">Forfait</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-3 border-b">
                      Aéroport Nice ↔ Cannes centre / gare
                    </td>
                    <td className="px-4 py-3 border-b font-bold text-accent">
                      95 €
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 border-b">
                      Aéroport Nice ↔ Croisette / palaces
                    </td>
                    <td className="px-4 py-3 border-b font-bold text-accent">
                      100 €
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Van 8 places (groupe / bagages)</td>
                    <td className="px-4 py-3 font-bold text-accent">120 €</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              Surcharge nuit éventuelle selon grille (20h–6h). Pas de supplément
              bagages standards ni retard d&apos;avion suivi.
            </p>
          </div>

          {/* Temps de trajet */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Temps de trajet selon le quartier
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
              <table className="w-full min-w-[480px] text-left">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 font-bold border-b">Départ / arrivée</th>
                    <th className="px-4 py-3 font-bold border-b">
                      Durée indicative
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      zone: "Croisette / palaces",
                      duree: "30–40 min (40–55 min en pic)",
                      href: "/secteurs/la-croisette",
                    },
                    {
                      zone: "Gare SNCF Cannes",
                      duree: "28–38 min",
                      href: "/blog/taxi-gare-cannes-service-transport-sncf-2025",
                    },
                    {
                      zone: "Le Suquet",
                      duree: "30–42 min",
                      href: "/secteurs/le-suquet",
                    },
                    {
                      zone: "Palm Beach",
                      duree: "32–42 min",
                      href: "/secteurs/la-croisette",
                    },
                    {
                      zone: "La Bocca",
                      duree: "35–48 min",
                      href: "/secteurs/la-bocca",
                    },
                    {
                      zone: "Boulevard Carnot",
                      duree: "28–40 min",
                      href: "/secteurs/boulevard-carnot",
                    },
                    {
                      zone: "Le Cannet",
                      duree: "35–48 min",
                      href: "/secteurs/le-cannet",
                    },
                    {
                      zone: "Mougins",
                      duree: "25–40 min via A8",
                      href: "/blog/villages-autour-cannes-excursions-transport-2025",
                    },
                  ].map(({ zone, duree, href }, i) => (
                    <tr key={zone} className={i % 2 ? "bg-gray-50" : ""}>
                      <td className="px-4 py-3 border-b font-medium">
                        <Link
                          href={href}
                          className="text-accent hover:underline underline-offset-2"
                        >
                          {zone}
                        </Link>
                      </td>
                      <td className="px-4 py-3 border-b">{duree}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quartiers */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Quartiers desservis à Cannes
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Nous prenons en charge et déposons dans tous les secteurs cannois
              et communes proches :
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { name: "La Croisette", href: "/secteurs/la-croisette" },
                { name: "Le Suquet", href: "/secteurs/le-suquet" },
                { name: "La Bocca", href: "/secteurs/la-bocca" },
                { name: "Boulevard Carnot", href: "/secteurs/boulevard-carnot" },
                { name: "Palm Beach", href: null },
                { name: "Californie", href: null },
                { name: "Oxford", href: null },
                { name: "Le Cannet", href: null },
                { name: "Mougins", href: null },
              ].map((q) =>
                q.href ? (
                  <Link
                    key={q.name}
                    href={q.href}
                    className="px-4 py-3 rounded-lg border border-gray-200 bg-white hover:border-accent hover:bg-accent/5 font-medium text-gray-900 transition-colors"
                  >
                    {q.name}
                  </Link>
                ) : (
                  <span
                    key={q.name}
                    className="px-4 py-3 rounded-lg border border-gray-200 bg-white font-medium text-gray-900"
                  >
                    {q.name}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* Hôtels */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Transferts depuis les palaces & hôtels
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Nous assurons régulièrement des trajets aéroport depuis et vers :
            </p>
            <ul className="grid sm:grid-cols-2 gap-2 text-gray-800 text-lg mb-4">
              {[
                "Carlton Cannes",
                "Hôtel Martinez",
                "Majestic Barrière",
                "JW Marriott Cannes",
                "Mondrian Cannes",
                "Canopy by Hilton",
              ].map((h) => (
                <li key={h} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
            <p className="text-gray-700">
              Service dédié :{" "}
              <Link
                href="/services/trajets-palaces"
                className="text-accent font-semibold hover:underline"
              >
                trajets palaces
              </Link>
              .
            </p>
          </div>

          {/* Terminaux */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Terminal 1 &amp; Terminal 2
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="relative h-48 rounded-xl overflow-hidden">
                <Image
                  src="/aeroport-nice-cannes.png"
                  alt="Aéroport Nice Côte d'Azur Terminal — transfert taxi Cannes"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden">
                <Image
                  src="/aeroport-nice-cannes.jpg"
                  alt="Accueil chauffeur Taxi Cannes aéroport Nice"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-bold text-xl mb-2">Terminal 1</h3>
                <p className="text-gray-700">
                  Affectation selon saison et compagnie. Vérifiez toujours votre
                  billet. Dépose / prise en charge au niveau indiqué.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-bold text-xl mb-2">Terminal 2</h3>
                <p className="text-gray-700">
                  Nombreuses compagnies européennes et internationales.
                  Indiquez T2 + n° de vol pour un accueil précis.
                </p>
              </div>
            </div>
          </div>

          {/* Compagnies */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Compagnies aériennes desservies
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Quel que soit votre vol (low-cost ou long-courrier), indiquez le
              numéro : nous gérons l&apos;accueil.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "EasyJet",
                "Air France",
                "British Airways",
                "Lufthansa",
                "American Airlines",
                "Emirates",
                "Transavia",
                "Swiss",
              ].map((c) => (
                <span
                  key={c}
                  className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Véhicules */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Nos véhicules pour l&apos;aéroport
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  name: "Berline premium",
                  desc: "1–3 passagers, bagages standards",
                  img: "/mercedes-berline-cannes.png",
                },
                {
                  name: "Mercedes GLC / SUV",
                  desc: "Confort & coffre spacieux",
                  img: "/mercedes-glc-luxury-suv.png",
                },
                {
                  name: "Van Classe V",
                  desc: "Jusqu'à 8 places, groupes",
                  img: "/mercedes-van-cannes.png",
                },
                {
                  name: "Tesla / berline",
                  desc: "Trajet premium climatisé",
                  img: "/taxi-cannes-accueil.png",
                },
              ].map((v) => (
                <div
                  key={v.name}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden"
                >
                  <div className="relative h-36">
                    <Image
                      src={v.img}
                      alt={v.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold">{v.name}</h3>
                    <p className="text-sm text-muted-foreground">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bagages */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Bagages, sport & familles
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: Luggage,
                  t: "Valises & gros bagages",
                  d: "Coffre berline ou van selon volume — indiquez le nombre à la réservation.",
                },
                {
                  icon: Baby,
                  t: "Poussette & siège bébé",
                  d: "Poussette acceptée. Siège bébé / rehausseur sur demande.",
                },
                {
                  icon: Luggage,
                  t: "Ski & golf",
                  d: "Équipements sportifs : précisez pour affecter le bon véhicule.",
                },
                {
                  icon: Users,
                  t: "Fauteuil / PMR",
                  d: (
                    <>
                      Besoin d&apos;accessibilité : voir{" "}
                      <Link
                        href="/blog/taxi-pmr-cannes-transport-accessible-service-2026"
                        className="text-accent font-semibold hover:underline"
                      >
                        Taxi PMR Cannes
                      </Link>
                      .
                    </>
                  ),
                },
              ].map((b) => {
                const Icon = b.icon;
                return (
                  <div
                    key={b.t}
                    className="flex gap-4 p-5 bg-white rounded-xl border border-gray-200"
                  >
                    <Icon className="w-8 h-8 text-accent shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg">{b.t}</h3>
                      <p className="text-gray-700 text-sm mt-1">{b.d}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Carte */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Itinéraire aéroport Nice ↔ Cannes
            </h2>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md">
              <iframe
                title="Carte transfert aéroport Nice Côte d'Azur — Cannes"
                src="https://maps.google.com/maps?saddr=A%C3%A9roport+Nice+C%C3%B4te+d%27Azur,Nice,France&daddr=Cannes,France&hl=fr&z=10&output=embed"
                className="w-full h-[400px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              Trajet type via l&apos;A8. Le chauffeur ajuste selon trafic et
              travaux.
            </p>
          </div>

          {/* Avis */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Avis clients
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Sophie M.",
                  text: "Transfert Nice T2 → Martinez impeccable. Chauffeur à l'heure malgré un retard de vol, véhicule très propre.",
                },
                {
                  name: "James R.",
                  text: "Early morning pickup from Palm Beach to Terminal 1. Fixed price, professional driver. Highly recommend.",
                },
                {
                  name: "Karim B.",
                  text: "Réservé pour Lions : aéroport puis plusieurs courses. Fiable, local, je recommande Taxi Cannes.",
                },
              ].map((avis) => (
                <blockquote
                  key={avis.name}
                  className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
                >
                  <p className="text-gray-700 italic mb-4">
                    &ldquo;{avis.text}&rdquo;
                  </p>
                  <footer className="font-bold text-gray-900">
                    — {avis.name}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div id="faq">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
              FAQ — Transfert aéroport Nice Cannes
            </h2>
            <div className="space-y-3">
              {faqItems.map((item) => (
                <details
                  key={item.q}
                  className="bg-white rounded-lg p-5 border border-gray-200 group"
                >
                  <summary className="font-bold text-lg cursor-pointer list-none flex justify-between items-center gap-4">
                    {item.q}
                    <span className="text-accent text-xl group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-gray-700 leading-relaxed">
                    {item.q ===
                    "Transfert depuis le Carlton, Martinez ou Majestic ?" ? (
                      <>
                        Oui. Dépose / prise en charge devant les palaces de la
                        Croisette — voir aussi notre service{" "}
                        <Link
                          href="/services/trajets-palaces"
                          className="text-accent font-semibold hover:underline underline-offset-2"
                        >
                          trajets palaces
                        </Link>
                        .
                      </>
                    ) : (
                      item.a
                    )}
                  </p>
                </details>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <span className="flex items-center gap-2 text-gray-600">
                <CreditCard className="w-4 h-4 text-accent" /> Paiement CB
              </span>
              <span className="flex items-center gap-2 text-gray-600">
                <Clock className="w-4 h-4 text-accent" /> 24h/24
              </span>
              <span className="flex items-center gap-2 text-gray-600">
                <Shield className="w-4 h-4 text-accent" /> Prix fixe
              </span>
            </div>
          </div>

          {/* Port croisière */}
          <div className="rounded-2xl border border-primary/15 bg-primary/5 px-6 py-5 text-center">
            <p className="text-gray-800 leading-relaxed">
              <strong>Débarquement croisière au port de Cannes</strong> puis vol
              depuis Nice&nbsp;?{" "}
              <Link
                href="/services/transfert-port-croisiere-cannes-aeroport-nice"
                className="text-accent font-semibold hover:underline underline-offset-2"
              >
                Transfert dédié port → aéroport
              </Link>{" "}
              (prix fixe, van). Guide blog :{" "}
              <Link
                href="/blog/taxi-port-croisiere-cannes-transfert-aeroport-nice-guide-2026"
                className="text-primary font-semibold hover:underline underline-offset-2"
              >
                port croisière → Nice
              </Link>
              .
            </p>
          </div>

          {/* Maillage blog */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Guides complémentaires sur le blog
            </h2>
            <ul className="grid sm:grid-cols-2 gap-3 text-gray-800">
              <li>
                <Link
                  href="/blog/guide-transfert-aeroport-nice-cannes"
                  className="text-accent font-semibold hover:underline"
                >
                  Guide pilier Nice–Cannes
                </Link>{" "}
                — comparatifs & options
              </li>
              <li>
                <Link
                  href="/blog/taxi-cannes-aeroport-nice-depart-guide-2026"
                  className="text-accent font-semibold hover:underline"
                >
                  Départ Cannes → aéroport
                </Link>{" "}
                — marges vol
              </li>
              <li>
                <Link
                  href="/blog/aeroport-nice-cannes-festival-congres-2026"
                  className="text-accent font-semibold hover:underline"
                >
                  Nice → Cannes événements
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/chauffeur-prive-cannes-mise-a-disposition-2026"
                  className="text-accent font-semibold hover:underline"
                >
                  Chauffeur privé / mise à disposition
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/taxi-gare-cannes-service-transport-sncf-2025"
                  className="text-accent font-semibold hover:underline"
                >
                  Taxi gare SNCF Cannes
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/taxi-cannes-antibes-juan-les-pins-transfert-guide-2026"
                  className="text-accent font-semibold hover:underline"
                >
                  Taxi Cannes → Antibes
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA final */}
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Réservez votre transfert aéroport Nice Cannes
            </h2>
            <p className="text-lg mb-6 text-primary-foreground/90">
              Prix fixe, suivi vol, T1/T2 — confirmation rapide. Service 24h/24.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/reservation"
                className="bg-accent text-accent-foreground hover:opacity-90 px-8 py-4 text-lg"
              >
                Réserver maintenant
              </Button>
              <Button
                href="tel:+33756827799"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg bg-transparent"
              >
                +33 7 56 82 77 99
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
