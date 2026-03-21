import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} QR Forge
          </p>
          <nav className="flex flex-wrap items-center justify-center gap-1 text-sm text-muted-foreground">
            <Link href="/" className="rounded-md px-3 py-2 transition-colors hover:text-foreground">
              Home
            </Link>
            <Separator orientation="vertical" className="h-4 hidden sm:block" />
            <Link href="/#generator" className="rounded-md px-3 py-2 transition-colors hover:text-foreground">
              Generator
            </Link>
            <Separator orientation="vertical" className="h-4 hidden sm:block" />
            <Link href="/#faq" className="rounded-md px-3 py-2 transition-colors hover:text-foreground">
              FAQ
            </Link>
            <Separator orientation="vertical" className="h-4 hidden sm:block" />
            <Link href="/blog" className="rounded-md px-3 py-2 transition-colors hover:text-foreground">
              Blog
            </Link>
            <Separator orientation="vertical" className="h-4 hidden sm:block" />
            <Link href="/privacy" className="rounded-md px-3 py-2 transition-colors hover:text-foreground">
              Privacy
            </Link>
            <Separator orientation="vertical" className="h-4 hidden sm:block" />
            <Link href="/terms" className="rounded-md px-3 py-2 transition-colors hover:text-foreground">
              Terms
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
