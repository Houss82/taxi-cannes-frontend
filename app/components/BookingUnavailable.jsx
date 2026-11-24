import Link from "next/link";
import { BOOKING_SUSPENDED_MESSAGE } from "@/app/lib/booking";

/**
 * Message d’indisponibilité des réservations (SSR + client).
 */
export default function BookingUnavailable({ className = "" }) {
  return (
    <div
      className={`rounded-xl border border-amber-300 bg-amber-50 p-6 text-amber-950 ${className}`}
      role="status"
    >
      <p className="font-bold text-lg mb-2">Réservation temporairement indisponible</p>
      <p className="text-sm leading-relaxed mb-4">{BOOKING_SUSPENDED_MESSAGE}</p>
      <p className="text-sm text-amber-900/80">
        Vous pouvez consulter les pages d’information du site (
        <Link href="/tarifs" className="underline font-medium">
          tarifs / réglementation
        </Link>
        , guides blog) ou les{" "}
        <Link href="/mentions-legales" className="underline font-medium">
          mentions légales
        </Link>
        .
      </p>
    </div>
  );
}
