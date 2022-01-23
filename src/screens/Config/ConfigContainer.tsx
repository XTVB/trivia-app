import { push } from 'connected-react-router';
import React, { FC, useEffect } from 'react';
import Button from 'src/components/Button';
import PaperContainer from 'src/components/PaperContainer';
import { useAppDispatch } from 'src/redux/store';
import { beginQuiz, setTitle } from 'src/redux/SystemState';
import { PATH } from 'src/utils/constants';
import useStyles from './ConfigPageStyles';

const ConfigPage: FC = () => {
  const { classes } = useStyles();
  const dispatch = useAppDispatch();

  const launchQuiz = () => {
    dispatch(
      beginQuiz({
        amount: 5,
        type: 'multiple',
        difficulty: 'easy',
      })
    );
  };

  useEffect(() => {
    dispatch(setTitle('Configure Trivia Challenge'));
  }, []);

  return (
    <section className={classes.root}>
      <PaperContainer>
        <p>You will be presented with 10 True or False questions.</p>
        <p>Can you score 100%?</p>
      </PaperContainer>
      <Button clickHandler={() => dispatch(push(PATH.CONFIGURE))}>Back</Button>
      <Button clickHandler={launchQuiz}>Begin</Button>
    </section>
  );
};

export default ConfigPage;
