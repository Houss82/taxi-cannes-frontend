// Page service : taxi conventionné CPAM à Cannes (SEO local + conversion appel)

export const revalidate = 86400;

import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  ShieldCheck,
  MapPin,
  HeartPulse,
  MessageCircle,
  ChevronRight,
} from "lucide-react";
import Button from "@/app/components/ui/Button";
import {
  SITE_PHONE_DISPLAY,
  SITE_PHONE_DISPLAY_INTL,
  SITE_PHONE_TEL,
} from "@/app/lib/contact";

const canonical =
  "https://www.cannestaxi.fr/services/taxi-conventionne-cpam-cannes";

export const metadata = {
  title:
    "Taxi conventionné CPAM à Cannes | Transport médical assis — Taxi Cannes",
  description:
    "Taxi conventionné à Cannes (CPAM) : déplacements vers hôpital, clinique ou centre de soins, transport médical assis selon éligibilité. 07 56 82 77 99.",
  keywords: [
    "taxi conventionné cannes",
    "taxi conventionné cpam cannes",
    "taxi cpam cannes",
    "transport médical assis cannes",
    "transport médical cannes",
    "taxi médical cannes",
    "transport assis professionnalisé cannes",
    "taxi conventionné alpes-maritimes",
    "taxi gare cannes cpam",
  ],
  alternates: { canonical },
  openGraph: {
    title: "Taxi conventionné CPAM à Cannes | Taxi Cannes",
    description:
      "Taxi conventionné à Cannes, taxi CPAM : infos sur le transport médical et l’éligibilité. Appelez le 07 56 82 77 99.",
    url: canonical,
    siteName: "Taxi Cannes",
    locale: "fr_FR",
    type: "website",
  },
};

const faqItems = [
  {
    q: "Comment savoir si je peux bénéficier d’un taxi conventionné à Cannes ?",
    a: "Pour un taxi conventionné à Cannes, cela dépend de votre situation et des règles de la CPAM. Le plus simple est de nous appeler avant la course : nous faisons le point avec vous sur votre dossier et ce qu’il faut prévoir, sans engagement.",
  },
  {
    q: "Le transport est-il remboursé par la CPAM ?",
    a: "Le remboursement ou la prise en charge dépend de votre éligibilité et des conditions en vigueur. Nous ne remplaçons pas le conseil de votre caisse ou de votre médecin : nous vous orientons au téléphone et vous invitons à vérifier les formalités nécessaires.",
  },
  {
    q: "Faut-il appeler avant de réserver ?",
    a: "Oui, pour un trajet sous conventionnement il est préférable d’appeler à l’avance : cela permet de confirmer les informations utiles et d’organiser la prise en charge dans de bonnes conditions.",
  },
  {
    q: "Peut-on organiser un trajet vers un hôpital ou une clinique ?",
    a: "Oui, nous accompagnons souvent des trajets vers des établissements de soins sur Cannes et alentours. Précisez le lieu, l’horaire du rendez-vous et, si besoin, les contraintes de mobilité — nous vous répondons franchement sur la faisabilité.",
  },
  {
    q: "Le service est-il disponible selon les horaires et les disponibilités ?",
    a: "Nous sommes joignables pour en discuter. La confirmation d’une course dépend du créneau et des véhicules disponibles : appelez-nous pour vérifier au moment qui vous convient.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function TaxiConventionneCpamCannesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Script
        id="faq-taxi-cpam-cannes"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* Fil d’Ariane léger */}
      <nav
        className="border-b border-gray-100 bg-gray-50/80"
        aria-label="Fil d’Ariane"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 text-sm text-gray-600">
          <Link href="/" className="hover:text-accent font-medium">
            Accueil
          </Link>
          <span className="mx-2 text-gray-400" aria-hidden>
            /
          </span>
          <Link href="/services" className="hover:text-accent font-medium">
            Services
          </Link>
          <span className="mx-2 text-gray-400" aria-hidden>
            /
          </span>
          <span className="text-gray-900">Taxi conventionné CPAM</span>
        </div>
      </nav>

      {/* Hero — visuel trajets soins (établissements Alpes-Maritimes) */}
      <section className="relative pt-24 pb-12 md:pt-28 md:pb-20 min-h-[min(85vh,640px)] md:min-h-[560px] flex items-center justify-center overflow-hidden">
        <Image
          src="/taxi-cannes-arnaud-tzanck.jpeg"
          alt="Taxi conventionné à Cannes — transport médical vers hôpital, clinique ou centre de soins"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-linear-to-b from-slate-950/80 via-slate-900/65 to-slate-950/85"
          aria-hidden
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center w-full">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 backdrop-blur-sm px-4 py-1.5 text-sm text-white shadow-sm mb-6">
            <ShieldCheck
              className="w-4 h-4 text-sky-200 shrink-0"
              aria-hidden
            />
            <span>Service local à Cannes — informations transparentes</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-balance leading-tight drop-shadow-sm">
            Taxi conventionné CPAM à Cannes
          </h1>
          <p className="mt-5 text-base sm:text-lg md:text-xl text-white/95 max-w-2xl mx-auto text-pretty leading-relaxed">
            <strong className="text-white font-semibold">Taxi conventionné à Cannes</strong>{" "}
            pour vos déplacements médicaux vers hôpital, clinique ou centre de
            soins, avec <strong className="text-white">prise en charge possible</strong>{" "}
            selon votre <strong className="text-white">éligibilité CPAM</strong>.{" "}
            <span className="text-white/90">
              Nous gérons aussi le <strong className="text-white">transport médical assis</strong>{" "}
              sur demande, dans le cadre prévu.
            </span>
          </p>
          <p className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl mx-auto text-pretty">
            Vérification rapide de votre situation au téléphone. Prise en charge
            possible selon les{" "}
            <strong className="text-white">conditions d’éligibilité</strong> — à
            confirmer lors de l’appel, sans promesse automatique.
          </p>
          <p className="mt-3 text-sm text-white/75 max-w-xl mx-auto">
            Selon votre dossier, une prescription médicale peut être nécessaire.
            Nous restons prudents : chaque cas est particulier.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
            <Button
              href={SITE_PHONE_TEL}
              variant="call"
              size="xl"
              className="w-full sm:w-auto shadow-black/30"
              aria-label={`Appeler Taxi Cannes au ${SITE_PHONE_DISPLAY}`}
            >
              <Phone className="w-5 h-5 shrink-0" aria-hidden />
              Appeler maintenant
            </Button>
            <Button
              href="/contact"
              variant="secondaryInverse"
              size="xl"
              className="w-full sm:w-auto"
            >
              <span className="inline-flex items-center gap-2">
                <MessageCircle className="w-4 h-4 shrink-0" aria-hidden />
                Demander un renseignement
              </span>
            </Button>
          </div>
          <p className="mt-4 text-sm text-white/85">
            Numéro direct :{" "}
            <a
              href={SITE_PHONE_TEL}
              className="font-bold tabular-nums text-white underline-offset-2 hover:underline"
            >
              {SITE_PHONE_DISPLAY_INTL}
            </a>
          </p>
        </div>
      </section>

      {/* Comment ça fonctionne */}
      <section className="py-14 md:py-16 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Comment ça fonctionne ?
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Pour un <strong className="text-gray-900">taxi CPAM à Cannes</strong>{" "}
            ou un <strong className="text-gray-900">taxi conventionné</strong> lié
            aux soins, l’idée est simple : on organise le{" "}
            <strong className="text-gray-900">transport médical à Cannes</strong>{" "}
            (dépose, horaires) pendant que{" "}
            <strong className="text-gray-900">votre éligibilité</strong> et le
            volet administratif relèvent de la CPAM et, le cas échéant, de votre
            médecin.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Un <strong className="text-gray-900">taxi conventionné</strong> peut
            être utile pour des déplacements liés aux soins, lorsque votre
            situation le permet et{" "}
            <strong className="text-gray-900">
              sous conditions d’éligibilité
            </strong>{" "}
            fixées par la CPAM. La prise en charge et le remboursement ne sont
            pas automatiques : ils dépendent de votre dossier.
          </p>
          <ul className="mt-6 space-y-4 text-gray-700">
            {[
              {
                icon: Phone,
                text: "Un appel permet de vérifier rapidement ce que nous pouvons organiser côté trajet, et ce qu’il vous reste à confirmer auprès de votre caisse ou de votre médecin.",
              },
              {
                icon: HeartPulse,
                text: "Indiquez-nous la nature du déplacement (rendez-vous, hospitalisation, suite de soins…) et vos contraintes éventuelles.",
              },
              {
                icon: ShieldCheck,
                text: "Nous privilégions des réponses claires : si une information nous manque, nous vous le disons plutôt que d’avancer une certitude.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <li key={i} className="flex gap-3">
                  <Icon
                    className="w-5 h-5 text-accent shrink-0 mt-1"
                    aria-hidden
                  />
                  <span className="leading-relaxed">{item.text}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Trajets concernés — SEO local */}
      <section className="py-14 md:py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
            Exemples de trajets depuis Cannes
          </h2>
          <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Les demandes de{" "}
            <strong className="text-gray-800">taxi conventionné à Cannes</strong>{" "}
            pour un <strong className="text-gray-800">taxi CPAM</strong> (ou un{" "}
            <strong className="text-gray-800">transport médical</strong> classique)
            passent par les mêmes règles : le <strong className="text-gray-800">transport médical</strong> et
            le{" "}
            <strong className="text-gray-800">
              taxi assis professionnalisé
            </strong>{" "}
            dépendent de votre prescription et de la caisse. Les exemples
            ci-dessous sont des cas fréquents ; l’éligibilité reste à confirmer à
            l’appel.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Cannes → hôpital ou clinique",
                desc: "Accompagnement vers les établissements des Alpes-Maritimes ou au-delà, selon le rendez-vous et les disponibilités.",
              },
              {
                title: "Cannes → centre médical",
                desc: "Courses vers des cabinets ou centres de soins à Cannes et en proche périphérie.",
              },
              {
                title: "Cannes → gare SNCF",
                desc: "Raccordement vers ou depuis la gare : utile quand la marche ou les correspondances sont difficiles — à préciser au téléphone.",
              },
              {
                title: "Cannes → Nice",
                desc: "Trajets vers des structures niçoises ; durée et créneau à confirmer ensemble.",
              },
              {
                title: "Cannes → Antibes ou Grasse",
                desc: "Déplacements inter-villes pour soins ou suites de parcours, sur réservation lorsque possible.",
              },
              {
                title: "Autres distances",
                desc: "Selon prescription et dossier, des trajets plus longs peuvent être étudiés : nous vous répondons franchement sur la faisabilité.",
              },
            ].map((block) => (
              <div
                key={block.title}
                className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-start gap-2">
                  <MapPin
                    className="w-5 h-5 text-accent shrink-0 mt-0.5"
                    aria-hidden
                  />
                  <h3 className="font-bold text-gray-900">{block.title}</h3>
                </div>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {block.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi nous appeler */}
      <section className="py-14 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Pourquoi nous appeler ?
          </h2>
          <ul className="mt-6 space-y-3 text-gray-700">
            {[
              "Réponse directe : un interlocuteur local, sans formulaire obligatoire pour une première question.",
              "Organisation simple : créneau, lieu de prise en charge et destination clarifiés à l’avance quand c’est possible.",
              "Service à Cannes : nous connaissons les accès du centre-ville, de la gare et des grands axes.",
              "Transparence : si le conventionnement ne s’applique pas à votre cas, nous vous le disons et voyons une alternative de transport classique si vous le souhaitez.",
            ].map((line) => (
              <li key={line} className="flex gap-2">
                <ChevronRight
                  className="w-5 h-5 text-accent shrink-0 mt-0.5"
                  aria-hidden
                />
                <span className="leading-relaxed">{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA appel */}
      <section className="py-14 md:py-16 bg-sky-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Un doute sur votre prise en charge ?
          </h2>
          <p className="mt-4 text-sky-100 text-base md:text-lg leading-relaxed">
            Appelez-nous : nous répondons rapidement et passons en revue les
            informations utiles.{" "}
            <strong className="text-white">
              Aucune promesse de remboursement
            </strong>{" "}
            sans vérification — nous restons sur des formulations précises, pour
            votre tranquillité comme pour la nôtre.
          </p>
          <Button
            href={SITE_PHONE_TEL}
            variant="call"
            size="xl"
            className="mt-8 w-full sm:w-auto min-h-[56px] text-lg font-bold"
            aria-label={`Appeler Taxi Cannes au ${SITE_PHONE_DISPLAY}`}
          >
            <Phone className="w-5 h-5 shrink-0" aria-hidden />
            {SITE_PHONE_DISPLAY}
          </Button>
          <p className="mt-6 text-sm text-sky-200/90">
            <Link
              href="/contact"
              className="font-semibold underline underline-offset-2 hover:text-white"
            >
              Écrire via la page Contact
            </Link>
            {" · "}
            <Link
              href="/tarifs"
              className="font-semibold underline underline-offset-2 hover:text-white"
            >
              Voir les tarifs indicatifs
            </Link>
          </p>
        </div>
      </section>

      {/* Liens internes */}
      <section className="py-10 border-t border-gray-100 bg-gray-50/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-lg font-bold text-gray-900">Sur le même site</h2>
          <ul className="mt-4 flex flex-col sm:flex-row sm:flex-wrap gap-3 text-sm">
            {[
              { href: "/", label: "Accueil Taxi Cannes" },
              { href: "/contact", label: "Contact" },
              { href: "/tarifs", label: "Tarifs" },
              {
                href: "/services/transfert-aeroport-nice-cannes",
                label: "Transfert aéroport Nice",
              },
              { href: "/secteurs/la-croisette", label: "Secteur Croisette" },
              {
                href: "/blog/taxi-gare-cannes-service-transport-sncf-2025",
                label: "Taxi gare Cannes",
              },
              {
                href: "/blog/comment-reserver-taxi-conventionne-cpam-cannes",
                label: "Réserver un taxi CPAM (guide)",
              },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="inline-flex items-center gap-1 font-medium text-accent hover:underline"
                >
                  {l.label}
                  <ChevronRight className="w-4 h-4" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 md:py-20 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
            Questions fréquentes
          </h2>
          <p className="mt-3 text-center text-sm text-gray-600">
            Réponses volontairement prudentes — le dossier fait foi.
          </p>
          <div className="mt-10 space-y-3">
            {faqItems.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-gray-200 bg-white p-4 md:p-5 shadow-sm open:shadow-md transition-shadow"
              >
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between gap-4 items-start">
                  <span>{item.q}</span>
                  <ChevronRight className="w-5 h-5 shrink-0 text-accent group-open:rotate-90 transition-transform" />
                </summary>
                <p className="mt-3 text-sm md:text-base text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final discret */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-700">
            <strong className="text-gray-900">
              Taxi conventionné CPAM à Cannes
            </strong>{" "}
            : une question, un rendez-vous médical, un trajet à anticiper ?
          </p>
          <Button
            href={SITE_PHONE_TEL}
            variant="call"
            size="xl"
            className="mt-4 text-lg font-bold gap-2"
            aria-label={`Appeler Taxi Cannes au ${SITE_PHONE_DISPLAY}`}
          >
            <Phone className="w-5 h-5" aria-hidden />
            {SITE_PHONE_DISPLAY}
          </Button>
        </div>
      </section>
    </main>
  );
}
