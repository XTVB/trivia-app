import { createSlice } from '@reduxjs/toolkit';
import { SystemState } from './models';
import { setTitle, setAlertMessage, beginQuiz, setCurrentQuestions, setCurrentResults } from './caseReducers';

const initialState: SystemState = {
  title: 'Welcome to the Trivia Challenge!',
  alertMessage: '',
  currentQuestions: undefined,
  currentResults: JSON.parse(
    '[{"question":"Joseph Stalin&#039;s real name was Ioseb Bessarionis dze Dzugashvili.","wasCorrect":false,"givenAnswer":"False","correctAnswer":"True"},{"question":"Throughout the entirety of &quot;Dragon Ball Z&quot;, Goku only kills two characters: a miniboss named Yakon and Kid Buu.","wasCorrect":false,"givenAnswer":"False","correctAnswer":"True"},{"question":"The chemical element Lithium is named after the country of Lithuania.","wasCorrect":true,"givenAnswer":"False","correctAnswer":"False"},{"question":"L&#039;H&ocirc;pital was the mathematician who created the homonymous rule that uses derivatives to evaluate limits with indeterminations.","wasCorrect":true,"givenAnswer":"False","correctAnswer":"False"},{"question":"Pete Townshend&#039;s solo album, &quot;White City: A Novel&quot;, is set in the metropolitan area of Chicago.","wasCorrect":true,"givenAnswer":"False","correctAnswer":"False"},{"question":"Spoon theory is a theory, utilizing &quot;Spoons&quot; as a metaphor for energy they can use in a day.","wasCorrect":false,"givenAnswer":"False","correctAnswer":"True"},{"question":"The two largest ethnic groups of Belgium are Flemish and Walloon. ","wasCorrect":false,"givenAnswer":"False","correctAnswer":"True"},{"question":"Janus was the Roman god of doorways and passageways.","wasCorrect":false,"givenAnswer":"False","correctAnswer":"True"},{"question":"The term &quot;GTO&quot; was originated by Ferrari?","wasCorrect":false,"givenAnswer":"False","correctAnswer":"True"},{"question":"The T-Mobile Sidekick smartphone is a re-branded version of the Danger Hiptop.","wasCorrect":false,"givenAnswer":"False","correctAnswer":"True"}]'
  ),
  pastResults: [],
};

export const systemSlice = createSlice({
  name: 'system',
  initialState,
  reducers: {
    setTitle,
    setAlertMessage,
    beginQuiz,
    setCurrentQuestions,
    setCurrentResults,
  },
});
