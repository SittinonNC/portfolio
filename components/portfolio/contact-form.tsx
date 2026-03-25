"use client";

import { Button } from "@heroui/react";

type ContactFormLabels = {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  subjectLabel: string;
  subjectDefault: string;
  subjectOptions: string[];
  messageLabel: string;
  messagePlaceholder: string;
  submit: string;
  footerNote: string;
};

type ContactFormProps = {
  emailTo: string;
  labels: ContactFormLabels;
};

export function ContactForm({ emailTo, labels }: ContactFormProps) {
  return (
    <form
      className="space-y-5"
      onSubmit={(event) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);
        const name = String(formData.get("name") ?? "");
        const email = String(formData.get("email") ?? "");
        const subject = String(formData.get("subject") ?? labels.subjectDefault);
        const message = String(formData.get("message") ?? "");

        const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
        window.location.href = `mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      }}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2">
          <span className="block text-[11px] uppercase tracking-[0.2em] text-slate-400">{labels.nameLabel}</span>
          <input
            name="name"
            className="w-full rounded-xl border border-white/10 bg-slate-950/80 px-3 py-3 text-sm text-slate-100 outline-none ring-indigo-300/40 transition focus:ring-2"
            placeholder={labels.namePlaceholder}
            type="text"
            required
          />
        </label>
        <label className="space-y-2">
          <span className="block text-[11px] uppercase tracking-[0.2em] text-slate-400">{labels.emailLabel}</span>
          <input
            name="email"
            className="w-full rounded-xl border border-white/10 bg-slate-950/80 px-3 py-3 text-sm text-slate-100 outline-none ring-indigo-300/40 transition focus:ring-2"
            placeholder={labels.emailPlaceholder}
            type="email"
            required
          />
        </label>
      </div>

      <div className="space-y-2">
        <label className="text-[11px] uppercase tracking-[0.2em] text-slate-400">{labels.subjectLabel}</label>
        <select
          name="subject"
          className="w-full rounded-xl border border-white/10 bg-slate-950/80 px-3 py-3 text-sm text-slate-100 outline-none ring-indigo-300/40 transition focus:ring-2"
          defaultValue={labels.subjectDefault}
        >
          {labels.subjectOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>

      <label className="space-y-2">
        <span className="block text-[11px] uppercase tracking-[0.2em] text-slate-400">{labels.messageLabel}</span>
        <textarea
          name="message"
          className="min-h-36 w-full resize-y rounded-xl border border-white/10 bg-slate-950/80 px-3 py-3 text-sm text-slate-100 outline-none ring-indigo-300/40 transition focus:ring-2"
          placeholder={labels.messagePlaceholder}
          required
        />
      </label>

      <Button type="submit" className="w-full bg-indigo-300 font-headline font-semibold text-indigo-950">
        {labels.submit}
      </Button>

      <p className="text-center text-[10px] uppercase tracking-[0.15em] text-slate-500">
        {labels.footerNote}
      </p>
    </form>
  );
}
