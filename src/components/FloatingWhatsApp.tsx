"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20Ajay!%20I'm%20interested%20in%20building%20a%20website%20/%20digital%20marketing%20with%20TeamAurora.AI.`;

  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-auto">
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative group flex items-center justify-center p-3.5 sm:p-4 rounded-full bg-[#25D366] text-white shadow-[0_0_30px_rgba(37,211,102,0.6)] border border-emerald-300/40 cursor-pointer transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulsing Outer Glow Ring */}
        <span className="absolute -inset-2 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none" />

        {/* Universal Official WhatsApp SVG Icon */}
        <svg
          className="w-7 h-7 fill-white relative z-10 drop-shadow-md"
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.156 4.221 4.299-1.127zm10.741-6.726c-.347-.174-2.052-1.013-2.369-1.129-.318-.116-.549-.174-.78.174-.231.349-.897 1.129-1.1 1.361-.203.232-.405.261-.752.087-.348-.174-1.468-.541-2.796-1.725-1.034-.922-1.732-2.06-1.934-2.408-.203-.348-.022-.536.152-.709.157-.156.348-.406.522-.609.174-.203.232-.348.348-.58.116-.232.058-.435-.029-.609-.087-.174-.78-1.88-1.07-2.576-.282-.677-.57-.585-.78-.595-.2-.01-.433-.01-.665-.01-.232 0-.609.087-.927.435-.318.348-1.216 1.189-1.216 2.901 0 1.712 1.246 3.364 1.419 3.596.174.232 2.452 3.744 5.941 5.25 2.115.914 2.942.929 4.021.77.712-.105 2.052-.839 2.341-1.652.289-.813.289-1.508.203-1.652-.086-.144-.318-.232-.665-.406z" />
        </svg>

        {/* Hover Tooltip Label */}
        <span className="hidden sm:inline-block absolute right-full mr-3 px-3 py-1 rounded-lg bg-slate-900/90 text-white text-xs font-space font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md border border-emerald-500/30">
          Chat on WhatsApp
        </span>
      </motion.a>
    </div>
  );
}
