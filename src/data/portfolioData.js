export const softwareSuite = [
  {
    id: 'davinci',
    name: 'DaVinci Resolve Studio',
    version: 'v19.1 Studio',
    category: 'Color Grading & Fusion VFX',
    accentColor: '#FF5500',
    badge: 'Industry Standard Color',
    icon: 'palette',
    mastery: 98,
    tagline: 'Hollywood-grade node tree grading, ACES color management & cinematic film emulation.',
    features: [
      '32-bit Float Node Tree Color Grading & ACEScct Pipeline',
      'Kodak 2383 / Fuji 3513 Print Film Emulations & Halation',
      'Fusion 3D Particle Systems & Advanced Rotoscoping',
      'Fairlight 5.1/7.1 Surround & Dialogue Clarity Mastering'
    ],
    toolsUsed: ['Color Wheels', 'Custom PowerGrades', 'Qualifier Masks', 'Fusion Tracker'],
    highlightStats: '100% Rec.709 & HDR Precision'
  },
  {
    id: 'premiere',
    name: 'Adobe Premiere Pro',
    version: '2025 CC Master',
    category: 'Narrative Storytelling & NLE Master',
    accentColor: '#9999FF',
    badge: 'Master NLE Pipeline',
    icon: 'scissors',
    mastery: 96,
    tagline: 'Lightning-fast multi-cam sync, J/L cut pacing, dynamic audio ducking & narrative tension.',
    features: [
      'Multi-Cam 8-Angle Synchronous Live Cutting',
      'Seamless Dynamic Link to After Effects & Audition',
      'Essential Sound AI Dialogue Repair & Spectral De-noise',
      'Custom Keyboard Macro Workflow (400+ cuts/hour)'
    ],
    toolsUsed: ['Ripple / Rolling Edit', 'Audio Ducking', 'Proxy 4K/8K Pipeline', 'Adjustment Layers'],
    highlightStats: 'Sub-frame Audio Sync Accuracy'
  },
  {
    id: 'capcut',
    name: 'CapCut PC Pro',
    version: 'Desktop Ultimate',
    category: 'Viral Short-Form & Retention Optimization',
    accentColor: '#00F0FF',
    badge: 'Viral TikTok & Shorts Engine',
    icon: 'zap',
    mastery: 99,
    tagline: 'High-octane pacing, kinetic captions, viral hook sound effects & dopamine-trigger transitions.',
    features: [
      'Kinetic Dynamic Auto-Captions with Glow & Emojis',
      'Micro-Zoom & 0.3s Snap Motion Retention Enhancers',
      'Trending Sound FX & Bass Impact Synchronizer',
      'Instant 9:16 Aspect Optimization & Multi-Export'
    ],
    toolsUsed: ['Keyframe Curves', 'Speed Ramping', 'Mask Transitions', 'Motion Blur'],
    highlightStats: '+85% First-3-Seconds Retention'
  },
  {
    id: 'aftereffects',
    name: 'Adobe After Effects',
    version: '2025 Motion Suite',
    category: 'VFX & Kinetic Typography',
    accentColor: '#D175FF',
    badge: 'Visual FX & Motion Design',
    icon: 'sparkles',
    mastery: 92,
    tagline: '3D camera projection, particle explosions, motion graphics & sci-fi HUD elements.',
    features: [
      '3D Camera Tracking & Scene Element Integration',
      'Bespoke Kinetic Typography & Lower Thirds',
      'Mocha Pro Planar Tracking & Screen Replacement',
      'Glitch FX, CRT Scanlines & Chromatic Aberration'
    ],
    toolsUsed: ['Mocha Tracker', 'Expressions Rigging', 'Trapcode Particular', 'Element 3D'],
    highlightStats: 'Hyper-smooth 60FPS Render Engine'
  }
];

export const videoProjects = [
  {
    id: 'cyber-runner',
    title: 'NEO-TOKYO REVENGE: CYBER RUNNER',
    category: 'Cinematic & Commercial',
    categoryKey: 'cinematic',
    client: 'Apex Streetwear / Hype Drop',
    duration: '01:45',
    resolution: '4K DCI • 24 FPS',
    views: '2.4M',
    software: ['DaVinci Resolve', 'After Effects'],
    softwareBadges: ['DaVinci Resolve', 'After Effects'],
    colorPalette: ['#FF5500', '#00F0FF', '#0D1117', '#E6EDF3'],
    aspect: '16:9',
    thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-futuristic-city-with-flying-cars-and-neon-lights-41551-large.mp4',
    description: 'High-energy cyberpunk streetwear spot with fast match cuts, anamorphic lens flares, and heavy bass sound design.',
    pacingStrategy: 'Match cuts on beat drops every 0.8s during montage with slow-motion deceleration.',
    tags: ['Color Graded', 'Sound Design', 'VFX', 'Commercial']
  },
  {
    id: 'viral-reel-fintech',
    title: 'THE $10,000,000 ALGORITHM TRICK',
    category: 'Shorts / Reels (9:16)',
    categoryKey: 'shorts',
    client: '@FinanceGuru / TikTok & Reels',
    duration: '00:52',
    resolution: '1080x1920 • 60 FPS',
    views: '5.8M',
    software: ['CapCut PC', 'Premiere Pro'],
    softwareBadges: ['CapCut PC', 'Premiere Pro'],
    colorPalette: ['#10B981', '#FF5500', '#111827', '#F9FAFB'],
    aspect: '9:16',
    thumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-smartphone-with-a-green-screen-41533-large.mp4',
    description: 'Ultra-high retention 9:16 finance reel with kinetic pop-up text, sound impact punchlines, and 94% retention rate.',
    pacingStrategy: 'Hook in first 1.2 seconds, 3 cuts per sentence, sound effect on every graphic accent.',
    tags: ['Viral Hook', 'Kinetic Captions', '9:16 Vertical', 'Retention Hack']
  },
  {
    id: 'documentary-ai',
    title: 'HOW ARTIFICIAL INTELLIGENCE SEES YOU',
    category: 'YouTube Longform',
    categoryKey: 'youtube',
    client: 'The Future Protocol (850K Subs)',
    duration: '14:20',
    resolution: '4K UHD • 24 FPS',
    views: '1.9M',
    software: ['Premiere Pro', 'DaVinci Resolve', 'After Effects'],
    softwareBadges: ['Premiere Pro', 'DaVinci Resolve'],
    colorPalette: ['#FF5500', '#3B82F6', '#090D16', '#FFFFFF'],
    aspect: '16:9',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-tunnel-of-futuristic-neon-lights-41552-large.mp4',
    description: 'Documentary deep dive featuring bespoke 3D motion graphics, historical archival treatment, and dynamic pacing.',
    pacingStrategy: 'Pacing builds in 3-act narrative with rising audio tension into visual reveal.',
    tags: ['Storytelling', 'Archive Restoration', 'Audio Ducking', 'Longform']
  },
  {
    id: 'gaming-montage',
    title: 'PHANTOM ACE: 1000 HOURS OF VALORANT',
    category: 'Gaming & AMVs',
    categoryKey: 'gaming',
    client: 'Shroud Clan / eSports Highlights',
    duration: '02:30',
    resolution: '1440p • 120 FPS Interpolated',
    views: '3.1M',
    software: ['CapCut PC', 'After Effects', 'DaVinci Resolve'],
    softwareBadges: ['CapCut PC', 'After Effects'],
    colorPalette: ['#EF4444', '#FF5500', '#0B0F19', '#FFFFFF'],
    aspect: '16:9',
    thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-gamer-playing-with-a-rgb-keyboard-41558-large.mp4',
    description: 'Pixel-perfect beat synchronization, velocity optical flow re-timing, and heavy bass drop impact visualizers.',
    pacingStrategy: 'Velocity curve with 800% speed ramp into 15% slow-mo impact on gunshot sound.',
    tags: ['Beat Sync', 'Speed Ramp', 'RGB Glow', 'eSports']
  },
  {
    id: 'fashion-film',
    title: 'OBSIDIAN VELVET: AUTUMN / WINTER',
    category: 'Cinematic & Commercial',
    categoryKey: 'cinematic',
    client: 'Maison Noir Paris',
    duration: '01:10',
    resolution: 'Film 35mm Scan • 4K',
    views: '890K',
    software: ['DaVinci Resolve Studio'],
    softwareBadges: ['DaVinci Resolve'],
    colorPalette: ['#FF5500', '#C5A880', '#1A1817', '#EAE6E1'],
    aspect: '16:9',
    thumbnail: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-woman-posing-for-the-camera-in-a-studio-41530-large.mp4',
    description: 'Sensory cinematic editorial shot on Arri Alexa, graded in DaVinci Resolve with Kodak 5207 film emulation.',
    pacingStrategy: 'Contemplative slow pans transitioning into rhythmic drum heartbeat.',
    tags: ['Film Emulation', 'Colorist Showcase', 'Fashion', '35mm Grain']
  },
  {
    id: 'fitness-hook-reel',
    title: '3 SECRETS TO 8% BODYFAT (DO THIS TODAY)',
    category: 'Shorts / Reels (9:16)',
    categoryKey: 'shorts',
    client: '@TitanFit / Personal Brand',
    duration: '00:44',
    resolution: '1080x1920 • 60 FPS',
    views: '4.2M',
    software: ['CapCut PC', 'Premiere Pro'],
    softwareBadges: ['CapCut PC'],
    colorPalette: ['#F59E0B', '#FF5500', '#18181B', '#FAFAFA'],
    aspect: '9:16',
    thumbnail: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-man-training-at-the-gym-with-weights-41525-large.mp4',
    description: 'High-converting personal branding short-form video. Generated 14,000+ newsletter signups from a single video post.',
    pacingStrategy: 'Curiosity gap hook, kinetic typography color-shifting on buzzwords, sound design whoosh on every cut.',
    tags: ['Shorts', 'Fitness Hook', 'Conversion Focus', 'CapCut PC']
  }
];

export const clientMetrics = [
  { label: 'Total Views Generated', value: '45M+', detail: 'Across YouTube, TikTok & Reels' },
  { label: 'Avg 3-Sec Hook Retention', value: '94.2%', detail: 'Industry average is 58%' },
  { label: 'Completed Deliveries', value: '180+', detail: 'From shorts to feature commercial' },
  { label: 'Turnaround Time', value: '24-48h', detail: 'Rapid priority pipeline available' }
];

export const colorGradingComparison = {
  title: 'DaVinci Resolve Color Transformation',
  subtitle: 'Drag the slider to compare Flat Raw S-Log3 footage vs Guhan\'s Hollywood Film Emulation Grade.',
  rawLabel: 'RAW S-LOG3 LOG FLAT',
  gradedLabel: 'GUHAN FILM PRINT GRADE (REC.709)',
  rawImage: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1400&q=80',
  gradedImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1400&q=80',
  pipeline: [
    'Color Space Transform: Sony S-Gamut3.Cine → DaVinci Wide Gamut / Intermediate',
    'Exposure & Contrast Curve with highlight roll-off protection',
    'Custom Subtractive Color Balance (warm skin tones, cool cinematic shadows)',
    'Kodak 2383 Film Grain & Halation Emulation'
  ]
};

export const agentWorkflowSteps = [
  {
    step: '01',
    title: 'Asset Ingest & Rough Cut',
    software: 'Adobe Premiere Pro',
    description: 'Import 4K raw footage, transcribe audio, cull dead air, structure narrative pacing and nail the first 3-second hook.'
  },
  {
    step: '02',
    title: 'DaVinci Resolve Color Grade',
    software: 'DaVinci Resolve Studio',
    description: 'Apply ACES color management, balance skin tones, build cinematic contrast curves and apply organic film grain emulation.'
  },
  {
    step: '03',
    title: 'Kinetic Motion & Viral Polish',
    software: 'CapCut PC & After Effects',
    description: 'Layer kinetic typography, visual punch-ins, sound effects (risers, whooshes, sub-drops), and pacing optimizations.'
  },
  {
    step: '04',
    title: 'Render & Master Export',
    software: 'ProRes 422HQ & H.265 Master',
    description: 'Export bit-rate optimized 4K or 1080x1920 files ready for instant viral publishing.'
  }
];
