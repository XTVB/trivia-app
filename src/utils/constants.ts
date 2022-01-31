import { API_URL } from './envVars';

export enum PATH {
  HOME = '/',
  PAST_RESULT = '/pastResults',
  CONFIGURE = '/configure',
  QUIZ = '/quiz',
  RESULTS = '/result',
}

export const OPEN_TRIVIA_API_URL = `${API_URL}/api.php`;
export const CATEGORY_LIST_URL = `${API_URL}/api_category.php`;
