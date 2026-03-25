import { cookies } from "next/headers";
import en from "@/messages/en.json";

export const locales = ["en", "th"] as const;

export type Locale = (typeof locales)[number];
export type Dictionary = typeof en;

export const defaultLocale: Locale = "en";

function isLocale(value: string | undefined): value is Locale {
  return value === "en" || value === "th";
}

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: async () => en,
  th: async () => (await import("@/messages/th.json")).default as Dictionary,
};

export async function getCurrentLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const locale = cookieStore.get("locale")?.value;
  return isLocale(locale) ? locale : defaultLocale;
}

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}

export async function getI18n() {
  const locale = await getCurrentLocale();
  const dict = await getDictionary(locale);
  return { locale, dict };
}

export function formatMessage(template: string, values: Record<string, string>) {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => values[key] ?? "");
}
