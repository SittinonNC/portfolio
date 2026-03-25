import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Chip } from "@heroui/react";
import { profile, projects } from "@/components/portfolio/data";

export const metadata: Metadata = {
  title: "Home",
};

const coreStack = [
  "Next.js 16",
  "React 19",
  "Node.js",
  "TypeScript",
  "Zustand",
  "TanStack Query",
  "Supabase",
  "Tailwind CSS",
];

export default function HomePage() {
  const highlightedProjects = projects.slice(0, 2);

  return (
    <main>
      <section className="mx-auto grid min-h-[calc(100vh-5rem)] w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-12 lg:px-8">
        <div className="space-y-7 lg:col-span-7 motion-rise-in">
          <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-[#1a2440]/80 px-3 py-1">
            <span className="h-2 w-2 animate-pulse rounded-full bg-indigo-300" />
            <span className="text-xs uppercase tracking-[0.2em] text-indigo-200">Open to internship and full-time opportunities</span>
          </div>

          <h1 className="font-headline text-5xl font-bold leading-[0.95] tracking-tight text-slate-100 md:text-7xl">
            I&apos;m <span className="text-indigo-300">{profile.name}</span>, a {profile.role} focused on modern web systems.
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">{profile.summary}</p>

          <p className="text-sm text-slate-400">
            {profile.email} · {profile.phone} · {profile.location}
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-full bg-indigo-200 px-5 py-2.5 font-headline font-semibold text-indigo-950 transition hover:bg-indigo-100"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/20 px-5 py-2.5 font-headline font-semibold text-indigo-100 transition hover:bg-white/5"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        <div className="relative lg:col-span-5 motion-rise-in [animation-delay:120ms]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-[#0d162b]">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrc8o78Rn7hWfzixG00ctsi9mHKe7CN3vuEhW0HZUc6KiZnlQE7PK4AfXVoavcXe1z6bz_AgaCM6ING_ty8nIOELRGYiZ49tAHxgE929HOfNfZMKn_qKUa8Wly4z4OiaLjUgQZDYEbeidocympKNfWak7fQGSe118sTbvGtRoFKQJtaOBuEN-WcV8RjSdD3vSHjLM0v4WyL5vUY3h6UEWgJnlFHy1ptV8WGXGAYn4UqWHPjjS2rNhkIU2Aqjx64P6JcuAhzOV7EmdB"
              alt="Profile visual"
              fill
              className="object-cover grayscale"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
            <div className="absolute inset-x-5 bottom-5 rounded-xl border border-white/10 bg-slate-950/65 p-4 backdrop-blur-lg">
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Current Focus</p>
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
              <p className="text-xs uppercase tracking-[0.2em] text-indigo-300">Technical Stack</p>
              <h2 className="mt-3 font-headline text-4xl font-semibold tracking-tight text-slate-100">Built for performance, maintainability, and clean UX.</h2>
            </div>
            <p className="max-w-md text-slate-300">Hands-on with enterprise feature delivery, API architecture, and robust client-side validation.</p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <article className="rounded-2xl border border-white/10 bg-[#1a2440] p-7 md:col-span-2">
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-slate-400">01 / CORE SKILLS</p>
              <h3 className="font-headline text-3xl font-semibold text-slate-100">Production Web Development</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {coreStack.map((item) => (
                  <Chip key={item} variant="soft" className="bg-[#0c1325] text-slate-200">
                    {item}
                  </Chip>
                ))}
              </div>
            </article>

            <article className="rounded-2xl bg-indigo-300 p-7 text-indigo-950">
              <p className="text-xs uppercase tracking-[0.2em]">02 / EXPERIENCE</p>
              <p className="mt-8 font-headline text-4xl font-bold">2025 - Present</p>
              <p className="mt-1 font-headline text-xl font-semibold">Developer Intern @ Bluebik Digital</p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10 flex items-center gap-3">
          <h2 className="font-headline text-3xl font-semibold text-slate-100">Featured Work</h2>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {highlightedProjects.map((project) => (
            <article key={project.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-[#111a30]">
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-75 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-indigo-300">{project.category}</p>
                <h3 className="mt-2 font-headline text-3xl font-semibold text-slate-100">{project.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mb-20 w-full max-w-4xl rounded-3xl bg-indigo-200 p-10 text-center md:p-16">
        <h2 className="font-headline text-4xl font-bold tracking-tight text-indigo-900 md:text-6xl">Let&apos;s build your next product.</h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="/contact" className="rounded-full bg-indigo-700 px-6 py-2.5 font-headline font-semibold text-white transition hover:bg-indigo-800">
            Start a Project
          </Link>
          <Link
            href={`mailto:${profile.email}`}
            className="rounded-full border border-indigo-500 px-6 py-2.5 font-headline font-semibold text-indigo-800 transition hover:bg-indigo-100/60"
          >
            Email Me
          </Link>
        </div>
      </section>
    </main>
  );
}
