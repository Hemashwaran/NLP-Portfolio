export interface TermDefinition {
  term: string;
  definition: string;
  example?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Flashcard {
  id: string;
  term: string;
  category: 'Basics' | 'Morphology' | 'Syntax' | 'Semantics' | 'Models & NER';
  definition: string;
  example: string;
}

export interface PageData {
  id: number;
  wingId: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';
  wingTitle: string;
  title: string;
  subtitle: string;
  takeaway: string;
  myTakeawayNote: string;
  cameraTarget: 'front' | 'blackboard' | 'diary' | 'desk' | 'laptop' | 'wall' | 'poster' | 'starthart' | 'exampaper' | 'window';
  content: string[]; // 100-250 words per page
  metaTags?: string[];
  placeholderTags?: string[];
}
