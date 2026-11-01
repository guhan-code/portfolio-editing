import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { soundFx } from '../utils/sound';
import { Send, CheckCircle2, MessageSquare, Mail, ArrowRight } from 'lucide-react';

export default function ContactSection({ prefilledPlan }) {
  const [formData, setFormData] = useState({
    name: '',
    emailOrDiscord: '',
    platform: prefilledPlan?.format || 'shorts',
    software: 'davinci_premiere_capcut',
    turnaround: prefilledPlan?.turnaround || 'rush',
    budget: '$500 - $1,500',
    brief: prefilledPlan ? `Configured with Guhan AI Agent: Format=${prefilledPlan.format}, Duration=${prefilledPlan.duration}, Turnaround=${prefilledPlan.turnaround}` : ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    soundFx.bassBoom();

    // Trigger confetti celebration
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF5100', '#FFFFFF', '#00F0FF', '#FFB703']
      });
    } catch {
      // Ignore if confetti fails
    }

    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="w-full bg-[#050608] py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#FF5100]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FF5100]/10 border border-[#FF5100]/30 px-3 py-1 rounded-full text-xs font-mono text-[#FF5100] mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>COMMISSIONS OPEN FOR Q1 2026</span>
          </div>
          <h2 className="font-unbounded font-black text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight">
            BOOK AN <span className="text-[#FF5100]">EDIT</span>
          </h2>
          <p className="font-space text-sm sm:text-base text-gray-400 mt-2">
            Let's build your next viral YouTube video, commercial film, or high-retention reel.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Links & Guarantees */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0C0D12] p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
              <div>
                <h3 className="font-unbounded font-bold text-lg text-white mb-2">
                  Direct Line & Socials
                </h3>
                <p className="font-space text-xs text-gray-400">
                  Prefer chatting directly? Message Guhan on Discord or email for instant quotes.
                </p>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <a 
                  href="mailto:contact@guhanedits.com" 
                  onClick={() => soundFx.tick()}
                  className="flex items-center justify-between p-3.5 bg-black/50 hover:bg-white/10 rounded-xl border border-white/10 text-white transition group"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#FF5100]" />
                    <span>contact@guhanedits.com</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition" />
                </a>

                <div 
                  onClick={() => soundFx.tick()}
                  className="flex items-center justify-between p-3.5 bg-black/50 hover:bg-white/10 rounded-xl border border-white/10 text-white transition cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-[#5865F2] fill-current" viewBox="0 0 24 24">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                    </svg>
                    <span>Discord: @guhan_edits</span>
                  </div>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-bold">Online</span>
                </div>

                <div 
                  onClick={() => soundFx.tick()}
                  className="flex items-center justify-between p-3.5 bg-black/50 hover:bg-white/10 rounded-xl border border-white/10 text-white transition cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                    <span>X / Twitter: @GuhanEdits</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition" />
                </div>
              </div>

              {/* Guarantees */}
              <div className="pt-4 border-t border-white/10 space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-space text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>24-48h Rush Turnaround Available</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-space text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Unlimited Minor Revisions until 100% satisfied</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-space text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Full ProRes 422HQ & 4K 60FPS Masters Included</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Booking Form */}
          <div className="lg:col-span-7 bg-[#0C0D12] p-6 sm:p-8 rounded-3xl border border-white/15 shadow-2xl">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-unbounded font-black text-2xl text-white">
                  INQUIRY RECEIVED!
                </h3>
                <p className="font-space text-sm text-gray-300 max-w-md mx-auto">
                  Guhan or the AI Agent will review your brief and reply with a timeline & quote within 2 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl font-mono text-xs uppercase tracking-wider transition"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-[11px] text-gray-400 uppercase tracking-wider mb-1.5">
                      Your Name / Channel
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex / TechVision"
                      className="w-full bg-[#14151C] border border-white/10 focus:border-[#FF5100] focus:outline-none rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 font-space"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] text-gray-400 uppercase tracking-wider mb-1.5">
                      Email or Discord Handle
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.emailOrDiscord}
                      onChange={(e) => setFormData({ ...formData, emailOrDiscord: e.target.value })}
                      placeholder="alex@youtube.com or alex#1234"
                      className="w-full bg-[#14151C] border border-white/10 focus:border-[#FF5100] focus:outline-none rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 font-space"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-[11px] text-gray-400 uppercase tracking-wider mb-1.5">
                      Content Format
                    </label>
                    <select
                      value={formData.platform}
                      onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                      className="w-full bg-[#14151C] border border-white/10 focus:border-[#FF5100] focus:outline-none rounded-xl px-3 py-2.5 text-xs text-white font-mono"
                    >
                      <option value="shorts">Shorts & TikToks (9:16)</option>
                      <option value="youtube">YouTube Longform Narrative</option>
                      <option value="commercial">Commercial / Brand Film</option>
                      <option value="gaming">Gaming & AMV Montage</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] text-gray-400 uppercase tracking-wider mb-1.5">
                      Turnaround
                    </label>
                    <select
                      value={formData.turnaround}
                      onChange={(e) => setFormData({ ...formData, turnaround: e.target.value })}
                      className="w-full bg-[#14151C] border border-white/10 focus:border-[#FF5100] focus:outline-none rounded-xl px-3 py-2.5 text-xs text-white font-mono"
                    >
                      <option value="rush">⚡ Priority Rush (24-48 Hours)</option>
                      <option value="standard">Standard Delivery (3-5 Days)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[11px] text-gray-400 uppercase tracking-wider mb-1.5">
                    Project Details & Video Goal
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.brief}
                    onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                    placeholder="Tell Guhan about your raw footage, inspiration links, editing style, DaVinci color grading preference, or goals..."
                    className="w-full bg-[#14151C] border border-white/10 focus:border-[#FF5100] focus:outline-none rounded-xl p-3.5 text-xs text-white placeholder-gray-500 font-space"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#FF5100] hover:bg-white text-black font-unbounded font-black text-xs uppercase tracking-wider rounded-xl transition shadow-xl flex items-center justify-center gap-2 transform active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry to Guhan</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
