"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, PhoneCall, MessageSquare } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0A0A0F]/90 backdrop-blur-xl border-b border-cyan-500/20 shadow-[0_4px_25px_rgba(6,182,212,0.15)] py-3"
            : "bg-[#0A0A0F]/30 backdrop-blur-md border-b border-white/5 py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="group flex flex-col items-start">
            <span className="font-space font-bold text-xl sm:text-2xl tracking-tight text-white group-hover:text-cyan-400 transition-colors flex items-center gap-1.5">
              TeamAurora<span className="text-cyan-400 font-extrabold text-glow-cyan">.AI</span>
            </span>
            <span className="text-[10px] tracking-widest text-cyan-300/80 font-inter uppercase font-semibold pl-0.5">
              {siteConfig.tagline}
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8 font-inter">
            {siteConfig.navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="relative text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:w-full transition-all duration-300 rounded-full shadow-[0_0_8px_#06b6d4]" />
              </motion.a>
            ))}
          </nav>

          {/* Right Action Button & Phone Contact */}
          <div className="hidden lg:flex items-center space-x-5">
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors font-inter"
            >
              <PhoneCall className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>{siteConfig.phone}</span>
            </a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group overflow-hidden rounded-full p-[1px] font-inter text-sm font-semibold"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 rounded-full group-hover:opacity-100 transition-opacity" />
              <span className="relative block px-5 py-2 rounded-full bg-[#0A0A0F] text-cyan-300 group-hover:bg-opacity-80 transition-all duration-300 border border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                Let&apos;s Talk
              </span>
            </motion.a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900/80 border border-cyan-500/30 text-cyan-400 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#0A0A0F]/98 backdrop-blur-2xl flex flex-col justify-between p-8 md:hidden border-b border-cyan-500/20"
          >
            <div className="pt-20 space-y-6">
              <div className="w-12 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-600 mb-6" />
              {siteConfig.navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx, duration: 0.3 }}
                  className="block text-2xl font-space font-semibold text-slate-200 hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="border-t border-slate-800/80 pt-6 space-y-4 font-inter">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-cyan-300 font-medium"
              >
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                <span>WhatsApp: {siteConfig.phone}</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-[0_0_20px_rgba(6,182,212,0.4)]"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
