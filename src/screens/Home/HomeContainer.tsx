import { push } from 'connected-react-router';
import React, { FC, useEffect } from 'react';
import Button from 'src/components/Button';
import ButtonContainer from 'src/components/ButtonContainer';
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
        questionAmount: 10,
        type: 'boolean',
        difficulty: 'hard',
        categoryId: -1,
      })
    );
  };

  useEffect(() => {
    dispatch(setTitle('Welcome to the Trivia Challenge'));
  }, [dispatch]);

  return (
    <main className={classes.container}>
      <PaperContainer className={classes.textContainer}>
        <p>You will be presented with 10 True or False questions.</p>
        <p>Can you score 100%?</p>
      </PaperContainer>
      <ButtonContainer>
        <Button endIcon="right" clickHandler={launchDefaultQuiz}>
          Begin
        </Button>
        <Button endIcon="settings" clickHandler={() => dispatch(push(PATH.CONFIGURE))}>
          Configure
        </Button>
      </ButtonContainer>
    </main>
  );
};

export default HomePage;
