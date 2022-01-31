import { all, fork, put, takeEvery } from 'typed-redux-saga';
import { call, select } from 'typed-redux-saga';
import { push } from 'connected-react-router';
import * as triviaApi from 'src/redux/Apis/openTriviaDbApi';
import {
  beginQuiz,
  initiatePastResults,
  PastResult,
  saveResultsAndNavigateToPage,
  setCurrentQuizSetup,
  getPastResults,
  setCurrentResults,
  setPastResults,
  setAlertMessage,
  fetchCategoryList,
  setCategoryList,
} from 'src/redux/SystemState';
import { PATH, getScore, isDefined } from 'src/utils';
import { hideLoading, showLoading } from 'react-redux-loading-bar';

/***************************** Subroutines ************************************/

function* displayErrorCode(code: 1 | 2 | 3 | 4) {
  let alertMessage: string = '';
  switch (code) {
    case 1:
      alertMessage =
        "Could not fetch questions. The API doesn't have enough questions for your query. (Ex. Asking for 50 Questions in a Category that only has 20.)";
      break;
    // Response codes for Session Token and Invalid Parameter mean something has been set up incorrectly
    default:
      alertMessage = 'Something is wrong with the request, please contact an administrator';
      break;
  }
  yield* put(setAlertMessage(alertMessage));
}

function* tryFetchQuestions({ payload }: ReturnType<typeof beginQuiz>) {
  try {
    yield* put(showLoading());
    const { response_code: code, results: questions } = yield* call(triviaApi.getQuestions, payload);

    if (code === 0) {
      yield* put(
        setCurrentQuizSetup({
          ...payload,
          questions,
        })
      );
      yield* put(push(PATH.QUIZ));
    } else {
      yield* displayErrorCode(code);
    }
  } catch (error) {
    console.log(error);
    yield* put(setAlertMessage(`Something went wrong`));
  } finally {
    yield* put(hideLoading());
  }
}

function* trySaveResults({ payload }: ReturnType<typeof saveResultsAndNavigateToPage>) {
  try {
    yield* put(showLoading());
    const { questionAmount, difficulty, type, categoryId, results } = payload;
    const pastResults = yield* select(getPastResults);
    const newResults: PastResult[] = [
      ...pastResults,
      {
        questionAmount,
        date: new Date().toISOString(),
        difficulty,
        type,
        score: getScore(results),
        categoryId,
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
  } finally {
    yield* put(hideLoading());
  }
}

function* tryInitiatePastResults() {
  try {
    yield* put(showLoading());
    // TODO integrate them with current results in order of date
    const pastResultString = localStorage.getItem('userResults');
    yield* put(setPastResults(isDefined(pastResultString) ? JSON.parse(pastResultString) : []));
  } catch (error) {
    console.log(error);
    yield* put(setAlertMessage(`Something went wrong`));
  } finally {
    yield* put(hideLoading());
  }
}

function* tryFetchCategoryList() {
  try {
    yield* put(showLoading());
    const categoryList = yield* call(triviaApi.getCategoryList);
    yield* put(setCategoryList(categoryList));
  } catch (error) {
    console.log(error);
    yield* put(setAlertMessage(`Something went wrong`));
  } finally {
    yield* put(hideLoading());
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

function* watchFetchCategoryList() {
  yield* takeEvery(fetchCategoryList.type, tryFetchCategoryList);
}

export default function* rootSaga() {
  yield* all([fork(watchBeginQuiz), fork(watchSaveResults), fork(watchInitiatePastResults), fork(watchFetchCategoryList)]);
}
