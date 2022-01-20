import { push } from 'connected-react-router';
import React, { FC, useEffect } from 'react';
import Button from 'src/components/Button';
import PaperContainer from 'src/components/PaperContainer';
import ResultsRow from 'src/components/ResultsRow';
import { useAppDispatch, useTypedSelector } from 'src/redux/store';
import { getCurrentResults, Result, setTitle } from 'src/redux/SystemState';
import { PATH } from 'src/utils/constants';
import { isDefined } from 'src/utils/utils';

import { useStyles } from './ResultsStyles';

const ResultsPage: FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const quizResults = useTypedSelector(getCurrentResults);

  // navigate back to home page if questions don't exist, e.g. because /result was navigated to directly
  useEffect(() => {
    if (!isDefined(quizResults)) {
      dispatch(push(PATH.HOME));
    } else {
      const totalQuestions = quizResults.length;
      const correctAnswers = quizResults.reduce((count, result) => (result.wasCorrect ? count + 1 : count), 0);
      dispatch(setTitle(`You scored ${correctAnswers}/${totalQuestions}`));
    }
  }, quizResults);

  console.log(JSON.stringify(quizResults));

  return (
    <section className={classes.root}>
      <PaperContainer>
        {(quizResults || ([] as Result[])).map((result) => {
          return <ResultsRow result={result} />;
        })}
      </PaperContainer>
      <Button clickHandler={() => dispatch(push(PATH.HOME))}>Play Again?</Button>
    </section>
  );
};

export default ResultsPage;
