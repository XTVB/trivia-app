import { Answer } from 'src/redux/SystemState';

export function isDefined<T>(val: T | undefined | null): val is T {
  return val !== undefined && val !== null;
}

/* Randomize array in-place using Durstenfeld shuffle algorithm */
export function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

export function getScore(results: Answer[]): string {
  const totalQuestions = results.length;
  const correctAnswers = results.reduce((count, result) => (result.wasCorrect ? count + 1 : count), 0);

  return `${correctAnswers}/${totalQuestions}`;
}
