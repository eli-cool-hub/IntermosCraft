"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import { useState } from "react";

const navItems = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/products", key: "products" },
  { href: "/custom", key: "custom" },
  { href: "/contact", key: "contact" },
] as const;

export default function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-darker/80 backdrop-blur-xl border-b border-brand-border/50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center w-full h-20 gap-2 sm:gap-3">
          <Link href="/" className="flex items-center gap-3 shrink min-w-0">
            <img
              src="/logos/logo-full.png"
              alt="IntermosCraft"
              className="h-8 sm:h-9 md:h-10 w-auto max-w-[60vw] sm:max-w-none"
            />
          </Link>

          <div className="ml-auto flex items-center gap-2 sm:gap-3 md:gap-6 lg:gap-8">
            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    className={`text-sm tracking-wide uppercase transition-colors duration-200 ${
                      isActive
                        ? "text-brand-copper"
                        : "text-brand-muted hover:text-brand-text"
                    }`}
                  >
                    {t(item.key)}
                  </Link>
                );
              })}
            </div>

            {/* Language switcher — always visible (mobile, tablet, desktop) */}
            <LanguageSwitcher />

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-brand-text p-2 -mr-2"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-brand-darker/95 backdrop-blur-xl border-b border-brand-border/50">
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block text-base tracking-wide uppercase transition-colors ${
                    isActive
                      ? "text-brand-copper"
                      : "text-brand-muted hover:text-brand-text"
                  }`}
                >
                  {t(item.key)}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
