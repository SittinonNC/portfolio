import type { Metadata } from "next";
import Link from "next/link";
import { Chip } from "@heroui/react";
import { profile } from "@/components/portfolio/data";

export const metadata: Metadata = {
  title: "Skills & Experience",
  description: "Technical depth, tooling, and career timeline.",
};

const skillRows = [
  { label: "Next.js / React", value: 93 },
  { label: "TypeScript / Node.js", value: 90 },
  { label: "State + Query (Zustand / TanStack)", value: 88 },
  { label: "Validation + API Design (Zod / Axios)", value: 87 },
];

const experiences = [
  {
    year: "Jan 2025 — Present",
    role: "Developer Intern",
    company: "Bluebik Digital Company Limited",
    points: [
      "Built User Management and Admin modules with strict Role-Based Access Control according to SA documentation and team coding standards.",
      "Engineered 20+ reusable, pixel-perfect UI components from Figma with Next.js, Tailwind CSS, and Shadcn UI.",
      "Managed global state with Zustand and optimized data fetching/caching via TanStack Query + Axios.",
      "Implemented client-side validation with Zod to prevent malformed payloads reaching backend services.",
    ],
  },
  {
    year: "2026",
    role: "Personal Project",
    company: "Tiwgun (ติวกัน)",
    points: [
      "Developed bilingual (EN/TH) educational platform with secure material sharing and discovery.",
      "Implemented hybrid encryption (RSA-OAEP + AES-GCM) using Web Crypto API for enterprise-grade API security.",
      "Achieved sub-second TTFB through React Server Components, granular caching strategies, and TanStack Query.",
    ],
  },
  {
    year: "2024",
    role: "Group Project (Team of 4)",
    company: "E-Commerce Platform & Expense Management System",
    points: [
      "Developed full-stack e-commerce platform with Angular, Node.js, Express.js, and SQL Server.",
      "Designed relational database schema for users, products, and transactions in Agile delivery cycles.",
    ],
  },
];

export default function SkillsPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-6 pb-24 pt-14 lg:px-8">
      <header className="mb-16 space-y-5">
        <h1 className="font-headline text-5xl font-bold tracking-tight text-slate-100 md:text-7xl">
          Technical <span className="text-indigo-300">Mastery</span> & History
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
          Strong foundation in production-grade frontend and backend development with focus on performance, security, and clean code.
        </p>
      </header>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <article className="rounded-2xl border border-white/10 bg-[#131e35] p-7 md:col-span-2">
          <h2 className="mb-6 font-headline text-2xl font-semibold text-slate-100">Core Engineering</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {skillRows.map((item) => (
              <div key={item.label} className="space-y-2">
                <div className="flex items-end justify-between text-sm text-slate-300">
                  <span>{item.label}</span>
                  <span className="text-indigo-300">{item.value}%</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full rounded-full bg-indigo-300" style={{ width: `${item.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-2xl border border-white/10 bg-[#131e35] p-7">
          <h3 className="mb-3 font-headline text-xl font-semibold text-slate-100">Tooling & Platforms</h3>
          <div className="flex flex-wrap gap-2">
            {["Shadcn UI", "GSAP", "Supabase", "SQL Server", "Git/GitHub", "Postman", "Azure", "Power BI"].map((tag) => (
              <Chip key={tag} size="sm" variant="soft" className="bg-[#1f2a45] text-slate-200">
                {tag}
              </Chip>
            ))}
          </div>
        </article>
      </section>

      <section className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-white/10 bg-[#131e35] p-7">
          <h3 className="mb-3 font-headline text-2xl font-semibold text-slate-100">Education</h3>
          <p className="text-sm uppercase tracking-[0.2em] text-indigo-300">2022 - Expected 2026</p>
          <p className="mt-2 text-slate-200">B.Sc. Information Technology</p>
          <p className="text-slate-300">Kasetsart University, Sriracha Campus</p>
          <p className="mt-2 text-slate-300">GPAX 3.49 / 4.00 (Second-Class Honours)</p>
        </article>

        <article className="rounded-2xl border border-white/10 bg-[#131e35] p-7">
          <h3 className="mb-3 font-headline text-2xl font-semibold text-slate-100">Awards & Certifications</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>• Excellent Presentation Award (Oral) · AUCC2025</li>
            <li>• Data Engineering with Microsoft Azure · 2024</li>
            <li>• ICDL: Application Essentials · 2024</li>
            <li>• Web Application Development: React (DAT) · 2023</li>
          </ul>
        </article>
      </section>

      <section id="experience" className="mt-20 space-y-8">
        <h2 className="font-headline text-4xl font-bold tracking-tight text-slate-100">Experience</h2>
        <div className="space-y-6">
          {experiences.map((item) => (
            <article key={item.role} className="rounded-2xl border border-white/10 bg-[#131e35] p-7">
              <p className="text-xs uppercase tracking-[0.2em] text-indigo-300">{item.year}</p>
              <h3 className="mt-2 font-headline text-2xl font-semibold text-slate-100">{item.role}</h3>
              <p className="text-slate-300">{item.company}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {item.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20 rounded-3xl bg-indigo-200 p-10 text-center md:p-14">
        <h2 className="font-headline text-4xl font-bold tracking-tight text-indigo-900">Ready to build something scalable together?</h2>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <Link href={profile.github} target="_blank" rel="noreferrer" className="rounded-xl bg-indigo-700 px-4 py-2 text-sm font-semibold text-white">
            View GitHub
          </Link>
          <Link href={`mailto:${profile.email}`} className="rounded-xl border border-indigo-700 px-4 py-2 text-sm font-semibold text-indigo-800">
            Contact Me
          </Link>
        </div>
      </section>
    </main>
  );
}
