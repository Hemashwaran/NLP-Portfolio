import React, { useState } from 'react';
import { OWNER_DETAILS } from '../../data/content';
import { PlaceholderBadge } from '../PlaceholderBadge';
import { scatterClassroomStars } from '../../utils/confetti';
import { Star, Sparkles, MapPin, Bus, Radio, AlertTriangle, ArrowRight } from 'lucide-react';

interface WingStarsRadarProps {
  period: number;
}

export const WingStarsRadar: React.FC<WingStarsRadarProps> = ({ period }) => {
  // Page 23: Star modal / stories
  const [selectedStarGroup, setSelectedStarGroup] = useState<'questions' | 'project' | null>('questions');

  // Page 25: Interactive Outbreak Radar Simulation Map
  const [simStep, setSimStep] = useState<number>(1);
  const [isPlayingSim, setIsPlayingSim] = useState<boolean>(false);

  React.useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (isPlayingSim) {
      timer = setInterval(() => {
        setSimStep(prev => (prev < 3 ? prev + 1 : 1));
      }, 2000);
    }
    return () => clearInterval(timer);
  }, [isPlayingSim]);

  // Period 23: Star Chart
  if (period === 23) {
    return (
      <div className="space-y-6">
        <div className="p-6 sm:p-8 rounded-2xl chalk-board-bg border-4 border-wood shadow-2xl relative">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-chalk/20 pb-4 mb-6">
            <div>
              <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-gold/20 text-gold border border-gold/30">
                Period 21 · Classroom Recognition
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-chalk text-chalk mt-1">
                The Star Chart: 5 Gold Stars Earned
              </h2>
            </div>
          </div>

          {/* Central Star Board Presentation */}
          <div className="p-6 rounded-2xl bg-black/40 border-2 border-gold/40 text-center space-y-4 mb-6">
            <span className="text-xs font-mono text-chalk/60 uppercase tracking-wider block">
              Student Name: {OWNER_DETAILS.name} · CSE3002
            </span>

            {/* 5 Animated Gold Stars */}
            <div className="flex items-center justify-center gap-3 py-3">
              {[1, 2, 3, 4, 5].map((starNum) => (
                <button
                  key={starNum}
                  onClick={() => {
                    scatterClassroomStars();
                    setSelectedStarGroup(starNum <= 2 ? 'questions' : 'project');
                  }}
                  className="group relative transform hover:scale-125 transition-transform duration-200"
                  title={starNum <= 2 ? "Star for Class Questions" : "Star for NLP Application Ideas"}
                >
                  <Star className="w-10 h-10 sm:w-12 sm:h-12 fill-gold text-gold-light drop-shadow-[0_0_12px_rgba(242,184,75,0.6)] animate-pulse" />
                  <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] font-mono text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                    ★#{starNum}
                  </span>
                </button>
              ))}
            </div>

            <div className="flex justify-center gap-4 pt-2">
              <button
                onClick={() => setSelectedStarGroup('questions')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${selectedStarGroup === 'questions'
                    ? 'bg-gold text-wood-dark border-gold shadow'
                    : 'bg-black/30 text-chalk/80 border-chalk/10'
                  }`}
              >
                ★★ Stars 1 & 2: Answering Questions in Class
              </button>
              <button
                onClick={() => setSelectedStarGroup('project')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${selectedStarGroup === 'project'
                    ? 'bg-gold text-wood-dark border-gold shadow'
                    : 'bg-black/30 text-chalk/80 border-chalk/10'
                  }`}
              >
                ★★★ Stars 3, 4 & 5: NLP Application Ideas
              </button>
            </div>
          </div>

          {/* Story Card Breakdown */}
          {selectedStarGroup === 'questions' ? (
            <div className="p-5 rounded-xl bg-chalkboard-dark border border-gold/30 space-y-2 animate-in fade-in">
              <span className="text-xs font-mono font-bold text-gold uppercase tracking-wider block">
                Story 1: Answering questions
              </span>
              <p className="text-xs sm:text-sm text-chalk/90 leading-relaxed">
                Mam asked questions in class. I answered two of them and got a star for each answer.
              </p>
            </div>
          ) : (
            <div className="p-5 rounded-xl bg-chalkboard-dark border border-gold/30 space-y-2 animate-in fade-in">
              <span className="text-xs font-mono font-bold text-gold uppercase tracking-wider block">
                Story 2: Presenting NLP Application Ideas
              </span>
              <p className="text-xs sm:text-sm text-chalk/90 leading-relaxed">
                Mam asked us to prepare an idea using an NLP application. I presented two ideas: Outbreak Radar, which links places mentioned in news reports of fever cases with bus routes, and a rumour detection idea for health alerts. Mam gave 3 stars for those ideas.
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Period 24: The Idea Board (Sticky Notes from Spiral Pad)
  if (period === 24) {
    return (
      <div className="space-y-6">
        <div className="p-6 rounded-2xl bg-chalkboard-light/60 border border-chalk/15 shadow-xl">
          <div className="flex items-center gap-2 mb-2">
            <Radio className="w-5 h-5 text-gold" />
            <h2 className="text-2xl font-bold font-chalk text-chalk">
              My Two NLP Application Ideas
            </h2>
          </div>
          <p className="text-sm text-chalk/80 leading-relaxed mb-6">
            Mam asked us to prepare an idea using an NLP application. These are the two ideas I presented in class:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Sticky Note 1: Nipah Rumour Detection */}
            <div className="sticky-note p-6 rounded-2xl relative shadow-lg">
              <div className="washi-tape" />
              <span className="text-xs font-mono font-bold text-amber-900 uppercase tracking-wider block mb-1">
                IDEA 1 · EPIDEMIC FACT-CHECKING
              </span>
              <h3 className="text-xl font-bold font-chalk text-amber-950 mb-2">
                Rumour Detection during Nipah Virus Alert
              </h3>
              <p className="text-xs text-amber-900/90 leading-relaxed mb-4 font-sans">
                During health alerts like Nipah, false messages spread quickly. The idea is to find hospital and place names in posts and sort them into confirmed news, rumours, and debunked claims.
              </p>

              <div className="space-y-1.5 pt-2 border-t border-amber-300 text-xs font-mono text-amber-950">
                <div className="font-bold">NLP Competencies Involved:</div>
                <div className="text-[11px]">• Named Entity Recognition (hospital and place names)</div>
                <div className="text-[11px]">• Text Classification (rumour or confirmed news)</div>
                <div className="text-[11px]">• Stance Detection (confirm, deny, question)</div>
              </div>
            </div>

            {/* Sticky Note 2: Outbreak Radar */}
            <div className="sticky-note p-6 rounded-2xl relative shadow-lg bg-[#fef9c3]">
              <div className="washi-tape" />
              <span className="text-xs font-mono font-bold text-amber-900 uppercase tracking-wider block mb-1">
                IDEA 2 · SPATIAL-TEMPORAL SURVEILLANCE
              </span>
              <h3 className="text-xl font-bold font-chalk text-amber-950 mb-2">
                Outbreak Radar: NLP + Transport Networks
              </h3>
              <p className="text-xs text-amber-900/90 leading-relaxed mb-4 font-sans">
                The idea is to read news reports of fever cases, pick out the town names, and link them with bus routes to show which nearby towns may need to stay alert.
              </p>

              <div className="space-y-1.5 pt-2 border-t border-amber-300 text-xs font-mono text-amber-950">
                <div className="font-bold">NLP & Geographic Capabilities:</div>
                <div className="text-[11px]">• NER for towns, bus stands and clinics</div>
                <div className="text-[11px]">• Picking out dates from reports</div>
                <div className="text-[11px]">• Linking places with bus routes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Period 25: Outbreak Radar Explained Simply + Illustrative Simulation
  return (
    <div className="space-y-6">
      <div className="p-6 rounded-2xl bg-chalkboard-light/60 border border-chalk/15 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-gold/20 text-gold border border-gold/30">
              Period 22 · The Idea, Simply
            </span>
            <h2 className="text-2xl font-bold font-chalk text-chalk mt-1">
              Outbreak Radar, Explained Simply
            </h2>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-black/40 text-chalk-yellow border border-chalk/15">
            Illustrative Simulation
          </span>
        </div>

        <p className="text-sm text-chalk/80 leading-relaxed mb-4">
          Outbreak Radar is an idea I presented, not a finished system. Local news often reports fever cases in a town. If NLP reads those reports and links the town with bus routes leaving it, nearby towns could be told to be ready.
        </p>

        {/* Illustrative Simulation Graphic */}
        <div className="rounded-2xl bg-[#0f172a] border-2 border-gold/40 p-4 sm:p-6 shadow-2xl space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-800 pb-2">
            <span className="text-xs font-mono text-gold font-bold">
              SIMULATION: Stage {simStep} of 3 ({simStep === 1 ? 'News Mention' : simStep === 2 ? 'Bus Corridor Correlated' : 'Down-Route Alert Issued'})
            </span>
            <button
              onClick={() => setIsPlayingSim(!isPlayingSim)}
              className="px-3 py-1 rounded bg-gold hover:bg-gold-light text-wood-dark font-bold text-xs shadow transition-colors self-start"
            >
              {isPlayingSim ? 'Pause Simulation' : 'Play Animated Scenario'}
            </button>
          </div>

          {/* SVG Map of Fictional Transit Region */}
          <div className="relative w-full h-56 sm:h-64 rounded-xl bg-[#1e293b]/60 border border-gray-800 flex items-center justify-center overflow-hidden">
            <svg viewBox="0 0 600 240" className="w-full h-full font-mono text-xs select-none">
              {/* Roads / Transit Corridors */}
              <line x1="120" y1="120" x2="300" y2="70" stroke="#475569" strokeWidth="4" strokeDasharray="6 4" />
              <line x1="120" y1="120" x2="320" y2="180" stroke="#475569" strokeWidth="4" strokeDasharray="6 4" />
              <line x1="300" y1="70" x2="480" y2="120" stroke="#475569" strokeWidth="4" strokeDasharray="6 4" />
              <line x1="320" y1="180" x2="480" y2="120" stroke="#475569" strokeWidth="4" strokeDasharray="6 4" />

              {/* Node A (Town A: Outbreak Origin) */}
              <g transform="translate(120, 120)">
                <circle cx="0" cy="0" r="28" fill="#7f1d1d" opacity="0.6" className="animate-ping" />
                <circle cx="0" cy="0" r="18" fill="#dc2626" stroke="#fff" strokeWidth="2" />
                <text x="0" y="4" textAnchor="middle" fill="#fff" fontWeight="bold">Town A</text>
                <text x="0" y="-24" textAnchor="middle" fill="#fca5a5" fontSize="10">News: fever cases reported</text>
              </g>

              {/* Node B (Transit Junction) */}
              <g transform="translate(300, 70)">
                <circle cx="0" cy="0" r="16" fill={simStep >= 2 ? "#b45309" : "#334155"} stroke="#fff" strokeWidth="2" />
                <text x="0" y="4" textAnchor="middle" fill="#fff" fontWeight="bold">Junction B</text>
                <text x="0" y="-22" textAnchor="middle" fill="#fde047" fontSize="10">
                  {simStep >= 2 ? "Bus route from Town A" : "Station B"}
                </text>
              </g>

              {/* Node C (South Depot) */}
              <g transform="translate(320, 180)">
                <circle cx="0" cy="0" r="16" fill={simStep >= 2 ? "#b45309" : "#334155"} stroke="#fff" strokeWidth="2" />
                <text x="0" y="4" textAnchor="middle" fill="#fff" fontWeight="bold">Depot C</text>
                <text x="0" y="30" textAnchor="middle" fill="#fde047" fontSize="10">
                  {simStep >= 2 ? "Secondary Transit Route" : "Depot C"}
                </text>
              </g>

              {/* Node D (Down-Route City D) */}
              <g transform="translate(480, 120)">
                <circle cx="0" cy="0" r={simStep === 3 ? "24" : "18"} fill={simStep === 3 ? "#047857" : "#334155"} stroke="#fff" strokeWidth="2" />
                <text x="0" y="4" textAnchor="middle" fill="#fff" fontWeight="bold">City D</text>
                <text x="0" y="-26" textAnchor="middle" fill="#6ee7b7" fontSize="10">
                  {simStep === 3 ? "Alert nearby town" : "Destination Hub"}
                </text>
              </g>

              {/* Animated Bus Icon or Transmission Indicator */}
              {simStep >= 2 && (
                <g transform="translate(210, 95)" className="animate-bounce">
                  <rect x="-12" y="-8" width="24" height="16" rx="3" fill="#f59e0b" />
                  <text x="0" y="3" textAnchor="middle" fill="#000" fontSize="8" fontWeight="bold">BUS</text>
                </g>
              )}
            </svg>
            <span className="absolute bottom-2 right-2 text-[10px] text-gray-500 font-mono">
              Illustration of the idea only
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-gray-900 border border-gray-800 text-xs text-gray-300 leading-relaxed">
            <span className="font-bold text-gold mr-1">Concept Summary:</span>
            Use NER to find places in news reports, then link those places with bus routes to suggest which towns should stay alert.
          </div>
        </div>
      </div>
    </div>
  );
};
