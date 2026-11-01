import React, { useState, useRef } from 'react';
import { videoProjects, colorGradingComparison } from '../data/portfolioData';
import { soundFx } from '../utils/sound';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  X, 
  Sliders, 
  Eye, 
  Clock, 
  Tv, 
  Sparkles, 
  CheckCircle2,
  Film
} from 'lucide-react';

export default function VideoPortfolio() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [sliderPos, setSliderPos] = useState(50);
  const videoModalRef = useRef(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'shorts', label: 'Shorts & Reels (9:16)' },
    { id: 'youtube', label: 'YouTube Longform' },
    { id: 'cinematic', label: 'Cinematic & Commercial' },
    { id: 'gaming', label: 'Gaming & AMVs' },
  ];

  const filteredVideos = activeCategory === 'all'
    ? videoProjects
    : videoProjects.filter(v => v.categoryKey === activeCategory);

  const handleOpenModal = (video) => {
    soundFx.bassBoom();
    setSelectedVideo(video);
    setIsPlaying(true);
  };

  const handleCloseModal = () => {
    soundFx.tick();
    setSelectedVideo(null);
  };

  const handleSpeedChange = (speed) => {
    soundFx.tick();
    setPlaybackSpeed(speed);
    if (videoModalRef.current) {
      videoModalRef.current.playbackRate = speed;
    }
  };

  return (
    <section id="videos" className="w-full bg-[#0B0C10] py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#FF5100]" />
              <span className="font-mono text-xs text-[#FF5100] tracking-widest uppercase font-semibold">
                CURATED SHOWCASE
              </span>
            </div>
            <h2 className="font-unbounded font-black text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight">
              VIDEOS <span className="text-[#FF5100]">I EDIT</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  soundFx.slice();
                  setActiveCategory(cat.id);
                }}
                onMouseEnter={() => soundFx.tick()}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase transition-all duration-200 border ${
                  activeCategory === cat.id
                    ? 'bg-[#FF5100] text-black border-[#FF5100] shadow-[0_0_15px_rgba(255,81,0,0.4)]'
                    : 'bg-white/5 text-gray-400 hover:text-white border-white/10 hover:border-white/20'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => handleOpenModal(video)}
              onMouseEnter={() => soundFx.tick()}
              className="group relative bg-[#111218] rounded-2xl border border-white/10 hover:border-[#FF5100]/60 overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.8)] flex flex-col justify-between"
            >
              {/* Media Thumbnail Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-black">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                />

                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111218] via-transparent to-black/30" />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                  <div className="w-14 h-14 rounded-full bg-[#FF5100] text-black flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-[0_0_20px_#FF5100]">
                    <Play className="w-6 h-6 fill-black translate-x-0.5" />
                  </div>
                </div>

                {/* Duration & Views Badges */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-white/90">
                  <span className="bg-black/80 px-2 py-0.5 rounded border border-white/20 backdrop-blur-md">
                    {video.duration}
                  </span>
                  <span className="bg-[#FF5100] text-black font-bold px-2 py-0.5 rounded shadow">
                    {video.views} Views
                  </span>
                </div>

                {/* Aspect Badge (e.g. 9:16 Shorts) */}
                {video.aspect === '9:16' && (
                  <div className="absolute top-3 left-3 bg-cyan-400 text-black font-unbounded text-[9px] font-black px-2 py-0.5 rounded uppercase">
                    9:16 VERTICAL
                  </div>
                )}
              </div>

              {/* Card Meta Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-mono text-gray-400 mb-1 flex items-center justify-between">
                    <span>{video.client}</span>
                    <span className="text-[#FF5100] font-semibold">{video.resolution}</span>
                  </div>

                  <h3 className="font-unbounded font-bold text-base sm:text-lg text-white group-hover:text-[#FF5100] transition-colors leading-snug mb-2">
                    {video.title}
                  </h3>

                  <p className="font-space text-xs text-gray-400 line-clamp-2 mb-4">
                    {video.description}
                  </p>
                </div>

                {/* Software Badges */}
                <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-white/10">
                  {video.softwareBadges.map((badge, idx) => (
                    <span 
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-300"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* DAVINCI RESOLVE BEFORE & AFTER COLOR GRADING COMPARISON SLIDER */}
        {/* ========================================================================= */}
        <div className="bg-[#101117] rounded-3xl border border-white/15 p-6 sm:p-10 relative overflow-hidden shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 bg-[#FF5100] text-black font-unbounded text-[10px] font-black rounded uppercase">
                  DAVINCI RESOLVE COLORIST LAB
                </span>
                <span className="font-mono text-xs text-gray-400">ACEScct Film Print Workflow</span>
              </div>
              <h3 className="font-unbounded font-black text-2xl sm:text-3xl text-white">
                BEFORE & AFTER <span className="text-[#FF5100]">COLOR GRADE</span>
              </h3>
              <p className="font-space text-sm text-gray-400 max-w-xl mt-1">
                {colorGradingComparison.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-3 font-mono text-xs text-gray-300">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-gray-500" />
                <span>Flat Log</span>
              </span>
              <span>↔</span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5100]" />
                <span className="text-[#FF5100] font-bold">Graded Rec.709</span>
              </span>
            </div>
          </div>

          {/* Interactive Comparison Slider */}
          <div 
            className="relative w-full aspect-video sm:h-[460px] rounded-2xl overflow-hidden border border-white/20 select-none group cursor-ew-resize shadow-2xl"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const pos = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
              setSliderPos(pos);
            }}
            onTouchMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const touch = e.touches[0];
              const pos = Math.max(0, Math.min(100, ((touch.clientX - rect.left) / rect.width) * 100));
              setSliderPos(pos);
            }}
          >
            {/* Graded Layer (Full Base Image) */}
            <img 
              src={colorGradingComparison.gradedImage}
              alt="Graded Result"
              className="absolute inset-0 w-full h-full object-cover filter contrast-125 saturate-130"
            />
            <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 font-mono text-xs font-bold text-[#FF5100]">
              {colorGradingComparison.gradedLabel}
            </div>

            {/* Flat Raw S-Log3 Layer (Clipped by slider position) */}
            <div 
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <img 
                src={colorGradingComparison.rawImage}
                alt="Raw S-Log3"
                className="absolute inset-0 w-full h-full object-cover filter brightness-110 contrast-60 saturate-30"
                style={{ width: '100%', minWidth: '100%' }}
              />
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 font-mono text-xs font-bold text-gray-300">
                {colorGradingComparison.rawLabel}
              </div>
            </div>

            {/* Draggable Divider Handle Line */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(255,81,0,0.8)] z-20 flex items-center justify-center pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="w-8 h-8 rounded-full bg-white text-black font-black text-xs flex items-center justify-center shadow-2xl border-2 border-[#FF5100]">
                ↔
              </div>
            </div>
          </div>

          {/* Colorist Pipeline Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
            {colorGradingComparison.pipeline.map((step, idx) => (
              <div key={idx} className="bg-black/60 p-3 rounded-xl border border-white/10 font-mono text-[11px] text-gray-300 flex items-start gap-2">
                <span className="text-[#FF5100] font-bold">0{idx + 1}.</span>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* FULL VIDEO THEATER MODAL */}
      {/* ========================================================================= */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div className="relative w-full max-w-5xl bg-[#0D0E13] rounded-3xl border border-white/20 overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-black/40">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#FF5100] animate-pulse" />
                <div>
                  <h4 className="font-unbounded font-black text-sm sm:text-base text-white">
                    {selectedVideo.title}
                  </h4>
                  <div className="font-mono text-xs text-gray-400">
                    {selectedVideo.client} • {selectedVideo.resolution}
                  </div>
                </div>
              </div>

              <button
                onClick={handleCloseModal}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body: Video Player + Breakdown Side */}
            <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 overflow-y-auto">
              
              {/* Video Player Column */}
              <div className="lg:col-span-8 bg-black flex flex-col justify-center relative">
                <video
                  ref={videoModalRef}
                  src={selectedVideo.videoUrl}
                  poster={selectedVideo.thumbnail}
                  controls={false}
                  autoPlay
                  loop
                  muted={isMuted}
                  className="w-full max-h-[480px] object-contain mx-auto"
                />

                {/* Custom Video Control Overlay */}
                <div className="p-3 bg-black/80 border-t border-white/10 flex items-center justify-between text-white font-mono text-xs">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => {
                        soundFx.tick();
                        if (videoModalRef.current) {
                          if (isPlaying) videoModalRef.current.pause();
                          else videoModalRef.current.play();
                          setIsPlaying(!isPlaying);
                        }
                      }}
                      className="p-1.5 rounded-lg bg-white/10 hover:bg-[#FF5100] hover:text-black transition"
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>

                    <button
                      onClick={() => {
                        soundFx.tick();
                        setIsMuted(!isMuted);
                      }}
                      className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
                    </button>

                    <span className="text-gray-400 text-[11px]">{selectedVideo.duration}</span>
                  </div>

                  {/* Playback speed buttons */}
                  <div className="flex items-center gap-1.5">
                    {[1, 1.25, 1.5, 2].map((spd) => (
                      <button
                        key={spd}
                        onClick={() => handleSpeedChange(spd)}
                        className={`px-2 py-0.5 rounded text-[10px] font-bold transition ${
                          playbackSpeed === spd 
                            ? 'bg-[#FF5100] text-black' 
                            : 'bg-white/5 hover:bg-white/10 text-gray-400'
                        }`}
                      >
                        {spd}x
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Specs Sidebar */}
              <div className="lg:col-span-4 p-5 sm:p-6 bg-[#0E0F14] border-l border-white/10 flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-xs font-mono text-[#FF5100] uppercase tracking-wider mb-2 font-bold">
                    EDIT ARCHITECTURE
                  </div>

                  <p className="font-space text-xs sm:text-sm text-gray-300 mb-4 leading-relaxed">
                    {selectedVideo.description}
                  </p>

                  <div className="bg-black/60 p-3 rounded-xl border border-white/10 mb-4">
                    <div className="text-[10px] font-mono text-gray-400 uppercase mb-1">
                      Pacing & Retention Strategy:
                    </div>
                    <div className="font-space text-xs text-white">
                      {selectedVideo.pacingStrategy}
                    </div>
                  </div>

                  {/* Software used */}
                  <div className="mb-4">
                    <div className="text-[10px] font-mono text-gray-400 uppercase mb-2">
                      Software Pipeline:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedVideo.software.map((sw, i) => (
                        <span key={i} className="px-2.5 py-1 bg-white/10 rounded-md font-mono text-xs text-white">
                          {sw}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Color Palette */}
                  <div>
                    <div className="text-[10px] font-mono text-gray-400 uppercase mb-2">
                      Color Palette Graded:
                    </div>
                    <div className="flex items-center gap-2">
                      {selectedVideo.colorPalette.map((color, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                          <div 
                            className="w-6 h-6 rounded-md border border-white/20 shadow" 
                            style={{ backgroundColor: color }} 
                          />
                          <span className="text-[9px] font-mono text-gray-500 mt-1">{color}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom CTA */}
                <button
                  onClick={() => {
                    handleCloseModal();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-3 bg-[#FF5100] hover:bg-white text-black font-unbounded font-black text-xs uppercase tracking-wider rounded-xl transition shadow-lg"
                >
                  Book an Edit Like This
                </button>
              </div>

            </div>

          </div>
        </div>
      )}
    </section>
  );
}
