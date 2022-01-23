import { push } from 'connected-react-router';
import React, { FC } from 'react';
import Button from 'src/components/Button';
import PaperContainer from 'src/components/PaperContainer';
import { useAppDispatch, useTypedSelector } from 'src/redux/store';
import { getPastResults } from 'src/redux/SystemState';
import { PATH } from 'src/utils/constants';

import useStyles from './PastResultsStyles';

const PastResultsPage: FC = () => {
  const { classes } = useStyles();
  const dispatch = useAppDispatch();

  const pastResults = useTypedSelector(getPastResults);
  console.log(pastResults);
  return (
    <section className={classes.root}>
      <PaperContainer>
        {pastResults.map((result) => (
          <div key={result.date}>{JSON.stringify(result)}</div>
        ))}
      </PaperContainer>
      <Button clickHandler={() => dispatch(push(PATH.HOME))}>Back</Button>
    </section>
  );
};

export default PastResultsPage;
