import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Wanderlust — Travel Blog",
  description: "Stories from around the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} font-sans antialiased`}>
        <header className="border-b border-[var(--border)]">
          <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
            <Link href="/" className="text-xl font-semibold tracking-tight">
              Wanderlust
            </Link>
            <div className="flex gap-8 text-sm text-[var(--muted)]">
              <Link href="/" className="hover:text-[var(--foreground)] transition-colors">
                Home
              </Link>
              <Link href="/blog" className="hover:text-[var(--foreground)] transition-colors">
                Stories
              </Link>
              <Link href="/about" className="hover:text-[var(--foreground)] transition-colors">
                About
              </Link>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="border-t border-[var(--border)] mt-24">
          <div className="mx-auto max-w-5xl px-6 py-10 text-sm text-[var(--muted)]">
            <p>&copy; {new Date().getFullYear()} Wanderlust. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
