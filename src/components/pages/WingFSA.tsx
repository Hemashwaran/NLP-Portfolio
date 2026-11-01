import React, { useState } from 'react';
import { FSA_EXAM_WORDS } from '../../data/content';
import { PlaceholderBadge } from '../PlaceholderBadge';
import { ChalkTooltip } from '../ChalkTooltip';
import { FileText, ArrowRight, Play, CheckCircle2, HelpCircle, RefreshCw, AlertTriangle } from 'lucide-react';

interface WingFSAProps {
  period: number;
}

export const WingFSA: React.FC<WingFSAProps> = ({ period }) => {
  // Page 17: Interactive FSA Word Picker & Step-by-Step State Tracer
  const [selectedWordId, setSelectedWordId] = useState<string>('a');
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false);

  const curWord = FSA_EXAM_WORDS.find(w => w.id === selectedWordId) || FSA_EXAM_WORDS[0];

  // Auto-play steps
  React.useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (isAutoPlaying) {
      timer = setInterval(() => {
        setActiveStepIndex(prev => {
          if (prev < curWord.path.length - 1) return prev + 1;
          setIsAutoPlaying(false);
          return prev;
        });
      }, 1200);
    }
    return () => clearInterval(timer);
  }, [isAutoPlaying, curWord.path.length]);

  const handleSelectWord = (id: string) => {
    setSelectedWordId(id);
    setActiveStepIndex(0);
    setIsAutoPlaying(false);
  };

  // Page 18: 5-Question FSA Mini Quiz
  const fsaQuizQuestions = [
    {
      q: "Why are accepting states in an FSA drawn with a double circle?",
      options: [
        "They represent intermediate error states",
        "They denote that the input character sequence forms a valid, complete word in the lexicon",
        "They show loops that consume zero characters",
        "They are the starting entry points for prefixes"
      ],
      correct: 1,
      exp: "In formal automata theory, double circles mark final/accepting states where the machine halts successfully."
    },
    {
      q: "In 'minimal', what part of speech does the derivational suffix '-al' generate?",
      options: ["Noun", "Adverb", "Adjective", "Verb"],
      correct: 2,
      exp: "The bound derivational morpheme '-al' attaches to roots or nouns to create adjectives (e.g., origin → original, minim → minimal)."
    },
    {
      q: "In the word 'naturalization', which state sequence correctly traces the chain of derivations?",
      options: [
        "Noun (nature) → Adj (natural) → Verb (naturalize) → Noun (naturalization)",
        "Verb → Adverb → Noun → Adjective",
        "Noun → Verb → Adverb → Adjective",
        "Adjective → Noun → Verb → Preposition"
      ],
      correct: 0,
      exp: "Root 'nature' (N) takes '-al' to become adjective 'natural', then '-ize' to become verb 'naturalize', then '-ation' to become abstract noun 'naturalization'."
    },
    {
      q: "Why did the original classroom FSA require an augmented transition for 'actually'?",
      options: [
        "Because English adverbs can never be derived by FSAs",
        "Because it required traversing from root 'act' through adjectival '-ual' before taking suffix '-ly' to reach adverb state q7",
        "Because 'actually' has an unpronounceable phoneme",
        "Because it is an irregular German borrowing"
      ],
      correct: 1,
      exp: "The standard FSA diagram started from base roots without the -ual branch entering the adjectival node before reaching -ly."
    },
    {
      q: "How does Dravidian morphology (e.g. Tamil '-த்தனம்') mirror English derivational suffixes like '-ness'?",
      options: [
        "Both transform concrete noun/adjective roots into abstract state nouns",
        "Both are inflectional tense markers only",
        "Both delete the root word completely",
        "Both only apply to numerals"
      ],
      correct: 0,
      exp: "In Tamil, 'மனிதன்' (man) + '-த்தனம்' → 'மனிதத்தனம்' (humanity). Just like English happy + -ness → happiness."
    }
  ];

  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const handleSelectQuizAnswer = (qIdx: number, optIdx: number) => {
    if (showResults) return;
    setQuizAnswers(prev => ({ ...prev, [qIdx]: optIdx }));
  };

  const score = Object.entries(quizAnswers).reduce((acc, [qIdx, ans]) => {
    return ans === fsaQuizQuestions[parseInt(qIdx)].correct ? acc + 1 : acc;
  }, 0);

  // Period 16: The Exam Question Card
  if (period === 16) {
    return (
      <div className="space-y-6">
        <div className="p-6 sm:p-8 rounded-2xl chalk-board-bg border-4 border-wood shadow-2xl relative">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-chalk/20 pb-4 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-red-500/20 text-red-300 border border-red-500/30">
                  Continuous Assessment Test 2 (CAT 2)
                </span>
                <span className="text-xs text-chalk/60 font-mono">CSE3002 · CO4 Derivational Morphology</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-chalk text-chalk">
                The 10-Mark Exam Question Card
              </h2>
            </div>
            <div className="text-right">
              <span className="text-xl font-bold font-mono text-gold">5 × 2 = 10 Marks</span>
              <span className="block text-[11px] text-chalk/60">prp Hall</span>
            </div>
          </div>

          {/* Actual Question Box */}
          <div className="p-6 rounded-xl bg-black/50 border-2 border-gold/40 shadow-inner mb-6 space-y-3">
            <h3 className="font-bold text-base text-gold font-sans flex items-center gap-2">
              <FileText className="w-5 h-5 text-gold" />
              QUESTION STATEMENT (Section B, CO4):
            </h3>
            <p className="text-sm sm:text-base text-chalk font-mono leading-relaxed pl-3 border-l-2 border-gold">
              "Determine the transitions for the following words from the given Finite State Automaton (FSA) of Derivational Morphology. Also, if the given FSA does not include the transition for any of the given words, alter that part of the FSA and present the sequence of transitions."
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 pt-3">
              {[
                { label: 'a)', word: 'Minimal' },
                { label: 'b)', word: 'Naturalization' },
                { label: 'c)', word: 'Spontaneousness' },
                { label: 'd)', word: 'Actually' },
                { label: 'e)', word: 'Revolutionary' },
              ].map((item) => (
                <div key={item.label} className="p-2.5 rounded-lg bg-chalkboard-light/60 border border-chalk/10 text-center">
                  <span className="text-xs text-gold font-bold font-mono block">{item.label}</span>
                  <span className="text-sm font-bold text-chalk">{item.word}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-black/30 border border-chalk/15 text-xs text-chalk/80 space-y-2">
            <p className="font-bold text-chalk-yellow flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-chalk-yellow" />
              Why this question tested real understanding:
            </p>
            <p className="leading-relaxed">
              Standard textbook diagrams only connect common derivational suffixes (-ize, -ation, -ness). Words like <em>minimal</em> (-al on a root) and <em>revolutionary</em> (-ary) do not have ready-made paths in standard simplified FSAs. You had to diagnose where the state machine blocks and mathematically augment it!
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Period 17: Interactive FSA & Step Walkthrough
  if (period === 17) {
    return (
      <div className="space-y-6">
        <div className="p-6 rounded-2xl bg-chalkboard-light/60 border border-chalk/15 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <div>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-gold/20 text-gold border border-gold/30">
                Period 17 · State Machine Walkthrough
              </span>
              <h2 className="text-2xl font-bold font-chalk text-chalk mt-1">
                English Derivational Morphology FSA (q0–q11)
              </h2>
            </div>
            <PlaceholderBadge label="[VERIFY MY ANSWER]" field="FSA Derivation Transitions" />
          </div>

          {/* Word Picker Buttons */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-xs text-chalk/70 font-mono mr-1">Choose Word:</span>
            {FSA_EXAM_WORDS.map((w) => (
              <button
                key={w.id}
                onClick={() => handleSelectWord(w.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold font-mono transition-all flex items-center gap-1.5 ${selectedWordId === w.id
                    ? 'bg-gold text-wood-dark shadow-md scale-105'
                    : 'bg-black/40 text-chalk/80 hover:bg-black/60 border border-chalk/10'
                  }`}
              >
                <span>{w.id})</span>
                <span>{w.word}</span>
                {w.augmented && (
                  <span className="w-2 h-2 rounded-full bg-brand-coral" title="Requires augmented transition" />
                )}
              </button>
            ))}
          </div>

          {/* Interactive SVG Diagram of Derivational FSA */}
          <div className="rounded-2xl bg-[#141e1b] border-2 border-chalk/25 p-4 overflow-x-auto shadow-2xl relative">
            <div className="flex items-center justify-between text-xs text-chalk/60 mb-2">
              <span className="font-mono">Formal Automata Graph · Double circles = Accepting states</span>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded-full bg-chalk-green inline-block" /> Standard Edge
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded-full bg-brand-coral inline-block" /> Augmented Edge
                </span>
              </div>
            </div>

            <svg viewBox="0 0 920 380" className="w-full min-w-[700px] h-auto font-mono text-xs select-none">
              <defs>
                <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#888" />
                </marker>
                <marker id="arrow-green" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#99d98c" />
                </marker>
                <marker id="arrow-coral" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#e76f51" />
                </marker>
              </defs>

              {/* Start State q0 */}
              <g transform="translate(80, 190)">
                <line x1="-50" y1="0" x2="-22" y2="0" stroke="#f2b84b" strokeWidth="2.5" markerEnd="url(#arrow)" />
                <circle cx="0" cy="0" r="22" fill="#1f2d2a" stroke="#f2b84b" strokeWidth="3" />
                <text x="0" y="4" textAnchor="middle" fill="#fff" fontWeight="bold">q0</text>
                <text x="0" y="38" textAnchor="middle" fill="#aaa" fontSize="10">Root Base</text>
              </g>

              {/* Standard Branch 1: q0 -> q1 via -ize (Verb) */}
              <line x1="102" y1="180" x2="258" y2="105" stroke="#99d98c" strokeWidth="2" markerEnd="url(#arrow-green)" />
              <text x="175" y="130" fill="#99d98c" fontSize="11" fontWeight="bold">-ize (V)</text>

              {/* State q1 (Verb) */}
              <g transform="translate(280, 95)">
                <circle cx="0" cy="0" r="22" fill="#1f2d2a" stroke="#99d98c" strokeWidth="2.5" />
                <circle cx="0" cy="0" r="18" fill="none" stroke="#99d98c" strokeWidth="1.5" />
                <text x="0" y="4" textAnchor="middle" fill="#fff" fontWeight="bold">q1</text>
                <text x="0" y="-30" textAnchor="middle" fill="#99d98c" fontSize="10">Verb (Acc)</text>
              </g>

              {/* q1 -> q2 via -ation (Noun) */}
              <line x1="302" y1="95" x2="458" y2="95" stroke="#99d98c" strokeWidth="2" markerEnd="url(#arrow-green)" />
              <text x="380" y="85" textAnchor="middle" fill="#99d98c" fontSize="11" fontWeight="bold">-ation (N)</text>

              {/* State q2 (Noun, Accepting) */}
              <g transform="translate(480, 95)">
                <circle cx="0" cy="0" r="22" fill="#1f2d2a" stroke="#99d98c" strokeWidth="2.5" />
                <circle cx="0" cy="0" r="18" fill="none" stroke="#99d98c" strokeWidth="1.5" />
                <text x="0" y="4" textAnchor="middle" fill="#fff" fontWeight="bold">q2</text>
                <text x="0" y="-30" textAnchor="middle" fill="#99d98c" fontSize="10">Noun (Acc)</text>
              </g>

              {/* Standard Branch 2: q0 -> q6 via -ness (Noun) */}
              <line x1="102" y1="200" x2="458" y2="280" stroke="#99d98c" strokeWidth="2" markerEnd="url(#arrow-green)" />
              <text x="240" y="260" fill="#99d98c" fontSize="11" fontWeight="bold">-ness (N)</text>

              {/* State q6 (Noun, Accepting) */}
              <g transform="translate(480, 285)">
                <circle cx="0" cy="0" r="22" fill="#1f2d2a" stroke="#99d98c" strokeWidth="2.5" />
                <circle cx="0" cy="0" r="18" fill="none" stroke="#99d98c" strokeWidth="1.5" />
                <text x="0" y="4" textAnchor="middle" fill="#fff" fontWeight="bold">q6</text>
                <text x="0" y="38" textAnchor="middle" fill="#99d98c" fontSize="10">Noun (Acc)</text>
              </g>

              {/* AUGMENTED BRANCH: q0 -> q4 via -al / -ual (Adjective) */}
              <path d="M 100 170 Q 280 200 458 190" fill="none" stroke="#e76f51" strokeWidth="2.5" strokeDasharray="5 3" markerEnd="url(#arrow-coral)" />
              <text x="280" y="215" fill="#e76f51" fontSize="11" fontWeight="bold">Augmented: -al / -ual (Adj)</text>

              {/* State q4 (Adjective, Accepting) */}
              <g transform="translate(480, 190)">
                <circle cx="0" cy="0" r="22" fill="#1f2d2a" stroke="#e76f51" strokeWidth="2.5" />
                <circle cx="0" cy="0" r="18" fill="none" stroke="#e76f51" strokeWidth="1.5" />
                <text x="0" y="4" textAnchor="middle" fill="#fff" fontWeight="bold">q4</text>
                <text x="0" y="38" textAnchor="middle" fill="#e76f51" fontSize="10">Adj (Acc)</text>
              </g>

              {/* q4 -> q1 via -ize loop back */}
              <path d="M 465 175 Q 380 140 302 110" fill="none" stroke="#99d98c" strokeWidth="1.5" markerEnd="url(#arrow-green)" />
              <text x="375" y="150" fill="#99d98c" fontSize="10">-ize (naturalize)</text>

              {/* q4 -> q7 via -ly (Adverb) */}
              <line x1="502" y1="190" x2="680" y2="190" stroke="#99d98c" strokeWidth="2" markerEnd="url(#arrow-green)" />
              <text x="590" y="180" textAnchor="middle" fill="#99d98c" fontSize="11" fontWeight="bold">-ly (Adv)</text>

              {/* State q7 (Adverb, Accepting) */}
              <g transform="translate(705, 190)">
                <circle cx="0" cy="0" r="22" fill="#1f2d2a" stroke="#99d98c" strokeWidth="2.5" />
                <circle cx="0" cy="0" r="18" fill="none" stroke="#99d98c" strokeWidth="1.5" />
                <text x="0" y="4" textAnchor="middle" fill="#fff" fontWeight="bold">q7</text>
                <text x="0" y="38" textAnchor="middle" fill="#99d98c" fontSize="10">Adv (Acc)</text>
              </g>

              {/* AUGMENTED BRANCH: q0 -> q8 via -ary (Revolutionary) */}
              <path d="M 102 210 Q 300 350 680 300" fill="none" stroke="#e76f51" strokeWidth="2" strokeDasharray="5 3" markerEnd="url(#arrow-coral)" />
              <text x="320" y="335" fill="#e76f51" fontSize="11" fontWeight="bold">Augmented: -ary (Adj)</text>

              {/* State q8 (Adjective, Accepting) */}
              <g transform="translate(705, 295)">
                <circle cx="0" cy="0" r="22" fill="#1f2d2a" stroke="#e76f51" strokeWidth="2.5" />
                <circle cx="0" cy="0" r="18" fill="none" stroke="#e76f51" strokeWidth="1.5" />
                <text x="0" y="4" textAnchor="middle" fill="#fff" fontWeight="bold">q8</text>
                <text x="0" y="38" textAnchor="middle" fill="#e76f51" fontSize="10">Adj (Acc)</text>
              </g>
            </svg>
          </div>

          {/* Stepper Controls & Path Breakdown */}
          <div className="p-5 rounded-xl bg-black/40 border border-gold/40 mt-4 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-chalk/10 pb-2">
              <div>
                <span className="text-xs text-gold font-mono font-bold uppercase">
                  Word Derivation Sequence: "{curWord.word}"
                </span>
                <span className="block text-xs text-chalk/70">{curWord.derivationType} · Base: {curWord.root}</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="px-3 py-1 rounded bg-gold hover:bg-gold-light text-wood-dark font-bold text-xs flex items-center gap-1 shadow transition-colors"
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>{isAutoPlaying ? 'Pause Step' : 'Animate Path'}</span>
                </button>
                <button
                  onClick={() => setActiveStepIndex(0)}
                  className="p-1 rounded bg-black/40 text-chalk hover:text-gold border border-chalk/20"
                  title="Reset Steps"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Steps Timeline */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {curWord.path.map((step, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div
                    onClick={() => setActiveStepIndex(idx)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold cursor-pointer transition-all border ${idx <= activeStepIndex
                        ? 'bg-gold/20 text-gold-light border-gold/50 shadow-sm'
                        : 'bg-black/30 text-chalk/40 border-chalk/10'
                      }`}
                  >
                    Step {idx + 1}: {step}
                  </div>
                  {idx < curWord.path.length - 1 && (
                    <ArrowRight className="w-3 h-3 text-chalk/40" />
                  )}
                </div>
              ))}
            </div>

            {/* Augmented Transition Rationale Note */}
            <div className="p-3 rounded-lg bg-black/30 border border-brand-coral/30 text-xs text-chalk/90 mt-2">
              <span className="font-bold text-brand-coral mr-1">Automaton Note:</span>
              <span>{curWord.augmentedNote}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Period 18: In My Mother Tongue + 5-Question Quiz
  return (
    <div className="space-y-6">
      <div className="p-6 rounded-2xl bg-chalkboard-light/60 border border-chalk/15 shadow-xl">
        <div className="flex items-center justify-between mb-2">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-chalk-green/20 text-chalk-green border border-chalk-green/30">
            Period 18 · Mother Tongue & Knowledge Check
          </span>
          <PlaceholderBadge label="[MY LANGUAGE]" field="Regional Language" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold font-chalk text-chalk mb-2">
          Derivational Morphology in Indian Languages + 5-Question Quiz
        </h2>
        <p className="text-sm text-chalk/80 leading-relaxed mb-6">
          Derivation is not just an English feature. In Tamil and Hindi, bound affixes systematically shift concrete nouns into qualities (e.g. தமிழ்: மனிதன் → மனிதத்தனம்; हिन्दी: मानव → मानवता). Test your comprehension of derivational state machines below!
        </p>

        {/* 5-Question Quiz Card */}
        <div className="p-6 rounded-2xl chalk-board-bg border-2 border-gold/40 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-chalk/15 pb-3">
            <span className="text-sm font-bold text-gold uppercase tracking-wider font-mono">
              FSA Derivational Morphology Quiz
            </span>
            <span className="text-xs font-mono text-chalk-green font-bold">
              {showResults ? `Score: ${score} / 5 (${((score / 5) * 100).toFixed(0)}%)` : `${Object.keys(quizAnswers).length} of 5 Answered`}
            </span>
          </div>

          <div className="space-y-6">
            {fsaQuizQuestions.map((qItem, qIdx) => {
              const selectedOpt = quizAnswers[qIdx];
              return (
                <div key={qIdx} className="p-4 rounded-xl bg-black/30 border border-chalk/10 space-y-3">
                  <h4 className="font-bold text-sm text-chalk">
                    {qIdx + 1}. {qItem.q}
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {qItem.options.map((opt, optIdx) => {
                      const isSelected = selectedOpt === optIdx;
                      const isCorrect = optIdx === qItem.correct;
                      let btnStyle = "bg-black/30 hover:bg-black/50 text-chalk/80 border-chalk/10";

                      if (isSelected) {
                        btnStyle = "bg-gold/20 text-gold-light border-gold";
                      }
                      if (showResults) {
                        if (isCorrect) btnStyle = "bg-emerald-900/60 text-emerald-200 border-emerald-400";
                        else if (isSelected) btnStyle = "bg-red-900/60 text-red-200 border-red-400";
                      }

                      return (
                        <button
                          key={optIdx}
                          onClick={() => handleSelectQuizAnswer(qIdx, optIdx)}
                          className={`p-3 rounded-lg text-left text-xs font-sans transition-all border ${btnStyle}`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>

                  {showResults && (
                    <div className="p-2.5 rounded bg-black/40 border border-chalk/10 text-xs text-chalk/80 font-sans mt-2">
                      <span className="font-bold text-gold mr-1">Explanation:</span>
                      {qItem.exp}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quiz Action Buttons */}
          <div className="pt-2 flex items-center justify-between">
            <button
              onClick={() => {
                setQuizAnswers({});
                setShowResults(false);
              }}
              className="px-4 py-2 rounded-xl bg-black/40 hover:bg-black/60 text-xs text-chalk font-mono border border-chalk/20"
            >
              Reset Quiz
            </button>

            {!showResults ? (
              <button
                onClick={() => setShowResults(true)}
                disabled={Object.keys(quizAnswers).length === 0}
                className="px-6 py-2.5 rounded-xl bg-gold hover:bg-gold-light text-wood-dark font-bold text-xs shadow-md transition-colors disabled:opacity-40"
              >
                Submit Answers & Reveal Explanations
              </button>
            ) : (
              <span className="text-xs font-bold text-chalk-green font-mono">
                {score >= 4 ? "🌟 Outstanding! Ready for CAT 2 Section B." : "Review explanations above to brush up."}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
