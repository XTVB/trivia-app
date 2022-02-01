import React, { FC, useEffect, useState } from 'react';
import { useAppDispatch, useTypedSelector } from 'src/redux/store';
import { getCurrentResults, Answer, setTitle } from 'src/redux/SystemState';
import { PATH, getScore, useInterval } from 'src/utils';
import { Collapse } from '@mui/material';
import { push } from 'connected-react-router';
import { TransitionGroup } from 'react-transition-group';
import Button from 'src/components/Button';
import PaperContainer from 'src/components/PaperContainer';
import ResultsRow from 'src/components/ResultsRow';
import useStyles from './ResultsStyles';

const ResultsPage: FC = () => {
  const { classes } = useStyles();
  const dispatch = useAppDispatch();

  const quizResults = useTypedSelector(getCurrentResults);

  // navigate back to home page if results are empty, e.g. because /result was navigated to directly
  useEffect(() => {
    if (quizResults.length < 1) {
      dispatch(push(PATH.HOME));
    } else {
      dispatch(setTitle(`You scored ${getScore(quizResults)}`));
    }
  }, [dispatch, quizResults]);

  // Use interval to add results to DOM one at a time in order to trigger animation correctly
  const [staggeredResults, setStaggeredResults] = useState<Answer[]>([]);
  const [resultIndex, setResultIndex] = useState<number>(0);
  const [delay, setDelay] = useState<number | null>(350);

  useInterval(() => {
    if (resultIndex < quizResults.length) {
      setStaggeredResults((results) => [...results, quizResults[resultIndex]]);
      setResultIndex(resultIndex + 1);
    } else {
      setDelay(null);
    }
  }, delay);

  return (
    <section data-testid="resultsContainer" className={classes.resultsContainer}>
      <PaperContainer className={classes.paperContainer}>
        <TransitionGroup component={null}>
          {staggeredResults.map((result) => (
            <Collapse timeout={350} key={result.question}>
              <ResultsRow result={result} />
            </Collapse>
          ))}
        </TransitionGroup>
      </PaperContainer>
      <Button clickHandler={() => dispatch(push(PATH.HOME))}>Play Again?</Button>
    </section>
  );
};

export default ResultsPage;
