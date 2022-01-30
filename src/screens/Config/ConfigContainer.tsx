import { push } from 'connected-react-router';
import React, { FC, useEffect } from 'react';
import Button from 'src/components/Button';
import ButtonContainer from 'src/components/ButtonContainer';
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
  }, [dispatch]);

  return (
    <section className={classes.container}>
      <PaperContainer>
        <p>You will be presented with 10 True or False questions.</p>
        <p>Can you score 100%?</p>
      </PaperContainer>
      <ButtonContainer>
        <Button startIcon="left" clickHandler={() => dispatch(push(PATH.HOME))}>
          Back
        </Button>
        <Button endIcon="right" clickHandler={launchQuiz}>
          Begin
        </Button>
      </ButtonContainer>
    </section>
  );
};

export default ConfigPage;
