// ✅ SERVER COMPONENT - Pas de "use client"
// ISR: Revalidate toutes les 24 heures pour le SEO
export const revalidate = 86400;

import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { getBlogPostBySlug, getAllBlogPosts } from "../../../lib/blog";
import { markdownToHtml } from "../../../lib/markdown";
import Button from "../../components/ui/Button";
import { notFound } from "next/navigation";

// Générer les métadonnées dynamiques pour chaque article
export async function generateMetadata({ params }) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Article non trouvé - Blog Taxi Cannes",
    };
  }

  return {
    title: `${post.title} - Blog Taxi Cannes`,
    description: post.excerpt || post.title,
    keywords: post.keywords?.join(", ") || "",
  };
}

// Générer les chemins statiques pour tous les articles
export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  // Convertir le Markdown en HTML
  const contentHtml = await markdownToHtml(post.content);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-primary/10 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour au blog
          </Link>

          {post.category && (
            <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
              {post.category}
            </span>
          )}

          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>

          {post.excerpt && (
            <p className="text-xl text-muted-foreground mb-8">{post.excerpt}</p>
          )}

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            {post.date && (
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>
                  {new Date(post.date).toLocaleDateString("fr-FR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
            )}
            {post.author && (
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Image principale */}
      {post.image && (
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-6">
            <div className="relative w-full h-96 rounded-lg overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>
      )}

      {/* Contenu de l'article */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <article
            className="prose prose-lg max-w-none blog-article prose-headings:!bg-transparent"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-accent text-accent-foreground">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Besoin d'un transfert à Cannes ?
          </h2>
          <p className="text-lg mb-8 text-accent-foreground/90">
            Réservez votre trajet maintenant et profitez d'un service premium
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reservation">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:opacity-90 px-8 py-6 text-lg rounded-full"
              >
                Réserver maintenant
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10 px-8 py-6 text-lg rounded-full bg-transparent"
              >
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

