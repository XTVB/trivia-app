import axios from 'axios';
import { CATEGORY_LIST_URL, OPEN_TRIVIA_API_URL } from 'src/utils';
import { BeginQuizPayload, Category, FetchQuestionsResponse } from '../SystemState';

export const getQuestions = async (options: BeginQuizPayload): Promise<FetchQuestionsResponse> => {
  const { questionAmount, categoryId, difficulty, type } = options;

  const response = await axios.get<FetchQuestionsResponse>(OPEN_TRIVIA_API_URL, {
    params: {
      amount: questionAmount,
      category: categoryId === -1 ? undefined : categoryId,
      difficulty,
      type,
    },
  });

  return response.data;
};

export const getCategoryList = async (): Promise<Category[]> => {
  const response = await axios.get<{
    trivia_categories: Category[];
  }>(CATEGORY_LIST_URL);

  const { trivia_categories } = response.data;
  return trivia_categories;
};
