import React from 'react';
import { OWNER_DETAILS } from '../../data/content';
import { PlaceholderBadge } from '../PlaceholderBadge';
import { classroomAudio } from '../../utils/audio';
import { scatterClassroomStars } from '../../utils/confetti';
import { Calendar, Heart, Mail, Linkedin, Github, RotateCcw, Sparkles, Volume2, Bell, Wind } from 'lucide-react';

interface WingReflectionProps {
  period: number;
  onReturnToSeat: () => void;
}

export const WingReflection: React.FC<WingReflectionProps> = ({ period, onReturnToSeat }) => {
  // Period 28: Chalk Timeline Milestones
  const timelineMilestones = [
    {
      week: "Week 1",
      datePlaceholder: "[DATE: JAN 08]",
      title: "First Lecture: Ambiguity in Human Language",
      desc: "Stepping into TT 3rd floor. Mam framed NLP not as formula memorization, but as solving linguistic ambiguity across Indian contexts."
    },
    {
      week: "Week 3",
      datePlaceholder: "[DATE: JAN 22]",
      title: "Hands-on Jupyter: Tokenization & Regex",
      desc: "Building custom tokenizers on actual student query circulars. Overcoming broken contractions and emoji tokens."
    },
    {
      week: "Week 5",
      datePlaceholder: "[DATE: FEB 05]",
      title: "The Derivational Morphology Challenge",
      desc: "Dissecting roots and derivational affixes. Writing state machines from q0 to q11 on the chalkboard."
    },
    {
      week: "Week 8",
      datePlaceholder: "[DATE: FEB 26]",
      title: "Project Pitch: Campus Connect & Radar",
      desc: "Presenting our multilingual campus guide and our outbreak transmission concept. Earned our 5 classroom stars!"
    },
    {
      week: "Week 11",
      datePlaceholder: "[DATE: MAR 19]",
      title: "CAT 2 Exam: Derivational FSA Solution",
      desc: "Solving the 10-mark FSA alteration question with augmented transitions, receiving mam's handwritten green 'Good!' remark."
    }
  ];

  // Period 28: Semester Timeline
  if (period === 28) {
    return (
      <div className="space-y-6">
        <div className="p-6 rounded-2xl bg-chalkboard-light/60 border border-chalk/15 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <div>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-gold/20 text-gold border border-gold/30">
                Period 28 · Semester Timeline
              </span>
              <h2 className="text-2xl font-bold font-chalk text-chalk mt-1">
                Semester Timeline & Technical Competencies
              </h2>
            </div>
            <PlaceholderBadge label="[DATES]" field="Lecture Calendar Dates" />
          </div>

          <p className="text-sm text-chalk/80 leading-relaxed mb-6">
            From our very first introductory discussion on linguistic ambiguity to the rigors of CAT 2, here is how each semester milestone built toward end-to-end language understanding:
          </p>

          {/* Horizontal / Vertical Timeline Flow */}
          <div className="space-y-4">
            {timelineMilestones.map((m, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-black/40 border border-chalk/15 hover:border-gold/40 transition-colors flex flex-col sm:flex-row sm:items-center gap-4"
              >
                <div className="sm:w-36 shrink-0">
                  <span className="text-xs font-mono font-bold text-gold block">{m.week}</span>
                  <span className="text-[11px] font-mono text-chalk/60"><PlaceholderBadge label={m.datePlaceholder} /></span>
                </div>

                <div className="flex-1 space-y-1">
                  <h4 className="font-bold text-sm text-chalk font-chalk text-base">{m.title}</h4>
                  <p className="text-xs text-chalk/80 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Core Skills Gained Summary */}
          <div className="mt-6 p-4 rounded-xl bg-chalkboard-dark border border-gold/30 space-y-2">
            <span className="text-xs font-mono font-bold text-gold uppercase tracking-wider block">
              Core Skills Acquired This Semester:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono text-chalk/90 pt-1">
              <div className="p-2 rounded bg-black/30 border border-chalk/10">• Regex Tokenization</div>
              <div className="p-2 rounded bg-black/30 border border-chalk/10">• FSA State Minimization</div>
              <div className="p-2 rounded bg-black/30 border border-chalk/10">• Bigram Language Models</div>
              <div className="p-2 rounded bg-black/30 border border-chalk/10">• Custom NER Pipelines</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Period 29: Reflection & Heartfelt Thank-You
  if (period === 29) {
    return (
      <div className="space-y-6">
        <div className="p-6 sm:p-8 rounded-2xl chalk-board-bg border-4 border-wood shadow-2xl relative">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-chalk/20 pb-4 mb-6">
            <div>
              <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-gold/20 text-gold border border-gold/30">
                Period 29 · Student Reflection
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-chalk text-chalk mt-1">
                Reflection & Heartfelt Letter to [MAM'S NAME]
              </h2>
            </div>
            <PlaceholderBadge label="[MAM'S NAME]" field="Faculty Name" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            {/* Left: What Changed in How I See Language */}
            <div className="space-y-4 text-sm text-chalk/90 leading-relaxed font-sans">
              <div className="p-4 rounded-xl bg-black/40 border border-chalk/15 space-y-2">
                <h3 className="font-bold text-chalk font-chalk text-lg text-chalk-yellow">
                  What Changed in How I See Technology
                </h3>
                <p className="text-xs sm:text-sm text-chalk/85 leading-relaxed">
                  Before this course, I took communication for granted. I assumed words were tidy containers for concepts that computers could easily index with a hash map. Now, I notice ambiguity and morphology everywhere: in bus destination hoardings, regional cinema dialogue, and customer support bot glitches.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-chalk/15 space-y-2">
                <h3 className="font-bold text-chalk font-chalk text-lg text-gold">
                  What I'd Do Differently
                </h3>
                <p className="text-xs sm:text-sm text-chalk/85 leading-relaxed">
                  If I could restart the semester, I would start collecting a dedicated corpus of regional college code-mixing (Tamil-English transliteration) from Day 1 to train an even richer tokenizer for our Campus Connect assistant.
                </p>
              </div>
            </div>

            {/* Right: Handwritten-Style Thank You Card to Faculty */}
            <div className="notebook-paper p-6 sm:p-8 rounded-2xl border-4 border-gold shadow-2xl relative">
              <div className="washi-tape" />
              <div className="flex items-center justify-between mb-4 border-b border-gray-300 pb-2">
                <span className="text-xs font-mono text-gray-500 font-bold uppercase">
                  A Student's Gratitude Note
                </span>
                <Heart className="w-4 h-4 text-brand-coral fill-brand-coral" />
              </div>

              <p className="font-chalk text-lg text-gray-800 leading-relaxed mb-3">
                Dear <PlaceholderBadge label={OWNER_DETAILS.faculty} />,
              </p>
              <p className="font-chalk text-base text-gray-700 leading-relaxed mb-3">
                Thank you for making CSE3002 one of the most engaging and intellectually rewarding courses of my college journey.
              </p>
              <p className="font-chalk text-base text-gray-700 leading-relaxed mb-3">
                Your patience in answering every query, the enthusiasm with which you drew stars on the chalkboard, and your insistence that we test algorithms in our own regional mother tongues turned an intimidating theoretical subject into a living passion.
              </p>
              <p className="font-chalk text-base text-gray-700 leading-relaxed mb-6">
                Thank you for inspiring us to see language not just as lines of text, but as the heartbeat of human connection.
              </p>

              <div className="text-right border-t border-gray-200 pt-3">
                <span className="font-chalk text-base font-bold text-gray-900 block">
                  With sincere gratitude,
                </span>
                <span className="font-chalk text-sm text-amber-900">
                  <PlaceholderBadge label={OWNER_DETAILS.name} /> (Reg: <PlaceholderBadge label={OWNER_DETAILS.regNo} />)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Period 30: Contact, Credits & Easter Eggs
  return (
    <div className="space-y-6">
      <div className="p-6 rounded-2xl bg-chalkboard-light/60 border border-chalk/15 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-gold/20 text-gold border border-gold/30">
              Period 30 · Graduation & Departure
            </span>
            <h2 className="text-2xl font-bold font-chalk text-chalk mt-1">
              Contact, Project Credits & Classroom Easter Eggs
            </h2>
          </div>
          <button
            onClick={onReturnToSeat}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gold hover:bg-gold-light text-wood-dark font-bold text-xs shadow transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Return to Row 3 Desk</span>
          </button>
        </div>

        <p className="text-sm text-chalk/80 leading-relaxed mb-6">
          Thank you for spending these 30 periods sitting in my desk! Connect with me to discuss natural language processing, Indian language technologies, and compassionate computing:
        </p>

        {/* Contact Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          <a
            href="mailto:placeholder@vitstudent.ac.in"
            onClick={(e) => { e.preventDefault(); alert("Email: [MY EMAIL] placeholder"); }}
            className="p-4 rounded-xl bg-black/40 border border-chalk/15 hover:border-gold/50 transition-colors flex items-center gap-3 group"
          >
            <Mail className="w-5 h-5 text-gold group-hover:scale-110 transition-transform" />
            <div>
              <span className="text-xs text-chalk/60 font-mono block">Direct Email</span>
              <span className="font-bold text-xs text-chalk"><PlaceholderBadge label="[MY EMAIL]" /></span>
            </div>
          </a>

          <a
            href="https://linkedin.com"
            onClick={(e) => { e.preventDefault(); alert("LinkedIn: [LINKEDIN] placeholder"); }}
            className="p-4 rounded-xl bg-black/40 border border-chalk/15 hover:border-gold/50 transition-colors flex items-center gap-3 group"
          >
            <Linkedin className="w-5 h-5 text-chalk-blue group-hover:scale-110 transition-transform" />
            <div>
              <span className="text-xs text-chalk/60 font-mono block">LinkedIn Profile</span>
              <span className="font-bold text-xs text-chalk"><PlaceholderBadge label="[LINKEDIN]" /></span>
            </div>
          </a>

          <a
            href="https://github.com"
            onClick={(e) => { e.preventDefault(); alert("GitHub: [GITHUB] placeholder"); }}
            className="p-4 rounded-xl bg-black/40 border border-chalk/15 hover:border-gold/50 transition-colors flex items-center gap-3 group"
          >
            <Github className="w-5 h-5 text-chalk-green group-hover:scale-110 transition-transform" />
            <div>
              <span className="text-xs text-chalk/60 font-mono block">GitHub Repos</span>
              <span className="font-bold text-xs text-chalk"><PlaceholderBadge label="[GITHUB]" /></span>
            </div>
          </a>
        </div>

        {/* Classroom Interactive Easter Eggs Hub */}
        <div className="p-6 rounded-2xl chalk-board-bg border-2 border-gold/40 shadow-xl space-y-4">
          <h3 className="font-bold text-sm text-gold font-mono uppercase tracking-wider flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-gold" />
            Interactive Classroom Easter Eggs
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              onClick={() => classroomAudio.playSchoolBell()}
              className="p-3.5 rounded-xl bg-black/40 border border-chalk/15 hover:border-gold text-left transition-colors flex items-center gap-3"
            >
              <Bell className="w-5 h-5 text-gold shrink-0" />
              <div>
                <span className="text-xs font-bold text-chalk block">Ring School Bell</span>
                <span className="text-[11px] text-chalk/60">Simulate vintage classroom bell</span>
              </div>
            </button>

            <button
              onClick={() => scatterClassroomStars()}
              className="p-3.5 rounded-xl bg-black/40 border border-chalk/15 hover:border-gold text-left transition-colors flex items-center gap-3"
            >
              <Sparkles className="w-5 h-5 text-chalk-yellow shrink-0" />
              <div>
                <span className="text-xs font-bold text-chalk block">Scatter Gold Stars</span>
                <span className="text-[11px] text-chalk/60">Or press 'S' on your keyboard!</span>
              </div>
            </button>

            <button
              onClick={() => classroomAudio.playChalkChime()}
              className="p-3.5 rounded-xl bg-black/40 border border-chalk/15 hover:border-gold text-left transition-colors flex items-center gap-3"
            >
              <Wind className="w-5 h-5 text-chalk-blue shrink-0" />
              <div>
                <span className="text-xs font-bold text-chalk block">Chalk Dust Sound</span>
                <span className="text-[11px] text-chalk/60">Play chalk audio chime</span>
              </div>
            </button>
          </div>

          <div className="pt-3 border-t border-chalk/10 text-xs text-chalk/60 flex flex-col sm:flex-row justify-between gap-2">
            <span>Built with React, Vite, Tailwind CSS, TypeScript, and Framer Motion.</span>
            <span className="font-mono text-[11px]">All illustrations hand-crafted inline vector SVGs.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
