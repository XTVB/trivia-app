import { push } from 'connected-react-router';
import React, { FC, Fragment, useEffect, useState } from 'react';
import QuestionCard from 'src/components/QuestionCard';
import { useAppDispatch, useTypedSelector } from 'src/redux/store';
import { getCurrentQuestions, Question, Result, saveResultsAndNavigateToPage, setTitle } from 'src/redux/SystemState';
import { PATH } from 'src/utils/constants';
import { isDefined } from 'src/utils/utils';

import useStyles from './QuizStyles';

const QuizPage: FC = () => {
  const { classes } = useStyles();
  const dispatch = useAppDispatch();

  const quizQuestions = useTypedSelector(getCurrentQuestions);
  const [currentQuestion, setCurrentQuestion] = useState<Question | undefined>();
  const [questionNumber, setQuestionNumber] = useState<number>(1);
  const [maxQuestionNumber, setMaxQuestionNumber] = useState<number>(10);
  const [results, setResults] = useState<Result[]>([]);

  useEffect(() => {
    if (!isDefined(quizQuestions)) {
      // navigate back to home page if questions don't exist, e.g. because /quiz was navigated to directly
      dispatch(push(PATH.HOME));
    } else {
      setMaxQuestionNumber(quizQuestions.length);
    }
  }, [quizQuestions]);

  useEffect(() => {
    if (!isDefined(quizQuestions)) {
      return;
    }

    const currentQ = quizQuestions[questionNumber - 1];

    setCurrentQuestion(currentQ);
    dispatch(setTitle(currentQ.category));
  }, [quizQuestions, questionNumber]);

  const answerCallback = (result: Result) => {
    const newResults = [...results, result];
    setResults(newResults);
    if (questionNumber < maxQuestionNumber) {
      setQuestionNumber(questionNumber + 1);
    } else {
      dispatch(
        saveResultsAndNavigateToPage({
          difficulty: 'easy',
          amount: maxQuestionNumber,
          type: 'boolean',
          results: newResults,
        })
      );
    }
  };

  return (
    <section className={classes.root}>
      {isDefined(currentQuestion) && (
        <Fragment>
          <QuestionCard question={currentQuestion} answerCallback={answerCallback} />
          <div className={classes.instructions}>
            {questionNumber}/{maxQuestionNumber}
          </div>
        </Fragment>
      )}
    </section>
  );
};

export default QuizPage;
