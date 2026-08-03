import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import VideoShowcase from "@/components/VideoShowcase";
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
    <main className="min-h-screen bg-cosmic-main text-slate-100 relative selection:bg-pink-500/30 selection:text-pink-200 overflow-x-hidden">
      {/* Dynamic Ambient Aurora Background Lights */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-pink-600/15 rounded-full blur-[140px] pointer-events-none z-0 animate-pulse" />
      <div className="fixed top-1/3 right-10 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="fixed bottom-1/4 left-10 w-[550px] h-[550px] bg-cyan-600/15 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-600/15 rounded-full blur-[140px] pointer-events-none z-0" />

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

      {/* Featured Video & Instagram Showcase */}
      <VideoShowcase />

      {/* Tech Stack Showcase */}
      <TechStack />

      {/* 17 Live Client Websites Portfolio Showcase */}
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
