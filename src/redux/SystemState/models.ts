export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
};

export type Answer = {
  question: string;
  wasCorrect: boolean;
  givenAnswer: string;
  correctAnswer: string;
};

export type Difficulty = 'easy' | 'medium' | 'hard';

export type Category = {
  id: number;
  name: string;
};

export type QuestionType = 'boolean' | 'multiple';

export type BaseQuizSetup = {
  questionAmount: number;
  difficulty: Difficulty;
  categoryId: number;
  type: QuestionType;
};
export type QuizSetup = {
  questions: Question[];
} & BaseQuizSetup;

export type PastResult = {
  date: string;
  score: string;
  results: Answer[];
} & BaseQuizSetup;

export interface SystemState {
  title: string;
  alertMessage: string;
  currentQuizSetup: QuizSetup;
  currentResults: Answer[];
  pastResults: PastResult[];
  categoryList: Category[];
}

export type BeginQuizPayload = BaseQuizSetup;

export type StoreResultsPayload = {
  results: Answer[];
} & BaseQuizSetup;

export type FetchQuestionsResponse = {
  response_code: 0 | 1 | 2 | 3 | 4;
  results: Question[];
};
