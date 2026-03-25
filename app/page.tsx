import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Chip } from "@heroui/react";
import { formatMessage, getI18n } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Home",
};

export default async function HomePage() {
  const { dict } = await getI18n();
  const highlightedProjects = dict.projectsPage.projects.slice(0, 2);
  const profileMeta = [dict.profile.email, dict.profile.phone].filter(Boolean).join(" · ");

  return (
    <main>
      <section className="mx-auto grid min-h-[calc(100vh-5rem)] w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-12 lg:px-8">
        <div className="space-y-7 lg:col-span-7 motion-rise-in">
          <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-[#1a2440]/80 px-3 py-1">
            <span className="h-2 w-2 animate-pulse rounded-full bg-indigo-300" />
            <span className="text-xs uppercase tracking-[0.2em] text-indigo-200">{dict.home.availability}</span>
          </div>

          <h1 className="font-headline text-5xl font-bold leading-[0.95] tracking-tight text-slate-100 md:text-7xl">
            {formatMessage(dict.home.headline, { name: dict.profile.name, role: dict.profile.role }).split(dict.profile.name).map((part, index, arr) => (
              <span key={`${part}-${index}`}>
                {part}
                {index < arr.length - 1 ? <span className="text-indigo-300">{dict.profile.name}</span> : null}
              </span>
            ))}
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">{dict.profile.summary}</p>

          <p className="text-sm text-slate-400">{profileMeta}</p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-full bg-indigo-200 px-5 py-2.5 font-headline font-semibold text-indigo-950 transition hover:bg-indigo-100"
            >
              {dict.home.viewProjects}
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/20 px-5 py-2.5 font-headline font-semibold text-indigo-100 transition hover:bg-white/5"
            >
              {dict.home.getInTouch}
            </Link>
          </div>
        </div>

        <div className="relative lg:col-span-5 motion-rise-in [animation-delay:120ms]">
          <div className="relative aspect-4/5 overflow-hidden rounded-2xl border border-white/10 bg-[#0d162b]">
            <Image
              src="/certificates/images/profile.png"
              alt="Profile visual"
              fill
              className="object-cover "
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
            <div className="absolute inset-x-5 bottom-5 rounded-xl border border-white/10 bg-slate-950/65 p-4 backdrop-blur-lg">
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">{dict.home.currentFocus}</p>
              <div className="mt-3 space-y-2">
                <div className="h-1 w-full rounded-full bg-indigo-300/20" />
                <div className="h-1 w-3/4 rounded-full bg-indigo-300/35" />
                <div className="h-1 w-1/2 rounded-full bg-indigo-300/55" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#101a30]/90 py-20">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-indigo-300">{dict.home.stackEyebrow}</p>
              <h2 className="mt-3 font-headline text-4xl font-semibold tracking-tight text-slate-100">{dict.home.stackHeading}</h2>
            </div>
            <p className="max-w-md text-slate-300">{dict.home.stackDescription}</p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <article className="rounded-2xl border border-white/10 bg-[#1a2440] p-7 md:col-span-2">
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-slate-400">{dict.home.coreSkillsLabel}</p>
              <h3 className="font-headline text-3xl font-semibold text-slate-100">{dict.home.coreSkillsTitle}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {dict.home.coreStack.map((item) => (
                  <Chip key={item} variant="soft" className="bg-[#0c1325] text-slate-200">
                    {item}
                  </Chip>
                ))}
              </div>
            </article>

            <article className="rounded-2xl bg-indigo-300 p-7 text-indigo-950">
              <p className="text-xs uppercase tracking-[0.2em]">{dict.home.experienceLabel}</p>
              <p className="mt-8 font-headline text-4xl font-bold">{dict.home.experiencePeriod}</p>
              <p className="mt-1 font-headline text-xl font-semibold">{dict.home.experienceRole}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10 flex items-center gap-3">
          <h2 className="font-headline text-3xl font-semibold text-slate-100">{dict.home.featuredWork}</h2>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {highlightedProjects.map((project) => (
            <article key={project.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-[#111a30]">
              {project.image ? (
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-75 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ) : (
                <div className="flex aspect-video w-full items-center justify-center bg-[#0d162b] px-4 text-center text-xs uppercase tracking-[0.2em] text-slate-400">
                  {dict.projectsPage.imageUnavailable}
                </div>
              )}
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-indigo-300">{project.category}</p>
                <h3 className="mt-2 font-headline text-3xl font-semibold text-slate-100">{project.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mb-20 w-full max-w-4xl rounded-3xl bg-indigo-200 p-10 text-center md:p-16">
        <h2 className="font-headline text-4xl font-bold tracking-tight text-indigo-900 md:text-6xl">{dict.home.ctaHeading}</h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="/contact" className="rounded-full bg-indigo-700 px-6 py-2.5 font-headline font-semibold text-white transition hover:bg-indigo-800">
            {dict.home.startProject}
          </Link>
          <Link
            href={`mailto:${dict.profile.email}`}
            className="rounded-full border border-indigo-500 px-6 py-2.5 font-headline font-semibold text-indigo-800 transition hover:bg-indigo-100/60"
          >
            {dict.home.emailMe}
          </Link>
        </div>
      </section>
    </main>
  );
}
