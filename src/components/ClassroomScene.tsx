import React, { useState, useEffect } from 'react';
import { classroomAudio } from '../utils/audio';
import { scatterClassroomStars } from '../utils/confetti';
import { Volume2, VolumeX, Sun, Moon, Clock, Sparkles } from 'lucide-react';

interface ClassroomSceneProps {
  onTakeSeat: () => void;
  onNavigateToPage: (pageId: number) => void;
  isEvening: boolean;
  onToggleEvening: () => void;
  isMuted: boolean;
  onToggleMute: () => void;
}

export const ClassroomScene: React.FC<ClassroomSceneProps> = ({
  onTakeSeat,
  onNavigateToPage,
  isEvening,
  onToggleEvening,
  isMuted,
  onToggleMute
}) => {
  const [fanSpeed, setFanSpeed] = useState<'normal' | 'fast' | 'stopped'>('normal');
  const [timeStr, setTimeStr] = useState<string>('09:00');
  const [bellRinging, setBellRinging] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleRingBell = () => {
    setBellRinging(true);
    classroomAudio.playSchoolBell();
    setTimeout(() => setBellRinging(false), 2000);
  };

  const toggleFan = () => {
    if (fanSpeed === 'normal') setFanSpeed('fast');
    else if (fanSpeed === 'fast') setFanSpeed('stopped');
    else setFanSpeed('normal');
  };

  return (
    <div className={`relative w-full h-full min-h-[580px] lg:min-h-[640px] rounded-2xl overflow-hidden border border-chalk/20 shadow-2xl transition-colors duration-500 select-none ${
      isEvening ? 'bg-[#0f1715]' : 'bg-[#1a2522]'
    }`}>
      {/* Ambient Lighting Overlay */}
      <div className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${
        isEvening ? 'opacity-40 bg-blue-950/40 mix-blend-multiply' : 'opacity-10 bg-amber-500/10'
      }`} />

      {/* Classroom Wall & Board Illustration (SVG) */}
      <svg
        viewBox="0 0 1200 700"
        className="w-full h-full object-cover"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="wallGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={isEvening ? "#121b19" : "#22332f"} />
            <stop offset="100%" stopColor={isEvening ? "#0c1311" : "#192623"} />
          </linearGradient>

          <linearGradient id="floorGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={isEvening ? "#3d2817" : "#6a4527"} />
            <stop offset="100%" stopColor={isEvening ? "#24160c" : "#4a2d18"} />
          </linearGradient>

          <linearGradient id="boardGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#182421" />
            <stop offset="100%" stopColor="#22332f" />
          </linearGradient>

          <linearGradient id="woodTrim" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#a3704c" />
            <stop offset="100%" stopColor="#6e462c" />
          </linearGradient>

          <radialGradient id="deskLampGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f2b84b" stopOpacity="0.45" />
            <stop offset="60%" stopColor="#f2b84b" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#f2b84b" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Classroom Back Wall */}
        <rect x="0" y="0" width="1200" height="460" fill="url(#wallGrad)" />

        {/* Classroom Wood Flooring */}
        <rect x="0" y="460" width="1200" height="240" fill="url(#floorGrad)" />
        {/* Floor Plank Lines */}
        <line x1="0" y1="520" x2="1200" y2="520" stroke="#000" strokeOpacity="0.25" strokeWidth="1" />
        <line x1="0" y1="590" x2="1200" y2="590" stroke="#000" strokeOpacity="0.25" strokeWidth="1" />
        <line x1="0" y1="650" x2="1200" y2="650" stroke="#000" strokeOpacity="0.25" strokeWidth="1" />

        {/* Left Window */}
        <g transform="translate(40, 60)">
          {/* Window Frame */}
          <rect x="0" y="0" width="130" height="240" rx="4" fill="#1b2825" stroke="#7d5537" strokeWidth="6" />
          {/* Glass Sky */}
          <rect x="8" y="8" width="114" height="224" rx="2" fill={isEvening ? "#091426" : "#87ceeb"} />
          {/* Distant trees or evening stars */}
          {isEvening ? (
            <g fill="#fff" opacity="0.8">
              <circle cx="30" cy="30" r="1.5" />
              <circle cx="80" cy="50" r="1" />
              <circle cx="50" cy="90" r="2" />
              <circle cx="95" cy="110" r="1.2" />
              <path d="M 85 25 A 15 15 0 0 0 95 45 A 18 18 0 1 1 85 25 Z" fill="#fde047" opacity="0.9" />
            </g>
          ) : (
            <g>
              <circle cx="90" cy="40" r="24" fill="#ffeb3b" opacity="0.75" />
              {/* Greenery */}
              <path d="M 8 200 Q 40 160 70 195 Q 100 155 122 205 L 122 232 L 8 232 Z" fill="#2d6a4f" />
              <path d="M 20 210 Q 50 180 80 210 Q 110 180 122 215 L 122 232 L 20 232 Z" fill="#40916c" />
            </g>
          )}
          {/* Window Panes */}
          <line x1="65" y1="8" x2="65" y2="232" stroke="#7d5537" strokeWidth="4" />
          <line x1="8" y1="120" x2="122" y2="120" stroke="#7d5537" strokeWidth="4" />
        </g>

        {/* Vintage Wall Clock (Interactive!) */}
        <g
          transform="translate(210, 70)"
          className="cursor-pointer group"
          onClick={handleRingBell}
          aria-label="Click clock to ring school bell"
        >
          <circle cx="35" cy="35" r="32" fill="#e5dfd3" stroke="#5c3d24" strokeWidth="5" />
          <circle cx="35" cy="35" r="28" fill="#fdfbf7" />
          {/* Hour Marks */}
          <line x1="35" y1="10" x2="35" y2="16" stroke="#333" strokeWidth="2" />
          <line x1="35" y1="60" x2="35" y2="54" stroke="#333" strokeWidth="2" />
          <line x1="10" y1="35" x2="16" y2="35" stroke="#333" strokeWidth="2" />
          <line x1="60" y1="35" x2="54" y2="35" stroke="#333" strokeWidth="2" />
          {/* Hands */}
          <line x1="35" y1="35" x2="35" y2="18" stroke="#111" strokeWidth="3" strokeLinecap="round" />
          <line x1="35" y1="35" x2="48" y2="35" stroke="#111" strokeWidth="2" strokeLinecap="round" />
          <circle cx="35" cy="35" r="3" fill="#e76f51" />
          {bellRinging && (
            <text x="35" y="-10" textAnchor="middle" fill="#f2b84b" fontSize="14" fontWeight="bold" className="animate-bounce">
              🔔 DING DONG!
            </text>
          )}
        </g>

        {/* Ceiling Fan (Interactive!) */}
        <g
          transform="translate(600, 45)"
          className="cursor-pointer"
          onClick={toggleFan}
          aria-label="Click to toggle ceiling fan"
        >
          {/* Mount rod */}
          <line x1="0" y1="-45" x2="0" y2="0" stroke="#444" strokeWidth="4" />
          <circle cx="0" cy="0" r="14" fill="#2b2b2b" stroke="#555" strokeWidth="2" />
          {/* Fan Blades with CSS animation */}
          <g className={fanSpeed === 'normal' ? 'animate-[spin_4s_linear_infinite]' : fanSpeed === 'fast' ? 'animate-[spin_1.5s_linear_infinite]' : ''}>
            <ellipse cx="-75" cy="0" rx="65" ry="10" fill="#3a3a3a" opacity="0.85" />
            <ellipse cx="75" cy="0" rx="65" ry="10" fill="#3a3a3a" opacity="0.85" />
            <ellipse cx="0" cy="-75" rx="10" ry="65" fill="#3a3a3a" opacity="0.85" />
            <ellipse cx="0" cy="75" rx="10" ry="65" fill="#3a3a3a" opacity="0.85" />
          </g>
        </g>

        {/* Central Chalkboard Frame */}
        <rect x="290" y="55" width="620" height="280" rx="6" fill="#6e462c" stroke="#4a2d18" strokeWidth="8" filter="drop-shadow(0 8px 16px rgba(0,0,0,0.4))" />
        {/* Chalkboard Slate */}
        <rect
          x="302"
          y="67"
          width="596"
          height="256"
          rx="4"
          fill="url(#boardGrad)"
          stroke="#172421"
          strokeWidth="3"
          className="cursor-pointer hover:opacity-95 transition-opacity"
          onClick={() => onNavigateToPage(2)}
        />
        {/* Chalk Dust Accents */}
        <ellipse cx="420" cy="290" rx="70" ry="12" fill="#fff" opacity="0.04" />
        <ellipse cx="780" cy="300" rx="90" ry="14" fill="#fff" opacity="0.05" />

        {/* Chalkboard Chalk Lettering */}
        <text
          x="600"
          y="130"
          textAnchor="middle"
          fill="#f4f1ea"
          fontSize="34"
          fontFamily="'Patrick Hand', cursive"
          letterSpacing="2"
        >
          Natural Language Processing
        </text>
        <line x1="390" y1="145" x2="810" y2="145" stroke="#f2b84b" strokeWidth="2.5" strokeDasharray="6 3" opacity="0.85" />

        <text x="600" y="180" textAnchor="middle" fill="#dcd7cc" fontSize="19" fontFamily="'Patrick Hand', cursive">
          CSE3002 · Technology Tower · VIT Vellore
        </text>
        <text x="600" y="215" textAnchor="middle" fill="#99d98c" fontSize="16" fontFamily="'DM Sans', sans-serif">
          Faculty: [MAM'S NAME] · 30 Periods · 8 Wings
        </text>

        {/* Chalk Tray at Board Bottom */}
        <rect x="300" y="323" width="600" height="10" fill="#8c5d37" />
        {/* White and yellow chalk sticks in tray */}
        <rect x="360" y="320" width="22" height="5" rx="1.5" fill="#f4f1ea" />
        <rect x="390" y="320" width="18" height="5" rx="1.5" fill="#f4e04d" />
        <rect x="790" y="318" width="45" height="7" rx="2" fill="#5c3d24" /> {/* Eraser */}

        {/* Right Wall Notice Board / Poster */}
        <g
          transform="translate(940, 75)"
          className="cursor-pointer group"
          onClick={() => onNavigateToPage(16)}
        >
          <rect x="0" y="0" width="190" height="150" rx="4" fill="#b08968" stroke="#7f5539" strokeWidth="4" />
          <rect x="8" y="8" width="174" height="134" fill="#faf8f3" />
          {/* Push Pin */}
          <circle cx="95" cy="12" r="5" fill="#e76f51" />
          <text x="95" y="35" textAnchor="middle" fill="#222" fontSize="12" fontWeight="bold">
            FSA DERIVATION (CAT 2)
          </text>
          {/* Mini FSA diagram snippet */}
          <circle cx="35" cy="70" r="14" fill="none" stroke="#2a9d8f" strokeWidth="2" />
          <text x="35" y="74" textAnchor="middle" fontSize="10" fill="#333">q0</text>
          <line x1="49" y1="70" x2="85" y2="70" stroke="#2a9d8f" strokeWidth="1.5" />
          <circle cx="98" cy="70" r="14" fill="none" stroke="#2a9d8f" strokeWidth="2" />
          <circle cx="98" cy="70" r="11" fill="none" stroke="#2a9d8f" strokeWidth="1" />
          <text x="98" y="74" textAnchor="middle" fontSize="10" fill="#333">q4</text>
          <line x1="112" y1="70" x2="145" y2="70" stroke="#e76f51" strokeWidth="1.5" strokeDasharray="3 2" />
          <text x="95" y="125" textAnchor="middle" fill="#666" fontSize="9">
            Minimal · Naturalization · Actually
          </text>
        </g>

        {/* Campus Connect Poster Below */}
        <g
          transform="translate(940, 245)"
          className="cursor-pointer group"
          onClick={() => onNavigateToPage(19)}
        >
          <rect x="0" y="0" width="190" height="110" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="3" />
          {/* Blue accent header */}
          <rect x="0" y="0" width="190" height="24" fill="#5b8def" />
          <text x="95" y="16" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">
            PROJECT: CAMPUS CONNECT
          </text>
          <text x="95" y="48" textAnchor="middle" fill="#f4f1ea" fontSize="10">
            Multilingual Guide for VIT
          </text>
          <text x="95" y="68" textAnchor="middle" fill="#94a3b8" fontSize="9">
            Tamil · Telugu · Malayalam · Hindi · Eng
          </text>
          <rect x="40" y="80" width="110" height="18" rx="9" fill="#2a9d8f" />
          <text x="95" y="93" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="bold">
            Explore 11 Services →
          </text>
        </g>

        {/* Teacher's Podium in Front Left */}
        <g transform="translate(180, 360)">
          <path d="M 0 50 L 110 50 L 95 140 L 15 140 Z" fill="#6e462c" stroke="#4a2d18" strokeWidth="2" />
          <rect x="-10" y="40" width="130" height="14" rx="2" fill="#8c5d37" />
          {/* Lecture notes on podium */}
          <rect x="25" y="32" width="40" height="10" rx="1" fill="#faf8f3" transform="rotate(-4 45 37)" />
          {/* Chalk star mark note */}
          <text x="80" y="37" fill="#f2b84b" fontSize="12">★</text>
        </g>

        {/* Classmates Silhouettes in Row 2 (Front of our desk) */}
        <g opacity={isEvening ? "0.45" : "0.75"}>
          {/* Student 1 (left) */}
          <ellipse cx="360" cy="460" rx="28" ry="32" fill="#182321" />
          <path d="M 315 540 C 315 485 405 485 405 540 Z" fill="#182321" />
          
          {/* Student 2 (center, raising hand gently!) */}
          <ellipse cx="610" cy="455" rx="30" ry="34" fill="#141c1a" />
          <path d="M 560 540 C 560 480 660 480 660 540 Z" fill="#141c1a" />
          {/* Arm raised asking a question */}
          <path d="M 645 490 Q 670 430 675 390 Q 665 385 655 425 Q 635 480 645 490 Z" fill="#141c1a" />

          {/* Student 3 (right) */}
          <ellipse cx="850" cy="462" rx="26" ry="30" fill="#182321" />
          <path d="M 810 540 C 810 490 890 490 890 540 Z" fill="#182321" />
        </g>

        {/* FOREGROUND: My Desk (Desk 24, Row 3) */}
        <g transform="translate(0, 480)">
          {/* Desk Surface (Rich Wood) */}
          <polygon points="0,70 1200,70 1200,220 0,220" fill="url(#floorGrad)" />
          <polygon points="0,50 1200,50 1200,85 0,85" fill="url(#woodTrim)" />
          <line x1="0" y1="52" x2="1200" y2="52" stroke="#d4a373" strokeWidth="2" opacity="0.4" />

          {/* Evening Desk Lamp Glow (when evening mode active) */}
          {isEvening && (
            <ellipse cx="400" cy="110" rx="360" ry="110" fill="url(#deskLampGlow)" />
          )}

          {/* Left: Open Spiral Notebook (Clickable to Notebook Concept) */}
          <g
            transform="translate(140, 50)"
            className="cursor-pointer group"
            onClick={() => onNavigateToPage(9)}
          >
            {/* Notebook shadow */}
            <rect x="4" y="8" width="220" height="150" rx="4" fill="#000" opacity="0.35" />
            {/* Left Page */}
            <rect x="0" y="0" width="110" height="150" rx="2" fill="#faf8f3" stroke="#e2dcd2" strokeWidth="1" />
            {/* Right Page */}
            <rect x="110" y="0" width="110" height="150" rx="2" fill="#faf8f3" stroke="#e2dcd2" strokeWidth="1" />
            {/* Spiral binding rings */}
            <line x1="110" y1="5" x2="110" y2="145" stroke="#999" strokeWidth="2" strokeDasharray="3 4" />
            {/* Ruled lines on pages */}
            <line x1="15" y1="25" x2="95" y2="25" stroke="#3b82f6" strokeWidth="1" opacity="0.4" />
            <line x1="15" y1="45" x2="95" y2="45" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="15" y1="65" x2="95" y2="65" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="15" y1="85" x2="95" y2="85" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="15" y1="105" x2="95" y2="105" stroke="#cbd5e1" strokeWidth="1" />
            {/* Handwritten Title */}
            <text x="20" y="42" fill="#1e293b" fontSize="11" fontFamily="'Patrick Hand', cursive">
              Levels of NLP
            </text>
            <text x="20" y="62" fill="#64748b" fontSize="9">
              Words → Syntax → Semantics
            </text>
            {/* Right Page Sticky Note */}
            <rect x="125" y="20" width="80" height="70" fill="#fef08a" rx="2" transform="rotate(3 165 55)" />
            <text x="135" y="45" fill="#713f12" fontSize="9" fontWeight="bold">
              ★ 5 Stars earned!
            </text>
            <text x="135" y="62" fill="#854d0e" fontSize="8">
              FSA derivational
            </text>
            <text x="135" y="74" fill="#854d0e" fontSize="8">
              morphology rule
            </text>
          </g>

          {/* Center: Half-Open Laptop (Clickable to Jupyter Lab) */}
          <g
            transform="translate(480, 25)"
            className="cursor-pointer group"
            onClick={() => onNavigateToPage(6)}
          >
            {/* Screen Lid */}
            <polygon points="35,10 205,10 220,105 20,105" fill="#1e293b" stroke="#475569" strokeWidth="3" />
            {/* Screen Display */}
            <polygon points="42,16 198,16 212,98 28,98" fill="#0f172a" />
            {/* Code lines in screen */}
            <text x="45" y="32" fill="#e2e8f0" fontSize="8" fontFamily="'JetBrains Mono', monospace">
              In [1]: import nltk
            </text>
            <text x="45" y="46" fill="#38bdf8" fontSize="8" fontFamily="'JetBrains Mono', monospace">
              tokens = tokenize(corpus)
            </text>
            <text x="45" y="60" fill="#4ade80" fontSize="8" fontFamily="'JetBrains Mono', monospace">
              Out [1]: 14,820 tokens
            </text>
            <text x="45" y="76" fill="#facc15" fontSize="8" fontFamily="'JetBrains Mono', monospace">
              Accuracy: 98.4%
            </text>
            {/* Laptop Base / Keyboard */}
            <polygon points="10,105 230,105 245,150 -5,150" fill="#334155" stroke="#1e293b" strokeWidth="2" />
            {/* Trackpad */}
            <rect x="95" y="125" width="50" height="18" rx="2" fill="#1e293b" opacity="0.6" />
          </g>

          {/* Right: Pencil Case & Pen */}
          <g transform="translate(850, 65)">
            {/* Pencil pouch */}
            <rect x="0" y="0" width="130" height="42" rx="10" fill="#3b82f6" opacity="0.85" stroke="#1d4ed8" strokeWidth="2" />
            <line x1="15" y1="21" x2="115" y2="21" stroke="#fff" strokeWidth="1.5" strokeDasharray="3 3" />
            {/* Ballpoint Pen lying down */}
            <rect x="25" y="55" width="120" height="7" rx="3.5" fill="#1e293b" transform="rotate(-6 85 58)" />
            <polygon points="25,58 15,58.5 25,60" fill="#f59e0b" transform="rotate(-6 85 58)" />
            {/* Eraser */}
            <rect x="80" y="70" width="30" height="14" rx="2" fill="#e76f51" transform="rotate(12 95 77)" />
          </g>
        </g>
      </svg>

      {/* Floating Control Badges (Clock, Audio, Lighting) */}
      <div className="absolute top-4 left-4 flex items-center gap-2 z-20">
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-chalkboard-dark/90 border border-chalk/20 text-xs text-chalk backdrop-blur-md shadow-md">
          <Clock className="w-3.5 h-3.5 text-gold" />
          <span className="font-mono">{timeStr}</span>
          <span className="text-chalk/40">|</span>
          <span className="text-[11px] text-chalk/80">TT 3rd Floor</span>
        </div>

        <button
          onClick={onToggleEvening}
          className="p-1.5 rounded-full bg-chalkboard-dark/90 border border-chalk/20 text-chalk hover:text-gold transition-colors backdrop-blur-md shadow-md"
          title={isEvening ? "Switch to Daytime Lecture" : "Switch to Evening Study Mode"}
          aria-label="Toggle classroom lighting"
        >
          {isEvening ? <Sun className="w-4 h-4 text-gold" /> : <Moon className="w-4 h-4 text-chalk-blue" />}
        </button>

        <button
          onClick={() => {
            onToggleMute();
            classroomAudio.setMuted(!isMuted);
          }}
          className="p-1.5 rounded-full bg-chalkboard-dark/90 border border-chalk/20 text-chalk hover:text-gold transition-colors backdrop-blur-md shadow-md"
          title={isMuted ? "Unmute Ambient Classroom Audio" : "Mute Audio"}
          aria-label="Toggle mute"
        >
          {isMuted ? <VolumeX className="w-4 h-4 text-chalk/50" /> : <Volume2 className="w-4 h-4 text-chalk-green" />}
        </button>
      </div>

      {/* Primary Action Button: "Take Your Seat" */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <button
          onClick={() => {
            handleRingBell();
            scatterClassroomStars();
            onTakeSeat();
          }}
          className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-xl font-bold text-base md:text-lg bg-gold hover:bg-gold-light text-wood-dark shadow-wood border-2 border-wood-light transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
        >
          <Sparkles className="w-5 h-5 text-wood-dark animate-pulse" />
          <span>Take Your Seat</span>
          <span className="text-xs font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-wood-dark/15">
            Period 1
          </span>
        </button>
        <span className="text-xs text-chalk/70 font-chalk tracking-wide bg-chalkboard-dark/80 px-3 py-1 rounded-full border border-chalk/10">
          Click board, laptop, or notebook to jump into any section · Press 'S' to scatter stars
        </span>
      </div>
    </div>
  );
};
