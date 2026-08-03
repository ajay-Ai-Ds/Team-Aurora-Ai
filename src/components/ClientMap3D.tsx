"use client";

import { motion } from "framer-motion";
import { MapPin, Globe, CheckCircle, Sparkles, Building2 } from "lucide-react";

export default function ClientMap3D() {
  const cityHubs = [
    { city: "Chennai", count: "6+ Active Clients", projects: "SVR, Aegis, Quality, Optima, Golden, Vagdevi", color: "from-pink-500 to-purple-600", borderColor: "border-pink-500/40" },
    { city: "Hyderabad", count: "4+ Active Clients", projects: "Priyanka Enterprises, John Invisible Grills, Sravani", color: "from-cyan-500 to-blue-600", borderColor: "border-cyan-500/40" },
    { city: "Bangalore", count: "4+ Active Clients", projects: "Shyam Enterprises, BMC Safety Nets, Sindhu", color: "from-amber-500 to-rose-600", borderColor: "border-amber-500/40" },
    { city: "Pune", count: "2+ Active Clients", projects: "RJ Invisible Grills Pune & Sports Nets", color: "from-purple-500 to-indigo-600", borderColor: "border-purple-500/40" },
    { city: "Vizag & Korangi", count: "3+ Active Clients", projects: "NR Fitness Gym, AJ Safe Nets, Swathi Safety Nets", color: "from-emerald-500 to-teal-600", borderColor: "border-emerald-500/40" },
  ];

  return (
    <section id="client-map" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[160px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/40 text-purple-300 text-xs font-semibold tracking-widest font-inter uppercase backdrop-blur-md shadow-[0_0_20px_rgba(139,92,246,0.3)]"
        >
          <Globe className="w-3.5 h-3.5 text-purple-400" />
          <span>NATIONWIDE REACH</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-space text-4xl sm:text-6xl font-extrabold text-white tracking-tight"
        >
          Serving Clients Across <span className="text-purple-400 text-glow-purple">5+ Major Cities in India</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-inter text-slate-300 text-base sm:text-lg max-w-2xl mx-auto"
        >
          From Chennai and Hyderabad to Bangalore, Pune, and Vizag — delivering high-converting web engines and Meta Ads across India.
        </motion.p>
      </div>

      {/* City Hub Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">
        {cityHubs.map((hub, idx) => (
          <motion.div
            key={hub.city}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -8, scale: 1.03 }}
            className={`p-6 rounded-2xl bg-[#060814]/90 border ${hub.borderColor} backdrop-blur-2xl shadow-[0_0_30px_rgba(0,0,0,0.4)] flex flex-col justify-between space-y-4`}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-purple-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
              </div>

              <div>
                <h3 className="font-space font-extrabold text-xl text-white">{hub.city}</h3>
                <span className="font-inter font-semibold text-xs text-purple-300">{hub.count}</span>
              </div>

              <p className="font-inter text-xs text-slate-400 leading-relaxed">
                {hub.projects}
              </p>
            </div>

            <div className="pt-2 border-t border-slate-900 flex items-center gap-1.5 text-[11px] text-slate-400 font-inter">
              <Building2 className="w-3.5 h-3.5 text-slate-500" />
              <span>Full Local SEO Funnel</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
