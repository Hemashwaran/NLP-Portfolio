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
  // Page 4: Skills practised
  const [skills, setSkills] = useState([
    { name: 'Text Processing in Python', level: 0, desc: 'Tokenizing, lowercasing, removing stop words' },
    { name: 'Regular Expressions', level: 0, desc: 'Matching patterns like dates, emails and course codes' },
    { name: 'Morphology & FSA', level: 0, desc: 'Roots, affixes and state transitions' },
    { name: 'N-gram Language Models', level: 0, desc: 'Unigram and bigram counts and probabilities' },
    { name: 'NER & Text Classification', level: 0, desc: 'Finding entities and sorting text into categories' },
  ]);

  if (period === 1) {
    return (
      <div className="space-y-6">
        <div className="p-6 rounded-2xl bg-chalkboard-light/60 border border-chalk/15 shadow-xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-gold/20 text-gold border border-gold/30">
              Period 1 · Seat 24
            </span>
            <span className="text-xs text-chalk/60 font-sans">prp, Row 3</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold font-chalk text-chalk mb-2">
            Taking My Seat in Row 3
          </h2>
          <p className="text-chalk/80 leading-relaxed font-sans mb-4">
            Welcome to my desk. In front of you is our green chalkboard with <em>Natural Language Processing</em> fresh in chalk. This portfolio documents my 25-period journey at VIT Vellore under <PlaceholderBadge label="Dr. SHARMILA BANU K mam" hint="Faculty Name" />.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
            <div className="p-3.5 rounded-xl bg-black/30 border border-chalk/10">
              <span className="text-xs text-gold font-bold block mb-1">01. Hands-on Coding</span>
              <p className="text-xs text-chalk/70">Tokenizing, n-grams and suffix rules, coded in class.</p>
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
              Fall Semester 2026-27
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
    const guide = [
      { wing: 'A', name: 'Arrival', periods: '1–4', start: 1 },
      { wing: 'B', name: 'How Our Mam Taught', periods: '5–8', start: 5 },
      { wing: 'C', name: 'My Concept Notebook', periods: '9–15', start: 9 },
      { wing: 'D', name: 'The FSA Problem', periods: '16–17', start: 16 },
      { wing: 'E', name: 'Project: Campus Connect', periods: '18–20', start: 18 },
      { wing: 'F', name: 'Stars & Project Ideas', periods: '21–22', start: 21 },
      { wing: 'G', name: 'CAT 2', periods: '23', start: 23 },
      { wing: 'H', name: 'Reflection', periods: '24–25', start: 24 },
    ];
    return (
      <div className="space-y-6">
        <div className="p-6 rounded-2xl bg-chalkboard-light/70 border border-chalk/15 shadow-xl">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-5 h-5 text-chalk-yellow" />
            <h2 className="text-2xl font-bold font-chalk text-chalk">
              Class Diary (Index)
            </h2>
          </div>
          <p className="text-sm text-chalk/80 leading-relaxed mb-4">
            25 periods in 8 wings. Tap a wing to jump to it, or use the arrow keys and the timetable strip to go period by period.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
            {guide.map((g) => (
              <button
                key={g.wing}
                onClick={() => onNavigateToPage(g.start)}
                className="text-left p-3.5 rounded-xl bg-black/40 border border-chalk/15 hover:border-gold transition-colors flex items-center justify-between gap-3"
              >
                <div>
                  <span className="text-[11px] font-mono font-bold text-gold block">Wing {g.wing}</span>
                  <span className="font-bold text-chalk text-sm">{g.name}</span>
                </div>
                <span className="text-xs font-mono text-chalk/70 shrink-0">Periods {g.periods}</span>
              </button>
            ))}
          </div>

          <button
            onClick={onOpenDiary}
            className="w-full py-2 rounded-lg bg-chalkboard-border hover:bg-chalkboard-light text-chalk font-bold text-xs border border-chalk/20 transition-colors"
          >
            Open Full Index →
          </button>
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
              This portfolio represents my commitment to applying computational linguistics to real-world campus tools—like our multilingual guide <strong>Campus Connect</strong> and my NLP application idea <strong>Outbreak Radar</strong>.
            </p>
          </div>

          {/* Skills practised */}
          <div className="p-4 rounded-xl bg-black/40 border border-chalk/15 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-chalk-yellow flex items-center gap-1.5">
              <Code className="w-4 h-4" />
              Skills I Practised in This Course
            </h3>

            <ul className="space-y-2">
              {skills.map((skill, index) => (
                <li key={index} className="text-xs">
                  <span className="font-semibold text-chalk block">{skill.name}</span>
                  <span className="text-[11px] text-chalk/60 block">{skill.desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
