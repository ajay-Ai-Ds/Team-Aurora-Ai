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
    id: "svr-enterprises",
    title: "SVR Enterprises Chennai",
    description: "Safety Nets & Invisible Grills Chennai business website with 18 service pages, hero carousel, and full SEO schema.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    category: "Service Website",
    liveUrl: "https://svr-enterprises-chennai.vercel.app/",
    imageUrl: "/portfolio/sravani.jpg",
    gradient: "from-pink-900/70 via-slate-900 to-cyan-950/80",
  },
  {
    id: "nr-fitness-gym",
    title: "NR Fitness Gym",
    description: "Fitness gym & training studio website for Tallarevu, Korangi with membership plans, trainer profiles, and WhatsApp booking.",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    category: "Service Website",
    liveUrl: "https://nr-fitness-gym.vercel.app/",
    imageUrl: "/portfolio/shyam.jpg",
    gradient: "from-blue-900/70 via-slate-900 to-indigo-950/80",
  },
  {
    id: "shyam-enterprises",
    title: "Shyam Enterprises Bangalore",
    description: "Bangalore-based safety solutions company with 18 services, mega-menu UX, and custom brand identity.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    category: "Service Website",
    liveUrl: "https://shyam-enterprises-ten.vercel.app/",
    imageUrl: "/portfolio/shyam.jpg",
    gradient: "from-amber-900/70 via-slate-900 to-slate-950/80",
  },
  {
    id: "aegis-nets",
    title: "Aegis Nets Chennai",
    description: "Premium safety nets & 316 invisible grills company website for Chennai featuring 14 service pages and JSON-LD SEO schema.",
    tech: ["Next.js", "Tailwind CSS", "Vercel", "JSON-LD SEO"],
    category: "Service Website",
    liveUrl: "https://aegis-nets.vercel.app/",
    imageUrl: "/portfolio/aegis.jpg",
    gradient: "from-emerald-900/70 via-slate-900 to-cyan-950/80",
  },
  {
    id: "quality-enterprises",
    title: "Quality Enterprises Chennai",
    description: "Full product catalog for safety nets, invisible grills, ropes & hardware with shopping cart, WhatsApp checkout, and custom admin panel.",
    tech: ["Next.js", "Tailwind CSS", "Custom Admin Auth", "Vercel"],
    category: "E-Commerce + Admin Dashboard",
    liveUrl: "https://quality-enterprises.vercel.app/",
    imageUrl: "/portfolio/quality.jpg",
    gradient: "from-purple-900/70 via-slate-900 to-pink-950/80",
  },
  {
    id: "optima-safety",
    title: "Optima Safety Solutions",
    description: "Premium safety nets & invisible grills installation platform serving residential and commercial clients across Chennai.",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    category: "Service Website",
    liveUrl: "https://optima-safety-solutions.vercel.app/",
    imageUrl: "/portfolio/priyanka.jpg",
    gradient: "from-cyan-900/70 via-slate-900 to-teal-950/80",
  },
  {
    id: "golden-enterprises",
    title: "Golden Enterprises Chennai",
    description: "Pigeon safety nets & 316 invisible grills company website in Chennai with fast mobile UX and instant call/WhatsApp CTAs.",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    category: "Service Website",
    liveUrl: "https://golden-enterprises.vercel.app/",
    imageUrl: "/portfolio/sravani.jpg",
    gradient: "from-amber-900/70 via-slate-900 to-yellow-950/80",
  },
  {
    id: "vagdevi-enterprises",
    title: "Vagdevi Enterprises",
    description: "Premium invisible grills & balcony safety nets installation website for Chennai with interactive service showcase.",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    category: "Service Website",
    liveUrl: "https://vagdevi-enterprises.vercel.app/",
    imageUrl: "/portfolio/aegis.jpg",
    gradient: "from-purple-900/70 via-slate-900 to-indigo-950/80",
  },
  {
    id: "rj-invisible-grills",
    title: "RJ Invisible Grills Pune",
    description: "Premium invisible grills & sports nets installation business website serving Pune with high-converting landing pages.",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    category: "Service Website",
    liveUrl: "https://rj-invisible-grills-pune.vercel.app/",
    imageUrl: "/portfolio/shyam.jpg",
    gradient: "from-blue-900/70 via-slate-900 to-cyan-950/80",
  },
  {
    id: "john-invisible-grills",
    title: "John Invisible Grills",
    description: "Premium invisible grills installation company serving Hyderabad with custom domain integration and high organic search traffic.",
    tech: ["Next.js", "Tailwind CSS", "Vercel", "Custom Domain"],
    category: "Service Website",
    liveUrl: "https://johninvisiblegrills.com/",
    imageUrl: "/portfolio/priyanka.jpg",
    gradient: "from-rose-900/70 via-slate-900 to-pink-950/80",
  },
  {
    id: "bmc-safety-nets",
    title: "BMC Safety Nets Bangalore",
    description: "Premium balcony safety nets & invisible grills installation business in Bangalore with custom domain and full local SEO funnel.",
    tech: ["Next.js", "Tailwind CSS", "Vercel", "Custom Domain"],
    category: "Service Website",
    liveUrl: "https://bmcsafetynets.com/",
    imageUrl: "/portfolio/quality.jpg",
    gradient: "from-teal-900/70 via-slate-900 to-cyan-950/80",
  },
];
