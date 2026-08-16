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
  FileText,
  Building2,
  Repeat,
  CheckCircle,
  Clock,
  Stethoscope,
  Ambulance,
  Car,
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
  title: "Taxi conventionné Cannes CPAM | Transport médical",
  description:
    "Taxi conventionné CPAM à Cannes : transport médical assis vers hôpital, clinique ou centre de soins, selon éligibilité. Appelez le 07 56 82 77 99.",
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
    title: "Taxi conventionné Cannes CPAM | Transport médical",
    description:
      "Taxi conventionné CPAM à Cannes : transport médical assis selon éligibilité. Appelez le 07 56 82 77 99.",
    url: canonical,
    siteName: "Taxi Cannes",
    locale: "fr_FR",
    type: "website",
  },
};

const faqItems = [
  {
    q: "Comment réserver un taxi conventionné CPAM à Cannes ?",
    a: "Appelez Taxi Cannes, indiquez la date et l’heure du rendez-vous, l’adresse de départ et l’établissement. Nous faisons le point sur les éléments administratifs utiles. La confirmation dépend du créneau et des disponibilités.",
  },
  {
    q: "Comment savoir si je peux bénéficier d’un taxi conventionné à Cannes ?",
    a: "Pour un taxi conventionné à Cannes, cela dépend de votre situation et des règles de la CPAM. Le plus simple est de nous appeler avant la course : nous faisons le point avec vous sur votre dossier et ce qu’il faut prévoir, sans engagement.",
  },
  {
    q: "Le transport est-il remboursé par la CPAM ?",
    a: "Le remboursement ou la prise en charge dépend de votre éligibilité et des conditions en vigueur. Nous ne remplaçons pas le conseil de votre caisse ou de votre médecin : nous vous orientons au téléphone et vous invitons à vérifier les formalités nécessaires.",
  },
  {
    q: "Quels documents faut-il pour un taxi conventionné ?",
    a: "Selon votre situation, peuvent notamment être demandés une prescription médicale de transport, la carte Vitale, une attestation de droits, et éventuellement d’autres justificatifs. Cette liste n’est ni universelle ni exhaustive : vérifiez auprès de la CPAM ou de votre professionnel de santé.",
  },
  {
    q: "Peut-on prendre un taxi conventionné de Cannes vers Nice ?",
    a: "Oui, un trajet Cannes → Nice peut être organisé vers un établissement de soins (par exemple Pasteur, l’Archet ou le Centre Antoine Lacassagne), selon les disponibilités et les conditions applicables à votre dossier. Appelez-nous avec l’adresse exacte et l’horaire du rendez-vous.",
  },
  {
    q: "Peut-on réserver pour une dialyse ?",
    a: "Nous pouvons étudier l’organisation de trajets liés à des séances régulières, dont la dialyse, lorsque la prescription et l’éligibilité le permettent. La prise en charge n’est pas automatique : elle dépend de votre dossier. Contactez-nous pour voir ce qui est possible.",
  },
  {
    q: "Peut-on réserver plusieurs trajets médicaux à l’avance ?",
    a: "Oui, lorsque vos rendez-vous sont connus, il est utile de les anticiper (aller-retour, horaires répétitifs). Nous ne garantissons pas le même chauffeur à chaque fois. La confirmation reste liée aux créneaux et aux véhicules disponibles.",
  },
  {
    q: "Le taxi conventionné peut-il venir me chercher à domicile ?",
    a: "Oui, la prise en charge se fait généralement à l’adresse indiquée (domicile, résidence, hôtel). Précisez l’accès, un code portail si besoin, et le point de rendez-vous le plus simple.",
  },
  {
    q: "Peut-on faire l’aller et le retour le même jour ?",
    a: "Oui, un aller-retour le jour du rendez-vous peut être prévu. Indiquez si l’heure de retour est connue ou à confirmer après la consultation. Nous organisons selon les disponibilités.",
  },
  {
    q: "Quelle différence entre taxi conventionné et VSL ?",
    a: "Le taxi conventionné correspond à un transport assis réalisé en taxi lorsqu’il est adapté à la situation. Le VSL et l’ambulance sont des modes de transport sanitaire différents. Le mode prescrit dépend de l’état et de la situation du patient : nous ne posons aucun diagnostic.",
  },
  {
    q: "Peut-on organiser un trajet vers un hôpital ou une clinique ?",
    a: "Oui, nous accompagnons souvent des trajets vers des établissements de soins sur Cannes et alentours. Précisez le lieu, l’horaire du rendez-vous et, si besoin, les contraintes de mobilité — nous vous répondons franchement sur la faisabilité.",
  },
  {
    q: "Faut-il appeler avant de réserver ?",
    a: "Oui, pour un trajet sous conventionnement il est préférable d’appeler à l’avance : cela permet de confirmer les informations utiles et d’organiser la prise en charge dans de bonnes conditions.",
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
      name: "Taxi conventionné CPAM",
      item: canonical,
    },
  ],
};

function SectionEyebrow({ children }) {
  return (
    <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 bg-accent/10 rounded-full border border-accent/20">
      <span className="w-2 h-2 bg-accent rounded-full" aria-hidden />
      <span className="text-xs font-bold text-accent uppercase tracking-wider">
        {children}
      </span>
    </div>
  );
}

function PhoneCta({ heading, dark = false }) {
  return (
    <div className="text-center">
      {heading ? (
        <p
          className={`mb-5 text-lg leading-relaxed ${
            dark ? "text-white/90" : "text-gray-700"
          }`}
        >
          {heading}
        </p>
      ) : null}
      <Button
        href={SITE_PHONE_TEL}
        variant="call"
        size="xl"
        className="w-full sm:w-auto px-8 shadow-lg"
        aria-label={`Appeler Taxi Cannes au ${SITE_PHONE_DISPLAY}`}
      >
        <Phone className="w-5 h-5 shrink-0" aria-hidden />
        {SITE_PHONE_DISPLAY}
      </Button>
    </div>
  );
}

export default function TaxiConventionneCpamCannesPage() {
  return (
    <main className="min-h-screen bg-white pb-24 md:pb-0">
      <Script
        id="faq-taxi-cpam-cannes"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <Script
        id="breadcrumb-taxi-cpam-cannes"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Hero */}
      <section className="relative bg-linear-to-br from-sky-50 via-white to-emerald-50/40 pt-28 pb-12 md:pb-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          <div className="absolute -top-24 -left-16 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />
          <div className="absolute top-1/3 -right-20 h-96 w-96 rounded-full bg-emerald-200/30 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <nav className="mb-8 text-sm text-gray-500" aria-label="Fil d’Ariane">
            <Link href="/" className="hover:text-accent font-medium">
              Accueil
            </Link>
            <span className="mx-2 text-gray-300" aria-hidden>
              /
            </span>
            <Link href="/services" className="hover:text-accent font-medium">
              Services
            </Link>
            <span className="mx-2 text-gray-300" aria-hidden>
              /
            </span>
            <span className="text-gray-800">Taxi conventionné CPAM</span>
          </nav>

          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-5 px-3.5 py-1.5 bg-white rounded-full border border-accent/20 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-accent" aria-hidden />
                <span className="text-xs font-bold text-accent uppercase tracking-wider">
                  Transport assis · Cannes
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.35rem] font-bold text-gray-900 mb-5 leading-[1.12] tracking-tight text-balance">
                Taxi conventionné CPAM à Cannes
              </h1>
              <p className="text-base md:text-lg text-gray-600 mb-4 leading-relaxed max-w-xl">
                <strong className="text-gray-900 font-semibold">
                  Taxi conventionné à Cannes
                </strong>{" "}
                pour vos rendez-vous médicaux : hôpitaux, cliniques, centres de
                soins, consultations, examens ou traitements réguliers.{" "}
                <strong className="text-gray-900">Transport médical assis</strong>{" "}
                selon votre{" "}
                <strong className="text-gray-900">éligibilité CPAM</strong> — à
                confirmer à l’appel, sans promesse automatique.
              </p>
              <p className="text-sm text-gray-500 mb-8 pl-3 border-l-2 border-accent/40">
                Une prescription médicale peut être nécessaire. Chaque dossier
                est particulier.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                <Button
                  href={SITE_PHONE_TEL}
                  variant="call"
                  size="xl"
                  className="px-8 shadow-lg shadow-emerald-600/20"
                  aria-label={`Appeler Taxi Cannes au ${SITE_PHONE_DISPLAY}`}
                >
                  <Phone className="w-5 h-5 shrink-0" aria-hidden />
                  Appeler maintenant
                </Button>
                <Button
                  href="/contact"
                  variant="secondary"
                  size="xl"
                  className="px-8"
                >
                  <span className="inline-flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 shrink-0" aria-hidden />
                    Demander un renseignement
                  </span>
                </Button>
              </div>
              <p className="mt-5 text-sm text-gray-500">
                Numéro direct :{" "}
                <a
                  href={SITE_PHONE_TEL}
                  className="font-bold tabular-nums text-gray-900 underline underline-offset-4 decoration-accent/40 hover:text-accent hover:decoration-accent"
                >
                  {SITE_PHONE_DISPLAY_INTL}
                </a>
              </p>
            </div>

            <div className="relative pb-8 lg:pb-4">
              <div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] rounded-[1.75rem] overflow-hidden shadow-2xl shadow-slate-900/15 ring-1 ring-black/5">
                <Image
                  src="/taxi-conventionne-cannes-lacassagne.png"
                  alt="Taxi conventionné à Cannes — transport médical vers hôpital, clinique ou centre de soins"
                  fill
                  className="object-cover object-[center_70%]"
                  priority
                  sizes="(max-width: 1024px) 100vw, 48vw"
                />
              </div>
              <div className="absolute -bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:bottom-6 rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 shadow-xl px-4 py-3 flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <Building2 className="w-5 h-5 text-accent" aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-gray-900 leading-tight">
                    Hôpitaux & cliniques
                  </p>
                  <p className="text-xs text-gray-500">
                    Cannes, Nice, Antibes, Grasse
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick info */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: Phone,
                label: "Un appel",
                desc: "Pour cadrer le trajet et le dossier",
              },
              {
                icon: ShieldCheck,
                label: "Éligibilité",
                desc: "Selon prescription et CPAM",
              },
              {
                icon: Car,
                label: "Transport assis",
                desc: "Taxi, pas ambulance ni VSL",
              },
              {
                icon: MapPin,
                label: "Cannes & alentours",
                desc: "Hôpitaux, cliniques, Nice",
              },
            ].map((info) => {
              const Icon = info.icon;
              return (
                <div
                  key={info.label}
                  className="text-center p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-accent/30 transition-all"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-accent" aria-hidden />
                  </div>
                  <h3 className="font-bold mb-1 text-lg text-gray-900">
                    {info.label}
                  </h3>
                  <p className="text-sm text-muted-foreground">{info.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-linear-to-b from-accent/5 via-white to-accent/5 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10 space-y-20">
          {/* Comment ça fonctionne */}
          <div>
            <SectionEyebrow>Fonctionnement</SectionEyebrow>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Comment ça fonctionne ?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Pour un <strong className="text-gray-900">taxi CPAM à Cannes</strong>{" "}
              ou un <strong className="text-gray-900">taxi conventionné</strong>{" "}
              lié aux soins, l’idée est simple : on organise le{" "}
              <strong className="text-gray-900">
                transport médical à Cannes
              </strong>{" "}
              (dépose, horaires) pendant que{" "}
              <strong className="text-gray-900">votre éligibilité</strong> et le
              volet administratif relèvent de la CPAM et, le cas échéant, de
              votre médecin.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Un <strong className="text-gray-900">taxi conventionné</strong>{" "}
              peut être utile pour des déplacements liés aux soins, lorsque
              votre situation le permet et{" "}
              <strong className="text-gray-900">
                sous conditions d’éligibilité
              </strong>{" "}
              fixées par la CPAM. La prise en charge et le remboursement ne
              sont pas automatiques : ils dépendent de votre dossier.
            </p>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  n: "01",
                  icon: Phone,
                  text: "Un appel permet de vérifier rapidement ce que nous pouvons organiser côté trajet, et ce qu’il vous reste à confirmer auprès de votre caisse ou de votre médecin.",
                },
                {
                  n: "02",
                  icon: HeartPulse,
                  text: "Indiquez-nous la nature du déplacement (rendez-vous, hospitalisation, suite de soins…) et vos contraintes éventuelles.",
                },
                {
                  n: "03",
                  icon: ShieldCheck,
                  text: "Nous privilégions des réponses claires : si une information nous manque, nous vous le disons plutôt que d’avancer une certitude.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.n}
                    className="rounded-2xl bg-white border border-gray-100 shadow-md p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-bold text-accent tracking-widest">
                        {item.n}
                      </span>
                      <Icon className="w-6 h-6 text-accent" aria-hidden />
                    </div>
                    <p className="text-gray-700 leading-relaxed">{item.text}</p>
                  </div>
                );
              })}
            </div>
            <p className="mt-8 text-gray-700 leading-relaxed">
              Pour le détail des étapes avant l’appel, le{" "}
              <Link
                href="/blog/comment-reserver-taxi-conventionne-cpam-cannes"
                className="text-accent font-semibold hover:underline underline-offset-2"
              >
                guide pour réserver un taxi conventionné CPAM
              </Link>{" "}
              complète cette page (intention informationnelle). Ici, l’objectif
              reste d’organiser concrètement le trajet.
            </p>
          </div>

          {/* Dans quels cas */}
          <div>
            <SectionEyebrow>Situations</SectionEyebrow>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Dans quels cas utiliser un taxi conventionné à Cannes ?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Selon la prescription médicale et les conditions applicables à
              votre situation, un taxi conventionné peut servir à rejoindre un
              rendez-vous de soins depuis Cannes. L’éligibilité dépend du
              dossier : aucun motif ci-dessous n’entraîne à lui seul une prise
              en charge CPAM.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Consultation médicale",
                "Hospitalisation, entrée ou sortie d’hôpital",
                "Examens et imagerie",
                "Soins ou suivi réguliers",
                "Séances de dialyse",
                "Radiothérapie",
                "Chimiothérapie",
                "Rééducation",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-white border border-gray-100 px-4 py-3.5 shadow-sm"
                >
                  <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-gray-800 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
              Le service proposé reste un{" "}
              <strong className="text-gray-800">transport assis en taxi</strong>
              , lorsque les conditions réglementaires et administratives sont
              réunies. Ce n’est ni une ambulance, ni un VSL, ni un transport
              médicalisé.
            </p>
          </div>

          {/* Établissements */}
          <div>
            <SectionEyebrow>Destinations</SectionEyebrow>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Transport médical depuis Cannes vers les établissements de soins
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Un trajet peut être organisé vers les destinations ci-dessous
              selon les disponibilités et les conditions applicables à votre
              dossier. Nous n’avons pas de partenariat avec ces établissements :
              il s’agit uniquement de lieux de rendez-vous fréquents dans le
              bassin cannois et les Alpes-Maritimes.
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  city: "Cannes",
                  text: "Centre Hospitalier de Cannes Simone Veil, ainsi que cliniques, cabinets et centres de soins de la ville. Précisez le bâtiment ou l’entrée indiquée sur votre convocation.",
                },
                {
                  city: "Mougins",
                  text: "Établissements de soins de Mougins : indiquez l’adresse exacte et l’horaire. Le chauffeur s’adapte aux accès du site lorsque c’est possible.",
                },
                {
                  city: "Antibes",
                  text: "Centre Hospitalier d’Antibes Juan-les-Pins, cliniques et établissements du secteur. Utile pour un rendez-vous à l’ouest de Cannes, sous réserve de créneau.",
                },
                {
                  city: "Nice",
                  text: "Hôpital Pasteur, Hôpital l’Archet, Centre Antoine Lacassagne et d’autres structures hospitalières niçoises. Détail dans la section Cannes → Nice ci-dessous.",
                },
                {
                  city: "Grasse",
                  text: "Centre Hospitalier de Grasse et établissements de santé du bassin grassois. Trajet plus long : à confirmer à l’appel selon l’horaire du rendez-vous.",
                },
              ].map((block) => (
                <div
                  key={block.city}
                  className="rounded-2xl bg-white border border-gray-100 shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Building2 className="w-5 h-5 text-accent" aria-hidden />
                    <h3 className="text-xl font-bold text-gray-900">
                      {block.city}
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{block.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 rounded-2xl border-2 border-accent/25 bg-white p-8 md:p-10 shadow-lg">
              <PhoneCta heading="Un rendez-vous médical à organiser depuis Cannes ?" />
            </div>
          </div>

          {/* Cannes → Nice */}
          <div className="rounded-3xl bg-primary text-primary-foreground p-8 md:p-12 shadow-xl overflow-hidden relative">
            <div
              className="absolute -right-16 -top-16 w-64 h-64 bg-accent/20 rounded-full blur-3xl"
              aria-hidden
            />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Taxi conventionné Cannes → Nice pour vos rendez-vous médicaux
              </h2>
              <p className="text-lg text-primary-foreground/90 leading-relaxed mb-4">
                Nice concentre plusieurs grands établissements. Il est fréquent
                que des patients habitant Cannes s’y rendent pour une
                consultation, un examen ou un traitement. Un{" "}
                <strong className="text-white">
                  taxi conventionné Cannes Nice
                </strong>{" "}
                (ou un{" "}
                <strong className="text-white">
                  transport médical Cannes Nice
                </strong>
                ) peut être étudié lorsque la prescription et l’éligibilité le
                permettent — sans garantie de prise en charge.
              </p>
              <p className="text-lg text-primary-foreground/90 leading-relaxed mb-6">
                Les destinations les plus demandées côté Nice sont notamment
                l’Hôpital Pasteur, l’Hôpital l’Archet et le Centre Antoine
                Lacassagne. Indiquez le site exact (bâtiment, service) : les
                accès ne sont pas les mêmes d’un établissement à l’autre.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Hôpital Pasteur", "Hôpital l’Archet", "Centre Antoine Lacassagne"].map(
                  (name) => (
                    <span
                      key={name}
                      className="px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sm font-semibold"
                    >
                      {name}
                    </span>
                  )
                )}
              </div>
              <p className="text-primary-foreground/90 leading-relaxed">
                Pour un rendez-vous au Centre Antoine Lacassagne, notre{" "}
                <Link
                  href="/blog/taxi-conventionne-cannes-centre-antoine-lacassagne-nice"
                  className="text-accent font-semibold hover:underline underline-offset-2"
                >
                  guide Cannes → Centre Antoine Lacassagne
                </Link>{" "}
                précise les accès. La réservation du trajet se fait par
                téléphone.
              </p>
            </div>
          </div>

          {/* Transport régulier */}
          <div>
            <SectionEyebrow>Séances répétées</SectionEyebrow>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Transport médical régulier depuis Cannes
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Certains traitements impliquent plusieurs déplacements :{" "}
              <strong className="text-gray-900">dialyse</strong>,{" "}
              <strong className="text-gray-900">radiothérapie</strong>,{" "}
              <strong className="text-gray-900">chimiothérapie</strong>,{" "}
              <strong className="text-gray-900">rééducation</strong> ou
              consultations répétées. Selon la prescription médicale et
              l’éligibilité du patient, nous pouvons aider à caler des horaires
              réguliers et des aller-retours, lorsque les créneaux le
              permettent.
            </p>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  icon: Clock,
                  text: "Anticiper les rendez-vous connus pour limiter les courses de dernière minute.",
                },
                {
                  icon: Repeat,
                  text: "Prévoir l’aller et, si l’heure de fin est connue, le retour.",
                },
                {
                  icon: MapPin,
                  text: "Signaler une contrainte de mobilité ou un accès résidence.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.text}
                    className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md"
                  >
                    <Icon className="w-7 h-7 text-accent mb-3" aria-hidden />
                    <p className="text-gray-700 leading-relaxed">{item.text}</p>
                  </div>
                );
              })}
            </div>
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
              Nous ne garantissons pas le même chauffeur à chaque séance, ni
              une disponibilité permanente. Chaque course reste confirmée selon
              les véhicules disponibles.
            </p>
          </div>

          {/* Documents */}
          <div className="rounded-3xl bg-white border border-gray-100 shadow-lg p-8 md:p-10">
            <SectionEyebrow>Avant le trajet</SectionEyebrow>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quels documents prévoir pour un taxi conventionné ?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Nous ne donnons pas de conseil médical. Selon la situation,
              peuvent notamment être demandés :
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Prescription médicale de transport",
                "Carte Vitale",
                "Attestation de droits",
                "Éventuellement d’autres justificatifs demandés par la caisse",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl bg-accent/5 border border-accent/10 p-4"
                >
                  <FileText className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-gray-800 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Cette liste n’est ni universelle ni exhaustive. Vérifiez les
              règles correspondant à votre dossier auprès de la CPAM ou du
              professionnel de santé qui suit votre parcours.
            </p>
          </div>

          {/* Taxi vs VSL */}
          <div>
            <SectionEyebrow>Clarification</SectionEyebrow>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Taxi conventionné, VSL ou ambulance : quelle différence ?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Le mode prescrit dépend de l’état et de la situation du patient.
              Nous ne posons aucun diagnostic et ne remplaçons pas la décision
              du médecin ou de la caisse.
            </p>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  icon: Car,
                  title: "Taxi conventionné",
                  text: "Transport assis réalisé en taxi lorsqu’il est adapté à la situation.",
                  highlight: true,
                },
                {
                  icon: Stethoscope,
                  title: "VSL",
                  text: "Mode de transport sanitaire différent, prescrit selon le dossier.",
                },
                {
                  icon: Ambulance,
                  title: "Ambulance",
                  text: "Transport sanitaire distinct. Nous ne proposons pas ce service.",
                },
              ].map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className={`rounded-2xl p-6 border shadow-md ${
                      card.highlight
                        ? "bg-accent/5 border-accent/30"
                        : "bg-white border-gray-100"
                    }`}
                  >
                    <Icon className="w-8 h-8 text-accent mb-3" aria-hidden />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {card.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{card.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Zones */}
          <div>
            <SectionEyebrow>Prise en charge</SectionEyebrow>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Prise en charge à Cannes et à proximité
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Nous organisons des prises en charge depuis Cannes centre,{" "}
              <Link
                href="/secteurs/la-croisette"
                className="text-accent font-semibold hover:underline underline-offset-2"
              >
                La Croisette
              </Link>
              , Le Suquet,{" "}
              <Link
                href="/secteurs/la-bocca"
                className="text-accent font-semibold hover:underline underline-offset-2"
              >
                Cannes La Bocca
              </Link>
              , le Boulevard Carnot, Palm Beach, le secteur de la{" "}
              <Link
                href="/blog/taxi-gare-cannes-service-transport-sncf-2025"
                className="text-accent font-semibold hover:underline underline-offset-2"
              >
                gare SNCF
              </Link>
              , et à proximité{" "}
              <Link
                href="/secteurs/le-cannet"
                className="text-accent font-semibold hover:underline underline-offset-2"
              >
                Le Cannet
              </Link>
              . Donnez l’adresse complète : résidence, code d’accès, entrée
              d’immeuble.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Cannes centre",
                "Croisette",
                "Le Suquet",
                "La Bocca",
                "Boulevard Carnot",
                "Palm Beach",
                "Gare SNCF",
                "Le Cannet",
              ].map((z) => (
                <span
                  key={z}
                  className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-800 shadow-sm"
                >
                  {z}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trajets */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Exemples de trajets depuis Cannes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cas fréquents de{" "}
              <strong className="text-gray-800">
                taxi conventionné à Cannes
              </strong>{" "}
              ou de <strong className="text-gray-800">transport médical</strong>
              . L’éligibilité reste à confirmer à l’appel.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Cannes → hôpital ou clinique",
                desc: "Accompagnement vers les établissements des Alpes-Maritimes, selon le rendez-vous et les disponibilités.",
              },
              {
                title: "Cannes → centre médical",
                desc: "Courses vers des cabinets ou centres de soins à Cannes et en proche périphérie.",
              },
              {
                title: "Cannes → gare SNCF",
                desc: "Raccordement vers ou depuis la gare lorsque la marche ou les correspondances sont difficiles — à préciser au téléphone.",
              },
              {
                title: "Cannes → Nice",
                desc: "Trajets vers des structures niçoises (Pasteur, l’Archet, Centre Antoine Lacassagne, etc.). Durée et créneau à confirmer.",
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
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md hover:shadow-lg hover:border-accent/25 transition-all"
              >
                <MapPin className="w-6 h-6 text-accent mb-3" aria-hidden />
                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  {block.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {block.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi appeler */}
      <section className="py-20 bg-linear-to-b from-white to-accent/5">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-10">
            Pourquoi nous appeler ?
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              "Réponse directe : un interlocuteur local, sans formulaire obligatoire pour une première question.",
              "Organisation simple : créneau, lieu de prise en charge et destination clarifiés à l’avance quand c’est possible.",
              "Service à Cannes : nous connaissons les accès du centre-ville, de la gare et des grands axes.",
              "Transparence : si le conventionnement ne s’applique pas à votre cas, nous vous le disons et voyons une alternative de transport classique si vous le souhaitez.",
            ].map((line) => (
              <div
                key={line}
                className="flex gap-3 rounded-2xl bg-white border border-gray-100 p-6 shadow-sm"
              >
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                <p className="text-gray-700 leading-relaxed">{line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comment réserver */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <SectionEyebrow>Réservation</SectionEyebrow>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Comment réserver votre taxi conventionné à Cannes ?
          </h2>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              "Appeler Taxi Cannes",
              "Communiquer la date et l’heure du rendez-vous",
              "Préciser l’adresse de départ",
              "Préciser l’établissement ou l’adresse médicale",
              "Indiquer s’il s’agit d’un aller simple ou d’un aller-retour",
              "Vérifier les éléments administratifs nécessaires",
            ].map((step, i) => (
              <li
                key={step}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-5 flex gap-4"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-white font-bold text-sm">
                  {i + 1}
                </span>
                <span className="text-gray-800 font-medium leading-snug pt-1">
                  {step}
                </span>
              </li>
            ))}
          </ol>
          <p className="text-lg text-gray-700 leading-relaxed">
            Le téléphone reste le canal le plus fiable pour un trajet
            conventionné. Vous pouvez aussi écrire via la{" "}
            <Link
              href="/contact"
              className="text-accent font-semibold hover:underline underline-offset-2"
            >
              page Contact
            </Link>
            . Les{" "}
            <Link
              href="/tarifs"
              className="text-accent font-semibold hover:underline underline-offset-2"
            >
              tarifs indicatifs
            </Link>{" "}
            concernent surtout les courses classiques : le volet CPAM se
            discute au cas par cas.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Un doute sur votre prise en charge ?
          </h2>
          <p className="text-lg text-primary-foreground/90 leading-relaxed mb-8">
            Appelez-nous : nous répondons rapidement et passons en revue les
            informations utiles.{" "}
            <strong className="text-white">
              Aucune promesse de remboursement
            </strong>{" "}
            sans vérification — nous restons sur des formulations précises, pour
            votre tranquillité comme pour la nôtre.
          </p>
          <PhoneCta dark />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-linear-to-b from-accent/5 to-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center mb-3">
            Questions fréquentes
          </h2>
          <p className="text-center text-muted-foreground mb-10">
            Réponses volontairement prudentes — le dossier fait foi.
          </p>
          <div className="space-y-3">
            {faqItems.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-gray-200 bg-white p-5 md:p-6 shadow-sm open:shadow-md open:border-accent/30 transition-all"
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
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xl text-gray-700 mb-6">
            <strong className="text-gray-900">
              Taxi conventionné CPAM à Cannes
            </strong>{" "}
            : une question, un rendez-vous médical, un trajet à anticiper ?
          </p>
          <PhoneCta />
        </div>
      </section>
    </main>
  );
}
