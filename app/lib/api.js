import { BOOKING_SUSPENDED_MESSAGE } from "./booking";

/**
 * Cessation définitive — aucune transmission de réservation.
 * Les appels sortants vers le backend sont bloqués côté client.
 */
export async function createReservation() {
  throw new Error(BOOKING_SUSPENDED_MESSAGE);
}
