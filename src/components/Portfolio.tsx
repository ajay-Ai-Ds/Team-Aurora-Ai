"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, GitBranch, Globe, Code, Sparkles, ShieldCheck } from "lucide-react";
import { portfolioProjects, PortfolioProject } from "@/data/portfolio";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredProjects = portfolioProjects.filter((project) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Service Websites") return project.category === "Service Website";
    if (activeFilter === "E-Commerce") return project.category.includes("E-Commerce");
    return true;
  });

  return (
    <section id="portfolio" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background Radial Blur */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-widest font-inter uppercase"
        >
          <Code className="w-3.5 h-3.5" />
          <span>My Work</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-space text-4xl sm:text-6xl font-extrabold text-white tracking-tight"
        >
          11 Live Client <span className="text-cyan-400 text-glow-cyan">Websites</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-inter text-slate-400 text-base sm:text-lg max-w-2xl mx-auto"
        >
          Real businesses. Real results. Fully designed, built, and deployed using AI-assisted development.
        </motion.p>
      </div>

      {/* Stats Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="mb-12 p-6 rounded-2xl bg-[#0A0A0F]/90 border border-cyan-500/20 backdrop-blur-xl shadow-[0_0_25px_rgba(6,182,212,0.1)] grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
      >
        {[
          { label: "11 Websites Built", sub: "Production Deployed" },
          { label: "100% Satisfaction", sub: "Real Client Growth" },
          { label: "AI-Powered", sub: "Speed & Excellence" },
          { label: "5 Cities Across India", sub: "Hyderabad, Chennai, etc." },
        ].map((stat, idx) => (
          <div key={idx} className="space-y-1">
            <div className="font-space font-bold text-lg sm:text-xl text-cyan-300 flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>{stat.label}</span>
            </div>
            <div className="font-inter text-xs text-slate-400">{stat.sub}</div>
          </div>
        ))}
      </motion.div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center gap-3 mb-12 flex-wrap font-inter">
        {["All", "Service Websites", "E-Commerce"].map((tab) => {
          const isActive = activeFilter === tab;
          return (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                isActive
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                  : "bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/30"
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* Grid of Portfolio Cards */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project, idx) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 40, rotateY: 15, rotateX: 10, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0, rotateX: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
              style={{ transformStyle: "preserve-3d" }}
              className="group relative flex flex-col rounded-2xl bg-[#0A0A0F]/80 border border-slate-800/80 backdrop-blur-xl hover:border-cyan-500/50 hover:shadow-[0_0_35px_rgba(6,182,212,0.25)] transition-all duration-300 overflow-hidden"
            >
              {/* Browser Mockup Chrome */}
              <div className="px-4 py-3 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-[11px] font-mono text-slate-400 truncate max-w-[180px] bg-slate-900 px-3 py-0.5 rounded-full border border-slate-800/60">
                  {project.liveUrl
                    ? project.liveUrl.replace("https://", "").replace("www.", "")
                    : project.githubUrl
                    ? project.githubUrl.replace("https://github.com/", "")
                    : "teamaurora.ai"}
                </div>
              </div>

              {/* Gradient Website Visual Canvas Placeholder */}
              <div className={`relative h-44 w-full bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-between overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                <div className="flex items-center justify-between">
                  <span className="inline-block px-3 py-1 rounded-full bg-slate-950/70 border border-cyan-500/30 text-cyan-300 text-[11px] font-semibold tracking-wider font-inter">
                    {project.category}
                  </span>
                  <Globe className="w-5 h-5 text-white/30 group-hover:text-cyan-400 transition-colors" />
                </div>
                <div>
                  <h4 className="font-space font-extrabold text-xl text-white drop-shadow-md">
                    {project.title}
                  </h4>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4 font-inter">
                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-400 text-xs font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Card Action Links */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-900">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-xs text-center flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 px-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/40 font-semibold text-xs text-center flex items-center justify-center gap-1.5 transition-all"
                    >
                      <GitBranch className="w-3.5 h-3.5 text-cyan-400" />
                      <span>GitHub Repo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
