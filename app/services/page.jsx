// ✅ SERVER COMPONENT - Pas de "use client"
// ISR: Revalidate toutes les 24 heures pour le SEO
export const revalidate = 86400;

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

export const metadata = {
  title: "Services - Taxi Cannes",
  description:
    "Mise en relation avec des chauffeurs de taxi indépendants à Cannes : transferts aéroport Nice, trajets vers Monaco, Saint-Tropez, Antibes. Montant et conditions confirmés par le chauffeur.",
  keywords:
    "services taxi cannes, transfert aéroport nice, taxi monaco, taxi saint-tropez, chauffeur privé cannes",
};

export default function Services() {
  const services = [
    {
      title: "Transfert Aéroport Nice – Cannes",
      desc: "Service rapide et fiable vers/depuis l'aéroport Nice-Côte d'Azur",
      image: "/aeroport-nice-cannes.jpg",
      details: ["Montant confirmé par le chauffeur", "Terminaux T1 & T2", "Demande 24h/24"],
      href: "/services/transfert-aeroport-nice-cannes",
    },
    {
      title: "Port croisière Cannes → Aéroport Nice",
      desc: "Débarquement, transfert vers T1/T2 — van possible selon disponibilité",
      image: "/taxi-cannes-port-croisiere.jpeg",
      details: ["Port → Nice sur demande", "Valises / van selon disponibilité", "Conditions confirmées par le chauffeur"],
      href: "/services/transfert-port-croisiere-cannes-aeroport-nice",
    },
    {
      title: "Taxi conventionné CPAM — transport médical assis",
      desc: "Transport médical assis, hôpitaux, cliniques : éligibilité à confirmer au téléphone",
      image: "/Taxi-PMR-Cannes-2026.jpg",
      details: [
        "Dossier CPAM (selon conditions)",
        "Transport assis & infos au téléphone",
        "Renseignement sans engagement",
      ],
      href: "/services/taxi-conventionne-cpam-cannes",
    },
    {
      title: "Trajets Palaces",
      desc: "Service VIP pour les hôtels Majestic, Martinez et Carlton",
      image: "/palace-cannes.jpg",
      details: ["Hôtels Carlton, Martinez, Majestic", "Aéroport, gare, Palais", "Conditions confirmées par le chauffeur"],
      href: "/services/trajets-palaces",
    },
    {
      title: "Cannes → Monaco",
      desc: "Transfert vers la Principauté de Monaco",
      image: "/yacht-monaco.jpg",
      details: ["Transfert vers Monaco", "Environ 50 km / 45 min", "Montant confirmé par le chauffeur"],
      href: "/services/cannes-monaco",
    },
    {
      title: "Cannes → Saint-Tropez",
      desc: "Découvrez la Côte d'Azur en style",
      image: "/saint-tropez-cannes.jpg",
      details: ["Trajets panoramiques", "Durée indicative : 1h30", "Montant confirmé par le chauffeur"],
      href: "/blog/taxi-cannes-saint-tropez-transfert-guide-2026",
    },
    {
      title: "Cannes → Antibes",
      desc: "Explorez la Côte d'Azur côté ouest",
      image: "/taxi-cannes-antibes-2026.png",
      details: [
        "Express disponible",
        "Trajets touristiques",
        "Guides recommandés",
      ],
      href: "/blog/taxi-cannes-antibes-juan-les-pins-transfert-guide-2026",
    },
    {
      title: "Cannes → Grasse",
      desc: "Capitale du parfum : parfumeries, vieille ville, gare",
      image: "/taxi-cannes-grasse-2026.png",
      details: ["Dépose parfumeries", "Aller-retour à convenir", "Montant confirmé par le chauffeur"],
      href: "/blog/taxi-cannes-grasse-transfert-guide-2026",
    },
    {
      title: "Chauffeur Privé",
      desc: "Demande de chauffeur pour demi-journée ou journée (4 h / 8 h), à confirmer avec le chauffeur",
      image: "/chauffeur-prive.jpg",
      details: [
        "Itinéraires flexibles",
        "Disponibilité à confirmer",
        "Véhicule selon disponibilité du chauffeur",
      ],
      href: "/services/chauffeur-prive-cannes",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden pt-20">
        <Image
          src="/service-page.jpg"
          alt="Services Taxi Cannes"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold">Nos Services</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto px-6">
            cannestaxi.fr met en relation avec des chauffeurs de taxi
            indépendants.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <Card
                key={i}
                className="overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
              >
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.desc}</p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {service.details.map((detail, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm">
                        <ChevronRight className="w-4 h-4 text-accent shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <Link href={service.href || "/reservation"} className="mt-auto">
                    <Button className="w-full bg-accent text-accent-foreground hover:opacity-90">
                      Voir
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
          <p className="mt-10 text-sm text-muted-foreground text-center max-w-3xl mx-auto">
            Paiement directement auprès du chauffeur. Montant et conditions
            confirmés par le chauffeur, selon la réglementation applicable.
            Informations générales sur la page{" "}
            <Link href="/tarifs" className="text-accent font-semibold hover:underline">
              Tarifs
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
