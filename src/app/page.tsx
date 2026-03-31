import Link from "next/link";
import { posts } from "@/data/posts";

export default function Home() {
  const featured = posts[0];
  const recent = posts.slice(1, 4);

  return (
    <div className="mx-auto max-w-5xl px-6">
      {/* Hero */}
      <section className="py-20 text-center">
        <p className="text-sm uppercase tracking-widest text-[var(--accent)] mb-4">
          Travel Blog
        </p>
        <h1 className="text-5xl font-bold leading-tight mb-6">
          Stories from around<br />the world
        </h1>
        <p className="text-lg text-[var(--muted)] max-w-xl mx-auto">
          A collection of travel stories, tips, and photography from my
          adventures across the globe.
        </p>
      </section>

      {/* Featured Post */}
      <section className="mb-20">
        <Link href={`/blog/${featured.slug}`} className="group block">
          <div className="aspect-[2/1] rounded-2xl bg-[var(--border)] overflow-hidden mb-6">
            <div className="w-full h-full bg-gradient-to-br from-amber-100 to-orange-200 group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="max-w-2xl">
            <p className="text-sm text-[var(--accent)] mb-2">{featured.location}</p>
            <h2 className="text-3xl font-semibold mb-3 group-hover:text-[var(--accent)] transition-colors">
              {featured.title}
            </h2>
            <p className="text-[var(--muted)] leading-relaxed">{featured.excerpt}</p>
            <p className="text-sm text-[var(--muted)] mt-4">{featured.date}</p>
          </div>
        </Link>
      </section>

      {/* Recent Posts */}
      <section>
        <h2 className="text-2xl font-semibold mb-8">Recent Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recent.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group"
            >
              <div className="aspect-[4/3] rounded-xl bg-[var(--border)] overflow-hidden mb-4">
                <div
                  className={`w-full h-full ${post.gradient} group-hover:scale-105 transition-transform duration-500`}
                />
              </div>
              <p className="text-sm text-[var(--accent)] mb-1">{post.location}</p>
              <h3 className="font-semibold mb-2 group-hover:text-[var(--accent)] transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-[var(--muted)] line-clamp-2">
                {post.excerpt}
              </p>
              <p className="text-xs text-[var(--muted)] mt-3">{post.date}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
