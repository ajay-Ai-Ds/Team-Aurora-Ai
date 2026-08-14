"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { sfx } from "@/utils/soundEffects";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    sfx.playButtonClickSound();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-24 right-6 z-50 pointer-events-auto"
        >
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            animate={{ y: [0, -6, 0] }}
            transition={{
              y: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="group relative flex items-center justify-center p-3 sm:p-3.5 rounded-full bg-[#060814]/95 border border-pink-500/60 text-pink-400 hover:text-white hover:border-pink-400 backdrop-blur-2xl shadow-[0_0_25px_rgba(236,72,153,0.5)] cursor-pointer transition-all duration-300"
            aria-label="Scroll to top of page"
          >
            {/* Glowing Aura Ring */}
            <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 opacity-40 blur-sm group-hover:opacity-100 transition-opacity" />

            <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400 group-hover:text-white transition-colors relative z-10" />

            {/* Hover Tooltip Label */}
            <span className="hidden sm:inline-block absolute right-full mr-3 px-3 py-1 rounded-lg bg-slate-900/90 text-white text-xs font-space font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md border border-pink-500/30">
              Scroll To Top ⬆️
            </span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
