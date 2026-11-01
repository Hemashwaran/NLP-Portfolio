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
                Period 23 · Classroom Recognition
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-chalk text-chalk mt-1">
                The Star Chart: 5 Gold Stars Earned
              </h2>
            </div>
            <PlaceholderBadge label="[MY STORY]" field="Personal Star Story" />
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
                  title={starNum <= 2 ? "Star for Class Questions" : "Star for Outbreak Radar Pitch"}
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
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                  selectedStarGroup === 'questions'
                    ? 'bg-gold text-wood-dark border-gold shadow'
                    : 'bg-black/30 text-chalk/80 border-chalk/10'
                }`}
              >
                ★★ Stars 1 & 2: Classroom Questions (Week 4)
              </button>
              <button
                onClick={() => setSelectedStarGroup('project')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                  selectedStarGroup === 'project'
                    ? 'bg-gold text-wood-dark border-gold shadow'
                    : 'bg-black/30 text-chalk/80 border-chalk/10'
                }`}
              >
                ★★★ Stars 3, 4 & 5: Project Topic Pitch (Week 8)
              </button>
            </div>
          </div>

          {/* Story Card Breakdown */}
          {selectedStarGroup === 'questions' ? (
            <div className="p-5 rounded-xl bg-chalkboard-dark border border-gold/30 space-y-2 animate-in fade-in">
              <span className="text-xs font-mono font-bold text-gold uppercase tracking-wider block">
                Story 1: Defending Polysemy & Sarcasm Heuristics
              </span>
              <p className="text-xs sm:text-sm text-chalk/90 leading-relaxed">
                During a lively debate on lexical ambiguity, the class argued over whether five context words were sufficient to disambiguate sentiment in student commentary. I walked up to the board and demonstrated an adversarial example where sarcastic phrasing inverted polarity despite positive unigrams. Mam smiled, drew two stars next to my name, and told the class: "That is how an NLP engineer looks at language!"
              </p>
            </div>
          ) : (
            <div className="p-5 rounded-xl bg-chalkboard-dark border border-gold/30 space-y-2 animate-in fade-in">
              <span className="text-xs font-mono font-bold text-gold uppercase tracking-wider block">
                Story 2: Pitching Outbreak Radar to the Class
              </span>
              <p className="text-xs sm:text-sm text-chalk/90 leading-relaxed">
                When presenting project ideas, many teams suggested basic movie review sentiment classifiers. I proposed connecting localized regional news NER with inter-district public bus timetables during the Nipah fever alert in Kerala. Showing how NLP could detect geographic transmission corridors before official bulletins earned a 3-star commendation from mam right from the podium!
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
              My Idea Board: Handwritten Notebook Brainstorms
            </h2>
          </div>
          <p className="text-sm text-chalk/80 leading-relaxed mb-6">
            Two distinct crisis-response NLP innovations jotted down in the back pages of my classroom spiral pad during semester brainstorming:
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
                During regional viral outbreaks, misinformation spreads faster than the pathogen. This idea extracts medical entities and classifies viral posts into verified advisories vs panic claims.
              </p>

              <div className="space-y-1.5 pt-2 border-t border-amber-300 text-xs font-mono text-amber-950">
                <div className="font-bold">NLP Competencies Involved:</div>
                <div className="text-[11px]">• Medical Named Entity Recognition (Extract hospitals, clinic names)</div>
                <div className="text-[11px]">• Entity Linking (Match to district health databases)</div>
                <div className="text-[11px]">• Stance Classification (Confirm, Deny, Query, Comment)</div>
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
                Fusing text intelligence with real-world infrastructure: parsing news reports of fever clusters to map inter-district bus depots and forecast contagion corridors.
              </p>

              <div className="space-y-1.5 pt-2 border-t border-amber-300 text-xs font-mono text-amber-950">
                <div className="font-bold">NLP & Geographic Capabilities:</div>
                <div className="text-[11px]">• Custom Regional NER (Towns, bus stops, local clinics)</div>
                <div className="text-[11px]">• Temporal Extraction (Date of onset, symptom velocity)</div>
                <div className="text-[11px]">• Transport Corridors (Predicting down-route risk hubs)</div>
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
              Period 25 · Non-Technical Concept
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
          How can text processing help stop an epidemic? When a localized fever breaks out in Town A, local newspapers report clinic visits days before national dashboards update. Outbreak Radar reads these alerts, cross-references bus schedules leaving Town A, and warns clinics in Town B and C to prepare testing kits!
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
                <text x="0" y="-24" textAnchor="middle" fill="#fca5a5" fontSize="10">NER: 14 Cases Reported</text>
              </g>

              {/* Node B (Transit Junction) */}
              <g transform="translate(300, 70)">
                <circle cx="0" cy="0" r="16" fill={simStep >= 2 ? "#b45309" : "#334155"} stroke="#fff" strokeWidth="2" />
                <text x="0" y="4" textAnchor="middle" fill="#fff" fontWeight="bold">Junction B</text>
                <text x="0" y="-22" textAnchor="middle" fill="#fde047" fontSize="10">
                  {simStep >= 2 ? "High Bus Frequency (42 trips/day)" : "Station B"}
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
                  {simStep === 3 ? "Proactive Testing Alert Dispatched!" : "Destination Hub"}
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
              Fictional illustrative model · Not epidemiological diagnosis
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-gray-900 border border-gray-800 text-xs text-gray-300 leading-relaxed">
            <span className="font-bold text-gold mr-1">Concept Summary:</span>
            By listening to raw public text streams with custom Medical NER and connecting entity locations to public transport timetables, we transform passive news reading into an active early-warning system.
          </div>
        </div>
      </div>
    </div>
  );
};
