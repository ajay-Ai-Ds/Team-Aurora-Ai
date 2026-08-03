export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  tech: string[];
  category: "Service Website" | "E-Commerce + Admin Dashboard";
  liveUrl?: string;
  githubUrl?: string;
  imageUrl: string;
  gradient: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "sravani-netting",
    title: "Sravani Netting Solutions",
    description: "Safety nets & invisible grills installation business website with lead capture and WhatsApp integration.",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    category: "Service Website",
    liveUrl: "https://sravani-netting-solutions.vercel.app/",
    imageUrl: "/portfolio/sravani.jpg",
    gradient: "from-pink-900/70 via-slate-900 to-cyan-950/80",
  },
  {
    id: "priyanka-enterprises",
    title: "Priyanka Enterprises Hyderabad",
    description: "Hyderabad safety nets installation business website with lead generation focus.",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    category: "Service Website",
    liveUrl: "https://www.priyankaenterpriseshyderabad.com/",
    imageUrl: "/portfolio/priyanka.jpg",
    gradient: "from-blue-900/70 via-slate-900 to-indigo-950/80",
  },
  {
    id: "quality-enterprises",
    title: "Quality Enterprises",
    description: "Full product catalog with shopping cart, WhatsApp checkout, cost estimator, and custom admin panel for order management.",
    tech: ["Next.js", "Tailwind CSS", "Custom Admin Auth", "Vercel"],
    category: "E-Commerce + Admin Dashboard",
    imageUrl: "/portfolio/quality.jpg",
    gradient: "from-purple-900/70 via-slate-900 to-pink-950/80",
  },
  {
    id: "aegis-nets",
    title: "Aegis Nets Chennai",
    description: "Premium safety nets and invisible grills company website for Chennai, featuring 14 service pages and full SEO optimization.",
    tech: ["Next.js", "Tailwind CSS", "Vercel", "JSON-LD SEO"],
    category: "Service Website",
    imageUrl: "/portfolio/aegis.jpg",
    gradient: "from-emerald-900/70 via-slate-900 to-cyan-950/80",
  },
  {
    id: "shyam-enterprises",
    title: "Shyam Enterprises Bangalore",
    description: "Bangalore-based safety solutions company with 18 services, premium mega-menu navigation, and custom brand identity.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    category: "Service Website",
    imageUrl: "/portfolio/shyam.jpg",
    gradient: "from-amber-900/70 via-slate-900 to-slate-950/80",
  },
  {
    id: "svr-enterprises",
    title: "SVR Enterprises Chennai",
    description: "Classic-themed Chennai safety solutions website built from scratch with 18 unique service pages, hero carousel, and full SEO schema.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    category: "Service Website",
    liveUrl: "https://svr-enterprises-chennai.vercel.app/",
    imageUrl: "/portfolio/sravani.jpg",
    gradient: "from-sky-900/70 via-slate-900 to-blue-950/80",
  },
  {
    id: "aj-safenets",
    title: "AJ Safe Net Solutions",
    description: "Pigeon safety nets and bird netting installation website serving clients across India with fast, mobile-friendly design.",
    tech: ["TypeScript", "Next.js", "Vercel"],
    category: "Service Website",
    githubUrl: "https://github.com/ajay-Ai-Ds/ajsafenetsolutions",
    imageUrl: "/portfolio/aegis.jpg",
    gradient: "from-teal-900/70 via-slate-900 to-cyan-950/80",
  },
  {
    id: "swathi-safety-nets",
    title: "Swathi Safety Nets",
    description: "Pigeon safety nets and bird netting installation website with responsive, mobile-first design.",
    tech: ["TypeScript", "Next.js", "Vercel"],
    category: "Service Website",
    githubUrl: "https://github.com/ajay-Ai-Ds/Swathi-Safety-Nets",
    imageUrl: "/portfolio/priyanka.jpg",
    gradient: "from-indigo-900/70 via-slate-900 to-purple-950/80",
  },
  {
    id: "nagamani-safety-nets",
    title: "Nagamani Safety Nets",
    description: "Safety nets business website for installation services across the region.",
    tech: ["TypeScript", "Next.js", "Vercel"],
    category: "Service Website",
    githubUrl: "https://github.com/ajay-Ai-Ds/nagamani-safety-nets",
    imageUrl: "/portfolio/shyam.jpg",
    gradient: "from-blue-900/70 via-slate-900 to-slate-950/80",
  },
  {
    id: "bmc-safety-nets",
    title: "BMC Safety Nets",
    description: "Pigeon safety nets and bird netting installation website, professional invisible grills and safety net services.",
    tech: ["TypeScript", "Next.js", "Vercel"],
    category: "Service Website",
    githubUrl: "https://github.com/ajay-Ai-Ds/BMC-Safety-Nets",
    imageUrl: "/portfolio/quality.jpg",
    gradient: "from-cyan-900/70 via-slate-900 to-teal-950/80",
  },
  {
    id: "apparao-safety-nets",
    title: "Apparao Safety Nets",
    description: "Safety nets installation business website with clean, professional design.",
    tech: ["TypeScript", "Next.js", "Vercel"],
    category: "Service Website",
    githubUrl: "https://github.com/ajay-Ai-Ds/Apparao-Safety-Nets",
    imageUrl: "/portfolio/sravani.jpg",
    gradient: "from-violet-900/70 via-slate-900 to-slate-950/80",
  },
];
