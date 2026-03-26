"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { Button } from "@heroui/react";
import { useState, useTransition } from "react";
import type { Locale } from "@/lib/i18n";

type HeaderNavItem = {
  label: string;
  href: string;
};

type SiteHeaderProps = {
  locale: Locale;
  profileName: string;
  navItems: HeaderNavItem[];
  contactLabel: string;
  languageLabel: string;
  englishShort: string;
  thaiShort: string;
};

export function SiteHeader({ locale, profileName, navItems, contactLabel, languageLabel, englishShort, thaiShort }: SiteHeaderProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [, startTransition] = useTransition();

  const setLocale = (nextLocale: Locale) => {
    if (nextLocale === locale) {
      return;
    }

    document.cookie = `locale=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        <Link href="/" className="max-w-[45vw] truncate font-headline text-base font-bold tracking-tight text-indigo-200 sm:text-xl">
          {profileName}
        </Link>

        <div className="hidden items-center gap-8 lg:flex lg:ml-16">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : item.href.includes("#")
                  ? pathname === "/skills"
                  : pathname.startsWith(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                className={[
                  "pb-1 text-sm font-medium tracking-wide transition-colors",
                  active ? "border-b border-indigo-300 text-indigo-100" : "text-slate-300 hover:text-indigo-100",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="ml-auto flex items-center gap-2">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/60 p-1">
          <span className="hidden px-2 text-[10px] uppercase tracking-[0.15em] text-slate-400 md:inline">{languageLabel}</span>
          <button
            type="button"
            onClick={() => setLocale("en")}
            className={[
              "rounded-full px-2.5 py-1 text-xs font-semibold transition",
              locale === "en" ? "bg-indigo-300 text-indigo-950" : "text-slate-300 hover:bg-white/5",
            ].join(" ")}
          >
            {englishShort}
          </button>
          <button
            type="button"
            onClick={() => setLocale("th")}
            className={[
              "rounded-full px-2.5 py-1 text-xs font-semibold transition",
              locale === "th" ? "bg-indigo-300 text-indigo-950" : "text-slate-300 hover:bg-white/5",
            ].join(" ")}
          >
            {thaiShort}
          </button>
          </div>

          <Link
            href="/contact"
            className="hidden rounded-full bg-indigo-200 px-5 py-2 text-sm font-semibold text-indigo-950 transition hover:bg-indigo-100 sm:inline-flex"
          >
            {contactLabel}
          </Link>

          <Button
            type="button"
            onPress={() => setIsMenuOpen((prev) => !prev)}
            size="sm"
            className="bg-slate-900/70 text-slate-100 lg:hidden"
          >
            MENU
          </Button>
        </div>
      </nav>

      {isMenuOpen ? (
        <div className="border-t border-white/10 px-4 py-3 lg:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg border border-white/10 px-3 py-2 text-sm text-slate-200 hover:bg-white/5"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-1 rounded-lg bg-indigo-200 px-3 py-2 text-center text-sm font-semibold text-indigo-950"
            >
              {contactLabel}
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
