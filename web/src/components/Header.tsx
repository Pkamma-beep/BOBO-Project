"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/booking", label: "Booking" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [renderedPathname, setRenderedPathname] = useState(pathname);

  if (pathname !== renderedPathname) {
    setRenderedPathname(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-[var(--editorial-easing)] px-6 md:px-12 ${
        scrolled ? "nav-scrolled py-4" : "pt-8 pb-4"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        <div className="flex items-center gap-3 md:gap-4">
          <div className="h-px bg-[#1c1c1c] w-4 md:w-6" />
          <Link
            href="/"
            className="font-serif text-[18px] md:text-[20px] leading-none tracking-tight"
          >
            BOBO Dental
          </Link>
          <div className="hidden md:block h-px bg-[#1c1c1c] w-8" />
        </div>

        <div className="hidden md:flex items-center gap-12">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-mono text-[10px] uppercase tracking-[0.3em] transition-colors ${
                  active
                    ? "text-[#3d7068] border-b border-[#3d7068]"
                    : "hover:text-[#3d7068]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
          className="md:hidden w-10 h-10 flex items-center justify-center border border-[#e5e4de] rounded-[2px] bg-[#f7f6f2] active:bg-white transition-colors"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        {menuOpen && (
          <div className="md:hidden absolute right-0 top-full mt-3 w-48 bg-[#f7f6f2] border border-[#e5e4de] shadow-md flex flex-col">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-mono text-[11px] uppercase tracking-[0.3em] px-6 py-4 border-b border-[#e5e4de] last:border-b-0 transition-colors ${
                    active ? "text-[#3d7068] bg-white" : "hover:bg-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}
