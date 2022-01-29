import { push } from 'connected-react-router';
import React, { FC, useEffect } from 'react';
import Button from 'src/components/Button';
import PaperContainer from 'src/components/PaperContainer';
import { useAppDispatch } from 'src/redux/store';
import { beginQuiz, setTitle } from 'src/redux/SystemState';
import { PATH } from 'src/utils/constants';
import useStyles from './HomeStyles';

const HomePage: FC = () => {
  const { classes } = useStyles();
  const dispatch = useAppDispatch();

  const launchDefaultQuiz = () => {
    dispatch(
      beginQuiz({
        amount: 10,
        type: 'boolean',
        difficulty: 'hard',
      })
    );
  };

  useEffect(() => {
    dispatch(setTitle('Welcome to the Trivia Challenge'));
  }, []);

  return (
    <main className={classes.container}>
      <PaperContainer className={classes.textContainer}>
        <p>You will be presented with 10 True or False questions.</p>
        <p>Can you score 100%?</p>
      </PaperContainer>
      <section className={classes.buttonContainer}>
        <Button endIcon="right" clickHandler={launchDefaultQuiz}>
          Begin
        </Button>
        <Button endIcon="settings" clickHandler={() => dispatch(push(PATH.CONFIGURE))}>
          Configure
        </Button>
      </section>
    </main>
  );
};

export default HomePage;
