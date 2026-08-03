"use client";

import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={`https://wa.me/${siteConfig.whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-2 p-3.5 sm:px-4 sm:py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-space text-sm font-semibold shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all"
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse Outer Ring */}
      <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-40 animate-ping pointer-events-none" />

      <MessageSquare className="w-6 h-6 relative z-10 fill-white" />
      <span className="hidden sm:inline-block relative z-10 font-inter font-bold text-xs tracking-wide">
        Chat on WhatsApp
      </span>
    </motion.a>
  );
}
