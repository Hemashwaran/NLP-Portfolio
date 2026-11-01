import React, { useState, useEffect } from 'react';
import { GLOSSARY_FLASHCARDS } from '../../data/content';
import { ChalkTooltip } from '../ChalkTooltip';
import { Layers, Scissors, Check, Tag, Repeat, Sparkles, Shuffle, CheckCircle, HelpCircle } from 'lucide-react';

interface WingConceptsProps {
  period: number;
}

export const WingConcepts: React.FC<WingConceptsProps> = ({ period }) => {
  // Page 9: Levels of NLP Stack
  const [activeLevel, setActiveLevel] = useState<number>(3); // Default Semantics
  const nlpLevels = [
    {
      level: 1,
      name: "Phonetics & Orthography",
      unit: "Sounds & Symbols",
      desc: "The physical speech sounds (acoustic waves, phonemes) and writing symbols (letters, scripts).",
      example: "Transcribing spoken audio into text tokens across English and Indian scripts."
    },
    {
      level: 2,
      name: "Morphology",
      unit: "Morphemes & Word Forms",
      desc: "How roots combine with prefixes and suffixes to convey tense, number, and lexical category.",
      example: "'un-' + 'break' + '-able' = 'unbreakable' (Negation + Verb + Adjective suffix)."
    },
    {
      level: 3,
      name: "Syntax & Grammar",
      unit: "Phrases & Sentence Trees",
      desc: "The grammatical structural rules governing how words assemble into valid phrases.",
      example: "NP (Noun Phrase) + VP (Verb Phrase) → 'The intelligent student' + 'reads the paper'."
    },
    {
      level: 4,
      name: "Semantics",
      unit: "Literal Word & Phrase Meaning",
      desc: "The literal meaning encoded in language independent of situation or tone.",
      example: "Disambiguating whether 'river bank' or 'HDFC bank' is meant in context."
    },
    {
      level: 5,
      name: "Pragmatics & Discourse",
      unit: "Social Context & Intent",
      desc: "How context, speaker relationship, sarcasm, and shared knowledge determine real intent.",
      example: "'Could you open the door?' is a polite request to act, not a question of physical capability."
    }
  ];

  // Page 10: Interactive Tokenizer Box
  const [tokenInput, setTokenInput] = useState<string>("VIT Vellore's NLP course is exciting! Let's tokenize 2026 text.");
  const [tokens, setTokens] = useState<string[]>([]);
  const stopWordsList = new Set(['is', 'the', 'a', 'an', 'at', 'in', 'of', 'and', 'for', 'to', 'on']);

  useEffect(() => {
    // Regex tokenize words, contractions, numbers, punctuation
    const matches = tokenInput.match(/\w+(?:'\w+)?|[^\w\s]/g) || [];
    setTokens(matches);
  }, [tokenInput]);

  // Page 11: Interactive Morpheme Splitter
  const sampleWords = [
    { word: "Unhappiness", prefix: "un- (bound prefix, negates)", root: "happy (free root, adjective)", suffix: "-ness (bound suffix, creates abstract noun)" },
    { word: "Nationalization", prefix: "None", root: "nation (noun) → national (adj)", suffix: "-ize (verb) + -ation (abstract noun)" },
    { word: "Replayable", prefix: "re- (bound prefix, 'again')", root: "play (free verb root)", suffix: "-able (bound suffix, creates adjective)" },
    { word: "Spontaneousness", prefix: "None", root: "spontaneous (free adjective root)", suffix: "-ness (bound suffix, creates state noun)" }
  ];
  const [selectedSplitWord, setSelectedSplitWord] = useState(0);

  // Page 12: Interactive POS Tag Guesser
  const sentenceWords = [
    { word: "The", correctPOS: "DT (Determiner)", explanation: "Definite article modifying 'student'." },
    { word: "curious", correctPOS: "JJ (Adjective)", explanation: "Descriptive adjective describing 'student'." },
    { word: "student", correctPOS: "NN (Noun)", explanation: "Singular subject noun." },
    { word: "parses", correctPOS: "VBZ (Verb)", explanation: "3rd-person singular present action verb." },
    { word: "tricky", correctPOS: "JJ (Adjective)", explanation: "Modifies the noun 'sentences'." },
    { word: "sentences", correctPOS: "NNS (Plural Noun)", explanation: "Direct object plural noun." },
    { word: "effortlessly", correctPOS: "RB (Adverb)", explanation: "Manner adverb modifying 'parses'." }
  ];
  const [revealedPOS, setRevealedPOS] = useState<Record<number, boolean>>({});

  const toggleRevealPOS = (index: number) => {
    setRevealedPOS(prev => ({ ...prev, [index]: !prev[index] }));
  };

  // Page 13: Interactive Bigram Generator
  const [seedWord, setSeedWord] = useState<string>("natural");
  const bigramTransitions: Record<string, { next: string; prob: number }[]> = {
    "natural": [
      { next: "language", prob: 0.85 },
      { next: "scenery", prob: 0.10 },
      { next: "instinct", prob: 0.05 }
    ],
    "language": [
      { next: "processing", prob: 0.75 },
      { next: "model", prob: 0.15 },
      { next: "barrier", prob: 0.10 }
    ],
    "processing": [
      { next: "course", prob: 0.50 },
      { next: "pipeline", prob: 0.30 },
      { next: "speed", prob: 0.20 }
    ],
    "campus": [
      { next: "connect", prob: 0.65 },
      { next: "hostel", prob: 0.20 },
      { next: "library", prob: 0.15 }
    ],
    "student": [
      { next: "feedback", prob: 0.45 },
      { next: "query", prob: 0.35 },
      { next: "portal", prob: 0.20 }
    ]
  };

  // Page 14: Interactive NER Highlighter
  const nerTokens = [
    { text: "Dr. Rao", entity: "PERSON", color: "bg-blue-500/30 text-blue-300 border-blue-400" },
    { text: "visited", entity: null, color: "" },
    { text: "CMC Vellore", entity: "HOSPITAL / LOC", color: "bg-emerald-500/30 text-emerald-300 border-emerald-400" },
    { text: "hospital", entity: null, color: "" },
    { text: "on", entity: null, color: "" },
    { text: "Tuesday", entity: "DATE", color: "bg-purple-500/30 text-purple-300 border-purple-400" },
    { text: "for", entity: null, color: "" },
    { text: "a", entity: null, color: "" },
    { text: "Nipah virus", entity: "DISEASE", color: "bg-red-500/30 text-red-300 border-red-400" },
    { text: "advisory", entity: null, color: "" },
    { text: "meeting.", entity: null, color: "" }
  ];
  const [activeNERFilter, setActiveNERFilter] = useState<string>("ALL");

  // Page 15: 25 Flashcards Deck with Shuffle & Mastered tracker
  const [flashcardDeck, setFlashcardDeck] = useState(GLOSSARY_FLASHCARDS);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredCards, setMasteredCards] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem('nlp_mastered_flashcards');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  const handleToggleMastered = (id: string) => {
    setMasteredCards(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      try {
        localStorage.setItem('nlp_mastered_flashcards', JSON.stringify(Array.from(next)));
      } catch {
        // ignore storage error
      }
      return next;
    });
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    const shuffled = [...flashcardDeck].sort(() => Math.random() - 0.5);
    setFlashcardDeck(shuffled);
    setCurrentCardIndex(0);
  };

  // Period 9: Levels of NLP
  if (period === 9) {
    return (
      <div className="space-y-6">
        <div className="p-6 rounded-2xl bg-chalkboard-light/60 border border-chalk/15 shadow-xl">
          <div className="flex items-center gap-2 mb-2">
            <Layers className="w-5 h-5 text-gold" />
            <h2 className="text-2xl font-bold font-chalk text-chalk">
              What is NLP? The Interactive Levels of Language Stack
            </h2>
          </div>
          <p className="text-sm text-chalk/80 leading-relaxed mb-6">
            Human communication operates across layered linguistic strata. Click any level on the vertical stack below to reveal its computational unit and challenges!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Layer Stack Buttons */}
            <div className="md:col-span-5 space-y-2">
              {nlpLevels.map((lvl) => {
                const isSelected = activeLevel === lvl.level;
                return (
                  <button
                    key={lvl.level}
                    onClick={() => setActiveLevel(lvl.level)}
                    className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-gold text-wood-dark font-bold shadow-md scale-102 border-gold-light'
                        : 'bg-black/30 hover:bg-black/50 text-chalk/80 border-chalk/10'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={`w-6 h-6 rounded-full text-xs font-mono flex items-center justify-center font-bold ${
                        isSelected ? 'bg-wood-dark text-gold' : 'bg-chalkboard-border text-chalk'
                      }`}>
                        L{lvl.level}
                      </span>
                      <span className="text-sm">{lvl.name}</span>
                    </div>
                    <span className="text-[11px] font-mono opacity-80">{lvl.unit.split('&')[0]}</span>
                  </button>
                );
              })}
            </div>

            {/* Level Detail View Card */}
            <div className="md:col-span-7 p-6 rounded-2xl chalk-board-bg border-2 border-gold/40 shadow-xl min-h-[240px] flex flex-col justify-between">
              {(() => {
                const cur = nlpLevels.find(l => l.level === activeLevel) || nlpLevels[2];
                return (
                  <div>
                    <div className="flex items-center justify-between mb-3 border-b border-chalk/15 pb-2">
                      <span className="text-xs font-mono text-gold uppercase tracking-wider font-bold">
                        Level {cur.level}: {cur.unit}
                      </span>
                      <span className="text-xs font-chalk text-chalk-yellow">Layer {cur.level} of 5</span>
                    </div>
                    <h3 className="text-xl font-bold font-chalk text-chalk mb-2">{cur.name}</h3>
                    <p className="text-sm text-chalk/90 leading-relaxed mb-4">{cur.desc}</p>
                    <div className="p-3 rounded-xl bg-black/40 border border-chalk/10 text-xs">
                      <span className="font-bold text-chalk-green block mb-1">Concrete Classroom Example:</span>
                      <span className="text-chalk/80 font-mono">{cur.example}</span>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Period 10: Text Processing Basics (Interactive Tokenizer Sandbox)
  if (period === 10) {
    return (
      <div className="space-y-6">
        <div className="p-6 rounded-2xl bg-chalkboard-light/60 border border-chalk/15 shadow-xl">
          <div className="flex items-center gap-2 mb-2">
            <Scissors className="w-5 h-5 text-chalk-yellow" />
            <h2 className="text-2xl font-bold font-chalk text-chalk">
              Text Processing Basics: Interactive Tokenizer Box
            </h2>
          </div>
          <p className="text-sm text-chalk/80 leading-relaxed mb-4">
            70% of NLP is preprocessing. Type or paste your own sentence into the box below. Watch our regex tokenizer identify token boundaries and flag frequent stop words in real time!
          </p>

          {/* User Input Area */}
          <div className="mb-4">
            <textarea
              value={tokenInput}
              onChange={(e) => setTokenInput(e.target.value)}
              rows={3}
              placeholder="Type any sentence to see tokens..."
              className="w-full p-3.5 rounded-xl bg-black/40 border border-chalk/20 text-chalk text-sm font-sans focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <div className="flex items-center justify-between mt-1 text-xs text-chalk/60">
              <span>{tokenInput.length} characters</span>
              <button
                onClick={() => setTokenInput("VIT Central Library is open on Sunday for CSE3002 revision!")}
                className="text-gold hover:underline"
              >
                Insert Sample Sentence
              </button>
            </div>
          </div>

          {/* Tokens Visual Output */}
          <div className="p-4 rounded-xl bg-black/50 border border-gold/30">
            <div className="flex items-center justify-between mb-3 text-xs">
              <span className="font-bold text-gold uppercase tracking-wider font-mono">
                Extracted Tokens ({tokens.length})
              </span>
              <span className="text-chalk/60">
                Punctuation & Stop words highlighted
              </span>
            </div>

            <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto p-1">
              {tokens.map((tok, idx) => {
                const isStop = stopWordsList.has(tok.toLowerCase());
                const isPunct = /^[^\w\s]$/.test(tok);
                return (
                  <span
                    key={idx}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium border transition-transform hover:scale-105 ${
                      isPunct
                        ? 'bg-red-500/20 text-red-300 border-red-500/30'
                        : isStop
                        ? 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                        : 'bg-chalkboard-border text-chalk border-chalk/20'
                    }`}
                  >
                    {tok}
                    <span className="ml-1 text-[9px] opacity-60">#{idx + 1}</span>
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Period 11: Morphology (Interactive Morpheme Splitter)
  if (period === 11) {
    const curW = sampleWords[selectedSplitWord];
    return (
      <div className="space-y-6">
        <div className="p-6 rounded-2xl bg-chalkboard-light/60 border border-chalk/15 shadow-xl">
          <div className="flex items-center gap-2 mb-2">
            <Tag className="w-5 h-5 text-chalk-green" />
            <h2 className="text-2xl font-bold font-chalk text-chalk">
              Morphology: Interactive Morpheme Splitter
            </h2>
          </div>
          <p className="text-sm text-chalk/80 leading-relaxed mb-6">
            Words are built from atomic meaning units (<ChalkTooltip termKey="morpheme">morphemes</ChalkTooltip>). Select a sample word to decompose it into its root, prefix, and derivational suffix components!
          </p>

          {/* Word Selection Buttons */}
          <div className="flex flex-wrap gap-2 mb-6">
            {sampleWords.map((item, idx) => (
              <button
                key={item.word}
                onClick={() => setSelectedSplitWord(idx)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedSplitWord === idx
                    ? 'bg-gold text-wood-dark shadow-md scale-105'
                    : 'bg-black/30 text-chalk/80 hover:bg-black/50 border border-chalk/10'
                }`}
              >
                {item.word}
              </button>
            ))}
          </div>

          {/* Morpheme Decomposition Spread */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 rounded-2xl chalk-board-bg border-2 border-chalk/20 shadow-xl">
            <div className="p-4 rounded-xl bg-black/40 border border-blue-400/30">
              <span className="text-[11px] font-mono font-bold text-blue-300 uppercase tracking-wider block mb-1">
                01. Prefix (Bound)
              </span>
              <p className="text-base font-bold text-chalk font-mono mb-2">{curW.prefix.split(' ')[0]}</p>
              <p className="text-xs text-chalk/70">{curW.prefix}</p>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-gold/40">
              <span className="text-[11px] font-mono font-bold text-gold uppercase tracking-wider block mb-1">
                02. Root / Stem (Base)
              </span>
              <p className="text-base font-bold text-chalk font-mono mb-2">{curW.root.split(' ')[0]}</p>
              <p className="text-xs text-chalk/70">{curW.root}</p>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-chalk-green/30">
              <span className="text-[11px] font-mono font-bold text-chalk-green uppercase tracking-wider block mb-1">
                03. Suffix (Derivational)
              </span>
              <p className="text-base font-bold text-chalk font-mono mb-2">{curW.suffix.split(' ')[0]}</p>
              <p className="text-xs text-chalk/70">{curW.suffix}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Period 12: Grammar & POS Tagging
  if (period === 12) {
    return (
      <div className="space-y-6">
        <div className="p-6 rounded-2xl bg-chalkboard-light/60 border border-chalk/15 shadow-xl">
          <div className="flex items-center gap-2 mb-2">
            <Tag className="w-5 h-5 text-chalk-blue" />
            <h2 className="text-2xl font-bold font-chalk text-chalk">
              Grammar & POS Tagging: Guess & Reveal
            </h2>
          </div>
          <p className="text-sm text-chalk/80 leading-relaxed mb-6">
            Part-of-Speech tagging assigns syntactic roles to tokens in context. Tap any word in the sentence below to reveal its Penn Treebank POS tag and syntactic reasoning!
          </p>

          <div className="flex flex-wrap items-center gap-3 p-6 rounded-2xl bg-black/40 border border-chalk/20">
            {sentenceWords.map((item, idx) => {
              const isRev = !!revealedPOS[idx];
              return (
                <button
                  key={idx}
                  onClick={() => toggleRevealPOS(idx)}
                  className={`p-3 rounded-xl border text-center transition-all min-w-[90px] ${
                    isRev
                      ? 'bg-amber-950/40 border-gold shadow-md'
                      : 'bg-black/30 hover:bg-black/50 border-chalk/10 hover:border-chalk/30'
                  }`}
                >
                  <span className="text-base font-bold text-chalk block mb-1 font-mono">
                    {item.word}
                  </span>
                  {isRev ? (
                    <span className="text-xs font-mono font-bold text-gold px-1.5 py-0.5 rounded bg-black/40 inline-block animate-in fade-in">
                      {item.correctPOS.split(' ')[0]}
                    </span>
                  ) : (
                    <span className="text-[10px] text-chalk/50 uppercase tracking-wider">
                      Tap to reveal
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Detail card of revealed words */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
            {sentenceWords.map((item, idx) => {
              if (!revealedPOS[idx]) return null;
              return (
                <div key={idx} className="p-3 rounded-lg bg-black/30 border border-gold/30 text-xs">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-gold font-mono">{item.word}</span>
                    <span className="text-chalk-yellow font-mono">{item.correctPOS}</span>
                  </div>
                  <p className="text-chalk/80">{item.explanation}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Period 13: N-grams & Language Models (Interactive Bigram Generator)
  if (period === 13) {
    const nextWords = bigramTransitions[seedWord] || [];
    return (
      <div className="space-y-6">
        <div className="p-6 rounded-2xl bg-chalkboard-light/60 border border-chalk/15 shadow-xl">
          <div className="flex items-center gap-2 mb-2">
            <Repeat className="w-5 h-5 text-gold" />
            <h2 className="text-2xl font-bold font-chalk text-chalk">
              N-grams: Interactive Bigram Next-Word Predictor
            </h2>
          </div>
          <p className="text-sm text-chalk/80 leading-relaxed mb-6">
            A bigram model estimates P(w2 | w1) by counting how often word pairs occur in the corpus. Select a seed word below to see its candidate completions and probabilities!
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {Object.keys(bigramTransitions).map((word) => (
              <button
                key={word}
                onClick={() => setSeedWord(word)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                  seedWord === word
                    ? 'bg-gold text-wood-dark shadow-md scale-105'
                    : 'bg-black/30 text-chalk/80 hover:bg-black/50 border border-chalk/10'
                }`}
              >
                "{word}"
              </button>
            ))}
          </div>

          <div className="p-5 rounded-xl bg-black/40 border border-gold/30 space-y-3">
            <span className="text-xs font-mono text-gold block uppercase tracking-wider">
              Top Predicted Next Tokens for P(w | "{seedWord}")
            </span>

            {nextWords.map((cand, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-chalk font-bold">"{seedWord} {cand.next}"</span>
                  <span className="text-gold">{(cand.prob * 100).toFixed(0)}% probability</span>
                </div>
                <div className="w-full h-2 rounded-full bg-chalkboard-border overflow-hidden">
                  <div
                    className="h-full bg-gold rounded-full"
                    style={{ width: `${cand.prob * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Period 14: NER & Text Classification (Sentence Highlighter)
  if (period === 14) {
    return (
      <div className="space-y-6">
        <div className="p-6 rounded-2xl bg-chalkboard-light/60 border border-chalk/15 shadow-xl">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-chalk-yellow" />
            <h2 className="text-2xl font-bold font-chalk text-chalk">
              NER & Text Classification: Entity Highlighter
            </h2>
          </div>
          <p className="text-sm text-chalk/80 leading-relaxed mb-6">
            Named Entity Recognition extracts structured entities (persons, hospitals, diseases, dates) from messy text. Toggle entity categories to filter entity spans below!
          </p>

          {/* Filter Chips */}
          <div className="flex flex-wrap gap-2 mb-6">
            {["ALL", "PERSON", "HOSPITAL / LOC", "DATE", "DISEASE"].map((f) => (
              <button
                key={f}
                onClick={() => setActiveNERFilter(f)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeNERFilter === f
                    ? 'bg-gold text-wood-dark shadow'
                    : 'bg-black/30 text-chalk/80 hover:bg-black/50 border border-chalk/10'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="p-6 rounded-2xl chalk-board-bg border-2 border-chalk/20 text-base sm:text-lg leading-loose font-mono">
            {nerTokens.map((tok, idx) => {
              const matchesFilter = activeNERFilter === "ALL" || tok.entity?.includes(activeNERFilter);
              if (tok.entity && matchesFilter) {
                return (
                  <span
                    key={idx}
                    className={`inline-block mx-1 px-2.5 py-0.5 rounded-lg border text-sm font-bold shadow-sm ${tok.color}`}
                  >
                    {tok.text}
                    <span className="ml-1.5 text-[10px] font-sans font-semibold uppercase opacity-80">
                      [{tok.entity}]
                    </span>
                  </span>
                );
              }
              return <span key={idx} className="mx-1 text-chalk/80">{tok.text}</span>;
            })}
          </div>
        </div>
      </div>
    );
  }

  // Period 15: Glossary Flashcards (25 Cards)
  const currentCard = flashcardDeck[currentCardIndex] || flashcardDeck[0];
  const isMastered = masteredCards.has(currentCard.id);

  return (
    <div className="space-y-6">
      <div className="p-6 rounded-2xl bg-chalkboard-light/60 border border-chalk/15 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-gold/20 text-gold border border-gold/30">
              Period 15 · Revision Deck
            </span>
            <h2 className="text-2xl font-bold font-chalk text-chalk mt-1">
              25 Essential NLP Glossary Flashcards
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-black/40 text-chalk-green border border-chalk/15">
              Mastered: {masteredCards.size}/25
            </span>
            <button
              onClick={handleShuffle}
              className="p-2 rounded-lg bg-black/40 hover:bg-black/60 text-chalk hover:text-gold border border-chalk/20 transition-colors"
              title="Shuffle Cards"
            >
              <Shuffle className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3D Flip Card */}
        <div
          onClick={() => setIsFlipped(!isFlipped)}
          className="relative w-full max-w-xl mx-auto min-h-[260px] p-8 rounded-2xl cursor-pointer select-none transition-all duration-300 shadow-2xl flex flex-col justify-between border-2 border-gold/40 bg-gradient-to-br from-[#263733] to-[#1a2724] hover:border-gold"
        >
          {/* Card Topbar */}
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-gold/20 text-gold border border-gold/30">
              {currentCard.category}
            </span>
            <span className="text-xs font-mono text-chalk/50">
              Card {currentCardIndex + 1} of {flashcardDeck.length}
            </span>
          </div>

          {/* Front / Back Content */}
          <div className="my-6 text-center">
            {!isFlipped ? (
              <div className="space-y-2 animate-in fade-in">
                <span className="text-xs text-chalk/50 font-mono uppercase tracking-wider block">TERM</span>
                <h3 className="text-3xl font-bold font-chalk text-chalk">{currentCard.term}</h3>
                <span className="text-xs text-gold-light/70 font-sans block mt-3">
                  Click card to reveal definition ↺
                </span>
              </div>
            ) : (
              <div className="space-y-3 animate-in fade-in text-left">
                <h4 className="text-lg font-bold font-chalk text-gold">{currentCard.term}</h4>
                <p className="text-sm text-chalk/90 leading-relaxed font-sans">{currentCard.definition}</p>
                <div className="p-2.5 rounded bg-black/40 border border-chalk/10 font-mono text-xs text-chalk-yellow">
                  {currentCard.example}
                </div>
              </div>
            )}
          </div>

          {/* Bottom Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-chalk/10">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleToggleMastered(currentCard.id);
              }}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-colors ${
                isMastered
                  ? 'bg-chalk-green text-wood-dark'
                  : 'bg-black/30 hover:bg-black/50 text-chalk/70 border border-chalk/10'
              }`}
            >
              <CheckCircle className="w-3.5 h-3.5" />
              <span>{isMastered ? 'Mastered!' : 'Mark as Mastered'}</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlipped(false);
                  setCurrentCardIndex(prev => (prev > 0 ? prev - 1 : flashcardDeck.length - 1));
                }}
                className="px-3 py-1 rounded bg-black/40 hover:bg-black/60 text-xs font-mono text-chalk"
              >
                ← Prev
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlipped(false);
                  setCurrentCardIndex(prev => (prev < flashcardDeck.length - 1 ? prev + 1 : 0));
                }}
                className="px-3 py-1 rounded bg-gold hover:bg-gold-light text-xs font-mono font-bold text-wood-dark"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
