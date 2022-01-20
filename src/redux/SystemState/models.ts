export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
};

export type Result = {
  question: string;
  wasCorrect: boolean;
  givenAnswer: string;
  correctAnswer: string;
};

export type PastResult = {
  date: string;
  difficulty: string;
  type: string;
  score: string;
  category: string;
  results: Result[];
};

export interface SystemState {
  title: string;
  alertMessage: string;
  currentQuestions?: Question[];
  currentResults?: Result[];
  pastResults: PastResult[];
}

export interface BeginQuizPayload {
  amount: number;
  difficulty: 'easy' | 'medium' | 'hard';
  type: 'boolean' | 'multiple';
}
