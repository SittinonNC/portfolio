"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, profile } from "@/components/portfolio/data";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="font-headline text-xl font-bold tracking-tight text-indigo-200">
          {profile.name}
        </Link>

        <div className="hidden items-center gap-7 md:flex">
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

        <Link
          href="/contact"
          className="rounded-full bg-indigo-200 px-5 py-2 text-sm font-semibold text-indigo-950 transition hover:bg-indigo-100"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
