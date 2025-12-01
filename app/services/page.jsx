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
    "Services de taxi premium à Cannes : transferts aéroport Nice, trajets vers Monaco, Saint-Tropez, Antibes. Chauffeur privé disponible 24/7.",
  keywords:
    "services taxi cannes, transfert aéroport nice, taxi monaco, taxi saint-tropez, chauffeur privé cannes",
};

export default function Services() {
  const services = [
    {
      title: "Transfert Aéroport Nice – Cannes",
      desc: "Service rapide et fiable vers/depuis l'aéroport Nice-Côte d'Azur",
      image: "/aeroport-nice-cannes.jpg",
      details: ["Prix fixe", "Chauffeur à l'accueil", "24h/24 disponible"],
    },
    {
      title: "Trajets Palaces",
      desc: "Service VIP pour les hôtels Majestic, Martinez et Carlton",
      image: "/palace-cannes.jpg",
      details: ["Discrétion garantie", "Service blanc", "Ponctualité premium"],
    },
    {
      title: "Cannes → Monaco",
      desc: "Transfert vers la Principauté de Monaco",
      image: "/yacht-monaco.jpg",
      details: ["Confort assuré", "Trajets réguliers", "WiFi à bord"],
    },
    {
      title: "Cannes → Saint-Tropez",
      desc: "Découvrez la Côte d'Azur en style",
      image: "/saint-tropez-cannes.jpg",
      details: ["Trajets panoramiques", "Durée: 1h30", "Forfait groupes"],
    },
    {
      title: "Cannes → Antibes",
      desc: "Explorez la Côte d'Azur côté ouest",
      image: "/antibes-cannes.jpg",
      details: [
        "Express disponible",
        "Trajets touristiques",
        "Guides recommandés",
      ],
    },
    {
      title: "Chauffeur Privé",
      desc: "Location avec chauffeur pour demi-journée ou journée complète",
      image: "/chauffeur-prive.jpg",
      details: [
        "Itinéraires flexibles",
        "Accueil personnalisé",
        "Services adaptés",
      ],
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
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <Card
                key={i}
                className="overflow-hidden hover:shadow-xl transition-shadow"
              >
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {service.details.map((detail, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm">
                        <ChevronRight className="w-4 h-4 text-accent" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <Link href="/reservation">
                    <Button className="w-full bg-accent text-accent-foreground hover:opacity-90">
                      Réserver ce service
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
