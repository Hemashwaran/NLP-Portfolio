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
      file: '/assets/screenshots/campus-1.png',
      title: 'Home Chat with Curated Topic Tiles',
      caption: 'Clean, card-based interface welcoming students with suggestion chips and quick categories for SJT, TT, and Library.',
      tag: 'Main Interface'
    },
    {
      id: 2,
      file: '/assets/screenshots/campus-2.png',
      title: 'Multilingual Settings Drawer',
      caption: 'Language selection panel supporting English, தமிழ், తెలుగు, മലയാളം, and हिन्दी with instant dialect switching.',
      tag: 'Multilingual'
    },
    {
      id: 3,
      file: '/assets/screenshots/campus-3.png',
      title: 'Pedestrian Directions & Google Maps Link',
      caption: 'Asking "Where is Anna Auditorium?" gives walking distance from current location with a one-tap Google Maps walking link.',
      tag: 'Navigation'
    },
    {
      id: 4,
      file: '/assets/screenshots/campus-4.png',
      title: 'Emergency Helpline Response & Auto SOS',
      caption: 'Immediate trigger for urgent queries, presenting direct-dial cards for 112, Ambulance (108), Women’s Helpline (181), and Anti-Ragging.',
      tag: 'Safety SOS'
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
            <PlaceholderBadge label="[SOLO/TEAM]" field="Project Contribution Role" />
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
        </div>
      </div>
    );
  }

  // Period 20: Screenshot Tour
  if (period === 20) {
    const curSlide = screenshots[activeSlide];
    return (
      <div className="space-y-6">
        <div className="p-6 rounded-2xl bg-chalkboard-light/60 border border-chalk/15 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <div>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-gold/20 text-gold border border-gold/30">
                Period 20 · Visual UI Flow
              </span>
              <h2 className="text-2xl font-bold font-chalk text-chalk mt-1">
                Screenshot Tour: 4 Mobile Views
              </h2>
            </div>
            <span className="text-xs font-mono text-chalk/60">
              Slide {activeSlide + 1} of 4
            </span>
          </div>

          <p className="text-sm text-chalk/80 leading-relaxed mb-6">
            Swipe or click through the mockup screens below to see how Campus Connect delivers answers, maps routes, and handles emergency contacts.
          </p>

          {/* Phone Frame Simulator */}
          <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
            {/* Phone Screen Mockup */}
            <div className="relative w-72 sm:w-80 h-[480px] rounded-[36px] bg-black border-4 border-gray-700 p-3 shadow-2xl flex flex-col justify-between overflow-hidden">
              {/* Phone Speaker Notch */}
              <div className="w-24 h-4 bg-gray-800 rounded-full mx-auto mb-2" />

              {/* Screen Body with Graceful Fallback Art */}
              <div className="flex-1 rounded-2xl bg-[#0f172a] text-white p-4 flex flex-col justify-between overflow-hidden border border-gray-800">
                <div>
                  <div className="flex items-center justify-between border-b border-gray-800 pb-2 mb-3">
                    <span className="text-xs font-bold text-blue-400">Campus Connect</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-900/60 text-blue-200">
                      {curSlide.tag}
                    </span>
                  </div>

                  {/* Fallback Graphic UI for each slide */}
                  {curSlide.id === 1 && (
                    <div className="space-y-2 text-xs">
                      <div className="p-2.5 rounded-xl bg-gray-800/80 text-gray-200">
                        👋 Hi! Ask me anything about VIT Vellore in Tamil, Telugu, Hindi, or English.
                      </div>
                      <div className="grid grid-cols-2 gap-1.5 pt-2">
                        <div className="p-2 rounded-lg bg-blue-950/60 border border-blue-800/50 text-[11px] text-blue-200">
                          📚 Library Timings
                        </div>
                        <div className="p-2 rounded-lg bg-teal-950/60 border border-teal-800/50 text-[11px] text-teal-200">
                          🚌 Shuttle Routes
                        </div>
                        <div className="p-2 rounded-lg bg-amber-950/60 border border-amber-800/50 text-[11px] text-amber-200">
                          🏥 Health Centre
                        </div>
                        <div className="p-2 rounded-lg bg-red-950/60 border border-red-800/50 text-[11px] text-red-200">
                          🚨 Emergency SOS
                        </div>
                      </div>
                    </div>
                  )}

                  {curSlide.id === 2 && (
                    <div className="space-y-2 text-xs">
                      <span className="text-[11px] font-bold text-gray-400">Select Interface Language:</span>
                      {["English (Standard)", "தமிழ் (Tamil)", "తెలుగు (Telugu)", "മലയാളം (Malayalam)", "हिन्दी (Hindi)"].map((l, i) => (
                        <div key={i} className={`p-2 rounded-lg border text-xs flex justify-between ${
                          i === 0 ? 'bg-blue-600/30 border-blue-500 text-blue-200' : 'bg-gray-800/40 border-gray-700 text-gray-300'
                        }`}>
                          <span>{l}</span>
                          {i === 0 && <span className="text-blue-400">✓</span>}
                        </div>
                      ))}
                    </div>
                  )}

                  {curSlide.id === 3 && (
                    <div className="space-y-2 text-xs">
                      <div className="p-2.5 rounded-xl bg-gray-800/80">
                        📍 <strong>Destination:</strong> Anna Auditorium
                      </div>
                      <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-700/50 space-y-1">
                        <span className="text-emerald-300 font-bold block text-xs">Walking Route: 450 meters (6 mins)</span>
                        <p className="text-[11px] text-gray-300">Head straight from TT circle past MB lawns.</p>
                        <a
                          href="https://maps.google.com"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-block mt-2 px-2.5 py-1 rounded bg-emerald-600 text-white text-[11px] font-bold"
                        >
                          Open in Google Maps ↗
                        </a>
                      </div>
                    </div>
                  )}

                  {curSlide.id === 4 && (
                    <div className="space-y-2 text-xs">
                      <div className="p-2.5 rounded-xl bg-red-950/60 border border-red-800/60 text-red-200">
                        🚨 <strong>Emergency Contact Cards:</strong>
                      </div>
                      <div className="space-y-1.5 pt-1">
                        <div className="p-2 rounded-lg bg-gray-800/80 flex justify-between items-center text-xs">
                          <span>National Police</span>
                          <span className="font-mono font-bold text-red-400">112</span>
                        </div>
                        <div className="p-2 rounded-lg bg-gray-800/80 flex justify-between items-center text-xs">
                          <span>Medical Ambulance</span>
                          <span className="font-mono font-bold text-emerald-400">108</span>
                        </div>
                        <div className="p-2 rounded-lg bg-gray-800/80 flex justify-between items-center text-xs">
                          <span>Women Helpline</span>
                          <span className="font-mono font-bold text-purple-400">181</span>
                        </div>
                        <div className="p-2 rounded-lg bg-gray-800/80 flex justify-between items-center text-xs">
                          <span>Anti-Ragging</span>
                          <span className="font-mono font-bold text-gold text-[10px]">1800-180-5522</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Home Indicator */}
                <div className="w-16 h-1 bg-gray-600 rounded-full mx-auto" />
              </div>
            </div>

            {/* Slide Details & Selector */}
            <div className="max-w-md space-y-4">
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

              {/* Slide Buttons */}
              <div className="grid grid-cols-2 gap-2">
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
                    <span className="truncate block">{s.title.split(' ')[0]} {s.title.split(' ')[1]}</span>
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
                Period 21 · Feature Capabilities
              </span>
              <h2 className="text-2xl font-bold font-chalk text-chalk mt-1">
                What Campus Connect Can Do: 11 Topics & SOS
              </h2>
            </div>
            <PlaceholderBadge label="[CONFIRM numbers]" field="Helpline Numbers Verification" />
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
              Period 22 · Project Retrospective
            </span>
            <h2 className="text-2xl font-bold font-chalk text-chalk mt-1">
              Challenges, Lessons Learned & Live Links
            </h2>
          </div>
          <PlaceholderBadge label="[MY EXPERIENCE]" field="Personal Engineering Lessons" />
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

        {/* Action Link Buttons */}
        <div className="p-5 rounded-xl bg-chalkboard-dark border border-gold/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-bold text-chalk font-chalk text-base">Project Repositories & Deployment</h4>
            <p className="text-xs text-chalk/70">Inspect source code and live demonstrator link placeholders</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => alert("Live Demo URL: [LIVE DEMO URL] placeholder")}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gold hover:bg-gold-light text-wood-dark font-bold text-xs shadow transition-colors"
            >
              <span><PlaceholderBadge label="[LIVE DEMO URL]" /></span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => alert("GitHub Repository URL: [GITHUB URL] placeholder")}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-black/50 hover:bg-black/70 text-chalk font-semibold text-xs border border-chalk/20 transition-colors"
            >
              <span><PlaceholderBadge label="[GITHUB URL]" /></span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
