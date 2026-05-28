"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FloraLogo } from "@/components/ui/FloraLogo";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/#que-es", label: "Qué es Flora" },
  { href: "/#membresias", label: "Membresías" },
  { href: "/#como-funciona", label: "Cómo funciona" },
  { href: "/blog", label: "Blog" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-green-dark/95 backdrop-blur-md shadow-lg shadow-black/10"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <FloraLogo className="w-7 h-7" />
          <span className="font-garamond text-xl font-semibold text-white tracking-wide">
            Flora ONG
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-jakarta text-sm text-white/70 hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/#contacto"
            className="font-jakarta text-sm font-semibold text-green-dark bg-green-accent hover:opacity-90 transition-opacity px-5 py-2 rounded-full"
          >
            Consultá gratis
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-green-dark border-t border-white/10 px-5 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-jakarta text-base text-white/80 hover:text-white py-1"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/#contacto"
            className="mt-2 text-center font-jakarta text-sm font-semibold text-green-dark bg-green-accent rounded-full py-2.5"
            onClick={() => setOpen(false)}
          >
            Consultá gratis
          </Link>
        </div>
      )}
    </header>
  );
}
