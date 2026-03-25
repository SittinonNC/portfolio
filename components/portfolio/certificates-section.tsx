"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Chip } from "@heroui/react";

type CertificateItem = {
  name: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
  credentialType?: "image" | "pdf" | string;
};

type CertificatesSectionProps = {
  title: string;
  viewCredentialLabel: string;
  closeLabel: string;
  openInNewTabLabel: string;
  unsupportedPreviewLabel: string;
  certificates: CertificateItem[];
};

function isPdfFile(url: string) {
  return /\.pdf($|\?)/i.test(url);
}

function isImageFile(url: string) {
  return /\.(png|jpe?g|gif|webp|svg|avif)($|\?)/i.test(url);
}

function hasCredential(url?: string) {
  return Boolean(url && url.trim() && url.trim() !== "#");
}

export function CertificatesSection({
  title,
  viewCredentialLabel,
  closeLabel,
  openInNewTabLabel,
  unsupportedPreviewLabel,
  certificates,
}: CertificatesSectionProps) {
  const [activeCertificate, setActiveCertificate] = useState<CertificateItem | null>(null);

  const activeType = useMemo(() => {
    if (!activeCertificate?.credentialUrl) {
      return "unsupported" as const;
    }

    if (activeCertificate.credentialType === "pdf" || activeCertificate.credentialType === "image") {
      return activeCertificate.credentialType;
    }

    if (isPdfFile(activeCertificate.credentialUrl)) {
      return "pdf" as const;
    }

    if (isImageFile(activeCertificate.credentialUrl)) {
      return "image" as const;
    }

    return "unsupported" as const;
  }, [activeCertificate]);

  return (
    <>
      <section className="mt-10 rounded-2xl border border-white/10 bg-[#131e35] p-5 sm:p-7">
        <h3 className="mb-6 font-headline text-xl font-semibold text-slate-100 sm:text-2xl">{title}</h3>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {certificates.map((certificate) => (
            <article key={`${certificate.name}-${certificate.issuer}`} className="rounded-xl border border-white/10 bg-[#0f172a]/70 p-4 sm:p-5">
              <p className="font-headline text-lg font-semibold text-slate-100 sm:text-xl">{certificate.name}</p>
              <p className="mt-2 text-slate-300">{certificate.issuer}</p>

              <div className="mt-4 flex items-center justify-between gap-3">
                <Chip size="sm" variant="soft" className="bg-[#1f2a45] text-indigo-200">
                  {certificate.year}
                </Chip>

                {hasCredential(certificate.credentialUrl) ? (
                  <button
                    type="button"
                    className="text-sm font-semibold text-indigo-300 hover:text-indigo-200"
                    onClick={() => setActiveCertificate(certificate)}
                  >
                    {viewCredentialLabel}
                  </button>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      {activeCertificate?.credentialUrl ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-2 sm:p-4" role="dialog" aria-modal="true" aria-label={activeCertificate.name}>
          <button
            type="button"
            className="absolute inset-0 h-full w-full cursor-default"
            aria-label={closeLabel}
            onClick={() => setActiveCertificate(null)}
          />

          <div className="relative z-10 w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-[#111a30] shadow-2xl">
            <div className="flex flex-col gap-3 border-b border-white/10 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-5">
              <p className="pr-0 font-headline text-base font-semibold text-slate-100 sm:pr-4 sm:text-lg">{activeCertificate.name}</p>
              <div className="flex items-center gap-3 self-end sm:gap-4">
                <a
                  href={activeCertificate.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-indigo-300 hover:text-indigo-200"
                >
                  {openInNewTabLabel}
                </a>
                <button
                  type="button"
                  onClick={() => setActiveCertificate(null)}
                  className="rounded-lg border border-white/15 px-3 py-1 text-sm text-slate-200 hover:bg-white/5"
                >
                  {closeLabel}
                </button>
              </div>
            </div>

            <div className="h-[75vh] bg-[#0b1224] sm:h-[70vh]">
              {activeType === "image" ? (
                <div className="relative h-full w-full">
                  <Image src={activeCertificate.credentialUrl} alt={activeCertificate.name} fill className="object-contain" unoptimized />
                </div>
              ) : null}

              {activeType === "pdf" ? (
                <iframe src={activeCertificate.credentialUrl} title={activeCertificate.name} className="h-full w-full" />
              ) : null}

              {activeType === "unsupported" ? (
                <div className="flex h-full flex-col items-center justify-center gap-3 px-6 text-center text-slate-300">
                  <p>{unsupportedPreviewLabel}</p>
                  <a
                    href={activeCertificate.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-indigo-300 hover:text-indigo-200"
                  >
                    {openInNewTabLabel}
                  </a>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
