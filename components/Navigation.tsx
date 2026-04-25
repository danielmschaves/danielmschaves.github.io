"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Linkedin, Github } from "lucide-react";
import { cn } from "@/lib/utils";

const normalizedPath = (p: string) =>
  p.endsWith("/") && p !== "/" ? p.slice(0, -1) : p;

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Portfolio" },
    { href: "/resume", label: "Resume" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/dmschaves/",
      label: "LinkedIn",
      icon: <Linkedin className="h-4 w-4" />,
    },
    {
      href: "https://github.com/danielmschaves",
      label: "GitHub",
      icon: <Github className="h-4 w-4" />,
    },
  ];

  return (
    <nav className="flex items-center gap-2">
      {/* Desktop nav */}
      <div className="hidden items-center gap-0.5 md:flex">
        {navItems.map((item) => {
          const isActive = normalizedPath(pathname) === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all duration-[250ms]",
                isActive
                  ? "bg-[var(--primary-tint)] text-[var(--primary-400)]"
                  : "text-[var(--text-muted)] hover:bg-[var(--primary-tint)] hover:text-[var(--primary-300)]"
              )}
            >
              {item.label}
            </Link>
          );
        })}

        {/* Divider */}
        <div className="mx-2.5 h-6 w-px bg-[var(--line)]" />

        {/* Social icons */}
        <div className="flex items-center gap-1">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="flex p-1.5 text-[var(--text-muted)] transition-colors duration-[250ms] hover:text-[var(--primary-400)]"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile toggle */}
      <button
        className="md:hidden p-2 text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 top-16 w-full border-b border-[var(--line-soft)] bg-[rgba(5,9,20,0.95)] backdrop-blur-[16px] md:hidden"
          >
            <div className="container-custom py-5">
              <div className="flex flex-col gap-1">
                {navItems.map((item) => {
                  const isActive = normalizedPath(pathname) === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "rounded-full px-4 py-3 text-sm font-medium transition-all duration-[250ms]",
                        isActive
                          ? "bg-[var(--primary-tint)] text-[var(--primary-400)]"
                          : "text-[var(--text-muted)] hover:bg-[var(--primary-tint)] hover:text-[var(--primary-300)]"
                      )}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                })}

                <div className="mt-4 flex items-center gap-4 border-t border-[var(--line-soft)] pt-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="flex items-center gap-2 text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--primary-400)]"
                    >
                      {link.icon}
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
