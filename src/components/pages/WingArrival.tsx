import React, { useState } from 'react';
import { OWNER_DETAILS } from '../../data/content';
import { PlaceholderBadge } from '../PlaceholderBadge';
import { ChalkTooltip } from '../ChalkTooltip';
import { BookOpen, Sparkles, Award, User, Code, Compass, ArrowRight } from 'lucide-react';

interface WingArrivalProps {
  period: number;
  onNavigateToPage: (page: number) => void;
  onOpenDiary: () => void;
}

export const WingArrival: React.FC<WingArrivalProps> = ({
  period,
  onNavigateToPage,
  onOpenDiary
}) => {
  // Page 4: Interactive skill levels
  const [skills, setSkills] = useState([
    { name: 'Python & Jupyter Notebooks', level: 90, desc: 'Pandas, string cleaning, corpus extraction' },
    { name: 'Regex & Tokenization', level: 85, desc: 'Pattern matching, boundary detection, normalization' },
    { name: 'Morphology & FSA Modeling', level: 88, desc: 'State transitions, derivational affixes, roots' },
    { name: 'Multilingual NLP (Indian Context)', level: 82, desc: 'Tamil, Telugu, Hindi agglutination, code-mixing' },
    { name: 'NER & Intent Classification', level: 78, desc: 'Spacy pipelines, intent mapping, entity spans' },
  ]);

  if (period === 1) {
    return (
      <div className="space-y-6">
        <div className="p-6 rounded-2xl bg-chalkboard-light/60 border border-chalk/15 shadow-xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-gold/20 text-gold border border-gold/30">
              Period 1 · Seat 24
            </span>
            <span className="text-xs text-chalk/60 font-sans">Technology Tower, Row 3</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold font-chalk text-chalk mb-2">
            Taking My Seat in Row 3
          </h2>
          <p className="text-chalk/80 leading-relaxed font-sans mb-4">
            Welcome to my desk. In front of you is our green chalkboard with <em>Natural Language Processing</em> fresh in chalk. This portfolio documents my 30-period journey at VIT Vellore under <PlaceholderBadge label="[MAM'S NAME]" hint="Faculty Name" />.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
            <div className="p-3.5 rounded-xl bg-black/30 border border-chalk/10">
              <span className="text-xs text-gold font-bold block mb-1">01. Hands-on Jupyter</span>
              <p className="text-xs text-chalk/70">Real corpora, messy student queries, code debugging in class.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-black/30 border border-chalk/10">
              <span className="text-xs text-chalk-yellow font-bold block mb-1">02. The FSA Challenge</span>
              <p className="text-xs text-chalk/70">Tracing derivational morphology on our CAT 2 exam paper.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-black/30 border border-chalk/10">
              <span className="text-xs text-chalk-blue font-bold block mb-1">03. Campus Connect</span>
              <p className="text-xs text-chalk/70">5-language navigation & FAQ assistant built for VIT students.</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onNavigateToPage(2)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gold hover:bg-gold-light text-wood-dark font-bold text-sm shadow transition-all"
            >
              <span>Walk to Welcome Board</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenDiary}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-chalkboard-border hover:bg-chalkboard-light text-chalk font-semibold text-sm border border-chalk/20 transition-all"
            >
              <BookOpen className="w-4 h-4 text-chalk-yellow" />
              <span>Browse Class Diary</span>
            </button>
          </div>
        </div>

        <div className="sticky-note p-4 rounded-xl max-w-md ml-auto">
          <p className="font-chalk text-base font-bold mb-1">Teacher's podium note:</p>
          <p className="text-xs text-amber-900 leading-snug">
            "Language is the only code where ambiguity is a feature, not a compilation bug. Welcome to CSE3002!"
          </p>
        </div>
      </div>
    );
  }

  if (period === 2) {
    return (
      <div className="space-y-6">
        {/* Welcome Board Slate */}
        <div className="p-6 sm:p-8 rounded-2xl chalk-board-bg border-4 border-wood-light/60 shadow-2xl relative">
          <div className="flex items-center justify-between border-b border-chalk/20 pb-3 mb-5">
            <div>
              <span className="text-xs font-mono text-gold uppercase tracking-wider block">Course Introduction</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-chalk text-chalk">
                Welcome to CSE3002: Natural Language Processing
              </h2>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-black/40 text-chalk-green border border-chalk/10">
              Winter Semester 2026
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold text-chalk-yellow font-chalk mb-2">
                Who I Am & Expectations vs. Reality
              </h3>
              <p className="text-sm text-chalk/90 leading-relaxed mb-3">
                My name is <PlaceholderBadge label={OWNER_DETAILS.name} field="Student Name" />, Reg No. <PlaceholderBadge label={OWNER_DETAILS.regNo} field="Register Number" />, currently pursuing <PlaceholderBadge label={OWNER_DETAILS.programme} field="Programme & Year" /> at VIT Vellore.
              </p>
              <p className="text-sm text-chalk/80 leading-relaxed mb-3">
                Before this course, I assumed NLP was just writing complex regular expressions or importing pre-trained embeddings. I quickly discovered that human speech is full of <ChalkTooltip termKey="pragmatics">pragmatics</ChalkTooltip>, cultural nuance, and syntactic ambiguities that simple keyword counters fail to decode.
              </p>
              <p className="text-sm text-chalk/80 leading-relaxed">
                Guided by <PlaceholderBadge label={OWNER_DETAILS.faculty} field="Faculty Name" />, our class broke language down into its core computational structures: from <ChalkTooltip termKey="morpheme">morphemes</ChalkTooltip> to <ChalkTooltip termKey="fsa">finite state automata</ChalkTooltip> and statistical <ChalkTooltip termKey="ngram">n-grams</ChalkTooltip>.
              </p>
            </div>

            {/* Course at a Glance Card */}
            <div className="p-5 rounded-xl bg-black/40 border border-chalk/20 space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-gold flex items-center gap-1.5">
                <Compass className="w-4 h-4" />
                Course at a Glance
              </h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-chalk/10">
                  <span className="text-chalk/60">Institution</span>
                  <span className="font-semibold text-chalk">{OWNER_DETAILS.university}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-chalk/10">
                  <span className="text-chalk/60">Course Code & Title</span>
                  <span className="font-semibold text-chalk">{OWNER_DETAILS.courseCode} · {OWNER_DETAILS.courseTitle}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-chalk/10">
                  <span className="text-chalk/60">Faculty Mentor</span>
                  <span className="font-semibold text-gold"><PlaceholderBadge label={OWNER_DETAILS.faculty} /></span>
                </div>
                <div className="flex justify-between py-1 border-b border-chalk/10">
                  <span className="text-chalk/60">Semester / Academic Year</span>
                  <span className="font-semibold text-chalk">{OWNER_DETAILS.semester} · 2026</span>
                </div>
                <div className="flex justify-between py-1 border-b border-chalk/10">
                  <span className="text-chalk/60">Evaluations</span>
                  <span className="font-semibold text-chalk-green">CAT 1 · CAT 2 (Completed) · FAT (Upcoming)</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-chalk/60">Classroom Stars Earned</span>
                  <span className="font-bold text-gold">★★★★★ (5 Stars)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (period === 3) {
    return (
      <div className="space-y-6">
        <div className="p-6 rounded-2xl bg-chalkboard-light/70 border border-chalk/15 shadow-xl">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-5 h-5 text-chalk-yellow" />
            <h2 className="text-2xl font-bold font-chalk text-chalk">
              Class Diary (Index) & Guided Paths
            </h2>
          </div>
          <p className="text-sm text-chalk/80 leading-relaxed mb-4">
            Every lecture, hands-on lab, and exam preparation session is recorded in this diary across 8 wings. Choose a curated pathway or open the drawer for full search.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
            <div className="p-4 rounded-xl bg-black/40 border border-gold/30 hover:border-gold transition-colors flex flex-col justify-between">
              <div>
                <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-gold/20 text-gold mb-2 inline-block">
                  2-Minute Speed Tour
                </span>
                <h3 className="font-bold text-chalk text-base mb-1">The Highlights</h3>
                <p className="text-xs text-chalk/70 leading-relaxed mb-3">
                  Jump directly to the classroom scene, the FSA exam question, the Campus Connect assistant, and star moments.
                </p>
              </div>
              <button
                onClick={() => onNavigateToPage(16)}
                className="w-full py-2 rounded-lg bg-gold hover:bg-gold-light text-wood-dark font-bold text-xs shadow transition-colors"
              >
                Jump to FSA Highlight →
              </button>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-chalk-blue/30 hover:border-chalk-blue transition-colors flex flex-col justify-between">
              <div>
                <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-chalk-blue/20 text-chalk-blue mb-2 inline-block">
                  10-Minute Deep Dive
                </span>
                <h3 className="font-bold text-chalk text-base mb-1">Core Pedagogy & Labs</h3>
                <p className="text-xs text-chalk/70 leading-relaxed mb-3">
                  Follow mam’s teaching style, hands-on Jupyter corpus tasks, mother tongue morphology, and CAT 2 reflections.
                </p>
              </div>
              <button
                onClick={() => onNavigateToPage(5)}
                className="w-full py-2 rounded-lg bg-chalk-blue hover:bg-blue-400 text-white font-bold text-xs shadow transition-colors"
              >
                Start at Wing B (Pedagogy) →
              </button>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-chalk-green/30 hover:border-chalk-green transition-colors flex flex-col justify-between">
              <div>
                <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-chalk-green/20 text-chalk-green mb-2 inline-block">
                  Complete 30 Periods
                </span>
                <h3 className="font-bold text-chalk text-base mb-1">Full Curriculum</h3>
                <p className="text-xs text-chalk/70 leading-relaxed mb-3">
                  Every concept notebook, drag-and-drop morphology splitter, 25-card glossary, and practice quizzes.
                </p>
              </div>
              <button
                onClick={onOpenDiary}
                className="w-full py-2 rounded-lg bg-chalkboard-border hover:bg-chalkboard-light text-chalk font-bold text-xs border border-chalk/20 transition-colors"
              >
                Open Full Index Drawer →
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Period 4: About Me
  return (
    <div className="space-y-6">
      <div className="p-6 rounded-2xl bg-chalkboard-light/60 border border-chalk/15 shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-gold" />
            <h2 className="text-2xl font-bold font-chalk text-chalk">
              About Me: Background, Interests & Skills
            </h2>
          </div>
          <PlaceholderBadge label="[MY LEVELS]" field="Customize Skill Proficiency" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          <div className="space-y-3 text-sm text-chalk/85 leading-relaxed">
            <p>
              I am an engineering student at VIT Vellore passionate about building accessible human-centered software. What pulled me into Natural Language Processing was the fascination of bridging rigid programming languages (like Python, TypeScript) with the fluid, highly contextual nature of human dialects.
            </p>
            <p>
              Living in Tamil Nadu while interacting daily with peers speaking Hindi, Telugu, Malayalam, and Bengali made me realize that Western NLP approaches rarely accommodate code-mixing, phonetic transliterations, or agglutinative Dravidian roots.
            </p>
            <p>
              This portfolio represents my commitment to applying computational linguistics to real-world campus tools—like our multilingual guide <strong>Campus Connect</strong> and our crisis idea <strong>Outbreak Radar</strong>.
            </p>
          </div>

          {/* Interactive Skills Progress */}
          <div className="p-4 rounded-xl bg-black/40 border border-chalk/15 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-chalk-yellow flex items-center gap-1.5">
              <Code className="w-4 h-4" />
              Technical & Linguistic Skills (Self-Assessed)
            </h3>

            <div className="space-y-3">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="font-semibold text-chalk">{skill.name}</span>
                    <span className="font-mono text-gold">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-chalkboard-border overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-gold to-chalk-yellow rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <span className="text-[11px] text-chalk/60 block">{skill.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
