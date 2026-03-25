import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/portfolio/contact-form";
import { formatMessage, getI18n } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact form and social channels for collaborations.",
};

export default async function ContactPage() {
  const { dict } = await getI18n();
  const profileMeta = [dict.profile.email, dict.profile.phone].filter(Boolean).join(" · ");

  return (
    <main className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-6 pb-20 pt-14 lg:grid-cols-12 lg:px-8">
      <header className="lg:col-span-12">
        <h1 className="font-headline text-5xl font-bold tracking-tight text-slate-100 md:text-7xl">
          {formatMessage(dict.contactPage.title, { highlight: dict.contactPage.titleHighlight }).split(dict.contactPage.titleHighlight).map((part, index, arr) => (
            <span key={`${part}-${index}`}>
              {part}
              {index < arr.length - 1 ? <span className="text-indigo-300">{dict.contactPage.titleHighlight}</span> : null}
            </span>
          ))}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">{dict.contactPage.description}</p>
        <p className="mt-3 text-slate-400">{profileMeta}</p>
      </header>

      <section className="space-y-5 lg:col-span-5">
        <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#131e35]">
          <div className="relative aspect-square w-full">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCr6qyOjk79nfkAYEI5_-0LOkqwQcXgD827KacEQfGVY1JmMP7mnCg83BlfUUdGdU_pUrGAUF-VuCcboNGciLmHl1dmr4uhGJ-RvYvjjmnLgXguNc-IXR3XizX3A6pyB1FPDaeGhLYoIoXo7QBVf2Fh0u0Vg-quneK2S0hgXZZsHZMKiVi3L3iKXFNh1tUqsDJyyb4nUx8ObWdRnKTXqzF16ZJ_k7hZi5VZxcEk5WDUsJyilEdi7C6hnGD1mzCa66az58R6_qnOY-fk"
              alt="Professional portrait"
              fill
              sizes="(max-width: 1024px) 100vw, 38vw"
              className="object-cover grayscale"
              priority
            />
          </div>
          <div className="absolute bottom-5 left-5 rounded-full border border-indigo-200/30 bg-indigo-200/20 px-4 py-1 text-xs uppercase tracking-[0.2em] text-indigo-100">
            {dict.contactPage.availability}
          </div>
        </article>

        <article className="rounded-2xl border border-white/10 bg-[#131e35] p-6">
          <h2 className="mb-4 font-headline text-xl font-semibold text-slate-100">{dict.contactPage.externalNodes}</h2>
          <ul className="space-y-3">
            {dict.profile.socialLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-xl bg-slate-950/60 px-4 py-3 text-slate-200 transition hover:bg-slate-950"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-5 rounded-xl bg-slate-950/50 p-4 text-sm text-slate-300">
            <p className="font-semibold text-slate-100">{dict.contactPage.githubLabel}</p>
            <p className="mt-1 break-all">github.com/SittinonNC</p>
          </div>
        </article>
      </section>

      <section className="rounded-2xl border border-white/10 bg-[#1a2440] p-6 md:p-8 lg:col-span-7">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-indigo-300">{dict.contactPage.inquiryEyebrow}</p>
          <h2 className="mt-2 font-headline text-3xl font-semibold text-slate-100">{dict.contactPage.inquiryTitle}</h2>
        </div>
        <ContactForm emailTo={dict.profile.email} labels={dict.contactForm} />
      </section>
    </main>
  );
}
