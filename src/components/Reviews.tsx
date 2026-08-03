"use client";

import { motion } from "framer-motion";
import { MessageSquareQuote, Star, CheckCircle2, Building2 } from "lucide-react";

interface Testimonial {
  id: string;
  clientName: string;
  businessName: string;
  location: string;
  quote: string;
  rating: number;
  isVerified: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: "sravani-netting",
    clientName: "Sravani Netting Team",
    businessName: "Sravani Netting Solutions",
    location: "Hyderabad & Andhra Pradesh",
    quote: "Ajay built our entire safety netting website with speed and precision. The WhatsApp lead integration directly increased our daily customer inquiries.",
    rating: 5,
    isVerified: true,
  },
  {
    id: "quality-enterprises",
    clientName: "Quality Enterprises Management",
    businessName: "Quality Enterprises",
    location: "Telangana",
    quote: "The custom e-commerce catalog, WhatsApp checkout, and admin dashboard transformed how we take orders online. Highly recommended!",
    rating: 5,
    isVerified: true,
  },
  {
    id: "aegis-nets",
    clientName: "Aegis Nets Operations",
    businessName: "Aegis Nets Chennai",
    location: "Chennai, Tamil Nadu",
    quote: "Our website ranks for multiple local safety net keywords thanks to the thorough SEO schema and 14 detailed service pages.",
    rating: 5,
    isVerified: true,
  },
  {
    id: "svr-enterprises",
    clientName: "SVR Enterprises Team",
    businessName: "SVR Enterprises",
    location: "Chennai",
    quote: "Professional hero carousel, mega-menu UX, and lightning-fast load times. Excellent work by TeamAurora.AI!",
    rating: 5,
    isVerified: true,
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-widest font-inter uppercase"
        >
          <MessageSquareQuote className="w-3.5 h-3.5" />
          <span>Client Feedback</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-space text-4xl sm:text-6xl font-extrabold text-white tracking-tight"
        >
          What Clients <span className="text-cyan-400 text-glow-cyan">Say</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-inter text-slate-400 text-base sm:text-lg max-w-2xl mx-auto"
        >
          Direct feedback from live business deployments built and powered by TeamAurora.AI
        </motion.p>
      </div>

      {/* Horizontal Swipeable / Scrollable Carousel Container */}
      <div className="flex gap-6 overflow-x-auto pb-8 pt-2 scrollbar-thin snap-x snap-mandatory">
        {testimonials.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -6 }}
            className="flex-none w-[310px] sm:w-[380px] snap-center p-8 rounded-2xl bg-[#060814]/85 border border-purple-500/25 backdrop-blur-2xl hover:border-pink-500/50 hover:shadow-[0_0_35px_rgba(236,72,153,0.25)] transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-4">
              {/* Rating Stars & Badge */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-cyan-400 text-cyan-400" />
                  ))}
                </div>

                {item.isVerified && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-[11px] font-medium font-inter">
                    <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                    <span>Verified Client</span>
                  </span>
                )}
              </div>

              {/* Quote */}
              <p className="font-inter text-slate-300 text-sm leading-relaxed italic">
                &ldquo;{item.quote}&rdquo;
              </p>
            </div>

            {/* Client Info Footer */}
            <div className="pt-6 mt-6 border-t border-slate-900 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-space font-bold text-sm text-white">{item.businessName}</h4>
                <p className="font-inter text-xs text-slate-400">{item.location}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
