import React, { FC, Fragment } from 'react';
import { Result, Question } from 'src/redux/SystemState';
import { isDefined } from 'src/utils/utils';
import Button from '../Button';
import Icon from '../Icons';
import useStyles from './ResultsRowStyles';

type ResultsRowProps = {
  result: Result;
};

const ResultsRow: FC<ResultsRowProps> = ({ result: { question, wasCorrect, givenAnswer, correctAnswer } }: ResultsRowProps) => {
  const { classes } = useStyles();

  return (
    <Fragment>
      <div className={`${classes.rootContainer} ${wasCorrect ? classes.correctAnswer : classes.inCorrectAnswer}`}>
        <div className={classes.iconContainer}>
          <Icon name={wasCorrect ? 'plus' : 'minus'} />
        </div>
        <div className={classes.answerContainer}>
          <div className={classes.questionText} dangerouslySetInnerHTML={{ __html: question }} />
          <div className={classes.yourAnswers}>
            <div className={classes.questionText} dangerouslySetInnerHTML={{ __html: `Your answer: ${givenAnswer}` }} />
            {!wasCorrect && <div className={classes.questionText} dangerouslySetInnerHTML={{ __html: `Correct answer: ${correctAnswer}` }} />}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ResultsRow;
