"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MessageSquare, Send, GitBranch, Sparkles, CheckCircle2, Share2, Camera } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-widest font-inter uppercase"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Get In Touch</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-space text-4xl sm:text-6xl font-extrabold text-white tracking-tight"
        >
          Let&apos;s Build Something <span className="text-cyan-400 text-glow-cyan">Together</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-inter text-slate-400 text-base sm:text-lg"
        >
          Have a project in mind? Let&apos;s turn your vision into a high-converting digital platform.
        </motion.p>
      </div>

      {/* Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side: Contact Info Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 p-8 rounded-2xl bg-[#060814]/85 border border-purple-500/25 backdrop-blur-2xl shadow-[0_0_35px_rgba(236,72,153,0.15)] space-y-8"
        >
          <div className="space-y-2">
            <h3 className="font-space font-bold text-2xl text-white">Direct Channels</h3>
            <p className="font-inter text-xs text-slate-400">
              Reach out for consultations, quotes, or inquiries.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-5 font-inter">
            {/* Phone */}
            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 text-slate-200 hover:text-cyan-300 transition-all group"
            >
              <div className="p-3 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400">Phone / Call</div>
                <div className="font-semibold text-sm">{siteConfig.phone}</div>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 text-slate-200 hover:text-cyan-300 transition-all group"
            >
              <div className="p-3 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400">Email Address</div>
                <div className="font-semibold text-sm">{siteConfig.email}</div>
              </div>
            </a>

            {/* WhatsApp Direct Button */}
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full p-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-space font-semibold text-sm flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all hover:scale-[1.02]"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Chat on WhatsApp ({siteConfig.phone})</span>
            </a>
          </div>

          {/* Social Links Row */}
          <div className="pt-6 border-t border-slate-900">
            <div className="text-xs font-inter text-slate-400 mb-3 font-semibold uppercase tracking-wider">
              Connect With Ajay
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/ajay-Ai-Ds"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all"
                aria-label="GitHub Profile"
              >
                <GitBranch className="w-5 h-5" />
              </a>

              <a
                href="#"
                className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all"
                aria-label="LinkedIn Profile"
              >
                <Share2 className="w-5 h-5" />
              </a>

              <a
                href="#"
                className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all"
                aria-label="Instagram Profile"
              >
                <Camera className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Quick Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 p-8 rounded-2xl bg-[#060814]/85 border border-purple-500/25 backdrop-blur-2xl shadow-[0_0_35px_rgba(236,72,153,0.15)]"
        >
          {submitted ? (
            <div className="py-12 text-center space-y-4 font-inter">
              <div className="inline-flex p-4 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-400 mb-2">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-space font-bold text-2xl text-white">Message Sent Successfully!</h3>
              <p className="text-slate-400 text-sm max-w-md mx-auto">
                Thank you for reaching out. Ajay will respond to your inquiry shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 text-sm font-semibold hover:border-cyan-500/40 transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 font-inter">
              <h3 className="font-space font-bold text-2xl text-white mb-2">Send a Message</h3>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. rahul@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Project Details / Message
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Describe your website, business needs, or project goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-space font-semibold text-base shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:shadow-[0_0_35px_rgba(6,182,212,0.5)] transition-all flex items-center justify-center gap-2 hover:scale-[1.01]"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
