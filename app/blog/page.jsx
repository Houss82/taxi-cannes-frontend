// ✅ SERVER COMPONENT - Pas de "use client"
// ISR: Revalidate toutes les 24 heures pour le SEO
export const revalidate = 86400;

import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, User } from "lucide-react";
import { getAllBlogPosts } from "../../lib/blog";
import Card from "../components/ui/Card";

export const metadata = {
  title: "Blog - Taxi Cannes",
  description:
    "Conseils, guides et actualités sur les transports à Cannes et la Côte d'Azur. Découvrez nos articles sur les transferts aéroport, les excursions et les meilleures pratiques.",
  keywords:
    "blog taxi cannes, conseils transport cannes, guides côte d'azur, actualités taxi cannes",
};

export default async function Blog() {
  const posts = getAllBlogPosts();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-linear-to-b from-primary/10 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Blog Taxi Cannes
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conseils, guides et actualités pour vos déplacements sur la Côte
            d'Azur
          </p>
        </div>
      </section>

      {/* Articles List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-lg text-muted-foreground mb-4">
                Aucun article pour le moment.
              </p>
              <p className="text-sm text-muted-foreground">
                Les articles seront affichés ici une fois créés dans{" "}
                <code className="bg-secondary px-2 py-1 rounded">
                  content/blog/
                </code>
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                    {post.image && (
                      <div className="relative w-full h-48">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="p-6 flex-1 flex flex-col">
                      {post.category && (
                        <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full mb-3 w-fit">
                          {post.category}
                        </span>
                      )}
                      <h2 className="text-xl font-bold mb-2 line-clamp-2">
                        {post.title}
                      </h2>
                      {post.excerpt && (
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">
                          {post.excerpt}
                        </p>
                      )}
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mt-auto pt-4 border-t border-border">
                        {post.date && (
                          <div className="flex items-center gap-1">
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
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

