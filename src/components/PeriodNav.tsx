import React, { useRef, useEffect } from 'react';
import { PAGES_DATA, TOTAL_PERIODS } from '../data/content';
import { ChevronLeft, ChevronRight, BookOpen, Maximize2 } from 'lucide-react';

interface PeriodNavProps {
  currentPeriod: number;
  onSelectPeriod: (period: number) => void;
  onOpenDiary: () => void;
  onReturnToOverview: () => void;
}

const WINGS = [
  { id: 'A', name: 'Arrival', range: [1, 4] },
  { id: 'B', name: 'How Mam Taught', range: [5, 8] },
  { id: 'C', name: 'Concept Notebook', range: [9, 15] },
  { id: 'D', name: 'The FSA Problem', range: [16, 17] },
  { id: 'E', name: 'Campus Connect', range: [18, 20] },
  { id: 'F', name: 'Stars & Ideas', range: [21, 22] },
  { id: 'G', name: 'CAT 2', range: [23, 23] },
  { id: 'H', name: 'Reflection', range: [24, 25] },
];

export const PeriodNav: React.FC<PeriodNavProps> = ({
  currentPeriod,
  onSelectPeriod,
  onOpenDiary,
  onReturnToOverview,
}) => {
  const activeBtnRef = useRef<HTMLButtonElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Auto scroll active period into view in the timetable strip
  useEffect(() => {
    if (activeBtnRef.current && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const button = activeBtnRef.current;
      const containerLeft = container.getBoundingClientRect().left;
      const buttonLeft = button.getBoundingClientRect().left;
      const scrollOffset = buttonLeft - containerLeft - container.clientWidth / 2 + button.clientWidth / 2;
      container.scrollBy({ left: scrollOffset, behavior: 'smooth' });
    }
  }, [currentPeriod]);

  const canGoPrev = currentPeriod > 1;
  const canGoNext = currentPeriod < TOTAL_PERIODS;

  return (
    <footer className="sticky bottom-0 left-0 right-0 z-40 bg-chalkboard-dark/95 border-t border-chalk/15 backdrop-blur-md shadow-2xl py-2 px-3 md:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-2">
        {/* Left Controls: Esc / Diary */}
        <div className="flex items-center gap-2 w-full md:w-auto justify-between md:justify-start">
          <button
            onClick={onReturnToOverview}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-chalkboard-light hover:bg-chalkboard-border text-chalk transition-colors border border-chalk/10"
            title="Press Esc to view entire classroom"
          >
            <Maximize2 className="w-3.5 h-3.5 text-gold" />
            <span className="hidden sm:inline">Classroom View</span>
            <kbd className="hidden lg:inline text-[10px] bg-black/40 px-1 py-0.5 rounded text-chalk/60 font-mono">Esc</kbd>
          </button>

          <button
            onClick={onOpenDiary}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-chalkboard-light hover:bg-chalkboard-border text-chalk transition-colors border border-chalk/10"
            title="Open School Diary & Contents"
          >
            <BookOpen className="w-3.5 h-3.5 text-chalk-yellow" />
            <span>Diary Index</span>
          </button>

          <div className="flex items-center gap-1 md:hidden">
            <button
              onClick={() => canGoPrev && onSelectPeriod(currentPeriod - 1)}
              disabled={!canGoPrev}
              className="p-1.5 rounded-lg bg-chalkboard-light disabled:opacity-30 text-chalk"
              aria-label="Previous period"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono px-2 py-1 bg-black/30 rounded font-bold text-gold">
              {currentPeriod}/{TOTAL_PERIODS}
            </span>
            <button
              onClick={() => canGoNext && onSelectPeriod(currentPeriod + 1)}
              disabled={!canGoNext}
              className="p-1.5 rounded-lg bg-chalkboard-light disabled:opacity-30 text-chalk"
              aria-label="Next period"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Center: Timetable Period Strip (Scrollable) */}
        <div
          ref={scrollContainerRef}
          className="flex-1 w-full overflow-x-auto no-scrollbar py-1 px-1 flex items-center gap-1.5"
        >
          {WINGS.map((wing) => {
            const isWingActive = currentPeriod >= wing.range[0] && currentPeriod <= wing.range[1];
            return (
              <div
                key={wing.id}
                className={`flex items-center gap-1 px-1.5 py-1 rounded-lg border transition-colors ${
                  isWingActive ? 'bg-black/30 border-gold/40' : 'bg-black/15 border-transparent'
                }`}
              >
                <span className="text-[10px] uppercase font-bold tracking-wider text-chalk/50 px-1 hidden sm:inline">
                  {wing.id}
                </span>

                {Array.from({ length: wing.range[1] - wing.range[0] + 1 }, (_, i) => {
                  const pNum = wing.range[0] + i;
                  const isCurrent = pNum === currentPeriod;
                  const pageInfo = PAGES_DATA[pNum - 1];

                  return (
                    <button
                      key={pNum}
                      ref={isCurrent ? activeBtnRef : null}
                      onClick={() => onSelectPeriod(pNum)}
                      title={`Period ${pNum}: ${pageInfo?.title}`}
                      className={`relative min-w-[28px] h-7 px-1.5 rounded text-xs font-mono font-medium transition-all ${
                        isCurrent
                          ? 'bg-gold text-wood-dark font-bold shadow-sm scale-105'
                          : 'bg-chalkboard-border/40 hover:bg-chalkboard-border text-chalk/80 hover:text-white'
                      }`}
                    >
                      {pNum}
                      {isCurrent && (
                        <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-chalk-yellow animate-ping" />
                      )}
                    </button>
                  );
                })}
              </div>
            );
          })}
        </div>

        {/* Right Prev / Next Desktop Controls */}
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() => canGoPrev && onSelectPeriod(currentPeriod - 1)}
            disabled={!canGoPrev}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-chalkboard-light hover:bg-chalkboard-border disabled:opacity-30 text-xs text-chalk transition-colors border border-chalk/10"
            title="Press Left Arrow Key"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>Prev</span>
            <kbd className="text-[10px] bg-black/40 px-1 py-0.5 rounded text-chalk/60 font-mono">←</kbd>
          </button>

          <span className="text-xs font-mono px-2 py-1 bg-black/40 rounded font-bold text-gold border border-gold/20">
            P.{currentPeriod}
          </span>

          <button
            onClick={() => canGoNext && onSelectPeriod(currentPeriod + 1)}
            disabled={!canGoNext}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-gold hover:bg-gold-light disabled:opacity-30 text-xs text-wood-dark font-bold transition-colors shadow-sm"
            title="Press Right Arrow Key"
          >
            <span>Next</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <kbd className="text-[10px] bg-wood-dark/20 px-1 py-0.5 rounded text-wood-dark font-mono">→</kbd>
          </button>
        </div>
      </div>
    </footer>
  );
};
