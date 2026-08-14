import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScrollingTicker from "@/components/ScrollingTicker";
import About from "@/components/About";
import AudioJourney from "@/components/AudioJourney";
import InvestmentShowcase from "@/components/InvestmentShowcase";
import VideoShowcase from "@/components/VideoShowcase";
import TechStack from "@/components/TechStack";
import VibeCoding3DShowcase from "@/components/VibeCoding3DShowcase";
import AICostCalculator from "@/components/AICostCalculator";
import Portfolio from "@/components/Portfolio";
import ClientMap3D from "@/components/ClientMap3D";
import Results from "@/components/Results";
import MetaAdsShowcase from "@/components/MetaAdsShowcase";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FloatingAudioPlayer from "@/components/FloatingAudioPlayer";
import LiveNotificationToast from "@/components/LiveNotificationToast";
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

      {/* Real-Time Live Activity Toast Ticker */}
      <LiveNotificationToast />

      {/* Masterclass Navbar */}
      <Navbar />

      {/* 3D Scroll Hero Section */}
      <Hero />

      {/* Infinite Widescreen Landscape Ticker Bar */}
      <ScrollingTicker />

      {/* About Section */}
      <About />

      {/* Founder Story & Dual-Language Audio Journey */}
      <AudioJourney />

      {/* Zerodha Stocks & Mutual Funds Investment Proof Showcase */}
      <InvestmentShowcase />

      {/* Featured Video & Instagram Showcase */}
      <VideoShowcase />

      {/* Tech Stack Showcase */}
      <TechStack />

      {/* 3D Vibe Coding & Unlimited Income Showcase */}
      <VibeCoding3DShowcase />

      {/* Interactive AI Cost & Lead ROI Calculator */}
      <AICostCalculator />

      {/* 17 Live Client Websites Portfolio Showcase */}
      <Portfolio />

      {/* 3D Nationwide Client Map */}
      <ClientMap3D />

      {/* Impact & Results Metrics Section */}
      <Results />

      {/* Meta Ads Managed Showcase Section */}
      <MetaAdsShowcase />

      {/* Client Feedback & Reviews Section */}
      <Reviews />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Fixed Floating Audio Button (Telugu Story) */}
      <FloatingAudioPlayer />

      {/* Universal Floating WhatsApp CTA */}
      <FloatingWhatsApp />
    </main>
  );
}
