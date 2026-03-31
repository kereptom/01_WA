import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { posts } from "@/data/posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} — Wanderlust`,
    description: post.excerpt,
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/blog"
        className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors mb-8 inline-block"
      >
        &larr; Back to stories
      </Link>

      <div className="aspect-[2/1] rounded-2xl bg-[var(--border)] overflow-hidden mb-8 relative">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
          priority
        />
      </div>

      <p className="text-sm text-[var(--accent)] mb-2">{post.location}</p>
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-[var(--muted)] mb-8">{post.date}</p>

      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-[var(--muted)] leading-relaxed mb-8">
          {post.excerpt}
        </p>
        <div className="whitespace-pre-line text-[var(--foreground)] leading-relaxed">
          {post.content}
        </div>
      </div>
    </article>
  );
}
