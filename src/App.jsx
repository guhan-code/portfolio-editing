import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import SoftwareSection from './components/SoftwareSection';
import VideoPortfolio from './components/VideoPortfolio';
import AIAgentSection from './components/AIAgentSection';
import WorkflowSection from './components/WorkflowSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { soundFx } from './utils/sound';
import { X, Play, Film, Sparkles } from 'lucide-react';

export default function App() {
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [prefilledPlan, setPrefilledPlan] = useState(null);

  const handleOpenAgent = () => {
    document.getElementById('ai-agent')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenShowreel = () => {
    soundFx.bassBoom();
    setShowreelOpen(true);
  };

  const handleOpenContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBookWithPlan = (plan) => {
    setPrefilledPlan(plan);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#08080A] text-white selection:bg-[#FF5100] selection:text-black">
      {/* Navigation */}
      <Navbar 
        onOpenAgent={handleOpenAgent}
        onOpenContact={handleOpenContact}
      />

      {/* Hero Section matching the user's reference image with GUHAN EDITS + Classical Bust 3D Parallax */}
      <main>
        <Hero 
          onOpenAgent={handleOpenAgent}
          onOpenShowreel={handleOpenShowreel}
          onOpenContact={handleOpenContact}
        />

        {/* Dynamic Ticker Marquee */}
        <Marquee />

        {/* Applications Suite: DaVinci Resolve, Adobe Premiere Pro, CapCut PC */}
        <SoftwareSection />

        {/* Videos I Edit & DaVinci Before/After Color Grading Slider */}
        <VideoPortfolio />

        {/* Guhan AI Edit Director & Project Estimator Agent */}
        <AIAgentSection onBookWithPlan={handleBookWithPlan} />

        {/* 4-Step Production Pipeline, Metrics & Creator Testimonials */}
        <WorkflowSection />

        {/* Contact & Booking Inquiry Form */}
        <ContactSection prefilledPlan={prefilledPlan} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Master Showreel Modal */}
      {showreelOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-[#111218] border border-white/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
            
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-black/50">
              <div className="flex items-center gap-2 font-unbounded text-sm font-bold text-white">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5100] animate-pulse" />
                <span>GUHAN EDITS // MASTER SHOWREEL (2026)</span>
              </div>
              <button
                onClick={() => {
                  soundFx.tick();
                  setShowreelOpen(false);
                }}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-video bg-black flex items-center justify-center">
              <video
                src="https://assets.mixkit.co/videos/preview/mixkit-futuristic-city-with-flying-cars-and-neon-lights-41551-large.mp4"
                poster="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80"
                controls
                autoPlay
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4 sm:p-6 bg-[#0E0F14] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
              <div className="text-gray-400">
                Pacing: Fast montage with beat sync • Color: DaVinci ACES Film Print • Mastered in 4K DCI
              </div>
              <button
                onClick={() => {
                  setShowreelOpen(false);
                  handleOpenContact();
                }}
                className="px-5 py-2.5 bg-[#FF5100] hover:bg-white text-black font-unbounded font-black uppercase tracking-wider rounded-xl transition"
              >
                Hire Guhan for Your Video
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
