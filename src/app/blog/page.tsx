import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Blog | QR Forge",
  description: "Tips, guides, and best practices for creating and using QR codes effectively in business and personal projects.",
  alternates: { canonical: "/blog" },
};

const posts = [
  {
    slug: "qr-codes-for-business",
    title: "5 Creative Ways to Use QR Codes for Your Business in 2026",
    excerpt: "Discover five practical ways businesses are using QR codes — from contactless menus to social media funnels. Create yours free with QR Forge.",
    date: "2026-03-10",
  },
  {
    slug: "qr-code-best-practices",
    title: "QR Code Best Practices: Size, Contrast, and Testing Guide",
    excerpt: "Learn the essential best practices for creating QR codes that reliably scan in real-world conditions — covering minimum size, contrast, error correction, and testing.",
    date: "2026-03-08",
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="animate-fade-in px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Blog</h1>
          <p className="mt-2 text-muted-foreground">Tips and guides on QR codes for business and personal use.</p>
          <div className="mt-10 space-y-6">
            {posts.map((post) => (
              <Card key={post.slug} className="transition-shadow hover:shadow-md">
                <CardContent className="p-6">
                  <time className="text-xs font-medium text-muted-foreground">{post.date}</time>
                  <h2 className="mt-2 text-xl font-bold text-foreground">
                    <Link href={`/blog/${post.slug}`} className="hover:underline">{post.title}</Link>
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="mt-3 inline-block text-sm font-medium text-brand hover:underline">
                    Read more &rarr;
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
