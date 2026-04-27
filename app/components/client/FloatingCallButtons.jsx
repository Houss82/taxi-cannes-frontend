"use client";

import { Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { SITE_PHONE_TEL } from "@/app/lib/contact";
import Button from "@/app/components/ui/Button";

/**
 * Barre d’appel fixe mobile (homepage) — priorité conversion.
 * @param {{ mode?: "afterScroll" | "always" }} props
 */
export default function FloatingCallButtons({ mode = "always" }) {
  const [isVisible, setIsVisible] = useState(mode === "always");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (mode === "always") {
      setIsVisible(true);
      const handleScroll = () => setIsScrolled(window.scrollY > 200);
      handleScroll();
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        setIsVisible(true);
        setIsScrolled(scrollY > 200);
      } else {
        setIsVisible(false);
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mode]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden pointer-events-none">
      <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-white via-white/95 to-transparent pointer-events-none" />

      <div className="relative max-w-lg mx-auto px-3 pb-[max(1rem,env(safe-area-inset-bottom))] pt-1 pointer-events-auto">
        <p className="text-center text-xs font-bold text-gray-900 mb-2 px-2 drop-shadow-sm">
          <span aria-hidden className="mr-1">
            &#128222;
          </span>
          Taxi à Cannes — réponse rapide
        </p>

        <Button
          href={SITE_PHONE_TEL}
          variant="call"
          size="xl"
          className={`w-full rounded-full py-4 shadow-xl shadow-green-900/25 font-bold text-sm sm:text-base transition-transform active:scale-[0.98] ${
            !isScrolled ? "ring-4 ring-green-500/35" : ""
          }`}
          aria-label="Appeler Taxi Cannes maintenant"
        >
          <Phone className="w-6 h-6 shrink-0" aria-hidden />
          <span className="leading-tight text-center">Appeler maintenant</span>
        </Button>
      </div>
    </div>
  );
}
