import { PageData, Flashcard } from './types';

export const OWNER_DETAILS = {
  name: "K.Hemashwaran",
  regNo: "23MID0436",
  programme: "Integrated MTech CSE (Data Science)",
  faculty: "Dr. SHARMILA BANU K mam",
  semester: "7",
  courseCode: "CSE3002",
  courseTitle: "Natural Language Processing",
  university: "VIT Vellore",
  academicYear: "Fall Semester 2026-2027",
  evaluation: {
    cat1: "CAT 1 Completed",
    cat2: "CAT 2 Completed",
    fat: "FAT (Upcoming)",
    starsEarned: 5,
  }
};

export const TOTAL_PERIODS = 25;

export const PAGES_DATA: PageData[] = [
  // WING A — ARRIVAL (Periods 1–4)
  {
    id: 1,
    legacyIds: [1],
    wingId: 'A',
    wingTitle: 'Wing A · Arrival',
    title: 'Take Your Seat',
    subtitle: 'Row 3 · prp, VIT Vellore',
    takeaway: 'NLP is about making machines understand human language, not just grammar rules.',
    myTakeawayNote: 'Walking into the prp floor, ready to see language turned into math.',
    cameraTarget: 'front',
    content: [
      "Welcome to my seat in the Natural Language Processing classroom at VIT Vellore.",
      "On the chalkboard in front, the title 'Natural Language Processing' is written in chalk. On the desk are my notebook and my laptop.",
      "This portfolio is my record of the course in 25 periods: what our mam taught us, the topics I learnt in class, the FSA question from CAT 2, and our project, Campus Connect.",
      "Take your seat and flick through the semester."
    ]
  },
  {
    id: 2,
    legacyIds: [2],
    wingId: 'A',
    wingTitle: 'Wing A · Arrival',
    title: 'Welcome Board',
    subtitle: 'Chalkboard Introduction & Course at a Glance',
    takeaway: 'Before taking NLP, I thought it was just regular expressions and keyword search. I learnt that human language is messy and full of context.',
    myTakeawayNote: 'Machines like clean data; people speak in idioms, slang and mixed languages. Bridging that gap is what NLP is about.',
    cameraTarget: 'blackboard',
    content: [
      "I am K.Hemashwaran (Reg. No: 23MID0436), studying Integrated MTech CSE (Data Science) at VIT Vellore. I took Natural Language Processing (CSE3002) under Dr. SHARMILA BANU K mam in Semester 7, Fall Semester 2026-27.",
      "The course covered how computers handle human language: text processing, morphology, POS tagging, n-gram language models, NER and text classification.",
      "CAT 1 and CAT 2 are done, and the FAT is coming up.",
      "Here on the board is a quick view of the course."
    ]
  },
  {
    id: 3,
    legacyIds: [3],
    wingId: 'A',
    wingTitle: 'Wing A · Arrival',
    title: 'Class Diary (Index)',
    subtitle: 'Contents: 25 Periods in 8 Wings',
    takeaway: '25 periods divided into 8 wings. Jump to any wing or go period by period.',
    myTakeawayNote: 'Each entry is a topic or part of the course.',
    cameraTarget: 'diary',
    content: [
      "This diary holds all 25 periods of the portfolio, organised into 8 wings: Arrival, How Our Mam Taught, Concept Notebook, The FSA Problem, Campus Connect Project, Stars & Project Ideas, CAT 2, and Reflection.",
      "Use the guide below to jump to a wing, or move period by period with the arrow keys or the timetable strip at the bottom."
    ]
  },
  {
    id: 4,
    legacyIds: [4],
    wingId: 'A',
    wingTitle: 'Wing A · Arrival',
    title: 'About Me & My Skills',
    subtitle: 'My Background & What I Practised',
    takeaway: 'Combining software with an interest in languages.',
    myTakeawayNote: 'Tools are easy to pick up; understanding ambiguity in language takes patience.',
    cameraTarget: 'desk',
    content: [
      "I am an engineering student at VIT Vellore interested in web development and language technology. Before this course I was comfortable with Python and building web interfaces.",
      "NLP needed a different way of thinking: moving from fixed rules to patterns, ambiguity and meaning. In this course I learnt tokenization with regex, morphology and FSAs, n-gram models, and NER.",
      "What interests me most is NLP for Indian languages, where code-mixing (Tanglish, Hinglish) and long suffix chains make things harder."
    ]
  },

  // WING B — HOW OUR MAM TAUGHT (Periods 5–8)
  {
    id: 5,
    legacyIds: [5],
    wingId: 'B',
    wingTitle: 'Wing B · How Our Mam Taught',
    title: 'Topics & Real Applications',
    subtitle: 'Where What We Learnt Shows Up',
    takeaway: 'Each topic we learnt in class connects to apps we use every day.',
    myTakeawayNote: 'Once you know about morphemes, you start noticing them in autocorrect and search.',
    cameraTarget: 'blackboard',
    content: [
      "Learning each topic in class made me notice where it is used in real life.",
      "Morphology and stemming show up in search and autocorrect; NER in pulling places and dates out of text; text classification in spam filters; and n-gram models in keyboard next-word suggestions."
    ]
  },
  {
    id: 6,
    legacyIds: [6],
    wingId: 'B',
    wingTitle: 'Wing B · How Our Mam Taught',
    title: 'Hands-On Coding in Class',
    subtitle: 'Tokenizing, N-grams & Suffix Rules',
    takeaway: 'We had no separate lab, but mam made us write small pieces of code in class.',
    myTakeawayNote: 'Running the code made each idea clearer than just reading the slides.',
    cameraTarget: 'laptop',
    content: [
      "We didn't have a lab for this course. In class, mam had us write small pieces of code to try out the topics, like tokenizing text and counting n-grams.",
      "Below are simple versions of the kind of code we practised: a regex tokenizer, bigram counts, and a rule-based suffix stripper."
    ]
  },
  {
    id: 7,
    legacyIds: [7],
    wingId: 'B',
    wingTitle: 'Wing B · How Our Mam Taught',
    title: 'Morphology in Our Mother Tongues',
    subtitle: 'Tamil, Telugu, Malayalam, Hindi & English',
    takeaway: 'Looking at suffixes in our own languages made FSA transitions easier to understand.',
    myTakeawayNote: 'Indian languages are agglutinative: one root can take many suffixes. A real test for an FSA.',
    cameraTarget: 'blackboard',
    content: [
      "Our class has students whose mother tongues include Tamil, Telugu, Malayalam and Hindi, which makes it easy to compare how different languages build words.",
      "In Tamil, a root like 'போ' (go) becomes 'போனான்' (he went), 'போவாள்' (she will go), 'போகிறார்கள்' (they are going). In Hindi, 'मानव' (human) + '-ता' gives 'मानवता' (humanity).",
      "Because these languages chain suffixes (root + derivational suffix + plural + case marker), an FSA models them well with sequences of states."
    ]
  },
  {
    id: 8,
    legacyIds: [8],
    wingId: 'B',
    wingTitle: 'Wing B · How Our Mam Taught',
    title: 'The Stars System',
    subtitle: 'How I Earned 5 Stars',
    takeaway: '2 stars for answering questions in class, 3 stars for the NLP application ideas I presented.',
    myTakeawayNote: 'Five stars over the semester, and every one of them was a good push to take part.',
    cameraTarget: 'starthart',
    content: [
      "In Dr. SHARMILA BANU K mam's class, students earned stars for taking part.",
      "I earned 2 stars for answering questions mam asked in class.",
      "Mam also asked us to prepare an idea using an NLP application. I presented Outbreak Radar and a rumour detection idea, and mam gave 3 stars for them."
    ]
  },

  // WING C — MY CONCEPT NOTEBOOK (Periods 9–15)
  {
    id: 9,
    legacyIds: [9],
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
    legacyIds: [10],
    wingId: 'C',
    wingTitle: 'Wing C · My Concept Notebook',
    title: 'Text Processing Basics',
    subtitle: 'Tokenization, Normalization, Stopwords & Regular Expressions',
    takeaway: 'Garbage in, garbage out: a lot of NLP work is cleaning raw text into meaningful tokens.',
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
    legacyIds: [11],
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
    legacyIds: [12],
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
    legacyIds: [13],
    wingId: 'C',
    wingTitle: 'Wing C · My Concept Notebook',
    title: 'N-grams & Language Models',
    subtitle: 'Predicting the Next Word: Unigrams, Bigrams & Trigrams',
    takeaway: 'Language modeling computes the probability distribution of words based on their preceding context.',
    myTakeawayNote: 'Even simple bigram counts can power basic next-word suggestions.',
    cameraTarget: 'laptop',
    content: [
      "An n-gram is a contiguous sequence of n items from a text stream. A unigram is a single word ('natural'), a bigram is a pair ('natural language'), and a trigram is a triplet ('natural language processing').",
      "In classical statistical NLP, we estimate the conditional probability of the next word given the preceding (n-1) words using maximum likelihood estimation over a training corpus: P(w_n | w_1...w_{n-1}) ≈ Count(w_{n-1}, w_n) / Count(w_{n-1}).",
      "While deep neural language models now dominate, n-grams remain the foundation for spell-checking, speech recognition scoring, and fast query auto-completion. Experiment with our mini bigram next-word generator below!"
    ]
  },
  {
    id: 14,
    legacyIds: [14],
    wingId: 'C',
    wingTitle: 'Wing C · My Concept Notebook',
    title: 'NER & Text Classification',
    subtitle: 'Extracting Named Entities & Categorizing Documents',
    takeaway: 'Turning plain text into structured information: places, organisations, times and dates.',
    myTakeawayNote: 'NER is what lets Campus Connect understand which building a student is asking about.',
    cameraTarget: 'wall',
    content: [
      "Named Entity Recognition (NER) scans raw text to identify and classify proper nouns into predefined categories: PERSON, ORGANIZATION, LOCATION, TIME and DATE.",
      "In our campus context, when a student types 'Is the Central Library open till 9 PM on Sunday?', NER picks out 'Central Library' as LOCATION, '9 PM' as TIME, and 'Sunday' as DATE, so the answer can be looked up.",
      "Paired with Text Classification—which categorizes text into intent labels like 'Admissions', 'Hostel Query', or 'Library'—these techniques are the base of question-answering assistants. Try highlighting the entities in the sample sentence below."
    ]
  },
  {
    id: 15,
    legacyIds: [15],
    wingId: 'C',
    wingTitle: 'Wing C · My Concept Notebook',
    title: 'Glossary Flashcards',
    subtitle: '25 Essential NLP Terms',
    takeaway: 'Quick-fire revision deck covering fundamental terminology across all syllabus units.',
    myTakeawayNote: 'Flipping through these cards helped me revise definitions before CAT 2.',
    cameraTarget: 'desk',
    content: [
      "Linguistic and algorithmic terminology can easily blur together during exam revision. Here is my set of 25 flashcards, organized across Basics, Morphology, Syntax, Semantics, and Models & NER.",
      "Click each card to flip and reveal its concise student-friendly definition and concrete example. Mark the ones you've mastered to track your progress with our live counter!"
    ]
  },

  // WING D — THE FSA PROBLEM (Periods 16–17)
  {
    id: 16,
    legacyIds: [16],
    wingId: 'D',
    wingTitle: 'Wing D · The FSA Problem',
    title: 'The Exam Question (CAT 2)',
    subtitle: 'Finite State Automata for English Derivational Morphology',
    takeaway: 'A 10-mark question testing whether a state machine can parse derivational suffixes.',
    myTakeawayNote: 'You have to trace valid paths step by step and spot exactly which transition is missing.',
    cameraTarget: 'exampaper',
    content: [
      "In our CAT 2 exam, Dr. SHARMILA BANU K mam gave this 10-mark question (CO4, Derivational Morphology):",
      "\"Determine the transitions for the following words from the given Finite State Automaton (FSA) of Derivational Morphology. Also, if the given FSA does not include the transition for any of the given words, alter that part of the FSA and present the sequence of transitions.\"",
      "The five words were: a) Minimal, b) Naturalization, c) Spontaneousness, d) Actually, and e) Revolutionary.",
      "To answer it, you had to find the root's category (Noun, Verb, Adjective), follow the derivational suffixes through the states, and add transitions where the FSA was missing a path."
    ]
  },
  {
    id: 17,
    legacyIds: [17],
    wingId: 'D',
    wingTitle: 'Wing D · The FSA Problem',
    title: 'Interactive FSA & Walkthrough',
    subtitle: 'States q0–q11, Step Transitions & Added Edges',
    takeaway: 'Explore the full state machine: accepting states, suffix transitions, and the paths for all 5 words.',
    myTakeawayNote: 'Seeing the states visually turns confusing exam theory into clear logic.',
    cameraTarget: 'wall',
    content: [
      "Here is the English derivational morphology FSA, drawn with interactive states q0 through q11. Accepting states (where a complete, valid word is formed) are drawn as double circles.",
      "Standard transitions cover common paths: q0 (base root) takes '-ize' (V) to reach q1, '-ation' (N) to reach q2, '-able' (A) to reach q3, '-ity' (N) to reach q5, and '-ness' (N) to reach q6.",
      "Select any of the five exam words below to watch its transitions step by step. Where a word needs a new path (such as '-al' turning a root into an adjective), the added transition is highlighted with a short reason."
    ]
  },

  // WING E — PROJECT: CAMPUS CONNECT (Periods 18–20)
  {
    id: 18,
    legacyIds: [19],
    wingId: 'E',
    wingTitle: 'Wing E · Project: Campus Connect',
    title: 'Project Overview: Campus Connect',
    subtitle: 'A Multilingual FAQ & Navigation Guide for VIT Vellore',
    takeaway: 'Answers in 5 languages and one-tap walking directions for students on campus.',
    myTakeawayNote: 'New students get lost looking for TT, SJT or PRP. An assistant that speaks their language helps.',
    cameraTarget: 'poster',
    content: [
      "VIT Vellore is a large campus, building names like SJT, TT, MB and PRP confuse new students, and useful FAQs are spread across circulars and PDFs.",
      "Our course project, Campus Connect, is a student-friendly assistant. Its tagline: 'Your multilingual guide to VIT Vellore: answers in five languages, live opening hours and one-tap walking directions.'",
      "A student can ask in English, Tamil, Telugu, Malayalam or Hindi, and Campus Connect works out what they are asking about and replies in the same language."
    ]
  },
  {
    id: 19,
    legacyIds: [20, 21],
    wingId: 'E',
    wingTitle: 'Wing E · Project: Campus Connect',
    title: 'Screenshots & Features',
    subtitle: 'Real Screens, 11 Topics, Voice & Helplines',
    takeaway: 'Real screenshots of the app, plus everything it can do.',
    myTakeawayNote: 'The app always shows a sample-data notice, so students know to confirm with the VIT office.',
    cameraTarget: 'laptop',
    content: [
      "These are real screenshots of Campus Connect on my phone: the home screen with topic tiles, directions to PRP opened in Google Maps, the helpline answer, the settings drawer, and an answer in Tamil.",
      "Features: five languages with auto-match (English, தமிழ், తెలుగు, മലയാളം, हिन्दी), voice input and spoken replies, an 'I'm currently at' setting with auto-open maps, and 11 topics from Admissions to Health & Safety.",
      "Helpline answers list 112 (all emergencies), 108 (ambulance), 181 (women's helpline) and 1800-180-5522 (anti-ragging), with a reminder that sample data should be confirmed with the official VIT office."
    ]
  },
  {
    id: 20,
    legacyIds: [22],
    wingId: 'E',
    wingTitle: 'Wing E · Project: Campus Connect',
    title: 'Challenges & Lessons',
    subtitle: 'What Was Hard & What I Learnt',
    takeaway: 'Students type casually and mix languages, which breaks rigid matching rules.',
    myTakeawayNote: 'Code-mixing (English with Tamil or Hindi) was the biggest hurdle.',
    cameraTarget: 'desk',
    content: [
      "The biggest challenge was code-mixing. Students rarely ask 'What are the operational hours of the Central Library?'; they type 'library eppo close pannuvanga?' or 'hostel leave process kya hai?'.",
      "Simple rule-based matching struggled with these, so the project needed better ways to match casual and mixed-language questions to the right answer."
    ]
  },

  // WING F — STARS & PROJECT IDEAS (Periods 21–22)
  {
    id: 21,
    legacyIds: [23],
    wingId: 'F',
    wingTitle: 'Wing F · Stars & Project Ideas',
    title: 'The Star Chart: 5 Classroom Stars',
    subtitle: 'Stars From Our Faculty',
    takeaway: 'Two stars for answering questions in class, three stars for my NLP application ideas.',
    myTakeawayNote: 'Five stars over the semester, the best encouragement in the course.',
    cameraTarget: 'starthart',
    content: [
      "In Dr. SHARMILA BANU K mam's class, students earned stars for taking part.",
      "Stars 1 & 2: mam asked questions in class, and I answered two of them.",
      "Stars 3, 4 & 5: mam asked us to prepare an idea using an NLP application. I presented Outbreak Radar and a rumour detection idea, and mam gave 3 stars for them."
    ]
  },
  {
    id: 22,
    legacyIds: [24, 25],
    wingId: 'F',
    wingTitle: 'Wing F · Stars & Project Ideas',
    title: 'My NLP Application Ideas',
    subtitle: 'Rumour Detection & Outbreak Radar',
    takeaway: 'Two ideas I presented in class: rumour detection for health alerts, and Outbreak Radar.',
    myTakeawayNote: 'During a health scare, rumours spread fast. NLP can help sort facts from panic.',
    cameraTarget: 'wall',
    content: [
      "Mam asked us to prepare an idea using an NLP application. I presented two:",
      "Idea 1 — Rumour Detection (Nipah context): find hospital and place names in posts, and sort them into confirmed news, rumours and debunked claims.",
      "Idea 2 — Outbreak Radar: read news reports of fever cases, pick out the town names, and link them with bus routes to show which nearby towns may need to stay alert. These are ideas, not finished systems."
    ]
  },

  // WING G — CAT 2 (Period 23)
  {
    id: 23,
    legacyIds: [26, 27],
    wingId: 'G',
    wingTitle: 'Wing G · CAT 2',
    title: 'The CAT 2 Experience',
    subtitle: 'The Exam & How I Prepared',
    takeaway: 'CAT 2 tested understanding, not memorised definitions. Mam marked my answer to Question 1 as good.',
    myTakeawayNote: 'An exam where you have to add new automaton transitions is scary and fun at once.',
    cameraTarget: 'exampaper',
    content: [
      "CAT 2 tested whether we understood how the topics work. In the derivational morphology question, the FSA was missing transitions for some words, and we had to explain where it blocked and add the right transitions.",
      "Mam marked my answer to Question 1 as good.",
      "To prepare, I drew the state machines by hand and ran small Python examples whenever a rule was confusing."
    ]
  },

  // WING H — REFLECTION (Periods 24–25)
  {
    id: 24,
    legacyIds: [28, 29],
    wingId: 'H',
    wingTitle: 'Wing H · Reflection',
    title: 'Timeline, Reflection & Thank-You',
    subtitle: 'What I Learnt & A Note to Dr. SHARMILA BANU K mam',
    takeaway: 'A semester of turning curiosity about text into real NLP skills.',
    myTakeawayNote: 'To Dr. SHARMILA BANU K mam: thank you for your patience, the stars, and for making a hard subject feel welcoming.',
    cameraTarget: 'blackboard',
    content: [
      "The semester moved from the introduction to NLP, through text processing and hands-on coding in class, to morphology and FSAs, our NLP application ideas, and CAT 2.",
      "Topics I learnt: regex tokenization and text cleaning, morphology and FSAs, n-gram language models, and NER and text classification.",
      "Before this course I took language for granted. Now I notice ambiguity and morphology everywhere. Thank you, Mam, for answering every question, for the stars, and for making CSE3002 a course I enjoyed."
    ]
  },
  {
    id: 25,
    legacyIds: [30],
    wingId: 'H',
    wingTitle: 'Wing H · Reflection',
    title: 'Contact, Credits & Back to My Seat',
    subtitle: 'GitHub, Credits & Classroom Easter Eggs',
    takeaway: 'Thank you for taking a seat in our classroom!',
    myTakeawayNote: 'Click the desk clock to ring the school bell, click the ceiling fan to spin it, or press S to scatter stars!',
    cameraTarget: 'desk',
    content: [
      "Thank you for exploring all 25 periods of 'The Classroom View'. I hope it gives a real feel for how we studied Natural Language Processing at VIT Vellore.",
      "GitHub: github.com/Hemashwaran. This portfolio is built with React, Vite, Tailwind CSS and Framer Motion.",
      "Typography credits: Patrick Hand & Caveat by Google Fonts, DM Sans by Colophon Foundry, JetBrains Mono by JetBrains. Illustrations are inline SVGs.",
      "Before you leave, try the classroom easter eggs: click the wall clock to ring the bell, toggle the ceiling fan, switch between day and evening, or press 'S' to scatter stars."
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
    verifiedTag: ''
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
    verifiedTag: ''
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
    verifiedTag: ''
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
    verifiedTag: ''
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
    verifiedTag: ''
  }
];
