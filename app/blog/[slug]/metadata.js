import { getPostBySlug } from "@/lib/blog";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Article non trouvé | Taxi Cannes",
      description: "L'article que vous recherchez n'existe pas.",
      robots: {
        index: false,
        follow: false,
      },
      alternates: {
        canonical: "https://www.cannestaxi.fr/blog",
      },
    };
  }

  // Définir l'URL canonique
  const canonicalUrl = `https://www.cannestaxi.fr/blog/${post.slug}`;
  const imageUrl = post.image.startsWith("http")
    ? post.image
    : `https://www.cannestaxi.fr${post.image}`;

  return {
    title: `${post.title} | Taxi Cannes`,
    description: post.excerpt || `Découvrez ${post.title.toLowerCase()}.`,
    keywords: Array.isArray(post.keywords)
      ? post.keywords.join(", ")
      : post.keywords || "",
    authors: [{ name: post.author || "Taxi Cannes" }],
    openGraph: {
      type: "article",
      url: canonicalUrl,
      title: post.title,
      description: post.excerpt,
      siteName: "Taxi Cannes",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: "fr_FR",
      publishedTime: post.date,
      authors: [post.author || "Taxi Cannes"],
      section: post.category,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [imageUrl],
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "fr-FR": canonicalUrl,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

