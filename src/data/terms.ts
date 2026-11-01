import { TermDefinition } from './types';

export const KEY_TERMS: Record<string, TermDefinition> = {
  tokenization: {
    term: "Tokenization",
    definition: "The process of splitting continuous running text into discrete units (words, punctuation, subwords) called tokens.",
    example: "\"NLP is fun!\" → [\"NLP\", \"is\", \"fun\", \"!\"]"
  },
  morpheme: {
    term: "Morpheme",
    definition: "The smallest meaningful grammatical unit in a language that cannot be divided further without losing its meaning.",
    example: "\"unbreakable\" = un- (prefix) + break (root) + -able (suffix)"
  },
  corpus: {
    term: "Corpus",
    definition: "A structured, curated collection of machine-readable texts used for linguistic analysis, modeling, and statistical testing.",
    example: "A collection of 10,000 Tamil news articles or student query logs."
  },
  fsa: {
    term: "Finite State Automaton (FSA)",
    definition: "A mathematical computational model consisting of a finite set of states, input transitions, a start state, and accepting states.",
    example: "Modeling English derivational word formation: q0 --ize--> q1 --ation--> q2 (accepting)"
  },
  ner: {
    term: "Named Entity Recognition (NER)",
    definition: "A sequence labeling task that locates and categorizes entities in unstructured text into predefined classes (PERSON, ORG, LOC, TIME).",
    example: "\"Dr. Rao visited CMC Vellore on Monday\" → CMC Vellore: LOCATION / HOSPITAL"
  },
  stemming: {
    term: "Stemming",
    definition: "A heuristic rule-based process that chops off suffixes from words to reduce them to a common base form, often creating non-words.",
    example: "\"studies\", \"studying\" → \"studi\""
  },
  lemmatization: {
    term: "Lemmatization",
    definition: "A dictionary and morphological analysis process that reduces inflected words to their canonical base dictionary form (lemma).",
    example: "\"better\" → \"good\", \"ran\" → \"run\""
  },
  pos: {
    term: "Part-of-Speech (POS) Tagging",
    definition: "The task of marking each word in a text with its corresponding grammatical class based on definition and context (Noun, Verb, Adj, etc.).",
    example: "\"Book (Verb) this flight\" vs \"Read this book (Noun)\""
  },
  ngram: {
    term: "N-gram",
    definition: "A contiguous sequence of n items (words, syllables, or characters) extracted from a given sample of text or speech.",
    example: "Bigrams (n=2) in \"I love NLP\": [\"I love\", \"love NLP\"]"
  },
  syntax: {
    term: "Syntax",
    definition: "The grammatical structure and rules that govern how words combine to form valid, well-formed phrases and sentences in a language.",
    example: "Subject + Verb + Object in standard English sentences."
  },
  semantics: {
    term: "Semantics",
    definition: "The study of literal meaning encoded in words, phrases, and sentences independent of contextual nuances.",
    example: "Distinguishing the biological 'apple' from Apple Inc."
  },
  pragmatics: {
    term: "Pragmatics",
    definition: "How context, social conventions, and shared real-world knowledge contribute to intended meaning beyond literal word definitions.",
    example: "\"Can you pass the salt?\" means 'Please pass it', not a question of physical capability."
  }
};
