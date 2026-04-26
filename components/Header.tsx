"use client";

import Link from "next/link";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full glass border-b border-[var(--line-soft)]">
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-[18px] font-bold tracking-tight text-[var(--text)] transition-colors hover:text-[var(--primary-400)]"
            style={{ letterSpacing: '-0.02em' }}
          >
            Daniel<span style={{ color: 'var(--primary-400)' }}>.</span>Chaves
          </Link>
          <Navigation />
        </div>
      </div>
    </header>
  );
}
