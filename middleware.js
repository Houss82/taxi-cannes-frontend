import { NextResponse } from "next/server";

/**
 * Cessation d'activité — cannestaxi.fr
 * Accueil (/) : 200 via page Next.
 * Toute autre URL publique : HTTP 410 Gone (contenu source préservé, non servi).
 * Pas de redirection vers d'autres sites du réseau.
 */
export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Assets Next et fichiers techniques nécessaires au fonctionnement
  if (
    pathname.startsWith("/_next/") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml"
  ) {
    return NextResponse.next();
  }

  // Page d'accueil de cessation uniquement
  if (pathname === "/") {
    return NextResponse.next();
  }

  const html = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="robots" content="noindex, nofollow" />
  <title>Page indisponible — Cessation d'activité</title>
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: Georgia, "Times New Roman", serif;
      background: #fff;
      color: #111;
      padding: 2rem;
      text-align: center;
    }
    h1 { font-size: 1.5rem; font-weight: 600; margin: 0 0 1rem; }
    p { margin: 0; font-size: 1rem; line-height: 1.6; color: #333; max-width: 36rem; }
  </style>
</head>
<body>
  <main>
    <h1>Page indisponible</h1>
    <p>Cette adresse n'est plus disponible. Le site cannestaxi.fr a définitivement cessé son activité.</p>
  </main>
</body>
</html>`;

  return new NextResponse(html, {
    status: 410,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "X-Robots-Tag": "noindex, nofollow",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
