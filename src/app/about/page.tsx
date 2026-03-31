import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">About</h1>

      <div className="aspect-[3/1] rounded-2xl bg-[var(--border)] overflow-hidden mb-10 relative">
        <Image
          src="/images/about-hero.jpg"
          alt="Travel adventure"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
          priority
        />
      </div>

      <div className="space-y-6 text-[var(--muted)] leading-relaxed text-lg">
        <p>
          Hi, I&apos;m [Your Name]. Welcome to my travel blog.
        </p>
        <p>
          Replace this text with your own story. Tell visitors who you are,
          why you travel, and what inspires you to explore the world.
        </p>
        <p>
          This blog is a place to share my adventures, travel tips, and
          photography. Whether it&apos;s hiking through Patagonia or getting lost
          in a Moroccan medina, every trip teaches me something new.
        </p>
      </div>

      <div className="mt-16 pt-10 border-t border-[var(--border)]">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-[var(--muted)]">
          Have a question or want to collaborate? Reach out at{" "}
          <a
            href="mailto:hello@example.com"
            className="text-[var(--accent)] hover:underline"
          >
            hello@example.com
          </a>
        </p>
      </div>
    </div>
  );
}
