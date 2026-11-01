import React from 'react';

export default function Marquee() {
  const items = [
    'DAVINCI RESOLVE STUDIO 19',
    'ADOBE PREMIERE PRO',
    'CAPCUT PC PRO',
    '4K 60FPS WORKFLOW',
    'ACEScct COLOR SCIENCE',
    'KODAK 2383 FILM GRAIN',
    'VIRAL RETENTION HOOKS',
    'FAIRLIGHT 7.1 AUDIO',
    'AFTER EFFECTS MOTION VFX',
    'HIGH IMPACT SOUND DESIGN'
  ];

  return (
    <div className="relative w-full bg-black border-y border-[#FF5100]/30 py-3 overflow-hidden select-none">
      <div className="flex w-max animate-marquee">
        {[...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-4 mx-4">
            <span className="font-unbounded font-extrabold text-xs sm:text-sm tracking-wider text-white uppercase whitespace-nowrap">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5100]" />
          </div>
        ))}
      </div>
    </div>
  );
}
