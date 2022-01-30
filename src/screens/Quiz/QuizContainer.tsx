import { push } from 'connected-react-router';
import React, { FC, Fragment, useEffect, useMemo, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import QuestionContainer from 'src/components/QuestionContainer';
import { useAppDispatch, useTypedSelector } from 'src/redux/store';
import { getCurrentQuizSetup, Answer, saveResultsAndNavigateToPage, setTitle } from 'src/redux/SystemState';
import { PATH } from 'src/utils/constants';
import { isDefined } from 'src/utils/utils';

import useStyles from './QuizStyles';

const QuizPage: FC = () => {
  const { classes } = useStyles();
  const dispatch = useAppDispatch();

  const { questions, type, amount, difficulty, category } = useTypedSelector(getCurrentQuizSetup);
  const [isFlipped, setIsFlipped] = useState(false);
  const [questionNumber, setQuestionNumber] = useState<number>(1);
  const [results, setResults] = useState<Answer[]>([]);

  useEffect(() => {
    if (questions.length < 1) {
      // navigate back to home page if questions are empty, e.g. because /quiz was navigated to directly
      dispatch(push(PATH.HOME));
    }
  }, [dispatch, questions]);

  const questionContainers = useMemo(() => {
    return questions.map((question, index) => {
      return {
        question,
        element: (
          <QuestionContainer
            key={question.question}
            question={question}
            questionType={type}
            questionNumber={`${index + 1}/${amount}`}
            answerCallback={(result: Answer) => {
              setResults((results) => [...results, result]);
            }}
          />
        ),
      };
    });
  }, [questions, type, amount]);

  const currentFrontQuestion = useMemo(() => {
    return questionNumber <= questionContainers.length ? questionContainers[questionNumber - 1] : undefined;
  }, [questionNumber, questionContainers]);

  const currentBackQuestion = useMemo(() => {
    return questionNumber + 1 <= questionContainers.length ? questionContainers[questionNumber] : undefined;
  }, [questionNumber, questionContainers]);

  useEffect(() => {
    isDefined(currentFrontQuestion) && dispatch(setTitle(currentFrontQuestion.question.category));
  }, [dispatch, currentFrontQuestion]);

  useEffect(() => {
    if (results.length !== questionNumber) {
      return;
    }
    if (questionNumber < amount) {
      setIsFlipped(true);
    } else {
      dispatch(
        saveResultsAndNavigateToPage({
          type,
          amount,
          difficulty,
          category,
          results,
        })
      );
    }
  }, [questionNumber, results, dispatch, type, amount, difficulty, category]);

  return (
    <Fragment>
      <CSSTransition
        onEntered={() => {
          setQuestionNumber(questionNumber + 1);
          setIsFlipped(false);
        }}
        in={isFlipped}
        timeout={700}
        classNames={{
          enterActive: classes.flipCardActive,
        }}
      >
        <div className={classes.flipCard}>
          <div key={currentFrontQuestion?.element.key} className={classes.cardSide}>
            {currentFrontQuestion?.element}
          </div>
          <div key={currentBackQuestion?.element.key} className={`${classes.cardSide} ${classes.backSide}`}>
            {currentBackQuestion?.element}
          </div>
        </div>
      </CSSTransition>
    </Fragment>
  );
};

export default QuizPage;
