import { Smartphone } from "lucide-react";
import { Link } from "wouter";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" data-testid="link-home">
            <div className="flex items-center gap-2 hover-elevate cursor-pointer rounded-md px-3 py-2">
              <Smartphone className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold">Budget Bundles</span>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" data-testid="link-nav-home">
              <span className="text-sm font-medium hover-elevate cursor-pointer rounded-md px-3 py-2">
                Home
              </span>
            </Link>
            <Link href="/about" data-testid="link-nav-about">
              <span className="text-sm font-medium hover-elevate cursor-pointer rounded-md px-3 py-2">
                About
              </span>
            </Link>
            <Link href="/contact" data-testid="link-nav-contact">
              <span className="text-sm font-medium hover-elevate cursor-pointer rounded-md px-3 py-2">
                Contact
              </span>
            </Link>
          </nav>
        </div>
        
        <nav className="md:hidden overflow-x-auto pb-3 -mx-4 px-4 scrollbar-hide">
          <div className="flex gap-2 min-w-max">
            <Link href="/" data-testid="link-nav-mobile-home">
              <span className="text-sm font-medium hover-elevate cursor-pointer rounded-md px-3 py-2 whitespace-nowrap inline-block">
                Home
              </span>
            </Link>
            <Link href="/about" data-testid="link-nav-mobile-about">
              <span className="text-sm font-medium hover-elevate cursor-pointer rounded-md px-3 py-2 whitespace-nowrap inline-block">
                About
              </span>
            </Link>
            <Link href="/contact" data-testid="link-nav-mobile-contact">
              <span className="text-sm font-medium hover-elevate cursor-pointer rounded-md px-3 py-2 whitespace-nowrap inline-block">
                Contact
              </span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
