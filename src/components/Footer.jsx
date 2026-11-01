import React from 'react';
import { soundFx } from '../utils/sound';
import { ArrowUp, Heart, Film } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    soundFx.slice();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-black py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10 select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#FF5100] text-black font-unbounded font-black flex items-center justify-center text-sm">
            G
          </div>
          <div>
            <div className="font-unbounded font-black text-sm text-white tracking-wider">
              GUHAN EDITS
            </div>
            <div className="font-mono text-[10px] text-gray-500">
              DAVINCI RESOLVE • PREMIERE PRO • CAPCUT PC
            </div>
          </div>
        </div>

        {/* Center Tagline */}
        <div className="font-mono text-xs text-gray-500 text-center">
          © {new Date().getFullYear()} GUHAN EDITS. All rights reserved. Crafted for viral impact.
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-gray-300 hover:text-white transition group"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
        </button>

      </div>
    </footer>
  );
}
