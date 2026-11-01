import React from 'react';
import { clientMetrics, agentWorkflowSteps } from '../data/portfolioData';
import { soundFx } from '../utils/sound';
import { TrendingUp, Users, Film, Clock, CheckCircle2, Quote } from 'lucide-react';

export default function WorkflowSection() {
  const testimonials = [
    {
      name: 'Marcus Vance',
      role: 'Content Creator (1.4M Subs)',
      quote: "Guhan completely transformed our channel's retention. Our average watch time jumped from 41% to 68% after switching to his Premiere + CapCut PC hybrid pacing. Unbelievable eye for detail.",
      stats: '+2.8M Views on 1st Collab'
    },
    {
      name: 'Elena Rostova',
      role: 'Creative Director at Vexel Media',
      quote: "His DaVinci Resolve color grading is Hollywood caliber. We handed him flat Sony raw files and he delivered a filmic Kodak print look that stunned our commercial client.",
      stats: 'Global Brand Campaign'
    },
    {
      name: 'Kenji Sato',
      role: 'TikTok & Short-Form Strategist',
      quote: "If you need short-form edits that actually hook the viewer in the first 2 seconds, Guhan is the only editor you should call. Turnaround was under 24 hours.",
      stats: '94% Hook Retention'
    }
  ];

  return (
    <section className="w-full bg-[#08080A] py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Top: Key Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {clientMetrics.map((metric, idx) => (
            <div 
              key={idx}
              onMouseEnter={() => soundFx.tick()}
              className="bg-[#0E0F14] border border-white/10 hover:border-[#FF5100]/50 p-6 rounded-2xl transition duration-300 flex flex-col justify-between"
            >
              <div className="font-unbounded font-black text-3xl sm:text-4xl lg:text-5xl text-white mb-2">
                <span className="text-[#FF5100]">{metric.value.split('+')[0]}</span>
                {metric.value.includes('+') && '+'}
                {metric.value.includes('%') && '%'}
              </div>
              <div>
                <div className="font-unbounded font-bold text-xs sm:text-sm text-gray-200">
                  {metric.label}
                </div>
                <div className="font-mono text-[11px] text-gray-500 mt-0.5">
                  {metric.detail}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Middle: 4-Step Production Pipeline */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#FF5100]" />
                <span className="font-mono text-xs text-[#FF5100] tracking-widest uppercase font-semibold">
                  PRODUCTION METHODOLOGY
                </span>
              </div>
              <h2 className="font-unbounded font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
                THE 4-STEP <span className="text-[#FF5100]">MASTER PIPELINE</span>
              </h2>
            </div>
            <p className="font-space text-sm text-gray-400 max-w-md">
              Every cut is calculated for emotion, rhythm, retention, and visual perfection.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {agentWorkflowSteps.map((step, idx) => (
              <div 
                key={idx}
                onMouseEnter={() => soundFx.tick()}
                className="bg-[#0D0E13] p-6 rounded-2xl border border-white/10 hover:border-[#FF5100] transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="font-unbounded font-black text-4xl text-white/10 group-hover:text-[#FF5100]/30 transition-colors mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-unbounded font-bold text-base text-white mb-1">
                    {step.title}
                  </h3>
                  <div className="font-mono text-xs text-[#FF5100] font-semibold mb-3">
                    {step.software}
                  </div>
                  <p className="font-space text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-white/5 flex items-center gap-2 text-emerald-400 font-mono text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Pipeline Stage</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom: Client Testimonials */}
        <div>
          <div className="text-center mb-10">
            <h3 className="font-unbounded font-bold text-xl sm:text-2xl text-white uppercase">
              CREATOR & BRAND <span className="text-[#FF5100]">TESTIMONIALS</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div 
                key={i}
                className="bg-[#0C0D11] p-6 rounded-2xl border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-6 h-6 text-[#FF5100] mb-3 opacity-60" />
                  <p className="font-space text-sm text-gray-300 leading-relaxed mb-6 italic">
                    "{t.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <div className="font-unbounded font-bold text-xs text-white">{t.name}</div>
                    <div className="font-mono text-[11px] text-gray-500">{t.role}</div>
                  </div>
                  <span className="font-mono text-[10px] bg-[#FF5100]/20 text-[#FF5100] px-2 py-0.5 rounded font-bold">
                    {t.stats}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
