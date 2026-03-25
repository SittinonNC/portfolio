import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Chip } from "@heroui/react";
import { projects } from "@/components/portfolio/data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Portfolio projects and internship work by Sittinon Tongsua.",
};

export default function ProjectsPage() {
  const [featured, secondary] = [projects.find((project) => project.featured), projects.filter((project) => !project.featured)];

  return (
    <main className="mx-auto w-full max-w-7xl px-6 pb-24 pt-14 lg:px-8">
      <header className="mb-16 space-y-5">
        <p className="text-xs uppercase tracking-[0.25em] text-indigo-300">Selected Works</p>
        <h1 className="font-headline text-5xl font-bold tracking-tight text-slate-100 md:text-7xl">
          PROJECT <span className="text-indigo-300">HIGHLIGHTS.</span>
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
          Enterprise internship delivery and personal production projects focused on security, performance, and reusable architecture.
        </p>
      </header>

      {featured && (
        <article className="mb-6 overflow-hidden rounded-2xl border border-white/10 bg-[#111a30] shadow-[0_20px_40px_rgba(192,193,255,0.08)]">
          <div className="relative aspect-[16/8] w-full overflow-hidden">
            <Image src={featured.image} alt={featured.title} fill sizes="(max-width: 768px) 100vw, 70vw" className="object-cover" priority />
          </div>
          <div className="space-y-5 p-7 md:p-10">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs uppercase tracking-[0.2em] text-indigo-300">{featured.category}</p>
              <Chip color="accent" variant="primary" size="sm">
                Featured
              </Chip>
            </div>
            <h2 className="font-headline text-3xl font-semibold text-slate-100 md:text-4xl">{featured.title}</h2>
            <p className="max-w-3xl text-slate-300">{featured.description}</p>
            <div className="flex flex-wrap gap-2">
              {featured.stack.map((tag) => (
                  <Chip key={tag} variant="soft" className="bg-[#1d2742] text-slate-200">
                  {tag}
                </Chip>
              ))}
            </div>
          </div>
        </article>
      )}

      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {secondary.map((project) => (
          <article key={project.title} className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111a30]">
            <div className="relative aspect-video w-full overflow-hidden">
              <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
            </div>
            <div className="flex flex-1 flex-col gap-4 p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-indigo-300">{project.category}</p>
              <h3 className="font-headline text-2xl font-semibold text-slate-100">{project.title}</h3>
              <p className="flex-1 text-sm leading-relaxed text-slate-300">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tag) => (
                  <Chip key={tag} size="sm" variant="soft" className="bg-[#1d2742] text-slate-200">
                    {tag}
                  </Chip>
                ))}
              </div>
              <Link
                href={project.demoUrl}
                className="pt-1 text-sm font-medium text-indigo-300 hover:text-indigo-200"
                target={project.demoUrl.startsWith("http") ? "_blank" : undefined}
                rel={project.demoUrl.startsWith("http") ? "noreferrer" : undefined}
              >
                View Demo
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
