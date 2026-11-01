import React, { useState, useEffect, useRef } from 'react';
import { soundFx } from '../utils/sound';
import { Play, Sparkles, Sliders, ArrowDown, Bot, Film, Eye, ShieldCheck } from 'lucide-react';

export default function Hero({ onOpenAgent, onOpenShowreel, onOpenContact }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [bustMode, setBustMode] = useState('original'); // 'original' | 'hd'
  const containerRef = useRef(null);

  // Smooth mouse movement for 3D parallax
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const statueSrc = bustMode === 'original' 
    ? '/statue-original-cutout.png' 
    : '/statue-hd-cutout.png';

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-[92vh] lg:min-h-screen bg-[#FF4D00] flex flex-col justify-between items-center overflow-hidden select-none px-4 pt-24 pb-8 transition-colors duration-500"
      style={{
        backgroundImage: `radial-gradient(circle at 50% 40%, #FF6014 0%, #FF4D00 55%, #E63B00 100%)`
      }}
    >
      {/* Background Halftone / Noise Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-15 mix-blend-overlay"
        style={{
          backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
          backgroundSize: '8px 8px'
        }}
      />

      {/* Cyberpunk grid lines in corners */}
      <div className="absolute top-20 left-6 text-black/40 font-mono text-xs hidden md:flex flex-col gap-1 tracking-widest">
        <span>SYS.FPS: 60.00</span>
        <span>RES: 3840x2160 DCI</span>
        <span>COLOR_SPACE: ACEScct</span>
        <span>CODEC: PRORES_422HQ</span>
      </div>

      <div className="absolute top-20 right-6 text-black/40 font-mono text-xs hidden md:flex flex-col items-end gap-1 tracking-widest">
        <span>NLE_ACTIVE: RESOLVE 19</span>
        <span>TIMELINE_CUTS: 1,420+</span>
        <span>SOUND_DESIGN: 7.1 MASTER</span>
        <span>STATUS: OPEN FOR WORK</span>
      </div>

      {/* Mode switcher pill */}
      <div className="relative z-30 mb-2 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-black/20 text-xs font-mono text-white/90 shadow-xl">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
        <span className="font-semibold tracking-wider">PORTFOLIO IDENTITY</span>
        <span className="text-white/40">|</span>
        <button 
          onClick={() => {
            soundFx.tick();
            setBustMode(bustMode === 'original' ? 'hd' : 'original');
          }}
          className="hover:text-black hover:bg-white px-2 py-0.5 rounded transition text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5"
          title="Switch statue render"
        >
          <Eye className="w-3 h-3" />
          <span>Statue: {bustMode === 'original' ? 'Original Bust' : 'HD Studio'}</span>
        </button>
      </div>

      {/* MAIN COMPOSITION: Massive Typography + 3D Bust Layering */}
      <div className="relative w-full max-w-6xl flex-1 flex items-center justify-center my-auto min-h-[360px] md:min-h-[480px] lg:min-h-[540px]">

        {/* LAYER 1 (BEHIND STATUE): Massive Stylized Sharp Bold White Typography */}
        <div 
          className="absolute inset-0 flex flex-col items-center justify-center transition-transform duration-200 ease-out pointer-events-none"
          style={{
            transform: `translate3d(${-mousePos.x * 24}px, ${-mousePos.y * 18}px, 0)`
          }}
        >
          {/* Spike / Edgy Banner Typography styled like REVENGE in the reference */}
          <div className="w-full flex flex-col items-center justify-center text-center">
            
            {/* Top Word: GUHAN with sharp angled spiky cyberpunk/heavy-metal display typography */}
            <div className="relative flex items-center justify-center">
              {/* Left wing spiky accents */}
              <svg className="hidden sm:block w-12 md:w-20 lg:w-28 h-16 md:h-24 fill-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)] -mr-2" viewBox="0 0 100 80">
                <polygon points="100,40 10,10 40,40 0,75 100,50" />
              </svg>

              <h1 className="font-unbounded font-black tracking-[-0.05em] text-[72px] sm:text-[110px] md:text-[150px] lg:text-[190px] xl:text-[220px] leading-none text-white drop-shadow-[0_12px_24px_rgba(0,0,0,0.4)] uppercase select-none">
                GUHAN
              </h1>

              {/* Right wing spiky accents */}
              <svg className="hidden sm:block w-12 md:w-20 lg:w-28 h-16 md:h-24 fill-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)] -ml-2" viewBox="0 0 100 80">
                <polygon points="0,40 90,10 60,40 100,75 0,50" />
              </svg>
            </div>

            {/* Bottom Sub-Word: EDITS */}
            <div className="font-syne font-black tracking-[0.25em] sm:tracking-[0.35em] text-[28px] sm:text-[44px] md:text-[62px] lg:text-[82px] text-white/95 uppercase -mt-4 sm:-mt-8 md:-mt-12 drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]">
              EDITS
            </div>
          </div>
        </div>

        {/* LAYER 2 (FOREGROUND): Classical Greek Statue Bust Overlapping the Text */}
        <div 
          className="relative z-20 flex items-center justify-center pointer-events-none transition-transform duration-150 ease-out"
          style={{
            transform: `perspective(1000px) rotateY(${mousePos.x * 12}deg) rotateX(${-mousePos.y * 10}deg) translate3d(${mousePos.x * 20}px, ${mousePos.y * 15}px, 0)`
          }}
        >
          {bustMode === 'original' ? (
            <img 
              src="/statue-original-cutout.png" 
              alt="Guhan Classical Greek Bust Cutout"
              className="w-[280px] sm:w-[380px] md:w-[480px] lg:w-[540px] xl:w-[580px] object-contain drop-shadow-[0_24px_45px_rgba(0,0,0,0.65)] filter contrast-110 brightness-95"
            />
          ) : (
            <img 
              src="/statue-hd-cutout.png" 
              alt="Guhan HD Classical Sculpture Bust"
              className="w-[260px] sm:w-[350px] md:w-[440px] lg:w-[500px] xl:w-[540px] object-contain drop-shadow-[0_24px_50px_rgba(0,0,0,0.7)] filter contrast-125"
            />
          )}
        </div>

        {/* Subtle Ambient Rim Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[550px] h-[350px] md:h-[550px] bg-white/10 rounded-full blur-[90px] pointer-events-none -z-10" />
      </div>

      {/* BOTTOM INFO & ACTION BAR */}
      <div className="relative z-30 w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6 bg-black/85 backdrop-blur-xl p-4 sm:p-6 rounded-2xl border border-white/15 shadow-2xl text-white">
        
        {/* Left: Bio & Specialization */}
        <div className="flex flex-col text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
            <span className="px-2 py-0.5 bg-[#FF5100] text-black font-unbounded text-[10px] font-black rounded uppercase tracking-wider">
              VIDEO EDITOR & COLORIST
            </span>
            <span className="text-xs text-white/60 font-mono">DAVINCI • PREMIERE • CAPCUT</span>
          </div>
          <p className="text-sm sm:text-base font-space text-white/90 font-medium">
            Transforming raw footage into high-retention viral films & Hollywood-grade color.
          </p>
        </div>

        {/* Right: Quick Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button 
            onClick={() => {
              soundFx.bassBoom();
              onOpenShowreel();
            }}
            onMouseEnter={() => soundFx.tick()}
            className="group px-5 py-3 bg-[#FF5100] hover:bg-white text-black font-unbounded font-black text-xs uppercase tracking-wider rounded-xl transition-all duration-300 shadow-lg flex items-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Play className="w-4 h-4 fill-black group-hover:scale-110 transition-transform" />
            <span>Watch Showreel</span>
          </button>

          <button 
            onClick={() => {
              soundFx.agentChirp();
              onOpenAgent();
            }}
            onMouseEnter={() => soundFx.tick()}
            className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-unbounded font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 border border-white/20 flex items-center gap-2 group"
          >
            <Bot className="w-4 h-4 text-[#FF5100] group-hover:rotate-12 transition-transform" />
            <span>Launch AI Agent</span>
          </button>

          <button 
            onClick={() => {
              soundFx.slice();
              onOpenContact();
            }}
            onMouseEnter={() => soundFx.tick()}
            className="px-4 py-3 bg-black/60 hover:bg-black text-white/90 hover:text-white font-mono text-xs uppercase tracking-wider rounded-xl transition border border-white/10"
          >
            <span>Book Edit</span>
          </button>
        </div>
      </div>

      {/* Down indicator */}
      <a 
        href="#software" 
        onClick={() => soundFx.tick()}
        className="mt-4 text-black/60 hover:text-black flex items-center gap-1.5 font-mono text-[11px] font-bold tracking-widest uppercase transition-colors"
      >
        <span>Explore Pipeline & Videos</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </a>
    </section>
  );
}
