import Link from "next/link";

type SocialLink = {
  label: string;
  href: string;
};

type SiteFooterProps = {
  profileName: string;
  socialLinks: SocialLink[];
  copyright: string;
};

export function SiteFooter({ profileName, socialLinks, copyright }: SiteFooterProps) {
  return (
    <footer className="border-t border-white/5 bg-slate-950/70 py-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-5 px-6 text-sm text-slate-400 md:flex-row lg:px-8">
        <Link href="/" className="font-headline text-base font-semibold tracking-tight text-indigo-200">
          {profileName}
        </Link>

        <p className="text-center">{copyright}</p>

        <div className="flex items-center gap-4">
          {socialLinks.map((item) => (
            <Link key={item.label} href={item.href} className="hover:text-indigo-100" target="_blank" rel="noreferrer">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
