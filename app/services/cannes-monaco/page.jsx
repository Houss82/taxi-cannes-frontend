// Page service : taxi / transfert Cannes ↔ Monaco

export const revalidate = 86400;

import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Clock,
  MapPin,
  Building2,
  Landmark,
  Compass,
  Plane,
  CheckCircle,
  ChevronRight,
  Train,
  Calendar,
  Car,
} from "lucide-react";
import Button from "@/app/components/ui/Button";
import {
  SITE_PHONE_DISPLAY,
  SITE_PHONE_TEL,
} from "@/app/lib/contact";

const canonical = "https://www.cannestaxi.fr/services/cannes-monaco";

export const metadata = {
  title: "Taxi Cannes Monaco | Transfert dès 160 €",
  description:
    "Taxi et transfert privé Cannes → Monaco dès 160 €. Prise en charge à Cannes, dépose Monte-Carlo ou Monaco-Ville. Environ 50 km / 45 min. Réservez en ligne ou par téléphone.",
  keywords: [
    "taxi Cannes Monaco",
    "transfert Cannes Monaco",
    "taxi Monaco Cannes",
    "transfert privé Monaco",
    "taxi Monte-Carlo Cannes",
  ],
  alternates: { canonical },
  openGraph: {
    title: "Taxi Cannes Monaco | Transfert dès 160 €",
    description:
      "Transfert privé Cannes ↔ Monaco dès 160 €. Réservation en ligne ou par téléphone, véhicules premium.",
    url: canonical,
    siteName: "Taxi Cannes",
    locale: "fr_FR",
    type: "website",
  },
};

const faqItems = [
  {
    q: "Quel est le prix d’un taxi de Cannes à Monaco ?",
    a: "Le forfait public affiché est de 160 € pour Cannes → Monaco (voir la page Tarifs). Le montant est confirmé à la réservation.",
  },
  {
    q: "Combien de temps faut-il entre Cannes et Monaco ?",
    a: "Environ 45 minutes pour environ 50 km, dans des conditions de circulation normales. En période de forte affluence (événements, Grand Prix), prévoyez davantage de marge.",
  },
  {
    q: "Peut-on réserver un taxi Monaco → Cannes ?",
    a: "Oui. Le retour Monaco → Cannes peut être organisé. Tarif et conditions sur demande à la réservation — aucun forfait retour distinct n’est publié sur cette page.",
  },
  {
    q: "Peut-on être pris en charge à son hôtel à Cannes ?",
    a: "Oui. Indiquez l’adresse exacte (hôtel, palace Croisette, centre, gare ou Palais des Festivals) dans le formulaire ou à l’appel.",
  },
  {
    q: "Peut-on réserver pour le Grand Prix de Monaco ?",
    a: "Oui. Réservez à l’avance : circulation et restrictions peuvent allonger le trajet au-delà des ~45 minutes habituelles. Aucune durée fixe n’est garantie en période de Grand Prix.",
  },
  {
    q: "Peut-on voyager avec plusieurs bagages ?",
    a: "Oui, dans la limite du coffre du véhicule choisi. Précisez le volume de bagages à la réservation pour adapter la prestation.",
  },
  {
    q: "Comment réserver un transfert Cannes Monaco ?",
    a: "Via le formulaire en ligne (date, heure, départ, destination, passagers) ou par téléphone. Confirmation avant le départ.",
  },
  {
    q: "Peut-on combiner aéroport de Nice et Monaco ?",
    a: "Un trajet Nice Aéroport → Cannes se réserve sur la page transfert aéroport. Un Cannes → Monaco ensuite se réserve séparément. Une chaîne Nice → Monaco via Cannes peut être étudiée sur devis.",
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
  name: "Taxi Cannes — Transfert Cannes Monaco",
  url: canonical,
  telephone: "+33 7 56 82 77 99",
  description:
    "Transfert privé Cannes → Monaco dès 160 €. Prise en charge à Cannes, dépose à Monaco / Monte-Carlo.",
  areaServed: [
    { "@type": "City", name: "Cannes" },
    { "@type": "City", name: "Monaco" },
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
      name: "Cannes → Monaco",
      item: canonical,
    },
  ],
};

export default function CannesMonacoPage() {
  return (
    <main className="min-h-screen bg-white">
      <Script
        id="cannes-monaco-service-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="cannes-monaco-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="cannes-monaco-breadcrumb-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Hero */}
      <section className="relative min-h-[85vh] md:h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-20">
        <Image
          src="/yacht-monaco.jpg"
          alt="Transfert privé Cannes Monaco — Taxi Cannes"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white max-w-3xl px-6">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-accent/25 rounded-full border border-accent/40">
            <Compass className="w-5 h-5 text-accent" aria-hidden />
            <span className="text-sm font-bold text-white uppercase tracking-wider">
              Transfert privé
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-5 leading-tight text-balance">
            Cannes → Monaco
          </h1>
          <p className="text-lg md:text-xl mb-4 text-white/92 text-balance leading-relaxed">
            Taxi et transfert privé Cannes ↔ Monaco : prise en charge à Cannes,
            dépose Monte-Carlo ou Monaco-Ville.
          </p>
          <p className="text-base md:text-lg mb-8 text-white/85">
            ~50 km · ~45 min (conditions normales) ·{" "}
            <strong className="text-white">dès 160 €</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              href="/reservation"
              size="lg"
              className="bg-accent text-accent-foreground hover:opacity-90 px-8 py-6 text-lg w-full sm:w-auto"
            >
              Réserver Cannes → Monaco
            </Button>
            <Button
              href={SITE_PHONE_TEL}
              variant="secondaryInverse"
              size="lg"
              className="px-8 py-6 text-lg w-full sm:w-auto"
              aria-label={`Appeler Taxi Cannes au ${SITE_PHONE_DISPLAY}`}
            >
              <Phone className="w-5 h-5 shrink-0" aria-hidden />
              {SITE_PHONE_DISPLAY}
            </Button>
          </div>
        </div>
      </section>

      {/* KPI */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {[
              { icon: Clock, label: "~45 min", desc: "Conditions normales" },
              { icon: MapPin, label: "~50 km", desc: "Cannes → Monaco" },
              { icon: CheckCircle, label: "160 €", desc: "Forfait public" },
              { icon: Calendar, label: "24h/24", desc: "Réservation" },
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
          {/* Intro commerciale */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
              Transfert taxi Cannes Monaco
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Vous avez besoin d’un{" "}
              <strong className="text-gray-900">transfert Cannes Monaco</strong>{" "}
              clair : heure de départ, adresse de prise en charge, point de
              dépose dans la Principauté, prix connu à l’avance. C’est
              l’objet de cette page.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Pour préparer le trajet en détail (itinéraires, conseils,
              questions longues), consultez le{" "}
              <Link
                href="/blog/taxi-cannes-monaco-guide-complet"
                className="text-accent font-semibold hover:underline underline-offset-2"
              >
                guide Cannes–Monaco
              </Link>
              . Ici, l’essentiel pour réserver.
            </p>
          </div>

          {/* Tarif */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tarif taxi Cannes → Monaco
            </h2>
            <div className="rounded-2xl border-2 border-accent/40 bg-white p-8 md:p-10 shadow-md text-center mb-6">
              <p className="text-sm font-bold text-accent uppercase tracking-wider mb-2">
                Forfait public
              </p>
              <p className="text-lg text-gray-700 mb-2">Cannes → Monaco</p>
              <p className="text-5xl font-bold text-accent mb-4">160 €</p>
              <p className="text-sm text-muted-foreground max-w-md mx-auto">
                Prix affiché sur notre grille{" "}
                <Link
                  href="/tarifs"
                  className="text-accent font-semibold hover:underline underline-offset-2"
                >
                  Tarifs
                </Link>
                . Confirmé à la réservation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                href="/reservation"
                size="xl"
                className="bg-accent text-accent-foreground hover:opacity-90 px-8"
              >
                Réserver ce transfert
              </Button>
              <Button href={SITE_PHONE_TEL} variant="call" size="xl" className="px-8">
                <Phone className="w-5 h-5 shrink-0" aria-hidden />
                {SITE_PHONE_DISPLAY}
              </Button>
            </div>
          </div>

          {/* Prise en charge */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
              Où votre chauffeur peut-il vous prendre en charge à Cannes&nbsp;?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              La prise en charge se fait à l’adresse indiquée. Les contextes les
              plus fréquents pour un départ vers Monaco :
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                {
                  icon: Building2,
                  title: "Hôtels",
                  text: "Devant votre établissement, à l’entrée indiquée.",
                },
                {
                  icon: Landmark,
                  title: "La Croisette",
                  text: (
                    <>
                      Palaces et hôtels de la{" "}
                      <Link
                        href="/secteurs/la-croisette"
                        className="text-accent font-semibold hover:underline underline-offset-2"
                      >
                        Croisette
                      </Link>
                      , ou{" "}
                      <Link
                        href="/services/trajets-palaces"
                        className="text-accent font-semibold hover:underline underline-offset-2"
                      >
                        trajets palaces
                      </Link>{" "}
                      pour un départ VIP dédié.
                    </>
                  ),
                },
                {
                  icon: MapPin,
                  title: "Cannes centre",
                  text: "Adresse de résidence, rendez-vous ou restaurant en centre-ville.",
                },
                {
                  icon: Train,
                  title: "Gare SNCF",
                  text: "Prise en charge à la gare de Cannes pour enchaîner vers Monaco.",
                },
                {
                  icon: Landmark,
                  title: "Palais des Festivals",
                  text: "Départ après un congrès ou un événement, au point d’accès indiqué.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
                  >
                    <Icon className="w-6 h-6 text-accent mb-2" aria-hidden />
                    <h3 className="font-bold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Destinations Monaco */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Où peut-on être déposé à Monaco&nbsp;?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Indiquez le point de dépose exact à la réservation. Zones
              habituellement demandées depuis Cannes :
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  name: "Monte-Carlo",
                  desc: "Casino, hôtels et secteur Monte-Carlo.",
                },
                {
                  name: "Monaco-Ville",
                  desc: "Le Rocher et le secteur du Palais Princier.",
                },
                {
                  name: "Port Hercule",
                  desc: "Port de Monaco et environs immédiats.",
                },
                {
                  name: "Circuit de Monaco",
                  desc: "Secteur du circuit — surtout en période de Grand Prix (réservation anticipée).",
                },
              ].map((d) => (
                <div
                  key={d.name}
                  className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                >
                  <h3 className="font-bold text-accent mb-1">{d.name}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {d.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Monaco → Cannes */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 md:p-10 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Taxi Monaco → Cannes
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Le trajet peut aussi être organisé dans le sens retour :{" "}
              <strong className="text-gray-900">Monaco → Cannes</strong>.
              Indiquez l’adresse de prise en charge à Monaco et votre
              destination à Cannes.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Aucun forfait retour distinct n’est publié ici.{" "}
              <strong className="text-gray-900">
                Tarif et conditions sur demande
              </strong>{" "}
              à la réservation. Nous ne promettons pas d’attente sur place ni
              d’aller-retour au même prix sans confirmation préalable.
            </p>
            <Button
              href="/reservation"
              className="bg-accent text-accent-foreground hover:opacity-90"
            >
              Demander un retour Monaco → Cannes
            </Button>
          </div>

          {/* Événements */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
              Cannes ↔ Monaco pour les événements
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Grand Prix de Monaco, soirées ou rendez-vous dans la Principauté,
              congrès et festivals à Cannes : la demande de{" "}
              <strong className="text-gray-900">taxi Cannes Monaco</strong>{" "}
              augmente. Circulation et restrictions peuvent allonger le trajet
              au-delà des ~45 minutes habituelles.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Réservez à l’avance et indiquez l’heure souhaitée avec une marge.
              Aucune durée fixe n’est annoncée pour les jours de Grand Prix.
            </p>
          </div>

          {/* Véhicules */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
              Véhicules pour le transfert
            </h2>
            <div className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <Car className="w-8 h-8 text-accent shrink-0 mt-1" aria-hidden />
              <div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Prestations en véhicules premium :{" "}
                  <strong className="text-gray-900">Mercedes</strong> et{" "}
                  <strong className="text-gray-900">Tesla</strong>, selon
                  disponibilité et choix à la réservation.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Précisez le nombre de passagers et le volume de bagages dans
                  le formulaire. Le véhicule exact est confirmé avant le
                  départ.
                </p>
              </div>
            </div>
          </div>

          {/* Différencier aéroport */}
          <div className="grid md:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <Plane className="w-7 h-7 text-accent mb-3" aria-hidden />
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Vous arrivez à l’aéroport de Nice&nbsp;?
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                Pour un trajet Nice Aéroport → Cannes (prix fixe, T1/T2),
                utilisez la page dédiée — ce n’est pas un Cannes → Monaco.
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
                Plusieurs heures ou plusieurs arrêts&nbsp;?
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                Un aller simple Cannes–Monaco se réserve ici. Pour une mise à
                disposition 4 h ou 8 h (plusieurs étapes), voyez le chauffeur
                privé.
              </p>
              <Link
                href="/services/chauffeur-prive-cannes"
                className="text-accent font-semibold hover:underline underline-offset-2"
              >
                Chauffeur privé à Cannes
              </Link>
            </div>
          </div>

          {/* Comment réserver */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Comment réserver votre taxi entre Cannes et Monaco&nbsp;?
            </h2>
            <ol className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                "Date",
                "Heure",
                "Adresse de prise en charge",
                "Destination à Monaco (ou retour vers Cannes)",
                "Nombre de passagers",
                "Bagages si nécessaire (notes)",
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
            Réserver votre transfert Cannes Monaco
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Forfait Cannes → Monaco 160 € · confirmation avant le départ.
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
