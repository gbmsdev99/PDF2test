export type QuestionOption = {
  id: string;
  text: string;
  latex?: string;
};

export type Question = {
  id: string;
  text: string;
  latex?: string;
  options: QuestionOption[];
  correctOptionIndex: number;
  imagePath?: string | null;
};

export type TestSettings = {
  title: string;
  description: string;
  duration: number; // in minutes
  shuffleQuestions: boolean;
  freeNavigation: boolean;
  requireFullscreen: boolean;
};

export type Test = {
  id: string;
  settings: TestSettings;
  questions: Question[];
  createdAt: string;
};

export type TestResult = {
  id: string;
  testId: string;
  testTitle: string;
  totalQuestions: number;
  correctAnswers: number;
  timeTaken: number; // in seconds
  submittedAt: string;
  answers: Record<string, number>; // questionId -> selectedOptionIndex
  violations: number;
};

export enum SecurityViolationType {
  EXIT_FULLSCREEN = 'EXIT_FULLSCREEN',
  TAB_SWITCH = 'TAB_SWITCH',
  COPY_PASTE = 'COPY_PASTE',
  PAGE_RELOAD = 'PAGE_RELOAD',
}

export type SecurityViolation = {
  type: SecurityViolationType;
  timestamp: string;
};