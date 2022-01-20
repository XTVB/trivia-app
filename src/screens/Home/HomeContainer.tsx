import React, { FC, useEffect } from 'react';
import Button from 'src/components/Button';
import PaperContainer from 'src/components/PaperContainer';
import Paragraph from 'src/components/Paragraph';
import { useAppDispatch } from 'src/redux/store';
import { beginQuiz, setTitle } from 'src/redux/SystemState';
import { useStyles } from './HomeStyles';

const HomePage: FC = () => {
  const classes = useStyles();
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
    <section className={classes.root}>
      <PaperContainer>
        <Paragraph text="You will be presented with 10 True or False questions." />
        <Paragraph text="Can you score 100%?" />
      </PaperContainer>
      <Button clickHandler={launchDefaultQuiz}>Begin</Button>
    </section>
  );
};

export default HomePage;
