import React, { useState } from 'react';
import { softwareSuite } from '../data/portfolioData';
import { soundFx } from '../utils/sound';
import { 
  Palette, 
  Scissors, 
  Zap, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  Sliders, 
  Film,
  Play,
  RotateCcw,
  Volume2
} from 'lucide-react';

export default function SoftwareSection() {
  const [selectedApp, setSelectedApp] = useState('davinci');
  const [activeLut, setActiveLut] = useState('teal-orange');
  const [timelinePlay, setTimelinePlay] = useState(true);
  const [retentionHookActive, setRetentionHookActive] = useState(true);

  const currentApp = softwareSuite.find(s => s.id === selectedApp) || softwareSuite[0];

  const luts = [
    { id: 'teal-orange', name: 'Teal & Orange (Blockbuster)', filter: 'contrast(125%) saturate(140%) sepia(20%) hue-rotate(345deg)' },
    { id: 'film-2383', name: 'Kodak 2383 Print Film', filter: 'contrast(115%) saturate(110%) brightness(95%) sepia(15%)' },
    { id: 'cyberpunk', name: 'Cyberpunk Neon Matrix', filter: 'contrast(140%) saturate(160%) hue-rotate(60deg)' },
    { id: 'bleach-bypass', name: '300 Bleach Bypass', filter: 'contrast(160%) saturate(40%) brightness(105%)' },
    { id: 'flat-log', name: 'Flat S-Log3 (Ungraded)', filter: 'contrast(60%) saturate(40%) brightness(120%)' },
  ];

  const currentLutFilter = luts.find(l => l.id === activeLut)?.filter || 'none';

  return (
    <section id="software" className="w-full bg-[#08080A] py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#FF5100]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#FF5100]" />
              <span className="font-mono text-xs text-[#FF5100] tracking-widest uppercase font-semibold">
                NLE & POST-PRODUCTION ARSENAL
              </span>
            </div>
            <h2 className="font-unbounded font-black text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight">
              APPLICATIONS <span className="text-[#FF5100]">I MASTER</span>
            </h2>
          </div>
          <p className="font-space text-sm sm:text-base text-gray-400 max-w-md">
            From Hollywood-level node grading in DaVinci to high-retention viral pacing in CapCut PC and narrative architecture in Premiere Pro.
          </p>
        </div>

        {/* Application Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {softwareSuite.map((sw) => {
            const isSelected = selectedApp === sw.id;
            return (
              <button
                key={sw.id}
                onClick={() => {
                  soundFx.slice();
                  setSelectedApp(sw.id);
                }}
                onMouseEnter={() => soundFx.tick()}
                className={`relative flex items-center gap-3 p-4 rounded-xl border text-left transition-all duration-300 ${
                  isSelected 
                    ? 'bg-[#14151B] border-[#FF5100] shadow-[0_0_20px_rgba(255,81,0,0.25)]' 
                    : 'bg-[#0E0F14] border-white/10 hover:border-white/30 text-gray-400 hover:text-white'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#FF5100] animate-ping" />
                )}
                
                <div className={`p-2.5 rounded-lg ${isSelected ? 'bg-[#FF5100] text-black' : 'bg-white/5 text-white'}`}>
                  {sw.id === 'davinci' && <Palette className="w-5 h-5" />}
                  {sw.id === 'premiere' && <Scissors className="w-5 h-5" />}
                  {sw.id === 'capcut' && <Zap className="w-5 h-5" />}
                  {sw.id === 'aftereffects' && <Sparkles className="w-5 h-5" />}
                </div>

                <div>
                  <div className="font-unbounded font-bold text-xs sm:text-sm text-white">
                    {sw.name.split(' ')[0]} {sw.name.split(' ')[1] || ''}
                  </div>
                  <div className="font-mono text-[11px] text-gray-400">
                    {sw.mastery}% Mastery
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Application Feature Card & Interactive Studio Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#0D0E13] border border-white/15 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Left Column: Software Specs & Workflow Badges */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-1 bg-white/10 border border-white/20 text-[#FF5100] font-mono text-xs font-semibold rounded-md">
                  {currentApp.version}
                </span>
                <span className="font-mono text-xs text-gray-400">
                  {currentApp.category}
                </span>
              </div>

              <h3 className="font-unbounded font-black text-2xl sm:text-3xl text-white mb-2">
                {currentApp.name}
              </h3>
              
              <p className="font-space text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
                {currentApp.tagline}
              </p>

              {/* Mastery bar */}
              <div className="mb-6 bg-black/60 p-4 rounded-xl border border-white/10">
                <div className="flex justify-between items-center text-xs font-mono mb-2">
                  <span className="text-gray-400">TECHNICAL EXECUTION LEVEL</span>
                  <span className="text-[#FF5100] font-bold">{currentApp.mastery}%</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-[#FF5100] h-full rounded-full transition-all duration-700 ease-out shadow-[0_0_10px_#FF5100]" 
                    style={{ width: `${currentApp.mastery}%` }} 
                  />
                </div>
                <div className="mt-2 text-[11px] font-mono text-gray-500">
                  {currentApp.highlightStats}
                </div>
              </div>

              {/* Core Features Checklist */}
              <div className="space-y-3">
                <div className="font-mono text-xs text-gray-400 uppercase tracking-wider">
                  Specialized Deliverables:
                </div>
                {currentApp.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300 font-space">
                    <CheckCircle2 className="w-4 h-4 text-[#FF5100] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick badges */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
              {currentApp.toolsUsed.map((tool, idx) => (
                <span key={idx} className="px-2.5 py-1 bg-black/50 border border-white/10 rounded-md text-[11px] font-mono text-gray-300">
                  #{tool}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Studio Simulations */}
          <div className="lg:col-span-7 bg-[#07080B] rounded-xl border border-white/15 p-5 flex flex-col justify-between">
            
            {/* SIMULATION 1: DAVINCI RESOLVE COLOR GRADING SIMULATOR */}
            {selectedApp === 'davinci' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <Palette className="w-4 h-4 text-[#FF5100]" />
                    <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                      Interactive DaVinci Node Color Inspector
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-gray-400 bg-white/5 px-2 py-0.5 rounded">
                    32-bit Float Processing
                  </span>
                </div>

                {/* Video Monitor with Live CSS LUT simulation */}
                <div className="relative rounded-lg overflow-hidden border border-white/20 aspect-video group">
                  <img 
                    src="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1000&q=80" 
                    alt="Color Grading Preview"
                    className="w-full h-full object-cover transition-all duration-500 ease-out"
                    style={{ filter: currentLutFilter }}
                  />

                  {/* Scopes Overlay Simulation */}
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded border border-white/20 font-mono text-[10px] text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>LUT: {luts.find(l => l.id === activeLut)?.name.split(' ')[0]}</span>
                  </div>

                  <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded border border-white/20 font-mono text-[10px] text-[#FF5100]">
                    ACEScct REC.709
                  </div>
                </div>

                {/* LUT Preset Switcher Buttons */}
                <div>
                  <div className="text-xs font-mono text-gray-400 mb-2 flex items-center justify-between">
                    <span>CLICK TO TEST COLOR GRADES / LUTS:</span>
                    <span className="text-[#FF5100]">{activeLut.toUpperCase()}</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {luts.map((lut) => (
                      <button
                        key={lut.id}
                        onClick={() => {
                          soundFx.tick();
                          setActiveLut(lut.id);
                        }}
                        className={`px-3 py-2 rounded-lg text-[11px] font-mono text-left transition border ${
                          activeLut === lut.id
                            ? 'bg-[#FF5100] text-black font-bold border-[#FF5100]'
                            : 'bg-black/60 text-gray-300 border-white/10 hover:border-white/30'
                        }`}
                      >
                        {lut.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* DaVinci Node Tree Representation */}
                <div className="bg-black/80 p-3 rounded-lg border border-white/10 font-mono text-[11px]">
                  <div className="text-gray-400 mb-1.5 flex items-center justify-between">
                    <span>ACTIVE POWERGRADE NODE GRAPH:</span>
                    <span className="text-emerald-400">All 6 Nodes Active</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 text-[10px]">
                    <span className="px-2 py-0.5 bg-blue-900/60 text-blue-200 border border-blue-600/40 rounded">01: Exposure</span>
                    <span>→</span>
                    <span className="px-2 py-0.5 bg-purple-900/60 text-purple-200 border border-purple-600/40 rounded">02: White Balance</span>
                    <span>→</span>
                    <span className="px-2 py-0.5 bg-amber-900/60 text-amber-200 border border-amber-600/40 rounded">03: Skin Qualifier</span>
                    <span>→</span>
                    <span className="px-2 py-0.5 bg-orange-900/60 text-orange-200 border border-orange-600/40 rounded">04: Look Tone</span>
                    <span>→</span>
                    <span className="px-2 py-0.5 bg-emerald-900/60 text-emerald-200 border border-emerald-600/40 rounded">05: Halation</span>
                  </div>
                </div>
              </div>
            )}

            {/* SIMULATION 2: PREMIERE PRO MULTI-TRACK NLE TIMELINE */}
            {selectedApp === 'premiere' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <Scissors className="w-4 h-4 text-[#9999FF]" />
                    <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                      Premiere Pro Live Timeline Visualizer
                    </span>
                  </div>
                  <button 
                    onClick={() => {
                      soundFx.slice();
                      setTimelinePlay(!timelinePlay);
                    }}
                    className="flex items-center gap-1 bg-[#9999FF]/20 hover:bg-[#9999FF]/30 text-[#9999FF] text-xs font-mono px-2 py-1 rounded transition border border-[#9999FF]/30"
                  >
                    {timelinePlay ? 'Pause Playhead' : 'Play Timeline'}
                  </button>
                </div>

                {/* Simulated Timeline Sequence */}
                <div className="bg-black/90 p-4 rounded-xl border border-white/15 space-y-2 relative overflow-hidden">
                  {/* Moving Playhead */}
                  {timelinePlay && (
                    <div className="absolute top-0 bottom-0 w-0.5 bg-red-500 z-20 animate-marquee shadow-[0_0_8px_red]" style={{ animationDuration: '6s' }}>
                      <div className="w-3 h-3 bg-red-500 transform -translate-x-1 rotate-45" />
                    </div>
                  )}

                  {/* Time ruler */}
                  <div className="flex justify-between font-mono text-[10px] text-gray-500 pb-1 border-b border-white/10">
                    <span>00:00:00:00</span>
                    <span>00:00:05:00</span>
                    <span>00:00:10:00</span>
                    <span>00:00:15:00</span>
                  </div>

                  {/* V3: Kinetic VFX / Titles */}
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-[#9999FF] w-6 shrink-0">V3</span>
                    <div className="flex-1 flex gap-2 h-7 bg-white/5 rounded p-0.5">
                      <div className="w-1/4 bg-[#D175FF]/40 border border-[#D175FF]/60 rounded text-[9px] font-mono text-white flex items-center px-1.5 truncate">
                        Kinetic_Title_3D
                      </div>
                      <div className="w-1/3 bg-[#D175FF]/40 border border-[#D175FF]/60 rounded text-[9px] font-mono text-white flex items-center px-1.5 truncate">
                        Glitch_Transition
                      </div>
                    </div>
                  </div>

                  {/* V2: B-Roll Cutaways */}
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-[#9999FF] w-6 shrink-0">V2</span>
                    <div className="flex-1 flex gap-1.5 h-7 bg-white/5 rounded p-0.5">
                      <div className="w-1/5 bg-indigo-700/50 border border-indigo-400/50 rounded text-[9px] font-mono text-white flex items-center px-1.5 truncate">
                        B-Roll_Drone_4K
                      </div>
                      <div className="w-2/5 bg-indigo-700/50 border border-indigo-400/50 rounded text-[9px] font-mono text-white flex items-center px-1.5 truncate">
                        Product_CloseUp_Macro
                      </div>
                      <div className="w-1/4 bg-indigo-700/50 border border-indigo-400/50 rounded text-[9px] font-mono text-white flex items-center px-1.5 truncate">
                        Street_Tokyo_Night
                      </div>
                    </div>
                  </div>

                  {/* V1: A-Roll Principal */}
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-[#9999FF] w-6 shrink-0">V1</span>
                    <div className="flex-1 flex gap-1 h-7 bg-white/5 rounded p-0.5">
                      <div className="w-1/3 bg-blue-700/60 border border-blue-400/60 rounded text-[9px] font-mono text-white flex items-center px-1.5 truncate">
                        A-Roll_Interview_CamA
                      </div>
                      <div className="w-1/3 bg-blue-700/60 border border-blue-400/60 rounded text-[9px] font-mono text-white flex items-center px-1.5 truncate">
                        A-Roll_Interview_CamB
                      </div>
                      <div className="w-1/3 bg-blue-700/60 border border-blue-400/60 rounded text-[9px] font-mono text-white flex items-center px-1.5 truncate">
                        A-Roll_Outro_CamA
                      </div>
                    </div>
                  </div>

                  {/* A1 & A2: Audio J/L Cuts */}
                  <div className="flex items-center gap-2 pt-1 border-t border-white/5">
                    <span className="font-mono text-[10px] text-emerald-400 w-6 shrink-0">A1</span>
                    <div className="flex-1 flex gap-1 h-6 bg-emerald-950/40 rounded p-0.5">
                      <div className="w-full bg-emerald-600/30 border border-emerald-500/50 rounded text-[9px] font-mono text-emerald-200 flex items-center px-1.5 truncate">
                        Dialogue_Master_Normalized (-14 LUFS)
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-amber-400 w-6 shrink-0">A2</span>
                    <div className="flex-1 flex gap-2 h-6 bg-amber-950/40 rounded p-0.5">
                      <div className="w-1/4 bg-amber-600/30 border border-amber-500/50 rounded text-[9px] font-mono text-amber-200 flex items-center px-1.5 truncate">
                        SFX_Whoosh_Bass
                      </div>
                      <div className="w-1/2 bg-amber-600/30 border border-amber-500/50 rounded text-[9px] font-mono text-amber-200 flex items-center px-1.5 truncate">
                        Cinematic_Pad_Music (Ducked)
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-white/5 rounded-lg font-mono text-xs text-gray-300 flex items-center justify-between">
                  <span>KEYBOARD WORKFLOW:</span>
                  <span className="text-[#9999FF]">Q/W Ripple Trim • C Razor • L 2x Speed Scrub</span>
                </div>
              </div>
            )}

            {/* SIMULATION 3: CAPCUT PC VIRAL RETENTION ENGINE */}
            {selectedApp === 'capcut' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#00F0FF]" />
                    <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                      CapCut PC Viral Retention Engine (9:16)
                    </span>
                  </div>
                  <button 
                    onClick={() => {
                      soundFx.agentChirp();
                      setRetentionHookActive(!retentionHookActive);
                    }}
                    className="flex items-center gap-1 bg-[#00F0FF]/20 hover:bg-[#00F0FF]/30 text-[#00F0FF] text-xs font-mono px-2 py-1 rounded transition border border-[#00F0FF]/30"
                  >
                    {retentionHookActive ? 'Hooks Enabled (+85%)' : 'Standard Edit'}
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone Mockup Preview */}
                  <div className="relative mx-auto w-44 h-72 bg-black rounded-3xl border-2 border-white/30 overflow-hidden shadow-2xl flex flex-col justify-between p-3">
                    <img 
                      src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=400&q=80"
                      alt="Shorts Preview"
                      className={`w-full h-full absolute inset-0 object-cover transition-transform duration-300 ${
                        retentionHookActive ? 'scale-110 filter contrast-125' : 'scale-100'
                      }`}
                    />
                    <div className="relative z-10 flex justify-between items-center text-[10px] text-white font-mono bg-black/60 px-2 py-0.5 rounded-full">
                      <span>9:16 REEL</span>
                      <span className="text-[#00F0FF]">60 FPS</span>
                    </div>

                    {/* Kinetic pop-up subtitle */}
                    <div className="relative z-10 my-auto text-center">
                      {retentionHookActive ? (
                        <div className="inline-block px-3 py-1 bg-black/90 text-yellow-400 font-unbounded font-black text-xs uppercase rounded-lg border-2 border-yellow-400 animate-bounce shadow-xl">
                          WATCH THIS ⚡
                        </div>
                      ) : (
                        <div className="text-[10px] text-white/70 font-sans">
                          Standard caption text...
                        </div>
                      )}
                    </div>

                    <div className="relative z-10 flex items-center justify-between text-[9px] text-white/80 bg-black/60 px-2 py-1 rounded">
                      <span>Sound: Trending Bass Hit</span>
                      <span className="text-emerald-400">+94% Hook</span>
                    </div>
                  </div>

                  {/* Retention Graph comparison */}
                  <div className="flex flex-col justify-between space-y-3">
                    <div className="bg-black/60 p-3.5 rounded-xl border border-white/10 font-mono">
                      <div className="text-xs text-gray-400 mb-2 flex justify-between">
                        <span>AUDIENCE RETENTION CURVE:</span>
                        <span className="text-[#00F0FF] font-bold">94.2%</span>
                      </div>
                      
                      {/* Visual Graph Line */}
                      <div className="relative h-20 w-full flex items-end">
                        <svg className="w-full h-full overflow-visible" viewBox="0 0 200 60">
                          {/* Standard Boring Editor line (Drop off) */}
                          <path 
                            d="M 0,10 Q 30,45 80,50 T 200,55" 
                            fill="none" 
                            stroke="#666" 
                            strokeWidth="2" 
                            strokeDasharray="4 4"
                          />
                          {/* Guhan Edits Retention Curve */}
                          <path 
                            d="M 0,8 Q 30,12 80,18 T 160,22 T 200,28" 
                            fill="none" 
                            stroke="#00F0FF" 
                            strokeWidth="3.5"
                          />
                        </svg>
                      </div>

                      <div className="flex justify-between text-[9px] text-gray-500 mt-2">
                        <span>0s (Hook)</span>
                        <span>15s (Middle)</span>
                        <span>30s (Call to Action)</span>
                      </div>
                    </div>

                    <div className="space-y-1.5 text-xs font-mono text-gray-300 bg-white/5 p-3 rounded-xl border border-white/10">
                      <div className="text-[#00F0FF] font-bold">VIRAL PC FORMULA:</div>
                      <div>• 0.3s Snap Zooms on key keywords</div>
                      <div>• High-contrast yellow/white kinetic captions</div>
                      <div>• Subtle sub-bass impact every 2.4s</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SIMULATION 4: AFTER EFFECTS */}
            {selectedApp === 'aftereffects' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#D175FF]" />
                    <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                      After Effects 3D VFX & Motion Engine
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-[#D175FF] bg-[#D175FF]/10 px-2 py-0.5 rounded">
                    Hardware GPU Ray-Tracing
                  </span>
                </div>

                <div className="bg-black/80 rounded-xl p-4 border border-white/15 space-y-3 font-mono">
                  <div className="flex justify-between items-center text-xs text-gray-300">
                    <span>3D CAMERA TRACKER:</span>
                    <span className="text-emerald-400">Solved • 1,840 Track Points</span>
                  </div>

                  <div className="relative aspect-video rounded-lg overflow-hidden border border-purple-500/30">
                    <img 
                      src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80" 
                      alt="VFX preview" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-purple-950/30 mix-blend-color flex items-center justify-center">
                      <div className="border border-cyan-400 px-4 py-2 font-mono text-cyan-300 text-xs backdrop-blur-sm rounded">
                        TARGET: [X: 192.4, Y: 840.1, Z: 512.0]
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-400">
                    <div className="bg-white/5 p-2 rounded">Mocha Pro Planar Solve: 99.8%</div>
                    <div className="bg-white/5 p-2 rounded">Optical Flow Retiming: Active</div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
