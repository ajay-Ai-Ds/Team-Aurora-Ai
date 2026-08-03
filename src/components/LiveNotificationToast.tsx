"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, CheckCircle2, TrendingUp, Zap } from "lucide-react";

export default function LiveNotificationToast() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  const notifications = [
    { title: "New Enquiry Generated", text: "SVR Enterprises Chennai received a new lead via WhatsApp", time: "2 mins ago", icon: Zap, color: "text-amber-400" },
    { title: "E-Commerce Order Placed", text: "Quality Enterprises received hardware order on custom admin", time: "5 mins ago", icon: CheckCircle2, color: "text-emerald-400" },
    { title: "Meta Ads Scaled", text: "Running optimized campaign for 49+ safety nets businesses", time: "12 mins ago", icon: Sparkles, color: "text-pink-400" },
    { title: "Zerodha Wealth Investment", text: "₹60,000 invested into Zerodha Mutual Funds & Stocks", time: "1 hr ago", icon: TrendingUp, color: "text-cyan-400" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % notifications.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [notifications.length]);

  if (!visible) return null;

  const current = notifications[index];
  const IconComponent = current.icon;

  return (
    <div className="fixed bottom-24 left-6 z-40 hidden md:block pointer-events-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.4 }}
          className="p-4 rounded-2xl bg-[#060814]/95 border border-purple-500/35 backdrop-blur-2xl shadow-[0_0_30px_rgba(139,92,246,0.25)] flex items-center gap-3.5 max-w-sm"
        >
          <div className={`p-2.5 rounded-xl bg-slate-900 border border-slate-800 ${current.color}`}>
            <IconComponent className="w-5 h-5" />
          </div>

          <div className="flex-1 space-y-0.5 font-inter">
            <div className="flex items-center justify-between">
              <span className="font-space font-bold text-xs text-white">{current.title}</span>
              <span className="text-[10px] text-slate-400">{current.time}</span>
            </div>
            <p className="text-[11px] text-slate-300 leading-tight">
              {current.text}
            </p>
          </div>

          <button
            onClick={() => setVisible(false)}
            className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close Notification"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
