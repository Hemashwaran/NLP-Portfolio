import React, { useState } from 'react';
import { PlaceholderBadge } from '../PlaceholderBadge';
import { MapPin, PhoneCall, Mic, Volume2, Globe, Sparkles, Navigation, AlertOctagon, ExternalLink, ThumbsUp, ThumbsDown, CheckCircle2 } from 'lucide-react';

interface WingCampusConnectProps {
  period: number;
}

export const WingCampusConnect: React.FC<WingCampusConnectProps> = ({ period }) => {
  // Page 20: Screenshot tour
  const [activeSlide, setActiveSlide] = useState(0);
  const screenshots = [
    {
      id: 1,
      file: '/screenshots/campus-1.jpg',
      title: 'Home Screen & Directions',
      caption: 'The home screen with topic tiles and five language chips. Asking "Where is prp how to go?" opens directions to Pearl Research Park.',
      tag: 'Navigation'
    },
    {
      id: 2,
      file: '/screenshots/campus-2.jpg',
      title: 'Google Maps Route',
      caption: 'The "Open in Google Maps" button hands the route over to Google Maps from the current location.',
      tag: 'Maps'
    },
    {
      id: 3,
      file: '/screenshots/campus-3.jpg',
      title: 'Helpline Numbers',
      caption: 'Asking for a helpline number returns 112, 108, the women\'s helpline 181 and anti-ragging 1800-180-5522, with related questions and a sample-data notice.',
      tag: 'Safety'
    },
    {
      id: 4,
      file: '/screenshots/campus-4.jpg',
      title: 'Settings Drawer',
      caption: 'Reply language (auto-match), current location, speak replies, auto-open maps, voice language and the list of topics.',
      tag: 'Settings'
    },
    {
      id: 5,
      file: '/screenshots/campus-5.jpg',
      title: 'Answering in Tamil',
      caption: 'A question asked in Tamil about the courses at VIT gets its answer in Tamil, with related questions in Tamil too.',
      tag: 'Multilingual'
    }
  ];

  // Page 21: 11 Topic Tiles & SOS
  const [selectedTopic, setSelectedTopic] = useState<string>("Library");
  const topicTiles = [
    { name: "Admissions", query: "B.Tech counseling & seat allotment dates", answer: "Admissions Office is located at MB Ground Floor. Working hours: 9 AM - 5 PM (Mon-Fri)." },
    { name: "Academics", query: "FFCS slot registration and course credit limits", answer: "FFCS portal opens on VTOP. Standard semester limit is 27 credits unless GPA > 8.5." },
    { name: "Exams & Results", query: "CAT 2 hall tickets and revaluation policy", answer: "CAT 2 hall tickets must be downloaded from VTOP. Revaluation requests close within 3 days." },
    { name: "Fees & Scholarships", query: "Semester tuition payment deadlines", answer: "Finance office counters open at Main Building. Online payments supported via VTOP portal." },
    { name: "Hostel & Food", query: "Mess change request and weekend night leave", answer: "Mess change opens between 20th-25th every month on VTOP. Night leave requires proctor approval." },
    { name: "Library", query: "Central Library weekend hours & book renewals", answer: "Central Library operates 8:00 AM to 12:00 Midnight on weekdays; 9:00 AM to 9:00 PM on Sundays." },
    { name: "Campus Services", query: "Laundry slots and post office parcel pickup", answer: "Student post office counter is beside SJT basement. Laundry tokens issued weekly." },
    { name: "Clubs / Fests / Sports", query: "Riviera & Gravitas audition registrations", answer: "Riviera cultural fest and Gravitas tech fest notices are published in Student Welfare circulars." },
    { name: "Careers & Startups", query: "CDC placement drive schedule & VEPIC incubator", answer: "Career Development Centre (CDC) is situated in TT 6th Floor. Check CDC portal daily." },
    { name: "Getting Around", query: "Campus shuttle frequency from Gate 2 to PRP", answer: "Free electric campus shuttles run every 10 minutes between Main Gate, TT, SJT, and Hostels." },
    { name: "Health & Safety", query: "Health Center doctor availability & pharmacy", answer: "Health Center is near Gymkhana. 24x7 medical officers on duty; ambulance available via 108." }
  ];

  const [simulatedVoice, setSimulatedVoice] = useState(false);
  const [feedbackGiven, setFeedbackGiven] = useState<'up' | 'down' | null>(null);

  // Period 19: Project Overview
  if (period === 19) {
    return (
      <div className="space-y-6">
        <div className="p-6 sm:p-8 rounded-2xl chalk-board-bg border-4 border-wood shadow-2xl relative">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-chalk/20 pb-4 mb-6">
            <div>
              <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                Course Capstone Project
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-chalk text-chalk mt-1">
                Campus Connect: Intelligent VIT FAQ & Navigation Guide
              </h2>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-r from-blue-900/40 to-teal-900/30 border border-blue-400/30 mb-6">
            <span className="text-xs font-mono text-chalk-yellow uppercase tracking-wider block font-bold mb-1">
              Official Project Tagline
            </span>
            <p className="text-base sm:text-lg text-chalk font-chalk leading-relaxed">
              "Your multilingual guide to VIT Vellore: answers in five languages, live opening hours and one-tap walking directions."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 rounded-xl bg-black/40 border border-chalk/10">
              <span className="text-xs text-gold font-bold font-mono block mb-1">01. The Problem</span>
              <p className="text-xs text-chalk/80 leading-relaxed">
                VIT’s 370-acre campus hosts 35,000+ students from across India. Crucial hostel, library, and emergency FAQs are scattered across circulars and hard-to-navigate PDFs.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-black/40 border border-chalk/10">
              <span className="text-xs text-chalk-yellow font-bold font-mono block mb-1">02. Who It Is For</span>
              <p className="text-xs text-chalk/80 leading-relaxed">
                Freshmen, visiting parents, and hostellers who need quick answers in their regional mother tongue without getting lost between TT, SJT, and MB.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-black/40 border border-chalk/10">
              <span className="text-xs text-chalk-green font-bold font-mono block mb-1">03. My Role</span>
              <p className="text-xs text-chalk/80 leading-relaxed">
                Designed the conversational intent taxonomy, implemented regex entity extraction for campus buildings, and built the responsive frontend interface.
              </p>
            </div>
          </div>

          <div>
            <span className="text-xs text-gold font-bold font-mono block mb-2">04. Our Team Presenting Campus Connect</span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { src: '/photos/cc-title-slide.jpg', alt: 'Campus Connect title slide', caption: 'Our title slide: Harishankar A (23MID0380), Rohan P H (23MID0440), Hemashwaran K (23MID0436).' },
                { src: '/photos/cc-presenting.jpg', alt: 'Our team presenting Campus Connect in class', caption: 'Presenting Campus Connect in class.' },
                { src: '/photos/cc-demo.jpg', alt: 'Showing the Campus Connect demo in the lab', caption: 'Showing the demo in the lab.' },
              ].map((ph) => (
                <figure key={ph.src} className="rounded-xl bg-black/40 border border-chalk/10 overflow-hidden">
                  <img src={ph.src} alt={ph.alt} loading="lazy" className="w-full h-60 object-contain bg-black/60" />
                  <figcaption className="text-xs text-chalk/70 p-2.5 leading-relaxed">{ph.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Period 20: Screenshot Tour (real screenshots)
  if (period === 20) {
    const curSlide = screenshots[activeSlide];
    return (
      <div className="space-y-6">
        <div className="p-6 rounded-2xl bg-chalkboard-light/60 border border-chalk/15 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <div>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-gold/20 text-gold border border-gold/30">
                Period 19 · Screenshots
              </span>
              <h2 className="text-2xl font-bold font-chalk text-chalk mt-1">
                Screenshot Tour: Campus Connect on My Phone
              </h2>
            </div>
            <span className="text-xs font-mono text-chalk/60">
              Screen {activeSlide + 1} of {screenshots.length}
            </span>
          </div>

          <p className="text-sm text-chalk/80 leading-relaxed mb-6">
            Real screenshots of Campus Connect running on my phone. Tap a screen to see it.
          </p>

          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start justify-center">
            <div className="w-64 sm:w-72 rounded-[28px] bg-black border-4 border-gray-700 p-2 shadow-2xl overflow-hidden">
              <img
                src={curSlide.file}
                alt={curSlide.title}
                className="w-full h-auto rounded-[20px] block"
                loading="lazy"
              />
            </div>

            <div className="max-w-md w-full space-y-4">
              <div className="p-5 rounded-xl bg-black/40 border border-gold/30">
                <span className="text-xs font-mono text-gold font-bold uppercase tracking-wider block mb-1">
                  {curSlide.tag}
                </span>
                <h3 className="text-xl font-bold font-chalk text-chalk mb-2">
                  {curSlide.title}
                </h3>
                <p className="text-xs sm:text-sm text-chalk/85 leading-relaxed">
                  {curSlide.caption}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {screenshots.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveSlide(idx)}
                    className={`p-2.5 rounded-lg text-left text-xs transition-all border ${
                      activeSlide === idx
                        ? 'bg-gold text-wood-dark font-bold border-gold shadow'
                        : 'bg-black/30 hover:bg-black/50 text-chalk/70 border-chalk/10'
                    }`}
                  >
                    <span className="block font-mono text-[10px] opacity-70">Screen {s.id}</span>
                    <span className="truncate block">{s.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Period 21: What It Can Do (11 Topic Tiles & Verified SOS)
  if (period === 21) {
    const curTopicData = topicTiles.find(t => t.name === selectedTopic) || topicTiles[5];
    return (
      <div className="space-y-6">
        <div className="p-6 rounded-2xl bg-chalkboard-light/60 border border-chalk/15 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <div>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-chalk-green/20 text-chalk-green border border-chalk-green/30">
                Period 19 · Features
              </span>
              <h2 className="text-2xl font-bold font-chalk text-chalk mt-1">
                What Campus Connect Can Do: 11 Topics & SOS
              </h2>
            </div>
          </div>

          <p className="text-sm text-chalk/80 leading-relaxed mb-6">
            Designed for convenience and safety. Click any of our 11 campus topic tiles below to see how our intent classifier parses queries and returns actionable answers!
          </p>

          {/* 11 Topic Tiles Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 mb-6">
            {topicTiles.map((topic) => (
              <button
                key={topic.name}
                onClick={() => {
                  setSelectedTopic(topic.name);
                  setFeedbackGiven(null);
                }}
                className={`p-2.5 rounded-xl text-left text-xs font-semibold transition-all border ${
                  selectedTopic === topic.name
                    ? 'bg-gold text-wood-dark font-bold shadow-md scale-102 border-gold-light'
                    : 'bg-black/30 hover:bg-black/50 text-chalk/80 border-chalk/10'
                }`}
              >
                {topic.name}
              </button>
            ))}
          </div>

          {/* Interactive Response Box */}
          <div className="p-6 rounded-2xl chalk-board-bg border-2 border-gold/40 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-chalk/15 pb-2">
              <span className="text-xs font-mono text-gold uppercase tracking-wider font-bold">
                Topic: {curTopicData.name}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSimulatedVoice(!simulatedVoice)}
                  className={`p-1.5 rounded-lg border text-xs flex items-center gap-1 transition-colors ${
                    simulatedVoice ? 'bg-gold text-wood-dark font-bold' : 'bg-black/40 text-chalk/80 border-chalk/20'
                  }`}
                  title="Simulate Speech Output"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>{simulatedVoice ? 'Speaking...' : 'Listen'}</span>
                </button>
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-chalk/60 font-mono block">Sample Student Query:</span>
              <p className="text-sm font-bold text-chalk-yellow font-sans">
                "{curTopicData.query}"
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-black/40 border border-chalk/15 text-xs text-chalk/90 leading-relaxed font-sans">
              <span className="font-bold text-chalk-green block mb-1">Campus Connect Assistant Answer:</span>
              <p>{curTopicData.answer}</p>
            </div>

            {/* Thumbs Feedback & Disclaimer */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 text-xs text-chalk/60 border-t border-chalk/10">
              <div className="flex items-center gap-2">
                <span>Was this response helpful?</span>
                <button
                  onClick={() => setFeedbackGiven('up')}
                  className={`p-1 rounded hover:text-chalk-green transition-colors ${feedbackGiven === 'up' ? 'text-chalk-green' : ''}`}
                >
                  <ThumbsUp className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setFeedbackGiven('down')}
                  className={`p-1 rounded hover:text-red-400 transition-colors ${feedbackGiven === 'down' ? 'text-red-400' : ''}`}
                >
                  <ThumbsDown className="w-4 h-4" />
                </button>
                {feedbackGiven && (
                  <span className="text-[11px] text-gold font-mono ml-1">Thanks for feedback!</span>
                )}
              </div>

              <span className="italic text-[11px]">
                Note: Sample data for class portfolio; verify with official VIT office.
              </span>
            </div>
          </div>

          {/* Emergency SOS Numbers Card */}
          <div className="mt-6 p-4 rounded-xl bg-red-950/40 border-2 border-red-500/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <AlertOctagon className="w-6 h-6 text-red-400 shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-red-200">24/7 Verified Emergency Helplines</h4>
                <p className="text-xs text-red-300/80">Immediate one-tap dial for campus and national security</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded bg-black/40 text-xs font-mono font-bold text-chalk border border-red-400/30">
                Police: 112
              </span>
              <span className="px-3 py-1 rounded bg-black/40 text-xs font-mono font-bold text-chalk border border-red-400/30">
                Ambulance: 108
              </span>
              <span className="px-3 py-1 rounded bg-black/40 text-xs font-mono font-bold text-chalk border border-red-400/30">
                Women: 181
              </span>
              <span className="px-3 py-1 rounded bg-black/40 text-xs font-mono font-bold text-chalk border border-red-400/30">
                Anti-Ragging: 1800-180-5522
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Period 22: Challenges, Lessons & Links
  return (
    <div className="space-y-6">
      <div className="p-6 rounded-2xl bg-chalkboard-light/60 border border-chalk/15 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-gold/20 text-gold border border-gold/30">
              Period 20 · Project Retrospective
            </span>
            <h2 className="text-2xl font-bold font-chalk text-chalk mt-1">
              Challenges & Lessons Learned
            </h2>
          </div>
        </div>

        <p className="text-sm text-chalk/80 leading-relaxed mb-6">
          Building Campus Connect proved that textbook assumptions crumble when real college students type colloquial queries. Here are the 4 biggest engineering challenges we overcame:
        </p>

        {/* 4 Problem -> Learning Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {[
            {
              prob: "Extreme Code-Mixing (Tanglish & Hinglish)",
              learning: "Students rarely query in formal Tamil or Hindi; they type phonetically: 'Library eppo open pannuvanga?'. Rule-based matching broke. We adopted character n-grams and phonetic dictionary mapping to restore match rates."
            },
            {
              prob: "Campus Acronym Ambiguity",
              learning: "'MB' could mean Main Building or Men's Hostel Block. We implemented location-aware contextual ranking: if the student is near the academic zone, 'MB' routes to Main Building; near hostels, it prompts for block confirmation."
            },
            {
              prob: "Slow Mobile Network During Class Rushes",
              learning: "Between 12:40 PM and 1:30 PM (lunch break), campus cellular Wi-Fi throttles heavily. We compressed our intent payload and cached frequent building coordinates in browser localStorage for offline map rendering."
            },
            {
              prob: "Emergency Query Urgency Detection",
              learning: "Queries containing words like 'fainted', 'asthma', or 'harassment' could not wait for standard classification queues. We created an instant regex high-priority interrupt that immediately presents verified emergency numbers."
            }
          ].map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-black/40 border border-chalk/15 space-y-2">
              <span className="text-[11px] font-mono text-brand-coral font-bold uppercase block">
                Challenge #{idx + 1}: {item.prob}
              </span>
              <p className="text-xs text-chalk/85 leading-relaxed">
                {item.learning}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
