import { push } from 'connected-react-router';
import React, { FC, useEffect } from 'react';
import Button from 'src/components/Button';
import PaperContainer from 'src/components/PaperContainer';
import ResultsRow from 'src/components/ResultsRow';
import { useAppDispatch, useTypedSelector } from 'src/redux/store';
import { getCurrentResults, Answer, setTitle } from 'src/redux/SystemState';
import { PATH } from 'src/utils/constants';
import { getScore, isDefined } from 'src/utils/utils';

import useStyles from './ResultsStyles';

const ResultsPage: FC = () => {
  const { classes } = useStyles();
  const dispatch = useAppDispatch();

  const quizResults = useTypedSelector(getCurrentResults);

  console.log(JSON.stringify(quizResults));

  // navigate back to home page if results are empty, e.g. because /result was navigated to directly
  useEffect(() => {
    if (quizResults.length < 1) {
      dispatch(push(PATH.HOME));
    } else {
      dispatch(setTitle(`You scored ${getScore(quizResults)}`));
    }
  }, quizResults);

  return (
    <section className={classes.root}>
      <PaperContainer>
        {(quizResults || ([] as Answer[])).map((result) => {
          return <ResultsRow key={result.question} result={result} />;
        })}
      </PaperContainer>
      <Button clickHandler={() => dispatch(push(PATH.HOME))}>Play Again?</Button>
    </section>
  );
};

export default ResultsPage;
