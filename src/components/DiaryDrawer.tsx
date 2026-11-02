import React, { useState } from 'react';
import { PAGES_DATA } from '../data/content';
import { X, Search, BookOpen } from 'lucide-react';

interface DiaryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentPeriod: number;
  onSelectPeriod: (period: number) => void;
  onStartTour?: (pages: number[]) => void;
}

export const DiaryDrawer: React.FC<DiaryDrawerProps> = ({
  isOpen,
  onClose,
  currentPeriod,
  onSelectPeriod,
  onStartTour
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  const filteredPages = PAGES_DATA.filter((p) => {
    const q = searchQuery.toLowerCase();
    return (
      p.title.toLowerCase().includes(q) ||
      p.subtitle.toLowerCase().includes(q) ||
      p.wingTitle.toLowerCase().includes(q) ||
      p.takeaway.toLowerCase().includes(q) ||
      p.content.some((c) => c.toLowerCase().includes(q))
    );
  });

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Class Diary Index"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in"
    >
      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-[#faf8f3] text-[#2b2b2b] rounded-2xl shadow-2xl overflow-hidden border-4 border-[#8c5d37]">
        {/* Diary Top Header */}
        <div className="bg-[#8c5d37] text-chalk p-4 sm:p-5 flex items-center justify-between shadow-md">
          <div className="flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-chalk-yellow" />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-chalk tracking-wide text-chalk">
                Student Course Diary & Index
              </h2>
              <p className="text-xs text-chalk/80 font-sans">
                CSI4001 · Natural Language Processing · VIT Vellore
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-black/20 text-chalk transition-colors"
            aria-label="Close diary"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Mode Switcher */}
        <div className="p-4 bg-[#f0ebe1] border-b border-[#ded7ca] flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search concepts, FSA, stars..."
              className="w-full pl-9 pr-4 py-2 text-sm rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold text-gray-800 placeholder-gray-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600"
              >
                Clear
              </button>
            )}
          </div>

          <span className="text-xs font-semibold text-gray-700 self-start sm:self-auto">
            All 25 Periods ({filteredPages.length})
          </span>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 notebook-paper space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {filteredPages.map((page) => {
                const isSelected = page.id === currentPeriod;
                return (
                  <button
                    key={page.id}
                    onClick={() => {
                      onSelectPeriod(page.id);
                      onClose();
                    }}
                    className={`text-left p-3.5 rounded-xl border transition-all flex flex-col justify-between gap-2 group ${
                      isSelected
                        ? 'bg-amber-100 border-gold shadow-md ring-2 ring-gold/40'
                        : 'bg-white/90 hover:bg-white border-gray-200 hover:border-gold/60 shadow-sm'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-500">
                          {page.wingTitle.split('·')[0]}
                        </span>
                        <span
                          className={`text-xs font-mono font-bold px-1.5 py-0.5 rounded ${
                            isSelected
                              ? 'bg-gold text-wood-dark'
                              : 'bg-gray-100 group-hover:bg-amber-100 text-gray-700'
                          }`}
                        >
                          Period {page.id}
                        </span>
                      </div>
                      <h4 className="font-bold text-sm text-gray-900 group-hover:text-gold-dark transition-colors line-clamp-1">
                        {page.title}
                      </h4>
                      <p className="text-xs text-gray-600 line-clamp-2 mt-1 leading-snug">
                        {page.takeaway}
                      </p>
                    </div>

                    <div className="text-[11px] text-amber-800 font-chalk flex items-center gap-1 pt-1 border-t border-gray-100">
                      <span>★</span>
                      <span className="truncate">{page.myTakeawayNote}</span>
                    </div>
                  </button>
                );
              })}
            </div>
        </div>

        {/* Footer Notes */}
        <div className="bg-[#f0ebe1] px-4 py-3 border-t border-[#ded7ca] text-xs text-gray-600 flex items-center justify-between">
          <span>Click any card to pan directly to that desk object or period.</span>
          <span className="font-mono text-[11px] text-gray-500">ESC to close</span>
        </div>
      </div>
    </div>
  );
};
