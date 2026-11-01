import React, { useState, useEffect, useRef } from 'react';
import { soundFx } from '../utils/sound';
import { 
  Bot, 
  Send, 
  Sparkles, 
  Terminal, 
  Calculator, 
  CheckCircle2, 
  Cpu, 
  Zap, 
  Layers, 
  MessageSquare,
  ArrowRight,
  RefreshCw
} from 'lucide-react';

export default function AIAgentSection({ onBookWithPlan }) {
  const [activeTab, setActiveTab] = useState('chat'); // 'chat' | 'estimator' | 'telemetry'
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: "Greetings. I am Guhan's AI Edit Director. Whether you need viral retention for TikTok/Reels in CapCut PC, narrative storytelling in Premiere Pro, or Hollywood-grade ACES color grading in DaVinci Resolve, I can help plan your project, estimate turnaround, or answer technical questions. What are you looking to create?"
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatBottomRef = useRef(null);

  // Estimator State
  const [format, setFormat] = useState('shorts'); // 'shorts' | 'youtube' | 'commercial' | 'gaming'
  const [duration, setDuration] = useState('under60s');
  const [colorGrade, setColorGrade] = useState('davinci_film');
  const [turnaround, setTurnaround] = useState('rush');

  const scrollToBottom = () => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const quickPrompts = [
    "Recommend an edit style for a high-retention YouTube video",
    "How does Guhan use DaVinci Resolve vs Premiere Pro?",
    "What is the workflow for viral TikTok/Reels in CapCut PC?",
    "Can you do a rush delivery within 24 hours?"
  ];

  const handleSendMessage = (textToSend) => {
    const query = textToSend || inputMessage;
    if (!query.trim()) return;

    soundFx.agentChirp();
    const newMessages = [...messages, { role: 'user', text: query }];
    setMessages(newMessages);
    setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      let reply = "";
      const lower = query.toLowerCase();

      if (lower.includes('davinci') || lower.includes('color') || lower.includes('resolve')) {
        reply = "Guhan runs a full 32-bit float ACEScct color science pipeline in DaVinci Resolve Studio 19. He balances raw exposure, applies custom skin tone qualifiers, and finishes with Kodak 2383 / Fuji 3513 print film emulations and organic 35mm grain. Your footage will look like a multi-million-dollar cinematic release.";
      } else if (lower.includes('capcut') || lower.includes('tiktok') || lower.includes('reel') || lower.includes('short')) {
        reply = "For viral short-form content (TikTok, IG Reels, YT Shorts), Guhan leverages CapCut PC Pro combined with custom Premiere macros. The formula centers around a 1.2s hook, dynamic pop-up kinetic typography, 0.3s micro-zooms, and bass-synchronized sound hits. Guhan's reels average over 94% retention in the first 5 seconds.";
      } else if (lower.includes('premiere') || lower.includes('workflow') || lower.includes('youtube')) {
        reply = "For YouTube longform and documentaries, Adobe Premiere Pro 2025 is the master NLE. Guhan uses multi-cam synchronous cutting, J/L cut audio pacing to eliminate awkward pauses, dynamic audio ducking at -14 LUFS, and seamless dynamic link to After Effects for custom 3D motion graphics.";
      } else if (lower.includes('rush') || lower.includes('24') || lower.includes('turnaround') || lower.includes('time')) {
        reply = "Yes! Guhan offers an Express 24-48 hour turnaround pipeline for priority clients. Once footage is uploaded via Google Drive or Frame.io, the rough cut is delivered for review within 24 hours, followed by same-day polish.";
      } else if (lower.includes('price') || lower.includes('cost') || lower.includes('quote')) {
        reply = "Pricing is customized based on project scope, footage volume, and motion graphic complexity. Use the 'Project Estimator' tab above to configure your requirements and get an instant breakdown!";
      } else {
        reply = `Understood regarding "${query}". Guhan's editing studio combines Hollywood cinematic color grading (DaVinci), high-retention viral pacing (CapCut PC), and narrative structure (Premiere Pro). Would you like to check out the Project Estimator or review our delivery timeline?`;
      }

      setMessages(prev => [...prev, { role: 'assistant', text: reply }]);
      setIsTyping(false);
      soundFx.tick();
    }, 900);
  };

  // Estimator Calculations
  const getEstimate = () => {
    let baseDays = 2;
    let softwareStack = [];
    let retentionScore = "90%+";

    if (format === 'shorts') {
      baseDays = turnaround === 'rush' ? 1 : 2;
      softwareStack = ['CapCut PC Pro', 'Premiere Pro', 'DaVinci Resolve'];
      retentionScore = '94.8% Hook';
    } else if (format === 'youtube') {
      baseDays = turnaround === 'rush' ? 2 : 4;
      softwareStack = ['Adobe Premiere Pro', 'DaVinci Resolve', 'After Effects'];
      retentionScore = '62% Avg View Duration';
    } else if (format === 'commercial') {
      baseDays = turnaround === 'rush' ? 3 : 5;
      softwareStack = ['DaVinci Resolve Studio (ACES)', 'After Effects 3D', 'Fairlight 7.1'];
      retentionScore = 'Hollywood Master Quality';
    } else {
      baseDays = turnaround === 'rush' ? 1 : 3;
      softwareStack = ['CapCut PC', 'After Effects Motion', 'Sound FX Master'];
      retentionScore = 'Beat-Synced Optical Flow';
    }

    return {
      turnaroundText: `${baseDays} ${baseDays === 1 ? 'Business Day' : 'Business Days'}`,
      softwareStack,
      retentionScore,
      deliverables: [
        'Master 4K DCI / 1080x1920 60FPS Render',
        'Full Sound Design & Audio Normalization',
        'DaVinci Film Print Color Grade',
        '2 Free Revision Rounds'
      ]
    };
  };

  const estimate = getEstimate();

  const handleApplyEstimate = () => {
    soundFx.bassBoom();
    onBookWithPlan({
      format,
      duration,
      colorGrade,
      turnaround,
      estimatedTime: estimate.turnaroundText
    });
  };

  return (
    <section id="ai-agent" className="w-full bg-[#07080B] py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#FF5100]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#FF5100]/10 border border-[#FF5100]/30 px-3 py-1 rounded-full text-xs font-mono text-[#FF5100] mb-3">
            <Bot className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
            <span>AUTONOMOUS WORKFLOW AGENT // v2.6 ACTIVE</span>
          </div>
          <h2 className="font-unbounded font-black text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight">
            GUHAN <span className="text-[#FF5100]">AI AGENT</span>
          </h2>
          <p className="font-space text-sm sm:text-base text-gray-400 mt-2">
            Instant project consultations, smart style matching, and pipeline estimations powered by Guhan's custom video editing agent.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-[#101117] p-1.5 rounded-2xl border border-white/15 flex items-center gap-2 font-mono text-xs">
            <button
              onClick={() => {
                soundFx.tick();
                setActiveTab('chat');
              }}
              className={`px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 transition ${
                activeTab === 'chat' 
                  ? 'bg-[#FF5100] text-black shadow-[0_0_15px_rgba(255,81,0,0.4)]' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>Interactive Chat</span>
            </button>

            <button
              onClick={() => {
                soundFx.tick();
                setActiveTab('estimator');
              }}
              className={`px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 transition ${
                activeTab === 'estimator' 
                  ? 'bg-[#FF5100] text-black shadow-[0_0_15px_rgba(255,81,0,0.4)]' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span>Project Estimator</span>
            </button>

            <button
              onClick={() => {
                soundFx.tick();
                setActiveTab('telemetry');
              }}
              className={`px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 transition ${
                activeTab === 'telemetry' 
                  ? 'bg-[#FF5100] text-black shadow-[0_0_15px_rgba(255,81,0,0.4)]' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Terminal className="w-4 h-4" />
              <span>Telemetry Logs</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: INTERACTIVE AGENT CHAT */}
        {/* ========================================================================= */}
        {activeTab === 'chat' && (
          <div className="bg-[#0E0F15] rounded-3xl border border-white/15 shadow-2xl overflow-hidden flex flex-col h-[560px]">
            {/* Terminal bar */}
            <div className="bg-black/60 px-5 py-3 border-b border-white/10 flex items-center justify-between font-mono text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-white font-bold">GUHAN_DIRECTOR_AGENT.sh</span>
                <span className="text-gray-500">| Response time: ~0.8s</span>
              </div>
              <span className="text-[#FF5100]">MODEL: GUHAN-NEURAL-EDIT-V2</span>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-5 overflow-y-auto space-y-4 font-space text-sm">
              {messages.map((msg, i) => (
                <div 
                  key={i} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[85%] sm:max-w-[75%] p-4 rounded-2xl ${
                      msg.role === 'user'
                        ? 'bg-[#FF5100] text-black font-semibold rounded-br-none shadow-lg'
                        : 'bg-[#151720] text-gray-200 border border-white/10 rounded-bl-none shadow'
                    }`}
                  >
                    {msg.role === 'assistant' && (
                      <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#FF5100] font-bold mb-1.5 uppercase">
                        <Bot className="w-3 h-3" />
                        <span>Guhan AI Agent</span>
                      </div>
                    )}
                    <p className="leading-relaxed whitespace-pre-line">{msg.text}</p>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-[#151720] border border-white/10 p-4 rounded-2xl rounded-bl-none flex items-center gap-2 text-xs font-mono text-gray-400">
                    <RefreshCw className="w-3.5 h-3.5 text-[#FF5100] animate-spin" />
                    <span>Agent analyzing editing requirements...</span>
                  </div>
                </div>
              )}
              <div ref={chatBottomRef} />
            </div>

            {/* Quick Prompt Chips */}
            <div className="px-5 py-2 bg-black/40 border-t border-white/5 flex items-center gap-2 overflow-x-auto no-scrollbar">
              <span className="font-mono text-[10px] text-gray-500 uppercase shrink-0">SUGGESTIONS:</span>
              {quickPrompts.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSendMessage(prompt)}
                  className="shrink-0 px-3 py-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs font-space text-gray-300 hover:text-white transition"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-4 bg-black/70 border-t border-white/10 flex items-center gap-3"
            >
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask about DaVinci grading, CapCut PC viral reels, turnaround times, or quotes..."
                className="flex-1 bg-[#12131A] border border-white/15 focus:border-[#FF5100] focus:outline-none rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 font-space transition"
              />
              <button
                type="submit"
                className="px-5 py-3 bg-[#FF5100] hover:bg-white text-black font-unbounded font-black text-xs uppercase tracking-wider rounded-xl transition flex items-center gap-2 shrink-0 shadow-lg"
              >
                <span>Send</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: INTERACTIVE PROJECT ESTIMATOR */}
        {/* ========================================================================= */}
        {activeTab === 'estimator' && (
          <div className="bg-[#0E0F15] rounded-3xl border border-white/15 shadow-2xl p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Column: Form Controls */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <label className="block font-mono text-xs text-gray-400 uppercase tracking-wider mb-2">
                    01. VIDEO CONTENT FORMAT:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: 'shorts', label: 'Shorts & TikToks (9:16)', note: 'CapCut PC + Hooks' },
                      { id: 'youtube', label: 'YouTube Longform', note: 'Premiere Pro Master' },
                      { id: 'commercial', label: 'Commercial / Brand Film', note: 'DaVinci Hollywood' },
                      { id: 'gaming', label: 'Gaming & AMV Montage', note: 'Beat-Sync Velocity' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          soundFx.tick();
                          setFormat(item.id);
                        }}
                        className={`p-3 rounded-xl border text-left transition ${
                          format === item.id
                            ? 'bg-[#FF5100]/20 border-[#FF5100] text-white'
                            : 'bg-black/50 border-white/10 text-gray-400 hover:border-white/20'
                        }`}
                      >
                        <div className="font-unbounded font-bold text-xs text-white">{item.label}</div>
                        <div className="font-mono text-[10px] text-[#FF5100] mt-0.5">{item.note}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs text-gray-400 uppercase tracking-wider mb-2">
                    02. TARGET VIDEO RUNTIME:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'under60s', label: '< 60 Seconds' },
                      { id: '3to5min', label: '3 to 5 Minutes' },
                      { id: '10to20min', label: '10 to 20+ Minutes' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          soundFx.tick();
                          setDuration(item.id);
                        }}
                        className={`py-2.5 px-3 rounded-xl border text-center font-mono text-xs transition ${
                          duration === item.id
                            ? 'bg-[#FF5100] text-black font-bold border-[#FF5100]'
                            : 'bg-black/50 border-white/10 text-gray-300 hover:border-white/20'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs text-gray-400 uppercase tracking-wider mb-2">
                    03. COLOR GRADING DEPTH:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: 'davinci_film', label: 'DaVinci Film Print (ACEScct)', desc: 'Kodak 2383 + Halation' },
                      { id: 'clean_rec709', label: 'Commercial Clean (Rec.709)', desc: 'Punchy High Contrast' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          soundFx.tick();
                          setColorGrade(item.id);
                        }}
                        className={`p-3 rounded-xl border text-left font-mono text-xs transition ${
                          colorGrade === item.id
                            ? 'bg-[#FF5100]/20 border-[#FF5100] text-white'
                            : 'bg-black/50 border-white/10 text-gray-400'
                        }`}
                      >
                        <div className="font-bold text-white">{item.label}</div>
                        <div className="text-[10px] text-gray-400 mt-0.5">{item.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs text-gray-400 uppercase tracking-wider mb-2">
                    04. TURNAROUND SPEED:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: 'rush', label: '⚡ Priority Rush (24-48h)', note: 'Fast-track pipeline' },
                      { id: 'standard', label: 'Standard Delivery (3-5 Days)', note: 'Steady delivery' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          soundFx.tick();
                          setTurnaround(item.id);
                        }}
                        className={`p-3 rounded-xl border text-left font-mono text-xs transition ${
                          turnaround === item.id
                            ? 'bg-[#FF5100] text-black font-bold border-[#FF5100]'
                            : 'bg-black/50 border-white/10 text-gray-300'
                        }`}
                      >
                        <div>{item.label}</div>
                        <div className={`text-[10px] ${turnaround === item.id ? 'text-black/80' : 'text-gray-500'}`}>
                          {item.note}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: AI Estimate Summary Card */}
              <div className="lg:col-span-5 bg-black/80 rounded-2xl border border-white/15 p-6 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 font-mono text-xs">
                    <span className="text-[#FF5100] font-bold">AI PROPOSAL GENERATOR</span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Pipeline Matched
                    </span>
                  </div>

                  <div className="mt-4 space-y-4">
                    <div>
                      <div className="text-[10px] font-mono text-gray-400 uppercase">Estimated Turnaround:</div>
                      <div className="font-unbounded font-black text-2xl text-white">
                        {estimate.turnaroundText}
                      </div>
                    </div>

                    <div>
                      <div className="text-[10px] font-mono text-gray-400 uppercase mb-1.5">Recommended Software Pipeline:</div>
                      <div className="flex flex-wrap gap-1.5">
                        {estimate.softwareStack.map((s, i) => (
                          <span key={i} className="px-2.5 py-1 bg-white/10 rounded-md font-mono text-xs text-white">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="text-[10px] font-mono text-gray-400 uppercase mb-1.5">Expected Audience Retention:</div>
                      <div className="font-mono text-sm text-[#00F0FF] font-bold">
                        {estimate.retentionScore}
                      </div>
                    </div>

                    <div>
                      <div className="text-[10px] font-mono text-gray-400 uppercase mb-2">Package Deliverables:</div>
                      <div className="space-y-1.5">
                        {estimate.deliverables.map((del, i) => (
                          <div key={i} className="flex items-center gap-2 font-space text-xs text-gray-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5100]" />
                            <span>{del}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleApplyEstimate}
                  className="w-full py-4 bg-[#FF5100] hover:bg-white text-black font-unbounded font-black text-xs uppercase tracking-wider rounded-xl transition shadow-xl flex items-center justify-center gap-2"
                >
                  <span>Book This Project Pipeline</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: TELEMETRY & LIVE RENDER PIPELINE LOGS */}
        {/* ========================================================================= */}
        {activeTab === 'telemetry' && (
          <div className="bg-black rounded-3xl border border-white/20 p-6 font-mono text-xs text-gray-300 shadow-2xl space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-gray-400">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span className="text-white font-bold">LIVE AGENT TELEMETRY</span>
              </div>
              <span className="text-emerald-400">STATUS: HEALTHY // ALL RUNTIMES ONLINE</span>
            </div>

            <div className="space-y-2 text-[11px] leading-relaxed">
              <div className="text-gray-500">[2026-11-01 13:26:41] [SYS] Initializing Guhan Edits Post-Production Engine...</div>
              <div className="text-emerald-400">[2026-11-01 13:26:42] [DAVINCI] 32-bit Float Color Space: ACEScct / AP1 Gamut loaded.</div>
              <div className="text-blue-400">[2026-11-01 13:26:43] [PREMIERE] Dynamic Link bridge established with After Effects 2025.</div>
              <div className="text-cyan-400">[2026-11-01 13:26:44] [CAPCUT_PC] Kinetic SRT caption subtitle generator indexed.</div>
              <div className="text-yellow-400">[2026-11-01 13:26:45] [AUDIO] Fairlight 5.1 Surround & Dialogue de-noise filter initialized (-14 LUFS).</div>
              <div className="text-[#FF5100]">[2026-11-01 13:26:46] [CACHE] Fast NVMe PCIe Gen 5 render scratch disk mounted at 7,200 MB/s.</div>
              <div className="text-white">[READY] Agent awaiting user brief. Available for bookings and custom edits.</div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
