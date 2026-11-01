import React, { useState } from 'react';
import { CAT2_PRACTICE_QUIZ } from '../../data/content';
import { PlaceholderBadge } from '../PlaceholderBadge';
import { FileCheck, BookOpen, CheckCircle, AlertCircle, RefreshCw } from 'lucide-react';

interface WingExamsProps {
  period: number;
}

export const WingExams: React.FC<WingExamsProps> = ({ period }) => {
  // Page 26: Unfolding Exam Paper State
  const [isPaperUnfolded, setIsPaperUnfolded] = useState(true);

  // Page 27: 8-Question CAT2 Practice Quiz
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelectOption = (qId: string, optIdx: number) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [qId]: optIdx }));
  };

  const calculatedScore = CAT2_PRACTICE_QUIZ.reduce((score, q) => {
    return answers[q.id] === q.correctIndex ? score + 1 : score;
  }, 0);

  // Period 26: The CAT 2 Experience
  if (period === 26) {
    return (
      <div className="space-y-6">
        <div className="p-6 rounded-2xl bg-chalkboard-light/60 border border-chalk/15 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <div>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-red-500/20 text-red-300 border border-red-500/30">
                Period 26 · CAT 2 Reflection
              </span>
              <h2 className="text-2xl font-bold font-chalk text-chalk mt-1">
                The CAT 2 Experience: Testing Deep Understanding
              </h2>
            </div>
            <PlaceholderBadge label="[WHICH QUESTION]" field="Standout Exam Question" />
          </div>

          <p className="text-sm text-chalk/80 leading-relaxed mb-6">
            In many courses, exams reward rote memorization of slide bullet points. Dr. SHARMILA BANU K mam's CAT 2 paper was deliberately crafted to reward students who followed classroom discussions and practiced drawing state machines with a pencil.
          </p>

          {/* Unfolding Exam Paper Visual */}
          <div className="relative max-w-2xl mx-auto">
            <button
              onClick={() => setIsPaperUnfolded(!isPaperUnfolded)}
              className="absolute -top-3 right-4 z-10 px-3 py-1 rounded-full text-xs font-mono bg-[#8c5d37] text-white shadow hover:bg-[#6e462c] transition-colors"
            >
              {isPaperUnfolded ? "Fold Exam Sheet ▲" : "Unfold Exam Sheet ▼"}
            </button>

            {isPaperUnfolded && (
              <div className="p-6 sm:p-8 rounded-2xl notebook-paper border-2 border-gray-300 shadow-2xl space-y-4 animate-in fade-in duration-300">
                {/* Exam Header */}
                <div className="border-b-2 border-gray-300 pb-3 text-center space-y-1">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-600">
                    Vellore Institute of Technology · School of Computer Science & Engineering
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 font-sans">
                    CAT 2 Assessment — CSE3002: Natural Language Processing
                  </h3>
                  <div className="flex justify-between text-xs text-gray-600 font-mono pt-1">
                    <span>Date: Winter 2026</span>
                    <span>Max Marks: 50</span>
                    <span>Duration: 90 Mins</span>
                  </div>
                </div>

                {/* Standout Question with Teacher's Green Remark */}
                <div className="p-4 rounded-xl bg-white border border-gray-200 relative shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-gray-800 font-mono">
                      Question 3(b) [CO4, Derivational Morphology]
                    </span>
                    <span className="text-xs font-mono text-gray-500">10 Marks</span>
                  </div>

                  <p className="text-xs text-gray-700 leading-relaxed font-sans">
                    "Determine transitions for: Minimal, Naturalization, Spontaneousness, Actually, Revolutionary. Alter the FSA if transition is missing."
                  </p>

                  {/* Student's Written Solution Snippet */}
                  <div className="p-3 bg-amber-50/60 rounded border-l-4 border-amber-400 font-mono text-xs text-gray-800 space-y-1">
                    <span className="text-[10px] text-gray-500 block font-sans">My Answer Excerpt:</span>
                    <p>Root "minim" + "-al" → State q4 (Augmented transition q0 ──al──→ q4 to yield Adjective).</p>
                    <p>Root "act" + "-ual" + "-ly" → Traversing q0 ──ual──→ q4 ──ly──→ q7 (Adverb).</p>
                  </div>

                  {/* Teacher's Handwritten Green Remark */}
                  <div className="absolute -top-3 -right-2 transform rotate-6 bg-emerald-100 border-2 border-emerald-500 text-emerald-800 px-3 py-1 rounded-full shadow-md font-chalk text-base font-bold">
                    ✓ Good reasoning! 10/10
                  </div>
                </div>

                <div className="text-xs text-gray-600 italic leading-relaxed pt-2">
                  "Seeing that green 'Good reasoning!' confirmed that spending hours working out FSA edge cases in class paid off."
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Period 27: How I Prepared + 8-Question Practice Quiz
  return (
    <div className="space-y-6">
      <div className="p-6 rounded-2xl bg-chalkboard-light/60 border border-chalk/15 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-gold/20 text-gold border border-gold/30">
              Period 27 · Exam Preparation
            </span>
            <h2 className="text-2xl font-bold font-chalk text-chalk mt-1">
              How I Prepared & 8-Question Practice Quiz
            </h2>
          </div>
          <PlaceholderBadge label="[MY STRATEGY]" field="Study Strategy" />
        </div>

        {/* 3 Pillars of Study Strategy */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
          <div className="p-3.5 rounded-xl bg-black/40 border border-chalk/15">
            <span className="text-xs font-bold text-gold block mb-1">1. Pencil & Scrap Paper First</span>
            <p className="text-xs text-chalk/75">
              Never read an FSA passively. I hand-drew each transition from q0 to q11 on scrap paper until states became muscle memory.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-black/40 border border-chalk/15">
            <span className="text-xs font-bold text-chalk-yellow block mb-1">2. Python Edge-Case Testing</span>
            <p className="text-xs text-chalk/75">
              Whenever a rule seemed ambiguous, I ran short Python regex test scripts in Jupyter to see how real tokenizers split hyphenated roots.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-black/40 border border-chalk/15">
            <span className="text-xs font-bold text-chalk-green block mb-1">3. Benchmate Quizzing</span>
            <p className="text-xs text-chalk/75">
              We threw tricky words at each other before class at TT Food Court to trace morphemes on coffee napkins.
            </p>
          </div>
        </div>

        {/* 8-Question Practice Quiz Container */}
        <div className="p-6 rounded-2xl chalk-board-bg border-2 border-gold/40 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-chalk/15 pb-3">
            <span className="text-sm font-bold text-gold uppercase tracking-wider font-mono">
              Comprehensive NLP Practice Quiz (8 Questions)
            </span>
            <span className="text-xs font-mono font-bold text-chalk-green">
              {submitted ? `Score: ${calculatedScore} / 8 (${((calculatedScore / 8) * 100).toFixed(0)}%)` : `${Object.keys(answers).length} of 8 answered`}
            </span>
          </div>

          <div className="space-y-5">
            {CAT2_PRACTICE_QUIZ.map((q, idx) => {
              const selectedOpt = answers[q.id];
              return (
                <div key={q.id} className="p-4 rounded-xl bg-black/30 border border-chalk/10 space-y-3">
                  <h4 className="font-bold text-sm text-chalk">
                    {idx + 1}. {q.question}
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {q.options.map((opt, optIdx) => {
                      const isSelected = selectedOpt === optIdx;
                      const isCorrect = optIdx === q.correctIndex;
                      let btnClass = "bg-black/30 hover:bg-black/50 text-chalk/80 border-chalk/10";

                      if (isSelected) {
                        btnClass = "bg-gold/20 text-gold-light border-gold";
                      }
                      if (submitted) {
                        if (isCorrect) btnClass = "bg-emerald-900/60 text-emerald-200 border-emerald-400";
                        else if (isSelected) btnClass = "bg-red-900/60 text-red-200 border-red-400";
                      }

                      return (
                        <button
                          key={optIdx}
                          onClick={() => handleSelectOption(q.id, optIdx)}
                          className={`p-3 rounded-lg text-left text-xs transition-all border ${btnClass}`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>

                  {submitted && (
                    <div className="p-2.5 rounded bg-black/40 border border-chalk/10 text-xs text-chalk/85 font-sans mt-2">
                      <span className="font-bold text-gold mr-1">Explanation:</span>
                      {q.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="pt-2 flex items-center justify-between">
            <button
              onClick={() => {
                setAnswers({});
                setSubmitted(false);
              }}
              className="px-4 py-2 rounded-xl bg-black/40 hover:bg-black/60 text-xs text-chalk font-mono border border-chalk/20"
            >
              Reset Quiz
            </button>

            {!submitted ? (
              <button
                onClick={() => setSubmitted(true)}
                disabled={Object.keys(answers).length === 0}
                className="px-6 py-2.5 rounded-xl bg-gold hover:bg-gold-light text-wood-dark font-bold text-xs shadow-md transition-colors disabled:opacity-40"
              >
                Submit & Check Score
              </button>
            ) : (
              <span className="text-xs font-bold text-gold font-mono">
                {calculatedScore >= 6 ? "🎉 Stellar score! Ready for FAT." : "Review explanations above to strengthen concepts."}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
