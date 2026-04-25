"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: '1px solid var(--line-soft)',
        background: 'rgba(5,9,20,0.8)',
        backdropFilter: 'blur(8px)',
        marginTop: 64,
      }}
    >
      <div className="container-custom pt-12 pb-6">

        {/* Main grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">

          {/* Brand */}
          <div className="col-span-2 space-y-4 md:col-span-1">
            <Link
              href="/"
              className="text-[18px] font-bold transition-colors hover:text-[var(--primary-400)]"
              style={{ letterSpacing: '-0.02em', color: 'var(--text)' }}
            >
              Daniel<span style={{ color: 'var(--primary-400)' }}>.</span>Chaves
            </Link>
            <p
              className="text-sm leading-relaxed max-w-[200px]"
              style={{ color: 'var(--text-muted)' }}
            >
              Delivery Manager &amp; Data Engineer based in Brazil.
            </p>
            <div
              className="flex items-center gap-1.5 font-mono text-xs"
              style={{ color: 'var(--text-meta)' }}
            >
              <MapPin className="h-3 w-3" />
              <span>{siteConfig.location}</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <p className="section-label">Navigate</p>
            <nav className="flex flex-col gap-2">
              {[
                { href: "/", label: "Portfolio" },
                { href: "/resume", label: "Resume" },
                { href: "/services", label: "Services" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm transition-colors duration-[250ms] hover:text-[var(--primary-400)]"
                  style={{ color: 'var(--text-muted)', display: 'block', padding: '4px 0' }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <p className="section-label">Contact</p>
            <div className="flex flex-col gap-2">
              <a
                href={`mailto:${siteConfig.links.email}`}
                className="flex items-center gap-2 text-sm transition-colors duration-[250ms] hover:text-[var(--primary-400)]"
                style={{ color: 'var(--text-muted)', padding: '4px 0' }}
              >
                <Mail className="h-3.5 w-3.5 shrink-0" />
                <span className="truncate">{siteConfig.links.email}</span>
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <p className="section-label">Social</p>
            <div className="flex gap-2.5">
              {[
                { href: siteConfig.links.linkedin, icon: <Linkedin className="h-4 w-4" />, label: "LinkedIn" },
                { href: siteConfig.links.github,   icon: <Github className="h-4 w-4" />,   label: "GitHub" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-[250ms]"
                  style={{
                    background: 'var(--ink-3)',
                    color: 'var(--text-muted)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'var(--primary-500)';
                    (e.currentTarget as HTMLElement).style.color = '#fff';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'var(--ink-3)';
                    (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)';
                  }}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 pt-5 text-center text-xs font-mono"
          style={{
            borderTop: '1px solid var(--line-soft)',
            color: 'var(--text-meta)',
          }}
        >
          © {currentYear} {siteConfig.name}. All rights reserved. · Built with Next.js &amp; Tailwind CSS
        </div>

      </div>
    </footer>
  );
}
