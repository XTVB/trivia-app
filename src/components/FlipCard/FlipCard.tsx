import React, { FC, useState } from 'react';
import { Answer, Question } from 'src/redux/SystemState';
import QuestionCard from '../QuestionCard';
import useStyles from './FlipCardStyles';
import { CSSTransition } from 'react-transition-group';

type FlipCardProps = {
  question1: Question;
  question2: Question;
  question3: Question;
};

const FlipCard: FC<FlipCardProps> = ({ question1, question2, question3 }: FlipCardProps) => {
  const { classes } = useStyles();

  const [isFlipped, setIsFlipped] = useState(false);
  const [state, setCardState] = useState(0);

  const renderFront = () => {
    switch (state % 3) {
      case 0:
        return <QuestionCard question={question1.question} questionNumber="1/3" />;
      case 1:
        return <QuestionCard question={question2.question} questionNumber="2/3" />;
      case 2:
        return <QuestionCard question={question3.question} questionNumber="3/3" />;
    }
  };

  const renderBack = () => {
    switch (state % 3) {
      case 0:
        return <QuestionCard question={question2.question} questionNumber="2/3" />;
      case 1:
        return <QuestionCard question={question3.question} questionNumber="3/3" />;
      case 2:
        return <QuestionCard question={question1.question} questionNumber="1/3" />;
    }
  };

  return (
    <CSSTransition
      onEntered={() => {
        setCardState((state) => state + 1);
        setIsFlipped(false);
      }}
      in={isFlipped}
      timeout={700}
      classNames={{
        enterActive: classes.flipCardActive,
      }}
    >
      <div className={classes.flipCard} onClick={() => setIsFlipped(true)}>
        <div className={classes.cardSide}>{renderFront()}</div>
        <div className={`${classes.cardSide} ${classes.backSide}`}>{renderBack()}</div>
      </div>
    </CSSTransition>
  );
};

export default FlipCard;
