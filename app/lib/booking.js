/**
 * Cessation définitive — réservations définitivement fermées.
 * Ne pas réactiver sans décision explicite de reprise d'activité.
 */
export function isBookingEnabled() {
  return false;
}

export const BOOKING_SUSPENDED_MESSAGE =
  "Le site cannestaxi.fr a définitivement cessé son activité. Aucune réservation n’est acceptée.";
