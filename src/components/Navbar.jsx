import React, { useState } from 'react';
import { soundFx } from '../utils/sound';
import { Volume2, VolumeX, Bot, Menu, X, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenAgent, onOpenContact }) {
  const [muted, setMuted] = useState(soundFx.getMuted());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSound = () => {
    const isNowMuted = soundFx.toggleMute();
    setMuted(isNowMuted);
    if (!isNowMuted) {
      soundFx.agentChirp();
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-black/75 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between py-3.5">
        
        {/* Brand Logo */}
        <a 
          href="#"
          onClick={() => soundFx.tick()}
          className="flex items-center gap-2 group select-none"
        >
          <div className="w-8 h-8 rounded-lg bg-[#FF5100] text-black font-unbounded font-black flex items-center justify-center text-sm shadow-[0_0_15px_#FF5100] group-hover:scale-105 transition-transform">
            G
          </div>
          <div className="flex flex-col">
            <span className="font-unbounded font-black text-sm tracking-wider text-white group-hover:text-[#FF5100] transition-colors">
              GUHAN EDITS
            </span>
            <span className="font-mono text-[9px] text-gray-400 -mt-1 tracking-widest">
              POST-PRODUCTION
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-wider text-gray-300">
          <a 
            href="#software" 
            onClick={() => soundFx.tick()}
            className="hover:text-[#FF5100] transition-colors"
          >
            Software
          </a>
          <a 
            href="#videos" 
            onClick={() => soundFx.tick()}
            className="hover:text-[#FF5100] transition-colors"
          >
            Videos
          </a>
          <a 
            href="#ai-agent" 
            onClick={() => soundFx.tick()}
            className="hover:text-[#FF5100] transition-colors flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>AI Agent</span>
          </a>
          <a 
            href="#contact" 
            onClick={() => soundFx.tick()}
            className="hover:text-[#FF5100] transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Audio FX Toggle */}
          <button
            onClick={toggleSound}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition flex items-center gap-1.5 text-xs font-mono"
            title={muted ? 'Unmute SFX' : 'Mute SFX'}
          >
            {muted ? (
              <VolumeX className="w-4 h-4 text-red-400" />
            ) : (
              <Volume2 className="w-4 h-4 text-[#FF5100] animate-pulse" />
            )}
            <span className="hidden sm:inline text-[10px] uppercase">{muted ? 'Muted' : 'SFX On'}</span>
          </button>

          {/* AI Agent Quick Launcher */}
          <button
            onClick={() => {
              soundFx.agentChirp();
              onOpenAgent();
            }}
            className="hidden sm:flex items-center gap-2 px-3.5 py-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl text-xs font-mono font-bold transition group"
          >
            <Bot className="w-3.5 h-3.5 text-[#FF5100] group-hover:rotate-12 transition-transform" />
            <span>Launch Agent</span>
          </button>

          {/* Book Edit Button */}
          <button
            onClick={() => {
              soundFx.bassBoom();
              onOpenContact();
            }}
            className="px-4 py-2 bg-[#FF5100] hover:bg-white text-black font-unbounded font-black text-xs uppercase tracking-wider rounded-xl transition shadow-[0_0_15px_rgba(255,81,0,0.3)] transform hover:scale-105 active:scale-95"
          >
            Book Edit
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 border-b border-white/10 p-5 space-y-4 font-mono text-xs uppercase">
          <a 
            href="#software" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-gray-300 hover:text-[#FF5100]"
          >
            Software
          </a>
          <a 
            href="#videos" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-gray-300 hover:text-[#FF5100]"
          >
            Videos
          </a>
          <a 
            href="#ai-agent" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-gray-300 hover:text-[#FF5100]"
          >
            AI Agent
          </a>
          <a 
            href="#contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-gray-300 hover:text-[#FF5100]"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
