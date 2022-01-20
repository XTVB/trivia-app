import axios from 'axios';
import { BeginQuizPayload, Question } from '../SystemState';

export const getQuestions = async (options: BeginQuizPayload): Promise<Question[]> => {
  // if (USE_DUMMY) {
  //   return dummyAllDataflows;
  // }
  const response = await axios.get<{
    responseCode: number;
    results: Question[];
  }>('https://opentdb.com/api.php', {
    params: {
      ...options,
    },
  });

  const { results } = response.data;
  return results;
};
