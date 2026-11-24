export const metadata = {
  title: "Cessation d'activité — cannestaxi.fr",
  description:
    "Le site cannestaxi.fr a définitivement cessé son activité de réservation de taxis.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CessationPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-16">
      <div className="max-w-xl w-full text-center">
        <h1
          className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 mb-6"
          style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
        >
          Cessation d&apos;activité
        </h1>
        <p
          className="text-base sm:text-lg leading-relaxed text-neutral-700 mb-4"
          style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
        >
          Le site cannestaxi.fr a définitivement cessé son activité de
          réservation de taxis.
        </p>
        <p
          className="text-base sm:text-lg leading-relaxed text-neutral-600"
          style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
        >
          Merci pour votre compréhension.
        </p>
      </div>
    </main>
  );
}
