// src/components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [atTop, setAtTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const path = usePathname();

  // Track scroll just to close mobile when scrolled (optional)
  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY < 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className="
          fixed inset-x-0 top-0 z-50 h-16
          bg-transparent
        "
      >
        <div className="flex items-center justify-between h-full px-6 md:px-8">
          {/* Logo + Title */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Project X Construction LLC"
              width={32}
              height={32}
              className="object-contain"
              priority
            />
            <span
              className="text-white text-lg font-semibold"
              style={{ textShadow: "0 1px 4px rgba(0,0,0,0.6)" }}
            >
              Project X Construction LLC
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex space-x-8">
            {links.map(({ label, href }) => {
              const active = path === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`
                      relative inline-block px-1 py-0.5
                      ${active ? "text-safety-yellow font-bold" : "text-white"}
                      hover:text-safety-yellow transition
                      `}
                    style={{ textShadow: "0 1px 3px rgba(0,0,0,0.6)" }}
                  >
                    {label}
                    {/* underline on hover */}
                    <span
                      className="
                        absolute left-1/2 bottom-0 block h-[2px] w-0
                        bg-safety-yellow transition-all duration-300
                        group-hover:w-full
                      "
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-between h-5 w-6"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block h-[2px] w-full bg-white"
              />
            ))}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="fixed inset-0 top-16 bg-black/90 z-40 flex flex-col items-center py-8 space-y-6">
          {links.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-white text-xl font-medium hover:text-safety-yellow transition"
              style={{ textShadow: "0 1px 3px rgba(0,0,0,0.6)" }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
