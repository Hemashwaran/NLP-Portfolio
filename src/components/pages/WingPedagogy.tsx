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
      theory: "Morphology & Stemming",
      subTheory: "Roots, suffixes, stemming and lemmatization",
      app: "Search & Autocorrect",
      realWorld: "When you search 'running shoes', a search engine can reduce 'running' to 'run' so it also finds pages that say 'run' or 'runs'."
    },
    {
      id: 2,
      theory: "Named Entity Recognition (NER)",
      subTheory: "Finding names of people, places, dates and organisations in text",
      app: "Information Extraction",
      realWorld: "Pulling out places, dates and organisations from news articles or messages so they can be searched and sorted automatically."
    },
    {
      id: 3,
      theory: "Text Classification",
      subTheory: "Sorting text into categories using features like word counts",
      app: "Spam & Rumour Filtering",
      realWorld: "Email spam filters and message filters decide whether a piece of text is normal, spam, or misleading."
    },
    {
      id: 4,
      theory: "N-gram Language Models",
      subTheory: "Predicting the next word from the words before it",
      app: "Keyboard Next-Word Suggestions",
      realWorld: "Phone keyboards suggest the next word based on which words usually follow the ones you have typed."
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
      title: "Hands-on 1: Tokenizing Text",
      placeholder: "Hands-on 1",
      code: `# Splitting raw text into tokens with a regular expression
import re

raw_text = """
TT Library opens at 8:00 AM! Please don't leave bags unattended.
Visit http://vtop.vit.ac.in for hall tickets (CAT-2).
"""

tokens = re.findall(r'(?:https?://\\S+)|(?:\\w+[-\\w]*)|[^\\w\\s]', raw_text)
print(f"Total tokens: {len(tokens)}")
print(f"Sample tokens: {tokens[:8]}")`,
      output: `Total tokens: 26
Sample tokens: ['TT', 'Library', 'opens', 'at', '8', ':', '00', 'AM']`,
      learning: "A plain split(' ') breaks on URLs, times like '8:00 AM' and words like 'CAT-2'. A regex tokenizer handles them better."
    },
    {
      id: 2,
      title: "Hands-on 2: Counting N-grams",
      placeholder: "Hands-on 2",
      code: `# Bigram counts and probabilities
from collections import Counter

words = "natural language processing is exciting language processing helps students".split()
bigrams = list(zip(words[:-1], words[1:]))

unigram_counts = Counter(words[:-1])
bigram_counts = Counter(bigrams)
for (w1, w2), count in bigram_counts.most_common(3):
    print(f"P({w2} | {w1}) = {count}/{unigram_counts[w1]} = {count/unigram_counts[w1]:.2f}")`,
      output: `P(processing | language) = 2/2 = 1.00
P(language | natural) = 1/1 = 1.00
P(is | processing) = 1/2 = 0.50`,
      learning: "Bigram probability is Count(w1, w2) / Count(w1). This is the basic idea behind next-word suggestions."
    },
    {
      id: 3,
      title: "Hands-on 3: Stripping Suffixes",
      placeholder: "Hands-on 3",
      code: `# A simple rule-based suffix stripper
import re

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

for w in ["naturalization", "minimal", "spontaneousness"]:
    stem, rule = derive_stem(w)
    print(f"{w} -> {stem} (via {rule})")`,
      output: `naturalization -> naturalize (via ization$)
minimal -> minim (via al$)
spontaneousness -> spontaneous (via ness$)`,
      learning: "Suffix rules connect directly to derivational morphology, and show why simple rules can cut a word down to a non-word like 'minim'."
    }
  ];

  // Page 7: Mother tongue
  const [selectedLangIndex, setSelectedLangIndex] = useState(0);

  // Page 8: Stars earned in class
  const starMoments = [
    {
      title: "2 Stars: Answering Questions in Class",
      detail: "Mam asked questions during class, and I answered two of them. She gave me a star for each answer."
    },
    {
      title: "3 Stars: NLP Application Ideas",
      detail: "Mam asked us to prepare an idea using an NLP application. I presented two ideas, Outbreak Radar and a rumour detection idea, and mam gave 3 stars for them."
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
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold font-chalk text-chalk mb-2">
            Learning Through Real Applications
          </h2>
          <p className="text-sm text-chalk/80 leading-relaxed mb-6">
            Each topic we learnt in class connects to something we use every day. Click a card to flip between the topic and where it shows up in real apps.
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
                Period 6 · Hands-On in Class
              </span>
              <h2 className="text-2xl font-bold font-chalk text-chalk mt-1">
                Hands-On Coding in Class
              </h2>
            </div>
          </div>

          <p className="text-sm text-chalk/80 leading-relaxed mb-4">
            We didn't have a separate lab, but mam made us write small pieces of code in class, like tokenizing text and counting n-grams. Here are simple versions of what we practised. Switch between them and run the cell.
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
                <span className="hidden sm:inline">· {lab.title.split(': ')[1]}</span>
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
                <span className="font-mono text-gray-400 ml-2">hands_on_{curLab.id}.py</span>
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
                <span className="text-gray-400 text-[11px] font-sans"># Python 3</span>
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
              <span className="font-bold text-gold mr-1">What I learnt:</span>
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

  // Period 8: Stars earned in class
  return (
    <div className="space-y-6">
      <div className="p-6 rounded-2xl bg-chalkboard-light/60 border border-chalk/15 shadow-xl">
        <div className="flex items-center justify-between mb-2">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-gold/20 text-gold border border-gold/30 flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-gold" />
            Period 8 · Stars in Class
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold font-chalk text-chalk mb-2">
          The Stars System
        </h2>
        <p className="text-sm text-chalk/80 leading-relaxed mb-6">
          In Dr. SHARMILA BANU K mam's class, students earned stars for taking part. I earned 5 stars over the semester.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {starMoments.map((mem, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-black/40 border border-chalk/15 hover:border-gold/40 transition-colors"
            >
              <h4 className="font-bold text-chalk mb-2 font-chalk text-base">
                {mem.title}
              </h4>
              <p className="text-xs text-chalk/75 leading-relaxed">
                {mem.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
