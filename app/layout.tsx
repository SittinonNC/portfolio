import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { SiteFooter } from "@/components/portfolio/site-footer";
import { SiteHeader } from "@/components/portfolio/site-header";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://architect-ide.dev"),
  title: {
    default: "Sittinon Tongsua Portfolio",
    template: "%s | Sittinon Tongsua",
  },
  description: "Full-Stack Developer portfolio: Next.js, React, Node.js, enterprise web applications, and modern frontend architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} min-h-screen bg-[#0b1326] text-slate-100 antialiased`}>
        <div className="relative min-h-screen bg-[radial-gradient(circle_at_10%_10%,rgba(192,193,255,0.2),transparent_35%),radial-gradient(circle_at_90%_20%,rgba(99,102,241,0.15),transparent_30%),#0b1326]">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
