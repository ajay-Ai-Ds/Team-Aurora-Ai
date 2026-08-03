"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Check, ArrowRight, Zap, Clock, TrendingUp, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function AICostCalculator() {
  const [businessType, setBusinessType] = useState<string>("safetynets");
  const [addons, setAddons] = useState<string[]>(["whatsapp", "metaads"]);

  const toggleAddon = (id: string) => {
    if (addons.includes(id)) {
      setAddons(addons.filter((item) => item !== id));
    } else {
      setAddons([...addons, id]);
    }
  };

  // Dynamic Calculation Logic
  const getCalculation = () => {
    let basePrice = 12000;
    let baseHours = 24;
    let baseLeads = 100;

    if (businessType === "ecommerce") {
      basePrice = 25000;
      baseHours = 48;
      baseLeads = 200;
    } else if (businessType === "gym") {
      basePrice = 15000;
      baseHours = 24;
      baseLeads = 120;
    } else if (businessType === "service") {
      basePrice = 18000;
      baseHours = 36;
      baseLeads = 150;
    }

    if (addons.includes("3d")) {
      basePrice += 6000;
      baseHours += 12;
      baseLeads += 40;
    }
    if (addons.includes("whatsapp")) {
      basePrice += 3000;
      baseLeads += 50;
    }
    if (addons.includes("metaads")) {
      basePrice += 8000;
      baseLeads += 80;
    }
    if (addons.includes("seo")) {
      basePrice += 5000;
      baseLeads += 60;
    }

    return { price: basePrice, hours: baseHours, leads: baseLeads };
  };

  const calc = getCalculation();

  const whatsappMessage = encodeURIComponent(
    `Hi Ajay! I calculated a project quote on TeamAurora.AI for my ${businessType.toUpperCase()} business. Estimated Price: ₹${calc.price.toLocaleString()}, Delivery: ${calc.hours} Hours. Let's discuss!`
  );

  return (
    <section id="calculator" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-600/15 rounded-full blur-[150px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs font-semibold tracking-widest font-inter uppercase backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.3)]"
        >
          <Calculator className="w-3.5 h-3.5 text-cyan-400" />
          <span>INSTANT PROJECT & LEAD ESTIMATOR</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-space text-4xl sm:text-6xl font-extrabold text-white tracking-tight"
        >
          Calculate Your Project <span className="text-cyan-400 text-glow-cyan">Cost & Lead ROI</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-inter text-slate-300 text-base sm:text-lg max-w-2xl mx-auto"
        >
          Select your business type and features to estimate project investment, delivery turnaround, and projected monthly client inquiries.
        </motion.p>
      </div>

      {/* Interactive Calculator Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
        {/* Left Options Selection Column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 p-8 rounded-3xl bg-[#060814]/90 border border-cyan-500/30 backdrop-blur-2xl shadow-[0_0_35px_rgba(6,182,212,0.15)] space-y-8"
        >
          {/* Step 1: Select Business Type */}
          <div className="space-y-4">
            <label className="block font-space font-bold text-white text-base">
              1. Select Your Business Industry:
            </label>
            <div className="grid grid-cols-2 gap-3 font-inter text-xs">
              {[
                { id: "safetynets", label: "Safety Nets & Invisible Grills" },
                { id: "ecommerce", label: "E-Commerce + Admin Dashboard" },
                { id: "gym", label: "Gym & Fitness Studio" },
                { id: "service", label: "Local Services & Contracting" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setBusinessType(item.id)}
                  className={`p-3.5 rounded-xl border text-left font-semibold transition-all cursor-pointer ${
                    businessType === item.id
                      ? "bg-cyan-950/80 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                      : "bg-slate-950/70 border-slate-800 text-slate-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Add-On Features */}
          <div className="space-y-4">
            <label className="block font-space font-bold text-white text-base">
              2. Choose Powerful AI Add-On Features:
            </label>
            <div className="space-y-2.5 font-inter text-xs">
              {[
                { id: "3d", label: "3D Motion Engine & Interactive Effects", tag: "+₹6,000" },
                { id: "whatsapp", label: "Instant WhatsApp Lead Capture Automation", tag: "+₹3,000" },
                { id: "metaads", label: "Meta & Google Ads Campaign Setup", tag: "+₹8,000" },
                { id: "seo", label: "Local SEO & Google Business Optimization", tag: "+₹5,000" },
              ].map((item) => {
                const isSelected = addons.includes(item.id);
                return (
                  <button
                    key={item.id}
                    onClick={() => toggleAddon(item.id)}
                    className={`w-full p-3.5 rounded-xl border flex items-center justify-between transition-all cursor-pointer ${
                      isSelected
                        ? "bg-purple-950/80 border-purple-400 text-purple-200 shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                        : "bg-slate-950/70 border-slate-800 text-slate-400 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`w-4 h-4 rounded flex items-center justify-center border ${isSelected ? "bg-purple-500 border-purple-400" : "border-slate-700"}`}>
                        {isSelected && <Check className="w-3 h-3 text-white" />}
                      </div>
                      <span className="font-semibold">{item.label}</span>
                    </div>
                    <span className="font-space font-bold text-amber-400">{item.tag}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Right Dynamic Live Result Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 p-8 rounded-3xl bg-gradient-to-b from-[#060814]/95 via-purple-950/40 to-[#060814]/95 border border-pink-500/35 backdrop-blur-2xl shadow-[0_0_40px_rgba(236,72,153,0.2)] flex flex-col justify-between space-y-8"
        >
          <div className="space-y-6">
            <h3 className="font-space font-bold text-xl text-white border-b border-slate-800 pb-4">
              Projected ROI Summary
            </h3>

            {/* Estimated Price */}
            <div className="space-y-1">
              <span className="text-xs font-inter text-slate-400 uppercase tracking-wider">Estimated Investment</span>
              <div className="font-space font-extrabold text-4xl text-white text-glow-pink">
                ₹{calc.price.toLocaleString()}
              </div>
            </div>

            {/* Turnaround & Leads Grid */}
            <div className="grid grid-cols-2 gap-4 font-inter text-xs">
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
                <div className="flex items-center gap-1.5 text-cyan-400">
                  <Clock className="w-4 h-4" />
                  <span className="font-bold">Turnaround</span>
                </div>
                <div className="font-space font-extrabold text-lg text-white">
                  {calc.hours} Hours
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <TrendingUp className="w-4 h-4" />
                  <span className="font-bold">Est. Monthly Leads</span>
                </div>
                <div className="font-space font-extrabold text-lg text-white">
                  {calc.leads}+ Inquiries
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-300 font-inter">
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Includes Vercel deployment & 100% production readiness guarantee.</span>
            </div>
          </div>

          {/* WhatsApp Direct CTA Button */}
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 text-white font-space font-bold text-sm tracking-wider shadow-[0_0_25px_rgba(236,72,153,0.5)] hover:scale-105 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Get Quote on WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
