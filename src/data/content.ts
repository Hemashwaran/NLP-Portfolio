import { PageData, Flashcard, QuizQuestion } from './types';

export const OWNER_DETAILS = {
  name: "K.Hemashwaran",
  regNo: "23MID0436",
  programme: "Integrated MTech CSE(Data Science)",
  faculty: "Dr. SHARMILA BANU K",
  semester: "7",
  courseCode: "CSE3002",
  courseTitle: "Natural Language Processing",
  university: "VIT Vellore",
  academicYear: "fall Semester 2026-2027",
  evaluation: {
    cat1: "CAT 1 Completed",
    cat2: "CAT 2 Completed",
    fat: "FAT (Upcoming)",
    starsEarned: 5,
  }
};

export const TOUR_PRESETS = [
  {
    id: 'two-minute',
    title: '2-Minute Speed Tour',
    description: 'Quick walkthrough of the essentials: The Classroom, FSA derivation problem, Campus Connect, and Star moments.',
    pages: [1, 2, 8, 16, 17, 19, 23, 29]
  },
  {
    id: 'ten-minute',
    title: '10-Minute Deep Dive',
    description: 'A balanced tour through all core wings: Mam’s pedagogy, hands-on Jupyter, FSA problem, project showcase, and CAT2 review.',
    pages: [1, 2, 5, 6, 7, 8, 9, 11, 16, 17, 18, 19, 21, 23, 25, 26, 29]
  },
  {
    id: 'full-tour',
    title: 'Complete 30-Period Journey',
    description: 'Experience every single period from Arrival to Final Reflections, quizzes, interactive flashcards, and notebooks.',
    pages: Array.from({ length: 30 }, (_, i) => i + 1)
  }
];

export const PAGES_DATA: PageData[] = [
  // WING A — ARRIVAL (Pages 1–4)
  {
    id: 1,
    wingId: 'A',
    wingTitle: 'Wing A · Arrival',
    title: 'Take Your Seat',
    subtitle: 'Desk 24, Row 3 · prp, VIT Vellore',
    takeaway: 'Sit down, put your bag on the hook, and look up at the green board. NLP is about making machines understand human thought, not just grammar rules.',
    myTakeawayNote: 'Walking into prp floor at 8:50 AM with tea in hand—ready to see language turned into math.',
    cameraTarget: 'front',
    placeholderTags: ['K.Hemashwaran', '23MID046'],
    content: [
      "Welcome to my seat in the Natural Language Processing classroom at VIT Vellore. As you take your place at this wooden desk in the third row, the morning sunlight filters through the high windows, illuminating dust specks dancing around the slowly spinning ceiling fan.",
      "On the chalkboard in front, the title 'Natural Language Processing' is freshly lettered in soft chalk. On your desk rests my spiral notebook, a worn pencil case, and my laptop half-open to a Jupyter terminal.",
      "This portfolio isn't a dry technical report or a collection of slides. It is a genuine, student's-eye record of 30 lecture periods: how our mam taught us, the times we were stumped by finite state automata, how we tied grammar to our mother tongues, and how our project 'Campus Connect' was born.",
      "Take your seat, listen for the bell, and flick through our semester."
    ]
  },
  {
    id: 2,
    wingId: 'A',
    wingTitle: 'Wing A · Arrival',
    title: 'Welcome Board',
    subtitle: 'Chalkboard Introduction & Course at a Glance',
    takeaway: 'Before taking NLP, I thought it was just regular expressions and keyword search. I quickly realized human language is wildly messy, context-heavy, and beautiful.',
    myTakeawayNote: 'Machines love clean matrices; humans speak in idioms, sarcasm, and regional slang. Bridging that gap is the real thrill.',
    cameraTarget: 'blackboard',
    placeholderTags: ['K.Hemashwaran', '23MID046', "Dr. SHARMILA BANU K mam", '[SEM]'],
    content: [
      "I am K.Hemashwaran (Reg. No: 23MID046), studying Integrated Mtech CSE at VIT Vellore. When I first registered for Natural Language Processing (CSE3002) under Dr. SHARMILA BANU K mam in 7 SEM 2026, I anticipated an endless sea of dry probability tables and string parsing exercises.",
      "Instead, from Day 1, our mam framed NLP as a living bridge between cognitive linguistics and computing. Why does Google Translate stumble over honorifics in Indian languages? Why does a chatbot think 'I love Apple' is about fruit when the user is talking about stocks?",
      "The course structure keeps us grounded: CAT 1 tested our fundamentals; CAT 2 pushed us on morphology, syntax trees, and FSAs; and the upcoming FAT will synthesize everything into end-to-end language understanding.",
      "Here on the board is my personal dashboard of the course. Let's step into how this class reshaped the way I view human words."
    ]
  },
  {
    id: 3,
    wingId: 'A',
    wingTitle: 'Wing A · Arrival',
    title: 'Class Diary (Index)',
    subtitle: 'Contents, 30 Periods & Suggested Guided Pathways',
    takeaway: '30 periods divided into 8 distinct wings. Explore at your own pace or follow one of our curated itineraries.',
    myTakeawayNote: 'Every entry corresponds to a distinct classroom discussion or hands-on lab milestone.',
    cameraTarget: 'diary',
    content: [
      "This school diary contains all 30 periods of our NLP semester, organized into 8 topical wings: Arrival, How Our Mam Taught, Concept Notebook, The FSA Problem, Campus Connect Project, Stars & Outbreak Radar, Exams, and Reflection.",
      "If you are short on time, select the '2-Minute Speed Tour' to witness the key breakthroughs: our mother-tongue experiments, the challenging 10-mark FSA derivational morphology problem, and our Campus Connect assistant.",
      "Or choose the '10-Minute Deep Dive' for a comprehensive tour across theory, Jupyter labs, and CAT2 reflections. For the curious, browse period by period using the arrow keys or the timetable strip below."
    ]
  },
  {
    id: 4,
    wingId: 'A',
    wingTitle: 'Wing A · Arrival',
    title: 'About Me & My Skills',
    subtitle: 'My Background, Curiosity & Practical Toolkit',
    takeaway: 'Combining software engineering with a love for languages: building tools that speak our vernacular.',
    myTakeawayNote: 'Tools are easy to pick up; the patience to understand dialectal variations and ambiguity is what makes an NLP engineer.',
    cameraTarget: 'desk',
    placeholderTags: ['[MY LEVELS]'],
    content: [
      "I am an engineering student at VIT Vellore with an appetite for human-computer interaction, web development, and computational linguistics. Before this course, I was comfortable with standard Python scripting, Pandas data manipulation, and building React web interfaces.",
      "NLP demanded a different mindset: moving beyond deterministic logic into statistical patterns, ambiguity resolution, and token semantics. Over the semester, my comfort with regex tokenization, morphological stemmers, FSA state minimization, and spaCy NER pipelines grew significantly.",
      "What excites me most is multilingual NLP for Indian contexts—where code-mixing (Tanglish, Hinglish) and agglutinative grammars present genuine real-world challenges that standard Western-trained models fail to grasp."
    ]
  },

  // WING B — HOW OUR MAM TAUGHT (Pages 5–8)
  {
    id: 5,
    wingId: 'B',
    wingTitle: 'Wing B · How Our Mam Taught',
    title: 'Learning Through Real Applications',
    subtitle: 'From Classroom Theory to Everyday Technology',
    takeaway: 'Mam never introduced an abstract formula or grammar rule without first demonstrating where it touches our daily digital lives.',
    myTakeawayNote: 'Theory feels dry in a vacuum, but the moment you connect morphemes to Google Autocorrect, the room leans forward.',
    cameraTarget: 'blackboard',
    placeholderTags: ['[CONFIRM which were discussed]'],
    content: [
      "One hallmark of Dr. SHARMILA BANU K mam's lectures was her refusal to isolate theory inside textbooks. Rather than starting with definitions of morphological inflection or state transitions, she began with real questions: 'How does Zomato know what you mean when you search for \"biriyani near me late night\"?'",
      "She paired each core topic with an industry application: Morphology with search query stemming and autocorrect; Named Entity Recognition with automated epidemic surveillance from local news; Text Classification with WhatsApp rumour and spam detection; and Speech acoustics with multilingual voice assistants.",
      "This practical anchoring changed how we listened. When taking notes, we weren't just memorizing formulas for marks; we were reverse-engineering the services running on our phones."
    ]
  },
  {
    id: 6,
    wingId: 'B',
    wingTitle: 'Wing B · How Our Mam Taught',
    title: 'Hands-On with a Corpus (Jupyter)',
    subtitle: 'Laptop Open: Real Datasets, Messy Sentences, Working Code',
    takeaway: 'Classroom concepts were immediately validated in Jupyter notebooks using real campus and Indian corpora.',
    myTakeawayNote: 'Real text has spelling mistakes, emojis, and weird punctuation. Cleaning it taught me twice as much as clean slides.',
    cameraTarget: 'laptop',
    placeholderTags: ['[LAB 1]', '[LAB 2]', '[LAB 3]', '[NOTEBOOK / GITHUB LINK]'],
    content: [
      "Every major concept in class was paired with a live Jupyter notebook session. Mam encouraged us to keep our laptops open on our desks, running code against real corpora rather than pre-sanitized textbook examples.",
      "In Lab 1, we tackled tokenization, case normalization, and punctuation stripping across a corpus of campus circulars and local student queries. In Lab 2, we extracted n-grams and compared unigram vs. bigram language probabilities to predict the next token in student feedback.",
      "In Lab 3, we wrote custom regular expression rules and morphological stemmers to isolate root words in English and Tamil transliterations. Seeing the code output immediately fail on irregular plural forms made linguistic edge cases unforgettable."
    ]
  },
  {
    id: 7,
    wingId: 'B',
    wingTitle: 'Wing B · How Our Mam Taught',
    title: 'Learning in Our Mother Tongue',
    subtitle: 'Multilingual Insights: Tamil, Telugu, Malayalam, Hindi & English',
    takeaway: 'When mam explained morphological transitions in our regional mother tongues, complex automaton states suddenly clicked.',
    myTakeawayNote: 'Indian languages are highly agglutinative—one root word can take half a dozen suffixes. It is the ultimate test for an FSA!',
    cameraTarget: 'blackboard',
    placeholderTags: ['[REVIEW BY NATIVE SPEAKER]'],
    content: [
      "VIT is a vibrant microcosm of India: in any bench in our classroom, you'll find students whose mother tongues span Tamil, Telugu, Malayalam, Hindi, Bengali, and Marathi. Mam used this diversity as our greatest classroom asset.",
      "When teaching morphological inflection and derivational suffix transitions, she invited classmates to translate a root word—like 'school' or 'walk'—and attach case markers, plural markers, and honorific suffixes in their mother tongues.",
      "In Tamil, a single root like 'போ' (go) morphs into 'போனான்' (he went), 'போவாள்' (she will go), 'போகிறார்கள்' (they are going). In Telugu, 'వెళ్ళు' (go) becomes 'వెళ్ళాడు' (he went). In Hindi, 'पढ़' (read) derives 'पढ़ाई' (studies) and 'पढ़ाकू' (studious). Grounding abstract FSA diagrams in our native intuitions made the math feel natural."
    ]
  },
  {
    id: 8,
    wingId: 'B',
    wingTitle: 'Wing B · How Our Mam Taught',
    title: 'Class Moments & Stars System',
    subtitle: 'Active Discussions, Chalkboard Challenges & 5 Gold Stars',
    takeaway: 'Questions were welcomed, hypotheses were debated, and sharp insights earned stars that motivated the entire class.',
    myTakeawayNote: 'Earning stars wasn’t about giving the textbook answer; it was about asking the question that made everyone pause.',
    cameraTarget: 'starthart',
    placeholderTags: ['[MY MEMORIES]', '[MY WORDS]'],
    content: [
      "Our class had a special energy. Dr. SHARMILA BANU K mam kept a running record of participation on her podium notes. When a student identified a clever counter-example or spotted a missing transition in an FSA, she smiled, drew a chalk star on the board, and credited them.",
      "I earned my first 2 stars during an intense debate on lexical ambiguity: explaining why word-sense disambiguation struggles with polysemy when the surrounding context is under five tokens. Later, I earned 3 more stars when pitching the concept for our Outbreak Radar project.",
      "Her favorite classroom reminders still echo: 'Don't let your code pretend it understands language if it's merely matching sub-strings!' and 'If you can't parse it with a pencil, no deep learning framework will save you.'"
    ]
  },

  // WING C — MY CONCEPT NOTEBOOK (Pages 9–15)
  {
    id: 9,
    wingId: 'C',
    wingTitle: 'Wing C · My Concept Notebook',
    title: 'What is NLP? The Levels of Language',
    subtitle: 'From Acoustic Phonemes to Social Pragmatics',
    takeaway: 'Human language isn’t a single flat layer; it is a stack of interconnected levels from sounds and letters up to social intent.',
    myTakeawayNote: 'Computers are great at the bottom layers (letters, tokens). They start sweating the moment they hit semantics and pragmatics.',
    cameraTarget: 'diary',
    content: [
      "Natural Language Processing is often described as teaching computers to read and write, but human communication operates across multiple sophisticated linguistic tiers: Phonetics & Orthography (the sounds and symbols), Morphology (how roots and affixes form words), Syntax (how words form grammatical trees), Semantics (literal meaning), and Pragmatics (contextual intent).",
      "Ambiguity lurks at every tier. Consider lexical ambiguity: 'She deposited cash in the bank' vs 'She walked along the river bank'. Or structural ambiguity: 'I saw the man with the telescope'—did I use the telescope, or was the man holding it?",
      "Solving these requires models that don't just treat words as isolated integer tokens, but understand relational syntax and pragmatic grounding."
    ]
  },
  {
    id: 10,
    wingId: 'C',
    wingTitle: 'Wing C · My Concept Notebook',
    title: 'Text Processing Basics',
    subtitle: 'Tokenization, Normalization, Stopwords & Regular Expressions',
    takeaway: 'Garbage in, garbage out: 70% of NLP is cleaning messy raw characters into meaningful linguistic tokens.',
    myTakeawayNote: 'A missing regex flag or naive whitespace split can turn \"U.S.A.\" into three broken tokens and ruin your entire pipeline.',
    cameraTarget: 'laptop',
    content: [
      "Before any algorithm can analyze text, raw strings must undergo rigorous preprocessing. Tokenization splits continuous characters into meaningful chunks (words, punctuation, or subwords). Normalization unifies casing, expands contractions ('don't' → 'do not'), and handles diacritics.",
      "Stop-word removal filters out frequent functional words ('is', 'the', 'at') that carry little topical signal for tasks like search retrieval, though we learned to retain them for syntactic parsing.",
      "Regular expressions (regex) are the frontline soldier: matching email addresses, phone formats, dates, and currency symbols with surgical precision. Try typing into our interactive tokenizer below to see token boundaries and frequencies in real time!"
    ]
  },
  {
    id: 11,
    wingId: 'C',
    wingTitle: 'Wing C · My Concept Notebook',
    title: 'Morphology: Roots, Stems & Affixes',
    subtitle: 'Inflectional vs. Derivational Morphemes',
    takeaway: 'Morphemes are the atomic building blocks of meaning. Understanding them reveals how vocabulary expands exponentially.',
    myTakeawayNote: 'Inflection changes grammatical tense or number (walk → walking); derivation creates an entirely new word class (beauty → beautiful).',
    cameraTarget: 'diary',
    content: [
      "Morphology is the study of internal word structure. A morpheme is the smallest meaningful unit of language. Free morphemes can stand alone as independent words ('cat', 'happy'), whereas bound morphemes must attach as affixes ('-s', 'un-', '-ness').",
      "We distinguish two vital types: Inflectional morphology modifies a word's tense, aspect, or number without changing its core grammatical category (e.g., 'cat' → 'cats', 'sing' → 'singing').",
      "Derivational morphology, by contrast, transforms words into new grammatical categories or fundamentally alters meaning: 'derive' (Verb) + '-ation' → 'derivation' (Noun); 'nation' (Noun) + '-al' → 'national' (Adj) + '-ize' → 'nationalize' (Verb). Try our interactive morpheme splitter below!"
    ]
  },
  {
    id: 12,
    wingId: 'C',
    wingTitle: 'Wing C · My Concept Notebook',
    title: 'Grammar & Part-of-Speech Tagging',
    subtitle: 'Penn Treebank Tags, Syntax Trees & Word Roles',
    takeaway: 'A word’s identity depends on its syntactic job in the sentence: noun, verb, adjective, or adverb.',
    myTakeawayNote: 'English is notorious: \"fast\" can be a verb, noun, adjective, or adverb depending on syntax!',
    cameraTarget: 'diary',
    content: [
      "Part-of-Speech (POS) tagging assigns a grammatical role to every token in context: NN (singular noun), VBZ (3rd person singular present verb), JJ (adjective), RB (adverb), and DT (determiner).",
      "Why is this critical? Without POS tags, a machine cannot distinguish 'Can (Modal Verb) you open this can (Noun)?', nor can a text-to-speech engine know whether to pronounce 'record' as RE-cord (noun) or re-CORD (verb).",
      "Beyond individual tags, Phrase Structure Grammars assemble words into hierarchical trees: Noun Phrases (NP) and Verb Phrases (VP). Test your grammatical intuition in our POS-tag guessing activity below."
    ]
  },
  {
    id: 13,
    wingId: 'C',
    wingTitle: 'Wing C · My Concept Notebook',
    title: 'N-grams & Language Models',
    subtitle: 'Predicting the Next Word: Unigrams, Bigrams & Trigrams',
    takeaway: 'Language modeling computes the probability distribution of words based on their preceding context.',
    myTakeawayNote: 'Even simple bigram frequency counts give your keyboard autocomplete surprisingly good intuition.',
    cameraTarget: 'laptop',
    content: [
      "An n-gram is a contiguous sequence of n items from a text stream. A unigram is a single word ('natural'), a bigram is a pair ('natural language'), and a trigram is a triplet ('natural language processing').",
      "In classical statistical NLP, we estimate the conditional probability of the next word given the preceding (n-1) words using maximum likelihood estimation over a training corpus: P(w_n | w_1...w_{n-1}) ≈ Count(w_{n-1}, w_n) / Count(w_{n-1}).",
      "While deep neural language models now dominate, n-grams remain the foundation for spell-checking, speech recognition scoring, and fast query auto-completion. Experiment with our mini bigram next-word generator below!"
    ]
  },
  {
    id: 14,
    wingId: 'C',
    wingTitle: 'Wing C · My Concept Notebook',
    title: 'NER & Text Classification',
    subtitle: 'Extracting Named Entities & Categorizing Documents',
    takeaway: 'Turning unstructured student chatter and news bulletins into structured entities: People, Places, and Emergency Alerts.',
    myTakeawayNote: 'NER gave our Campus Connect and Outbreak Radar concepts their practical backbone.',
    cameraTarget: 'wall',
    content: [
      "Named Entity Recognition (NER) scans raw text to identify and classify proper nouns into predefined categories: PERSON, ORGANIZATION, LOCATION, DATE, and MEDICAL terms.",
      "In our campus context, when a student types 'Is the TT library open until 9 PM on Sunday?', NER extracts 'TT library' as LOCATION, '9 PM' as TIME, and 'Sunday' as DATE, enabling deterministic database lookup.",
      "Paired with Text Classification—which categorizes text into intent labels like 'Admissions', 'Hostel Query', or 'Health Emergency'—these techniques form the backbone of modern conversational agents. Try highlighting the entities in our sample sentence below!"
    ]
  },
  {
    id: 15,
    wingId: 'C',
    wingTitle: 'Wing C · My Concept Notebook',
    title: 'Glossary Flashcards',
    subtitle: '25 Essential NLP Terms: Mastered & Memorized',
    takeaway: 'Quick-fire revision deck covering fundamental terminology across all syllabus units.',
    myTakeawayNote: 'Flipping through these cards before CAT 2 was how I solidified my definitions and got full marks on Section A.',
    cameraTarget: 'desk',
    content: [
      "Linguistic and algorithmic terminology can easily blur together during exam revision. Here is my complete set of 25 curated flashcards, organized across Basics, Morphology, Syntax, Semantics, and Models & NER.",
      "Click each card to flip and reveal its concise student-friendly definition and concrete example. Mark the ones you've mastered to track your progress with our live counter!"
    ]
  },

  // WING D — THE FSA PROBLEM (Pages 16–18)
  {
    id: 16,
    wingId: 'D',
    wingTitle: 'Wing D · The FSA Problem',
    title: 'The Exam Question (CAT 2)',
    subtitle: 'Finite State Automata for English Derivational Morphology',
    takeaway: 'A classic 10-mark examination problem testing whether a state machine can accurately parse derivational suffixes.',
    myTakeawayNote: '10 marks on the line: you must trace valid paths step-by-step and identify exactly which transition is missing.',
    cameraTarget: 'exampaper',
    placeholderTags: ['[VERIFY MY ANSWER]'],
    content: [
      "In our CAT 2 exam, Dr. SHARMILA BANU K mam presented this standout 10-mark question (CO4, Derivational Morphology):",
      "\"Determine the transitions for the following words from the given Finite State Automaton (FSA) of Derivational Morphology. Also, if the given FSA does not include the transition for any of the given words, alter that part of the FSA and present the sequence of transitions.\"",
      "The five target words were: a) Minimal, b) Naturalization, c) Spontaneousness, d) Actually, and e) Revolutionary.",
      "This problem separated memorizers from thinkers: you had to dissect the root grammatical category (Noun, Verb, Adjective), follow valid derivational affixes through states q0 to q11, and augment the automaton where standard English suffixation was omitted."
    ]
  },
  {
    id: 17,
    wingId: 'D',
    wingTitle: 'Wing D · The FSA Problem',
    title: 'Interactive FSA & Walkthrough',
    subtitle: 'States q0–q11, Animated Step Transitions & Augmented Edges',
    takeaway: 'Explore the full state machine: see accepting double-circles, suffix transitions, and the exact custom paths for all 5 words.',
    myTakeawayNote: 'Adding q0 --al--> q4 or q0 --ive--> q8: visual state tracking turns confusing exam theory into clear logic.',
    cameraTarget: 'wall',
    placeholderTags: ['[VERIFY MY ANSWER]'],
    content: [
      "Here is the complete English derivational morphology FSA, rendered with interactive SVG states q0 through q11. Accepting states (where a complete, valid derived word is formed) are drawn as double circles.",
      "Standard transitions cover common paths: q0 (Base Root) attaches '-ize' (V) to reach q1, '-ation' (N) to reach q2, '-able' (A) to reach q3, '-ity' (N) to reach q5, and '-ness' (N) to reach q6.",
      "Select any of the five exam words below. The interactive diagram animates the transition sequence step-by-step. For words requiring an augmented path (such as '-al' turning a noun/root into an adjective), the newly proposed transition is highlighted in vibrant coral with a concise rationale."
    ]
  },
  {
    id: 18,
    wingId: 'D',
    wingTitle: 'Wing D · The FSA Problem',
    title: 'In My Mother Tongue + Mini Quiz',
    subtitle: 'Derivational Affixes in Indian Languages & 5-Question Check',
    takeaway: 'Derivational morphology isn’t just an English phenomenon: Dravidian and Indo-Aryan languages show extraordinary suffix chains.',
    myTakeawayNote: 'Testing yourself immediately after walking through the state machine cements the concepts permanently.',
    cameraTarget: 'blackboard',
    placeholderTags: ['[MY LANGUAGE]', '[REVIEW BY NATIVE SPEAKER]'],
    content: [
      "To appreciate why FSAs are universal, look at Indian languages. In Tamil, from the root 'மனிதன்' (man, Noun) we attach '-த்தனம்' to derive 'மனிதத்தனம்' (humanity, Noun). In Hindi, from 'मानव' (human) we append '-ता' to derive 'मानवता' (humanity), or from 'सफल' (successful) + '-ता' → 'सफलता' (success).",
      "Because Indian languages are agglutinative, words can chain multiple suffixes: Root + Derivational Suffix + Plural Suffix + Case Marker. An FSA models this with graceful cycles and sequential accepting states.",
      "Now, challenge yourself with our 5-question Derivational FSA mini-quiz below to verify your mastery of state transitions and category shifts!"
    ]
  },

  // WING E — PROJECT: CAMPUS CONNECT (Pages 19–22)
  {
    id: 19,
    wingId: 'E',
    wingTitle: 'Wing E · Project: Campus Connect',
    title: 'Project Overview: Campus Connect',
    subtitle: 'An Intelligent Multilingual FAQ & Navigation Guide for VIT Vellore',
    takeaway: 'Bridging the campus information gap: answers in 5 languages, live facility timings, and walking directions for new students.',
    myTakeawayNote: 'Every freshman gets lost looking for TT, SJT, or the Health Center. Why not give them an assistant that speaks their language?',
    cameraTarget: 'poster',
    placeholderTags: ['[SOLO/TEAM]'],
    content: [
      "Every year, thousands of new students arrive at VIT Vellore from all corners of India and abroad. The campus is vast (over 370 acres), building acronyms like SJT, TT, MB, and PRP are bewildering, and crucial administrative FAQs are buried inside PDFs or scattered circulars.",
      "Our course project, Campus Connect, was conceived as an accessible, student-friendly assistant. Its tagline: 'Your multilingual guide to VIT Vellore: answers in five languages, live opening hours, and one-tap walking directions.'",
      "Whether a student asks in Tamil about library borrowing hours, in Hindi about mess card replacement, or in English for directions to the Health Center, Campus Connect parses intent, extracts location entities, and delivers crisp, verified answers."
    ]
  },
  {
    id: 20,
    wingId: 'E',
    wingTitle: 'Wing E · Project: Campus Connect',
    title: 'Screenshot Tour: The UI Flow',
    subtitle: 'Home Chat, Category Drawer, Maps Route & Emergency Helplines',
    takeaway: 'A clean mobile-first design built for fast triage under poor campus Wi-Fi conditions.',
    myTakeawayNote: 'Designing for mobile means large touch targets, immediate visual fallback, and offline helpline access.',
    cameraTarget: 'laptop',
    content: [
      "Browse through our interface mockups below: Screen 1 shows the Welcome Home screen with curated topic tiles and quick suggestion chips. Screen 2 illustrates the multilingual switcher, toggling between English, Tamil, Telugu, Malayalam, and Hindi.",
      "Screen 3 demonstrates our location-aware navigation: asking 'Where is Anna Auditorium?' returns walking distance, current gate access, and a direct Google Maps walking route link.",
      "Screen 4 highlights our Emergency SOS panel, displaying verified one-tap contact cards for VIT Security, Ambulance, Women's Helpline, and Anti-Ragging officers."
    ]
  },
  {
    id: 21,
    wingId: 'E',
    wingTitle: 'Wing E · Project: Campus Connect',
    title: 'What Campus Connect Can Do',
    subtitle: '11 Topic Categories, Multilingual Intent Matching & Safety SOS',
    takeaway: '11 rich campus categories, speech input, GPS routing, and official verified emergency numbers.',
    myTakeawayNote: 'Notice the honesty banner: campus regulations change, so we always advise double-checking with the Proctor Office!',
    cameraTarget: 'poster',
    placeholderTags: ['[CONFIRM numbers]'],
    content: [
      "Campus Connect is packed with practical utility: 1) Five Languages with auto-detection (English, தமிழ், తెలుగు, മലയാളം, हिन्दी); 2) Voice input and spoken replies for hands-free navigation while walking between lectures.",
      "3) 'I'm currently at' geolocation routing that opens direct pedestrian routes on Google Maps; 4) 11 comprehensive topic tiles spanning Admissions, Academics, Exams, Fees, Hostels, Library, Campus Services, Clubs, Careers, Getting Around, and Health & Safety.",
      "5) One-tap Emergency SOS with verified helplines: National Police/Emergency 112, Medical Ambulance 108, Women's Helpline 181, and National Anti-Ragging 1800-180-5522. We also include an honest disclaimer reminding students that sample data must be confirmed with official VIT circulars."
    ]
  },
  {
    id: 22,
    wingId: 'E',
    wingTitle: 'Wing E · Project: Campus Connect',
    title: 'Challenges, Lessons & Links',
    subtitle: 'What Broke, What We Fixed & Where the Project Goes Next',
    takeaway: 'Building for diverse students taught us that colloquial phrasing breaks rigid regex rules every single time.',
    myTakeawayNote: 'Code-mixing (mixing English and Tamil) was our biggest hurdle—and our most exciting learning curve.',
    cameraTarget: 'desk',
    placeholderTags: ['[MY EXPERIENCE]', '[LIVE DEMO URL]', '[GITHUB URL]'],
    content: [
      "Our biggest engineering challenge was handling colloquial code-mixing. Students rarely ask 'What are the operational hours of the Central Library?'; they type 'Anna, library eppo close pannuvanga?' or 'Hostel leave approval process kya hai?'.",
      "Rule-based regex matching failed miserably. We learned to implement phonetic transliteration normalization and intent classification using character n-grams and synonym clustering, which drastically improved query match rates.",
      "Future milestones include direct integration with VTOP credentials, live shuttle tracking across campus, and offline SMS fallback. Check out our project repositories and documentation below!"
    ]
  },

  // WING F — STARS & OUTBREAK RADAR (Pages 23–25)
  {
    id: 23,
    wingId: 'F',
    wingTitle: 'Wing F · Stars & Outbreak Radar',
    title: 'The Star Chart: 5 Classroom Stars',
    subtitle: 'Recognized by Our Faculty for Active Discussion & Novel Ideas',
    takeaway: 'Two starts for aswering questions in class, three stars for proposing the Outbreak Radar framework.',
    myTakeawayNote: 'Five little gold stars drawn on the chalkboard next to my roll number—the best encouragement of the semester.',
    cameraTarget: 'starthart',
    placeholderTags: ['[MY STORY]'],
    content: [
      "In Dr. SHARMILA BANU K mam's classroom, stars weren't given out for quietly taking notes. They were awarded when you stuck your neck out, challenged an assumption, or connected a theoretical NLP concept to a high-impact real-world crisis.",
      "Stars 1 & 2 arrived in Week 4: I answered 2 questions asked in class by mam so i got 2 starts for answering questions",
      "Stars 3, 4, & 5 arrived when presenting our Outbreak Radar concept: showing how NLP could parse regional newspaper reports and inter-district bus manifests during the Nipah and viral fever outbreaks to predict transmission corridors before official bulletins were issued."
    ]
  },
  {
    id: 24,
    wingId: 'F',
    wingTitle: 'Wing F · Stars & Outbreak Radar',
    title: 'My Idea Board: Handwritten Brainstorms',
    subtitle: 'Two NLP Innovations from My Class Notebook',
    takeaway: 'Idea 1: Nipah virus rumour detection; Idea 2: Outbreak Radar combining text NLP with inter-city transport logs.',
    myTakeawayNote: 'When disease spreads, rumours spread faster than the pathogen. NLP is the antidote to information panic.',
    cameraTarget: 'wall',
    content: [
      "These two sticky notes are pulled directly from the back pages of my classroom spiral pad:",
      "IDEA 1 — Rumour Detection during Pandemics (Nipah Virus Context): Extracting hospital and locality entities from regional social media posts, running stance classification ('confirmed', 'speculation', 'debunked'), and filtering out false panic-inducing claims before they trigger hospital rushes.",
      "IDEA 2 — Outbreak Radar: Combining NLP news surveillance with public transport corridor data. When regional news mentions fever clusters in a specific town, the model geo-parses bus routes leaving that depot to forecast which neighboring transit hubs face secondary transmission risk."
    ]
  },
  {
    id: 25,
    wingId: 'F',
    wingTitle: 'Wing F · Stars & Outbreak Radar',
    title: 'Outbreak Radar, Explained Simply',
    subtitle: 'Connecting News NER, Geo-Parsing & Transit Flow',
    takeaway: 'A friendly, non-technical look at how text intelligence helps public health officials stay ahead of contagion.',
    myTakeawayNote: 'You don\'t need complex deep neural networks to save lives—smart entity extraction and route mapping do the heavy lifting.',
    cameraTarget: 'poster',
    content: [
      "Imagine an unusual cluster of fever cases reported in local newspapers across a district like Kozhikode or Vellore. Official health agency reports often take 5 to 7 days to consolidate. Local news blogs, clinic advisories, and community posts, however, mention them within hours.",
      "Outbreak Radar uses NLP to listen to this public stream: 1) Medical NER identifies symptom clusters ('high fever', 'respiratory distress') and specific hospital clinics; 2) Geo-parsing extracts place names and correlates them with inter-district bus routes.",
      "3) The system calculates a transit risk corridor, highlighting down-route bus stands where informational posters and mobile testing vans should be deployed proactively. Explore our animated illustrative simulation map below!"
    ]
  },

  // WING G — EXAMS (Pages 26–27)
  {
    id: 26,
    wingId: 'G',
    wingTitle: 'Wing G · Exams',
    title: 'The CAT 2 Experience',
    subtitle: 'How Our Mam Tested Conceptual Understanding, Not Rote Memory',
    takeaway: 'Our Continuous Assessment Test wasn’t a copy-paste regurgitation of lecture slides; it demanded authentic linguistic reasoning.',
    myTakeawayNote: 'Walking into an exam where you actually have to invent new automaton transitions is both terrifying and exhilarating.',
    cameraTarget: 'exampaper',
    placeholderTags: ['[WHICH QUESTION]'],
    content: [
      "In many engineering courses, assessment papers reward memorizing slide definitions and reproducing static diagrams. Dr. SHARMILA BANU K mam's CAT 2 was an entirely different breed.",
      "The paper tested whether we truly understood the computational mechanics of language. In the derivational morphology section, the given FSA deliberately omitted transitions for words like 'minimal' and 'revolutionary'—forcing us to explain where the automaton blocked and justify new state transitions.",
      "On question 3 (Morphology & State Sequences), I carefully sketched the derivation paths and explained why the bound suffix '-al' required an adjectival transition branch. Mam wrote a handwritten 'Good!' in green ink next to my solution—a proud moment that validated all my late-night revision."
    ]
  },
  {
    id: 27,
    wingId: 'G',
    wingTitle: 'Wing G · Exams',
    title: 'How I Prepared + Practice Quiz',
    subtitle: 'Study Strategy, Common Pitfalls & 8-Question Assessment',
    takeaway: 'My study formula: hand-draw FSAs on scrap paper, test regex edge-cases in Python, and practice with quick recall quizzes.',
    myTakeawayNote: 'Don\'t just read an FSA—draw it with a pencil until state transitions become muscle memory.',
    cameraTarget: 'desk',
    placeholderTags: ['[MY STRATEGY]'],
    content: [
      "My preparation for NLP was built on three simple habits: First, drawing every state machine by hand on rough paper before checking the solution. Second, typing tricky sentence ambiguities into a live Python shell to see what spaCy or NLTK did with them.",
      "Third, peer quizzes with benchmates right outside the TT food court before class. We would throw random words at each other ('antidisestablishmentarianism!') and trace the derivational morpheme breakdown on napkins.",
      "Test your own readiness right now with this comprehensive 8-question practice quiz spanning tokenization, morphology, n-grams, and NER. Immediate explanations follow every question!"
    ]
  },

  // WING H — REFLECTION (Pages 28–30)
  {
    id: 28,
    wingId: 'H',
    wingTitle: 'Wing H · Reflection',
    title: 'Semester Timeline & Skills Gained',
    subtitle: 'From Day 1 to CAT 2: My Learning Arc at VIT Vellore',
    takeaway: 'A semester of growth: transforming raw text curiosity into tangible computational linguistic skills.',
    myTakeawayNote: 'Looking back at my Week 1 notebook, I smile at how naive my regex rules were. We have come a very long way.',
    cameraTarget: 'window',
    placeholderTags: ['[DATES]'],
    content: [
      "Reflecting on the timeline of our semester reveals how each milestone naturally built upon the last: from our first introductory lecture on linguistic ambiguity, through hands-on Jupyter corpus sessions, our deep dive into the derivational FSA challenge, the pitch of Outbreak Radar, and the rigors of CAT 2.",
      "Key competencies gained include: 1) Corpus preprocessing & regex text normalization; 2) Morphological decomposition & Finite State Automata design; 3) Statistical language modeling with n-grams; 4) Named Entity Recognition & intent triage; and 5) Multilingual UX design for campus tools.",
      "More than the code, I developed an appreciation for the subtle nuances of how people express thoughts, ask for help, and converse in their native tongues."
    ]
  },
  {
    id: 29,
    wingId: 'H',
    wingTitle: 'Wing H · Reflection',
    title: 'Reflection & Heartfelt Thank-You',
    subtitle: 'What Changed in How I See Language & A Note to Dr. SHARMILA BANU K mam',
    takeaway: 'A great teacher doesn\'t just deliver syllabus units; she sparks curiosity that spills out of the classroom into everyday life.',
    myTakeawayNote: 'To Dr. SHARMILA BANU K mam: thank you for your patience, your chalk stars, and for making a complex field feel welcoming and fun.',
    cameraTarget: 'blackboard',
    placeholderTags: ["Dr. SHARMILA BANU K mam"],
    content: [
      "Before this course, I took language for granted. I assumed words were tidy containers for concepts, easily mapped into computer databases. Now, I notice ambiguity and morphology everywhere: in street hoardings, Tamil poetry, automated customer care bots, and speech transcription glitches.",
      "This shift in perspective is entirely thanks to our faculty, Dr. SHARMILA BANU K mam. Her patience in answering every query, her encouragement whenever we stumbled in Jupyter labs, and her insistence on grounding theory in real human problems made CSE3002 my favorite course this semester.",
      "Thank you, Mam, for making the classroom a place of lively debate, for pushing us to think beyond standard answers, and for believing in our project ideas. This portfolio is a tribute to your teaching."
    ]
  },
  {
    id: 30,
    wingId: 'H',
    wingTitle: 'Wing H · Reflection',
    title: 'Contact, Credits & Back to My Seat',
    subtitle: 'Connect with Me, Open Source Credits & Classroom Easter Eggs',
    takeaway: 'Thank you for taking a seat in our classroom! Let’s keep discussing language, code, and compassionate technology.',
    myTakeawayNote: 'Click the desk clock to ring the school bell, click the ceiling fan to spin it, or press S to scatter stars!',
    cameraTarget: 'desk',
    placeholderTags: ['K.Hemashwaran', '23MID046', '[MY EMAIL]', '[LINKEDIN]', '[GITHUB]'],
    content: [
      "Thank you for exploring all 30 periods of 'The Classroom View'! I hope this student-eye portfolio gave you a genuine feel for how we studied Natural Language Processing at VIT Vellore.",
      "Connect with me: Email: [MY EMAIL] · LinkedIn: [LINKEDIN] · GitHub: [GITHUB]. All code for this portfolio is open-source and built with React, Vite, Tailwind CSS, and Framer Motion.",
      "Typography credits: Patrick Hand & Caveat by Google Fonts, DM Sans by Colophon Foundry, JetBrains Mono by JetBrains. No copyrighted assets or stock photos were used; all illustrations are hand-crafted inline SVGs.",
      "Before you leave, don't forget to test the classroom easter eggs: click the wall clock to ring the vintage bell, toggle the ceiling fan, switch between daytime lecture and evening desk lamp, or press 'S' on your keyboard to scatter stars across the room!"
    ]
  }
];

export const GLOSSARY_FLASHCARDS: Flashcard[] = [
  { id: '1', term: 'Corpus', category: 'Basics', definition: 'A large, structured collection of machine-readable texts used for statistical and linguistic modeling.', example: 'A collection of 20,000 student feedback posts.' },
  { id: '2', term: 'Tokenization', category: 'Basics', definition: 'Splitting running text into individual words, punctuation marks, or subword tokens.', example: '"I love NLP!" → ["I", "love", "NLP", "!"]' },
  { id: '3', term: 'Normalization', category: 'Basics', definition: 'Standardizing text format by lowercasing, handling punctuation, and expanding contractions.', example: '"won\'t" → "will not", "U.S.A." → "USA"' },
  { id: '4', term: 'Stop Words', category: 'Basics', definition: 'High-frequency function words that convey minimal topical information in search or retrieval.', example: '"is", "the", "in", "and", "at"' },
  { id: '5', term: 'Regular Expression', category: 'Basics', definition: 'A formal sequence of characters defining a search pattern for text matching and extraction.', example: '\\b[A-Z]{3}\\d{4}\\b matches course codes like CSE3002' },
  { id: '6', term: 'Morpheme', category: 'Morphology', definition: 'The smallest meaningful grammatical unit of a language that cannot be divided further.', example: '"unbreakable" contains three morphemes: un-, break, -able' },
  { id: '7', term: 'Free Morpheme', category: 'Morphology', definition: 'A morpheme that can stand alone as a self-contained word.', example: '"cat", "write", "green", "desk"' },
  { id: '8', term: 'Bound Morpheme', category: 'Morphology', definition: 'A morpheme that cannot stand alone; it must attach to a root word as an affix.', example: 'prefixes (re-, un-) and suffixes (-ing, -tion)' },
  { id: '9', term: 'Inflectional Morpheme', category: 'Morphology', definition: 'An affix altering grammatical tense or number without changing the word’s lexical category.', example: '"play" (V) + "-ed" → "played" (V)' },
  { id: '10', term: 'Derivational Morpheme', category: 'Morphology', definition: 'An affix that transforms a word into a new grammatical class or creates a new meaning.', example: '"nation" (N) + "-al" → "national" (Adj)' },
  { id: '11', term: 'Stemming', category: 'Morphology', definition: 'A heuristic suffix-stripping process to reduce words to a common base form, often creating non-words.', example: '"running", "runs" → "run"; "flies" → "fli"' },
  { id: '12', term: 'Lemmatization', category: 'Morphology', definition: 'A vocabulary and morphological analysis process reducing inflected words to valid dictionary lemmas.', example: '"better" → "good", "wolves" → "wolf"' },
  { id: '13', term: 'FSA (Finite State Automaton)', category: 'Morphology', definition: 'A computational graph of states and labeled transitions modeling sequential token patterns.', example: 'q0 --ize--> q1 --ation--> q2 (accepting)' },
  { id: '14', term: 'Part-of-Speech (POS)', category: 'Syntax', definition: 'Grammatical category assigned to a token based on its syntactic role in context.', example: 'Noun (NN), Verb (VB), Adjective (JJ), Adverb (RB)' },
  { id: '15', term: 'Parse Tree', category: 'Syntax', definition: 'A hierarchical tree structure representing the syntactic phrase decomposition of a sentence.', example: 'Sentence → NP (Noun Phrase) + VP (Verb Phrase)' },
  { id: '16', term: 'Structural Ambiguity', category: 'Syntax', definition: 'A situation where a sentence can be parsed into multiple distinct valid grammatical structures.', example: '"I saw the man with the telescope."' },
  { id: '17', term: 'Lexical Ambiguity', category: 'Semantics', definition: 'When a single word possesses multiple distinct meanings (polysemy or homonymy).', example: '"bank" (financial institution vs river edge)' },
  { id: '18', term: 'Semantics', category: 'Semantics', definition: 'The study of literal meaning expressed by words and composite grammatical structures.', example: 'Evaluating truth conditions and semantic entailment.' },
  { id: '19', term: 'Pragmatics', category: 'Semantics', definition: 'How context, speaker intent, and real-world shared knowledge alter perceived meaning.', example: '"Can you pass the salt?" is a polite request, not a yes/no query.' },
  { id: '20', term: 'Word Sense Disambiguation', category: 'Semantics', definition: 'The computational task of determining which meaning of a polysemous word is used in context.', example: 'Deciding whether "bass" refers to fish or guitar.' },
  { id: '21', term: 'Unigram', category: 'Models & NER', definition: 'A contiguous sequence of 1 token extracted from a text stream.', example: 'In "VIT is great": ["VIT"], ["is"], ["great"]' },
  { id: '22', term: 'Bigram', category: 'Models & NER', definition: 'A contiguous sequence of 2 tokens used to estimate immediate conditional word probabilities.', example: '["VIT is", "is great"]' },
  { id: '23', term: 'Language Model', category: 'Models & NER', definition: 'A probabilistic model estimating the likelihood of word sequences or predicting the next token.', example: 'P("processing" | "natural", "language")' },
  { id: '24', term: 'Named Entity Recognition (NER)', category: 'Models & NER', definition: 'Information extraction identifying proper names and classifying them into predefined types.', example: '"Vellore Institute of Technology" → ORGANIZATION' },
  { id: '25', term: 'Text Classification', category: 'Models & NER', definition: 'Assigning a document or sentence into one or more predefined semantic topic categories.', example: 'Classifying a student email as "Hostel Enquiry" or "Fee Issue"' },
];

export const CAT2_PRACTICE_QUIZ: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'In the word "unhappiness", what is the derivational suffix that changes the adjective into a noun?',
    options: ['un-', 'happi', '-ness', '-ly'],
    correctIndex: 2,
    explanation: '"-ness" attaches to the adjective base "happy" to create the abstract noun "unhappiness". "un-" is a derivational prefix.'
  },
  {
    id: 'q2',
    question: 'Which of the following is an inflectional morpheme in English?',
    options: ['-ation (creating nouns from verbs)', '-ly (creating adverbs from adjectives)', '-s (marking 3rd-person singular present tense)', '-ize (creating verbs from adjectives)'],
    correctIndex: 2,
    explanation: 'Inflectional morphemes only alter grammatical tense/aspect/number without changing word class. "-s" in "walks" is inflectional.'
  },
  {
    id: 'q3',
    question: 'In an FSA for derivational morphology, what does a double-circle state signify?',
    options: ['Start state (q0)', 'Dead state / trap state', 'Accepting / final state indicating a valid word', 'Loop transition state'],
    correctIndex: 2,
    explanation: 'In automata theory, double circles denote accepting states where the input sequence forms a recognized, complete valid word.'
  },
  {
    id: 'q4',
    question: 'For the target word "Actually", which sequence of morphological transitions is taken from base root "act"?',
    options: ['act (N/V) --ual--> q4 (Adj) --ly--> q7 (Adv)', 'act (N/V) --ize--> q1 --ation--> q2', 'act (N/V) --ness--> q6', 'act (N/V) --er--> q10'],
    correctIndex: 0,
    explanation: '"act" (root) + "-ual" derives "actual" (adjective), followed by suffix "-ly" deriving "actually" (adverb, an accepting state).'
  },
  {
    id: 'q5',
    question: 'What is the primary difference between Stemming and Lemmatization?',
    options: [
      'Stemming uses machine learning; lemmatization uses regex only.',
      'Stemming chops suffixes heuristically (can produce non-words); lemmatization uses vocabulary and morphology to return true base forms.',
      'Stemming works on sentences; lemmatization only works on characters.',
      'There is no difference; they are exact synonyms.'
    ],
    correctIndex: 1,
    explanation: 'Stemming (like Porter Stemmer) strips suffixes by rules ("running" → "run", "studies" → "studi"). Lemmatization uses morphological dictionaries to return valid base lemmas ("better" → "good").'
  },
  {
    id: 'q6',
    question: 'In a Bigram Language Model, how is the probability P("Processing" | "Language") computed using Maximum Likelihood?',
    options: [
      'Count("Processing") / Count("Language")',
      'Count("Language Processing") / Count("Language")',
      'Count("Language Processing") / Total Word Count',
      'Count("Language") / Count("Processing")'
    ],
    correctIndex: 1,
    explanation: 'Conditional probability in bigram models is the frequency of the word pair divided by the frequency of the conditioning word: Count(w1, w2) / Count(w1).'
  },
  {
    id: 'q7',
    question: 'Which NLP task is essential for extracting hospital names and outbreak locations from news reports in our Outbreak Radar project?',
    options: ['Part-of-Speech Tagging', 'Stemming', 'Named Entity Recognition (NER)', 'Stop-word filtering'],
    correctIndex: 2,
    explanation: 'Named Entity Recognition specifically identifies and tags entity spans like LOCATION, ORGANIZATION, and MEDICAL facilities.'
  },
  {
    id: 'q8',
    question: 'Why do Indian languages like Tamil and Telugu present unique challenges for simple FSA derivational models?',
    options: [
      'They have no grammatical rules.',
      'They are agglutinative languages where multiple affixes and case markers can chain together onto a single root.',
      'They cannot be represented in Unicode.',
      'They do not use nouns or verbs.'
    ],
    correctIndex: 1,
    explanation: 'Agglutinative languages chain multiple morphemes into single long words (e.g., root + derivative + plural + case marker + honorific), requiring recursive or looping FSA structures.'
  }
];

export const MOTHER_TONGUE_EXAMPLES = [
  {
    lang: 'English',
    nativeName: 'English',
    root: 'Happy',
    category: 'Adjective',
    derivation: 'Un- + happy + -ness → Unhappiness',
    resultCategory: 'Noun',
    explanation: 'Prefix "un-" negates meaning; suffix "-ness" converts adjective to abstract state noun.'
  },
  {
    lang: 'Tamil',
    nativeName: 'தமிழ்',
    root: 'மனிதன் (Man/Human)',
    category: 'Noun',
    derivation: 'மனிதன் + -த்தனம் → மனிதத்தனம் (Humanity)',
    resultCategory: 'Abstract Noun',
    explanation: 'The suffix "-த்தனம்" (-tanam) shifts a concrete noun into an abstract quality or characteristic.'
  },
  {
    lang: 'Telugu',
    nativeName: 'తెలుగు',
    root: 'చదువు (Read / Study)',
    category: 'Verb',
    derivation: 'చదువు + -వరి → చదువరి (Scholar / Reader)',
    resultCategory: 'Agentive Noun',
    explanation: 'The derivational suffix "-వరి" (-vari) derives an agentive noun representing the person performing the action.'
  },
  {
    lang: 'Malayalam',
    nativeName: 'മലയാളം',
    root: 'സ്നേഹം (Love)',
    category: 'Noun',
    derivation: 'സ്നേഹം + -മുള്ള → സ്നേഹമുള്ള (Loving / Affectionate)',
    resultCategory: 'Adjective',
    explanation: 'Suffix "-മുള്ള" (-mulla) attaches to an abstract noun to derive an attributive adjective.'
  },
  {
    lang: 'Hindi',
    nativeName: 'हिन्दी',
    root: 'मानव (Human)',
    category: 'Noun',
    derivation: 'मानव + -ता → मानवता (Humanity)',
    resultCategory: 'Abstract Noun',
    explanation: 'The suffix "-ता" (-taa) is a productive derivational affix turning nouns and adjectives into abstract qualities.'
  }
];

export const FSA_EXAM_WORDS = [
  {
    id: 'a',
    word: 'Minimal',
    root: 'mini / minimum (Noun/Root)',
    affix: '-al (Derivational Adjective Suffix)',
    derivationType: 'Root → Adjective',
    path: ['q0 (Start)', 'q0 → q4 via "-al" [AUGMENTED TRANSITION]', 'q4 (Accepting State: Adjective)'],
    augmented: true,
    augmentedNote: 'Original classroom FSA lacked direct -al branch from q0. Added transition: q0 --al--> q4.',
    verifiedTag: '[VERIFY MY ANSWER]'
  },
  {
    id: 'b',
    word: 'Naturalization',
    root: 'nature (Noun) → natural (Adj) → naturalize (Verb)',
    affix: '-ation (Derivational Noun Suffix)',
    derivationType: 'Adjective → Verb → Noun',
    path: ['q0 (Start: nature)', 'q0 → q4 via "-al" (natural)', 'q4 → q1 via "-ize" (naturalize)', 'q1 → q2 via "-ation" (naturalization: Accepting Noun)'],
    augmented: false,
    augmentedNote: 'Follows standard derivational chain: Noun root to Adjective to Verb to Abstract Noun.',
    verifiedTag: '[VERIFY MY ANSWER]'
  },
  {
    id: 'c',
    word: 'Spontaneousness',
    root: 'spontaneous (Adjective Root)',
    affix: '-ness (Derivational Noun Suffix)',
    derivationType: 'Adjective → Noun',
    path: ['q0 (Start: spontaneous)', 'q0 → q6 via "-ness" [Direct Adjective to Noun transition]', 'q6 (Accepting State: Noun)'],
    augmented: false,
    augmentedNote: 'The suffix -ness productively attaches directly to the adjective base to yield the state noun.',
    verifiedTag: '[VERIFY MY ANSWER]'
  },
  {
    id: 'd',
    word: 'Actually',
    root: 'act (Noun/Verb) → actual (Adj)',
    affix: '-ly (Derivational Adverb Suffix)',
    derivationType: 'Adjective → Adverb',
    path: ['q0 (Start: act)', 'q0 → q4 via "-ual" (actual: Adj)', 'q4 → q7 via "-ly" (actually: Accepting Adverb)'],
    augmented: true,
    augmentedNote: 'Treated "-ual" as allomorph of adjectival "-al" entering q4, then traversed q4 --ly--> q7.',
    verifiedTag: '[VERIFY MY ANSWER]'
  },
  {
    id: 'e',
    word: 'Revolutionary',
    root: 'revolution (Noun)',
    affix: '-ary (Derivational Adjective Suffix)',
    derivationType: 'Noun → Adjective',
    path: ['q0 (Start: revolution)', 'q0 → q8 via "-ary" [AUGMENTED TRANSITION]', 'q8 (Accepting State: Adjective)'],
    augmented: true,
    augmentedNote: 'Original FSA had -ive/-ative for adjectives; augmented with -ary transition q0 --ary--> q8.',
    verifiedTag: '[VERIFY MY ANSWER]'
  }
];
