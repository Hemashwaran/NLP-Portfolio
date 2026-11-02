import React, { useState } from 'react';

interface WingExamsProps {
  period: number;
}

export const WingExams: React.FC<WingExamsProps> = ({ period }) => {
  const [isPaperUnfolded, setIsPaperUnfolded] = useState(true);

  // CAT 2 Experience
  if (period === 26) {
    return (
      <div className="space-y-6">
        <div className="p-6 rounded-2xl bg-chalkboard-light/60 border border-chalk/15 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <div>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-red-500/20 text-red-300 border border-red-500/30">
                Period 23 · CAT 2 Reflection
              </span>
              <h2 className="text-2xl font-bold font-chalk text-chalk mt-1">
                The CAT 2 Experience
              </h2>
            </div>
          </div>

          <p className="text-sm text-chalk/80 leading-relaxed mb-6">
            Dr. SHARMILA BANU K mam's CAT 2 paper tested whether we understood the topics, not just the definitions. The FSA derivational morphology question needed us to trace transitions and fix the automaton where a path was missing.
          </p>

          <div className="relative max-w-2xl mx-auto">
            <button
              onClick={() => setIsPaperUnfolded(!isPaperUnfolded)}
              className="absolute -top-3 right-4 z-10 px-3 py-1 rounded-full text-xs font-mono bg-[#8c5d37] text-white shadow hover:bg-[#6e462c] transition-colors"
            >
              {isPaperUnfolded ? "Fold Exam Sheet ▲" : "Unfold Exam Sheet ▼"}
            </button>

            {isPaperUnfolded && (
              <div className="p-6 sm:p-8 rounded-2xl notebook-paper border-2 border-gray-300 shadow-2xl space-y-4 animate-in fade-in duration-300">
                <div className="border-b-2 border-gray-300 pb-3 text-center space-y-1">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-600">
                    Vellore Institute of Technology
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 font-sans">
                    CAT 2 — CSE3002: Natural Language Processing
                  </h3>
                  <div className="text-xs text-gray-600 font-mono pt-1">
                    Fall Semester 2026-27
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-gray-200 relative shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-gray-800 font-mono">Question 1</span>
                    <span className="transform rotate-3 bg-emerald-100 border-2 border-emerald-500 text-emerald-800 px-3 py-0.5 rounded-full shadow-sm font-chalk text-base font-bold">
                      ✓ Good
                    </span>
                  </div>
                  <p className="text-xs text-gray-700 leading-relaxed font-sans mt-2">
                    Mam marked my answer to Question 1 as good.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm">
                  <span className="font-bold text-xs text-gray-800 font-mono block mb-1">
                    FSA Derivational Morphology Question
                  </span>
                  <p className="text-xs text-gray-700 leading-relaxed font-sans">
                    "Determine transitions for: Minimal, Naturalization, Spontaneousness, Actually, Revolutionary. Alter the FSA if a transition is missing." My working for this is in Periods 16 and 17.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // How I Prepared (no quiz)
  return (
    <div className="space-y-6">
      <div className="p-6 rounded-2xl bg-chalkboard-light/60 border border-chalk/15 shadow-xl">
        <div className="mb-4">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-gold/20 text-gold border border-gold/30">
            Period 23 · Exam Preparation
          </span>
          <h2 className="text-2xl font-bold font-chalk text-chalk mt-1">
            How I Prepared
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="p-3.5 rounded-xl bg-black/40 border border-chalk/15">
            <span className="text-xs font-bold text-gold block mb-1">1. Drawing FSAs by Hand</span>
            <p className="text-xs text-chalk/75">
              I drew the state transitions on paper until the paths for each suffix made sense.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-black/40 border border-chalk/15">
            <span className="text-xs font-bold text-chalk-yellow block mb-1">2. Testing in Python</span>
            <p className="text-xs text-chalk/75">
              When a rule was confusing, I ran small Python examples to see how the text actually gets split.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
