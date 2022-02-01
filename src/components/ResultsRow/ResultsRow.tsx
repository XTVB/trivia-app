import React, { FC } from 'react';
import { Answer } from 'src/redux/SystemState';
import Icon from 'src/components/Icons';
import PaperContainer from 'src/components/PaperContainer';
import useStyles from './ResultsRowStyles';

type ResultsRowProps = {
  result: Answer;
};

const ResultsRow: FC<ResultsRowProps> = ({ result: { question, wasCorrect, givenAnswer, correctAnswer } }: ResultsRowProps) => {
  const { classes } = useStyles();

  return (
    <PaperContainer testId="resultRow" className={`${classes.rootContainer}`}>
      <div className={`${classes.iconContainer} ${wasCorrect ? classes.correctAnswer : classes.inCorrectAnswer}`}>
        <Icon fontSize="large" name={wasCorrect ? 'plus' : 'minus'} />
      </div>
      <div className={classes.answerContainer}>
        <div className={classes.questionText} dangerouslySetInnerHTML={{ __html: question }} />
        <div className={classes.yourAnswers}>
          <div dangerouslySetInnerHTML={{ __html: `Your answer: ${givenAnswer}` }} />
          {!wasCorrect && <div dangerouslySetInnerHTML={{ __html: `Correct answer: ${correctAnswer}` }} />}
        </div>
      </div>
    </PaperContainer>
  );
};

export default ResultsRow;
