import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} QR Forge
          </p>
          <nav className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="/" className="transition-colors hover:text-foreground">
              Home
            </Link>
            <Separator orientation="vertical" className="h-4" />
            <Link href="/#generator" className="transition-colors hover:text-foreground">
              Generator
            </Link>
            <Separator orientation="vertical" className="h-4" />
            <Link href="/#faq" className="transition-colors hover:text-foreground">
              FAQ
            </Link>
            <Separator orientation="vertical" className="h-4" />
            <Link href="/blog" className="transition-colors hover:text-foreground">
              Blog
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
