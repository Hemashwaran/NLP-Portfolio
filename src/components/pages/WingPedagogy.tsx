import React, { useState } from 'react';
import { MOTHER_TONGUE_EXAMPLES } from '../../data/content';
import { PlaceholderBadge } from '../PlaceholderBadge';
import { ChalkTooltip } from '../ChalkTooltip';
import { Play, CheckCircle2, Globe, Star, MessageSquare, Terminal, ExternalLink } from 'lucide-react';

interface WingPedagogyProps {
  period: number;
}

export const WingPedagogy: React.FC<WingPedagogyProps> = ({ period }) => {
  // Page 5: Flip cards
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  const toggleFlip = (id: number) => {
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const applications = [
    {
      id: 1,
      theory: "Morphological Analysis & Stemming",
      subTheory: "Roots, inflectional suffixes, lemmatization dictionaries",
      app: "Search Engines & E-Commerce Autocorrect",
      realWorld: "When a shopper queries 'running shoes size 10', the engine stems 'running' to 'run' and matches 'runner shoe'. Without morphology, exact string matching fails on 40% of queries."
    },
    {
      id: 2,
      theory: "Named Entity Recognition (NER)",
      subTheory: "Sequence labeling with BIO tags (B-LOC, I-LOC, B-HOSP)",
      app: "Epidemic Surveillance & Crisis Tracking",
      realWorld: "Scanning regional newspapers in local languages to automatically extract hospital clinic locations, fever clusters, and affected districts days before government bulletins publish."
    },
    {
      id: 3,
      theory: "Text Classification & Stance Detection",
      subTheory: "Naive Bayes, TF-IDF, fine-tuned transformer encoders",
      app: "Misinformation & WhatsApp Rumour Filtering",
      realWorld: "Classifying viral student forwards into 'Verified Official Circular', 'Hostel Rumour', or 'Malicious Spam' to prevent campus panics during storm warnings."
    },
    {
      id: 4,
      theory: "Speech Phonetics & Acoustic Modeling",
      subTheory: "Phonemes, formant transitions, mel-spectrograms",
      app: "Multilingual Indian Voice Assistants",
      realWorld: "Powering voice-activated campus kiosks that understand code-mixed spoken requests in Tamil-accented English or Telugu colloquial terms."
    }
  ];

  // Page 6: Jupyter cells
  const [activeLab, setActiveLab] = useState<number>(1);
  const [runningCell, setRunningCell] = useState<boolean>(false);
  const [executedCells, setExecutedCells] = useState<Record<number, boolean>>({ 1: true });

  const handleRunCell = (labId: number) => {
    setRunningCell(true);
    setTimeout(() => {
      setExecutedCells(prev => ({ ...prev, [labId]: true }));
      setRunningCell(false);
    }, 600);
  };

  const labs = [
    {
      id: 1,
      title: "Lab 1: Tokenization & Normalization on Campus Corpus",
      placeholder: "[LAB 1]",
      code: `# Lab 1: Cleaning raw VIT student feedback corpus
import re

raw_corpus = """
TT Library opens at 8:00 AM! Please don't leave bags unattended.
Visit http://vtop.vit.ac.in for hall tickets (CAT-2).
"""

# Regex Tokenizer preserving course codes and URLs
tokens = re.findall(r'(?:https?://\S+)|(?:\w+[-\w]*)|[^\w\s]', raw_corpus)
print(f"Total tokens extracted: {len(tokens)}")
print(f"Sample tokens: {tokens[:8]}")`,
      output: `Total tokens extracted: 23
Sample tokens: ['TT', 'Library', 'opens', 'at', '8', ':', '00', 'AM']`,
      learning: "Writing custom regex tokenizers taught us how naive split(' ') breaks on URLs, timestamps ('8:00 AM'), and hyphenated course codes."
    },
    {
      id: 2,
      title: "Lab 2: Bigram Language Modeling & Predictor",
      placeholder: "[LAB 2]",
      code: `# Lab 2: Bigram conditional frequency distributions
from collections import Counter

corpus = "natural language processing is exciting language processing helps students"
words = corpus.split()
bigrams = list(zip(words[:-1], words[1:]))

# Count occurrences
bigram_counts = Counter(bigrams)
print("Top Bigram pairs:")
for pair, count in bigram_counts.most_common(3):
    print(f"P({pair[1]} | {pair[0]}) = {count}/2 = {count/2:.2f}")`,
      output: `Top Bigram pairs:
P(processing | language) = 2/2 = 1.00
P(language | natural) = 1/2 = 0.50
P(is | processing) = 1/2 = 0.50`,
      learning: "We experienced how bigram transition probabilities compute autocomplete suggestions, and how zero-frequency combinations need smoothing."
    },
    {
      id: 3,
      title: "Lab 3: Derivational Suffix Stripping & Regex Stemmer",
      placeholder: "[LAB 3]",
      code: `# Lab 3: Rule-based derivational morphology parser
def derive_stem(word):
    rules = [
        (r'ational$', 'ate'),
        (r'ization$', 'ize'),
        (r'al$', ''),
        (r'ness$', '')
    ]
    for pattern, repl in rules:
        if re.search(pattern, word):
            return re.sub(pattern, repl, word), pattern
    return word, "No suffix rule matched"

test_words = ["naturalization", "minimal", "spontaneousness"]
for w in test_words:
    stem, rule = derive_stem(w)
    print(f"{w} -> {stem} (via {rule})")`,
      output: `naturalization -> naturalize (via ization$)
minimal -> minim (via al$)
spontaneousness -> spontaneous (via ness$)`,
      learning: "Direct preparation for our CAT 2 FSA question! Hand-coding morphological suffix rules revealed why simple heuristics over-stem irregular roots."
    }
  ];

  // Page 7: Mother tongue
  const [selectedLangIndex, setSelectedLangIndex] = useState(0);

  // Page 8: Class memories
  const classMemories = [
    {
      title: "The Great 'Apple' Ambiguity Debate",
      detail: "During our Week 3 lecture on lexical polysemy, the class spent 15 minutes debating how a parser knows whether 'Apple' in 'Apple fell on Newton' is a fruit vs company. Mam challenged us to define a minimum window size of context words."
    },
    {
      title: "Chalkboard FSA Marathon",
      detail: "Before CAT 2, mam invited four students up to the board to simultaneously trace state transitions for 'antidisestablishmentarianism'. Seeing 14 states drawn in different colored chalk made the whole row cheer."
    },
    {
      title: "The Mother Tongue Epiphany",
      detail: "When a classmate was confused by agglutinative recursion, mam asked him to translate 'in my school' into Malayalam ('എന്റെ സ്കൂളിൽ'). The case ending '-il' made bound morphemes instantly crystal clear."
    },
    {
      title: "Laptop Screen Crash & Live Recovery",
      detail: "A student’s regex script went into an infinite backtracking loop during Lab 2. Instead of scolding, mam projected the code onto the screen to teach the entire class about catastrophic backtracking in regular expressions."
    },
    {
      title: "Pitching Outbreak Radar",
      detail: "Presenting the idea of tracking virus transmission corridors by linking local newspaper NER with inter-district bus depots. Mam awarded us 3 gold stars on her podium diary right there."
    },
    {
      title: "Green Ink 'Good!' on CAT 2",
      detail: "Getting my graded CAT 2 script back with a handwritten 'Good!' next to my adjectival derivational suffix derivation. It felt like winning a championship after days of drawing FSAs."
    }
  ];

  const mamQuotes = [
    {
      quote: "Don't let your code pretend it understands language if you are merely matching substrings.",
      context: "During our regex tokenization lab, warning us against naive text filters."
    },
    {
      quote: "If you cannot parse it with a pencil on rough paper, no deep learning library will save you.",
      context: "Emphasizing the foundational importance of drawing syntax trees and FSA states by hand."
    },
    {
      quote: "Language is alive. Every time a new meme or slang emerges, our tokenizers have to adapt.",
      context: "Explaining out-of-vocabulary (OOV) tokens and subword tokenization algorithms."
    },
    {
      quote: "In India, our greatest NLP superpower is our multilingual intuition. Use it!",
      context: "Encouraging us to test our morphological models against our regional mother tongues."
    }
  ];

  if (period === 5) {
    return (
      <div className="space-y-6">
        <div className="p-6 rounded-2xl bg-chalkboard-light/60 border border-chalk/15 shadow-xl">
          <div className="flex items-center justify-between mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-gold/20 text-gold border border-gold/30">
              Period 5 · Pedagogy
            </span>
            <PlaceholderBadge label="[CONFIRM which were discussed]" field="Theory Application Pairs" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold font-chalk text-chalk mb-2">
            Learning Through Real Applications
          </h2>
          <p className="text-sm text-chalk/80 leading-relaxed mb-6">
            <PlaceholderBadge label="Dr. SHARMILA BANU K mam" /> never taught theoretical formulas in isolation. Every concept was grounded in an application we interact with on our phones daily. Click any card below to flip between theory and its real-world engineering counterpart!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {applications.map((item) => {
              const isFlipped = !!flippedCards[item.id];
              return (
                <div
                  key={item.id}
                  onClick={() => toggleFlip(item.id)}
                  className={`p-5 rounded-xl border cursor-pointer transition-all duration-300 min-h-[190px] flex flex-col justify-between shadow-md ${isFlipped
                    ? 'bg-amber-950/40 border-gold text-chalk'
                    : 'bg-black/40 border-chalk/20 hover:border-gold/50 text-chalk'
                    }`}
                >
                  {isFlipped ? (
                    <div>
                      <div className="flex items-center justify-between text-xs text-gold font-bold mb-2">
                        <span>REAL APPLICATION</span>
                        <span className="text-[11px] underline">Click to view theory</span>
                      </div>
                      <h4 className="font-bold text-base text-gold-light mb-1">{item.app}</h4>
                      <p className="text-xs text-chalk/90 leading-relaxed">{item.realWorld}</p>
                    </div>
                  ) : (
                    <div>
                      <div className="flex items-center justify-between text-xs text-chalk-blue font-bold mb-2">
                        <span>THEORY FOUNDATION</span>
                        <span className="text-[11px] underline">Click to view real app</span>
                      </div>
                      <h4 className="font-bold text-base text-chalk mb-1">{item.theory}</h4>
                      <p className="text-xs text-chalk/70 leading-relaxed">{item.subTheory}</p>
                    </div>
                  )}

                  <div className="pt-3 border-t border-chalk/10 flex items-center justify-between text-[11px] text-chalk/60 font-mono">
                    <span>Topic {item.id} of 4</span>
                    <span className="text-gold font-sans font-bold">Flip card ↺</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  if (period === 6) {
    const curLab = labs.find(l => l.id === activeLab) || labs[0];
    return (
      <div className="space-y-6">
        <div className="p-6 rounded-2xl bg-chalkboard-light/60 border border-chalk/15 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <div>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-chalk-yellow/20 text-chalk-yellow border border-chalk-yellow/30">
                Period 6 · Hands-On Lab
              </span>
              <h2 className="text-2xl font-bold font-chalk text-chalk mt-1">
                Hands-On with a Corpus (Jupyter Notebook)
              </h2>
            </div>
            <a
              href="#notebook-link"
              onClick={(e) => { e.preventDefault(); alert("Notebook link: [NOTEBOOK / GITHUB LINK] placeholder"); }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/40 hover:bg-black/60 text-xs text-chalk font-mono border border-chalk/20 transition-colors self-start"
            >
              <Terminal className="w-3.5 h-3.5 text-gold" />
              <span><PlaceholderBadge label="[NOTEBOOK / GITHUB LINK]" /></span>
              <ExternalLink className="w-3 h-3 text-chalk/50" />
            </a>
          </div>

          <p className="text-sm text-chalk/80 leading-relaxed mb-4">
            Classroom slides only take you so far. Mam had us boot up Jupyter on our laptops to test algorithms against actual text. Switch between our 3 core lab modules below and run the cells!
          </p>

          {/* Lab Selector Tabs */}
          <div className="flex flex-wrap gap-2 mb-4">
            {labs.map((lab) => (
              <button
                key={lab.id}
                onClick={() => setActiveLab(lab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${activeLab === lab.id
                  ? 'bg-gold text-wood-dark font-bold shadow'
                  : 'bg-black/30 hover:bg-black/50 text-chalk/80 border border-chalk/10'
                  }`}
              >
                <span>{lab.placeholder}</span>
                <span className="hidden sm:inline">· {lab.title.split(':')[0]}</span>
              </button>
            ))}
          </div>

          {/* Interactive Laptop Display Screen */}
          <div className="rounded-xl bg-[#0d1117] border-2 border-chalk/30 overflow-hidden shadow-2xl">
            {/* Window Topbar */}
            <div className="bg-[#161b22] px-4 py-2 border-b border-gray-700 flex items-center justify-between text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                <span className="font-mono text-gray-400 ml-2">jupyter_lab_session_{curLab.id}.ipynb</span>
              </div>
              <button
                onClick={() => handleRunCell(curLab.id)}
                disabled={runningCell}
                className="inline-flex items-center gap-1 px-3 py-1 rounded bg-gold/90 hover:bg-gold text-wood-dark font-bold text-xs shadow transition-colors"
              >
                <Play className="w-3 h-3 fill-current" />
                <span>{runningCell ? 'Running Cell...' : 'Run Cell'}</span>
              </button>
            </div>

            {/* Code Cell */}
            <div className="p-4 font-mono text-xs text-gray-200 overflow-x-auto space-y-1">
              <div className="text-gray-500 font-semibold mb-2 flex items-center gap-2">
                <span>In [{executedCells[curLab.id] ? curLab.id : ' '}]:</span>
                <span className="text-gray-400 text-[11px] font-sans"># Python 3.11 (NLP Kernel)</span>
              </div>
              <pre className="text-chalk-blue leading-relaxed">{curLab.code}</pre>
            </div>

            {/* Output Cell */}
            {executedCells[curLab.id] && (
              <div className="p-4 bg-[#090d13] border-t border-gray-800 font-mono text-xs text-chalk-green overflow-x-auto">
                <div className="text-gray-500 text-[11px] mb-1">Out [{curLab.id}]:</div>
                <pre className="leading-relaxed whitespace-pre-wrap">{curLab.output}</pre>
              </div>
            )}
          </div>

          {/* Reflection note under code */}
          <div className="mt-4 p-3.5 rounded-xl bg-black/40 border border-gold/30 text-xs text-chalk/90 flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-gold mr-1">What I Learned from {curLab.placeholder}:</span>
              <span>{curLab.learning}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (period === 7) {
    const activeEx = MOTHER_TONGUE_EXAMPLES[selectedLangIndex];
    return (
      <div className="space-y-6">
        <div className="p-6 rounded-2xl bg-chalkboard-light/60 border border-chalk/15 shadow-xl">
          <div className="flex items-center justify-between mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-chalk-blue/20 text-chalk-blue border border-chalk-blue/30">
              Period 7 · Multilingual Intuition
            </span>
            <PlaceholderBadge label="[REVIEW BY NATIVE SPEAKER]" field="Regional Language Check" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold font-chalk text-chalk mb-2">
            Learning in Our Mother Tongue
          </h2>
          <p className="text-sm text-chalk/80 leading-relaxed mb-6">
            Mam regularly called upon students from different linguistic backgrounds to translate roots and suffix chains into their native languages. Connecting <ChalkTooltip termKey="fsa">FSA</ChalkTooltip> transitions to Indian vernaculars made abstract computational morphology instantly intuitive.
          </p>

          {/* Language Switcher Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {MOTHER_TONGUE_EXAMPLES.map((ex, idx) => (
              <button
                key={ex.lang}
                onClick={() => setSelectedLangIndex(idx)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${selectedLangIndex === idx
                  ? 'bg-gold text-wood-dark shadow-md scale-105'
                  : 'bg-black/30 text-chalk/80 hover:bg-black/50 border border-chalk/10'
                  }`}
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{ex.nativeName} ({ex.lang})</span>
              </button>
            ))}
          </div>

          {/* Interactive Morphological Breakdown Card */}
          <div className="p-6 rounded-2xl chalk-board-bg border-2 border-chalk/20 relative shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <span className="text-xs font-mono text-gold-light uppercase tracking-wider block mb-1">
                  Root & Morpheme Transition ({activeEx.lang})
                </span>
                <h3 className="text-2xl font-bold font-chalk text-chalk mb-2">
                  {activeEx.root} <span className="text-sm text-chalk/60 font-sans">({activeEx.category})</span>
                </h3>

                <div className="my-4 p-3.5 rounded-xl bg-black/40 border border-gold/40">
                  <span className="text-xs text-chalk/60 block mb-1">Derivational Sequence:</span>
                  <p className="font-mono text-base font-bold text-chalk-yellow">
                    {activeEx.derivation}
                  </p>
                  <span className="inline-block mt-2 px-2 py-0.5 rounded bg-chalk-green/20 text-chalk-green text-xs font-semibold">
                    Result: {activeEx.resultCategory}
                  </span>
                </div>

                <p className="text-xs text-chalk/80 leading-relaxed">
                  {activeEx.explanation}
                </p>
              </div>

              {/* Graphical FSA Suffix Chain Illustration */}
              <div className="p-4 rounded-xl bg-black/30 border border-chalk/10 text-center">
                <span className="text-xs font-mono text-chalk/60 block mb-3">FSA State Transition Model</span>
                <div className="flex items-center justify-center gap-2 py-4">
                  <div className="w-12 h-12 rounded-full border-2 border-gold flex items-center justify-center font-mono text-xs font-bold text-gold">
                    q0
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] text-chalk-yellow font-mono px-1">+ suffix</span>
                    <span className="text-gold">───────►</span>
                  </div>
                  <div className="w-12 h-12 rounded-full border-4 border-double border-chalk-green flex items-center justify-center font-mono text-xs font-bold text-chalk-green">
                    q_acc
                  </div>
                </div>
                <p className="text-[11px] text-chalk/70 italic mt-2">
                  "Agglutinative languages chain multiple morphemes into one word. The FSA is its natural representation."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Period 8: Class Moments & Stars System
  return (
    <div className="space-y-6">
      <div className="p-6 rounded-2xl bg-chalkboard-light/60 border border-chalk/15 shadow-xl">
        <div className="flex items-center justify-between mb-2">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-gold/20 text-gold border border-gold/30 flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-gold" />
            Period 8 · Star System & Moments
          </span>
          <PlaceholderBadge label="[MY MEMORIES]" field="Personal Memories" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold font-chalk text-chalk mb-2">
          Class Moments & The Stars System
        </h2>
        <p className="text-sm text-chalk/80 leading-relaxed mb-6">
          In Dr. SHARMILA BANU K mam's classroom, active questions were celebrated. Sharp insights earned gold stars on her podium register. Here are 6 memorable moments and 4 phrases that stuck with me.
        </p>

        {/* 6 Class Memories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {classMemories.map((mem, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-black/40 border border-chalk/15 hover:border-gold/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gold block mb-1">
                  Memory #{idx + 1}
                </span>
                <h4 className="font-bold text-sm text-chalk mb-2 font-chalk text-base">
                  {mem.title}
                </h4>
                <p className="text-xs text-chalk/75 leading-relaxed">
                  {mem.detail}
                </p>
              </div>
              <div className="pt-2 mt-3 border-t border-chalk/10 text-[10px] text-chalk/50 font-mono">
                VIT prp Class Session
              </div>
            </div>
          ))}
        </div>

        {/* Things Mam Said That Stuck With Me */}
        <div className="p-5 rounded-xl bg-chalkboard-dark border border-chalk/20">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold font-chalk text-gold flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-gold" />
              Things Mam Said That Stuck With Me
            </h3>
            <PlaceholderBadge label="[MY WORDS]" field="Faculty Quotes" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mamQuotes.map((q, idx) => (
              <div key={idx} className="p-3.5 rounded-lg bg-black/30 border border-chalk/10">
                <blockquote className="text-xs font-chalk text-chalk-yellow text-sm leading-snug mb-1">
                  "{q.quote}"
                </blockquote>
                <span className="text-[11px] text-chalk/60 block font-sans">
                  — Context: {q.context}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
