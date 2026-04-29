import type { Metadata } from "next";
import Link from "next/link";
import { Chip } from "@heroui/react";
import { CertificatesSection } from "@/components/portfolio/certificates-section";
import { formatMessage, getI18n } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Skills & Experience",
  description: "Technical depth, tooling, and career timeline.",
};

export default async function SkillsPage() {
  const { dict } = await getI18n();

  return (
    <main className="mx-auto w-full max-w-7xl px-6 pb-24 pt-14 lg:px-8">
      <header className="mb-16 space-y-5">
        <h1 className="font-headline text-5xl font-bold tracking-tight text-slate-100 md:text-7xl">
          {formatMessage(dict.skillsPage.title, { highlight: dict.skillsPage.titleHighlight }).split(dict.skillsPage.titleHighlight).map((part, index, arr) => (
            <span key={`${part}-${index}`}>
              {part}
              {index < arr.length - 1 ? <span className="text-indigo-300">{dict.skillsPage.titleHighlight}</span> : null}
            </span>
          ))}
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-slate-300">{dict.skillsPage.description}</p>
      </header>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <article className="rounded-2xl border border-white/10 bg-[#131e35] p-7 md:col-span-2">
          <h2 className="mb-6 font-headline text-2xl font-semibold text-slate-100">{dict.skillsPage.coreEngineering}</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {dict.skillsPage.skillRows.map((item) => (
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
          <h3 className="mb-3 font-headline text-xl font-semibold text-slate-100">{dict.skillsPage.toolingPlatforms}</h3>
          <div className="flex flex-wrap gap-2">
            {dict.skillsPage.tooling.map((tag) => (
              <Chip key={tag} size="sm" variant="soft" className="bg-[#1f2a45] text-slate-200">
                {tag}
              </Chip>
            ))}
          </div>
        </article>
      </section>

      <section className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-white/10 bg-[#131e35] p-7">
          <h3 className="mb-3 font-headline text-2xl font-semibold text-slate-100">{dict.skillsPage.education}</h3>
          <p className="text-sm uppercase tracking-[0.2em] text-indigo-300">{dict.skillsPage.educationPeriod}</p>
          <p className="mt-2 text-slate-200">{dict.skillsPage.educationDegree}</p>
          <p className="text-slate-300">{dict.skillsPage.educationSchool}</p>
          <p className="mt-2 text-slate-300">{dict.skillsPage.educationGpa}</p>
        </article>

        <article className="rounded-2xl border border-white/10 bg-[#131e35] p-7">
          <h3 className="mb-3 font-headline text-2xl font-semibold text-slate-100">{dict.skillsPage.awardsTitle}</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            {dict.skillsPage.awards.map((award) => (
              <li key={award}>• {award}</li>
            ))}
          </ul>
        </article>
      </section>

      <CertificatesSection
        title={dict.skillsPage.certificatesTitle}
        viewCredentialLabel={dict.skillsPage.viewCredential}
        closeLabel={dict.skillsPage.closePreview}
        openInNewTabLabel={dict.skillsPage.openInNewTab}
        unsupportedPreviewLabel={dict.skillsPage.unsupportedPreview}
        certificates={dict.skillsPage.certificates}
      />

      <section id="experience" className="mt-20 space-y-8">
        <h2 className="font-headline text-4xl font-bold tracking-tight text-slate-100">{dict.skillsPage.experienceTitle}</h2>
        <div className="space-y-6">
          {dict.skillsPage.experiences.map((item) => (
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
        <h2 className="font-headline text-4xl font-bold tracking-tight text-indigo-900">{dict.skillsPage.ctaHeading}</h2>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <Link href={dict.profile.github} target="_blank" rel="noreferrer" className="rounded-xl bg-indigo-700 px-4 py-2 text-sm font-semibold text-white">
            {dict.skillsPage.viewGithub}
          </Link>
          <a
            href="/certificates/pdfs/Resume.pdf"
            download
            className="rounded-xl bg-indigo-900 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-950"
          >
            {dict.skillsPage.downloadResume}
          </a>
            <a
            href="/certificates/pdfs/CV.pdf"
            download
            className="rounded-xl bg-indigo-900 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-950"          >
            {dict.home.downloadCV}
          </a>
          <Link href={`mailto:${dict.profile.email}`} className="rounded-xl border border-indigo-700 px-4 py-2 text-sm font-semibold text-indigo-800">
            {dict.skillsPage.contactMe}
          </Link>
        </div>
      </section>
    </main>
  );
}
