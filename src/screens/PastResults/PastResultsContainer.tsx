import { push } from 'connected-react-router';
import React, { FC, useEffect } from 'react';
import Button from 'src/components/Button';
import PaperContainer from 'src/components/PaperContainer';
import PastResultsRow from 'src/components/PastResultsRow';
import { useAppDispatch, useTypedSelector } from 'src/redux/store';
import { getPastResults, setTitle } from 'src/redux/SystemState';
import { PATH } from 'src/utils/constants';

import useStyles from './PastResultsStyles';

const PastResultsPage: FC = () => {
  const { classes } = useStyles();
  const dispatch = useAppDispatch();

  const pastResults = useTypedSelector(getPastResults);

  useEffect(() => {
    dispatch(setTitle('Past Results'));
  }, [dispatch]);

  return (
    <section className={classes.pastResultsContainer}>
      <PaperContainer className={classes.paperContainer}>
        {pastResults.map((result) => (
          <PastResultsRow key={result.date} pastResult={result} />
        ))}
      </PaperContainer>
      <Button startIcon="left" clickHandler={() => dispatch(push(PATH.HOME))}>
        Home
      </Button>
    </section>
  );
};

export default PastResultsPage;
