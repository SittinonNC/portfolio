export type NavItem = {
  label: string;
  href: string;
};

export const profile = {
  name: "Sittinon Tongsua",
  role: "Full-Stack Developer",
  headlineTech: ["Next.js", "React", "Node.js"],
  email: "sittinon.tongsua@gmail.com",
  phone: "092-754-5385",
  github: "https://github.com/SittinonNC",
  summary:
    "Full-stack Developer with hands-on industry experience building enterprise-grade web applications. Currently interning at Bluebik Digital, delivering high-value transaction systems with modern frameworks.",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Experience", href: "/skills#experience" },
  { label: "Contact", href: "/contact" },
];

export type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  stack: string[];
  demoUrl: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "High-Value Transaction System",
    category: "Bluebik Digital Internship",
    description:
      "Built core User Management and Admin modules with strict RBAC, delivered 20+ reusable pixel-perfect components from Figma, and optimized global state + API flow with Zustand, TanStack Query, and Axios.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBl3aI6C9a9pkrmS31GimianAWbzgzj9DlyB7U_jtOOdBV56zDQdHzrOQ7bg20bHd8j3RT8B8BFZ8tfZxOcNB_KhlVKS0s63LR81LphtZyhc70ErVkP1dhZB9iUJ2QLURjbV4P7gttvzACFDAyHtj9ZFE-lue5MneZ699H4ma5XUT3e1MY1zbsMUkjxu2BIOOUjY4PTBmveWPl_pWT7LgqbAtQv2hXRgQtBKec5GcYGvngAHBAROQPMq0Ow_HCWizFMXe1ny-FgzBGD",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand", "TanStack Query", "Zod"],
    demoUrl: "#",
    featured: true,
  },
  {
    title: "Tiwgun (ติวกัน)",
    category: "Personal Project · 2026",
    description:
      "A bilingual educational document-sharing platform with hybrid encryption (RSA-OAEP + AES-GCM), sub-second TTFB via RSC + caching strategies, and real-time capabilities through Supabase.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAAUzOlrCetqQ3fqy6E7yfVFuKcERMNb3nYJoCa-pht6FrwKM7-yF0rUn3V1Eoncsm9TqOQmRkVULCw2FUYmMxFduPQc20NdwxxwKc9tfuksxXadfjSha0GKrfkssXuYcIggFsAb0nytOfEEQxOGUcuvldTAibFJd_jhEkz82kF-pOPVbXTRfjw8wOXQ487VEAumdaWkHygihKDlluJA_zxWGf0KR35OaPE7vekAt0FCVwdwvx7pS2k-5h9RMkPiliYKpuVzYcs6WiW",
    stack: ["Next.js 16", "React 19", "Supabase", "GSAP", "Zustand", "TanStack Query"],
    demoUrl: "https://tiwgun.vercel.app/th",
  },
  {
    title: "E-Commerce Platform & Expense Management System",
    category: "Group Project · 2024",
    description: "Built a full-stack e-commerce platform in a team of four, including relational database design for users, products, and transactions in an Agile workflow.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCr6qyOjk79nfkAYEI5_-0LOkqwQcXgD827KacEQfGVY1JmMP7mnCg83BlfUUdGdU_pUrGAUF-VuCcboNGciLmHl1dmr4uhGJ-RvYvjjmnLgXguNc-IXR3XizX3A6pyB1FPDaeGhLYoIoXo7QBVf2Fh0u0Vg-quneK2S0hgXZZsHZMKiVi3L3iKXFNh1tUqsDJyyb4nUx8ObWdRnKTXqzF16ZJ_k7hZi5VZxcEk5WDUsJyilEdi7C6hnGD1mzCa66az58R6_qnOY-fk",
    stack: ["Angular", "Node.js", "Express.js", "SQL Server"],
    demoUrl: "#",
  },
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/SittinonNC" },
  { label: "Email", href: "mailto:sittinon.tongsua@gmail.com" },
  { label: "Phone", href: "tel:+66927545385" },
];
