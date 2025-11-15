"use client";

import Link from "next/link";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-dark-700 bg-dark-900/95 backdrop-blur-sm">
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold text-white transition-colors hover:text-primary-400"
          >
            Daniel Chaves
          </Link>
          <Navigation />
        </div>
      </div>
    </header>
  );
}

