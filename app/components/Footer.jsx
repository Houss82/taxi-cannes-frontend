// ✅ SERVER COMPONENT - Pas de "use client"

import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">
                  T
                </span>
              </div>
              <span className="font-bold text-lg">Taxi Cannes</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Service de taxi premium à Cannes depuis 2015. Qualité, confort et
              ponctualité garantis.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link
                  href="/services"
                  className="hover:text-accent transition-colors"
                >
                  Transfert Aéroport
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-accent transition-colors"
                >
                  Chauffeur Privé
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-accent transition-colors"
                >
                  Longue Distance
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-accent transition-colors"
                >
                  Événements
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+33 6 25 61 73 11</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>taxicannes2025@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Cannes, Côte d'Azur</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>24/7 disponible</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold mb-4">Légal</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link
                  href="/conditions-utilisation"
                  className="hover:text-accent transition-colors"
                >
                  Conditions d'utilisation
                </Link>
              </li>
              <li>
                <Link
                  href="/politique-confidentialite"
                  className="hover:text-accent transition-colors"
                >
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link
                  href="/mentions-legales"
                  className="hover:text-accent transition-colors"
                >
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>&copy; 2025 Taxi Cannes. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-accent transition-colors">
              WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
