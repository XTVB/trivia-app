import { all, fork, put, takeEvery } from 'typed-redux-saga';
import { call, select } from 'typed-redux-saga';
import { push } from 'connected-react-router';
import * as triviaApi from 'src/redux/Apis/openTriviaDbApi';
import {
  beginQuiz,
  initiatePastResults,
  PastResult,
  saveResultsAndNavigateToPage,
  setCurrentQuestions,
  getPastResults,
  setCurrentResults,
  setPastResults,
  setAlertMessage,
} from 'src/redux/SystemState';
import { PATH, getScore, isDefined } from 'src/utils';

/***************************** Subroutines ************************************/

function* tryFetchQuestions({ payload }: ReturnType<typeof beginQuiz>) {
  try {
    const data = yield* call(triviaApi.getQuestions, payload);
    yield* put(setCurrentQuestions(data));
    yield* put(push(PATH.QUIZ));
  } catch (error) {
    console.log(error);
    yield* put(setAlertMessage(`Something went wrong`));
  }
}

function* trySaveResults({ payload }: ReturnType<typeof saveResultsAndNavigateToPage>) {
  try {
    const { difficulty, type, category, results } = payload;
    const pastResults = yield* select(getPastResults);
    const newResults: PastResult[] = [
      ...pastResults,
      {
        date: new Date().toISOString(),
        difficulty,
        type,
        score: getScore(results),
        category: isDefined(category) ? category : 'Any',
        results,
      },
    ];
    // In a real production environment this would be sent to the server and saved on a DB, using localStorage for convenience
    localStorage.setItem('userResults', JSON.stringify(newResults));
    yield* put(setPastResults(newResults));
    yield* put(setCurrentResults(results));
    yield* put(push(PATH.RESULTS));
  } catch (error) {
    console.log(error);
    yield* put(setAlertMessage(`Something went wrong`));
  }
}

function* tryInitiatePastResults() {
  try {
    // TODO integrate them with current results in order of date
    const pastResultString = localStorage.getItem('userResults');
    yield* put(setPastResults(isDefined(pastResultString) ? JSON.parse(pastResultString) : []));
  } catch (error) {
    console.log(error);
    yield* put(setAlertMessage(`Something went wrong`));
  }
}
/******************************************************************************/
/******************************* WATCHERS *************************************/
/******************************************************************************/

function* watchBeginQuiz() {
  yield* takeEvery(beginQuiz.type, tryFetchQuestions);
}

function* watchSaveResults() {
  yield* takeEvery(saveResultsAndNavigateToPage.type, trySaveResults);
}

function* watchInitiatePastResults() {
  yield* takeEvery(initiatePastResults.type, tryInitiatePastResults);
}

export default function* rootSaga() {
  yield* all([fork(watchBeginQuiz), fork(watchSaveResults), fork(watchInitiatePastResults)]);
}
