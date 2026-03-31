import Link from "next/link";
import Image from "next/image";
import { posts } from "@/data/posts";

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">All Stories</h1>
      <p className="text-[var(--muted)] mb-12 max-w-lg">
        Every journey has a story. Here are mine — replace them with yours.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group"
          >
            <div className="aspect-[3/2] rounded-xl bg-[var(--border)] overflow-hidden mb-4 relative">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <p className="text-sm text-[var(--accent)] mb-1">{post.location}</p>
            <h2 className="text-xl font-semibold mb-2 group-hover:text-[var(--accent)] transition-colors">
              {post.title}
            </h2>
            <p className="text-sm text-[var(--muted)] line-clamp-2">
              {post.excerpt}
            </p>
            <p className="text-xs text-[var(--muted)] mt-3">{post.date}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
