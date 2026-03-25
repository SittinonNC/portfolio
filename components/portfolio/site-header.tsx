"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTransition } from "react";
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
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="font-headline text-xl font-bold tracking-tight text-indigo-200">
          {profileName}
        </Link>

        <div className="hidden items-center gap-6 md:flex">
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
          className="rounded-full bg-indigo-200 px-3 py-2 text-xs font-semibold text-indigo-950 transition hover:bg-indigo-100 md:px-5 md:text-sm"
        >
          {contactLabel}
        </Link>
      </nav>
    </header>
  );
}
