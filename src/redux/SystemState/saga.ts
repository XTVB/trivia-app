import { all, fork, put, takeEvery } from 'typed-redux-saga';
import { call, select } from 'typed-redux-saga';
import { AxiosError } from 'axios';
import { beginQuiz, setCurrentQuestions } from './';
import * as triviaApi from '../Apis/openTriviaDbApi';
import { push } from 'connected-react-router';
import { PATH } from 'src/utils/constants';

/***************************** Subroutines ************************************/

function* tryFetchQuestions({ payload }: ReturnType<typeof beginQuiz>) {
  try {
    const data = yield* call(triviaApi.getQuestions, payload);
    yield* put(setCurrentQuestions(data));
    yield* put(push(PATH.QUIZ));
  } catch (error) {}
}
/******************************************************************************/
/******************************* WATCHERS *************************************/
/******************************************************************************/

function* watchBeginQuiz() {
  yield* takeEvery(beginQuiz.type, tryFetchQuestions);
}

export default function* rootSaga() {
  yield* all([fork(watchBeginQuiz)]);
}
