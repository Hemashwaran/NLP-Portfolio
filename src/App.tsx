import React, { useState, useEffect, useCallback } from 'react';
import { PAGES_DATA, TOTAL_PERIODS } from './data/content';
import { ClassroomScene } from './components/ClassroomScene';
import { PeriodNav } from './components/PeriodNav';
import { DiaryDrawer } from './components/DiaryDrawer';
import { classroomAudio } from './utils/audio';
import { scatterClassroomStars } from './utils/confetti';
import { WingArrival } from './components/pages/WingArrival';
import { WingPedagogy } from './components/pages/WingPedagogy';
import { WingConcepts } from './components/pages/WingConcepts';
import { WingFSA } from './components/pages/WingFSA';
import { WingCampusConnect } from './components/pages/WingCampusConnect';
import { WingStarsRadar } from './components/pages/WingStarsRadar';
import { WingExams } from './components/pages/WingExams';
import { WingReflection } from './components/pages/WingReflection';

import { 
  Sun, 
  Moon, 
  Volume2, 
  VolumeX, 
  BookOpen, 
  Maximize2, 
  Star, 
  Sparkles,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';

export function App() {
  const [currentPeriod, setCurrentPeriod] = useState<number>(1);
  const [viewMode, setViewMode] = useState<'classroom' | 'period'>('classroom');
  const [isEvening, setIsEvening] = useState<boolean>(() => {
    try {
      return localStorage.getItem('nlp_classroom_theme') === 'evening';
    } catch {
      return false;
    }
  });
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isDiaryOpen, setIsDiaryOpen] = useState<boolean>(false);
  const [tourPages, setTourPages] = useState<number[] | null>(null);

  // Save evening theme
  useEffect(() => {
    try {
      localStorage.setItem('nlp_classroom_theme', isEvening ? 'evening' : 'day');
    } catch {
      // ignore storage error
    }
  }, [isEvening]);

  const goToPeriod = useCallback((periodNum: number) => {
    const validNum = Math.max(1, Math.min(TOTAL_PERIODS, periodNum));
    setCurrentPeriod(validNum);
    setViewMode('period');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    classroomAudio.playChalkChime();
  }, []);

  const handleNext = useCallback(() => {
    if (tourPages) {
      const curIndex = tourPages.indexOf(currentPeriod);
      if (curIndex !== -1 && curIndex < tourPages.length - 1) {
        goToPeriod(tourPages[curIndex + 1]);
        return;
      }
    }
    if (currentPeriod < TOTAL_PERIODS) {
      goToPeriod(currentPeriod + 1);
    }
  }, [currentPeriod, tourPages, goToPeriod]);

  const handlePrev = useCallback(() => {
    if (tourPages) {
      const curIndex = tourPages.indexOf(currentPeriod);
      if (curIndex > 0) {
        goToPeriod(tourPages[curIndex - 1]);
        return;
      }
    }
    if (currentPeriod > 1) {
      goToPeriod(currentPeriod - 1);
    }
  }, [currentPeriod, tourPages, goToPeriod]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in input or textarea
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        if (isDiaryOpen) {
          setIsDiaryOpen(false);
        } else {
          setViewMode('classroom');
        }
      } else if (e.key.toLowerCase() === 's') {
        scatterClassroomStars();
      } else if (e.key.toLowerCase() === 'd') {
        setIsDiaryOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, isDiaryOpen]);

  const curPageData = PAGES_DATA[currentPeriod - 1];

  const handleStartTour = (pages: number[]) => {
    setTourPages(pages);
    goToPeriod(pages[0]);
  };

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-500 ${
      isEvening ? 'evening-mode bg-[#0d1614] text-[#f4f1ea]' : 'bg-[#15201e] text-[#f4f1ea]'
    }`}>
      {/* Top Classroom Bar */}
      <header className="sticky top-0 z-40 bg-chalkboard-dark/95 border-b border-chalk/15 backdrop-blur-md px-4 py-2.5 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          {/* Left: Branding & Seat info */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setViewMode('classroom')}
              className="flex items-center gap-2 group text-left"
              title="Return to 3D Classroom View (Esc)"
            >
              <div className="w-8 h-8 rounded-lg bg-gold/20 border border-gold/40 flex items-center justify-center font-bold text-gold text-sm group-hover:scale-105 transition-transform">
                TT
              </div>
              <div>
                <span className="font-bold text-sm tracking-wide text-chalk group-hover:text-gold transition-colors block">
                  The Classroom View
                </span>
                <span className="text-[11px] text-chalk/60 font-mono block">
                  VIT Vellore · CSE3002 NLP
                </span>
              </div>
            </button>
          </div>

          {/* Center: Current Wing Badge (when in period view) */}
          {viewMode === 'period' && (
            <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 border border-chalk/15 text-xs">
              <span className="font-mono text-gold font-bold">
                Period {currentPeriod}/{TOTAL_PERIODS}
              </span>
              <span className="text-chalk/30">|</span>
              <span className="text-chalk/90 font-medium truncate max-w-xs">
                {curPageData?.wingTitle}
              </span>
            </div>
          )}

          {/* Right: Actions (Diary, Stars, Sound, Day/Night) */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                scatterClassroomStars();
              }}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gold/20 hover:bg-gold/30 text-gold text-xs font-bold border border-gold/40 transition-colors"
              title="Click or press 'S' to scatter 5 classroom stars"
            >
              <Star className="w-3.5 h-3.5 fill-gold text-gold" />
              <span>5 Stars Earned</span>
            </button>

            <button
              onClick={() => setIsDiaryOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-chalkboard-light hover:bg-chalkboard-border text-chalk text-xs font-semibold border border-chalk/15 transition-colors"
              title="Open Class Diary & Contents (D)"
            >
              <BookOpen className="w-3.5 h-3.5 text-chalk-yellow" />
              <span className="hidden sm:inline">Diary</span>
            </button>

            <button
              onClick={() => setIsEvening(!isEvening)}
              className="p-1.5 rounded-lg bg-chalkboard-light hover:bg-chalkboard-border text-chalk hover:text-gold border border-chalk/15 transition-colors"
              title={isEvening ? "Switch to Daytime Class" : "Switch to Evening Study Mode"}
              aria-label="Toggle daytime/evening lighting"
            >
              {isEvening ? <Sun className="w-4 h-4 text-gold" /> : <Moon className="w-4 h-4 text-chalk-blue" />}
            </button>

            <button
              onClick={() => {
                setIsMuted(!isMuted);
                classroomAudio.setMuted(!isMuted);
              }}
              className="p-1.5 rounded-lg bg-chalkboard-light hover:bg-chalkboard-border text-chalk hover:text-gold border border-chalk/15 transition-colors"
              title={isMuted ? "Unmute Sound" : "Mute Sound"}
              aria-label="Toggle sound mute"
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-chalk/40" /> : <Volume2 className="w-4 h-4 text-chalk-green" />}
            </button>

            {viewMode === 'period' ? (
              <button
                onClick={() => setViewMode('classroom')}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-gold hover:bg-gold-light text-wood-dark font-bold text-xs shadow transition-colors"
                title="Full Classroom Overview (Esc)"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Overview</span>
              </button>
            ) : (
              <button
                onClick={() => goToPeriod(1)}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-gold hover:bg-gold-light text-wood-dark font-bold text-xs shadow transition-colors"
              >
                <span>Period 1 →</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Interactive Stage */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-3 sm:p-6 lg:p-8 flex flex-col justify-center">
        {viewMode === 'classroom' ? (
          <div className="space-y-4 animate-in fade-in zoom-in-95 duration-300">
            <ClassroomScene
              onTakeSeat={() => goToPeriod(1)}
              onNavigateToPage={goToPeriod}
              isEvening={isEvening}
              onToggleEvening={() => setIsEvening(!isEvening)}
              isMuted={isMuted}
              onToggleMute={() => setIsMuted(!isMuted)}
            />
          </div>
        ) : (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Period Header Card */}
            <div className="p-4 sm:p-5 rounded-xl bg-chalkboard-light/70 border border-chalk/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-md">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-gold">
                    {curPageData?.wingTitle}
                  </span>
                  <span className="text-chalk/40">·</span>
                  <span className="text-xs font-mono text-chalk/70">
                    Period {currentPeriod} of {TOTAL_PERIODS}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold font-chalk text-chalk">
                  {curPageData?.title}
                </h1>
                <p className="text-xs sm:text-sm text-chalk/80 font-sans mt-0.5">
                  {curPageData?.subtitle}
                </p>
              </div>

              {/* Quick Period Controls */}
              <div className="flex items-center gap-2 self-start sm:self-auto">
                <button
                  onClick={handlePrev}
                  disabled={currentPeriod <= 1}
                  className="p-2 rounded-lg bg-black/40 hover:bg-black/60 text-chalk disabled:opacity-30 border border-chalk/15 transition-colors"
                  title="Previous Period (←)"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono font-bold px-2.5 py-1.5 rounded bg-black/50 text-gold border border-gold/30">
                  {currentPeriod}/{TOTAL_PERIODS}
                </span>
                <button
                  onClick={handleNext}
                  disabled={currentPeriod >= TOTAL_PERIODS}
                  className="p-2 rounded-lg bg-gold hover:bg-gold-light text-wood-dark disabled:opacity-30 font-bold shadow transition-colors"
                  title="Next Period (→)"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Core Interactive Activity / Visual by Wing */}
            <div>
              {(curPageData?.legacyIds ?? [currentPeriod]).map((lp) => (
                <div key={lp} className="mb-6 last:mb-0">
                  {lp >= 1 && lp <= 4 && (
                    <WingArrival
                      period={lp}
                      onNavigateToPage={goToPeriod}
                      onOpenDiary={() => setIsDiaryOpen(true)}
                    />
                  )}
                  {lp >= 5 && lp <= 8 && <WingPedagogy period={lp} />}
                  {lp >= 9 && lp <= 15 && <WingConcepts period={lp} />}
                  {lp >= 16 && lp <= 17 && <WingFSA period={lp} />}
                  {lp >= 19 && lp <= 22 && <WingCampusConnect period={lp} />}
                  {lp >= 23 && lp <= 25 && <WingStarsRadar period={lp} />}
                  {lp >= 26 && lp <= 27 && <WingExams period={lp} />}
                  {lp >= 28 && lp <= 30 && (
                    <WingReflection
                      period={lp}
                      onReturnToSeat={() => setViewMode('classroom')}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Bottom Content Narrative & My Takeaway Note */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pt-2">
              {/* Narrative Content Paragraphs (100–250 words) */}
              <div className="lg:col-span-8 p-6 rounded-2xl bg-black/35 border border-chalk/15 space-y-3 shadow-md">
                <span className="text-xs font-mono text-gold-light uppercase tracking-wider block font-semibold mb-1">
                  Classroom Narrative & Takeaway
                </span>
                <div className="space-y-3 text-sm text-chalk/85 leading-relaxed font-sans">
                  {curPageData?.content.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Handwritten "My Takeaway" Sticky Note */}
              <div className="lg:col-span-4 sticky-note p-6 rounded-2xl shadow-lg relative">
                <div className="washi-tape" />
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-900 mb-2 font-mono">
                  <Sparkles className="w-3.5 h-3.5 text-amber-900" />
                  <span>My Takeaway Note</span>
                </div>
                <p className="font-chalk text-lg text-amber-950 leading-snug">
                  "{curPageData?.myTakeawayNote}"
                </p>
                <div className="mt-4 pt-2 border-t border-amber-300 text-[11px] font-mono text-amber-900/80 flex justify-between items-center">
                  <span>Period {currentPeriod}</span>
                  <span>Row 3 Desk</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Bottom Timetable Nav Strip */}
      <PeriodNav
        currentPeriod={currentPeriod}
        onSelectPeriod={goToPeriod}
        onOpenDiary={() => setIsDiaryOpen(true)}
        onReturnToOverview={() => setViewMode('classroom')}
      />

      {/* Class Diary Drawer Modal */}
      <DiaryDrawer
        isOpen={isDiaryOpen}
        onClose={() => setIsDiaryOpen(false)}
        currentPeriod={currentPeriod}
        onSelectPeriod={goToPeriod}
        onStartTour={handleStartTour}
      />
    </div>
  );
}

export default App;
