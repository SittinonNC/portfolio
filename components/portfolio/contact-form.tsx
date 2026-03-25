"use client";

import { Button } from "@heroui/react";
import { profile } from "@/components/portfolio/data";

export function ContactForm() {
  return (
    <form
      className="space-y-5"
      onSubmit={(event) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);
        const name = String(formData.get("name") ?? "");
        const email = String(formData.get("email") ?? "");
        const subject = String(formData.get("subject") ?? "Project Collaboration");
        const message = String(formData.get("message") ?? "");

        const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
        window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      }}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2">
          <span className="block text-[11px] uppercase tracking-[0.2em] text-slate-400">Identification (Name)</span>
          <input
            name="name"
            className="w-full rounded-xl border border-white/10 bg-slate-950/80 px-3 py-3 text-sm text-slate-100 outline-none ring-indigo-300/40 transition focus:ring-2"
            placeholder="John Doe"
            type="text"
            required
          />
        </label>
        <label className="space-y-2">
          <span className="block text-[11px] uppercase tracking-[0.2em] text-slate-400">Network Address (Email)</span>
          <input
            name="email"
            className="w-full rounded-xl border border-white/10 bg-slate-950/80 px-3 py-3 text-sm text-slate-100 outline-none ring-indigo-300/40 transition focus:ring-2"
            placeholder="john@example.com"
            type="email"
            required
          />
        </label>
      </div>

      <div className="space-y-2">
        <label className="text-[11px] uppercase tracking-[0.2em] text-slate-400">Packet Header (Subject)</label>
        <select
          name="subject"
          className="w-full rounded-xl border border-white/10 bg-slate-950/80 px-3 py-3 text-sm text-slate-100 outline-none ring-indigo-300/40 transition focus:ring-2"
          defaultValue="Project Collaboration"
        >
          <option>Project Collaboration</option>
          <option>Architecture Review</option>
          <option>Hiring Inquiry</option>
          <option>General Hello</option>
        </select>
      </div>

      <label className="space-y-2">
        <span className="block text-[11px] uppercase tracking-[0.2em] text-slate-400">Data Payload (Message)</span>
        <textarea
          name="message"
          className="min-h-36 w-full resize-y rounded-xl border border-white/10 bg-slate-950/80 px-3 py-3 text-sm text-slate-100 outline-none ring-indigo-300/40 transition focus:ring-2"
          placeholder="Define the objective..."
          required
        />
      </label>

      <Button type="submit" className="w-full bg-indigo-300 font-headline font-semibold text-indigo-950">
        Execute Send
      </Button>

      <p className="text-center text-[10px] uppercase tracking-[0.15em] text-slate-500">
        Encrypted end-to-end communication via global node network.
      </p>
    </form>
  );
}
