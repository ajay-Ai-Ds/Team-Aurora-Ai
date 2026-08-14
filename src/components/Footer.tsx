"use client";

import { siteConfig } from "@/data/siteConfig";
import { GitBranch, Share2, Camera, Sparkles, Cpu, Layers, Cloud } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#060814] border-t border-pink-500/20 shadow-[0_-4px_35px_rgba(236,72,153,0.15)] pt-16 pb-8 font-inter text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-900">
          {/* Column 1: Logo & Brand Tagline */}
          <div className="space-y-4">
            <a href="#hero" className="inline-flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg overflow-hidden border border-pink-500/40 p-0.5 bg-slate-950">
                <img
                  src="/portfolio/aaa_ai_logo.png"
                  alt="Ajay Aura AI AAA Logo"
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div className="flex flex-col items-start">
                <span className="font-space font-bold text-2xl tracking-tight text-white flex items-center gap-1">
                  Ajay Aura<span className="text-cyan-400 font-extrabold text-glow-cyan">.AI</span>
                </span>
                <span className="block text-[10px] tracking-widest text-cyan-300/80 font-inter uppercase font-semibold">
                  AAA • {siteConfig.tagline}
                </span>
              </div>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Building next-generation digital platforms, high-converting client websites, and AI-powered web applications.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-space font-bold text-white text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-cyan-300 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect & Contact Details */}
          <div className="space-y-4">
            <h4 className="font-space font-bold text-white text-sm uppercase tracking-wider">Connect</h4>
            <div className="space-y-2 text-sm">
              <div>Phone: <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="text-slate-200 hover:text-cyan-300">{siteConfig.phone}</a></div>
              <div>Email: <a href={`mailto:${siteConfig.email}`} className="text-slate-200 hover:text-cyan-300">{siteConfig.email}</a></div>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/ajay-Ai-Ds"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                aria-label="GitHub"
              >
                <GitBranch className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                aria-label="LinkedIn"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-pink-400 hover:border-pink-500/40 transition-colors"
                aria-label="Instagram"
              >
                <Camera className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 4: Built With Badge */}
          <div className="space-y-4">
            <h4 className="font-space font-bold text-white text-sm uppercase tracking-wider">Vibe Coding Stack</h4>
            <div className="p-4 rounded-xl bg-slate-900/80 border border-cyan-500/20 backdrop-blur-md space-y-3">
              <div className="text-xs text-cyan-300 font-semibold flex items-center gap-1.5 font-space">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>AI-Assisted Architecture</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Built using <strong className="text-slate-200">Claude</strong>, <strong className="text-slate-200">Antigravity</strong>, <strong className="text-slate-200">Next.js</strong> & <strong className="text-slate-200">Vercel</strong>.
              </p>
              <div className="flex items-center gap-2 pt-1 text-cyan-400">
                <Sparkles className="w-4 h-4" />
                <Cpu className="w-4 h-4" />
                <Layers className="w-4 h-4" />
                <Cloud className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>© {new Date().getFullYear()} {siteConfig.businessName}. All Rights Reserved.</div>
          <div>Designed & Developed by <span className="text-cyan-400 font-semibold font-space">Ajay</span></div>
        </div>
      </div>
    </footer>
  );
}
