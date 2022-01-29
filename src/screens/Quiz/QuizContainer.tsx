import { push } from 'connected-react-router';
import React, { FC, Fragment, useEffect, useMemo, useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Button from 'src/components/Button';
import FlipCard from 'src/components/FlipCard';
import QuestionCard from 'src/components/QuestionCard';
import QuestionContainer from 'src/components/QuestionContainer';
import { useAppDispatch, useTypedSelector } from 'src/redux/store';
import { getCurrentQuizSetup, Question, Answer, saveResultsAndNavigateToPage, setTitle, QuestionType, QuizSetup } from 'src/redux/SystemState';
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
  }, [questions]);

  const answerCallback = (result: Answer) => {
    const newResults = [...results, result];
    setResults(newResults);
    if (questionNumber < amount) {
      // setQuestionNumber(questionNumber + 1);
      setIsFlipped(true);
    } else {
      dispatch(
        saveResultsAndNavigateToPage({
          type, 
          amount, 
          difficulty, 
          category,
          results: newResults,
        })
      );
    }
  };

  const questionContainers = useMemo(()=> {
    return questions.map((question, index) => {
      return <QuestionContainer key={question.question} question={question} questionType={type} questionNumber={`${index+1}/${amount}`} answerCallback={answerCallback}/>
    });
  }, [questions, questionNumber, amount]);

  const currentFrontQuestion = useMemo(() => {
    return questionNumber <= questionContainers.length ? questionContainers[questionNumber - 1] : undefined;
  }, [questionContainers]);

  const currentBackQuestion = useMemo(() => {
    return questionNumber + 1 <= questionContainers.length ? questionContainers[questionNumber] : undefined;
  }, [questionContainers]);

  return (
    <section className={classes.root}>
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
          <div key={currentFrontQuestion?.key} className={classes.cardSide}>{currentFrontQuestion}</div>
          <div key={currentBackQuestion?.key} className={`${classes.cardSide} ${classes.backSide}`}>{currentBackQuestion}</div>
        </div>
      </CSSTransition>
    </section>
  );
};

export default QuizPage;
