import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Portfolio from "@/components/Portfolio";
import Results from "@/components/Results";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import GlobalBackground3D from "@/components/GlobalBackground3D";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0F] text-slate-100 relative selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      {/* Persistent Background 3D Particles */}
      <GlobalBackground3D />

      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Vertical Scroll Progress Bar */}
      <ScrollProgress />

      {/* Masterclass Navbar */}
      <Navbar />

      {/* 3D Scroll Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Tech Stack Showcase */}
      <TechStack />

      {/* 11 Live Client Websites Portfolio Showcase */}
      <Portfolio />

      {/* Impact & Results Metrics Section */}
      <Results />

      {/* Client Feedback & Reviews Section */}
      <Reviews />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp CTA */}
      <FloatingWhatsApp />
    </main>
  );
}
