"use client";

import Link from "next/link";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-foreground transition-colors hover:text-primary"
          >
            Daniel Chaves
          </Link>
          <Navigation />
        </div>
      </div>
    </header>
  );
}

