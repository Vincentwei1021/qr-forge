import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="text-xl font-bold text-indigo-500">
          QR Forge
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/#generator"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-indigo-500"
          >
            Generator
          </Link>
          <Link
            href="/#faq"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-indigo-500"
          >
            FAQ
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-indigo-500"
          >
            Blog
          </Link>
        </div>
      </nav>
    </header>
  );
}
